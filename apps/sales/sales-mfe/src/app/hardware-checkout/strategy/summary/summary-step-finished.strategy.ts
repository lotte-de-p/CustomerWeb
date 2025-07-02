import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { forkJoin, Observable, of } from 'rxjs';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import {
  CheckoutDeliveryError,
  NoHomeDeliveryOrderItem,
  SubmitSalesOrderFailed,
} from '../../constants/errors.constants';
import { map, mergeMap, take } from 'rxjs/operators';
import { SummaryFacade } from '@sales/summary/data-access';
import { MediaQueryService, UrlService } from '@telenet/ng-lib-page';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { AddressUtil } from '../../utils/address.util';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { OrderItemActionEnum } from '../../enums/order-item-action.enum';
import { SalesOrder } from '@sales/hardware-checkout/data-access';
import { EventFacade } from '@sales/events/data-access';
import { PaymentRequestUtil } from '../../utils/payment-request.util';

export class SummaryStepFinishedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly summaryFacade: SummaryFacade,
    private readonly urlService: UrlService,
    private readonly mediaQueryService: MediaQueryService,
    private readonly eventFacade: EventFacade
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      mergeMap((salesOrder: SalesOrder | undefined) => {
        if (salesOrder) {
          return SalesOrderUtil.checkoutDeliveryRequired(salesOrder)
            ? this.hardwareCheckoutFacade.checkoutDelivery(salesOrder.id)
            : of(salesOrder);
        }
        throw new HardwareCheckoutError(CheckoutDeliveryError);
      }),
      mergeMap((salesOrder) => {
        if (salesOrder) {
          // do not re-submit sales order if customer already tried to do payment
          const awaitsPayment = SalesOrderUtil.orderAwaitsPayment(salesOrder);
          const submittedSalesOrder$: Observable<SalesOrder> = awaitsPayment
            ? of(salesOrder)
            : this.hardwareCheckoutFacade.submitSalesOrder(salesOrder.id);

          return forkJoin({
            awaitsPayment: of(awaitsPayment),
            salesOrder: submittedSalesOrder$,
          });
        }
        throw new HardwareCheckoutError(SubmitSalesOrderFailed);
      }),
      mergeMap(({ awaitsPayment, salesOrder }) => {
        if (!awaitsPayment) {
          this.eventFacade.triggerAnalyticsClickEvent({ name: 'order submitted' });
        }
        const homeDeliveryOrderItem = SalesOrderUtil.getDeliveryOrderItem(salesOrder, OrderItemActionEnum.ADD);
        if (homeDeliveryOrderItem) {
          return forkJoin([
            of(salesOrder),
            this.hardwareCheckoutFacade.getAddressById(homeDeliveryOrderItem.chars['Postal Code']),
            this.hardwareCheckoutFacade.getAddressById(homeDeliveryOrderItem.chars['Street']),
          ]);
        }
        throw new HardwareCheckoutError(NoHomeDeliveryOrderItem);
      }),
      mergeMap(([salesOrder, postalCodeUnit, streetUnit]) => {
        const deliveryAddress = AddressUtil.convertNcPostalAddressToDeliveryAddress(postalCodeUnit);
        deliveryAddress.street = streetUnit.name;
        return forkJoin([of(salesOrder), of(deliveryAddress)]);
      }),
      mergeMap(([salesOrder, deliveryAddress]) => {
        const homeDeliveryOrderItem = SalesOrderUtil.getDeliveryOrderItem(salesOrder, OrderItemActionEnum.ADD);
        const urlWithoutParams = this.urlService.getCurrentUrl().split('?')[0];

        return this.hardwareCheckoutFacade.getPaymentRequestObject(
          PaymentRequestUtil.getPaymentRequestObject(
            salesOrder,
            homeDeliveryOrderItem,
            urlWithoutParams,
            deliveryAddress,
            this.summaryFacade.getLanguage(),
            this.mediaQueryService.getDeviceName()
          )
        );
      }),
      mergeMap((response) => {
        const payment = response.payment;
        this.summaryFacade.setIngenicoForm({
          ACCEPTURL: payment.acceptURL,
          ALIAS: '',
          ALIASOPERATION: '',
          ALIASUSAGE: '',
          AMOUNT: payment.amount,
          BRAND: '',
          CANCELURL: payment.cancelURL,
          CN: payment.contactName,
          CURRENCY: payment.currency,
          DECLINEURL: payment.declineURL,
          DEVICE: payment.device,
          EMAIL: payment.email,
          EXCEPTIONURL: payment.exceptionURL,
          LANGUAGE: payment.language,
          ORDERID: payment.transactionId,
          OWNERADDRESS: payment.ownerAddress,
          OWNERCTY: payment.ownerCountry,
          OWNERTELNO: payment.ownerContactNumber,
          OWNERTOWN: payment.ownerTown,
          OWNERZIP: payment.ownerZip,
          PARAMPLUS: payment.paramPlus,
          PARAMVAR: payment.paramVar,
          PM: '',
          PMLISTTYPE: '',
          PSPID: payment.paymentServiceProviderId,
          SECRET: '',
          SHASIGN: response.signature,
          TP: payment.template,
        });
        return of(true);
      }),
      map(() => {
        this.summaryFacade.setIngenicoFormReady(true);
        return true;
      })
    );
  }
}
