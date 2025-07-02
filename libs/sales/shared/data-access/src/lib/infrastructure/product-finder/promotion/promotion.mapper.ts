import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawPromotion } from './raw-promotion.interface';
import { Promotion } from '../../../entities/product-finder/promotion/promotion.interface';
import { RawPromotionResult } from './raw-promotion-result.interface';

@Injectable({
  providedIn: 'root',
})
export class PromotionMapper implements MapperInterface<RawPromotionResult, Promotion[]> {
  toModel(rawPromotionResult: RawPromotionResult): Promotion[] {
    return rawPromotionResult.promotions.map((rawPromotion: RawPromotion) => ({
      description: rawPromotion.description,
    }));
  }
}
