import { TestBed } from '@angular/core/testing';
import { PayByMobileFacade } from './pay-by-mobile.facade';
import { Builder } from '@telenet/ng-lib-shared';
import { MobileLine } from '@billing/shared/data-access';
import { MockProvider } from 'ng-mocks';
import { PayByMobileStore } from './+state/pay-by-mobile.store';

const mobileLine = Builder<MobileLine>().msisdn('msisdn').build();
describe('payByMobileFacade', () => {
  let payByMobileFacade: PayByMobileFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PayByMobileFacade,
        MockProvider(PayByMobileStore, {
          loadInitialTransactions: jest.fn(),
          loadAllTransactions: jest.fn(),
          loadSubscriptions: jest.fn(),
          cancelSubscription: jest.fn(),
          getBarringStatus: jest.fn(),
          resetPaymentStatus: jest.fn(),
        }),
      ],
    });
    payByMobileFacade = TestBed.inject(PayByMobileFacade);
  });

  it('loadInitialTransactions', () => {
    const store = TestBed.inject(PayByMobileStore);
    jest.spyOn(store, 'loadInitialTransactions');
    payByMobileFacade.loadInitialTransactions(mobileLine);
    expect(store.loadInitialTransactions).toHaveBeenCalledWith(mobileLine);
  });

  it('loadMoreTransactions', () => {
    const store = TestBed.inject(PayByMobileStore);
    jest.spyOn(store, 'loadAllTransactions');
    payByMobileFacade.loadMoreTransactions(mobileLine);
    expect(store.loadAllTransactions).toHaveBeenCalledWith(mobileLine);
  });

  it('cancelSubscription', () => {
    const store = TestBed.inject(PayByMobileStore);
    jest.spyOn(store, 'cancelSubscription');
    payByMobileFacade.cancelSubscription(mobileLine, 12345, 'testservice');
    expect(store.cancelSubscription).toHaveBeenCalledWith({ mobileLine, companyId: 12345, serviceName: 'testservice' });
  });

  it('getBarringStatus', () => {
    const store = TestBed.inject(PayByMobileStore);
    jest.spyOn(store, 'getBarringStatus');
    payByMobileFacade.getBarringStatus('testmsisdn');
    expect(store.getBarringStatus).toHaveBeenCalledWith('testmsisdn');
  });

  it('should reset payment status', () => {
    const store = TestBed.inject(PayByMobileStore);
    jest.spyOn(store, 'resetPaymentStatus');
    payByMobileFacade.resetPaymentStatus();
    expect(store.resetPaymentStatus).toHaveBeenCalled();
  });
});
