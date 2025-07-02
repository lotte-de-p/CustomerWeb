import { Injectable } from '@angular/core';
import { FleetProfileMapper } from '../../mappers/profile/fleet-profile-mapper';
import { Observable, of, throwError } from 'rxjs';
import { FleetProfile } from '../../interfaces/profile/fleet-profile.interface';
import { CreateFleetProfileConstants } from '../../constants/profile/create-fleet-profile-constants';
import { ProductConstants } from '../../constants/products/product.constant';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ProductsService } from '../products/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfileDetails } from '../../models/profile/profile-details.model';
import { ProfileDetailsMapper } from '../../mappers/profile/profile-details.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly ocapiService: OcapiService,
    private readonly profileDetailsMapper: ProfileDetailsMapper
  ) {}

  validateFleetProfileIdentifier(
    msisdn: string,
    messageGroup: string,
    mapper: FleetProfileMapper
  ): Observable<FleetProfile> {
    const endpoint: string = '/'.concat(
      msisdn,
      CreateFleetProfileConstants.ENDPOINT_FLEET_IDENTITY_STATUS_BY_IDENTIFIER
    );
    const url: string = this.productsService.getServiceURI(
      endpoint,
      ProductConstants.CONTEXT_PRODUCTS,
      ProductConstants.API_VERSION_V1
    );
    const config = new OcapiCallConfig(messageGroup, url, mapper);
    config.errorHandler = this.handleFleetIdentityErrorResponse.bind(this);

    return this.ocapiService.doGet(config);
  }

  getProfileDetailsByMsisdn(messageGroupName: string, msisdn: string | null): Observable<ProfileDetails[]> {
    const endPoint = `/public/api/fleet-customer-service/v1/profiledetails?msisdn=${msisdn}`;
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, endPoint, this.profileDetailsMapper));
  }

  private handleFleetIdentityErrorResponse(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.error.code === CreateFleetProfileConstants.PROFILE_NOT_FOUND_ERROR_CODE) {
      return of({ status: httpErrorResponse.error.code, message: 'Identity profile not found', identityid: '' });
    }
    return throwError(() => httpErrorResponse);
  }
}
