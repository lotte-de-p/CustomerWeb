export interface RawMobileAutoPauseInterface {
  id: string;
  limit: RawLimitInterface;
}

export interface RawLimitInterface {
  id: string;
  enabled: boolean;
  currentUsage: string;
  value: string;
  unitType: string;
  originalUnitType: string;
}
