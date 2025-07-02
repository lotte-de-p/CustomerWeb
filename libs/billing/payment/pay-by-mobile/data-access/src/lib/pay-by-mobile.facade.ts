import { inject, Injectable } from '@angular/core';
import { MobileLine } from '@billing/shared/data-access';
import { PayByMobileStore } from './+state/pay-by-mobile.store';

@Injectable({ providedIn: 'root' })
export class PayByMobileFacade {
  private readonly store = inject(PayByMobileStore);

  lessTransactionsAvailable = this.store.lessTransactionsAvailable;
  moreTransactionsAvailable = this.store.moreTransactionsAvailable;
  subscriptions = this.store.subscriptions;
  transactionsLoaded = this.store.transactionsLoaded;
  transactions = this.store.transactions;
  subscriptionsLoaded = this.store.subscriptionsLoaded;
  msisdnBarred = this.store.msisdnBarred;

  selectMobileLine(mobileLine: MobileLine) {
    this.store.selectMobileLine(mobileLine);
  }

  loadInitialTransactions(mobileLine: MobileLine) {
    this.store.loadInitialTransactions(mobileLine);
  }

  loadMoreTransactions(mobileLine: MobileLine) {
    this.store.loadAllTransactions(mobileLine);
  }

  cancelSubscription(mobileLine: MobileLine, companyId: number, serviceName: string) {
    this.store.cancelSubscription({
      mobileLine,
      companyId,
      serviceName,
    });
  }

  getBarringStatus(msisdn: string): void {
    this.store.getBarringStatus(msisdn);
  }

  resetPaymentStatus(): void {
    this.store.resetPaymentStatus();
  }
}
