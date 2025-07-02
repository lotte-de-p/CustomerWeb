(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["libs_foundation_general_search_data-access_src_index_ts-_52880"],{

/***/ 11930:
/*!*****************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticSearchService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ElasticSearchService),
/* harmony export */   HardwarePlanService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HardwarePlanService),
/* harmony export */   KeyboardNavigationDirective: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.KeyboardNavigationDirective),
/* harmony export */   KeyboardNavigationService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.KeyboardNavigationService),
/* harmony export */   SEARCH_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SEARCH_FEATURE_KEY),
/* harmony export */   SearchApiServiceProvider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchApiServiceProvider),
/* harmony export */   SearchEffects: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchEffects),
/* harmony export */   SearchFacadeService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchFacadeService),
/* harmony export */   SearchNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchNgrxModule),
/* harmony export */   SearchTypes: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchTypes),
/* harmony export */   afterFacetChangeResultsUpdatedAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.afterFacetChangeResultsUpdatedAction),
/* harmony export */   clearFacetsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.clearFacetsAction),
/* harmony export */   clearHeaderAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.clearHeaderAction),
/* harmony export */   clearInPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.clearInPageAction),
/* harmony export */   defaultState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.featureState),
/* harmony export */   getCollectionsAndTagsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getCollectionsAndTagsAction),
/* harmony export */   getCollectionsAndTagsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getCollectionsAndTagsSuccessAction),
/* harmony export */   getContentPagesAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getContentPagesAction),
/* harmony export */   getContentPagesSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getContentPagesSuccessAction),
/* harmony export */   getFacetsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getFacetsAction),
/* harmony export */   getFacetsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getFacetsSuccessAction),
/* harmony export */   getHardwareAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getHardwareAction),
/* harmony export */   getHardwareSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getHardwareSuccessAction),
/* harmony export */   getSearchResultPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSearchResultPageAction),
/* harmony export */   getSuggestionsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSuggestionsAction),
/* harmony export */   getSuggestionsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSuggestionsSuccessAction),
/* harmony export */   getTopResultsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTopResultsSuccessAction),
/* harmony export */   goToPageFromHeaderAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToPageFromHeaderAction),
/* harmony export */   goToResultFromResultsPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToResultFromResultsPageAction),
/* harmony export */   goToResultsPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToResultsPageAction),
/* harmony export */   navigateAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.navigateAction),
/* harmony export */   navigateToInPageResultsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.navigateToInPageResultsAction),
/* harmony export */   provideSearchDomain: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideSearchDomain),
/* harmony export */   reducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   searchFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.searchFeature),
/* harmony export */   selectActiveCollection: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectActiveCollection),
/* harmony export */   selectAppliedFilters: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAppliedFilters),
/* harmony export */   selectCollectionAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCollectionAction),
/* harmony export */   selectCollectionSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCollectionSuccessAction),
/* harmony export */   selectCollections: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCollections),
/* harmony export */   selectContentPages: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectContentPages),
/* harmony export */   selectContentPagesPagination: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectContentPagesPagination),
/* harmony export */   selectFacetAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectFacetAction),
/* harmony export */   selectFacetGroups: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectFacetGroups),
/* harmony export */   selectFacetSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectFacetSuccessAction),
/* harmony export */   selectHardware: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHardware),
/* harmony export */   selectHardwarePagesPagination: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHardwarePagesPagination),
/* harmony export */   selectHeaderExpanded: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHeaderExpanded),
/* harmony export */   selectInPageData: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInPageData),
/* harmony export */   selectInPageInitData: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInPageInitData),
/* harmony export */   selectInPageQuery: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInPageQuery),
/* harmony export */   selectInPageSuggestions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInPageSuggestions),
/* harmony export */   selectInitData: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInitData),
/* harmony export */   selectNumberOfSearchResults: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectNumberOfSearchResults),
/* harmony export */   selectQuery: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectQuery),
/* harmony export */   selectResultsComponentFound: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectResultsComponentFound),
/* harmony export */   selectResultsLoading: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectResultsLoading),
/* harmony export */   selectSearchData: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSearchData),
/* harmony export */   selectSuggestionInPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSuggestionInPageAction),
/* harmony export */   selectSuggestionItemAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSuggestionItemAction),
/* harmony export */   selectSuggestions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSuggestions),
/* harmony export */   selectTopResults: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectTopResults),
/* harmony export */   setActiveCollectionAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setActiveCollectionAction),
/* harmony export */   setActiveCollectionSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setActiveCollectionSuccessAction),
/* harmony export */   setHeaderExpandedAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setHeaderExpandedAction),
/* harmony export */   setHeaderExpandedSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setHeaderExpandedSuccessAction),
/* harmony export */   setInPageInitDataAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setInPageInitDataAction),
/* harmony export */   setInPageQueryAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setInPageQueryAction),
/* harmony export */   setInPageQuerySuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setInPageQuerySuccessAction),
/* harmony export */   setLastUsedComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setLastUsedComponent),
/* harmony export */   setPageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setPageAction),
/* harmony export */   setPageSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setPageSuccessAction),
/* harmony export */   setQueryAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setQueryAction),
/* harmony export */   setQuerySuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setQuerySuccessAction),
/* harmony export */   setResultsComponentFoundAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setResultsComponentFoundAction),
/* harmony export */   setResultsComponentFoundSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setResultsComponentFoundSuccessAction),
/* harmony export */   updateFacetsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.updateFacetsSuccessAction),
/* harmony export */   updateInPageSuggestionSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.updateInPageSuggestionSuccessAction),
/* harmony export */   updateSearchResultsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.updateSearchResultsAction),
/* harmony export */   updateSearchResultsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.updateSearchResultsSuccessAction)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 59957);


/***/ }),

/***/ 43655:
/*!*****************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search-ngrx.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchNgrxModule: () => (/* binding */ SearchNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.reducer */ 74667);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.effects */ 39222);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








const storageReducer = (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.createStorageMetaReducer)('__unifiedSearch_storage__', ['header', 'eventData']);
const metaReducers = [storageReducer];
class SearchNgrxModule {
  static ɵfac = function SearchNgrxModule_Factory(t) {
    return new (t || SearchNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SearchNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature([_search_effects__WEBPACK_IMPORTED_MODULE_3__.SearchEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_search_reducer__WEBPACK_IMPORTED_MODULE_1__.searchFeature.name, _search_reducer__WEBPACK_IMPORTED_MODULE_1__.searchFeature.reducer, {
      metaReducers
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SearchNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 39814:
/*!*************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search.actions.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterFacetChangeResultsUpdatedAction: () => (/* binding */ afterFacetChangeResultsUpdatedAction),
/* harmony export */   clearFacetsAction: () => (/* binding */ clearFacetsAction),
/* harmony export */   clearHeaderAction: () => (/* binding */ clearHeaderAction),
/* harmony export */   clearInPageAction: () => (/* binding */ clearInPageAction),
/* harmony export */   getCollectionsAndTagsAction: () => (/* binding */ getCollectionsAndTagsAction),
/* harmony export */   getCollectionsAndTagsSuccessAction: () => (/* binding */ getCollectionsAndTagsSuccessAction),
/* harmony export */   getContentPagesAction: () => (/* binding */ getContentPagesAction),
/* harmony export */   getContentPagesSuccessAction: () => (/* binding */ getContentPagesSuccessAction),
/* harmony export */   getFacetsAction: () => (/* binding */ getFacetsAction),
/* harmony export */   getFacetsSuccessAction: () => (/* binding */ getFacetsSuccessAction),
/* harmony export */   getHardwareAction: () => (/* binding */ getHardwareAction),
/* harmony export */   getHardwareSuccessAction: () => (/* binding */ getHardwareSuccessAction),
/* harmony export */   getSearchResultPageAction: () => (/* binding */ getSearchResultPageAction),
/* harmony export */   getSuggestionsAction: () => (/* binding */ getSuggestionsAction),
/* harmony export */   getSuggestionsSuccessAction: () => (/* binding */ getSuggestionsSuccessAction),
/* harmony export */   getTopResultsSuccessAction: () => (/* binding */ getTopResultsSuccessAction),
/* harmony export */   goToPageFromHeaderAction: () => (/* binding */ goToPageFromHeaderAction),
/* harmony export */   goToResultFromResultsPageAction: () => (/* binding */ goToResultFromResultsPageAction),
/* harmony export */   goToResultsPageAction: () => (/* binding */ goToResultsPageAction),
/* harmony export */   navigateAction: () => (/* binding */ navigateAction),
/* harmony export */   navigateToInPageResultsAction: () => (/* binding */ navigateToInPageResultsAction),
/* harmony export */   selectCollectionAction: () => (/* binding */ selectCollectionAction),
/* harmony export */   selectCollectionSuccessAction: () => (/* binding */ selectCollectionSuccessAction),
/* harmony export */   selectFacetAction: () => (/* binding */ selectFacetAction),
/* harmony export */   selectFacetSuccessAction: () => (/* binding */ selectFacetSuccessAction),
/* harmony export */   selectSuggestionInPageAction: () => (/* binding */ selectSuggestionInPageAction),
/* harmony export */   selectSuggestionItemAction: () => (/* binding */ selectSuggestionItemAction),
/* harmony export */   setActiveCollectionAction: () => (/* binding */ setActiveCollectionAction),
/* harmony export */   setActiveCollectionSuccessAction: () => (/* binding */ setActiveCollectionSuccessAction),
/* harmony export */   setHeaderExpandedAction: () => (/* binding */ setHeaderExpandedAction),
/* harmony export */   setHeaderExpandedSuccessAction: () => (/* binding */ setHeaderExpandedSuccessAction),
/* harmony export */   setInPageInitDataAction: () => (/* binding */ setInPageInitDataAction),
/* harmony export */   setInPageQueryAction: () => (/* binding */ setInPageQueryAction),
/* harmony export */   setInPageQuerySuccessAction: () => (/* binding */ setInPageQuerySuccessAction),
/* harmony export */   setLastUsedComponent: () => (/* binding */ setLastUsedComponent),
/* harmony export */   setPageAction: () => (/* binding */ setPageAction),
/* harmony export */   setPageSuccessAction: () => (/* binding */ setPageSuccessAction),
/* harmony export */   setQueryAction: () => (/* binding */ setQueryAction),
/* harmony export */   setQuerySuccessAction: () => (/* binding */ setQuerySuccessAction),
/* harmony export */   setResultsComponentFoundAction: () => (/* binding */ setResultsComponentFoundAction),
/* harmony export */   setResultsComponentFoundSuccessAction: () => (/* binding */ setResultsComponentFoundSuccessAction),
/* harmony export */   updateFacetsSuccessAction: () => (/* binding */ updateFacetsSuccessAction),
/* harmony export */   updateInPageSuggestionSuccessAction: () => (/* binding */ updateInPageSuggestionSuccessAction),
/* harmony export */   updateSearchResultsAction: () => (/* binding */ updateSearchResultsAction),
/* harmony export */   updateSearchResultsSuccessAction: () => (/* binding */ updateSearchResultsSuccessAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const getContentPagesAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates a search for pages');
const getContentPagesSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get content pages success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getHardwareAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates a search for hardware');
const getHardwareSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get hardware success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getFacetsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates the facets', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getFacetsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates the facets success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectFacetAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select a facet', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearFacetsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] clears all facets', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectFacetSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select a facet success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateFacetsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] update facets success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setActiveCollectionAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] sets collection in store', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setActiveCollectionSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] sets collection success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectCollectionAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select a collection', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectCollectionSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select a collection success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getCollectionsAndTagsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates the collections and tags', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getCollectionsAndTagsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] Initiates the collections and tags success reponse', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setQueryAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] sets query in store', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setQuerySuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get query success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setHeaderExpandedAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] the state of the search header in store', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setHeaderExpandedSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get search header state success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSuggestionsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get suggestions', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSuggestionsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] get suggestions success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectSuggestionItemAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select a suggestion', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getTopResultsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] top results success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearHeaderAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] clears the header state');
const updateSearchResultsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] updates the search results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateSearchResultsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] updates the search results success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSearchResultPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] fetch a new page of search results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToResultFromResultsPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] navigate to a specific page from the results startin from the results page', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToResultsPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] navigate to search results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToPageFromHeaderAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] navigate to a specific page from the results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] navigate to a specific page', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLastUsedComponent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set active component name', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const afterFacetChangeResultsUpdatedAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] after results updated when facets changed');
const setInPageInitDataAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set inpage search init data', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setInPageQueryAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set inpage search query', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setInPageQuerySuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set inpage search query success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateInPageSuggestionSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] update inpage suggestions', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearInPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] clean inpage suggestions and query');
const selectSuggestionInPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] select suggestion inpage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToInPageResultsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] navigate to inpage results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set page for search results', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPageSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set page for search results success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setResultsComponentFoundAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set the results component found parameter', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setResultsComponentFoundSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[search] set the results component found parameter in the reducer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 39222:
/*!*************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search.effects.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchEffects: () => (/* binding */ SearchEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.actions */ 39814);
/* harmony import */ var _services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/search-api-service.provider */ 7907);
/* harmony import */ var _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/elastic-search-service.interface */ 25506);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _search_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.selectors */ 73960);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/analytics.service */ 69575);
/* harmony import */ var _types_action_initiator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types/action-initiator */ 12683);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types/analytics-eventinfo */ 37902);
/* eslint-disable rxjs/no-internal */
















