import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import {
  customerAccountDetailsFactory,
  CustomerTypeEnum,
  defaultSdataSalesOfferFactory,
  orderItemTestFactory,
  SalesOrder,
  salesOrderFactory,
  SdataSalesOffer,
} from '@sales/hardware-checkout/data-access';
import { Injectable } from '@angular/core';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { DeliveryStepLoadedStrategy } from './delivery-step-loaded.strategy';
import { CustomerHasNoLocationAssociated, SalesOfferNotFound } from '../../constants/errors.constants';
import { CustomerAccountDetailsUtil } from '../../utils/customer-account-details.util';
import { EventFacade } from '@sales/events/data-access';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { OrderItemWithMatchingDiscount } from '../../interfaces/order-item-with-matching-discount.interface';
import { SdataSalesOfferUtil } from '../../utils/sdata-sales-offer.util';
import { StrategyUtil } from '../../utils/strategy.util';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  customerAccountDetails$ = jest.fn(() => of(customerAccountDetailsFactory.build()));
  customerType$ = jest.fn(() => of(CustomerTypeEnum.RESIDENTIAL));
  createSalesOrder = jest.fn(() => of(salesOrderFactory.build()));
  salesOffer$ = of(defaultSdataSalesOfferFactory.build());
  addDiscount = jest.fn();
  saveSalesOrder = jest.fn();
  setSalesOrderState = jest.fn();
  createHardwareTLO = jest.fn();
}

const customerAccountDetails = 'customerAccountDetails$';
const customerType = 'customerType$';
const salesOffer = 'salesOffer$';

class NoErrorThrownError extends Error {}

const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call();
    throw new NoErrorThrownError();
  } catch (error: unknown) {
    return error as TError;
  }
};

@Injectable({ providedIn: 'root' })
export class MockEventFacade {
  triggerAnalyticsScAddEvent = jest.fn();
}

describe('DeliveryStepLoadedStrategy', () => {
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let eventFacade: EventFacade;
  let strategyUnderTest: DeliveryStepLoadedStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HardwareCheckoutFacade,
          useClass: MockHardwareCheckoutFacade,
        },
        {
          provide: EventFacade,
          useClass: MockEventFacade,
        },
      ],
    });
    console.groupEnd = jest.fn();
    console.groupCollapsed = jest.fn();
    console.error = jest.fn();

    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    eventFacade = TestBed.inject(EventFacade);
    Object.defineProperty(hardwareCheckoutFacade, customerAccountDetails, {
      get: jest.fn(() => of(customerAccountDetailsFactory.build())),
    });
    Object.defineProperty(hardwareCheckoutFacade, customerType, {
      get: jest.fn(() => of(CustomerTypeEnum.RESIDENTIAL)),
    });

    strategyUnderTest = new DeliveryStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);
  });

  describe('execute', () => {
    it('should throw an error if the customer has no location', async () => {
      jest.spyOn(CustomerAccountDetailsUtil, 'getCustomerLocationId').mockReturnValue(undefined);
      const error: HardwareCheckoutError = await getError(async () => firstValueFrom(strategyUnderTest.execute()));

      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error.errorObject).toBe(CustomerHasNoLocationAssociated);
    });

    it('should trigger ScAdd event if the customer has location', async () => {
      jest.spyOn(CustomerAccountDetailsUtil, 'getCustomerLocationId').mockReturnValue('undefined');

      const error: HardwareCheckoutError = await getError(async () => firstValueFrom(strategyUnderTest.execute()));

      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(eventFacade.triggerAnalyticsScAddEvent).toHaveBeenCalledWith({ name: 'new product selected' });
    });
  });

  describe('processOrderItemsSequentially', () => {
    it('should throw an error if no order items are found on the hardware order item', () => {
      const salesOrder: SalesOrder = salesOrderFactory.build();
      const sdataSalesOffer: SdataSalesOffer = {
        id: '1',
        offers: [],
      };

      jest.spyOn(SdataSalesOfferUtil, 'getSdataSalesOfferItemsWithDiscount').mockReturnValue([]);
      jest
        .spyOn(SalesOrderUtil, 'getHardwareOrderItem')
        .mockReturnValue(orderItemTestFactory.build({ orderItems: undefined }));

      expect(() => {
        strategyUnderTest.processOrderItemsSequentially(salesOrder, sdataSalesOffer).subscribe();
      }).toThrow(new Error('Something is amiss with the order items.'));
    });

    it('should apply discounts recursively on matching discounts', (done) => {
      const salesOrder: SalesOrder = salesOrderFactory.build();
      const customerChosenDiscount = {
        id: 'discount1',
        price: 10,
        type: 'type1',
      };

      const sdataSalesOffer: SdataSalesOffer = {
        id: '1',
        offers: [
          {
            itemCode: 'item1',
            type: 'type1',
            customerChosenDiscount: customerChosenDiscount,
          },
        ],
      };
      const hardwareOrderItem = orderItemTestFactory.build({ orderItems: [orderItemTestFactory.build()] });
      const matchingDiscounts: OrderItemWithMatchingDiscount[] = [
        {
          orderItem: hardwareOrderItem,
          customerChosenDiscount: customerChosenDiscount,
        },
      ];

      jest.spyOn(SdataSalesOfferUtil, 'getSdataSalesOfferItemsWithDiscount').mockReturnValue(sdataSalesOffer.offers);
      jest.spyOn(SalesOrderUtil, 'getHardwareOrderItem').mockReturnValue(hardwareOrderItem);
      jest.spyOn(SalesOrderUtil, 'orderItemsWithMatchingDiscounts').mockReturnValue(matchingDiscounts);
      jest.spyOn(StrategyUtil, 'applyDiscountsRecursively').mockReturnValue(of(salesOrder));

      strategyUnderTest.processOrderItemsSequentially(salesOrder, sdataSalesOffer).subscribe((result) => {
        expect(result).toEqual(salesOrder);
        expect(StrategyUtil.applyDiscountsRecursively).toHaveBeenCalledWith(
          hardwareCheckoutFacade,
          matchingDiscounts,
          salesOrder
        );
        done();
      });
    });
  });

  describe('addDiscounts', () => {
    it('should throw HardwareCheckoutError when sdataSalesOffer is undefined', (done) => {
      Object.defineProperty(hardwareCheckoutFacade, salesOffer, {
        get: jest.fn(() => of(undefined)),
      });

      const resultPromise = firstValueFrom(strategyUnderTest.addDiscounts()(of(salesOrderFactory.build())));

      resultPromise
        .then(() => {
          done.fail('Expected method to throw an error.');
        })
        .catch((error) => {
          expect(error).toBeInstanceOf(HardwareCheckoutError);
          expect(error['errorObject']).toEqual(SalesOfferNotFound);
          done();
        });
    });
  });
});
