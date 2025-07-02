import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { PriceAttributeDto, PricesDto } from '../interfaces/dto/prices-dto.interface';
import { PriceAttributes, Prices } from '../models/sales-order/prices.model';

@Injectable({
  providedIn: 'root',
})
export class PricesMapper implements MapperInterface<PricesDto, Prices> {
  toModel(rawPrices: PricesDto): Prices {
    return this.createPrice(rawPrices);
  }

  private createPrice(rawPrice: PricesDto): Prices {
    return {
      taxInclPrices: rawPrice.taxInclPrices ? this.createPriceAttributes(rawPrice.taxInclPrices) : null,
      taxExclPrices: rawPrice.taxExclPrices ? this.createPriceAttributes(rawPrice.taxExclPrices) : null,
      earlyTerminationFee: rawPrice.earlyTerminationFee,
      currency: rawPrice.currency,
    };
  }

  private createPriceAttributes(rawPriceAttributes: PriceAttributeDto): PriceAttributes {
    return {
      currency: rawPriceAttributes.currency,
      oneTimeDiscount: rawPriceAttributes.oneTimeDiscount,
      oneTimeTotal: rawPriceAttributes.oneTimeTotal,
      oneTimeDiscounted: rawPriceAttributes.oneTimeDiscounted,
      recurrentDiscount: rawPriceAttributes.recurrentDiscount,
      recurrentTotal: rawPriceAttributes.recurrentTotal,
      recurrentDiscounted: rawPriceAttributes.recurrentDiscounted,
      oneTimeDiscountedOnNextInvoice: rawPriceAttributes.oneTimeDiscountedOnNextInvoice,
      upfrontTotal: rawPriceAttributes.upfrontTotal,
      discountPrice: rawPriceAttributes.discountPrice,
      yupUpfrontPayment: rawPriceAttributes.yupUpfrontPayment,
    };
  }
}
