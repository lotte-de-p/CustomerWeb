import { Action, createFeature, createReducer } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { defaultState, OrderState } from './order.state';

export const reducer = createReducer(defaultState);

export function orderReducer(state: OrderState = defaultState, action: Action): OrderState {
  return reducer(state, action);
}

export const orderFeature = createFeature({
  name: stateFeatureName,
  reducer: orderReducer,
});
