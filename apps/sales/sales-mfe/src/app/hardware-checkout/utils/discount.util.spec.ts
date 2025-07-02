import { UsedSlot, usedSlotStateFactory } from '@sales/etf/data-access';
import {
  OrderItem,
  SalesOrder,
  SdataSalesOffer,
  defaultSdataSalesOfferFactory,
  orderItemTestFactory,
  salesOrderFactory,
  sdataDiscountFactory,
} from '@sales/hardware-checkout/data-access';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';
import { SdataSalesOfferUtil } from './sdata-sales-offer.util';
import { SalesOrderUtil } from './sales-order.util';
import { DiscountUtil } from './discount.util'; // Adjust the import path according to your project structure
import { OrderItemActionEnum } from '../enums/order-item-action.enum';

// Mock data using factories
const mockAddedOrderItem = orderItemTestFactory.build({ action: OrderItemActionEnum.ADD });
const mockExistingOrderItem = orderItemTestFactory.build({ action: OrderItemActionEnum.NONE });
const mockOrderItem: OrderItem = orderItemTestFactory.build({
  orderItems: [mockExistingOrderItem, mockAddedOrderItem],
});
const mockSdataDiscount = sdataDiscountFactory.build();

const mockSalesOrder: SalesOrder = salesOrderFactory.build();

const mockSdataSalesOffer: SdataSalesOffer = defaultSdataSalesOfferFactory.build();

const mockOrderItemWithDiscount: OrderItemWithMatchingDiscount = {
  orderItem: mockOrderItem,
  customerChosenDiscount: mockSdataDiscount,
};

describe('DiscountUtil', () => {
  let orderItemsWithDiscounts: OrderItemWithMatchingDiscount[];

  beforeEach(() => {
    orderItemsWithDiscounts = [
      {
        orderItem: orderItemTestFactory.build({ id: '1', prices: { oneTimeTotal: { value: '100' } } }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '1' }),
      },
      {
        orderItem: orderItemTestFactory.build({ id: '2', prices: { oneTimeTotal: { value: '200' } } }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '2' }),
      },
      {
        orderItem: orderItemTestFactory.build({ id: '3', prices: { oneTimeTotal: { value: '300' } } }),
        customerChosenDiscount: sdataDiscountFactory.build({ id: '3' }),
      },
    ];
  });

  describe('getItemsToDiscountAndRemaining', () => {
    it('should return items to discount and remaining items correctly', () => {
      const usedDiscountSlots: UsedSlot[] = [usedSlotStateFactory.build({ id: '1' })];

      const { itemsToDiscount, remainingItems } = DiscountUtil.getItemsToDiscountAndRemaining(
        orderItemsWithDiscounts,
        usedDiscountSlots,
        5
      );

      expect(itemsToDiscount.length).toBe(3);
      expect(remainingItems.length).toBe(0);
      expect(itemsToDiscount[0].orderItem.id).toBe('1');
      expect(itemsToDiscount[1].orderItem.id).toBe('2');
      expect(itemsToDiscount[2].orderItem.id).toBe('3');
    });

    it('should return all items as remaining items if no slots are available', () => {
      const usedDiscountSlots: UsedSlot[] = usedSlotStateFactory.buildList(5);

      const { itemsToDiscount, remainingItems } = DiscountUtil.getItemsToDiscountAndRemaining(
        orderItemsWithDiscounts,
        usedDiscountSlots,
        5
      );

      expect(itemsToDiscount.length).toBe(0);
      expect(remainingItems.length).toBe(3);
    });
  });

  describe('getDiscountedOrderItemsFromSalesOffer', () => {
    it('should return non-filtered discounted order items from sales offer', () => {
      jest
        .spyOn(SdataSalesOfferUtil, 'getSdataSalesOfferItemsWithDiscount')
        .mockReturnValue(mockSdataSalesOffer.offers);
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue(mockOrderItem);
      jest.spyOn(SalesOrderUtil, 'orderItemsWithMatchingDiscounts').mockReturnValue([mockOrderItemWithDiscount]);

      const result = DiscountUtil.getDiscountedOrderItemsFromSalesOffer(mockSalesOrder, mockSdataSalesOffer);

      expect(result).toEqual([mockOrderItemWithDiscount]);
      expect(SalesOrderUtil.orderItemsWithMatchingDiscounts).toHaveBeenLastCalledWith(
        [mockExistingOrderItem, mockAddedOrderItem],
        mockSdataSalesOffer.offers
      );
    });

    it('should return only added discounted order items from sales offer', () => {
      jest
        .spyOn(SdataSalesOfferUtil, 'getSdataSalesOfferItemsWithDiscount')
        .mockReturnValue(mockSdataSalesOffer.offers);
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue(mockOrderItem);
      jest.spyOn(SalesOrderUtil, 'orderItemsWithMatchingDiscounts').mockReturnValue([mockOrderItemWithDiscount]);

      const result = DiscountUtil.getDiscountedOrderItemsFromSalesOffer(
        mockSalesOrder,
        mockSdataSalesOffer,
        OrderItemActionEnum.ADD
      );

      expect(result).toEqual([mockOrderItemWithDiscount]);
      expect(SalesOrderUtil.orderItemsWithMatchingDiscounts).toHaveBeenLastCalledWith(
        [mockAddedOrderItem],
        mockSdataSalesOffer.offers
      );
    });

    it('should throw an error if order items are missing', () => {
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue({ ...mockOrderItem, orderItems: undefined });

      expect(() => {
        DiscountUtil.getDiscountedOrderItemsFromSalesOffer(mockSalesOrder, mockSdataSalesOffer);
      }).toThrowError('Something is amiss with the order items.');
    });
  });
});
