export interface AccountThresholdInterface {
  overConsumptionThreshold: ThresholdInterface;
}

export interface ThresholdInterface {
  value?: number;
  isEnabled: boolean;
  inProgress?: boolean;
}
