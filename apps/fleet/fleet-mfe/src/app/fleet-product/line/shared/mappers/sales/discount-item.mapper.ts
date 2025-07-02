import { inject, Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { DiscountDto, DiscountItemDto } from '../../interfaces/dto/sales-order-dto.interface';
import { Discount, DiscountItemInterface } from '../../interfaces/discount-item.interface';
import { PricesMapper } from './prices.mapper';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';

@Injectable({
  providedIn: 'root',
})
export class DiscountItemMapper implements MapperInterface<DiscountItemDto, DiscountItemInterface> {
  readonly #pricesMapper = inject(PricesMapper);
  readonly #omapiProductMapper = inject(OmapiProductMapper);

  toModel(rawDiscountItem: DiscountItemDto): DiscountItemInterface {
    return this.createDiscountItem(rawDiscountItem);
  }

  private createDiscountItem(rawDiscountItem: DiscountItemDto): DiscountItemInterface {
    const discountItem: DiscountItemInterface = {
      discounts: [],
    };
    discountItem.discounts = rawDiscountItem && this.createDiscounts(rawDiscountItem.discounts);
    return discountItem;
  }

  private createDiscounts(rawDiscounts: DiscountDto[]): Discount[] {
    return (
      rawDiscounts &&
      rawDiscounts.map((rawDiscount) => {
        return this.createDiscount(rawDiscount);
      })
    );
  }

  private createDiscount(rawDiscount: DiscountDto): Discount {
    const discount = new Discount();
    discount.prices = this.#pricesMapper.toModel(rawDiscount.prices);
    discount.productInfo = this.#omapiProductMapper.toModel(rawDiscount.rawOmapi);
    return discount;
  }
}
