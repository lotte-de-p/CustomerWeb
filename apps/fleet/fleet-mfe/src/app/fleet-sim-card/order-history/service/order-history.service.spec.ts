import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';

import { of } from 'rxjs';
import { OrderHistoryService } from './order-history.service';
import { OrderHistoryMapper } from '../mapper/order.history.mapper';
import { RawOrderHistoryInterface } from '../interfaces/raw-order-history.interface';
import { expect } from '@jest/globals';

describe('OrderHistoryService', () => {
  let ocapiService: OcapiService, orderHistoryService: OrderHistoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, OrderHistoryService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    ocapiService = TestBed.inject(OcapiService);
    orderHistoryService = TestBed.inject(OrderHistoryService);
  });

  test('customer failed order history', () => {
    const orderHistoryResponse: RawOrderHistoryInterface[] = [] as RawOrderHistoryInterface[];
    const expectedStatus = 'Failed';
    const messageGroupName = 'order-history';
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(orderHistoryResponse));
    orderHistoryService.getOrderHistory(messageGroupName, expectedStatus).subscribe((response) => {
      expect(response).toBeDefined();
    });

    expect(ocapiService.doGet).toHaveBeenCalledWith(
      new OcapiCallConfig(
        messageGroupName,
        `/public/api/fleet-customer-service/v1/customers/salesorderhistory?status=${expectedStatus}`,
        new OrderHistoryMapper()
      )
    );
  });
});
