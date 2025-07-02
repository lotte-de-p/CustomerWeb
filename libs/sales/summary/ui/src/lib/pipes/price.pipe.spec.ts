import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  describe('transform', () => {
    it('should transform a given value to a price', () => {
      const s = new PricePipe().transform({
        currency: { code: 'EUR', name: 'Euro' },
        value: '200',
      });
      expect(s).toEqual('200,00');
    });

    it('should transform a given value to a price, symbol given no EURO', () => {
      const s = new PricePipe().transform({
        currency: { code: 'USD', name: 'Dollar' },
        value: '200',
      });
      expect(s).toEqual('200,00');
    });

    it('should return 0,00 given no price', () => {
      const s = new PricePipe().transform(undefined);
      expect(s).toEqual('0,00');
    });
  });
});
