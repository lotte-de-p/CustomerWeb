import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { ProductFinderAnalyticsEffects } from './product-finder-analytics.effects';
import { goToNextStep, notifyStepRendered, redoTest } from './stepper/product-finder-stepper.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { selectCurrentStepKey } from './stepper/product-finder-stepper.selectors';
import { getProductRecommendationsSuccess, order, resultDetails } from './product-finder.actions';
import {
  selectHousehold,
  selectNumberOfSims,
  selectPreference,
  selectProductRecommendationResult,
  selectTvChannels,
  selectTvExperience,
} from './product-finder.selectors';
import { ProductFinderStepEnum } from '../entities/stepper/product-finder-step.enum';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import * as udl from 'udl';

describe('ProductFinderAnalyticsEffects', () => {
  let actions$: Actions;
  let store$: MockStore;
  let analytics: ProductFinderAnalyticsEffects;
  let dataLayerService: DataLayerService;
  const intent = 'product finder';
  const flowType = 'self-service';
  const messageGroup: string[] = ['product-finder'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductFinderAnalyticsEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    analytics = TestBed.inject<ProductFinderAnalyticsEffects>(ProductFinderAnalyticsEffects);
    store$ = TestBed.inject(MockStore);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  it('onNotifyStepRendered$ should call addStepViewEvent', fakeAsync(() => {
    const addStepViewEventSpy = jest.spyOn(dataLayerService, 'addStepViewEvent');

    actions$ = of(notifyStepRendered({ step: ProductFinderStepEnum.PREFERENCE }));

    analytics.onNotifyStepRendered$.subscribe(() => {
      expect(addStepViewEventSpy).toHaveBeenCalledWith({
        intent,
        flowType,
        source: 'information',
        stepId: 'preference',
      });
      expect(addStepViewEventSpy).toHaveBeenCalled();
    });

    tick();
  }));

  describe('onGoToNextStep$', () => {
    it('should call sendEvent 1', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);

      actions$ = of(goToNextStep());

      analytics.onGoToNextStep$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('continue button clicked');
      });

      tick();
    }));

    it('should call sendEvent with different event for step intro', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.INTRO);

      actions$ = of(goToNextStep());

      analytics.onGoToNextStep$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('self-service flow started');
      });

      tick();
    }));
  });

  describe('onGoToNextStepOnStepPreference$', () => {
    it('should call sendEvent 2', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
      store$.overrideSelector(selectPreference, { mobile: true, surfing: true, watchTv: false, fixedLine: true });

      actions$ = of(goToNextStep());

      analytics.onGoToNextStepOnStepPreference$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('preferences selected');
        expect(event.attributes.itemName).toEqual('mobile,surfing,fixedLine');
      });

      tick();
    }));
  });

  describe('onGoToNextStepOnStepHousehold$', () => {
    it('should call sendEvent 3', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.HOUSEHOLD);
      store$.overrideSelector(selectHousehold, { adults: 2, teens: 3, children: 5 });

      actions$ = of(goToNextStep());

      analytics.onGoToNextStepOnStepHousehold$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('household selected');
        expect(event.attributes.itemName).toEqual('10');
        expect(event.attributes.itemData).toEqual('adults:2|teenagers:3|children:5');
      });

      tick();
    }));
  });

  describe('onGoToNextStepOnStepNumberOfSims$', () => {
    it('should call sendEvent 4', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.NUMBER_OF_SIMS);
      store$.overrideSelector(selectNumberOfSims, 2);

      actions$ = of(goToNextStep());

      analytics.onGoToNextStepOnStepNumberOfSims$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('mobile numbers selected');
        expect(event.attributes.itemName).toEqual('2');
      });

      tick();
    }));
  });

  describe('onGoToNextStepOnStepTvChannels$', () => {
    it('should call sendEvent 5', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_CHANNELS);
      store$.overrideSelector(selectTvChannels, { selection: ['flemish', 'kids'] });

      actions$ = of(goToNextStep());

      analytics.onGoToNextStepOnStepTvChannels$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('tv channels selected');
        expect(event.attributes.itemName).toEqual('flemish,kids');
      });

      tick();
    }));
  });

  describe('onGoToNextStepOnStepTvExperience$', () => {
    it('should call sendEvent 6', fakeAsync(() => {
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');
      store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_EXPERIENCE);
      store$.overrideSelector(selectTvExperience, { selection: ['app'] });

      actions$ = of(goToNextStep());

      analytics.onGoToNextStepOnStepTvExperience$.subscribe(() => {
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo.getEventName()).toEqual('tv experience selected');
        expect(event.attributes.itemName).toEqual('app');
      });

      tick();
    }));
  });

  describe('onOrderParkOrderEvent$', () => {
    it('should call sendEvent with recommended for you', fakeAsync(() => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      c5OmapiProduct.productType = 'BUNDLE';
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
        ],
        mostRecommendedIndex: 0,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(order({ index: 0 }));

      analytics.onOrderParkOrderEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          EventNameEnum.EVENT_NAME_BUTTON_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent,
            flowType,
            source: 'information',
            itemName: 'order button clicked',
            itemData: 'recommended for you',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
        expect(event.category).toEqual(category);
      });

      tick();
    }));

    it('should call sendEvent with alternative', fakeAsync(() => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      c5OmapiProduct.productType = 'BUNDLE';
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
        ],
        mostRecommendedIndex: 1,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(order({ index: 0 }));

      analytics.onOrderParkOrderEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          EventNameEnum.EVENT_NAME_BUTTON_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent,
            flowType,
            source: 'information',
            itemName: 'order button clicked',
            itemData: 'alternative',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
        expect(event.category).toEqual(category);
      });

      tick();
    }));
  });

  describe('onGetProductRecommendationsSuccessSendEndEvent$', () => {
    it('should call sendEvent and put most recommended product recommendation first', fakeAsync(() => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      c5OmapiProduct.productType = 'BUNDLE';
      const easyInternetOmapiProduct: OmapiProduct = new OmapiProduct();
      easyInternetOmapiProduct.externalProductCode = 'INTB0001';
      easyInternetOmapiProduct.productType = 'INTERNET';
      const telenetMobile13GbOmapiProduct: OmapiProduct = new OmapiProduct();
      telenetMobile13GbOmapiProduct.externalProductCode = 'TMOB0001';
      telenetMobile13GbOmapiProduct.productType = 'MOBILE';
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'Easy Internet',
                omapiProduct: easyInternetOmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
              {
                localizedOmapiProductName: 'Telenet Mobile 13 GB',
                omapiProduct: telenetMobile13GbOmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
              {
                localizedOmapiProductName: 'Telenet Mobile 13 GB',
                omapiProduct: telenetMobile13GbOmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
        ],
        mostRecommendedIndex: 0,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      jest.spyOn(c5OmapiProduct, 'isConnect5').mockReturnValue(true);
      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(getProductRecommendationsSuccess({ productRecommendationResult }));

      analytics.onGetProductRecommendationsSuccessSendEndEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          'self-service flow ended',
          EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_END,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent,
            flowType,
            source: 'information',
            itemName: 'Easy Internet + 2x Telenet Mobile 13 GB | ONE for 1',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('INTB0001').withProductType('INTERNET').build())
                .build(),
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('TMOB0001').withProductType('MOBILE').build())
                .build(),
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('TMOB0001').withProductType('MOBILE').build())
                .build(),
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
            itemData: 'Easy Internet + 2x Telenet Mobile 13 GB',
            itemGroup: 'ONE for 1',
          })
        );
        expect(event.category).toEqual(category);
      });

      tick();
    }));

    it('should call sendEvent when there are no recommendations', fakeAsync(() => {
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [],
        mostRecommendedIndex: null,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(getProductRecommendationsSuccess({ productRecommendationResult }));

      analytics.onGetProductRecommendationsSuccessSendEndEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          'self-service flow ended',
          EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_END,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalledWith({
          eventInfo,
          attributes: {
            intent,
            flowType,
            source: 'information',
            itemData: undefined,
            itemGroup: undefined,
            itemName: '',
            product: [],
          },
          category,
        });
      });

      tick();
    }));
  });

  describe('onResultDetailsSendMoreInfoEvent$', () => {
    it('should call sendEvent with recommended for you', fakeAsync(() => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      c5OmapiProduct.productType = 'BUNDLE';
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
        ],
        mostRecommendedIndex: 0,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(resultDetails({ index: 0 }));

      analytics.onResultDetailsSendMoreInfoEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          EventNameEnum.EVENT_NAME_LINK_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent,
            flowType,
            source: 'information',
            itemName: 'more info',
            itemData: 'recommended for you',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
        expect(event.category).toEqual(category);
      });

      tick();
    }));

    it('should call sendEvent with alternative', fakeAsync(() => {
      const c5OmapiProduct: OmapiProduct = new OmapiProduct();
      c5OmapiProduct.externalProductCode = 'C5FA0001';
      c5OmapiProduct.productType = 'BUNDLE';
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers: [],
            salesOffer: {
              price: 10,
              promo: null,
            },
            products: [
              {
                localizedOmapiProductName: 'ONE for 1',
                omapiProduct: c5OmapiProduct,
                productSpec: {
                  shortSummaries: [],
                  detailedSpecs: [],
                },
              },
            ],
          },
        ],
        mostRecommendedIndex: 1,
      };
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();

      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);

      actions$ = of(resultDetails({ index: 0 }));

      analytics.onResultDetailsSendMoreInfoEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          EventNameEnum.EVENT_NAME_LINK_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenCalledWith(flowType);
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent,
            flowType,
            source: 'information',
            itemName: 'more info',
            itemData: 'alternative',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
        expect(event.category).toEqual(category);
      });

      tick();
    }));
  });

  describe('onRedoTestSendRedoTestEvent$', () => {
    it('should call sendEvent with retake test', fakeAsync(() => {
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();
      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      actions$ = of(redoTest());

      analytics.onRedoTestSendRedoTestEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenNthCalledWith(
          1,
          EventNameEnum.EVENT_NAME_LINK_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenNthCalledWith(1, flowType);
        expect(sendEventSpy).toHaveBeenNthCalledWith(1, {
          eventInfo,
          attributes: {
            intent,
            flowType,
            source: 'information',
            itemName: 'retake the test',
          },
          category,
        });

        expect(createEventInfoSpy).toHaveBeenNthCalledWith(
          2,
          'self-service flow started',
          EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_STARTED,
          messageGroup
        );
        expect(createCategorySpy).toHaveBeenNthCalledWith(2, flowType);
        expect(sendEventSpy).toHaveBeenNthCalledWith(2, {
          eventInfo,
          attributes: {
            intent,
            flowType,
            source: 'information',
          },
          category,
        });
      });

      tick();
    }));
  });
});
