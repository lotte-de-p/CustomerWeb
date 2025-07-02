import { ProductRecommendation } from './product-recommendation.interface';

export interface ProductRecommendationResult {
  productRecommendations: ProductRecommendation[];
  mostRecommendedIndex: number | null;
}
