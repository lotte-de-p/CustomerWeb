import { Component, Input } from '@angular/core';
import { WinkIcon } from '@telenet/wink-ng';
import { DispatchMethod, PaymentMethod } from '@billing/invoice-overview/data-access';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'tg-billing-payment-encouragement',
  template: ` <div class="background-shade_04">
    <div
      *ngIf="message"
      class="py--l px--s display--flex align-items--center gap--m"
      data-testid="billing-overview-payment-encouragement">
      <wink-icon appearance="secondary" icon="telenet-assistant" size="lg"></wink-icon>
      <span [innerHTML]="message | translate"></span>
    </div>
  </div>`,
  imports: [WinkIcon, NgIf, TranslateModule],
})
export class PaymentEncouragementComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Input() dispatchMethod!: DispatchMethod;

  get message() {
    if (this.paymentMethod === PaymentMethod.MANUAL) return 'ng.billing-overview.payment-encouragement.direct-debit';
    if (![DispatchMethod.DOCCLE, DispatchMethod.ETIS].includes(this.dispatchMethod))
      return 'ng.billing-overview.payment-encouragement.doccle';
    return undefined;
  }
}
