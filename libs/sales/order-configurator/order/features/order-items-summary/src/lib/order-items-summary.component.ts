import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItem } from '@sales/order-configurator/order/domain';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { orderItems } from '@sales/order-configurator/order/state';
import { OrderItemWithDiscountComponent } from '@sales/order-configurator/order/ui';

@Component({
  standalone: true,
  imports: [AsyncPipe, TranslateModule, OrderItemWithDiscountComponent],
  selector: 'tg-order-configurator-order-feat-order-items-summary',
  templateUrl: './order-items-summary.component.html',
})
export class OrderItemsSummaryComponent {
  orderItems$: Observable<OrderItem[] | undefined>;

  constructor(private readonly store: Store) {
    this.orderItems$ = this.store.select(orderItems);
  }
}
