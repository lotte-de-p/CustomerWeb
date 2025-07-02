import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_OVERVIEW_FEATURE_KEY, ProductOverviewState } from './product-overview.reducer';

export const selectProductOverview = createFeatureSelector<ProductOverviewState>(PRODUCT_OVERVIEW_FEATURE_KEY);

export const selectSelectedAccountProducts = createSelector(
  selectProductOverview,
  (productOverview) => productOverview.selectedAccountProducts
);
export const selectFreePhoneBusinessProducts = createSelector(
  selectProductOverview,
  (productOverview) => productOverview.freePhoneBusinessProducts
);
export const selectConfig = createSelector(selectProductOverview, (productOverview) => productOverview.config);
export const selectScopes = createSelector(selectProductOverview, (productOverview) => productOverview.scopes);
export const selectMarketingPages = createSelector(
  selectProductOverview,
  (productOverview) => productOverview.marketingPages
);
