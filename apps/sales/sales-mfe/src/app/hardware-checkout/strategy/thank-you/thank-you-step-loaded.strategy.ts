import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { Observable, of } from 'rxjs';
import { EventFacade } from '@sales/events/data-access';

export class ThankYouStepLoadedStrategy implements EventStrategy {
  constructor(private readonly eventFacade: EventFacade) {}

  execute(): Observable<boolean> {
    this.eventFacade.triggerAnalyticsTransactionEvent();
    this.eventFacade.triggerAnalyticsSalesFlowEndEvent();
    return of(true);
  }

  showLoader(): boolean {
    return false;
  }
}
