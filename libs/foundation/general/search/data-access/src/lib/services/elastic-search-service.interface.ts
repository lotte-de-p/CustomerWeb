import { Observable } from 'rxjs';
import { Suggestions } from '../entities/suggestions';
import { SearchResults } from '../entities/search-results';
import { FacetGroup } from '../entities/facets';

export enum Type {
  hardware = 'product',
  page = 'page',
}

export interface Pagination {
  page: number;
  size: number;
}

export interface ElasticSearchServiceInterface {
  search(
    query: string,
    type: Type,
    collection?: string,
    facets?: FacetGroup[],
    pagination?: Pagination
  ): Observable<SearchResults>;

  setInputParameters(searchResultsCollection: string, searchResultsPage: string, brand: string, language: string): void;

  postClick(searchResultId: string, brand: string, locale: string): void;

  getSuggestions(searchQuery: string, includeHardwareResults: boolean, collection?: string): Observable<Suggestions>;

  getTopResults(suggestion: string): Observable<SearchResults>;

  getSearchResultsCollection(): string;

  getSearchResultsPage(): string;

  getFacets(
    query: string,
    collection: string,
    tags: string[],
    includeHardwareResults: boolean,
    facets?: FacetGroup[]
  ): Observable<FacetGroup[]>;

  getBrand(): string;

  getLanguage(): string;
}
