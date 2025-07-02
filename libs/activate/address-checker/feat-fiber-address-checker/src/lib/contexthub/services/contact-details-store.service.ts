import { Inject, Injectable, NgZone } from '@angular/core';
import {
  ContexthubConstants,
  ContextHubGenericStoreService,
  ContextHubStoreConfigInterface,
} from '@telenet/ng-lib-page';
import { Builder } from '@telenet/ng-lib-shared';
import { Observable } from 'rxjs';
import { CustomerContactService } from './customer-contact.service';
import { ContactDetails } from '../models/contact-details.model';
import { DataLayerService } from '@telenet/ng-lib-datalayer';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsStoreService extends ContextHubGenericStoreService<ContactDetails> {
  constructor(
    _ngZone: NgZone,
    @Inject('Window') window: Window,
    readonly customerContactService: CustomerContactService,
    dataLayerService: DataLayerService
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<ContactDetails>>()
        .storeModel(new ContactDetails())
        .storeName(ContexthubConstants.STORE_NAME_CONTACT_DETAILS)
        .serviceName('ContactDetailsStoreService')
        .build()
    );
  }

  override onLoadData(): Observable<ContactDetails> {
    return this.customerContactService.getContacts(ContexthubConstants.MESSAGE_GROUP_CONTACT_DETAILS);
  }
}
