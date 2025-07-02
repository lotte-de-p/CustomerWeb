import { inject, Injectable } from '@angular/core';
import { InvoiceOverviewStore } from './+state/invoice-overview.store';
import { BillingAccount } from './entities/billing-account';

@Injectable({ providedIn: 'root' })
export class InvoiceOverviewFacade {
  private readonly store = inject(InvoiceOverviewStore);
  loading = this.store.loading;
  loadError = this.store.loadError;
  invoiceOverview = this.store.invoiceOverview;
  showAll = this.store.showAll;
  selectedBillingAccount = this.store.selectedBillingAccount;
  paidInvoicesAvailable = this.store.paidInvoicesAvailable;
  isEligibleForPayment = this.store.isEligibleForPayment;
  isPaymentPlanActive = this.store.isPaymentPlanActive;
  updatedPaymentMethod = this.store.updatedPaymentMethod;
  areExplicitBillScenariosAvailable = this.store.areExplicitBillScenariosAvailable;
  isBusinessCustomer = this.store.isBusinessCustomer;

  selectBillingAccount(selectedBillingAccount: BillingAccount, showBillScenario: boolean) {
    this.store.selectBillingAccount(selectedBillingAccount, showBillScenario);
  }

  loadMore() {
    this.store.loadMore();
  }
}
