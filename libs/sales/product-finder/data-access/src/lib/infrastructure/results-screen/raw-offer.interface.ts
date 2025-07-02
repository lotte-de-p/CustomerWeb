export interface RawOffer {
  id: string;
  type: string;
  offers: RawOffer[];
  amountOfLimitedSims?: number;
}
