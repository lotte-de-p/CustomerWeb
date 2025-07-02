import { customerProfileReducer } from './customer-profile.reducer';
import {
  getAuthenticators,
  getAuthenticatorsErrorAction,
  getAuthenticatorsSuccessAction,
  getProfileDetails,
  getProfileDetailsErrorAction,
  getProfileDetailsSuccessAction,
  getProfileOverview,
  getProfileOverviewErrorAction,
  getProfileOverviewSuccessAction,
  getSocialLogins,
  getSocialLoginsErrorAction,
  getSocialLoginsSuccessAction,
  unenrollFactor,
  unenrollFactorErrorAction,
  unenrollFactorSuccessAction,
  update2faStatus,
  update2faStatusErrorAction,
  update2faStatusSuccessAction,
} from './customer-profile.actions';
import { ProfileDetails } from '../models/profile-details.model';
import { ProfileOverview } from '../models/profile.overview.model';
import { SocialLogins } from '../models/social-logins.model';

describe('customer-profile reducer', () => {
  const initialState = {
    loading: true,
    loadError: undefined,
    loadSpinner: false,
    profileDetails: undefined,
    profileOverview: undefined,
    profilePicture: '',
    socialLogins: undefined,
    authenticators: undefined,
    selectedAuthenticator: undefined,
    update2faSuccessResponse: false,
    unenrollFactorSuccessResponse: false,
  };

  const error = new Error('Error');

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = customerProfileReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('get profileOverview actions', () => {
    it('on getProfileOverview', () => {
      const params = { identityId: '12345' };
      const action = getProfileOverview(params);
      const state = customerProfileReducer(initialState, action);

      expect(state.profileOverview).toEqual(undefined);
    });

    it('on getProfileOverviewSuccessAction', () => {
      const profileOverview = new ProfileOverview();
      profileOverview.customerNumber = '12345';
      const action = getProfileOverviewSuccessAction({ profileOverview: profileOverview });
      const state = customerProfileReducer(initialState, action);

      expect(state.profileOverview).toEqual(action.profileOverview);
      expect(state.profileOverview?.customerNumber).toEqual('12345');
      expect(state.loading).toEqual(false);
    });

    it('on getProfileOverviewErrorAction', () => {
      const action = getProfileOverviewErrorAction({ error: 'error' });
      const state = customerProfileReducer(initialState, action);
      expect(state.profileOverview).toEqual(undefined);
      expect(state.loadError).toBe('error');
    });
  });

  describe('get profileDetails actions', () => {
    it('on getProfileDetails', () => {
      const params = { identityId: '12345', pidTransferRequest: false };
      const action = getProfileDetails(params);
      const state = customerProfileReducer(initialState, action);

      expect(state.profileDetails).toEqual(undefined);
    });

    it('on getProfileDetailsSuccessAction', () => {
      const profileDetails = new ProfileDetails();
      profileDetails.pid = '12345';
      const action = getProfileDetailsSuccessAction({ profileDetails });
      const state = customerProfileReducer(initialState, action);

      expect(state.profileDetails).toEqual(action.profileDetails);
      expect(state.profileDetails?.pid).toEqual('12345');
      expect(state.loading).toEqual(false);
    });

    it('on getProfileDetailsErrorAction', () => {
      const action = getProfileDetailsErrorAction({ error: error });
      const state = customerProfileReducer(initialState, action);
      expect(state.profileDetails).toEqual(undefined);
    });
  });

  describe('get socialLogins actions', () => {
    it('on getSocialLogins', () => {
      const action = getSocialLogins();
      const state = customerProfileReducer(initialState, action);

      expect(state.socialLogins).toEqual(undefined);
    });

    it('on getSocialLoginsSuccessAction', () => {
      const socialLogins = new SocialLogins();
      socialLogins.isLinkedToItsme = true;
      const action = getSocialLoginsSuccessAction({ socialLogins });
      const state = customerProfileReducer(initialState, action);

      expect(state.socialLogins).toEqual(action.socialLogins);
      expect(state.socialLogins?.isLinkedToItsme).toEqual(true);
      expect(state.loading).toEqual(false);
    });

    it('on getSocialLoginsErrorAction', () => {
      const action = getSocialLoginsErrorAction({ error: error });
      const state = customerProfileReducer(initialState, action);
      expect(state.socialLogins).toEqual(undefined);
    });
  });

  describe('get authenticators actions', () => {
    it('on getAuthenticators', () => {
      const action = getAuthenticators();
      const state = customerProfileReducer(initialState, action);

      expect(state.authenticators?.authenticators).toEqual(undefined);
    });

    it('on getAuthenticatorsSuccessAction', () => {
      const authenticators = { authenticators: [{ type: 'itsme', enabled: true }], ['2fa']: { enabled: false } };
      authenticators.authenticators[0].type = 'itsme';
      authenticators.authenticators[0].enabled = true;
      const action = getAuthenticatorsSuccessAction({ authenticators });
      const state = customerProfileReducer(initialState, action);

      expect(state.authenticators).toEqual(action.authenticators);
      expect(state.authenticators?.authenticators[0].type).toEqual('itsme');
      expect(state.authenticators?.authenticators[0].enabled).toEqual(true);
    });

    it('on getAuthenticatorsErrorAction', () => {
      const action = getAuthenticatorsErrorAction({ error: 'error' });
      const state = customerProfileReducer(initialState, action);
      expect(state.authenticators?.authenticators).toEqual(undefined);
    });
  });

  describe('update2faStatus actions', () => {
    it('on update2faStatus', () => {
      const action = update2faStatus({ payload: true });
      const state = customerProfileReducer(initialState, action);

      expect(state.update2faSuccessResponse).toEqual(false);
    });

    it('on update2faStatusSuccessAction', () => {
      const successResponse = true;
      const action = update2faStatusSuccessAction({ successResponse: true });
      const state = customerProfileReducer(initialState, action);

      expect(state.update2faSuccessResponse).toEqual(successResponse);
    });

    it('on update2faStatusErrorAction', () => {
      const action = update2faStatusErrorAction({ error: 'error' });
      const state = customerProfileReducer(initialState, action);
      expect(state.update2faSuccessResponse).toEqual(false);
    });
  });

  describe('unenrollFactor actions', () => {
    it('on unenrollFactor', () => {
      const action = unenrollFactor({ factor: { type: 'itsme', id: 'abc123' } });
      const state = customerProfileReducer(initialState, action);

      expect(state.unenrollFactorSuccessResponse).toEqual(false);
    });

    it('on unenrollFactorSuccessAction', () => {
      const successResponse = true;
      const action = unenrollFactorSuccessAction({ successResponse: true });
      const state = customerProfileReducer(initialState, action);

      expect(state.unenrollFactorSuccessResponse).toEqual(successResponse);
    });

    it('on unenrollFactorErrorAction', () => {
      const action = unenrollFactorErrorAction({ error: 'error' });
      const state = customerProfileReducer(initialState, action);
      expect(state.unenrollFactorSuccessResponse).toEqual(false);
    });
  });
});
