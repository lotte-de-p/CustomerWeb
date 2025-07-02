import {
  hardwareOrderItem,
  hardwareOrderTLOItem,
  pricesTestFactory,
  priceTestFactory,
  salesOrderFactory,
} from '../+state/hardware-checkout.testfactory';
import { OmapiUtil } from './omapi.util';
import { SalesOrderUtil } from './sales-order.util';
import { OrderItem } from '../interfaces/sales-order.interface';

describe('SalesOrderutil', () => {
  let hardwareTLO: OrderItem;
  let smartphone: OrderItem;
  let charger: OrderItem;

  beforeEach(() => {
    jest.spyOn(OmapiUtil, 'getProductType').mockReturnValue('TEST');
    smartphone = hardwareOrderItem.build({
      action: 'Add',
      chars: {
        'Item Code': '',
      },
      prices: pricesTestFactory.build({
        upfrontPaymentTotalWithoutTaxes: priceTestFactory.build(),
        upfrontPaymentTotal: priceTestFactory.build({ value: '121.0000' }),
        oneTimeDiscountedWithoutTaxes: priceTestFactory.build({ value: '1.2000' }),
        oneTimeDiscounted: priceTestFactory.build({ value: '1.0000' }),
        oneTimeTotalWithoutTaxes: priceTestFactory.build({ value: '1000.0000' }),
        oneTimeTotal: priceTestFactory.build({ value: '1210.00' }),
        recurrentTotalWithoutTaxes: priceTestFactory.build({ value: '10.0000' }),
        recurrentTotal: priceTestFactory.build({ value: '11.0000' }),
        recurrentDiscountedWithoutTaxes: priceTestFactory.build({ value: '13.0000' }),
        recurrentDiscounted: priceTestFactory.build({ value: '14.0000' }),
      }),
    });
    charger = hardwareOrderItem.build({
      action: 'Add',
      chars: {
        'Item Code': '',
      },
      prices: pricesTestFactory.build({
        upfrontPaymentTotalWithoutTaxes: priceTestFactory.build({ value: '30.0000' }),
        upfrontPaymentTotal: priceTestFactory.build({ value: '31.0000' }),
        oneTimeDiscountedWithoutTaxes: priceTestFactory.build({ value: '25.0000' }),
        oneTimeDiscounted: priceTestFactory.build({ value: '26.0000' }),
        oneTimeTotalWithoutTaxes: priceTestFactory.build({ value: '35.0000' }),
        oneTimeTotal: priceTestFactory.build({ value: '36.00' }),
        recurrentTotalWithoutTaxes: priceTestFactory.build({ value: '300.0000' }),
        recurrentTotal: priceTestFactory.build({ value: '301.0000' }),
        recurrentDiscountedWithoutTaxes: priceTestFactory.build({ value: '302.0000' }),
        recurrentDiscounted: priceTestFactory.build({ value: '303.0000' }),
      }),
    });
    hardwareTLO = hardwareTLO = hardwareOrderTLOItem.build({
      orderItems: [
        hardwareOrderItem.build({
          action: '-',
        }),
        hardwareOrderItem.build({
          action: 'Add',
          chars: {
            'Item Code': '3300389',
          },
          orderItems: [smartphone],
        }),
        hardwareOrderItem.build({
          action: 'Add',
          chars: {
            'Item Code': '2119684',
          },
          orderItems: [charger],
        }),
      ],
    });
  });

  describe('mapToUdlCart', () => {
    it('should map sales order to udl cart', () => {
      const salesOrder = salesOrderFactory.build({ orderItems: [hardwareTLO] });

      const actual = SalesOrderUtil.mapToUdlCart(salesOrder, [], false);

      expect(actual).toBeDefined();
      expect(actual.getCartID()).toEqual('9168485854013261194');
      expect(actual.getPrice().getBasePrice().getOnetimePrice()).toEqual(121 + 31);
      expect(actual.getPrice().getBasePrice().getRecurringPrice()).toEqual(11 + 301);
      expect(actual.getPrice().getTotalPrice().getOnetimePrice()).toEqual(121 + 31);
      expect(actual.getPrice().getTotalPrice().getRecurringPrice()).toEqual(14 + 303);

      expect(actual.getItems()).toHaveLength(2);

      expect(actual.getItems()[0].getPrice()).toBeDefined();
      expect(actual.getItems()[0].getPrice().getBasePrice().getOnetimePrice()).toEqual(121);
      expect(actual.getItems()[0].getPrice().getBasePrice().getRecurringPrice()).toEqual(11);
      expect(actual.getItems()[0].getPrice().getBasePrice().getSummaryPrice()).toEqual(121 + 11);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(121);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(14);

      expect(actual.getItems()[0].getProductInfo().getProductID()).toEqual('3300389');
      expect(actual.getItems()[0].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[0].getProductInfo().getProductType()).toEqual('TEST');

      expect(actual.getItems()[1].getPrice()).toBeDefined();
      expect(actual.getItems()[1].getPrice().getBasePrice().getOnetimePrice()).toEqual(31);
      expect(actual.getItems()[1].getPrice().getBasePrice().getRecurringPrice()).toEqual(301);
      expect(actual.getItems()[1].getPrice().getBasePrice().getSummaryPrice()).toEqual(31 + 301);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(31);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(303);

      expect(actual.getItems()[1].getProductInfo().getProductID()).toEqual('2119684');
      expect(actual.getItems()[1].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[1].getProductInfo().getProductType()).toEqual('TEST');
    });
    it('should map sales order to udl cart for SOHO', () => {
      const salesOrder = salesOrderFactory.build({ orderItems: [hardwareTLO] });

      const actual = SalesOrderUtil.mapToUdlCart(salesOrder, [], true);

      expect(actual).toBeDefined();
      expect(actual.getCartID()).toEqual('9168485854013261194');
      expect(actual.getPrice().getBasePrice().getOnetimePrice()).toEqual(100 + 30);
      expect(actual.getPrice().getBasePrice().getRecurringPrice()).toEqual(10 + 300);
      expect(actual.getPrice().getTotalPrice().getOnetimePrice()).toEqual(100 + 30);
      expect(actual.getPrice().getTotalPrice().getRecurringPrice()).toEqual(13 + 302);

      expect(actual.getItems()).toHaveLength(2);

      expect(actual.getItems()[0].getPrice()).toBeDefined();
      expect(actual.getItems()[0].getPrice().getBasePrice().getOnetimePrice()).toEqual(100);
      expect(actual.getItems()[0].getPrice().getBasePrice().getRecurringPrice()).toEqual(10);
      expect(actual.getItems()[0].getPrice().getBasePrice().getSummaryPrice()).toEqual(100 + 10);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(100);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(13);

      expect(actual.getItems()[0].getProductInfo().getProductID()).toEqual('3300389');
      expect(actual.getItems()[0].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[0].getProductInfo().getProductType()).toEqual('TEST');

      expect(actual.getItems()[1].getPrice()).toBeDefined();
      expect(actual.getItems()[1].getPrice().getBasePrice().getOnetimePrice()).toEqual(30);
      expect(actual.getItems()[1].getPrice().getBasePrice().getRecurringPrice()).toEqual(300);
      expect(actual.getItems()[1].getPrice().getBasePrice().getSummaryPrice()).toEqual(30 + 300);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(30);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(302);

      expect(actual.getItems()[1].getProductInfo().getProductID()).toEqual('2119684');
      expect(actual.getItems()[1].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[1].getProductInfo().getProductType()).toEqual('TEST');
    });
    it('should use specific values if upfrontPaymentTotal is not available', () => {
      smartphone.prices.upfrontPaymentTotal.value = '0.0000';
      charger.prices.upfrontPaymentTotal.value = '0.0000';

      const salesOrder = salesOrderFactory.build({ orderItems: [hardwareTLO] });

      const actual = SalesOrderUtil.mapToUdlCart(salesOrder, [], false);

      expect(actual).toBeDefined();
      expect(actual.getPrice().getBasePrice().getOnetimePrice()).toEqual(1210 + 36);
      expect(actual.getPrice().getBasePrice().getRecurringPrice()).toEqual(11 + 301);
      expect(actual.getPrice().getTotalPrice().getOnetimePrice()).toEqual(1 + 26);
      expect(actual.getPrice().getTotalPrice().getRecurringPrice()).toEqual(14 + 303);

      expect(actual.getItems()[0].getPrice()).toBeDefined();
      expect(actual.getItems()[0].getPrice().getBasePrice().getOnetimePrice()).toEqual(1210);
      expect(actual.getItems()[0].getPrice().getBasePrice().getRecurringPrice()).toEqual(11);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(1);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(14);

      expect(actual.getItems()[1].getPrice()).toBeDefined();
      expect(actual.getItems()[1].getPrice().getBasePrice().getOnetimePrice()).toEqual(36);
      expect(actual.getItems()[1].getPrice().getBasePrice().getRecurringPrice()).toEqual(301);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(26);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(303);
    });
    it('should use specific values if upfrontPaymentTotal is not available for SOHO', () => {
      smartphone.prices.upfrontPaymentTotalWithoutTaxes.value = '0.0000';
      charger.prices.upfrontPaymentTotalWithoutTaxes.value = '0.0000';

      const salesOrder = salesOrderFactory.build({ orderItems: [hardwareTLO] });

      const actual = SalesOrderUtil.mapToUdlCart(salesOrder, [], true);

      expect(actual).toBeDefined();
      expect(actual.getPrice().getBasePrice().getOnetimePrice()).toEqual(1000 + 35);
      expect(actual.getPrice().getBasePrice().getRecurringPrice()).toEqual(10 + 300);
      expect(actual.getPrice().getTotalPrice().getOnetimePrice()).toEqual(1.2 + 25);
      expect(actual.getPrice().getTotalPrice().getRecurringPrice()).toEqual(13 + 302);

      expect(actual.getItems()[0].getPrice()).toBeDefined();
      expect(actual.getItems()[0].getPrice().getBasePrice().getOnetimePrice()).toEqual(1000);
      expect(actual.getItems()[0].getPrice().getBasePrice().getRecurringPrice()).toEqual(10);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(1.2);
      expect(actual.getItems()[0].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(13);

      expect(actual.getItems()[1].getPrice()).toBeDefined();
      expect(actual.getItems()[1].getPrice().getBasePrice().getOnetimePrice()).toEqual(35);
      expect(actual.getItems()[1].getPrice().getBasePrice().getRecurringPrice()).toEqual(300);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getOnetimePrice()).toEqual(25);
      expect(actual.getItems()[1].getPrice().getDiscountedPrice().getRecurringPrice()).toEqual(302);
    });
    it('should map productType of productInfo to MISSING_OMAPI when omapi data not found', () => {
      jest.spyOn(OmapiUtil, 'getProductType').mockReturnValue(undefined);

      const salesOrder = salesOrderFactory.build({ orderItems: [hardwareTLO] });

      const actual = SalesOrderUtil.mapToUdlCart(salesOrder, [], true);

      expect(actual.getItems()[0].getProductInfo().getProductType()).toEqual('MISSING_OMAPI');
    });
  });
});
