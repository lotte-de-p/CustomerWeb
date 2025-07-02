import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import {
  CouldNotStoreSalesOrderOnSummary,
  SalesOrderNotSet,
  UpdateHomeDeliveryCharsError,
} from '../../constants/errors.constants';
import { CustomerAccountDetails, SalesOrder, SalesOrderStateEnum } from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { StrategyUtil } from '../../utils/strategy.util';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { paymentErrorNotification } from '@sales/summary/data-access';

export class SummaryStepLoadedStrategy implements EventStrategy {
  constructor(private readonly hardwareCheckoutFacade: HardwareCheckoutFacade) {}

  showLoader(): boolean {
    return false;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      map((salesOrder) => {
        if (salesOrder) {
          return salesOrder;
        } else {
          throw new HardwareCheckoutError(SalesOrderNotSet);
        }
      }),
      StrategyUtil.checkContractSummary(this.hardwareCheckoutFacade),
      mergeMap((salesOrder) => {
        return salesOrder && SalesOrderUtil.orderAwaitsPayment(salesOrder)
          ? this.resetSummaryState(salesOrder)
          : this.doNormalFlow(salesOrder);
      })
    );
  }

  private doNormalFlow(salesOrder: SalesOrder | undefined): Observable<boolean> {
    return forkJoin({
      salesOrder: of(salesOrder),
      customerAccountDetails: this.hardwareCheckoutFacade.customerAccountDetails$.pipe(take(1)),
    }).pipe(
      mergeMap(
        (value: { salesOrder: SalesOrder | undefined; customerAccountDetails: CustomerAccountDetails | undefined }) => {
          if (value.salesOrder && value.customerAccountDetails) {
            return this.hardwareCheckoutFacade.updateOrderItemCharsHomeDelivery(
              value.salesOrder.id,
              value.customerAccountDetails
            );
          }
          throw new HardwareCheckoutError(UpdateHomeDeliveryCharsError);
        }
      ),
      tap((salesOrder) => {
        if (salesOrder) {
          this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED);
          this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
        } else {
          throw new HardwareCheckoutError(CouldNotStoreSalesOrderOnSummary);
        }
      }),
      StrategyUtil.resetContractSummaryInfo(),
      map(() => true)
    );
  }

  private resetSummaryState(salesOrder: SalesOrder) {
    return of(salesOrder).pipe(
      StrategyUtil.setSummaryDetails(this.hardwareCheckoutFacade),
      StrategyUtil.setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(this.hardwareCheckoutFacade),
      StrategyUtil.setSummaryDeliveryAddressFromRetrievedSalesOrder(this.hardwareCheckoutFacade),
      StrategyUtil.handleNotifications(this.hardwareCheckoutFacade),
      StrategyUtil.loadContractSummaryInfo(this.hardwareCheckoutFacade),
      tap(() => this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED)),
      mergeMap(() => {
        return this.hardwareCheckoutFacade.ingenicoResultUtil$.pipe(
          map((ingenicoResultUtil) => {
            if (ingenicoResultUtil?.isFailed()) {
              this.hardwareCheckoutFacade.addSummaryGeneralNotification(paymentErrorNotification);
            }
            return true;
          })
        );
      })
    );
  }
}
