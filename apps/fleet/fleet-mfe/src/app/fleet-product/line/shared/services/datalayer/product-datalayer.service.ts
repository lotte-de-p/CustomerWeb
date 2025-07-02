import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ProductDatalayerConstants } from '../../constants/product-datalayer.constants';
import { LineAddOptionsConstants } from '../../constants/line-add-options.constants';
import { SalesOrder } from '../../models/sales-order/sales-order.model';
import { LineChangeTariffPlanConstants } from '../../constants/line-change-tariff-plan.constants';
import { SalesDataLayerService } from './sales-datalayer.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDatalayerService {
  public closeOverlay = false;
  public affectedLineCount = 0;

  constructor(
    private readonly dataLayerService: DataLayerService,
    private readonly salesDataLayerService: SalesDataLayerService
  ) {}

  public pushPageStepDataToAnalytics(stepId, eventAttribute): void {
    const attributes = {};
    attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_STEP_ID] = stepId;
    attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_INTENT] = eventAttribute;
    this.dataLayerService.addStepViewEvent(attributes);
  }

  public addFlowStartEventToUDL(
    eventName: string,
    salesOrderResponse: SalesOrder,
    isCartObjForRemoveItem,
    isMutuallyExclusive
  ) {
    this.addEventToUDL(
      eventName,
      ProductDatalayerConstants.EVENT_TYPE_SELF_SERVICE_FLOW_START,
      undefined,
      salesOrderResponse,
      isCartObjForRemoveItem,
      isMutuallyExclusive
    );
  }

  addEventToUDL(name, type, response, isProductRemoved, isCartObjForRemoveItem, isMutuallyExclusive) {
    const attributes = {};
    attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_INTENT] =
      LineChangeTariffPlanConstants.EVENT_ATTRIBUTE_INTENT_CHANGE_TARIFF_PLAN;
    attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_FLOW_TYPE] = type;
    const category = this.dataLayerService.createCategory(
      ProductDatalayerConstants.PRIMARY_CATEGORY_FLEET,
      LineChangeTariffPlanConstants.SUB_CATEGORY1_FLEET_PRODUCT
    );

    const eventInfo = this.dataLayerService.createEventInfo(name, type, [LineChangeTariffPlanConstants.MESSAGE_GROUP]);

    if (response && response.success && (!isProductRemoved || !isMutuallyExclusive)) {
      const cartObj = this.dataLayerService.createCart(response);
      attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_CART] = cartObj;
    }
    if (isCartObjForRemoveItem && isProductRemoved && !isMutuallyExclusive) {
      const cartObjForRemovedItem = this.salesDataLayerService.createCartObjectForRemovedItem(response, '');
      attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_CART] = cartObjForRemovedItem;
    }

    if (isMutuallyExclusive) {
      attributes[LineAddOptionsConstants.ATTRIBUTES_ITEM_NAME] =
        LineAddOptionsConstants.EVENT_ATTRIBUTE_ITEM_NAME_MUTUALLY_EXCLUSION_REMOVAL;
      const cartObjForRemovedItem = this.salesDataLayerService.createCartObjectForRemovedItem(response, undefined);
      attributes[LineAddOptionsConstants.EVENT_ATTRIBUTE_CART] = cartObjForRemovedItem;
    }

    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }
}
