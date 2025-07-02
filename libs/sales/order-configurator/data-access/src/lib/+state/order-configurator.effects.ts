import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { of, take } from 'rxjs';
import {
  getCustomerAccount,
  loadOfferFromUrl,
  orderOnAddressSuccess,
  setCustomerAccount,
  setError,
  setOffer,
} from './order-configurator.actions';
import { Injectable } from '@angular/core';
import { InstallationAddressFacade } from '@sales/order-configurator/domain-installation-address';
import { CustomerAccountFacade } from '@sales/order-configurator/customer-account/domain';
import { OfferFacade } from '@sales/order-configurator/offer/domain';

@Injectable({ providedIn: 'root' })
export class OrderConfiguratorEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly installationAddressFacade: InstallationAddressFacade,
    private readonly offerFacade: OfferFacade,
    private readonly customerAccountFacade: CustomerAccountFacade
  ) {}

  prepareOrderConfiguratorFlowForNewCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCustomerAccount),
      map((action) => action.customerAccount),
      filter((customerAccount) => customerAccount.isNewCustomer()),
      mergeMap(() =>
        this.installationAddressFacade.prepareOrderForNewCustomer().pipe(
          map((order) => orderOnAddressSuccess({ orderResult: order })),
          catchError((error) => {
            return this.handleError(error);
          })
        )
      )
    )
  );

  loadOfferFromUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOfferFromUrl),
      mergeMap(() =>
        this.offerFacade.getOfferFromEncodedUrlParameter().pipe(
          take(1),
          map((offer) => setOffer({ offer: offer })),
          catchError((error) => {
            return this.handleError(error);
          })
        )
      )
    )
  );

  getCustomerAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCustomerAccount),
      mergeMap(() =>
        this.customerAccountFacade.getCustomerAccount().pipe(
          take(1),
          map((customerAccount) => setCustomerAccount({ customerAccount: customerAccount })),
          catchError((error) => {
            return this.handleError(error);
          })
        )
      )
    )
  );

  private handleError(error: Error) {
    const errorDetails = {
      message: error.message || 'An unknown error occurred',
      stack: error.stack || null,
      name: 'Order Configurator Error',
    } as Error;
    return of(setError({ error: errorDetails }));
  }
}
