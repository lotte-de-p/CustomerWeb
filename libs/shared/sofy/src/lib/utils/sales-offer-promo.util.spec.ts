import { cleanStylesFromDom, MockTranslateService } from '@telenet/ng-lib-shared';
import { SalesOfferPromo, salesOfferPromoFactory } from '../models/response';
import { SalesOfferPromoUtil } from './sales-offer-promo.util';
import SpyInstance = jest.SpyInstance;
import { when } from 'jest-when';

const spyOn = jest.spyOn;

const PROMO_ONE = 'ng.promotions.promo-one.text';
const PROMO_ONE_TBF = 'ng.promotions.promo-one.tbf.text';
const PROMOTIONS_DEFAULT_TEXT = 'ng.promotions.default.text';
const PROMOTIONS_DEFAULT_PERMANENT_TEXT = 'ng.promotions.default-permanent.text';
const PROMO_DEFAULT = 'ng.promotions.promo-one.text';

describe('SalesOfferPromoUtil', function () {
  describe('containsTag', function () {
    it('should return true if promo has specific tag', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();
      promotion.tags = ['combo'];

      expect(SalesOfferPromoUtil.containsTag([promotion], 'combo')).toBe(true);
    });
    it('should return false if promo does not has specific tag', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();
      promotion.tags = ['webdeal'];

      expect(SalesOfferPromoUtil.containsTag([promotion], 'combo')).toBe(false);
    });
    it('should return false if tags are empty', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();
      promotion.tags = [];

      expect(SalesOfferPromoUtil.containsTag([promotion], 'combo')).toBe(false);
    });
  });

  describe('hasDiscount', function () {
    it('should return true if promo has discount and duration', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();

      expect(SalesOfferPromoUtil.hasDiscount(promotion)).toBe(true);
    });
    it('should return false if promo has no discount', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ price: 0.0 });

      expect(SalesOfferPromoUtil.hasDiscount(promotion)).toBe(false);
    });
    it('should return false if promo has no duration', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0 });

      expect(SalesOfferPromoUtil.hasDiscount(promotion)).toBe(false);
    });
    it('should return false if promo has no duration and no discount', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0, price: 0.0 });

      expect(SalesOfferPromoUtil.hasDiscount(promotion)).toBe(false);
    });
  });

  describe('getOverviewLabel', function () {
    const mockTranslateService = new MockTranslateService();
    let translateServiceSpy: SpyInstance;
    let promotion: SalesOfferPromo;
    let permanentPromotion: SalesOfferPromo;

    beforeEach(() => {
      translateServiceSpy = spyOn(mockTranslateService, 'instant');
      when(translateServiceSpy).calledWith(PROMO_ONE).mockReturnValue('');
      when(translateServiceSpy).calledWith(PROMOTIONS_DEFAULT_TEXT).mockReturnValue(undefined);
      promotion = salesOfferPromoFactory.build();
      permanentPromotion = salesOfferPromoFactory.build({ duration: 0 });
    });

    describe('residential labels', function () {
      const isSoho = false;

      describe('monthly promotions', function () {
        const labelValues = { amount: '-5,00', product: 'test', duration: 3 };

        it('should return the copy and call translateService once with correct key', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(promotion, 'test', mockTranslateService, isSoho, -5);

          expect(translateServiceSpy).toHaveBeenCalledWith(PROMO_ONE, labelValues);
          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_DEFAULT);
        });

        it('should return the copy and call translateService twice with correct keys if only default key exits', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(promotion, 'test', mockTranslateService, isSoho, -5);

          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_DEFAULT);
        });

        it('should return the key if label does not exist and call translateService twice with correct keys for a soho product', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(promotion, 'test', mockTranslateService, isSoho, -5);

          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_ONE);
        });
      });

      describe('permanent promotions', function () {
        const labelValues = { amount: '-5,00', product: 'test', duration: 0 };
        it('should return the copy and call translateService once with correct key', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(
            permanentPromotion,
            'test',
            mockTranslateService,
            isSoho,
            -5
          );

          expect(translateServiceSpy).toHaveBeenCalledWith(PROMO_ONE, labelValues);
          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_DEFAULT);
        });

        it('should return the copy and call translateService twice with correct keys if only default key exits', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(
            permanentPromotion,
            'test',
            mockTranslateService,
            isSoho,
            -5
          );

          expect(translateServiceSpy).toHaveBeenCalledWith(PROMO_ONE, labelValues);
          expect(translateServiceSpy).toHaveBeenCalledWith(PROMOTIONS_DEFAULT_PERMANENT_TEXT, labelValues);
          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_DEFAULT);
        });

        it('should return the key if label does not exist and call translateService twice with correct keys', function () {
          const actual = SalesOfferPromoUtil.getOverviewLabel(
            permanentPromotion,
            'test',
            mockTranslateService,
            isSoho,
            -5
          );

          expect(translateServiceSpy).toHaveBeenCalledWith(PROMO_ONE, labelValues);
          expect(translateServiceSpy).toHaveBeenCalledWith(PROMOTIONS_DEFAULT_PERMANENT_TEXT, labelValues);
          expect(translateServiceSpy).toHaveBeenCalled();
          expect(actual).toEqual(PROMO_ONE);
        });
      });
    });

    describe('Soho labels', function () {
      const isSoho = true;
      const labelValues = { amount: '-5,00', product: 'test', duration: 3 };

      it('should return the copy and call translateService once with correct key for a soho product', function () {
        const actual = SalesOfferPromoUtil.getOverviewLabel(promotion, 'test', mockTranslateService, isSoho, -5);

        expect(translateServiceSpy).toHaveBeenCalledWith(PROMO_ONE_TBF, labelValues);
        expect(translateServiceSpy).toHaveBeenCalled();
        expect(actual).toEqual(PROMO_ONE_TBF);
      });
    });
  });

  describe('getShortestPromoExcludingZeroDurations', function () {
    it('should return undefined if no promo found with duration > 0', function () {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0 });

      expect(SalesOfferPromoUtil.getShortestPromoExcludingZeroDurations([promotion])).toBeUndefined();
    });
    it('should return undefined if no promo found with duration > 0', function () {
      const promotionZero: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0 });
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 3 });
      const promotion2: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 4 });

      expect(
        SalesOfferPromoUtil.getShortestPromoExcludingZeroDurations([promotion, promotionZero, promotion2])
      ).toEqual(promotion);
    });
  });

  describe('getPromoWithZeroDurationAndZeroDiscount', function () {
    it('should return undefined if no zero-duration-zero-discount promo', () => {
      const promotionZeroDuration: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0 });
      const promotionZeroDiscount: SalesOfferPromo = salesOfferPromoFactory.build({ price: 0 });
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 3 });

      expect(
        SalesOfferPromoUtil.getPromoWithZeroDurationAndZeroDiscount([
          promotion,
          promotionZeroDuration,
          promotionZeroDiscount,
        ])
      ).toBeUndefined();
    });
    it('should return the promotion with zero duration and zero discount', function () {
      const promotionZero: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 0, price: 0 });
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build({ duration: 3 });

      expect(SalesOfferPromoUtil.getPromoWithZeroDurationAndZeroDiscount([promotion, promotionZero])).toEqual(
        promotionZero
      );
    });
  });

  describe('getTotalDiscountWithZeroDuration', function () {
    const monthlyPromotion = salesOfferPromoFactory.build();
    const permanentPromotion7 = salesOfferPromoFactory.build({ price: -7, priceexclvat: -4, duration: 0 });
    const permanentPromotion10 = salesOfferPromoFactory.build({ price: -10, priceexclvat: -9, duration: 0 });

    it('should return zero in case no promotions', function () {
      expect(SalesOfferPromoUtil.getTotalDiscountWithZeroDuration([], false)).toEqual(0);
    });
    it('should return zero in case no zero duration promotions', function () {
      expect(SalesOfferPromoUtil.getTotalDiscountWithZeroDuration([monthlyPromotion], false)).toEqual(0);
    });
    it('should return sum incl vat of all zero promotions', function () {
      expect(
        SalesOfferPromoUtil.getTotalDiscountWithZeroDuration(
          [monthlyPromotion, permanentPromotion7, permanentPromotion10],
          false
        )
      ).toEqual(-17);
    });
    it('should return sum excl vat of all zero promotions in case of SOHO', function () {
      expect(
        SalesOfferPromoUtil.getTotalDiscountWithZeroDuration(
          [monthlyPromotion, permanentPromotion7, permanentPromotion10],
          true
        )
      ).toEqual(-13);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
