import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegexConstants } from './constants/regex.constant';

@Pipe({ name: 'phoneNumber', standalone: true })
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string | undefined): string {
    if (phoneNumber) {
      return this.transFormPhoneNumber(phoneNumber);
    }
    return '';
  }

  transFormPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.filterPhoneNumber(phoneNumber);
  }

  filterPhoneNumber(phoneNumber: string): string {
    if (RegexConstants.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (RegexConstants.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (RegexConstants.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    if (RegexConstants.INTERNATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterInternationalNumber(phoneNumber);
    }
    return phoneNumber;
  }

  doNormaliseMsisdn(phoneNumber: string): string {
    let transFormedNumber = this.transform(phoneNumber);
    transFormedNumber = transFormedNumber.indexOf('0') !== 0 ? '0' + transFormedNumber : transFormedNumber;
    return transFormedNumber && transFormedNumber.replace(/ /g, '');
  }

  autoFormatPhoneNumber(msisdn: string): string {
    const formattedPhoneNumber = this.doNormaliseMsisdn(msisdn);
    if (!msisdn || !formattedPhoneNumber) {
      return msisdn;
    } else {
      if (this.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.isValidInternationalNumber(msisdn)) {
        return msisdn;
      }
      return formattedPhoneNumber;
    }
  }

  filterNationalPhoneNumber(phoneNumber: string): string {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    let zoneCode = '0';
    if (this.contains(numberStart, '0032')) {
      numberStart = numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = numberStart.slice(3, numberStart.length);
    }
    if (numberStart.length === 3) {
      numberStart = numberStart.slice(1, numberStart.length);
    }
    if (numberStart[0] === '2' || numberStart[0] === '3' || numberStart[0] === '4' || numberStart[0] === '9') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
    } else {
      zoneCode += numberStart + ' ';
      numberStart = '';
    }
    return (
      zoneCode +
      numberStart +
      phoneNumber.slice(numberLength - 6, numberLength - 4) +
      ' ' +
      phoneNumber.slice(numberLength - 4, numberLength - 2) +
      ' ' +
      phoneNumber.slice(numberLength - 2, numberLength)
    );
  }

  filterNationalMobileNumber(phoneNumber: string): string {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (numberStart.indexOf('0032') === 0) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (numberStart.indexOf('+32') === 0) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (numberStart.indexOf('32') === 0) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return (
      numberStart +
      ' ' +
      phoneNumber.slice(numberLength - 6, numberLength - 4) +
      ' ' +
      phoneNumber.slice(numberLength - 4, numberLength - 2) +
      ' ' +
      phoneNumber.slice(numberLength - 2, numberLength)
    );
  }

  filterBasePhoneNumber(phoneNumber: string): string {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (this.contains(numberStart, '0032')) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '32')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    if (this.contains(numberStart, '00')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }

    return (
      numberStart +
      ' ' +
      phoneNumber.slice(numberLength - 6, numberLength - 4) +
      ' ' +
      phoneNumber.slice(numberLength - 4, numberLength - 2) +
      ' ' +
      phoneNumber.slice(numberLength - 2, numberLength)
    );
  }

  filterInternationalNumber(phoneNumber: string): string {
    const numberStart = phoneNumber.slice(0, 2);
    if (this.contains(numberStart, '00')) {
      return '+' + phoneNumber.slice(2, phoneNumber.length);
    }
    return phoneNumber;
  }

  private contains(master: string, test: string) {
    return master.indexOf(test) > -1;
  }

  isValidationErrorWhenPristine(fieldName: string, formGroup: FormGroup, errorType: string): boolean {
    const control = formGroup.get(fieldName);
    return control && control.errors ? control.errors[errorType] : false;
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

  removeSpecialCharacters(val: string): string {
    return val ? val.replace(/[^0-9a-z]/gi, '') : '';
  }
}
