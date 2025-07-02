import { Action, createFeature, createReducer } from '@ngrx/store';
import { defaultState, SalesCheckout } from './sales-checkout.state';
export const reducer = createReducer(defaultState);

export function salesCheckoutReducer(state: SalesCheckout, action: Action): SalesCheckout {
  return reducer(state, action);
}
export const salesCheckoutFeature = createFeature({
  name: 'salesCheckoutFeature',
  reducer,
});
