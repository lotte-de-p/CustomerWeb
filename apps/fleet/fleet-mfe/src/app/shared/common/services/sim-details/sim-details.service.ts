import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { SimDetailsMapper } from '../../mappers/sim-details/sim-details.mapper';
import { SimDetailsModel } from '../../models/sim-details.model';
import { MobileConstants } from '../../constants/mobile.constant';

@Injectable({
  providedIn: 'root',
})
export class SimDetailsService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly simDetailsMapper: SimDetailsMapper
  ) {}

  getSimDetailsByMsisdn(messageGroupName: string, msisdn: string): Observable<SimDetailsModel[]> {
    const url = this.getServiceURI(
      MobileConstants.API_VERSION_V2,
      MobileConstants.EMPTY,
      MobileConstants.EMPTY,
      MobileConstants.SIM_DETAILS_ENDPOINT,
      '?msisdn=' + msisdn
    );

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, url, this.simDetailsMapper));
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return MobileConstants.MOBILE_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }
}
