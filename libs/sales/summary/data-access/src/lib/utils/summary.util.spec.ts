import {
  orderItemTestFactory,
  pricesTestFactory,
  priceTestFactory,
  summaryDiscountFactory,
} from '../interfaces/order-item.testfactory';
import { SummaryUtil } from './summary.util';

describe('SummaryUtil', () => {
  describe('sortOrderItems', () => {
    it('should sort order items by discount then by price', () => {
      const summaryOrderItemsUnderTest = [
        orderItemTestFactory.build({
          prices: pricesTestFactory.build({
            total: priceTestFactory.build({
              value: '70',
            }),
            discount: priceTestFactory.build({
              value: '10',
            }),
            discounted: priceTestFactory.build({
              value: '60',
            }),
          }),
          discount: summaryDiscountFactory.build(),
        }),
        orderItemTestFactory.build({
          prices: pricesTestFactory.build({
            total: priceTestFactory.build({
              value: '80',
            }),
            discount: priceTestFactory.build({
              value: '0.0000',
            }),
            discounted: priceTestFactory.build({
              value: '0.0000',
            }),
          }),
        }),
        orderItemTestFactory.build({
          prices: pricesTestFactory.build({
            total: priceTestFactory.build({
              value: '90',
            }),
            discount: priceTestFactory.build({
              value: '0.0000',
            }),
            discounted: priceTestFactory.build({
              value: '0.0000',
            }),
          }),
        }),
        orderItemTestFactory.build({
          prices: pricesTestFactory.build({
            total: priceTestFactory.build({
              value: '100',
            }),
            discount: priceTestFactory.build({
              value: '10',
            }),
            discounted: priceTestFactory.build({
              value: '90',
            }),
          }),
          discount: summaryDiscountFactory.build(),
        }),
      ];

      const result = SummaryUtil.sortOrderItems(summaryOrderItemsUnderTest);
      expect(result[0].prices.total.value).toBe('100');
      expect(result[1].prices.total.value).toBe('70');
      expect(result[2].prices.total.value).toBe('90');
      expect(result[3].prices.total.value).toBe('80');
    });
  });
});
