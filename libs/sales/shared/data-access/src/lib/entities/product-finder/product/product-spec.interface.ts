export interface ProductSpec {
  shortSummaries: ShortSummarySpec[];
  detailedSpecs: DetailedSpec[];
}

export interface ShortSummarySpec {
  labelKey: string;
  type: string;
}

export interface DetailedSpec {
  icon: string;
  labelKey: string;
  type: string;
}
