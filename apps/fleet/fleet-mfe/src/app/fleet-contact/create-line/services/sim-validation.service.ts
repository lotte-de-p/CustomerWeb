import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { SimSwapMapper } from '../mappers/sim-swap.mapper';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';
import { MobileConstants } from '../../../shared/common/constants/mobile.constant';

@Injectable({
  providedIn: 'root',
})
export class SimValidationService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly simSwapMapper: SimSwapMapper
  ) {}

  validateSimIccid(messageGroupName: string, iccid: string): Observable<SimDetailsModel> {
    let uriEndPoint = MobileConstants.ENDPOINT_VALIDATE_SIM_ICCID;
    uriEndPoint = uriEndPoint.replace('{{iccid}}', iccid);
    const url = this.getServiceURI(
      MobileConstants.API_VERSION_V1,
      MobileConstants.EMPTY,
      MobileConstants.EMPTY,
      uriEndPoint,
      MobileConstants.EMPTY
    );
    return this.ocapiService.doGet(
      new OcapiCallConfig(messageGroupName, url, this.simSwapMapper, MobileConstants.EMPTY, {}, true)
    );
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return MobileConstants.MOBILE_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }
}
