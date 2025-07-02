import { Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { EventInfo } from 'udl';
import { EventsConstants } from '../constants/events.constant';
import { ProductOverviewConstants } from '../../../../shared/common/constants/product-overview.constant';
import { ProductIconConstants } from '../constants/product-icon.constant';
import { Product } from '../../../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductOverviewService {
  constructor(private readonly dataLayerService: DataLayerService) {}

  getClickEventInfoData(product: Product) {
    let eventName = EventsConstants.EVENT_NAME_MANAGE_OPTION_CLICK;

    if (
      ((product.status === ProductOverviewConstants.STATUS_NOT_ACTIVE ||
        product.status === ProductOverviewConstants.DISCONNECTED_STATUS) &&
        !product.upgradePossibleTo) ||
      (product.status === ProductOverviewConstants.ACTIVE_STATUS && product.upgradePossibleTo)
    ) {
      eventName = EventsConstants.EVENT_NAME_SECURITY_OPTION_CLICK;
    }

    return this.dataLayerService.createEventInfo(eventName, EventsConstants.EVENT_TYPE_CLICK);
  }

  addEventToDataLayer(eventInfoData: EventInfo, componentInstanceID: string, attributes?: DataLayerAttributes) {
    const category =
      this.dataLayerService.getCategory(componentInstanceID) ||
      this.dataLayerService.createCategory(
        ProductOverviewConstants.PRIMARY_CATEGORY_FLEET,
        ProductOverviewConstants.SUB_CATEGORY1_FLEET_PRODUCT
      );
    eventInfoData.setEventStatus(EventsConstants.EVENT_STATUS_SUCCESS);
    this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes: attributes || {}, category });
  }

  getProductIcon(product: Product): string {
    if (product.productInfo.subCategory?.name === ProductIconConstants.SUBCATEGORY_SECURITY) {
      return ProductIconConstants.SECURITY_ICON;
    }

    if (product.productInfo.externalProductCode === ProductIconConstants.INTERNATIONAL_CALLING_EPC) {
      return ProductIconConstants.INTERNATIONAL_CALLING_ICON;
    }

    if (
      product.productInfo.externalProductCode === ProductIconConstants.KONG_EPC ||
      product.productInfo.externalProductCode === ProductIconConstants.KONG_UNLIMITED_EPC
    ) {
      return ProductIconConstants.KONG_EPC_ICON;
    }

    if (product.productInfo.externalProductCode === ProductIconConstants.DATA_SIM_EPC) {
      return ProductIconConstants.DATA_SIM_EPC_ICON;
    }

    if (product.productInfo.externalProductCode?.startsWith(ProductIconConstants.STREAMING_PRODUCT_PREFIX)) {
      return ProductIconConstants.STREAMING_ICON;
    }

    if (product.productInfo.isFPBProduct) {
      return ProductIconConstants.FIXED_TELEPHONY_ICON;
    }

    switch (product.productType) {
      case ProductIconConstants.PRODUCT_TYPE_INTERNET:
        return ProductIconConstants.INTERNET_ICON;

      case ProductIconConstants.PRODUCT_TYPE_MOBILE:
        return ProductIconConstants.MOBILE_ICON;

      case ProductIconConstants.PRODUCT_TYPE_DTV:
        return ProductIconConstants.DTV_ICON;

      case ProductIconConstants.PRODUCT_TYPE_FIXED_TELEPHONE:
        return ProductIconConstants.FIXED_TELEPHONY_ICON;

      case ProductIconConstants.PRODUCT_TYPE_PHONE2GO:
        return ProductIconConstants.PHONE2GO_TELEPHONE_ICON;

      default:
        return ProductIconConstants.MOBILE_ICON;
    }
  }
}
