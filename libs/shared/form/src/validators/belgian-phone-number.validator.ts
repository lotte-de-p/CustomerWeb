import { AbstractControl, Validators } from '@angular/forms';
import { RegexConstants } from '../constants';

export class BelgianPhoneNumberValidator extends Validators {
  static validBelgianNumber(control: AbstractControl) {
    const value = control.value;
    return RegexConstants.TELENET_PHONE_NUMBER.test(value)
      ? null
      : {
          format: false,
        };
  }

  static validFixedLineBelgianNumber(control: AbstractControl) {
    const value = control.value;
    return RegexConstants.FIXED_PHONE_NUMBER.test(value)
      ? null
      : {
          format: false,
        };
  }

  static validFixedLineOrMobileNumber(control: AbstractControl) {
    const value = control.value;
    return RegexConstants.FIXED_PHONE_NUMBER.test(value) || RegexConstants.TELENET_PHONE_NUMBER.test(value)
      ? null
      : {
          format: false,
        };
  }

  static testMobileNumber(value: string) {
    return RegexConstants.TELENET_PHONE_NUMBER.test(value);
  }
}
