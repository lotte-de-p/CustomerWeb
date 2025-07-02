import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { CustomerConstants } from '../constants/customer.constant';
import { ProfileDetailsByIdentityIDMapper } from '../mappers/profile-details-by-identity-id.mapper';
import { ProfileDetails } from '../models/profile-details.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly profileDetailsByIdentityIDMapper: ProfileDetailsByIdentityIDMapper
  ) {}

  getProfileDetailsByIdentityId(
    messageGroup: string,
    identityId: string,
    pidTransferRequest?: boolean
  ): Observable<ProfileDetails> {
    const parameters = pidTransferRequest ? `?includetransferrequest=true` : '';
    const suffix = '/' + identityId.concat(parameters);
    const endPoint = this.getServiceURI(CustomerConstants.ENDPOINT_IDENTITY, suffix);
    const ocapiConfig = new OcapiCallConfig(messageGroup, endPoint, this.profileDetailsByIdentityIDMapper);

    return this.ocapiService.doGet(ocapiConfig);
  }

  private getServiceURI(context: string, endpoint: string): string {
    return CustomerConstants.CUSTOMER_SERVICE_PREFIX.concat(CustomerConstants.API_VERSION_V1)
      .concat(context)
      .concat(endpoint);
  }
}
