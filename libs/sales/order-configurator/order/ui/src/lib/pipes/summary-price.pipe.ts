import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PricePipe } from './price.pipe';

@Pipe({
  name: 'summaryPrice',
  standalone: true,
})
export class SummaryPricePipe implements PipeTransform {
  constructor(
    private readonly translatePipe: TranslatePipe,
    private readonly pricePipe: PricePipe
  ) {}

  transform(priceValue: number | undefined, isMonthly: boolean = false): string {
    let label = 'ng.sales-checkout.shopping-cart.lbl.price-one-time';
    if (isMonthly) {
      label = 'ng.sales-checkout.shopping-cart.lbl.price-monthly';
    }

    return this.translatePipe.transform(label, { value: this.pricePipe.transform(priceValue) });
  }
}
