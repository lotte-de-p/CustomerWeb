import { PricedCphSpec } from '../model/priced-cph-data.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';

export interface MapperInterface {
  map: (product?: Product, parent?: Product) => PricedCphSpec | undefined;
}
