import { stateFeatureName } from './state.const';
import { InstallationTypeState } from './installation-type.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const featureState = createFeatureSelector<InstallationTypeState>(stateFeatureName);

export const installationTypes = createSelector([featureState], (state: InstallationTypeState) => {
  return state.installationTypes;
});

export const selectedDeliveryMethod = createSelector([featureState], (state: InstallationTypeState) => {
  return state.selectedDeliveryMethod;
});
