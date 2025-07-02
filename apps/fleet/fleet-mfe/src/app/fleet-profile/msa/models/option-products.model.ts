import { PriceInterface } from '../interfaces/price.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOptionsConstants } from '../interfaces/product-options.constant';

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
  getProductCategory(isChangeDTV?: boolean): string {
    return this.category === ProductOptionsConstants.DTV_PRODUCT && isChangeDTV
      ? ProductOptionsConstants.DIGITAL_TV
      : this.category;
  }

  isFixedIP(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.FIXED_IP;
  }
  isBackupService(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.BACKUP_SERVICE;
  }
  isSafespotPlus(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.SAFESPOT_PLUS_EPC;
  }
  isSafespotPro(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.SAFESPOT_PRO_EPC;
  }
  isWifiBusiness(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.WIFI_BUSINESS;
  }
}
