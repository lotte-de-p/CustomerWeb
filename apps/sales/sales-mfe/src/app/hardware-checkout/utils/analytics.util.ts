import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';
import { Cart } from 'udl';

export class AnalyticsUtil {
  static enrichWithCommonAttributes(
    analyticsAttributes: DataLayerAttributes | undefined,
    attributes: DataLayerAttributes | undefined,
    cart: Cart | undefined
  ): DataLayerAttributes {
    const dataLayerAttributes = { ...(analyticsAttributes || {}), ...(attributes || {}) };
    if (cart !== undefined) {
      dataLayerAttributes.cart = cart;
    }
    return dataLayerAttributes;
  }
}
