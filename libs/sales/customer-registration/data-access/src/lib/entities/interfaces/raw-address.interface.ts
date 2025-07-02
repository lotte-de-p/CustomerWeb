export interface RawAddressInterface {
  id?: string;
  addressid?: string;
  type?: string;
  addresstype?: string;
  housenr?: string;
  houseNumber?: string;
  boxnr?: string;
  boxNumber?: string;
  subhousenr?: string;
  subHouseNumber?: string;
  postalcode?: string;
  postalCode?: string;
  floor?: string;
  floorNumber?: string;
  countrycode?: string;
  countryCode?: string;
  municipality: string;
  street: string;
  streetId?: string;
  country: string;
  tinaLocationId?: string;
  address?: RawAddressInterface[];
}
