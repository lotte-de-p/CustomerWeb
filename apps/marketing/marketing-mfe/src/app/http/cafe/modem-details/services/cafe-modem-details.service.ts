import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { AbstractCafeService } from '../../abstract-cafe.service';
import { CafeModemDetailsMapper } from '../mappers/cafe-modem-details.mapper';
import { CafeModemDetailsModel } from '../models/cafe-modem-details.model';

@Injectable({
  providedIn: 'root',
})
export class CafeModemDetailsService extends AbstractCafeService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly mapper: CafeModemDetailsMapper
  ) {
    super();
    this.property = 'modemdetails';
  }

  getModemDetails(messageGroup: string): Observable<CafeModemDetailsModel> {
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, super.getPropertyEndPoint(), this.mapper));
  }

  getModemDetailsAdaptor(messageGroup: string): Observable<CafeModemDetailsModel> {
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, super.getPropertyAdaptorEndPoint(), this.mapper));
  }
}
