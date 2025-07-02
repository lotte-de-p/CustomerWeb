import { AbstractControl } from '@angular/forms';
import { SalesPhoneNumberValidator } from './sales-phone-number.validator';

describe('DeliveryPhoneNumber', () => {
  describe('validNumber', () => {
    it('should return an error when the phone number is not a correct format', () => {
      const control = { value: '3589978' };
      expect(SalesPhoneNumberValidator.validNumber(control as AbstractControl)).toEqual({ format: true });
    });

    it.each([
      { phoneNumber: '0485151522' },
      { phoneNumber: '032999339' },
      { phoneNumber: '015333756' },
      { phoneNumber: '484567038' },
      { phoneNumber: '15333756' },
      { phoneNumber: '03215333756' },
      { phoneNumber: '003215333756' },
      { phoneNumber: '003215333756' },
      { phoneNumber: '+3215333756' },
      { phoneNumber: '3215333756' },
    ])(`should return null when the phone number is a valid format: $phoneNumber`, ({ phoneNumber }) => {
      const control = { value: phoneNumber };
      expect(SalesPhoneNumberValidator.validNumber(control as AbstractControl)).toEqual(null);
    });
  });
});
