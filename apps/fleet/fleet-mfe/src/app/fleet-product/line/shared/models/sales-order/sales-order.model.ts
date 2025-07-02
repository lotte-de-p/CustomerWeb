import { Injectable } from '@angular/core';
import { ContextHubModelInterface, CustomerBrandEnum } from '@telenet/ng-lib-page';
import { LineItem, ProductStatusEnum, ProductTypeEnum } from './line-item.model';
import { DeliveryItem } from './delivery-item.model';
import { OrderItem } from './order-item.model';
import { InstallationInterface } from '../../interfaces/installation.interface';
import { Prices } from './prices.model';
import isEmpty from 'lodash-es/isEmpty';
import { concat, flattenDeep } from 'lodash-es';
import each from 'lodash-es/each';
import { SalesOrderHelper } from '../../helpers/sales-order.helper';
import { SalesConstants } from '../../constants/sales.constants';

@Injectable()
export class SalesOrder implements ContextHubModelInterface<SalesOrder> {
  status: string;
  customerId: string;
  id: string;
  name: string;
  prices: Prices;
  oneTimeEarlyTerminationFee: string;
  success = false;
  lineItems: LineItem[];
  lineCount: string;
  token: string;
  error?: string;
  deliveryItems?: DeliveryItem[];
  validations?: ValidationInterface[];
  correlationId: string;
  errorDetails?: ErrorDetailInterface[];
  pricesWereUpdated = false;
  installation?: InstallationInterface;
  manualAddress = false;
  feasibilityCheckRequired = false;
  mobileLinesInNewBundle?: string;
  modemSwapReq?: boolean;
  manualProcessingRequired?: boolean;
  contractSummaryReRequired?: boolean;
  isSlotAvailable?: boolean;
  isBundleFamilySame?: boolean;
  hwItems?: InstallationInterface;
  promo?: OnTopPromosInterface;
  isBillDeliveryMethodChanged?: boolean;
  registration?: RegistrationInterface;
  amountOfLimitedSims?: number;
  eSimAllowed?: boolean;
  taskGroupId?: string;

  enrich(): SalesOrder {
    return null;
  }

  get isSuccess(): boolean {
    return this.success;
  }
  hasHardwareCVPProduct(): boolean {
    const purchasingItems = this.getPurchasingItemsAsFlatList();
    return (
      purchasingItems &&
      purchasingItems.some((item: OrderItem) => {
        return !isEmpty(item.hwcvpItemCode);
      })
    );
  }

  getPurchasingItemsAsFlatList(applyPriceTypeFilter = true, isAnalytics?: boolean): OrderItem[] {
    let flatItemList: OrderItem[] = [];
    let itemsStatusList = [ProductStatusEnum.MODIFY, ProductStatusEnum.ADD];
    let orderItems: OrderItem[] = [];
    let purchasingOrderItems: OrderItem[] = [];
    if (isAnalytics) {
      purchasingOrderItems = concat(
        purchasingOrderItems,
        this.getPurchasingOrderItems('TLO'),
        this.getPurchasingOrderItems('SLO'),
        this.getPurchasingOrderItems('3LO')
      );
      itemsStatusList = [...itemsStatusList, ProductStatusEnum.DISCONNECT];
      orderItems = concat(orderItems, this.getOrderItems('TLO'), this.getOrderItems('SLO'), this.getOrderItems('3LO'));
      purchasingOrderItems = purchasingOrderItems.concat(
        purchasingOrderItems,
        orderItems.find((val) => val.status === ProductStatusEnum.DISCONNECT)
      );
    } else {
      purchasingOrderItems = this.getPurchasingOrderItems('TLO');
    }

    each(purchasingOrderItems, (orderItem: OrderItem) => {
      if (!isEmpty(orderItem)) {
        flatItemList = concat(flatItemList, this.getChildItems(orderItem, itemsStatusList, applyPriceTypeFilter));
      }
    });
    return flatItemList;
  }

  getOrderItems(type?: string): OrderItem[] {
    let orderItems;
    switch (type) {
      case 'SLO':
        orderItems = this.getOrderItems('TLO').map((orderItem) => {
          return orderItem.orderItems;
        });
        break;

      case '3LO':
        orderItems = this.getOrderItems('SLO').map((orderItem) => {
          return orderItem.orderItems;
        });
        break;

      case 'TLO':
      default:
        orderItems =
          this.lineItems &&
          this.lineItems.map((lineItem) => {
            return lineItem.orderItems.map((orderItem) => {
              return orderItem;
            });
          });
        break;
    }
    return flattenDeep(orderItems);
  }

  getPurchasingOrderItems(type: string, productType?: ProductTypeEnum): OrderItem[] {
    const purchasingItemsStatusList = [ProductStatusEnum.ADD, ProductStatusEnum.ADDED, ProductStatusEnum.MODIFY];
    const orderItems = SalesOrderHelper.getItemsByStatus(this.getOrderItems(type), purchasingItemsStatusList);
    if (productType) {
      return orderItems.filter((orderItem) => {
        return orderItem.productInfo.productType === productType.toUpperCase();
      });
    } else {
      return orderItems;
    }
  }

  private getChildItems(
    orderItem: OrderItem,
    itemsStatusList,
    applyPriceTypeFilter = true,
    brand?: string
  ): OrderItem[] {
    let flatItemList: OrderItem[] = [];
    let sloOrderItems: OrderItem[] = [];
    if (applyPriceTypeFilter) {
      sloOrderItems = orderItem
        .getItemsByStatus(itemsStatusList)
        .filter(
          (orderItemResponse) =>
            !isEmpty(orderItemResponse.productInfo.priceType) ||
            (orderItemResponse.productInfo.productType === ProductTypeEnum.TV_BOX &&
              CustomerBrandEnum.BRAND_BASE === brand)
        );
    } else {
      sloOrderItems = orderItem.getItemsByStatus(itemsStatusList);
    }
    if (!isEmpty(sloOrderItems)) {
      each(sloOrderItems, (sloOrderItem: OrderItem) => {
        flatItemList = concat(flatItemList, this.getChildItems(sloOrderItem, itemsStatusList, true, brand));
      });
    }
    if (itemsStatusList.includes(orderItem.status)) {
      flatItemList.push(orderItem);
    }
    return flatItemList;
  }

  isMoveInitiated(): boolean {
    return !isEmpty(this.installation.relocate);
  }

  isManualFlow(): boolean {
    return this.manualAddress || this.manualProcessingRequired;
  }

  hasNoCoaxCableConnectionForVOOCustomer() {
    return (
      this.getPurchasingOrderItems('TLO').find((orderItem: OrderItem) => {
        return (
          orderItem.chars &&
          orderItem.chars['Cable Network Operator'] === SalesConstants.VOO &&
          orderItem.chars['Active VOO Customer?'] === SalesConstants.NO &&
          orderItem.chars['Connection Needed?'] === SalesConstants.YES
        );
      }) !== undefined
    );
  }
}

export interface ValidationInterface {
  message: string;
  typeOfProblem: string;
  validationPriority: string;
  targetOrderItemId?: string;
}

export interface ErrorDetailInterface {
  errorDetailCode: string;
  message: string;
}

export interface OnTopPromosInterface {
  name: string;
  validityPeriod: number;
  endValidityDate: Date;
}

export class RegistrationInterface {
  orderItems: OrderItem[];
}
