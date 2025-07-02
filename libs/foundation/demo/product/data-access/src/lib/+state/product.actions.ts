import { createAction, props } from '@ngrx/store';
import { Product } from '../entities/models/product.model';

export const getProducts = createAction('[demo - product] get products');
export const getProductsSuccessAction = createAction(
  '[demo - product] get products success response',
  props<{ products: Product[] }>()
);

export const getErrorAction = createAction('[demo - product] get products Error', props<{ error: Error }>());
