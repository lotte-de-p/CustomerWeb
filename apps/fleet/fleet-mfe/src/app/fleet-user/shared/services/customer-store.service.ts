import { Inject, Injectable, NgZone } from '@angular/core';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  ContextHubGenericStoreService,
  ContextHubStoreConfigInterface,
  CustomerBrandEnum,
  CustomerCategoryEnum,
  PathCategorisationService,
} from '@telenet/ng-lib-page';
import isEmpty from 'lodash-es/isEmpty';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerStore } from '../models/customer-store.model';
import { CustomerService } from './customer.service';
import { CustomerProfileService } from './customer-profile.service';
import { Builder } from '@telenet/ng-lib-shared';
import { CustomerStoreMapper } from '../mappers/customer/customer.store.mapper';
import { BssSystemEnum } from '../enums/bss-system.enum';
import { Customer } from '../models/customer.model';
import { ProfileDetails } from '../models/profile-details.model';
import { ContexthubConstants } from '../constants/contexthub.constant';

@Injectable({
  providedIn: 'root',
})
export class CustomerStoreService extends ContextHubGenericStoreService<CustomerStore> {
  constructor(
    private readonly loginService: LoginService,
    private readonly customerService: CustomerService,
    private readonly customerProfileService: CustomerProfileService,
    protected dataLayerService: DataLayerService,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly customerStoreMapper: CustomerStoreMapper,
    _ngZone: NgZone,
    @Inject('Window') window: Window
  ) {
    super(
      _ngZone,
      window,
      dataLayerService,
      Builder<ContextHubStoreConfigInterface<CustomerStore>>()
        .storeModel(new CustomerStore())
        .storeName(ContexthubConstants.STORE_NAME_CUSTOMER)
        .serviceName('CustomerStoreService')
        .build()
    );
  }

  onLoadData(): Observable<CustomerStore> {
    return this.loginService.getLoginDetails().pipe(
      switchMap((loginDetails) => {
        if (loginDetails.username && loginDetails.bssSystem === BssSystemEnum.NETCRACKER) {
          let msisdn = '';
          const isBusinessCustomer = this.pathCategorisationService.isCustomerOfType(CustomerCategoryEnum.BUSINESS);
          if ((!loginDetails.isMaster() && loginDetails.isExplicitLogin) || isBusinessCustomer) {
            msisdn = loginDetails.username;
          }
          return this.loadCustomer(msisdn, loginDetails);
        } else {
          return of(undefined);
        }
      })
    );
  }

  private loadCustomer(msisdn: string, loginDetails: LoginDetails): Observable<CustomerStore> {
    return this.customerService.getCustomer(ContexthubConstants.MESSAGE_GROUP_CUSTOMER, msisdn).pipe(
      switchMap((customer) => {
        if (this.shouldCallProfileDetails(loginDetails)) {
          return this.customerProfileService
            .getProfileDetailsByIdentityId(ContexthubConstants.MESSAGE_GROUP_CUSTOMER, loginDetails.identityId)
            .pipe(
              switchMap((profileDetails) => {
                return of(this.getCustomerStoreObj(customer, profileDetails));
              })
            );
        } else {
          return of(this.getCustomerStoreObj(customer));
        }
      })
    );
  }

  private shouldCallProfileDetails(loginDetails: LoginDetails): boolean {
    return (
      (this.pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_TELENET]) ||
        loginDetails.isPid) &&
      !isEmpty(loginDetails.identityId)
    );
  }

  private getCustomerStoreObj(customer: Customer, profileDetails?: ProfileDetails): CustomerStore {
    return this.customerStoreMapper.toModel(customer, profileDetails);
  }
}
