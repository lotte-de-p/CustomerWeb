import { ProfileDetails } from '../models/profile-details.model';
import { ProfileOverview } from '../models/profile.overview.model';
import { SocialLogins } from '../models/social-logins.model';
import { Authenticator, Authenticators } from '../models/authenticators.model';

export interface CustomerProfileState {
  loading: boolean;
  loadError: string | undefined;
  loadSpinner: boolean;
  profileDetails: ProfileDetails | undefined;
  profileOverview: ProfileOverview | undefined;
  socialLogins: SocialLogins | undefined;
  authenticators: Authenticators | undefined;
  selectedAuthenticator: Authenticator | undefined;
  update2faSuccessResponse: boolean | undefined;
  unenrollFactorSuccessResponse: boolean | undefined;
}

export const defaultState: CustomerProfileState = {
  loading: false,
  loadError: undefined,
  loadSpinner: false,
  profileDetails: undefined,
  profileOverview: undefined,
  socialLogins: undefined,
  authenticators: undefined,
  selectedAuthenticator: undefined,
  update2faSuccessResponse: undefined,
  unenrollFactorSuccessResponse: undefined,
};
