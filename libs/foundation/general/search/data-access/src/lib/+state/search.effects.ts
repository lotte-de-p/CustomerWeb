/* eslint-disable rxjs/no-internal */
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as fromActions from './search.actions';
import { SearchApiServiceProvider } from '../services/search-api-service.provider';
import { ElasticSearchServiceInterface, Type } from '../services/elastic-search-service.interface';
import { Store } from '@ngrx/store';
import { SearchState } from './search.state';
import {
  featureState,
  selectActiveCollection,
  selectCollections,
  selectFacetGroups,
  selectInitData,
  selectInPageData,
  selectInPageInitData,
  selectQuery,
  selectSearchData,
} from './search.selectors';
import { UrlService } from '@telenet/ng-lib-page';
import { forkJoin, of } from 'rxjs';
import { AnalyticsService } from '../services/analytics.service';
import { ActionInitiator } from '../types/action-initiator';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { UnifiedSearchEvents } from '../types/analytics-eventinfo';

@Injectable({
  providedIn: 'root',
})
export class SearchEffects {
  private readonly elasticSearchService: ElasticSearchServiceInterface;
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store<SearchState>);
  private readonly urlService: UrlService = inject(UrlService);
  private readonly analyticsService: AnalyticsService = inject(AnalyticsService);

  constructor(private readonly serviceProvider: SearchApiServiceProvider) {
    this.elasticSearchService = this.serviceProvider.getService();
  }

  setQuery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setQueryAction),
      map((action) => fromActions.setQuerySuccessAction({ query: action.query }))
    )
  );

  setHeaderExpanded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setHeaderExpandedAction),
      map((action) => fromActions.setHeaderExpandedSuccessAction({ expanded: action.expanded }))
    )
  );

  setActiveCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setActiveCollectionAction),
      map((action) => fromActions.setActiveCollectionSuccessAction({ collection: action.collection }))
    )
  );

  setPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setPageAction),
      map((action) => fromActions.setPageSuccessAction({ page: action.page }))
    )
  );

  initiateContentPagesSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getContentPagesAction),
      withLatestFrom(this.store.select(selectQuery)),
      switchMap(([, query]) => this.elasticSearchService.search(query, Type.page)),
      map((searchResults) => fromActions.getContentPagesSuccessAction({ searchResults }))
    )
  );

  initiateHardwareSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getHardwareAction),
      withLatestFrom(this.store.select(selectQuery)),
      switchMap(([, query]) => this.elasticSearchService.search(query, Type.hardware)),
      map((searchResults) => fromActions.getHardwareSuccessAction({ searchResults }))
    )
  );

  getSuggestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSuggestionsAction),
      withLatestFrom(this.store.select(selectQuery)),
      switchMap(([action, query]) =>
        this.elasticSearchService
          .getSuggestions(action.query ? action.query : query, action.includeHardwareResults)
          .pipe(
            map((suggestions) => ({
              suggestions,
              suggestionsFieldName: action.suggestionsFieldName,
            }))
          )
      ),
      map((result) => fromActions.getSuggestionsSuccessAction(result))
    )
  );

  getSuggestionsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSuggestionsSuccessAction),
      map(({ suggestions, suggestionsFieldName }) =>
        fromActions.selectSuggestionItemAction({ selected: suggestions[suggestionsFieldName][0], byUserAction: false })
      )
    )
  );

  selectSuggestionItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.selectSuggestionItemAction),
      switchMap((args) => (args.selected ? this.elasticSearchService.getTopResults(args.selected.text) : of({}))),
      map((results) => fromActions.getTopResultsSuccessAction({ results }))
    )
  );

  selectFacet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.selectFacetAction),
      withLatestFrom(this.store.select(selectFacetGroups), (action, facetGroups) => ({ action, facetGroups })),
      map(({ action, facetGroups }) => {
        return {
          facetGroups: facetGroups.map((facetsGroup, i) => ({
            ...facetsGroup,
            facets: facetsGroup.facets.map((facet, j) =>
              i === action.groupIndex && j === action.facetIndex ? { ...facet, selected: !facet.selected } : facet
            ),
          })),
          includeHardwareResults: action.includeHardwareResults,
        };
      }),
      map(({ facetGroups, includeHardwareResults }) =>
        fromActions.selectFacetSuccessAction({ facetGroups, includeHardwareResults })
      )
    )
  );

  updateUrlAfterFacetSelection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.selectFacetSuccessAction),
        tap((action) => {
          const facetString = action.facetGroups
            .filter((facetGroup) => facetGroup.facets.find((facet) => facet.selected))
            .map((facetGroup) => {
              const facets = facetGroup.facets
                .filter((f) => f.selected)
                .map((f) => f.id)
                .join(',');
              return `${facetGroup.title}:${facets}`;
            })
            .join(';');
          if (facetString) {
            this.urlService.replaceURLParameters([{ key: 'facets', value: facetString }]);
          } else {
            this.urlService.removeURLParameters(['facets']);
          }
        })
      ),
    { dispatch: false }
  );

  updateFacetsAfterFacetSelection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.selectFacetSuccessAction),
      withLatestFrom(this.store.select(selectSearchData)),
      switchMap(([action, searchData]) =>
        this.elasticSearchService.getFacets(
          searchData.query,
          searchData.collection,
          searchData.tags,
          action.includeHardwareResults,
          action.facetGroups
        )
      ),
      map((facetGroups) => fromActions.updateFacetsSuccessAction({ facetGroups }))
    )
  );

  clearFacets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.clearFacetsAction),
      withLatestFrom(this.store.select(selectFacetGroups), (action, facetsGroups) => ({ action, facetsGroups })),
      map(({ action, facetsGroups }) => {
        return {
          facetGroups: facetsGroups.map((facetsGroup) => ({
            ...facetsGroup,
            facets: facetsGroup.facets.map((facet) => ({ ...facet, selected: false })),
          })),
          includeHardwareResults: action.includeHardwareResults,
        };
      }),
      map(({ facetGroups, includeHardwareResults }) =>
        fromActions.selectFacetSuccessAction({ facetGroups, includeHardwareResults })
      )
    )
  );

  updateResultsAfterFacetSelection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.selectFacetSuccessAction),
        withLatestFrom(this.store.select(selectSearchData)),
        tap(([action, data]) =>
          this.store.dispatch(
            fromActions.updateSearchResultsAction({
              query: data.query,
              includeHardwareResults: action.includeHardwareResults,
              collection: data.collection,
              facets: action.facetGroups,
              initiator: ActionInitiator.FACET_SELECT,
            })
          )
        )
      ),
    { dispatch: false }
  );

  initiateFacets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getFacetsAction),
      withLatestFrom(
        this.store.select(selectQuery),
        this.store.select(selectActiveCollection),
        (action, query, activeCollection) => ({ action, query, activeCollection })
      ),
      mergeMap(({ action, query, activeCollection }) =>
        forkJoin({
          facetGroups: this.elasticSearchService.getFacets(
            query,
            activeCollection ? activeCollection : action.collection,
            action.tags,
            action.includeHardwareResults,
            this.urlService.getRequestParameters()['facets']
              ? decodeURIComponent(this.urlService.getRequestParameters()['facets'])
                  .split(';')
                  .map((group) => ({
                    title: group.split(':')[0],
                    facets: group
                      .split(':')[1]
                      .split(',')
                      .map((facet) => ({ id: facet, label: facet, selected: true })),
                  }))
              : undefined
          ),
          initiator: of(action.initiator),
          includeHardwareResults: of(action.includeHardwareResults),
        })
      ),
      map(({ facetGroups, initiator, includeHardwareResults }) =>
        fromActions.getFacetsSuccessAction({ facetGroups, includeHardwareResults, initiator })
      )
    )
  );

  initFacetSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.getFacetsSuccessAction),
        withLatestFrom(this.store.select(selectSearchData)),
        tap(([action, data]) =>
          this.store.dispatch(
            fromActions.updateSearchResultsAction({
              query: data.query,
              includeHardwareResults: action.includeHardwareResults,
              collection: data.collection,
              facets: action.facetGroups,
              initiator: action.initiator,
              page: data.page === 0 ? undefined : data.page,
            })
          )
        )
      ),
    { dispatch: false }
  );

  initiateCollectionsAndTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getCollectionsAndTagsAction),
      map((args) => ({
        facetGroup: {
          title: 'ng.search-results-page.lbl.searchon',
          facets: args.collections.map((collection, index) => ({
            id: collection.value,
            label: collection.text,
            selected: index === 0,
          })),
        },
      })),
      map(({ facetGroup }) => fromActions.getCollectionsAndTagsSuccessAction({ collections: facetGroup }))
    )
  );

  selectCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.selectCollectionAction),
      withLatestFrom(this.store.select(selectCollections), (action, collections) => ({ action, collections })),
      map(({ action, collections }) => {
        return {
          collections: {
            ...collections,
            facets: collections?.facets.map((facet, i) => ({ ...facet, selected: i === action.collectionIndex })),
          },
          includeHardwareResults: action.includeHardwareResults,
        };
      }),
      map(({ collections, includeHardwareResults }) =>
        fromActions.selectCollectionSuccessAction({ collections, includeHardwareResults })
      )
    )
  );

  updateUrlAfterCollectionSelection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.selectCollectionSuccessAction),
        tap((action) => {
          this.urlService.removeURLParameters(['facets']);
          this.urlService.replaceURLParameters([
            { key: 'collection', value: action.collections.facets.find((f) => f.selected)?.id ?? '' },
          ]);
        })
      ),
    { dispatch: false }
  );

  fetchFacetsAfterCollectionSelection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.selectCollectionSuccessAction),
      withLatestFrom(this.store.select(selectInitData)),
      map(([action, data]) =>
        fromActions.getFacetsAction({
          tags: data.tags,
          collection: action.collections.facets.find((facet) => facet.selected)?.id ?? '',
          includeHardwareResults: action.includeHardwareResults,
          initiator: ActionInitiator.FACET_SELECT,
        })
      )
    )
  );

  afterResultsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.updateSearchResultsSuccessAction),
        withLatestFrom(this.store.select(featureState)),
        tap(([action, state]) => {
          if (action.initiator === ActionInitiator.INITIAL_SEARCH) {
            this.analyticsService.sendSearchEvent(state, {
              event: UnifiedSearchEvents.SEARCH,
              strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE,
              sendOnSiteSearchResults: true,
            });
          } else if (action.initiator === ActionInitiator.FACET_SELECT) {
            this.analyticsService.sendFilterEvent(state);
          }
        })
      ),
    { dispatch: false }
  );

  updateResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateSearchResultsAction),
      mergeMap((action) =>
        forkJoin({
          pages: this.elasticSearchService.search(
            action.query,
            Type.page,
            action.collection,
            action.facets,
            action.page ? { page: action.page, size: this.getPageSize(Type.page, 1) } : undefined
          ),
          hardware: action.includeHardwareResults
            ? this.elasticSearchService.search(action.query, Type.hardware, action.collection, action.facets)
            : of({}),
          initiator: of(action.initiator),
        })
      ),
      map((mergedData) =>
        fromActions.updateSearchResultsSuccessAction({
          contentResults: mergedData.pages,
          hardwareResults: mergedData.hardware,
          initiator: mergedData.initiator,
        })
      )
    )
  );

  getSearchResultPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSearchResultPageAction),
      withLatestFrom(this.store.select(selectSearchData)),
      mergeMap(([action, data]) =>
        forkJoin({
          pages: this.elasticSearchService.search(
            data.query,
            Type.page,
            data.collection,
            data.facets,
            action.resultType === Type.page
              ? {
                  page: action.page - 1,
                  size: this.getPageSize(Type.page, data.totalHardware),
                }
              : undefined
          ),
          hardware: this.elasticSearchService.search(
            data.query,
            Type.hardware,
            data.collection,
            data.facets,
            action.resultType === Type.hardware
              ? {
                  page: action.page - 1,
                  size: this.getPageSize(Type.hardware, data.totalHardware),
                }
              : undefined
          ),
        })
      ),
      map((results) =>
        fromActions.updateSearchResultsSuccessAction({
          contentResults: results.pages,
          hardwareResults: results.hardware,
        })
      )
    )
  );

  updateUrlAfterSearchResultsUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.updateSearchResultsSuccessAction),
        tap((action) => {
          const contentPage = action.contentResults.page?.current ?? 0;
          const hardwarePage = action.hardwareResults.page?.current ?? 0;
          const page = contentPage > hardwarePage ? contentPage : hardwarePage;
          this.urlService.replaceURLParameters([{ key: 'page', value: `${page + 1}` }]);
        })
      ),
    { dispatch: false }
  );

  goToResultFromResultsPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.goToResultFromResultsPageAction),
      withLatestFrom(this.store.select(featureState)),
      tap(([action, state]) => {
        this.analyticsService.sendSearchEvent(state, {
          event: UnifiedSearchEvents.RESULT_CLICK,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          sendOnSiteSearchFilter: true,
          sendOnSiteSearchResults: true,
          searchResult: action.searchResultItem,
        });
      }),
      map(([action]) =>
        fromActions.navigateAction({
          url: action.url,
        })
      )
    )
  );

  goToResultDirectly$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.goToPageFromHeaderAction),
      withLatestFrom(this.store.select(featureState)),
      tap(([action, state]) => {
        this.analyticsService.sendSearchEvent(state, {
          event: UnifiedSearchEvents.SEARCH,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          sendOnSiteSearchResults: false,
        });
        this.analyticsService.sendSearchEvent(state, {
          event: UnifiedSearchEvents.RESULT_CLICK,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          searchResult: action.searchResultItem,
          sendOnSiteSearchResults: false,
        });
      }),
      map(([action]) =>
        fromActions.navigateAction({
          url: action.url,
        })
      )
    )
  );

  goToResultsPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.goToResultsPageAction),
      withLatestFrom(this.store.select(featureState)),
      map(([action]) =>
        fromActions.navigateAction({
          url: action.url,
        })
      )
    )
  );

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.navigateAction),
        tap((action) => this.urlService.redirectTo(action.url))
      ),
    { dispatch: false }
  );

  setQueryForInPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setInPageQueryAction),
      map((action) =>
        fromActions.setInPageQuerySuccessAction({
          query: action.query,
          includeHardwareResults: action.includeHardwareResults,
        })
      )
    )
  );

  updateSuggestionAfterSetQueryForInPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setInPageQuerySuccessAction),
      withLatestFrom(this.store.select(selectInPageInitData)),
      mergeMap(([action, initData]) =>
        this.elasticSearchService.getSuggestions(action.query, action.includeHardwareResults, initData.collection)
      ),
      map((suggestions) => fromActions.updateInPageSuggestionSuccessAction({ suggestions }))
    )
  );

  selectSuggestionInPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.selectSuggestionInPageAction),
        withLatestFrom(this.store.select(selectInPageData)),
        tap(([action]) => {
          this.urlService.redirectTo(action.url);
        })
      ),
    { dispatch: false }
  );

  navigateToInPageResults$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.navigateToInPageResultsAction),
        withLatestFrom(this.store.select(selectInPageData)),
        tap(([action, inPageData]) => {
          const url = this.buildInpageResultsUrl(
            this.urlService.getOrigin(),
            inPageData.initData.resultsPageUrl,
            inPageData.initData.collection,
            action.query
          );
          this.urlService.redirectTo(url);
        })
      ),
    { dispatch: false }
  );

  setResultsComponentFound$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setResultsComponentFoundAction),
      map((action) => fromActions.setResultsComponentFoundSuccessAction({ found: action.found }))
    )
  );

  private buildInpageResultsUrl(origin: string, resultsPageUrl: string, collection: string, query: string) {
    const split = resultsPageUrl.split('?');
    const path = split[0];
    const baseUrl: string = path.startsWith('http') ? path : `${origin}${path}`;
    const existingQueryParams = split[1] ?? '';
    const urlSearchParams = new URLSearchParams(existingQueryParams);
    urlSearchParams.set('q', query);
    urlSearchParams.set('collection', collection);
    const s = urlSearchParams.toString();
    return `${baseUrl}?${s.replace(/\+/g, '%20')}`;
  }

  private getPageSize(resultType: Type, totalHardware: number) {
    if (resultType === Type.hardware) {
      return 9;
    }
    return totalHardware === 0 ? 10 : 5;
  }
}
