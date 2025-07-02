import { Injectable } from '@angular/core';
import { map } from 'lodash-es';
import { RawSalesData, SalesData, SalesDataOffer } from '../models/sales-data.model';
import { SalesDataType } from '../models/sales-data.type';

@Injectable({
  providedIn: 'root',
})
export class SalesDataMapper {
  public mapSalesData(rawSalesData: RawSalesData): SalesData {
    const salesData = new SalesData();
    salesData.setOffers(map(rawSalesData.products, (id) => this.mapSalesDataOffer(id, rawSalesData)));
    return salesData;
  }

  private mapSalesDataOffer(id: string, rawSalesData: RawSalesData): SalesDataOffer {
    return {
      id,
      type: SalesDataType.TYPE_PRODUCT,
      offers: this.mapSalesDataSubOffers(rawSalesData),
    } as SalesDataOffer;
  }

  private mapSalesDataSubOffers(rawSalesData: RawSalesData): SalesDataOffer[] {
    return [
      ...this.mapSubOffers(rawSalesData.options, SalesDataType.TYPE_OPTION),
      ...this.mapSubOffers(rawSalesData.optins, SalesDataType.TYPE_OPTIN),
    ];
  }

  private mapSubOffers(subProducts: string[], type: SalesDataType): SalesDataOffer[] {
    return map(subProducts, (id) => {
      return {
        id,
        type,
      } as SalesDataOffer;
    });
  }
}
