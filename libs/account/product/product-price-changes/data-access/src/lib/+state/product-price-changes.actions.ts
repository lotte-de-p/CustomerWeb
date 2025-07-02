import { createAction, props } from '@ngrx/store';
import { Login, ProductPriceChange, ProductPriceChangesByAccount } from '../entities/product-price-change';

export const loadProductPriceChanges = createAction('[product-price-changes] loadProductPriceChanges');

export const loadProductPriceChangesSuccess = createAction(
  '[product-price-changes] loadProductPriceChangesSuccess',
  props<{
    productPriceChanges: ProductPriceChangesByAccount[];
  }>()
);

export const loadProductPriceChangesFailure = createAction(
  '[product-price-changes] loadProductPriceChangesFailure',
  props<{
    error: string;
    status: number;
  }>()
);

export const validateAuthentication = createAction('[product-price-changes] validateAuthentication');
export const validateCustomAuthentication = createAction(
  '[product-price-changes] validateCustomAuthentication',
  props<Login>()
);

export const validateCustomAuthenticationFailure = createAction(
  '[product-price-changes] validateCustomAuthenticationFailure',
  props<{
    error: string;
  }>()
);

export const setAuthentication = createAction(
  '[product-price-changes] setAuthentication',
  props<{
    isAuthenticated: boolean;
    customLogin: boolean;
  }>()
);

export const selectBillingAccount = createAction(
  '[product-price-changes] selectBillingAccount',
  props<{
    selectedBillingAccount: string;
  }>()
);

export const selectProductPriceChanges = createAction(
  '[product-price-changes] selectProductPriceChanges',
  props<{
    selectedProductPriceChanges: ProductPriceChange[];
  }>()
);

export const loadingFinished = createAction('[product-price-changes] loadingFinished');
