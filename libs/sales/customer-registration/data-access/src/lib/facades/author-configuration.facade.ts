import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { isPidEnabled, selectMarketingUrl, selectPrivacyPolicyUrl } from '../+state/customer-registration.selectors';
import { setAuthorConfigurationAction, setBrand, setCategory } from '../+state/customer-registration.actions';
import { AuthorConfiguration, CustomerCategory } from '../+state/customer-registration.state';
import { CustomerCategoryEnum, PathCategorisationService } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class AuthorConfigurationFacade {
  privacyPolicyUrl$: Observable<string> = this.store.select(selectPrivacyPolicyUrl);
  marketingUrl$: Observable<string> = this.store.select(selectMarketingUrl);
  isPidEnabled$: Observable<boolean> = this.store.select(isPidEnabled);

  constructor(
    private readonly store: Store,
    private readonly service: PathCategorisationService
  ) {}

  setAuthorConfiguration(authorConfiguration: AuthorConfiguration) {
    this.store.dispatch(setAuthorConfigurationAction(authorConfiguration));
  }

  setBrandFromUrl() {
    const brand = this.service.getCustomerBrand()?.toUpperCase();
    this.store.dispatch(setBrand({ brand: brand ?? '' }));
  }
  setCustomerCategory() {
    const category = this.isResidential() ? CustomerCategory.RESIDENTIAL : CustomerCategory.BUSINESS;
    this.store.dispatch(setCategory({ category: category }));
  }

  getBrand(): string {
    const customerBrand = this.service.getCustomerBrand();
    return customerBrand ? customerBrand.toLowerCase() : '';
  }
  isResidential(): boolean {
    return this.service.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL);
  }

  isBusiness(): boolean {
    return this.service.isCustomerOfType(CustomerCategoryEnum.BUSINESS);
  }
}
