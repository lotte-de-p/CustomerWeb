export interface MobileUsage {
  mobileLines: MobileLine[];
}

export interface MobileLine {
  error: string | null;
  selection: string[];
  collapsed: boolean;
}
