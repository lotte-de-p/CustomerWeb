import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton, WinkIcon, WinkParagraph } from '@telenet/wink-ng';
import { UrlService } from '@telenet/ng-lib-page';
import {
  InvoiceOverviewDatalayerService,
  PaymentMethod,
  StatusDescription,
  UPDATED_PAYMENT_METHOD,
} from '@billing/invoice-overview/data-access';

@Component({
  selector: 'tg-billing-overview-current-summary',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkButton, WinkParagraph, WinkIcon],
  templateUrl: './billing-overview-current-summary.component.html',
  styleUrl: './billing-overview-current-summary.component.scss',
})
export class BillingOverviewCurrentSummaryComponent {
  @Input() headerText: string;
  @Input() type: 'PAYMENT_METHOD' | 'DELIVERY_METHOD';
  @Input() descriptions: StatusDescription[];
  @Input() billingSettingsUrl: string;
  @Input() updatedPaymentMethod: string;
  private readonly urlService = inject(UrlService);
  private readonly datalayerService = inject(InvoiceOverviewDatalayerService);

  redirectToManageBillingSettings(): void {
    if (this.type === 'DELIVERY_METHOD') {
      this.datalayerService.sendChangeDeliveryMethod();
    } else {
      this.datalayerService.sendChangePaymentMethod();
    }
    this.urlService.redirectTo(this.billingSettingsUrl);
  }

  get updatedPaymentMethodNotification() {
    const notificationMap: { [key: string]: string } = {
      [PaymentMethod.MANUAL + UPDATED_PAYMENT_METHOD]: 'ng.billing-overview.lbl.payment-changed-to-manual-notification',
      [PaymentMethod.DIRECT_DEBIT + UPDATED_PAYMENT_METHOD]:
        'ng.billing-overview.lbl.payment-changed-to-direct-debit-notification',
    };

    return notificationMap[this.updatedPaymentMethod] || '';
  }

  get isPaymentMethodUpdated(): boolean {
    return this.updatedPaymentMethod !== '' && this.type === 'PAYMENT_METHOD';
  }
}
