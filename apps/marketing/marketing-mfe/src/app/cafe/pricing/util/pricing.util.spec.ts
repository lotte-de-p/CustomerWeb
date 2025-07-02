import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { PricingUtil } from './pricing.util';
import { SalesOffer, salesOfferTestFactory, salesOfferTestStandaloneOptionsFactory } from '@telenet/ng-lib-sofy';

describe('PricingUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
    });
  });

  describe('getPricingData', () => {
    let salesOffer: SalesOffer;
    beforeEach(() => {
      salesOffer = salesOfferTestFactory.build();
    });

    it('should return a PricingData model based on the provided salesOffer when exclusiveVat is set to false', () => {
      const actual = PricingUtil.getPricingData(salesOffer, false);

      expect(actual?.discountedPrice).toBe('115.00');
      expect(actual?.normalPrice).toBe('120.00');
      expect(actual?.duration).toBe(3);
    });

    it('should return a PricingData model based on the provided salesOffer when exclusiveVat is set to true', () => {
      const actual = PricingUtil.getPricingData(salesOffer, true);

      expect(actual?.discountedPrice).toBe('104.00');
      expect(actual?.normalPrice).toBe('107.00');
      expect(actual?.duration).toBe(3);
    });

    it('should return a correct PricingData model when standalone options are configured', () => {
      const salesOfferStandaloneOptions = salesOfferTestStandaloneOptionsFactory.build();
      const actual = PricingUtil.getPricingData(salesOfferStandaloneOptions, false);

      expect(actual?.discountedPrice).toBe('95.00');
      expect(actual?.normalPrice).toBe('100.00');
      expect(actual?.duration).toBe(3);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
