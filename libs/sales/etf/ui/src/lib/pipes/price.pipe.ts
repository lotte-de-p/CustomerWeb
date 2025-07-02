import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: string) {
    const newPrice = Number(price);
    return newPrice.toFixed(2).replace('.', ',');
  }
}
