import { TestBed } from '@angular/core/testing';
import { PriceService } from './price.service';
import { PathCategorisationService, windowFactory } from '@telenet/ng-lib-page';

const shouldReturnFalseForValidPrice = 'should return FALSE for valid price';
const shouldReturnTrueForValidPrice = 'should return TRUE for valid price';
const shouldReturnPriceWith2DecimalsStringIf2DigitsNumberGivenRoundHalfUp =
  'should return price with 2 decimals string if 2 digits number given round half up';
describe('PriceService', () => {
  let priceService: PriceService, pathCategorisationService: PathCategorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceService, PathCategorisationService, { provide: 'Window', useValue: windowFactory() }],
    });

    priceService = TestBed.inject(PriceService);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
  });

  describe('isValidPrice', () => {
    it(shouldReturnTrueForValidPrice, () => {
      const actual = priceService.isValidPrice('20,00');
      expect(actual).toBe(true);
    });

    it(shouldReturnTrueForValidPrice, () => {
      const actual = priceService.isValidPrice('20.00');
      expect(actual).toBe(true);
    });

    it(shouldReturnFalseForValidPrice, () => {
      const actual = priceService.isValidPrice('0');
      expect(actual).toBe(false);
    });

    it(shouldReturnFalseForValidPrice, () => {
      const actual = priceService.isValidPrice('0,0');
      expect(actual).toBe(false);
    });

    it(shouldReturnFalseForValidPrice, () => {
      const actual = priceService.isValidPrice('0,00');
      expect(actual).toBe(false);
    });

    it(shouldReturnFalseForValidPrice, () => {
      const actual = priceService.isValidPrice('0.0');
      expect(actual).toBe(false);
    });

    it(shouldReturnFalseForValidPrice, () => {
      const actual = priceService.isValidPrice('0.00');
      expect(actual).toBe(false);
    });
  });

  describe('getTaxType', () => {
    it('should return taxInclPrices when customer category is RESIDENTIAL', () => {
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('RESIDENTIAL');
      const actual = priceService.getTaxType();
      expect(actual).toBe('taxInclPrices');
    });

    it('should return taxExclPrices when customer category is BUSINESS', () => {
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('BUSINESS');
      const actual = priceService.getTaxType();
      expect(actual).toBe('taxExclPrices');
    });

    it('should return taxInclPrices when customer category is default', () => {
      jest.spyOn(pathCategorisationService, 'getCustomerCategory').mockReturnValue('');
      const actual = priceService.getTaxType();
      expect(actual).toBe('taxInclPrices');
    });
  });

  describe('transform', () => {
    it('should return empty string if no number given', () => {
      const actual = priceService.transform(null);

      expect(actual).toEqual('');
    });
    it('should return empty string if null number given', () => {
      const actual = priceService.transform(null);

      expect(actual).toEqual('');
    });
    it('should return price if 0 is given', () => {
      const actual = priceService.transform(0);

      expect(actual).toEqual('0,00');
    });
    it('should return price with 2 decimals string if natural number given', () => {
      const actual = priceService.transform(5);

      expect(actual).toEqual('5,00');
    });
    it('should return price with 2 decimals string if 1 digits number given', () => {
      const actual = priceService.transform(5.1);

      expect(actual).toEqual('5,10');
    });
    it('should return price with 2 decimals string if 2 digits number given 2', () => {
      const actual = priceService.transform(5.16);

      expect(actual).toEqual('5,16');
    });
    it(shouldReturnPriceWith2DecimalsStringIf2DigitsNumberGivenRoundHalfUp, () => {
      const actual = priceService.transform(5.161);

      expect(actual).toEqual('5,16');
    });
    it(shouldReturnPriceWith2DecimalsStringIf2DigitsNumberGivenRoundHalfUp, () => {
      const actual = priceService.transform(5.165);

      expect(actual).toEqual('5,17');
    });
    it('should return dot separated for decimals if locale is en', () => {
      const actual = priceService.transform(5.165, true, true);

      expect(actual).toEqual('5.17');
    });
  });
});
