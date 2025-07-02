import * as Factory from 'factory.ts';
import { PricingData } from './pricing-data.model';

export const pricingDataFactory = Factory.Sync.makeFactory<PricingData>({
  discountedPrice: '',
  normalPrice: '',
  duration: 0,
});
