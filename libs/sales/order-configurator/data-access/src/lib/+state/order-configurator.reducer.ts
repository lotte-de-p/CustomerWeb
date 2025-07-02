import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, OrderConfiguratorState } from './order-configurator.state';
import {
  loadOfferFromUrl,
  setOffer,
  orderOnAddressSuccess,
  setCustomerAccount,
  setError,
  getCustomerAccount,
} from './order-configurator.actions';
import { stateFeatureName } from './state.const';
import { produce } from 'immer';

export const reducer = createReducer(
  defaultState,
  on(orderOnAddressSuccess, (state, { orderResult }) => {
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.orderResult = orderResult;
    });
  }),
  on(setError, (state, { error }) => {
    console.log('error', error);
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.errors.push(error);
    });
  }),
  on(getCustomerAccount, (state) => {
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.loading.loadingCustomerAccount = true;
    });
  }),
  on(setCustomerAccount, (state, { customerAccount }) => {
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.customerAccount = customerAccount;
      draft.loading.loadingCustomerAccount = false;
    });
  }),
  on(loadOfferFromUrl, (state) => {
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.loading.loadingOffer = true;
    });
  }),
  on(setOffer, (state, { offer }) => {
    return produce(state, (draft: OrderConfiguratorState) => {
      draft.offer = offer;
      draft.loading.loadingOffer = false;
    });
  })
);

export function orderConfiguratorReducer(
  state: OrderConfiguratorState = defaultState,
  action: Action
): OrderConfiguratorState {
  return reducer(state, action);
}

export const orderConfiguratorFeature = createFeature({
  name: stateFeatureName,
  reducer: orderConfiguratorReducer,
});
