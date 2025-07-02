import { inject, Injectable } from '@angular/core';
import { BillingStore } from '../+state/billing.store';
import { Invoice } from '../entities/models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class BillingFacade {
  private readonly store = inject(BillingStore);

  readonly invoices = this.store.billingEntries;

  async loadInvoices() {
    await this.store.getInvoices();
  }

  payInvoice(invoice: Invoice): void {
    this.store.payInvoice(invoice);
  }
}
