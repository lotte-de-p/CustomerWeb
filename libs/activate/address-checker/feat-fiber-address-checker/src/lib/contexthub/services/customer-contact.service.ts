import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ContactDetailsMapper } from '../mapper/contact-details.mapper';
import { ContactDetails } from '../models/contact-details.model';
import { CustomerConstants } from '../constants/customer.constant';

@Injectable({
  providedIn: 'root',
})
export class CustomerContactService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly contactDetailsMapper: ContactDetailsMapper
  ) {}

  getContacts(messageGroup: string): Observable<ContactDetails> {
    const version: string = CustomerConstants.API_VERSION_V2;
    const prefix: string = CustomerConstants.CUSTOMER_SERVICE_PREFIX;
    const endpoint: string = prefix.concat(version).concat(CustomerConstants.CONTEXT_CONTACT_DETAILS);

    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroup, endpoint, this.contactDetailsMapper))
      .pipe(map((response: ContactDetails) => response));
  }
}
