import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { missingData, setMissingIdentityData } from '@sales/hardware-checkout/data-access';

@Injectable({ providedIn: 'root' })
export class MissingDataFacade {
  missingData$ = this.store.select(missingData);

  constructor(private readonly store: Store) {}

  setMissingData(nrn: string, eid: string, isForeignIdentity: boolean): void {
    this.store.dispatch(
      setMissingIdentityData({
        missingIdentityData: {
          nationalRegistryNumber: nrn,
          identityCardNumber: eid,
          isForeignIdentity: isForeignIdentity,
        },
      })
    );
  }
}
