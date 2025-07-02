export interface RawProductSpec {
  omapiId: string;
  shortSummaries: RawShortSummarySpec[];
  detailedSpecs: RawDetailedSpec[];
}

export interface RawShortSummarySpec {
  labelKey: string;
  type: string;
}

export interface RawDetailedSpec {
  icon: string;
  labelKey: string;
  type: string;
}
