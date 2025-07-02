import { lessTransactionsAvailableSignal, moreTransactionsAvailableSignal } from './pay-by-mobile.selectors';
import { signal } from '@angular/core';
import { Transaction } from '../entities/transaction/transaction.model';

describe('pay mobile selectors', () => {
  it('lessTransactionsAvailableSignal', () => {
    expect(lessTransactionsAvailableSignal(signal([]), signal(0))()).toBe(false);
    expect(
      lessTransactionsAvailableSignal(
        signal([
          {
            serviceName: 'testservice',
          } as Transaction,
        ]),
        signal(1)
      )()
    ).toBe(false);
    expect(
      lessTransactionsAvailableSignal(
        signal([
          {
            serviceName: 'testservice',
          } as Transaction,
          {
            serviceName: 'othertestservice',
          } as Transaction,
        ]),
        signal(1)
      )()
    ).toBe(true);
  });

  it('moreTransactionsAvailableSignal', () => {
    expect(moreTransactionsAvailableSignal(signal([]), signal(0))()).toBe(false);
    expect(moreTransactionsAvailableSignal(signal([]), signal(1))()).toBe(true);
    expect(
      moreTransactionsAvailableSignal(
        signal([
          {
            serviceName: 'testservice',
          } as Transaction,
        ]),
        signal(1)
      )()
    ).toBe(false);
    expect(
      moreTransactionsAvailableSignal(
        signal([
          {
            serviceName: 'testservice',
          } as Transaction,
        ]),
        signal(0)
      )()
    ).toBe(false);
  });
});
