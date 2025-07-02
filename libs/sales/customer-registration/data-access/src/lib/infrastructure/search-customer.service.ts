import { Injectable } from '@angular/core';
import {
  BusinessCustomerSearchInterface,
  CustomerResponseInterface,
  ResidentialCustomerSearchInterface,
} from './searchCustomer.interface';
import { Observable, throwError } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { SearchCustomerMapper } from './search-customer.mapper';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchCustomerService {
  constructor(private readonly ocapiService: OcapiService) {}

  searchCustomer(
    customer: ResidentialCustomerSearchInterface | BusinessCustomerSearchInterface
  ): Observable<CustomerResponseInterface> {
    const url = `/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales`;
    const ocapiCallConfig = new OcapiCallConfig('', url, new SearchCustomerMapper(), customer);
    ocapiCallConfig.errorHandler = this.handleError.bind(this);
    return this.ocapiService.doPost(ocapiCallConfig);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
