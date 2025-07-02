import { TestBed } from '@angular/core/testing';
import { RawSalesOffer, SalesOffer } from '@sales/shared/data-access';
import { SalesOfferMapper } from './sales-offer.mapper';

describe('SalesOfferMapper', () => {
  let salesOfferMapper: SalesOfferMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    salesOfferMapper = TestBed.inject(SalesOfferMapper);
  });

  describe('toModel', () => {
    it('should map RawSalesOffer result to SalesOffer', () => {
      const rawSalesOffer: RawSalesOffer = {
        price: 10,
        promo: {
          price: 8,
          durationInMonths: 6,
        },
      };
      const expected: SalesOffer = {
        price: 10,
        promo: {
          price: 8,
          durationInMonths: 6,
        },
      };

      const result: SalesOffer = salesOfferMapper.toModel(rawSalesOffer);

      expect(result).toEqual(expected);
    });
  });
});
