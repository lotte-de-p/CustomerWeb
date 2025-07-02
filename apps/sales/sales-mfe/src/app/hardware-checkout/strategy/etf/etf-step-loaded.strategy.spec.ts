import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, pipe, throwError } from 'rxjs';
import {
  customerAccountDetailsFactory,
  CustomerTypeEnum,
  SalesOrder,
  salesOrderFactory,
  salesOrderFactoryWithHardwareTlo,
  defaultSdataSalesOfferFactory,
  orderItemTestFactory,
  SdataSalesOffer,
  SdataDiscount,
} from '@sales/hardware-checkout/data-access';
import { Injectable } from '@angular/core';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { EtfStepLoadedStrategy } from './etf-step-loaded.strategy';
import { StrategyUtil } from '../../utils/strategy.util';
import { map } from 'rxjs/operators';
import { HardwareCreationFailed, ProductNotActive, SalesOfferNotFound } from '../../constants/errors.constants';
import { EventFacade } from '@sales/events/data-access';
import { CustomerAccountDetailsUtil } from '../../utils/customer-account-details.util';
import { DiscountUtil } from '../../utils/discount.util';
import { OrderItemWithMatchingDiscount } from '../../interfaces/order-item-with-matching-discount.interface';
import { UsedSlot, usedSlotStateFactory } from '@sales/etf/data-access';
import { OrderItemActionEnum } from '../../enums/order-item-action.enum';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  createSalesOrder = jest.fn();
  customerAccountDetails$ = of(customerAccountDetailsFactory.build());
  customerType$ = of(CustomerTypeEnum.RESIDENTIAL);
  salesOffer$ = of(defaultSdataSalesOfferFactory.build());
  addDiscount = jest.fn();
  saveSalesOrder = jest.fn();
  setEtfOrderItems = jest.fn();
  setSalesOrderState = jest.fn();
  usedDiscountSlots$ = of(usedSlotStateFactory.buildList(1));
}

@Injectable({ providedIn: 'root' })
export class MockEventFacade {
  triggerAnalyticsScAddEvent = jest.fn();
}

class NoErrorThrownError extends Error {}

const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call();
    throw new NoErrorThrownError();
  } catch (error: unknown) {
    return error as TError;
  }
};

