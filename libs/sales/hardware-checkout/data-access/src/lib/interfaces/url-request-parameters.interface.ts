import { SdataSalesOffer } from '../interfaces/sdata-sales-offer.interface';

export interface UrlRequestParameters {
  salesOffer: SdataSalesOffer;
  flow: string;
  source: string;
  intent: string | null;
  ingenicoResult: string | undefined;
}
