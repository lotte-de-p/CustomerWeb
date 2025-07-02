import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RecipientDetails } from '@sales/order-configurator/delivery/domain';
import { PhoneNumberPipe } from '../pipes';

@Component({
  standalone: true,
  imports: [NgClass, PhoneNumberPipe, AsyncPipe, TranslateModule],
  selector: 'tg-order-configurator-delivery-ui-recipient-details',
  templateUrl: './recipient-details.component.html',
})
export class RecipientDetailsComponent {
  @Input() recipientDetails: RecipientDetails | null;
  @Output() isFormVisible: EventEmitter<void> = new EventEmitter();

  openRecipientDetailsForm() {
    this.isFormVisible.emit();
  }
}
