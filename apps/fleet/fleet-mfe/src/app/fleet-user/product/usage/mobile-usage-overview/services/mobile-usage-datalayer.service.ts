import { Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { MobileUsageOverviewConstant } from '../constants/mobile-usage-overview.constant';

import * as udl from 'udl';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageDatalayerService {
  private readonly messageGroups = [MobileUsageOverviewConstant.MESSAGE_GROUP_NAME];

  constructor(private readonly dataLayerService: DataLayerService) {}

  addEvent(
    eventName: EventNameEnum,
    eventType: EventTypeEnum,
    componentInstanceID: string,
    attributes?: DataLayerAttributes
  ): void {
    const eventInfo = this.dataLayerService.createEventInfo(eventName, eventType, this.messageGroups);
    const enrichedAttributes = attributes || {};
    const category = this.category(componentInstanceID);

    this.dataLayerService.addEvent(eventInfo, enrichedAttributes, category);
  }

  private category(componentInstanceID): udl.Category {
    const category = this.dataLayerService.getCategory(componentInstanceID);
    return category || this.dataLayerService.createCategory('care', 'mobile');
  }
}
