import { TestBed } from '@angular/core/testing';
import { PricingRenditionPipe } from './pricing-rendition.pipe';

describe('PricingRenditionPipe', () => {
  let pricingRenditionPipe: PricingRenditionPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingRenditionPipe, { provide: 'Window', useValue: {} }],
    });

    pricingRenditionPipe = TestBed.inject(PricingRenditionPipe);
  });

  describe('transform', () => {
    it('should return CSS when selectedRendition is textual and and is shoppingCart', () => {
      const actual = pricingRenditionPipe.transform('textual', true);
      expect(actual).toBe(
        `display--flex align-items--end promo-highlight__configurator__first-column flex-direction--row justify-content--center`
      );
    });

    it('should return CSS when selectedRendition is textual and and is not shoppingCart', () => {
      const actual = pricingRenditionPipe.transform('textual', false);
      expect(actual).toBe(`display--flex align-items--end`);
    });

    it('should return CSS when selectedRendition is not textual and and is not shoppingCart', () => {
      const actual = pricingRenditionPipe.transform('graphical', false);
      expect(actual).toBe(`display--flex align-items--center flex-direction--row flex-direction--column`);
    });
  });
});
