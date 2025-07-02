import { reducer } from './search.reducer';
import { defaultState, SearchState } from './search.state';
import {
  clearHeaderAction,
  clearInPageAction,
  getCollectionsAndTagsAction,
  getCollectionsAndTagsSuccessAction,
  getContentPagesSuccessAction,
  getFacetsSuccessAction,
  getHardwareSuccessAction,
  getSuggestionsSuccessAction,
  getTopResultsSuccessAction,
  goToPageFromHeaderAction,
  navigateToInPageResultsAction,
  selectCollectionSuccessAction,
  selectSuggestionInPageAction,
  selectSuggestionItemAction,
  setActiveCollectionSuccessAction,
  setHeaderExpandedSuccessAction,
  setInPageInitDataAction,
  setInPageQuerySuccessAction,
  setLastUsedComponent,
  setPageSuccessAction,
  setQuerySuccessAction,
  setResultsComponentFoundSuccessAction,
  updateFacetsSuccessAction,
  updateInPageSuggestionSuccessAction,
  updateSearchResultsAction,
  updateSearchResultsSuccessAction,
} from './search.actions';
import { Suggestions } from '../entities/suggestions';
import { SuggestionItem } from '../entities/suggestion-item';
import { SearchResults } from '../entities/search-results';
import { Product } from '../entities/product';
import { FacetGroup } from '../entities/facets';
import { SearchTypes } from '../types/search-types';

const digitalData = {
  page: {
    pageInfo: {
      pageID: 'myid',
    },
  },
};

const searchResultItem = {
  name: 'name',
  type: 'type',
  url: 'url',
  content: 'content',
  displayUrl: 'displayUrl',
  product: {} as Product,
  tags: [],
  id: 'id',
};

