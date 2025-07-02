import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import {
  updateEnableLoader,
  updateEnableLoaderMask,
  updateHumanCheckoutUrl,
  updateOneConfiguratorUrl,
  updateProductsDetailsUrl,
  updateSalesCheckoutUrl,
} from '../../+state/product-finder.actions';

@Injectable({ providedIn: 'root' })
export class ProductFinderConfigFacade {
  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateEnableLoader(enableLoader: boolean): void {
    this.store.dispatch(updateEnableLoader({ enableLoader }));
  }

  updateEnableLoaderMask(enableLoaderMask: boolean): void {
    this.store.dispatch(updateEnableLoaderMask({ enableLoaderMask }));
  }

  updateSalesCheckoutUrl(salesCheckoutUrl: string): void {
    this.store.dispatch(updateSalesCheckoutUrl({ salesCheckoutUrl }));
  }

  updateHumanCheckoutUrl(humanCheckoutUrl: string): void {
    this.store.dispatch(updateHumanCheckoutUrl({ humanCheckoutUrl }));
  }

  updateOneConfiguratorUrl(oneConfiguratorUrl: string): void {
    this.store.dispatch(updateOneConfiguratorUrl({ oneConfiguratorUrl }));
  }

  updateProductsDetailsUrl(productsDetailsUrl: string): void {
    this.store.dispatch(updateProductsDetailsUrl({ productsDetailsUrl }));
  }
}
