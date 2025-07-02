import { PersonalIdentity, PersonalIdentityResponse } from '../personal-identity/personal-identity.interface';

export class PersonalIdentityUtils {
  static getPersonalIdentity(personalIdentityResponse: PersonalIdentityResponse): PersonalIdentity {
    return personalIdentityResponse.chars;
  }
}
