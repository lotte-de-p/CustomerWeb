import { Product } from '../models/product.model';
import { MarketingPages } from '../product-overview.component';
import { ProductOverviewConfigState, ProductOverviewScopesState, initialState } from './product-overview.reducer';
import {
  selectConfig,
  selectFreePhoneBusinessProducts,
  selectMarketingPages,
  selectScopes,
  selectSelectedAccountProducts,
} from './product-overview.selectors';

describe('Product Overview selectors', () => {
  describe('selectSelectedAccountProducts', () => {
    it('should select the selected account products from the current state', () => {
      const state = { ...initialState };
      state.selectedAccountProducts = [{ id: 'abc' }, { id: 'def' }] as Product[];

      const result = selectSelectedAccountProducts.projector(state);

      expect(result).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
  });

  describe('selectFreePhoneBusinessProducts', () => {
    it('should select the FreePhoneBusiness products from the current state', () => {
      const state = { ...initialState };
      state.freePhoneBusinessProducts = [{ id: 'abc' }, { id: 'def' }] as Product[];

      const result = selectFreePhoneBusinessProducts.projector(state);

      expect(result).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
  });

  describe('selectConfig', () => {
    it('should select the config from the current state', () => {
      const state = { ...initialState };
      state.config = { isAccountSelectorConsumer: true } as ProductOverviewConfigState;

      const result = selectConfig.projector(state);

      expect(result.isAccountSelectorConsumer).toBeTruthy();
    });
  });

  describe('selectScopes', () => {
    it('should select the scopes from the current state', () => {
      const state = { ...initialState };
      state.scopes = { hasSalesScope: true } as ProductOverviewScopesState;

      const result = selectScopes.projector(state);

      expect(result.hasSalesScope).toBeTruthy();
    });
  });

  describe('selectMarketingPages', () => {
    it('should select the marketing pages from the current state', () => {
      const state = { ...initialState };
      state.marketingPages = { dtv: 'dtv page' } as MarketingPages;

      const result = selectMarketingPages.projector(state);

      expect(result.dtv).toEqual('dtv page');
    });
  });
});
