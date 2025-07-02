import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { MobileBarringsDatalayer } from '../entities/mobile-barrings.interface';

@Injectable({
  providedIn: 'root',
})
export class MobileBarringsDatalayerService {
  private static readonly MESSAGE_GROUP = 'mobile';
  public static readonly CATEGORY_GENERAL = 'care';

  public static readonly ATTRIBUTES_ITEM_NAME = 'itemName';
  public static readonly ATTRIBUTES_ITEM_DATA = 'itemData';
  public static readonly ATTRIBUTES_ITEM_GROUP = 'itemGroup';
  public static readonly ATTRIBUTES_DESTINATION_URL = 'destinationURL';

  constructor(private readonly dataLayerService: DataLayerService) {}

  sendDataLayerEventWithAttributes(event: MobileBarringsDatalayer) {
    const attributes: Record<string, unknown> = {};

    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_NAME] = event.attributeName;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_DATA] = event.attributeData;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_GROUP] = event.attributeGroup;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_DESTINATION_URL] = event.destinationUrl;
    const category = this.dataLayerService.createCategory(
      MobileBarringsDatalayerService.CATEGORY_GENERAL,
      MobileBarringsDatalayerService.MESSAGE_GROUP
    );
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType, [
      MobileBarringsDatalayerService.MESSAGE_GROUP,
    ]);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }

  initDataLayer(): void {
    this.dataLayerService.init();
  }
}
