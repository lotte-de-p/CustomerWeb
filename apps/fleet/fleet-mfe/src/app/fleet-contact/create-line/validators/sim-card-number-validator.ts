import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { SimSwapConstants } from '../constants/sim-swap.constants';
import { RegexConstants } from '../../../shared/common/regex/regex.constant';

export class SimCardNumberValidator extends Validators {
  static isValidSimCardWithIccidNumber(simNumberPrefix: string): ValidatorFn {
    let iccidNumber: string;
    return (control: AbstractControl): Record<string, boolean> | null => {
      if (control.value) {
        if (simNumberPrefix) {
          iccidNumber = simNumberPrefix + control.value;
        } else {
          iccidNumber = control.value;
        }

        if (this.isValidBaseSimCard(iccidNumber) && this.isValidICCIDNumber(iccidNumber)) {
          return null;
        }
      }
      return { invalidIccid: true };
    };
  }

  static isValidICCIDNumber(iccidNumber: string): boolean {
    if (this.validateLuhnChecksum(iccidNumber, 0)) {
      return true;
    }
    if (this.isProximusSimNumber(iccidNumber)) {
      return this.validateLuhnChecksum(iccidNumber, 4);
    }
    return this.validateProximusNon2100SIMNumbers(iccidNumber);
  }

  static isProximusSimNumber(iccidNumber: string): boolean {
    return iccidNumber.substring(0, 4) === SimSwapConstants.PROXIMUS_SIM_NUMBER_STARTING_DIGITS;
  }

  static getLuhnChecksum(iccidNumber: string): number {
    const length = iccidNumber.length;
    const parity = length % 2;
    const mod10 = 10;
    let checkSum = 0;
    for (let i = length - 1; i >= 0; i--) {
      let alternateSecondDigit = parseInt(iccidNumber.charAt(i), 10);
      if (i % 2 === parity) {
        alternateSecondDigit *= 2;
      }

      if (alternateSecondDigit > 9) {
        alternateSecondDigit -= 9;
      }

      checkSum += alternateSecondDigit;
    }
    return (checkSum * 9) % mod10;
  }

  static validateLuhnChecksum(iccidNumber: string, expectedChecksum: number): boolean {
    return this.getLuhnChecksum(iccidNumber) === expectedChecksum;
  }

  static validateProximusNon2100SIMNumbers(iccidNumber: string): boolean {
    if (iccidNumber.length === 13) {
      const proximusSimNumberPrefix = SimSwapConstants.PROXIMUS_SIM_NUMBER_PREFIX;
      iccidNumber = proximusSimNumberPrefix + iccidNumber;
      return this.validateLuhnChecksum(iccidNumber, 0);
    }
    return false;
  }

  static isValidBaseSimCard(iccidNumber: string): boolean {
    return this.isValidBaseValue(iccidNumber, RegexConstants.SIM_CARD_REGEX);
  }

  static isValidBaseValue(val: string, regex: RegExp): boolean {
    if (val === '' || val === undefined) {
      return true;
    }
    const value = val.replace(/[-/\\,\s.]/g, '');
    return regex.test(value);
  }
}
