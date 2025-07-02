import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_PRICE_CHANGES_FEATURE_KEY, ProductPriceChangesState } from './product-price-changes.reducers';

export const selectProductPriceChangesFeature = createFeatureSelector<ProductPriceChangesState>(
  PRODUCT_PRICE_CHANGES_FEATURE_KEY
);

export const selectIsAuthenticated = createSelector(selectProductPriceChangesFeature, (state) => state.isAuthenticated);

export const selectProductPriceChanges = createSelector(
  selectProductPriceChangesFeature,
  (state) => state.productPriceChanges
);

export const selectSelectedProductPriceChanges = createSelector(
  selectProductPriceChangesFeature,
  (state) => state.selectedProductPriceChanges
);

export const selectSelectedBillingAccount = createSelector(
  selectProductPriceChangesFeature,
  (state) => state.selectedBillingAccount
);

export const selectLoading = createSelector(selectProductPriceChangesFeature, (state) => state.loading);
export const selectLoadError = createSelector(selectProductPriceChangesFeature, (state) => state.loadError);
export const selectAuthenticationError = createSelector(selectProductPriceChangesFeature, (state) => state.loginError);
