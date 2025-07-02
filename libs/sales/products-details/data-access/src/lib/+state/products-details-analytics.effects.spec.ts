import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { ProductsDetailsAnalyticsEffects } from './products-details-analytics.effects';
import { order, updateProducts } from './products-details.actions';
import * as udl from 'udl';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectProducts } from './products-details.selectors';
import { Product } from '@sales/shared/data-access';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('ProductsDetailsAnalyticsEffects', () => {
  let actions$: Actions;
  let store$: MockStore;
  let analytics: ProductsDetailsAnalyticsEffects;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsDetailsAnalyticsEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    analytics = TestBed.inject<ProductsDetailsAnalyticsEffects>(ProductsDetailsAnalyticsEffects);
    store$ = TestBed.inject(MockStore);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('onOrder$', () => {
    it('should call sendEvent', fakeAsync(() => {
      const omapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = 'C5FA0001';
      omapiProduct.productType = 'BUNDLE';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const category: udl.Category = new udl.Category();
      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const createCategorySpy = jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProducts, products);

      actions$ = of(order());

      analytics.onOrderParkOrderEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          EventNameEnum.EVENT_NAME_BUTTON_CLICKED,
          EventTypeEnum.EVENT_TYPE_CLICK,
          ['product-finder']
        );
        expect(createCategorySpy).toHaveBeenCalledWith('self-service');
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            intent: 'product finder',
            flowType: 'self-service',
            source: 'information',
            itemName: 'order button clicked',
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
        expect(event.category).toEqual(category);
        expect(event.strategy).toEqual(AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE);
      });

      tick();
    }));
  });

  describe('onUpdateProductsSendProductViewedEvent$', () => {
    it('should call sendEvent 1', fakeAsync(() => {
      const omapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = 'C5FA0001';
      omapiProduct.productType = 'BUNDLE';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const eventInfo: udl.EventInfo = new udl.EventInfo();
      const createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
      const sendEventSpy = jest.spyOn(dataLayerService, 'sendEvent');

      store$.overrideSelector(selectProducts, products);

      actions$ = of(updateProducts({ products }));

      analytics.onUpdateProductsSendProductViewedEvent$.subscribe(() => {
        expect(createEventInfoSpy).toHaveBeenCalledWith(
          'product viewed',
          EventTypeEnum.EVENT_TYPE_VIEW_PRODUCT_DETAILS,
          ['product-finder']
        );
        expect(sendEventSpy).toHaveBeenCalled();
        const event = sendEventSpy.mock.calls[0][0];
        expect(event.eventInfo).toEqual(eventInfo);
        expect(JSON.stringify(event.attributes)).toEqual(
          JSON.stringify({
            product: [
              new udl.ItemBuilder()
                .withProductInfo(new udl.ProductBuilder().withProductId('C5FA0001').withProductType('BUNDLE').build())
                .build(),
            ],
          })
        );
      });

      tick();
    }));
  });
});
