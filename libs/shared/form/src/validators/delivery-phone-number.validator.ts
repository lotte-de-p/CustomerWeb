import { AbstractControl, Validators } from '@angular/forms';
import { RegexConstants } from '../constants';

export class PhoneNumberValidator extends Validators {
  static validNumber(control: AbstractControl) {
    const value = control.value.replace(/[-/\\,\s.]/g, '');
    return RegexConstants.DELIVERY_PHONE_NUMBER.test(value)
      ? null
      : {
          format: false,
        };
  }
}
