import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OrderItemMapper } from './order-item.mapper';
import { OrderItem } from '../models/order-item.model';
import { RawLineItemInterface, RawOrderItemInterface } from '../interfaces/raw/raw-sales-order.interface';
import { LineItem } from '../models/line-item.model';

@Injectable({
  providedIn: 'root',
})
export class LineItemMapper implements MapperInterface<RawLineItemInterface, LineItem> {
  constructor(private readonly orderItemMapper: OrderItemMapper) {}

  toModel(rawLineItem: RawLineItemInterface): LineItem {
    return this.createLineItem(rawLineItem);
  }

  private createLineItem(rawLineItem: RawLineItemInterface): LineItem {
    const lineItem = new LineItem();
    lineItem.orderItems = this.createOrderItems(rawLineItem.orderItems);
    lineItem.productIdentifier = rawLineItem.productIdentifier || '';
    lineItem.publicateNumber = rawLineItem.publicateNumber;
    lineItem.type = rawLineItem.type;
    lineItem.noProductChanges = rawLineItem.noProductChanges;
    return lineItem;
  }

  private createOrderItems(rawOrderItems: RawOrderItemInterface[]): OrderItem[] {
    return (
      rawOrderItems &&
      rawOrderItems.map((rawOrderItem) => {
        return this.orderItemMapper.toModel(rawOrderItem);
      })
    );
  }
}
