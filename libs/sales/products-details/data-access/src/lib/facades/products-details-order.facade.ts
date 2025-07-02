import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsDetailsSlice } from '../+state/products-details.reducers';
import { selectSalesOffer } from '../+state/products-details.selectors';
import { Observable } from 'rxjs';
import { SalesOffer } from '@sales/shared/data-access';
import { order, updateHumanCheckoutUrl, updateSalesCheckoutUrl } from '../+state/products-details.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsOrderFacade {
  salesOffer$: Observable<SalesOffer | undefined> = this.store.select(selectSalesOffer);

  constructor(private readonly store: Store<ProductsDetailsSlice>) {}

  updateSalesCheckoutUrl(salesCheckoutUrl: string): void {
    this.store.dispatch(updateSalesCheckoutUrl({ salesCheckoutUrl }));
  }

  updateHumanCheckoutUrl(humanCheckoutUrl: string): void {
    this.store.dispatch(updateHumanCheckoutUrl({ humanCheckoutUrl }));
  }

  order(): void {
    this.store.dispatch(order());
  }
}
