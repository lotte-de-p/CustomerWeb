import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOBILE_USAGE_LIMITS_FEATURE_KEY, MobileUsageLimitsState } from './mobile-usage-limits.reducers';

export const selectMobileUsageLimitsFeature = createFeatureSelector<MobileUsageLimitsState>(
  MOBILE_USAGE_LIMITS_FEATURE_KEY
);

export const selectedMobileUsageLimits = createSelector(
  selectMobileUsageLimitsFeature,
  (state) => state.selectedMobileUsageLimits
);
export const selectedMobileUsageLimitsLoaded = createSelector(
  selectMobileUsageLimitsFeature,
  (state) => state.selectedMobileUsageLimitsLoaded
);

export const selectedOutOfBundleLimits = createSelector(
  selectMobileUsageLimitsFeature,
  (state) => state.selectedOutOfBundleLimits
);

export const selectedOutOfBundleLimitsLoaded = createSelector(
  selectMobileUsageLimitsFeature,
  (state) => state.selectedOutOfBundleLimitsLoaded
);
