import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceCase } from '../entitities/service-case.interface';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ServiceCaseMapper } from './service-case.mapper';
import { RawServiceCase } from '../entitities/raw.service-case.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceCaseService {
  private static readonly MESSAGE_GROUP = 'service-cases';

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly serviceCaseMapper: ServiceCaseMapper
  ) {}

  load(): Observable<ServiceCase[]> {
    const endpoint = '/public/api/service-cases-service/v1/service-cases';
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawServiceCase[], ServiceCase[]>(
        ServiceCaseService.MESSAGE_GROUP,
        endpoint,
        this.serviceCaseMapper
      )
    );
  }
}
