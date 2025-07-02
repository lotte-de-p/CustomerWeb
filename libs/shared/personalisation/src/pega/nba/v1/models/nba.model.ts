import { SellingArgument } from './selling-argument.model';
import { filter, isNil, map } from 'lodash-es';
import {
  RawSalesData,
  SalesData,
  SalesDataOffer,
  SalesDataOptinType,
  SalesDataOptionType,
  SalesDataProductType,
} from '../../../../sales';

export class NBA {
  public readonly rank: string;
  public readonly group: string;
  public readonly issue: string;
  public readonly name: string;
  public readonly treatment: string;
  public readonly campaignId: string;
  public readonly productType: string;
  public readonly sellingArguments: readonly SellingArgument[];
  public readonly sdata: SalesData;

  constructor(nba?: NBA) {
    if (nba) {
      Object.assign(this, nba);
      this.sdata = new SalesData(nba.sdata);
    }
  }

  hasTreatment(): boolean {
    return this.treatment ? this.treatment.length > 0 : false;
  }

  hasProductType(): boolean {
    return this.productType ? this.productType.length > 0 : false;
  }

  isSalesDataEmpty(): boolean {
    return !this.sdata || !this.sdata.hasOffers();
  }

  getRawSalesData(): RawSalesData {
    if (this.isSalesDataEmpty()) {
      return {
        products: [],
        options: [],
        optins: [],
      };
    }

    const offers = this.sdata.flatten().getOffers();

    return {
      products: this.extractProductIds(offers),
      options: this.extractOptionIds(offers),
      optins: this.extractOptinIds(offers),
    };
  }

  private extractProductIds(offers: SalesDataOffer[]): string[] {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataProductType)))];
  }

  private extractOptionIds(offers: SalesDataOffer[]): string[] {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataOptionType)))];
  }

  private extractOptinIds(offers: SalesDataOffer[]): string[] {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataOptinType)))];
  }

  private getNBOElementByType(products: SalesDataOffer[], types: string[]): SalesDataOffer[] {
    return products.filter((product) => product && types.includes(product.type));
  }

  private extractFlatOmapiIdList(products: SalesDataOffer[]): string[] {
    return map(
      filter(products, (p) => !isNil(p)),
      (o) => o.id
    );
  }
}
