import { createAction, props } from '@ngrx/store';
import { ProductOverviewConfigState, ProductOverviewScopesState } from './product-overview.reducer';
import { Product } from '../../../fleet-user/shared/models/product.model';

export const setSelectedAccountProducts = createAction(
  `[product-overview] setSelectedAccountProducts`,
  props<{ products: Product[] }>()
);
export const setConfig = createAction(`[product-overview] setConfig`, props<{ config: ProductOverviewConfigState }>());
export const setScopes = createAction(`[product-overview] setScopes`, props<{ scopes: ProductOverviewScopesState }>());
