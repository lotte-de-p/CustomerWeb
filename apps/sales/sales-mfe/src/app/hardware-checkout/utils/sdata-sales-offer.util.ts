import { SdataSalesOffer, SdataSalesOfferItem } from '@sales/hardware-checkout/data-access';

export class SdataSalesOfferUtil {
  static getSdataSalesOfferItemsWithDiscount(sdataSalesOffer: SdataSalesOffer): SdataSalesOfferItem[] {
    return sdataSalesOffer.offers.filter((offer) => offer.customerChosenDiscount && offer.customerChosenDiscount.type);
  }
}