class SearchEffects {
  serviceProvider;
  elasticSearchService;
  actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions);
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store);
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlService);
  analyticsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_service__WEBPACK_IMPORTED_MODULE_10__.AnalyticsService);
  constructor(serviceProvider) {
    this.serviceProvider = serviceProvider;
    this.elasticSearchService = this.serviceProvider.getService();
  }
  setQuery$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setQueryAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setQuerySuccessAction({
    query: action.query
  }))));
  setHeaderExpanded$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setHeaderExpandedAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setHeaderExpandedSuccessAction({
    expanded: action.expanded
  }))));
  setActiveCollection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setActiveCollectionAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setActiveCollectionSuccessAction({
    collection: action.collection
  }))));
  setPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setPageAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setPageSuccessAction({
    page: action.page
  }))));
  initiateContentPagesSearch$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getContentPagesAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([, query]) => this.elasticSearchService.search(query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(searchResults => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getContentPagesSuccessAction({
    searchResults
  }))));
  initiateHardwareSearch$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getHardwareAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([, query]) => this.elasticSearchService.search(query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(searchResults => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getHardwareSuccessAction({
    searchResults
  }))));
  getSuggestions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getSuggestionsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([action, query]) => this.elasticSearchService.getSuggestions(action.query ? action.query : query, action.includeHardwareResults).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(suggestions => ({
    suggestions,
    suggestionsFieldName: action.suggestionsFieldName
  })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getSuggestionsSuccessAction(result))));
  getSuggestionsSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getSuggestionsSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    suggestions,
    suggestionsFieldName
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.selectSuggestionItemAction({
    selected: suggestions[suggestionsFieldName][0],
    byUserAction: false
  }))));
  selectSuggestionItem$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectSuggestionItemAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(args => args.selected ? this.elasticSearchService.getTopResults(args.selected.text) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)({})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(results => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getTopResultsSuccessAction({
    results
  }))));
  selectFacet$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectFacetGroups), (action, facetGroups) => ({
    action,
    facetGroups
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    action,
    facetGroups
  }) => {
    return {
      facetGroups: facetGroups.map((facetsGroup, i) => ({
        ...facetsGroup,
        facets: facetsGroup.facets.map((facet, j) => i === action.groupIndex && j === action.facetIndex ? {
          ...facet,
          selected: !facet.selected
        } : facet)
      })),
      includeHardwareResults: action.includeHardwareResults
    };
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    facetGroups,
    includeHardwareResults
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetSuccessAction({
    facetGroups,
    includeHardwareResults
  }))));
  updateUrlAfterFacetSelection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(action => {
    const facetString = action.facetGroups.filter(facetGroup => facetGroup.facets.find(facet => facet.selected)).map(facetGroup => {
      const facets = facetGroup.facets.filter(f => f.selected).map(f => f.id).join(',');
      return `${facetGroup.title}:${facets}`;
    }).join(';');
    if (facetString) {
      this.urlService.replaceURLParameters([{
        key: 'facets',
        value: facetString
      }]);
    } else {
      this.urlService.removeURLParameters(['facets']);
    }
  })), {
    dispatch: false
  });
  updateFacetsAfterFacetSelection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSearchData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([action, searchData]) => this.elasticSearchService.getFacets(searchData.query, searchData.collection, searchData.tags, action.includeHardwareResults, action.facetGroups)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(facetGroups => _search_actions__WEBPACK_IMPORTED_MODULE_3__.updateFacetsSuccessAction({
    facetGroups
  }))));
  clearFacets$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.clearFacetsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectFacetGroups), (action, facetsGroups) => ({
    action,
    facetsGroups
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    action,
    facetsGroups
  }) => {
    return {
      facetGroups: facetsGroups.map(facetsGroup => ({
        ...facetsGroup,
        facets: facetsGroup.facets.map(facet => ({
          ...facet,
          selected: false
        }))
      })),
      includeHardwareResults: action.includeHardwareResults
    };
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    facetGroups,
    includeHardwareResults
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetSuccessAction({
    facetGroups,
    includeHardwareResults
  }))));
  updateResultsAfterFacetSelection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectFacetSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSearchData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, data]) => this.store.dispatch(_search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsAction({
    query: data.query,
    includeHardwareResults: action.includeHardwareResults,
    collection: data.collection,
    facets: action.facetGroups,
    initiator: _types_action_initiator__WEBPACK_IMPORTED_MODULE_11__.ActionInitiator.FACET_SELECT
  })))), {
    dispatch: false
  });
  initiateFacets$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getFacetsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery), this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectActiveCollection), (action, query, activeCollection) => ({
    action,
    query,
    activeCollection
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({
    action,
    query,
    activeCollection
  }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
    facetGroups: this.elasticSearchService.getFacets(query, activeCollection ? activeCollection : action.collection, action.tags, action.includeHardwareResults, this.urlService.getRequestParameters()['facets'] ? decodeURIComponent(this.urlService.getRequestParameters()['facets']).split(';').map(group => ({
      title: group.split(':')[0],
      facets: group.split(':')[1].split(',').map(facet => ({
        id: facet,
        label: facet,
        selected: true
      }))
    })) : undefined),
    initiator: (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(action.initiator),
    includeHardwareResults: (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(action.includeHardwareResults)
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    facetGroups,
    initiator,
    includeHardwareResults
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getFacetsSuccessAction({
    facetGroups,
    includeHardwareResults,
    initiator
  }))));
  initFacetSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getFacetsSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSearchData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, data]) => this.store.dispatch(_search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsAction({
    query: data.query,
    includeHardwareResults: action.includeHardwareResults,
    collection: data.collection,
    facets: action.facetGroups,
    initiator: action.initiator,
    page: data.page === 0 ? undefined : data.page
  })))), {
    dispatch: false
  });
  initiateCollectionsAndTags$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getCollectionsAndTagsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(args => ({
    facetGroup: {
      title: 'ng.search-results-page.lbl.searchon',
      facets: args.collections.map((collection, index) => ({
        id: collection.value,
        label: collection.text,
        selected: index === 0
      }))
    }
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    facetGroup
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getCollectionsAndTagsSuccessAction({
    collections: facetGroup
  }))));
  selectCollection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectCollectionAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCollections), (action, collections) => ({
    action,
    collections
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    action,
    collections
  }) => {
    return {
      collections: {
        ...collections,
        facets: collections?.facets.map((facet, i) => ({
          ...facet,
          selected: i === action.collectionIndex
        }))
      },
      includeHardwareResults: action.includeHardwareResults
    };
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    collections,
    includeHardwareResults
  }) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.selectCollectionSuccessAction({
    collections,
    includeHardwareResults
  }))));
  updateUrlAfterCollectionSelection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectCollectionSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(action => {
    this.urlService.removeURLParameters(['facets']);
    this.urlService.replaceURLParameters([{
      key: 'collection',
      value: action.collections.facets.find(f => f.selected)?.id ?? ''
    }]);
  })), {
    dispatch: false
  });
  fetchFacetsAfterCollectionSelection$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectCollectionSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInitData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([action, data]) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.getFacetsAction({
    tags: data.tags,
    collection: action.collections.facets.find(facet => facet.selected)?.id ?? '',
    includeHardwareResults: action.includeHardwareResults,
    initiator: _types_action_initiator__WEBPACK_IMPORTED_MODULE_11__.ActionInitiator.FACET_SELECT
  }))));
  afterResultsSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.featureState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, state]) => {
    if (action.initiator === _types_action_initiator__WEBPACK_IMPORTED_MODULE_11__.ActionInitiator.INITIAL_SEARCH) {
      this.analyticsService.sendSearchEvent(state, {
        event: _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_13__.UnifiedSearchEvents.SEARCH,
        strategy: udl__WEBPACK_IMPORTED_MODULE_12__.AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE,
        sendOnSiteSearchResults: true
      });
    } else if (action.initiator === _types_action_initiator__WEBPACK_IMPORTED_MODULE_11__.ActionInitiator.FACET_SELECT) {
      this.analyticsService.sendFilterEvent(state);
    }
  })), {
    dispatch: false
  });
  updateResults$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
    pages: this.elasticSearchService.search(action.query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page, action.collection, action.facets, action.page ? {
      page: action.page,
      size: this.getPageSize(_services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page, 1)
    } : undefined),
    hardware: action.includeHardwareResults ? this.elasticSearchService.search(action.query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware, action.collection, action.facets) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)({}),
    initiator: (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(action.initiator)
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(mergedData => _search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsSuccessAction({
    contentResults: mergedData.pages,
    hardwareResults: mergedData.hardware,
    initiator: mergedData.initiator
  }))));
  getSearchResultPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.getSearchResultPageAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSearchData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(([action, data]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
    pages: this.elasticSearchService.search(data.query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page, data.collection, data.facets, action.resultType === _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page ? {
      page: action.page - 1,
      size: this.getPageSize(_services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.page, data.totalHardware)
    } : undefined),
    hardware: this.elasticSearchService.search(data.query, _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware, data.collection, data.facets, action.resultType === _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware ? {
      page: action.page - 1,
      size: this.getPageSize(_services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware, data.totalHardware)
    } : undefined)
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(results => _search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsSuccessAction({
    contentResults: results.pages,
    hardwareResults: results.hardware
  }))));
  updateUrlAfterSearchResultsUpdate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.updateSearchResultsSuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(action => {
    const contentPage = action.contentResults.page?.current ?? 0;
    const hardwarePage = action.hardwareResults.page?.current ?? 0;
    const page = contentPage > hardwarePage ? contentPage : hardwarePage;
    this.urlService.replaceURLParameters([{
      key: 'page',
      value: `${page + 1}`
    }]);
  })), {
    dispatch: false
  });
  goToResultFromResultsPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.goToResultFromResultsPageAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.featureState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, state]) => {
    this.analyticsService.sendSearchEvent(state, {
      event: _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_13__.UnifiedSearchEvents.RESULT_CLICK,
      strategy: udl__WEBPACK_IMPORTED_MODULE_12__.AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
      sendOnSiteSearchFilter: true,
      sendOnSiteSearchResults: true,
      searchResult: action.searchResultItem
    });
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([action]) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.navigateAction({
    url: action.url
  }))));
  goToResultDirectly$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.goToPageFromHeaderAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.featureState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, state]) => {
    this.analyticsService.sendSearchEvent(state, {
      event: _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_13__.UnifiedSearchEvents.SEARCH,
      strategy: udl__WEBPACK_IMPORTED_MODULE_12__.AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
      sendOnSiteSearchResults: false
    });
    this.analyticsService.sendSearchEvent(state, {
      event: _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_13__.UnifiedSearchEvents.RESULT_CLICK,
      strategy: udl__WEBPACK_IMPORTED_MODULE_12__.AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
      searchResult: action.searchResultItem,
      sendOnSiteSearchResults: false
    });
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([action]) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.navigateAction({
    url: action.url
  }))));
  goToResultsPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.goToResultsPageAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.featureState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([action]) => _search_actions__WEBPACK_IMPORTED_MODULE_3__.navigateAction({
    url: action.url
  }))));
  navigate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.navigateAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(action => this.urlService.redirectTo(action.url))), {
    dispatch: false
  });
  setQueryForInPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setInPageQueryAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setInPageQuerySuccessAction({
    query: action.query,
    includeHardwareResults: action.includeHardwareResults
  }))));
  updateSuggestionAfterSetQueryForInPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setInPageQuerySuccessAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageInitData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(([action, initData]) => this.elasticSearchService.getSuggestions(action.query, action.includeHardwareResults, initData.collection)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(suggestions => _search_actions__WEBPACK_IMPORTED_MODULE_3__.updateInPageSuggestionSuccessAction({
    suggestions
  }))));
  selectSuggestionInPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.selectSuggestionInPageAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action]) => {
    this.urlService.redirectTo(action.url);
  })), {
    dispatch: false
  });
  navigateToInPageResults$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.navigateToInPageResultsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(([action, inPageData]) => {
    const url = this.buildInpageResultsUrl(this.urlService.getOrigin(), inPageData.initData.resultsPageUrl, inPageData.initData.collection, action.query);
    this.urlService.redirectTo(url);
  })), {
    dispatch: false
  });
  setResultsComponentFound$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_search_actions__WEBPACK_IMPORTED_MODULE_3__.setResultsComponentFoundAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(action => _search_actions__WEBPACK_IMPORTED_MODULE_3__.setResultsComponentFoundSuccessAction({
    found: action.found
  }))));
  buildInpageResultsUrl(origin, resultsPageUrl, collection, query) {
    const split = resultsPageUrl.split('?');
    const path = split[0];
    const baseUrl = path.startsWith('http') ? path : `${origin}${path}`;
    const existingQueryParams = split[1] ?? '';
    const urlSearchParams = new URLSearchParams(existingQueryParams);
    urlSearchParams.set('q', query);
    urlSearchParams.set('collection', collection);
    const s = urlSearchParams.toString();
    return `${baseUrl}?${s.replace(/\+/g, '%20')}`;
  }
  getPageSize(resultType, totalHardware) {
    if (resultType === _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_5__.Type.hardware) {
      return 9;
    }
    return totalHardware === 0 ? 10 : 5;
  }
  static ɵfac = function SearchEffects_Factory(t) {
    return new (t || SearchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_4__.SearchApiServiceProvider));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SearchEffects,
    factory: SearchEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74667:
