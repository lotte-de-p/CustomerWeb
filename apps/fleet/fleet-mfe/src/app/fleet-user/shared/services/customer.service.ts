import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, of } from 'rxjs';
import { CustomerConstants } from '../constants/customer.constant';
import { Customer } from '../models/customer.model';
import { map } from 'rxjs/operators';
import { CustomerMapper } from '../mappers/customer/customer.mapper';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customerCache: Customer;

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly customerMapper: CustomerMapper
  ) {}

  getCustomer(messageGroupName: string, msisdn?: string, force?: boolean): Observable<Customer> {
    if (this.customerCache && !force) {
      return of(this.customerCache);
    }
    const endPoint = msisdn
      ? this.getServiceURI(CustomerConstants.CONTEXT_CUSTOMER_DETAILS, `?user=${msisdn}`)
      : this.getServiceURI(CustomerConstants.CONTEXT_CUSTOMER_DETAILS, CustomerConstants.EMPTY);
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, endPoint, this.customerMapper, null)).pipe(
      map((response: Customer) => {
        this.customerCache = response.id && response;
        return response;
      })
    );
  }

  private getServiceURI(context: string, endpoint: string): string {
    return CustomerConstants.CUSTOMER_SERVICE_PREFIX.concat(CustomerConstants.API_VERSION_V1)
      .concat(context)
      .concat(endpoint);
  }
}
