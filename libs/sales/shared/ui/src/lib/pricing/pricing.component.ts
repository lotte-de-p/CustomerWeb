import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PricingPriceComponent } from '../pricing-price/pricing-price.component';

interface SalesOffer {
  price: number;
  promo: Promo | null;
}

interface Promo {
  price: number;
  durationInMonths: number;
}

@Component({
  selector: 'tg-sales-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, PricingPriceComponent],
})
export class PricingComponent {
  normalPrice!: string;
  discountedPrice: string | undefined;
  durationInMonths: number | undefined;
  @Input() theme!: string;

  @Input() set salesOffer(salesOffer: SalesOffer) {
    this.normalPrice = salesOffer.price.toFixed(2);
    this.discountedPrice = salesOffer.promo?.price.toFixed(2);
    this.durationInMonths = salesOffer.promo?.durationInMonths;
  }
}
