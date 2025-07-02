export interface AddressUnit {
  addressUnitTypeId: string;
  externalId: string;
  href: string;
  id: string;
  name: string;
  nameDU?: string;
  nameFR?: string;
  type: string;
  abbreviation?: string;
  subHouseNumber?: string;
  boxNumber?: string;
  floor?: string;
  postalCode?: string;
  addressUnitChain?: AddressUnit[];
  parent?: AddressUnit;
  isManualAddress?: true;
}
