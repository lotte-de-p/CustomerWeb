import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoliathState } from './goliath.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<GoliathState<unknown>>(stateFeatureName);

export const flows = createSelector([featureState], (state: GoliathState<unknown>) => {
  return state.flows;
});

export const steps = createSelector([featureState], (state: GoliathState<unknown>) => {
  return state.steps;
});

export const stateActions = createSelector([featureState], (state: GoliathState<unknown>) => {
  return state.stateActions;
});

export const currentState = createSelector([featureState], (state: GoliathState<unknown>) => {
  return state.currentState;
});
