import { TestBed } from '@angular/core/testing';
import { PricePipe } from './price.pipe';
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

    it('should return formatted string price for decimal price', () => {
      const actual = pricePipe.transform('5.22');
      expect(actual).toBe('5,22');
    });

    it('should return formatted absolute price', () => {
      const actual = pricePipe.transform(10.2201);
      expect(actual).toBe('10,22');
    });

    it('should return formatted negative price when absolute is false', () => {
      const actual = pricePipe.transform(-5.22);
      expect(actual).toBe('-5,22');
    });

    it('should return formatted price for int price', () => {
      const actual = pricePipe.transform(10);
      expect(actual).toBe('10,00');
    });

    it('should return formatted price when empty', () => {
      const actual = pricePipe.transform('');
      expect(actual).toBe('');
    });

    it('should return formatted string price for string price', () => {
      const actual = pricePipe.transform('10');
      expect(actual).toBe('10,00');
    });

    it('should return formatted price for negative int price', () => {
      const actual = pricePipe.transform(-10);
      expect(actual).toBe('-10,00');
    });

    it('should return formatted string price for negative int price', () => {
      const actual = pricePipe.transform('-10');
      expect(actual).toBe('-10,00');
    });

    it('transforms a string with characters into an empty string', () => {
      const result = pricePipe.transform('abc');
      expect(result).toEqual('');
    });

    it('transforms a zero number into formatted price string', () => {
      const result = pricePipe.transform(0);
      expect(result).toEqual('');
    });

    it('transforms a zero string into formatted price string', () => {
      const result = pricePipe.transform('0');
      expect(result).toEqual('');
    });
  });
});
