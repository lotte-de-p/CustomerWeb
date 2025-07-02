import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SalesStateModel } from './sales.state';

export const featureState = createFeatureSelector<SalesStateModel>('salesFeature');

export const salesOrder = createSelector([featureState], (state: SalesStateModel) => {
  return state.salesOrder;
});

export const isIntentCalculated = createSelector([featureState], (state: SalesStateModel) => {
  return state.isIntentCalculated;
});

export const intent = createSelector([featureState], (state: SalesStateModel) => {
  return state.intent;
});

export const analyticsIntent = createSelector([featureState], (state: SalesStateModel) => {
  return state.analyticsIntent;
});

export const validateOptionsCheckout = createSelector([featureState], (state: SalesStateModel) => {
  return state.validateOptionsCheckout;
});
