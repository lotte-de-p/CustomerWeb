import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SummaryState } from './summary.state';
import { stateFeatureName } from '../constants/state.const';

export const featureState = createFeatureSelector<SummaryState>(stateFeatureName);

export const personalInfo = createSelector([featureState], (state: SummaryState) => {
  return state.personalInfo;
});

export const deliveryInfo = createSelector([featureState], (state: SummaryState) => {
  return state.deliveryInfo;
});

export const invoiceInfo = createSelector([featureState], (state: SummaryState) => {
  return state.invoiceInfo;
});

export const orderItems = createSelector([featureState], (state: SummaryState) => {
  return state.orderItems;
});

export const prices = createSelector([featureState], (state: SummaryState) => {
  return state.prices;
});

export const depreciationItems = createSelector([featureState], (state: SummaryState) => {
  return state.depreciationItems;
});

export const ingenicoRequest = createSelector([featureState], (state: SummaryState) => {
  return state.ingenicoRequest;
});

export const contractSummaryRequired = createSelector([featureState], (state: SummaryState) => {
  return state.contractSummaryRequired;
});

export const ingenicoFormReady = createSelector([featureState], (state: SummaryState) => {
  return state.ingenicoFormReady;
});

export const generalNotifications = createSelector([featureState], (state: SummaryState) => {
  return state.generalNotifications;
});

export const deliveryNotifications = createSelector([featureState], (state: SummaryState) => {
  return state.deliveryNotifications;
});

export const ingenicoFormUrl = createSelector([featureState], (state: SummaryState) => {
  return state.ingenicoFormUrl;
});
export const termsAndConditionsUrl = createSelector([featureState], (state: SummaryState) => {
  return state.termsAndConditionsUrl;
});