describe('SearchReducer', () => {
  const COLLECTION_1 = 'collection 1';
  const COLLECTION_2 = 'collection 2';
  const initialState = defaultState;
  const HITS = 'hits';

  window.digitalData = digitalData;

  describe('No known action happened', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('setQuerySuccessAction', () => {
    it('should set the query', () => {
      const action = setQuerySuccessAction({ query: 'query' });
      const state = reducer(initialState, action);
      expect(state.query).toEqual('query');
    });
  });

  describe('getSuggestionsSuccessActions', () => {
    it('should add the suggestions to the state', () => {
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
      const action = getSuggestionsSuccessAction({ suggestions: suggestions, suggestionsFieldName: HITS });
      const state = reducer(initialState, action);
      expect(state.header.suggestions).toEqual(suggestions);
    });
  });

  describe('selectSuggestionItemAction', () => {
    it('should not add the selected suggestion to the state if was not triggered by user action', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };

      const action = selectSuggestionItemAction({ selected: selected, byUserAction: false });
      const state = reducer(initialState, action);
      expect(state.eventData.suggestionUsed).toBeUndefined();
    });

    it('should add if the action was triggered by a user interaction', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };

      const action = selectSuggestionItemAction({ selected: selected, byUserAction: true });
      const state = reducer(initialState, action);
      expect(state.eventData.suggestionUsed).toEqual(selected);
    });

    it('should set query used', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const actionState = {
        ...initialState,
        query: 'myquery',
      };

      const action = selectSuggestionItemAction({ selected: selected, byUserAction: false });
      const state = reducer(actionState, action);
      expect(state.eventData.queryUsed).toEqual('myquery');
    });

    it('should set page id in event data', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const action = selectSuggestionItemAction({ selected: selected, byUserAction: false });
      const state = reducer(initialState, action);
      expect(state.eventData.searchOriginatingPageId).toEqual('myid');
    });

    it('should set page id in originating page', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const action = selectSuggestionItemAction({ selected: selected, byUserAction: false });
      const state = reducer(initialState, action);
      expect(state.eventData.searchOriginatingPageId).toEqual('myid');
    });
  });

  describe('getTopResultsSuccessAction', () => {
    it('should add the top results to the state', () => {
      const topResults: SearchResults = {
        hits: [searchResultItem],
      };

      const action = getTopResultsSuccessAction({ results: topResults });
      const state = reducer(initialState, action);
      expect(state.header.topResults).toEqual(topResults);
    });
  });

  describe('getContentPagesSuccessAction', () => {
    it('should add the content pages to the state', () => {
      const contentPages: SearchResults = {
        hits: [searchResultItem],
      };

      const action = getContentPagesSuccessAction({ searchResults: contentPages });
      const state = reducer(initialState, action);
      expect(state.resultsPage.searchResults.contentPages).toEqual(contentPages);
    });
  });

  describe('getHardwareSuccessAction', () => {
    it('should add the hardware to the state', () => {
      const hardware: SearchResults = {
        hits: [searchResultItem],
      };

      const action = getHardwareSuccessAction({ searchResults: hardware });
      const state = reducer(initialState, action);
      expect(state.resultsPage.searchResults.hardware).toEqual(hardware);
    });
  });

  describe('clearHeaderAction', () => {
    it('should add the top results to the state', () => {
      const filledState: SearchState = {
        query: 'query',
        headerExpanded: false,
        resultsComponentFound: false,
        eventData: {
          lastUsedComponent: '',
          suggestionUsed: {
            text: 'text',
            highlight: 'highlight',
          },
          searchOriginatingPageId: 'page/mypage',
          queryUsed: '',
        },
        header: {
          suggestions: {
            locale: 'nl',
            hits: [
              {
                text: 'text',
                highlight: 'highlight',
              },
            ],
            asYouType: [],
          },
          topResults: {
            hits: [searchResultItem],
          },
          selectedCollection: '',
          resultsPageUrl: '',
        },
        resultsPage: {
          searchResults: {
            contentPages: {} as SearchResults,
            hardware: {} as SearchResults,
          },
          initData: {
            tags: [],
            collections: [],
            page: 0,
          },
          facetGroups: [],
          collections: { title: '', facets: [] },
          activeCollection: '',
          loading: false,
        },
        inPage: {
          initData: {
            collection: '',
            resultsPageUrl: '',
          },
          selectedSuggestion: undefined,
          query: '',
          suggestions: {
            locale: 'nl',
            hits: [],
            asYouType: [],
          },
        },
      };

      const action = clearHeaderAction();
      const state = reducer(filledState, action);
      expect(state.query).toEqual('query');
      expect(state.header.suggestions.locale).toEqual('');
      expect(state.header.suggestions.hits.length).toEqual(0);
      expect(state.header.topResults.hits?.length).toEqual(0);
      expect(state.eventData.suggestionUsed).toBeUndefined();
    });
  });

  describe('updateFacetsSuccessAction', () => {
    it('should update the facet groups in the state', () => {
      const filledState: SearchState = {
        ...initialState,
        resultsPage: {
          ...initialState.resultsPage,
          facetGroups: [{ title: 'group1', facets: [{ id: 'id', label: 'tag1', selected: true }] }],
        },
      };

      const expected: FacetGroup[] = [{ title: 'group1', facets: [{ id: 'id', label: 'tag1', selected: false }] }];

      const action = updateFacetsSuccessAction({ facetGroups: expected });
      const state = reducer(filledState, action);
      expect(state.resultsPage.facetGroups.length).toEqual(1);
      expect(state.resultsPage.facetGroups).toEqual(expected);
    });

    it('should clear the initial page infoin the state', () => {
      const filledState: SearchState = {
        ...initialState,
        resultsPage: {
          ...initialState.resultsPage,
          initData: {
            ...initialState.resultsPage.initData,
            page: 6,
          },
        },
      };

      const expected: FacetGroup[] = [{ title: 'group1', facets: [{ id: 'id', label: 'tag1', selected: false }] }];

      const action = updateFacetsSuccessAction({ facetGroups: expected });
      const state = reducer(filledState, action);
      expect(state.resultsPage.initData.page).toEqual(0);
    });
  });

  describe('initiateFacetsSuccessAction', () => {
    it('should update the facet groups in the state', () => {
      const expected: FacetGroup[] = [{ title: 'group1', facets: [{ id: 'id', label: 'tag1', selected: false }] }];
      const includeHardwareResults = true;
      const action = getFacetsSuccessAction({ facetGroups: expected, includeHardwareResults: includeHardwareResults });
      const state = reducer(initialState, action);
      expect(state.resultsPage.facetGroups.length).toEqual(1);
      expect(state.resultsPage.facetGroups).toEqual(expected);
    });
  });

  describe('initiateCollectionsAndTagsAction', () => {
    it('should update the collection facet group in the state', () => {
      const expected = {
        collections: [{ text: 'collection1', value: 'collection1' }],
        tags: ['tag1'],
        page: 0,
      };

      const action = getCollectionsAndTagsAction({
        collections: [{ text: 'collection1', value: 'collection1' }],
        tags: ['tag1'],
      });
      const state = reducer(initialState, action);
      expect(state.resultsPage.initData).toEqual(expected);
    });
  });

  describe('initiateCollectionsAndTagsSuccessAction', () => {
    it('should update the collection facet group in the state', () => {
      initialState.resultsPage.activeCollection = 'collection1';

      const expected: FacetGroup = {
        title: 'Search For',
        facets: [{ id: 'collection1', label: COLLECTION_1, selected: true }],
      };
      const action = getCollectionsAndTagsSuccessAction({ collections: expected });
      const state = reducer(initialState, action);
      expect(state.resultsPage.collections).toEqual(expected);
    });
  });

  describe('selectCollectionSuccessAction', () => {
    it('should update the collection in the state', () => {
      const filledState: SearchState = {
        ...initialState,
        resultsPage: {
          ...initialState.resultsPage,
          collections: {
            title: 'Collections',
            facets: [
              { id: 'id1', label: COLLECTION_1, selected: true },
              { id: 'id2', label: COLLECTION_2, selected: false },
            ],
          },
          facetGroups: [{ title: 'group 1', facets: [{ id: 'id3', label: 'facet1', selected: false }] }],
        },
      };

      const expected: FacetGroup = {
        title: 'Collections',
        facets: [
          { id: 'id1', label: COLLECTION_1, selected: false },
          { id: 'id2', label: COLLECTION_2, selected: true },
        ],
      };
      const includeHardwareResults = true;
      const action = selectCollectionSuccessAction({
        collections: expected,
        includeHardwareResults: includeHardwareResults,
      });
      const state = reducer(filledState, action);
      expect(state.resultsPage.collections).toEqual(expected);
    });

    it('should clear the initial page infoin the state', () => {
      const filledState: SearchState = {
        ...initialState,
        resultsPage: {
          ...initialState.resultsPage,
          initData: {
            ...initialState.resultsPage.initData,
            page: 6,
          },
        },
      };

      const expected: FacetGroup = {
        title: 'Collections',
        facets: [
          { id: 'id1', label: COLLECTION_1, selected: false },
          { id: 'id2', label: COLLECTION_2, selected: true },
        ],
      };
      const includeHardwareResults = true;
      const action = selectCollectionSuccessAction({
        collections: expected,
        includeHardwareResults: includeHardwareResults,
      });
      const state = reducer(filledState, action);
      expect(state.resultsPage.initData.page).toEqual(0);
    });
  });

  describe('setActiveCollectionSuccessAction', () => {
    it('should update the active collection in the state', () => {
      const filledState: SearchState = { ...initialState };

      const action = setActiveCollectionSuccessAction({ collection: 'collection1' });
      const state = reducer(filledState, action);
      expect(state.resultsPage.activeCollection).toEqual('collection1');
    });
  });

  describe('setActiveCollectionSuccessAction', () => {
    it('should update the active collection in the state', () => {
      const filledState: SearchState = { ...initialState };

      const action = setPageSuccessAction({ page: 6 });
      const state = reducer(filledState, action);
      expect(state.resultsPage.initData.page).toEqual(6);
    });
  });

  describe('updateSearchResultsAction', () => {
    it('should set loading to true while waiting for the success action', () => {
      const facets: FacetGroup[] = [
        {
          title: 'tags',
          facets: [
            { id: 'Tag 1', label: 'Tag 1', selected: false },
            { id: 'Tag 2', label: 'Tag 2', selected: true },
          ],
        },
      ];

      const action = updateSearchResultsAction({
        query: 'query',
        includeHardwareResults: true,
        collection: COLLECTION_1,
        facets: facets,
      });
      const state = reducer(initialState, action);
      expect(state.resultsPage.loading).toEqual(true);
    });
  });

  describe('updateSearchResultsSuccessAction', () => {
    it('should add the hardware to the state if type is hardware', () => {
      const hardware: SearchResults = {
        hits: [
          {
            name: 'name',
            type: 'type',
            url: 'url',
            content: 'content',
            displayUrl: 'displayUrl',
            product: {} as Product,
            tags: [],
            id: 'id',
          },
        ],
      };

      const pages: SearchResults = {
        hits: [
          {
            name: 'name',
            type: 'type',
            url: 'url',
            content: 'content',
            displayUrl: 'displayUrl',
            product: {} as Product,
            tags: [],
            id: 'id',
          },
        ],
      };

      const action = updateSearchResultsSuccessAction({ contentResults: pages, hardwareResults: hardware });
      const state = reducer(initialState, action);
      expect(state.resultsPage.searchResults.hardware).toEqual(hardware);
      expect(state.resultsPage.searchResults.contentPages).toEqual(pages);
    });
  });

  describe('setLastUsedComponent', () => {
    it('should store the component name in state', () => {
      const action = setLastUsedComponent({ name: 'componentName' });
      const state = reducer(initialState, action);
      expect(state.eventData.lastUsedComponent).toEqual('componentName');
    });

    it('should store the query used', () => {
      const action = setLastUsedComponent({ name: 'componentName' });
      const actionState = {
        ...initialState,
        query: 'myquery',
      };
      const state = reducer(actionState, action);
      expect(state.eventData.queryUsed).toEqual('myquery');
    });
  });

  describe('setInPageInitDataAction', () => {
    it('should store the collection and resultspageurl in state', () => {
      const action = setInPageInitDataAction({
        collection: 'telenet_residential_nl',
        resultsPageUrl: 'https://www.int.telenet.be/mypage',
      });
      const state = reducer(initialState, action);
      expect(state.inPage.initData.collection).toEqual('telenet_residential_nl');
      expect(state.inPage.initData.resultsPageUrl).toEqual('https://www.int.telenet.be/mypage');
    });
  });

  describe('setInPageQuerySuccessAction', () => {
    it('should store the query  in state', () => {
      const action = setInPageQuerySuccessAction({
        query: 'query',
        includeHardwareResults: true,
      });
      const state = reducer(initialState, action);
      expect(state.inPage.query).toEqual('query');
    });
  });

  describe('updateInPageSuggestionSuccessAction', () => {
    it('should store the suggestion  in state', () => {
      const suggestions = {
        locale: 'nl',
        hits: [{ text: 'text', highlight: 'highlight' }],
        asYouType: [{ text: 'text2', highlight: 'highlight2' }],
      };
      const action = updateInPageSuggestionSuccessAction({
        suggestions: suggestions,
      });
      const state = reducer(initialState, action);
      expect(state.inPage.suggestions).toEqual(suggestions);
    });
  });

  describe('clearInPageAction', () => {
    it('should clear the suggestions and query in state', () => {
      const action = clearInPageAction();
      const filledState = {
        ...initialState,
        inPage: {
          ...initialState.inPage,
          query: 'myInpageQuery',
          suggestions: {
            locale: 'nl',
            hits: [{ text: 'text', highlight: 'highlight' }],
            asYouType: [{ text: 'text2', highlight: 'highlight2' }],
          },
        },
      };
      const state = reducer(filledState, action);
      expect(state.inPage.suggestions).toEqual({ locale: '', hits: [], asYouType: [] });
      expect(state.inPage.query).toEqual('');
    });
  });

  describe('navigateToInPageResultsAction', () => {
    it('should set lastUsedComponent', () => {
      const action = navigateToInPageResultsAction({ query: 'dummy' });
      const state = reducer(initialState, action);
      expect(state.eventData.lastUsedComponent).toEqual(SearchTypes.INPAGE_SEARCH);
    });
  });

  describe('selectSuggestionInPageAction', () => {
    it('should set lastUsedComponent when suggestion is selected', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const action = selectSuggestionInPageAction({
        item: selected,
        url: 'doesnotmatter',
      });
      const state = reducer(initialState, action);
      expect(state.eventData.lastUsedComponent).toEqual(SearchTypes.INPAGE_SEARCH);
    });

    it('should set query used when suggestion is selected', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const action = selectSuggestionInPageAction({
        item: selected,
        url: 'doesnotmatter',
      });
      const actionState = {
        ...initialState,
        inPage: {
          ...initialState.inPage,
          query: 'myInPageQuery',
        },
      };
      const state = reducer(actionState, action);
      expect(state.eventData.queryUsed).toEqual('myInPageQuery');
    });

    it('should set selectedSuggestion', () => {
      const selected: SuggestionItem = {
        text: 'text',
        highlight: 'highlight',
      };
      const action = selectSuggestionInPageAction({
        item: selected,
        url: 'doesnotmatter',
      });
      const state = reducer(initialState, action);
      expect(state.eventData.suggestionUsed).toEqual(selected);
    });
  });

  describe('goToPageFromHeaderAction', () => {
    it('should set query as queryUsed', () => {
      const action = goToPageFromHeaderAction({
        url: 'doesnotmatter',
        searchResultItem,
      });
      const state = reducer(initialState, action);
      expect(state.eventData.queryUsed).toEqual(state.query);
    });
  });

  describe('setResultsComponentFoundSuccessAction', () => {
    it('should let the application know if a results component was found', () => {
      const action = setResultsComponentFoundSuccessAction({
        found: true,
      });
      const state = reducer(initialState, action);
      expect(state.resultsComponentFound).toEqual(true);
    });
  });

  describe('setHeaderExpandedSuccessAction', () => {
    it('should let the application know if a results component was found', () => {
      const action = setHeaderExpandedSuccessAction({
        expanded: true,
      });
      const state = reducer(initialState, action);
      expect(state.headerExpanded).toEqual(true);
    });
  });
});
