import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../../pipes/price.pipe';
import { SummaryTotalPrices } from '@sales/summary/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, PricePipe, TranslateModule],
  selector: 'tg-sales-summary-order-sub-totals',
  templateUrl: './order-sub-totals.component.html',
})
export class OrderSubTotalsComponent {
  @Input() prices: SummaryTotalPrices | undefined | null;
}
