import { GroupBundleUsage } from './group-bundle-usage.model';

export interface BundleUsages {
  lastUpdated: string;
  groupBundleUsages: GroupBundleUsage[];
}
