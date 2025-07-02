import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { PriceAttributes, YUPUpfrontPaymentInterface } from '@telenet/ng-lib-form';
import { Prices } from '../../models/sales-order/prices.model';
import { PricesDto } from '../../interfaces/dto/prices-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class PricesMapper implements MapperInterface<PricesDto, Prices> {
  toModel(rawPrices: PricesDto): Prices {
    return this.createPrices(rawPrices);
  }

  private createPrices(rawPrices: PricesDto): Prices {
    const prices = new Prices();
    if (rawPrices && rawPrices.taxInclPrices) {
      prices.taxInclPrices = {} as PriceAttributes;
      prices.taxInclPrices.currency = rawPrices.taxInclPrices.currency;
      prices.taxInclPrices.oneTimeTotal = rawPrices.taxInclPrices.oneTimeTotal;
      prices.taxInclPrices.oneTimeDiscount = rawPrices.taxInclPrices.oneTimeDiscount;
      prices.taxInclPrices.oneTimeDiscounted = rawPrices.taxInclPrices.oneTimeDiscounted;
      prices.taxInclPrices.oneTimeDiscountedOnNextInvoice = rawPrices.taxInclPrices.oneTimeDiscountedOnNextInvoice;
      prices.taxInclPrices.recurrentTotal = rawPrices.taxInclPrices.recurrentTotal;
      prices.taxInclPrices.recurrentDiscount = rawPrices.taxInclPrices.recurrentDiscount;
      prices.taxInclPrices.recurrentDiscounted = rawPrices.taxInclPrices.recurrentDiscounted;
      prices.taxInclPrices.upfrontTotal = rawPrices.taxInclPrices.upfrontTotal;
      prices.taxInclPrices.discountPrice = rawPrices.taxInclPrices.discountPrice;
      if (rawPrices.taxInclPrices.yupUpfrontPayment) {
        prices.taxInclPrices.yupUpfrontPayment = {} as YUPUpfrontPaymentInterface;
        prices.taxInclPrices.yupUpfrontPayment.recurrentDiscounted =
          rawPrices.taxInclPrices.yupUpfrontPayment.recurrentDiscounted;
        prices.taxInclPrices.yupUpfrontPayment.totalDiscounted =
          rawPrices.taxInclPrices.yupUpfrontPayment.totalDiscounted;
      }
    }
    if (rawPrices && rawPrices.taxExclPrices) {
      prices.taxExclPrices = {} as PriceAttributes;
      prices.taxExclPrices.currency = rawPrices.taxExclPrices.currency;
      prices.taxExclPrices.oneTimeTotal = rawPrices.taxExclPrices.oneTimeTotal;
      prices.taxExclPrices.oneTimeDiscount = rawPrices.taxExclPrices.oneTimeDiscount;
      prices.taxExclPrices.oneTimeDiscounted = rawPrices.taxExclPrices.oneTimeDiscounted;
      prices.taxExclPrices.oneTimeDiscountedOnNextInvoice = rawPrices.taxExclPrices.oneTimeDiscountedOnNextInvoice;
      prices.taxExclPrices.recurrentTotal = rawPrices.taxExclPrices.recurrentTotal;
      prices.taxExclPrices.recurrentDiscount = rawPrices.taxExclPrices.recurrentDiscount;
      prices.taxExclPrices.recurrentDiscounted = rawPrices.taxExclPrices.recurrentDiscounted;
      prices.taxExclPrices.upfrontTotal = rawPrices.taxExclPrices.upfrontTotal;
      prices.taxExclPrices.discountPrice = rawPrices.taxExclPrices.discountPrice;
      if (rawPrices.taxExclPrices.yupUpfrontPayment) {
        prices.taxExclPrices.yupUpfrontPayment = {} as YUPUpfrontPaymentInterface;
        prices.taxExclPrices.yupUpfrontPayment.recurrentDiscounted =
          rawPrices.taxExclPrices.yupUpfrontPayment.recurrentDiscounted;
        prices.taxExclPrices.yupUpfrontPayment.totalDiscounted =
          rawPrices.taxExclPrices.yupUpfrontPayment.totalDiscounted;
      }
    }
    return prices;
  }
}
