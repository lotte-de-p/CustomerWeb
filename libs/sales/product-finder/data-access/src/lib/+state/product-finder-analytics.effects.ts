import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { getProductRecommendationsSuccess, order, resultDetails } from './product-finder.actions';
import { goToNextStep, notifyStepRendered, redoTest } from './stepper/product-finder-stepper.actions';
import { DataLayerAttributes, DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { Store } from '@ngrx/store';
import { ProductFinderStepperSlice } from './stepper/product-finder-stepper.reducers';
import { selectCurrentStepKey } from './stepper/product-finder-stepper.selectors';
import { ProductFinderSlice } from './product-finder.reducers';
import {
  selectHousehold,
  selectNumberOfSims,
  selectPreference,
  selectProductRecommendationResult,
  selectTvChannels,
  selectTvExperience,
} from './product-finder.selectors';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductRecommendation } from '../entities/results-screen/product-recommendation.interface';
import { Product, ProductUtils } from '@sales/shared/data-access';
import { ProductFinderStepEnum } from '../entities/stepper/product-finder-step.enum';

class DataLayerConstants {
  static readonly MESSAGE_GROUPS = ['product-finder'];
  static readonly EVENT_NAME_SELF_SERVICE_FLOW_STARTED = 'self-service flow started';
  static readonly EVENT_NAME_SELF_SERVICE_FLOW_ENDED = 'self-service flow ended';
  static readonly EVENT_NAME_NEXT_PREFERENCE = 'preferences selected';
  static readonly EVENT_NAME_NEXT_HOUSEHOLD = 'household selected';
  static readonly EVENT_NAME_NEXT_NUMBER_OF_SIMS = 'mobile numbers selected';
  static readonly EVENT_NAME_NEXT_TV_CHANNELS = 'tv channels selected';
  static readonly EVENT_NAME_NEXT_TV_EXPERIENCE = 'tv experience selected';
  static readonly EVENT_TYPE_NEXT = 'option-click';
  static readonly ATTRIBUTE_ITEM_NAME_CONTINUE_BUTTON_CLICKED = 'continue button clicked';
  static readonly ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED = 'order button clicked';
  static readonly ATTRIBUTE_ITEM_NAME_MORE_INFO = 'more info';
  static readonly ATTRIBUTE_ITEM_NAME_RETAKE_TEST = 'retake the test';
}

