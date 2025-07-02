import { createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { setSelectedAccountProducts, setConfig, setScopes } from './product-overview.actions';
import { Product } from '../../../fleet-user/shared/models/product.model';

export const PRODUCT_OVERVIEW_FEATURE_KEY = 'product-overview';

export interface ProductOverviewState {
  selectedAccountProducts: Product[];
  config: ProductOverviewConfigState;
  scopes: ProductOverviewScopesState;
}

export interface ProductOverviewConfigState {
  manageOptionUrl: string;
  componentInstanceID: string;
  isAccountSelectorConsumer: boolean;
}

export interface ProductOverviewScopesState {
  isPrepaidLogin: boolean;
  hasSalesScope: boolean;
  canManageProductHolding: boolean;
}

export const initialState: ProductOverviewState = {
  selectedAccountProducts: [],
  config: {
    manageOptionUrl: '',
    componentInstanceID: '',
    isAccountSelectorConsumer: false,
  },
  scopes: {
    isPrepaidLogin: false,
    hasSalesScope: false,
    canManageProductHolding: false,
  },
};

export const productOverviewReducer = createReducer(
  initialState,
  on(setSelectedAccountProducts, (state, action) => {
    return produce(state, (draft) => {
      draft.selectedAccountProducts = action.products;
    });
  }),
  on(setConfig, (state, action) => {
    return produce(state, (draft) => {
      draft.config = action.config;
    });
  }),
  on(setScopes, (state, action) => {
    return produce(state, (draft) => {
      draft.scopes = action.scopes;
    });
  })
);

export const productOverviewFeature = createFeature({
  name: PRODUCT_OVERVIEW_FEATURE_KEY,
  reducer: productOverviewReducer,
});
