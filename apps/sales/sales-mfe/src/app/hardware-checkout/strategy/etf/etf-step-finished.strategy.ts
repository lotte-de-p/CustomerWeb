import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { from, Observable, of, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { map, mergeMap, reduce, take } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { etfResponse } from '@sales/etf/feat-etf';
import { DiscountCouldNotBeRemoved, SalesOrderNotSet } from '../../constants/errors.constants';
import { OrderItem, SalesOrder } from '@sales/hardware-checkout/data-access';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { EtfFacade } from '@sales/etf/data-access';
import { StrategyUtil } from '../../utils/strategy.util';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';

export class EtfStepFinishedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly etfFacade: EtfFacade,
    private readonly stepEventBody: etfResponse
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$
      .pipe(take(1), this.terminateOrderItems(), this.addDiscounts())
      .pipe(StrategyUtil.processSalesOrderToDeliveryCalculated(this.hardwareCheckoutFacade));
  }

  private addDiscounts(addedDiscountIds: string[] = []): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        if (addedDiscountIds.length < this.stepEventBody.targetOrderItemIdsToDiscount.length) {
          const nextBasicDiscountItemId = this.stepEventBody.targetOrderItemIdsToDiscount
            .filter((orderItemToDiscount) => {
              return !addedDiscountIds.includes(orderItemToDiscount.id);
            })
            .pop();
          if (nextBasicDiscountItemId) {
            const rule = SalesOrderUtil.getDiscountRuleByTargetOrderId(salesOrder.rules, nextBasicDiscountItemId.id);
            if (rule) {
              addedDiscountIds.push(nextBasicDiscountItemId.id);
              return this.hardwareCheckoutFacade
                .addDiscount(salesOrder.id, rule.id)
                .pipe(this.addDiscounts(addedDiscountIds));
            }
          }
        }
        return of(salesOrder);
      })
    );
  }

  private terminateOrderItems(): UnaryFunction<Observable<SalesOrder | undefined>, Observable<SalesOrder>> {
    return mergeMap((salesOrder: SalesOrder | undefined) => {
      if (salesOrder) {
        const existingHardwareOrderItem = SalesOrderUtil.getHardwareOrderItem(salesOrder);
        return from(this.stepEventBody.existingDiscountsToRemove).pipe(
          this.deleteDiscounts(existingHardwareOrderItem, salesOrder),
          this.takeLatestSalesOrder(),
          map((salesOrder) => {
            if (salesOrder) {
              return salesOrder;
            }
            throw new HardwareCheckoutError(SalesOrderNotSet);
          })
        );
      }
      throw new HardwareCheckoutError(SalesOrderNotSet);
    });
  }

  private takeLatestSalesOrder(): OperatorFunction<SalesOrder, SalesOrder | undefined> {
    return reduce((latestSalesOrder: SalesOrder | undefined, salesOrder: SalesOrder) => {
      if (!latestSalesOrder || (salesOrder && salesOrder.orderItems.length > latestSalesOrder.orderItems.length)) {
        latestSalesOrder = salesOrder;
      }
      return latestSalesOrder;
    }, undefined);
  }

  private deleteDiscounts(
    existingHardwareOrderItem: OrderItem,
    salesOrder: SalesOrder
  ): OperatorFunction<{ id: string }, SalesOrder> {
    return mergeMap((discount: { id: string }) => {
      return this.etfFacade.usedAndPendingDiscountSlots$.pipe(
        take(1),
        mergeMap((usedDiscountSlots) => {
          if (usedDiscountSlots) {
            const selectedOrderItemToDelete = existingHardwareOrderItem.orderItems?.find(
              (orderItem) => orderItem.customerProductId === discount.id
            );
            if (selectedOrderItemToDelete) {
              return this.hardwareCheckoutFacade.deleteOrderItem(salesOrder.id, selectedOrderItemToDelete.id);
            }
          }
          throw new HardwareCheckoutError(DiscountCouldNotBeRemoved);
        })
      );
    });
  }
}
