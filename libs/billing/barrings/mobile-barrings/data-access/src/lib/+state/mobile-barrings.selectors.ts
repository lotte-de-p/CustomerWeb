import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOBILE_BARRINGS_FEATURE_KEY, MobileBarringsState } from './mobile-barrings.reducers';

export const selectMobileBarringsFeature = createFeatureSelector<MobileBarringsState>(MOBILE_BARRINGS_FEATURE_KEY);

export const selectMobileBarringGroups = createSelector(selectMobileBarringsFeature, (state) => state.barringGroups);

export const selectMobileBarringReadOnly = createSelector(selectMobileBarringsFeature, (state) => state.readOnly);

export const selectMobileBarringError = createSelector(selectMobileBarringsFeature, (state) => state.loadError);

export const selectMobileBarringProductStatus = createSelector(
  selectMobileBarringsFeature,
  (state) => state.productStatus
);

export const selectMobileBarringSelectedMobileLine = createSelector(
  selectMobileBarringsFeature,
  (state) => state.selectedMobileLine
);

export const selectLoadingState = createSelector(selectMobileBarringsFeature, (state) => state.loading);
