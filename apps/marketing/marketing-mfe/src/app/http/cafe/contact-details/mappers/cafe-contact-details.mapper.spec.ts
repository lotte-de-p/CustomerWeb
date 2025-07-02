import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { CafeContactDetailsMapper } from './cafe-contact-details.mapper';
import { AddressMapper } from '../../../common/address/mappers/address.mapper';
import { CafeContactDetailType } from '../enums/cafe-contact-detail-type';
import { RawContactDetails } from '../models/cafe-contact-details.model';

const telId = 'rzdzgn009w-9zullr0072';
const emailTestArray = [
  {
    id: 'email-id-123',
    value: 'telemeter@telenet.be',
    purpose: 'TELEMETER',
  },
  {
    id: 'email-id-456',
    value: 'general@telenet.be',
    purpose: 'GENERAL',
  },
  {
    id: 'email-id-789',
    value: 'ebill@telenet.be',
    purpose: 'EBILL',
  },
];
describe('CafeContactDetailsMapper', () => {
  let cafeContactDetailsMapper: CafeContactDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressMapper],
    });

    cafeContactDetailsMapper = TestBed.inject(CafeContactDetailsMapper);
  });

  describe('toModel', () => {
    it('should correctly map the response', function () {
      const actual = cafeContactDetailsMapper.toModel(getRawContactDetails());

      expect(actual.type).toBe(CafeContactDetailType.INDIVIDUAL);
      expect(actual.firstName).toBe('Jeroen');
      expect(actual.lastName).toBe('Verheyen');
      expect(actual.language).toBe('nl');
      expect(actual.telephoneNumbers).toEqual([
        {
          id: telId,
          value: '03302212',
          purpose: 'GENERAL',
        },
      ]);
      expect(actual.mobilePhoneNumbers).toEqual([
        {
          id: 'mobile-1',
          value: '0499123456',
          purpose: 'GENERAL',
        },
        { id: 'mobile-2', value: '0498123456', purpose: 'EBILL' },
      ]);
      expect(actual.emails).toEqual(emailTestArray);
      expect(actual.internationalPhoneNumbers).toEqual([
        {
          id: 'int-tel-1',
          value: '03123456',
          purpose: 'GENERAL',
        },
      ]);
      expect(actual.addresses.length).toBe(1);
    });

    it('should correctly map the response for organizations', function () {
      const actual = cafeContactDetailsMapper.toModel(getRawOrganizationContactDetails());
      expect(actual.type).toBe(CafeContactDetailType.ORGANIZATION);
      expect(actual?.organisation?.customerNumber).toBe('5');
      expect(actual?.organisation?.companyName).toBe('Tesla');
      expect(actual?.organisation?.vatNumber).toBe('BE0661.867.622');
      expect(actual?.organisation?.legalForm).toBe('BV');
    });

    it('should return an empty object if the response is undefined', function () {
      const actual = cafeContactDetailsMapper.toModel(undefined);
      Object.keys(actual).forEach((key: string) => {
        if (Array.isArray(actual[key])) {
          expect(actual[key].length).toBe(0);
        } else {
          expect(actual[key]).toBe(undefined);
        }
      });
    });
  });

  function getRawContactDetails(): { contactdetails: RawContactDetails } {
    return {
      contactdetails: {
        class: 'INDIVIDUAL',
        language: 'NL',
        individual: {
          epithet: 'MR',
          firstname: 'Jeroen',
          lastname: 'Verheyen',
        },
        addresses: [
          {
            street: 'Liersesteenweg',
            postalcode: '2800',
            municipality: 'Mechelen',
            country: 'België',
            housenr: '4',
            addressid: '123456',
            addresstype: 'POSTALCONTACT',
          },
        ],
        contactinfo: {
          telephones: [
            {
              id: telId,
              value: '03302212',
              purpose: 'GENERAL',
            },
          ],
          mobiles: [
            {
              id: 'mobile-1',
              value: '0499123456',
              purpose: 'GENERAL',
            },
            {
              id: 'mobile-2',
              value: '0498123456',
              purpose: 'EBILL',
            },
          ],
          emails: emailTestArray,
          internationalphones: [
            {
              id: 'int-tel-1',
              value: '03123456',
              purpose: 'GENERAL',
            },
          ],
        },
        specurl: 'https://api.prd.telenet.be/omapi/public/rules/contact/',
        privacysetting: 1,
        righttoobjectstatus: false,
      } as RawContactDetails,
    };
  }

  function getRawOrganizationContactDetails(): { contactdetails: RawContactDetails } {
    return {
      contactdetails: {
        class: 'ORGANIZATION',
        organization: {
          name: 'Tesla',
          customernumber: '5',
          type: 'BV',
          vat: 'BE0661.867.622',
        },
        language: 'NL',
        addresses: [
          {
            street: 'Liersesteenweg',
            postalcode: '2800',
            municipality: 'Mechelen',
            country: 'België',
            housenr: '4',
            addressid: '123456',
            addresstype: 'POSTALCONTACT',
          },
        ],
        contactinfo: {
          telephones: [
            {
              id: telId,
              value: '03302212',
              purpose: 'GENERAL',
            },
          ],
          mobiles: [
            {
              id: 'mobile-1',
              value: '0499123456',
              purpose: 'GENERAL',
            },
            {
              id: 'mobile-2',
              value: '0498123456',
              purpose: 'EBILL',
            },
          ],
          emails: emailTestArray,
          internationalphones: [
            {
              id: 'int-tel-1',
              value: '03123456',
              purpose: 'GENERAL',
            },
          ],
        },
        specurl: 'https://api.prd.telenet.be/omapi/public/rules/contact/',
        privacysetting: 1,
        righttoobjectstatus: false,
      },
    };
  }

  afterEach(() => {
    cleanStylesFromDom();
  });
});
