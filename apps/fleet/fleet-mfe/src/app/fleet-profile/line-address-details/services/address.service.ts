import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { AddressMapper } from '../mappers/address.mapper';
import { Address } from '../../../shared/common/models/address.model';
import { AddressConstants } from '../constants/address.constant';
import { CacheService } from '@telenet/ng-lib-page';

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
    const endpoint = this.getServiceURI(`/addresses/${addressId}`);
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
