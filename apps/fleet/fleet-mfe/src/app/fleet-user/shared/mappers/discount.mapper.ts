import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { RawDiscountInterface } from '../interfaces/raw/raw-sales-order.interface';
import { Discount } from '../models/discount.model';
import { PricesMapper } from './prices.mapper';

@Injectable({
  providedIn: 'root',
})
export class DiscountMapper implements MapperInterface<RawDiscountInterface, Discount> {
  constructor(
    private readonly pricesMapper: PricesMapper,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  toModel(rawDiscount: RawDiscountInterface): Discount {
    return this.createDiscount(rawDiscount);
  }

  private createDiscount(rawDiscount: RawDiscountInterface): Discount {
    const discount = new Discount();
    discount.prices = this.pricesMapper.toModel(rawDiscount.prices);
    discount.productInfo = this.omapiProductMapper.toModel(rawDiscount.rawOmapi);
    return discount;
  }
}
