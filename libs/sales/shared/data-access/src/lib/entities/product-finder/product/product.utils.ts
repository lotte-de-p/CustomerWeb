import { Product } from './product.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class ProductUtils {
  static readonly omapiTypeOrder = {
    BUNDLE: 1,
    INTERNET: 2,
    MOBILE: 3,
    TELEPHONE: 4,
    'FIXED LINE': 4,
  };

  public static getUniqueProducts(products: Product[]): Product[] {
    return products.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (product: Product) => value.omapiProduct.externalProductCode === product.omapiProduct.externalProductCode
        )
    );
  }

  public static getNumberOfTimesMobileProductOccurs(products: Product[], id: string | undefined): number {
    return products
      .map((product: Product) => product.omapiProduct)
      .filter(
        (omapiProduct: OmapiProduct) => omapiProduct.productType === 'MOBILE' && omapiProduct.externalProductCode === id
      ).length;
  }

  public static createTitle(products: Product[]): string {
    const c5Product: Product | undefined = this.findC5Product(products);

    return c5Product
      ? c5Product.localizedOmapiProductName
      : this.getUniqueProducts(products)
          .sort(
            (a: Product, b: Product) =>
              this.omapiTypeOrder[a.omapiProduct.productType as string] -
              this.omapiTypeOrder[b.omapiProduct.productType as string]
          )
          .map((product: Product) => {
            const numberOfTimes: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
              products,
              product.omapiProduct.externalProductCode
            );
            const name: string = product.localizedOmapiProductName;
            return numberOfTimes > 1 ? numberOfTimes + 'x '.concat(name) : name;
          })
          .join(' + ');
  }

  public static findC5Product(products: Product[]): Product | undefined {
    return products.find((product: Product) => product.omapiProduct.isConnect5());
  }

  public static createFieldSelectedProduct(products: Product[]): string {
    return this.getUniqueProducts(products)
      .map((product: Product) => {
        const numberOfTimes: number = ProductUtils.getNumberOfTimesMobileProductOccurs(
          products,
          product.omapiProduct.externalProductCode
        );
        const name: string = product.localizedOmapiProductName;
        return numberOfTimes >= 1 ? numberOfTimes + 'x_'.concat(name) : name;
      })
      .join('_')
      .replaceAll(' ', '_');
  }
}
