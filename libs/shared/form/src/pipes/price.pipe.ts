import { Pipe, PipeTransform } from '@angular/core';
import { PriceService } from '../services';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  constructor(private readonly priceService: PriceService) {}

  transform(price: number | string, absolute: boolean = false, showZeroes: boolean = true, locale: string = 'nl') {
    const newPrice = Number(price);
    return this.priceService.transform(absolute ? Math.abs(newPrice) : newPrice, showZeroes, locale === 'en');
  }
}
