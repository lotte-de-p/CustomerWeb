import { Address } from '../entities/models/address.model';
import { Injectable } from '@angular/core';
import { RawAddressInterface } from '../entities/interfaces/raw-address.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressMapper {
  toModel(rawAddresses: RawAddressInterface[] | RawAddressInterface): Address[] {
    return this.createContactAddresses(rawAddresses);
  }

  private createContactAddresses(rawAddresses: RawAddressInterface[] | RawAddressInterface): Address[] {
    let address: RawAddressInterface[] | RawAddressInterface;
    if (rawAddresses instanceof Array) {
      address = rawAddresses;
    } else if (rawAddresses.address instanceof Array) {
      return this.createContactAddressesForObject(rawAddresses);
    } else {
      address = [rawAddresses];
    }
    return address.map((rawAddress: RawAddressInterface) => this.createContactAddress(rawAddress));
  }

  createContactAddress(rawAddress: RawAddressInterface): Address {
    const address = new Address();
    address.street = rawAddress.street;
    address.streetId = rawAddress.streetId ?? '';
    address.country = rawAddress.country;
    address.municipality = rawAddress.municipality;
    address.type = rawAddress.type || rawAddress.addresstype || '';
    address.houseNumber = rawAddress.houseNumber || rawAddress.housenr || '';
    address.postalCode = rawAddress.postalCode || rawAddress.postalcode || '';
    address.countryCode = rawAddress.countryCode || rawAddress.countrycode;
    address.addressType = rawAddress.addresstype || '';
    this.setAdditionalDetails(address, rawAddress);
    return address;
  }

  private createContactAddressesForObject(rawAddresses: RawAddressInterface): Address[] {
    const address: RawAddressInterface[] =
      rawAddresses.address && rawAddresses.address.length > 0 ? rawAddresses.address : [rawAddresses];
    return address.map((rawAddress: RawAddressInterface) =>
      this.createContactAddressForObject(rawAddress, rawAddresses)
    );
  }

  private createContactAddressForObject(
    rawChildAddress: RawAddressInterface,
    rawParentAddress: RawAddressInterface
  ): Address {
    const address = new Address();
    address.street = rawParentAddress.street;
    address.streetId = rawParentAddress.streetId ?? '';
    address.country = rawParentAddress.country;
    address.type = rawParentAddress.type || rawParentAddress.addresstype || '';
    address.municipality = rawParentAddress.municipality;
    address.houseNumber = rawParentAddress.houseNumber || rawParentAddress.housenr || '';
    address.postalCode = rawParentAddress.postalCode || rawParentAddress.postalcode || '';
    address.countryCode = rawParentAddress.countryCode || rawParentAddress.countrycode;
    address.addressType = rawParentAddress.addresstype || '';
    this.setAdditionalDetails(address, rawChildAddress);
    return address;
  }

  private setAdditionalDetails(address: Address, rawChildAddress: RawAddressInterface) {
    address.addressId = rawChildAddress.id || rawChildAddress.addressid || '';
    address.boxNumber = rawChildAddress.boxNumber || rawChildAddress.boxnr || '';
    address.floorNumber = rawChildAddress.floorNumber || rawChildAddress.floor;
    address.subHouseNumber = rawChildAddress.subHouseNumber || rawChildAddress.subhousenr || '';
    address.tinaLocationId = rawChildAddress.tinaLocationId;
    return address;
  }
}
