import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegexConstants } from '../../constants/regex.constant';

@Injectable({
  providedIn: 'root',
})
export class ConstraintsService {
  isValidationError(fieldName: string, formGroup: FormGroup, errorType: string): boolean {
    let isValid = false;
    const control = formGroup.get(fieldName);
    if (control && control.errors) {
      isValid = (control.touched || control.dirty) && control.errors[errorType];
    }
    return isValid;
  }

  isValidationErrorWhenPristine(fieldName: string, formGroup: FormGroup, errorType: string): boolean {
    const control = formGroup.get(fieldName);
    return control && control.errors ? control.errors[errorType] : false;
  }

  isValidAddressNumber(val: string): boolean {
    return RegexConstants.ADDRESS_NUMBER.test(val);
  }

  isValidNationalMobileNumber(value: string): boolean {
    return RegexConstants.NATIONAL_MOBILE_NUMBER.test(value);
  }

  isValidInternationalNumber(number: string): boolean {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return RegexConstants.INTERNATIONAL_NUMBER.test(value);
  }

  getFormattedNRN(nrn: string): string {
    nrn = this.removeSpecialCharacters(nrn);
    const nrnLength = nrn && nrn.length;
    if (nrnLength === 11) {
      return (
        nrn.slice(0, 2) +
        '.' +
        nrn.slice(2, 4) +
        '.' +
        nrn.slice(4, 6) +
        '-' +
        nrn.slice(6, 9) +
        '.' +
        nrn.slice(9, nrnLength)
      );
    }
    return nrn;
  }

  private removeSpecialCharacters(val: string): string {
    return val ? val.replace(/[^0-9a-z]/gi, '') : '';
  }
}
