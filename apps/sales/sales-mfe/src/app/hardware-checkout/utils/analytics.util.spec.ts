import { AnalyticsUtil } from './analytics.util';
import { Cart, CartBuilder } from 'udl';

describe('AnalyticsUtil', () => {
  const analyticsIntent = 'test intent';
  const urlSourceParam = 'url source';
  const urlFlowParam = 'url flow';
  const itemGroup = 'new sales';

  const cart: Cart = new CartBuilder().withCartId('test id').build();

  describe('enrichWithCommonAttributes', () => {
    it('should empty datalayer attributes if all params are undefined', () => {
      const actual = AnalyticsUtil.enrichWithCommonAttributes(undefined, undefined, undefined);

      expect(actual).toEqual({});
    });

    it('should return datalayer attributes with values from parameters', () => {
      const actual = AnalyticsUtil.enrichWithCommonAttributes(
        {
          intent: analyticsIntent,
          flowType: urlFlowParam,
          source: urlSourceParam,
          itemGroup: itemGroup,
        },
        { itemName: 'test name' },
        cart
      );

      expect(actual).toEqual({
        intent: analyticsIntent,
        flowType: urlFlowParam,
        source: urlSourceParam,
        itemGroup: itemGroup,
        itemName: 'test name',
        cart: cart,
      });
    });
  });
});
