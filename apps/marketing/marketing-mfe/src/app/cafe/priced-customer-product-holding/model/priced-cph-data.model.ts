export interface PricedCphOverview {
  products: PricedCphItem[];
  options: PricedCphItem[];
  lastBillPrice?: string;
}

export interface GroupableItem {
  key: string;
  amount: number;
}

export interface PricedCphItem extends GroupableItem {
  weight: number;
  specifications?: PricedCphSpec[];
}

export interface PricedCphSpec extends GroupableItem {
  label: Label;
  weight: number;
  icon: string;
}

export interface Label {
  key: string;
  args?: object;
}
