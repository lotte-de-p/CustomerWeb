import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ExtendedUsageInterface } from '../interfaces/extended-usage.interface';
import { AllocatedUsageInterface } from '../interfaces/allocated-usage.interface';
import { BaseExtendedUsageInterface } from '../interfaces/base-extended-usage.interface';
import { TotalInternetUsageInterface } from '../interfaces/usage/total-internet-usage.interface';
import { PeakUsageInterface } from '../interfaces/peak-usage.interface';

export class InternetUsage {
  category: string;
  productInfo: OmapiProduct;
  daysUntil: string;
  validity: string;
  allocatedUsage: AllocatedUsageInterface;
  extendedUsage: ExtendedUsageInterface;
  totalUsage: TotalInternetUsageInterface;
  peakUsage: PeakUsageInterface;
  baseExtendedUsage?: BaseExtendedUsageInterface[];
  usedBucketUsage?: number;
  totalBucketUsage?: number;
  usedBucketPercentage?: string;
  barColorClass?: string;

  isFUPLine(): boolean {
    return this.category.toUpperCase() === 'FUP';
  }

  isCAPLine(): boolean {
    return this.category.toUpperCase() === 'CAP';
  }

  isUnlimitedLine(): boolean {
    return this.category.toUpperCase() === 'UNLIMITED';
  }
}
