import { TestBed } from '@angular/core/testing';
import { BillingFacade } from './billing.facade';
import { BillingStore } from '../+state/billing.store';
import { InvoiceStatus } from '../entities/models/invoice.model';

describe('BillingFacade', () => {
  const billingStoreMock = { getInvoices: jest.fn(), payInvoice: jest.fn() };
  let facade: BillingFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingFacade, { provide: BillingStore, useValue: billingStoreMock }],
    });

    facade = TestBed.inject(BillingFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should call getInvoices on the store when loadInvoices is called', async () => {
    await facade.loadInvoices();
    expect(billingStoreMock.getInvoices).toHaveBeenCalled();
  });

  it('should call payInvoice on the store when payInvoice is called', async () => {
    const mockInvoice = {
      amount: 968.52,
      companyName: 'Stad Oostende',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
      expirationDate: new Date('2023-03-29T22:00:00.000Z'),
      id: 'Mar23 - 25695',
      invoiceDate: new Date('2023-02-28T23:00:00.000Z'),
      openFileLink: 'invoice.openFileLink',
      status: InvoiceStatus.OPEN,
    };

    facade.payInvoice(mockInvoice);

    expect(billingStoreMock.payInvoice).toHaveBeenCalledWith(mockInvoice);
  });

  /** FIXME: This wont work until there are testing utils for signal stores.

      @see https://github.com/ngrx/platform/issues/4256 for futher information

      describe(`when loadInvoices is called`, () => {
    it('should fetch the invoices', async () => {
      const expectedInvoices: Invoice[] = [
        {
          amount: 968.52,
          companyName: 'Stad Oostende',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
          expirationDate: new Date('2023-03-29T22:00:00.000Z'),
          id: 'Mar23 - 25695',
          invoiceDate: new Date('2023-02-28T23:00:00.000Z'),
          openFileLink: 'invoice.openFileLink',
          status: InvoiceStatus.OPEN,
        },
      ];

      billingStoreMock.getInvoices.mockResolvedValue(expectedInvoices);
      const invoices = await facade.loadInvoices();

      expect(invoices).toEqual(expectedInvoices);
    });
  });*/
});
