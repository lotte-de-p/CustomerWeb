import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawProfileDetailsIdentityInterface } from '../interfaces/raw-profile-details-identity.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsByIdentityIDMapper implements MapperInterface<RawProfileDetailsIdentityInterface, string> {
  toModel(rawProfileDetails: RawProfileDetailsIdentityInterface): string {
    return rawProfileDetails.msisdn?.[0];
  }
}
