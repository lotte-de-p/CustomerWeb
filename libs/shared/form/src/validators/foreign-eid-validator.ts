import { AbstractControl, Validators } from '@angular/forms';
import { isEmpty } from 'lodash-es';
import { RegexConstants } from '../constants';

export class ForeignEidValidator extends Validators {
  static isForeignEidValid(control: AbstractControl) {
    const value = isEmpty(control.value) ? '' : control.value;
    const isValidFormat = RegexConstants.FOREIGN_EID_NUMBER_REGEX.test(value);
    if (!isValidFormat && !isEmpty(value)) {
      return { invalidEid: true };
    }
    return null;
  }
  static isForeignEidValidWithModCheck(control: AbstractControl) {
    const value = isEmpty(control.value) ? '' : control.value;
    const isValidFormat = RegexConstants.FOREIGN_EID_NUMBER_REGEX.test(value);
    if (!isValidFormat && !isEmpty(value)) {
      return { invalidEid: true };
    }
    if (isValidFormat) {
      return ForeignEidValidator.isValidEid(value)
        ? null
        : {
            invalidEid: true,
          };
    }
    return null;
  }

  private static isValidEid(value: string): boolean {
    // '592-8470056-97'
    const id = value.replace(/\D/g, '');
    const eidNo = parseInt(id.substring(0, id.length - 2));
    const lastTwoDigit = value.substring(value.length - 2, value.length);
    let checkSum = eidNo % 97;
    if (checkSum === 0) {
      checkSum = 97;
    }
    const checkSumString = checkSum.toString();
    return parseInt(checkSumString, 10) === parseInt(lastTwoDigit, 10);
  }
}
