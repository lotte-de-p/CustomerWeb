export interface SdataDiscount {
  id: string;
  price: number;
  type: string;
}

export interface SdataSalesOfferItem {
  itemCode: string;
  type: string;
  customerChosenDiscount?: SdataDiscount;
}

export interface SdataSalesOffer {
  id: string;
  offers: SdataSalesOfferItem[];
}
