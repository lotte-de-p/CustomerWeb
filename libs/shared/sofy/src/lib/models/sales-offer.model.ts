import { ProductModel } from './product.model';

export class SalesOfferModel {
  public products: ProductModel[];
  public standaloneOptions: ProductModel[];
  public ownedProducts: ProductModel[];
}
