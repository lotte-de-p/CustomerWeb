import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DeliveryContentItem } from '@sales/order-configurator/delivery/domain';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { deliveryContent } from '@sales/order-configurator/delivery/state';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'tg-order-configurator-delivery-feat-delivery-content',
  templateUrl: './delivery-content.component.html',
})
export class DeliveryContentComponent {
  deliveryContent$: Observable<DeliveryContentItem[]>;

  constructor(private readonly store: Store) {
    this.deliveryContent$ = this.store.select(deliveryContent);
  }
}
