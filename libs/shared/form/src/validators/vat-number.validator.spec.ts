import { AbstractControl } from '@angular/forms';
import { VatNumberValidator } from './vat-number.validator';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('VatNumberValidator ', () => {
  describe('isValidVatNumber', () => {
    it('should return an error when the vat number is invalid', () => {
      const value = '013414343122';
      const control = { value: value };
      expect(VatNumberValidator.isValidVatNumber(control as AbstractControl)).toEqual({
        invalidVatNumber: value,
      });
    });

    it('should return an error when the vat number is null', () => {
      const value = null;
      const control = { value: value };
      expect(VatNumberValidator.isValidVatNumber(control as AbstractControl)).toEqual({ required: true });
    });

    it('should return null when the VAT number is valid', () => {
      const control = { value: '0473416418' };
      expect(VatNumberValidator.isValidVatNumber(control as AbstractControl)).toBeNull();
    });

    it('should return null when the VAT number is valid', () => {
      const control = { value: 'BE0473416418' };
      expect(VatNumberValidator.isValidVatNumber(control as AbstractControl)).toBeNull();
    });

    it('should return false when the VAT number is valid', () => {
      const control = { value: 'BE047341FF18' };
      expect(VatNumberValidator.isValidVatNumber(control as AbstractControl)).toEqual({
        invalidVatNumber: '047341FF18',
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
