import { SummaryOrderItem } from '../interfaces/order-item.interface';

export class SummaryUtil {
  static sortOrderItems(orderItems: SummaryOrderItem[]): SummaryOrderItem[] {
    return orderItems.sort((a, b) => {
      let sortValue = 0;
      if (SummaryUtil.hasDiscount(a) && SummaryUtil.hasDiscount(b)) {
        sortValue = Number(b.prices.discounted.value) - Number(a.prices.discounted.value);
      } else if (!SummaryUtil.hasDiscount(a) && !SummaryUtil.hasDiscount(b)) {
        sortValue = Number(b.prices.total.value) - Number(a.prices.total.value);
      } else {
        if (SummaryUtil.hasDiscount(a)) {
          sortValue = -1;
        } else if (SummaryUtil.hasDiscount(b)) {
          sortValue = 1;
        }
      }
      return sortValue;
    });
  }

  static hasDiscount(summaryOrderItem: SummaryOrderItem): boolean {
    return summaryOrderItem.discount !== undefined;
  }
}
