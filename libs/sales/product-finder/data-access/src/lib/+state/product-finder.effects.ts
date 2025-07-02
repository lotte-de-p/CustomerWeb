import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ProductFinderSlice, ProductFinderState } from '../+state/product-finder.reducers';
import {
  backupCurrentState,
  getProductRecommendations,
  getProductRecommendationsSuccess,
  handleNumberOfSimsChanged,
  handlePreferenceChanged,
  initEffects,
  navigateToHumanCheckout,
  navigateToOneConfigurator,
  navigateToProductsDetails,
  navigateToSalesCheckout,
  order,
  resetStateToInitialState,
  resultDetails,
  updateCustomerProductHolding,
  updateHousehold,
  updateInternetUsage,
  updateLoginDetails,
  updateMobileUsage,
  updateNumberOfSims,
  updateOnMobileDevice,
  updatePromotions,
  updateTvChannels,
  updateTvExperience,
} from './product-finder.actions';
import { catchError, filter, finalize, map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import {
  selectCustomerProductHolding,
  selectHousehold,
  selectHumanCheckoutUrl,
  selectInternetUsage,
  selectIsDarwinUser,
  selectLastKnownState,
  selectMobileLines,
  selectNumberOfSims,
  selectOneConfiguratorUrl,
  selectOnMobileDevice,
  selectPreference,
  selectProductRecommendationByIndex,
  selectProductsDetailsUrl,
  selectPromotions,
  selectSalesCheckoutUrl,
  selectTvChannels,
  selectTvExperience,
} from '../+state/product-finder.selectors';
import { MobileLine } from '../entities/mobile-usage/mobile.usage.interface';
import { combineLatest, of } from 'rxjs';
import { goToNextStep, redoTest } from './stepper/product-finder-stepper.actions';
import { Preference } from '../entities/preference/preference.interface';
import { ProductRecommendationService } from '../infrastructure/results-screen/product-recommendation.service';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { ProductRecommendationsRequest } from '../infrastructure/results-screen/product-recommendations-request.interface';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { DeviceDetectorService } from 'ngx-device-detector';
import { JsonUrlService, LoaderService, UrlParam, UrlService } from '@telenet/ng-lib-page';
import { ProductRecommendation } from '../entities/results-screen/product-recommendation.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Offer,
  Product,
  ProductUtils,
  Promotion,
  PromotionService,
  SalesData,
} from '@sales/shared/data-access';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';

