import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'orderBy',
})
export class AccountSelectorOrderByPipe implements PipeTransform {
  transform(value: string[]) {
    return value.sort();
  }
}
