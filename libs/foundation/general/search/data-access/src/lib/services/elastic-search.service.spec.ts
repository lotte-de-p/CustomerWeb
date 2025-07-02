import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ElasticSearchService } from './elastic-search.service';
import { Suggestions } from '../entities/suggestions';
import { SearchResults } from '../entities/search-results';
import { SearchApiServiceProvider } from './search-api-service.provider';
import { ConfigService } from '@telenet/ng-lib-config';
import { take } from 'rxjs';
import { Type } from './elastic-search-service.interface';
import { FacetGroup, Tag } from '../entities/facets';

const TELENET_RESIDENTIAL_NL = 'telenet_residential_nl';
const TELENET = 'telenet';
const BASE = 'base';
const NL = 'nl';
const FR = 'fr';

describe('ElasticSearchService', () => {
  const COLLECTION_ID = 'collection.id';
  let service: ElasticSearchService;
  let provider: SearchApiServiceProvider;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'Window', useValue: window },
        {
          provide: ConfigService,
          useValue: {
            getConfig: () => 'url',
          },
        },
        SearchApiServiceProvider,
      ],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    httpTestingController = TestBed.inject(HttpTestingController);
    provider = TestBed.inject(SearchApiServiceProvider);
    service = provider.getService() as ElasticSearchService;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to take input parameters', () => {
    service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

    expect(service.getLanguage()).toBe(NL);
    expect(service.getBrand()).toBe(TELENET);
    expect(service.getSearchResultsCollection()).toBe(TELENET_RESIDENTIAL_NL);
    expect(service.getSearchResultsPage()).toBe('page');
  });

  it('should only overwrite searchResultsPage and searchResultCollection if set', () => {
    service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
    service.setInputParameters('', '', TELENET, NL);

    expect(service.getLanguage()).toBe(NL);
    expect(service.getBrand()).toBe(TELENET);
    expect(service.getSearchResultsCollection()).toBe(TELENET_RESIDENTIAL_NL);
    expect(service.getSearchResultsPage()).toBe('page');
  });

  it('should be able to POST clicks and clear searchResultId', () => {
    window.sessionStorage.setItem('searchResultId', 'id');
    service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

    service.postClick('id', TELENET, NL);

    const req = httpTestingController.expectOne('url/clicks/id/telenet/nl');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({});

    expect(window.sessionStorage.getItem('searchResultId')).toBeNull();
  });

  describe('getSuggestions', () => {
    it('should getSuggestions get Page and Product when includeHardwareResults true', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, true).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
        'product',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions get Page when includeHardwareResults false', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, false).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, true).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
        'product',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions get Page when includeHardwareResults false', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, false).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, false).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions when not includeHardwareResults', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';

      service.getSuggestions(searchQuery, false).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        TELENET_RESIDENTIAL_NL
      );
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][0]['values']).toStrictEqual([
        'page',
      ]);
      req.flush(dummySuggestions);
    });

    it('should getSuggestions with brand and locale from collection', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', BASE, FR);
      const dummySuggestions = {} as Suggestions;
      const searchQuery = 'dummyQuery';
      const collection = 'base_test_fr';
      const includeHardwareResults = true;

      service.getSuggestions(searchQuery, includeHardwareResults, collection).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/suggestions`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body['locale']).toBe(FR);
      expect(req.request.body['brand']).toBe(BASE);
      expect(req.request.body['filters']['logicalFilters'][0]['queryValueFilters'][1]['values'][0]).toBe(
        'base_test_fr'
      );
      req.flush(dummySuggestions);
    });
  });

  describe('search', () => {
    it('should search with type page', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const dummyResult = {} as SearchResults;

      service.search('query', Type.page).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body.size).toBe(10);
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(dummyResult);
    });

    it('should search with type hardware', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const dummyResult = {} as SearchResults;

      service.search('query', Type.hardware).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body.size).toBe(9);
      expect(
        req.request.body.filters.logicalFilters[0].queryValueFilters.find(
          (qvf: { name: string; values: string[] }) => qvf.name === COLLECTION_ID
        ).values
      ).toStrictEqual([TELENET_RESIDENTIAL_NL]);
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(dummyResult);
    });

    it('should search with collection', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const dummyResult = {} as SearchResults;

      service.search('query', Type.hardware, 'my_collection').pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
      expect(req.request.method).toBe('POST');
      expect(
        req.request.body.filters.logicalFilters[0].queryValueFilters.find(
          (qvf: { name: string; values: string[] }) => qvf.name === COLLECTION_ID
        ).values
      ).toStrictEqual(['my_collection']);
      expect(req.request.body.size).toBe(9);
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(dummyResult);
    });
    it('should search with facets', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const dummyResult = {} as SearchResults;

      service
        .search('query', Type.hardware, 'my_collection', [
          {
            title: 'tags.category',
            facets: [
              { id: 'id1', label: 'my_facet', selected: true },
              { id: 'id2', label: 'my_facet_unselected', selected: false },
            ],
          },
        ])
        .pipe(take(1))
        .subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
      expect(req.request.method).toBe('POST');
      expect(
        req.request.body.filters.logicalFilters[0].queryValueFilters.find(
          (qvf: { name: string; values: string[] }) => qvf.name === COLLECTION_ID
        ).values
      ).toStrictEqual(['my_collection']);
      expect(
        req.request.body.filters.logicalFilters[0].queryValueFilters.find(
          (qvf: { name: string; values: string[] }) => qvf.name === 'tags.category'
        ).values
      ).toStrictEqual(['id1']);
      expect(req.request.body.size).toBe(9);
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(dummyResult);
    });

    it('should search with pagination', () => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const dummyResult = {} as SearchResults;

      service.search('query', Type.hardware, 'my_collection', [], { page: 3, size: 11 }).pipe(take(1)).subscribe();

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body.page).toBe(3);
      expect(req.request.body.size).toBe(11);
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(dummyResult);
    });
  });

  it('should getTopResults', () => {
    service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);

    const dummyTopResults = {} as SearchResults;
    const suggestion = 'dummySuggestion';

    service.getTopResults(suggestion).pipe(take(1)).subscribe();

    const req = httpTestingController.expectOne(`${service.searchApiUrl}/search`);
    expect(req.request.method).toBe('POST');
    service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
    req.flush(dummyTopResults);
  });

  describe('getFacets', () => {
    it('should retrieve facets with query, tags and collection', (done) => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const result: Tag[] = [{ id: 'id', name: 'name', items: [{ value: 'tag', count: 1 }] }];
      const expected: FacetGroup[] = [
        { title: 'name', facets: [{ id: 'tag', label: 'id.tag', count: 1, selected: false }] },
      ];
      const includeHardwareResults = true;
      service
        .getFacets('query', TELENET_RESIDENTIAL_NL, ['tag'], includeHardwareResults)
        .pipe(take(1))
        .subscribe((value) => {
          expect(value).toEqual(expected);
          done();
        });

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/facets`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toStrictEqual({
        brand: TELENET,
        facets: [{ value: 'tags.tag' }],
        filters: {
          logicalFilters: [
            {
              queryRangeFilters: [],
              queryValueFilters: [
                { name: 'type', values: ['page', 'product'] },
                { name: COLLECTION_ID, values: [TELENET_RESIDENTIAL_NL] },
              ],
            },
          ],
          logicalFiltersOperator: 'AND',
        },
        locale: NL,
        page: 0,
        query: 'query',
        size: 100,
      });
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(result);
    });

    it('when facets are already available then retrieve facets and return the selected as selected', (done) => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const result: Tag[] = [
        { id: 'id1', name: 'group1', items: [{ value: 'tag1', count: 1 }] },
        { id: 'id2', name: 'group2', items: [{ value: 'tag2', count: 2 }] },
      ];
      const expected: FacetGroup[] = [
        { title: 'group1', facets: [{ id: 'tag1', label: 'id1.tag1', count: 1, selected: true }] },
        { title: 'group2', facets: [{ id: 'tag2', label: 'id2.tag2', count: 2, selected: false }] },
      ];
      const currentFacets: FacetGroup[] = [
        { title: 'group1', facets: [{ id: 'tag1', label: 'group1.tag1', count: 1, selected: true }] },
      ];
      const includeHardwareResults = true;
      service
        .getFacets('query', TELENET_RESIDENTIAL_NL, ['tag'], includeHardwareResults, currentFacets)
        .pipe(take(1))
        .subscribe((value) => {
          expect(value).toEqual(expected);
          done();
        });

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/facets`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toStrictEqual({
        brand: TELENET,
        facets: [{ value: 'tags.tag' }],
        filters: {
          logicalFilters: [
            {
              queryRangeFilters: [],
              queryValueFilters: [
                { name: 'group1', values: ['tag1'] },
                { name: 'type', values: ['page', 'product'] },
                { name: COLLECTION_ID, values: [TELENET_RESIDENTIAL_NL] },
              ],
            },
          ],
          logicalFiltersOperator: 'AND',
        },
        locale: NL,
        page: 0,
        query: 'query',
        size: 100,
      });
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(result);
    });

    it('should order facets by the order in the tag array', (done) => {
      service.setInputParameters(TELENET_RESIDENTIAL_NL, 'page', TELENET, NL);

      const group1 = 'tags.group1';
      const group2 = 'tags.group2';
      const group3 = 'tags.group3';
      const result: Tag[] = [
        { id: 'id1', name: group1, items: [{ value: 'tag1', count: 1 }] },
        { id: 'id2', name: group2, items: [{ value: 'tag2', count: 2 }] },
        { id: 'id3', name: group3, items: [{ value: 'tag3', count: 3 }] },
      ];
      const expected: FacetGroup[] = [
        { title: group2, facets: [{ id: 'tag2', label: 'id2.tag2', count: 2, selected: false }] },
        { title: group1, facets: [{ id: 'tag1', label: 'id1.tag1', count: 1, selected: false }] },
        { title: group3, facets: [{ id: 'tag3', label: 'id3.tag3', count: 3, selected: false }] },
      ];
      const includeHardwareResults = true;
      service
        .getFacets('query', TELENET_RESIDENTIAL_NL, ['group2', 'group1'], includeHardwareResults)
        .pipe(take(1))
        .subscribe((value) => {
          expect(value).toEqual(expected);
          done();
        });

      const req = httpTestingController.expectOne(`${service.searchApiUrl}/facets`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toStrictEqual({
        brand: TELENET,
        facets: [{ value: group2 }, { value: group1 }],
        filters: {
          logicalFilters: [
            {
              queryRangeFilters: [],
              queryValueFilters: [
                { name: 'type', values: ['page', 'product'] },
                { name: COLLECTION_ID, values: [TELENET_RESIDENTIAL_NL] },
              ],
            },
          ],
          logicalFiltersOperator: 'AND',
        },
        locale: NL,
        page: 0,
        query: 'query',
        size: 100,
      });
      service.setInputParameters('telenet_genius_nl', 'page', TELENET, NL);
      req.flush(result);
    });
  });
});
