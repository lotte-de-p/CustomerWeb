import { Product } from '../models/product.model';
import { MarketingPages } from '../product-overview.component';
import {
  setConfig,
  setFreePhoneBusinessProducts,
  setMarketingPages,
  setScopes,
  setSelectedAccountProducts,
} from './product-overview.actions';
import {
  ProductOverviewConfigState,
  ProductOverviewScopesState,
  ProductOverviewState,
  initialState,
  productOverviewReducer,
} from './product-overview.reducer';

describe('Product overview reducer', () => {
  let initState: ProductOverviewState;

  beforeEach(() => {
    initState = initialState;
  });

  describe('Unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = productOverviewReducer(initState, action);

      expect(state).toBe(initState);
    });
  });

  describe('setSelectedAccountProducts action', () => {
    it('should update the selected account products', () => {
      const products: Product[] = [{ id: 'abc' }, { id: 'def' }] as Product[];
      const action = setSelectedAccountProducts({ products });

      const state = productOverviewReducer(initState, action);

      expect(state.selectedAccountProducts).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
  });

  describe('setFreePhoneBusinessProducts action', () => {
    it('should update the FreePhone Business products', () => {
      const products: Product[] = [{ id: 'abc' }, { id: 'def' }] as Product[];
      const action = setFreePhoneBusinessProducts({ products });

      const state = productOverviewReducer(initState, action);

      expect(state.freePhoneBusinessProducts).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
  });

  describe('setFreePhoneBusinessProducts action', () => {
    it('should update the FreePhoneBusiness products', () => {
      const products: Product[] = [{ id: 'abc' }, { id: 'def' }] as Product[];
      const action = setFreePhoneBusinessProducts({ products });

      const state = productOverviewReducer(initState, action);

      expect(state.freePhoneBusinessProducts).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
  });

  describe('setConfig action', () => {
    it('should update the config', () => {
      const config: ProductOverviewConfigState = {
        addSubscriptionUrl: 'sub url',
        changeTariffPlanUrl: 'change tariff plan url',
        componentInstanceID: 'comp instance id',
        discoverSmartPhoneUrl: 'discover smartphone url',
        freePhoneBusinessUrl: 'freephonebusiness url',
        intentRequired: true,
        isAccountSelectorConsumer: true,
        manageOptionUrl: 'manage option url',
        planUpgradeUrl: 'plan upgrade url',
      };
      const action = setConfig({ config });

      const state = productOverviewReducer(initState, action);

      expect(state.config).toEqual(config);
    });
  });

  describe('setScopes action', () => {
    it('should update the scopes', () => {
      const scopes: ProductOverviewScopesState = {
        isPrepaidLogin: true,
        canManageProductHolding: true,
        hasSalesScope: true,
      };
      const action = setScopes({ scopes });

      const state = productOverviewReducer(initState, action);

      expect(state.scopes.isPrepaidLogin).toBeTruthy();
      expect(state.scopes.canManageProductHolding).toBeTruthy();
      expect(state.scopes.hasSalesScope).toBeTruthy();
    });
  });

  describe('setMarketingPages action', () => {
    it('should update the marketing pages', () => {
      const pages: MarketingPages = {
        dtv: 'dtv page',
        fixed: 'fixed page',
        internet: 'internet page',
        mobile: 'mobile page',
      };
      const action = setMarketingPages({ pages });

      const state = productOverviewReducer(initState, action);

      expect(state.marketingPages).toEqual(pages);
    });
  });
});
