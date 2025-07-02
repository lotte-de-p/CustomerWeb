import { AbstractControl, Validators } from '@angular/forms';
import { RegexConstants } from '../constants';

export class EmailValidator extends Validators {
  static validEmail(control: AbstractControl) {
    return RegexConstants.EMAIL.test(control.value)
      ? null
      : {
          format: false,
        };
  }
}
