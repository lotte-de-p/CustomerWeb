import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { ProfileDetailsByIdentityIDMapper } from './profile-details-by-identity-id.mapper';

const profileDetailsMock = require('../../../../../../../../../fixtures/http/netcracker/customer/profile-details-by-identity-id.json');

describe('ProfileDetailsByIdentityIDMapper', () => {
  let profileDetailsByIdentityIDMapper: ProfileDetailsByIdentityIDMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    profileDetailsByIdentityIDMapper = TestBed.inject(ProfileDetailsByIdentityIDMapper);
  });

  describe('toModel', () => {
    it('should map profile details obtained from identities api', () => {
      const actual = profileDetailsByIdentityIDMapper.toModel(profileDetailsMock);

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
      expect(actual.itsMeId).toEqual('city@aem.com');
      expect(actual.facebookLoginId).toEqual('city@aem.com');
      expect(actual.googleSignInId).toEqual('city@aem.com');
      expect(actual.mailboxUUID).toEqual('11-22-33');
      expect(actual.mailboxAlias[0]).toEqual('test45mailalias@telenet.be');
      expect(actual.transferPIDRequest.id).toEqual('9195');
      expect(actual.transferPIDRequest.currenthouseholdName).toEqual('Mr. current TestLname');
      expect(actual.transferPIDRequest.targethouseholdName).toEqual('Mr. target TestLname');
      expect(actual.age).toEqual(25);
      expect(actual.transferPIDRequest.consentApproval[0].identityId).toEqual('41111878443');
      expect(actual.transferPIDRequest.consentApproval[0].status).toEqual('pending');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
