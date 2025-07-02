import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ProductPriceChange } from '../entities/product-price-change';

@Injectable({
  providedIn: 'root',
})
export class ProductPriceChangesDatalayerService {
  public static readonly MESSAGE_GROUP = 'product-price-changes';
  public static readonly CATEGORY_CARE = 'care';
  public static readonly EVENT_COMPONENT_NAME = 'product price change component';
  public static readonly EVENT_INPAGE_LOGIN_NAME = 'inpage login';
  public static readonly ATTRIBUTES_ITEM_NAME = 'itemName';
  public static readonly EVENT_INFO_TYPE_IMPRESSION = 'impression';
  public static readonly EVENT_INFO_TYPE_CLICK = 'click';
  public static readonly EVENT_INFO_NAME_NOT_IMPACTED = 'not impacted';
  public static readonly EVENT_INFO_NAME_NOT_POSSIBLE = 'not possible to show the information';
  public static readonly EVENT_INFO_NAME_DISPLAYED = 'product price change displayed';
  public static readonly EVENT_INFO_NAME_LIMITED_ACCESS = 'limited access';
  public static readonly EVENT_INFO_NAME_LOGIN = 'login';

  constructor(private readonly dataLayerService: DataLayerService) {}

  public sendSelectProductPriceChange(productPriceChange?: ProductPriceChange): void {
    let itemName: string;
    if (productPriceChange) {
      itemName = productPriceChange.priceAccordingToConsumption
        ? ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_IMPACTED
        : ProductPriceChangesDatalayerService.EVENT_INFO_NAME_DISPLAYED;
    } else {
      itemName = ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_POSSIBLE;
    }
    this.sendImpression(ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME, itemName);
  }

  public sendImpression(eventName: string, itemName: string) {
    this.sendDataLayerEventWithAttributes(
      eventName,
      itemName,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_IMPRESSION
    );
  }

  public sendClick(eventName: string, itemName: string) {
    this.sendDataLayerEventWithAttributes(
      eventName,
      itemName,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_CLICK
    );
  }

  private sendDataLayerEventWithAttributes(eventName: string, itemName: string, eventType: string) {
    const attributes: Record<string, unknown> = {};

    attributes[ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME] = itemName;
    const category = this.dataLayerService.createCategory(
      ProductPriceChangesDatalayerService.CATEGORY_CARE,
      ProductPriceChangesDatalayerService.MESSAGE_GROUP
    );
    const eventInfo = this.dataLayerService.createEventInfo(eventName, eventType, [
      ProductPriceChangesDatalayerService.MESSAGE_GROUP,
    ]);
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }
}
