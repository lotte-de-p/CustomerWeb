import { computed, Signal } from '@angular/core';
import { Transaction } from '../entities/transaction/transaction.model';

export const moreTransactionsAvailableSignal = (
  transactions: Signal<Transaction[]>,
  totalNumberOfTransactions: Signal<number>
) => computed(() => transactions().length < totalNumberOfTransactions());

export const lessTransactionsAvailableSignal = (
  transactions: Signal<Transaction[]>,
  numberOfInitialTransactions: Signal<number>
) => computed(() => transactions().length > numberOfInitialTransactions());
