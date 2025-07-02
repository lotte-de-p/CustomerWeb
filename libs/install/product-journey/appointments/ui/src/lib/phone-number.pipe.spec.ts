import { TestBed } from '@angular/core/testing';
import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  let phoneNumberPipe: PhoneNumberPipe;
  const LOCAL_PHONE_NUMBER = '0412 34 56 78';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneNumberPipe, { provide: 'Window', useValue: {} }],
    });

    phoneNumberPipe = TestBed.inject(PhoneNumberPipe);
  });

  describe('transform', () => {
    it('should return transformed phone number for national phone number', () => {
      const actual = phoneNumberPipe.transform('0412345678');
      expect(actual).toBe(LOCAL_PHONE_NUMBER);
    });

    it('should return transformed phone number for national phone number', () => {
      const actual = phoneNumberPipe.transform('32412345678');
      expect(actual).toBe(LOCAL_PHONE_NUMBER);
    });

    it('should return transformed phone number for national mobile number', () => {
      const actual = phoneNumberPipe.transform('0412345678');
      expect(actual).toBe(LOCAL_PHONE_NUMBER);
    });

    it('should return transformed phone number for national mobile number', () => {
      const actual = phoneNumberPipe.transform('32412345678');
      expect(actual).toBe(LOCAL_PHONE_NUMBER);
    });

    it('should return transformed phone number for international number', () => {
      const actual = phoneNumberPipe.transform('009830098300');
      expect(actual).toBe('+9830098300');
    });

    it('should return transformed phone number for national phone number with country code', () => {
      const actual = phoneNumberPipe.transform('003294891487');
      expect(actual).toBe('09489 14 87');
    });

    it('should return empty string', () => {
      const actual = phoneNumberPipe.transform('');
      expect(actual).toBe('');
    });
  });
});
