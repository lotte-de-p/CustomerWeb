import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberTransformService {
  private static readonly NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  private static readonly INTERNATIONAL_NUMBER = /^(\+|00|0)(?:\d ?){6,14}\d$/;
  private static readonly NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  private static readonly BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;

  transform(phoneNumber: string): string {
    if (PhoneNumberTransformService.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    return this.filterInternationalNumber(phoneNumber);
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
    if (numberStart[0] === '2' || numberStart[0] === '3') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
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
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
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

  private isValidNationalMobileNumber(value: string): boolean {
    return PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(value);
  }

  private isValidInternationalNumber(number: string): boolean {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return PhoneNumberTransformService.INTERNATIONAL_NUMBER.test(value);
  }
}
