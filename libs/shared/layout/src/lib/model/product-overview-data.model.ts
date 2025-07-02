export interface OverviewItem {
  label: OverviewItemLabel;
  price?: OverviewPrice;
  promos?: OverviewPromo[];
  subItems?: OverviewItem[];
  weight?: number;
  hidePromoLabels?: boolean;
}

export interface OverviewPrice {
  value: number;
  type?: OverviewPriceType;
}

export enum OverviewPriceType {
  MONTHLY,
  ONE_TIME,
}

export interface OverviewPromo {
  value: number;
  duration: number;
  legalInformation?: string;
  label: string;
}

export interface OverviewItemLabel {
  key: string;
  values: unknown;
}