/*!*************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search.reducer.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEARCH_FEATURE_KEY: () => (/* binding */ SEARCH_FEATURE_KEY),
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   searchFeature: () => (/* binding */ searchFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.actions */ 39814);
/* harmony import */ var _search_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.state */ 98578);
/* harmony import */ var _types_search_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/search-types */ 26208);




const SEARCH_FEATURE_KEY = 'searchFeature';
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_search_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setQuerySuccessAction, (state, action) => ({
  ...state,
  query: action.query
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setHeaderExpandedSuccessAction, (state, action) => ({
  ...state,
  headerExpanded: action.expanded
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setPageSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    initData: {
      ...state.resultsPage.initData,
      page: action.page
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getContentPagesSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    searchResults: {
      ...state.resultsPage.searchResults,
      contentPages: action.searchResults
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getHardwareSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    searchResults: {
      ...state.resultsPage.searchResults,
      hardware: action.searchResults
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.goToPageFromHeaderAction, state => ({
  ...state,
  eventData: {
    ...state.eventData,
    queryUsed: state.query
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getSuggestionsSuccessAction, (state, action) => ({
  ...state,
  header: {
    ...state.header,
    suggestions: action.suggestions
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.selectSuggestionItemAction, (state, action) => ({
  ...state,
  eventData: {
    ...state.eventData,
    suggestionUsed: action.byUserAction ? action.selected : undefined,
    queryUsed: state.query,
    searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getTopResultsSuccessAction, (state, action) => ({
  ...state,
  header: {
    ...state.header,
    topResults: action.results
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.clearHeaderAction, state => ({
  ...state,
  eventData: {
    ...state.eventData,
    suggestionUsed: undefined
  },
  header: {
    ...state.header,
    topResults: {
      hits: []
    },
    suggestions: {
      locale: '',
      hits: [],
      asYouType: []
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.updateFacetsSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    facetGroups: action.facetGroups,
    initData: {
      ...state.resultsPage.initData,
      page: 0
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getFacetsSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    facetGroups: action.facetGroups
  },
  initData: {
    ...state.resultsPage.initData,
    page: 0
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getCollectionsAndTagsSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    collections: {
      ...state.resultsPage.collections,
      title: action.collections.title,
      facets: action.collections.facets.map((collection, index) => ({
        id: collection.id,
        label: collection.label,
        selected: state.resultsPage.activeCollection ? collection.id === state.resultsPage.activeCollection : index === 0
      }))
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.selectCollectionSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    collections: action.collections,
    activeCollection: action.collections.facets.find(facet => facet.selected)?.id || '',
    initData: {
      ...state.resultsPage.initData,
      page: 0
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setActiveCollectionSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    activeCollection: action.collection
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.getCollectionsAndTagsAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    initData: {
      ...state.resultsPage.initData,
      collections: action.collections,
      tags: action.tags
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.updateSearchResultsAction, (state, _) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    loading: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.updateSearchResultsSuccessAction, (state, action) => ({
  ...state,
  resultsPage: {
    ...state.resultsPage,
    searchResults: {
      ...state.resultsPage.searchResults,
      hardware: action.hardwareResults,
      contentPages: action.contentResults
    },
    loading: false
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setLastUsedComponent, (state, action) => ({
  ...state,
  eventData: {
    ...state.eventData,
    lastUsedComponent: action.name,
    searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
    queryUsed: state.query
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setInPageInitDataAction, (state, action) => ({
  ...state,
  inPage: {
    ...state.inPage,
    initData: {
      collection: action.collection,
      resultsPageUrl: action.resultsPageUrl
    }
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setInPageQuerySuccessAction, (state, action) => ({
  ...state,
  inPage: {
    ...state.inPage,
    query: action.query
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.updateInPageSuggestionSuccessAction, (state, action) => ({
  ...state,
  inPage: {
    ...state.inPage,
    suggestions: action.suggestions
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.clearInPageAction, state => ({
  ...state,
  inPage: {
    ...state.inPage,
    suggestions: {
      locale: '',
      hits: [],
      asYouType: []
    },
    query: ''
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.navigateToInPageResultsAction, state => ({
  ...state,
  eventData: {
    ...state.eventData,
    lastUsedComponent: _types_search_types__WEBPACK_IMPORTED_MODULE_3__.SearchTypes.INPAGE_SEARCH,
    searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
    queryUsed: state.inPage.query
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.selectSuggestionInPageAction, (state, action) => ({
  ...state,
  eventData: {
    ...state.eventData,
    lastUsedComponent: _types_search_types__WEBPACK_IMPORTED_MODULE_3__.SearchTypes.INPAGE_SEARCH,
    searchOriginatingPageId: window.digitalData?.page.pageInfo.pageID,
    suggestionUsed: action.item,
    queryUsed: state.inPage.query
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_search_actions__WEBPACK_IMPORTED_MODULE_1__.setResultsComponentFoundSuccessAction, (state, action) => ({
  ...state,
  resultsComponentFound: action.found
})));
const searchFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: SEARCH_FEATURE_KEY,
  reducer: reducer
});

/***/ }),

/***/ 73960:
/*!***************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search.selectors.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectActiveCollection: () => (/* binding */ selectActiveCollection),
/* harmony export */   selectAppliedFilters: () => (/* binding */ selectAppliedFilters),
/* harmony export */   selectCollections: () => (/* binding */ selectCollections),
/* harmony export */   selectContentPages: () => (/* binding */ selectContentPages),
/* harmony export */   selectContentPagesPagination: () => (/* binding */ selectContentPagesPagination),
/* harmony export */   selectFacetGroups: () => (/* binding */ selectFacetGroups),
/* harmony export */   selectHardware: () => (/* binding */ selectHardware),
/* harmony export */   selectHardwarePagesPagination: () => (/* binding */ selectHardwarePagesPagination),
/* harmony export */   selectHeaderExpanded: () => (/* binding */ selectHeaderExpanded),
/* harmony export */   selectInPageData: () => (/* binding */ selectInPageData),
/* harmony export */   selectInPageInitData: () => (/* binding */ selectInPageInitData),
/* harmony export */   selectInPageQuery: () => (/* binding */ selectInPageQuery),
/* harmony export */   selectInPageSuggestions: () => (/* binding */ selectInPageSuggestions),
/* harmony export */   selectInitData: () => (/* binding */ selectInitData),
/* harmony export */   selectNumberOfSearchResults: () => (/* binding */ selectNumberOfSearchResults),
/* harmony export */   selectQuery: () => (/* binding */ selectQuery),
/* harmony export */   selectResultsComponentFound: () => (/* binding */ selectResultsComponentFound),
/* harmony export */   selectResultsLoading: () => (/* binding */ selectResultsLoading),
/* harmony export */   selectSearchData: () => (/* binding */ selectSearchData),
/* harmony export */   selectSuggestions: () => (/* binding */ selectSuggestions),
/* harmony export */   selectTopResults: () => (/* binding */ selectTopResults)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.reducer */ 74667);


const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_search_reducer__WEBPACK_IMPORTED_MODULE_1__.SEARCH_FEATURE_KEY);
const selectSuggestions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.header.suggestions);
const selectTopResults = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.header.topResults);
const selectContentPages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => ({
  ...state.resultsPage.searchResults.contentPages,
  hits: state.resultsPage.searchResults.contentPages?.hits?.slice(0, (state.resultsPage.searchResults.hardware?.hits?.length ?? 0) === 0 ? 10 : 5)
}));
const selectHardware = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.searchResults.hardware);
const selectResultsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.loading);
const selectQuery = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.query);
const selectHeaderExpanded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.headerExpanded);
const selectSearchData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => ({
  query: state.query,
  collection: state.resultsPage.collections.facets.find(facet => facet.selected)?.id ?? '',
  facets: state.resultsPage.facetGroups.filter(group => group.facets.find(facet => facet.selected)),
  tags: state.resultsPage.initData.tags,
  totalHardware: state.resultsPage.searchResults.hardware?.page?.total ?? 0,
  totalContentPages: state.resultsPage.searchResults.contentPages?.page?.total ?? 0,
  page: state.resultsPage.initData.page
}));
const selectInitData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.initData);
const selectFacetGroups = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.facetGroups);
const selectCollections = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.collections);
const selectActiveCollection = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsPage.activeCollection);
const selectAppliedFilters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => [state.resultsPage.collections.facets.find(facet => facet.selected)?.label ?? '', ...state.resultsPage.facetGroups.flatMap(group => group.facets.filter(facet => facet.selected).map(facet => facet.label))].filter(Boolean));
const selectNumberOfSearchResults = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => (state.resultsPage.searchResults.contentPages?.page?.total ?? 0) + (state.resultsPage.searchResults.hardware?.page?.total ?? 0));
const selectContentPagesPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => ({
  currentPage: (state.resultsPage.searchResults.contentPages?.page?.current ?? 0) + 1,
  totalNumberOfPages: Math.ceil((state.resultsPage.searchResults.contentPages?.page?.total ?? 0) / ((state.resultsPage.searchResults.hardware?.page?.total ?? 0) === 0 ? 10 : 5))
}));
const selectHardwarePagesPagination = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => ({
  currentPage: (state.resultsPage.searchResults.hardware?.page?.current ?? 0) + 1,
  totalNumberOfPages: Math.ceil((state.resultsPage.searchResults.hardware?.page?.total ?? 0) / 9)
}));
const selectInPageData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.inPage);
const selectInPageInitData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.inPage.initData);
const selectInPageSuggestions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.inPage.suggestions);
const selectInPageQuery = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.inPage.query);
const selectResultsComponentFound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.resultsComponentFound);

/***/ }),

/***/ 98578:
/*!***********************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/+state/search.state.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  query: '',
  resultsComponentFound: false,
  headerExpanded: false,
  eventData: {
    lastUsedComponent: '',
    queryUsed: undefined,
    suggestionUsed: undefined,
    searchOriginatingPageId: undefined
  },
  header: {
    suggestions: {
      locale: '',
      hits: [],
      asYouType: []
    },
    topResults: {
      hits: []
    },
    selectedCollection: '',
    resultsPageUrl: ''
  },
  resultsPage: {
    searchResults: {
      contentPages: {},
      hardware: {
        hits: []
      }
    },
    initData: {
      collections: [],
      tags: [],
      page: 0
    },
    collections: {
      title: '',
      facets: []
    },
    facetGroups: [],
    activeCollection: '',
    loading: true
  },
  inPage: {
    initData: {
      collection: '',
      resultsPageUrl: ''
    },
    query: '',
    selectedSuggestion: undefined,
    suggestions: {
      locale: '',
      hits: [],
      asYouType: []
    }
  }
};

/***/ }),

/***/ 29216:
/*!******************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/badge.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 19826:
/*!*******************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/facets.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 63640:
/*!*************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/product-plan.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 19780:
/*!********************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/product.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5309:
/*!*******************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/search-result-item.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 93495:
/*!***************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/search-results.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73106:
/*!****************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/suggestion-item.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78043:
/*!************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/entities/suggestions.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 15714:
/*!********************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/facade/search-facade.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFacadeService: () => (/* binding */ SearchFacadeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search-api-service.provider */ 7907);
/* harmony import */ var _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/elastic-search-service.interface */ 25506);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_search_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../+state/search.selectors */ 73960);
/* harmony import */ var _state_search_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../+state/search.actions */ 39814);
/* harmony import */ var _types_action_initiator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/action-initiator */ 12683);













class SearchFacadeService {
  serviceProvider;
  urlService;
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store);
  #elasticSearchService;
  query$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery);
  suggestions$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSuggestions);
  headerExpanded$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectHeaderExpanded);
  topResults$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTopResults);
  contentPages$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectContentPages);
  hardware$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectHardware);
  resultsLoading$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectResultsLoading);
  facetsGroups$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectFacetGroups);
  collections$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCollections);
  appliedFilters$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectAppliedFilters);
  numberOfSearchResults$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectNumberOfSearchResults);
  contentPagesPagination$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectContentPagesPagination);
  hardwarePagesPagination$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectHardwarePagesPagination);
  inPageSuggestions$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageSuggestions);
  inPageQuery$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageQuery);
  resultsComponentFound$ = this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectResultsComponentFound);
  constructor(serviceProvider, urlService) {
    this.serviceProvider = serviceProvider;
    this.urlService = urlService;
    this.#elasticSearchService = this.serviceProvider.getService();
  }
  setResultsComponentFound(found) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setResultsComponentFoundAction)({
      found: found
    }));
  }
  setQuery(query) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setQueryAction)({
      query: query
    }));
  }
  setCollection(collection) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setActiveCollectionAction)({
      collection: collection
    }));
  }
  initialSearch(collections, tags, includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.getCollectionsAndTagsAction)({
      collections,
      tags
    }));
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.getFacetsAction)({
      collection: collections[0].value,
      tags,
      includeHardwareResults,
      initiator: _types_action_initiator__WEBPACK_IMPORTED_MODULE_9__.ActionInitiator.INITIAL_SEARCH
    }));
  }
  searchSuggestions(query, suggestionsFieldName, includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.getSuggestionsAction)({
      query,
      suggestionsFieldName,
      includeHardwareResults
    }));
  }
  selectSuggestion(selected) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.selectSuggestionItemAction)({
      selected: selected,
      byUserAction: true
    }));
  }
  clearHeader() {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.clearHeaderAction)());
  }
  selectFacet(groupIndex, facetIndex, includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.selectFacetAction)({
      groupIndex,
      facetIndex,
      includeHardwareResults
    }));
  }
  clearFacets(includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.clearFacetsAction)({
      includeHardwareResults
    }));
  }
  selectCollection(collectionIndex, includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.selectCollectionAction)({
      collectionIndex,
      includeHardwareResults
    }));
  }
  selectContentPagesPage(page) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.getSearchResultPageAction)({
      page,
      resultType: _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_4__.Type.page
    }));
  }
  selectHardwarePage(page) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.getSearchResultPageAction)({
      page,
      resultType: _services_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_4__.Type.hardware
    }));
  }
  setInputParameters(searchResultsCollection, searchResultsPage, brand, language) {
    this.#elasticSearchService.setInputParameters(searchResultsCollection, searchResultsPage, brand, language);
  }
  getSearchResultsCollection = () => this.#elasticSearchService.getSearchResultsCollection();
  getSearchResultsPage = () => this.#elasticSearchService.getSearchResultsPage();
  getSearchResultsPageUrl(query) {
    if (query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.getPathWithQueryParams(this.getSearchResultsPage(), this.getSearchResultsCollection(), query));
    }
    return this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(query => this.getPathWithQueryParams(this.getSearchResultsPage(), this.getSearchResultsCollection(), query)));
  }
  postClick(searchResultId, brand, locale) {
    this.#elasticSearchService.postClick(searchResultId, brand, locale);
  }
  getPathWithQueryParams(resultsPageUrl, collection, query) {
    const split = resultsPageUrl.split('?');
    const path = split[0];
    const baseUrl = path.startsWith('http') ? path : `${this.urlService.getOrigin()}${path}`;
    const existingQueryParams = split[1] ?? '';
    const urlSearchParams = new URLSearchParams(existingQueryParams);
    urlSearchParams.set('q', query);
    urlSearchParams.set('collection', collection);
    const s = urlSearchParams.toString();
    return `${baseUrl}?${s.replaceAll('+', '%20')}`;
  }
  goToResultsPage(url) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.goToResultsPageAction)({
      url
    }));
  }
  goToResult(url, searchResultItem) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.goToPageFromHeaderAction)({
      url,
      searchResultItem
    }));
  }
  goToResultFromResultsPage(url, searchResultItem) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.goToResultFromResultsPageAction)({
      url,
      searchResultItem
    }));
  }
  setLastUsedComponent(componentName) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setLastUsedComponent)({
      name: componentName
    }));
  }
  initInPage(collection, resultsPageUrl) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setInPageInitDataAction)({
      collection,
      resultsPageUrl
    }));
  }
  setQueryForInPage(query, includeHardwareResults) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setInPageQueryAction)({
      query,
      includeHardwareResults
    }));
  }
  clearInPage() {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.clearInPageAction)());
  }
  selectSuggestionInPage(item, urlToNavigateTo) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.selectSuggestionInPageAction)({
      item,
      url: urlToNavigateTo
    }));
  }
  getSearchResultsPageForInPage(query) {
    return this.store.select(_state_search_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInPageInitData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => this.getPathWithQueryParams(data.resultsPageUrl, data.collection, query)));
  }
  navigateToInPageResults(query) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.navigateToInPageResultsAction)({
      query
    }));
  }
  setPage(page) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setPageAction)({
      page: page - 1
    }));
  }
  getResultsComponentFound() {
    return this.resultsComponentFound$;
  }
  redirectOrUpdateSearchResultsPage(url, includeHardwareResults) {
    return this.getResultsComponentFound().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(found => {
      if (found) {
        this.clearFacets(includeHardwareResults);
        const params = this.urlService.getParameters(url);
        for (const [key, value] of params) {
          this.urlService.replaceURLParameters([{
            key,
            value
          }]);
        }
      } else if (url) {
        this.goToResultsPage(url);
      }
    }));
  }
  setHeaderExpanded(headerExpanded) {
    this.store.dispatch((0,_state_search_actions__WEBPACK_IMPORTED_MODULE_8__.setHeaderExpandedAction)({
      expanded: headerExpanded
    }));
  }
  getHeaderExpanded() {
    return this.headerExpanded$;
  }
  getBrand() {
    return this.#elasticSearchService.getBrand();
  }
  getLanguage() {
    return this.#elasticSearchService.getLanguage();
  }
  static ɵfac = function SearchFacadeService_Factory(t) {
    return new (t || SearchFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_3__.SearchApiServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SearchFacadeService,
    factory: SearchFacadeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 59957:
/*!*********************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticSearchService: () => (/* reexport safe */ _services_elastic_search_service__WEBPACK_IMPORTED_MODULE_4__.ElasticSearchService),
/* harmony export */   HardwarePlanService: () => (/* reexport safe */ _services_hardware_plan_service__WEBPACK_IMPORTED_MODULE_5__.HardwarePlanService),
/* harmony export */   KeyboardNavigationDirective: () => (/* reexport safe */ _keyboard_navigation_directive__WEBPACK_IMPORTED_MODULE_1__.KeyboardNavigationDirective),
/* harmony export */   KeyboardNavigationService: () => (/* reexport safe */ _services_keyboard_navigation_service__WEBPACK_IMPORTED_MODULE_2__.KeyboardNavigationService),
/* harmony export */   SEARCH_FEATURE_KEY: () => (/* reexport safe */ _state_search_reducer__WEBPACK_IMPORTED_MODULE_19__.SEARCH_FEATURE_KEY),
/* harmony export */   SearchApiServiceProvider: () => (/* reexport safe */ _services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_3__.SearchApiServiceProvider),
/* harmony export */   SearchEffects: () => (/* reexport safe */ _state_search_effects__WEBPACK_IMPORTED_MODULE_18__.SearchEffects),
/* harmony export */   SearchFacadeService: () => (/* reexport safe */ _facade_search_facade_service__WEBPACK_IMPORTED_MODULE_0__.SearchFacadeService),
/* harmony export */   SearchNgrxModule: () => (/* reexport safe */ _state_search_ngrx_module__WEBPACK_IMPORTED_MODULE_16__.SearchNgrxModule),
/* harmony export */   SearchTypes: () => (/* reexport safe */ _types_search_types__WEBPACK_IMPORTED_MODULE_7__.SearchTypes),
/* harmony export */   afterFacetChangeResultsUpdatedAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.afterFacetChangeResultsUpdatedAction),
/* harmony export */   clearFacetsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.clearFacetsAction),
/* harmony export */   clearHeaderAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.clearHeaderAction),
/* harmony export */   clearInPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.clearInPageAction),
/* harmony export */   defaultState: () => (/* reexport safe */ _state_search_state__WEBPACK_IMPORTED_MODULE_21__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.featureState),
/* harmony export */   getCollectionsAndTagsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getCollectionsAndTagsAction),
/* harmony export */   getCollectionsAndTagsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getCollectionsAndTagsSuccessAction),
/* harmony export */   getContentPagesAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getContentPagesAction),
/* harmony export */   getContentPagesSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getContentPagesSuccessAction),
/* harmony export */   getFacetsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getFacetsAction),
/* harmony export */   getFacetsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getFacetsSuccessAction),
/* harmony export */   getHardwareAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getHardwareAction),
/* harmony export */   getHardwareSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getHardwareSuccessAction),
/* harmony export */   getSearchResultPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getSearchResultPageAction),
/* harmony export */   getSuggestionsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getSuggestionsAction),
/* harmony export */   getSuggestionsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getSuggestionsSuccessAction),
/* harmony export */   getTopResultsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.getTopResultsSuccessAction),
/* harmony export */   goToPageFromHeaderAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.goToPageFromHeaderAction),
/* harmony export */   goToResultFromResultsPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.goToResultFromResultsPageAction),
/* harmony export */   goToResultsPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.goToResultsPageAction),
/* harmony export */   navigateAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.navigateAction),
/* harmony export */   navigateToInPageResultsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.navigateToInPageResultsAction),
/* harmony export */   provideSearchDomain: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_22__.provideSearchDomain),
/* harmony export */   reducer: () => (/* reexport safe */ _state_search_reducer__WEBPACK_IMPORTED_MODULE_19__.reducer),
/* harmony export */   searchFeature: () => (/* reexport safe */ _state_search_reducer__WEBPACK_IMPORTED_MODULE_19__.searchFeature),
/* harmony export */   selectActiveCollection: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectActiveCollection),
/* harmony export */   selectAppliedFilters: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectAppliedFilters),
/* harmony export */   selectCollectionAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectCollectionAction),
/* harmony export */   selectCollectionSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectCollectionSuccessAction),
/* harmony export */   selectCollections: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectCollections),
/* harmony export */   selectContentPages: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectContentPages),
/* harmony export */   selectContentPagesPagination: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectContentPagesPagination),
/* harmony export */   selectFacetAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectFacetAction),
/* harmony export */   selectFacetGroups: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectFacetGroups),
/* harmony export */   selectFacetSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectFacetSuccessAction),
/* harmony export */   selectHardware: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectHardware),
/* harmony export */   selectHardwarePagesPagination: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectHardwarePagesPagination),
/* harmony export */   selectHeaderExpanded: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectHeaderExpanded),
/* harmony export */   selectInPageData: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectInPageData),
/* harmony export */   selectInPageInitData: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectInPageInitData),
/* harmony export */   selectInPageQuery: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectInPageQuery),
/* harmony export */   selectInPageSuggestions: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectInPageSuggestions),
/* harmony export */   selectInitData: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectInitData),
/* harmony export */   selectNumberOfSearchResults: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectNumberOfSearchResults),
/* harmony export */   selectQuery: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectQuery),
/* harmony export */   selectResultsComponentFound: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectResultsComponentFound),
/* harmony export */   selectResultsLoading: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectResultsLoading),
/* harmony export */   selectSearchData: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectSearchData),
/* harmony export */   selectSuggestionInPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectSuggestionInPageAction),
/* harmony export */   selectSuggestionItemAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.selectSuggestionItemAction),
/* harmony export */   selectSuggestions: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectSuggestions),
/* harmony export */   selectTopResults: () => (/* reexport safe */ _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__.selectTopResults),
/* harmony export */   setActiveCollectionAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setActiveCollectionAction),
/* harmony export */   setActiveCollectionSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setActiveCollectionSuccessAction),
/* harmony export */   setHeaderExpandedAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setHeaderExpandedAction),
/* harmony export */   setHeaderExpandedSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setHeaderExpandedSuccessAction),
/* harmony export */   setInPageInitDataAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setInPageInitDataAction),
/* harmony export */   setInPageQueryAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setInPageQueryAction),
/* harmony export */   setInPageQuerySuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setInPageQuerySuccessAction),
/* harmony export */   setLastUsedComponent: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setLastUsedComponent),
/* harmony export */   setPageAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setPageAction),
/* harmony export */   setPageSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setPageSuccessAction),
/* harmony export */   setQueryAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setQueryAction),
/* harmony export */   setQuerySuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setQuerySuccessAction),
/* harmony export */   setResultsComponentFoundAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setResultsComponentFoundAction),
/* harmony export */   setResultsComponentFoundSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.setResultsComponentFoundSuccessAction),
/* harmony export */   updateFacetsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.updateFacetsSuccessAction),
/* harmony export */   updateInPageSuggestionSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.updateInPageSuggestionSuccessAction),
/* harmony export */   updateSearchResultsAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.updateSearchResultsAction),
/* harmony export */   updateSearchResultsSuccessAction: () => (/* reexport safe */ _state_search_actions__WEBPACK_IMPORTED_MODULE_17__.updateSearchResultsSuccessAction)
/* harmony export */ });
/* harmony import */ var _facade_search_facade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/search-facade.service */ 15714);
/* harmony import */ var _keyboard_navigation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-navigation.directive */ 9538);
/* harmony import */ var _services_keyboard_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/keyboard-navigation.service */ 40569);
/* harmony import */ var _services_search_api_service_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/search-api-service.provider */ 7907);
/* harmony import */ var _services_elastic_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/elastic-search.service */ 46800);
/* harmony import */ var _services_hardware_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/hardware-plan.service */ 59751);
/* harmony import */ var _types_badge_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/badge-color */ 65587);
/* harmony import */ var _types_search_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/search-types */ 26208);
/* harmony import */ var _entities_suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities/suggestions */ 78043);
/* harmony import */ var _entities_suggestion_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities/suggestion-item */ 73106);
/* harmony import */ var _entities_search_results__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entities/search-results */ 93495);
/* harmony import */ var _entities_search_result_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entities/search-result-item */ 5309);
/* harmony import */ var _entities_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/badge */ 29216);
/* harmony import */ var _entities_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./entities/product */ 19780);
/* harmony import */ var _entities_facets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entities/facets */ 19826);
/* harmony import */ var _entities_product_plan__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/product-plan */ 63640);
/* harmony import */ var _state_search_ngrx_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./+state/search-ngrx.module */ 43655);
/* harmony import */ var _state_search_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./+state/search.actions */ 39814);
/* harmony import */ var _state_search_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./+state/search.effects */ 39222);
/* harmony import */ var _state_search_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./+state/search.reducer */ 74667);
/* harmony import */ var _state_search_selectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./+state/search.selectors */ 73960);
/* harmony import */ var _state_search_state__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./+state/search.state */ 98578);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./providers */ 26112);
























