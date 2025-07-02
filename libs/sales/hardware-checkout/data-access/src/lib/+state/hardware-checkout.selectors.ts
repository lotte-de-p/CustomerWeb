import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HardwareCheckoutState } from './hardware-checkout.state';
import { HARDWARE_CHECKOUT_FEATURE_KEY } from './hardware-checkout.reducer';
import { ViewState } from '../interfaces/view-state.interface';
import { CustomerTypeEnum } from '../enums/customer-type.enum';
import { createIngenicoResultUtil } from '@sales/shared/data-access';

export const featureState = createFeatureSelector<HardwareCheckoutState>(HARDWARE_CHECKOUT_FEATURE_KEY);

export const salesOffer = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.urlRequestParameters?.salesOffer;
});

export const referrerUrl = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.referrerUrl;
});
export const omapiQueryProducts = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.omapiQueryProducts;
});

export const omapiProducts = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.omapiProducts;
});

export const billingAccounts = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.billingAccounts;
});

export const defaultBillingAccount = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.billingAccounts?.find((billingAccount) => {
    return billingAccount.defaultBillingAccount.name === 'Yes';
  });
});

export const contractSummaryRequired = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.contractSummaryRequired;
});

export const contractSummaryUrl = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.contractSummaryUrl;
});

export const contractSummaryGenerationNotPossible = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.contractSummaryGenerationNotPossible;
});

export const salesOrderState = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.salesOrderState;
});

export const salesOrderFromState = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.salesOrder;
});

export const viewState = createSelector([featureState], (state: HardwareCheckoutState): ViewState => {
  return state.viewState;
});

export const customerType = createSelector([featureState], (state: HardwareCheckoutState): CustomerTypeEnum => {
  return state.customerType;
});

export const personalIdentity = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.personalIdentity;
});

export const customerAccountDetails = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.customerAccountDetails;
});

export const aemInput = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.aemInput;
});

export const analyticsAttributes = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.analyticsAttributes;
});

export const urlRequestParameters = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.urlRequestParameters;
});

export const cart = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.cart;
});

export const stepAnalytics = createSelector([featureState], (state: HardwareCheckoutState) => {
  return state.stepAnalyticsInfo;
});

export const ingenicoResult = createSelector([featureState], (state: HardwareCheckoutState) => {
  return createIngenicoResultUtil(state.urlRequestParameters?.ingenicoResult);
});

export const missingData = createSelector([featureState], (state) => {
  return state.missingData;
});
