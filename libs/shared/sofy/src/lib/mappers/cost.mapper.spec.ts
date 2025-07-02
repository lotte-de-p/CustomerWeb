import { CostMapper } from './cost.mapper';
import { PromoMapper } from './promo.mapper';
import { CostInterface } from '../interfaces/cost.interface';

describe('CostMapper', (): void => {
  const costMapper = new CostMapper(new PromoMapper());
  describe('map', (): void => {
    it('should map the rawCost', (): void => {
      const actual = costMapper.map({
        name: 'The Big Bang Theory',
        price: 8,
        priceexclvat: 5,
        recurring: 2,
        promotions: [
          {
            price: 5,
            priceexclvat: 3,
            name: 'Sheldon',
            backendid: 123,
            legalid: '45',
            duration: 45,
            puk: 'Bazinga',
            period: { startDate: '123', endDate: '321' },
            tags: ['sup'],
            legalInformation: 'sup1',
          },
        ],
      } as CostInterface);
      const { promotions, ...otherCostValues } = actual;
      const { period, ...promoModel } = promotions[0];

      expect(otherCostValues).toEqual({
        name: 'The Big Bang Theory',
        price: 8,
        priceexclvat: 5,
        recurring: 2,
      });
      expect(promoModel).toEqual({
        backendid: 123,
        duration: 45,
        legalid: '45',
        name: 'Sheldon',
        price: 5,
        priceexclvat: 3,
        puk: 'Bazinga',
        tags: ['sup'],
      });
      expect({ ...period }).toEqual({ startDate: '123', endDate: '321' });
    });
  });
});
