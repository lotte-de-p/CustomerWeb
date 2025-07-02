import { TestBed } from '@angular/core/testing';
import { CustomerAccountFacade } from './customer-account.facade';
import { of } from 'rxjs';
import { CustomerAccountService } from '../services/customer-account.service';
import { CustomerAccount, CustomerAccountStatus } from '../interfaces/customer-account.interface';

describe('CustomerAccountFacade', () => {
  let facade: CustomerAccountFacade;
  let service: jest.Mocked<CustomerAccountService>;

  beforeEach(() => {
    const spy = {
      getCustomerAccount: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [CustomerAccountFacade, { provide: CustomerAccountService, useValue: spy }],
    });

    facade = TestBed.inject(CustomerAccountFacade);
    service = TestBed.inject(CustomerAccountService) as jest.Mocked<CustomerAccountService>;
  });

  it('should return a valid customer account', (done) => {
    const mockAccount: CustomerAccount = {
      status: CustomerAccountStatus.New,
      isNewCustomer(): boolean {
        return this.status === CustomerAccountStatus.New;
      },
    };
    service.getCustomerAccount.mockReturnValue(of(mockAccount));

    facade.getCustomerAccount().subscribe((account: CustomerAccount) => {
      expect(account).toEqual(mockAccount);
      done();
    });
  });
});
