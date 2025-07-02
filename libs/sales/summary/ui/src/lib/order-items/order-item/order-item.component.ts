import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../../pipes/price.pipe';
import { SummaryOrderItem } from '@sales/summary/data-access';
import { SummaryPricePipe } from '../../pipes/summary-price.pipe';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, SummaryPricePipe],
  selector: 'tg-sales-summary-order-item',
  templateUrl: './order-item.component.html',
  providers: [PricePipe, TranslatePipe],
})
export class OrderItemComponent {
  @Input() orderItem: SummaryOrderItem | undefined;
}
