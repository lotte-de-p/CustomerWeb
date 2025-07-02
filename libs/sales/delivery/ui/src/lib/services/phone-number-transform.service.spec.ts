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

    it('should return transformed phone number for phone number starting with +', () => {
      const actual = phoneNumberTransformService.transform('+3231234567');
      expect(actual).toBe('03 123 45 67');
    });
  });

  describe('doNormaliseMsisdn', () => {
    it('should return normalised mobile phone number', () => {
      expect(phoneNumberTransformService.doNormaliseMsisdn('32487070647')).toBe('0487070647');
    });

    it('should return normalised mobile phone number', () => {
      expect(phoneNumberTransformService.doNormaliseMsisdn('32412345678')).toBe(UNFORMATTED_NUMBER);
    });
  });

  describe('autoFormatPhoneNumber', () => {
    it('should convert msisdn from +32XX to 04XXX format after tab out', () => {
      const actual = phoneNumberTransformService.autoFormatPhoneNumber('+32457956895');
      expect(actual).toBe('0457956895');
    });

    it('should convert msisdn from 0032XX to 04XXX format after tab out', () => {
      const actual = phoneNumberTransformService.autoFormatPhoneNumber('0032457956895');
      expect(actual).toBe('0457956895');
    });

    it('should convert msisdn starting from 4XX to 04XXX format after tab out', () => {
      const actual = phoneNumberTransformService.autoFormatPhoneNumber('457956895');
      expect(actual).toBe('0457956895');
    });

    it('should not convert msisdn starting from +91XX to 04XXX format after tab out', () => {
      const actual = phoneNumberTransformService.autoFormatPhoneNumber('+917719094532');
      expect(actual).toBe('+917719094532');
    });
  });
});
