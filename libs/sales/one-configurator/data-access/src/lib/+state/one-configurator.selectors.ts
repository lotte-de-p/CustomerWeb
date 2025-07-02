import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ONE_CONFIGURATOR_FEATURE_KEY, OneConfiguratorState } from './one-configurator.reducers';

export const featureState = createFeatureSelector<OneConfiguratorState>(ONE_CONFIGURATOR_FEATURE_KEY);

export const selectEnabled = createSelector([featureState], (state: OneConfiguratorState) => state.enabled);
export const selectIsDarwinUser = createSelector([featureState], (state: OneConfiguratorState) =>
  state.loginDetails?.isBssSystemNetcracker()
);
export const selectCustomerProductHolding = createSelector(
  [featureState],
  (state: OneConfiguratorState) => state.customerProductHolding
);
export const selectPromotions = createSelector([featureState], (state: OneConfiguratorState) => state.promotions);
export const selectTierState = createSelector([featureState], (state: OneConfiguratorState) => state.tierState);
export const selectSimsState = createSelector([featureState], (state: OneConfiguratorState) => state.simsState);
export const selectTvState = createSelector([featureState], (state: OneConfiguratorState) => state.tvState);
export const selectOptinsState = createSelector([featureState], (state: OneConfiguratorState) => state.optinsState);
