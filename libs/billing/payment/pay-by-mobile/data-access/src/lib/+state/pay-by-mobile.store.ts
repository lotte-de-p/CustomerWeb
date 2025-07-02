import { Subscription } from '../entities/subscription/subscription.model';
import { Transaction } from '../entities/transaction/transaction.model';
import { MobileLine } from '@billing/shared/data-access';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { lessTransactionsAvailableSignal, moreTransactionsAvailableSignal } from './pay-by-mobile.selectors';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { filter, of, pipe, withLatestFrom } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { inject } from '@angular/core';
import { SubscriptionService } from '../services/subscription/subscription.service';
import { tapResponse } from '@ngrx/component-store';
import { TransactionService } from '../services/transaction/transaction.service';
import { MessageService, SuccessMessage } from '@telenet/ng-lib-message';
import { BarringStatusService } from '../services/barring-status/barring-status.service';
import { PayByMobileDatalayerService } from '../services/datalayer/pay-by-mobile-datalayer.service';

export interface PayByMobileState {
  msisdnBarred: boolean | null;
  transactions: Transaction[];
  numberOfInitialTransactions: number;
  totalNumberOfTransactions: number;
  subscriptions: Subscription[];
  subscriptionsLoaded: boolean;
  transactionsLoaded: boolean;
}

export const initialState: PayByMobileState = {
  msisdnBarred: null,
  transactions: [],
  numberOfInitialTransactions: 0,
  totalNumberOfTransactions: 0,
  subscriptions: [],
  subscriptionsLoaded: true,
  transactionsLoaded: true,
};

const MESSAGE_GROUPNAME = 'pay-by-mobile';
export const PayByMobileStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ transactions, totalNumberOfTransactions }) => ({
    moreTransactionsAvailable: moreTransactionsAvailableSignal(transactions, totalNumberOfTransactions),
  })),
  withComputed(({ transactions, numberOfInitialTransactions }) => ({
    lessTransactionsAvailable: lessTransactionsAvailableSignal(transactions, numberOfInitialTransactions),
  })),
  withMethods(
    (
      store,
      subscriptionService = inject(SubscriptionService),
      transactionService = inject(TransactionService),
      barringStatusService = inject(BarringStatusService),
      messageService = inject(MessageService),
      dataLayerService = inject(PayByMobileDatalayerService)
    ) => {
      const loadSubscriptions = rxMethod<MobileLine>(
        pipe(
          switchMap((mobileLine) => subscriptionService.getSubscriptions(mobileLine.msisdn)),
          tapResponse({
            next: (subscriptions: Subscription[]) =>
              patchState(store, (state) => ({
                ...state,
                subscriptions,
                subscriptionsLoaded: true,
              })),
            error: () =>
              patchState(store, (state) => ({
                ...state,
                subscriptionsLoaded: true,
              })),
          })
        )
      );
      const loadInitialTransactions = rxMethod<MobileLine>(
        pipe(
          switchMap((mobileLine) => transactionService.getInitialTransactions(mobileLine.msisdn)),
          tapResponse({
            next: ({ transactions, totalNumberOfTransactions }) =>
              patchState(store, (state) => ({
                ...state,
                transactions,
                numberOfInitialTransactions: transactions.length,
                totalNumberOfTransactions,
                transactionsLoaded: true,
              })),
            error: () =>
              patchState(store, (state) => ({
                ...state,
                transactionsLoaded: true,
              })),
          })
        )
      );
      const loadAllTransactions = rxMethod<MobileLine>(
        pipe(
          tap(() =>
            patchState(store, (state) => ({
              ...state,
              transactionsLoaded: false,
            }))
          ),
          switchMap((mobileLine) => transactionService.getTransactions(mobileLine.msisdn)),
          tapResponse({
            next: (transactions) =>
              patchState(store, (state) => ({
                ...state,
                transactions,
                totalNumberOfTransactions: transactions.length,
                transactionsLoaded: true,
              })),
            error: () =>
              patchState(store, (state) => ({
                ...state,
                transactionsLoaded: true,
              })),
          })
        )
      );
      const cancelSubscription = rxMethod<{
        mobileLine: MobileLine;
        companyId: number;
        serviceName: string;
      }>(
        pipe(
          tap(({ serviceName }) => {
            if (serviceName) {
              dataLayerService.addEventCancelSubscription(serviceName);
            }
          }),
          switchMap(({ mobileLine, companyId, serviceName }) =>
            subscriptionService
              .cancelSubscription(mobileLine.msisdn, companyId, serviceName)
              .pipe(withLatestFrom(of(mobileLine)))
          ),
          tap(() =>
            messageService.addMessage(new SuccessMessage(MESSAGE_GROUPNAME, 'pay-by-mobile-cancel-subscription'))
          ),
          filter(([_, mobileLine]) => mobileLine !== null),
          tapResponse({
            next: ([_, mobileLine]) => loadSubscriptions(mobileLine),
            error: () =>
              patchState(store, (state) => ({
                ...state,
                subscriptionsLoaded: true,
              })),
          })
        )
      );
      const getBarringStatus = rxMethod<string>(
        pipe(
          switchMap((msisdn) => barringStatusService.getBarringStatus(msisdn)),
          tapResponse({
            next: (barringStatus) =>
              patchState(store, (state) => ({
                ...state,
                msisdnBarred: barringStatus.barred,
              })),
            error: () =>
              patchState(store, (state) => ({
                ...state,
                msisdnBarred: null,
              })),
          })
        )
      );
      const selectMobileLine = (selectedMobileLine: MobileLine) => {
        messageService.clearMessages(MESSAGE_GROUPNAME);
        patchState(store, (state) => ({
          ...state,
          transactionsLoaded: false,
          subscriptionsLoaded: false,
        }));
        loadInitialTransactions(selectedMobileLine);
        loadSubscriptions(selectedMobileLine);
        getBarringStatus(selectedMobileLine.msisdn);
      };
      const resetPaymentStatus = () => {
        patchState(store, (state) => ({
          ...state,
          subscriptionsLoaded: true,
          transactionsLoaded: false,
          msisdnBarred: null,
        }));
      };

      return {
        loadInitialTransactions,
        loadAllTransactions,
        loadSubscriptions,
        cancelSubscription,
        getBarringStatus,
        resetPaymentStatus,
        selectMobileLine,
      };
    }
  )
);
