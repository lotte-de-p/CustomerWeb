import { AbstractControl, Validators } from '@angular/forms';
import { isEmpty } from 'lodash-es';
import { RegexConstants } from '../constants';

export class NationalRegistryNumberValidator extends Validators {
  static isNumberValid(control: AbstractControl) {
    const value = isEmpty(control.value) ? '' : control.value;
    const isValidFormat = RegexConstants.NATIONAL_REGISTRY_NUMBER.test(value);
    if (!isValidFormat && !isEmpty(value)) {
      return { invalidNrn: true };
    }
    if (isValidFormat) {
      return NationalRegistryNumberValidator.isValidNrn(value)
        ? null
        : {
            invalidNrn: true,
          };
    }
    return null;
  }

  static isValidNrn(value: string) {
    let mod97Value;
    value = value.replace(/[^0-9a-z]/gi, '');
    const YY = value.substring(0, 2);
    const MM = value.substring(2, 4);
    const DD = value.substring(4, 6);
    const SEQ = value.substring(6, 9);
    const checksum = parseInt(value.substring(9, 11), 10);
    const currentYear = parseInt(new Date().getFullYear().toString().substring(2), 10);
    const concatedPosValue = '' + 2 + YY + MM + DD + SEQ;
    const concatedNegValue = '' + YY + MM + DD + SEQ;
    const concatedPosValueInt = parseInt(concatedPosValue, 10);
    const concatedNegValueInt = parseInt(concatedNegValue, 10);
    if (currentYear - parseInt(YY, 10) >= 0) {
      mod97Value = 97 - (concatedPosValueInt % 97);
    } else {
      mod97Value = 97 - (concatedNegValueInt % 97);
    }
    return mod97Value === checksum;
  }
}
