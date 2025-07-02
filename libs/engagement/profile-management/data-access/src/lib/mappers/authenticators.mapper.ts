import { MapperInterface } from '@telenet/ng-lib-shared';
import {
  RawAuthenticatorInterface,
  RawAuthenticatorsInterface,
  RawFactorInterface,
} from '../interfaces/raw-authenticators.interface';
import { Authenticator, Authenticators, Factor } from '../models/authenticators.model';

export class AuthenticatorsMapper implements MapperInterface<RawAuthenticatorsInterface, Authenticators> {
  toModel(rawAuthenticators: RawAuthenticatorsInterface): Authenticators {
    const auths = rawAuthenticators.authenticators.map((rawAuthenticator: RawAuthenticatorInterface) =>
      this.createAuthenticator(rawAuthenticator)
    );

    return {
      authenticators: auths,
      '2fa': rawAuthenticators?.['2fa'],
    };
  }

  private createAuthenticator(rawAuthenticator: RawAuthenticatorInterface): Authenticator {
    const { type, enabled, details } = rawAuthenticator;

    return {
      type,
      enabled,
      enrollmentLink: details?.enrollmentLink || null,
      factors: details?.factors?.map(this.createFactor) || null,
    };
  }

  private createFactor(rawFactor: RawFactorInterface): Factor {
    return {
      id: rawFactor.id,
    };
  }
}
