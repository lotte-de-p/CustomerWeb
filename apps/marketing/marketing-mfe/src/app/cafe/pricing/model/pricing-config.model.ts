export interface PricingConfig {
  postalCode: string;
  shortestDuration: boolean;
  isBusiness: boolean;
  enableNbo: boolean;
  productIds: string[];
  amountOfLimitedSims?: number;
  optionIds: string[];
  optinIds: string[];
  campaignId?: string;
}
