import { AbstractControl } from '@angular/forms';
import { BelgianEidValidator } from '.';

describe('BelgianEidValidator', () => {
  describe('isNumberValid', () => {
    it('should return undefined when the National Registry Number is empty', () => {
      const control = { value: '' };
      expect(BelgianEidValidator.isNumberValid(control as AbstractControl)).toBeNull();
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      const control = { value: 'RTC-9407418-00' };
      expect(BelgianEidValidator.isNumberValid(control as AbstractControl)).toEqual({ invalidEid: true });
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      const control = { value: 'RTC-9407' };
      expect(BelgianEidValidator.isNumberValid(control as AbstractControl)).toEqual({ invalidEid: true });
    });

    it('should return null when the National Registry Number is a valid format', () => {
      const control = { value: 'RTC-9407418-67' };
      expect(BelgianEidValidator.isNumberValid(control as AbstractControl)).toEqual(null);
    });

    it('should return null when the National Registry Number is a valid format', () => {
      const control = { value: '592-8470056-97' };
      expect(BelgianEidValidator.isNumberValid(control as AbstractControl)).toEqual(null);
    });
  });
});
