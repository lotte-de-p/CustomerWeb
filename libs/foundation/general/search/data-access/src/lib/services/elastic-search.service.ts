import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Suggestions } from '../entities/suggestions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ElasticSearchServiceInterface, Pagination, Type } from './elastic-search-service.interface';
import { SearchResults } from '../entities/search-results';
import { FacetGroup, Tag } from '../entities/facets';

export class ElasticSearchService implements ElasticSearchServiceInterface {
  private readonly options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  #searchResultsCollection = '';
  #searchResultsPage = '';
  #brand = '';
  #language = '';

  constructor(
    private readonly http: HttpClient,
    readonly searchApiUrl: string = 'url'
  ) {}

  setInputParameters(
    searchResultsCollection: string,
    searchResultsPage: string,
    brand: string,
    language: string
  ): void {
    this.#searchResultsCollection = searchResultsCollection ? searchResultsCollection : this.#searchResultsCollection;
    this.#searchResultsPage = searchResultsPage ? searchResultsPage : this.#searchResultsPage;
    this.#brand = brand;
    this.#language = language;
  }

  search(query: string, type: Type, collection?: string, facets?: FacetGroup[], pagination?: Pagination) {
    const document = this.buildSearchDocument(
      query,
      [type],
      pagination ? pagination.size : this.getPageSize(type),
      collection,
      facets,
      pagination ? pagination.page : 0
    );
    return this.http.post(`${this.searchApiUrl}/search`, document, this.options).pipe(
      catchError((error: unknown) => {
        return of(error);
      }),
      map((result) => result as SearchResults)
    );
  }

  postClick(searchResultId: string, brand: string, locale: string) {
    this.http.post(`${this.searchApiUrl}/clicks/${searchResultId}/${brand}/${locale}`, {}, this.options).subscribe();
    sessionStorage.removeItem('searchResultId');
  }

  getSuggestions(searchQuery: string, includeHardwareResults: boolean, collection?: string): Observable<Suggestions> {
    const document = this.buildSuggestionsDocument(searchQuery, includeHardwareResults, collection);
    return this.http.post(`${this.searchApiUrl}/suggestions`, document, this.options).pipe(
      catchError((error: unknown) => {
        return of(error);
      }),
      map((result) => result as Suggestions)
    );
  }

  getTopResults(suggestion: string): Observable<SearchResults> {
    const document = this.buildSearchDocument(suggestion, [Type.page, Type.hardware], 5);
    return this.http.post(`${this.searchApiUrl}/search`, document, this.options).pipe(
      catchError((error: unknown) => {
        return of(error);
      }),
      map((result) => result as SearchResults)
    );
  }

  getFacets(
    query: string,
    collection: string,
    tags: string[],
    includeHardwareResults: boolean,
    facets?: FacetGroup[]
  ): Observable<FacetGroup[]> {
    const req = this.buildFacetsDocument(query, tags, collection, includeHardwareResults, facets);
    const facetNames = tags.map((t) => `tags.${t}`);
    return this.http.post(`${this.searchApiUrl}/facets`, req, this.options).pipe(
      catchError((error: unknown) => {
        return of(error);
      }),
      map((result) => result as Tag[]),
      map((tags) =>
        tags
          .filter((tag) => tag.items.length > 0)
          .map(
            (tag) =>
              ({
                title: tag.name,
                facets: tag.items.map((item) => ({
                  id: item.value,
                  label: `${tag.id}.${item.value.replace('/', '.')}`,
                  count: item.count,
                  selected: this.isFacetSelected(tag.name, item.value, facets),
                })),
              }) as FacetGroup
          )
          .sort((a, b) => {
            const indexA = facetNames.indexOf(a.title) !== -1 ? facetNames.indexOf(a.title) : Number.MAX_VALUE;
            const indexB = facetNames.indexOf(b.title) !== -1 ? facetNames.indexOf(b.title) : Number.MAX_VALUE;
            return indexA < indexB ? -1 : 1;
          })
      )
    );
  }

  private isFacetSelected(tagName: string, tagItemName: string, facets?: FacetGroup[]) {
    return (
      facets?.find((group) => group.title === tagName)?.facets.find((facet) => facet.id === tagItemName)?.selected ??
      false
    );
  }

  private buildFacetsDocument(
    query: string,
    tags: string[],
    collection: string,
    includeHardwareResults: boolean,
    facets?: FacetGroup[]
  ) {
    return {
      brand: this.#brand,
      query: query,
      facets: tags.map((tag) => ({ value: 'tags.' + tag })),
      filters: this.getFilters(includeHardwareResults ? [Type.page, Type.hardware] : [Type.page], collection, facets),
      locale: this.#language,
      page: 0,
      size: 100,
    };
  }

  getSearchResultsCollection = () => this.#searchResultsCollection;
  getSearchResultsPage = () => this.#searchResultsPage;
  getLanguage = () => this.#language;
  getBrand = () => this.#brand;

  private buildSuggestionsDocument(query: string, includeHardwareResults?: boolean, collection?: string) {
    return {
      locale: this.#language,
      brand: this.#brand,
      query: query,
      blacklist: true,
      size: 5,
      page: 0,
      filters: this.getFilters(includeHardwareResults ? [Type.page, Type.hardware] : [Type.page], collection),
    };
  }

  private buildSearchDocument(
    query: string,
    types: Type[],
    size = 5,
    collection?: string,
    facets?: FacetGroup[],
    page = 0
  ) {
    return {
      query: query,
      searchFields: ['name', 'content', 'tags'],
      filters: this.getFilters(types, collection, facets),
      locale: this.#language,
      brand: this.#brand,
      size: size,
      resultFields: [
        {
          value: 'id',
        },
        {
          value: 'url',
        },
        {
          value: 'name',
        },
        {
          value: 'content',
          snippetSize: 200,
        },
        {
          value: 'tags',
        },
        {
          value: 'type',
        },
      ],
      highlight: true,
      keymatches: true,
      page: page,
      sortByPopularity: true,
    };
  }

  private getFilters(types: Type[], collection?: string, facets?: FacetGroup[]) {
    const filters = facets
      ? facets
          .map((group) => ({
            name: group.title,
            values: group.facets.filter((facet) => facet.selected).map((facet) => facet.id),
          }))
          .filter((filter) => filter.values.length !== 0)
      : [];
    return {
      logicalFiltersOperator: 'AND',
      logicalFilters: [
        {
          queryValueFilters: [
            ...filters,
            {
              name: 'type',
              values: types,
            },
            { name: 'collection.id', values: [collection ? collection : this.#searchResultsCollection] },
          ],
          queryRangeFilters: [],
        },
      ],
    };
  }

  private getPageSize(type: Type) {
    return type === Type.page ? 10 : 9;
  }
}
