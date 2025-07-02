import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { ProfileDetails } from '../../models/profile/profile-details.model';
import {
  RawProfileDetailsIdentityInterface,
  RawProfileDetailsInterface,
} from '../../interfaces/profile/raw-profile-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsMapper implements MapperInterface<RawProfileDetailsInterface, ProfileDetails[]> {
  toModel(rawProfiles: RawProfileDetailsInterface): ProfileDetails[] {
    const profiles = [];
    if (rawProfiles.profiledetails) {
      rawProfiles.profiledetails.forEach((rawProfileIdentity) => {
        profiles.push(this.createProfileIdentityDetails(rawProfileIdentity));
      });
      return profiles;
    }
  }

  private createProfileIdentityDetails(rawProfileIdentity: RawProfileDetailsIdentityInterface): ProfileDetails {
    const profileIdentityDetails = new ProfileDetails();
    profileIdentityDetails.pid = rawProfileIdentity.pid;
    profileIdentityDetails.firstname = rawProfileIdentity.firstname;
    profileIdentityDetails.lastname = rawProfileIdentity.lastname;
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
    profileIdentityDetails.mailboxUUID = rawProfileIdentity.mailboxUUID;
    profileIdentityDetails.isInvitedProfile = false;
    profileIdentityDetails.transferPIDRequest = rawProfileIdentity.transferPIDRequest;
    profileIdentityDetails.contactid = rawProfileIdentity.contactid;
    return profileIdentityDetails;
  }
}
