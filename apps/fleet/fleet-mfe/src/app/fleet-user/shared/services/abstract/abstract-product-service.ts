import { AbstractService } from './abstract-service';
import { ProductConstants } from '../../constants/product/product.constant';

export abstract class AbstractProductService extends AbstractService {
  protected getServiceURI(endpoint: string, context: string, version: string) {
    return ProductConstants.PRODUCT_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }

  protected getProductServiceURI(
    version: string,
    context: string,
    suffix: string,
    endpoint: string,
    parameters: string
  ) {
    return ProductConstants.PRODUCT_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }
}
