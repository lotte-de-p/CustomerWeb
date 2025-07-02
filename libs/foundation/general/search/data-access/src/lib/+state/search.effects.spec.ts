import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, MemoizedSelector, Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as searchActions from './search.actions';
import { updateSearchResultsAction } from './search.actions';
import { SearchEffects } from './search.effects';
import { ElasticSearchService } from '../services/elastic-search.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchApiServiceProvider } from '../services/search-api-service.provider';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  featureState,
  selectActiveCollection,
  selectCollections,
  selectFacetGroups,
  selectInitData,
  selectQuery,
  selectSearchData,
} from '../+state/search.selectors';
import { SearchState } from '../+state/search.state';
import { EffectsModule } from '@ngrx/effects';
import { Type } from '../services/elastic-search-service.interface';
import { Collection, FacetGroup } from '../entities/facets';
import { SearchResults } from '../entities/search-results';
import { UrlService } from '@telenet/ng-lib-page';
import { AnalyticsService } from '../services/analytics.service';
import { Product } from '../entities/product';
import { ActionInitiator } from '../types/action-initiator';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { UnifiedSearchEvents } from '../types/analytics-eventinfo';

describe('Search Effects', () => {
  const HITS = 'hits';

  let effects: SearchEffects;
  let actions$: Observable<Action>;
  let elasticService: ElasticSearchService;
  let analyticsService: AnalyticsService;
  let urlService: UrlService;
  let serviceProvider: SearchApiServiceProvider;
  let mockStore$: MockStore<SearchState>;
  let mockQuerySelector: MemoizedSelector<SearchState, string>;
  let mockFacetsSelector: MemoizedSelector<SearchState, FacetGroup[]>;
  let mockCollectionsSelector: MemoizedSelector<SearchState, FacetGroup>;
  let mockActiveCollectionSelector: MemoizedSelector<SearchState, string>;
  let mockInitDataSelector: MemoizedSelector<SearchState, { tags: string[]; collections: Collection[]; page: number }>;
  let mockFeatureSelector: MemoizedSelector<SearchState, SearchState>;
  let mockSearchDataSelector: MemoizedSelector<
    SearchState,
    {
      query: string;
      collection: string;
      facets: FacetGroup[];
      tags: string[];
      totalContentPages: number;
      totalHardware: number;
      page: number;
    }
  >;

  const COLLECTION_1 = 'Collection 1';
  const COLLECTION_2 = 'Collection 2';

  const mockHeaderData = {
    suggestions: {
      locale: 'nl',
      hits: [
        {
          text: 'Suggestion 1',
          highlight: 'Suggestion 1 - highlight',
        },
      ],
      asYouType: [],
    },
    topResults: {
      hits: [
        {
          url: '/content/www-telenet-touch/nl/mypage',
          displayUrl: 'residential/nl/mypage',
          content: '',
          type: 'page',
          product: { id: 'myid' } as Product,
          name: '',
          tags: [],
          id: 'id',
        },
        {
          url: '/content/www-telenet-touch/nl/mypage/subpage',
          displayUrl: 'residential/nl/mypage/subpage',
          content: '',
          type: 'page',
          product: { id: 'myid' } as Product,
          name: '',
          tags: [],
          id: 'id',
        },
        {
          url: '/content/www-telenet-touch/nl/producten/iphone11',
          displayUrl: 'residential/nl/producten/iphone11',
          content: '',
          type: 'product',
          product: { id: 'myid' } as Product,
          name: '',
          tags: [],
          id: 'id',
        },
      ],
      page: {
        size: 5,
        current: 1,
        total: 255,
      },
      locale: 'nl',
    },
    selectedCollection: '',
    resultsPageUrl: 'www.int.telenet.be/residential/nl/searchresults',
  };

  const productUrl = 'https://www.int.telenet.be/residential/nl/product.html';

  const initialFeatureState = {
    resultsPage: {
      activeCollection: '',
      collections: {
        title: COLLECTION_1,
        facets: [],
      },
      facetGroups: [],
      initData: {
        collections: [],
        tags: [],
        page: 0,
      },
      searchResults: {},
      loading: false,
    },
    inPage: {
      initData: {
        collection: '',
        resultsPageUrl: '',
      },
      query: '',
      suggestions: {
        locale: 'nl',
        hits: [],
        asYouType: [],
      },
    },
    query: 'query',
    headerExpanded: false,
    resultsComponentFound: false,
    eventData: {
      lastUsedComponent: '',
      queryUsed: undefined,
      suggestionUsed: undefined,
      searchOriginatingPageId: undefined,
    },
    header: mockHeaderData,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        UrlService,
        SearchApiServiceProvider,
        AnalyticsService,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        { provide: 'Window', useValue: window },
      ],
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    mockStore$ = TestBed.inject(Store) as MockStore<SearchState>;
    mockQuerySelector = mockStore$.overrideSelector(selectQuery, 'query');
    mockFacetsSelector = mockStore$.overrideSelector(selectFacetGroups, [
      { title: 'title', facets: [{ id: 'id', label: 'label', selected: false }] },
    ]);

    mockCollectionsSelector = mockStore$.overrideSelector(selectCollections, {
      title: 'Collections',
      facets: [
        { id: COLLECTION_1, label: COLLECTION_1, selected: true },
        { id: COLLECTION_2, label: COLLECTION_2, selected: false },
      ],
    });
    mockActiveCollectionSelector = mockStore$.overrideSelector(selectActiveCollection, COLLECTION_1);
    mockInitDataSelector = mockStore$.overrideSelector(selectInitData, {
      collections: [
        { value: COLLECTION_1, text: COLLECTION_1 },
        { value: COLLECTION_2, text: COLLECTION_2 },
      ],
      tags: ['Tag 1', 'Tag 2'],
      page: 0,
    });
    mockSearchDataSelector = mockStore$.overrideSelector(selectSearchData, {
      query: 'query',
      facets: [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 1', label: 'Tag 2', selected: false },
          ],
        },
      ],
      collection: COLLECTION_1,
      tags: ['tags'],
      totalContentPages: 48,
      totalHardware: 52,
      page: 0,
    });

    mockFeatureSelector = mockStore$.overrideSelector(featureState, initialFeatureState);

    elasticService = TestBed.inject(ElasticSearchService);
    analyticsService = TestBed.inject(AnalyticsService);
    serviceProvider = TestBed.inject(SearchApiServiceProvider);
    urlService = TestBed.inject(UrlService);
    jest.spyOn(serviceProvider, 'getService').mockReturnValue(elasticService);

    effects = TestBed.inject(SearchEffects);
  });

  describe('suggestion$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getSuggestionsSuccessAction ', (done) => {
        const mockSuggestions = {
          locale: 'locale',
          hits: [],
          asYouType: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'getSuggestions');
        spyInstance.mockReturnValue(of(mockSuggestions));
        actions$ = of(
          searchActions.getSuggestionsAction({ query: '', suggestionsFieldName: HITS, includeHardwareResults: true })
        );

        effects.getSuggestions$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.getSuggestionsSuccessAction({ suggestions: mockSuggestions, suggestionsFieldName: HITS })
          );
          expect(spyInstance).toBeCalled();
          done();
        });
      });
    });
  });

  describe('selectSuggestionItem$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getTopResultsSuccessAction ', (done) => {
        const selectedSuggestionItem = {
          text: 'text',
          highlight: 'highlight',
        };
        const mockTopResults = {
          hits: [],
        };
        jest.spyOn(elasticService, 'getTopResults').mockReturnValue(of(mockTopResults));

        actions$ = of(
          searchActions.selectSuggestionItemAction({ selected: selectedSuggestionItem, byUserAction: false })
        );

        effects.selectSuggestionItem$.subscribe((action) => {
          expect(action).toEqual(searchActions.getTopResultsSuccessAction({ results: mockTopResults }));
          done();
        });
      });
    });
  });

  describe('setActiveCollection$', () => {
    it('should dispatch setCollectionSuccessAction', (done) => {
      actions$ = of(
        searchActions.setActiveCollectionAction({
          collection: 'collection1',
        })
      );

      effects.setActiveCollection$.subscribe((action) => {
        expect(action).toEqual(searchActions.setActiveCollectionSuccessAction({ collection: 'collection1' }));
        done();
      });
    });
  });

  describe('setPage$', () => {
    it('should dispatch setPageSuccessAction', (done) => {
      actions$ = of(
        searchActions.setPageAction({
          page: 6,
        })
      );

      effects.setPage$.subscribe((action) => {
        expect(action).toEqual(searchActions.setPageSuccessAction({ page: 6 }));
        done();
      });
    });
  });

  describe('initiateContentPagesSearch$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getContentPagesSuccessAction ', (done) => {
        const mockResults = {
          locale: 'locale',
          hits: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'search');
        spyInstance.mockReturnValue(of(mockResults));
        mockQuerySelector.setResult('query');
        mockStore$.refreshState();
        actions$ = of(searchActions.getContentPagesAction);

        effects.initiateContentPagesSearch$.subscribe((action) => {
          expect(action).toEqual(searchActions.getContentPagesSuccessAction({ searchResults: mockResults }));
          expect(spyInstance).toBeCalledWith('query', Type.page);
          done();
        });
      });
    });
  });

  describe('initiateHardwareSearch$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getHardwareSuccessAction ', (done) => {
        const mockResults = {
          locale: 'locale',
          hits: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'search');
        spyInstance.mockReturnValue(of(mockResults));
        mockQuerySelector.setResult('query');
        mockStore$.refreshState();
        actions$ = of(searchActions.getHardwareAction);

        effects.initiateHardwareSearch$.subscribe((action) => {
          expect(action).toEqual(searchActions.getHardwareSuccessAction({ searchResults: mockResults }));
          expect(spyInstance).toBeCalledWith('query', Type.hardware);
          done();
        });
      });
    });
  });

  describe('initiateFacets$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch initiateFacetsSuccessAction ', (done) => {
        const expectedFacetGroups: FacetGroup[] = [
          { title: 'name', facets: [{ id: 'value', label: 'value (1)', selected: false }] },
        ];
        const spyInstance = jest.spyOn(elasticService, 'getFacets');
        const includeHardwareResults = true;
        mockActiveCollectionSelector.setResult(COLLECTION_1);
        mockQuerySelector.setResult('facetQuery');
        spyInstance.mockReturnValue(of(expectedFacetGroups));
        actions$ = of(
          searchActions.getFacetsAction({
            collection: COLLECTION_1,
            tags: ['tag'],
            includeHardwareResults,
          })
        );

        effects.initiateFacets$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.getFacetsSuccessAction({
              facetGroups: expectedFacetGroups,
              includeHardwareResults: includeHardwareResults,
            })
          );
          expect(spyInstance).toHaveBeenCalledWith('facetQuery', COLLECTION_1, ['tag'], true, undefined);
          done();
        });
      });

      it('should call facets with selected facets from url', (done) => {
        const expectedFacetGroups: FacetGroup[] = [
          { title: 'group1', facets: [{ id: 'id1', label: 'value', count: 1, selected: false }] },
        ];
        const urlServiceSpy = jest.spyOn(urlService, 'getRequestParameters');
        const elasticServiceSpy = jest.spyOn(elasticService, 'getFacets');
        const includeHardwareResults = true;
        mockQuerySelector.setResult('facetQuery');
        mockActiveCollectionSelector.setResult(COLLECTION_1);
        urlServiceSpy.mockReturnValue({ facets: 'group1:id1' });
        elasticServiceSpy.mockReturnValue(of(expectedFacetGroups));
        actions$ = of(
          searchActions.getFacetsAction({
            collection: COLLECTION_1,
            tags: ['tag'],
            includeHardwareResults,
          })
        );

        effects.initiateFacets$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.getFacetsSuccessAction({
              facetGroups: expectedFacetGroups,
              includeHardwareResults: includeHardwareResults,
            })
          );
          expect(elasticServiceSpy).toHaveBeenCalledWith('facetQuery', COLLECTION_1, ['tag'], true, [
            { title: 'group1', facets: [{ id: 'id1', label: 'id1', selected: true }] },
          ]);
          done();
        });
      });

      it('should pass initiator to initiateFacetsSuccessAction ', (done) => {
        const expectedFacetGroups: FacetGroup[] = [
          { title: 'name', facets: [{ id: 'value', label: 'value (1)', selected: false }] },
        ];
        const spyInstance = jest.spyOn(elasticService, 'getFacets');
        const includeHardwareResults = true;
        mockActiveCollectionSelector.setResult(COLLECTION_1);
        spyInstance.mockReturnValue(of(expectedFacetGroups));
        actions$ = of(
          searchActions.getFacetsAction({
            collection: COLLECTION_1,
            tags: ['tag'],
            includeHardwareResults,
            initiator: ActionInitiator.FACET_SELECT,
          })
        );

        effects.initiateFacets$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.getFacetsSuccessAction({
              facetGroups: expectedFacetGroups,
              includeHardwareResults: includeHardwareResults,
              initiator: ActionInitiator.FACET_SELECT,
            })
          );
          done();
        });
      });
    });
  });

  describe('initiateCollectionsAndTags$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch initiateCollectionsAndTagsSuccessAction ', (done) => {
        const expected: FacetGroup = {
          title: 'ng.search-results-page.lbl.searchon',
          facets: [{ id: 'collection', label: 'collection', selected: true }],
        };
        actions$ = of(
          searchActions.getCollectionsAndTagsAction({
            collections: [{ value: 'collection', text: 'collection' }],
            tags: ['tag'],
          })
        );

        effects.initiateCollectionsAndTags$.subscribe((action) => {
          expect(action).toEqual(searchActions.getCollectionsAndTagsSuccessAction({ collections: expected }));
          done();
        });
      });
    });
  });

  describe('selectFacet$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch selectFacetSuccessAction with corresponding facet set to selected', (done) => {
        const initialFacetGroups: FacetGroup[] = [
          {
            title: 'group1',
            facets: [
              { id: 'id1', label: 'facet1', selected: false },
              { id: 'id2', label: 'facet2', selected: false },
            ],
          },
        ];
        const expectedFacetGroups: FacetGroup[] = [
          {
            title: 'group1',
            facets: [
              { id: 'id1', label: 'facet1', selected: true },
              { id: 'id2', label: 'facet2', selected: false },
            ],
          },
        ];
        const includeHardwareResults = true;
        mockFacetsSelector.setResult(initialFacetGroups);
        mockStore$.refreshState();
        actions$ = of(searchActions.selectFacetAction({ groupIndex: 0, facetIndex: 0, includeHardwareResults }));

        effects.selectFacet$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.selectFacetSuccessAction({
              facetGroups: expectedFacetGroups,
              includeHardwareResults: includeHardwareResults,
            })
          );
          done();
        });
      });
    });
  });

  describe('updateUrlAfterFacetSelection$', () => {
    it('should update the url with selected facets', (done) => {
      const facetGroups: FacetGroup[] = [
        {
          title: 'group1',
          facets: [
            { id: 'id1', label: 'facet1', selected: true },
            { id: 'id2', label: 'facet2', selected: false },
          ],
        },
        {
          title: 'group2',
          facets: [
            { id: 'id3', label: 'facet1', selected: true },
            { id: 'id4', label: 'facet2', selected: true },
          ],
        },
      ];
      const includeHardwareResults = true;
      mockStore$.refreshState();
      actions$ = of(
        searchActions.selectFacetSuccessAction({
          facetGroups: facetGroups,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const spy = jest.spyOn(urlService, 'replaceURLParameters');

      effects.updateUrlAfterFacetSelection$.subscribe(() => {
        expect(spy).toBeCalledWith([{ key: 'facets', value: 'group1:id1;group2:id3,id4' }]);
        done();
      });
    });

    it('should remove the facets url param when no facets are selected', (done) => {
      const facetGroups: FacetGroup[] = [
        {
          title: 'group1',
          facets: [{ id: 'id1', label: 'facet1', selected: false }],
        },
        {
          title: 'group2',
          facets: [{ id: 'id2', label: 'facet2', selected: false }],
        },
      ];
      const includeHardwareResults = true;
      mockStore$.refreshState();
      actions$ = of(
        searchActions.selectFacetSuccessAction({
          facetGroups: facetGroups,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const spy = jest.spyOn(urlService, 'removeURLParameters');

      effects.updateUrlAfterFacetSelection$.subscribe(() => {
        expect(spy).toHaveBeenCalledWith(['facets']);
        done();
      });
    });
  });

  describe('clearFacets$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch selectFacetSuccessAction with corresponding no facets selected', (done) => {
        const initialFacetGroups: FacetGroup[] = [
          {
            title: 'group1',
            facets: [
              { id: 'id1', label: 'facet1', selected: true },
              { id: 'id2', label: 'facet2', selected: true },
            ],
          },
          {
            title: 'group2',
            facets: [
              { id: 'id3', label: 'facet3', selected: true },
              { id: 'id4', label: 'facet4', selected: true },
            ],
          },
        ];
        const expectedFacetGroups: FacetGroup[] = [
          {
            title: 'group1',
            facets: [
              { id: 'id1', label: 'facet1', selected: false },
              { id: 'id2', label: 'facet2', selected: false },
            ],
          },
          {
            title: 'group2',
            facets: [
              { id: 'id3', label: 'facet3', selected: false },
              { id: 'id4', label: 'facet4', selected: false },
            ],
          },
        ];
        const includeHardwareResults = true;
        mockFacetsSelector.setResult(initialFacetGroups);
        mockStore$.refreshState();
        actions$ = of(searchActions.clearFacetsAction({ includeHardwareResults }));

        effects.clearFacets$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.selectFacetSuccessAction({
              facetGroups: expectedFacetGroups,
              includeHardwareResults: includeHardwareResults,
            })
          );
          done();
        });
      });
    });
  });

  describe('selectCollection$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch selectCollectionSuccessAction with corresponding collection set to selected', (done) => {
        const initialCollections: FacetGroup = {
          title: 'collections',
          facets: [
            { id: COLLECTION_1, label: COLLECTION_1, selected: true },
            { id: COLLECTION_2, label: COLLECTION_2, selected: false },
          ],
        };
        const expectedCollections: FacetGroup = {
          title: 'collections',
          facets: [
            { id: COLLECTION_1, label: COLLECTION_1, selected: false },
            { id: COLLECTION_2, label: COLLECTION_2, selected: true },
          ],
        };
        const includeHardwareResults = true;
        mockCollectionsSelector.setResult(initialCollections);
        mockStore$.refreshState();
        actions$ = of(
          searchActions.selectCollectionAction({ collectionIndex: 1, includeHardwareResults: includeHardwareResults })
        );

        effects.selectCollection$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.selectCollectionSuccessAction({
              collections: expectedCollections,
              includeHardwareResults: includeHardwareResults,
            })
          );
          done();
        });
      });

      it('should dispatch initiateFacetsAction with corresponding collection and tags from the state', (done) => {
        const collections: FacetGroup = {
          title: 'collections',
          facets: [
            { id: COLLECTION_1, label: COLLECTION_1, selected: true },
            { id: COLLECTION_2, label: COLLECTION_2, selected: false },
          ],
        };
        const initData = {
          collections: [
            { value: COLLECTION_1, text: COLLECTION_1 },
            { value: COLLECTION_2, text: COLLECTION_2 },
          ],
          tags: ['Tag 1', 'Tag 2'],
          page: 0,
        };
        const includeHardwareResults = true;
        mockInitDataSelector.setResult(initData);
        mockStore$.refreshState();
        actions$ = of(searchActions.selectCollectionSuccessAction({ collections, includeHardwareResults }));

        effects.fetchFacetsAfterCollectionSelection$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.getFacetsAction({
              collection: COLLECTION_1,
              tags: ['Tag 1', 'Tag 2'],
              includeHardwareResults: includeHardwareResults,
              initiator: ActionInitiator.FACET_SELECT,
            })
          );
          done();
        });
      });
    });
  });

  describe('updateUrlAfterCollectionSelection$', () => {
    it('should update the url with selected collection and remove facets from url', (done) => {
      const collections: FacetGroup = {
        title: 'collections',
        facets: [
          { id: COLLECTION_1, label: COLLECTION_1, selected: false },
          { id: COLLECTION_2, label: COLLECTION_2, selected: true },
        ],
      };
      const includeHardwareResults = true;
      mockStore$.refreshState();
      actions$ = of(
        searchActions.selectCollectionSuccessAction({
          collections: collections,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const replaceSpy = jest.spyOn(urlService, 'replaceURLParameters');
      const removeSpy = jest.spyOn(urlService, 'removeURLParameters');

      effects.updateUrlAfterCollectionSelection$.subscribe(() => {
        expect(removeSpy).toHaveBeenCalledWith(['facets']);
        expect(replaceSpy).toBeCalledWith([{ key: 'collection', value: COLLECTION_2 }]);
        done();
      });
    });
  });

  describe('updateResults$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch updateResultsSuccessAction with corresponding search results and type', (done) => {
        const mockResults: SearchResults = {
          locale: 'locale',
          hits: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'search');
        spyInstance.mockReturnValue(of(mockResults));

        const facets: FacetGroup[] = [
          {
            title: 'tags',
            facets: [
              { id: 'Tag 1', label: 'Tag 1', selected: false },
              { id: 'Tag 2', label: 'Tag 2', selected: true },
            ],
          },
        ];

        const includeHardwareResults = true;

        actions$ = of(
          searchActions.updateSearchResultsAction({
            query: 'query',
            includeHardwareResults: includeHardwareResults,
            collection: COLLECTION_1,
            facets: facets,
          })
        );

        effects.updateResults$.subscribe((action) => {
          expect(spyInstance).toBeCalledWith('query', Type.page, COLLECTION_1, facets, undefined);
          expect(action).toEqual(
            searchActions.updateSearchResultsSuccessAction({
              hardwareResults: mockResults,
              contentResults: mockResults,
            })
          );
          done();
        });
      });

      it('should pass the initiator to updateResultsSuccessAction', (done) => {
        const mockResults: SearchResults = {
          locale: 'locale',
          hits: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'search');
        spyInstance.mockReturnValue(of(mockResults));

        const facets: FacetGroup[] = [
          {
            title: 'tags',
            facets: [
              { id: 'Tag 1', label: 'Tag 1', selected: false },
              { id: 'Tag 2', label: 'Tag 2', selected: true },
            ],
          },
        ];

        const includeHardwareResults = true;

        actions$ = of(
          searchActions.updateSearchResultsAction({
            query: 'query',
            includeHardwareResults: includeHardwareResults,
            collection: COLLECTION_1,
            facets: facets,
            initiator: ActionInitiator.FACET_SELECT,
          })
        );

        effects.updateResults$.subscribe((action) => {
          expect(action).toEqual(
            searchActions.updateSearchResultsSuccessAction({
              hardwareResults: mockResults,
              contentResults: mockResults,
              initiator: ActionInitiator.FACET_SELECT,
            })
          );
          done();
        });
      });
    });
  });

  describe('updateUrlAfterSearchResultsUpdate$', () => {
    it('should update the url with current content pages page number', (done) => {
      const mockHardwareResults: SearchResults = {
        page: {
          current: 5,
          size: 9,
          total: 27,
        },
      };

      const mockContentResults: SearchResults = {
        page: {
          current: 1,
          size: 9,
          total: 27,
        },
      };
      mockStore$.refreshState();
      actions$ = of(
        searchActions.updateSearchResultsSuccessAction({
          hardwareResults: mockHardwareResults,
          contentResults: mockContentResults,
        })
      );
      const replaceSpy = jest.spyOn(urlService, 'replaceURLParameters');

      effects.updateUrlAfterSearchResultsUpdate$.subscribe(() => {
        expect(replaceSpy).toBeCalledWith([{ key: 'page', value: '6' }]);
        done();
      });
    });

    it('should update the url with current hardware pages page number', (done) => {
      const mockHardwareResults: SearchResults = {
        page: {
          current: 1,
          size: 9,
          total: 27,
        },
      };

      const mockContentResults: SearchResults = {
        page: {
          current: 9,
          size: 9,
          total: 27,
        },
      };
      mockStore$.refreshState();
      actions$ = of(
        searchActions.updateSearchResultsSuccessAction({
          hardwareResults: mockHardwareResults,
          contentResults: mockContentResults,
        })
      );
      const replaceSpy = jest.spyOn(urlService, 'replaceURLParameters');

      effects.updateUrlAfterSearchResultsUpdate$.subscribe(() => {
        expect(replaceSpy).toBeCalledWith([{ key: 'page', value: '10' }]);
        done();
      });
    });
  });

  describe('setQueryAction$', () => {
    it('should dispatch updateResultsSuccessAction with corresponding search results and type', (done) => {
      actions$ = of(
        searchActions.setQueryAction({
          query: 'query',
        })
      );

      effects.setQuery$.subscribe((action) => {
        expect(action).toEqual(searchActions.setQuerySuccessAction({ query: 'query' }));
        done();
      });
    });
  });

  describe('setHeaderExpanded$', () => {
    it('should set the state of the search header expansion', (done) => {
      actions$ = of(
        searchActions.setHeaderExpandedAction({
          expanded: true,
        })
      );

      effects.setHeaderExpanded$.subscribe((action) => {
        expect(action).toEqual(searchActions.setHeaderExpandedSuccessAction({ expanded: true }));
        done();
      });
    });
  });

  describe('updateResultsAfterFacetSelection$', () => {
    it('should dispatch updateSearchResultsActions with corresponding search data and types', (done) => {
      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: [
          {
            title: 'tags',
            facets: [
              { id: 'Tag 1', label: 'Tag 1', selected: false },
              { id: 'Tag 2', label: 'Tag 2', selected: false },
            ],
          },
        ],
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 0,
      });
      const includeHardwareResults = true;
      actions$ = of(
        searchActions.selectFacetSuccessAction({
          facetGroups: facets,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const spyOn = jest.spyOn(mockStore$, 'dispatch');

      effects.updateResultsAfterFacetSelection$.subscribe(() => {
        done();
      });

      expect(spyOn).toBeCalledWith(
        updateSearchResultsAction({
          query: 'query',
          includeHardwareResults: includeHardwareResults,
          collection: COLLECTION_1,
          facets: facets,
          initiator: ActionInitiator.FACET_SELECT,
        })
      );
    });
  });

  describe('initFacetSuccess$', () => {
    it('should dispatch updateSearchResultsActions with corresponding search data and types', (done) => {
      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: [
          {
            title: 'old tags',
            facets: [],
          },
        ],
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 0,
      });
      const includeHardwareResults = true;
      actions$ = of(
        searchActions.getFacetsSuccessAction({
          facetGroups: facets,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const spyOn = jest.spyOn(mockStore$, 'dispatch');

      effects.initFacetSuccess$.subscribe(() => {
        done();
      });

      expect(spyOn).toBeCalledWith(
        updateSearchResultsAction({
          query: 'query',
          includeHardwareResults: includeHardwareResults,
          collection: COLLECTION_1,
          facets: facets,
        })
      );
    });
  });

  describe('updateFacetsAfterFacetSelection$', () => {
    it('should dispatch updateFacetsSuccessAction with corresponding facets groups', (done) => {
      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: facets,
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 0,
      });
      const includeHardwareResults = true;
      actions$ = of(
        searchActions.selectFacetSuccessAction({
          facetGroups: facets,
          includeHardwareResults: includeHardwareResults,
        })
      );
      const spyInstance = jest.spyOn(elasticService, 'getFacets');
      spyInstance.mockReturnValue(of(facets));

      effects.updateFacetsAfterFacetSelection$.subscribe((action) => {
        expect(spyInstance).toBeCalledWith('query', COLLECTION_1, ['tags'], true, facets);
        expect(action).toEqual(searchActions.updateFacetsSuccessAction({ facetGroups: facets }));
        done();
      });
    });
  });

  describe('getSearchResultPage$', () => {
    it('given type content page and hardware page, then should dispatch updateSearchResultsSuccessAction and call search with page size 5', (done) => {
      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: facets,
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 0,
      });
      actions$ = of(
        searchActions.getSearchResultPageAction({
          page: 2,
          resultType: Type.page,
        })
      );
      const spyInstance = jest.spyOn(elasticService, 'search');
      spyInstance.mockReturnValue(of(mockResults));

      effects.getSearchResultPage$.subscribe((action) => {
        expect(spyInstance).toBeCalledWith('query', Type.page, COLLECTION_1, facets, { page: 1, size: 5 });
        expect(action).toEqual(
          searchActions.updateSearchResultsSuccessAction({ hardwareResults: mockResults, contentResults: mockResults })
        );
        done();
      });
    });

    it('given type content page and no hardware page, then should dispatch updateSearchResultsSuccessAction and call search with page size 10', (done) => {
      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: facets,
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 0,
        page: 0,
      });
      actions$ = of(
        searchActions.getSearchResultPageAction({
          page: 2,
          resultType: Type.page,
        })
      );
      const spyInstance = jest.spyOn(elasticService, 'search');
      spyInstance.mockReturnValue(of(mockResults));

      effects.getSearchResultPage$.subscribe((action) => {
        expect(spyInstance).toBeCalledWith('query', Type.page, COLLECTION_1, facets, { page: 1, size: 10 });
        expect(action).toEqual(
          searchActions.updateSearchResultsSuccessAction({ hardwareResults: mockResults, contentResults: mockResults })
        );
        done();
      });
    });

    it('given type hardware page then should dispatch updateSearchResultsSuccessAction and call search with page size 9', (done) => {
      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];
      mockSearchDataSelector.setResult({
        query: 'query',
        facets: facets,
        collection: COLLECTION_1,
        tags: ['tags'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 0,
      });
      actions$ = of(
        searchActions.getSearchResultPageAction({
          page: 2,
          resultType: Type.hardware,
        })
      );
      const spyInstance = jest.spyOn(elasticService, 'search');
      spyInstance.mockReturnValue(of(mockResults));

      effects.getSearchResultPage$.subscribe((action) => {
        expect(spyInstance).toBeCalledWith('query', Type.hardware, COLLECTION_1, facets, { page: 1, size: 9 });
        expect(action).toEqual(
          searchActions.updateSearchResultsSuccessAction({ hardwareResults: mockResults, contentResults: mockResults })
        );
        done();
      });
    });
  });

  describe('goToResultDirectly$', () => {
    it('should call analytics service with on-site-search and on-site-search-click event and trigger navigation', (done) => {
      const spyInstance = jest.spyOn(analyticsService, 'sendSearchEvent');
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
      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      actions$ = of(
        searchActions.goToPageFromHeaderAction({
          url: productUrl,
          searchResultItem: result,
        })
      );

      effects.goToResultDirectly$.subscribe((action) => {
        expect(spyInstance).toHaveBeenCalledWith(initialFeatureState, {
          event: UnifiedSearchEvents.SEARCH,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          sendOnSiteSearchResults: false,
        });
        expect(spyInstance).toHaveBeenCalledWith(initialFeatureState, {
          event: UnifiedSearchEvents.RESULT_CLICK,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          searchResult: result,
          sendOnSiteSearchResults: false,
        });
        expect(action).toEqual(searchActions.navigateAction({ url: productUrl }));
        done();
      });
    });
  });

  describe('goToResultsPage$', () => {
    it('should trigger navigation', (done) => {
      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      actions$ = of(
        searchActions.goToResultsPageAction({
          url: productUrl,
        })
      );

      effects.goToResultsPage$.subscribe((action) => {
        expect(action).toEqual(searchActions.navigateAction({ url: productUrl }));
        done();
      });
    });
  });

  describe('goToResultFromResultsPage$', () => {
    it('should call analytics service with on-site-search-click event and trigger navigation', (done) => {
      const spyInstance = jest.spyOn(analyticsService, 'sendSearchEvent');
      const result = {
        url: '/content/www-telenet-touch/nl/one',
        displayUrl: 'residential/nl/one',
        content: '',
        type: 'page',
        product: { id: 'myid' } as Product,
        name: '',
        tags: [],
        id: 'id',
      };
      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      actions$ = of(
        searchActions.goToResultFromResultsPageAction({
          url: productUrl,
          searchResultItem: result,
        })
      );

      effects.goToResultFromResultsPage$.subscribe((action) => {
        expect(spyInstance).toHaveBeenCalledWith(initialFeatureState, {
          event: UnifiedSearchEvents.RESULT_CLICK,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
          sendOnSiteSearchFilter: true,
          sendOnSiteSearchResults: true,
          searchResult: result,
        });
        expect(action).toEqual(searchActions.navigateAction({ url: productUrl }));
        done();
      });
    });
  });

  describe('navigate$', () => {
    it('should redirect to url', (done) => {
      urlService.redirectTo = jest.fn();

      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      actions$ = of(
        searchActions.navigateAction({
          url: productUrl,
        })
      );

      effects.navigate$.subscribe(() => {
        expect(urlService.redirectTo).toHaveBeenCalledWith(productUrl);
        done();
      });
    });
  });

  describe('afterResultsSuccess$', () => {
    it('should call analytics service sendSearchEvent when initiator is initial search', (done) => {
      const spyInstance = jest.spyOn(analyticsService, 'sendSearchEvent');

      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      actions$ = of(
        searchActions.updateSearchResultsSuccessAction({
          hardwareResults: mockResults,
          contentResults: mockResults,
          initiator: ActionInitiator.INITIAL_SEARCH,
        })
      );

      effects.afterResultsSuccess$.subscribe(() => {
        expect(spyInstance).toHaveBeenCalledWith(initialFeatureState, {
          event: UnifiedSearchEvents.SEARCH,
          strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE,
          sendOnSiteSearchResults: true,
        });
        done();
      });
    });

    it('should call analytics service sendFilterEvent when initiator was a facet select', (done) => {
      const spyInstance = jest.spyOn(analyticsService, 'sendFilterEvent');

      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      actions$ = of(
        searchActions.updateSearchResultsSuccessAction({
          hardwareResults: mockResults,
          contentResults: mockResults,
          initiator: ActionInitiator.FACET_SELECT,
        })
      );

      effects.afterResultsSuccess$.subscribe(() => {
        expect(spyInstance).toHaveBeenCalledWith(initialFeatureState);
        done();
      });
    });

    it('should not trigger analytics sendFilter event if initiator is not facet select', (done) => {
      const spyInstance = jest.spyOn(analyticsService, 'sendFilterEvent');

      mockFeatureSelector.setResult({
        ...initialFeatureState,
      });

      const mockResults = {
        locale: 'locale',
        hits: [],
      };

      actions$ = of(
        searchActions.updateSearchResultsSuccessAction({
          contentResults: mockResults,
          hardwareResults: mockResults,
        })
      );

      effects.afterResultsSuccess$.subscribe(() => {
        expect(spyInstance).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('setQueryForInPage$', () => {
    it('should dispatch setQuerySuccessAction with corresponding query', (done) => {
      actions$ = of(
        searchActions.setInPageQueryAction({
          query: 'query',
          includeHardwareResults: true,
        })
      );

      effects.setQueryForInPage$.subscribe((action) => {
        expect(action).toEqual(
          searchActions.setInPageQuerySuccessAction({ query: 'query', includeHardwareResults: true })
        );
        done();
      });
    });
  });

  describe('updateSuggestionAfterSetQueryForInPage$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch updateInPageSuggestionSuccessAction ', (done) => {
        const mockSuggestions = {
          locale: 'locale',
          hits: [],
          asYouType: [],
        };
        const spyInstance = jest.spyOn(elasticService, 'getSuggestions');
        spyInstance.mockReturnValue(of(mockSuggestions));
        actions$ = of(searchActions.setInPageQuerySuccessAction({ query: 'query', includeHardwareResults: true }));

        effects.updateSuggestionAfterSetQueryForInPage$.subscribe((action) => {
          expect(action).toEqual(searchActions.updateInPageSuggestionSuccessAction({ suggestions: mockSuggestions }));
          expect(spyInstance).toBeCalled();
          done();
        });
      });
    });
  });

  describe('selectSuggestionInPage$', () => {
    it('should redirect to results url', (done) => {
      const inPageData = {
        ...initialFeatureState.inPage,
        initData: {
          collection: 'telenet_residential_nl',
          resultsPageUrl: 'https://www.int.telenet.be/nl/residential/results.html',
        },
        query: 'query',
      };

      mockFeatureSelector.setResult({
        ...initialFeatureState,
        inPage: inPageData,
      });

      const spyInstance = jest.spyOn(urlService, 'redirectTo');
      actions$ = of(
        searchActions.selectSuggestionInPageAction({
          item: { text: 'text', highlight: 'highlight' },
          url: 'https://www.int.telenet.be/nl/residential/results.html?q=text&collection=telenet_residential_nl',
        })
      );

      effects.selectSuggestionInPage$.subscribe(() => {
        expect(spyInstance).toHaveBeenCalledWith(
          'https://www.int.telenet.be/nl/residential/results.html?q=text&collection=telenet_residential_nl'
        );
        done();
      });
    });
  });

  describe('navigateToInPageResults$', () => {
    it('should redirect to results url', (done) => {
      const inPageData = {
        ...initialFeatureState.inPage,
        initData: {
          collection: 'telenet_residential_nl',
          resultsPageUrl: 'https://www.int.telenet.be/nl/residential/results.html',
        },
        query: 'query',
      };
      mockFeatureSelector.setResult({
        ...initialFeatureState,
        inPage: inPageData,
      });

      const spyInstance = jest.spyOn(urlService, 'redirectTo');
      actions$ = of(searchActions.navigateToInPageResultsAction({ query: 'query' }));

      effects.navigateToInPageResults$.subscribe(() => {
        expect(spyInstance).toHaveBeenCalledWith(
          'https://www.int.telenet.be/nl/residential/results.html?q=query&collection=telenet_residential_nl'
        );
        done();
      });
    });
  });

  describe('setResultsComponentFoundAction$', () => {
    it('should let the application know that a results component was found', (done) => {
      actions$ = of(searchActions.setResultsComponentFoundAction({ found: true }));

      effects.setResultsComponentFound$.subscribe((action) => {
        expect(action).toEqual(searchActions.setResultsComponentFoundSuccessAction({ found: true }));
        done();
      });
    });
  });
});
