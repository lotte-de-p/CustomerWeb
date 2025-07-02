import { Offer, Product, SalesOffer } from '@sales/shared/data-access';

export interface ProductRecommendation {
  offers: Offer[];
  salesOffer: SalesOffer;
  products: Product[];
}
