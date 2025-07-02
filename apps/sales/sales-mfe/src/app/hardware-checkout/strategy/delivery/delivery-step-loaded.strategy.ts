import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { forkJoin, Observable, pipe, switchMap, UnaryFunction } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import {
  CustomerAccountDetails,
  CustomerTypeEnum,
  OrderItem,
  SalesOrder,
  SalesOrderStateEnum,
  SdataSalesOffer,
  SdataSalesOfferItem,
} from '@sales/hardware-checkout/data-access';
import { StrategyUtil } from '../../utils/strategy.util';
import { CustomerAccountDetailsUtil } from '../../utils/customer-account-details.util';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { CustomerHasNoLocationAssociated, SalesOfferNotFound } from '../../constants/errors.constants';
import { EventFacade } from '@sales/events/data-access';
import { SdataSalesOfferUtil } from '../../utils/sdata-sales-offer.util';
import { SalesOrderUtil } from '../../utils/sales-order.util';

export class DeliveryStepLoadedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly eventFacade: EventFacade
  ) {}

  showLoader(): boolean {
    return false;
  }

  execute(): Observable<boolean> {
    return forkJoin({
      customerAccount: this.hardwareCheckoutFacade.customerAccountDetails$.pipe(take(1)),
      customerType: this.hardwareCheckoutFacade.customerType$.pipe(take(1)),
    })
      .pipe(
        mergeMap((value: { customerAccount: CustomerAccountDetails | undefined; customerType: CustomerTypeEnum }) => {
          const locationId = CustomerAccountDetailsUtil.getCustomerLocationId(
            value.customerAccount,
            value.customerType === CustomerTypeEnum.SOHO
          );
          if (!locationId) {
            throw new HardwareCheckoutError(CustomerHasNoLocationAssociated);
          }
          this.eventFacade.triggerAnalyticsScAddEvent({ name: 'new product selected' });
          return this.hardwareCheckoutFacade.createSalesOrder(locationId);
        })
      )
      .pipe(
        tap((salesOrder: SalesOrder) => {
          this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
          this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.SALES_ORDER_CREATED);
        })
      )
      .pipe(StrategyUtil.createHardwareItems(this.hardwareCheckoutFacade), this.addDiscounts())
      .pipe(StrategyUtil.setSalesOrderAsAbandonable(this.hardwareCheckoutFacade))
      .pipe(StrategyUtil.processSalesOrderToDeliveryCalculated(this.hardwareCheckoutFacade));
  }

  addDiscounts(): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((initialSalesOrder: SalesOrder) =>
        this.hardwareCheckoutFacade.salesOffer$.pipe(
          take(1),
          switchMap((sdataSalesOffer) => {
            if (!sdataSalesOffer) {
              throw new HardwareCheckoutError(SalesOfferNotFound);
            }
            return this.processOrderItemsSequentially(initialSalesOrder, sdataSalesOffer);
          })
        )
      )
    );
  }

  processOrderItemsSequentially(salesOrder: SalesOrder, sdataSalesOffer: SdataSalesOffer): Observable<SalesOrder> {
    const salesOfferItemsWithDiscount: SdataSalesOfferItem[] =
      SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer);
    const hardwareOrderItem: OrderItem = SalesOrderUtil.getHardwareOrderItem(salesOrder);

    if (!hardwareOrderItem.orderItems) {
      throw new Error('Something is amiss with the order items.');
    }

    const matchingDiscounts = SalesOrderUtil.orderItemsWithMatchingDiscounts(
      hardwareOrderItem.orderItems,
      salesOfferItemsWithDiscount
    );

    return StrategyUtil.applyDiscountsRecursively(this.hardwareCheckoutFacade, matchingDiscounts, salesOrder);
  }
}
