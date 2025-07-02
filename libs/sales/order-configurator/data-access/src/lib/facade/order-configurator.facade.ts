import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, map, Observable, take } from 'rxjs';
import { customerAccount, errors, isPreLoading, offer, orderNumber } from '../+state/order-configurator.selectors';
import { getCustomerAccount, loadOfferFromUrl } from '../+state/order-configurator.actions';
import { Offer } from '@sales/order-configurator/offer/domain';

@Injectable({
  providedIn: 'root',
})
export class OrderConfiguratorFacade {
  errors$: Observable<Error[]> = this.store.select(errors);
  orderNumber$: Observable<string | undefined> = this.store.select(orderNumber);
  preLoading$: Observable<boolean> = this.store.select(isPreLoading);

  constructor(private readonly store: Store) {}

  loadOfferFromUrl(): void {
    this.store.dispatch(loadOfferFromUrl());
  }

  loadCustomerAccount(): void {
    this.store.dispatch(getCustomerAccount());
  }

  isInstallationAddressStepRequired(): Observable<boolean> {
    return forkJoin([this.getCustomerAccount(), this.getOffer()]).pipe(
      map(
        ([customerAccount, offer]) =>
          !!customerAccount && !customerAccount.isNewCustomer() && !!offer && offer.requiresInstallation()
      )
    );
  }

  private getOffer(): Observable<Offer | undefined> {
    return this.store.select(offer).pipe(take(1));
  }

  private getCustomerAccount() {
    return this.store.select(customerAccount).pipe(take(1));
  }
}
