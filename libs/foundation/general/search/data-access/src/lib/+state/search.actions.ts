import { createAction, props } from '@ngrx/store';
import { Suggestions } from '../entities/suggestions';
import { SuggestionItem } from '../entities/suggestion-item';
import { SearchResults } from '../entities/search-results';
import { Collection, FacetGroup } from '../entities/facets';
import { Type } from '../services/elastic-search-service.interface';
import { ActionInitiator } from '../types/action-initiator';
import { SearchResultItem } from '../entities/search-result-item';

export const getContentPagesAction = createAction('[search] Initiates a search for pages');

export const getContentPagesSuccessAction = createAction(
  '[search] get content pages success response',
  props<{ searchResults: SearchResults }>()
);

export const getHardwareAction = createAction('[search] Initiates a search for hardware');

export const getHardwareSuccessAction = createAction(
  '[search] get hardware success response',
  props<{ searchResults: SearchResults }>()
);

export const getFacetsAction = createAction(
  '[search] Initiates the facets',
  props<{ collection: string; tags: string[]; includeHardwareResults: boolean; initiator?: ActionInitiator }>()
);

export const getFacetsSuccessAction = createAction(
  '[search] Initiates the facets success response',
  props<{ facetGroups: FacetGroup[]; includeHardwareResults: boolean; initiator?: ActionInitiator }>()
);

export const selectFacetAction = createAction(
  '[search] select a facet',
  props<{ groupIndex: number; facetIndex: number; includeHardwareResults: boolean }>()
);

export const clearFacetsAction = createAction(
  '[search] clears all facets',
  props<{ includeHardwareResults: boolean }>()
);

export const selectFacetSuccessAction = createAction(
  '[search] select a facet success response',
  props<{ facetGroups: FacetGroup[]; includeHardwareResults: boolean }>()
);
export const updateFacetsSuccessAction = createAction(
  '[search] update facets success response',
  props<{ facetGroups: FacetGroup[] }>()
);

export const setActiveCollectionAction = createAction(
  '[search] sets collection in store',
  props<{ collection: string }>()
);
export const setActiveCollectionSuccessAction = createAction(
  '[search] sets collection success response',
  props<{ collection: string }>()
);
export const selectCollectionAction = createAction(
  '[search] select a collection',
  props<{ collectionIndex: number; includeHardwareResults: boolean }>()
);

export const selectCollectionSuccessAction = createAction(
  '[search] select a collection success response',
  props<{ collections: FacetGroup; includeHardwareResults: boolean; activeCollection?: string }>()
);

export const getCollectionsAndTagsAction = createAction(
  '[search] Initiates the collections and tags',
  props<{ collections: Collection[]; tags: string[] }>()
);

export const getCollectionsAndTagsSuccessAction = createAction(
  '[search] Initiates the collections and tags success reponse',
  props<{ collections: FacetGroup }>()
);

export const setQueryAction = createAction('[search] sets query in store', props<{ query: string }>());

export const setQuerySuccessAction = createAction('[search] get query success response', props<{ query: string }>());

export const setHeaderExpandedAction = createAction(
  '[search] the state of the search header in store',
  props<{ expanded: boolean }>()
);

export const setHeaderExpandedSuccessAction = createAction(
  '[search] get search header state success response',
  props<{ expanded: boolean }>()
);

export const getSuggestionsAction = createAction(
  '[search] get suggestions',
  props<{ query: string; suggestionsFieldName: string; includeHardwareResults: boolean }>()
);

export const getSuggestionsSuccessAction = createAction(
  '[search] get suggestions success response',
  props<{ suggestions: Suggestions; suggestionsFieldName: string }>()
);

export const selectSuggestionItemAction = createAction(
  '[search] select a suggestion',
  props<{ selected: SuggestionItem; byUserAction: boolean }>()
);

export const getTopResultsSuccessAction = createAction(
  '[search] top results success response',
  props<{ results: SearchResults }>()
);

export const clearHeaderAction = createAction('[search] clears the header state');

export const updateSearchResultsAction = createAction(
  '[search] updates the search results',
  props<{
    query: string;
    includeHardwareResults: boolean;
    collection?: string;
    facets?: FacetGroup[];
    initiator?: ActionInitiator;
    page?: number;
  }>()
);

export const updateSearchResultsSuccessAction = createAction(
  '[search] updates the search results success response',
  props<{ hardwareResults: SearchResults; contentResults: SearchResults; initiator?: ActionInitiator }>()
);

export const getSearchResultPageAction = createAction(
  '[search] fetch a new page of search results',
  props<{ resultType: Type; page: number }>()
);

export const goToResultFromResultsPageAction = createAction(
  '[search] navigate to a specific page from the results startin from the results page',
  props<{ url: string; searchResultItem: SearchResultItem }>()
);

export const goToResultsPageAction = createAction('[search] navigate to search results', props<{ url: string }>());

export const goToPageFromHeaderAction = createAction(
  '[search] navigate to a specific page from the results',
  props<{ url: string; searchResultItem: SearchResultItem }>()
);

export const navigateAction = createAction('[search] navigate to a specific page', props<{ url: string }>());

export const setLastUsedComponent = createAction('[search] set active component name', props<{ name: string }>());

export const afterFacetChangeResultsUpdatedAction = createAction('[search] after results updated when facets changed');

export const setInPageInitDataAction = createAction(
  '[search] set inpage search init data',
  props<{ collection: string; resultsPageUrl: string }>()
);

export const setInPageQueryAction = createAction(
  '[search] set inpage search query',
  props<{ query: string; includeHardwareResults: boolean }>()
);

export const setInPageQuerySuccessAction = createAction(
  '[search] set inpage search query success',
  props<{ query: string; includeHardwareResults: boolean }>()
);

export const updateInPageSuggestionSuccessAction = createAction(
  '[search] update inpage suggestions',
  props<{ suggestions: Suggestions }>()
);

export const clearInPageAction = createAction('[search] clean inpage suggestions and query');

export const selectSuggestionInPageAction = createAction(
  '[search] select suggestion inpage',
  props<{ item: SuggestionItem; url: string }>()
);

export const navigateToInPageResultsAction = createAction(
  '[search] navigate to inpage results',
  props<{ query: string }>()
);

export const setPageAction = createAction('[search] set page for search results', props<{ page: number }>());

export const setPageSuccessAction = createAction(
  '[search] set page for search results success',
  props<{ page: number }>()
);

export const setResultsComponentFoundAction = createAction(
  '[search] set the results component found parameter',
  props<{ found: boolean }>()
);

export const setResultsComponentFoundSuccessAction = createAction(
  '[search] set the results component found parameter in the reducer',
  props<{ found: boolean }>()
);
