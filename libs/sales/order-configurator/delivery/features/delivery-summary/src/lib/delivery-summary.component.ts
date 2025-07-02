import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { RecipientAddress } from '@sales/order-configurator/delivery/domain';
import { recipientAddress } from '@sales/order-configurator/delivery/state';

@Component({
  selector: 'tg-order-configurator-delivery-feat-delivery-summary',
  standalone: true,
  imports: [TranslateModule, AsyncPipe],
  templateUrl: './delivery-summary.component.html',
})
export class DeliverySummaryComponent {
  recipientAddress$: Observable<RecipientAddress | undefined> = this.store.select(recipientAddress);

  constructor(private readonly store: Store) {}
}
