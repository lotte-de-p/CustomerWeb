import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { PriceInterface } from '../interfaces/price.interface';

export class OptionProductsModel {
  public readonly label: string;
  public readonly type: string;
  public readonly productInfo: OmapiProduct;
  public readonly price: PriceInterface;
  public readonly isIncluded?: boolean;
  public readonly category?: string;
  public readonly discountedPrice?: string;
  public readonly rank?: string;
  public readonly discount?: string;
  public readonly isDiscountForPlayMore?: boolean;
  public readonly otherPlatformWarningMsg?: boolean;
  public readonly parentId: string;
  public selected?: boolean;
  public isDisabled?: string;
  public variants? = [] as OptionProductsModel[];
  public includedOptions? = [] as OptionProductsModel[];
  public bundleOptions? = [] as OptionProductsModel[];

  public readonly isFree?: boolean;
  public readonly optionCount?: number;

  getCategoryHeading(): string {
    if (this.parentId) {
      return this.parentId;
    }
    return this.productInfo && this.productInfo.subCategory && this.productInfo.subCategory.localizedName;
  }
}
