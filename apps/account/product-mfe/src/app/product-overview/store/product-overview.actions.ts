import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { ProductOverviewConfigState, ProductOverviewScopesState } from './product-overview.reducer';
import { MarketingPages } from '../product-overview.component';

export const setSelectedAccountProducts = createAction(
  `[product-overview] setSelectedAccountProducts`,
  props<{ products: Product[] }>()
);
export const setFreePhoneBusinessProducts = createAction(
  `[product-overview] setFreePhoneBusinessProducts`,
  props<{ products: Product[] }>()
);
export const setConfig = createAction(`[product-overview] setConfig`, props<{ config: ProductOverviewConfigState }>());
export const setScopes = createAction(`[product-overview] setScopes`, props<{ scopes: ProductOverviewScopesState }>());
export const setMarketingPages = createAction(
  `[product-overview] setMarketingPages`,
  props<{ pages: MarketingPages }>()
);
