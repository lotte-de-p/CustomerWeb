import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountEventDelegator } from '@telenet/ng-lib-account';
import { BillingService } from '../../../shared/common/services/billing/billing.service';
import { BillingAccountInterface } from '../../../shared/common/services/billing/interfaces/billing-accounts.interface';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'tg-local-billing-account-selector',
  standalone: true,
  templateUrl: './local-billing-account-selector.component.html',
  imports: [NgClass, AsyncPipe],
})
export class LocalBillingAccountSelectorComponent implements OnInit {
  readonly #accountEventDelegator = inject(AccountEventDelegator);
  readonly #billingService = inject(BillingService);

  isSelectorOpen = false;
  selectedAccount: BillingAccountInterface;
  billingAccounts$: Observable<BillingAccountInterface[]>;

  ngOnInit(): void {
    this.billingAccounts$ = this.getBillingAccountsAndSetSelectedAccount();
  }

  getBillingAccountsAndSetSelectedAccount(): Observable<BillingAccountInterface[]> {
    return this.#billingService.getAccounts('billing-account-selector').pipe(
      tap({
        next: (billingAccounts: BillingAccountInterface[]) => {
          this.setSelectedAccount(billingAccounts[0]);
        },
      })
    );
  }

  isActive(account: BillingAccountInterface): boolean {
    return account.accountNumber === this.selectedAccount.accountNumber;
  }

  setSelectedAccount(account: BillingAccountInterface): void {
    this.selectedAccount = account;
    this.#accountEventDelegator.delegateBillingAccount(account);
  }
}
