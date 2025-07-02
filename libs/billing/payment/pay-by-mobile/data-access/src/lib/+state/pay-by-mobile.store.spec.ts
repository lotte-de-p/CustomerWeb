import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { MessageService } from '@telenet/ng-lib-message';
import { PayByMobileStore } from './pay-by-mobile.store';
import { SubscriptionService } from '../services/subscription/subscription.service';
import { TransactionService } from '../services/transaction/transaction.service';
import { BarringStatusService } from '../services/barring-status/barring-status.service';
import { PayByMobileDatalayerService } from '../services/datalayer/pay-by-mobile-datalayer.service';
import { of } from 'rxjs';
import { MobileLine } from '@billing/shared/data-access';
import { Transaction } from '../entities/transaction/transaction.model';
import { Subscription } from '../entities/subscription/subscription.model';

describe('Store', () => {
  it('should get the default state from the store', () => {
    const { store } = setup();
    expect(store.subscriptions()).toEqual([]);
    expect(store.transactions()).toEqual([]);
    expect(store.subscriptionsLoaded()).toEqual(true);
    expect(store.transactionsLoaded()).toEqual(true);
    expect(store.numberOfInitialTransactions()).toEqual(0);
    expect(store.totalNumberOfTransactions()).toEqual(0);
    expect(store.msisdnBarred()).toBeNull();
  });

  it('should load initial transactions', () => {
    const { store, transactionService } = setup();
    const transactions = [
      {
        serviceName: 'testservice',
      } as Transaction,
    ];
    jest.spyOn(transactionService, 'getInitialTransactions').mockReturnValue(
      of({
        transactions,
        totalNumberOfTransactions: 6,
      })
    );
    store.loadInitialTransactions({ msisdn: 'testmsisdn' } as MobileLine);
    expect(transactionService.getInitialTransactions).toHaveBeenCalledWith('testmsisdn');
    expect(store.transactions()).toEqual(transactions);
    expect(store.numberOfInitialTransactions()).toEqual(1);
    expect(store.lessTransactionsAvailable()).toBe(false);
    expect(store.moreTransactionsAvailable()).toBe(true);
  });

  it('should load transactions', () => {
    const { store, transactionService } = setup();
    const transactions = [
      {
        serviceName: 'testservice',
      } as Transaction,
      {
        serviceName: 'othertestservice',
      } as Transaction,
    ];
    jest.spyOn(transactionService, 'getTransactions').mockReturnValue(of(transactions));
    store.loadAllTransactions({ msisdn: 'testmsisdn' } as MobileLine);
    expect(transactionService.getTransactions).toHaveBeenCalledWith('testmsisdn');
    expect(store.transactions()).toEqual(transactions);
    expect(store.lessTransactionsAvailable()).toBe(true);
    expect(store.moreTransactionsAvailable()).toBe(false);
  });

  it('should load subscriptions', () => {
    const { store, subscriptionService } = setup();
    const subscriptions = [
      {
        serviceName: 'testservice',
      } as Subscription,
    ];
    jest.spyOn(subscriptionService, 'getSubscriptions').mockReturnValue(of(subscriptions));
    store.loadSubscriptions({ msisdn: 'testmsisdn' } as MobileLine);
    expect(subscriptionService.getSubscriptions).toHaveBeenCalledWith('testmsisdn');
    expect(store.subscriptions()).toEqual(subscriptions);
  });

  it('should cancel a subscription', () => {
    const { store, subscriptionService, datalayerService } = setup();

    jest.spyOn(subscriptionService, 'cancelSubscription');
    jest.spyOn(datalayerService, 'addEventCancelSubscription');
    store.cancelSubscription({
      mobileLine: { msisdn: 'testmsisdn' } as MobileLine,
      serviceName: 'testservice',
      companyId: 12345,
    });
    expect(datalayerService.addEventCancelSubscription).toHaveBeenCalledWith('testservice');
    expect(subscriptionService.cancelSubscription).toHaveBeenCalledWith('testmsisdn', 12345, 'testservice');
  });

  it('should get barring status', () => {
    const { store, barringStatusService } = setup();
    jest.spyOn(barringStatusService, 'getBarringStatus').mockReturnValue(
      of({
        barred: true,
      })
    );
    store.getBarringStatus('testmsisdn');
    expect(store.msisdnBarred()).toBe(true);
  });

  it('should select the mobile line', () => {
    const { store, barringStatusService, subscriptionService, transactionService, messageService } = setup();
    const subscriptions = [
      {
        serviceName: 'testservice',
      } as Subscription,
    ];
    const transactions = [
      {
        serviceName: 'testservice',
      } as Transaction,
    ];
    jest.spyOn(transactionService, 'getInitialTransactions').mockReturnValue(
      of({
        transactions,
        totalNumberOfTransactions: 6,
      })
    );
    jest.spyOn(subscriptionService, 'getSubscriptions').mockReturnValue(of(subscriptions));
    jest.spyOn(barringStatusService, 'getBarringStatus').mockReturnValue(
      of({
        barred: true,
      })
    );
    jest.spyOn(messageService, 'clearMessages');
    store.selectMobileLine({ msisdn: 'testmsisdn' } as MobileLine);
    expect(messageService.clearMessages).toHaveBeenCalledWith('pay-by-mobile');
    expect(transactionService.getInitialTransactions).toHaveBeenCalledWith('testmsisdn');
    expect(subscriptionService.getSubscriptions).toHaveBeenCalledWith('testmsisdn');
    expect(barringStatusService.getBarringStatus).toHaveBeenCalledWith('testmsisdn');
  });

  function setup() {
    TestBed.configureTestingModule({
      providers: [
        PayByMobileStore,
        MockProvider(SubscriptionService),
        MockProvider(TransactionService),
        MockProvider(BarringStatusService),
        MockProvider(MessageService),
        MockProvider(PayByMobileDatalayerService),
      ],
    });
    const store = TestBed.inject(PayByMobileStore);
    const subscriptionService = TestBed.inject(SubscriptionService);
    const transactionService = TestBed.inject(TransactionService);
    const barringStatusService = TestBed.inject(BarringStatusService);
    const messageService = TestBed.inject(MessageService);
    const datalayerService = TestBed.inject(PayByMobileDatalayerService);
    return { store, subscriptionService, transactionService, barringStatusService, messageService, datalayerService };
  }
});
