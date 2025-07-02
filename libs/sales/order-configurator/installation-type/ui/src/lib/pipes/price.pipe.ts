import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(price?: number, lang?: string): string {
    const decimal = lang?.toLowerCase() === 'en' ? '.' : ',';
    if (price === undefined || price === null) {
      return `0${decimal}00`;
    }
    return price.toFixed(2).replace('.', decimal);
  }
}
