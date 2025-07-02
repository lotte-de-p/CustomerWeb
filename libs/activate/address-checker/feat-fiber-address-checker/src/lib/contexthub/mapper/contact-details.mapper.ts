import { isEmpty } from 'lodash-es';
import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import {
  RawAddressInterface,
  RawContactDetailsInterface,
  RawContactDetailsInterfaceData,
  RawContactInfoInterface,
  RawDetailInterface,
  RawIndivisualInterface,
  RawPrivacyProfileInterface,
} from '../interfaces/raw-contact-details.interface';
import {
  Address,
  ContactDetails,
  ContactInfoInterface,
  DetailInterface,
  IndividualInterface,
  PrivacyProfileInterface,
} from '../models/contact-details.model';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsMapper implements MapperInterface<RawContactDetailsInterface, ContactDetails> {
  toModel(rawContactDetails: RawContactDetailsInterface): ContactDetails {
    return this.createContactDetails(rawContactDetails);
  }

  private createContactDetails(rawContactDetails: RawContactDetailsInterface): ContactDetails {
    const contactDetails: ContactDetails = new ContactDetails();
    if (!isEmpty(rawContactDetails?.contactdetails)) {
      const rawContactDetailsData: RawContactDetailsInterfaceData = rawContactDetails.contactdetails;
      contactDetails.addresses = this.createAddresses(rawContactDetailsData.addresses);
      contactDetails.contactInfo = this.createContactInfo(rawContactDetailsData.contactinfo);
      contactDetails.privacyProfile = this.createPrivacyProfiles(rawContactDetailsData.privacyProfile);
      contactDetails.language = rawContactDetailsData.language;
      if (rawContactDetailsData.individual) {
        contactDetails.individual = this.createIndividual(rawContactDetailsData.individual);
      }
      contactDetails.class = rawContactDetailsData.class;
      contactDetails.birthDate = rawContactDetailsData.birthdate;
    }
    return contactDetails;
  }

  private createPrivacyProfiles(rawPrivacyProfiles: RawPrivacyProfileInterface[]): PrivacyProfileInterface[] {
    return rawPrivacyProfiles?.map((rawPrivacyProfile: RawPrivacyProfileInterface) =>
      this.createPrivacyProfile(rawPrivacyProfile)
    );
  }

  private createPrivacyProfile(rawPrivacyProfile: RawPrivacyProfileInterface): PrivacyProfileInterface {
    return {
      privacySettingId: rawPrivacyProfile.privacySettingId,
      isEnabled: rawPrivacyProfile.isEnabled,
      name: rawPrivacyProfile.name,
    };
  }

  private createContactInfo(rawContactInfo: RawContactInfoInterface): ContactInfoInterface {
    return {
      emails: this.createDetails(rawContactInfo?.emails),
      phones: this.createDetails(rawContactInfo?.phones),
      telephones: this.createDetails(rawContactInfo?.telephones),
      mobiles: this.createDetails(rawContactInfo?.mobiles),
      internationalPhones: this.createDetails(rawContactInfo?.internationalphones),
    };
  }

  private createDetails(rawDetails: RawDetailInterface[]): DetailInterface[] {
    return rawDetails?.map((rawDetail: RawDetailInterface) => this.createDetail(rawDetail));
  }

  private createDetail(rawDetail: RawDetailInterface): DetailInterface {
    return {
      id: rawDetail.id,
      value: rawDetail.value,
    };
  }

  private createAddresses(rawAddresses: RawAddressInterface[]): Address[] {
    return rawAddresses?.map((rawAddress: RawAddressInterface) => this.createAddress(rawAddress));
  }

  private createAddress(rawAddress: RawAddressInterface): Address {
    return {
      addressId: rawAddress.addressid,
      boxNumber: rawAddress.boxnr,
      houseNumber: rawAddress.housenr,
      subHouseNumber: rawAddress.subhousenr,
      municipality: rawAddress.municipality,
      street: rawAddress.street,
      streetId: rawAddress.streetId,
      country: rawAddress.country,
      postalCode: rawAddress.postalcode,
      floor: rawAddress.floor,
    };
  }

  private createIndividual(rawIndividual: RawIndivisualInterface): IndividualInterface {
    return {
      firstName: rawIndividual?.firstname,
      lastName: rawIndividual?.lastname,
      epithet: rawIndividual?.epithet,
    };
  }
}
