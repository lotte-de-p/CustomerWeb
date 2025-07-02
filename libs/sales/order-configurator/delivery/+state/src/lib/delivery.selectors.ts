import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { DeliveryState } from './delivery.state';

export const featureState = createFeatureSelector<DeliveryState>(stateFeatureName);

export const recipientDetails = createSelector([featureState], (state: DeliveryState) => {
  return state.recipientDetails;
});

export const recipientAddress = createSelector([featureState], (state: DeliveryState) => {
  return state.recipientAddress;
});

export const deliveryContent = createSelector([featureState], (state: DeliveryState) => {
  return state.deliveryContent;
});
