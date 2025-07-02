import { OmapiProduct } from '../models/omapi-product.model';
import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { RawOmapiProductInterfaceData } from '../interfaces/raw-omapi-product.interface';
import { LanguageEnum } from '../constants/language.enum';
import { SofyComboProducts } from '../constants/sofy-combo-products.constants';

export class OmapiUtils {
  public static doesContainProductWithProvidedOmapiId<T extends { omapiid: string }[]>(
    productsWithOmapiIds: T,
    omapiId: string
  ): boolean {
    return productsWithOmapiIds.some((product) => product.omapiid === omapiId);
  }

  public static getLocalizedContent(
    language: LanguageEnum,
    omapiProduct: OmapiProduct
  ): LocalizedContentInterface | undefined {
    return omapiProduct.localizedContent?.find((value) => {
      return language.valueOf() === value.locale;
    });
  }

  public static getComboProducts(omapiId: string): RawOmapiProductInterfaceData | undefined {
    return SofyComboProducts.find((product) => {
      return product.productid === omapiId;
    });
  }
}
