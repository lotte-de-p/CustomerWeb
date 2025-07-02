import { Component, Input, OnInit } from '@angular/core';
import { PriceAndDiscount } from '@sales/order-configurator/installation-type/domain';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { PricePipe } from '../pipes/price.pipe';

@Component({
  selector: 'tg-sales-order-configurator-installation-type-ui-delivery-method-price',
  templateUrl: './delivery-method-price.component.html',
  standalone: true,
  imports: [TranslateModule, PricePipe],
})
export class DeliveryMethodPriceComponent implements OnInit {
  @Input() priceAndDiscount: PriceAndDiscount;

  languageIsEnglish = false;
  discountedEuros = 0;
  discountedCents = 0;

  constructor(private readonly urlService: UrlService) {
    const lang = this.urlService.getCurrentUrl().split('/')[4];
    this.languageIsEnglish = lang?.toUpperCase() === 'EN';
  }

  ngOnInit(): void {
    this.splitPrice(this.priceAndDiscount.discountedAmount);
  }

  private splitPrice(price: number) {
    this.discountedEuros = Math.floor(price); // Extract euros (integer part)
    this.discountedCents = Math.round((price - this.discountedEuros) * 100); // Extract cents (decimal part)
  }
}
