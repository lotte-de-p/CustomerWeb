import { AnalyticsService } from './analytics.service';
import { TestBed } from '@angular/core/testing';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { SearchResultItem } from '../entities/search-result-item';
import { Product } from '../entities/product';
import { defaultState, SearchState } from '../+state/search.state';
import { UnifiedSearchEvents } from '../types/analytics-eventinfo';
import { SuggestionItem } from '../entities/suggestion-item';

const dummyPageResults: SearchResultItem[] = [
  {
    url: 'https://www2.telenet.be/content/www-telenet-touch/nl/mypage',
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
];

const baseBusinessPage = {
  url: 'https:/www.base.be/content/www-base-business/nl/mypage/subpage',
  displayUrl: 'https://www.base.be/business/nl/mypage/subpage',
  content: '',
  type: 'page',
  product: { id: 'myid' } as Product,
  name: '',
  tags: [],
  id: 'id',
};
const productResult: SearchResultItem = {
  url: '/content/www-telenet-touch/nl/producten/iphone11',
  displayUrl: 'residential/nl/producten/iphone11',
  content: '',
  type: 'product',
  product: { id: 'myid' } as Product,
  name: 'iphone11',
  tags: [],
  id: 'id',
};

const getDummySearchState = () => {
  return Object.assign(
    {},
    {
      ...defaultState,
      query: 'dummy',
      resultsPage: {
        ...defaultState.resultsPage,
        collections: {
          title: 'ng.search-results-page.lbl.searchon',
          facets: [
            {
              id: 'telenet_residential_nl',
              label: 'Particulieren',
              selected: true,
            },
            {
              id: 'telenet_smele_nl',
              label: 'Bedrijven',
              selected: false,
            },
            {
              id: 'telenet_soho_nl',
              label: 'Zelfstandigen',
              selected: false,
            },
          ],
        },
        searchResults: {
          ...defaultState.resultsPage.searchResults,
          contentPages: {
            hits: [...dummyPageResults],
            page: {
              size: 10,
              current: 0,
              total: 2,
            },
          },
          hardware: {
            hits: [productResult],
            page: {
              size: 10,
              current: 0,
              total: 1,
            },
          },
        },
      },
      eventData: {
        queryUsed: 'dummyQueryUsed',
        suggestionUsed: {} as SuggestionItem | undefined,
        searchOriginatingPageId: '',
        lastUsedComponent: '',
      },
    }
  );
};
let dummySearchState: SearchState = getDummySearchState();

describe('AnalyticsService', () => {
  let analyticsService: AnalyticsService;
  let datalayerService: DataLayerService;

  const suggestionText = 'my suggestion';
  const suggestion = {
    text: suggestionText,
    highlight: 'suggestion',
  };

  beforeEach(() => {
    const mockWindow = {
      udlObjectName: 'digitalData',
      digitalData: {
        applicationID: 'base',
        environment: 'int',
        page: {
          pageInfo: {
            pageID: 'currentPageId',
          },
        },
      },
    };
    TestBed.configureTestingModule({
      imports: [],
      providers: [DataLayerService, { provide: 'Window', useValue: mockWindow }],
    }).compileComponents();

    analyticsService = TestBed.inject(AnalyticsService);
    datalayerService = TestBed.inject(DataLayerService);
  });

  it('should be created', () => {
    expect(analyticsService).toBeTruthy();
    expect(datalayerService).toBeTruthy();
  });

  describe('getContentIds', () => {
    it('should return a list of page ids based on page paths and product names from the results', () => {
      const pageIDs = analyticsService.getContentIds(dummySearchState.resultsPage.searchResults);
      expect(pageIDs).toStrictEqual(['mypage', 'mypage/subpage', 'iphone11']);
    });

    it('should prefix business pages with business/', () => {
      dummySearchState.resultsPage.searchResults.contentPages ||= {};
      dummySearchState.resultsPage.searchResults.contentPages.hits = [baseBusinessPage];
      const pageIDs = analyticsService.getContentIds(dummySearchState.resultsPage.searchResults);
      expect(pageIDs).toStrictEqual(['business/mypage/subpage', 'iphone11']);
    });
  });

  describe('sendSearchEvent', () => {
    const searchEvent = {
      event: UnifiedSearchEvents.SEARCH,
      strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
      sendOnSiteSearchResults: true,
    };

    it('should send event with search event name and type', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.eventInfo.getEventName()).toBe('on-site search made');
      expect(eventProperties.eventInfo.getType()).toBe('on-site-search');
    });

    it('should add the suggestion as itemData if it was a user action', () => {
      dummySearchState.eventData.suggestionUsed = suggestion;
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.itemData).toBe(suggestionText);
    });

    it('should add the current page ID', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchOrigination).toBe('currentPageId');
    });

    it('should add the search query', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchTerm).toBe('dummyQueryUsed');
    });

    it('should add page ids and product names', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResultsID).toBe('mypage,mypage/subpage,iphone11');
    });

    it('should send the total pages', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResults).toBe('3');
    });

    it('should send the total pages if only content pages available', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      dummySearchState.resultsPage.searchResults.hardware = undefined;
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResults).toBe('2');
    });

    it('should send the total pages if only hardware available', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      dummySearchState.resultsPage.searchResults.contentPages = undefined;
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResults).toBe('1');
    });

    it('should not send the total pages if no hardware or contentpages available', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      dummySearchState.resultsPage.searchResults.contentPages = undefined;
      dummySearchState.resultsPage.searchResults.hardware = undefined;
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResults).toBe('');
    });

    it('should not send the total pages if sendOnSearchResults is false', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      dummySearchState.resultsPage.searchResults.contentPages = undefined;
      dummySearchState.resultsPage.searchResults.hardware = undefined;
      analyticsService.sendSearchEvent(dummySearchState, {
        ...searchEvent,
        sendOnSiteSearchResults: false,
      });
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResults).toBe(undefined);
    });

    it('should fire the analytics call on next page', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, searchEvent);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.strategy).toBe(AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD);
    });

    it('should send cardId when a search result is passed', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendSearchEvent(dummySearchState, {
        ...searchEvent,
        searchResult: dummyPageResults[0],
      });
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.cardId).toBe('mypage');
    });
  });

  describe('sendFilterEvent', () => {
    it('should send event with name and type', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.eventInfo.getEventName()).toBe('on-site search filter clicked');
      expect(eventProperties.eventInfo.getType()).toBe('click');
    });

    it('should add the suggestion as itemData if it was a user action', () => {
      dummySearchState.eventData.suggestionUsed = suggestion;
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.itemData).toBe(suggestionText);
    });

    it('should not add the suggestion as itemData if it was defined by init and not a focus/hover action', () => {
      dummySearchState.eventData.suggestionUsed = undefined;
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.itemData).toBe('No suggestion clicked');
    });

    it('should add the current page ID', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchOrigination).toBe('currentPageId');
    });

    it('should add the filter query', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchTerm).toBe('dummyQueryUsed');
    });

    it('should add page ids and product names', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchResultsID).toBe('mypage,mypage/subpage,iphone11');
    });

    it('should fire the analytics call on next page', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.strategy).toBe(AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE);
    });

    it('should add filter string containing active collection', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      analyticsService.sendFilterEvent(dummySearchState);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchFilter).toBe('search-on:telenet_residential_nl');
    });

    it('should add filter string containing active collection and active facets', () => {
      const sendEvent = jest.spyOn(datalayerService, 'sendEvent');
      const searchWithFacetsSelected = {
        ...dummySearchState,
        resultsPage: {
          ...dummySearchState.resultsPage,
          facetGroups: [
            {
              title: 'tags.category',
              facets: [
                {
                  id: 'devices',
                  label: 'tags.category.devices',
                  count: 8,
                  selected: true,
                },
                {
                  id: 'type',
                  label: 'tags.category.type',
                  count: 3,
                  selected: true,
                },
              ],
            },
          ],
        },
      };
      analyticsService.sendFilterEvent(searchWithFacetsSelected);
      const eventProperties = sendEvent.mock.calls[0][0];
      expect(eventProperties.attributes.onsiteSearchFilter).toBe(
        'search-on:telenet_residential_nl|tags.category:devices,type'
      );
    });
  });

  afterEach(() => {
    dummySearchState = getDummySearchState();
  });
});
