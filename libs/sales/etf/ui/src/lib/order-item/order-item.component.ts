import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithDiscount } from '@sales/etf/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-etf-order-item',
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {
  @Input() orderItemWithDiscount: OrderItemWithDiscount | undefined;
  @Output() setOrderItemTerminationStateEvent = new EventEmitter<{
    orderItemWithDiscount: OrderItemWithDiscount;
    buyWithDiscount: boolean;
  }>();

  setOrderItemTerminationState(orderItemWithDiscount: OrderItemWithDiscount, buyWithDiscount: boolean) {
    this.setOrderItemTerminationStateEvent.next({ orderItemWithDiscount, buyWithDiscount });
  }
}
