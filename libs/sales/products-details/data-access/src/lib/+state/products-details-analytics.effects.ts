import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { order, updateProducts } from './products-details.actions';
import { mergeMap, take, tap } from 'rxjs/operators';
import { DataLayerAttributes, DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { Store } from '@ngrx/store';
import { selectProducts } from './products-details.selectors';
import { ProductsDetailsSlice } from './products-details.reducers';
import { Product } from '@sales/shared/data-access';

class DataLayerConstants {
  static readonly MESSAGE_GROUPS = ['product-finder'];
  static readonly EVENT_NAME_VIEW_PRODUCT = 'product viewed';
  static readonly ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED = 'order button clicked';
}

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsAnalyticsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataLayerService: DataLayerService,
    private readonly store: Store<ProductsDetailsSlice>
  ) {}

  onOrderParkOrderEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(order),
        mergeMap(() => this.store.select(selectProducts).pipe(take(1))),
        tap((products: Product[]) => this.parkOrderEvent(products))
      ),
    { dispatch: false }
  );

  onUpdateProductsSendProductViewedEvent$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProducts),
        mergeMap(() => this.store.select(selectProducts).pipe(take(1))),
        tap((products: Product[]) => this.sendProductViewedEvent(products))
      ),
    { dispatch: false }
  );

  private parkOrderEvent(products: Product[]): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        EventNameEnum.EVENT_NAME_BUTTON_CLICKED,
        EventTypeEnum.EVENT_TYPE_CLICK,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED,
        product: this.createUdlItems(products),
      }),
      category: this.categorySelfService(),
      strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE,
    });
  }

  private categorySelfService(): udl.Category {
    return this.dataLayerService.createCategory('self-service');
  }

  private enrichWithCommonAttributes(attributes: DataLayerAttributes): DataLayerAttributes {
    return Object.assign(this.commonAttributes(), attributes);
  }

  private commonAttributes(): DataLayerAttributes {
    return {
      intent: 'product finder',
      flowType: 'self-service',
      source: 'information',
    };
  }

  private createUdlItems(products: Product[]): udl.Item[] {
    return products.map((product: Product) =>
      new udl.ItemBuilder()
        .withProductInfo(
          new udl.ProductBuilder()
            .withProductId(product.omapiProduct.externalProductCode as string)
            .withProductType(product.omapiProduct.productType as string)
            .build()
        )
        .build()
    );
  }

  private sendProductViewedEvent(products: Product[]): void {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(
        DataLayerConstants.EVENT_NAME_VIEW_PRODUCT,
        EventTypeEnum.EVENT_TYPE_VIEW_PRODUCT_DETAILS,
        DataLayerConstants.MESSAGE_GROUPS
      ),
      attributes: {
        product: this.createUdlItems(products),
      },
    });
  }
}
