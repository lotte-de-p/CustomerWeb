import { TestBed } from '@angular/core/testing';
import { OrderHistoryMapper } from './order.history.mapper';
import { RawOrderHistoryInterface } from '../interfaces/raw-order-history.interface';
import { expect } from '@jest/globals';

const orderHistoryMock = require('../../../../../../../../fixtures/http/fleet/sales-order/failed-order-history.json');
describe('OrderHistoryMapper', () => {
  let orderHistoryMapper: OrderHistoryMapper;
  const rawOrderHistory = orderHistoryMock as RawOrderHistoryInterface[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    orderHistoryMapper = TestBed.inject(OrderHistoryMapper);
  });

  describe('toModel', () => {
    test('should map customer order history', () => {
      const orderHistory = orderHistoryMapper.toModel(orderHistoryMock);

      expect(orderHistory.length).toEqual(1);

      for (let i = 0; i < orderHistory.length; i++) {
        expect(orderHistory[i].status).toEqual(rawOrderHistory[i].status);
        expect(orderHistory[i].orderNumber).toEqual(rawOrderHistory[i].orderNumber);
        expect(orderHistory[i].dateCreated).toEqual(rawOrderHistory[i].dateCreated);

        const rawOrderItemInterface = rawOrderHistory[i].orderItems[i];
        expect(orderHistory[i].orderItems).toBeDefined();
        const orderItem = orderHistory[i].orderItems?.[i];
        expect(orderItem?.identifier).toEqual(rawOrderItemInterface.identifier);
        expect(orderItem?.action).toEqual(rawOrderItemInterface.action);
        expect(orderItem?.validations).toEqual(rawOrderItemInterface.validations);
        expect(orderItem?.name).toEqual(rawOrderItemInterface.name);
        expect(orderItem?.technical).toEqual(rawOrderItemInterface.technical);

        const orderItemOfOrderItem = orderItem?.orderItems?.[i];
        expect(rawOrderItemInterface).toBeDefined();
        const rawOrderItemOfOrderItemInterface = rawOrderItemInterface.orderItems?.[i];
        expect(orderItemOfOrderItem?.identifier).toEqual(rawOrderItemOfOrderItemInterface?.identifier);
        expect(orderItemOfOrderItem?.action).toEqual(rawOrderItemOfOrderItemInterface?.action);
        expect(orderItemOfOrderItem?.orderItems).toEqual([]);
        expect(orderItemOfOrderItem?.name).toEqual(rawOrderItemOfOrderItemInterface?.name);
        expect(orderItemOfOrderItem?.validations).toEqual([]);
        expect(orderItemOfOrderItem?.technical).toEqual(rawOrderItemOfOrderItemInterface?.technical);
      }
    });
  });
});
