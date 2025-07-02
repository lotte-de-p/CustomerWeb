export interface Offer {
  id: string;
  type: string;
  offers: Offer[];
  amountOfLimitedSims?: number;
}
