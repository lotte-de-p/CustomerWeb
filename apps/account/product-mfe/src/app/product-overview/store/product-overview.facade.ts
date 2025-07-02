import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  setSelectedAccountProducts,
  setFreePhoneBusinessProducts,
  setConfig,
  setScopes,
  setMarketingPages,
} from './product-overview.actions';
import {
  ProductOverviewConfigState,
  ProductOverviewScopesState,
  ProductOverviewState,
} from './product-overview.reducer';
import {
  selectSelectedAccountProducts,
  selectFreePhoneBusinessProducts,
  selectConfig,
  selectScopes,
  selectMarketingPages,
} from './product-overview.selectors';
import { Product } from '../models/product.model';
import { MarketingPages } from '../product-overview.component';

@Injectable({
  providedIn: 'root',
})
export class ProductOverviewFacade {
  get selectedAccountProducts$() {
    return this.store.select(selectSelectedAccountProducts);
  }

  get freePhoneBusinessProducts$() {
    return this.store.select(selectFreePhoneBusinessProducts);
  }

  get config$() {
    return this.store.select(selectConfig);
  }

  get scopes$() {
    return this.store.select(selectScopes);
  }

  get marketingPages$() {
    return this.store.select(selectMarketingPages);
  }

  public setSelectedAccountProducts(products: Product[]) {
    this.store.dispatch(setSelectedAccountProducts({ products }));
  }

  public setFreePhoneBusinessProducts(products: Product[]) {
    this.store.dispatch(setFreePhoneBusinessProducts({ products }));
  }

  public setConfig(config: ProductOverviewConfigState) {
    this.store.dispatch(setConfig({ config }));
  }

  public setScopes(scopes: ProductOverviewScopesState) {
    this.store.dispatch(setScopes({ scopes }));
  }

  public setMarketingPages(pages: MarketingPages) {
    this.store.dispatch(setMarketingPages({ pages }));
  }

  constructor(private readonly store: Store<ProductOverviewState>) {}
}
