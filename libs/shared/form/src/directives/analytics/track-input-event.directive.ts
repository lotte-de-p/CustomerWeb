import { Directive, Host, HostListener, Input } from '@angular/core';
import { Cart, Category } from 'udl';
import { DataLayerService, EventTypes, DatalayerEventNames, DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TranslateService } from '@ngx-translate/core';
import { TrackEventInfo } from './track-event-info.interface';
import { TrackingEvent } from '../../interfaces';

@Directive({
  selector:
    'tg-form-input[trackInputEvent], tg-form-input-checkbox[trackInputEvent], ' +
    'tg-form-radio-with-input-vertical[trackInputEvent], tg-form-radio-horizontal[trackInputEvent],' +
    'tg-form-radio-with-input-horizontal[trackInputEvent], tg-form-checkbox[trackInputEvent],' +
    'tg-form-checkbox-with-card[trackInputEvent], tg-form-radio-with-card[trackInputEvent],' +
    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-no-select-box-labels[trackInputEvent],' +
    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-with-select-box-labels[trackInputEvent]',
})
export class TrackInputEventDirective {
  @Input() trackInputEvent?: TrackEventInfo;
  @Input() blockData = true;

  constructor(
    private readonly dataLayerService: DataLayerService,
    @Host() private readonly trackingInfoDirective: TrackingInfoDirective,
    private readonly translateService: TranslateService
  ) {}

  @HostListener('trackingEvent', ['$event'])
  trackingEvent(event: TrackingEvent) {
    let label = event.label;
    if (this.trackInputEvent && this.trackInputEvent.label) {
      label = this.trackInputEvent.label;
    }

    const category = this.dataLayerService.createCategory(
      this.trackingInfoDirective.trackingInfo.primaryCategory || '',
      this.trackingInfoDirective.trackingInfo.subCategory
    );

    const type = event.type;

    this.addFormFieldCompletedEvent(
      {
        itemName: label ? this.translateService.instant(label) : '',
        itemData: !this.blockData ? event.value : '',
        intent: this.trackingInfoDirective.trackingInfo.intent,
        flowType: this.trackingInfoDirective.trackingInfo.flowType,
        cart: this.getCart(),
      },
      category,
      type
    ).then();
  }

  addFormFieldCompletedEvent(
    attributes: DataLayerAttributes,
    category?: Category,
    type: DatalayerEventNames = DatalayerEventNames.FORM_FIELD_COMPLETED
  ) {
    const eventInfoData = this.dataLayerService.createEventInfo(type, EventTypes.CLICK);
    return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
  }

  private getCart(): Cart {
    if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
      return this.trackingInfoDirective.trackingInfo.cart;
    }
    return {} as Cart;
  }
}
