import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../../pipes/price.pipe';
import { SummaryOrderItem } from '@sales/summary/data-access';
import { TranslatePipe } from '@ngx-translate/core';
import { SummaryPricePipe } from '../../pipes/summary-price.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, SummaryPricePipe],
  selector: 'tg-sales-summary-order-item-with-discount',
  templateUrl: './order-item-with-discount.component.html',
  providers: [PricePipe, TranslatePipe],
})
export class OrderItemWithDiscountComponent {
  @Input() orderItem: SummaryOrderItem | undefined;
}
