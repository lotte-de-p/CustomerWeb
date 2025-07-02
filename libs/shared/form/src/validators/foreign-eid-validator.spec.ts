import { AbstractControl } from '@angular/forms';
import { ForeignEidValidator } from './foreign-eid-validator';

describe('ForeignEidValidator', () => {
  describe('isForeignEidValid', () => {
    it('should return Null when the National Registry Number is empty', () => {
      const control = { value: '' };
      expect(ForeignEidValidator.isForeignEidValid(control as AbstractControl)).toBeNull();
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      const control = { value: 'my id card' };
      expect(ForeignEidValidator.isForeignEidValid(control as AbstractControl)).toEqual({ invalidEid: true });
    });

    it('should return null when the National Registry Number is a valid format', () => {
      const control = { value: 'KDE737182620' };
      expect(ForeignEidValidator.isForeignEidValid(control as AbstractControl)).toBeNull();
    });
  });
  describe('isForeignEidValidWithModCheck', () => {
    it('should return Null when the National Registry Number is empty', () => {
      const control = { value: '' };
      expect(ForeignEidValidator.isForeignEidValidWithModCheck(control as AbstractControl)).toBeNull();
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      const control = { value: 'my id card' };
      expect(ForeignEidValidator.isForeignEidValidWithModCheck(control as AbstractControl)).toEqual({
        invalidEid: true,
      });
    });

    it('should return null when the National Registry Number is a valid format', () => {
      const control = { value: 'KDE737182620' };
      expect(ForeignEidValidator.isForeignEidValidWithModCheck(control as AbstractControl)).toBeNull();
    });

    it('should return nan error when the National Registry Number is not a mod 97 format', () => {
      const control = { value: 'ABC1234' };
      expect(ForeignEidValidator.isForeignEidValidWithModCheck(control as AbstractControl)).toEqual({
        invalidEid: true,
      });
    });
  });
});
