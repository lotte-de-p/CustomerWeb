import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapTo',
  standalone: true,
})
export class MapFunctionPipe implements PipeTransform {
  transform<T, R>(value: T, functionToMap: (...args: T[]) => R) {
    return functionToMap(value);
  }
}
