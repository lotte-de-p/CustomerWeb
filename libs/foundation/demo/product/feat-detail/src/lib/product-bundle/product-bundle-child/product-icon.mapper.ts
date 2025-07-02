import { Product } from '@demo/product/data-access';

export class ProductIconConstants {
  static PRODUCT_TYPE_INTERNET = 'internet';
  static INTERNET_ICON = 'wifi-device';

  static PRODUCT_TYPE_MOBILE = 'mobile';
  static MOBILE_ICON = 'mobile';

  static PRODUCT_TYPE_DTV = 'tv';
  static DTV_ICON = 'tv';
}

export const productIconMapper = (product: Product): ProductIconConstants => {
  switch (product.productType) {
    case ProductIconConstants.PRODUCT_TYPE_INTERNET:
      return ProductIconConstants.INTERNET_ICON;

    case ProductIconConstants.PRODUCT_TYPE_MOBILE:
      return ProductIconConstants.MOBILE_ICON;

    case ProductIconConstants.PRODUCT_TYPE_DTV:
      return ProductIconConstants.DTV_ICON;

    default:
      return ProductIconConstants.MOBILE_ICON;
  }
};
