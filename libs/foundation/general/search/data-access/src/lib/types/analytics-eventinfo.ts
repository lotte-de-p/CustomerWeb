import { AnalyticsCallFireStrategyEnum } from 'udl';
import { SearchResultItem } from '../entities/search-result-item';

export interface EventInfo {
  event: SearchEvent;
  sendOnSiteSearchFilter?: boolean;
  sendOnSiteSearchResults?: boolean;
  strategy: AnalyticsCallFireStrategyEnum;
  searchResult?: SearchResultItem;
}

enum SearchEventTypes {
  SEARCH = 'SEARCH',
  FILTER = 'FILTER',
  RESULT_CLICK = 'RESULT_CLICK',
}
type SearchEvents = Record<SearchEventTypes, SearchEvent>;

export interface SearchEvent {
  type: string;
  name: string;
}

export const UnifiedSearchEvents: SearchEvents = {
  [SearchEventTypes.SEARCH]: {
    type: 'on-site-search',
    name: 'on-site search made',
  },
  [SearchEventTypes.FILTER]: {
    type: 'click',
    name: 'on-site search filter clicked',
  },
  [SearchEventTypes.RESULT_CLICK]: {
    type: 'on-site-search-click',
    name: 'on-site search result clicked',
  },
};
