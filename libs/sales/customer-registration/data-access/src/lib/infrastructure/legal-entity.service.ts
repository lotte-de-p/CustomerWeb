import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { LegalEntityMapper } from './legal-entity.mapper';
import { map } from 'rxjs/operators';
import { LegalEnityRawInterface } from '../entities/interfaces/legal-entity.interface';
import { LanguageService } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class LegalEntityService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly languageService: LanguageService
  ) {}

  getLegalEntityData(messageGroup: string): Observable<LegalEnityRawInterface> {
    const languageCode = this.languageService.getLanguage();
    const suffix = `?languageCode=${languageCode}`;
    const url =
      '/public/api/catalog-service/v1/common/data' + suffix + '&property=legalForm&domain=BusinessCustomerAccount';
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, url, new LegalEntityMapper())).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
