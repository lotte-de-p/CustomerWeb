import { MobileLineRequest } from './mobile-line-request.interface';
import { HouseholdRequest } from './household-request.interface';
import { CustomerProductHoldingRequest, PromotionRequest } from '@sales/shared/data-access';

export interface ProductRecommendationsRequest {
  household: HouseholdRequest | null;
  internetUsages: string[] | null;
  mobileLines: MobileLineRequest[];
  tvChannels: string[] | null;
  tvExperiences: string[] | null;
  fixedTelephone: boolean;
  promotions: PromotionRequest[] | null;
  customerProductHolding: CustomerProductHoldingRequest[] | null;
}
