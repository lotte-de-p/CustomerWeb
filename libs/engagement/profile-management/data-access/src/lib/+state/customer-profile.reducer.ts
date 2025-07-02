import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  getAuthenticators,
  getAuthenticatorsErrorAction,
  getAuthenticatorsSuccessAction,
  getProfileDetailsSuccessAction,
  getProfileOverview,
  getProfileOverviewErrorAction,
  getProfileOverviewSuccessAction,
  getSocialLoginsSuccessAction,
  unenrollFactor,
  unenrollFactorErrorAction,
  unenrollFactorSuccessAction,
  update2faStatus,
  update2faStatusErrorAction,
  update2faStatusSuccessAction,
} from './customer-profile.actions';
import { CustomerProfileState, defaultState } from './customer-profile.state';

export const reducer = createReducer(
  defaultState,
  on(getProfileDetailsSuccessAction, (state: CustomerProfileState, { profileDetails }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.profileDetails = profileDetails;
      draft.loading = false;
    })
  ),

  on(getProfileOverview, (state) => ({ ...state, loading: true })),
  on(getProfileOverviewSuccessAction, (state: CustomerProfileState, { profileOverview }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.profileOverview = profileOverview;
      draft.loading = false;
      draft.loadError = undefined;
    })
  ),
  on(getProfileOverviewErrorAction, (state, { error }) => {
    return { ...state, loading: false, loadError: error };
  }),

  on(getSocialLoginsSuccessAction, (state: CustomerProfileState, { socialLogins }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.socialLogins = socialLogins;
      draft.loading = false;
    })
  ),

  on(getAuthenticators, (state) => ({ ...state, loading: true })),
  on(getAuthenticatorsSuccessAction, (state: CustomerProfileState, { authenticators }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.authenticators = authenticators;
      draft.loading = false;
    })
  ),
  on(getAuthenticatorsErrorAction, (state, { error }) => {
    return { ...state, loading: false, loadError: error };
  }),

  on(update2faStatus, (state) => ({ ...state, loadSpinner: true })),
  on(update2faStatusSuccessAction, (state: CustomerProfileState, { successResponse }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.update2faSuccessResponse = successResponse;
      draft.loading = false;
      draft.loadSpinner = true;
    })
  ),
  on(update2faStatusErrorAction, (state, { error }) => {
    return { ...state, loading: false, loadError: error, loadSpinner: false };
  }),

  on(unenrollFactor, (state) => ({ ...state, loadSpinner: true })),
  on(unenrollFactorSuccessAction, (state: CustomerProfileState, { successResponse }) =>
    produce(state, (draft: CustomerProfileState) => {
      draft.unenrollFactorSuccessResponse = successResponse;
      draft.loading = false;
      draft.loadSpinner = true;
    })
  ),
  on(unenrollFactorErrorAction, (state, { error }) => {
    return { ...state, loading: false, loadError: error, loadSpinner: false };
  })
);

export function customerProfileReducer(
  state: CustomerProfileState = defaultState,
  action: Action
): CustomerProfileState {
  return reducer(state, action);
}

export const customerProfileFeature = createFeature({
  name: 'customerProfileFeature',
  reducer: customerProfileReducer,
});