/***/ }),

/***/ 9538:
/*!*********************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/keyboard-navigation.directive.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardNavigationDirective: () => (/* binding */ KeyboardNavigationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_keyboard_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/keyboard-navigation.service */ 40569);




class KeyboardNavigationDirective {
  el;
  keyboardNavigationService;
  wrapper;
  focusedList;
  focusedElement;
  downKeyPressCount = 0; // Add this counter to your component
  ARROW_UP = 'ArrowUp';
  ARROW_DOWN = 'ArrowDown';
  TAB = 'Tab';
  suggestions;
  suggestionsFieldName;
  constructor(el, keyboardNavigationService) {
    this.el = el;
    this.keyboardNavigationService = keyboardNavigationService;
  }
  ngAfterViewChecked() {
    this.wrapper = this.el.nativeElement;
    this.focusedList = this.keyboardNavigationService.getFocusedList() ?? this.wrapper.firstChild;
    this.focusedElement = this.keyboardNavigationService.getFocusedElement() ?? this.focusedList.querySelector('li');
  }
  handleKeyboardEvent(event) {
    this.handleTab(event);
    this.handleArrowKeys(event);
  }
  handleTab(event) {
    if (event.key === this.TAB) {
      event.preventDefault();
      const currentIndex = Array.from(this.wrapper.children).indexOf(this.focusedList);
      const nextIndex = (currentIndex + 1) % this.wrapper.children.length;
      this.keyboardNavigationService.setFocusedList(this.wrapper.children[nextIndex]);
      this.keyboardNavigationService.setFocusedElement(this.wrapper.children[nextIndex].querySelector('li'));
    }
  }
  handleArrowKeys(event) {
    if (event.key === this.ARROW_UP || event.key === this.ARROW_DOWN) {
      event.preventDefault();
      const listItems = this.focusedList?.querySelectorAll('li');
      const currentIndex = Array.from(listItems).indexOf(this.focusedElement);
      let nextIndex = currentIndex;
      if (event.key === this.ARROW_UP) {
        nextIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      } else if (event.key === this.ARROW_DOWN) {
        if (this.downKeyPressCount >= 1) {
          nextIndex = (currentIndex + 1) % listItems.length;
        } else {
          this.downKeyPressCount++;
        }
      }
      const nextElement = listItems[nextIndex];
      if (nextElement) {
        this.keyboardNavigationService.setFocusedElement(nextElement);
      }
    }
  }
  static ɵfac = function KeyboardNavigationDirective_Factory(t) {
    return new (t || KeyboardNavigationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keyboard_navigation_service__WEBPACK_IMPORTED_MODULE_1__.KeyboardNavigationService));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: KeyboardNavigationDirective,
    selectors: [["", "tgFoundationGeneralSearchKeyboardNavigationDirective", ""]],
    hostBindings: function KeyboardNavigationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeyboardNavigationDirective_keydown_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      suggestions: "suggestions",
      suggestionsFieldName: "suggestionsFieldName"
    },
    standalone: true
  });
}

