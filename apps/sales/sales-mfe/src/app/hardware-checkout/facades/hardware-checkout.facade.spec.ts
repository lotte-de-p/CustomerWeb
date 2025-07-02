import { HardwareCheckoutFacade } from './hardware-checkout.facade';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { addSummaryDeliveryNotification, summaryFeature, SummaryNotification } from '@sales/summary/data-access';
import { ReverseProxyService } from '../services/reverse-proxy.service';
import { PaymentService } from '../services/payment.service';
import {
  OmapiQueryProductService,
  rawLocalizedContentInterfaceFactory,
  rawOmapiQueryProductInterfaceDataWithPreOrderFactory,
  rawVariantsInterfaceFactory,
  variantTagOptionInterfaceFactory,
} from '@telenet/ng-lib-omapi-query';
import { OmapiProductService } from '@telenet/ng-lib-omapi';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Injectable } from '@angular/core';
import {
  OrderItem,
  orderItemTestFactory,
  Prices,
  pricesTestFactory,
  Rule,
  ruleFactory,
  salesOrderFactory,
  SessionStorageConstants,
  setAemInput,
  setAnalyticsAttributes,
  setStartStepLoadTime,
} from '@sales/hardware-checkout/data-access';
import { ConfigService } from '@telenet/ng-lib-config';
import { of } from 'rxjs';
import { OrderItemWithDiscount, setOrderItemsWithDiscount } from '@sales/etf/data-access';
import { SalesOrderUtil } from '../utils/sales-order.util';
import { bigItemDeliveryNotification } from '@sales/delivery/data-access';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { Cart, CartBuilder } from 'udl';

@Injectable({ providedIn: 'root' })
export class MockService {}

