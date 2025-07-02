import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price', standalone: true })
export class PricePipe implements PipeTransform {
  transform(price: number | string) {
    const newPrice = Number(price);
    return newPrice ? newPrice.toFixed(2).replace('.', ',') : '';
  }
}
