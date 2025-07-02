import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { AnalyticsClickEventDirective } from '@sales/events/feat-analytics';
import { TranslateModule } from '@ngx-translate/core';
import { RecipientAddress, RecipientDetails } from '@sales/order-configurator/delivery/domain';
import {
  PhoneNumberPipe,
  RecipientAddressComponent,
  RecipientDetailsComponent,
} from '@sales/order-configurator/delivery/ui';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { recipientAddress, recipientDetails } from '@sales/order-configurator/delivery/state';
import { DeliveryAddressComponent } from '@sales/delivery/ui';
import { ChangeRecipientInfoComponent } from '@sales/order-configurator/delivery/feat-change-recipient-info';

@Component({
  standalone: true,
  imports: [
    NgClass,
    PhoneNumberPipe,
    AsyncPipe,
    AnalyticsClickEventDirective,
    TranslateModule,
    RecipientDetailsComponent,
    DeliveryAddressComponent,
    RecipientAddressComponent,
    ChangeRecipientInfoComponent,
  ],
  selector: 'tg-order-configurator-delivery-feat-manage-recipient-info',
  templateUrl: './manage-recipient-info.component.html',
})
export class ManageRecipientInfoComponent {
  recipientDetails$: Observable<RecipientDetails>;
  recipientAddress$: Observable<RecipientAddress>;

  @Output() openOverlay: EventEmitter<void> = new EventEmitter();

  constructor(private readonly store: Store) {
    this.recipientDetails$ = this.store.select(recipientDetails);
    this.recipientAddress$ = this.store.select(recipientAddress);
  }

  openRecipientDetailsForm() {
    this.openOverlay.emit();
  }
}
