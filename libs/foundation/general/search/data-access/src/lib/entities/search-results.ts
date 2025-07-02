import { SearchResultItem } from './search-result-item';

export interface SearchResults {
  hits?: SearchResultItem[];
  keymatches?: SearchResultItem[];
  page?: Page;
  locale?: string;
  didYouMean?: string[];
}

export interface Page {
  size: number;
  current: number;
  total: number;
}
