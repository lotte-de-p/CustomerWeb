import { Injectable } from '@angular/core';
import { AbstractCafeService } from '../../abstract-cafe.service';
import { Promotion } from '../models/promotion.model';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { PromotionsMapper } from '../mappers/promotions.mapper';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService extends AbstractCafeService {
  private promotionsCache: Promotion[];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly promotionsMapper: PromotionsMapper
  ) {
    super();
    this.property = 'promotions';
  }

  public getPromotions(messageGroup: string): Observable<Promotion[]> {
    return this.doOcapiCall(messageGroup, this.getPropertyEndPoint());
  }

  public getPromotionsAdaptor(messageGroup: string): Observable<Promotion[]> {
    return this.doOcapiCall(messageGroup, this.getPropertyAdaptorEndPoint());
  }

  private doOcapiCall(messageGroup: string, endPoint: string): Observable<Promotion[]> {
    return this.promotionsCache
      ? of(this.promotionsCache)
      : this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endPoint, this.promotionsMapper)).pipe(
          tap((response) => {
            if (response) {
              this.promotionsCache = response;
            }
          })
        );
  }
}
