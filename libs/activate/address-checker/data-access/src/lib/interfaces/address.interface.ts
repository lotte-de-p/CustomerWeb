export interface AddressInterface {
  zipcode: string;
  subMunicipality: string;
  street: string;
  houseNumber: string;
  boxNumber?: string;
  addressGeoId: string;
  subHouseNumber?: string;
  locationId?: string;
  fiberConnectable?: boolean;
}
