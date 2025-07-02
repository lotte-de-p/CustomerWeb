import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface ExtendedUsageInterface {
  productInfo: OmapiProduct;
  volumeBlocks: string;
  eligibleToBuy: boolean;
}
