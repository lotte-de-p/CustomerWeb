import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CafeBill } from '../interfaces/cafe-bill.interface';
import { CafeBillsMapper } from '../mappers/cafe-bills.mapper';

@Injectable({
  providedIn: 'root',
})
export class CafeBillsService {
  private readonly PROPERTY_URL = '/public/?p=bills';
  private cafeBillsCache: CafeBill[];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly cafeBillsMapper: CafeBillsMapper
  ) {}

  getBills(messageGroup: string): Observable<CafeBill[]> {
    if (this.cafeBillsCache) {
      return of(this.cafeBillsCache);
    }
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.cafeBillsMapper)).pipe(
      tap((response) => {
        if (response) {
          this.cafeBillsCache = response;
        }
      })
    );
  }
}
