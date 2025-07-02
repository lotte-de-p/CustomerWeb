import { createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  setSelectedAccountProducts,
  setFreePhoneBusinessProducts,
  setConfig,
  setScopes,
  setMarketingPages,
} from './product-overview.actions';
import { Product } from '../models/product.model';
import { MarketingPages } from '../product-overview.component';

export const PRODUCT_OVERVIEW_FEATURE_KEY = 'product-overview';

export interface ProductOverviewState {
  selectedAccountProducts: Product[];
  freePhoneBusinessProducts: Product[];
  config: ProductOverviewConfigState;
  scopes: ProductOverviewScopesState;
  marketingPages: MarketingPages;
}

export interface ProductOverviewConfigState {
  changeTariffPlanUrl: string;
  manageOptionUrl: string;
  componentInstanceID: string;
  addSubscriptionUrl: string;
  discoverSmartPhoneUrl: string;
  freePhoneBusinessUrl: string;
  isAccountSelectorConsumer: boolean;
  planUpgradeUrl: string;
  intentRequired: boolean;
}

export interface ProductOverviewScopesState {
  isPrepaidLogin: boolean;
  hasSalesScope: boolean;
  canManageProductHolding: boolean;
}

export const initialState: ProductOverviewState = {
  selectedAccountProducts: [],
  freePhoneBusinessProducts: [],
  config: {
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    addSubscriptionUrl: '',
    discoverSmartPhoneUrl: '',
    freePhoneBusinessUrl: '',
    isAccountSelectorConsumer: false,
    planUpgradeUrl: '',
    intentRequired: false,
  },
  scopes: {
    isPrepaidLogin: false,
    hasSalesScope: false,
    canManageProductHolding: false,
  },
  marketingPages: {
    dtv: '',
    fixed: '',
    internet: '',
    mobile: '',
  },
};

export const productOverviewReducer = createReducer(
  initialState,
  on(setSelectedAccountProducts, (state, action) => {
    return produce(state, (draft) => {
      draft.selectedAccountProducts = action.products;
    });
  }),
  on(setFreePhoneBusinessProducts, (state, action) => {
    return produce(state, (draft) => {
      draft.freePhoneBusinessProducts = action.products;
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
  }),
  on(setMarketingPages, (state, action) => {
    return produce(state, (draft) => {
      draft.marketingPages = action.pages;
    });
  })
);

export const productOverviewFeature = createFeature({
  name: PRODUCT_OVERVIEW_FEATURE_KEY,
  reducer: productOverviewReducer,
});
