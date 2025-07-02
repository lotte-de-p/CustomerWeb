export interface RawAccountThresholdInterface {
  overConsumptionThreshold: RawThresholdInterface;
}

export interface RawThresholdInterface {
  value: number;
  isEnabled: boolean;
  inProgress: boolean;
}
