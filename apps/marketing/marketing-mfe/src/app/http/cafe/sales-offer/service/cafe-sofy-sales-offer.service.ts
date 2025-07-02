import { Injectable } from '@angular/core';
import { AbstractActionService } from '../../abstract-action.service';
import { Promotion } from '../../promotions/models/promotion.model';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CafeRawCustomerproductholdingService } from '../../raw-customerproduct-holding/services/cafe-raw-customerproductholding.service';
import { PromotionsService } from '../../promotions/services/promotions.service';
import { CacheService, UrlService } from '@telenet/ng-lib-page';
import { CustomerInstallationDetailsInterface } from '../../installation-details/interfaces/installation-details-response.interface';
import { isEmpty } from 'lodash-es';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import {
  SalesOffer,
  SofyCustomerProductHoldingProduct,
  SofyCustomerProductHoldingProductMapper,
  SofyModemDetails,
  CafeRawCustomerproductholdingModel,
  SofyModemDetailsMapper,
  SofyRequestAddress,
  SofyRequestBasket,
  SofyRequestProduct,
  SofyService,
} from '@telenet/ng-lib-sofy';
import { CafeModemDetailsService } from '../../modem-details/services/cafe-modem-details.service';
import { CafeModemDetailsModel } from '../../modem-details/models/cafe-modem-details.model';

export type CalculateSofyBasketFunction = (
  customerProductHolding: SofyCustomerProductHoldingProduct[]
) => SofyRequestBasket;

@Injectable({
  providedIn: 'root',
})
export class CafeSofySalesOfferService extends AbstractActionService {
  private readonly PARAM_CAMPAIGN_ID = 'cid';
  private readonly MESSAGE_GROUP = 'cafe-sofy-sales-offer';
  PRODUCT_CONFIG_MESSAGE_GROUP = 'product-config';
  PRICING_MESSAGE_GROUP = 'pricing';

  usedCph: boolean;

  constructor(
    private readonly sofyService: SofyService,
    private readonly cacheService: CacheService,
    private readonly sofyModemDetailsMapper: SofyModemDetailsMapper,
    private readonly sofyCustomerProductHoldingProductMapper: SofyCustomerProductHoldingProductMapper,
    private readonly rawCustomerproductholdingService: CafeRawCustomerproductholdingService,
    private readonly modemDetailsService: CafeModemDetailsService,
    private readonly promotionsService: PromotionsService,
    private readonly urlService: UrlService,
    private readonly loginService: LoginService
  ) {
    super();
    this.action = 'getSofySalesOffer';
  }

  getSalesOfferWithDefaultInstallAddress(
    messageGroup: string,
    basket: SofyRequestBasket,
    installationDetails?: CustomerInstallationDetailsInterface
  ): Observable<SalesOffer> {
    return this.getSalesOfferWithBasket(messageGroup, basket, true, installationDetails) as Observable<SalesOffer>;
  }

  private getSalesOfferWithBasket(
    messageGroup: string,
    basket: SofyRequestBasket,
    useDefaultInstallAddress: boolean,
    installationDetails?: CustomerInstallationDetailsInterface
  ) {
    return this.getLoginDetails().pipe(
      mergeMap((loginDetails) => {
        return forkJoin({
          promotions: this.fetchPromotions(loginDetails, messageGroup),
          modemDetails: this.fetchModemDetails(loginDetails, messageGroup),
          customerProductHolding: this.fetchCustomerProductHolding(loginDetails, messageGroup),
          campaignCode: this.fetchCampaignCode(basket),
        }).pipe(
          mergeMap(({ promotions, modemDetails, customerProductHolding, campaignCode }) => {
            const computedBasket: SofyRequestBasket = this.computeBasket(
              basket,
              customerProductHolding,
              useDefaultInstallAddress
            );

            return this.sofyService.getSalesOffer(
              computedBasket.products || [],
              promotions,
              modemDetails,
              customerProductHolding,
              '',
              campaignCode || '',
              messageGroup,
              installationDetails,
              computedBasket.standaloneOptions
            );
          })
        );
      })
    );
  }

  private getLoginDetails(): Observable<LoginDetails> {
    const observable$ = this.loginService.getLoginDetails().pipe(catchError((_error) => of(new LoginDetails(0))));

    return this.getCachedResponse('logindetails', observable$);
  }

  private fetchCampaignCode(basket: SofyRequestBasket) {
    return !isEmpty(basket.campaignCode) ? of(basket.campaignCode) : this.getUrlParam(this.PARAM_CAMPAIGN_ID);
  }

