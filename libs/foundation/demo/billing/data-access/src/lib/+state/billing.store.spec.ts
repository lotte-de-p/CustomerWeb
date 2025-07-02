import { TestBed } from '@angular/core/testing';
import { BillingStore, BillingStoreType } from './billing.store';
import { InvoiceService } from '../infrastructure/invoice.service';
import { Invoice } from '../entities/models/invoice.model';

describe('BillingState', () => {
  const billingServiceMock = { getBillingEntries: jest.fn() };
  let store: BillingStoreType;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingStore, { provide: InvoiceService, useValue: billingServiceMock }],
    });

    store = TestBed.inject(BillingStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should call getBillingEntries on the store when getInvoices is called', async () => {
    await store.getInvoices();
    expect(billingServiceMock.getBillingEntries).toHaveBeenCalled();
  });

  it('should call console.log on the payInvoice is called', async () => {
    const mockInvoice: Partial<Invoice> = {
      id: 'Mar23 - 25695',
    };

    jest.spyOn(console, 'log');
    store.payInvoice(mockInvoice as Invoice);

    expect(console.log).toHaveBeenCalledWith(`PAYED invoice ${mockInvoice.id}`);
  });
});
