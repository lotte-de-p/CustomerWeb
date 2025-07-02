import { Address } from './address.model';

export class AddressTestfactory {
  static build(properties?: unknown): Address {
    const address = new Address();
    address.addressId = '123456789';
    address.municipality = 'Leuven';
    address.postalCode = '3000';
    address.street = 'teststraat';
    address.houseNumber = '15';
    address.subHouseNumber = '20';
    address.boxNumber = '2A';
    address.country = 'Belgie';
    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key] === null) {
          delete address[key];
        } else {
          address[key] = properties[key];
        }
      });
    }
    return address;
  }
}
