export interface SummaryOrderItemPrice {
  total: Price;
  discount: Price;
  discounted: Price;
}

export interface EtfPrice {
  labelKey: string;
  productName: string | undefined;
  price: Price;
  isMonthly: boolean;
}

export interface SummaryTotalPrices {
  upfrontCost: Price;
  deliveryCost: Price;
  etfPrices?: EtfPrice[];
  etfTotal: Price;
}

export interface SummaryPrices {
  totals: SummaryTotalPrices;
  subTotals?: SummaryTotalPrices;
  vatInclusive: boolean;
}

export interface Price {
  currency: {
    name: string;
    code: string;
  };
  value: string;
}

export interface summaryDiscount {
  price: Price;
  label: string;
}

export interface SummaryOrderItem {
  name: string;
  id: string;
  prices: SummaryOrderItemPrice;
  discount?: summaryDiscount;
  mainImageUrl?: string;
}
