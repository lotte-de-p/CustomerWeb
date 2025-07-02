import { Injectable } from '@angular/core';
import {
  RawContactDetailsInterfaceData,
  RawContactInfoInterface,
  RawIndividualInterface,
} from '../../interfaces/contact/raw-contact-details.interface';
import { ContactDetails, ContactInfoInterface, IndividualInterface } from '../../models/contact/contact-details.model';
import { MapperInterface } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class LineContactDetailsMapper implements MapperInterface<RawContactDetailsInterfaceData, ContactDetails> {
  toModel(rawContactDetails: RawContactDetailsInterfaceData): ContactDetails {
    return this.createContactDetails(rawContactDetails);
  }

  private createContactDetails(rawContact: RawContactDetailsInterfaceData): ContactDetails {
    const contactDetails = new ContactDetails();
    const contactInfo = rawContact.contactinfo;
    const individual = rawContact.individual;

    contactDetails.contactId = rawContact.contactid;
    contactDetails.language = rawContact.language;
    contactDetails.birthDate = rawContact.birthdate;

    if (individual) {
      contactDetails.individual = this.createIndividual(individual);
    }

    if (contactInfo) {
      contactDetails.contactInfo = this.createContactInfo(contactInfo);
    }

    return contactDetails;
  }

  private createIndividual(rawIndividual: RawIndividualInterface): IndividualInterface {
    const individual = {} as IndividualInterface;

    individual.firstName = rawIndividual.firstname;
    individual.lastName = rawIndividual.lastname;
    individual.epithet = rawIndividual.epithet;

    return individual;
  }

  private createContactInfo(rawContactInfo: RawContactInfoInterface): ContactInfoInterface {
    const contactInfo = {} as ContactInfoInterface;

    contactInfo.phones = rawContactInfo.phones;
    contactInfo.emails = rawContactInfo.emails;

    return contactInfo;
  }
}
