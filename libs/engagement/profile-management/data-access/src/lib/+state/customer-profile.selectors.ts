import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CustomerProfileState } from './customer-profile.state';

export const featureState = createFeatureSelector<CustomerProfileState>('customerProfileFeature');

export const selectLoading = createSelector(featureState, (state: CustomerProfileState) => state.loading);
export const selectLoadError = createSelector(featureState, (state: CustomerProfileState) => state.loadError);
export const selectLoadSpinner = createSelector(featureState, (state: CustomerProfileState) => state.loadSpinner);
export const selectProfileDetails = createSelector(featureState, (state) => state?.profileDetails);
export const selectProfileOverview = createSelector(featureState, (state) => state?.profileOverview);
export const selectSocialLogins = createSelector(featureState, (state) => state?.socialLogins);
export const selectAuthenticators = createSelector(featureState, (state) => state?.authenticators);
export const selectUpdate2faSuccessResponse = createSelector(featureState, (state) => state?.update2faSuccessResponse);
export const selectUnenrollFactorSuccessResponse = createSelector(
  featureState,
  (state) => state?.unenrollFactorSuccessResponse
);
