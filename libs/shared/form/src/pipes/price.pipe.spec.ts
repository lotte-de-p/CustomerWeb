import { TestBed } from '@angular/core/testing';
import { PricePipe } from './price.pipe';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('pricePipe', () => {
  let pricePipe: PricePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricePipe, { provide: 'Window', useValue: {} }],
    });

    pricePipe = TestBed.inject(PricePipe);
  });

  describe('transform', () => {
    it('should return formatted price', () => {
      const actual = pricePipe.transform(5.22);

      expect(actual).toBe('5,22');
    });

    it('should return formatted absolute price', () => {
      const actual = pricePipe.transform(-5.22, true);

      expect(actual).toBe('5,22');
    });

    it('should return formatted negative price when absolute is false', () => {
      const actual = pricePipe.transform(-5.22, false);

      expect(actual).toBe('-5,22');
    });

    it('should return formatted showing decimals if decimals are zeroes', () => {
      const actual = pricePipe.transform(5, false);

      expect(actual).toBe('5,00');
    });

    it('should return formatted showing decimals if decimals not zeroes', () => {
      const actual = pricePipe.transform(5.01, false, false);

      expect(actual).toBe('5,01');
    });

    it('should return formatted not showing decimals if decimals are zeroes', () => {
      const actual = pricePipe.transform(5, false, false);

      expect(actual).toBe('5');
    });

    it('should return formatted not showing decimals if decimals are zeroes with dot separated decimals for en locale', () => {
      const actual = pricePipe.transform(5, false, true, 'en');

      expect(actual).toBe('5.00');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
