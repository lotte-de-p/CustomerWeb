export interface RawContactDetailsInterface {
  contactdetails: RawContactDetailsInterfaceData;
}

export interface RawContactDetailsInterfaceData {
  individual?: RawIndividualInterface;
  contactinfo: RawContactInfoInterface;
  language?: string;
  birthdate: string | null;
  contactid?: string;
}

export interface RawIndividualInterface {
  epithet?: string;
  firstname: string;
  lastname: string;
}

export interface RawContactInfoInterface {
  telephones?: RawDetailInterface[];
  mobiles?: RawDetailInterface[];
  emails: RawDetailInterface[];
  internationalphones?: RawDetailInterface[];
  phones: RawDetailInterface[];
}

export interface RawDetailInterface {
  id: string;
  value: string;
}
