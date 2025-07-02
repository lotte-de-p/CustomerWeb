import { TestBed } from '@angular/core/testing';
import { PricingSecondColumnModifierPipe } from './pricing-second-column-modifier.pipe';

describe('PricingSecondColumnModifierPipe', () => {
  let pricingSecondColumnModifierPipe: PricingSecondColumnModifierPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingSecondColumnModifierPipe, { provide: 'Window', useValue: {} }],
    });

    pricingSecondColumnModifierPipe = TestBed.inject(PricingSecondColumnModifierPipe);
  });

  describe('transform', () => {
    it('should return CSS when it is shoppingCart', () => {
      const actual = pricingSecondColumnModifierPipe.transform(true);
      expect(actual).toBe(`promo-highlight__configurator__second-column align-items--end text-align--right`);
    });

    it('should return CSS when it is not shoppingCart', () => {
      const actual = pricingSecondColumnModifierPipe.transform(false);
      expect(actual).toBe(``);
    });
  });
});
