import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddressState } from './address.state';
import { stateFeatureName } from './state.const';

export const featureState = createFeatureSelector<AddressState>(stateFeatureName);

export const addresses = createSelector([featureState], (state: AddressState) => {
  return state.addresses;
});

export const manuallyAddedAddress = createSelector([featureState], (state: AddressState) => {
  return state.newAddress;
});

export const selectedAddress = createSelector([featureState], (state: AddressState) => {
  return state.selectedAddress;
});
