import { Suggestions } from '../entities/suggestions';
import { SuggestionItem } from '../entities/suggestion-item';
import { SearchResults } from '../entities/search-results';
import { Collection, FacetGroup } from '../entities/facets';

export interface SearchState {
  query: string;
  resultsComponentFound: boolean;
  headerExpanded: boolean;
  eventData: SearchEventData;
  header: {
    suggestions: Suggestions;
    topResults: SearchResults;
    selectedCollection: string;
    resultsPageUrl: string;
  };
  resultsPage: {
    searchResults: SearchResultsData;
    initData: {
      tags: string[];
      collections: Collection[];
      page: number;
    };
    collections: FacetGroup;
    facetGroups: FacetGroup[];
    activeCollection: string;
    loading: boolean;
  };
  inPage: InPageData;
}

export interface SearchEventData {
  lastUsedComponent: string;
  queryUsed: string | undefined;
  suggestionUsed: SuggestionItem | undefined;
  searchOriginatingPageId: string | undefined;
}

export interface SearchResultsData {
  contentPages?: SearchResults;
  hardware?: SearchResults;
}

export interface InPageData {
  initData: {
    collection: string;
    resultsPageUrl: string;
  };
  query: string;
  selectedSuggestion?: SuggestionItem;
  suggestions: Suggestions;
}

export const defaultState: SearchState = {
  query: '',
  resultsComponentFound: false,
  headerExpanded: false,
  eventData: {
    lastUsedComponent: '',
    queryUsed: undefined,
    suggestionUsed: undefined,
    searchOriginatingPageId: undefined,
  },
  header: {
    suggestions: { locale: '', hits: [], asYouType: [] } as Suggestions,
    topResults: { hits: [] } as SearchResults,
    selectedCollection: '',
    resultsPageUrl: '',
  },
  resultsPage: {
    searchResults: {
      contentPages: {} as SearchResults,
      hardware: { hits: [] } as SearchResults,
    },
    initData: {
      collections: [],
      tags: [],
      page: 0,
    },
    collections: {
      title: '',
      facets: [],
    },
    facetGroups: [],
    activeCollection: '',
    loading: true,
  },
  inPage: {
    initData: {
      collection: '',
      resultsPageUrl: '',
    },
    query: '',
    selectedSuggestion: undefined,
    suggestions: {
      locale: '',
      hits: [],
      asYouType: [],
    },
  },
};
