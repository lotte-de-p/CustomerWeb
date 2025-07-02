import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { MyBaseDashboardDatalayer } from '../entities/mybase-dashboard-datalayer.interface';

@Injectable({
  providedIn: 'root',
})
export class MyBaseDashboardDatalayerService {
  private static readonly MESSAGE_GROUP = 'mybase-dashboard';
  public static readonly CATEGORY_GENERAL = 'general';

  public static readonly ATTRIBUTES_ITEM_NAME = 'itemName';
  public static readonly ATTRIBUTES_ITEM_DATA = 'itemData';
  public static readonly ATTRIBUTES_ITEM_GROUP = 'itemGroup';
  public static readonly ATTRIBUTES_DESTINATION_URL = 'destinationURL';

  constructor(private readonly dataLayerService: DataLayerService) {}

  sendDataLayerEventWithAttributes(event: MyBaseDashboardDatalayer) {
    const attributes: Record<string, unknown> = {};

    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_NAME] = event.attributeName;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_DATA] = event.attributeData;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_GROUP] = event.attributeGroup;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_DESTINATION_URL] = event.destinationUrl;
    const category = this.dataLayerService.createCategory(
      MyBaseDashboardDatalayerService.CATEGORY_GENERAL,
      MyBaseDashboardDatalayerService.MESSAGE_GROUP
    );
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType, [
      MyBaseDashboardDatalayerService.MESSAGE_GROUP,
    ]);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }

  initDataLayer(): void {
    this.dataLayerService.init();
  }
}
