import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '@sales/summary/data-access';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(price: Price | undefined): string {
    let priceAsNumber = 0;
    if (price) {
      priceAsNumber = parseFloat(price.value);
    }
    return priceAsNumber.toFixed(2).replace('.', ',');
  }
}
