import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.state';
import { SEARCH_FEATURE_KEY } from './search.reducer';

export const featureState = createFeatureSelector<SearchState>(SEARCH_FEATURE_KEY);
export const selectSuggestions = createSelector(featureState, (state: SearchState) => state.header.suggestions);
export const selectTopResults = createSelector(featureState, (state: SearchState) => state.header.topResults);
export const selectContentPages = createSelector(featureState, (state: SearchState) => ({
  ...state.resultsPage.searchResults.contentPages,
  hits: state.resultsPage.searchResults.contentPages?.hits?.slice(
    0,
    (state.resultsPage.searchResults.hardware?.hits?.length ?? 0) === 0 ? 10 : 5
  ),
}));

export const selectHardware = createSelector(
  featureState,
  (state: SearchState) => state.resultsPage.searchResults.hardware
);
export const selectResultsLoading = createSelector(featureState, (state: SearchState) => state.resultsPage.loading);
export const selectQuery = createSelector(featureState, (state: SearchState) => state.query);
export const selectHeaderExpanded = createSelector(featureState, (state: SearchState) => state.headerExpanded);
export const selectSearchData = createSelector(featureState, (state: SearchState) => ({
  query: state.query,
  collection: state.resultsPage.collections.facets.find((facet) => facet.selected)?.id ?? '',
  facets: state.resultsPage.facetGroups.filter((group) => group.facets.find((facet) => facet.selected)),
  tags: state.resultsPage.initData.tags,
  totalHardware: state.resultsPage.searchResults.hardware?.page?.total ?? 0,
  totalContentPages: state.resultsPage.searchResults.contentPages?.page?.total ?? 0,
  page: state.resultsPage.initData.page,
}));
export const selectInitData = createSelector(featureState, (state: SearchState) => state.resultsPage.initData);
export const selectFacetGroups = createSelector(featureState, (state: SearchState) => state.resultsPage.facetGroups);
export const selectCollections = createSelector(featureState, (state: SearchState) => state.resultsPage.collections);
export const selectActiveCollection = createSelector(
  featureState,
  (state: SearchState) => state.resultsPage.activeCollection
);
export const selectAppliedFilters = createSelector(featureState, (state: SearchState) =>
  [
    state.resultsPage.collections.facets.find((facet) => facet.selected)?.label ?? '',
    ...state.resultsPage.facetGroups.flatMap((group) =>
      group.facets.filter((facet) => facet.selected).map((facet) => facet.label)
    ),
  ].filter(Boolean)
);

export const selectNumberOfSearchResults = createSelector(
  featureState,
  (state: SearchState) =>
    (state.resultsPage.searchResults.contentPages?.page?.total ?? 0) +
    (state.resultsPage.searchResults.hardware?.page?.total ?? 0)
);

export const selectContentPagesPagination = createSelector(featureState, (state: SearchState) => ({
  currentPage: (state.resultsPage.searchResults.contentPages?.page?.current ?? 0) + 1,
  totalNumberOfPages: Math.ceil(
    (state.resultsPage.searchResults.contentPages?.page?.total ?? 0) /
      ((state.resultsPage.searchResults.hardware?.page?.total ?? 0) === 0 ? 10 : 5)
  ),
}));

export const selectHardwarePagesPagination = createSelector(featureState, (state: SearchState) => ({
  currentPage: (state.resultsPage.searchResults.hardware?.page?.current ?? 0) + 1,
  totalNumberOfPages: Math.ceil((state.resultsPage.searchResults.hardware?.page?.total ?? 0) / 9),
}));

export const selectInPageData = createSelector(featureState, (state: SearchState) => state.inPage);

export const selectInPageInitData = createSelector(featureState, (state: SearchState) => state.inPage.initData);

export const selectInPageSuggestions = createSelector(featureState, (state: SearchState) => state.inPage.suggestions);

export const selectInPageQuery = createSelector(featureState, (state: SearchState) => state.inPage.query);
export const selectResultsComponentFound = createSelector(
  featureState,
  (state: SearchState) => state.resultsComponentFound
);
