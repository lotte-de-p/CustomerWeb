import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { CacheService } from '@telenet/ng-lib-page';
import { Address } from '../models/address.model';
import { AddressMapper } from '../mappers/address.mapper';
import { AddressConstants } from '../constants/address.constant';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  selectedAddress: Address[];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly addressMapper: AddressMapper,
    private readonly cacheService: CacheService
  ) {}

  getAddressById(messageGroup: string, addressId: string): Observable<Address[]> {
    let endpoint = `/addresses/${addressId}`;
    endpoint = this.getServiceURI(endpoint);
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(
        endpoint,
        this.ocapiService
          .doGet(new OcapiCallConfig(messageGroup, endpoint, this.addressMapper))
          .pipe(map((addresses: Address[]) => addresses))
      );
    }
    return this.cacheService.get(endpoint);
  }

  private getServiceURI(endpoint: string) {
    return AddressConstants.CONTACT_SERVICE_PREFIX.concat(AddressConstants.API_VERSION_V1)
      .concat(AddressConstants.CONTEXT_CONTACT)
      .concat(endpoint);
  }
}
