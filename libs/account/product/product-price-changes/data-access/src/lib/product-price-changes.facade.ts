import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductPriceChangesSlice } from './+state/product-price-changes.reducers';
import {
  selectAuthenticationError,
  selectIsAuthenticated,
  selectLoadError,
  selectLoading,
  selectProductPriceChanges,
  selectSelectedBillingAccount,
  selectSelectedProductPriceChanges,
} from './+state/product-price-changes.selectors';
import {
  selectBillingAccount,
  validateAuthentication,
  validateCustomAuthentication,
} from './+state/product-price-changes.actions';
import { Login } from './entities/product-price-change';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductPriceChangesFacade {
  private readonly store = inject(Store<ProductPriceChangesSlice>);
  loading$ = this.store.select(selectLoading);
  loadError$ = this.store.select(selectLoadError);
  authenticationError$ = this.store.select(selectAuthenticationError).pipe(map((loginError) => !!loginError));
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  productPriceChanges$ = this.store.select(selectProductPriceChanges);
  selectedProductPriceChanges$ = this.store.select(selectSelectedProductPriceChanges);
  selectedBillingAccount$ = this.store.select(selectSelectedBillingAccount);

  validateAuthentication() {
    this.store.dispatch(validateAuthentication());
  }

  login(loginDetails: Login) {
    this.store.dispatch(validateCustomAuthentication(loginDetails));
  }

  selectBillingAccount(selectedBillingAccount: string) {
    this.store.dispatch(selectBillingAccount({ selectedBillingAccount }));
  }

  get billingAccounts$() {
    return this.productPriceChanges$.pipe(
      map((productPriceChanges) => productPriceChanges.map((productPriceChange) => productPriceChange.accountNumber))
    );
  }
}
