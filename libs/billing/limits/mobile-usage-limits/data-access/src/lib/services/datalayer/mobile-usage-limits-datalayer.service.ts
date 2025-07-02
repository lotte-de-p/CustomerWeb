import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  ATTRIBUTE_ITEM_DATA,
  ATTRIBUTE_ITEM_GROUP,
  ATTRIBUTE_ITEM_NAME,
  CATEGORY_PRIMARY_CARE,
  CATEGORY_SUBCATEGORY_MOBILE,
  EVENT_NAME_CHANGED,
  EVENT_NAME_DECLINED,
  EVENT_TYPE,
  ITEM_DATA_LIMIT_EXCEEDED,
  ITEM_DATA_LIMIT_NOT_EXCEEDED,
  MESSAGE_GROUP,
} from '../mobile-usage-limits-service.constants';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageLimitsDatalayerService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  public sendDataLayerEventWithAttributes(
    limitAlreadyExceeded: boolean,
    updateDeclined: boolean,
    updatedLimit?: string,
    itemName?: string
  ) {
    if (itemName !== null && itemName !== undefined) {
      const eventName = updateDeclined ? EVENT_NAME_DECLINED : EVENT_NAME_CHANGED;
      const attributes: Record<string, unknown> = {
        [ATTRIBUTE_ITEM_NAME]: itemName,
      };
      attributes[ATTRIBUTE_ITEM_DATA] = updatedLimit;
      if (!updateDeclined) {
        attributes[ATTRIBUTE_ITEM_GROUP] = limitAlreadyExceeded
          ? ITEM_DATA_LIMIT_EXCEEDED
          : ITEM_DATA_LIMIT_NOT_EXCEEDED;
      }

      const category = this.dataLayerService.createCategory(CATEGORY_PRIMARY_CARE, CATEGORY_SUBCATEGORY_MOBILE);
      const eventInfo = this.dataLayerService.createEventInfo(eventName, EVENT_TYPE, [MESSAGE_GROUP]);
      this.dataLayerService.sendEvent({ eventInfo, attributes, category });
    }
  }
}
