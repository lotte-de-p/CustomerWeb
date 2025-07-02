import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { ItsMeInterface, ItsMeResponseInterface } from './its-me.interface';
import { GenericMapper } from './generic.mapper';

@Injectable({
  providedIn: 'root',
})
export class ItsMeService {
  constructor(private readonly ocapiService: OcapiService) {}

  getItsMeCustomer(itsMeParams: ItsMeInterface): Observable<ItsMeResponseInterface> {
    const endpoint = `/itsme/userinfo?code=${itsMeParams.code}&state=${itsMeParams.state}`;
    return this.ocapiService.doGet(new OcapiCallConfig('', endpoint, new GenericMapper<ItsMeResponseInterface>()));
  }
}
