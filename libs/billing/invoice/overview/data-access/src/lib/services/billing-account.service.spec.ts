import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { BillingAccount, BillingAddress, DispatchMethod, PaymentMethod } from '../entities/billing-account';
import { BillingAccountService } from './billing-account.service';
import { of } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { PaymentStatus } from '../entities/payment-status';

describe('BillingAccountService', () => {
  let billingAccountService: BillingAccountService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingAccountService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });

    billingAccountService = TestBed.inject(BillingAccountService);
    ocapiService = TestBed.inject(OcapiService);
  });

  it('should call the get billing accounts api', () => {
    const response: BillingAccount[] = [
      {
        billingAccountNumber: '123455',
        outstandingBalance: 123.45,
        paymentStatus: PaymentStatus.UNPAID,
        currentPaymentMethod: PaymentMethod.MANUAL,
        dispatchMethod: DispatchMethod.EMAIL,
        isEligibleForManualPayment: false,
        billingAddress: {
          street: 'testStreet',
          houseNumber: '123',
        } as BillingAddress,
        email: 'test@test.com',
        mobilePhoneNumber: '123456789',
        customerCategory: 'BUSINESS',
      } as BillingAccount,
    ];
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(response));

    billingAccountService.getBillingAccounts().subscribe((res) => {
      expect(res).toEqual(response);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig('invoice-overview', '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts')
      );
    });
  });
});
