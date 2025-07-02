export interface UpdateUsageLimitsRequest {
  outOfBundleLimit?: OutOfBundleLimit;
  premiumServiceLimit?: PremiumServiceLimit;
}

export interface OutOfBundleLimit {
  enabled: boolean;
  value: number | undefined;
}

export interface PremiumServiceLimit {
  value: number;
}
