import { Observable } from 'rxjs';
import { OmapiProduct, ProductConstants } from '@telenet/ng-lib-omapi';
import { map } from 'rxjs/operators';

export class OmapiProductCategoryUtil {
  static checkOmapiProductsByCategory(
    omapiProducts$: Observable<OmapiProduct[]>,
    categoryToCheck: string
  ): Observable<boolean> {
    return omapiProducts$.pipe(
      map((products) =>
        products.some((product) =>
          product.categories?.some((category) => category.toLowerCase().includes(categoryToCheck.trim().toLowerCase()))
        )
      )
    );
  }

  static checkOmapiProductsByLabel(
    omapiProducts$: Observable<OmapiProduct[]>,
    labelToCheck: string
  ): Observable<boolean> {
    return omapiProducts$.pipe(
      map((products) =>
        products.some((product) => product.labelKey?.toLowerCase().includes(labelToCheck.trim().toLowerCase()))
      )
    );
  }

  static isFixedProduct(omapiProducts$: Observable<OmapiProduct[]>): Observable<boolean> {
    return omapiProducts$.pipe(map((products) => products.some((product) => product.requiresInstallation)));
  }

  static getUpdatedInternalCategory(interCategory: string | undefined): string {
    return interCategory?.includes(ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE) ? 'POSTPAID' : 'PREPAID';
  }
}
