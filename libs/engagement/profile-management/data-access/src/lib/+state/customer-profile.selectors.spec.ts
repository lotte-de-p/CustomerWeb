import { CustomerProfileState } from './customer-profile.state';
import { ProfileDetails } from '../models/profile-details.model';
import { ProfileOverview } from '../models/profile.overview.model';
import {
  selectAuthenticators,
  selectProfileDetails,
  selectProfileOverview,
  selectSocialLogins,
  selectUnenrollFactorSuccessResponse,
  selectUpdate2faSuccessResponse,
} from './customer-profile.selectors';

describe('Customer Profile Selectors', () => {
  const profileDetails = new ProfileDetails();
  profileDetails.pid = '12345';

  const profileOverview = new ProfileOverview();
  profileOverview.firstName = 'John';

  const mockState: CustomerProfileState = {
    loading: false,
    loadError: undefined,
    loadSpinner: false,
    profileDetails: profileDetails,
    profileOverview: profileOverview,
    socialLogins: { isLinkedToItsme: true },
    authenticators: { authenticators: [{ type: 'itsme', enabled: true }], ['2fa']: { enabled: false } },
    selectedAuthenticator: undefined,
    update2faSuccessResponse: false,
    unenrollFactorSuccessResponse: false,
  };

  it('should select profile details', () => {
    const selected = selectProfileDetails.projector(mockState);
    expect(selected).toEqual(mockState.profileDetails);
  });

  it('should select profile overview', () => {
    const selected = selectProfileOverview.projector(mockState);
    expect(selected).toEqual(mockState.profileOverview);
  });

  it('should select social logins', () => {
    const selected = selectSocialLogins.projector(mockState);
    expect(selected).toEqual(mockState.socialLogins);
  });

  it('should select authenticators', () => {
    const selected = selectAuthenticators.projector(mockState);
    expect(selected).toEqual(mockState.authenticators);
  });

  it('should select update2faSuccessResponse', () => {
    const selected = selectUpdate2faSuccessResponse.projector(mockState);
    expect(selected).toEqual(mockState.update2faSuccessResponse);
  });

  it('should select unenrollFactorSuccessResponse', () => {
    const selected = selectUnenrollFactorSuccessResponse.projector(mockState);
    expect(selected).toEqual(mockState.unenrollFactorSuccessResponse);
  });
});
