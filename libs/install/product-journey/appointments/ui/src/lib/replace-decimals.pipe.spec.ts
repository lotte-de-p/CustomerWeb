import { TestBed } from '@angular/core/testing';
import { ReplaceDecimalsPipe } from './replace-decimals.pipe';

describe('ReplaceDecimalsPipe', () => {
  let replaceDecimalsPipe: ReplaceDecimalsPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplaceDecimalsPipe, { provide: 'Window', useValue: {} }],
    });

    replaceDecimalsPipe = TestBed.inject(ReplaceDecimalsPipe);
  });

  describe('transform', () => {
    it('should return value if it is undefined', () => {
      const actual = replaceDecimalsPipe.transform('');
      expect(actual).toBe('');
    });

    it('should return string without comma seperated and trailing zeroes', () => {
      const actual = replaceDecimalsPipe.transform('650,00');
      expect(actual).toBe('650');
    });

    it('should return string without decimal point and trailing zeroes', () => {
      const actual = replaceDecimalsPipe.transform('352.00');
      expect(actual).toBe('352');
    });

    it('should return original string if it does not have decimal point and trailing zeroes', () => {
      const actual = replaceDecimalsPipe.transform('352');
      expect(actual).toBe('352');
    });

    it('should return original string without decimal point and trailing zeroes when number is passed', () => {
      const actual = replaceDecimalsPipe.transform(302.0);
      expect(actual).toBe('302');
    });

    it('should return original string if it does not have decimal point and trailing zeroes', () => {
      const actual = replaceDecimalsPipe.transform(302);
      expect(actual).toBe('302');
    });
  });
});
