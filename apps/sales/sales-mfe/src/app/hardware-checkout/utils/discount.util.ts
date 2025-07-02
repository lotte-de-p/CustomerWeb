import { UsedSlot } from '@sales/etf/data-access';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';
import { OrderItem, SalesOrder, SdataSalesOffer, SdataSalesOfferItem } from '@sales/hardware-checkout/data-access';
import { SdataSalesOfferUtil } from './sdata-sales-offer.util';
import { SalesOrderUtil } from './sales-order.util';
import { OrderItemActionEnum } from '../enums/order-item-action.enum'; // Adjust the import path according to your project structure

export class DiscountUtil {
  /**
   * Extracts items to discount and the remaining items.
   * @param orderItemsWithDiscounts - The array of order items with discounts.
   * @param usedDiscountSlots - The array of used discount slots.
   * @param maxSlots - The maximum number of discount slots available.
   * @returns An object containing itemsToDiscount and remainingItems arrays.
   */
  static getItemsToDiscountAndRemaining(
    orderItemsWithDiscounts: OrderItemWithMatchingDiscount[],
    usedDiscountSlots: UsedSlot[] | undefined,
    maxSlots: number = 5
  ): { itemsToDiscount: OrderItemWithMatchingDiscount[]; remainingItems: OrderItemWithMatchingDiscount[] } {
    const unusedSlotsNumber = maxSlots - (usedDiscountSlots ? usedDiscountSlots.length : 0);

    let itemsToDiscount: OrderItemWithMatchingDiscount[] = [];
    let remainingItems: OrderItemWithMatchingDiscount[] = [];

    if (unusedSlotsNumber > 0) {
      // Sort the items by price in descending order
      orderItemsWithDiscounts.sort((a, b) => {
        const priceA =
          a.orderItem.orderItems && a.orderItem.orderItems[0]
            ? parseFloat(a.orderItem.orderItems[0].prices.oneTimeTotal.value)
            : 0;
        const priceB =
          b.orderItem.orderItems && b.orderItem.orderItems[0]
            ? parseFloat(b.orderItem.orderItems[0].prices.oneTimeTotal.value)
            : 0;

        return priceB - priceA;
      });

      // Get the items to discount
      itemsToDiscount = orderItemsWithDiscounts.slice(0, unusedSlotsNumber);

      // Get the other items that are not in itemsToDiscount
      const itemsToDiscountIds = new Set(itemsToDiscount.map((item) => item.orderItem.id));
      remainingItems = orderItemsWithDiscounts.filter((item) => !itemsToDiscountIds.has(item.orderItem.id));
    } else {
      remainingItems = orderItemsWithDiscounts;
    }

    return { itemsToDiscount, remainingItems };
  }

  static getDiscountedOrderItemsFromSalesOffer(
    salesOrder: SalesOrder,
    sdataSalesOffer: SdataSalesOffer,
    action?: OrderItemActionEnum
  ) {
    const salesOfferItemsWithDiscount: SdataSalesOfferItem[] =
      SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer);
    const hardwareOrderItem: OrderItem = SalesOrderUtil.getHardwareOrderItem(salesOrder);

    if (!hardwareOrderItem.orderItems) {
      throw new Error('Something is amiss with the order items.');
    }

    const orderItems = action
      ? hardwareOrderItem.orderItems.filter((orderItem) => orderItem.action === action)
      : hardwareOrderItem.orderItems;

    return SalesOrderUtil.orderItemsWithMatchingDiscounts(orderItems, salesOfferItemsWithDiscount);
  }
}
