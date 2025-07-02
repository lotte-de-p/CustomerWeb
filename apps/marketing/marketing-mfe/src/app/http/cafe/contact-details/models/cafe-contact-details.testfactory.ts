import * as Factory from 'factory.ts';
import { Email, PhoneNumber } from '../interfaces/cafe-contact-details.inteface';
import { Address } from '../../../common/address/models/address.model';
import { CafeContactDetails } from './cafe-contact-details.model';

export const cafeContactDetailsEmailFactory = Factory.Sync.makeFactory<Email>({
  id: '1',
  value: 'test@test.com',
  purpose: 'GENERAL',
});

export const cafeContactDetailsPhoneFactory = Factory.Sync.makeFactory<PhoneNumber>({
  id: '1',
  value: '0485151522',
  purpose: 'GENERAL',
});

export class CafeContactDetailsAddressFactory {
  static build(_properties?: object): Address {
    const address = new Address();

    address.addressId = 'id';
    address.type = CafeContactDetails.POSTAL_CONTACT_TYPE;
    address.houseNumber = '1';
    address.boxNumber = 'a';
    address.subHouseNumber = '2';
    address.street = 'Liersesteenweg';
    address.streetId = 'street-id';
    address.postalCode = '2330';
    address.municipality = 'Mechelen';

    return address;
  }
}

export class CafeContactDetailsfactory {
  static build(properties?: object): CafeContactDetails {
    const cafeContactDetails = new CafeContactDetails();
    cafeContactDetails.epithet = 'MR';
    cafeContactDetails.firstName = 'Bob';
    cafeContactDetails.lastName = 'Hammond';
    cafeContactDetails.language = 'nl';
    cafeContactDetails.emails = [];
    cafeContactDetails.emails.push(cafeContactDetailsEmailFactory.build());
    cafeContactDetails.telephoneNumbers = [];
    cafeContactDetails.telephoneNumbers.push(cafeContactDetailsPhoneFactory.build());
    cafeContactDetails.mobilePhoneNumbers = [];
    cafeContactDetails.mobilePhoneNumbers.push(cafeContactDetailsPhoneFactory.build());
    cafeContactDetails.addresses.push(CafeContactDetailsAddressFactory.build());
    cafeContactDetails.dateofbirth = '1985-05-07';
    if (properties) {
      Object.keys(properties).forEach((key) => {
        cafeContactDetails[key] = properties[key];
      });
    }
    return cafeContactDetails;
  }
}
