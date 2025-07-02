import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { LineItemDto } from '../../interfaces/dto/sales-order-dto.interface';
import { LineItem } from '../../models/sales-order/line-item.model';
import { OrderItemMapper } from '../order-item.mapper';
import { OrderItemDto } from '../../interfaces/dto/order-item-dto.interface';
import { OrderItem } from '../../models/sales-order/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class LineItemMapper implements MapperInterface<LineItemDto, LineItem> {
  constructor(private readonly orderItemMapper: OrderItemMapper) {}

  toModel(rawLineItem: LineItemDto): LineItem {
    return this.createLineItem(rawLineItem);
  }

  private createLineItem(rawLineItem: LineItemDto): LineItem {
    const lineItem = new LineItem();
    lineItem.orderItems = this.createOrderItems(rawLineItem.orderItems);
    lineItem.productIdentifier = rawLineItem.productIdentifier || '';
    lineItem.publicateNumber = rawLineItem.publicateNumber;
    lineItem.noProductChanges = rawLineItem.noProductChanges;
    return lineItem;
  }

  private createOrderItems(rawOrderItems: OrderItemDto[]): OrderItem[] {
    return (
      rawOrderItems &&
      rawOrderItems.map((rawOrderItem) => {
        return this.orderItemMapper.toModel(rawOrderItem);
      })
    );
  }
}
