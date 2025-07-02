import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawProfileDetailsInterface } from '../interfaces/raw-profile-details.interface';
import { ProfileDetails } from '../models/profile-details.model';

export class ProfileDetailsMapper implements MapperInterface<RawProfileDetailsInterface, ProfileDetails> {
  toModel(rawProfileDetails: RawProfileDetailsInterface): ProfileDetails {
    return this.createProfileIdentityIDDetails(rawProfileDetails);
  }

  private createProfileIdentityIDDetails(rawProfileIdentity: RawProfileDetailsInterface): ProfileDetails {
    const profileDetails = new ProfileDetails();
    profileDetails.pid = rawProfileIdentity.pid;
    profileDetails.firstname = rawProfileIdentity.firstname;
    profileDetails.lastname = rawProfileIdentity.lastname;
    profileDetails.nickname = rawProfileIdentity.nickname;
    profileDetails.email = rawProfileIdentity.email;
    profileDetails.language = rawProfileIdentity.language;
    profileDetails.phonenumber = rawProfileIdentity.phonenumber;
    profileDetails.gender = rawProfileIdentity.gender;
    profileDetails.birthdate = rawProfileIdentity.birthdate;
    profileDetails.privacysetting = rawProfileIdentity.privacysetting;
    profileDetails.role = rawProfileIdentity.role;
    profileDetails.credential = rawProfileIdentity.credential;
    profileDetails.primarycredentialalias = rawProfileIdentity.primarycredentialalias;
    profileDetails.telenethosted = rawProfileIdentity.telenethosted;
    profileDetails.legacylogin = rawProfileIdentity.legacylogin;
    profileDetails.version = rawProfileIdentity.version;
    profileDetails.status = rawProfileIdentity.status;
    profileDetails.msisdn = rawProfileIdentity.msisdn;
    profileDetails.alias = rawProfileIdentity.alias;
    profileDetails.isInvitedProfile = false;
    profileDetails.unverifiedphonenumber = rawProfileIdentity.unverifiedphonenumber;
    profileDetails.itsMeId = rawProfileIdentity.itsMeId;
    profileDetails.mailboxUUID = rawProfileIdentity.mailboxUUID;
    profileDetails.mailboxAlias = rawProfileIdentity.mailboxAlias;
    profileDetails.transferPIDRequest = rawProfileIdentity.transferPIDRequest;
    profileDetails.age = rawProfileIdentity.age;
    profileDetails.msisdnOnly = rawProfileIdentity.msisdnOnly;

    return profileDetails;
  }
}
