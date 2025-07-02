import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
import { DataLayerAttributes, DatalayerEventNames, DataLayerService, EventTypes } from '@telenet/ng-lib-datalayer';
import { Category } from 'udl';
import { TrackEventInfo } from './track-event-info.interface';
import { TrackingInfoDirective } from './tracking-info.directive';

@Directive({
  selector: 'button[clickEvent]',
})
export class ButtonClickDirective {
  @Input() clickEvent: TrackEventInfo;

  constructor(
    _elmRef: ElementRef,
    private readonly dataLayerService: DataLayerService,
    @Host() private readonly trackingInfoDirective: TrackingInfoDirective
  ) {}

  @HostListener('click', ['$event'])
  eventHandler() {
    const category = this.dataLayerService.createCategory(
      this.trackingInfoDirective.trackingInfo.primaryCategory,
      this.trackingInfoDirective.trackingInfo.subCategory
    );
    this.addEvent(
      {
        itemName: this.clickEvent?.label,
        itemData: '',
        intent: this.trackingInfoDirective.trackingInfo.intent,
        flowType: this.trackingInfoDirective.trackingInfo.flowType,
        cart: this.trackingInfoDirective.trackingInfo.cart,
      },
      category
    ).then();
  }

  addEvent(attributes: DataLayerAttributes, category?: Category) {
    let eventName = DatalayerEventNames.BUTTON_CLICKED;
    if (this.clickEvent && this.clickEvent.event && this.clickEvent.event.name) {
      eventName = this.clickEvent.event.name;
    }
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK);
    return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
  }
}
