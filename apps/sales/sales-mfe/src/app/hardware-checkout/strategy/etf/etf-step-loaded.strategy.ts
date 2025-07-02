import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { forkJoin, mergeMap, Observable, of, pipe, switchMap, UnaryFunction } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import {
  CustomerAccountDetails,
  CustomerTypeEnum,
  SalesOrder,
  SalesOrderStateEnum,
} from '@sales/hardware-checkout/data-access';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { StrategyUtil } from '../../utils/strategy.util';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import {
  CustomerHasNoLocationAssociated,
  HardwareCreationFailed,
  SalesOfferNotFound,
} from '../../constants/errors.constants';
import { CustomerAccountDetailsUtil } from '../../utils/customer-account-details.util';
import { EventFacade } from '@sales/events/data-access';
import { UsedSlot } from '@sales/etf/data-access';
import { OrderItemWithMatchingDiscount } from '../../interfaces/order-item-with-matching-discount.interface';
import { DiscountUtil } from '../../utils/discount.util';
import { OrderItemActionEnum } from '../../enums/order-item-action.enum';

export class EtfStepLoadedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly eventFacade: EventFacade
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return forkJoin({
      customerAccount: this.hardwareCheckoutFacade.customerAccountDetails$.pipe(take(1)),
      customerType: this.hardwareCheckoutFacade.customerType$.pipe(take(1)),
      usedDiscountSlots: this.hardwareCheckoutFacade.usedDiscountSlots$.pipe(take(1)),
    })
      .pipe(
        mergeMap(
          (value: {
            customerAccount: CustomerAccountDetails | undefined;
            customerType: CustomerTypeEnum;
            usedDiscountSlots: UsedSlot[] | undefined;
          }) => {
            const locationId = CustomerAccountDetailsUtil.getCustomerLocationId(
              value.customerAccount,
              value.customerType === CustomerTypeEnum.SOHO
            );
            if (!locationId) {
              throw new HardwareCheckoutError(CustomerHasNoLocationAssociated);
            }
            this.eventFacade.triggerAnalyticsScAddEvent({ name: 'new product selected' });
            return this.hardwareCheckoutFacade
              .createSalesOrder(locationId)
              .pipe(StrategyUtil.createHardwareItems(this.hardwareCheckoutFacade))
              .pipe(StrategyUtil.setSalesOrderAsAbandonable(this.hardwareCheckoutFacade))
              .pipe(map((salesOrder) => ({ salesOrder, usedDiscountSlots: value.usedDiscountSlots })))
              .pipe(this.applyDiscounts());
          }
        )
      )
      .pipe(
        tap(({ salesOrder, remainingItems }) => {
          SalesOrderUtil.getHardwareOrderItem(salesOrder);
          this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
          this.hardwareCheckoutFacade.setEtfOrderItems(
            remainingItems.map((orderItemsWithDiscount) => orderItemsWithDiscount.orderItem),
            salesOrder.rules
          ); // Set remaining items
          this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.ETF_NEEDED);
        }),
        map(() => true),
        catchError((error) => {
          if (error instanceof HardwareCheckoutError) {
            throw error;
          } else {
            throw new HardwareCheckoutError(HardwareCreationFailed, error);
          }
        })
      );
  }

  public applyDiscounts(): UnaryFunction<
    Observable<{
      salesOrder: SalesOrder;
      usedDiscountSlots: UsedSlot[] | undefined;
    }>,
    Observable<{ salesOrder: SalesOrder; remainingItems: OrderItemWithMatchingDiscount[] }>
  > {
    return pipe(
      mergeMap(({ salesOrder, usedDiscountSlots }) =>
        this.hardwareCheckoutFacade.salesOffer$.pipe(
          take(1),
          switchMap((sdataSalesOffer) => {
            if (!sdataSalesOffer) {
              throw new HardwareCheckoutError(SalesOfferNotFound);
            }

            const orderItemsWithDiscounts: OrderItemWithMatchingDiscount[] =
              DiscountUtil.getDiscountedOrderItemsFromSalesOffer(salesOrder, sdataSalesOffer, OrderItemActionEnum.ADD);

            const { itemsToDiscount, remainingItems } = DiscountUtil.getItemsToDiscountAndRemaining(
              orderItemsWithDiscounts,
              usedDiscountSlots
            );

            if (itemsToDiscount.length > 0) {
              return StrategyUtil.applyDiscountsRecursively(
                this.hardwareCheckoutFacade,
                itemsToDiscount,
                salesOrder
              ).pipe(
                map(() => ({ salesOrder, remainingItems })) // Pass salesOrder and remainingItems to the next stage
              );
            }
            return of({ salesOrder, remainingItems });
          })
        )
      )
    );
  }
}
