import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { map, mergeMap, tap, take } from 'rxjs/operators';
import { DeliveryMethods, SalesOrder, SalesOrderStateEnum } from '@sales/hardware-checkout/data-access';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { NoHardwareItemsFound, SalesOrderNotSet } from '../../constants/errors.constants';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { StrategyUtil } from '../../utils/strategy.util';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';

export class EtfStepFinishedNoChangesStrategy implements EventStrategy {
  constructor(private readonly hardwareCheckoutFacade: HardwareCheckoutFacade) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      this.handleDelivery(),
      StrategyUtil.checkEligibility(this.hardwareCheckoutFacade),
      // StrategyUtil.checkContractSummary(this.hardwareCheckoutFacade),
      StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade),
      StrategyUtil.handleNotifications(this.hardwareCheckoutFacade),
      StrategyUtil.setSummaryDetails(this.hardwareCheckoutFacade),
      tap((salesOrder: SalesOrder) => {
        const hardwareOrderItems = SalesOrderUtil.getHardwareOrderItem(salesOrder);
        if (hardwareOrderItems && hardwareOrderItems.orderItems) {
          this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
          this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.DELIVERY_CALCULATED);
        } else {
          throw new HardwareCheckoutError(NoHardwareItemsFound);
        }
      }),
      map(() => {
        return false;
      })
    );
  }

  private handleDelivery(): UnaryFunction<Observable<SalesOrder | undefined>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder | undefined) => {
        if (salesOrder) {
          return this.hardwareCheckoutFacade.getDeliveryOptions(salesOrder.id).pipe(
            map((deliveryMethods) => {
              return { salesOrder: salesOrder, deliveryMethods: deliveryMethods };
            })
          );
        } else {
          throw new HardwareCheckoutError(SalesOrderNotSet);
        }
      }),
      mergeMap((res: { salesOrder: SalesOrder; deliveryMethods: DeliveryMethods }) => {
        return this.hardwareCheckoutFacade.calculateDelivery(res.salesOrder.id, res.deliveryMethods);
      })
    );
  }
}
