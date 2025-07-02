import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddressState } from './address.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<AddressState>(stateFeatureName);

export const addresses = createSelector([featureState], (state: AddressState) => {
  return state.addresses;
});

export const editableAddress = createSelector([featureState], (state: AddressState) => {
  return state.addresses?.find((address) => address.isNew);
});
