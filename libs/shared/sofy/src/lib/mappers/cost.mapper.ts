import { Injectable } from '@angular/core';
import { PromoMapper } from './promo.mapper';
import { CostInterface } from '../interfaces/cost.interface';
import { SalesOfferCost } from '../models/salesOfferCost';
import { SalesOfferPromo } from '../models/response';
import { PromoModel } from '../models/promo.model';

@Injectable({
  providedIn: 'root',
})
export class CostMapper {
  constructor(private readonly promoMapper: PromoMapper) {}

  public map(rawCost: CostInterface): SalesOfferCost {
    const cost: SalesOfferCost = new SalesOfferCost();

    cost.name = rawCost.name;
    cost.price = rawCost.price;
    cost.priceexclvat = rawCost.priceexclvat;
    cost.recurring = rawCost.recurring;
    cost.promotions = this.mapPromotions(rawCost.promotions);

    return cost;
  }

  private mapPromotions(rawPromotions: SalesOfferPromo[]) {
    const promotions: PromoModel[] = [];

    if (rawPromotions) {
      rawPromotions.forEach((rawPromo) => promotions.push(this.promoMapper.map(rawPromo)));
    }

    return promotions;
  }
}
