import { Injectable } from '@angular/core';
import { Promo, RawPromo, RawSalesOffer, SalesOffer } from '@sales/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class SalesOfferMapper {
  public toModel(rawSalesOffer: RawSalesOffer): SalesOffer {
    return {
      price: rawSalesOffer.price,
      promo: rawSalesOffer.promo === null ? null : this.mapToPromo(rawSalesOffer.promo),
    };
  }

  private mapToPromo(rawPromo: RawPromo): Promo {
    return {
      price: rawPromo.price,
      durationInMonths: rawPromo.durationInMonths,
    };
  }
}
