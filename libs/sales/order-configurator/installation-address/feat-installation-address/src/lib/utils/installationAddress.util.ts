import { Injectable } from '@angular/core';
import { AddressFieldValue } from '@sales/address-form-field/data-access';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

@Injectable({
  providedIn: 'root',
})
export class InstallationAddressUtil {
  static convertFieldValueToInstallationAddress(addressFieldValue: AddressFieldValue): InstallationAddress | undefined {
    if (
      !addressFieldValue ||
      !addressFieldValue.geographical_address ||
      !addressFieldValue.municipality ||
      !addressFieldValue.street
    ) {
      return undefined;
    }

    const { geographical_address, street, municipality } = addressFieldValue;

    const { boxNumber = '', floor } = geographical_address.box || {};
    const floorString = floor ? ` (${floor})` : '';
    const boxString = `${boxNumber}${floorString}`;

    return {
      id: '375',
      country: 'België',
      postalCode: municipality.postalCode,
      municipality: municipality.location,
      street: street?.value || '',
      houseNumber: geographical_address.housenumber || '',
      subHouseNumber: geographical_address.subhousenumber,
      box: boxString,
      floor: '2',
    };
  }
}
