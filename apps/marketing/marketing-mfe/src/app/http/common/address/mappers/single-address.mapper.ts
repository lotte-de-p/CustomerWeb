import { RawAddressInterface } from '../interfaces/raw-address.interface';
import { Address } from '../models/address.model';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { AddressMapper } from './address.mapper';

@Injectable({
  providedIn: 'root',
})
export class SingleAddressMapper implements MapperInterface<RawAddressInterface, Address> {
  constructor(private readonly addressMapper: AddressMapper) {}

  toModel(rawAddress: RawAddressInterface): Address {
    return this.addressMapper.createContactAddress(rawAddress);
  }
}
