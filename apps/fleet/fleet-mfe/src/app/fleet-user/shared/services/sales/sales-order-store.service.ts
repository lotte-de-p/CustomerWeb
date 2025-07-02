import { Inject, Injectable, NgZone } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ContextHubGenericStoreService, ContextHubStoreConfigInterface } from '@telenet/ng-lib-page';
import { Builder } from '@telenet/ng-lib-shared';
import { SalesOrder } from '../../models/sales-order.model';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderStoreService extends ContextHubGenericStoreService<SalesOrder> {
  constructor(
    _ngZone: NgZone,
    protected dataLayerService: DataLayerService,
    @Inject('Window') window: Window
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<SalesOrder>>()
        .storeModel(new SalesOrder())
        .storeName('sales-order')
        .serviceName('SalesOrderStoreService')
        .build()
    );
  }

  updateStoreData(salesOrder): void {
    super.updateStoreData(salesOrder);
  }
}
