import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderItemWithDiscountComponent } from './order-item-with-discount/order-item-with-discount.component';
import { SummaryOrderItem } from '@sales/summary/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, OrderItemComponent, OrderItemWithDiscountComponent],
  selector: 'tg-sales-summary-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent {
  @Input() viewModel: SummaryOrderItem[] | undefined | null;
}
