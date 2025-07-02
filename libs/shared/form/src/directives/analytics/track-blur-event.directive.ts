import { Directive, Host, HostListener, Input } from '@angular/core';
import { DataLayerAttributes, DatalayerEventNames, DataLayerService, EventTypes } from '@telenet/ng-lib-datalayer';
import { Cart, Category } from 'udl';
import { TrackingInfoDirective } from './tracking-info.directive';
import { TranslateService } from '@ngx-translate/core';
import { TrackEventInfo } from './track-event-info.interface';

@Directive({
  selector: 'input[trackBlurEvent]',
})
export class TrackBlurEventDirective {
  @Input() trackBlurEvent?: TrackEventInfo;
  @Input() blockData = true;

  constructor(
    private readonly dataLayerService: DataLayerService,
    @Host() private readonly trackingInfoDirective: TrackingInfoDirective,
    private readonly translateService: TranslateService
  ) {}

  @HostListener('focusout', ['$event'])
  trackingEvent(event: Event & { target: HTMLInputElement }) {
    let label = event.target.attributes.getNamedItem('formControlName')?.value || '';
    if (this.trackBlurEvent && this.trackBlurEvent.label) {
      label = this.trackBlurEvent.label;
    }
    const category = this.dataLayerService.createCategory(
      this.trackingInfoDirective.trackingInfo.primaryCategory,
      this.trackingInfoDirective.trackingInfo.subCategory
    );
    this.addFormFieldCompletedEvent(
      {
        itemName: this.translateService.instant(label),
        itemData: !this.blockData ? event.target.value : '',
        intent: this.trackingInfoDirective.trackingInfo.intent,
        flowType: this.trackingInfoDirective.trackingInfo.flowType,
        cart: this.getCart(),
      },
      category
    ).then();
  }

  addFormFieldCompletedEvent(attributes: DataLayerAttributes, category?: Category) {
    const eventInfoData = this.dataLayerService.createEventInfo(
      DatalayerEventNames.FORM_FIELD_COMPLETED,
      EventTypes.CLICK
    );
    return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
  }

  private getCart(): Cart {
    if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
      return this.trackingInfoDirective.trackingInfo.cart;
    }
    return {} as Cart;
  }
}
