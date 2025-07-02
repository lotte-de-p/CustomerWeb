import { AbstractControl, Validators } from '@angular/forms';
import { RegexConstants } from '../constants';

export class CompanyNameValidator extends Validators {
  static validCompanyName(control: AbstractControl) {
    return RegexConstants.COMPANY_REGEX.test(control.value)
      ? null
      : {
          invalidCompanyName: true,
        };
  }
}
