import { Builder, MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import {
  RawOrderHistoryInterface,
  RawOrderItemInterface,
  RawOrderItemValidationInterface,
} from '../interfaces/raw-order-history.interface';
import { OrderHistoryModel, OrderItem, OrderItemValidation } from '../models/order-history.model';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryMapper implements MapperInterface<RawOrderHistoryInterface[], OrderHistoryModel[]> {
  toModel(rawOrderHistory: RawOrderHistoryInterface[]): OrderHistoryModel[] {
    return this.createOrderHistory(rawOrderHistory);
  }

  private createOrderHistory(rawOrderHistory: RawOrderHistoryInterface[]): OrderHistoryModel[] {
    if (rawOrderHistory) {
      return rawOrderHistory.map((rawOrder) =>
        Builder<OrderHistoryModel>()
          .orderNumber(rawOrder.orderNumber)
          .dateCreated(rawOrder.dateCreated)
          .status(rawOrder.status)
          .orderItems(this.createOrderItems(rawOrder.orderItems))
          .build()
      );
    }

    return [];
  }

  private createOrderItems(orderItemInterface?: RawOrderItemInterface[]): OrderItem[] {
    if (orderItemInterface) {
      return orderItemInterface.map((rawOrderItem) =>
        Builder<OrderItem>()
          .name(rawOrderItem.name)
          .action(rawOrderItem.action)
          .technical(rawOrderItem.technical)
          .identifier(rawOrderItem.identifier)
          .orderItems(this.createOrderItems(rawOrderItem.orderItems))
          .validations(this.createOrderItemValidations(rawOrderItem.validations))
          .build()
      );
    }

    return [];
  }

  private createOrderItemValidations(validationsInterface: RawOrderItemValidationInterface[]): OrderItemValidation[] {
    if (validationsInterface) {
      return validationsInterface.map((rawValidation) =>
        Builder<OrderItemValidation>().validationError(rawValidation.validationError).build()
      );
    }

    return [];
  }
}
