import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { MessageService } from '@telenet/ng-lib-message';
import { initialState, InvoiceOverviewStore } from './invoice-overview.store';
import { InvoiceOverviewService } from '../services/invoice.service';
import { InvoiceOverviewDatalayerService } from '../services/invoice-overview-datalayer.service';
import { of } from 'rxjs';
import { InvoiceOverview, UnpaidInvoices } from '../entities/invoice';
import { BillingAccount } from '../entities/billing-account';

describe('Store', () => {
  it('should get the invoice overview from the state', () => {
    const { store } = setup();
    expect(store.invoiceOverview()).toEqual(initialState.invoiceOverview);
  });

  it('should get the invoices from the api', () => {
    const { store, invoiceOverviewService, messageService } = setup();
    const invoiceOverview = {
      paidInvoices: [{ invoiceYear: '2024', invoices: [] }],
      unpaidInvoices: {} as UnpaidInvoices,
    } as InvoiceOverview;

    jest.spyOn(invoiceOverviewService, 'getInvoices').mockReturnValue(of(invoiceOverview));
    jest.spyOn(messageService, 'clearMessages');

    store.loadInvoices('123456');
    expect(invoiceOverviewService.getInvoices).toHaveBeenCalledWith('123456');
    expect(messageService.clearMessages).toHaveBeenCalledWith(InvoiceOverviewService.MESSAGE_GROUP);
  });

  it('should select a billing account', () => {
    const { store, invoiceOverviewService } = setup();
    const billingAccount = { billingAccountNumber: '123456' } as BillingAccount;
    const invoiceOverview = {
      paidInvoices: [{ invoiceYear: '2024', invoices: [] }],
      unpaidInvoices: {} as UnpaidInvoices,
    } as InvoiceOverview;
    jest.spyOn(invoiceOverviewService, 'getInvoices').mockReturnValue(of(invoiceOverview));
    expect(store.selectedBillingAccount()).toBeUndefined();
    store.selectBillingAccount(billingAccount, false);
    expect(store.selectedBillingAccount()).toEqual(billingAccount);
  });

  function setup() {
    TestBed.configureTestingModule({
      providers: [
        InvoiceOverviewStore,
        MockProvider(InvoiceOverviewService),
        MockProvider(MessageService),
        MockProvider(InvoiceOverviewDatalayerService),
      ],
    });
    const store = TestBed.inject(InvoiceOverviewStore);
    const invoiceOverviewService = TestBed.inject(InvoiceOverviewService);
    const messageService = TestBed.inject(MessageService);
    return { store, invoiceOverviewService, messageService };
  }
});
