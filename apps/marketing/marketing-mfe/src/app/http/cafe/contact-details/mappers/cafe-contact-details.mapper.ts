import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { CafeContactDetails, RawContactDetails } from '../models/cafe-contact-details.model';
import { AddressMapper } from '../../../common/address/mappers/address.mapper';
import { CafeContactDetailType } from '../enums/cafe-contact-detail-type';
import { RawAddressInterface } from '../../../common/address/interfaces/raw-address.interface';

@Injectable({
  providedIn: 'root',
})
export class CafeContactDetailsMapper
  implements MapperInterface<{ contactdetails: RawContactDetails }, CafeContactDetails>
{
  constructor(private readonly addressMapper: AddressMapper) {}

  toModel(response?: { contactdetails: RawContactDetails }) {
    const contactDetails = new CafeContactDetails();

    if (response === undefined || response.contactdetails === undefined) {
      return contactDetails;
    }
    const rawContactDetails = response.contactdetails;
    switch (rawContactDetails.class) {
      case 'ORGANIZATION':
        contactDetails.type = CafeContactDetailType.ORGANIZATION;
        break;
      case 'INDIVIDUAL':
        contactDetails.type = CafeContactDetailType.INDIVIDUAL;
        break;
      default:
        contactDetails.type = CafeContactDetailType.INDIVIDUAL;
        break;
    }

    const organization = rawContactDetails.organization;
    if (organization) {
      contactDetails.firstName = organization.name;
      contactDetails.lastName = '';
      contactDetails.organisation = {
        companyName: organization.name,
        customerNumber: organization.customernumber,
        legalForm: organization.type,
        vatNumber: organization.vat,
      };
    } else {
      contactDetails.epithet = rawContactDetails?.individual?.epithet ?? '';
      contactDetails.firstName = rawContactDetails?.individual?.firstname ?? '';
      contactDetails.lastName = rawContactDetails?.individual?.lastname ?? '';
      contactDetails.dateofbirth = rawContactDetails?.individual?.dateofbirth;
    }
    contactDetails.language = rawContactDetails.language.toLowerCase();

    if (rawContactDetails.contactinfo) {
      contactDetails.telephoneNumbers = rawContactDetails.contactinfo.telephones;
      contactDetails.mobilePhoneNumbers = rawContactDetails.contactinfo.mobiles;
      contactDetails.emails = rawContactDetails.contactinfo.emails;
      contactDetails.internationalPhoneNumbers = rawContactDetails.contactinfo.internationalphones;
    }
    contactDetails.privacySetting = rawContactDetails.privacysetting;
    contactDetails.rightToObjectStatus = rawContactDetails.righttoobjectstatus;

    this.setAddresses(contactDetails, rawContactDetails?.addresses);

    return contactDetails;
  }

  private setAddresses(contactDetails: CafeContactDetails, rawAddresses?: RawAddressInterface | RawAddressInterface[]) {
    if (rawAddresses) contactDetails.addresses = this.addressMapper.toModel(rawAddresses);
  }
}
