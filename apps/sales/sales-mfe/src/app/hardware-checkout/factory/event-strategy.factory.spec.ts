import { TestBed } from '@angular/core/testing';
import { EventStrategyFactory } from './event-strategy.factory';
import { DeliveryAddressChangedStrategy } from '../strategy/delivery/delivery-address-changed.strategy';
import { NoActionStrategy } from '../strategy/no-action.strategy';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import { EventFacade, EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { deliveryEventStepKey, DeliveryEventTypeEnum } from '@sales/delivery/feat-delivery';
import { SalesOrderStateEnum } from '@sales/hardware-checkout/data-access';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SummaryFacade } from '@sales/summary/data-access';
import { etfEventStepKey } from '@sales/etf/feat-etf';
import { EtfStepLoadedStrategy } from '../strategy/etf/etf-step-loaded.strategy';
import { DeliveryStepLoadedStrategy } from '../strategy/delivery/delivery-step-loaded.strategy';
import { summaryEventStepKey } from '@sales/summary/feat-summary';
import { SummaryStepFinishedStrategy } from '../strategy/summary/summary-step-finished.strategy';

describe('EventStrategyFactory', () => {
  let factory: EventStrategyFactory;
  let hardwareCheckoutFacadeMock: Partial<HardwareCheckoutFacade>;
  let eventFacadeMock: Partial<EventFacade>;
  let summaryFacade: Partial<SummaryFacade>;

  beforeEach(() => {
    hardwareCheckoutFacadeMock = {};
    eventFacadeMock = {};

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot()],
      providers: [
        EventStrategyFactory,
        { provide: HardwareCheckoutFacade, useValue: hardwareCheckoutFacadeMock },
        { provide: EventFacade, useValue: eventFacadeMock },
        { provide: SummaryFacade, useValue: summaryFacade },
        { provide: 'Window', useValue: window },
      ],
    });

    factory = TestBed.inject(EventStrategyFactory);
  });

  it('should return DeliveryAddressChangedStrategy when salesOrderState is DELIVERY_CALCULATED and event body is present', () => {
    const event = {
      eventType: DeliveryEventTypeEnum.CHANGE_ADDRESS,
      body: {}, // Assuming a valid body for the test scenario
    };
    const salesOrderState = SalesOrderStateEnum.DELIVERY_CALCULATED;
    const strategy = factory.getStrategy(event, salesOrderState);
    expect(strategy).toBeInstanceOf(DeliveryAddressChangedStrategy);
  });

  it('should return NoActionStrategy when salesOrderState is below DELIVERY_CALCULATED', () => {
    const event = {
      eventType: DeliveryEventTypeEnum.CHANGE_ADDRESS,
      body: {}, // Assuming a valid body for the test scenario
    };
    const salesOrderState = SalesOrderStateEnum.INITIALISING;
    const strategy = factory.getStrategy(event, salesOrderState);
    expect(strategy).toBeInstanceOf(NoActionStrategy);
  });

  it('should return NoActionStrategy when event body is not present', () => {
    const event = {
      eventType: DeliveryEventTypeEnum.CHANGE_ADDRESS,
    };
    const salesOrderState = SalesOrderStateEnum.DELIVERY_CALCULATED;
    const strategy = factory.getStrategy(event, salesOrderState);
    expect(strategy).toBeInstanceOf(NoActionStrategy);
  });

  describe('EventTypeEnums', () => {
    describe('STEP_LOADED', () => {
      it('should return EtfStepLoadedStrategy for ETF step when Sales Order is in INITIALISING state ', () => {
        const event: EventInterface<StepEventBody> = {
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: etfEventStepKey },
        };
        const salesOrderState = SalesOrderStateEnum.INITIALISING;
        const strategy = factory.getStrategy(event, salesOrderState);
        expect(strategy).toBeInstanceOf(EtfStepLoadedStrategy);
      });
      it('should return DeliveryStepLoadedStrategy for DELIVERY step when Sales Order is in INITIALISING state ', () => {
        const event: EventInterface<StepEventBody> = {
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: deliveryEventStepKey },
        };
        const salesOrderState = SalesOrderStateEnum.INITIALISING;
        const strategy = factory.getStrategy(event, salesOrderState);
        expect(strategy).toBeInstanceOf(DeliveryStepLoadedStrategy);
      });
    });

    describe('STEP_FINISHED', () => {
      it('should return SummaryStepFinishedStrategy for SUMMARY step when Sales Order is in CHECKOUT_DELIVERY_FINISHED state ', () => {
        const event: EventInterface<StepEventBody> = {
          eventType: EventTypeEnum.STEP_FINISHED,
          body: { stepKey: summaryEventStepKey },
        };
        const salesOrderState = SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED;
        const strategy = factory.getStrategy(event, salesOrderState);
        expect(strategy).toBeInstanceOf(SummaryStepFinishedStrategy);
      });
    });
  });
});
