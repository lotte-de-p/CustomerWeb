import { inject, Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { RawDtvBoxSubscription } from '../entities/raw/raw-dtv-box-subscription.model';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { DtvBoxSubscriptionMapper } from '../mapper/subscription.mapper';
import { AddressMapper } from '../mapper/address.mapper';
import { RawAddressModel } from '../entities/raw/raw-address.model';
import { Address } from '../entities/address.model';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DtvBoxManagementService {
  private readonly messageGroup = 'dtv-box-management';
  private readonly endpoint = '/public/api/dtv-box-management-service/v1/subscriptions';
  private readonly ocapiService = inject(OcapiService);
  private readonly DtvBoxSubscriptionMapper = inject(DtvBoxSubscriptionMapper);

  getSubscriptions(): Observable<DtvBoxSubscription[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawDtvBoxSubscription[], DtvBoxSubscription[]>(
        this.messageGroup,
        this.endpoint,
        this.DtvBoxSubscriptionMapper
      )
    );
  }

  getAddresses(): Observable<Address[]> {
    // For now we use the return devices Client Service for fetching addresses.
    // This will be moved to a seperated Client Service in the future.
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawAddressModel[], Address[]>(
        this.messageGroup,
        '/public/api/return-devices-service/v1/addresses',
        new AddressMapper()
      )
    );
  }

  resetPincode(identifier: string): Observable<HttpResponse<null>> {
    const path = `${this.endpoint}/${identifier}/resetPin`;
    return this.ocapiService.doPost(new OcapiCallConfig(this.messageGroup, path, undefined, {}, undefined, true));
  }
}
