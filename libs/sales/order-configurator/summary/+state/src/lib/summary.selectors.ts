import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { SummaryState } from './summary.state';

export const featureState = createFeatureSelector<SummaryState>(stateFeatureName);

export const tocUrl = createSelector([featureState], (state: SummaryState) => {
  return state.tocUrl;
});
