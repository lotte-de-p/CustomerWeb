import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { SocialLogins } from '../models/social-logins.model';
import { SocialLoginsMapper } from './social-logins.mapper';

const socialLoginsMock = new SocialLogins();

describe('SocialLoginsMapper', () => {
  let socialLoginsMapper: SocialLoginsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialLoginsMapper, { provide: 'Window', useValue: {} }],
    });
    socialLoginsMapper = TestBed.inject(SocialLoginsMapper);
  });

  describe('toModel', () => {
    it('should map social logins obtained from api', () => {
      socialLoginsMock.isLinkedToItsme = true;

      const actual = socialLoginsMapper.toModel(socialLoginsMock);

      expect(actual.isLinkedToItsme).toEqual(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
