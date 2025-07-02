import { StepFacade } from '@sales/shared/data-access';
import { missingDataStepKey } from '@sales/hardware-checkout/feat-missing-data';
import { EventStrategy } from '../interfaces/event-strategy.interface';
import { MissingDataStepFinishedStrategy } from '../strategy/missing-data/missing-data-step-finished.strategy';
import { MissingDataStepLoadedStrategy } from '../strategy/missing-data/missing-data-step-loaded.strategy';
import { NoActionStrategy } from '../strategy/no-action.strategy';
import { Injectable } from '@angular/core';
import { deliveryEventStepKey, DeliveryEventTypeEnum } from '@sales/delivery/feat-delivery';
import { DeliveryStepFinishedStrategy } from '../strategy/delivery/delivery-step-finished.strategy';
import { DeliveryStepLoadedStrategy } from '../strategy/delivery/delivery-step-loaded.strategy';
import { DeliveryAddressChangedStrategy } from '../strategy/delivery/delivery-address-changed.strategy';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import { SummaryStepLoadedStrategy } from '../strategy/summary/summary-step-loaded.strategy';
import { SummaryStepFinishedStrategy } from '../strategy/summary/summary-step-finished.strategy';
import { SalesOrderStateEnum } from '@sales/hardware-checkout/data-access';
import { WaitingForStateUpdateStrategy } from '../strategy/waiting-for-state-update.strategy';
import { etfEventStepKey, etfResponse } from '@sales/etf/feat-etf';
import { EtfStepLoadedStrategy } from '../strategy/etf/etf-step-loaded.strategy';
import { EtfStepFinishedStrategy } from '../strategy/etf/etf-step-finished.strategy';
import { EtfFacade } from '@sales/etf/data-access';
import { EtfStepReloadedStrategy } from '../strategy/etf/etf-step-reloaded.strategy';
import { EtfStepFinishedNoChangesStrategy } from '../strategy/etf/etf-step-finished-no-changes.strategy';
import { summaryEventStepKey, SummaryEventTypeEnum } from '@sales/summary/feat-summary';
import { SummaryShowContractSummaryStrategy } from '../strategy/summary/summary-show-contract-summary.strategy';
import { MediaQueryService, UrlService } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { NavigationStrategy } from '../strategy/navigation.strategy';
import { SummaryFacade } from '@sales/summary/data-access';
import { DeliveryStateChangeInterface } from '@sales/delivery/data-access';
import { ErrorStrategy } from '../strategy/error.strategy';
import { ErrorEventBody, EventFacade, EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { thankYouEventStepKey } from '@sales/thank-you/feat-thank-you';
import { ThankYouStepLoadedStrategy } from '../strategy/thank-you/thank-you-step-loaded.strategy';

interface strategy {
  key: EventTypeEnum | DeliveryEventTypeEnum | SummaryEventTypeEnum;
  getStrategy: () => EventStrategy;
}

@Injectable({ providedIn: 'root' })
export class EventStrategyFactory {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly etfFacade: EtfFacade,
    private readonly summaryFacade: SummaryFacade,
    private readonly eventFacade: EventFacade,
    private readonly urlService: UrlService,
    private readonly mediaQueryService: MediaQueryService,
    private readonly configService: ConfigService,
    private readonly stepFacade: StepFacade
  ) {}

  public getStrategy(event: EventInterface, salesOrderState: SalesOrderStateEnum): EventStrategy {
    const strategies: strategy[] = [
      {
        key: EventTypeEnum.ERROR,
        getStrategy: () => {
          return new ErrorStrategy(event.body as ErrorEventBody);
        },
      },
      {
        key: EventTypeEnum.STEP_LOADED,
        getStrategy: () => {
          return this.getStepLoadedStrategy(event.body as StepEventBody, salesOrderState);
        },
      },
      {
        key: EventTypeEnum.STEP_FINISHED,
        getStrategy: () => {
          if (event.body) {
            return this.getStepFinishedStrategy(
              event.body as {
                stepKey: string;
              },
              salesOrderState
            );
          }
          return new NoActionStrategy();
        },
      },
      {
        key: EventTypeEnum.SHOW_NAVIGATION,
        getStrategy: () => {
          return new NavigationStrategy(this.hardwareCheckoutFacade, event);
        },
      },
      {
        key: EventTypeEnum.HIDE_NAVIGATION,
        getStrategy: () => {
          return new NavigationStrategy(this.hardwareCheckoutFacade, event);
        },
      },
      {
        key: DeliveryEventTypeEnum.CHANGE_ADDRESS,
        getStrategy: () => {
          if (salesOrderState >= SalesOrderStateEnum.DELIVERY_CALCULATED && event.body) {
            return new DeliveryAddressChangedStrategy(
              this.hardwareCheckoutFacade,
              this.eventFacade,
              event.body as DeliveryStateChangeInterface
            );
          }
          return new NoActionStrategy(true);
        },
      },
      {
        key: SummaryEventTypeEnum.SHOW_CONTRACT_SUMMARY,
        getStrategy: () => {
          if (salesOrderState >= SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
            return new SummaryShowContractSummaryStrategy(
              this.urlService,
              this.configService,
              this.hardwareCheckoutFacade
            );
          }
          return new NoActionStrategy(true);
        },
      },
    ];
    return this.findStrategy(strategies, event);
  }

  private findStrategy(strategies: strategy[], event: EventInterface<unknown>) {
    const foundStrategy = strategies.find((strategy) => strategy.key === event.eventType);
    return foundStrategy ? foundStrategy.getStrategy() : new NoActionStrategy();
  }

  private getStepLoadedStrategy(stepEventBody: StepEventBody, salesOrderState: SalesOrderStateEnum): EventStrategy {
    switch (stepEventBody.stepKey) {
      case etfEventStepKey:
        if (salesOrderState <= SalesOrderStateEnum.INITIALISING) {
          return new EtfStepLoadedStrategy(this.hardwareCheckoutFacade, this.eventFacade);
        } else if (salesOrderState >= SalesOrderStateEnum.DELIVERY_CALCULATED) {
          return new EtfStepReloadedStrategy(this.hardwareCheckoutFacade, this.etfFacade);
        }
        return new NoActionStrategy();
      case deliveryEventStepKey:
        if (salesOrderState <= SalesOrderStateEnum.INITIALISING) {
          return new DeliveryStepLoadedStrategy(this.hardwareCheckoutFacade, this.eventFacade);
        }
        return new NoActionStrategy();

      case missingDataStepKey:
        return new MissingDataStepLoadedStrategy(this.hardwareCheckoutFacade, this.stepFacade);
      case summaryEventStepKey:
        if (salesOrderState < SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
          return new SummaryStepLoadedStrategy(this.hardwareCheckoutFacade);
        }
        return new NoActionStrategy();
      case thankYouEventStepKey:
        return new ThankYouStepLoadedStrategy(this.eventFacade);
      default:
        return new NoActionStrategy();
    }
  }

  private getStepFinishedStrategy(stepEventBody: StepEventBody, salesOrderState: SalesOrderStateEnum): EventStrategy {
    switch (stepEventBody.stepKey) {
      case etfEventStepKey:
        if (salesOrderState < SalesOrderStateEnum.DELIVERY_CALCULATED) {
          if (
            (stepEventBody as etfResponse).existingDiscountsToRemove.length > 0 &&
            (stepEventBody as etfResponse).targetOrderItemIdsToDiscount.length > 0
          ) {
            return new EtfStepFinishedStrategy(
              this.hardwareCheckoutFacade,
              this.etfFacade,
              stepEventBody as etfResponse
            );
          } else {
            return new EtfStepFinishedNoChangesStrategy(this.hardwareCheckoutFacade);
          }
        }
        return new NoActionStrategy();
      case deliveryEventStepKey:
        if (salesOrderState >= SalesOrderStateEnum.DELIVERY_CALCULATED) {
          return new DeliveryStepFinishedStrategy(this.hardwareCheckoutFacade);
        }
        return new WaitingForStateUpdateStrategy();
      case missingDataStepKey:
        return new MissingDataStepFinishedStrategy(this.hardwareCheckoutFacade);
      case summaryEventStepKey:
        if (salesOrderState >= SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
          return new SummaryStepFinishedStrategy(
            this.hardwareCheckoutFacade,
            this.summaryFacade,
            this.urlService,
            this.mediaQueryService,
            this.eventFacade
          );
        }
        return new WaitingForStateUpdateStrategy();
      default:
        return new NoActionStrategy();
    }
  }
}
