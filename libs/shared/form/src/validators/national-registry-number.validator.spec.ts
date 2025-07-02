import { AbstractControl } from '@angular/forms';
import { NationalRegistryNumberValidator } from '.';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('NationalRegistryNumberValidator', () => {
  describe('isNumberValid', () => {
    it('should return undefined when the National Registry Number is empty', () => {
      const control = { value: '' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toBeNull();
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      const control = { value: '14.10.16-543.21' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual({
        invalidNrn: true,
      });
    });

    it('should return an error when the National Registry Number is not a correct format', () => {
      let control = { value: '14.10.32' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual({
        invalidNrn: true,
      });
      control = { value: '14.10.15-491.05' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual({
        invalidNrn: true,
      });
      control = { value: '10.12.25-294.26' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual({
        invalidNrn: true,
      });
    });

    it('should return null when the National Registry Number is a valid format', () => {
      const control = { value: '69.10.11-300.16' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
    });

    it('should return null for valid nrn number', function () {
      let control = { value: '17.07.30-033.84' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '63.05.01-631.18' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '59.05.13-944.37' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '25.08.29-512.72' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '63.01.21-625.75' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '57.12.14-408.65' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '14.10.15-491.34' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
      control = { value: '10.12.25-294.55' };
      expect(NationalRegistryNumberValidator.isNumberValid(control as AbstractControl)).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
