import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { ProductUsageInterface } from '../product/product-usage.interface';

export interface RawUsageInterface {
  shared?: RawSharedInterface;
  included?: RawIncludedInterface;
  carryOver?: RawIncludedInterface;
  total?: RawTotalInterface;
  outOfBundle?: RawOutOfBundleInterface;
  extraUsages?: RawProductUsageInterface[];
  lastUpdated?: string;
  nextBillingDate?: string;
  previousBillingDate?: string;
  success?: string;
  credit?: RawCreditInterface;
  validUntil?: string;
  category: RawCategoryInterface;
  options: RawOptionInterface[];
  rawOmapi?: RawOmapiProductInterface;
  sharedBundles?: RawSharedBundlesInterface;
  splitBillBudget?: ProductUsageInterface;
}

export interface RawCategoryInterface {
  categories: RawCategoryInterface;
}

export interface RawOptionInterface {
  rawOmapi?: RawOmapiProductInterface;
  label: string;
  productCode: string;
  monetary: RawProductUsageInterface[];
  data: RawProductUsageInterface[];
  text: RawProductUsageInterface[];
  voice: RawProductUsageInterface[];
}

export interface RawTotalInterface {
  monetary: RawTotalUsageInterface;
  data: RawTotalUsageInterface;
  text: RawTotalUsageInterface;
  voice: RawTotalUsageInterface;
}

export interface RawTotalUsageInterface {
  initialCarryOverPercentage: number;
  initialIncludedPercentage: number;
  remainingUnits: string;
  startUnits: string;
  unitType: string;
  unlimited: boolean;
  usedPercentage: number;
  usedUnits: string;
}

export interface RawOutOfBundleInterface {
  usedUnits: string;
  unitType: string;
  details?: RawOutOfBundleDetailsInterface[];
}

export interface RawOutOfBundleDetailsInterface {
  type: string;
  value: number;
}

export interface RawIncludedInterface {
  monetary: RawProductUsageInterface[];
  data: RawProductUsageInterface[];
  text: RawProductUsageInterface[];
  voice: RawProductUsageInterface[];
  option?: RawOptionInterface;
}

export interface RawSharedInterface extends RawIncludedInterface {
  ZBR?: RawProductUsageInterface[];
}

export interface RawProductUsageInterface {
  name: string;
  startUnits: string;
  remainingUnits: string;
  usedUnits: string;
  originalUsedUnits: string;
  usedPercentage: number;
  unitType: string;
  unlimited: boolean;
  daysUntil: string;
  validity: string;
  bucketType?: string;
}

export interface RawCreditInterface {
  remainingUnits: string;
  unitType: string;
}

export interface RawSharedBundlesInterface {
  monetary: RawProductUsageInterface[];
  data: RawProductUsageInterface[];
  text: RawProductUsageInterface[];
  voice: RawProductUsageInterface[];
}
