import { ProductConstants } from './product-holding/constants/product.constants';

export abstract class AbstractCafeService {
  _property: string;

  public getPropertyEndPoint(): string {
    return '/public/?p=' + this._property;
  }

  public getPropertyAdaptorEndPoint(): string {
    return ProductConstants.ADAPTOR_URL + '/public/?p=' + this._property;
  }

  public set property(value: string) {
    this._property = value;
  }
}
