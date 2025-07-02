export interface MobileAutoPauseInterface {
  id: string;
  limit: LimitInterface;
}

export interface LimitInterface {
  id: string;
  enabled: boolean;
  currentUsage?: string;
  value: string;
  unitType: string;
  originalUnitType: string;
}
