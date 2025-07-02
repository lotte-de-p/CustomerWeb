export interface Product {
  id: string;
  brand: string;
  color: string[];
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountedPriceAfterCashback: number;
  tags: string[];
  plan: string;
}
