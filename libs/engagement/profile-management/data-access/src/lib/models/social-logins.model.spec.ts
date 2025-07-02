import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SocialLogins } from './social-logins.model';

describe('SocialLogins', () => {
  let socialLogins: SocialLogins;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],
    });

    socialLogins = new SocialLogins();
  });

  describe('getSocialLogins', () => {
    it('should return the social logins object', () => {
      socialLogins.isLinkedToItsme = true;
      const actual = socialLogins;
      expect(actual.isLinkedToItsme).toBe(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
