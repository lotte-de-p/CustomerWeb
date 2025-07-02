import { Injectable } from '@angular/core';
import { RawAddressSelectorModel } from '../entities/raw-address-selector.model';
import { AddressSelectorModel } from '../entities/address-selector.model';

@Injectable({
  providedIn: 'root',
})
export class ReturnDevicesAddressSelectorMapper {
  toModel(rawAddressSelector: RawAddressSelectorModel[]): AddressSelectorModel[] {
    return rawAddressSelector.map((rawAddressSelector: RawAddressSelectorModel) => ({
      id: rawAddressSelector.id,
      country: rawAddressSelector.country,
      countryCode: rawAddressSelector.countryCode,
      city: rawAddressSelector.city,
      postalCode: rawAddressSelector.postalCode,
      street: rawAddressSelector.street,
      houseNumber: rawAddressSelector.houseNumber,
    }));
  }
}
