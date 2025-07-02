import { Pipe, PipeTransform } from '@angular/core';
import isNull from 'lodash-es/isNull';
import isUndefined from 'lodash-es/isUndefined';

@Pipe({ standalone: true, name: 'replaceDecimals' })
export class ReplaceDecimalsPipe implements PipeTransform {
  transform(value: string | number): string {
    if (isUndefined(value)) {
      return undefined;
    }
    if (isNull(value)) {
      return null;
    }
    if (value.toString().includes(',00') || value.toString().includes('.00')) {
      return value.toString().replace(/[,.]00/g, '');
    }
    return value.toString();
  }
}
