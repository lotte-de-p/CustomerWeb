import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiService, OcapiCallConfig, CacheService } from '@telenet/ng-lib-ocapi';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';
import { CustomerAddressMapper } from '../mappers/customer-address.mapper';

@Injectable({
  providedIn: 'root',
})
export class CustomerAddressService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly customerAddressMapper: CustomerAddressMapper,
    private readonly cacheService: CacheService
  ) {}

  public getCustomerAddress(messageGroup: string, addressId: string): Observable<CustomerAddressInterface> {
    let endpoint = `/addresses/${addressId}`;
    endpoint = this.getServiceURI(endpoint);
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(
        endpoint,
        this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.customerAddressMapper))
      );
    }
    // @ts-ignore
    return this.cacheService.get(endpoint);
  }

  private getServiceURI(endpoint: string) {
    return FiberAddressCheckerEnum.CONTACT_SERVICE_PREFIX.concat(FiberAddressCheckerEnum.VERSION_1)
      .concat(FiberAddressCheckerEnum.CONTEXT_CONTACT)
      .concat(endpoint);
  }
}
