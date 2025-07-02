import { DetailInterface } from '../../interfaces/contact/detail.interface';

export class ContactDetails {
  contactId?: string;
  contactInfo: ContactInfoInterface;
  individual: IndividualInterface;
  birthDate: string | null;
  language?: string;
}

export interface IndividualInterface {
  firstName?: string;
  lastName?: string;
  epithet?: string;
}

export interface ContactInfoInterface {
  emails: DetailInterface[];
  phones: DetailInterface[];
}
