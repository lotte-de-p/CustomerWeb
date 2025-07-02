import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const MinMaxLengthsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let duid = control.value;
  duid = duid.replace(/:/g, '');
  return duid.length < 20 || duid.length > 28 ? { InvalidDUID: true } : null;
};
