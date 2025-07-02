import { MapperInterface } from '@telenet/ng-lib-shared';
import { Promotion } from '../models/promotion.model';
import { RawPromotionsInterface } from '../interfaces/promotions.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PromotionsMapper implements MapperInterface<unknown, Promotion[]> {
  toModel(data: { promotions: RawPromotionsInterface[] }, _httpStatus?: number): Promotion[] {
    return this.createPromotions(data.promotions);
  }

  private createPromotions(rawPromotions: RawPromotionsInterface[]): Promotion[] {
    const promotions: Promotion[] = [];
    rawPromotions.forEach((rawPromotion) => {
      const promotion = new Promotion();
      promotion.description = rawPromotion.description;
      promotion.startdate = rawPromotion.startdate;
      promotion.enddate = rawPromotion.enddate;
      promotions.push(promotion);
    });
    return promotions;
  }
}
