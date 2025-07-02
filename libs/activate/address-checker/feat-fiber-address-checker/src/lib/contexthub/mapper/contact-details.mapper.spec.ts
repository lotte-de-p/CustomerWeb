import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { isEmpty } from 'lodash-es';
import { ContactDetailsMapper } from './contact-details.mapper';
import { Address, ContactDetails } from '../models/contact-details.model';

const mockContactDetails = require('../../../data/contact-details.json');

describe('ContactDetailsMapper', () => {
  let contactDetailsMapper: ContactDetailsMapper;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    contactDetailsMapper = TestBed.inject(ContactDetailsMapper);
  });

  describe('toModel', () => {
    let contactDetails: ContactDetails;
    beforeEach(() => {
      contactDetails = contactDetailsMapper.toModel(mockContactDetails);
    });

    it('should correctly map the response', () => {
      expect(contactDetails.language).toBe('NL');
      expect(contactDetails.class).toBe('INDIVIDUAL');
      expect(contactDetails.birthDate).toBe('1988-02-26');
    });

    it('should correctly map the privacy profile response', () => {
      const privacyProfiles = contactDetails.privacyProfile;
      expect(privacyProfiles.length).toBe(2);
      const privacyProfile_1 = privacyProfiles[0];
      expect(privacyProfile_1.privacySettingId).toBe('9148200020213665171');
      expect(privacyProfile_1.name).toBe('1 - General');
      expect(privacyProfile_1.isEnabled).toBe(false);
      const privacyProfile_2 = privacyProfiles[1];
      expect(privacyProfile_2.privacySettingId).toBe('9148200020213665170');
      expect(privacyProfile_2.name).toBe('2 - Oriented');
      expect(privacyProfile_2.isEnabled).toBe(true);
    });

    it('should correctly map the address response', () => {
      const address: Address[] = contactDetails.addresses;
      const firstAddress: Address = address[0];

      expect(firstAddress.addressId).toBe('9153462896013523517');
      expect(firstAddress.boxNumber).toBe('5');
      expect(firstAddress.houseNumber).toBe('6');
      expect(firstAddress.subHouseNumber).toBeUndefined();
      expect(firstAddress.municipality).toBe('Mechelen');
      expect(firstAddress.street).toBe('Elektriciteitstraat');
      expect(firstAddress.streetId).toBe('9153462896013523500');
      expect(firstAddress.country).toBe('België');
      expect(firstAddress.postalCode).toBe('2800');
      expect(firstAddress.floor).toBe('2');
    });

    it('should correctly map the individual response', () => {
      const individual = contactDetails.individual;
      expect(individual.epithet).toBe('Mr.');
      expect(individual.firstName).toBe('hello');
      expect(individual.lastName).toBe('world');
    });

    it('should correctly map the contact info response', () => {
      const emails = contactDetails.contactInfo.emails;
      expect(emails.length).toBe(1);
      const email = emails[0];
      expect(email.id).toBe('9154387551713052832');
      expect(email.value).toBe('test@user.com');
      const phones = contactDetails.contactInfo.phones;
      expect(isEmpty(phones.length)).toBe(true);
      const telephones = contactDetails.contactInfo.phones;
      expect(isEmpty(telephones.length)).toBe(true);
      const mobiles = contactDetails.contactInfo.phones;
      expect(isEmpty(mobiles.length)).toBe(true);
      const internationalphones = contactDetails.contactInfo.phones;
      expect(isEmpty(internationalphones.length)).toBe(true);
    });
  });
});
