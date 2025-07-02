export interface RawContactDetailsInterface {
  contactdetails: RawContactDetailsInterfaceData;
}

export interface RawContactDetailsInterfaceData {
  class: string;
  language: string;
  individual?: RawIndivisualInterface;
  addresses: RawAddressInterface[];
  contactinfo: RawContactInfoInterface;
  birthdate: string;
  privacyProfile: RawPrivacyProfileInterface[];
  contactid?: string;
}

export interface RawPrivacyProfileInterface {
  privacySettingId: string;
  name: string;
  isEnabled: boolean;
}

export interface RawAddressInterface {
  street: string;
  streetId: string;
  postalcode: string;
  municipality: string;
  country: string;
  subhousenr: string;
  boxnr: string;
  housenr: string;
  floor: string;
  addressid: string;
}

export interface RawIndivisualInterface {
  epithet: string;
  firstname: string;
  lastname: string;
}

export interface RawContactInfoInterface {
  telephones: RawDetailInterface[];
  mobiles: RawDetailInterface[];
  emails: RawDetailInterface[];
  internationalphones: RawDetailInterface[];
  phones: RawDetailInterface[];
}

export interface RawDetailInterface {
  id: string;
  value: string;
}
