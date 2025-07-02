import { AddressUnit } from '@sales/address-form-field/data-access';

export interface InitialAddress {
  addressUnit: AddressUnit;
  country: string;
  countryCode?: string;
  box?: string;
  floor?: string;
  subHouseNumber?: string;
  houseNumber: string;
  municipality: string;
  postalCode: string;
  street: string;
}
