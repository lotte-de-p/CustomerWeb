import {
  featureState,
  selectActiveCollection,
  selectAppliedFilters,
  selectCollections,
  selectContentPages,
  selectContentPagesPagination,
  selectFacetGroups,
  selectHardware,
  selectHardwarePagesPagination,
  selectInitData,
  selectInPageInitData,
  selectInPageQuery,
  selectInPageSuggestions,
  selectNumberOfSearchResults,
  selectQuery,
  selectResultsComponentFound,
  selectSearchData,
  selectSuggestions,
  selectTopResults,
} from './search.selectors';
import { Suggestions } from '../entities/suggestions';
import { SearchResults } from '../entities/search-results';
import { Product } from '../entities/product';
import { SearchState } from './search.state';

describe('SearchSelectors', () => {
  const COLLECTION_1 = 'collection 1';
  const COLLECTION_2 = 'collection 2';
  const TAG_1 = 'tag 1';
  const TAG_2 = 'tag 2';
  const state = {
    query: 'query',
    headerExpanded: false,
    resultsComponentFound: false,
    eventData: {
      lastUsedComponent: '',
      suggestionUsed: undefined,
      searchOriginatingPageId: undefined,
      queryUsed: '',
    },
    header: {
      suggestions: { locale: '', hits: [], asYouType: [] } as Suggestions,
      topResults: { hits: [] } as SearchResults,
      selectedCollection: '',
      resultsPageUrl: '',
    },
    resultsPage: {
      searchResults: {
        contentPages: {
          hits: [
            {
              name: 'name',
              type: 'page',
              url: 'url',
              content: 'content',
              displayUrl: 'displayUrl',
              product: {} as Product,
              tags: [],
              id: 'id',
            },
          ],
          asYouType: [],
          page: {
            current: 0,
            size: 10,
            total: 48,
          },
        },
        hardware: {
          hits: [
            {
              name: 'name',
              type: 'hardware',
              url: 'url',
              content: 'content',
              displayUrl: 'displayUrl',
              product: {} as Product,
              tags: [],
              id: 'id',
            },
          ],
          asYouType: [],
          page: {
            current: 0,
            size: 11,
            total: 52,
          },
        },
      },
      initData: {
        collections: [
          { value: COLLECTION_1, text: COLLECTION_1 },
          { value: COLLECTION_2, text: COLLECTION_2 },
        ],
        tags: [TAG_1, TAG_2],
        page: 6,
      },
      collections: {
        title: 'collections',
        facets: [
          { id: 'id1', label: COLLECTION_1, selected: true },
          { id: 'id2', label: COLLECTION_2, selected: false },
        ],
      },
      facetGroups: [
        {
          title: 'tags',
          facets: [
            { id: 'id3', label: TAG_1, selected: true },
            { id: 'id4', label: TAG_2, selected: false },
          ],
        },
      ],
      activeCollection: COLLECTION_1,
      loading: false,
    },
    inPage: {
      initData: {
        collection: 'collection_inpage',
        resultsPageUrl: 'https://www.int.telenet.be/inpageresultpage',
      },
      selectedSuggestion: undefined,
      query: 'inPageQuery',
      suggestions: {
        locale: 'nl',
        hits: [{ text: 'text', highlight: 'highlight' }],
        asYouType: [],
      },
    },
  } as SearchState;

  it('featureState', () => {
    const result = featureState.projector(state);
    expect(result).toEqual(state);
  });

  it('selectQuery', () => {
    const result = selectQuery.projector(state);
    expect(result).toEqual('query');
  });

  describe('selectSearchData', () => {
    it('selectSearchData', () => {
      const result = selectSearchData.projector(state);
      expect(result).toEqual({
        query: 'query',
        collection: 'id1',
        facets: [
          {
            facets: [
              {
                id: 'id3',
                label: TAG_1,
                selected: true,
              },
              {
                id: 'id4',
                label: TAG_2,
                selected: false,
              },
            ],
            title: 'tags',
          },
        ],
        tags: ['tag 1', 'tag 2'],
        totalContentPages: 48,
        totalHardware: 52,
        page: 6,
      });
    });

    it('selectSearchData without search results', () => {
      const result = selectSearchData.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: { ...state.resultsPage.searchResults, contentPages: undefined, hardware: undefined },
        },
      });
      expect(result).toEqual({
        query: 'query',
        collection: 'id1',
        facets: [
          {
            facets: [
              {
                id: 'id3',
                label: TAG_1,
                selected: true,
              },
              {
                id: 'id4',
                label: TAG_2,
                selected: false,
              },
            ],
            title: 'tags',
          },
        ],
        tags: ['tag 1', 'tag 2'],
        totalContentPages: 0,
        totalHardware: 0,
        page: 6,
      });
    });

    it('selectSearchData without page info', () => {
      const result = selectSearchData.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            contentPages: { ...state.resultsPage.searchResults.contentPages, page: undefined },
            hardware: { ...state.resultsPage.searchResults.hardware, page: undefined },
          },
        },
      });
      expect(result).toEqual({
        query: 'query',
        collection: 'id1',
        facets: [
          {
            facets: [
              {
                id: 'id3',
                label: TAG_1,
                selected: true,
              },
              {
                id: 'id4',
                label: TAG_2,
                selected: false,
              },
            ],
            title: 'tags',
          },
        ],
        tags: ['tag 1', 'tag 2'],
        totalContentPages: 0,
        totalHardware: 0,
        page: 6,
      });
    });
  });

  it('selectInitData', () => {
    const result = selectInitData.projector(state);
    expect(result).toEqual({
      collections: [
        { value: COLLECTION_1, text: COLLECTION_1 },
        { value: COLLECTION_2, text: COLLECTION_2 },
      ],
      tags: [TAG_1, TAG_2],
      page: 6,
    });
  });

  it('selectFacetGroups', () => {
    const result = selectFacetGroups.projector(state);
    expect(result).toEqual([
      {
        facets: [
          {
            id: 'id3',
            label: TAG_1,
            selected: true,
          },
          {
            id: 'id4',
            label: TAG_2,
            selected: false,
          },
        ],
        title: 'tags',
      },
    ]);
  });

  it('selectCollections', () => {
    const result = selectCollections.projector(state);
    expect(result).toEqual({
      facets: [
        {
          id: 'id1',
          label: COLLECTION_1,
          selected: true,
        },
        {
          id: 'id2',
          label: COLLECTION_2,
          selected: false,
        },
      ],
      title: 'collections',
    });
  });

  it('selectActiveCollection', () => {
    const result = selectActiveCollection.projector(state);
    expect(result).toEqual(COLLECTION_1);
  });

  it('selectAppliedFilters', () => {
    const result = selectAppliedFilters.projector(state);
    expect(result).toEqual(['collection 1', 'tag 1']);
  });
  describe('SearchSelectors', () => {
    it('selectNumberOfSearchResults when page information is available', () => {
      const result = selectNumberOfSearchResults.projector(state);
      expect(result).toEqual(100);
    });

    it('selectNumberOfSearchResults when no results are available should be zero', () => {
      const s: SearchState = {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            contentPages: undefined,
            hardware: undefined,
          },
        },
      };
      const result = selectNumberOfSearchResults.projector(s);
      expect(result).toEqual(0);
    });
    it('selectNumberOfSearchResults when page information is not available should be zero', () => {
      const s: SearchState = {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            contentPages: {
              ...state.resultsPage.searchResults.contentPages,
              page: undefined,
            },
            hardware: {
              ...state.resultsPage.searchResults.hardware,
              page: undefined,
            },
          },
        },
      };
      const result = selectNumberOfSearchResults.projector(s);
      expect(result).toEqual(0);
    });
  });

  it('selectHardware', () => {
    const result = selectHardware.projector(state);
    expect(result).toEqual({
      hits: [
        {
          name: 'name',
          type: 'hardware',
          url: 'url',
          content: 'content',
          displayUrl: 'displayUrl',
          product: {} as Product,
          tags: [],
          id: 'id',
        },
      ],
      asYouType: [],
      page: {
        current: 0,
        size: 11,
        total: 52,
      },
    });
  });

  describe('selectContentPages', () => {
    const contentHits = [
      {
        name: 'name1',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name2',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name3',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name4',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name5',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name6',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name7',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name8',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name9',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
      {
        name: 'name10',
        type: 'page',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      },
    ];

    it('selectContentPages', () => {
      const result = selectContentPages.projector(state);
      expect(result).toEqual({
        asYouType: [],
        hits: [
          {
            name: 'name',
            type: 'page',
            url: 'url',
            content: 'content',
            displayUrl: 'displayUrl',
            product: {} as Product,
            tags: [],
            id: 'id',
          },
        ],
        page: {
          current: 0,
          size: 10,
          total: 48,
        },
      });
    });

    it('when no hardware available, then return 10 content pages', () => {
      const customState = {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            hardware: undefined,
            contentPages: {
              ...state.resultsPage.searchResults.contentPages,
              hits: contentHits,
            },
          },
        },
      };

      const result = selectContentPages.projector(customState);
      expect(result).toEqual({
        asYouType: [],
        hits: contentHits,
        page: {
          current: 0,
          size: 10,
          total: 48,
        },
      });
    });

    it('when no hardware hits available, then return 10 content pages', () => {
      const customState = {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            hardware: {
              ...state.resultsPage.searchResults.hardware,
              hits: [],
              page: { current: 0, size: 0, total: 0 },
            },
            contentPages: {
              ...state.resultsPage.searchResults.contentPages,
              hits: contentHits,
            },
          },
        },
      };

      const result = selectContentPages.projector(customState);
      expect(result).toEqual({
        asYouType: [],
        hits: contentHits,
        page: {
          current: 0,
          size: 10,
          total: 48,
        },
      });
    });

    it('when hardware available, then return 5 content pages', () => {
      const customState = {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            contentPages: {
              ...state.resultsPage.searchResults.contentPages,
              hits: contentHits,
            },
          },
        },
      };

      const result = selectContentPages.projector(customState);
      expect(result).toEqual({
        asYouType: [],
        hits: contentHits.slice(0, 5),
        page: {
          current: 0,
          size: 10,
          total: 48,
        },
      });
    });
  });

  it('selectTopResults', () => {
    const result = selectTopResults.projector(state);
    expect(result).toEqual({ hits: [] });
  });

  it('selectSuggestions', () => {
    const result = selectSuggestions.projector(state);
    expect(result).toEqual({ locale: '', hits: [], asYouType: [] });
  });

  describe('selectContentPagesPagination', () => {
    it('selectContentPagesPagination', () => {
      const result = selectContentPagesPagination.projector(state);
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 10,
      });
    });

    it('selectContentPagesPagination without hardware pages then page size is 10', () => {
      const result = selectContentPagesPagination.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: { ...state.resultsPage.searchResults, hardware: undefined },
        },
      });
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 5,
      });
    });

    it('selectContentPagesPagination without hardware pages then page size is 10', () => {
      const result = selectContentPagesPagination.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: { ...state.resultsPage.searchResults, hardware: undefined },
        },
      });
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 5,
      });
    });

    it('selectContentPagesPagination without content pages, then number of pages is 0', () => {
      const result = selectContentPagesPagination.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            contentPages: undefined,
          },
        },
      });
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 0,
      });
    });
  });

  it('selectContentPagesPagination without content pages page, then number of pages is 0', () => {
    const result = selectContentPagesPagination.projector({
      ...state,
      resultsPage: {
        ...state.resultsPage,
        searchResults: {
          ...state.resultsPage.searchResults,
          contentPages: { ...state.resultsPage.searchResults.contentPages, page: undefined },
        },
      },
    });
    expect(result).toEqual({
      currentPage: 1,
      totalNumberOfPages: 0,
    });
  });

  describe('selectHardwarePagesPagination', () => {
    it('selectHardwarePagesPagination', () => {
      const result = selectHardwarePagesPagination.projector(state);
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 6,
      });
    });

    it('selectHardwarePagesPagination without hardware pages, then number of pages is 0', () => {
      const result = selectHardwarePagesPagination.projector({
        ...state,
        resultsPage: {
          ...state.resultsPage,
          searchResults: {
            ...state.resultsPage.searchResults,
            hardware: undefined,
          },
        },
      });
      expect(result).toEqual({
        currentPage: 1,
        totalNumberOfPages: 0,
      });
    });
  });

  it('selectHardwarePagesPagination without hardware pages page, then number of pages is 0', () => {
    const result = selectHardwarePagesPagination.projector({
      ...state,
      resultsPage: {
        ...state.resultsPage,
        searchResults: {
          ...state.resultsPage.searchResults,
          hardware: { ...state.resultsPage.searchResults.hardware, page: undefined },
        },
      },
    });
    expect(result).toEqual({
      currentPage: 1,
      totalNumberOfPages: 0,
    });
  });

  describe('selectInPageInitData', () => {
    it('selectInPageInitData', () => {
      const result = selectInPageInitData.projector(state);
      expect(result).toEqual({
        collection: 'collection_inpage',
        resultsPageUrl: 'https://www.int.telenet.be/inpageresultpage',
      });
    });
  });

  describe('selectInPageSuggestions', () => {
    it('selectInPageSuggestions', () => {
      const result = selectInPageSuggestions.projector(state);
      expect(result).toEqual({
        locale: 'nl',
        asYouType: [],
        hits: [{ text: 'text', highlight: 'highlight' }],
      });
    });
  });

  describe('selectInPageQuery', () => {
    it('selectInPageQuery', () => {
      const result = selectInPageQuery.projector(state);
      expect(result).toEqual('inPageQuery');
    });
  });

  describe('selectInPageQuery', () => {
    it('selectInPageQuery', () => {
      const result = selectInPageQuery.projector(state);
      expect(result).toEqual('inPageQuery');
    });
  });

  describe('selectResultsComponentFound', () => {
    it('should tell me if a results component was not found', () => {
      const result = selectResultsComponentFound.projector(state);
      expect(result).toEqual(false);
    });

    it('should tell me if a results component was found', () => {
      const result = selectResultsComponentFound.projector({ ...state, resultsComponentFound: true });
      expect(result).toEqual(true);
    });
  });
});
