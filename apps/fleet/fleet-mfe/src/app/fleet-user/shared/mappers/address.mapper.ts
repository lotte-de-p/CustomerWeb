import { Address } from '../models/address.model';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawAddressInterface } from '../interfaces/raw/raw-address.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressMapper implements MapperInterface<RawAddressInterface[], Address[]> {
  toModel(rawAddresses: RawAddressInterface[] | RawAddressInterface): Address[] {
    return this.createContactAddresses(rawAddresses);
  }

  private createContactAddresses(rawAddresses: RawAddressInterface[] | RawAddressInterface): Address[] {
    let address = [];
    if (rawAddresses instanceof Array) {
      address = rawAddresses;
    } else if (rawAddresses.address instanceof Array) {
      return this.createContactAddressesForObject(rawAddresses);
    } else {
      address = [rawAddresses];
    }
    return address.map((rawAddress) => this.createContactAddress(rawAddress));
  }

  createContactAddress(rawAddress: RawAddressInterface): Address {
    const address = new Address();
    address.street = rawAddress.street;
    address.streetId = rawAddress.streetId;
    address.country = rawAddress.country;
    address.municipality = rawAddress.municipality;
    address.addressId = rawAddress.id || rawAddress.addressid;
    address.type = rawAddress.type || rawAddress.addresstype;
    address.boxNumber = rawAddress.boxNumber || rawAddress.boxnr;
    address.floorNumber = rawAddress.floorNumber || rawAddress.floor;
    address.houseNumber = rawAddress.houseNumber || rawAddress.housenr;
    address.postalCode = rawAddress.postalCode || rawAddress.postalcode;
    address.countryCode = rawAddress.countryCode || rawAddress.countrycode;
    address.subHouseNumber = rawAddress.subHouseNumber || rawAddress.subhousenr;
    address.tinaLocationId = rawAddress.tinaLocationId;
    return address;
  }

  private createContactAddressesForObject(rawAddresses: RawAddressInterface): Address[] {
    const address = rawAddresses.address && rawAddresses.address.length > 0 ? rawAddresses.address : [rawAddresses];
    return address.map((rawAddress) => this.createContactAddressForObject(rawAddress, rawAddresses));
  }

  private createContactAddressForObject(
    rawChildAddress: RawAddressInterface,
    rawParentAddress: RawAddressInterface
  ): Address {
    const address = new Address();
    address.street = rawParentAddress.street;
    address.streetId = rawParentAddress.streetId;
    address.country = rawParentAddress.country;
    address.type = rawParentAddress.type || rawParentAddress.addresstype;
    address.municipality = rawParentAddress.municipality;
    address.houseNumber = rawParentAddress.houseNumber || rawParentAddress.housenr;
    address.postalCode = rawParentAddress.postalCode || rawParentAddress.postalcode;
    address.countryCode = rawParentAddress.countryCode || rawParentAddress.countrycode;
    address.addressId = rawChildAddress.id || rawChildAddress.addressid;
    address.boxNumber = rawChildAddress.boxNumber || rawChildAddress.boxnr;
    address.floorNumber = rawChildAddress.floorNumber || rawChildAddress.floor;
    address.subHouseNumber = rawChildAddress.subHouseNumber || rawChildAddress.subhousenr;
    address.tinaLocationId = rawChildAddress.tinaLocationId;
    return address;
  }
}
