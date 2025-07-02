import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ProductDatalayerConstants } from '../../../product/shared/constants/product-datalayer.constants';
import { LineAddOptionsConstants } from '../../../product/shared/constants/line-add-options.constants';
import { SalesDataLayerService } from './sales-datalayer.service';
import { LineChangeTariffPlanConstants } from '../../../product/shared/constants/line-change-tariff-plan.constants';
import { SalesOrder } from '../../models/sales-order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDatalayerService {
  public closeOverlay = false;

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
      attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_CART] = this.dataLayerService.createCart(response);
    }
    if (isCartObjForRemoveItem && isProductRemoved && !isMutuallyExclusive) {
      attributes[ProductDatalayerConstants.EVENT_ATTRIBUTE_CART] =
        this.salesDataLayerService.createCartObjectForRemovedItem(response, '');
    }

    if (isMutuallyExclusive) {
      attributes[LineAddOptionsConstants.ATTRIBUTES_ITEM_NAME] =
        LineAddOptionsConstants.EVENT_ATTRIBUTE_ITEM_NAME_MUTUALLY_EXCLUSION_REMOVAL;
      attributes[LineAddOptionsConstants.EVENT_ATTRIBUTE_CART] =
        this.salesDataLayerService.createCartObjectForRemovedItem(response, undefined);
    }

    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }
}
