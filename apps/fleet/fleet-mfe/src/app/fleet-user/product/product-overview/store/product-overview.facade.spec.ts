import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { setConfig, setScopes, setSelectedAccountProducts } from './product-overview.actions';
import { ProductOverviewFacade } from './product-overview.facade';
import { ProductOverviewConfigState, ProductOverviewScopesState } from './product-overview.reducer';
import { Product } from '../../../shared/models/product.model';

describe('ProductOverviewFacade', () => {
  let facade: ProductOverviewFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [Store],
    });

    facade = TestBed.inject(ProductOverviewFacade);
  });

  describe('setSelectedAccountProducts', () => {
    it("should call the store's dispatch method to update the selected account products", () => {
      const products = [{ id: 'abc' }, { id: 'def' }] as Product[];
      jest.spyOn(facade['store'], 'dispatch');

      facade.setSelectedAccountProducts(products);

      expect(facade['store'].dispatch).toHaveBeenCalledWith(setSelectedAccountProducts({ products }));
    });
  });

  describe('setConfig', () => {
    it("should call the store's dispatch method to update the config", () => {
      const config = { isAccountSelectorConsumer: true } as ProductOverviewConfigState;
      jest.spyOn(facade['store'], 'dispatch');

      facade.setConfig(config);

      expect(facade['store'].dispatch).toHaveBeenCalledWith(setConfig({ config }));
    });
  });

  describe('setScopes', () => {
    it("should call the store's dispatch method to update the scopes", () => {
      const scopes = { hasSalesScope: true } as ProductOverviewScopesState;
      jest.spyOn(facade['store'], 'dispatch');

      facade.setScopes(scopes);

      expect(facade['store'].dispatch).toHaveBeenCalledWith(setScopes({ scopes }));
    });
  });
});
