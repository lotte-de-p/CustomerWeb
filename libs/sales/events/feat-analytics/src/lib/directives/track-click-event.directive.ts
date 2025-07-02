import { Directive, HostListener, Input } from '@angular/core';
import { AnalyticsInterface, EventFacade } from '@sales/events/data-access';

@Directive({
  selector: '[tgSalesTrackClickEvent]',
  standalone: true,
})
export class AnalyticsClickEventDirective {
  @Input('tgSalesTrackClickEvent') event!: AnalyticsInterface;
  @HostListener('click')
  onClick() {
    this.eventFacade.triggerAnalyticsClickEvent(this.event);
  }

  constructor(private readonly eventFacade: EventFacade) {}
}
