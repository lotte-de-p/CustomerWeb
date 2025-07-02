import { MapperInterface } from '@telenet/ng-lib-shared';
import { FleetProfile } from '../../interfaces/profile/fleet-profile.interface';
import { RawFleetProfile } from '../../interfaces/profile/raw-fleet-profile.interface';

export class FleetProfileMapper implements MapperInterface<RawFleetProfile, FleetProfile> {
  toModel(response: RawFleetProfile): FleetProfile {
    if (!response) {
      return undefined;
    }
    return this.createProfileDetails(response);
  }

  createProfileDetails(rawProfileDetails: RawFleetProfile): FleetProfile {
    const profile = {} as FleetProfile;

    profile.firstname = rawProfileDetails.firstName;
    profile.lastname = rawProfileDetails.lastName;
    profile.birthdate = rawProfileDetails.birthDate;
    profile.language = rawProfileDetails.language;
    profile.gender = rawProfileDetails.gender;
    profile.email = rawProfileDetails.email;
    profile.phonenumber = rawProfileDetails.phone;
    profile.employeeCustomerNumber = rawProfileDetails.employeeCustomerNumber;
    profile.status = rawProfileDetails.status;
    profile.success = true;
    profile.identityid = rawProfileDetails.identityid;

    return profile;
  }
}
