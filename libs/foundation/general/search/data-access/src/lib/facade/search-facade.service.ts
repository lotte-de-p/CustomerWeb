import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { SearchApiServiceProvider } from '../services/search-api-service.provider';
import { ElasticSearchServiceInterface, Type } from '../services/elastic-search-service.interface';
import { UrlService } from '@telenet/ng-lib-page';
import { Store } from '@ngrx/store';
import {
  selectAppliedFilters,
  selectCollections,
  selectContentPages,
  selectContentPagesPagination,
  selectFacetGroups,
  selectHardware,
  selectHardwarePagesPagination,
  selectHeaderExpanded,
  selectInPageInitData,
  selectInPageQuery,
  selectInPageSuggestions,
  selectNumberOfSearchResults,
  selectQuery,
  selectResultsComponentFound,
  selectResultsLoading,
  selectSuggestions,
  selectTopResults,
} from '../+state/search.selectors';
import {
  clearFacetsAction,
  clearHeaderAction,
  clearInPageAction,
  getCollectionsAndTagsAction,
  getFacetsAction,
  getSearchResultPageAction,
  getSuggestionsAction,
  goToPageFromHeaderAction,
  goToResultFromResultsPageAction,
  goToResultsPageAction,
  navigateToInPageResultsAction,
  selectCollectionAction,
  selectFacetAction,
  selectSuggestionInPageAction,
  selectSuggestionItemAction,
  setActiveCollectionAction,
  setHeaderExpandedAction,
  setInPageInitDataAction,
  setInPageQueryAction,
  setLastUsedComponent,
  setPageAction,
  setQueryAction,
  setResultsComponentFoundAction,
} from '../+state/search.actions';
import { SearchState } from '../+state/search.state';
import { SuggestionItem } from '../entities/suggestion-item';
import { Collection } from '../entities/facets';
import { ActionInitiator } from '../types/action-initiator';
import { SearchResultItem } from '../entities/search-result-item';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {
  readonly store: Store<SearchState> = inject(Store<SearchState>);

  readonly #elasticSearchService: ElasticSearchServiceInterface;

  public readonly query$ = this.store.select(selectQuery);
  public readonly suggestions$ = this.store.select(selectSuggestions);
  public readonly headerExpanded$ = this.store.select(selectHeaderExpanded);
  public readonly topResults$ = this.store.select(selectTopResults);
  public readonly contentPages$ = this.store.select(selectContentPages);
  public readonly hardware$ = this.store.select(selectHardware);
  public readonly resultsLoading$ = this.store.select(selectResultsLoading);
  public readonly facetsGroups$ = this.store.select(selectFacetGroups);
  public readonly collections$ = this.store.select(selectCollections);
  public readonly appliedFilters$ = this.store.select(selectAppliedFilters);
  public readonly numberOfSearchResults$ = this.store.select(selectNumberOfSearchResults);
  public readonly contentPagesPagination$ = this.store.select(selectContentPagesPagination);
  public readonly hardwarePagesPagination$ = this.store.select(selectHardwarePagesPagination);
  public readonly inPageSuggestions$ = this.store.select(selectInPageSuggestions);
  public readonly inPageQuery$ = this.store.select(selectInPageQuery);
  public readonly resultsComponentFound$ = this.store.select(selectResultsComponentFound);

  constructor(
    private readonly serviceProvider: SearchApiServiceProvider,
    private readonly urlService: UrlService
  ) {
    this.#elasticSearchService = this.serviceProvider.getService();
  }

  setResultsComponentFound(found: boolean) {
    this.store.dispatch(setResultsComponentFoundAction({ found: found }));
  }

  setQuery(query: string) {
    this.store.dispatch(setQueryAction({ query: query }));
  }

  setCollection(collection: string) {
    this.store.dispatch(setActiveCollectionAction({ collection: collection }));
  }

  initialSearch(collections: Collection[], tags: string[], includeHardwareResults: boolean) {
    this.store.dispatch(getCollectionsAndTagsAction({ collections, tags }));
    this.store.dispatch(
      getFacetsAction({
        collection: collections[0].value,
        tags,
        includeHardwareResults,
        initiator: ActionInitiator.INITIAL_SEARCH,
      })
    );
  }

  searchSuggestions(query: string, suggestionsFieldName: string, includeHardwareResults: boolean) {
    this.store.dispatch(getSuggestionsAction({ query, suggestionsFieldName, includeHardwareResults }));
  }

  selectSuggestion(selected: SuggestionItem) {
    this.store.dispatch(selectSuggestionItemAction({ selected: selected, byUserAction: true }));
  }

  clearHeader() {
    this.store.dispatch(clearHeaderAction());
  }

  selectFacet(groupIndex: number, facetIndex: number, includeHardwareResults: boolean) {
    this.store.dispatch(selectFacetAction({ groupIndex, facetIndex, includeHardwareResults }));
  }
  clearFacets(includeHardwareResults: boolean) {
    this.store.dispatch(clearFacetsAction({ includeHardwareResults }));
  }

  selectCollection(collectionIndex: number, includeHardwareResults: boolean) {
    this.store.dispatch(selectCollectionAction({ collectionIndex, includeHardwareResults }));
  }

  selectContentPagesPage(page: number) {
    this.store.dispatch(getSearchResultPageAction({ page, resultType: Type.page }));
  }

  selectHardwarePage(page: number) {
    this.store.dispatch(getSearchResultPageAction({ page, resultType: Type.hardware }));
  }

  setInputParameters(searchResultsCollection: string, searchResultsPage: string, brand: string, language: string) {
    this.#elasticSearchService.setInputParameters(searchResultsCollection, searchResultsPage, brand, language);
  }

  getSearchResultsCollection = () => this.#elasticSearchService.getSearchResultsCollection();
  getSearchResultsPage = () => this.#elasticSearchService.getSearchResultsPage();

  getSearchResultsPageUrl(query?: string): Observable<string> {
    if (query) {
      return of(this.getPathWithQueryParams(this.getSearchResultsPage(), this.getSearchResultsCollection(), query));
    }
    return this.store
      .select(selectQuery)
      .pipe(
        map((query) =>
          this.getPathWithQueryParams(this.getSearchResultsPage(), this.getSearchResultsCollection(), query)
        )
      );
  }

  postClick(searchResultId: string, brand: string, locale: string) {
    this.#elasticSearchService.postClick(searchResultId, brand, locale);
  }

  private getPathWithQueryParams(resultsPageUrl: string, collection: string, query: string) {
    const split = resultsPageUrl.split('?');
    const path = split[0];
    const baseUrl: string = path.startsWith('http') ? path : `${this.urlService.getOrigin()}${path}`;
    const existingQueryParams = split[1] ?? '';
    const urlSearchParams = new URLSearchParams(existingQueryParams);
    urlSearchParams.set('q', query);
    urlSearchParams.set('collection', collection);

    const s = urlSearchParams.toString();
    return `${baseUrl}?${s.replaceAll('+', '%20')}`;
  }

  goToResultsPage(url: string) {
    this.store.dispatch(goToResultsPageAction({ url }));
  }

  goToResult(url: string, searchResultItem: SearchResultItem) {
    this.store.dispatch(goToPageFromHeaderAction({ url, searchResultItem }));
  }

  goToResultFromResultsPage(url: string, searchResultItem: SearchResultItem) {
    this.store.dispatch(goToResultFromResultsPageAction({ url, searchResultItem }));
  }

  setLastUsedComponent(componentName: string) {
    this.store.dispatch(setLastUsedComponent({ name: componentName }));
  }

  initInPage(collection: string, resultsPageUrl: string) {
    this.store.dispatch(setInPageInitDataAction({ collection, resultsPageUrl }));
  }

  setQueryForInPage(query: string, includeHardwareResults: boolean) {
    this.store.dispatch(setInPageQueryAction({ query, includeHardwareResults }));
  }

  clearInPage() {
    this.store.dispatch(clearInPageAction());
  }

  selectSuggestionInPage(item: SuggestionItem, urlToNavigateTo: string) {
    this.store.dispatch(selectSuggestionInPageAction({ item, url: urlToNavigateTo }));
  }

  getSearchResultsPageForInPage(query: string) {
    return this.store
      .select(selectInPageInitData)
      .pipe(map((data) => this.getPathWithQueryParams(data.resultsPageUrl, data.collection, query)));
  }

  navigateToInPageResults(query: string) {
    this.store.dispatch(navigateToInPageResultsAction({ query }));
  }

  setPage(page: number) {
    this.store.dispatch(setPageAction({ page: page - 1 }));
  }

  getResultsComponentFound() {
    return this.resultsComponentFound$;
  }

  redirectOrUpdateSearchResultsPage(url: string, includeHardwareResults: boolean) {
    return this.getResultsComponentFound().pipe(
      first(),
      tap((found) => {
        if (found) {
          this.clearFacets(includeHardwareResults);
          const params = this.urlService.getParameters(url);
          for (const [key, value] of params) {
            this.urlService.replaceURLParameters([{ key, value }]);
          }
        } else if (url) {
          this.goToResultsPage(url);
        }
      })
    );
  }

  setHeaderExpanded(headerExpanded: boolean) {
    this.store.dispatch(setHeaderExpandedAction({ expanded: headerExpanded }));
  }

  getHeaderExpanded() {
    return this.headerExpanded$;
  }

  getBrand() {
    return this.#elasticSearchService.getBrand();
  }

  getLanguage() {
    return this.#elasticSearchService.getLanguage();
  }
}
