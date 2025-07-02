import * as Factory from 'factory.ts';
import { PricingConfig } from './pricing-config.model';

export const pricingConfigFactory = Factory.Sync.makeFactory<PricingConfig>({
  postalCode: '2800',
  shortestDuration: false,
  isBusiness: false,
  enableNbo: false,
  productIds: ['36860'],
  optionIds: [],
  optinIds: [],
  campaignId: '',
});
