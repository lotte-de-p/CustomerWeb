import { OrderItem } from '../interfaces/sales-order.interface';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';

export class OmapiUtil {
  static getProductType(orderItem: OrderItem, omapiProducts: RawOmapiQueryProductInterfaceData[]): string | undefined {
    const itemCode = orderItem.chars['Item Code'];
    const family = omapiProducts.find((product) =>
      product.variants.some((variant) => variant.productId === itemCode)
    )?.productFamily;

    if (family === 'smartphones') {
      return 'SMARTPHONE';
    }
    return family?.toUpperCase();
  }
}
