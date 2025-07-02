import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { ProductState, defaultState } from './product.state';
import { produce } from 'immer';
import { getProductsSuccessAction } from './product.actions';

export const reducer = createReducer(
  defaultState,
  on(getProductsSuccessAction, (state: ProductState, { products }) =>
    produce(state, (draft: ProductState) => {
      draft.products = products;
    })
  )
);

export function productReducer(state: ProductState = defaultState, action: Action): ProductState {
  return reducer(state, action);
}

export const productsFeature = createFeature({
  name: 'productsFeature',
  reducer: productReducer,
});
