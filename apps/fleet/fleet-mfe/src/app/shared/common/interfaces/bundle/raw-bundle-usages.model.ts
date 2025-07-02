import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawBundleUsages {
  lastUpdated: string;
  groupBundle: RawGroupBundleUsage[];
}

export interface RawGroupBundleUsage {
  name: string;
  specurl: string;
  startUnits: string;
  remainingUnits: string;
  usedUnits: string;
  usedPercentage: number;
  unitType: string;
  rawOmapi?: RawOmapiProductInterface;
}
