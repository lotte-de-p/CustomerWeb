import { TestBed } from '@angular/core/testing';
import { InvoiceOverviewFacade } from './invoice-overview.facade';
import { BillingAccount, CustomerCategory, DispatchMethod, PaymentMethod } from './entities/billing-account';
import { PaymentStatus } from './entities/payment-status';
import { MockProvider } from 'ng-mocks';
import { InvoiceOverviewStore } from './+state/invoice-overview.store';

describe('ProductPriceChangesFacade', () => {
  let invoiceOverviewFacade: InvoiceOverviewFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvoiceOverviewFacade,
        MockProvider(InvoiceOverviewStore, {
          loadMore: jest.fn(),
          selectBillingAccount: jest.fn(),
        }),
      ],
    });
    invoiceOverviewFacade = TestBed.inject(InvoiceOverviewFacade);
  });

  it('selectBillingAccount', () => {
    const dummyBillingAccount: BillingAccount = {
      billingAccountNumber: '123456',
      paymentDueDate: new Date(),
      paymentStatus: PaymentStatus.PAID,
      isEligibleForManualPayment: false,
      billingAddress: {
        street: 'Test Street',
        floor: 'Test Floor',
        houseNumber: 'Test House Number',
        subHouseNumber: 'Test Sub House Number',
        boxNumber: 'Test Box Number',
        postalCode: 'Test Postal Code',
        municipality: 'Test Municipality',
      },
      currentPaymentMethod: PaymentMethod.MANUAL,
      dispatchMethod: DispatchMethod.PAPER,
      email: 'email',
      mobilePhoneNumber: '04671239',
      customerCategory: CustomerCategory.BUSINESS,
      outstandingBalance: 123,
      defaultAccount: true,
    };
    const store = TestBed.inject(InvoiceOverviewStore);
    jest.spyOn(store, 'selectBillingAccount');
    invoiceOverviewFacade.selectBillingAccount(dummyBillingAccount, false);
    expect(store.selectBillingAccount).toHaveBeenCalledWith(dummyBillingAccount, false);
  });

  it('loadMore', () => {
    const store = TestBed.inject(InvoiceOverviewStore);
    jest.spyOn(store, 'loadMore');
    invoiceOverviewFacade.loadMore();
    expect(store.loadMore).toHaveBeenCalled();
  });
});
