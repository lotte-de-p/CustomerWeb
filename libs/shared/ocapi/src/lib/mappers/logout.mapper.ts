import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { LogoutDetails } from '../models';
import { RawLogOutDetailsInterface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LogoutMapper implements MapperInterface<RawLogOutDetailsInterface, LogoutDetails> {
  toModel(rawLogoutResponse: RawLogOutDetailsInterface): LogoutDetails {
    const logoutDetails: LogoutDetails = new LogoutDetails();

    logoutDetails.logout_redirect_uri = rawLogoutResponse.logout_redirect_uri;
    return logoutDetails;
  }
}
