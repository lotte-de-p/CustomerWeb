import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: number | undefined): string {
    if (price === undefined || price === null) {
      return '0,00';
    }
    return price.toFixed(2).replace('.', ',');
  }
}
