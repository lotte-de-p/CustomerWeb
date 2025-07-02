import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MYBASE_FEATURE_KEY, MyBaseState } from './mybase-dashboard.reducer';

export const selectMyBaseDashboardFeature = createFeatureSelector<MyBaseState>(MYBASE_FEATURE_KEY);

// Dashboard (level 1)
export const selectMyBaseDashboardShowBilling = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.billing.showCard
);
export const selectMyBaseDashboardBillingPending = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.billing.pending
);
export const selectMyBaseDashboardBillingAccounts = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.billing.billingAccounts
);
export const selectMyBaseDashboardProducts = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.products
);
export const selectMyBaseDashboardSupportAssistance = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.actions
);
export const selectMyBaseDashboardShowMobileUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.mobileUsage.showCard
);
export const selectMyBaseDashboardMobileUsagePending = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.mobileUsage.pending
);
export const selectMyBaseDashboardMobileUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.mobileUsage.products
);
export const selectMyBaseDashboardShowInternetUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.internetUsage.showCard
);
export const selectMyBaseDashboardInternetUsagePending = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.internetUsage.pending
);
export const selectMyBaseDashboardInternetUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.internetUsage.products
);
export const selectMyBaseDashboardLoading = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.loading
);
export const selectMyBaseDashboardError = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.loadError
);
export const selectMyBaseDashboardShowHomeNetwork = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.homeNetwork.showCard
);
export const selectMyBaseDashboardHomeNetworkPending = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dashboard.homeNetwork.pending
);

// Mobile (level 2)
export const selectMyBaseDashboardMobileMobileUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.mobileUsage
);
export const selectMyBaseDashboardMobileNavigationCards = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.actions
);
export const selectMyBaseDashboardMobileServices = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.actions
);
export const selectMyBaseDashboardMobileLoading = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.loading
);
export const selectMyBaseDashboardMobileError = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.loadError
);
export const selectMyBaseDashboardMobileMsisdn = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.mobile.selectedMsisdn
);
export const selectMobileLines = createSelector(selectMyBaseDashboardFeature, (state) => state.mobile.lines);

// Internet (level 2)
export const selectMyBaseDashboardInternetInternetUsage = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.usage
);
export const selectMyBaseDashboardInternetLoading = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.loading
);
export const selectMyBaseDashboardInternetError = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.loadError
);
export const selectMyBaseDashboardInternetLine = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.selectedInternetLine
);
export const selectMyBaseDashboardInternetGeneralCards = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.actions
);
export const selectMyBaseDashboardInternetServices = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.actions
);
export const selectMyBaseDashboardInternetShowHomeNetwork = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.internet.homeNetwork.showCard
);
export const selectInternetLines = createSelector(selectMyBaseDashboardFeature, (state) => state.internet.lines);

// DTV (level 2)
export const selectMyBaseDashboardDtvLoading = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dtv.loading
);
export const selectMyBaseDashboardDtvError = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dtv.loadError
);
export const selectMyBaseDashboardDtvIdentifier = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dtv.productIdentifier
);
export const selectMyBaseDashboardDtvSimpleCards = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dtv.actions
);
export const selectMyBaseDashboardDtvServices = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.dtv.actions
);
export const selectDtvLines = createSelector(selectMyBaseDashboardFeature, (state) => state.dtv);

// Service Moments
export const selectServiceMoments = createSelector(
  selectMyBaseDashboardFeature,
  (state) => state.serviceMoments.events
);
