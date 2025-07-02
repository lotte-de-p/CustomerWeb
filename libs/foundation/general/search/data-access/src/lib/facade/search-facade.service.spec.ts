/* eslint-disable sonarjs/no-duplicate-string */

import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchFacadeService } from './search-facade.service';
import { HttpClient } from '@angular/common/http';
import { ElasticSearchService } from '../services/elastic-search.service';
import { SearchApiServiceProvider } from '../services/search-api-service.provider';
import { firstValueFrom, take, tap } from 'rxjs';
import { Suggestions } from '../entities/suggestions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService } from '@telenet/ng-lib-page';
import { MemoizedSelector, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  selectAppliedFilters,
  selectContentPagesPagination,
  selectHardwarePagesPagination,
  selectHeaderExpanded,
  selectInPageInitData,
  selectInPageQuery,
  selectInPageSuggestions,
  selectQuery,
  selectResultsComponentFound,
  selectSuggestions,
  selectTopResults,
} from '../+state/search.selectors';
import { SearchResults } from '../entities/search-results';
import { SearchState } from '../+state/search.state';
import {
  clearFacetsAction,
  clearHeaderAction,
  clearInPageAction,
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
import { SuggestionItem } from '../entities/suggestion-item';
import { Product } from '../entities/product';
import { Type } from '../services/elastic-search-service.interface';
import { ActionInitiator } from '../types/action-initiator';

describe('SearchFacadeService', () => {
  const HITS = 'hits';
  const AS_YOU_TYPE = 'asYouType';
  let facadeService: SearchFacadeService;
  let elasticSearchService: ElasticSearchService;
  let serviceProvider: SearchApiServiceProvider;
  let urlService: UrlService;
  let mockStore$: MockStore<SearchState>;
  let mockTopResultsSelector: MemoizedSelector<SearchState, SearchResults>;
  let mockSuggestionsSelector: MemoizedSelector<SearchState, Suggestions>;
  let mockQuerySelector: MemoizedSelector<SearchState, string>;
  let mockInPageQuerySelector: MemoizedSelector<SearchState, string>;
  let mockHeaderExpandedSelector: MemoizedSelector<SearchState, boolean>;
  let mockInPageInitDataSelector: MemoizedSelector<SearchState, { collection: string; resultsPageUrl: string }>;
  let mockAppliedFiltersSelector: MemoizedSelector<SearchState, string[]>;
  let mockContentPagesPaginationSelector: MemoizedSelector<
    SearchState,
    { currentPage: number; totalNumberOfPages: number }
  >;
  let mockHardwarePagesPaginationSelector: MemoizedSelector<
    SearchState,
    { currentPage: number; totalNumberOfPages: number }
  >;
  let mockInPageSuggestionsSelector: MemoizedSelector<SearchState, Suggestions>;
  let mockResultsComponentFoundSelector: MemoizedSelector<SearchState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchFacadeService,
        SearchApiServiceProvider,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        { provide: 'Window', useValue: window },
        UrlService,
        provideMockStore({}),
      ],
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    mockStore$ = TestBed.inject(Store) as MockStore<SearchState>;
    mockTopResultsSelector = mockStore$.overrideSelector(selectTopResults, { hits: [] });
    mockSuggestionsSelector = mockStore$.overrideSelector(selectSuggestions, { locale: '', hits: [], asYouType: [] });
    mockQuerySelector = mockStore$.overrideSelector(selectQuery, 'test');
    mockInPageQuerySelector = mockStore$.overrideSelector(selectInPageQuery, 'inPageQuery');
    mockHeaderExpandedSelector = mockStore$.overrideSelector(selectHeaderExpanded, false);
    mockResultsComponentFoundSelector = mockStore$.overrideSelector(selectResultsComponentFound, true);
    mockAppliedFiltersSelector = mockStore$.overrideSelector(selectAppliedFilters, []);
    mockContentPagesPaginationSelector = mockStore$.overrideSelector(selectContentPagesPagination, {
      currentPage: 1,
      totalNumberOfPages: 10,
    });
    mockHardwarePagesPaginationSelector = mockStore$.overrideSelector(selectHardwarePagesPagination, {
      currentPage: 1,
      totalNumberOfPages: 10,
    });
    mockInPageSuggestionsSelector = mockStore$.overrideSelector(selectInPageSuggestions, {
      locale: '',
      hits: [],
      asYouType: [],
    });
    mockInPageInitDataSelector = mockStore$.overrideSelector(selectInPageInitData, {
      collection: '',
      resultsPageUrl: '',
    });

    elasticSearchService = TestBed.inject(ElasticSearchService);
    serviceProvider = TestBed.inject(SearchApiServiceProvider);
    urlService = TestBed.inject(UrlService);

    jest.spyOn(serviceProvider, 'getService').mockReturnValue(elasticSearchService);
    facadeService = TestBed.inject(SearchFacadeService);
  });

  it('should be created', () => {
    expect(facadeService).toBeTruthy();
  });

  it('should return top results from store', fakeAsync(() => {
    const topResults: SearchResults = {
      hits: [
        {
          url: 'url',
          name: 'name',
          displayUrl: 'displayUrl',
          content: 'content',
          type: 'page',
          product: {} as Product,
          tags: [],
          id: 'id',
        },
      ],
    };
    mockTopResultsSelector.setResult(topResults);
    mockStore$.refreshState();
    facadeService.topResults$
      .pipe(
        take(1),
        tap((val) => expect(val).toEqual(topResults))
      )
      .subscribe();
    tick();
  }));

  it('should return suggestions from store', fakeAsync(() => {
    const suggestions: Suggestions = {
      locale: 'nl',
      hits: [
        {
          highlight: 'highlight',
          text: 'text',
        },
      ],
      asYouType: [],
    };

    mockSuggestionsSelector.setResult(suggestions);
    mockStore$.refreshState();
    facadeService.suggestions$
      .pipe(
        take(1),
        tap((val) => expect(val).toEqual(suggestions))
      )
      .subscribe();
    tick();
  }));

  it('should be able to call elasticSearchService.postClick', () => {
    jest.spyOn(elasticSearchService, 'postClick');

    facadeService.postClick('id', 'telenet', 'nl');

    expect(elasticSearchService.postClick).toHaveBeenCalledWith('id', 'telenet', 'nl');
  });

  describe('appliedFilters$', () => {
    it('should return filters from store', fakeAsync(() => {
      const expected = ['applied', 'filters'];
      mockAppliedFiltersSelector.setResult(expected);
      mockStore$.refreshState();
      facadeService.appliedFilters$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(expected))
        )
        .subscribe();
      tick();
    }));
  });

  describe('contentPagesPagination$', () => {
    it('should return content pages pagination from store', fakeAsync(() => {
      const expected = {
        currentPage: 2,
        totalNumberOfPages: 17,
      };
      mockContentPagesPaginationSelector.setResult(expected);
      mockStore$.refreshState();
      facadeService.contentPagesPagination$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(expected))
        )
        .subscribe();
      tick();
    }));
  });

  describe('hardwarePagesPagination$', () => {
    it('should return content pages pagination from store', fakeAsync(() => {
      const expected = {
        currentPage: 2,
        totalNumberOfPages: 17,
      };
      mockHardwarePagesPaginationSelector.setResult(expected);
      mockStore$.refreshState();
      facadeService.hardwarePagesPagination$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(expected))
        )
        .subscribe();
      tick();
    }));
  });

  describe('initialSearch', () => {
    it('should dispatch initiateContentPagesSearch and initiateHardwareSearch action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const includeHardwareResults = true;
      facadeService.initialSearch([{ text: 'collection', value: 'collection' }], ['tag1'], includeHardwareResults);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getFacetsAction({
          collection: 'collection',
          tags: ['tag1'],
          includeHardwareResults: includeHardwareResults,
          initiator: ActionInitiator.INITIAL_SEARCH,
        })
      );
      done();
    });

    it('should dispatch initiateContentPagesSearch action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const includeHardwareResults = false;
      facadeService.initialSearch([{ text: 'collection', value: 'collection' }], ['tag1'], includeHardwareResults);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getFacetsAction({
          collection: 'collection',
          tags: ['tag1'],
          includeHardwareResults: includeHardwareResults,
          initiator: ActionInitiator.INITIAL_SEARCH,
        })
      );
      done();
    });
  });

  describe('setQuery', () => {
    it('should dispatch setQuery action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setQuery('test');
      expect(dispatchSpy).toHaveBeenCalledWith(setQueryAction({ query: 'test' }));
      done();
    });
  });

  describe('setCollection', () => {
    it('should dispatch setQuery action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setCollection('collection1');
      expect(dispatchSpy).toHaveBeenCalledWith(setActiveCollectionAction({ collection: 'collection1' }));
      done();
    });
  });

  describe('setPage', () => {
    it('should dispatch setPage action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setPage(3);
      expect(dispatchSpy).toHaveBeenCalledWith(setPageAction({ page: 2 }));
      done();
    });
  });

  it('should be able to set a input parameters', () => {
    const searchResultsCollection = 'telenet_residential_nl';
    const searchResultsPage = 'page';
    const setInputParametersSpy = jest.spyOn(elasticSearchService, 'setInputParameters');

    facadeService.setInputParameters(searchResultsCollection, searchResultsPage, 'telenet', 'nl');

    expect(setInputParametersSpy).toHaveBeenCalledTimes(1);
  });

  describe('getSearchResultsPageUrl', () => {
    beforeEach(() => {
      jest.spyOn(urlService, 'getOrigin').mockReturnValue('https://www.telenet.be/residential/nl/');
      jest.spyOn(urlService, 'getRequestParametersAsString').mockReturnValue('');
      jest.spyOn(elasticSearchService, 'getSearchResultsCollection').mockReturnValue('telenet_residential_nl');
      jest.spyOn(elasticSearchService, 'getSearchResultsPage').mockReturnValue('results');
    });

    it('should generate the correct URL without query passed in URL', (done) => {
      mockQuerySelector.setResult('test');
      mockStore$.refreshState();

      const actual$ = facadeService.getSearchResultsPageUrl();

      actual$.subscribe((url) => {
        expect(url).toBe('https://www.telenet.be/residential/nl/results?q=test&collection=telenet_residential_nl');
        done();
      });
    });

    it('should generate the correct URL with query', (done) => {
      const query = 'sample_query';

      const actual$ = facadeService.getSearchResultsPageUrl(query);

      actual$.subscribe((url) => {
        expect(url).toBe(
          'https://www.telenet.be/residential/nl/results?q=sample_query&collection=telenet_residential_nl'
        );
        done();
      });
    });

    it('should not include the origin when result page is an url', (done) => {
      const query = 'sample_query';
      jest
        .spyOn(elasticSearchService, 'getSearchResultsPage')
        .mockReturnValue('https://www.telenet.be/residential/nl/path/to/results');

      const actual$ = facadeService.getSearchResultsPageUrl(query);

      actual$.subscribe((url) => {
        expect(url).toBe(
          'https://www.telenet.be/residential/nl/path/to/results?q=sample_query&collection=telenet_residential_nl'
        );
        done();
      });
    });

    it('should append existing query string to the results page url', (done) => {
      const query = 'sample_query';
      jest
        .spyOn(elasticSearchService, 'getSearchResultsPage')
        .mockReturnValue('https://www.telenet.be/residential/nl/path/to/results?red=light&green=light');

      const actual$ = facadeService.getSearchResultsPageUrl(query);

      actual$.subscribe((url) => {
        expect(url).toBe(
          'https://www.telenet.be/residential/nl/path/to/results?red=light&green=light&q=sample_query&collection=telenet_residential_nl'
        );
        done();
      });
    });

    it('should dispatch selectSuggestionItemAction action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const suggestion: SuggestionItem = { text: 'text', highlight: 'highlight' };
      facadeService.selectSuggestion(suggestion);
      expect(dispatchSpy).toHaveBeenCalledWith(
        selectSuggestionItemAction({ selected: suggestion, byUserAction: true })
      );
      done();
    });

    it('should dispatch getSuggestionsAction action with parameter HITS to store when includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.searchSuggestions('', HITS, true);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getSuggestionsAction({ query: '', suggestionsFieldName: HITS, includeHardwareResults: true })
      );
      done();
    });

    it('should dispatch getSuggestionsAction action with parameter HITS to store when not includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.searchSuggestions('', HITS, false);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getSuggestionsAction({ query: '', suggestionsFieldName: HITS, includeHardwareResults: false })
      );
      done();
    });

    it('should dispatch getSuggestionsAction action with parameter AS_YOU_TYPE to store when includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.searchSuggestions('', AS_YOU_TYPE, true);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getSuggestionsAction({ query: '', suggestionsFieldName: AS_YOU_TYPE, includeHardwareResults: true })
      );
      done();
    });

    it('should dispatch getSuggestionsAction action with parameter AS_YOU_TYPE to store when not includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.searchSuggestions('', AS_YOU_TYPE, false);
      expect(dispatchSpy).toHaveBeenCalledWith(
        getSuggestionsAction({ query: '', suggestionsFieldName: AS_YOU_TYPE, includeHardwareResults: false })
      );
      done();
    });

    it('should dispatch selectFacetAction action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const includeHardwareResults = true;
      facadeService.selectFacet(0, 0, includeHardwareResults);
      expect(dispatchSpy).toHaveBeenCalledWith(
        selectFacetAction({ groupIndex: 0, facetIndex: 0, includeHardwareResults: includeHardwareResults })
      );
      done();
    });

    it('should dispatch clearFacets action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const includeHardwareResults = true;
      facadeService.clearFacets(includeHardwareResults);
      expect(dispatchSpy).toHaveBeenCalledWith(clearFacetsAction({ includeHardwareResults: includeHardwareResults }));
      done();
    });

    it('should dispatch clearHeaderAction action to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.clearHeader();
      expect(dispatchSpy).toHaveBeenCalledWith(clearHeaderAction());
      done();
    });
  });

  describe('selectContentPagesPage', () => {
    it('should dispatch getSearchResultPageAction to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.selectContentPagesPage(2);
      expect(dispatchSpy).toHaveBeenCalledWith(getSearchResultPageAction({ page: 2, resultType: Type.page }));
      done();
    });
  });

  describe('selectHardwarePage', () => {
    it('should dispatch getSearchResultPageAction to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.selectHardwarePage(2);
      expect(dispatchSpy).toHaveBeenCalledWith(getSearchResultPageAction({ page: 2, resultType: Type.hardware }));
      done();
    });
  });

  describe('goToPage', () => {
    it('should dispatch goToPageFromHeaderAction to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const result = {
        url: '/content/www-telenet-touch/nl/otherpage',
        displayUrl: 'residential/nl/otherpage',
        content: '',
        type: 'page',
        product: { id: 'myid' } as Product,
        name: '',
        tags: [],
        id: 'id',
      };
      facadeService.goToResult('https://www.int.telenet.be/mypage', result);
      expect(dispatchSpy).toHaveBeenCalledWith(
        goToPageFromHeaderAction({ url: 'https://www.int.telenet.be/mypage', searchResultItem: result })
      );
      done();
    });
  });

  describe('goToResultsPage', () => {
    it('should dispatch goToPageFromHeaderAction to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.goToResultsPage('https://www.int.telenet.be/mypage');
      expect(dispatchSpy).toHaveBeenCalledWith(goToResultsPageAction({ url: 'https://www.int.telenet.be/mypage' }));
      done();
    });
  });

  describe('goToResultFromResultsPage', () => {
    it('should dispatch goToPageFromHeaderAction to store', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const result = {
        url: '/content/www-telenet-touch/nl/dummypage',
        displayUrl: 'residential/nl/dummypage',
        content: '',
        type: 'page',
        product: { id: 'myid' } as Product,
        name: '',
        tags: [],
        id: 'id',
      };
      facadeService.goToResultFromResultsPage('https://www.int.telenet.be/mypage', result);
      expect(dispatchSpy).toHaveBeenCalledWith(
        goToResultFromResultsPageAction({ url: 'https://www.int.telenet.be/mypage', searchResultItem: result })
      );
      done();
    });
  });

  describe('setActiveComponent', () => {
    it('should dispatch setActiveComponentAction', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setLastUsedComponent('myComponent');
      expect(dispatchSpy).toHaveBeenCalledWith(setLastUsedComponent({ name: 'myComponent' }));
      done();
    });
  });

  describe('initInPage', () => {
    it('should dispatch setInPageInitDataAction', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.initInPage('telenet_residential_nl', 'https://www.int.telenet.be/mypage');
      expect(dispatchSpy).toHaveBeenCalledWith(
        setInPageInitDataAction({
          collection: 'telenet_residential_nl',
          resultsPageUrl: 'https://www.int.telenet.be/mypage',
        })
      );
      done();
    });
  });

  describe('setQueryForInPage', () => {
    it('should dispatch setInPageQueryAction when includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setQueryForInPage('query', true);
      expect(dispatchSpy).toHaveBeenCalledWith(
        setInPageQueryAction({
          query: 'query',
          includeHardwareResults: true,
        })
      );
      done();
    });
  });

  describe('setQueryForInPage', () => {
    it('should dispatch setInPageQueryAction when not includeHardwareResults', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setQueryForInPage('query', false);
      expect(dispatchSpy).toHaveBeenCalledWith(
        setInPageQueryAction({
          query: 'query',
          includeHardwareResults: false,
        })
      );
      done();
    });
  });

  describe('inPageSuggestions$', () => {
    it('should return top results from store', fakeAsync(() => {
      const suggestions: Suggestions = {
        locale: 'nl',
        hits: [
          {
            text: 'text',
            highlight: 'highlight',
          },
        ],
        asYouType: [],
      };
      mockInPageSuggestionsSelector.setResult(suggestions);
      mockStore$.refreshState();
      facadeService.inPageSuggestions$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(suggestions))
        )
        .subscribe();
      tick();
    }));
  });

  describe('inPageQuery$', () => {
    it('should return query from store', fakeAsync(() => {
      const query = 'myInPageQuery';
      mockInPageQuerySelector.setResult(query);
      mockStore$.refreshState();
      facadeService.inPageQuery$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(query))
        )
        .subscribe();
      tick();
    }));
  });

  describe('headerExpanded$', () => {
    it('should return header state from store', fakeAsync(() => {
      facadeService.headerExpanded$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(false))
        )
        .subscribe();
      tick();
    }));
    it('should return header state from store', fakeAsync(() => {
      mockHeaderExpandedSelector.setResult(true);
      mockStore$.refreshState();
      facadeService.headerExpanded$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(true))
        )
        .subscribe();
      tick();
    }));
  });

  describe('searchComponentFound$', () => {
    it('should return searchComponentFound from store', fakeAsync(() => {
      mockResultsComponentFoundSelector.setResult(true);
      mockStore$.refreshState();
      facadeService.resultsComponentFound$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(true))
        )
        .subscribe();
      tick();
    }));
  });

  describe('clearInPage', () => {
    it('should dispatch clearInPageAction', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.clearInPage();
      expect(dispatchSpy).toHaveBeenCalledWith(clearInPageAction());
      done();
    });
  });

  describe('selectSuggestionInPage', () => {
    it('should dispatch selectSuggestionInPageAction', (done) => {
      const item: SuggestionItem = { text: 'text', highlight: 'highlight' };
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const url = 'https://www.telenet.be/dummy';
      facadeService.selectSuggestionInPage(item, url);
      expect(dispatchSpy).toHaveBeenCalledWith(selectSuggestionInPageAction({ item, url }));
      done();
    });
  });

  describe('navigateToInPageResults', () => {
    it('should dispatch navigateToInPageResultsAction', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.navigateToInPageResults('query');
      expect(dispatchSpy).toHaveBeenCalledWith(navigateToInPageResultsAction({ query: 'query' }));
      done();
    });
  });

  describe('setHeaderExpanded', () => {
    it('should dispatch setHeaderExpanded', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setHeaderExpanded(true);
      expect(dispatchSpy).toHaveBeenCalledWith(setHeaderExpandedAction({ expanded: true }));
      done();
    });
  });

  describe('setResultsComponentFound', () => {
    it('should dispatch setResultsComponentFound', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.setResultsComponentFound(true);
      expect(dispatchSpy).toHaveBeenCalledWith(setResultsComponentFoundAction({ found: true }));
      done();
    });
  });

  describe('selectCollection', () => {
    it('should dispatch selectCollection', (done) => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      facadeService.selectCollection(0, true);
      expect(dispatchSpy).toHaveBeenCalledWith(
        selectCollectionAction({ collectionIndex: 0, includeHardwareResults: true })
      );
      done();
    });
  });

  describe('getResultsComponentFound', () => {
    it('should call getResultsComponentFound selector', fakeAsync(() => {
      mockResultsComponentFoundSelector.setResult(true);
      mockStore$.refreshState();
      facadeService.resultsComponentFound$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(true))
        )
        .subscribe();
      facadeService.getResultsComponentFound();
      tick();
    }));
  });

  describe('redirectOrUpdateSearchResultsPage', () => {
    const url = 'https://www.int.telenet.be/residential/nl/results?q=query&collection=telenet_residential_nl';

    it('should call clearFacets and update url when found', fakeAsync(() => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      const replaceURLParametersSpy = jest.spyOn(urlService, 'replaceURLParameters');
      mockResultsComponentFoundSelector.setResult(true);
      mockStore$.refreshState();

      firstValueFrom(facadeService.redirectOrUpdateSearchResultsPage(url, true));
      tick();

      expect(dispatchSpy).toHaveBeenCalledWith(clearFacetsAction({ includeHardwareResults: true }));
      expect(replaceURLParametersSpy).toHaveBeenCalled();
    }));

    it('should call goToResultsPage when not found', fakeAsync(() => {
      const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
      mockResultsComponentFoundSelector.setResult(false);
      mockStore$.refreshState();

      firstValueFrom(facadeService.redirectOrUpdateSearchResultsPage(url, true));
      tick();

      expect(dispatchSpy).toHaveBeenCalledWith(goToResultsPageAction({ url: url }));
    }));
  });

  describe('getSearchResultsPageForInPage', () => {
    beforeEach(() => {
      jest.spyOn(urlService, 'getOrigin').mockReturnValue('https://www.telenet.be/residential/nl/');
      jest.spyOn(urlService, 'getRequestParametersAsString').mockReturnValue('');
    });

    it('should generate the correct URL', (done) => {
      mockInPageInitDataSelector.setResult({
        collection: 'telenet_residential_nl',
        resultsPageUrl: 'https://www.int.telenet.be/residential/nl/results',
      });
      mockStore$.refreshState();

      const actual$ = facadeService.getSearchResultsPageForInPage('query');

      actual$.subscribe((url) => {
        expect(url).toBe('https://www.int.telenet.be/residential/nl/results?q=query&collection=telenet_residential_nl');
        done();
      });
    });

    it('should generate the correct URL with baseurl', (done) => {
      mockInPageInitDataSelector.setResult({
        collection: 'telenet_residential_nl',
        resultsPageUrl: 'results',
      });
      mockStore$.refreshState();

      const actual$ = facadeService.getSearchResultsPageForInPage('query');

      actual$.subscribe((url) => {
        expect(url).toBe('https://www.telenet.be/residential/nl/results?q=query&collection=telenet_residential_nl');
        done();
      });
    });
  });
});
