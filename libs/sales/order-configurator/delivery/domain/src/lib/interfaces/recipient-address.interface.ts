export interface AddressUnit {
  addressUnitTypeId: string;
  externalId: string;
  href: string;
  id: string;
  name: string;
  nameDU?: string;
  type: string;
  abbreviation?: string;
  subHouseNumber?: string;
  boxNumber?: string;
  floor?: string;
  postalCode?: string;
  addressUnitChain?: AddressUnit[];
  parent?: AddressUnit;
}

export interface RecipientAddress {
  addressUnit: AddressUnit;
  country: string;
  countryCode?: string;
  box?: string;
  subHouseNumber?: string;
  houseNumber: string;
  municipality: string;
  postalCode: string;
  street: string;
}
