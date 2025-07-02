import { AbstractControl } from '@angular/forms';
import { BelgianPhoneNumberValidator } from './belgian-phone-number.validator';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('BelgianPhoneNumberValidator', () => {
  const shouldReturnAnErrorWhenThePhoneNumberIsNotACorrectFormat =
    'should return an error when the phone number is not a correct format';

  describe('validBelgianNumber', () => {
    it(shouldReturnAnErrorWhenThePhoneNumberIsNotACorrectFormat, () => {
      const control = { value: '222444' };
      expect(BelgianPhoneNumberValidator.validBelgianNumber(control as AbstractControl)).toEqual({
        format: false,
      });
    });

    it('should return null when the phone number is a valid format', () => {
      const control = { value: '0485151522' };
      expect(BelgianPhoneNumberValidator.validBelgianNumber(control as AbstractControl)).toEqual(null);
    });
  });

  describe('validFixedLineBelgianNumber', () => {
    it(shouldReturnAnErrorWhenThePhoneNumberIsNotACorrectFormat, () => {
      const control = { value: '1a' };
      expect(BelgianPhoneNumberValidator.validFixedLineBelgianNumber(control as AbstractControl)).toEqual({
        format: false,
      });
    });

    it('should return null when the phone number is a valid format', () => {
      const control = { value: '015234567' };
      expect(BelgianPhoneNumberValidator.validFixedLineBelgianNumber(control as AbstractControl)).toEqual(null);
    });
  });

  describe('validFixedLineOrMobileNumber', () => {
    it('should return null when given valid belgian mobile number', () => {
      const control = { value: '0485151522' };
      expect(BelgianPhoneNumberValidator.validFixedLineOrMobileNumber(control as AbstractControl)).toEqual(null);
    });

    it('should return null given valid belgian fixed line number', () => {
      const control = { value: '015234567' };
      expect(BelgianPhoneNumberValidator.validFixedLineOrMobileNumber(control as AbstractControl)).toEqual(null);
    });

    it(shouldReturnAnErrorWhenThePhoneNumberIsNotACorrectFormat, () => {
      const control = { value: '222444' };
      expect(BelgianPhoneNumberValidator.validFixedLineOrMobileNumber(control as AbstractControl)).toEqual({
        format: false,
      });
    });

    it('should return null when given valid belgian mobile number', () => {
      const control = { value: '04851515227' };
      expect(BelgianPhoneNumberValidator.validFixedLineOrMobileNumber(control as AbstractControl)).toEqual({
        format: false,
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
