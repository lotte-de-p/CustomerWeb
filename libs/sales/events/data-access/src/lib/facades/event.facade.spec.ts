import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EventInterface } from '../interfaces/event.interface';
import { analyticsEventFactory, eventBodyFactory, eventFactory } from '../+state/event-state.testfactory';
import { triggerEvent } from '../+state/event.actions';
import { EventFacade } from '../facades/event.facade';
import { AnalyticsInterface } from '../interfaces/analytics.interface';
import { AnalyticsTypeEnum } from '../enums/analytics-type.enum';
import { EventTypeEnum } from '../enums/event-type.enum';

describe('EventFacade', () => {
  let facade: EventFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventFacade],
      imports: [StoreModule.forRoot({})],
    });

    facade = TestBed.inject(EventFacade);
  });

  it('should create the event facade', () => {
    expect(facade).toBeTruthy();
  });

  it('should trigger storage of new events', () => {
    const event: EventInterface = eventFactory.build();
    jest.spyOn(facade['store'], 'dispatch');
    facade.triggerEvent(event);
    expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(event));
  });

  describe('analytics events', () => {
    it('should trigger storage of new analytics click events', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({ name: 'test name' }),
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsClickEvent({ name: 'test name' });
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
    it('should trigger storage of new analytics flow start events', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({ type: AnalyticsTypeEnum.SALES_FLOW_START, name: 'sales flow started' }),
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsSalesFlowStartEvent();
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
    it('should trigger storage of new analytics flow end events', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({ type: AnalyticsTypeEnum.SALES_FLOW_END, name: 'order submitted' }),
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsSalesFlowEndEvent();
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
    it('should trigger storage of new analytics ScAdd event', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({ type: AnalyticsTypeEnum.SC_ADD, name: 'some name' }),
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsScAddEvent({ name: 'some name' });
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
    it('should trigger storage of new analytics Transaction event', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({ type: AnalyticsTypeEnum.TRANSACTION, name: '' }),
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsTransactionEvent();
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
    it('should trigger analytics ERROR event', () => {
      const analyticsEvent: EventInterface<AnalyticsInterface> = analyticsEventFactory.build({
        body: eventBodyFactory.build({
          type: AnalyticsTypeEnum.ERROR,
          name: 'error occurred',
          statusMessage: 'error message',
        }),
        eventType: EventTypeEnum.ANALYTICS,
      });
      jest.spyOn(facade['store'], 'dispatch');
      facade.triggerAnalyticsErrorEvent({ name: 'error occurred', statusMessage: 'error message' });
      expect(facade['store'].dispatch).toHaveBeenCalledWith(triggerEvent(analyticsEvent));
    });
  });
});
