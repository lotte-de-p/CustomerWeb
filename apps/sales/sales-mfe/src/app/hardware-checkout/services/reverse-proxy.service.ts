import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressUnit } from '@sales/shared/address/data-access';
import { CustomerDiscounts } from '@sales/etf/data-access';
import {
  BillingAccount,
  CustomerAccountDetails,
  CustomerTypeEnum,
  DeliveryMethods,
  PersonalIdentity,
  PersonalIdentityResponse,
  PersonalIdentityUtils,
  SalesOrder,
} from '@sales/hardware-checkout/data-access';
import { ErrorRecord } from '../interfaces/eligibility-response.interface';
import { ContractSummaryCheckResponse } from '../interfaces/contract-summary-check-response.interface';
import { ContractSummaryGenerationResponse } from '../interfaces/contract-summary-generation-response.interface';
import { UrlService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { OcapiNotConfigured } from '../constants/errors.constants';
import { UpdateCustomerRequestInterface } from '../interfaces/update-customer-request.interface';
import { HeaderUtil } from '../utils/header.util';
import { UpdateDeliveryCharsRequest } from '../interfaces/update-installation-address-request.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ReverseProxyService {
  baseUrl: string;
  basePath = '/public/api/mytelenet-web-sales-checkout-rp';

  fields =
    'id,name,validationElements,orderItems,price,status,customerId,cartStatus,chars,discountItems,locationIds,eligibleForEasySwitch,warningElements,isAbandonable,rules';

  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly configService: ConfigService
  ) {
    const ocapiUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
    if (!ocapiUrl) {
      throw new HardwareCheckoutError(OcapiNotConfigured);
    }
    this.baseUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
  }

  getPid(): Observable<PersonalIdentity> {
    const path = `${this.baseUrl}/public/api/sales-service/v2/pid`;
    return this.doGet<PersonalIdentityResponse>(path).pipe(
      map((personalIdentityResponse: PersonalIdentityResponse) =>
        PersonalIdentityUtils.getPersonalIdentity(personalIdentityResponse)
      )
    );
  }

  getCustomerAccountDetails(): Observable<CustomerAccountDetails> {
    const path = `/v1/customerManagement/customerAccount`;
    return this.doGet<CustomerAccountDetails>(this.getUrl(path));
  }

  createSalesOrder(locationId: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/customerAccount/location/${locationId}/salesOrder`;
    const body = {};
    return this.doPost<SalesOrder>(this.getUrl(path), body);
  }

  updateSalesOrderDeliveryEmail(
    salesOrderId: string,
    customerId: string,
    deliveryEmail: string
  ): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}`;
    const body = {
      id: customerId,
      chars: {
        'Delivery E-mail': deliveryEmail,
      },
    };
    return this.doPut<SalesOrder>(this.getUrl(path), body);
  }

  createHardwareTLO(salesOrderId: string, customerType: CustomerTypeEnum): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem`;
    let epc = 'HWTO0001';
    if (customerType === CustomerTypeEnum.SOHO) {
      epc = 'HWTO0107';
    }
    const body = {
      epc: epc,
    };
    return this.doPost<SalesOrder>(this.getUrl(path), body);
  }

  addOrderItem(salesOrderId: string, TLOOrderItemId: string, OrderItemCode: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${TLOOrderItemId}/hwcvpOrderItem`;
    const body = {
      itemCode: OrderItemCode,
    };

    return this.doPost<SalesOrder>(this.getUrl(path), body);
  }

  deleteOrderItem(salesOrderId: string, orderItemId: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${orderItemId}`;
    return this.doDelete<SalesOrder>(this.getUrl(path));
  }

  updateDeliveryChars(
    salesOrderId: string,
    orderItemId: string,
    deliveryInfoChange: UpdateDeliveryCharsRequest
  ): Observable<SalesOrder> {
    const body = {
      chars: deliveryInfoChange,
    };
    return this.doPut<SalesOrder>(
      this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${orderItemId}`),
      body
    );
  }

  getDeliveryOptions(salesOrderId: string): Observable<DeliveryMethods> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/deliveryMethods`;
    return this.doGet(this.getUrl(path));
  }

  addDiscount(salesOrderId: string, ruleElementId: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/discount`;
    const body = {
      ruleElementId: ruleElementId,
    };
    return this.doPost<SalesOrder>(this.getUrl(path), body);
  }

  calculateDelivery(salesOrderId: string, deliveryMethods: DeliveryMethods): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/calculateDelivery`;
    const body = {
      chosenStandaloneDeliveryItems: this.getChosenStandaloneDeliveryItems(deliveryMethods),
    };

    return this.doPost(this.getUrl(path), body);
  }

  setSalesorderAsAbandonable(salesOrderId: string, customerId: string, basketUrl: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}?isAbandonable=true`;
    const body = {
      id: customerId,
      chars: {
        'eShop URL for PEGA Characteristic Involvement': basketUrl,
      },
    };
    return this.doPut<SalesOrder>(this.getUrl(path), body);
  }

  submitSalesOrder(salesOrderId: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/submit`;
    const body = {};
    return this.doPost<SalesOrder>(this.getUrl(path), body);
  }

  getBillingAccounts(): Observable<BillingAccount[]> {
    const path = `/v1/billingManagement/customerAccount/billingAccount`;
    return this.doGet<BillingAccount[]>(this.getUrl(path));
  }

  checkoutDelivery(salesOrderId: string): Observable<SalesOrder> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/checkoutDelivery`;
    return this.doPost<SalesOrder>(this.getUrl(path), {});
  }

  checkContractSummary(salesOrderId: string): Observable<ContractSummaryCheckResponse> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/document/cs/generationRequired`;
    return this.doGet<ContractSummaryCheckResponse>(this.getUrl(path));
  }

  generateContractSummary(salesOrderId: string): Observable<ContractSummaryGenerationResponse> {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/document/cs/generation`;
    const body = {};
    return this.doPost<ContractSummaryGenerationResponse>(this.getUrl(path), body);
  }

  checkFeasibility(salesOrderId: string): Observable<SalesOrder> {
    const body = {};
    return this.doPost<SalesOrder>(
      this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/feasibilityCheck`),
      body
    );
  }

  checkEligibility(salesOrderId: string): Observable<ErrorRecord[]> {
    const body = {};
    return this.doPost<ErrorRecord[]>(
      this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/eligibilityCheck`),
      body
    );
  }

  getAddressById(addressUnitId: string): Observable<AddressUnit> {
    const url = this.getUrl(`/v1/addressManagement/address/${addressUnitId}`);
    return this.doGet<AddressUnit>(url);
  }

  getCustomerDiscounts(): Observable<CustomerDiscounts> {
    const url = this.getUrl(`/v1/customerManagement/discountSlots`);
    return this.doGet(url);
  }

  getSalesOrder(salesOrderId: string): Observable<SalesOrder> {
    const url = this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}`);
    return this.doGet(url);
  }

  updateCustomer(customer: UpdateCustomerRequestInterface): Observable<string> {
    const url = '/v1/customerManagement/customerAccount';
    return this.doPut(this.getUrl(url), customer);
  }

  private getChosenStandaloneDeliveryItems(deliveryMethods: DeliveryMethods) {
    return deliveryMethods.standaloneDeliveryItems?.map((standaloneDeliveryItem) => {
      return {
        deliveryOrderItem: {
          id: standaloneDeliveryItem.deliveryOrderItem.id,
          name: standaloneDeliveryItem.deliveryOrderItem.name,
        },
        deliveryMethod: {
          id: standaloneDeliveryItem.deliveryMethods[0].id,
          name: standaloneDeliveryItem.deliveryMethods[0].name,
        },
      };
    });
  }

  private getUrl(path: string) {
    return `${this.baseUrl}${this.basePath}${path}`;
  }

  private doGet<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true,
    });
  }

  private doPut<T>(url: string, body: unknown): Observable<T> {
    return this.http.put<T>(url, body, {
      headers: HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true,
    });
  }

  private doPost<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(url, body, {
      headers: HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true,
    });
  }

  private doDelete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, {
      headers: HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true,
    });
  }
}
