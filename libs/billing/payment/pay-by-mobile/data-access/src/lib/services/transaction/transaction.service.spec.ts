import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { Transaction } from '../../entities/transaction/transaction.model';
import { Builder } from '@telenet/ng-lib-shared';

describe('PayByMobileTransactionService', () => {
  let service: TransactionService;
  let ocapiService: OcapiService;
  const transaction = Builder<Transaction>().build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(TransactionService);
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of([transaction]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should cancelSubscription', () => {
    const ocapiCallConfig = new OcapiCallConfig(
      'pay-by-mobile',
      '/public/api/pay-by-mobile-service/v1/pay-by-mobile/transactions/msisdn'
    );

    service.getTransactions('msisdn');
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
  });
});
