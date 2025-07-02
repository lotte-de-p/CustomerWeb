import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const DuidFormatValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let duid = control.value;
  duid = duid.replace(/:/g, '');
  return duid.length % 2 !== 0 ? { InvalidDUID: true } : null;
};