/***/ }),

/***/ 26112:
/*!*************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/providers.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideSearchDomain: () => (/* binding */ provideSearchDomain)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_search_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/search.effects */ 39222);
/* harmony import */ var _state_search_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/search.reducer */ 74667);





function provideSearchDomain() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_state_search_reducer__WEBPACK_IMPORTED_MODULE_4__.searchFeature)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature([_state_search_effects__WEBPACK_IMPORTED_MODULE_3__.SearchEffects]))];
}

/***/ }),

/***/ 69575:
/*!******************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/analytics.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/analytics-eventinfo */ 37902);





class AnalyticsService {
  window;
  datalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__.DataLayerService);
  constructor(window) {
    this.window = window;
  }
  isBusinessPage(pagePath) {
    const pattern = /business\/(en|nl|fr)/;
    return pattern.test(pagePath);
  }
  createPageID(pagePath) {
    let path = pagePath;
    if (pagePath && pagePath.startsWith('http')) {
      path = new URL(pagePath).pathname;
    }
    if (path.startsWith('/content')) {
      path = path.split('/').slice(4).join('/');
    }
    if (this.isBusinessPage(pagePath)) {
      return `business/${path}`;
    }
    return path;
  }
  getHitsFromResults(searchResults) {
    return [...(searchResults.contentPages?.hits || []), ...(searchResults.hardware?.hits || [])];
  }
  getContentId(searchResult) {
    if (searchResult.type === 'page') {
      return this.createPageID(searchResult.url);
    } else if (searchResult.type === 'product') {
      return searchResult.name;
    }
    return undefined;
  }
  getContentIds(searchResults) {
    const hits = this.getHitsFromResults(searchResults);
    return hits?.map(hit => this.getContentId(hit)).filter(_ => !!_) || [];
  }
  getLastSuggestionClicked(searchState) {
    if (searchState.eventData.suggestionUsed) {
      return searchState.eventData.suggestionUsed?.text;
    }
    return 'No suggestion clicked';
  }
  getTotalHits(searchResults) {
    const contentPagesTotal = searchResults.contentPages?.page?.total;
    const hardwareTotal = searchResults.hardware?.page?.total;
    if (contentPagesTotal === undefined && hardwareTotal === undefined) {
      return undefined;
    }
    const total = (contentPagesTotal ?? 0) + (hardwareTotal ?? 0);
    return total.toString();
  }
  getSearchAttributesFromState(searchState) {
    return {
      itemName: searchState.eventData.lastUsedComponent,
      onsiteSearchTerm: searchState.eventData.queryUsed,
      onsiteSearchOrigination: searchState.eventData.searchOriginatingPageId || this.window.digitalData?.page.pageInfo.pageID,
      itemData: this.getLastSuggestionClicked(searchState)
    };
  }
  sendSearchEvent(searchState, eventInfoData) {
    const eventInfo = this.datalayerService.createEventInfo(eventInfoData.event.name, eventInfoData.event.type);
    const attributes = this.getSearchAttributesFromState(searchState);
    if (eventInfoData.sendOnSiteSearchFilter) {
      attributes.onsiteSearchFilter = this.createFilterString(searchState.resultsPage.facetGroups, searchState.resultsPage.collections);
    }
    if (eventInfoData.sendOnSiteSearchResults) {
      attributes.onsiteSearchResults = this.getTotalHits(searchState.resultsPage.searchResults) || '';
      attributes.onsiteSearchResultsID = this.getContentIds(searchState.resultsPage.searchResults).join(',');
    }
    if (eventInfoData.searchResult) {
      attributes.cardId = this.getContentId(eventInfoData.searchResult);
    }
    this.datalayerService.sendEvent({
      eventInfo,
      attributes,
      strategy: eventInfoData.strategy
    });
  }
  hasFacetsSelected(facetGroup) {
    return facetGroup.facets.some(facet => facet.selected);
  }
  createFilterString(facetGroups, collections) {
    const facets = facetGroups.filter(this.hasFacetsSelected).map(group => group.title + ':' + group.facets.filter(facet => facet.selected).map(facet => facet.id).join(',')).join('|');
    const activeCollection = 'search-on:' + collections.facets.find(facet => facet.selected)?.id;
    if (!facets) {
      return activeCollection;
    }
    return `${activeCollection}|${facets}`;
  }
  sendFilterEvent(searchState) {
    this.sendSearchEvent(searchState, {
      event: _types_analytics_eventinfo__WEBPACK_IMPORTED_MODULE_3__.UnifiedSearchEvents.FILTER,
      sendOnSiteSearchFilter: true,
      sendOnSiteSearchResults: true,
      strategy: udl__WEBPACK_IMPORTED_MODULE_1__.AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE
    });
  }
  static ɵfac = function AnalyticsService_Factory(t) {
    return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window'));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnalyticsService,
    factory: AnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 25506:
/*!*********************************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/elastic-search-service.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Type: () => (/* binding */ Type)
/* harmony export */ });
var Type;
(function (Type) {
  Type["hardware"] = "product";
  Type["page"] = "page";
})(Type || (Type = {}));