describe('EtfStepLoadedStrategy', () => {
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let eventFacade: EventFacade;
  let strategyUnderTest: EtfStepLoadedStrategy;

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

    strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);
  });

  describe('execute', () => {
    it('should throw an error if the creation of hardware items fails', async () => {
      const salesOrder = salesOrderFactory.build();
      jest.spyOn(hardwareCheckoutFacade, 'createSalesOrder').mockReturnValue(of(salesOrder));
      jest
        .spyOn(StrategyUtil, 'createHardwareItems')
        .mockReturnValue(pipe(map(() => salesOrderFactoryWithHardwareTlo.build())));
      const strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);

      const error: HardwareCheckoutError = await getError(async () => firstValueFrom(strategyUnderTest.execute()));

      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error.errorObject).toBe(HardwareCreationFailed);
    });

    it('should handle HardwareCheckoutError by throwing HardwareCheckoutError with HardwareCreationFailed', (done) => {
      const salesOrder = salesOrderFactory.build();
      const expectedError = new HardwareCheckoutError(ProductNotActive);

      jest.spyOn(hardwareCheckoutFacade, 'createSalesOrder').mockReturnValue(of(salesOrder));
      jest.spyOn(StrategyUtil, 'createHardwareItems').mockImplementation(() => {
        return () => throwError(() => expectedError);
      });
      const strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);

      strategyUnderTest.execute().subscribe({
        next: () => {
          fail('non-HardwareCheckoutError');
        },
        error: (error: HardwareCheckoutError) => {
          expect(error).toBe(expectedError);
          done();
        },
      });
    });

    it('should handle non-HardwareCheckoutError by throwing HardwareCheckoutError with HardwareCreationFailed', (done) => {
      const salesOrder = salesOrderFactory.build();
      jest.spyOn(hardwareCheckoutFacade, 'createSalesOrder').mockReturnValue(of(salesOrder));
      jest.spyOn(StrategyUtil, 'createHardwareItems').mockImplementation(() => {
        return () => throwError(() => new Error('Unexpected error'));
      });
      const strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);

      strategyUnderTest.execute().subscribe({
        next: () => {
          fail('non-HardwareCheckoutError');
        },
        error: (error: HardwareCheckoutError) => {
          expect(error).toBeInstanceOf(HardwareCheckoutError);
          expect(error.errorObject).toBe(HardwareCreationFailed);
          done();
        },
      });
    });

    it('should throw NoHardwareItemsFound if no hardware item exist', (done) => {
      const salesOrder = salesOrderFactory.build();
      jest.spyOn(hardwareCheckoutFacade, 'createSalesOrder').mockReturnValue(of(salesOrder));
      jest
        .spyOn(StrategyUtil, 'createHardwareItems')
        .mockReturnValue(pipe(map((salesOrder: SalesOrder) => salesOrder)));
      const strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);

      strategyUnderTest.execute().subscribe({
        error: (error: HardwareCheckoutError) => {
          expect(error.errorObject).toBe(HardwareCreationFailed);
          done();
        },
      });
    });

    it('should trigger ScAdd event if the customer has location', async () => {
      jest.spyOn(CustomerAccountDetailsUtil, 'getCustomerLocationId').mockReturnValue('undefined');

      const strategyUnderTest = new EtfStepLoadedStrategy(hardwareCheckoutFacade, eventFacade);
      const error: HardwareCheckoutError = await getError(async () => firstValueFrom(strategyUnderTest.execute()));

      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(eventFacade.triggerAnalyticsScAddEvent).toHaveBeenCalledWith({ name: 'new product selected' });
    });
  });

  describe('applyDiscounts', () => {
    it('should throw HardwareCheckoutError when sdataSalesOffer is undefined', (done) => {
      const salesOrder = salesOrderFactory.build();
      hardwareCheckoutFacade.salesOffer$ = of(undefined);

      strategyUnderTest
        .applyDiscounts()(
          of({
            salesOrder,
            usedDiscountSlots: [],
          })
        )
        .subscribe({
          next: () => {
            done.fail('Expected method to throw an error.');
          },
          error: (error: HardwareCheckoutError) => {
            expect(error).toBeInstanceOf(HardwareCheckoutError);
            expect(error.errorObject).toEqual(SalesOfferNotFound);
            done();
          },
        });
    });

    it('should apply discounts and return remaining items', (done) => {
      const salesOrder = salesOrderFactory.build();
      const sdataSalesOffer: SdataSalesOffer = defaultSdataSalesOfferFactory.build();
      const offersWithDiscount = sdataSalesOffer.offers.filter((offer) => offer.customerChosenDiscount);

      const matchingDiscounts: OrderItemWithMatchingDiscount[] = offersWithDiscount.map((offer) => ({
        orderItem: orderItemTestFactory.build(),
        customerChosenDiscount: offer.customerChosenDiscount as SdataDiscount,
      }));
      const usedDiscountSlots: UsedSlot[] = usedSlotStateFactory.buildList(1);
      const remainingItems: OrderItemWithMatchingDiscount[] = [];

      hardwareCheckoutFacade.salesOffer$ = of(sdataSalesOffer);
      jest.spyOn(DiscountUtil, 'getDiscountedOrderItemsFromSalesOffer').mockReturnValue(matchingDiscounts);
      jest.spyOn(DiscountUtil, 'getItemsToDiscountAndRemaining').mockReturnValue({
        itemsToDiscount: matchingDiscounts,
        remainingItems,
      });
      jest.spyOn(StrategyUtil, 'applyDiscountsRecursively').mockReturnValue(of(salesOrder));

      strategyUnderTest
        .applyDiscounts()(
          of({
            salesOrder,
            usedDiscountSlots,
          })
        )
        .subscribe((result) => {
          expect(result.salesOrder).toEqual(salesOrder);
          expect(result.remainingItems).toEqual(remainingItems);
          expect(DiscountUtil.getDiscountedOrderItemsFromSalesOffer).toHaveBeenCalledWith(
            salesOrder,
            sdataSalesOffer,
            OrderItemActionEnum.ADD
          );
          done();
        });
    });
  });
});
