import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsDetailsSlice } from '../+state/products-details.reducers';
import { selectProducts } from '../+state/products-details.selectors';
import { Observable } from 'rxjs';
import { Product } from '@sales/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsFacade {
  products$: Observable<Product[]> = this.store.select(selectProducts);

  constructor(private readonly store: Store<ProductsDetailsSlice>) {}
}
