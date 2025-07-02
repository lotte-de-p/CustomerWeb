import { Address } from '../../../common/address/models/address.model';
import { Email, PhoneNumber } from '../interfaces/cafe-contact-details.inteface';
import { CafeContactDetailType } from '../enums/cafe-contact-detail-type';
import { OrganizationInterface, RawOrganizationInterface } from '../interfaces/organization.interface';
import { RawAddressInterface } from '../../../common/address/interfaces/raw-address.interface';

export class CafeContactDetails {
  static POSTAL_CONTACT_TYPE = 'POSTALCONTACT';
  type: CafeContactDetailType;
  language: string;
  epithet: string;
  firstName: string;
  lastName: string;
  dateofbirth?: string;
  addresses: Address[] = [];
  telephoneNumbers: PhoneNumber[] = [];
  mobilePhoneNumbers: PhoneNumber[] = [];
  emails: Email[] = [];
  internationalPhoneNumbers: PhoneNumber[] = [];
  privacySetting: number;
  rightToObjectStatus: boolean;
  organisation?: OrganizationInterface;

  isOrganization(): boolean {
    return this.type === CafeContactDetailType.ORGANIZATION;
  }
}

export class RawContactDetails {
  class: string;
  specurl: string;
  privacysetting: number;
  organization?: RawOrganizationInterface;
  individual?: RawIndividualInterface;
  language: string;
  righttoobjectstatus: boolean;
  addresses?: RawAddressInterface[];
  contactinfo?: RawContactInfoInterface;
}

export interface RawIndividualInterface {
  epithet: string;
  firstname: string;
  lastname: string;
  dateofbirth?: string;
}

export interface RawContactInfoInterface {
  telephones: PhoneNumber[];
  mobiles: PhoneNumber[];
  emails: Email[];
  internationalphones: PhoneNumber[];
}
