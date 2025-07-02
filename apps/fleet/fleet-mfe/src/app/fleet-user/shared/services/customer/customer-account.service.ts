import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { CustomerAccountPropertiesInterface } from './customer-account-properties.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerAccountService {
  private static readonly BASE_URL = '/public/api/fleet-customer-service/v1';

  constructor(private readonly ocapiService: OcapiService) {}

  isFleetUserOrderingEnabled(messageGroup: string): Observable<boolean> {
    return this.getCustomerAccountProperties(messageGroup).pipe(
      map((properties) => properties.fleetUserOrderingEnabled)
    );
  }

  private getCustomerAccountProperties(messageGroup: string): Observable<CustomerAccountPropertiesInterface> {
    const endpoint = `${CustomerAccountService.BASE_URL}/customer-account/properties`;
    return this.ocapiService.doGet<CustomerAccountPropertiesInterface, CustomerAccountPropertiesInterface>(
      new OcapiCallConfig(messageGroup, endpoint)
    );
  }
}
