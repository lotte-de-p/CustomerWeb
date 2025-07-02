import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MESSAGE_GROUP, PAY_BY_MOBILE_SERVICE } from '../pay-by-mobile-service.constants';
import { BarringStatus } from '../../entities/barring-status.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BarringStatusService {
  constructor(private readonly ocapiService: OcapiService) {}

  getBarringStatus(msisdn: string): Observable<BarringStatus> {
    const endpoint = PAY_BY_MOBILE_SERVICE + 'barring-status/' + msisdn;
    return this.ocapiService.doGet(new OcapiCallConfig<BarringStatus, BarringStatus>(MESSAGE_GROUP, endpoint));
  }
}
