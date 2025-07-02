import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { CafeContactDetailsMapper } from '../mappers/cafe-contact-details.mapper';
import { CafeContactDetails } from '../models/cafe-contact-details.model';

@Injectable({
  providedIn: 'root',
})
export class CafeContactDetailsService {
  private readonly PROPERTY_URL = '/public/?p=contactdetails';

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly cafeContactDetailsMapper: CafeContactDetailsMapper
  ) {}

  getContactDetails(messageGroup: string): Observable<CafeContactDetails> {
    return this.ocapiService.doGet(this.getOcapiCallConfig(messageGroup));
  }

  private getOcapiCallConfig(messageGroup: string): OcapiCallConfig<unknown, CafeContactDetails> {
    return new OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.cafeContactDetailsMapper);
  }
}
