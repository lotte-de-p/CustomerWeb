export interface OfferRequest {
  id: string;
  type: string;
  offers: OfferRequest[];
  amountOfLimitedSims?: number;
}
