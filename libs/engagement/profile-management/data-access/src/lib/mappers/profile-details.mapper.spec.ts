import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { ProfileDetailsMapper } from './profile-details.mapper';

const profileDetailsMock = require('../mocks/profile-details-by-identity-id.json');

describe('ProfileDetailsByIdentityIDMapper', () => {
  let profileDetailsMapper: ProfileDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDetailsMapper, { provide: 'Window', useValue: {} }],
    });
    profileDetailsMapper = TestBed.inject(ProfileDetailsMapper);
  });

  describe('toModel', () => {
    it('should map profile details obtained from identities api', () => {
      const actual = profileDetailsMapper.toModel(profileDetailsMock);
      const CITY_AEM = 'city@aem.com';

      expect(actual.pid).toEqual('41106700856');
      expect(actual.firstname).toEqual('Levish');
      expect(actual.lastname).toEqual('Password');
      expect(actual.email).toEqual('Reset2manager@gmail.com');
      expect(actual.language).toEqual('NL');
      expect(actual.phonenumber).toEqual('0489832199');
      expect(actual.gender).toEqual('FEMALE');
      expect(actual.birthdate).toEqual('1980-08-09');
      expect(actual.privacysetting).toEqual(1);
      expect(actual.role).toEqual('Manager');
      expect(actual.credential).toEqual('419589413');
      expect(actual.version).toEqual(1);
      expect(actual.msisdn).toEqual(['+32468137019']);
      expect(actual.alias).toEqual(['Reset2manager@gmail.com']);
      expect(actual.itsMeId).toEqual(CITY_AEM);
      expect(actual.mailboxUUID).toEqual('11-22-33');
      if (actual.mailboxAlias) {
        expect(actual.mailboxAlias[0]).toEqual('test45mailalias@telenet.be');
      }
      if (actual.transferPIDRequest) {
        expect(actual.transferPIDRequest.id).toEqual('9195');
        expect(actual.transferPIDRequest.currenthouseholdName).toEqual('Mr. current TestLname');
        expect(actual.transferPIDRequest.targethouseholdName).toEqual('Mr. target TestLname');
        if (actual.transferPIDRequest.consentApproval) {
          expect(actual.transferPIDRequest.consentApproval[0].identityId).toEqual('41111878443');
          expect(actual.transferPIDRequest.consentApproval[0].status).toEqual('pending');
        }
      }
      expect(actual.age).toEqual(25);
      expect(actual.msisdnOnly).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
