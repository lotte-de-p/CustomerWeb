import { Product } from '../entities/models/product.model';

export interface ProductState {
  products: Product[];
}

export const defaultState: ProductState = {
  products: [],
};