  private computeBasket(
    basket: CalculateSofyBasketFunction | SofyRequestBasket,
    customerProductHolding: SofyCustomerProductHoldingProduct[],
    useDefaultInstallAddress: boolean
  ): SofyRequestBasket {
    if (basket instanceof Function) {
      return basket(customerProductHolding);
    }

    if (customerProductHolding && customerProductHolding.length > 0 && useDefaultInstallAddress) {
      return this.enrichBasketWithInstallationAddress(basket, customerProductHolding);
    }

    return basket;
  }

  private fetchPromotions(loginDetails: LoginDetails, messageGroup: string): Observable<Promotion[]> {
    return loginDetails.isNotLoggedInOrDoesNotHaveScope('promotions')
      ? of([])
      : this.getCachedResponse(
          'sofy-promotions',
          this.getPromotionsObservable(messageGroup).pipe(catchError((_error) => of([])))
        );
  }

  private getPromotionsObservable(messageGroup: string): Observable<Promotion[]> {
    return this.useOcapiAdaptor(messageGroup)
      ? this.promotionsService.getPromotionsAdaptor(this.MESSAGE_GROUP)
      : this.promotionsService.getPromotions(this.MESSAGE_GROUP);
  }

  private fetchModemDetails(loginDetails: LoginDetails, messageGroup: string): Observable<SofyModemDetails[]> {
    return loginDetails.isNotLoggedInOrDoesNotHaveScope('modemdetails')
      ? of([])
      : this.getCachedResponse(
          'sofy-modem-details',
          this.getModemDetailsObservable(messageGroup).pipe(
            map((response) => this.sofyModemDetailsMapper.mapSofyModemDetails(response)),
            catchError((_error) => of([]))
          )
        );
  }

  private getModemDetailsObservable(messageGroup: string): Observable<CafeModemDetailsModel> {
    return this.useOcapiAdaptor(messageGroup)
      ? this.modemDetailsService.getModemDetailsAdaptor(this.MESSAGE_GROUP)
      : this.modemDetailsService.getModemDetails(this.MESSAGE_GROUP);
  }

  private fetchCustomerProductHolding(
    loginDetails: LoginDetails,
    messageGroup: string
  ): Observable<SofyCustomerProductHoldingProduct[]> {
    if (loginDetails.isNotLoggedInOrDoesNotHaveScope('customerproductholding')) {
      this.usedCph = false;
      return of([]);
    }

    const observable$: Observable<SofyCustomerProductHoldingProduct[]> = this.getCustomerProductHoldingObservable(
      messageGroup
    ).pipe(
      map((response) =>
        this.sofyCustomerProductHoldingProductMapper.mapToSofyCustomerProductHoldingProduct(
          response as CafeRawCustomerproductholdingModel[]
        )
      ),
      catchError((_error) => of([]))
    );

    this.usedCph = true;
    return this.getCachedResponse('sofy-customer-product-holding', observable$);
  }

  private getCustomerProductHoldingObservable(messageGroup: string) {
    return this.useOcapiAdaptor(messageGroup)
      ? this.rawCustomerproductholdingService.getRawCustomerProductHoldingAdaptor(this.MESSAGE_GROUP)
      : this.rawCustomerproductholdingService.getRawCustomerProductHolding(this.MESSAGE_GROUP);
  }

  private useOcapiAdaptor(messageGroup: string): boolean {
    return messageGroup === this.PRODUCT_CONFIG_MESSAGE_GROUP || messageGroup === this.PRICING_MESSAGE_GROUP;
  }

  private getCachedResponse<T>(key: string, observable$: Observable<T>): Observable<T> {
    if (!this.cacheService.get(key)) {
      this.cacheService.add(key, observable$);
    }

    return this.cacheService.get(key);
  }

  private getUrlParam(key: string): Observable<string> {
    return of(this.urlService.getRequestParamValue(key, ''));
  }

  private enrichBasketWithInstallationAddress(
    basket: SofyRequestBasket,
    customerProductHolding: SofyCustomerProductHoldingProduct[]
  ): SofyRequestBasket {
    const customerAddress = customerProductHolding[0].address;
    const installationAddress = {
      addressid: customerAddress.addressid,
      housenr: customerAddress.housenr,
      street: customerAddress.street,
      country: customerAddress.country,
      municipality: customerAddress.municipality,
      postalcode: customerAddress.postalcode,
    } as SofyRequestAddress;

    this.setInstallAddressOnProduct(basket.products, installationAddress);
    this.setInstallAddressOnProduct(basket.standaloneOptions, installationAddress);

    return basket;
  }

  private setInstallAddressOnProduct(products: SofyRequestProduct[] | undefined, address: SofyRequestAddress) {
    if (products) {
      products.forEach((product) => (product.installationaddress = address));
    }
  }
}
