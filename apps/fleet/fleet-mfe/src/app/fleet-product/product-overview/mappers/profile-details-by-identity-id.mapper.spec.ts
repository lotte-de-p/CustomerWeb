import { TestBed } from '@angular/core/testing';
import { ProfileDetailsByIdentityIDMapper } from './profile-details-by-identity-id.mapper';
import { RawProfileDetailsIdentityInterface } from '../interfaces/raw-profile-details-identity.interface';

const profileDetailsMock = {
  pid: '41106700856',
  firstname: 'Levish',
  lastname: 'Password',
  nickname: 'Manash',
  language: 'NL',
  gender: 'FEMALE',
  birthdate: '1980-08-09',
  privacysetting: 1,
  phonenumber: '0489832199',
  email: 'Reset2manager@gmail.com',
  unverifiedphonenumber: '0489832267',
  role: 'Manager',
  credential: '419589413',
  facebookLoginId: 'city@aem.com',
  googleSignInId: 'city@aem.com',
  mailboxUUID: '11-22-33',
  age: 25,
  alias: ['Reset2manager@gmail.com'],
  version: 1,
  msisdn: ['+32468137019'],
  mailboxAlias: ['test45mailalias@telenet.be', 'test45mailalias1@telenet.be'],
} as RawProfileDetailsIdentityInterface;

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

      expect(actual).toEqual('+32468137019');
    });
  });
});
