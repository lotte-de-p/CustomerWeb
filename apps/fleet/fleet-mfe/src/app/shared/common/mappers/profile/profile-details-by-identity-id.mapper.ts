import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawProfileDetailsIdentityInterface } from '../../interfaces/profile/raw-profile-details.interface';
import { ProfileDetails } from '../../models/profile/profile-details.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsByIdentityIDMapper
  implements MapperInterface<RawProfileDetailsIdentityInterface, ProfileDetails>
{
  toModel(rawProfileDetails: RawProfileDetailsIdentityInterface): ProfileDetails {
    return this.createProfileIdentityIDDetails(rawProfileDetails);
  }

  private createProfileIdentityIDDetails(rawProfileIdentity: RawProfileDetailsIdentityInterface): ProfileDetails {
    const profileIdentityDetails = new ProfileDetails();
    profileIdentityDetails.pid = rawProfileIdentity.pid;
    profileIdentityDetails.firstname = rawProfileIdentity.firstname;
    profileIdentityDetails.lastname = rawProfileIdentity.lastname;
    profileIdentityDetails.nickname = rawProfileIdentity.nickname;
    profileIdentityDetails.email = rawProfileIdentity.email;
    profileIdentityDetails.language = rawProfileIdentity.language;
    profileIdentityDetails.phonenumber = rawProfileIdentity.phonenumber;
    profileIdentityDetails.gender = rawProfileIdentity.gender;
    profileIdentityDetails.birthdate = rawProfileIdentity.birthdate;
    profileIdentityDetails.privacysetting = rawProfileIdentity.privacysetting;
    profileIdentityDetails.role = rawProfileIdentity.role;
    profileIdentityDetails.credential = rawProfileIdentity.credential;
    profileIdentityDetails.primarycredentialalias = rawProfileIdentity.primarycredentialalias;
    profileIdentityDetails.telenethosted = rawProfileIdentity.telenethosted;
    profileIdentityDetails.legacylogin = rawProfileIdentity.legacylogin;
    profileIdentityDetails.version = rawProfileIdentity.version;
    profileIdentityDetails.status = rawProfileIdentity.status;
    profileIdentityDetails.msisdn = rawProfileIdentity.msisdn;
    profileIdentityDetails.alias = rawProfileIdentity.alias;
    profileIdentityDetails.isInvitedProfile = false;
    profileIdentityDetails.unverifiedphonenumber = rawProfileIdentity.unverifiedphonenumber;
    profileIdentityDetails.itsMeId = rawProfileIdentity.itsMeId;
    profileIdentityDetails.facebookLoginId = rawProfileIdentity.facebookLoginId;
    profileIdentityDetails.googleSignInId = rawProfileIdentity.googleSignInId;
    profileIdentityDetails.mailboxUUID = rawProfileIdentity.mailboxUUID;
    profileIdentityDetails.mailboxAlias = rawProfileIdentity.mailboxAlias;
    profileIdentityDetails.transferPIDRequest = rawProfileIdentity.transferPIDRequest;
    profileIdentityDetails.age = rawProfileIdentity.age;

    return profileIdentityDetails;
  }
}
