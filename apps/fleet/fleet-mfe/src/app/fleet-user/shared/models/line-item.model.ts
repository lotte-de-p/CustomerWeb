import { SalesOrderHelper } from '../helpers/sales-order.helper';
import { OrderItem } from './order-item.model';
import { ProductStatusEnum } from '../enums/product-status.enum';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { LineItemTypeEnum } from '../enums/line-item-type.enum';

export class LineItem {
  orderItems: OrderItem[];
  productIdentifier: string;
  publicateNumber: boolean;
  type?: LineItemTypeEnum;
  noProductChanges?: boolean;

  getItemsByProductType(typeList: ProductTypeEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByProductType(this.orderItems, typeList);
  }

  getItemsByStatus(statusList: ProductStatusEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByStatus(this.orderItems, statusList);
  }
}
