import { PhoneNumberPipe } from './phone-number.pipe';
import { FormGroup, FormControl } from '@angular/forms';

describe('PhoneNumberPipe', () => {
  let pipe: PhoneNumberPipe;

  beforeEach(() => {
    pipe = new PhoneNumberPipe();
  });

  describe('transform', () => {
    it('should return a formatted national phone number', () => {
      const result = pipe.transform('003212345678');
      expect(result).toEqual('012 34 56 78');
    });

    it('should return a formatted national mobile number', () => {
      const result = pipe.transform('0032471234567');
      expect(result).toEqual('0471 23 45 67');
    });

    it('should return a formatted international phone number', () => {
      const result = pipe.transform('+441234567890');
      expect(result).toEqual('+441234567890');
    });

    it('should return the same phone number if no match is found', () => {
      const result = pipe.transform('987654321');
      expect(result).toEqual('987654321');
    });

    it('should return an empty string if phoneNumber is undefined', () => {
      const result = pipe.transform(undefined);
      expect(result).toEqual('');
    });
  });

  describe('autoFormatPhoneNumber', () => {
    it('should return a formatted national mobile number', () => {
      const result = pipe.autoFormatPhoneNumber('0471234567');
      expect(result).toEqual('0471234567');
    });

    it('should return a formatted international number', () => {
      const result = pipe.autoFormatPhoneNumber('+441234567890');
      expect(result).toEqual('+441234567890');
    });

    it('should return the same number if it is not a valid national or international number', () => {
      const result = pipe.autoFormatPhoneNumber('987654321');
      expect(result).toEqual('0987654321');
    });

    it('should return empty string if msisdn is empty', () => {
      const result = pipe.autoFormatPhoneNumber('');
      expect(result).toEqual('');
    });
  });

  describe('doNormaliseMsisdn', () => {
    it('should normalize the number and add leading zero if not present', () => {
      const result = pipe.doNormaliseMsisdn('123456789');
      expect(result).toEqual('0123456789');
    });

    it('should not add a leading zero if already present', () => {
      const result = pipe.doNormaliseMsisdn('0123456789');
      expect(result).toEqual('0123456789');
    });

    it('should remove spaces from the number', () => {
      const result = pipe.doNormaliseMsisdn('012 34 56 789');
      expect(result).toEqual('0123456789');
    });
  });

  describe('isValidNationalMobileNumber', () => {
    it('should return true for valid national mobile number', () => {
      const result = pipe.isValidNationalMobileNumber('0471234567');
      expect(result).toBe(true);
    });

    it('should return false for invalid national mobile number', () => {
      const result = pipe.isValidNationalMobileNumber('123456789');
      expect(result).toBe(false);
    });
  });

  describe('isValidInternationalNumber', () => {
    it('should return true for a valid international number', () => {
      const result = pipe.isValidInternationalNumber('+441234567890');
      expect(result).toBe(true);
    });

    it('should return false for an invalid international number', () => {
      const result = pipe.isValidInternationalNumber('123456');
      expect(result).toBe(false);
    });
  });

  describe('getFormattedNRN', () => {
    it('should format NRN correctly for 11 digit number', () => {
      const result = pipe.getFormattedNRN('92122112345');
      expect(result).toEqual('92.12.21-123.45');
    });

    it('should return the same string for invalid NRN length', () => {
      const result = pipe.getFormattedNRN('123');
      expect(result).toEqual('123');
    });
  });

  describe('isValidationErrorWhenPristine', () => {
    it('should return true when form control has the specified error', () => {
      const formGroup = new FormGroup({
        phoneNumber: new FormControl('', { validators: [], updateOn: 'change' }),
      });
      formGroup.get('phoneNumber')?.setErrors({ required: true });

      const result = pipe.isValidationErrorWhenPristine('phoneNumber', formGroup, 'required');
      expect(result).toBe(true);
    });

    it('should return false when form control does not have the specified error', () => {
      const formGroup = new FormGroup({
        phoneNumber: new FormControl('', { validators: [], updateOn: 'change' }),
      });

      const result = pipe.isValidationErrorWhenPristine('phoneNumber', formGroup, 'required');
      expect(result).toBe(false);
    });
  });

  describe('PhoneNumberPipe - filterBasePhoneNumber', () => {
    let pipe: PhoneNumberPipe;

    beforeEach(() => {
      pipe = new PhoneNumberPipe();
    });

    it('should format phone number starting with 0032', () => {
      const result = pipe['filterBasePhoneNumber']('003212345678');
      expect(result).toEqual('012 34 56 78');
    });

    it('should format phone number starting with 032', () => {
      const result = pipe['filterBasePhoneNumber']('03212345678');
      expect(result).toEqual('012 34 56 78');
    });

    it('should format phone number starting with +32', () => {
      const result = pipe['filterBasePhoneNumber']('+3212345678');
      expect(result).toEqual('012 34 56 78');
    });

    it('should format phone number starting with 32', () => {
      const result = pipe['filterBasePhoneNumber']('3212345678');
      expect(result).toEqual('012 34 56 78');
    });

    it('should format phone number starting with 00 (non-0032)', () => {
      const result = pipe['filterBasePhoneNumber']('004412345678');
      expect(result).toEqual('04412 34 56 78');
    });

    it('should format phone number without country code', () => {
      const result = pipe['filterBasePhoneNumber']('12345678');
      expect(result).toEqual('12 34 56 78');
    });
  });
});
