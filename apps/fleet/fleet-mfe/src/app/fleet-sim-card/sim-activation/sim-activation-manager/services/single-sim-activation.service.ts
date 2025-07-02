import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Builder } from '@telenet/ng-lib-shared';
import { SingleSimActivationRequest } from '../model/sim-activation.model';
import { SimActivationConstants } from '../constants/sim-activation.constants';
import { MsisdnInterface } from '../interfaces/msisdn.interface';
import { PostRequestSuccessMapper } from '../../../../shared/common/mappers/post-request-success-mapper';

@Injectable({
  providedIn: 'root',
})
export class SingleSimActivationService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper
  ) {}

  activateSim(msisdn: MsisdnInterface[], activationDate: Date, iccid: string) {
    const data = this.buildRequest(msisdn, activationDate, iccid);
    const ocapiCallConfig = new OcapiCallConfig(
      SimActivationConstants.MESSAGE_GROUP,
      SimActivationConstants.SINGLE_MSISDN_ACTIVATION_URI,
      this.postRequestSuccessMapper,
      data
    );
    return this.ocapiService.doPost(ocapiCallConfig);
  }

  private buildRequest(msisdn: MsisdnInterface[], activationDate: Date, iccid: string) {
    return Builder<SingleSimActivationRequest>().msisdnList(msisdn).futureDate(activationDate).iccid(iccid).build();
  }
}
