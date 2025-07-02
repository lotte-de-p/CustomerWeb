import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductPriceChangesDatalayerService } from '../services/product-price-changes-datalayer.service';
import {
  loadProductPriceChangesFailure,
  loadProductPriceChangesSuccess,
  selectBillingAccount,
  setAuthentication,
} from './product-price-changes.actions';
import { map, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductPriceChangesDatalayerEffects {
  productPriceChangesLoaded$;
  productPriceChangesNotLoaded$;
  selectBillingAccount$;
  inPageLoginShown$;

  constructor(
    private readonly actions$: Actions,
    private readonly productPriceChangesDatalayerService: ProductPriceChangesDatalayerService
  ) {
    this.productPriceChangesLoaded$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loadProductPriceChangesSuccess),
          map(({ productPriceChanges }) => productPriceChanges[0]?.productPriceChanges || [undefined]),
          tap((productPriceChanges) => {
            productPriceChanges.forEach((productPriceChange) =>
              this.productPriceChangesDatalayerService.sendSelectProductPriceChange(productPriceChange)
            );
          })
        ),
      { dispatch: false }
    );
    this.productPriceChangesNotLoaded$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loadProductPriceChangesFailure),
          tap(({ status }) => {
            if (status === 403) {
              this.productPriceChangesDatalayerService.sendImpression(
                ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME,
                ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LIMITED_ACCESS
              );
            }
          })
        ),
      { dispatch: false }
    );
    this.selectBillingAccount$ = createEffect(
      () =>
        combineLatest([
          this.actions$.pipe(ofType(selectBillingAccount)),
          this.actions$.pipe(ofType(loadProductPriceChangesSuccess)),
        ]).pipe(
          map(
            ([{ selectedBillingAccount }, { productPriceChanges }]) =>
              productPriceChanges.find(
                (productPriceChange) => productPriceChange.accountNumber === selectedBillingAccount
              )?.productPriceChanges || []
          ),
          tap((productPriceChanges) =>
            productPriceChanges.forEach((productPriceChange) =>
              this.productPriceChangesDatalayerService.sendSelectProductPriceChange(productPriceChange)
            )
          )
        ),
      { dispatch: false }
    );
    this.inPageLoginShown$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(setAuthentication),
          tap(({ isAuthenticated, customLogin }) => {
            if (!isAuthenticated) {
              this.productPriceChangesDatalayerService.sendImpression(
                ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
                ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN
              );
            }
            if (isAuthenticated && customLogin) {
              this.productPriceChangesDatalayerService.sendClick(
                ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
                ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN
              );
            }
          })
        ),
      { dispatch: false }
    );
  }
}
