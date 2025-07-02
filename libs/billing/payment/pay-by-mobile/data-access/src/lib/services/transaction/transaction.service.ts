import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';

import { InitialTransactions, Transaction } from '../../entities/transaction/transaction.model';
import { PAY_BY_MOBILE_SERVICE } from '../pay-by-mobile-service.constants';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private static readonly PAY_BY_MOBILE_SERVICE_INITIAL_TRANSACTION = PAY_BY_MOBILE_SERVICE + 'initial-transactions/';
  private static readonly PAY_BY_MOBILE_SERVICE_TRANSACTION = PAY_BY_MOBILE_SERVICE + 'transactions/';
  private static readonly MESSAGE_GROUP = 'pay-by-mobile';

  constructor(private readonly ocapiService: OcapiService) {}

  getInitialTransactions(msisdn: string): Observable<InitialTransactions> {
    const endpoint = TransactionService.PAY_BY_MOBILE_SERVICE_INITIAL_TRANSACTION + msisdn;
    return this.ocapiService.doGet(
      new OcapiCallConfig<InitialTransactions, InitialTransactions>(TransactionService.MESSAGE_GROUP, endpoint)
    );
  }

  getTransactions(msisdn: string): Observable<Transaction[]> {
    const endpoint = TransactionService.PAY_BY_MOBILE_SERVICE_TRANSACTION + msisdn;
    return this.ocapiService.doGet(
      new OcapiCallConfig<Transaction[], Transaction[]>(TransactionService.MESSAGE_GROUP, endpoint)
    );
  }
}
