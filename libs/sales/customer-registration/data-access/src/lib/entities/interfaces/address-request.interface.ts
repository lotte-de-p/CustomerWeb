export interface AddressRequestInterface {
  postalCode: string;
  municipality: string;
  street: string;
  streetId?: string;
  houseNumber: string;
  subHouseNumber?: string;
  boxNumber?: string;
  country?: string;
  exactAddressSearch?: boolean;
  fields?: string;
  customHeaders?: Record<string, string | string[]>;
  addressType?: string;
  tinaLocationId?: string;
  addressId?: string;
  id?: string;
  type: string;
}
