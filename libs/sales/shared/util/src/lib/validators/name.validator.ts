import { AbstractControl, Validators } from '@angular/forms';
import { isEmpty } from 'lodash-es';

export class NameValidator extends Validators {
  static validName(control: AbstractControl) {
    const regExp = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÆæ\s-]+)$/;
    return !isEmpty(control.value) && regExp.test(control.value)
      ? null
      : {
          format: true,
        };
  }
}
