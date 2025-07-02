import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from '../constants/state.const';
import { EtfState } from './etf.state';

export const featureState = createFeatureSelector<EtfState>(stateFeatureName);
export const usedSlots = createSelector([featureState], (state: EtfState) => {
  return state.usedSlots;
});

export const orderItemsWithDiscount = createSelector([featureState], (state: EtfState) => {
  return state.orderItemsWithDiscount;
});
