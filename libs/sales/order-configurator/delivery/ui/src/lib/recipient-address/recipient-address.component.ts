import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RecipientAddress } from '@sales/order-configurator/delivery/domain';
import { PhoneNumberPipe } from '../pipes';

@Component({
  standalone: true,
  imports: [PhoneNumberPipe, AsyncPipe],
  selector: 'tg-order-configurator-delivery-ui-recipient-address',
  templateUrl: './recipient-address.component.html',
})
export class RecipientAddressComponent {
  @Input() recipientAddress: RecipientAddress | null;
}
