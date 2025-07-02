import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeliveryState } from './delivery.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<DeliveryState>(stateFeatureName);

export const availableAddresses = createSelector([featureState], (state: DeliveryState) => {
  return state.availableAddresses;
});

export const contactAddress = createSelector([featureState], (state: DeliveryState) => {
  if (state.availableAddresses) {
    return state.availableAddresses[0];
  }
  return undefined;
});

export const deliveryAddress = createSelector([featureState], (state: DeliveryState) => {
  return state.deliveryAddress;
});

export const personalInfo = createSelector([featureState], (state: DeliveryState) => {
  return state.personalInfo;
});

export const deliveryItems = createSelector([featureState], (state: DeliveryState) => {
  return state.deliveryItems;
});

export const notifications = createSelector([featureState], (state: DeliveryState) => {
  return state.notifications;
});
