import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { PromotionMapper } from './promotion.mapper';
import { Promotion } from '../../../entities/product-finder/promotion/promotion.interface';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private readonly promotionMapper: PromotionMapper,
    private readonly ocapiService: OcapiService
  ) {}

  getPromotions(): Observable<Promotion[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig(
        'product-finder',
        '/public/?p=promotions',
        this.promotionMapper,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      )
    );
  }
}
