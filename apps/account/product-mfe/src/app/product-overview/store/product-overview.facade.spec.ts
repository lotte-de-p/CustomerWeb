import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Product } from '../models/product.model';
import {
  setConfig,
  setFreePhoneBusinessProducts,
  setMarketingPages,
  setScopes,
  setSelectedAccountProducts,
} from './product-overview.actions';
import { ProductOverviewFacade } from './product-overview.facade';
import { ProductOverviewConfigState, ProductOverviewScopesState } from './product-overview.reducer';
import { MarketingPages } from '../product-overview.component';

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

  describe('setFreePhoneBusinessProducts', () => {
    it("should call the store's dispatch method to update the FreePhoneBusiness products", () => {
      const products = [{ id: 'abc' }, { id: 'def' }] as Product[];
      jest.spyOn(facade['store'], 'dispatch');

      facade.setFreePhoneBusinessProducts(products);

      expect(facade['store'].dispatch).toHaveBeenCalledWith(setFreePhoneBusinessProducts({ products }));
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

  describe('setMarketingPages', () => {
    it("should call the store's dispatch method to update the marketing pages", () => {
      const pages = {
        dtv: 'dtv page',
        internet: 'internet page',
        mobile: 'mobile page',
        fixed: 'fixed page',
      } as MarketingPages;
      jest.spyOn(facade['store'], 'dispatch');

      facade.setMarketingPages(pages);

      expect(facade['store'].dispatch).toHaveBeenCalledWith(setMarketingPages({ pages }));
    });
  });
});
