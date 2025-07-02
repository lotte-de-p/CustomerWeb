import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function conditionalPatternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (typeof value === 'string') {
      return pattern.test(value) ? null : { pattern: true };
    }

    return null;
  };
}
