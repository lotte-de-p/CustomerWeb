import { AbstractControl } from '@angular/forms';
import { PhoneNumberValidator } from './delivery-phone-number.validator';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('DeliveryPhoneNumber', () => {
  describe('validNumber', () => {
    it('should return an error when the phone number is not a correct format', () => {
      const control = { value: '3589978' };
      expect(PhoneNumberValidator.validNumber(control as AbstractControl)).toEqual({ format: false });
    });

    it('should return null when the phone number is a valid format', () => {
      const control = { value: '0485151522' };
      expect(PhoneNumberValidator.validNumber(control as AbstractControl)).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
