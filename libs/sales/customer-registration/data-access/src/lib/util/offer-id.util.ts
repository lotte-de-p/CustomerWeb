import { Offer } from '../entities/interfaces/raw-sales-order-request.interface';

export class OfferIdUtil {
  static extractOfferIds(offers: Offer[]): string[] {
    return offers.reduce((ids, offer) => {
      if (offer.id) ids.push(offer.id);
      if (offer.offers) ids.push(...this.extractOfferIds(offer.offers));
      return ids;
    }, [] as string[]);
  }
}