describe('HardwareCheckoutFacade', () => {
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let languageService: LanguageService;
  let store$: MockStore;
  let configService: ConfigService;
  let omapiQueryProductService: OmapiQueryProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(), StoreModule.forFeature(summaryFeature)],
      providers: [
        PaymentService,
        OmapiQueryProductService,
        OmapiProductService,
        LanguageService,
        provideMockStore(),
        HardwareCheckoutFacade,
        { provide: PaymentService, useValue: MockService },
        { provide: ReverseProxyService, useValue: MockService },
        { provide: 'Window', useValue: {} },
      ],
    });

    store$ = TestBed.inject(MockStore);
    languageService = TestBed.inject(LanguageService);
    configService = TestBed.inject(ConfigService);
    omapiQueryProductService = TestBed.inject(OmapiQueryProductService);
    jest.spyOn(store$, 'dispatch');
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    jest.spyOn(configService, 'getConfig').mockReturnValue('http://test/url');
    jest.spyOn(omapiQueryProductService, 'getRawQueryProductByEndpoint').mockReturnValue(of({ products: [] }));
    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    store$.setState({});
  });

  describe('constructor', () => {
    it('should fail when config is missing', () => {
      jest.spyOn(configService, 'getConfig').mockReturnValue('');
      expect(() => {
        hardwareCheckoutFacade = new HardwareCheckoutFacade(
          TestBed.inject(MockStore),
          TestBed.inject(ReverseProxyService),
          TestBed.inject(PaymentService),
          TestBed.inject(OmapiQueryProductService),
          TestBed.inject(OmapiProductService),
          TestBed.inject(LanguageService),
          TestBed.inject(ConfigService)
        );
      }).toThrow();
    });
  });

  describe('handlePreAndBackOrder', () => {
    it('should set a pre order message if one exists', () => {
      const localizedContent = rawLocalizedContentInterfaceFactory.build({
        key: 'test_pre',
        locale: 'nl',
        value: ['test_pre'],
      });
      const rawOmapiProducts = rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build({
        variants: [
          rawVariantsInterfaceFactory.build({
            tag: {
              telenet: {
                options: [
                  variantTagOptionInterfaceFactory.build({
                    preOrderDescription: {
                      localizedContent: [localizedContent],
                    },
                    attributeKey: 'pre_order_label',
                  }),
                ],
              },
            },
          }),
        ],
      });
      hardwareCheckoutFacade.setSummaryNotifications(salesOrderFactory.build(), [rawOmapiProducts]);
      expect(store$.dispatch).toHaveBeenNthCalledWith(
        1,
        addSummaryDeliveryNotification({ notification: { message: 'test_pre', weight: 2, type: 'notification' } })
      );
    });

    it('should set a back order message if one exists', () => {
      const localizedContent = rawLocalizedContentInterfaceFactory.build({
        key: 'test_back',
        locale: 'nl',
        value: ['test_back'],
      });
      const rawOmapiProducts = rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build({
        variants: [
          rawVariantsInterfaceFactory.build({
            tag: {
              telenet: {
                options: [
                  variantTagOptionInterfaceFactory.build({
                    backOrderDescription: {
                      localizedContent: [localizedContent],
                    },
                    attributeKey: 'back_order_label',
                  }),
                ],
              },
            },
          }),
        ],
      });
      hardwareCheckoutFacade.setSummaryNotifications(salesOrderFactory.build(), [rawOmapiProducts]);

      expect(store$.dispatch).toHaveBeenNthCalledWith(
        1,
        addSummaryDeliveryNotification({ notification: { message: 'test_back', weight: 3, type: 'notification' } })
      );
    });
  });

  describe('handleBigItemDeliveryNotification', () => {
    it('should set a big item delivery message if the order is a big item delivery', () => {
      const salesOrder = salesOrderFactory.build();
      jest.spyOn(SalesOrderUtil, 'isBigItemDeliveryOrder').mockReturnValue(true);
      hardwareCheckoutFacade.setSummaryNotifications(salesOrder, []);

      expect(store$.dispatch).toHaveBeenNthCalledWith(
        1,
        addSummaryDeliveryNotification({ notification: bigItemDeliveryNotification })
      );
    });

    it('should not set a big item delivery message if the order is not a big item delivery', () => {
      const salesOrder = salesOrderFactory.build();
      jest.spyOn(SalesOrderUtil, 'isBigItemDeliveryOrder').mockReturnValue(false);

      hardwareCheckoutFacade.setSummaryNotifications(salesOrder);

      expect(store$.dispatch).not.toHaveBeenCalledWith(
        addSummaryDeliveryNotification({
          notification: { message: 'Big item delivery', weight: 1, type: 'notification' },
        })
      );
    });
  });

  describe('addSummaryDeliveryNotification', () => {
    it('should dispatch addSummaryDeliveryNotification action with the given notification', () => {
      const summaryNotification: SummaryNotification = {
        message: 'Test notification',
        weight: 1,
        type: 'notification',
      };

      hardwareCheckoutFacade.addSummaryDeliveryNotification(summaryNotification);

      expect(store$.dispatch).toHaveBeenCalledWith(
        addSummaryDeliveryNotification({ notification: summaryNotification })
      );
    });

    it('should handle dispatch errors gracefully', () => {
      const summaryNotification: SummaryNotification = {
        message: 'Test notification',
        weight: 1,
        type: 'notification',
      };

      const dispatchSpy = jest.spyOn(store$, 'dispatch').mockImplementation(() => {
        throw new Error('Dispatch error');
      });

      expect(() => {
        hardwareCheckoutFacade.addSummaryDeliveryNotification(summaryNotification);
      }).toThrow('Dispatch error');

      expect(dispatchSpy).toHaveBeenCalledWith(addSummaryDeliveryNotification({ notification: summaryNotification }));
    });
  });

  describe('setAemInputs', () => {
    it('should set the inputs given to the component', () => {
      const aemInput = {
        thankyouRedirectUrl: 'thank-you-url',
        contactUsRedirectUrlInput: 'contact-us-url',
        customerServiceRedirectUrlInput: 'customer-service-url',
      };
      hardwareCheckoutFacade.setAemInputs(aemInput);
      expect(store$.dispatch).toHaveBeenNthCalledWith(1, setAemInput({ aemInput: aemInput }));
    });
  });

  describe('setStartStepLoadTime', () => {
    it('should dispatch start step load time action', () => {
      hardwareCheckoutFacade.setStartStepLoadTime();
      expect(store$.dispatch).toHaveBeenNthCalledWith(1, setStartStepLoadTime());
    });
  });

  describe('getOmapiQueryProducts', () => {
    it('should call omapiQueryProductService with correct url', () => {
      hardwareCheckoutFacade.getOmapiQueryProducts(['testid']);
      expect(omapiQueryProductService.getRawQueryProductByEndpoint).toHaveBeenCalledWith(
        'hardware-checkout',
        'http://test/url/hc-products/v1/products?itemcodes=testid&flow=esales'
      );
    });
  });

  describe('setEtfOrderItems', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should set the order items', () => {
      const prices = createPrices();
      const orderItems = createOrderItems(prices);
      const rules: Rule[] = [ruleFactory.build({ targetOrderItemIds: ['100', '110', '1000', '1010', '1110', '1100'] })];
      const expectedOrderItemsWithDiscount: OrderItemWithDiscount[] = createExpectedOrderItemsWithDiscount(
        orderItems,
        rules
      );

      hardwareCheckoutFacade.setEtfOrderItems(orderItems, rules);

      expect(store$.dispatch).toHaveBeenCalledWith(
        setOrderItemsWithDiscount({ orderItemsWithDiscount: expectedOrderItemsWithDiscount })
      );
    });
  });

  describe('setAnalyticsAttributesFromSessionStorage', () => {
    it('should set the analytics attributes from session storage', () => {
      const analyticsAttributes: DataLayerAttributes = { cardId: 'test' };
      window.sessionStorage.setItem(
        SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES,
        JSON.stringify(analyticsAttributes)
      );
      hardwareCheckoutFacade.setAnalyticsAttributesFromSessionStorage();
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES);
      expect(store$.dispatch).toHaveBeenCalledWith(
        setAnalyticsAttributes({ analyticsAttributes: analyticsAttributes })
      );
    });

    it('should handle empty sessionStorage', () => {
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES);

      hardwareCheckoutFacade.setAnalyticsAttributesFromSessionStorage();

      expect(store$.dispatch).toHaveBeenCalledWith(setAnalyticsAttributes({ analyticsAttributes: {} }));
    });
  });

  describe('setAnalyticsCartFromSessionStorage', () => {
    it('should set the analytics attributes from session storage', () => {
      const analyticsCart: Cart = new CartBuilder().build();
      window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_ANALYTICS_CART, JSON.stringify(analyticsCart));
      hardwareCheckoutFacade.setAnalyticsCartFromSessionStorage();
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_ANALYTICS_CART);
      expect(store$.dispatch).toHaveBeenCalled();
    });

    it('should handle empty sessionStorage', () => {
      window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_ANALYTICS_CART);

      hardwareCheckoutFacade.setAnalyticsCartFromSessionStorage();

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });

  function createPrices(): Prices {
    return pricesTestFactory.build();
  }

  function createOrderItems(prices: Prices): OrderItem[] {
    return [
      orderItemTestFactory.build({
        prices: prices,
        orderItems: [orderItemTestFactory.build()],
      }),
      orderItemTestFactory.build({
        prices: prices,
        orderItems: [orderItemTestFactory.build()],
      }),
      orderItemTestFactory.build({
        prices: prices,
        orderItems: [orderItemTestFactory.build()],
      }),
    ];
  }

  function createExpectedOrderItemsWithDiscount(orderItems: OrderItem[], rules: Rule[]): OrderItemWithDiscount[] {
    return orderItems.map((orderItem) => {
      const discountRule = SalesOrderUtil.getOrderItemDiscountRuleByTarget(orderItem, rules);
      if (!discountRule) {
        throw new Error('DiscountRuleNotFound');
      }
      return {
        name: orderItem.name,
        id: orderItem.id,
        rule: discountRule,
        showEtfOptions: false,
        hasMadeASelection: false,
        prices: orderItem.prices,
      };
    });
  }
});
