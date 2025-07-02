import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class Option {
  label: string;
  specUrl: string;
  productInfo?: OmapiProduct;

  getOmapiId(): string | undefined {
    return this.productInfo ? this.productInfo.productId : undefined;
  }
}
