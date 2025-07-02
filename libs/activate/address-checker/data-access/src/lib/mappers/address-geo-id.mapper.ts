import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawAddressGeoIdInterface } from '../interfaces/raw-address-geo-id.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressGeoIdMapper implements MapperInterface<RawAddressGeoIdInterface, string> {
  toModel(rawAddressGeoId: RawAddressGeoIdInterface): string {
    return rawAddressGeoId.geoId;
  }
}
