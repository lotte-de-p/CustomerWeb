import { Product } from './product.model';

export class ProductPredicates {
  static FREE_PHONE_BUSINESS = '3159';
  public static get c5ProductPredicate() {
    return (product: Product) =>
      product.productInfo && (product.productInfo.isConnect5() || product.productInfo.isConnect5Soho());
  }
  public static get freePhoneBusinessPredicate() {
    return (product: Product) =>
      product.isInternet() &&
      product.options &&
      product.options.some((option) => option.getOmapiId() === ProductPredicates.FREE_PHONE_BUSINESS);
  }
}
