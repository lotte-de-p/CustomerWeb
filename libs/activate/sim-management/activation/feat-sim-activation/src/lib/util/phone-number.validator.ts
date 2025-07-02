import { AbstractControl, Validators } from '@angular/forms';

export class PhoneNumberValidator extends Validators {
  static validNumber(control: AbstractControl) {
    // Belgian landline numbers (typically 8 digits following the country code)
    const BELGIAN_LANDLINE_WITH_PREFIX = /^(0032|032|\+32|32)\d{8}$/;
    const BELGIAN_LANDLINE_LEADING_ZERO = /^(0|00)([1-9])\d{7}$/;
    // Belgian mobile numbers (starting with '4' followed by 8 digits)
    const BELGIAN_MOBILE_WITH_PREFIX = /^(0032|032|\+32|32)4\d{8}$/;
    const BELGIAN_MOBILE_LEADING_ZERO = /^(0|00)4\d{8}$/;
    // General pattern (any number starting with a non-zero digit followed by 7 more digits)
    const GENERAL_NUMBERS = /^([1-9])\d{7}$/;
    // Belgian mobile or landline numbers starting directly with '4' (7 to 8 digits)
    const DIRECT_MOBILE_LANDLINE = /^4\d{7,8}$/;

    const phoneNumber = control.value?.replace(/[-/\\,\s.]/g, '');
    return BELGIAN_LANDLINE_WITH_PREFIX.test(phoneNumber) ||
      BELGIAN_LANDLINE_LEADING_ZERO.test(phoneNumber) ||
      BELGIAN_MOBILE_WITH_PREFIX.test(phoneNumber) ||
      BELGIAN_MOBILE_LEADING_ZERO.test(phoneNumber) ||
      GENERAL_NUMBERS.test(phoneNumber) ||
      DIRECT_MOBILE_LANDLINE.test(phoneNumber)
      ? null
      : {
          format: true,
        };
  }
}