/***/ }),

/***/ 46800:
/*!***********************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/elastic-search.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticSearchService: () => (/* binding */ ElasticSearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elastic-search-service.interface */ 25506);




class ElasticSearchService {
  http;
  searchApiUrl;
  options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
  };
  #searchResultsCollection = '';
  #searchResultsPage = '';
  #brand = '';
  #language = '';
  constructor(http, searchApiUrl = 'url') {
    this.http = http;
    this.searchApiUrl = searchApiUrl;
  }
  setInputParameters(searchResultsCollection, searchResultsPage, brand, language) {
    this.#searchResultsCollection = searchResultsCollection ? searchResultsCollection : this.#searchResultsCollection;
    this.#searchResultsPage = searchResultsPage ? searchResultsPage : this.#searchResultsPage;
    this.#brand = brand;
    this.#language = language;
  }
  search(query, type, collection, facets, pagination) {
    const document = this.buildSearchDocument(query, [type], pagination ? pagination.size : this.getPageSize(type), collection, facets, pagination ? pagination.page : 0);
    return this.http.post(`${this.searchApiUrl}/search`, document, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => result));
  }
  postClick(searchResultId, brand, locale) {
    this.http.post(`${this.searchApiUrl}/clicks/${searchResultId}/${brand}/${locale}`, {}, this.options).subscribe();
    sessionStorage.removeItem('searchResultId');
  }
  getSuggestions(searchQuery, includeHardwareResults, collection) {
    const document = this.buildSuggestionsDocument(searchQuery, includeHardwareResults, collection);
    return this.http.post(`${this.searchApiUrl}/suggestions`, document, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => result));
  }
  getTopResults(suggestion) {
    const document = this.buildSearchDocument(suggestion, [_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page, _elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.hardware], 5);
    return this.http.post(`${this.searchApiUrl}/search`, document, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => result));
  }
  getFacets(query, collection, tags, includeHardwareResults, facets) {
    const req = this.buildFacetsDocument(query, tags, collection, includeHardwareResults, facets);
    const facetNames = tags.map(t => `tags.${t}`);
    return this.http.post(`${this.searchApiUrl}/facets`, req, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(error);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(tags => tags.filter(tag => tag.items.length > 0).map(tag => ({
      title: tag.name,
      facets: tag.items.map(item => ({
        id: item.value,
        label: `${tag.id}.${item.value.replace('/', '.')}`,
        count: item.count,
        selected: this.isFacetSelected(tag.name, item.value, facets)
      }))
    })).sort((a, b) => {
      const indexA = facetNames.indexOf(a.title) !== -1 ? facetNames.indexOf(a.title) : Number.MAX_VALUE;
      const indexB = facetNames.indexOf(b.title) !== -1 ? facetNames.indexOf(b.title) : Number.MAX_VALUE;
      return indexA < indexB ? -1 : 1;
    })));
  }
  isFacetSelected(tagName, tagItemName, facets) {
    return facets?.find(group => group.title === tagName)?.facets.find(facet => facet.id === tagItemName)?.selected ?? false;
  }
  buildFacetsDocument(query, tags, collection, includeHardwareResults, facets) {
    return {
      brand: this.#brand,
      query: query,
      facets: tags.map(tag => ({
        value: 'tags.' + tag
      })),
      filters: this.getFilters(includeHardwareResults ? [_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page, _elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.hardware] : [_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page], collection, facets),
      locale: this.#language,
      page: 0,
      size: 100
    };
  }
  getSearchResultsCollection = () => this.#searchResultsCollection;
  getSearchResultsPage = () => this.#searchResultsPage;
  getLanguage = () => this.#language;
  getBrand = () => this.#brand;
  buildSuggestionsDocument(query, includeHardwareResults, collection) {
    return {
      locale: this.#language,
      brand: this.#brand,
      query: query,
      blacklist: true,
      size: 5,
      page: 0,
      filters: this.getFilters(includeHardwareResults ? [_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page, _elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.hardware] : [_elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page], collection)
    };
  }
  buildSearchDocument(query, types, size = 5, collection, facets, page = 0) {
    return {
      query: query,
      searchFields: ['name', 'content', 'tags'],
      filters: this.getFilters(types, collection, facets),
      locale: this.#language,
      brand: this.#brand,
      size: size,
      resultFields: [{
        value: 'id'
      }, {
        value: 'url'
      }, {
        value: 'name'
      }, {
        value: 'content',
        snippetSize: 200
      }, {
        value: 'tags'
      }, {
        value: 'type'
      }],
      highlight: true,
      keymatches: true,
      page: page,
      sortByPopularity: true
    };
  }
  getFilters(types, collection, facets) {
    const filters = facets ? facets.map(group => ({
      name: group.title,
      values: group.facets.filter(facet => facet.selected).map(facet => facet.id)
    })).filter(filter => filter.values.length !== 0) : [];
    return {
      logicalFiltersOperator: 'AND',
      logicalFilters: [{
        queryValueFilters: [...filters, {
          name: 'type',
          values: types
        }, {
          name: 'collection.id',
          values: [collection ? collection : this.#searchResultsCollection]
        }],
        queryRangeFilters: []
      }]
    };
  }
  getPageSize(type) {
    return type === _elastic_search_service_interface__WEBPACK_IMPORTED_MODULE_3__.Type.page ? 10 : 9;
  }
}

