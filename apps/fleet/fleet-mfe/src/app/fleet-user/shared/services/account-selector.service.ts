import { Inject, Injectable } from '@angular/core';
import { forkJoin, Observable, ReplaySubject } from 'rxjs';
import isEmpty from 'lodash-es/isEmpty';
import { MessageService } from '@telenet/ng-lib-message';
import { DOCUMENT } from '@angular/common';
import { AccountEventDelegator } from '@telenet/ng-lib-account';
import { AddressService } from './address.service';
import { BillingAccountInterface } from '../interfaces/billing/billing-accounts.interface';
import { ProductSubscriptionsInterface } from '../interfaces/product/product-subscriptions.interface';
import { AccountSelectorErrorInterface } from '../interfaces/account/account-selectorerror.interface';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AccountSelectorService {
  // eslint-disable-next-line
  private readonly selectedAccountSubject: ReplaySubject<any>;
  // eslint-disable-next-line
  private readonly selectedBundleSubject: ReplaySubject<any>;
  // eslint-disable-next-line
  private readonly customerAccountsSubject: ReplaySubject<any>;
  // eslint-disable-next-line
  private readonly mobileUsageRetrievedSubject: ReplaySubject<any>;

  constructor(
    private readonly addressService: AddressService,
    private readonly messageService: MessageService,
    private readonly accountEventDelegator: AccountEventDelegator,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.selectedAccountSubject = new ReplaySubject(1);
    this.selectedBundleSubject = new ReplaySubject(1);
    this.customerAccountsSubject = new ReplaySubject(1);
    this.mobileUsageRetrievedSubject = new ReplaySubject(1);
  }

  getSelectedAccount<T>(): ReplaySubject<T> {
    return this.selectedAccountSubject;
  }

  getSelectedBundle<T>(): ReplaySubject<T> {
    return this.selectedBundleSubject;
  }

  setSelectedAccount<T>(selectedBillingAccount: T) {
    this.clearMessages();
    this.selectedAccountSubject.next(selectedBillingAccount);
    this.dispatchCustomEvent(selectedBillingAccount);
  }

  setSelectedBillingAccount(selectedBillingAccount: BillingAccountInterface) {
    this.setSelectedAccount(selectedBillingAccount);
    this.accountEventDelegator.delegateBillingAccount(selectedBillingAccount);
  }

  setSelectedBillingAccountError(serviceError: boolean, keyLabel: string) {
    this.setError(serviceError, keyLabel);
    this.accountEventDelegator.delegateBillingAccountError(this.mapAccountSelectorError(serviceError, keyLabel));
  }

  setSelectedBundle<T>(selectedBundleAccount: T) {
    this.clearMessages();
    this.selectedBundleSubject.next(selectedBundleAccount);
    this.dispatchCustomEvent(selectedBundleAccount);
  }

  getCustomerAccounts<T>(): ReplaySubject<T> {
    return this.customerAccountsSubject;
  }

  setCustomerAccounts<T>(customerAccounts: T) {
    this.customerAccountsSubject.next(customerAccounts);
  }

  getMobileUsageRetrieved<T>(): ReplaySubject<T> {
    return this.mobileUsageRetrievedSubject;
  }

  setMobileUsageRetrieved<T>(usageRetrieved: T): void {
    this.mobileUsageRetrievedSubject.next(usageRetrieved);
  }

  setError(serviceError: boolean, keyLabel: string) {
    const errorValue: AccountSelectorErrorInterface = this.mapAccountSelectorError(serviceError, keyLabel);
    this.selectedAccountSubject.error(errorValue);
    this.dispatchCustomEvent(errorValue);
  }

  loadAddresses(messageGroupName: string, accountList: ProductSubscriptionsInterface[]): Observable<unknown> {
    // eslint-disable-next-line rxjs/finnish,rxjs/no-ignored-replay-buffer
    const loadAddressSubject: ReplaySubject<unknown> = new ReplaySubject();
    const addressObservableList: Observable<Address[]>[] = [];
    accountList.forEach((account, index) => {
      // eslint-disable-next-line rxjs/finnish
      const observable: Observable<Address[]> = this.addressService.getAddressById(messageGroupName, account.addressId);
      observable.subscribe((addresses: Address[]) => {
        if (!isEmpty(addresses)) {
          [account.address] = addresses;
        }
      });
      addressObservableList[index] = observable;
    });

    forkJoin([...addressObservableList]).subscribe(() => {
      loadAddressSubject.next(null);
      loadAddressSubject.complete();
    });
    return loadAddressSubject;
  }

  private clearMessages(): void {
    const registeredGroupNames = this.messageService.getRegisteredGroupNames();
    registeredGroupNames.forEach((registeredGroupName: string) => {
      this.messageService.clearMessages(registeredGroupName);
    });
  }

  private dispatchCustomEvent<T>(account: T): void {
    this.document.dispatchEvent(
      new CustomEvent('selectedAccountModified', { bubbles: true, detail: { selectedAccount: account } })
    );
  }

  private mapAccountSelectorError(serviceError: boolean, keyLabel: string): AccountSelectorErrorInterface {
    return { keyLabel: keyLabel, serviceError: serviceError };
  }
}
