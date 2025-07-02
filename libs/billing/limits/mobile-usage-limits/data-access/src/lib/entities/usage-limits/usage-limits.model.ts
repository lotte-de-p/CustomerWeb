export interface UsageLimits {
  outOfBundle: OutOfBundle;
  premiumService: PremiumService;
}

export interface OutOfBundle {
  currentUsage: number;
  limit: OutOfBundleLimit;
}

export interface OutOfBundleLimit {
  enabled: boolean;
  value: number;
}

export interface PremiumService {
  currentUsage: number;
  limit: PremiumLimit;
}

export interface PremiumLimit {
  enabled: boolean;
  value: number;
}

export interface Login {
  isMember: boolean;
}
