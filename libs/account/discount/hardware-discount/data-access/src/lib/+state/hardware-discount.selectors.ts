import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HARDWARE_DISCOUNT_FEATURE_KEY, HardwareDiscountState } from './hardware-discount.reducer';

export const selectHardwareDiscountFeature =
  createFeatureSelector<HardwareDiscountState>(HARDWARE_DISCOUNT_FEATURE_KEY);

export const selectHardwareDiscountOverview = createSelector(
  selectHardwareDiscountFeature,
  (state) => state.discountOverview
);
export const selectHardwareDiscountLoading = createSelector(selectHardwareDiscountFeature, (state) => state.loading);
export const selectHardwareDiscountError = createSelector(selectHardwareDiscountFeature, (state) => state.loadError);
