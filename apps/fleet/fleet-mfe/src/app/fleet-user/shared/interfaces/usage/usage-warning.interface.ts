export interface UsageInfo {
  currentusage: number;
  projectedusage: number;
  unittype: string;
  currentusedpercentage: number;
  projectedusedpercentage: number;
  usedunits?: number;
}

export interface Warning {
  type: string;
  severity: string;
  usageinfo: UsageInfo;
  label?: string;
}
