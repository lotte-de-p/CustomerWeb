import { Address } from '../models/address.model';
import { AddressPipeOptionsInterface } from '../interfaces/address-pipe-options.interface';

export class AddressUtil {
  static compareAddresses(address: Address, secondAddress: Address): boolean {
    return address.addressId === secondAddress.addressId;
  }
  static formatAddress(address: Address, options?: AddressPipeOptionsInterface): string {
    let addressString = '';
    addressString = this.addParameter(addressString, address.street);
    addressString = this.addParameter(addressString, address.houseNumber);
    addressString = this.addParameter(addressString, address.boxNumber, '/');
    if (options && options.streetMunicipalitySeperator && address.street) {
      addressString = this.addParameter(addressString, options.streetMunicipalitySeperator, '');
    }
    if (options && options.useBreak) {
      addressString = this.addParameter(addressString, '<br>', '');
    }

    addressString = this.addParameter(addressString, address.postalCode);
    addressString = this.addParameter(addressString, address.municipality);

    return addressString;
  }

  private static addParameter(initialString: string, parameter?: string, seperator: string = ' '): string {
    if (parameter) {
      if (initialString === '') {
        initialString = initialString.concat(parameter);
      } else {
        initialString = initialString.concat(seperator).concat(parameter);
      }
    }
    return initialString;
  }
}
