import { Injectable } from '@angular/core';
import { SalesOfferPromo } from '../models/response';
import { PromoModel } from '../models/promo.model';
import { PeriodModel } from '../models/period.model';

@Injectable({
  providedIn: 'root',
})
export class PromoMapper {
  public map(rawPromo: SalesOfferPromo): PromoModel {
    const promo: PromoModel = new PromoModel();

    promo.backendid = rawPromo.backendid;
    promo.duration = rawPromo.duration;
    promo.legalid = rawPromo.legalid;
    promo.name = rawPromo.name;
    promo.price = rawPromo.price;
    promo.priceexclvat = rawPromo.priceexclvat;
    promo.puk = rawPromo.puk;
    promo.period = Object.assign(new PeriodModel(), rawPromo.period);
    promo.tags = rawPromo.tags;

    return promo;
  }
}
