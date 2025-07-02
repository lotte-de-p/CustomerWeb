import { Address } from '../../../common/address/models/address.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import {
  ProductCharacteristicEnum,
  ProductGroupEnum,
  ProductLevelEnum,
  ProductTierEnum,
} from '../constants/product-characteristic.enum';
import { Option } from './option.model';
import { ProductIdentifierEnum } from './product-identifier.enum';

export class Product {
  static FIXED_INTERNET = 'FIXED_INTERNET';
  static DTV = 'DTV';
  static GENERAL = 'GENERAL';
  static FIXED_CALLING = 'FIXED_CALLING';
  static MOBILE_CALLING = 'MOBILE_CALLING';
  static MOBILE_INTERNET = 'MOBILE_INTERNET';
  static ATV = 'ATV';
  identifier: string;
  lineIdentifier?: string;
  customerProductId?: number;
  accountNumber: number;
  label: string;
  specUrl: string;
  options: Option[] = [];
  products: Product[] = [];
  productInfo?: OmapiProduct;
  address?: Address;

  hasIdentifier(identifier: string): boolean {
    return (
      identifier === this.identifier ||
      (this.products &&
        this.products.some((product) => {
          return product.identifier === identifier;
        }))
    );
  }

  isFmc(): boolean {
    return this.getProductGroup() === ProductGroupEnum.FMC;
  }

  is3P(): boolean {
    return this.getProductLevel() === ProductLevelEnum.LEVEL_3P;
  }

  is4P(): boolean {
    return this.getProductLevel() === ProductLevelEnum.LEVEL_4P;
  }

  isMidTier(): boolean {
    return this.getProductTier() === ProductTierEnum.MID;
  }

  isHighTier(): boolean {
    return this.getProductTier() === ProductTierEnum.HIGH;
  }

  isWhop() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.WHOP.toString()
    );
  }

  isWhoppa() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.WHOPPA.toString()
    );
  }

  isFlow() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.FLOW.toString()
    );
  }

  isIconic() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.ICONIC.toString()
    );
  }

  isYugoTv() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.YUGO_TV.toString()
    );
  }

  isPVV() {
    return (
      this.productInfo &&
      this.productInfo.productId &&
      this.productInfo.productId === ProductIdentifierEnum.PVV.toString()
    );
  }

  isInternet(): boolean {
    return this.productInfo?.hasServiceType(Product.FIXED_INTERNET) || false;
  }

  isFixedCalling(): boolean {
    return this.productInfo?.hasServiceType(Product.FIXED_CALLING) || false;
  }

  isDTV(): boolean {
    return this.productInfo?.hasServiceType(Product.DTV) || false;
  }

  hasDtvSubProducts(): boolean {
    return (
      this.products &&
      this.products.some((product) => {
        return product.isDTV();
      })
    );
  }

  getDtvIdentifier(): string | undefined {
    if (this.products) {
      const dtvProduct = this.products.find((product) => product.isDTV());

      if (dtvProduct) {
        return dtvProduct.identifier;
      }
    }
    return undefined;
  }

  isMobile(): boolean {
    return this.productInfo?.hasServiceType(Product.MOBILE_CALLING) || false;
  }

  isMobileInternet(): boolean {
    return (this.productInfo?.hasServiceType(Product.MOBILE_INTERNET) && !this.isMobile()) || false;
  }

  getOmapiId(): string | undefined {
    return this.productInfo ? this.productInfo.productId : undefined;
  }

  getProductGroup() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(ProductCharacteristicEnum.PRODUCT_GROUP);
    }
    return false;
  }

  isOnAddress(addressId: string): boolean {
    return this.address?.addressId === addressId;
  }

  private getProductLevel() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(ProductCharacteristicEnum.PRODUCT_LEVEL);
    }
    return false;
  }

  private getProductTier() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(ProductCharacteristicEnum.PRODUCT_TIER);
    }
    return false;
  }
}
