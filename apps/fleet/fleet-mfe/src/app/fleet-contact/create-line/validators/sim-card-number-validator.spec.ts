import { SimCardNumberValidator } from './sim-card-number-validator';
import { AbstractControl } from '@angular/forms';
import { expect } from '@jest/globals';

describe('SimCardNumberValidator', () => {
  let validatorFn;

  describe('valid', () => {
    it('given valid simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('893203');
      const control = { value: '0000205519507' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid proximus simCardNumber starting with 2100 the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '2100277354306' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid proximus simCardNumber with iin prefix the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '8932002100295944286' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid proximus simCardNumber not starting with 2100 the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '1999315017655' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid orange simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('893203');
      const control = { value: '9631310818318' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid BASE 19 digit simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '8932030200698573173' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given valid TELENET 19 digit simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '8932070009062046679' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });
  });

  describe('inValid', () => {
    it('given invalid 13 digit simCardNumber the validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '2599070360436' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid 13 digit proximus simCardNumber starting with 2100 the validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '2100215444835' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid 13 digit proximus simCardNumber not starting with 2100 the validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '7308122131191' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid 13 digit orange simCardNumber validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '9621310156784' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid 19 digit simCardNumber validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('893203');
      const control = { value: '0003014144276' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid digit less than 13 digit simCardNumber validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '8932030000' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid digit between 13 and 19 simCardNumber validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '89320300003456' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });
  });

  describe('when simCardConstraintWarning flag is true', () => {
    it('given valid 13 or 19 digit simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '2100295944286' };
      expect(validatorFn(control as AbstractControl)).toBeNull();
    });

    it('given invalid 14 digit simCardNumber the validation fails', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '12345678901231' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });

    it('given invalid 13 or 19 digit simCardNumber the validation passes', () => {
      validatorFn = SimCardNumberValidator.isValidSimCardWithIccidNumber('');
      const control = { value: '1234567890123' };
      expect(validatorFn(control as AbstractControl)).toEqual({ invalidIccid: true });
    });
  });
});
