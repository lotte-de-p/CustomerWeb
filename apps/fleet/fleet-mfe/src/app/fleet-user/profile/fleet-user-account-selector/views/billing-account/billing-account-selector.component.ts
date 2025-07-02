import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountSelectorConstants } from '../../constants/account-selector.constant';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { sortBy, find, isEmpty } from 'lodash-es';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerStoreService } from '../../../../shared/services/customer-store.service';
import { CustomerStore } from '../../../../../fleet-product/line/shared/models/customer-store.model';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';
import { BillingAccount } from '../../../../shared/models/billing-account.model';
import { BillingService } from '../../../../shared/services/billing.service';

@Component({
  selector: 'app-billing-account-selector',
  templateUrl: './billing-account-selector.component.html',
  standalone: true,
  imports: [NgClass, TranslateModule],
})
export class BillingAccountSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() isSelectorOpen: boolean;
  @Output() toggle = new EventEmitter();
  messageGroupName: string = AccountSelectorConstants.MESSAGE_GROUP;
  billingAccounts: BillingAccount[];
  accountSelected: BillingAccount;
  isInitialized: boolean;
  isBusinessCustomer: boolean;

  readonly SESSION_STORAGE_KEY = 'billing-account-selector';

  constructor(
    private readonly billingService: BillingService,
    private readonly accountSelectorService: AccountSelectorService,
    private readonly customerStoreService: CustomerStoreService,
    private readonly urlService: UrlService
  ) {
    super();
  }

  ngOnInit(): void {
    this.customerStoreService.getStoreData().subscribe((customer: CustomerStore) => {
      this.isBusinessCustomer = customer.isBusiness();
    });
    this.loadBillingAccounts();
  }

  loadBillingAccounts(): void {
    this.billingService.getAccounts(this.messageGroupName).subscribe({
      next: (billingAccounts: BillingAccount[]) => {
        if (!isEmpty(billingAccounts)) {
          this.billingAccounts = billingAccounts;
          this.accountSelected = this.getDefaultBillingAccount();
          this.isInitialized = true;
          this.billingAccounts = sortBy(this.billingAccounts, 'accountNumber').reverse();
          this.accountSelectorService.setSelectedBillingAccount(this.accountSelected);
        } else {
          this.accountSelectorService.setSelectedBillingAccountError(false, 'billing-line');
        }
      },
      error: () => {
        this.accountSelectorService.setSelectedBillingAccountError(true, 'billing-line');
      },
    });
  }

  getDefaultBillingAccount(): BillingAccount {
    const defaultAccountFromRequest = this.getDefaultBillingAccountFromRequest();
    if (defaultAccountFromRequest) {
      return defaultAccountFromRequest;
    }
    const defaultAccountFromSessionStorage = this.getDefaultBillingAccountFromSessionStorage();
    if (defaultAccountFromSessionStorage) {
      return defaultAccountFromSessionStorage;
    }
    const defaultAccountByOutstandingBalance = this.getDefaultBillingAccountByOutstandingBalance();
    if (defaultAccountByOutstandingBalance) {
      return defaultAccountByOutstandingBalance;
    }
    return sortBy(this.billingAccounts, 'accountNumber').reverse()[0];
  }

  getDefaultBillingAccountFromRequest(): BillingAccount {
    let defaultAccount: BillingAccount;
    if (this.urlService.requestParamsContains(AccountSelectorConstants.ACCOUNT_NUMBER)) {
      const accountNumberFromUrl = this.urlService.getRequestParameterOrDefault(
        AccountSelectorConstants.ACCOUNT_NUMBER,
        ''
      );
      defaultAccount = find(this.billingAccounts, (billingAccount: BillingAccount) => {
        return billingAccount.accountNumber === accountNumberFromUrl;
      });
    }
    return defaultAccount;
  }

  getDefaultBillingAccountByOutstandingBalance(): BillingAccount {
    const defaultAccount = find(this.billingAccounts, (billingAccount: BillingAccount) => {
      return billingAccount.defaultAccount;
    });
    const accountsWithOutstandingBalance = sortBy(
      this.billingAccounts,
      (account) => account.collectionsInfo.dueDate
    ).filter((billingAccount: BillingAccount) => {
      return !billingAccount.hasDirectDebit() && billingAccount.hasOutstandingBalance();
    });
    if (!isEmpty(accountsWithOutstandingBalance)) {
      return accountsWithOutstandingBalance[0];
    }
    return defaultAccount;
  }

  getDefaultBillingAccountFromSessionStorage(): BillingAccount | undefined {
    let defaultAccount: BillingAccount;

    const storedAccNumber = window.sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (storedAccNumber) {
      defaultAccount = this.billingAccounts.find((acc) => acc.accountNumber === storedAccNumber);
    }

    return defaultAccount;
  }

  onSelectAccount(selectedAccount: BillingAccount): void {
    this.accountSelected = selectedAccount;
    this.accountSelectorService.setSelectedBillingAccount(selectedAccount);
    window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, selectedAccount.accountNumber);
  }

  isActive(account): boolean {
    return (
      this.accountSelected &&
      this.accountSelected['accountNumber'] &&
      this.accountSelected['accountNumber'] === account['accountNumber']
    );
  }
}
