import { Component, inject, Input, ViewChild } from '@angular/core';
import { Invoice, PaymentMethod } from '@billing/invoice-overview/data-access';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { LanguageService } from '@telenet/ng-lib-page';
import { BillingOverviewBillScenarioDetailsComponent } from '../billing-overview-bill-scenario-details/billing-overview-bill-scenario-details.component';

@Component({
  selector: 'tg-billing-paid-invoice',
  standalone: true,
  templateUrl: './billing-overview-paid-invoice.component.html',
  imports: [
    BillingOverviewAmountComponent,
    BillingOverviewDownloadComponent,
    BillingOverviewIconComponent,
    DatePipe,
    NgClass,
    BillingOverviewBillScenarioDetailsComponent,
    NgIf,
  ],
})
export class PaidInvoiceComponent {
  private readonly languageService: LanguageService = inject(LanguageService);
  @ViewChild(BillingOverviewDownloadComponent) downloadComponent!: BillingOverviewDownloadComponent;

  @Input() invoice!: Invoice;
  @Input() areExplicitBillScenariosAvailable = false;
  @Input() paymentMethod!: PaymentMethod;
  showDetailedBillScenario = false;

  isReimbursement(invoiceAmount: number): boolean {
    return invoiceAmount < 0;
  }

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
