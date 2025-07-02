import { DetailInterface } from './detail.interface';

export class UpdateContactDetails {
  firstName: string;
  lastName: string;
  birthDate: string | null;
  phones: DetailInterface[];
  emails: DetailInterface[];
  gender?: string;
  language?: string;
  referenceInformation: string;
}
