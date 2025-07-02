import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkIcon, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { PaymentMethod, UPDATED_PAYMENT_METHOD } from '@billing/invoice-overview/data-access';

@Component({
  selector: 'tg-billing-overview-payment-method-changed',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkParagraph, WinkIcon, WinkTitle],
  templateUrl: './billing-overview-payment-method-changed.component.html',
})
export class BillingOverviewPaymentMethodChangedComponent {
  @Input() updatedPaymentMethod: string;

  get paymentMethodDetails() {
    switch (this.updatedPaymentMethod) {
      case PaymentMethod.MANUAL + UPDATED_PAYMENT_METHOD:
        return {
          message: 'ng.billing-overview.lbl.payment-changed-to-manual-info',
          header: 'ng.billing-overview.lbl.payment-changed-to-manual-header',
        };
      case PaymentMethod.DIRECT_DEBIT + UPDATED_PAYMENT_METHOD:
        return {
          message: 'ng.billing-overview.lbl.payment-changed-to-direct-debit-info',
          header: 'ng.billing-overview.lbl.payment-changed-to-direct-debit-header',
        };
      default:
        return {
          message: '',
          header: '',
        };
    }
  }

  get message() {
    return this.paymentMethodDetails.message;
  }

  get header() {
    return this.paymentMethodDetails.header;
  }
}
