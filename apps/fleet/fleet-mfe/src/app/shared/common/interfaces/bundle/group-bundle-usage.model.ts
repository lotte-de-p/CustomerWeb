import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface GroupBundleUsage {
  name: string;
  specurl: string;
  startUnits: string;
  remainingUnits: string;
  usedUnits: string;
  usedPercentage: number;
  unitType: string;
  productInfo: OmapiProduct;
}
