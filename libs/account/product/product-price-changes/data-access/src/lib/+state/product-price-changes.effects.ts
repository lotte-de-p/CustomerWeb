import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadingFinished,
  loadProductPriceChanges,
  loadProductPriceChangesFailure,
  loadProductPriceChangesSuccess,
  selectBillingAccount,
  selectProductPriceChanges,
  setAuthentication,
  validateAuthentication,
  validateCustomAuthentication,
  validateCustomAuthenticationFailure,
} from './product-price-changes.actions';
import { catchError, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '@telenet/ng-lib-ocapi';
import { ProductPriceChangesService } from '../services/product-price-changes.service';
import { MessageService } from '@telenet/ng-lib-message';
import { combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductPriceChangesEffects {
  setAuthentication$;
  loadProductPriceChanges$;
  validateCustomAuthentication$;
  validateAuthentication$;
  selectBillingAccount$;

  constructor(
    private readonly actions$: Actions,
    private readonly productPriceChangesService: ProductPriceChangesService,
    private readonly loginService: LoginService,
    private readonly messageService: MessageService
  ) {
    this.setAuthentication$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setAuthentication), // on changing the authentication to true, load product price changes
        filter(({ isAuthenticated }) => isAuthenticated),
        map(() => loadProductPriceChanges())
      )
    );
    this.loadProductPriceChanges$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadProductPriceChanges), // on this action => load the product price changes
        switchMap(() => this.productPriceChangesService.getProductPriceChanges()),
        tap(() => this.messageService.clearMessages(ProductPriceChangesService.MESSAGE_GROUP)),
        map((productPriceChanges) => loadProductPriceChangesSuccess({ productPriceChanges })),
        catchError((error, source) =>
          source.pipe(
            startWith(
              loadProductPriceChangesFailure({
                error: error.message,
                status: error.status,
              })
            )
          )
        )
      )
    );
    this.validateCustomAuthentication$ = createEffect(() =>
      this.actions$.pipe(
        ofType(validateCustomAuthentication), // on this action validate the custom login
        switchMap((loginDetails) => this.productPriceChangesService.login(loginDetails)),
        tap(() => this.messageService.clearMessages(ProductPriceChangesService.MESSAGE_GROUP)),
        map(() => setAuthentication({ isAuthenticated: true, customLogin: true })),
        catchError((error, source) => source.pipe(startWith(validateCustomAuthenticationFailure({ error }))))
      )
    );
    this.validateAuthentication$ = createEffect(() =>
      this.actions$.pipe(
        ofType(validateAuthentication), // on this action validate if the user is logged in
        switchMap(() => this.loginService.getLoginDetails()),
        map((loginDetails) => setAuthentication({ isAuthenticated: loginDetails?.isLoggedIn(), customLogin: false })),
        catchError((_error, source) => source.pipe(startWith(loadingFinished())))
      )
    );
    this.selectBillingAccount$ = createEffect(() =>
      combineLatest([
        this.actions$.pipe(ofType(selectBillingAccount)),
        this.actions$.pipe(ofType(loadProductPriceChangesSuccess)),
      ]).pipe(
        map(([{ selectedBillingAccount }, { productPriceChanges }]) =>
          selectProductPriceChanges({
            selectedProductPriceChanges:
              productPriceChanges.find(
                (productPriceChange) => productPriceChange.accountNumber === selectedBillingAccount
              )?.productPriceChanges || [],
          })
        )
      )
    );
  }
}
