import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SummaryPricePipe } from '../../pipes/summary-price.pipe';
import { SummaryTotalPrices } from '@sales/summary/data-access';
import { TotalsType } from '../../enums/styling-option.enum';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, SummaryPricePipe, TranslateModule],
  selector: 'tg-sales-summary-order-totals',
  templateUrl: './order-totals.component.html',
  providers: [TranslatePipe, PricePipe],
})
export class OrderTotalsComponent {
  @Input() prices: SummaryTotalPrices | undefined;
  @Input() isVatInclusive: SummaryTotalPrices | undefined;
  @Input() type: TotalsType = TotalsType.totals;
  TotalsType = TotalsType;
}
