import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  saveSalesOrder,
  setAnalyticsAttributes,
  setCart,
  setContractSummaryRequired,
  setContractSummaryUrl,
  setUrlRequestParameters,
} from './hardware-checkout.actions';
import { filter, forkJoin, map, mergeMap, of, take, tap } from 'rxjs';
import { PathCategorisationService } from '@telenet/ng-lib-page';
import { Injectable } from '@angular/core';
import { SalesOfferUtil } from '../util/sales-offer.util';
import { SalesOrderUtil } from '../util/sales-order.util';
import { Store } from '@ngrx/store';
import { customerType, omapiQueryProducts } from './hardware-checkout.selectors';
import { UrlRequestParameters } from '../interfaces/url-request-parameters.interface';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { CustomerTypeEnum } from '../enums/customer-type.enum';
import { SessionStorageConstants } from '../constants/hardware-checkout.constant';
import { Cart } from 'udl';

@Injectable({
  providedIn: 'root',
})
export class HardwareCheckoutEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  setAnalyticsIntent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUrlRequestParameters),
      map((action) => {
        const analyticsAttributes = this.commonAttributes(action?.urlRequestParameters);
        // storing analytics info in the session as well for the thank-you page
        // because NC does not provide an API to retrieve a sales order that is in 'processing' state
        window.sessionStorage.setItem(
          SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES,
          JSON.stringify(analyticsAttributes)
        );
        return setAnalyticsAttributes({ analyticsAttributes: analyticsAttributes });
      })
    )
  );

  calculateSalesOrderCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveSalesOrder),
      mergeMap((action) =>
        forkJoin({
          salesOrder: of(action),
          omapiQueryProducts: this.store.select(omapiQueryProducts).pipe(take(1)),
          isSoho: this.store.select(customerType).pipe(
            take(1),
            map((type) => type === CustomerTypeEnum.SOHO)
          ),
        }).pipe(
          filter((action) => action.omapiQueryProducts !== undefined),
          map((action) =>
            SalesOrderUtil.mapToUdlCart(action.salesOrder, action.omapiQueryProducts || [], action.isSoho)
          ),
          map((cart: Cart) => {
            // storing analytics info in the session as well for the thank-you page
            // because NC does not provide an API to retrieve a sales order that is in 'processing' state
            window.sessionStorage.setItem(SessionStorageConstants.CHECKOUT_ANALYTICS_CART, JSON.stringify(cart));
            return setCart({
              cart: cart,
            });
          })
        )
      )
    )
  );

  calculateOfferCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUrlRequestParameters),
      map((action) => action.urlRequestParameters),
      filter((urlRequestParams) => urlRequestParams !== undefined && urlRequestParams.salesOffer.offers !== undefined),
      map((urlRequestParams) => SalesOfferUtil.mapToUdlCart(urlRequestParams.salesOffer)),
      map((cart) => setCart({ cart: cart }))
    )
  );

  setContractSummaryRequired$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setContractSummaryRequired),
        ofType(setContractSummaryRequired),
        tap((action) => {
          window.sessionStorage.setItem(
            SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED,
            action.contractSummaryRequired.toString()
          );
        })
      ),
    { dispatch: false }
  );

  setContractSummaryUrl$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setContractSummaryUrl),
        tap((action) => {
          window.sessionStorage.setItem(
            SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL,
            action.contractSummaryUrl
          );
        })
      ),
    { dispatch: false }
  );

  private getIntentPrefix(): string {
    return this.pathCategorisationService.getCustomerBrand() + ` checkout:`;
  }

  private commonAttributes(urlRequestParameters: UrlRequestParameters | undefined): DataLayerAttributes {
    return {
      intent: this.getIntentPrefix() + urlRequestParameters?.intent,
      flowType: urlRequestParameters?.flow,
      source: urlRequestParameters?.source,
      flowCategory: 'migration',
      itemGroup: 'new sales',
    };
  }
}
