import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { GenericMapper } from './generic.mapper';
import { CreateCustomerRequest } from '../entities/interfaces/create-customer-request.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateCustomerService {
  endpoint = '/public/api/customer-service/v1/customers?distributionchannel=sales&skipNavsCheck=true';

  constructor(private readonly ocapiService: OcapiService) {}

  createCustomer(userInput: CreateCustomerRequest): Observable<unknown> {
    const request = new OcapiCallConfig('customer-registration', this.endpoint, new GenericMapper<string>(), userInput);
    return this.ocapiService.doPost(request);
  }
}
