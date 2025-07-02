import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from './product.state';

export const featureState = createFeatureSelector<ProductState>('productsFeature');
export const selectProducts = createSelector([featureState], (state: ProductState) => state.products);
