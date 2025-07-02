import { Injectable } from '@angular/core';
import isBoolean from 'lodash-es/isBoolean';
import isEmpty from 'lodash-es/isEmpty';
import { SalesOrder } from '../models/sales-order/sales-order.model';
import { SalesConstants } from '../constants/sales.constants';
import { SalesOrderStoreService } from '../services/sales/sales-order-store.service';
import { QueryParamEnum } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class SalesServiceHelper {
  private salesOrderCache: SalesOrder;
  private readonly queryParamList = [
    'salesOrderId',
    'statuses',
    'distributionChannel',
    'orderEligibility',
    'token',
    'manualAddress',
    'isAbandonable',
    'manualProcessing',
    'startdate',
    'type',
    'manualProcessingRequired',
    'isContentPack',
    'isFtth',
    'taskGroupId',
  ];

  constructor(private readonly salesOrderStoreService: SalesOrderStoreService) {}

  getSalesOrderCache() {
    return this.salesOrderCache;
  }

  computeEndpointFromPayload(endpoint: string, payload: object, queryParamExceptions?: string[]): string {
    this.queryParamList
      .filter((queryParam) => isEmpty(queryParamExceptions) || !queryParamExceptions.includes(queryParam))
      .forEach((queryParam) => {
        if (isBoolean(payload[queryParam]) || !isEmpty(payload[queryParam])) {
          endpoint = this.setQueryParam(endpoint, queryParam, payload[queryParam]);
        }
      });
    return endpoint;
  }

  loadUpdatedSalesOrderCache(response: SalesOrder): SalesOrder {
    if (response.success) {
      this.setSalesOrderCache(response);
      this.updateContextHubSalesStore(response);
    }
    return response;
  }

  getSalesURI(endpoint: string, source?: string): string {
    const prefix = this.isItsMeRequest(source)
      ? SalesConstants.SALES_SERVICE_PREFIX_ITS_ME
      : SalesConstants.SALES_SERVICE_PREFIX;
    return prefix.concat(SalesConstants.API_VERSION).concat(SalesConstants.CONTEXT_SALES_ORDERS).concat(endpoint);
  }
  isItsMeRequest(source: string): boolean {
    return source && source.toLowerCase() === QueryParamEnum.SOURCE_ITS_ME;
  }

  private setSalesOrderCache(cache) {
    this.salesOrderCache = cache;
  }

  private setQueryParam(endpoint: string, queryParam: string, queryParamValue: string | boolean): string {
    return endpoint.indexOf('?') !== -1
      ? endpoint + `&${queryParam}=${queryParamValue}`
      : endpoint + `?${queryParam}=${queryParamValue}`;
  }

  private updateContextHubSalesStore(salesOrder: SalesOrder): void {
    this.salesOrderStoreService.updateStoreData(salesOrder);
  }
}
