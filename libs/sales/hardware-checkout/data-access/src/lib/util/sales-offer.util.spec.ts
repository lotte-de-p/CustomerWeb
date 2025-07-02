import { SalesOfferUtil } from './sales-offer.util';
import { defaultSdataSalesOfferFactory } from '../interfaces/sdata-sales-offer.testfactory';

describe('SalesOfferUtil', () => {
  describe('mapToUdlCart', () => {
    it('should map Sdata to UDL cart', () => {
      const sdata = defaultSdataSalesOfferFactory.build();

      const actual = SalesOfferUtil.mapToUdlCart(sdata);

      expect(actual).toBeDefined();

      expect(actual.getPrice().getBasePrice().getOnetimePrice()).toEqual(0);
      expect(actual.getPrice().getBasePrice().getRecurringPrice()).toEqual(0);
      expect(actual.getPrice().getTotalPrice().getOnetimePrice()).toEqual(0);
      expect(actual.getPrice().getTotalPrice().getRecurringPrice()).toEqual(0);

      expect(actual.getItems()).toHaveLength(2);
      expect(actual.getItems()[0].getPrice()).toBeUndefined();
      expect(actual.getItems()[0].getProductInfo().getProductID()).toEqual('3300389');
      expect(actual.getItems()[0].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[0].getProductInfo().getProductType()).toEqual('SMARTPHONE');
      expect(actual.getItems()[1].getPrice()).toBeUndefined();
      expect(actual.getItems()[1].getProductInfo().getProductID()).toEqual('2119684');
      expect(actual.getItems()[1].getProductInfo().getProductStatus()).toEqual('ADD');
      expect(actual.getItems()[1].getProductInfo().getProductType()).toEqual('CHARGER');
    });
  });
});
