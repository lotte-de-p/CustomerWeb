import { Inject, Injectable, NgZone } from '@angular/core';
import { ContextHubGenericStoreService, ContextHubStoreConfigInterface } from '@telenet/ng-lib-page';
import { CustomerStore } from '../../../models/customer-store.model';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { Builder } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class CustomerStoreService extends ContextHubGenericStoreService<CustomerStore> {
  constructor(
    protected dataLayerService: DataLayerService,
    _ngZone: NgZone,
    @Inject('Window') window: Window
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<CustomerStore>>()
        .storeModel(new CustomerStore())
        .storeName('customer')
        .serviceName('CustomerStoreService')
        .build()
    );
  }
}
