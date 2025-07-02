import { setConfig, setScopes, setSelectedAccountProducts } from './product-overview.actions';
import {
  ProductOverviewConfigState,
  ProductOverviewScopesState,
  ProductOverviewState,
  initialState,
  productOverviewReducer,
} from './product-overview.reducer';
import { Product } from '../../../fleet-user/shared/models/product.model';

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

  describe('setConfig action', () => {
    it('should update the config', () => {
      const config: ProductOverviewConfigState = {
        componentInstanceID: 'comp instance id',
        isAccountSelectorConsumer: true,
        manageOptionUrl: 'manage option url',
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
});
