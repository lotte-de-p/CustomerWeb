import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectBrand,
  selectError,
  selectIsBelgianIdentity,
  selectItsMeResponse,
  selectOmapiProduct,
  selectSearchCustomerResultExists,
  selectUserInput,
} from '../+state/customer-registration.selectors';
import { CustomerRegistrationState, IdentityDetails, UserInput } from '../+state/customer-registration.state';
import {
  loginAction,
  preformResidentialSearchCustomerAction,
  saveIdentityDetailsAction,
} from '../+state/customer-registration.actions';
import { OmapiProductCategoryUtil } from '../util/omapi-product-category.util';

@Injectable({
  providedIn: 'root',
})
export class IdentityDetailsFacade {
  brand$: Observable<string> = this.store.select(selectBrand);
  userInput$: Observable<UserInput> = this.store.select(selectUserInput);
  searchCustomerResultExists$ = this.store.select(selectSearchCustomerResultExists);
  error$ = this.store.select(selectError);
  omapiProducts$ = this.store.select(selectOmapiProduct);
  isBelgianIdentitySelected$ = this.store.select(selectIsBelgianIdentity);
  prepaidOmapiProductExists$ = OmapiProductCategoryUtil.checkOmapiProductsByCategory(this.omapiProducts$, 'prepaid');
  standAloneMobileOmapiProductExists$ = OmapiProductCategoryUtil.checkOmapiProductsByCategory(
    this.omapiProducts$,
    'standalone-mobile'
  );
  fixedLineProductExists$ = OmapiProductCategoryUtil.checkOmapiProductsByLabel(this.omapiProducts$, 'fixed line');
  itsMeResponse$ = this.store.select(selectItsMeResponse);

  constructor(private readonly store: Store<CustomerRegistrationState>) {}

  saveIdentityDetails(identityDetails: IdentityDetails) {
    this.store.dispatch(saveIdentityDetailsAction(identityDetails));
  }

  searchResidentialCustomer() {
    this.store.dispatch(preformResidentialSearchCustomerAction());
  }

  login() {
    this.store.dispatch(loginAction());
  }
}
