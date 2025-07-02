import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithDiscount } from '@sales/etf/data-access';
import { PricePipe } from '../pipes/price.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, PricePipe],
  selector: 'tg-sales-etf-order-item-with-termination',
  templateUrl: './order-item-with-termination.component.html',
})
export class OrderItemWithTerminationComponent {
  @Input() orderItemWithDiscount: OrderItemWithDiscount | undefined;
  @Output() showEtfOptionsEvent = new EventEmitter<OrderItemWithDiscount>();

  setOrderItemTerminationState(orderItemWithDiscount: OrderItemWithDiscount) {
    this.showEtfOptionsEvent.next(orderItemWithDiscount);
  }
}
