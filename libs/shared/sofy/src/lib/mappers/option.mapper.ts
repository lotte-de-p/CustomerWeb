import { Injectable } from '@angular/core';
import { PromoMapper } from './promo.mapper';
import { OptionInterface } from '../interfaces/option.interface';
import { OptionModel } from '../models/option.model';
import { SalesOfferPromo } from '../models/response';
import { PromoModel } from '../models/promo.model';

@Injectable({
  providedIn: 'root',
})
export class OptionMapper {
  constructor(private readonly promoMapper: PromoMapper) {}

  public map(rawOption: OptionInterface): OptionModel {
    const option: OptionModel = new OptionModel();

    option.description = rawOption.description;
    option.mutuallyExclusive = rawOption.mutuallyExclusive;
    option.omapiId = rawOption.omapiId;
    option.originalprice = rawOption.originalprice;
    option.price = rawOption.price;
    option.priceexclvat = rawOption.priceexclvat;
    option.selected = rawOption.selected;
    option.specUrl = rawOption.specUrl;

    option.promos = this.mapPromos(rawOption.promos);

    return option;
  }

  private mapPromos(rawPromos: SalesOfferPromo[]) {
    const promos: PromoModel[] = [];

    if (rawPromos) {
      rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
    }

    return promos;
  }
}
