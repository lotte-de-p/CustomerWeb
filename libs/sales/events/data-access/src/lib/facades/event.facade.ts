import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { triggerEvent } from '../+state/event.actions';
import { EventInterface } from '../interfaces/event.interface';
import { AnalyticsInterface } from '../interfaces/analytics.interface';
import { EventTypeEnum } from '../enums/event-type.enum';
import { AnalyticsTypeEnum } from '../enums/analytics-type.enum';

@Injectable({
  providedIn: 'root',
})
export class EventFacade {
  constructor(private readonly store: Store) {}

  triggerEvent(event: EventInterface<unknown>) {
    this.store.dispatch(triggerEvent(event));
  }

  triggerAnalyticsClickEvent(event: AnalyticsInterface) {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: Object.assign({ type: AnalyticsTypeEnum.CLICK }, event),
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }

  triggerAnalyticsSalesFlowStartEvent() {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: { type: AnalyticsTypeEnum.SALES_FLOW_START, name: 'sales flow started' },
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }

  triggerAnalyticsSalesFlowEndEvent() {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: { type: AnalyticsTypeEnum.SALES_FLOW_END, name: 'order submitted' },
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }

  triggerAnalyticsScAddEvent(event: AnalyticsInterface) {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: Object.assign({ type: AnalyticsTypeEnum.SC_ADD }, event),
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }

  triggerAnalyticsErrorEvent(event: AnalyticsInterface) {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: { ...event, type: AnalyticsTypeEnum.ERROR },
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }

  triggerAnalyticsTransactionEvent() {
    const analyticsEvent: EventInterface<AnalyticsInterface> = {
      eventType: EventTypeEnum.ANALYTICS,
      body: { type: AnalyticsTypeEnum.TRANSACTION, name: '' },
    };
    this.store.dispatch(triggerEvent(analyticsEvent));
  }
}
