import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ENTERTAINMENT_MANAGEMENT_FEATURE_KEY, EntertainmentManagementState } from './entertainment-management.reducer';

export const selectEntertainmentManagementFeature = createFeatureSelector<EntertainmentManagementState>(
  ENTERTAINMENT_MANAGEMENT_FEATURE_KEY
);

export const selectEntertainmentManagementLoaded = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.isEntLoaded
);
export const selectActiveOptions = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.activeOptions
);
export const selectAvailableContentPacks = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.availableContentPacks
);
export const selectAvailableStreamingOptions = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.availableStreamingOptions
);
export const selectEntertainmentManagementLoading = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.loading
);
export const selectEntertainmentManagementError = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentManagement.loadError
);

export const selectEntertainmentOptionDetails = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentOptionDetails
);
export const selectEntertainmentOptionDetailsType = createSelector(
  selectEntertainmentManagementFeature,
  (state) => state.entertainmentOptionDetails.type
);
