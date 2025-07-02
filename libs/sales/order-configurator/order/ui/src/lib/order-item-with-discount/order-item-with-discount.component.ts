import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SummaryPricePipe } from '../pipes/summary-price.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { OrderItem } from '@sales/order-configurator/order/domain';

@Component({
  standalone: true,
  imports: [CommonModule, SummaryPricePipe],
  selector: 'tg-order-configurator-order-ui-order-item-with-discount',
  templateUrl: './order-item-with-discount.component.html',
  providers: [PricePipe, TranslatePipe],
})
export class OrderItemWithDiscountComponent {
  @Input() orderItem: OrderItem | undefined;
}
