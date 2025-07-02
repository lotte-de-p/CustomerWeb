import * as Factory from 'factory.ts';
import { SalesDataType } from './sales-data.type';
import { RawSalesData, SalesData, SalesDataOffer } from './sales-data.model';

export const salesDataOfferFactory = Factory.Sync.makeFactory<SalesDataOffer>({
  id: '123',
  type: SalesDataType.TYPE_PRODUCT,
});

const salesData = new SalesData();
salesData.setOffers([salesDataOfferFactory.build()]);
export const salesDataFactory = Factory.Sync.makeFactory<SalesData>(salesData);

export const rawSalesDataFactory = Factory.Sync.makeFactory<RawSalesData>({
  products: [],
  options: [],
  optins: [],
});
