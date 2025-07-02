import { expect } from '@jest/globals';
import { AccountError } from '../interfaces/account.error';
import { BasicBillingAccount } from '../interfaces/basic-billing-account.interface';
import { AccountEventDelegator } from './account-event.delegator';

describe('AccountEventDelegator', () => {
  let accountEventDelegator: AccountEventDelegator;

  beforeEach(() => {
    accountEventDelegator = new AccountEventDelegator();
  });

  it('delegateBillingAccount', (done) => {
    accountEventDelegator.delegateBillingAccount({ id: '123', accountNumber: '975421548' });
    accountEventDelegator.billingAccount().subscribe({
      next: (billingAcc: BasicBillingAccount) => {
        expect(billingAcc.id).toBe('123');
        expect(billingAcc.accountNumber).toBe('975421548');
        done();
      },
    });
  });

  it('delegateBillingAccountError', (done) => {
    accountEventDelegator.delegateBillingAccountError({ serviceError: true, keyLabel: 'label' });
    accountEventDelegator.billingAccount().subscribe({
      error: (error: AccountError) => {
        expect(error.serviceError).toBeTruthy();
        expect(error.keyLabel).toBe('label');
        done();
      },
    });
  });
});
