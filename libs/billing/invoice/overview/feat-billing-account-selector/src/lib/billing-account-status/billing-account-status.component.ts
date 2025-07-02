import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkIcon } from '@telenet/wink-ng';
import { PaymentStatus } from '@billing/invoice-overview/data-access';

@Component({
  standalone: true,
  selector: 'tg-billing-account-status',
  imports: [CommonModule, TranslateModule, WinkIcon],
  template: ` <div class="display--flex align-content--center" data-testid="billing-accounts-option-status">
    <span class="mr--xs">
      <i class="icon-md" [ngClass]="[getIcon(paymentStatus), getTextClass(paymentStatus)]" size="md"></i>
    </span>
    <span [ngClass]="getTextClass(paymentStatus)" class="billing-status-text">{{
      'ng.billing-overview.billing-account-selector.lbl.status.' + paymentStatus | translate
    }}</span>
  </div>`,
  styleUrls: ['./billing-account-status.component.scss'],
})
export class BillingAccountStatusComponent {
  @Input()
  paymentStatus!: PaymentStatus;

  getIcon(paymentStatus: PaymentStatus): string {
    if (paymentStatus === PaymentStatus.OVERDUE) {
      return 'icon-error-shape-filled';
    }
    return paymentStatus === PaymentStatus.PAID ? 'icon-check-shape-filled' : 'icon-information-shape-filled';
  }

  getTextClass(paymentStatus: PaymentStatus): string {
    if (paymentStatus === PaymentStatus.OVERDUE) {
      return 'color-notification--error--light';
    }
    return paymentStatus === PaymentStatus.PAID
      ? 'color-notification--success--light'
      : 'color-notification--info--light';
  }
}
