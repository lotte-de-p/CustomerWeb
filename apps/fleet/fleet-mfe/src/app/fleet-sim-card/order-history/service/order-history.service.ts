import { OrderHistoryModel } from '../models/order-history.model';
import { Observable } from 'rxjs';
import { OrderHistoryMapper } from '../mapper/order.history.mapper';
import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly orderHistoryMapper: OrderHistoryMapper
  ) {}

  getOrderHistory(messageGroupName: string, status: string): Observable<OrderHistoryModel[]> {
    const suffix = status ? `?status=${status}` : '';
    const url = '/public/api/fleet-customer-service/v1/customers/salesorderhistory'.concat(suffix);

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, url, this.orderHistoryMapper));
  }
}
