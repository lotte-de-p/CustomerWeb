import { AbstractControl, Validators } from '@angular/forms';
import { isEmpty } from 'lodash-es';
import { RegexConstants } from '../constants';

export class BelgianEidValidator extends Validators {
  static isNumberValid(control: AbstractControl) {
    const value = isEmpty(control.value) ? '' : control.value;
    const isValidFormat = RegexConstants.BELGIAN_EID_NUMBER.test(value);
    if (!isValidFormat && !isEmpty(value)) {
      return { invalidEid: true };
    }
    if (isValidFormat) {
      return BelgianEidValidator.isValidEid(value)
        ? null
        : {
            invalidEid: true,
          };
    }
    return null;
  }

  private static isValidEid(value: string): boolean {
    // '592-8470056-97'
    const eidNo = isNaN(parseInt(value.substring(0, 3), 10))
      ? parseInt(value.substring(4, 11), 10)
      : parseInt(value.substring(0, 3) + value.substring(4, 11), 10);
    const lastTwoDigit = value.substring(value.length - 2, value.length);
    let checkSum = eidNo % 97;
    if (checkSum === 0) {
      checkSum = 97;
    }
    const checkSumString = checkSum.toString();
    return parseInt(checkSumString, 10) === parseInt(lastTwoDigit, 10);
  }
}
