import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductPriceChange, ProductPriceChangesByAccount } from '../entities/product-price-change';
import {
  loadingFinished,
  loadProductPriceChangesFailure,
  loadProductPriceChangesSuccess,
  selectProductPriceChanges,
  setAuthentication,
  validateAuthentication,
  validateCustomAuthenticationFailure,
} from './product-price-changes.actions';

export const PRODUCT_PRICE_CHANGES_FEATURE_KEY = 'product-price-changes';

export interface ProductPriceChangesState {
  isAuthenticated: boolean;
  productPriceChanges: ProductPriceChangesByAccount[];
  selectedProductPriceChanges: ProductPriceChange[];
  selectedBillingAccount: string | undefined;
  loading: boolean;
  loadError: string | undefined;
  loginError: string | undefined;
}

export interface ProductPriceChangesSlice {
  [PRODUCT_PRICE_CHANGES_FEATURE_KEY]: ProductPriceChangesState;
}

export const initialState: ProductPriceChangesState = {
  isAuthenticated: false,
  productPriceChanges: [],
  selectedProductPriceChanges: [],
  selectedBillingAccount: undefined,
  loading: false,
  loadError: undefined,
  loginError: undefined,
};

export const productPriceChangesFeature = createFeature({
  name: PRODUCT_PRICE_CHANGES_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(validateAuthentication, (state: ProductPriceChangesState) => ({
      ...state,
      loading: true,
    })),
    on(validateCustomAuthenticationFailure, (state: ProductPriceChangesState, action) => ({
      ...state,
      loading: false,
      loginError: action.error,
    })),
    on(loadProductPriceChangesSuccess, (state: ProductPriceChangesState, action) => {
      const defaultProductPriceChangesByAccount = action.productPriceChanges[0];
      return {
        ...state,
        productPriceChanges: action.productPriceChanges,
        selectedProductPriceChanges: defaultProductPriceChangesByAccount?.productPriceChanges || [],
        selectedBillingAccount: defaultProductPriceChangesByAccount?.accountNumber,
        loading: false,
        loadError: undefined,
        loginError: undefined,
      };
    }),
    on(loadProductPriceChangesFailure, (state: ProductPriceChangesState, action) => ({
      ...state,
      loading: false,
      loadError: action.error,
    })),
    on(setAuthentication, (state: ProductPriceChangesState, action) => ({
      ...state,
      isAuthenticated: action.isAuthenticated,
      loading: action.isAuthenticated,
    })),
    on(loadingFinished, (state: ProductPriceChangesState) => ({
      ...state,
      loading: false,
    })),
    on(selectProductPriceChanges, (state: ProductPriceChangesState, action) => ({
      ...state,
      selectedProductPriceChanges: action.selectedProductPriceChanges,
    }))
  ),
});