@Injectable({
  providedIn: 'root',
})
export class ProductFinderAnalyticsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataLayerService: DataLayerService,
    private readonly stepperStore: Store<ProductFinderStepperSlice>,
    private readonly store: Store<ProductFinderSlice>
  ) {}

  onNotifyStepRendered$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(notifyStepRendered),
        map((action) => action.step),
        tap((step) => this.dataLayerService.addStepViewEvent(this.enrichWithCommonAttributes({ stepId: step })))
      ),
    { dispatch: false }
  );

  onGoToNextStep$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
        tap((step: string) => {
          if (step === ProductFinderStepEnum.INTRO) {
            this.sendStartEvent();
          } else {
            this.sendNextEvent();
          }
        })
      ),
    { dispatch: false }
  );

  onGoToNextStepOnStepPreference$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() =>
          this.stepperStore.select(selectCurrentStepKey).pipe(
            take(1),
            filter((step: string) => step === ProductFinderStepEnum.PREFERENCE),
            mergeMap(() =>
              this.store.select(selectPreference).pipe(
                take(1),
                tap((preference: Preference) =>
                  this.dataLayerService.sendEvent({
                    eventInfo: this.dataLayerService.createEventInfo(
                      DataLayerConstants.EVENT_NAME_NEXT_PREFERENCE,
                      DataLayerConstants.EVENT_TYPE_NEXT,
                      DataLayerConstants.MESSAGE_GROUPS
                    ),
                    attributes: this.enrichWithCommonAttributes({
                      itemName: Object.keys(preference)
                        .filter((key: string) => preference[key])
                        .join(','),
                    }),
                    category: this.categorySelfService(),
                  })
                )
              )
            )
          )
        )
      ),
    { dispatch: false }
  );

  onGoToNextStepOnStepHousehold$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() =>
          this.stepperStore.select(selectCurrentStepKey).pipe(
            take(1),
            filter((step: string) => step === ProductFinderStepEnum.HOUSEHOLD),
            mergeMap(() =>
              this.store.select(selectHousehold).pipe(
                take(1),
                filter((household: Household | null): household is Household => household !== null),
                tap((household: Household) =>
                  this.dataLayerService.sendEvent({
                    eventInfo: this.dataLayerService.createEventInfo(
                      DataLayerConstants.EVENT_NAME_NEXT_HOUSEHOLD,
                      DataLayerConstants.EVENT_TYPE_NEXT,
                      DataLayerConstants.MESSAGE_GROUPS
                    ),
                    attributes: this.enrichWithCommonAttributes({
                      itemName: (household.adults + household.teens + household.children).toString(),
                      itemData: `adults:${household.adults}|teenagers:${household.teens}|children:${household.children}`,
                    }),
                    category: this.categorySelfService(),
                  })
                )
              )
            )
          )
        )
      ),
    { dispatch: false }
  );

  onGoToNextStepOnStepNumberOfSims$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() =>
          this.stepperStore.select(selectCurrentStepKey).pipe(
            take(1),
            filter((step: string) => step === ProductFinderStepEnum.NUMBER_OF_SIMS),
            mergeMap(() =>
              this.store.select(selectNumberOfSims).pipe(
                take(1),
                filter((numberOfSims: number | null): numberOfSims is number => numberOfSims !== null),
                tap((numberOfSims: number) =>
                  this.dataLayerService.sendEvent({
                    eventInfo: this.dataLayerService.createEventInfo(
                      DataLayerConstants.EVENT_NAME_NEXT_NUMBER_OF_SIMS,
                      DataLayerConstants.EVENT_TYPE_NEXT,
                      DataLayerConstants.MESSAGE_GROUPS
                    ),
                    attributes: this.enrichWithCommonAttributes({
                      itemName: numberOfSims.toString(),
                    }),
                    category: this.categorySelfService(),
                  })
                )
              )
            )
          )
        )
      ),
    { dispatch: false }
  );

  onGoToNextStepOnStepTvChannels$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() =>
          this.stepperStore.select(selectCurrentStepKey).pipe(
            take(1),
            filter((step: string) => step === ProductFinderStepEnum.TV_CHANNELS),
            mergeMap(() =>
              this.store.select(selectTvChannels).pipe(
                take(1),
                filter((tvChannels: TvChannels | null): tvChannels is TvChannels => tvChannels !== null),
                tap((tvChannels: TvChannels) =>
                  this.dataLayerService.sendEvent({
                    eventInfo: this.dataLayerService.createEventInfo(
                      DataLayerConstants.EVENT_NAME_NEXT_TV_CHANNELS,
                      DataLayerConstants.EVENT_TYPE_NEXT,
                      DataLayerConstants.MESSAGE_GROUPS
                    ),
                    attributes: this.enrichWithCommonAttributes({
                      itemName: tvChannels.selection.join(','),
                    }),
                    category: this.categorySelfService(),
                  })
                )
              )
            )
          )
        )
      ),
    { dispatch: false }
  );

  onGoToNextStepOnStepTvExperience$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToNextStep),
        mergeMap(() =>
          this.stepperStore.select(selectCurrentStepKey).pipe(
            take(1),
            filter((step: string) => step === ProductFinderStepEnum.TV_EXPERIENCE),
            mergeMap(() =>
              this.store.select(selectTvExperience).pipe(
                take(1),
                filter((tvExperience: TvExperience | null): tvExperience is TvExperience => tvExperience !== null),
                tap((tvExperience: TvExperience) =>
                  this.dataLayerService.sendEvent({
                    eventInfo: this.dataLayerService.createEventInfo(
                      DataLayerConstants.EVENT_NAME_NEXT_TV_EXPERIENCE,
                      DataLayerConstants.EVENT_TYPE_NEXT,
                      DataLayerConstants.MESSAGE_GROUPS
                    ),
                    attributes: this.enrichWithCommonAttributes({
                      itemName: tvExperience.selection.join(','),
                    }),
                    category: this.categorySelfService(),
                  })
                )
              )
            )
          )
        )
      ),
    { dispatch: false }
  );

  onOrderParkOrderEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(order),
        map((action) => action.index),
        mergeMap((index: number) =>
          this.store.select(selectProductRecommendationResult).pipe(
            take(1),
            filter(
              (
                productRecommendationResult: ProductRecommendationResult | null
              ): productRecommendationResult is ProductRecommendationResult => productRecommendationResult !== null
            ),
            tap((productRecommendationResult: ProductRecommendationResult) =>
              this.parkOrderEvent(index, productRecommendationResult)
            )
          )
        )
      ),
    { dispatch: false }
  );

  onGetProductRecommendationsSuccessSendEndEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductRecommendationsSuccess),
        mergeMap(() =>
          this.store.select(selectProductRecommendationResult).pipe(
            take(1),
            filter(
              (
                productRecommendationResult: ProductRecommendationResult | null
              ): productRecommendationResult is ProductRecommendationResult => productRecommendationResult !== null
            ),
            map((productRecommendationResult: ProductRecommendationResult) =>
              productRecommendationResult.mostRecommendedIndex !== null
                ? this.putMostRecommendedRecommendationAtFirstIndex(
                    productRecommendationResult.productRecommendations,
                    productRecommendationResult.mostRecommendedIndex
                  )
                : productRecommendationResult.productRecommendations
            )
          )
        ),
        tap((productRecommendations: ProductRecommendation[]) => this.sendEndEvent(productRecommendations))
      ),
    { dispatch: false }
  );

  onResultDetailsSendMoreInfoEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resultDetails),
        map((action) => action.index),
        mergeMap((index: number) =>
          this.store.select(selectProductRecommendationResult).pipe(
            take(1),
            filter(
              (
                productRecommendationResult: ProductRecommendationResult | null
              ): productRecommendationResult is ProductRecommendationResult => productRecommendationResult !== null
            ),
            tap((productRecommendationResult: ProductRecommendationResult) =>
              this.sendMoreInfoEvent(productRecommendationResult, index)
            )
          )
        )
      ),
    { dispatch: false }
  );

  onRedoTestSendRedoTestEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(redoTest),
        tap(() => {
          this.sendRedoTestEvent();
          this.sendStartEvent();
        })
      ),
    { dispatch: false }
  );

  private sendStartEvent(): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        DataLayerConstants.EVENT_NAME_SELF_SERVICE_FLOW_STARTED,
        EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_STARTED,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.commonAttributes(),
      category: this.categorySelfService(),
    });
  }

  private sendNextEvent(): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        EventNameEnum.EVENT_NAME_CONTINUE_BUTTON_CLICKED,
        EventTypeEnum.EVENT_TYPE_CLICK,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_CONTINUE_BUTTON_CLICKED,
      }),
      category: this.categorySelfService(),
    });
  }

  private parkOrderEvent(index: number, productRecommendationResult: ProductRecommendationResult): void {
    const productRecommendation: ProductRecommendation = productRecommendationResult.productRecommendations[index];

    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        EventNameEnum.EVENT_NAME_BUTTON_CLICKED,
        EventTypeEnum.EVENT_TYPE_CLICK,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED,
        itemData: this.getRecommendedItemData(productRecommendationResult.mostRecommendedIndex, index),
        product: this.createUdlItems(productRecommendation.products),
      }),
      category: this.categorySelfService(),
      strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE,
    });
  }

  private categorySelfService(): udl.Category {
    return this.dataLayerService.createCategory('self-service');
  }

  private enrichWithCommonAttributes(attributes: DataLayerAttributes): DataLayerAttributes {
    return Object.assign(this.commonAttributes(), attributes);
  }

  private commonAttributes(): DataLayerAttributes {
    return {
      intent: 'product finder',
      flowType: 'self-service',
      source: 'information',
    };
  }

  private putMostRecommendedRecommendationAtFirstIndex(
    productRecommendations: ProductRecommendation[],
    mostRecommendedIndex: number
  ): ProductRecommendation[] {
    return [productRecommendations[mostRecommendedIndex]].concat(
      productRecommendations.filter((_: ProductRecommendation, i: number) => i !== mostRecommendedIndex)
    );
  }

  private sendEndEvent(productRecommendations: ProductRecommendation[]): void {
    const titles: string[] = this.createTitles(productRecommendations);
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        DataLayerConstants.EVENT_NAME_SELF_SERVICE_FLOW_ENDED,
        EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_END,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: titles.join(' | '),
        product: this.createUdlItems(
          productRecommendations.flatMap(
            (productRecommendation: ProductRecommendation) => productRecommendation.products
          )
        ),
        itemData: titles[0],
        itemGroup: titles[1],
      }),
      category: this.categorySelfService(),
    });
  }

  private createTitles(productRecommendations: ProductRecommendation[]): string[] {
    return productRecommendations
      .map((productRecommendation: ProductRecommendation) => productRecommendation.products)
      .map((products: Product[]) => ProductUtils.createTitle(products));
  }

  private createUdlItems(products: Product[]): udl.Item[] {
    return products.map((product: Product) =>
      new udl.ItemBuilder()
        .withProductInfo(
          new udl.ProductBuilder()
            .withProductId(product.omapiProduct.externalProductCode as string)
            .withProductType(product.omapiProduct.productType as string)
            .build()
        )
        .build()
    );
  }

  private sendMoreInfoEvent(productRecommendationResult: ProductRecommendationResult, index: number): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        EventNameEnum.EVENT_NAME_LINK_CLICKED,
        EventTypeEnum.EVENT_TYPE_CLICK,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_MORE_INFO,
        itemData: this.getRecommendedItemData(productRecommendationResult.mostRecommendedIndex, index),
        product: this.createUdlItems(productRecommendationResult.productRecommendations[index].products),
      }),
      category: this.categorySelfService(),
    });
  }

  private getRecommendedItemData(mostRecommendedIndex: number | null, index: number): string {
    return mostRecommendedIndex === index ? 'recommended for you' : 'alternative';
  }

  private sendRedoTestEvent(): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        EventNameEnum.EVENT_NAME_LINK_CLICKED,
        EventTypeEnum.EVENT_TYPE_CLICK,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_RETAKE_TEST,
      }),
      category: this.categorySelfService(),
    });
  }
}
