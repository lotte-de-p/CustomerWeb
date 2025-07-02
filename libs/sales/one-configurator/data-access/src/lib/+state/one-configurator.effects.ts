import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, concatMap, map, take, tap, withLatestFrom } from 'rxjs/operators';
import {
  addSim,
  init,
  prefill,
  removeSim,
  setCustomerProductHolding,
  setLoginDetails,
  setPromotions,
  updateEntertainmentPacks,
  updateEntertainmentProduct,
  updateOptins,
  updatePriceAfterChangingOneSimToLimited,
  updatePriceAfterChangingOneSimToUnlimited,
  updateStreamingServices,
  updateTier,
  updateUsageType,
} from './one-configurator.actions';
import { MessageBusService } from '@telenet/ng-lib-personalisation';
import { Action, Store } from '@ngrx/store';
import { OneConfiguratorSlice } from './one-configurator.reducers';
import {
  selectCustomerProductHolding,
  selectIsDarwinUser,
  selectOptinsState,
  selectPromotions,
  selectSimsState,
  selectTierState,
  selectTvState,
} from './one-configurator.selectors';
import { Price, SimConfiguration, SimsState } from '../entities/sims/sims-state.interface';
import { UsageTypeEnum } from '../entities/sims/usage-type.enum';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { TierState } from '../entities/tier/tier-state.interface';
import { OptinsState } from '../entities/optins/optins-state.interface';
import { TvState } from '../entities/tv/tv-state.interface';
import { OmapiFamily, OmapiFamilyService, OmapiFamilyTier, OmapiProductInfo } from '@telenet/ng-lib-omapi';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Promotion,
  PromotionService,
} from '@sales/shared/data-access';
import { ProductRequest, SalesOfferRequest } from '../entities/sales-offer/sales-offer-request';
import { SalesOfferService } from '../infrastructure/sales-offer/sales-offer.service';
import {
  SalesOffer,
  SalesOfferProduct,
  SalesOfferProductOption,
  SalesOfferProductStreamingService,
} from '../entities/sales-offer/sales-offer';
import { UrlService } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class OneConfiguratorEffects implements OnInitEffects {
  readonly MESSAGE_GROUP = 'ONE configurator';
  readonly ONE_FAMILY = 'connect5-nc';
  readonly QUERY_PARAM_CAMPAIGN_ID = 'cid';

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<OneConfiguratorSlice>,
    private readonly userDetailsService: UserDetailsService,
    private readonly customerProductHoldingService: CustomerProductHoldingService,
    private readonly promotionService: PromotionService,
    private readonly salesOfferService: SalesOfferService,
    private readonly urlService: UrlService,
    private readonly omapiFamilyService: OmapiFamilyService,
    private readonly messageBusService: MessageBusService
  ) {}

  setLoginDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      concatMap(() =>
        this.userDetailsService.getUserDetails().pipe(
          catchError(() => of(null)),
          map((loginDetails: LoginDetails | null) =>
            setLoginDetails({ loginDetails: loginDetails?.httpStatus !== 401 ? loginDetails : null })
          )
        )
      )
    )
  );

  setCustomerProductHolding$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLoginDetails),
      concatMap(() =>
        this.store.select(selectIsDarwinUser).pipe(
          take(1),
          concatMap((isDarwinUser: boolean | undefined) =>
            isDarwinUser ? this.customerProductHoldingService.getCustomerProductHolding() : of([])
          ),
          catchError(() => of([])),
          map((customerProductHolding: CustomerProductHolding[]) =>
            setCustomerProductHolding({ customerProductHolding })
          )
        )
      )
    )
  );

  setPromotions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLoginDetails),
      concatMap(() =>
        this.store.select(selectIsDarwinUser).pipe(
          take(1),
          concatMap((isDarwinUser: boolean | undefined) =>
            isDarwinUser ? this.promotionService.getPromotions() : of([])
          ),
          catchError(() => of([])),
          map((promotions: Promotion[]) => setPromotions({ promotions }))
        )
      )
    )
  );

  prefill$ = createEffect(() =>
    combineLatest([
      this.actions$.pipe(ofType(setCustomerProductHolding)),
      this.actions$.pipe(ofType(setPromotions)),
    ]).pipe(
      map(() =>
        prefill({
          tierState: {
            tier: 'ONE',
          },
          simsState: {
            simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }],
          },
        })
      )
    )
  );

  calculatePriceAfterChangingOneSimToLimited$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        prefill,
        updateTier,
        addSim,
        removeSim,
        updateUsageType,
        updateEntertainmentProduct,
        updateEntertainmentPacks,
        updateStreamingServices,
        updateOptins
      ),
      concatMap(() =>
        this.getSalesOfferRequestForCurrentSelection().pipe(
          take(1),
          withLatestFrom(this.omapiFamilyService.getFamily(this.MESSAGE_GROUP, this.ONE_FAMILY)),
          concatMap(([salesOfferRequestForCurrentSelection, omapiFamily]: [SalesOfferRequest, OmapiFamily]) => {
            const bundle: ProductRequest = salesOfferRequestForCurrentSelection.products.find(
              (product: ProductRequest) => product.amountOfLimitedSims !== undefined
            ) as ProductRequest;
            const numberOfLimitedSims: number = bundle.amountOfLimitedSims as number;
            const numberOfSims = Number(
              omapiFamily.tiers
                .flatMap((tier: OmapiFamilyTier) => tier.mobile)
                .find((mobile: OmapiProductInfo | undefined) => mobile?.omapiId === bundle.omapiId)
                ?.productInfo?.getMaxMobileLines()
            );

            return numberOfLimitedSims < numberOfSims
              ? forkJoin([
                  this.salesOfferService
                    .fetchSalesOffer(
                      this.getSalesOfferRequestChangingOneSimToLimited(salesOfferRequestForCurrentSelection)
                    )
                    .pipe(map((salesOffer: SalesOffer) => this.getPrice(salesOffer))),
                  this.salesOfferService
                    .fetchSalesOffer(salesOfferRequestForCurrentSelection)
                    .pipe(map((salesOffer: SalesOffer) => this.getPrice(salesOffer))),
                ]).pipe(
                  map(([priceAfterChangingOneSimToLimited, currentPrice]: [number, number]) => ({
                    price: priceAfterChangingOneSimToLimited - currentPrice,
                  }))
                )
              : of();
          }),
          map((priceAfterChangingOneSimToLimited: Price) =>
            updatePriceAfterChangingOneSimToLimited({ priceAfterChangingOneSimToLimited })
          )
        )
      )
    )
  );

  calculatePriceAfterChangingOneSimToUnlimited$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        prefill,
        updateTier,
        addSim,
        removeSim,
        updateUsageType,
        updateEntertainmentProduct,
        updateEntertainmentPacks,
        updateStreamingServices,
        updateOptins
      ),
      concatMap(() =>
        this.getSalesOfferRequestForCurrentSelection().pipe(
          take(1),
          concatMap((salesOfferRequestForCurrentSelection: SalesOfferRequest) => {
            const numberOfLimitedSims: number = salesOfferRequestForCurrentSelection.products
              .map((product: ProductRequest) => product.amountOfLimitedSims)
              .find((amountOfLimitedSims: number | undefined) => amountOfLimitedSims !== undefined) as number;

            return numberOfLimitedSims > 0
              ? forkJoin([
                  this.salesOfferService
                    .fetchSalesOffer(
                      this.getSalesOfferRequestChangingOneSimToUnlimited(salesOfferRequestForCurrentSelection)
                    )
                    .pipe(map((salesOffer: SalesOffer) => this.getPrice(salesOffer))),
                  this.salesOfferService
                    .fetchSalesOffer(salesOfferRequestForCurrentSelection)
                    .pipe(map((salesOffer: SalesOffer) => this.getPrice(salesOffer))),
                ]).pipe(
                  map(([priceAfterChangingOneSimToUnlimited, currentPrice]: [number, number]) => ({
                    price: priceAfterChangingOneSimToUnlimited - currentPrice,
                  }))
                )
              : of();
          }),
          map((priceAfterChangingOneSimToUnlimited: Price) =>
            updatePriceAfterChangingOneSimToUnlimited({ priceAfterChangingOneSimToUnlimited })
          )
        )
      )
    )
  );

  private getSalesOfferRequestForCurrentSelection(): Observable<SalesOfferRequest> {
    return combineLatest([
      this.omapiFamilyService.getFamily(this.MESSAGE_GROUP, this.ONE_FAMILY),
      this.store.select(selectTierState),
      this.store.select(selectSimsState),
      this.store.select(selectTvState),
      this.store.select(selectOptinsState),
      this.store.select(selectCustomerProductHolding),
      this.store.select(selectPromotions),
    ]).pipe(
      map(
        ([omapiFamily, tierState, sims, tvState, optinsState, customerProductHolding, promotions]: [
          OmapiFamily,
          TierState,
          SimsState,
          TvState,
          OptinsState,
          CustomerProductHolding[],
          Promotion[],
        ]) => {
          const numberOfSims: number = sims.simConfigurations.length;
          const numberOfLimitedSims = sims.simConfigurations.filter(
            (simConfiguration: SimConfiguration) => simConfiguration.usageType === UsageTypeEnum.LIMITED1
          ).length;

          const products: ProductRequest[] = [];
          products.push({
            omapiId: this.getOmapiIdOfBundle(omapiFamily, tierState.tier, numberOfSims) as string,
            options: [],
            streamingServices: [],
            optins: optinsState.optins,
            amountOfLimitedSims: numberOfLimitedSims,
          });
          if (tvState.entertainmentProduct !== null) {
            products.push({
              omapiId: tvState.entertainmentProduct,
              options: tvState.entertainmentPacks,
              streamingServices: tvState.streamingServices.map((omapiId: string) => ({
                omapiId,
                options: [],
              })),
              optins: [],
            });
          }

          return {
            products,
            promotions,
            customerProductHolding,
            campaignCode: this.urlService.getRequestParamValue(this.QUERY_PARAM_CAMPAIGN_ID, ''),
          };
        }
      )
    );
  }

  private getSalesOfferRequestChangingOneSimToLimited(salesOfferRequest: SalesOfferRequest): SalesOfferRequest {
    return {
      ...salesOfferRequest,
      products: salesOfferRequest.products.map((product: ProductRequest) =>
        product.amountOfLimitedSims !== undefined
          ? { ...product, amountOfLimitedSims: product.amountOfLimitedSims + 1 }
          : product
      ),
    };
  }

  private getSalesOfferRequestChangingOneSimToUnlimited(salesOfferRequest: SalesOfferRequest): SalesOfferRequest {
    return {
      ...salesOfferRequest,
      products: salesOfferRequest.products.map((product: ProductRequest) =>
        product.amountOfLimitedSims !== undefined
          ? { ...product, amountOfLimitedSims: product.amountOfLimitedSims - 1 }
          : product
      ),
    };
  }

  private getOmapiIdOfBundle(omapiFamily: OmapiFamily, tier: string | null, numberOfSims: number): string | undefined {
    return omapiFamily.tiers
      .find((t: OmapiFamilyTier) => t.key === tier)
      ?.mobile?.find((bundle: OmapiProductInfo) => bundle.productInfo?.getMaxMobileLines() === numberOfSims.toString())
      ?.omapiId;
  }

  private getPrice(salesOffer: SalesOffer): number {
    return salesOffer.products
      .flatMap((product: SalesOfferProduct) => [
        product.price,
        ...product.options.map((option: SalesOfferProductOption) => option.price),
        ...product.streamingServices.map(
          (streamingService: SalesOfferProductStreamingService) => streamingService.price
        ),
      ])
      .reduce((a: number, b: number) => a + b);
  }

  notifyAddSim$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addSim),
        concatMap(() =>
          this.store.select(selectSimsState).pipe(
            take(1),
            tap((simsState: SimsState) => {
              console.log('monorepo: notifyAddSim - sending number of sims');
              console.log(JSON.stringify(simsState.simConfigurations));
              this.messageBusService.messageBus$.next({
                type: '[monorepo] update number of sims',
                payloadAsJson: JSON.stringify({ length: simsState.simConfigurations.length }),
              });
            })
          )
        )
      ),
    { dispatch: false }
  );

  notifyRemoveSim$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeSim),
        concatMap(() =>
          this.store.select(selectSimsState).pipe(
            take(1),
            tap((simsState: SimsState) => {
              console.log('monorepo: notifyRemoveSim - sending number of sims');
              console.log(JSON.stringify(simsState.simConfigurations));
              this.messageBusService.messageBus$.next({
                type: '[monorepo] update number of sims',
                payloadAsJson: JSON.stringify({ length: simsState.simConfigurations.length }),
              });
            })
          )
        )
      ),
    { dispatch: false }
  );

  notifyUpdateUsageType$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUsageType),
        concatMap(() =>
          this.store.select(selectSimsState).pipe(
            take(1),
            tap((simsState: SimsState) => {
              const updatedSimConfigurations = simsState.simConfigurations.map((config: SimConfiguration) => ({
                limited: config.usageType === UsageTypeEnum.LIMITED1,
              }));
              console.log('monorepo: notifyUsageType - sending updated usage type of sim');
              console.log(JSON.stringify(updatedSimConfigurations));

              this.messageBusService.messageBus$.next({
                type: '[monorepo] update usage type of sims',
                payloadAsJson: JSON.stringify({ simConfigurations: updatedSimConfigurations }),
              });
            })
          )
        )
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return init();
  }
}
