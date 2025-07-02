import { OrderItem } from '../models/sales-order/order-item.model';
import { OptionProductInterface } from '../interfaces/option-products.interface';
import { Option } from '../models/option.model';
import { OmapiProductInfo } from '../interfaces/omapi-products.interface';

export class SalesOrderHelper {
  static getItemsByProductType(orderItems: OrderItem[], productTypeList: string[]): OrderItem[] {
    return orderItems.filter((orderItem) => {
      const productType = orderItem && orderItem.productInfo.productType;
      return productType && productTypeList.includes(productType.toUpperCase());
    });
  }

  static getItemsByStatus(orderItems: OrderItem[], statusList: string[]): OrderItem[] {
    return orderItems.filter((orderItem) => {
      const status = orderItem && orderItem.status;
      return status && statusList && statusList.includes(status.toUpperCase());
    });
  }

  static getChildOrderItems(orderItem: OrderItem): OrderItem[] {
    return orderItem.orderItems?.length > 0
      ? [orderItem, ...orderItem.orderItems.flatMap((orderItem) => this.getChildOrderItems(orderItem))]
      : [orderItem];
  }

  static isVariantOrdered(option: OptionProductInterface, orderItemProductInfo: OmapiProductInfo): boolean {
    return !!(option.variants || []).find((variant) => this.isOptionApplicable(variant, orderItemProductInfo));
  }

  static isOptionOrderedInList(option: OptionProductInterface, options: Option[]): boolean {
    return !!options.find((o) => this.isOptionApplicable(option, o.productInfo));
  }

  static isOptionApplicable(option: OptionProductInterface, productInfo: OmapiProductInfo): boolean {
    return option.productInfo?.productId === productInfo?.productId;
  }
}
