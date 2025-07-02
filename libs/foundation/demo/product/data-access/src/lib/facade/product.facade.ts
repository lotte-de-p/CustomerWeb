import { Injectable } from '@angular/core';
import { getProducts } from '../+state/product.actions';
import { Store } from '@ngrx/store';
import { ProductState } from '../+state/product.state';
import { selectProducts } from '../+state/product.selectors';
import { Product } from '../entities/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  constructor(private readonly store: Store<ProductState>) {}

  readonly products$ = this.store.select(selectProducts);

  loadProducts() {
    this.store.dispatch(getProducts());
  }

  manageBundleOptions(planIdentifier: string, product: Product) {
    console.log(planIdentifier);
    console.log(product);
  }

  manageProducOptions(product: Product) {
    console.log(product);
  }
}
