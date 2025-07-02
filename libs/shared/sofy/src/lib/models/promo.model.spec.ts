import { PromoModel } from './promo.model';

describe('PromoModel', (): void => {
  describe('getNormalizedName', (): void => {
    it('should normalize text', (): void => {
      const promoModel = new PromoModel();
      promoModel.name = ' w w . w.rrr. 12100s6 ww _ 21';
      const actualNormalizedName = promoModel.getNormalizedName();
      expect(actualNormalizedName).toEqual('-w-w---w-rrr--12100s6-ww-_-21');
    });
    it('should empty string given no name', (): void => {
      const promoModel = new PromoModel();
      const actualNormalizedName = promoModel.getNormalizedName();
      expect(actualNormalizedName).toEqual('');
    });
  });

  describe('getAbsoluteAmount', (): void => {
    it('should return price abs', (): void => {
      const promoModel = new PromoModel();
      promoModel.price = 12.55;
      const actual = promoModel.getAbsoluteAmount();
      expect(actual).toEqual(12.55);
    });
  });
});
