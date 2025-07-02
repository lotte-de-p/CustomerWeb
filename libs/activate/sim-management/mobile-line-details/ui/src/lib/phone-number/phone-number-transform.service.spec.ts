import { TestBed } from '@angular/core/testing';
import { PhoneNumberTransformService } from './phone-number-transform.service';

const PHONE_NUMBER = '0412 34 56 78';
const UNFORMATTED_NUMBER = '0412345678';
describe('PhoneNumberTransformService', () => {
  let phoneNumberTransformService: PhoneNumberTransformService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    phoneNumberTransformService = TestBed.inject(PhoneNumberTransformService);
  });

  describe('transform', () => {
    it('should return transformed phone number for national phone number', () => {
      const actual = phoneNumberTransformService.transform(UNFORMATTED_NUMBER);
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for national phone number', () => {
      const actual = phoneNumberTransformService.transform('32412345678');
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for national mobile number', () => {
      const actual = phoneNumberTransformService.transform(UNFORMATTED_NUMBER);
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for national mobile number', () => {
      const actual = phoneNumberTransformService.transform('32412345678');
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for international number', () => {
      const actual = phoneNumberTransformService.transform('009830098300');
      expect(actual).toBe('+9830098300');
    });

    it('should return transformed phone number for base phone number', () => {
      const actual = phoneNumberTransformService.transform('00412345678');
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for phone number', () => {
      const actual = phoneNumberTransformService.transform('032412345678');
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for phone number', () => {
      const actual = phoneNumberTransformService.transform('0032412345678');
      expect(actual).toBe(PHONE_NUMBER);
    });

    it('should return transformed phone number for phone number starting with +', () => {
      const actual = phoneNumberTransformService.transform('+3231234567');
      expect(actual).toBe('03 123 45 67');
    });
  });
});
