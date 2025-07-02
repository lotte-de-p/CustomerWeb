import { Injectable } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { Observable } from 'rxjs';
import * as udl from 'udl';
import isEmpty from 'lodash-es/isEmpty';
import { UrlService, PathCategorisationService } from '@telenet/ng-lib-page';
import { SalesFacade } from '../../../product/shared/store/sales/state/sales/sales.facade';
import { SalesConstants } from '../../constants/sales.constant';
import { SalesOrder } from '../../models/sales-order.model';
@Injectable({
  providedIn: 'root',
})
export class SalesDataLayerService {
  salesOrder$: Observable<SalesOrder>;
  isIntentCalculated$: Observable<boolean>;
  so: SalesOrder;
  protected messageGroup: string[] = [SalesConstants.MESSAGE_GROUP, SalesConstants.SALES_CUSTOM_MESSAGE_GROUP];
  constructor(
    private readonly salesFacade: SalesFacade,
    protected dataLayerService: DataLayerService,
    public urlService: UrlService,
    public pathCategorisationService: PathCategorisationService
  ) {
    this.salesOrder$ = salesFacade.salesOrder$;
    this.isIntentCalculated$ = salesFacade.isIntentCalculated$;
    this.setSalesOrder();
  }

  private setSalesOrder() {
    this.salesOrder$.subscribe((salesOrder) => (this.so = salesOrder));
  }

  createCartObjectForRemovedItem(salesOrder, removedItems): udl.Cart {
    const cartObj = new udl.Cart();

    if (salesOrder) {
      cartObj.setCartID(salesOrder.id);
      if (removedItems && removedItems.length > 0) {
        this.removeCartItems(removedItems, cartObj);
      } else {
        this.addCartItems(salesOrder, cartObj);
      }
    }

    return cartObj;
  }

  private addCartItems(salesOrder, cartObj): void {
    const lineItems = salesOrder.lineItems;
    lineItems.forEach((lineItem) => {
      lineItem.orderItems.forEach((orderItem) => {
        if (orderItem.status === 'ACTIVE' || orderItem.status === 'Active') {
          cartObj.addItem(this.populateExistingProductInfo(orderItem.productInfo));
        }
        orderItem.orderItems.forEach((subOrderItem) => {
          if (subOrderItem.status === 'DISCONNECT') {
            cartObj.addItem(this.populateExistingProductInfo(subOrderItem.productInfo));
          }
        });
      });
    });
  }

  private removeCartItems(removedItems, cartObj): void {
    removedItems.forEach((removedItem) => {
      removedItem.offers.forEach((item) => {
        if (item.id && item.type) {
          let isItemExist = [];
          if (!isEmpty(cartObj.getItems())) {
            isItemExist = cartObj.getItems().find((cartObjItem) => {
              return cartObjItem.getProductInfo().getProductID() === item.id;
            });
          }
          if (isEmpty(isItemExist)) {
            cartObj.addItem(this.populateExistingProductInfo(item));
          }
        }
      });
    });
  }

  private populateExistingProductInfo(item): udl.Item {
    const existingItem = new udl.Item();
    const productInfo = new udl.Product();
    productInfo.setProductID(item.id);
    productInfo.setProductType(item.type);
    existingItem.setProductInfo(productInfo);
    return existingItem;
  }
}
