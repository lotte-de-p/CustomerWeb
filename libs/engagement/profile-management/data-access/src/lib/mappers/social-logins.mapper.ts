import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawSocialLoginsInterface } from '../interfaces/raw-social-logins.interface';
import { SocialLogins } from '../models/social-logins.model';

export class SocialLoginsMapper implements MapperInterface<RawSocialLoginsInterface, SocialLogins> {
  toModel(rawSocialLogins: RawSocialLoginsInterface): SocialLogins {
    return this.createSocialLogins(rawSocialLogins);
  }

  private createSocialLogins(rawSocialLogins: RawSocialLoginsInterface): SocialLogins {
    const socialLogins = new SocialLogins();
    socialLogins.isLinkedToItsme = rawSocialLogins.isLinkedToItsme;

    return socialLogins;
  }
}
