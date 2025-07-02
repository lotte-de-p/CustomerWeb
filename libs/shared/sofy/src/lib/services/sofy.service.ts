import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CustomerBrandEnum, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { Injectable } from '@angular/core';
import { SofyProduct } from '../models/sofy-product';
import { SofyCustomerProductHoldingProduct } from '../models/sofy-customer-product-holding-product';
import { SofyModemDetails } from '../models/sofy-modem-details';
import { SofyRequestProduct } from '../models/request';
import { SalesOfferData } from '../interfaces/sales-offer.interface';
import { CustomerInstallationDetailsInterface } from '../interfaces/installation-details-response.interface';
import { isEmpty } from 'lodash-es';
import { Promotion } from '../models/promotion.model';
import { KeyValuePair } from '../interfaces/key-value.interface';

@Injectable({
  providedIn: 'root',
})
export class SofyService {
  private readonly PARAM_DATE = 'date';

  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly configService: ConfigService,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  // Deprecated,
  // products model is the same as the one used in the response
  // makes no sense to have the exact same model as it's just not the same
  // Use getSalesOffer instead
  public sofyProducts(
    products: SofyProduct[],
    rawCustomerProductHolding: SofyCustomerProductHoldingProduct[],

    targetGroups: Promotion[],
    rawModemDetails: SofyModemDetails[],
    voucherPromo: string,
    campaignCode: string,
    messageGroup: string
  ) {
    const data: SalesOfferData = {
      products: products,
      promotions: targetGroups,
      customerproductholding: rawCustomerProductHolding,
      modemdetails: rawModemDetails,
      voucherpromo: voucherPromo,
      campaigncode: campaignCode,
    };
    return this.doPost(data, messageGroup);
  }

  public getSalesOfferWithOmapiId(products: SofyRequestProduct[] | SofyProduct[], messageGroup: string) {
    const data: SalesOfferData = {
      products: products,
      promotions: [],
      customerproductholding: [],
      modemdetails: [],
    };
    return this.doPost(data, messageGroup);
  }

  public getSalesOffer(
    products: SofyRequestProduct[],
    promotions: Promotion[],
    rawModemDetails: SofyModemDetails[],
    rawCustomerProductHolding: SofyCustomerProductHoldingProduct[],
    voucherPromo: string,
    campaignCode: string,
    messageGroup: string,
    installationDetails?: CustomerInstallationDetailsInterface,
    standaloneOptions?: SofyRequestProduct[]
  ) {
    const data: SalesOfferData = {
      promotions: promotions,
      customerproductholding: rawCustomerProductHolding,
      modemdetails: rawModemDetails,
      voucherpromo: voucherPromo,
      campaigncode: campaignCode,
      customerinstallationdetails: installationDetails,
      products: products,
      standaloneoptions: standaloneOptions,
    };

    if (!isEmpty(this.getDateFromUrl())) {
      (data as unknown as KeyValuePair)['salesofferdate'] = this.getDateFromUrl();
    }

    return this.doPost(data, messageGroup);
  }

  private doPost(data: SalesOfferData, _: string): Observable<unknown> {
    const options = this.getHttpOptions();
    return this.http.post(this.getSofyUrl(), data, options).pipe(
      take(1),
      catchError((error: unknown) => {
        return of(error);
      })
    );
  }

  private getHttpOptions() {
    return {
      headers: this.createHttpHeaders(),
      timeout: 10000,
      cache: true,
    };
  }

  private createHttpHeaders() {
    return {
      'x-alt-referer': this.urlService.getCurrentUrl(),
      'X-Requested-With': 'XMLHttpRequest',
    };
  }

  private getSofyUrl(): string {
    if (this.isBaseCustomer()) {
      return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/base/public/';
    }
    return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/public/';
  }

  isBaseCustomer(): boolean {
    return this.pathCategorisationService.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE;
  }

  private getDateFromUrl(): string {
    return this.urlService.getRequestParamValue(this.PARAM_DATE, '');
  }
}
