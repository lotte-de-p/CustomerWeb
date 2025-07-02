import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SalesCheckout } from './sales-checkout.state';

export const featureState = createFeatureSelector<SalesCheckout>('salesCheckoutFeature');

export const requiresInstallation = createSelector([featureState], (state: SalesCheckout) => {
  return state.requiresInstallation;
});

export const moveInfo = createSelector([featureState], (state: SalesCheckout) => {
  return state.moveInfo;
});

export const streamingServiceOffer = createSelector([featureState], (state: SalesCheckout) => {
  return state.streamingServiceOffer;
});