@Injectable({
  providedIn: 'root',
})
export class ProductFinderEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<ProductFinderSlice>,
    private readonly deviceDetectorService: DeviceDetectorService,
    private readonly loginService: LoginService,
    private readonly loaderService: LoaderService,
    private readonly promotionService: PromotionService,
    private readonly customerProductHoldingService: CustomerProductHoldingService,
    private readonly productRecommendationService: ProductRecommendationService,
    private readonly urlService: UrlService,
    private readonly jsonUrlService: JsonUrlService
  ) {}

  onInitEffectsUpdateOnMobileDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEffects),
      map(() => this.deviceDetectorService.isMobile()),
      map((onMobileDevice: boolean) => updateOnMobileDevice({ onMobileDevice }))
    )
  );

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

  backupCurrentState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToNextStep),
      map(() => backupCurrentState())
    )
  );

  checkIfPreferenceChanged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToNextStep),
      mergeMap(() =>
        combineLatest([this.store.select(selectPreference), this.store.select(selectLastKnownState)]).pipe(
          take(1),
          map(([preference, lastKnownState]: [Preference, Partial<ProductFinderState>]) =>
            Object.fromEntries(
              Object.entries(preference).filter(
                ([key, val]) => lastKnownState.preference?.[key as keyof Preference] !== val
              )
            )
          ),
          filter((preference: Partial<Preference>) => Object.keys(preference).length !== 0),
          map((preference: Partial<Preference>) => handlePreferenceChanged({ preference: preference }))
        )
      )
    )
  );

  checkIfNumberOfSimsChanged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToNextStep),
      mergeMap(() =>
        combineLatest([this.store.select(selectNumberOfSims), this.store.select(selectLastKnownState)]).pipe(
          take(1),
          filter(
            ([numberOfSims, lastKnownState]: [number | null, Partial<ProductFinderState>]) =>
              numberOfSims !== lastKnownState.numberOfSims
          ),
          map(([numberOfSims]: [number | null, Partial<ProductFinderState>]) =>
            handleNumberOfSimsChanged({ numberOfSims: numberOfSims })
          )
        )
      )
    )
  );

  updateHouseholdBasedOnPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handlePreferenceChanged),
      map((action) => action.preference),
      filter((preference: Partial<Preference>) => preference.surfing !== undefined),
      map((preference: Partial<Preference>) =>
        updateHousehold({ household: preference.surfing ? { adults: 1, teens: 0, children: 0 } : null })
      )
    )
  );

  updateInternetUsageBasedOnPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handlePreferenceChanged),
      map((action) => action.preference),
      filter((preference: Partial<Preference>) => preference.surfing !== undefined),
      map((preference: Partial<Preference>) =>
        updateInternetUsage({ internetUsage: preference.surfing ? { selection: [] } : null })
      )
    )
  );

  updateNumberOfSimsBasedOnPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handlePreferenceChanged),
      map((action) => action.preference),
      filter((preference: Partial<Preference>) => preference.mobile !== undefined),
      map((preference: Partial<Preference>) => updateNumberOfSims({ numberOfSims: preference.mobile ? 1 : null }))
    )
  );

  updateMobileUsageBasedOnNumberOfSims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handleNumberOfSimsChanged),
      map((action) => action.numberOfSims),
      withLatestFrom(this.store.select(selectMobileLines), this.store.select(selectOnMobileDevice)),
      map(([numberOfSims, mobileLines, onMobileDevice]: [number | null, MobileLine[], boolean]) =>
        updateMobileUsage({
          mobileUsage:
            numberOfSims !== null
              ? {
                  mobileLines: Array(numberOfSims)
                    .fill(undefined)
                    .map(
                      (_, index) =>
                        mobileLines[index] || {
                          selection: [],
                          collapsed: index !== 0 || onMobileDevice,
                          error: null,
                        }
                    ),
                }
              : null,
        })
      )
    )
  );

  updateTvChannelsBasedOnPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handlePreferenceChanged),
      map((action) => action.preference),
      filter((preference: Partial<Preference>) => preference.watchTv !== undefined),
      map((preference: Partial<Preference>) =>
        updateTvChannels({ tvChannels: preference.watchTv ? { selection: [] } : null })
      )
    )
  );

  updateTvExperienceBasedOnPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handlePreferenceChanged),
      map((action) => action.preference),
      filter((preference: Partial<Preference>) => preference.watchTv !== undefined),
      map((preference: Partial<Preference>) =>
        updateTvExperience({ tvExperience: preference.watchTv ? { selection: [] } : null })
      )
    )
  );

  getProductRecommendations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductRecommendations),
      tap(() => this.loaderService.start()),
      mergeMap(() =>
        combineLatest([
          this.store.select(selectPreference),
          this.store.select(selectHousehold),
          this.store.select(selectInternetUsage),
          this.store.select(selectMobileLines),
          this.store.select(selectTvChannels),
          this.store.select(selectTvExperience),
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
            ([
              preference,
              household,
              internetUsage,
              mobileLines,
              tvChannels,
              tvExperience,
              promotions,
              customerProductHolding,
            ]: [
              Preference,
              Household | null,
              InternetUsage | null,
              MobileLine[],
              TvChannels | null,
              TvExperience | null,
              promotions: Promotion[],
              customerProductHolding: CustomerProductHolding[],
            ]): ProductRecommendationsRequest => ({
              household,
              internetUsages: internetUsage === null ? null : internetUsage.selection,
              mobileLines: mobileLines.map((mobileLine: MobileLine) => ({
                mobileUsages: mobileLine.selection,
              })),
              tvChannels: tvChannels === null ? null : tvChannels.selection,
              tvExperiences: tvExperience === null ? null : tvExperience.selection,
              fixedTelephone: preference.fixedLine,
              promotions,
              customerProductHolding,
            })
          )
        )
      ),
      switchMap((productRecommendationsRequest: ProductRecommendationsRequest) =>
        this.productRecommendationService.getProductRecommendations(productRecommendationsRequest).pipe(
          map((productRecommendationResult: ProductRecommendationResult) =>
            getProductRecommendationsSuccess({ productRecommendationResult: productRecommendationResult })
          ),
          finalize(() => this.loaderService.stop())
        )
      )
    )
  );

  resetStateToInitialStateOnRedoTest = createEffect(() =>
    this.actions$.pipe(
      ofType(redoTest),
      map(() => resetStateToInitialState())
    )
  );

  order$ = createEffect(() =>
    this.actions$.pipe(
      ofType(order),
      map((action) => action.index),
      mergeMap((index: number) =>
        this.store.select(selectProductRecommendationByIndex(index)).pipe(
          take(1),
          filter(
            (
              productRecommendation: ProductRecommendation | undefined
            ): productRecommendation is ProductRecommendation => productRecommendation !== undefined
          ),
          map((productRecommendation: ProductRecommendation) =>
            productRecommendation.offers.length === 1
              ? navigateToSalesCheckout({ productRecommendation })
              : navigateToHumanCheckout({ productRecommendation })
          )
        )
      )
    )
  );

  navigateToSalesCheckout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToSalesCheckout),
        map((action) => action.productRecommendation),
        map((productRecommendation: ProductRecommendation) => productRecommendation.offers),
        map((offers: Offer[]): SalesData => ({ offers })),
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
        map((action) => action.productRecommendation),
        mergeMap((productRecommendation: ProductRecommendation) =>
          this.store.select(selectHumanCheckoutUrl).pipe(
            take(1),
            map((url: string) => this.createHumanCheckoutUrl(url, productRecommendation)),
            tap((humanCheckoutUrl: string) => this.urlService.redirectTo(humanCheckoutUrl))
          )
        )
      ),
    { dispatch: false }
  );

  resultDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resultDetails),
      map((action) => action.index),
      mergeMap((index: number) =>
        this.store.select(selectProductRecommendationByIndex(index)).pipe(
          take(1),
          filter(
            (
              productRecommendation: ProductRecommendation | undefined
            ): productRecommendation is ProductRecommendation => productRecommendation !== undefined
          ),
          map((productRecommendation: ProductRecommendation) =>
            productRecommendation.products
              .map((product: Product) => product.omapiProduct)
              .some((omapiProduct: OmapiProduct) => omapiProduct.isConnect5())
              ? navigateToOneConfigurator({ productRecommendation })
              : navigateToProductsDetails({ productRecommendation })
          )
        )
      )
    )
  );

  navigateToOneConfigurator$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToOneConfigurator),
        map((action) => action.productRecommendation),
        map((productRecommendation: ProductRecommendation) => productRecommendation.offers),
        map((offers: Offer[]): SalesData => ({ offers })),
        mergeMap((salesData: SalesData) =>
          combineLatest([this.store.select(selectOneConfiguratorUrl), this.jsonUrlService.compress(salesData)]).pipe(
            take(1),
            map(([oneConfiguratorUrl, sdata]: [string, string]) =>
              this.urlService.getUrlWithParams(oneConfiguratorUrl, [new UrlParam('sdata', sdata)])
            ),
            tap((url: string) => this.urlService.openNewTab(url))
          )
        )
      ),
    { dispatch: false }
  );

  navigateToProductsDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigateToProductsDetails),
        map((action) => action.productRecommendation),
        map((productRecommendation: ProductRecommendation) => productRecommendation.offers),
        map((offers: Offer[]): SalesData => ({ offers })),
        mergeMap((salesData: SalesData) =>
          combineLatest([this.store.select(selectProductsDetailsUrl), this.jsonUrlService.compress(salesData)]).pipe(
            take(1),
            map(([productsDetailsUrl, sdata]: [string, string]) =>
              this.urlService.getUrlWithParams(productsDetailsUrl, [new UrlParam('sdata', sdata)])
            ),
            tap((url: string) => this.urlService.openNewTab(url))
          )
        )
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return initEffects();
  }

  private createHumanCheckoutUrl(url: string, productRecommendation: ProductRecommendation): string {
    const fieldSelectedProduct: string = ProductUtils.createFieldSelectedProduct(productRecommendation.products);

    return this.urlService.getUrlWithParams(url, [new UrlParam('field_selected_product', fieldSelectedProduct)]);
  }
}
