import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, SalesStateModel } from './sales.state';
import { produce } from 'immer';
import { setCalculateIntent, setErrorMessage, setIntents, updateIntent } from './sales.actions';
import { SalesOrder } from '../../../../../../shared/models/sales-order.model';
export const reducer = createReducer(
  defaultState,
  on(updateIntent, (state, { payload }) =>
    produce(state, (draft) => {
      draft.salesOrder = updateSalesOrder(payload.salesOrder, state);
      draft.ready = true;
    })
  ),
  on(setIntents, (state, { payload }) =>
    produce(state, (draft) => {
      draft.intent = payload.intent;
      draft.analyticsIntent = payload.analyticsIntent;
    })
  ),
  on(setCalculateIntent, (state, { payload }) =>
    produce(state, (draft) => {
      draft.isIntentCalculated = payload;
    })
  ),
  on(setErrorMessage, (state, { payload }) =>
    produce(state, (draft) => {
      draft.errorMessage = payload;
    })
  )
);

function updateSalesOrder(salesOrder: SalesOrder, state: SalesStateModel): SalesOrder {
  if (state && state.salesOrder) {
    const isBundleFamilySame = state.salesOrder.isBundleFamilySame;
    if (isBundleFamilySame) {
      salesOrder.isBundleFamilySame = isBundleFamilySame;
    }
  }
  return salesOrder;
}

export function salesReducer(state: SalesStateModel, action: Action): SalesStateModel {
  return reducer(state, action);
}
export const salesFeature = createFeature({
  name: 'salesFeature',
  reducer,
});
