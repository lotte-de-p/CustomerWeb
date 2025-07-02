import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from '../constants/state.const';
import { ThankYouState } from './thank-you.state';

export const featureState = createFeatureSelector<ThankYouState>(stateFeatureName);

export const redirectUrl = createSelector([featureState], (state: ThankYouState) => {
  return state.redirectUrl;
});

export const orderNumber = createSelector([featureState], (state: ThankYouState) => {
  return state.orderNumber;
});
