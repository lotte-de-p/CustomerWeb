import { RawProductRecommendation } from './raw-product-recommendation.interface';

export interface RawProductRecommendationResult {
  productRecommendations: RawProductRecommendation[];
  mostRecommendedIndex: number | null;
}
