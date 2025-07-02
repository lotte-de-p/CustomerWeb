import { ContextHubModelInterface } from '@telenet/ng-lib-page';
import { isEmpty, merge } from 'lodash-es';

export class ContactDetails implements ContextHubModelInterface<ContactDetails> {
  addresses: Address[];
  contactInfo: ContactInfoInterface;
  privacyProfile: PrivacyProfileInterface[];
  language: string;
  individual: IndividualInterface;
  class: string;
  birthDate: string;

  enrich(contactDetailsJSON: ContactDetails): ContactDetails {
    let enrichedContactDetails: ContactDetails = new ContactDetails();
    if (contactDetailsJSON) {
      enrichedContactDetails = merge(enrichedContactDetails, contactDetailsJSON);
    }
    return enrichedContactDetails;
  }

  get isSuccess(): boolean {
    return !isEmpty(this.contactInfo);
  }
}

export interface PrivacyProfileInterface {
  privacySettingId: string;
  name: string;
  isEnabled: boolean;
}

export interface Address {
  street: string;
  streetId: string;
  postalCode: string;
  municipality: string;
  country: string;
  subHouseNumber: string;
  boxNumber: string;
  houseNumber: string;
  floor: string;
  addressId: string;
}

export interface IndividualInterface {
  epithet: string;
  firstName: string;
  lastName: string;
}

export interface ContactInfoInterface {
  telephones: DetailInterface[];
  mobiles: DetailInterface[];
  emails: DetailInterface[];
  internationalPhones: DetailInterface[];
  phones: DetailInterface[];
}

export interface DetailInterface {
  id: string;
  value: string;
}
