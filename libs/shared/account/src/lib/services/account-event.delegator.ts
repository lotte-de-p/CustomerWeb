import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BasicBillingAccount } from '../interfaces/basic-billing-account.interface';
import { AccountError } from '../interfaces/account.error';

@Injectable({
  providedIn: 'root',
})
export class AccountEventDelegator {
  private readonly billingAccount$: ReplaySubject<BasicBillingAccount>;

  constructor() {
    this.billingAccount$ = new ReplaySubject(1);
  }

  billingAccount(): ReplaySubject<BasicBillingAccount> {
    return this.billingAccount$;
  }

  delegateBillingAccount(billingAccount: BasicBillingAccount): void {
    this.billingAccount$.next(billingAccount);
  }

  delegateBillingAccountError(error: AccountError): void {
    this.billingAccount$.error(error);
  }
}
