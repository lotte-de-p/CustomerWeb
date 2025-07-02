import { isEmpty } from 'lodash-es';
import { SalesDataType } from './sales-data.type';

export interface RawSalesData {
  products: string[];
  options: string[];
  optins: string[];
}

export class SalesData {
  private offers: SalesDataOffer[];

  constructor(salesData?: SalesData) {
    Object.assign(this, salesData);
  }

  hasOffers(): boolean {
    return !isEmpty(this.offers);
  }

  setOffers(offers: SalesDataOffer[]) {
    this.offers = offers;
  }

  getOffers(): SalesDataOffer[] {
    return this.offers;
  }

  flatten(): SalesData {
    if (!this.offers) {
      return this;
    }
    const offers = this.offers.flatMap((offer: SalesDataOffer) => SalesDataOffer.flattenSalesDataOffer(offer));
    const salesData: SalesData = new SalesData();
    salesData.setOffers(offers);
    return salesData;
  }
}

export class SalesDataOffer {
  id: string;
  type: SalesDataType;
  offers?: SalesDataOffer[];
  amountOfLimitedSims?: number;

  static flattenSalesDataOffer(salesDataOffer: SalesDataOffer): SalesDataOffer[] {
    const salesDataOfferWithoutOffers: SalesDataOffer = Object.assign(new SalesDataOffer(), salesDataOffer, {
      offers: [],
    });
    return [salesDataOfferWithoutOffers].concat(
      (salesDataOffer?.offers ?? []).flatMap((offer: SalesDataOffer) => SalesDataOffer.flattenSalesDataOffer(offer))
    );
  }

  static of(id: string, type: SalesDataType, offers?: SalesDataOffer[]): SalesDataOffer {
    const salesDataOffer: SalesDataOffer = new SalesDataOffer();
    salesDataOffer.id = id;
    salesDataOffer.type = type;
    salesDataOffer.offers = offers;
    return salesDataOffer;
  }
}
