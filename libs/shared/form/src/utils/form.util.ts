import { AbstractControl, FormGroup } from '@angular/forms';

export const extractFormDetails = (control: AbstractControl | undefined): unknown => {
  if (!(control instanceof FormGroup)) {
    return {
      _value: control?.value,
      _touched: control?.touched,
      _valid: control?.valid,
      _dirty: control?.dirty,
      _errors: control?.errors,
      _enabled: control?.enabled,
    };
  }

  const details: Record<string, unknown> = {};

  Object.keys(control.controls).forEach((key) => {
    details[key] = extractFormDetails(control.controls[key]);
  });

  return details;
};
