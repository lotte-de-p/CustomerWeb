import { SalesOfferUtil, SalesOffer } from '@telenet/ng-lib-sofy';
import { PricingData } from '../model/pricing-data.model';
import { pricingDataFactory } from '../model/pricing-data.factory';
import { SalesOfferError } from './sales-offer.error';

export class PricingUtil {
  static getPricingData(salesOffer: SalesOffer, exclusiveVAT: boolean): PricingData {
    if ('error' in salesOffer) {
      throw new SalesOfferError();
    } else {
      return pricingDataFactory.build({
        discountedPrice: SalesOfferUtil.getTotalMonthlyPriceInclPromos(salesOffer, exclusiveVAT).toFixed(2),
        normalPrice: SalesOfferUtil.getTotalMonthlyPrice(salesOffer, exclusiveVAT).toFixed(2),
        duration: SalesOfferUtil.getShortestDurationOfAllPromos(salesOffer),
      });
    }
  }
}
