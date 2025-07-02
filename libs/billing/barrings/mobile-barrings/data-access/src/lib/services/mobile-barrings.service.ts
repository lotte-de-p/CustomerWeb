import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MobileBarrings, UpdateMobileBarrings } from '../entities/mobile-barrings.interface';

@Injectable({ providedIn: 'root' })
export class MobileBarringsService {
  private static readonly MESSAGE_GROUP = 'mobile-barrings';
  constructor(private readonly ocapiService: OcapiService) {}

  getMobileBarrings(msisdn: string): Observable<MobileBarrings> {
    const endpoint = `/public/api/mobile-barrings-service/v1/mobile-barrings/${msisdn}`;
    return this.ocapiService.doGet(new OcapiCallConfig(MobileBarringsService.MESSAGE_GROUP, endpoint));
  }

  updateMobileBarrings(payload: UpdateMobileBarrings, msisdn: string): Observable<MobileBarrings> {
    const endpoint = `/public/api/mobile-barrings-service/v1/mobile-barrings/${msisdn}`;
    return this.ocapiService.doPatch(
      new OcapiCallConfig(MobileBarringsService.MESSAGE_GROUP, endpoint, undefined, payload)
    );
  }
}
