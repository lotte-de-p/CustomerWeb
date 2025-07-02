import { DeliveryAddress } from '@sales/delivery/data-access';
import { AddressFieldValue, GeographicalAddress, StreetValue } from '@sales/address-form-field/data-access';
import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

export class AddressUtil {
  static convertNcAddressToDeliveryAddress(address: AddressUnit): DeliveryAddress {
    return {
      addressUnit: address,
      municipality: this.getAddressValue(address, 'Municipality'),
      postalCode: address.postalCode ? address.postalCode : '',
      street: this.getAddressValue(address, 'Street'),
      houseNumber: address.name,
      subHouseNumber: address.subHouseNumber ? address.subHouseNumber : undefined,
      box: address.boxNumber ? address.boxNumber : undefined,
      country: this.getAddressValue(address, 'Country'),
    };
  }

  static convertNcPostalAddressToDeliveryAddress(address: AddressUnit): DeliveryAddress {
    return {
      addressUnit: address,
      municipality: this.getAddressValue(address, 'Municipality'),
      postalCode: address.name ? address.name : '',
      street: '',
      houseNumber: '',
      subHouseNumber: undefined,
      box: undefined,
      country: this.getAddressValue(address, 'Country'),
    };
  }

  static convertFieldValueToDeliveryAddress(addressFieldValue: AddressFieldValue): DeliveryAddress | undefined {
    if (this.isAddressFieldValueInvalid(addressFieldValue)) {
      return undefined;
    }

    const geographical_address = addressFieldValue.geographical_address ?? {
      housenumber: undefined,
      subhousenumber: undefined,
      box: undefined,
      isManualAddress: true,
    };

    const street = addressFieldValue.street; // Extracting street
    const municipality = addressFieldValue.municipality; // Extracting municipality

    const boxString = this.formatBoxString(geographical_address.box);

    if (geographical_address.isManualAddress) {
      return this.createManualAddress(
        street as StreetValue,
        municipality as Municipality,
        geographical_address,
        boxString
      );
    } else {
      return this.createAddressWithUnit(
        street as StreetValue,
        municipality as Municipality,
        geographical_address,
        boxString
      );
    }
  }

  private static isAddressFieldValueInvalid(addressFieldValue: AddressFieldValue): boolean {
    return (
      !addressFieldValue ||
      !addressFieldValue.geographical_address ||
      !addressFieldValue.municipality ||
      !addressFieldValue.street ||
      !addressFieldValue.street?.addressUnit
    );
  }

  static formatBoxString(box?: { boxNumber?: string; floor?: string }): string {
    const boxNumber = box?.boxNumber || '';
    const floorString = box?.floor ? ` (${box.floor})` : '';
    return `${boxNumber}${floorString}`;
  }

  private static createManualAddress(
    street: StreetValue,
    municipality: Municipality,
    geographical_address: GeographicalAddress,
    boxString: string
  ): DeliveryAddress {
    return {
      addressUnit: street.addressUnit,
      country: this.getAddressValue(street.addressUnit, 'Country'),
      postalCode: municipality.postalCode,
      municipality: municipality.location,
      street: street.value || '',
      houseNumber: geographical_address.housenumber || '',
      subHouseNumber: geographical_address.subhousenumber,
      box: boxString,
    };
  }

  private static createAddressWithUnit(
    street: StreetValue,
    municipality: Municipality,
    geographical_address: GeographicalAddress,
    boxString: string
  ): DeliveryAddress {
    const addressUnit: AddressUnit = { ...geographical_address.addressUnit } as AddressUnit;
    addressUnit.addressUnitChain = this.flattenAddressUnitChain(street.addressUnit);

    return {
      addressUnit: addressUnit,
      country: this.getAddressValue(street.addressUnit, 'Country'),
      postalCode: municipality.postalCode,
      municipality: municipality.location,
      street: street.value || '',
      houseNumber: geographical_address.housenumber || '',
      subHouseNumber: geographical_address.subhousenumber,
      box: boxString,
    };
  }

  static flattenAddressUnitChain(addressUnit: AddressUnit): AddressUnit[] {
    const result: AddressUnit[] = [addressUnit];

    if (addressUnit.addressUnitChain) {
      for (const childUnit of addressUnit.addressUnitChain) {
        result.push(...this.flattenAddressUnitChain(childUnit));
      }
    }

    return result;
  }

  static getAddressValue(addressUnit: AddressUnit | undefined, value: string): string {
    if (addressUnit) {
      const foundValue = addressUnit.addressUnitChain?.find((addressUnit) => addressUnit.type === value);
      if (foundValue) {
        return foundValue.name;
      }
    }
    return '';
  }

  static getAddressValueId(addressUnit: AddressUnit, value: string): string {
    const foundValue = addressUnit.addressUnitChain?.find((addressUnit) => addressUnit.type === value);

    if (foundValue) {
      return foundValue.id;
    }
    return '';
  }
}
