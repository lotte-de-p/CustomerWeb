import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
import { DataLayerAttributes, DatalayerEventNames, DataLayerService, EventTypes } from '@telenet/ng-lib-datalayer';
import { Category } from 'udl';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TrackEventInfo } from './track-event-info.interface';

@Directive({
  selector: 'a[clickEvent], span[clickEvent]',
})
export class EventLinkClickDirective {
  @Input() clickEvent?: TrackEventInfo;

  constructor(
    _elmRef: ElementRef,
    private readonly dataLayerService: DataLayerService,
    @Host() private readonly trackingInfoDirective: TrackingInfoDirective
  ) {}

  @HostListener('click', ['$event'])
  trackingEvent(event: Event & { value: string }) {
    let label = '';
    if (this.clickEvent && this.clickEvent.label) {
      label = this.clickEvent.label;
    }
    const category = this.dataLayerService.createCategory(
      this.trackingInfoDirective.trackingInfo.primaryCategory,
      this.trackingInfoDirective.trackingInfo.subCategory
    );

    this.addEvent(
      {
        itemName: label,
        itemData: event.value,
        intent: this.trackingInfoDirective.trackingInfo.intent,
        flowType: this.trackingInfoDirective.trackingInfo.flowType,
      },
      category
    ).then();
  }

  addEvent(attributes: DataLayerAttributes, category?: Category) {
    const eventInfo = this.dataLayerService.createEventInfo(DatalayerEventNames.LINK_CLICKED, EventTypes.LINK_CLICK);
    return this.dataLayerService.sendEvent({
      eventInfo,
      attributes,
      category,
    });
  }
}
