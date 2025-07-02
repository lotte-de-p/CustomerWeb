import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Invoice } from '../entities/models/invoice.model';
import { inject, Signal } from '@angular/core';
import { InvoiceService } from '../infrastructure/invoice.service';

export interface BillingState {
  billingEntries: Invoice[];
}

export const initialState: BillingState = {
  billingEntries: [],
};

export const BillingStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, billingService = inject(InvoiceService)) => ({
    async getInvoices() {
      const billingEntries = await billingService.getBillingEntries();
      patchState(store, (state) => ({ ...state, billingEntries }));
    },
    payInvoice(invoice: Invoice) {
      console.log(`PAYED invoice ${invoice.id}`);
    },
  }))
);

export interface BillingStoreType {
  billingEntries: Signal<Invoice[]>;
  getInvoices: () => Promise<void>;
  payInvoice: (invoice: Invoice) => void;
}
