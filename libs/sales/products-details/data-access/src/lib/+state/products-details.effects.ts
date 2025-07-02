import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  initEffects,
  navigateToHumanCheckout,
  navigateToSalesCheckout,
  order,
  updateCustomerProductHolding,
  updateLoginDetails,
  updateOffers,
  updateProducts,
  updatePromotions,
  updateSalesOffer,
} from './products-details.actions';
import { Action, Store } from '@ngrx/store';
import { JsonUrlService, UrlParam, UrlService } from '@telenet/ng-lib-page';
import { catchError, filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Offer,
  Product,
  ProductService,
  ProductUtils,
  Promotion,
  PromotionService,
  SalesData,
  SalesOffer,
} from '@sales/shared/data-access';
import { combineLatest, of } from 'rxjs';
import { ProductsDetailsSlice } from './products-details.reducers';
import {
  selectCustomerProductHolding,
  selectHumanCheckoutUrl,
  selectIsDarwinUser,
  selectOffers,
  selectProducts,
  selectPromotions,
  selectSalesCheckoutUrl,
} from './products-details.selectors';
import { SalesOfferService } from '../infrastructure/sales-offer.service';
import { SalesOfferRequest } from '../infrastructure/sales-offer-request.interface';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<ProductsDetailsSlice>,
    private readonly loginService: LoginService,
    private readonly promotionService: PromotionService,
    private readonly customerProductHoldingService: CustomerProductHoldingService,
    private readonly urlService: UrlService,
    private readonly jsonUrlService: JsonUrlService,
    private readonly productService: ProductService,
    private readonly salesOfferService: SalesOfferService
  ) {}

  onInitEffectsUpdateLoginDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEffects),
      mergeMap(() =>
        this.loginService.getLoginDetails().pipe(
          map((loginDetails: LoginDetails) =>
            updateLoginDetails({ loginDetails: loginDetails.httpStatus === 401 ? null : loginDetails })
          ),
          catchError(() => of(updateLoginDetails({ loginDetails: null })))
        )
      )
    )
  );

  onUpdateLoginDetailsUpdatePromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLoginDetails),
      mergeMap(() =>
        this.store.select(selectIsDarwinUser).pipe(
          take(1),
          switchMap((isDarwinUser: boolean) => (isDarwinUser ? this.promotionService.getPromotions() : of([]))),
          catchError(() => of([])),
          map((promotions: Promotion[]) => updatePromotions({ promotions }))
        )
      )
    )
  );

  onUpdateLoginDetailsUpdateCustomerProductHolding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLoginDetails),
      mergeMap(() =>
        this.store.select(selectIsDarwinUser).pipe(
          take(1),
          switchMap((isDarwinUser: boolean) =>
            isDarwinUser ? this.customerProductHoldingService.getCustomerProductHolding() : of([])
          ),
          catchError(() => of([])),
          map((customerProductHolding: CustomerProductHolding[]) =>
            updateCustomerProductHolding({ customerProductHolding })
          )
        )
      )
    )
  );

  updateOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEffects),
      map(() => this.urlService.getParameterByName('sdata') ?? ''),
      mergeMap((sdata: string) =>
        this.jsonUrlService.decompress(sdata).pipe(
          take(1),
          map((salesData: unknown) => salesData as SalesData),
          map((salesData: SalesData) => salesData.offers),
          map((offers: Offer[]) => updateOffers({ offers }))
        )
      )
    )
  );

  updateProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOffers),
      mergeMap(() => this.store.select(selectOffers).pipe(take(1))),
      mergeMap((offers: Offer[]) =>
        this.productService.getProducts({ offers }).pipe(
          take(1),
          map((products: Product[]) => updateProducts({ products }))
        )
      )
    )
  );

  updateSalesOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOffers),
      mergeMap(() =>
        combineLatest([
          this.store.select(selectOffers),
          this.store
            .select(selectPromotions)
            .pipe(filter((promotions: Promotion[] | null): promotions is Promotion[] => promotions !== null)),
          this.store
            .select(selectCustomerProductHolding)
            .pipe(
              filter(
                (
                  customerProductHolding: CustomerProductHolding[] | null
                ): customerProductHolding is CustomerProductHolding[] => customerProductHolding !== null
              )
            ),
        ]).pipe(
          take(1),
          map(
            ([offers, promotions, customerProductHolding]: [
              Offer[],
              Promotion[],
              CustomerProductHolding[],
            ]): SalesOfferRequest => ({
              offers,
              promotions,
              customerProductHolding,
            })
          ),
          mergeMap((salesOfferRequest: SalesOfferRequest) => this.salesOfferService.getSalesOffer(salesOfferRequest)),
          map((salesOffer: SalesOffer) => updateSalesOffer({ salesOffer }))
        )
      )
    )
  );

  order$ = createEffect(() =>
    this.actions$.pipe(
      ofType(order),
      mergeMap(() =>
        this.store.select(selectOffers).pipe(
          take(1),
          map((offers: Offer[]) => (offers.length === 1 ? navigateToSalesCheckout() : navigateToHumanCheckout()))
        )
      )
    )
  );

  navigateToSalesCheckout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToSalesCheckout),
        mergeMap(() =>
          this.store.select(selectOffers).pipe(
            take(1),
            map((offers: Offer[]): SalesData => ({ offers }))
          )
        ),
        mergeMap((salesData: SalesData) =>
          combineLatest([this.store.select(selectSalesCheckoutUrl), this.jsonUrlService.compress(salesData)]).pipe(
            take(1),
            map(([salesCheckoutUrl, sdata]: [string, string]) =>
              this.urlService.getUrlWithParams(salesCheckoutUrl, [new UrlParam('sdata', sdata)])
            ),
            tap((url: string) => this.urlService.redirectTo(url))
          )
        )
      ),
    { dispatch: false }
  );

  navigateToHumanCheckout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToHumanCheckout),
        mergeMap(() =>
          combineLatest([this.store.select(selectHumanCheckoutUrl), this.store.select(selectProducts)]).pipe(
            take(1),
            map(([humanCheckoutUrl, products]: [string, Product[]]) =>
              this.createHumanCheckoutUrl(humanCheckoutUrl, products)
            ),
            tap((url: string) => this.urlService.redirectTo(url))
          )
        )
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return initEffects();
  }

  private createHumanCheckoutUrl(url: string, products: Product[]): string {
    const fieldSelectedProduct: string = ProductUtils.createFieldSelectedProduct(products);

    return this.urlService.getUrlWithParams(url, [new UrlParam('field_selected_product', fieldSelectedProduct)]);
  }
}
