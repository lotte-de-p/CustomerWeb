import { Pipe, PipeTransform } from '@angular/core';
import { AppointmentRegexConstant } from './appointment-regex.constant';

@Pipe({ name: 'replaceDecimals', standalone: true })
export class ReplaceDecimalsPipe implements PipeTransform {
  transform(value: string | number): string {
    if (value.toString().includes(',00') || value.toString().includes('.00')) {
      return value.toString().replace(AppointmentRegexConstant.SEPARATOR, '');
    }
    return value.toString();
  }
}
