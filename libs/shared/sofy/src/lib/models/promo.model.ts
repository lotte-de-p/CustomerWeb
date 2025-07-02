import { SalesOfferPromo, SalesOfferPromoPeriod } from './response';

export class PromoModel implements SalesOfferPromo {
  backendid: number;
  duration: number;
  legalid: string;
  name: string;
  period: SalesOfferPromoPeriod;
  price: number;
  priceexclvat: number;
  puk: string;
  tags: string[];

  getNormalizedName(): string {
    if (this.name) {
      return this.name
        .replace(/ /g, '-')
        .replace(/\./g, '-')
        .replace(/[^0-9a-zA-Z_-]/g, '')
        .toLowerCase();
    }
    return '';
  }

  getAbsoluteAmount(): number {
    return Math.abs(this.price);
  }
}
