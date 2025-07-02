import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MESSAGE_GROUP, MOBILE_USAGE_LIMITS_ENDPOINT } from '../mobile-usage-limits-service.constants';
import { UpdateUsageLimitsRequest } from '../../entities/usage-limits/update-usage-limits-request.model';
import { UsageLimits } from '../../entities/usage-limits/usage-limits.model';

@Injectable({ providedIn: 'root' })
export class UsageLimitsService {
  constructor(private readonly ocapiService: OcapiService) {}

  getUsageLimits(msisdn: string): Observable<UsageLimits> {
    const endpoint = MOBILE_USAGE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doGet(new OcapiCallConfig(MESSAGE_GROUP, endpoint));
  }

  updateUsageLimits(payload: UpdateUsageLimitsRequest, msisdn: string): Observable<UsageLimits> {
    const endpoint = MOBILE_USAGE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doPut(
      new OcapiCallConfig<UsageLimits, UsageLimits>(MESSAGE_GROUP, endpoint, undefined, payload)
    );
  }
}
