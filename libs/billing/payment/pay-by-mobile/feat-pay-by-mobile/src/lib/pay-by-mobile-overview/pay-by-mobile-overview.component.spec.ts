import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PayByMobileOverviewComponent } from './pay-by-mobile-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PayByMobileFacade, Subscription } from '@billing/pay-by-mobile/data-access';
import { Builder } from '@telenet/ng-lib-shared';
import { MobileLine } from '@billing/shared/data-access';
import { MockProvider } from 'ng-mocks';
import { signal } from '@angular/core';

const mobileLine = Builder<MobileLine>().msisdn('someMsisdn').build();
describe('PayByMobileTransactionComponent', () => {
  let component: PayByMobileOverviewComponent;
  let fixture: ComponentFixture<PayByMobileOverviewComponent>;
  let payByMobileFacade: PayByMobileFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      providers: [
        MockProvider(PayByMobileFacade, {
          lessTransactionsAvailable: signal(true),
          moreTransactionsAvailable: signal(true),
          subscriptions: signal([]),
          transactions: signal([]),
          transactionsLoaded: signal(true),
          subscriptionsLoaded: signal(true),
          msisdnBarred: signal(false),
        }),
        {
          provide: 'Window',
          useValue: {
            docyment: {
              documentElement: {
                lang: 'en',
              },
            },
            location: {
              href: 'someUrl',
            },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PayByMobileOverviewComponent);
    component = fixture.componentInstance;
    payByMobileFacade = TestBed.inject(PayByMobileFacade);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('handleConfirmCancellation', () => {
    component.selectedMobileLine = mobileLine;
    jest.spyOn(payByMobileFacade, 'cancelSubscription');
    const subscriptionState = Builder<Subscription>().companyId(123).serviceName('someServiceName').build();
    component.handleConfirmCancellation(subscriptionState);
    expect(payByMobileFacade.cancelSubscription).toHaveBeenCalledWith(mobileLine, 123, 'someServiceName');
  });

  it('should not trigger backend calls if onMobileLineSelected event is triggered with empty data', () => {
    jest.spyOn(payByMobileFacade, 'selectMobileLine');
    jest.spyOn(payByMobileFacade, 'resetPaymentStatus');
    component.onSelectMobileLine(null);
    expect(payByMobileFacade.selectMobileLine).not.toHaveBeenCalled();
    expect(payByMobileFacade.resetPaymentStatus).toHaveBeenCalled();
  });

  it('should trigger reset payment calls if mobileLine selected is activation in progress', () => {
    jest.spyOn(payByMobileFacade, 'selectMobileLine');
    jest.spyOn(payByMobileFacade, 'resetPaymentStatus');
    const mobileLineInProgress = Builder<MobileLine>().msisdn('someMsisdn').status('ACTIVATION_IN_PROGRESS').build();
    component.onSelectMobileLine(mobileLineInProgress);
    expect(payByMobileFacade.selectMobileLine).not.toHaveBeenCalled();
    expect(payByMobileFacade.resetPaymentStatus).toHaveBeenCalled();
  });

  it('should not trigger reset payment calls if mobileLine selected is active', () => {
    jest.spyOn(payByMobileFacade, 'selectMobileLine');
    jest.spyOn(payByMobileFacade, 'resetPaymentStatus');
    const mobileLine = Builder<MobileLine>().msisdn('someMsisdn').status('ACTIVE').build();
    component.onSelectMobileLine(mobileLine);
    expect(payByMobileFacade.selectMobileLine).toHaveBeenCalled();
    expect(payByMobileFacade.resetPaymentStatus).not.toHaveBeenCalled();
  });

  it('should call resetPaymentStatus method of payByMobileFacade when resetPaymentStatus is called', () => {
    const resetSpy = jest.spyOn(payByMobileFacade, 'resetPaymentStatus');
    component.resetPaymentStatus();
    expect(resetSpy).toHaveBeenCalled();
  });

  it('should call loadInitialTransactions method of payByMobileFacade when loadInitialTransactions is called', () => {
    const loadMoreSpy = jest.spyOn(payByMobileFacade, 'loadInitialTransactions');
    const windowScrollToSpy = jest.spyOn(window, 'scrollTo');
    component.selectedMobileLine = {} as MobileLine;
    component.loadInitialTransactions();
    expect(loadMoreSpy).toHaveBeenCalled();
    expect(windowScrollToSpy).toHaveBeenCalledWith(0, 0);
  });

  it('should call loadInitialTransactions method of payByMobileFacade when loadInitialTransactions is called', () => {
    const loadMoreSpy = jest.spyOn(payByMobileFacade, 'loadInitialTransactions');
    component.selectedMobileLine = null;
    component.loadInitialTransactions();
    expect(loadMoreSpy).not.toHaveBeenCalled();
  });

  it('should call loadMoreTransactions method of payByMobileFacade when loadMoreTransactions is called', () => {
    const loadMoreSpy = jest.spyOn(payByMobileFacade, 'loadMoreTransactions');
    component.selectedMobileLine = {} as MobileLine;
    component.loadMoreTransactions();
    expect(loadMoreSpy).toHaveBeenCalled();
  });

  it('should call loadMoreTransactions method of payByMobileFacade when loadMoreTransactions is called', () => {
    const loadMoreSpy = jest.spyOn(payByMobileFacade, 'loadMoreTransactions');
    component.selectedMobileLine = null;
    component.loadMoreTransactions();
    expect(loadMoreSpy).not.toHaveBeenCalled();
  });
});
