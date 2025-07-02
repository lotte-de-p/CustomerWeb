import { Directive, HostListener, Input } from '@angular/core';

import * as udl from 'udl';
import { DataLayerService } from '../../datalayer.service';
import { DataLayerAttributes } from '../../interfaces/data-layer-attributes';
import { EventCategoryEnum } from '../../enums/event-category.enum';
import { DatalayerEventNames } from '../../enums/datalayer-event-names.enum';
import { EventTypes } from '../../enums/datalayer-event-types.enum';

@Directive({
  selector: '[clickPushToAnalytics]',
  standalone: true,
})
export class AdobeAnalyticsDirective {
  @Input() clickPushToAnalytics!: { attributeName: string; eventName: DatalayerEventNames; messageGroupName: string };

  @HostListener('click')
  onClick() {
    this.pushToAnalytics(
      this.clickPushToAnalytics.attributeName,
      this.clickPushToAnalytics.eventName,
      this.clickPushToAnalytics.messageGroupName
    );
  }

  constructor(private readonly dataLayerService: DataLayerService) {}

  pushToAnalytics(attributeName: string, eventName: DatalayerEventNames, messageGroupName: string): void {
    const eventInfo = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK, [messageGroupName]);
    const attributes: DataLayerAttributes = {
      itemName: attributeName,
    };
    this.addEventToDataLayer(eventInfo, attributes);
  }

  private addEventToDataLayer(eventInfo: udl.EventInfo, attributes?: DataLayerAttributes): void {
    const category = this.dataLayerService.createCategory(
      EventCategoryEnum.PRIMARY_CATEGORY_CARE,
      EventCategoryEnum.PRIMARY_CATEGORY_GENERAL
    );
    const enrichedAttributes = attributes || {};
    this.dataLayerService.addEvent(eventInfo, enrichedAttributes, category);
  }
}
