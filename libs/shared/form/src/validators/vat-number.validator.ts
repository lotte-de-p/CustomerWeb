import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class VatNumberValidator extends Validators {
  static isValidVatNumber(control: AbstractControl): ValidationErrors | null {
    let value = control.value;

    if (value === null || value === ' ') {
      return { required: true };
    }

    value = value.replace(/\./g, '');
    value = value.replace(/^[a-zA-z]{2}/, '');

    // Check if there are 10 digits
    if (!((Math.log(value) * Math.LOG10E + 1) | 0)) {
      return { invalidVatNumber: value };
    }

    const part1 = Number(value.substring(0, 8));
    const part2 = Number(value.substring(8, 10));

    if (part2 !== 97 - (part1 % 97)) {
      return { invalidVatNumber: value };
    }
    return null;
  }
}
