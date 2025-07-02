import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesServiceHelper } from '../../helpers/sales-service-helper';
import {
  GetSalesOrderActionPayload,
  ManageProductsActionPayload,
} from '../../../product/shared/store/sales/actions/sales.actions';
import { SalesOrderMapper } from '../../mappers/sales/sales-order.mapper';
import { ManageModifyProductsInterface } from '../../interfaces/manage-modify-products.interface';
import { SpecificationsService } from '../../../product/shared/store/sales/services/specifications.service';
import { SalesConstants } from '../../constants/sales.constant';
import { SalesOrder } from '../../models/sales-order.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(
    private readonly salesServiceHelper: SalesServiceHelper,
    private readonly ocapiService: OcapiService,
    private readonly salesOrderMapper: SalesOrderMapper,
    private readonly specificationsService: SpecificationsService
  ) {}

  getSalesOrder(payload: GetSalesOrderActionPayload): Observable<SalesOrder> {
    if (this.salesServiceHelper.getSalesOrderCache() && !payload.force) {
      return of(this.salesServiceHelper.getSalesOrderCache());
    }
    let endpoint = '';
    const queryParamExceptions = [];
    if (payload.orderEligibility) {
      endpoint = `/${payload.salesOrderId}`;
      queryParamExceptions.push('salesOrderId');
    }
    if (payload.truncated) {
      endpoint += `?truncated=` + payload.truncated;
      queryParamExceptions.push('truncated');
    }
    endpoint = this.salesServiceHelper.computeEndpointFromPayload(endpoint, payload, queryParamExceptions);
    return this.ocapiService
      .doGet(
        new OcapiCallConfig(
          payload.messageGroupName,
          this.salesServiceHelper.getSalesURI(endpoint, payload.source),
          this.salesOrderMapper
        )
      )
      .pipe(
        map((response: SalesOrder) => {
          return this.salesServiceHelper.loadUpdatedSalesOrderCache(response);
        })
      );
  }

  submitSalesOrder(payload): Observable<SalesOrder> {
    let endpoint = payload.isPIDAndPrepaidMember
      ? `/${payload.salesOrderId}/submitforprepaid`
      : `/${payload.salesOrderId}/submit`;
    const submitPayload = {
      distributionChannel: payload.distributionChannel,
    };
    endpoint = this.salesServiceHelper.computeEndpointFromPayload(endpoint, submitPayload);
    return this.ocapiService
      .doPost(
        new OcapiCallConfig(
          payload.messageGroup,
          this.salesServiceHelper.getSalesURI(endpoint, payload.source),
          this.salesOrderMapper
        )
      )
      .pipe(
        map((response: SalesOrder) => {
          return this.salesServiceHelper.loadUpdatedSalesOrderCache(response);
        })
      );
  }

  modifyProducts(messageGroup, payload: ManageModifyProductsInterface[]): Observable<SalesOrder> {
    const endpoint = this.salesServiceHelper.computeEndpointFromPayload('', payload);
    return this.ocapiService
      .doPost(
        new OcapiCallConfig(messageGroup, this.getProductsURI(endpoint, '', false), this.salesOrderMapper, payload)
      )
      .pipe(
        map((response: SalesOrder) => {
          return this.handleOmapiResponse(response);
        })
      );
  }

  manageProducts(payload: ManageProductsActionPayload): Observable<SalesOrder> {
    let endpoint = SalesConstants.EMPTY;
    endpoint = this.salesServiceHelper.computeEndpointFromPayload(endpoint, payload);
    return this.ocapiService
      .doPost(
        new OcapiCallConfig(
          payload.messageGroupName,
          this.getProductsURI(endpoint, payload.source, payload.isPIDAndPrepaidMember),
          this.salesOrderMapper,
          payload.data
        )
      )
      .pipe(
        map((response: SalesOrder) => {
          return this.salesServiceHelper.loadUpdatedSalesOrderCache(response);
        })
      );
  }

  private getProductsURI(endpoint: string, source?: string, isPIDAndPrepaidMember?: boolean) {
    const prefix = this.salesServiceHelper.isItsMeRequest(source)
      ? SalesConstants.SALES_SERVICE_PREFIX_ITS_ME
      : SalesConstants.SALES_SERVICE_PREFIX;
    return prefix
      .concat(SalesConstants.API_VERSION)
      .concat(isPIDAndPrepaidMember ? SalesConstants.CONTEXT_PREPAID_PRODUCTS : SalesConstants.CONTEXT_PRODUCTS)
      .concat(endpoint);
  }

  private handleOmapiResponse(response: SalesOrder) {
    this.specificationsService.addSpecifications(response['data'], true).subscribe((convertedData) => {
      if (convertedData.success) {
        response['data'] = convertedData.data;
        return response;
      }
    });
    return response;
  }
}
