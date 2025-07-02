import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from '../constants/state.const';
import { AddressFormFieldState } from './address-form-field.state';

export const featureState = createFeatureSelector<AddressFormFieldState>(stateFeatureName);

export const availableMunicipalities = createSelector([featureState], (state: AddressFormFieldState) => {
  return state.availableMunicipalities;
});

export const availableStreets = createSelector([featureState], (state: AddressFormFieldState) => {
  return state.availableStreets;
});

export const availableHouseNumbers = createSelector([featureState], (state: AddressFormFieldState) => {
  return state.availableHouseNumbers;
});

export const availableSubHouseNumbers = createSelector([featureState], (state: AddressFormFieldState) => {
  return state.availableSubHouseNumbers;
});

export const availableBoxes = createSelector([featureState], (state: AddressFormFieldState) => {
  return state.availableBoxes;
});

export const selectedHouseNumber = createSelector(
  featureState,
  (state: AddressFormFieldState) => state.selectedHouseNumber
);

export const selectedSubHouseNumber = createSelector(
  featureState,
  (state: AddressFormFieldState) => state.selectedSubHouseNumber
);

export const selectedBoxNumber = createSelector(
  featureState,
  (state: AddressFormFieldState) => state.selectedBoxNumber
);

export const selectedStreet = createSelector(featureState, (state: AddressFormFieldState) => state.selectedStreet);

export const selectedStreetAddressUnit = createSelector(
  featureState,
  (state: AddressFormFieldState) => state.selectedStreetAddressUnit
);

export const selectedMunicipality = createSelector(
  featureState,
  (state: AddressFormFieldState) => state.finalAddress.municipality
);
