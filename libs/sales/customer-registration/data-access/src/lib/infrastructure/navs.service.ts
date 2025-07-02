import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { NavsInterface, NavsResponseInterface } from './navs.interface';
import { map } from 'rxjs/operators';
import { NavsMapper } from './navs.mapper';

@Injectable({
  providedIn: 'root',
})
export class NavsService {
  url = '/public/api/customer-registration/navs/residential';

  constructor(private readonly ocapiService: OcapiService) {}

  getResidentialNavs(body: NavsInterface): Observable<NavsResponseInterface> {
    return this.ocapiService
      .doPost(new OcapiCallConfig('', this.url, new NavsMapper(), body))
      .pipe(map((response) => response));
  }
}
