import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MobileConstants } from '../../constants/mobile.constant';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpErrorResponse } from '@angular/common/http';
import { SimDetailsModel } from '../../models/sim-details.model';
import { ActivateSimRequestInterface } from '../../interfaces/activate-sim-request.interface';
import { PostRequestSuccessInterface } from '../../interfaces/post-request-success.interface';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { SimDetailsMapper } from '../../mappers/sim-details/sim-details.mapper';
import { SimSwapMapper } from '../../../../fleet-contact/create-line/mappers/sim-swap.mapper';
import { SimActivationStatusMapper } from '../../mappers/sim-activation/sim-activation-status.mapper';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper,
    private readonly simDetailsMapper: SimDetailsMapper,
    private readonly simSwapMapper: SimSwapMapper,
    private readonly simActivationStatusMapper: SimActivationStatusMapper
  ) {}

  getSimDetailsByMsisdn(
    messageGroupName: string,
    msisdn: string,
    bundleIdentifier?: string
  ): Observable<SimDetailsModel[]> {
    const paramsMap = new Map<string, string>();
    paramsMap.set('msisdn', msisdn);
    if (bundleIdentifier) {
      paramsMap.set('bundleIdentifier', bundleIdentifier);
    }
    const url = this.getServiceURI(
      MobileConstants.API_VERSION_V2,
      MobileConstants.EMPTY,
      MobileConstants.EMPTY,
      MobileConstants.SIM_DETAILS_ENDPOINT,
      this.getServiceParams(paramsMap)
    );

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, url, this.simDetailsMapper));
  }

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

  getSimStatus(messageGroupName: string, iccid: string): Observable<SimDetailsModel> {
    let uriEndPoint = MobileConstants.ENDPOINT_STATUS_SIM_ICCID;
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

  activateSim(
    messageGroupName: string,
    msisdn: string,
    request: ActivateSimRequestInterface
  ): Observable<PostRequestSuccessInterface> {
    const url =
      MobileConstants.MOBILE_SERVICE_PREFIX +
      MobileConstants.API_VERSION_V2 +
      MobileConstants.ENDPOINT_ACTIVATE_SIM.replace('{{msisdn}}', msisdn);
    const config = new OcapiCallConfig(messageGroupName, url, this.postRequestSuccessMapper, request);
    config.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doPost(config);
  }

  getSimActivationStatus(messageGroupName: string, msisdn: string, orderNumber: string, token: string) {
    const url =
      MobileConstants.MOBILE_SERVICE_PREFIX +
      MobileConstants.API_VERSION_V2 +
      MobileConstants.ENDPOINT_SIM_ACTIVATION_STATUS.replace('{{msisdn}}', msisdn)
        .replace('{{orderNumber}}', orderNumber)
        .replace('{{token}}', token);
    const config = new OcapiCallConfig(messageGroupName, url, this.simActivationStatusMapper);
    config.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doGet(config);
  }

  private getServiceParams(paramsMap?: Map<string, string>): string {
    let params = MobileConstants.EMPTY;
    if (paramsMap) {
      params += '?';
      const lastValue = Array.from(paramsMap.values()).pop();
      for (const key of paramsMap.keys()) {
        params += key;
        params += '=';
        params += paramsMap.get(key);
        if (paramsMap.get(key) !== lastValue) {
          params += '&';
        }
      }
    }
    return params;
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return MobileConstants.MOBILE_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }

  private handleOcapiError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
