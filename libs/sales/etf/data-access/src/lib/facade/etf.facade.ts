import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderItemWithDiscount } from '../interfaces/order-item-with-discount.interface';
import { orderItemsWithDiscount, usedSlots } from '../+state/etf.selectors';
import { UsedSlot } from '../interfaces/customer-discounts.interface';
import { EtfState } from '../+state/etf.state';
import {
  cancelEtfTermination,
  resetEtfState,
  resetOrderItem,
  setOrderItemToMarkedForBuyingWithoutDiscount,
  setShowEtfOptions,
  setUsedDiscountToTerminate,
} from '../+state/etf.actions';

@Injectable({ providedIn: 'root' })
export class EtfFacade {
  orderItemsWithDiscount$: Observable<OrderItemWithDiscount[] | undefined> = this.store.select(orderItemsWithDiscount);
  usedAndPendingDiscountSlots$: Observable<UsedSlot[] | undefined> = this.store.select(usedSlots);

  constructor(private readonly store: Store<EtfState>) {}

  resetEtfState() {
    this.store.dispatch(resetEtfState());
  }

  setShowEtfOptions(orderItemWithDiscount: OrderItemWithDiscount, showEtfOptions: boolean) {
    this.store.dispatch(
      setShowEtfOptions({
        orderItemWithDiscount: orderItemWithDiscount,
        showEtfOptions: showEtfOptions,
      })
    );
  }

  setOrderItemToMarkedForBuyingWithoutDiscount(orderItemWithDiscount: OrderItemWithDiscount) {
    this.store.dispatch(
      setOrderItemToMarkedForBuyingWithoutDiscount({
        orderItemWithDiscount: orderItemWithDiscount,
      })
    );
  }

  resetOrderItem(orderItemWithDiscount: OrderItemWithDiscount) {
    this.store.dispatch(
      resetOrderItem({
        orderItemWithDiscount: orderItemWithDiscount,
      })
    );
  }

  cancelEtfTermination(orderItemWithDiscount: OrderItemWithDiscount) {
    this.store.dispatch(
      cancelEtfTermination({
        orderItemWithDiscount: orderItemWithDiscount,
      })
    );
  }

  setDiscountToTerminate(orderItemWithDiscount: OrderItemWithDiscount, usedDiscount: UsedSlot) {
    this.store.dispatch(
      setUsedDiscountToTerminate({
        orderItemWithDiscount: orderItemWithDiscount,
        usedDiscount: usedDiscount,
      })
    );
  }
}
