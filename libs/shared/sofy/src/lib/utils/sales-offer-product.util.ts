import { SalesOfferProduct } from '../models/response';

export class SalesOfferProductUtil {
  static RMD_PRODUCT = 'RMD';
  static SOHO_PRODUCT = 'TB';

  public static isResidentialProduct(product: SalesOfferProduct) {
    return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.RMD_PRODUCT;
  }

  public static isSohoProduct(product: SalesOfferProduct) {
    return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.SOHO_PRODUCT;
  }

  public static hasAnyInstallTypes(product: SalesOfferProduct): boolean {
    return product.installtypes && product.installtypes.length > 0;
  }
}