/***/ }),

/***/ 59751:
/*!**********************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/hardware-plan.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwarePlanService: () => (/* binding */ HardwarePlanService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/lastValueFrom */ 51236);
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/from */ 56231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);





class HardwarePlanService {
  http;
  cache = new Map();
  constructor(http) {
    this.http = http;
  }
  getHardwarePlan(url) {
    if (!this.cache.has(url)) {
      this.cache.set(url, (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.http.get(url)));
    }
    return (0,rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3__.from)(this.cache.get(url));
  }
  static ɵfac = function HardwarePlanService_Factory(t) {
    return new (t || HardwarePlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HardwarePlanService,
    factory: HardwarePlanService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 40569:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/keyboard-navigation.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardNavigationService: () => (/* binding */ KeyboardNavigationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class KeyboardNavigationService {
  focusedList = null;
  focusedElement = null;
  setFocusedList(element) {
    this.focusedList = element;
  }
  getFocusedList() {
    return this.focusedList;
  }
  setFocusedElement(element) {
    this.focusedElement = element;
    this.focusedElement?.querySelector('a')?.focus();
  }
  getFocusedElement() {
    return this.focusedElement;
  }
  static ɵfac = function KeyboardNavigationService_Factory(t) {
    return new (t || KeyboardNavigationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: KeyboardNavigationService,
    factory: KeyboardNavigationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60187:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/mock-elastic-search.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockElasticSearchService: () => (/* binding */ MockElasticSearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__);


class MockElasticSearchService {
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__.LogFactory.createLogger(MockElasticSearchService);
  _searchResultsCollection = '';
  _searchResultsPage = '';
  _brand = '';
  _language = '';
  search(query, type, collection, facets, pagination) {
    MockElasticSearchService.LOG.logInfo(`SearchQuery is ${query} and type is ${type} and collection is ${collection} and facets are ${facets} and pagination is ${pagination} and brand is ${this._brand} and language is ${this._language}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
  }
  getSuggestions(searchQuery, includeHardwareResults, collection) {
    MockElasticSearchService.LOG.logInfo(`SearchQuery is ${searchQuery}, includeHardwareResults: ${includeHardwareResults}, Collection: ${collection}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.buildMockSuggestions());
  }
  getTopResults(suggestion) {
    MockElasticSearchService.LOG.logInfo(`SearchQuery is ${suggestion}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.buildMockResults());
  }
  getFacets(query, collection, tags) {
    MockElasticSearchService.LOG.logInfo(`Facets for query: ${query} collection: ${collection} tags: ${tags}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.buildMockTags());
  }
  buildMockTags() {
    return [{
      title: 'tags.subject',
      facets: [{
        id: 'tv-and-entertainment',
        label: 'tags.subject.tv-and-entertainment',
        count: 22,
        selected: false
      }, {
        id: 'bill',
        label: 'tags.subject.bill',
        count: 22,
        selected: false
      }, {
        id: 'mobile-and-fixed',
        label: 'tags.subject.mobile-and-fixed',
        count: 22,
        selected: false
      }, {
        id: 'internet',
        label: 'tags.subject.internet',
        count: 17,
        selected: false
      }, {
        id: 'change-your-information',
        label: 'tags.subject.change-your-information',
        count: 7,
        selected: false
      }, {
        id: 'interruptions',
        label: 'tags.subject.interruptions',
        count: 3,
        selected: false
      }, {
        id: 'general',
        label: 'tags.subject.general',
        count: 1,
        selected: false
      }]
    }, {
      title: 'tags.category',
      facets: [{
        id: 'devices',
        label: 'tags.category.devices',
        count: 373,
        selected: false
      }, {
        id: 'support',
        label: 'tags.category.support',
        count: 87,
        selected: false
      }, {
        id: 'products',
        label: 'tags.category.products',
        count: 9,
        selected: false
      }, {
        id: 'my-services',
        label: 'tags.category.my-services',
        count: 3,
        selected: false
      }, {
        id: 'inspiration',
        label: 'tags.category.inspiration',
        count: 1,
        selected: false
      }]
    }, {
      title: 'tags.type',
      facets: []
    }];
  }
  setInputParameters(searchResultsCollection, searchResultsPage, brand, language) {
    this._searchResultsCollection = searchResultsCollection;
    this._searchResultsPage = searchResultsPage;
    this._brand = brand;
    this._language = language;
  }
  postClick(searchResultId, brand, locale) {
    MockElasticSearchService.LOG.logInfo(`SearchResultId is ${searchResultId} and brand is ${brand} and locale is ${locale}`);
  }
  get searchResultsCollection() {
    return this._searchResultsCollection;
  }
  get searchResultsPage() {
    return this._searchResultsPage;
  }
  getBrand() {
    return this._brand;
  }
  getLanguage() {
    return this._language;
  }
  getSearchResultsCollection = () => this.searchResultsCollection;
  getSearchResultsPage = () => this.searchResultsPage;
  buildMockSuggestions() {
    return {
      locale: 'nl',
      hits: [{
        text: 'iPhone 11 2020',
        highlight: 'iPhone <em>11 2020</em>'
      }, {
        text: 'iPhone 12',
        highlight: 'iPhone <em>12</em>'
      }, {
        text: 'iPhone 12 Pro',
        highlight: 'iPhone <em>12 Pro</em>'
      }, {
        text: 'iPhone 13',
        highlight: 'iPhone <em>13</em>'
      }, {
        text: 'iPhone 13 mini',
        highlight: 'iPhone <em>13 mini</em>'
      }]
    };
  }
  buildMockResults() {
    return {
      hits: [{
        type: 'product',
        url: null,
        displayUrl: '/inpage-search',
        mimeType: null,
        name: 'Minimodem',
        content: 'ZTE Mini<em>modem</em>',
        product: {
          id: '2101384',
          brand: 'ZTE',
          color: [],
          image: 'https://735280384762-pim-prod-akeneo.s3.eu-central-1.amazonaws.com/a/9/2/8/a92879618817d2ed812f68b5e966a33c0dffcd44_2101384.hr.png',
          plan: null,
          originalPrice: 65.0,
          discountedPrice: 65.0,
          tags: []
        },
        tags: [{
          name: 'category',
          value: ['devices']
        }]
      }, {
        type: 'page',
        url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/telenet-apps/apparaten/apparaten',
        displayUrl: 'https://www.int.telenet.be/residential/nl/klantenservice/telenet-apps/apparaten/apparaten',
        name: 'Modem',
        content: 'Test <em>Modem</em> Algemeen Algemeen Bestellen Bestellen Installeren Installeren Probleem oplossen Probleem oplossen',
        tags: [{
          name: 'subject',
          value: ['telenet-residential-support/general']
        }, {
          name: 'category',
          value: ['support']
        }]
      }, {
        type: 'page',
        url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/internet/je-wifi/hoe-mijn-draadloos-internet-instellen',
        displayUrl: 'https://www.int.telenet.be/residential/nl/klantenservice/internet/je-wifi/hoe-mijn-draadloos-internet-instellen',
        name: 'Hoe mijn draadloos internet instellen?',
        content: 'Instellingen wireless <em>modem</em> aanpassen? Instellingen met hangslotje aanpassen? Wil je zelf een aantal instellingen aanpassen? Dat kan bij <em>Modeminstellingen</em>. Algemene instellingen De algemene instellingen zijn standaard ingesteld. Je kan het draadloos signaal, persoonlijke wifi en Wi-Free aan- of uitzetten. <em>Modemtesten</em> De beschikbare <em>modemtesten</em>',
        product: {},
        tags: [{
          name: 'subject',
          value: ['telenet-residential-support/internet']
        }, {
          name: 'category',
          value: ['support']
        }]
      }, {
        type: 'page',
        url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/netwerk-en-kwaliteit/ihc/ihc-modem',
        displayUrl: 'https://www.int.telenet.be/residential/nl/netwerk-en-kwaliteit/ihc/ihc-modem',
        name: 'ihc-modem',
        content: 'Jouw <em>modem</em> is het startpunt van je nieuwe thuisnetwerk. Raakt je wifi vandaag niet overal in huis? Dan zorgt 360° Wifi ervoor dat je naadloos verbonden bent, tot in elk hoekje waar jij wifi wil. Het vormt een zelfregulerend, slim netwerk. Zo heb je overal in huis stabiel en razendsnel internet, aangepast aan wat je op dat moment nodig hebt',
        product: {},
        tags: []
      }, {
        type: 'page',
        url: 'https://www.int.telenet.be/content/www-telenet-touch/nl/klantenservice/tv-en-entertainment/storingen/hoe-herstart-ik-mijn-modem',
        displayUrl: 'https://www.int.telenet.be/residential/nl/klantenservice/tv-en-entertainment/storingen/hoe-herstart-ik-mijn-modem',
        name: 'Hoe herstart ik mijn modem ?',
        content: 'Hoe herstart ik mijn <em>modem</em>? Eerst even dit Je <em>modem</em> is het hart van je internetverbinding en vind je op de plek waar de Telenet-kabel je woning binnenkomt. Heb je een probleem met je internet of je digitale tv (bv.: geen enkel toesel is nog verbonden, trage verbinding of slecht bereik)? Dan kan het helpen om je <em>modem</em> even te herstarten',
        product: {},
        tags: []
      }]
    };
  }
}

/***/ }),

/***/ 7907:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/services/search-api-service.provider.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchApiServiceProvider: () => (/* binding */ SearchApiServiceProvider)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elastic-search.service */ 46800);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mock_elastic_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-elastic-search.service */ 60187);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class SearchApiServiceProvider {
  http;
  configService;
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.LogFactory.createLogger(SearchApiServiceProvider);
  MOCK_PREFIX = 'mock.';
  elasticService;
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
    const searchApiUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.SEARCH_API_URL);
    if (searchApiUrl.startsWith(this.MOCK_PREFIX)) {
      SearchApiServiceProvider.LOG.logInfo(`Using the MockElasticSearchService, searchApiUrl is ${searchApiUrl}`);
      this.elasticService = new _mock_elastic_search_service__WEBPACK_IMPORTED_MODULE_3__.MockElasticSearchService();
    } else {
      SearchApiServiceProvider.LOG.logInfo(`Using the ElasticSearchService, searchApiUrl is ${searchApiUrl}`);
      this.elasticService = new _elastic_search_service__WEBPACK_IMPORTED_MODULE_1__.ElasticSearchService(this.http, searchApiUrl);
    }
  }
  getService() {
    return this.elasticService;
  }
  static ɵfac = function SearchApiServiceProvider_Factory(t) {
    return new (t || SearchApiServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SearchApiServiceProvider,
    factory: SearchApiServiceProvider.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12683:
/*!**************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/types/action-initiator.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionInitiator: () => (/* binding */ ActionInitiator)
/* harmony export */ });
var ActionInitiator;
(function (ActionInitiator) {
  ActionInitiator["FACET_SELECT"] = "FacetSelect";
  ActionInitiator["INITIAL_SEARCH"] = "InitialSearch";
})(ActionInitiator || (ActionInitiator = {}));

/***/ }),

