import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedAccountProducts, setConfig, setScopes } from './product-overview.actions';
import {
  ProductOverviewConfigState,
  ProductOverviewScopesState,
  ProductOverviewState,
} from './product-overview.reducer';
import { selectSelectedAccountProducts, selectConfig, selectScopes } from './product-overview.selectors';
import { Product } from '../../../fleet-user/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductOverviewFacade {
  get selectedAccountProducts$() {
    return this.store.select(selectSelectedAccountProducts);
  }

  get config$() {
    return this.store.select(selectConfig);
  }

  get scopes$() {
    return this.store.select(selectScopes);
  }

  public setSelectedAccountProducts(products: Product[]) {
    this.store.dispatch(setSelectedAccountProducts({ products }));
  }

  public setConfig(config: ProductOverviewConfigState) {
    this.store.dispatch(setConfig({ config }));
  }

  public setScopes(scopes: ProductOverviewScopesState) {
    this.store.dispatch(setScopes({ scopes }));
  }

  constructor(private readonly store: Store<ProductOverviewState>) {}
}
