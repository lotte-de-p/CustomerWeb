import { OrderConfiguratorState } from './order-configurator.state';
import { stateFeatureName } from './state.const';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const featureState = createFeatureSelector<OrderConfiguratorState>(stateFeatureName);

export const orderResult = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.orderResult;
});

export const errors = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.errors;
});

export const customerAccount = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.customerAccount;
});

export const isPreLoading = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.loading.loadingOffer || state.loading.loadingCustomerAccount;
});

export const offer = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.offer;
});

export const orderNumber = createSelector([featureState], (state: OrderConfiguratorState) => {
  return state.orderNumber;
});
