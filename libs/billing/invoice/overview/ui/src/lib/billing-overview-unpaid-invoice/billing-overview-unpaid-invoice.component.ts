import { Component, inject, Input, ViewChild } from '@angular/core';
import { Invoice, PaymentMethod } from '@billing/invoice-overview/data-access';
import { DatePipe, NgIf } from '@angular/common';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { BillingOverviewPayComponent } from '../billing-overview-pay/billing-overview-pay.component';
import { BillingOverviewUnpaidStatusComponent } from '../billing-overview-unpaid-status/billing-overview-unpaid-status.component';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { UnpaidStatusNotificationComponent } from '../billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component';
import { BillingOverviewExplicitBillScenariosComponent } from '../billing-overview-explicit-bill-scenarios/billing-overview-explicit-bill-scenarios.component';
import { BillingOverviewBillScenarioDetailsComponent } from '../billing-overview-bill-scenario-details/billing-overview-bill-scenario-details.component';

@Component({
  selector: 'tg-billing-unpaid-invoice',
  standalone: true,
  templateUrl: './billing-overview-unpaid-invoice.component.html',
  styleUrl: './billing-overview-unpaid-invoice.component.scss',
  imports: [
    BillingOverviewAmountComponent,
    BillingOverviewDownloadComponent,
    BillingOverviewIconComponent,
    BillingOverviewPayComponent,
    BillingOverviewUnpaidStatusComponent,
    DatePipe,
    NgIf,
    TranslateModule,
    UnpaidStatusNotificationComponent,
    BillingOverviewExplicitBillScenariosComponent,
    BillingOverviewBillScenarioDetailsComponent,
  ],
})
export class UnpaidInvoiceComponent {
  private readonly languageService: LanguageService = inject(LanguageService);

  @Input() invoice!: Invoice;
  @Input() isEligibleForPayment = false;
  @Input() displayUnpaidStatus = false;
  @Input() isBusinessCustomer = false;
  @Input() onlinePaymentLink!: string;
  @Input() paymentMethod!: PaymentMethod;
  @Input() areExplicitBillScenariosAvailable = false;

  @ViewChild('download') downloadComponent!: BillingOverviewDownloadComponent;

  showDetailedBillScenario = false;

  get locale() {
    return this.languageService.getLocaleString();
  }

  handleClickEvent() {
    if (this.areExplicitBillScenariosAvailable) {
      this.showDetailedBillScenario = true;
    } else {
      this.downloadComponent.downloadDocument();
    }
  }
}
