import { makeFactory } from 'factory.ts';
import { SdataDiscount, SdataSalesOffer, SdataSalesOfferItem } from './sdata-sales-offer.interface';

export const smartphoneWithBasicDiscountSalesOfferFactory = makeFactory<SdataSalesOfferItem>({
  itemCode: '3300389',
  type: 'smartphones',
  customerChosenDiscount: {
    type: 'Basic Discount',
    price: 90,
    id: '9155501914465272430',
  },
});

export const chargerSalesOfferFactory = makeFactory<SdataSalesOfferItem>({
  itemCode: '2119684',
  type: 'charger',
  customerChosenDiscount: {
    type: 'Basic Discount',
    price: 90,
    id: '9155501914465272430',
  },
});

export const sdataDiscountFactory = makeFactory<SdataDiscount>({
  type: 'Basic Discount',
  price: 90,
  id: '9155501914465272430',
});

export const defaultSdataSalesOfferFactory = makeFactory<SdataSalesOffer>({
  id: '123',
  offers: [smartphoneWithBasicDiscountSalesOfferFactory.build(), chargerSalesOfferFactory.build()],
});
