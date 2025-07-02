import { TestBed } from '@angular/core/testing';
import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  let pricePipe: PricePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricePipe],
    });

    pricePipe = TestBed.inject(PricePipe);
  });

  it('should return formatted price with comma for default language', () => {
    const actual = pricePipe.transform(5.22);
    expect(actual).toBe('5,22');
  });

  it('should return formatted price with dot for English language', () => {
    const actual = pricePipe.transform(5.22, 'en');
    expect(actual).toBe('5.22');
  });

  it('should return formatted price for integer value', () => {
    const actual = pricePipe.transform(10);
    expect(actual).toBe('10,00');
  });

  it('should return formatted price for negative value', () => {
    const actual = pricePipe.transform(-5.22);
    expect(actual).toBe('-5,22');
  });

  it('should handle undefined price gracefully', () => {
    const actual = pricePipe.transform(undefined);
    expect(actual).toBe('0,00');
  });

  it('should handle zero price gracefully', () => {
    const actual = pricePipe.transform(0);
    expect(actual).toBe('0,00');
  });

  it('should handle zero price with English language', () => {
    const actual = pricePipe.transform(0, 'en');
    expect(actual).toBe('0.00');
  });
});
