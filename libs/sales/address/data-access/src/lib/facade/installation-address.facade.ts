import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstallationAddressInterface } from '../interfaces/installation-address.interface';
import { Store } from '@ngrx/store';
import { addresses, editableAddress } from '../+state/address.selectors';
import { setSelectedAddress } from '../+state/address.actions';

@Injectable({ providedIn: 'root' })
export class InstallationAddressFacade {
  addresses$: Observable<InstallationAddressInterface[] | undefined> = this.store.select(addresses);
  editableAddress$: Observable<InstallationAddressInterface | undefined> = this.store.select(editableAddress);

  constructor(private readonly store: Store) {}

  selectAddress(address: InstallationAddressInterface): void {
    this.store.dispatch(setSelectedAddress({ selectedAddress: address }));
  }
}
