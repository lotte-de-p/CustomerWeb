export interface ProductUsageInterface {
  name: string;
  startUnits: string;
  startUnitsLabel?: string;
  remainingUnits: string;
  usedUnits: string;
  originalUsedUnits: string;
  usedPercentage: number;
  unitType: string;
  unlimited: boolean;
  daysUntil?: string;
  validity?: string;
  isManual?: boolean;
  bucketType?: string;
  usedUnitType?: string;
  remainingUnitType?: string;
}
