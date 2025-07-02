import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import {
  salesOrderFactory,
  salesOrderFactoryWithHardwareTlo,
  orderItemTestFactory,
  hardwareOrderTLOItem,
  SalesOrder,
} from '@sales/hardware-checkout/data-access';
import { usedSlotStateFactory, EtfFacade } from '@sales/etf/data-access';
import { Injectable } from '@angular/core';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { DiscountCouldNotBeRemoved, NoHardwareItemsFound, SalesOrderNotSet } from '../../constants/errors.constants';
import { EtfStepFinishedStrategy } from './etf-step-finished.strategy';
import { etfResponse } from '@sales/etf/feat-etf';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  salesOrderFromState$ = jest.fn(() => of(salesOrderFactory.build()));
  deleteOrderItem = jest.fn();
  setDeliveryAddress = jest.fn();
  setSummaryDeliveryAddress = jest.fn();

  getAddressById = jest.fn(() => of(addressUnitTestfactory.build()));
}

@Injectable({ providedIn: 'root' })
export class MockEtfFacade {
  usedAndPendingDiscountSlots$ = of([
    usedSlotStateFactory.build({
      id: '1',
    }),
  ]);
}

const salesOrderFromStateProperty = 'salesOrderFromState$';

class NoErrorThrownError extends Error {}

const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call();

    throw new NoErrorThrownError();
  } catch (error: unknown) {
    return error as TError;
  }
};

describe('EtfStepFinishedStrategy', () => {
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let etfFacade: EtfFacade;

  const etfResponse: etfResponse = {
    stepKey: 'test',
    targetOrderItemIdsToDiscount: [],
    existingDiscountsToRemove: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HardwareCheckoutFacade,
          useClass: MockHardwareCheckoutFacade,
        },
        {
          provide: EtfFacade,
          useClass: MockEtfFacade,
        },
      ],
    });
    console.groupEnd = jest.fn();
    console.groupCollapsed = jest.fn();
    console.error = jest.fn();
    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    etfFacade = TestBed.inject(EtfFacade);
    Object.defineProperty(hardwareCheckoutFacade, salesOrderFromStateProperty, {
      get: jest.fn(() => of(salesOrderFactory.build())),
    });
  });

  describe('terminateOrderItems', () => {
    it('should throw an error if the sales order is not set', async () => {
      Object.defineProperty(hardwareCheckoutFacade, salesOrderFromStateProperty, {
        get: jest.fn(() => of(undefined)),
      });
      const strategyUnderTest = new EtfStepFinishedStrategy(hardwareCheckoutFacade, etfFacade, etfResponse);
      const error: HardwareCheckoutError = await getError(async () => firstValueFrom(strategyUnderTest.execute()));

      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error.errorObject).toBe(SalesOrderNotSet);
    });

    it('should throw an error if there is no hardware item', (done) => {
      Object.defineProperty(hardwareCheckoutFacade, salesOrderFromStateProperty, {
        get: jest.fn(() => of(salesOrderFactory.build({ orderItems: [orderItemTestFactory.build()] }))),
      });
      const strategyUnderTest = new EtfStepFinishedStrategy(hardwareCheckoutFacade, etfFacade, etfResponse);

      strategyUnderTest.execute().subscribe({
        error: (error: HardwareCheckoutError) => {
          expect(error.errorObject).toBe(NoHardwareItemsFound);
          done();
        },
      });
    });

    it('should throw an error if the discounts could not be removed', (done) => {
      const salesOrder: SalesOrder = salesOrderFactoryWithHardwareTlo.build({
        orderItems: [
          hardwareOrderTLOItem.build(),
          orderItemTestFactory.build({
            customerProductId: '1',
          }),
        ],
      });

      Object.defineProperty(hardwareCheckoutFacade, salesOrderFromStateProperty, {
        get: jest.fn(() => of(salesOrder)),
      });
      jest.spyOn(hardwareCheckoutFacade, 'deleteOrderItem').mockImplementation(jest.fn(() => of(salesOrder)));

      const etfResponse: etfResponse = {
        stepKey: 'test',
        targetOrderItemIdsToDiscount: [],
        existingDiscountsToRemove: [
          {
            id: '1',
          },
        ],
      };

      const strategyUnderTest = new EtfStepFinishedStrategy(hardwareCheckoutFacade, etfFacade, etfResponse);

      strategyUnderTest.execute().subscribe({
        error: (error: HardwareCheckoutError) => {
          expect(error.errorObject).toBe(DiscountCouldNotBeRemoved);
          done();
        },
      });
    });
  });
});
