import { TestBed } from '@angular/core/testing';
import { PromotionMapper } from './promotion.mapper';
import { RawPromotionResult } from './raw-promotion-result.interface';
import { Promotion } from '../../../entities/product-finder/promotion/promotion.interface';

describe('PromotionMapper', () => {
  let promotionMapper: PromotionMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    promotionMapper = TestBed.inject(PromotionMapper);
  });

  describe('toModel', () => {
    it('should map RawPromotionResult to Promotion[]', () => {
      const rawPromotionResult: RawPromotionResult = {
        promotions: [
          {
            description: 'description',
          },
        ],
      };
      const expected: Promotion[] = [
        {
          description: 'description',
        },
      ];

      const result: Promotion[] = promotionMapper.toModel(rawPromotionResult);

      expect(result).toEqual(expected);
    });
  });
});
