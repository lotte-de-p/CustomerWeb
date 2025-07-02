import { createFeature, createReducer, on } from '@ngrx/store';
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
  setInPageInitDataAction,
  setInPageQuerySuccessAction,
  setLastUsedComponent,
  setPageSuccessAction,
  setQuerySuccessAction,
  setResultsComponentFoundSuccessAction,
  setHeaderExpandedSuccessAction,
  updateFacetsSuccessAction,
  updateInPageSuggestionSuccessAction,
  updateSearchResultsAction,
  updateSearchResultsSuccessAction,
} from './search.actions';
import { defaultState } from './search.state';
import { SearchTypes } from '../types/search-types';

export const SEARCH_FEATURE_KEY = 'searchFeature';

export const reducer = createReducer(
  defaultState,
  on(setQuerySuccessAction, (state, action) => ({
    ...state,
    query: action.query,
  })),
  on(setHeaderExpandedSuccessAction, (state, action) => ({
    ...state,
    headerExpanded: action.expanded,
  })),
  on(setPageSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      initData: {
        ...state.resultsPage.initData,
        page: action.page,
      },
    },
  })),
  on(getContentPagesSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      searchResults: { ...state.resultsPage.searchResults, contentPages: action.searchResults },
    },
  })),
  on(getHardwareSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      searchResults: { ...state.resultsPage.searchResults, hardware: action.searchResults },
    },
  })),
  on(goToPageFromHeaderAction, (state) => ({
    ...state,
    eventData: {
      ...state.eventData,
      queryUsed: state.query,
    },
  })),
  on(getSuggestionsSuccessAction, (state, action) => ({
    ...state,
    header: {
      ...state.header,
      suggestions: action.suggestions,
    },
  })),
  on(selectSuggestionItemAction, (state, action) => ({
    ...state,
    eventData: {
      ...state.eventData,
      suggestionUsed: action.byUserAction ? action.selected : undefined,
      queryUsed: state.query,
      searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
    },
  })),
  on(getTopResultsSuccessAction, (state, action) => ({
    ...state,
    header: { ...state.header, topResults: action.results },
  })),
  on(clearHeaderAction, (state) => ({
    ...state,
    eventData: {
      ...state.eventData,
      suggestionUsed: undefined,
    },
    header: {
      ...state.header,
      topResults: { hits: [] },
      suggestions: { locale: '', hits: [], asYouType: [] },
    },
  })),
  on(updateFacetsSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      facetGroups: action.facetGroups,
      initData: {
        ...state.resultsPage.initData,
        page: 0,
      },
    },
  })),
  on(getFacetsSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      facetGroups: action.facetGroups,
    },
    initData: {
      ...state.resultsPage.initData,
      page: 0,
    },
  })),
  on(getCollectionsAndTagsSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      collections: {
        ...state.resultsPage.collections,
        title: action.collections.title,
        facets: action.collections.facets.map((collection, index) => ({
          id: collection.id,
          label: collection.label,
          selected: state.resultsPage.activeCollection
            ? collection.id === state.resultsPage.activeCollection
            : index === 0,
        })),
      },
    },
  })),
  on(selectCollectionSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      collections: action.collections,
      activeCollection: action.collections.facets.find((facet) => facet.selected)?.id || '',
      initData: {
        ...state.resultsPage.initData,
        page: 0,
      },
    },
  })),
  on(setActiveCollectionSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      activeCollection: action.collection,
    },
  })),
  on(getCollectionsAndTagsAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      initData: {
        ...state.resultsPage.initData,
        collections: action.collections,
        tags: action.tags,
      },
    },
  })),
  on(updateSearchResultsAction, (state, _) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      loading: true,
    },
  })),
  on(updateSearchResultsSuccessAction, (state, action) => ({
    ...state,
    resultsPage: {
      ...state.resultsPage,
      searchResults: {
        ...state.resultsPage.searchResults,
        hardware: action.hardwareResults,
        contentPages: action.contentResults,
      },
      loading: false,
    },
  })),
  on(setLastUsedComponent, (state, action) => ({
    ...state,
    eventData: {
      ...state.eventData,
      lastUsedComponent: action.name,
      searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
      queryUsed: state.query,
    },
  })),
  on(setInPageInitDataAction, (state, action) => ({
    ...state,
    inPage: {
      ...state.inPage,
      initData: {
        collection: action.collection,
        resultsPageUrl: action.resultsPageUrl,
      },
    },
  })),
  on(setInPageQuerySuccessAction, (state, action) => ({
    ...state,
    inPage: {
      ...state.inPage,
      query: action.query,
    },
  })),
  on(updateInPageSuggestionSuccessAction, (state, action) => ({
    ...state,
    inPage: {
      ...state.inPage,
      suggestions: action.suggestions,
    },
  })),
  on(clearInPageAction, (state) => ({
    ...state,
    inPage: {
      ...state.inPage,
      suggestions: { locale: '', hits: [], asYouType: [] },
      query: '',
    },
  })),
  on(navigateToInPageResultsAction, (state) => ({
    ...state,
    eventData: {
      ...state.eventData,
      lastUsedComponent: SearchTypes.INPAGE_SEARCH,
      searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
      queryUsed: state.inPage.query,
    },
  })),
  on(selectSuggestionInPageAction, (state, action) => ({
    ...state,
    eventData: {
      ...state.eventData,
      lastUsedComponent: SearchTypes.INPAGE_SEARCH,
      searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
      suggestionUsed: action.item,
      queryUsed: state.inPage.query,
    },
  })),
  on(setResultsComponentFoundSuccessAction, (state, action) => ({
    ...state,
    resultsComponentFound: action.found,
  }))
);

export const searchFeature = createFeature({
  name: SEARCH_FEATURE_KEY,
  reducer: reducer,
});
