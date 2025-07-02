import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InstallationTypeState } from './installation-type.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<InstallationTypeState>(stateFeatureName);

export const name = createSelector([featureState], (state: InstallationTypeState) => {
  return state.name;
});
