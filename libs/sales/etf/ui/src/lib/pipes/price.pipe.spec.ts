import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  describe('transform', () => {
    it('should transform a string to a price notation', () => {
      const transform = new PricePipe().transform('200');
      expect(transform).toEqual('200,00');
    });
  });
});
