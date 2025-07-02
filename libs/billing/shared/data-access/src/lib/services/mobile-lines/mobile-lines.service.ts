import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MobileLine } from '../../entities/mobile-lines/mobile-line.model';
import { Injectable } from '@angular/core';
import { MESSAGE_GROUP, MOBILE_LINES_ENDPOINT } from '../billing-shared-service.constants';

@Injectable({
  providedIn: 'root',
})
export class MobileLinesService {
  private readonly ocapiService: OcapiService;

  constructor(ocapiService: OcapiService) {
    this.ocapiService = ocapiService;
  }

  public getMobileLines() {
    return this.ocapiService.doGet(
      new OcapiCallConfig<MobileLine[], MobileLine[]>(MESSAGE_GROUP, MOBILE_LINES_ENDPOINT)
    );
  }
}
