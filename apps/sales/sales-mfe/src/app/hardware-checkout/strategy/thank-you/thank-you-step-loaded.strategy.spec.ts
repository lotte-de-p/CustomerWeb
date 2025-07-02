import { ThankYouStepLoadedStrategy } from './thank-you-step-loaded.strategy';
import { EventFacade } from '@sales/events/data-access';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { hardwareCheckoutFeature } from '@sales/hardware-checkout/data-access';
import { thankYouFeature } from '@sales/thank-you/data-access';

describe('ThankYouStepLoadedStrategy', () => {
  let eventFacade: EventFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(),
        StoreModule.forFeature(hardwareCheckoutFeature),
        StoreModule.forFeature(thankYouFeature),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    jest.spyOn(eventFacade, 'triggerAnalyticsTransactionEvent');
    jest.spyOn(eventFacade, 'triggerAnalyticsSalesFlowEndEvent');
  });

  it('should trigger analytics transaction event and return true on execute', fakeAsync(() => {
    const stepLoadedStrategy = new ThankYouStepLoadedStrategy(eventFacade);
    stepLoadedStrategy.execute().subscribe((result) => {
      tick();
      expect(result).toBeTruthy();
      expect(eventFacade.triggerAnalyticsTransactionEvent).toHaveBeenCalled();
      expect(eventFacade.triggerAnalyticsSalesFlowEndEvent).toHaveBeenCalled();
    });
  }));
});
