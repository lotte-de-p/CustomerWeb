import { AbstractControl, Validators } from '@angular/forms';
import { isEmpty } from 'lodash-es';

export class EasySwitchIdValidator extends Validators {
  static isValidEasySwitchId(control: AbstractControl) {
    const eid = isEmpty(control.value) ? '' : control.value;
    const rem1 = +eid.slice(-2);
    const num1 = +eid.slice(0, eid.length - 2);
    const num2 = +(num1 / 97).toString().split('.')[0] * 97;
    const rem2 = Math.abs(num1 - num2);
    return rem1 === rem2 ? null : { invalidEid: true };
  }
}