/***/ 37902:
/*!*****************************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/types/analytics-eventinfo.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnifiedSearchEvents: () => (/* binding */ UnifiedSearchEvents)
/* harmony export */ });
var SearchEventTypes;
(function (SearchEventTypes) {
  SearchEventTypes["SEARCH"] = "SEARCH";
  SearchEventTypes["FILTER"] = "FILTER";
  SearchEventTypes["RESULT_CLICK"] = "RESULT_CLICK";
})(SearchEventTypes || (SearchEventTypes = {}));
const UnifiedSearchEvents = {
  [SearchEventTypes.SEARCH]: {
    type: 'on-site-search',
    name: 'on-site search made'
  },
  [SearchEventTypes.FILTER]: {
    type: 'click',
    name: 'on-site search filter clicked'
  },
  [SearchEventTypes.RESULT_CLICK]: {
    type: 'on-site-search-click',
    name: 'on-site search result clicked'
  }
};

/***/ }),

/***/ 65587:
/*!*********************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/types/badge-color.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 26208:
/*!**********************************************************************************!*\
  !*** ./libs/foundation/general/search/data-access/src/lib/types/search-types.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchTypes: () => (/* binding */ SearchTypes)
/* harmony export */ });
var SearchTypes;
(function (SearchTypes) {
  SearchTypes["HEADER_SEARCH"] = "Unified search header";
  SearchTypes["INPAGE_SEARCH"] = "Unified search component";
  SearchTypes["UNKNOWN"] = "";
})(SearchTypes || (SearchTypes = {}));

/***/ }),

/***/ 36959:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 12235:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 14373);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 22476);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 50575);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 58559:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 16929);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 72707);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 36959);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 38411);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 50575);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 31523:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 30101);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 35559);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 15445:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 51236:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastValueFrom: () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 31967);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ }),

/***/ 56231:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 15535);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 60384);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}

/***/ }),

/***/ 60384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 16929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 14373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 35678:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 58559);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 42704:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

/***/ }),

/***/ 42499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

/***/ }),

/***/ 88297:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

/***/ }),

/***/ 86679:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 47695:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}

/***/ }),

/***/ 35158:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 22147:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 19405:
/*!*************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

/***/ }),

/***/ 15535:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 35158);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 22147);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 88297);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 47695);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 19405);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}

/***/ }),

/***/ 38411:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 96691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 14373:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 31967:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/EmptyError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyError: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});

/***/ }),

/***/ 30101:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 35559:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 81566:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 50575:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 15445);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 29701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 10204:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 31287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 95235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 82602:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 87808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 14373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 19449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 53972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 70401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 82602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 34114:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 72707:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 22476:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 10204);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 16929:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 15445);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 38411);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 42614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}])
//# sourceMappingURL=libs_foundation_general_search_data-access_src_index_ts-_52880.js.map