import { Injectable } from '@angular/core';
import { RegexConstants } from '../constants/regex.constant';
import { ConstraintsService } from './constraints.service';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberTransformService {
  constructor(private readonly constraintsService: ConstraintsService) {}

  transform(phoneNumber: string): string {
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
      if (this.constraintsService.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.constraintsService.isValidInternationalNumber(msisdn)) {
        return msisdn;
      }
      return formattedPhoneNumber;
    }
  }

  private filterNationalPhoneNumber(phoneNumber: string): string {
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

  private filterNationalMobileNumber(phoneNumber: string): string {
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

  private filterBasePhoneNumber(phoneNumber: string): string {
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

  private filterInternationalNumber(phoneNumber: string): string {
    const numberStart = phoneNumber.slice(0, 2);
    if (this.contains(numberStart, '00')) {
      return '+' + phoneNumber.slice(2, phoneNumber.length);
    }
    return phoneNumber;
  }

  private contains(master: string, test: string) {
    return master.indexOf(test) > -1;
  }
}
