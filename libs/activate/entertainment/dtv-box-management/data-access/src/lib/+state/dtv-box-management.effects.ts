import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DtvBoxManagementService } from '../services/dtv-box-management.service';
import {
  loadAddresses,
  loadAddressesFailure,
  loadAddressesSuccess,
  loadSubscriptions,
  loadSubscriptionsFailure,
  loadSubscriptionsSuccess,
  resetPinCode,
  resetPinCodeFailure,
  resetPinCodeSuccess,
} from './dtv-box-management.actions';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { of } from 'rxjs';
import { Address } from '../entities/address.model';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DtvBoxManagementEffects {
  loadSubscriptions$;
  loadAddresses$;
  resetPinCode$;

  constructor(
    private readonly actions$: Actions,
    private readonly dtvBoxManagementService: DtvBoxManagementService
  ) {
    this.loadSubscriptions$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadSubscriptions),
        switchMap(() => this.dtvBoxManagementService.getSubscriptions()),
        map((subscriptions: DtvBoxSubscription[]) => {
          return loadSubscriptionsSuccess({ subscriptions });
        }),
        catchError((error) => of(loadSubscriptionsFailure({ error: error })))
      )
    );

    this.loadAddresses$ = createEffect(() =>
      actions$.pipe(
        ofType(loadAddresses),
        switchMap(() => this.dtvBoxManagementService.getAddresses()),
        map((addresses: Address[]) => loadAddressesSuccess({ addresses })),
        catchError((error) => of(loadAddressesFailure({ error: error })))
      )
    );

    this.resetPinCode$ = createEffect(() =>
      actions$.pipe(
        ofType(resetPinCode),
        switchMap((request) => this.dtvBoxManagementService.resetPincode(request.identifier)),
        map((response: HttpResponse<null>) => {
          if (response.status === 200) {
            return resetPinCodeSuccess();
          } else {
            return resetPinCodeFailure({ error: { message: response.statusText } as Error });
          }
        }),
        catchError((error) => of(resetPinCodeFailure({ error: error })))
      )
    );
  }
}
