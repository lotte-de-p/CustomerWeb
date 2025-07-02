import { Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { HardwareDiscountDatalayerEvent } from '../entities/hardware-discount.interface';

@Injectable({
  providedIn: 'root',
})
export class HardwareDiscountDatalayerService {
  public static readonly CATEGORY_HARDWARE = 'hardware';

  constructor(private readonly dataLayerService: DataLayerService) {}

  sendDataLayerEventWithAttributes(event: HardwareDiscountDatalayerEvent, attributes: DataLayerAttributes) {
    const category = this.dataLayerService.createCategory(HardwareDiscountDatalayerService.CATEGORY_HARDWARE);
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }

  initDataLayer(): void {
    this.dataLayerService.init();
  }
}
