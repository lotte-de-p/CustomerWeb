import { Inject, Injectable, NgZone } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  ContexthubConstants,
  ContextHubGenericStoreService,
  ContextHubStoreConfigInterface,
} from '@telenet/ng-lib-page';
import { Builder } from '@telenet/ng-lib-shared';
import { CustomerInputStore } from '../models/customer-input-store.model';

@Injectable({ providedIn: 'root' })
export class CustomerInputStoreService extends ContextHubGenericStoreService<CustomerInputStore> {
  constructor(
    _ngZone: NgZone,
    @Inject('Window') window: Window,
    protected dataLayerService: DataLayerService
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<CustomerInputStore>>()
        .storeModel(new CustomerInputStore())
        .storeName('customerinput')
        .serviceName('CustomerInputStoreService')
        .build()
    );
  }

  enrichStoreData(fieldName: string, fieldData: unknown): void {
    const customerInputStoreData = this.#getStoreData();

    if (customerInputStoreData) {
      customerInputStoreData[fieldName] = fieldData;
      this.#updateStoreData(customerInputStoreData);
    } else {
      console.error('Store data not found');
    }
  }

  #updateStoreData(storeData: unknown): void {
    const store: CustomerInputStore = new CustomerInputStore();

    Object.assign(store, storeData);

    this.updateStoreData(store);
  }

  #getStoreData(): CustomerInputStore | undefined {
    const contextHub = this.window[ContexthubConstants.CONTEXTHUB];

    return contextHub?.getStore(this.storeConfig.storeName)?.getData();
  }
}
