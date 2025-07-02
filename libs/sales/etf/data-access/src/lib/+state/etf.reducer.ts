import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { defaultState, EtfState } from './etf.state';
import {
  cancelEtfTermination,
  resetEtfState,
  resetOrderItem,
  setOrderItemsWithDiscount,
  setOrderItemTerminationState,
  setOrderItemToMarkedForBuyingWithoutDiscount,
  setShowEtfOptions,
  setUsedDiscountToTerminate,
  setUsedSlots,
} from './etf.actions';
import { UsedSlot } from '../interfaces/customer-discounts.interface';
import { stateFeatureName } from '../constants/state.const';
import { OrderItemWithDiscount } from '../interfaces/order-item-with-discount.interface';

export const reducer = createReducer(
  defaultState,
  on(resetEtfState, (state: EtfState) => {
    return produce(state, (draft: EtfState) => {
      draft.orderItemsWithDiscount = undefined;
      draft.usedSlots?.forEach((usedSlot) => {
        usedSlot.shouldBeTerminated = false;
      });
    });
  }),
  on(setOrderItemsWithDiscount, (state: EtfState, props: { orderItemsWithDiscount: OrderItemWithDiscount[] }) => {
    return produce(state, (draft: EtfState) => {
      draft.orderItemsWithDiscount = props.orderItemsWithDiscount;
    });
  }),
  on(setUsedSlots, (state: EtfState, props: { usedSlots: UsedSlot[] }) => {
    return produce(state, (draft: EtfState) => {
      draft.usedSlots = props.usedSlots;
    });
  }),
  on(
    setShowEtfOptions,
    (
      state: EtfState,
      props: {
        orderItemWithDiscount: OrderItemWithDiscount;
        showEtfOptions: boolean;
      }
    ) => {
      return produce(state, (draft: EtfState) => {
        const orderItemToTerminate = draft.orderItemsWithDiscount?.find((orderItem) => {
          return orderItem.id === props.orderItemWithDiscount.id;
        });
        if (orderItemToTerminate) {
          orderItemToTerminate.showEtfOptions = props.showEtfOptions;
        }
      });
    }
  ),
  on(
    setOrderItemToMarkedForBuyingWithoutDiscount,
    (
      state: EtfState,
      props: {
        orderItemWithDiscount: OrderItemWithDiscount;
      }
    ) => {
      return produce(state, (draft: EtfState) => {
        const orderItemToTerminate = draft.orderItemsWithDiscount?.find((orderItem) => {
          return orderItem.id === props.orderItemWithDiscount.id;
        });
        if (orderItemToTerminate) {
          orderItemToTerminate.hasMadeASelection = true;
        }
      });
    }
  ),
  on(
    resetOrderItem,
    (
      state: EtfState,
      props: {
        orderItemWithDiscount: OrderItemWithDiscount;
      }
    ) => {
      return produce(state, (draft: EtfState) => {
        const orderItemToTerminate = draft.orderItemsWithDiscount?.find((orderItem) => {
          return orderItem.id === props.orderItemWithDiscount.id;
        });
        if (orderItemToTerminate) {
          orderItemToTerminate.showEtfOptions = false;
          orderItemToTerminate.selectedEtfDiscountSlot = undefined;
          orderItemToTerminate.hasMadeASelection = false;
        }
      });
    }
  ),
  on(cancelEtfTermination, (state: EtfState, props: { orderItemWithDiscount: OrderItemWithDiscount }) => {
    return produce(state, (draft: EtfState) => {
      const orderItemToTerminate = draft.orderItemsWithDiscount?.find((orderItem) => {
        return orderItem.id === props.orderItemWithDiscount.id;
      });
      if (orderItemToTerminate) {
        const discountToReset = draft.usedSlots?.find((discountSlot) => {
          return discountSlot.id === orderItemToTerminate?.selectedEtfDiscountSlot?.id;
        });

        if (discountToReset) {
          discountToReset.shouldBeTerminated = false;
        }
        orderItemToTerminate.selectedEtfDiscountSlot = undefined;
        orderItemToTerminate.hasMadeASelection = false;
      }
    });
  }),
  on(
    setOrderItemTerminationState,
    (
      state: EtfState,
      props: {
        orderItemWithDiscount: OrderItemWithDiscount;
        markedForDiscount: boolean;
      }
    ) => {
      return produce(state, (draft: EtfState) => {
        const orderItemToTerminate = draft.orderItemsWithDiscount?.find((orderItem) => {
          return orderItem.id === props.orderItemWithDiscount.id;
        });
        if (orderItemToTerminate) {
          if (!props.markedForDiscount) {
            const discountToReset = draft.usedSlots?.find((discountSlot) => {
              return discountSlot.id === orderItemToTerminate?.selectedEtfDiscountSlot?.id;
            });

            if (discountToReset) {
              discountToReset.shouldBeTerminated = false;
            }
            orderItemToTerminate.selectedEtfDiscountSlot = undefined;
          }
          orderItemToTerminate.showEtfOptions = props.markedForDiscount;
          orderItemToTerminate.hasMadeASelection = true;
        }
      });
    }
  ),
  on(
    setUsedDiscountToTerminate,
    (
      state: EtfState,
      props: {
        orderItemWithDiscount: OrderItemWithDiscount;
        usedDiscount: UsedSlot;
      }
    ) => {
      return produce(state, (draft: EtfState) => {
        const selectedOrderItem = draft.orderItemsWithDiscount?.find((orderItem) => {
          return orderItem.id === props.orderItemWithDiscount.id;
        });

        // Check if the selected order item has a used slot
        // If so remove the used slot status
        if (selectedOrderItem?.selectedEtfDiscountSlot) {
          const discountToReset = draft.usedSlots?.find((discountSlot) => {
            return discountSlot.id === selectedOrderItem?.selectedEtfDiscountSlot?.id;
          });

          if (discountToReset) {
            discountToReset.shouldBeTerminated = false;
          }
        }
        const selectedDiscount = draft.usedSlots?.find((discountSlot) => {
          return discountSlot.id === props.usedDiscount.id;
        });
        if (selectedOrderItem) {
          selectedOrderItem.selectedEtfDiscountSlot = props.usedDiscount;
          selectedOrderItem.hasMadeASelection = true;
        }
        if (selectedDiscount) {
          selectedDiscount.shouldBeTerminated = true;
        }
      });
    }
  )
);

export function EtfReducer(state: EtfState = defaultState, action: Action): EtfState {
  return reducer(state, action);
}

export const etfFeature = createFeature({
  name: stateFeatureName,
  reducer: EtfReducer,
});
