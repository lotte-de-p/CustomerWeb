import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DtvBoxManagementSlice } from './dtv-box-management.state';
import {
  loadAddresses,
  loadSubscriptions,
  resetPinCode,
  setSelectedAddress as setSelectedAddress,
  showSecurityCode,
} from './dtv-box-management.actions';
import {
  selectAddresses,
  selectIsPinCodeReset,
  selectSelectedAddress,
  selectShowSecurityCode,
  selectSubscriptions,
  selectSubscriptionsBySelectedAddress,
} from './dtv-box-management.selectors';
import { Observable } from 'rxjs';
import { Address } from '../entities/address.model';
import { DtvBoxSubscription } from '../entities/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class DtvBoxManagementFacade {
  private readonly store = inject(Store<DtvBoxManagementSlice>);

  readonly subscriptions$: Observable<DtvBoxSubscription[]> = this.store.select(selectSubscriptions);
  readonly addressesWithDtvSubscriptions$: Observable<Address[]> = this.store.select(selectAddresses);
  readonly selectedAddress$: Observable<Address | undefined> = this.store.select(selectSelectedAddress);
  readonly isPinCodeReset$: Observable<boolean> = this.store.select(selectIsPinCodeReset);
  readonly showSecurityCode$: Observable<boolean> = this.store.select(selectShowSecurityCode);
  readonly selectedDtvSubscription$: Observable<DtvBoxSubscription[] | undefined> = this.store.select(
    selectSubscriptionsBySelectedAddress
  );

  loadSubscriptions(): void {
    this.store.dispatch(loadSubscriptions());
  }

  loadAddresses(): void {
    this.store.dispatch(loadAddresses());
  }

  resetPinCode(identifier: string): void {
    this.store.dispatch(resetPinCode({ identifier }));
  }

  showSecurityCode(): void {
    this.store.dispatch(showSecurityCode());
  }

  setSelectedAddress(address: Address): void {
    this.store.dispatch(setSelectedAddress({ address }));
  }
}
