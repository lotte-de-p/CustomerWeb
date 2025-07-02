import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithDiscount } from '@sales/etf/data-access';
import { PricePipe } from '../pipes/price.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, PricePipe],
  selector: 'tg-sales-etf-order-item-marked-as-no-discount',
  templateUrl: './order-item-marked-as-no-discount.component.html',
})
export class OrderItemMarkedAsNoDiscountComponent {
  @Input() orderItemWithDiscount: OrderItemWithDiscount | undefined;
  @Output() setOrderMarkedForDiscount = new EventEmitter<OrderItemWithDiscount>();

  selectForDiscount(orderItemWithDiscount: OrderItemWithDiscount) {
    this.setOrderMarkedForDiscount.next(orderItemWithDiscount);
  }
}
