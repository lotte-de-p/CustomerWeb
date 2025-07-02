export interface InstallationAddressInterface {
  id?: string;
  country: string;
  postalCode?: string;
  municipality: string;
  street: string;
  houseNumber: string;
  subHouseNumber?: string;
  box?: string;
  floor?: string;
  selected: boolean;
  isNew: boolean;
}
