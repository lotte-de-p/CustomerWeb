import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  EVENT_ATTRIBUTE_ITEM_DATA,
  EVENT_ATTRIBUTE_ITEM_NAME,
  EVENT_ATTRIBUTE_VALUE_STOP_SUBSCRIPTION,
  EVENT_NAME_PAY_BY_MOBILE,
  EVENT_TYPE_CHANGE_MOBILE_SERVICE_SETTINGS,
  MESSAGE_GROUP,
  PRIMARY_CATEGORY,
  SECONDARY_CATEGORY,
} from '../pay-by-mobile-service.constants';

@Injectable({
  providedIn: 'root',
})
export class PayByMobileDatalayerService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  addEventCancelSubscription(serviceText: string): void {
    const category = this.dataLayerService.createCategory(PRIMARY_CATEGORY, SECONDARY_CATEGORY);
    const attributes = {};
    attributes[EVENT_ATTRIBUTE_ITEM_NAME] = EVENT_ATTRIBUTE_VALUE_STOP_SUBSCRIPTION;
    attributes[EVENT_ATTRIBUTE_ITEM_DATA] = serviceText;

    const eventInfoData = this.dataLayerService.createEventInfo(
      EVENT_NAME_PAY_BY_MOBILE,
      EVENT_TYPE_CHANGE_MOBILE_SERVICE_SETTINGS,
      [MESSAGE_GROUP]
    );
    this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes: attributes, category: category });
  }
}
