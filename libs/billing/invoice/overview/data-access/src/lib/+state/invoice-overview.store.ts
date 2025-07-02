import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { InvoiceOverview } from '../entities/invoice';
import { BillingAccount } from '../entities/billing-account';
import {
  areExplicitBillScenariosAvailableSignal,
  arePaidInvoicesAvailableSignal,
  invoiceOverviewSignal,
  isBusinessCustomerSignal,
  isEligiblePaymentSignal,
  isPaymentPlanActiveSignal,
  updatedPaymentMethodSignal,
} from './invoice-overview.selectors';
import { inject } from '@angular/core';
import { InvoiceOverviewService } from '../services/invoice.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MessageService } from '@telenet/ng-lib-message';
import { tapResponse } from '@ngrx/component-store';
import { HttpErrorResponse } from '@angular/common/http';
import { InvoiceOverviewDatalayerService } from '../services/invoice-overview-datalayer.service';

export interface InvoiceOverviewState {
  loading: boolean;
  loadError: string | undefined;
  invoiceOverview: InvoiceOverview | undefined;
  showAll: boolean;
  selectedBillingAccount: BillingAccount | undefined;
  showBillScenario: boolean;
}

export const initialState: InvoiceOverviewState = {
  loading: false,
  loadError: undefined,
  invoiceOverview: undefined,
  showAll: false,
  selectedBillingAccount: undefined,
  showBillScenario: false,
};

export const InvoiceOverviewStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ invoiceOverview, showAll, selectedBillingAccount }) => ({
    invoiceOverview: invoiceOverviewSignal(invoiceOverview, showAll),
    isEligibleForPayment: isEligiblePaymentSignal(invoiceOverview, selectedBillingAccount),
    paidInvoicesAvailable: arePaidInvoicesAvailableSignal(invoiceOverview),
    isPaymentPlanActive: isPaymentPlanActiveSignal(selectedBillingAccount),
    updatedPaymentMethod: updatedPaymentMethodSignal(invoiceOverview, selectedBillingAccount),
    areExplicitBillScenariosAvailable: areExplicitBillScenariosAvailableSignal(invoiceOverview),
    isBusinessCustomer: isBusinessCustomerSignal(selectedBillingAccount),
  })),
  withMethods(
    (
      store,
      invoiceOverviewService = inject(InvoiceOverviewService),
      messageService = inject(MessageService),
      datalayerService = inject(InvoiceOverviewDatalayerService)
    ) => ({
      loadMore: () => patchState(store, { showAll: true }),
      selectBillingAccount(selectedBillingAccount: BillingAccount, showBillScenario: boolean) {
        patchState(store, { selectedBillingAccount, showBillScenario });
        this.loadInvoices(selectedBillingAccount.billingAccountNumber);
      },
      loadInvoices: rxMethod<string>(
        pipe(
          tap(() => patchState(store, { loading: true })),
          switchMap((billingAccountNumber) => invoiceOverviewService.getInvoices(billingAccountNumber)),
          tap(() => messageService.clearMessages(InvoiceOverviewService.MESSAGE_GROUP)),
          tapResponse({
            next: (invoiceOverview) => {
              patchState(store, (state) => ({
                ...state,
                loading: false,
                loadError: undefined,
                showAll: false,
                invoiceOverview,
              }));
              store.showBillScenario()
                ? datalayerService.sendOutstandingBalanceWithBillScenarios(invoiceOverview.unpaidInvoices)
                : datalayerService.sendOutstandingBalance(invoiceOverview.unpaidInvoices.totalAmount);
            },
            error: (error: HttpErrorResponse) =>
              patchState(store, (state) => ({
                ...state,
                loading: false,
                showAll: false,
                loadError: error.message,
              })),
          })
        )
      ),
    })
  )
);
