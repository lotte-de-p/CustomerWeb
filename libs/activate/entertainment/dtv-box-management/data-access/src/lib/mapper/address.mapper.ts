import { Address } from '../entities/address.model';
import { RawAddressModel as RawAddressModel } from '../entities/raw/raw-address.model';

export class AddressMapper {
  toModel(rawAddress: RawAddressModel[]): Address[] {
    return rawAddress.map((rawAddress: RawAddressModel) => ({
      id: rawAddress.id,
      country: rawAddress.country,
      countryCode: rawAddress.countryCode,
      city: rawAddress.city,
      postalCode: rawAddress.postalCode,
      street: rawAddress.street,
      houseNumber: rawAddress.houseNumber,
    }));
  }
}
