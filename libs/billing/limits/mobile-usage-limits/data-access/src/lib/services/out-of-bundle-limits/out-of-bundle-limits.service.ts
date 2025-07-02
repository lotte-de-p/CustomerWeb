import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MESSAGE_GROUP, OUT_OF_BUNDLE_LIMITS_ENDPOINT } from '../mobile-usage-limits-service.constants';

@Injectable({ providedIn: 'root' })
export class OutOfBundleLimitsService {
  constructor(private readonly ocapiService: OcapiService) {}

  getOutOfBundleLimits(msisdn: string): Observable<string[]> {
    const endpoint = OUT_OF_BUNDLE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doGet(new OcapiCallConfig(MESSAGE_GROUP, endpoint));
  }
}
