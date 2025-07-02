import { createFeature, createReducer, on } from '@ngrx/store';
import {
  fetchMobileUsageLimitsDetails,
  fetchMobileUsageLimitsDetailsFailure,
  fetchMobileUsageLimitsDetailsSuccess,
  fetchOutOfBundleLimits,
  fetchOutOfBundleLimitsFailure,
  fetchOutOfBundleLimitsSuccess,
  resetMobileUsageLimits,
  updateMobileUsageLimits,
  updateMobileUsageLimitsFailure,
  updateMobileUsageLimitsSuccess,
} from './mobile-usage-limits.actions';
import { UsageLimits } from '../entities/usage-limits/usage-limits.model';
import { UpdateUsageLimitsRequest } from '../entities/usage-limits/update-usage-limits-request.model';
import { MobileLine } from '@billing/shared/data-access';

export const MOBILE_USAGE_LIMITS_FEATURE_KEY = 'mobile-usage-limits';

export interface MobileUsageLimitsState {
  selectedMobileUsageLimits: UsageLimits | null;
  selectedMobileUsageLimitsLoaded: boolean;
  selectedOutOfBundleLimits: string[];
  selectedOutOfBundleLimitsLoaded: boolean;
}

export const initialState: MobileUsageLimitsState = {
  selectedMobileUsageLimits: null,
  selectedOutOfBundleLimits: [],
  selectedMobileUsageLimitsLoaded: false,
  selectedOutOfBundleLimitsLoaded: false,
};

export const mobileUsageLimitsFeature = createFeature({
  name: MOBILE_USAGE_LIMITS_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(fetchMobileUsageLimitsDetails, (state: MobileUsageLimitsState, action: { mobileLine: MobileLine }) => ({
      ...state,
      selectedMobileLine: action.mobileLine,
      selectedMobileUsageLimitsLoaded: false,
      selectedOutOfBundleLimitsLoaded: false,
    })),
    on(fetchMobileUsageLimitsDetailsSuccess, (state: MobileUsageLimitsState, action: { usageLimits: UsageLimits }) => ({
      ...state,
      selectedMobileUsageLimits: action.usageLimits,
      selectedMobileUsageLimitsLoaded: true,
    })),
    on(fetchMobileUsageLimitsDetailsFailure, (state: MobileUsageLimitsState) => ({
      ...state,
      selectedMobileUsageLimits: null,
      selectedMobileUsageLimitsLoaded: true,
    })),

    on(fetchOutOfBundleLimits, (state: MobileUsageLimitsState, action: { mobileLine: MobileLine }) => ({
      ...state,
      selectedMobileLine: action.mobileLine,
      selectedOutOfBundleLimitsLoaded: false,
    })),
    on(fetchOutOfBundleLimitsSuccess, (state: MobileUsageLimitsState, action: { outOfBundleLimits: string[] }) => ({
      ...state,
      selectedOutOfBundleLimits: action.outOfBundleLimits,
      selectedOutOfBundleLimitsLoaded: true,
    })),
    on(fetchOutOfBundleLimitsFailure, (state: MobileUsageLimitsState) => ({
      ...state,
      selectedOutOfBundleLimits: [],
      selectedOutOfBundleLimitsLoaded: false,
    })),

    on(
      updateMobileUsageLimits,
      (
        state: MobileUsageLimitsState,
        action: {
          updateUsageLimitsRequest: UpdateUsageLimitsRequest;
          mobileLine: MobileLine | null;
        }
      ) => ({
        ...state,
        selectedMobileLine: action.mobileLine,
        selectedMobileUsageLimitsLoaded: false,
      })
    ),
    on(updateMobileUsageLimitsSuccess, (state: MobileUsageLimitsState, action: { usageLimits: UsageLimits }) => ({
      ...state,
      selectedMobileUsageLimits: action.usageLimits,
      selectedMobileUsageLimitsLoaded: true,
    })),
    on(updateMobileUsageLimitsFailure, (state: MobileUsageLimitsState) => ({
      ...state,
      selectedMobileUsageLimitsLoaded: true,
    })),
    on(resetMobileUsageLimits, (state) => ({
      ...state,
      selectedMobileUsageLimitsLoaded: false,
      selectedOutOfBundleLimitsLoaded: false,
    }))
  ),
});
