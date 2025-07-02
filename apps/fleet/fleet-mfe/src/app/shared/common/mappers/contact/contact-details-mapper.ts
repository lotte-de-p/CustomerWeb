import { MapperInterface } from '@telenet/ng-lib-shared';
import {
  RawContactDetailsInterface,
  RawContactDetailsInterfaceData,
  RawContactInfoInterface,
  RawDetailInterface,
  RawIndividualInterface,
} from '../../interfaces/contact/raw-contact-details.interface';
import { ContactDetails, ContactInfoInterface, IndividualInterface } from '../../models/contact/contact-details.model';
import { isEmpty } from 'lodash-es';
import { Injectable } from '@angular/core';
import { DetailInterface } from '../../interfaces/contact/detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsMapper implements MapperInterface<RawContactDetailsInterface, ContactDetails> {
  toModel(rawContactDetails: RawContactDetailsInterface): ContactDetails {
    return this.createContactDetails(rawContactDetails);
  }

  private createContactDetails(rawContactDetails: RawContactDetailsInterface): ContactDetails {
    const contactDetails = new ContactDetails();
    if (!isEmpty(rawContactDetails) && !isEmpty(rawContactDetails.contactdetails)) {
      const rawContactDetailsData: RawContactDetailsInterfaceData = rawContactDetails.contactdetails;
      contactDetails.contactInfo = this.createContactInfo(rawContactDetailsData.contactinfo);
      contactDetails.language = rawContactDetailsData.language;
      contactDetails.individual = this.createIndividual(rawContactDetailsData.individual);
      contactDetails.birthDate = rawContactDetailsData.birthdate;
    }
    return contactDetails;
  }

  private createIndividual(rawIndividual?: RawIndividualInterface): IndividualInterface {
    const individual = {} as IndividualInterface;
    individual.firstName = rawIndividual?.firstname;
    individual.lastName = rawIndividual?.lastname;
    individual.epithet = rawIndividual?.epithet;
    return individual;
  }

  private createContactInfo(rawContactinfo: RawContactInfoInterface): ContactInfoInterface {
    const contactInfo = {} as ContactInfoInterface;

    if (rawContactinfo) {
      contactInfo.emails = this.createDetails(rawContactinfo.emails);
      contactInfo.phones = this.createDetails(rawContactinfo.phones);
    }

    return contactInfo;
  }
  private createDetails(rawDetails: RawDetailInterface[]): DetailInterface[] {
    return (
      rawDetails &&
      rawDetails.map((rawDetail) => {
        return this.createDetail(rawDetail);
      })
    );
  }
  private createDetail(rawDetail: RawDetailInterface): DetailInterface {
    const detail = {} as DetailInterface;
    detail.id = rawDetail.id;
    detail.value = rawDetail.value;
    return detail;
  }
}
