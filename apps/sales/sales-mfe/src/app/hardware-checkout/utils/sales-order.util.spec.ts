import {
  DiscountItem,
  discountItemFactory,
  offerTestFactory,
  OrderItem,
  orderItemTestFactory,
  pricesTestFactory,
  priceTestFactory,
  Rule,
  ruleFactory,
  salesOrderFactory,
  sdataDiscountFactory,
  ValidationElement,
  ValidationElementEnum,
} from '@sales/hardware-checkout/data-access';
import {
  RawImagesInterfaceFactory,
  RawOmapiQueryProductInterfaceData,
  rawOmapiQueryProductInterfaceDataFactory,
  rawVariantsInterfaceFactory,
} from '@telenet/ng-lib-omapi-query';
import { SalesOrderUtil } from './sales-order.util';
import { OmapiAttributeKeysEnum } from '../enums/omapi.enum';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { BusinessDomainsEnum } from '../enums/business-domains.enum';
import { of } from 'rxjs';
import { GenericError, ProductNotActive } from '../constants/errors.constants';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';

describe('SalesOrderUtil', () => {
  describe('createSummaryOrderItems', () => {
    let orderItems: OrderItem[];
    let discountItems: DiscountItem[];
    let omapiProducts: OmapiProduct[];
    let omapiQueryProducts: RawOmapiQueryProductInterfaceData[];
    const product1 = {
      id: '1',
      name: 'iphone 13',
      itemCode: 'item code 1',
      localizedName: 'Dutch iphone 13',
    };
    const product2 = {
      id: '2',
      name: 'iphone 13 charger',
      itemCode: 'item code 2',
    };
    const etf1 = {
      id: '3',
      name: 'ETF 1',
      itemCode: 'item code 3',
      offer: offerTestFactory.build({ id: '99999999', businessDomains: [BusinessDomainsEnum.ETF] }),
    };
    const etf2 = {
      id: '4',
      name: 'ETF 2',
      itemCode: 'item code 4',
      offer: offerTestFactory.build({ id: '99999999', businessDomains: [BusinessDomainsEnum.ETF] }),
    };
    const discount1 = {
      id: '1',
    };
    const discount2 = {
      id: '2',
    };
    const manBrand = {
      localizedContent: [
        {
          locale: 'nl',
          value: ['Apple'],
        },
      ],
    };

    beforeEach(() => {
      const prices = pricesTestFactory.build({
        oneTimeTotal: priceTestFactory.build({
          value: '100.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
        oneTimeDiscount: priceTestFactory.build({
          value: '10.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
        oneTimeDiscounted: priceTestFactory.build({
          value: '90.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
        oneTimeTotalWithoutTaxes: priceTestFactory.build({
          value: '90.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
        oneTimeDiscountWithoutTaxes: priceTestFactory.build({
          value: '9.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
        oneTimeDiscountedWithoutTaxes: priceTestFactory.build({
          value: '81.00',
          currency: {
            name: 'Euro',
            code: 'EUR',
          },
        }),
      });
      orderItems = [
        orderItemTestFactory.build({
          chars: {
            'Item Code': product1.itemCode,
          },
          orderItems: [
            orderItemTestFactory.build({
              id: product1.id,
              name: product1.name,
              prices: prices,
            }),
          ],
        }),
        orderItemTestFactory.build({
          chars: {
            'Item Code': product2.itemCode,
          },
          orderItems: [
            orderItemTestFactory.build({
              chars: {
                'Item Code': product2.id,
              },
              id: product2.id,
              name: product2.name,
              prices: prices,
            }),
          ],
        }),
        orderItemTestFactory.build({
          chars: {
            'Item Code': product2.itemCode,
          },
          orderItems: [
            orderItemTestFactory.build({
              chars: {
                'Item Code': product2.id,
              },
              id: product2.id,
              name: product2.name,
              prices: prices,
            }),
          ],
        }),
        orderItemTestFactory.build({
          chars: {
            'Item Code': etf1.itemCode,
          },
          offer: etf2.offer,
          orderItems: [
            orderItemTestFactory.build({
              chars: {
                'Item Code': etf1.id,
              },
              id: etf1.id,
              name: etf1.name,
              prices: prices,
            }),
          ],
          prices: prices,
        }),
        orderItemTestFactory.build({
          chars: {
            'Item Code': etf2.itemCode,
          },
          offer: etf2.offer,
          orderItems: [
            orderItemTestFactory.build({
              chars: {
                'Item Code': etf2.id,
              },
              id: etf2.id,
              name: etf2.name,
              prices: prices,
            }),
          ],
          prices: prices,
        }),
      ];
      discountItems = [
        discountItemFactory.build({
          id: discount1.id,
          discountId: discount1.id,
          targetOrderItems: [],
        }),
        discountItemFactory.build({
          id: discount2.id,
          discountId: discount2.id,
          targetOrderItems: [],
        }),
      ];
      omapiQueryProducts = [
        rawOmapiQueryProductInterfaceDataFactory.build({
          variants: [
            rawVariantsInterfaceFactory.build({
              productId: product1.itemCode,
              shortDescription: { localizedContent: [{ locale: 'nl', data: product1.localizedName }] },
              manBrand: manBrand,
            }),
          ],
        }),
      ];
      omapiProducts = [
        OmapiProductTestfactory.build({ productId: discount1.id, localizedContent: [{ locale: 'nl', name: 'test1' }] }),
        OmapiProductTestfactory.build({ productId: discount2.id, localizedContent: [{ locale: 'nl', name: 'test2' }] }),
      ];
    });

    describe('basic order item', () => {
      it('should create a basic residential summary order item', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          discountItems,
          omapiQueryProducts,
          omapiProducts,
          false,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].id).toEqual('1');
        expect(summaryOrderItemsUnderTest[0].name).toEqual(
          `${manBrand.localizedContent[0].value[0]} ${product1.localizedName}`
        );
        expect(summaryOrderItemsUnderTest[0].discount).toBeUndefined();
        expect(summaryOrderItemsUnderTest[0].mainImageUrl).toBeUndefined();
        expect(summaryOrderItemsUnderTest[0].prices.total.value).toBe('100.00');
        expect(summaryOrderItemsUnderTest[0].prices.discount.value).toBe('10.00');
        expect(summaryOrderItemsUnderTest[0].prices.discounted.value).toBe('90.00');

        expect(summaryOrderItemsUnderTest[1].id).toEqual('2');
        expect(summaryOrderItemsUnderTest[1].name).toEqual(product2.name);
        expect(summaryOrderItemsUnderTest[1].discount).toBeUndefined();
        expect(summaryOrderItemsUnderTest[1].mainImageUrl).toBeUndefined();
        expect(summaryOrderItemsUnderTest[1].prices.total.value).toBe('100.00');
        expect(summaryOrderItemsUnderTest[1].prices.discount.value).toBe('10.00');
        expect(summaryOrderItemsUnderTest[1].prices.discounted.value).toBe('90.00');
      });
      it('should create a basic soho summary order item', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          discountItems,
          omapiQueryProducts,
          omapiProducts,
          true,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].prices.total.value).toBe('90.00');
        expect(summaryOrderItemsUnderTest[0].prices.discount.value).toBe('9.00');
        expect(summaryOrderItemsUnderTest[0].prices.discounted.value).toBe('81.00');

        expect(summaryOrderItemsUnderTest[1].prices.total.value).toBe('90.00');
        expect(summaryOrderItemsUnderTest[1].prices.discount.value).toBe('9.00');
        expect(summaryOrderItemsUnderTest[1].prices.discounted.value).toBe('81.00');
      });
    });

    describe('image url', () => {
      it('should add the image url', () => {
        const omapiProductsWithImage = [
          rawOmapiQueryProductInterfaceDataFactory.build({
            variants: [
              rawVariantsInterfaceFactory.build({
                productId: product1.itemCode,
                images: [
                  RawImagesInterfaceFactory.build({
                    attributeKey: OmapiAttributeKeysEnum.MAIN_IMAGE,
                    value: 'testimage 1',
                  }),
                ],
              }),
            ],
          }),
          rawOmapiQueryProductInterfaceDataFactory.build({
            variants: [
              rawVariantsInterfaceFactory.build({
                productId: product2.itemCode,
                images: [
                  RawImagesInterfaceFactory.build({
                    attributeKey: OmapiAttributeKeysEnum.MAIN_IMAGE,
                    value: 'testimage 2',
                  }),
                ],
              }),
            ],
          }),
        ];
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          discountItems,
          omapiProductsWithImage,
          omapiProducts,
          false,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].mainImageUrl).toEqual('testimage 1');
        expect(summaryOrderItemsUnderTest[1].mainImageUrl).toEqual('testimage 2');
      });
    });

    describe('discount', () => {
      const matchingDiscountItems = [
        discountItemFactory.build({
          id: discount1.id,
          discountId: discount1.id,
          targetOrderItems: [
            orderItemTestFactory.build({
              id: product1.id,
            }),
          ],
        }),
        discountItemFactory.build({
          id: discount2.id,
          discountId: discount2.id,
          targetOrderItems: [
            orderItemTestFactory.build({
              id: product2.id,
            }),
          ],
        }),
      ];

      it('should add the discount name and price for residential customers', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          matchingDiscountItems,
          omapiQueryProducts,
          omapiProducts,
          false,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].discount?.label).toBe('test1');
        expect(summaryOrderItemsUnderTest[0].discount?.price.value).toBe('10.00');
        expect(summaryOrderItemsUnderTest[1].discount?.label).toBe('test2');
        expect(summaryOrderItemsUnderTest[1].discount?.price.value).toBe('10.00');
      });

      it('should add the discount name and price for soho customers', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          matchingDiscountItems,
          omapiQueryProducts,
          omapiProducts,
          true,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].discount?.label).toBe('test1');
        expect(summaryOrderItemsUnderTest[0].discount?.price.value).toBe('9.00');
        expect(summaryOrderItemsUnderTest[1].discount?.label).toBe('test2');
        expect(summaryOrderItemsUnderTest[1].discount?.price.value).toBe('9.00');
      });

      it('should read order item name from omapi query', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.createSummaryOrderItems(
          orderItems,
          matchingDiscountItems,
          omapiQueryProducts,
          omapiProducts,
          true,
          'nl'
        );
        expect(summaryOrderItemsUnderTest[0].name).toEqual(
          `${manBrand.localizedContent[0].value[0]} ${product1.localizedName}`
        );
      });
    });

    describe('getSummaryPrices', () => {
      it('should map ETF items and calculate total of ETF items', () => {
        const summaryOrderItemsUnderTest = SalesOrderUtil.getSummaryPrices(
          salesOrderFactory.build({ orderItems: orderItems }),
          false
        );
        expect(summaryOrderItemsUnderTest.totals.etfPrices).toHaveLength(2);
        expect(summaryOrderItemsUnderTest.totals.etfTotal).toEqual(priceTestFactory.build({ value: '200' }));
        expect(summaryOrderItemsUnderTest.totals.etfPrices?.[0].price.value).toEqual('100.00');
        expect(summaryOrderItemsUnderTest.totals.etfPrices?.[1].price.value).toEqual('100.00');
      });
      it('should map ETF items and calculate total of ETF items VAT exclusive for SOHO', () => {
        const salesOrder = salesOrderFactory.build({ orderItems: orderItems });
        const summaryOrderItemsUnderTest = SalesOrderUtil.getSummaryPrices(salesOrder, true);
        expect(summaryOrderItemsUnderTest.subTotals).toBeDefined();
        expect(summaryOrderItemsUnderTest.subTotals?.etfPrices).toHaveLength(2);
        expect(summaryOrderItemsUnderTest.subTotals?.etfTotal).toEqual(priceTestFactory.build({ value: '180' }));
        expect(summaryOrderItemsUnderTest.subTotals?.etfPrices?.[0].price.value).toEqual('90.00');
        expect(summaryOrderItemsUnderTest.subTotals?.etfPrices?.[1].price.value).toEqual('90.00');
      });
    });
  });

  describe('handleNcErrors', () => {
    it('should pass through non-error results unchanged', (done) => {
      const testData = { someData: 'data' };
      const testObservable$ = of(testData).pipe(SalesOrderUtil.handleNcErrors());

      testObservable$.subscribe({
        next: (result) => {
          expect(result).toEqual(testData);
          done();
        },
        error: () => {
          done.fail('Should not have thrown an error for non-error data');
        },
      });
    });

    it('should throw HardwareCheckoutError if NcError is detected with known error code', (done) => {
      const ncError = { errorCode: 'OE-0100', errorType: 'type', errorMessage: 'message' };

      const testObservable$ = of(ncError).pipe(SalesOrderUtil.handleNcErrors());

      testObservable$.subscribe({
        next: (error) => {
          done.fail(error.errorMessage);
        },
        error: (error) => {
          expect(error['errorObject']).toEqual(ProductNotActive);
          done();
        },
      });
    });

    it('should throw HardwareCheckoutError with generic error if NcError code is unknown', (done) => {
      const ncError = { errorCode: 'unknownCode', errorType: 'type', errorMessage: 'message' };

      const testObservable$ = of(ncError).pipe(SalesOrderUtil.handleNcErrors());

      testObservable$.subscribe({
        next: () => {
          done.fail('failed');
        },
        error: (error) => {
          expect(error['errorObject']).toEqual(GenericError);
          done();
        },
      });
    });
  });

  describe('getOrderItemDiscountRule', () => {
    it('should return undefined if no rules are provided', () => {
      const orderItemWithDiscount: OrderItemWithMatchingDiscount = {
        orderItem: orderItemTestFactory.build(),
        customerChosenDiscount: sdataDiscountFactory.build(),
      };
      const rules: Rule[] = [];

      const result = SalesOrderUtil.getOrderItemDiscountRule(orderItemWithDiscount, rules);
      expect(result).toBeUndefined();
    });

    it('should return undefined if no rule matches the target item IDs or discount ID', () => {
      const orderItemWithDiscount: OrderItemWithMatchingDiscount = {
        orderItem: orderItemTestFactory.build({ orderItems: [orderItemTestFactory.build({ id: '2' })] }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '00001' }),
      };
      const rules: Rule[] = [ruleFactory.build()];

      const result = SalesOrderUtil.getOrderItemDiscountRule(orderItemWithDiscount, rules);
      expect(result).toBeUndefined();
    });

    it('should return the rule when there is a match by target item IDs and discount ID', () => {
      const orderItemWithDiscount: OrderItemWithMatchingDiscount = {
        orderItem: orderItemTestFactory.build({ orderItems: [orderItemTestFactory.build({ id: '2' })] }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '00001' }),
      };
      const rules: Rule[] = [
        ruleFactory.build({
          targetOrderItemIds: ['2'],
          discount: { name: 'testdiscount', id: '00001' },
        }),
      ];

      const result = SalesOrderUtil.getOrderItemDiscountRule(orderItemWithDiscount, rules);
      expect(result).toEqual(rules[0]);
    });

    it('should only match rules where both item ID and discount ID conditions are met', () => {
      const orderItemWithDiscount: OrderItemWithMatchingDiscount = {
        orderItem: orderItemTestFactory.build({
          orderItems: [orderItemTestFactory.build({ id: '2' }), orderItemTestFactory.build({ id: '3' })],
        }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '00001' }),
      };
      const rules: Rule[] = [
        ruleFactory.build({
          targetOrderItemIds: ['3'],
          discount: { name: 'testdiscount', id: '00002' },
        }),
        ruleFactory.build({
          targetOrderItemIds: ['2'],
          discount: { name: 'testdiscount', id: '00001' },
        }),
      ];

      const result = SalesOrderUtil.getOrderItemDiscountRule(orderItemWithDiscount, rules);
      expect(result).toEqual(rules[1]); // Should match the second rule only
    });

    it('should only match rules where both item name and discount slotname conditions are met', () => {
      const orderItemWithDiscount: OrderItemWithMatchingDiscount = {
        orderItem: orderItemTestFactory.build({
          orderItems: [orderItemTestFactory.build({ id: '2' }), orderItemTestFactory.build({ id: '3' })],
        }),
        customerChosenDiscount: sdataDiscountFactory.build({ type: 'test-type' }),
      };
      const rules: Rule[] = [
        ruleFactory.build({
          targetOrderItemIds: ['3'],
          discount: { name: 'testdiscount', id: '00002' },
        }),
        ruleFactory.build({
          slotName: 'test-type',
          targetOrderItemIds: ['2'],
          discount: { name: 'testdiscount', id: '00001' },
        }),
      ];

      const result = SalesOrderUtil.getOrderItemDiscountRule(orderItemWithDiscount, rules);
      expect(result).toEqual(rules[1]); // Should match the second rule only
    });
  });

  describe('checkoutDeliveryRequired', () => {
    it('should return true if the sales order has proper validation element', () => {
      const validationElement: ValidationElement = {
        targetOrderItemId: '1',
        typeOfProblem: ValidationElementEnum.CHECKOUT_DELIVERY_REQUIRED,
      };
      const salesOrder = salesOrderFactory.build({ validationElements: [validationElement] });
      const actual = SalesOrderUtil.checkoutDeliveryRequired(salesOrder);
      expect(actual).toBe(true);
    });

    it('should return false if the sales order does not have proper validation element', () => {
      const validationElement: ValidationElement = {
        targetOrderItemId: '1',
        typeOfProblem: ValidationElementEnum.FEASIBILITY_CHECK_REQUIRED,
      };
      const salesOrder = salesOrderFactory.build({ validationElements: [validationElement] });
      const actual = SalesOrderUtil.checkoutDeliveryRequired(salesOrder);
      expect(actual).toBe(false);
    });
  });
});
