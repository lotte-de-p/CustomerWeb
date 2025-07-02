import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawDiscountInterface, RawDiscountItemInterface } from '../interfaces/raw/raw-sales-order.interface';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { DiscountMapper } from './discount.mapper';
import { Discount } from '../models/discount.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountItemMapper implements MapperInterface<RawDiscountItemInterface, DiscountItemInterface> {
  constructor(private readonly discountMapper: DiscountMapper) {}

  toModel(rawDiscountItem: RawDiscountItemInterface): DiscountItemInterface {
    return this.createDiscountItem(rawDiscountItem);
  }

  private createDiscountItem(rawDiscountItem: RawDiscountItemInterface): DiscountItemInterface {
    const discountItem: DiscountItemInterface = {
      discounts: [],
    };
    discountItem.discounts = rawDiscountItem && this.createDiscounts(rawDiscountItem.discounts);
    return discountItem;
  }

  private createDiscounts(rawDiscounts: RawDiscountInterface[]): Discount[] {
    return (
      rawDiscounts &&
      rawDiscounts.map((rawDiscount) => {
        return this.discountMapper.toModel(rawDiscount);
      })
    );
  }
}
