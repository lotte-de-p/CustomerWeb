import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<AppointmentState>(stateFeatureName);

export const name = createSelector([featureState], (state: AppointmentState) => {
  return state.name;
});
