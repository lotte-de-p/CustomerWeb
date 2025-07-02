(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["apps_foundation_general-mfe_src_local_index_ts"],{

/***/ 12537:
/*!********************************************************!*\
  !*** ./apps/foundation/general-mfe/src/local/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalInpageSearchComponent: () => (/* reexport safe */ _local_inpage_search_local_inpage_search_component__WEBPACK_IMPORTED_MODULE_2__.LocalInpageSearchComponent),
/* harmony export */   LocalSearchHeaderComponent: () => (/* reexport safe */ _local_search_header_local_search_header_component__WEBPACK_IMPORTED_MODULE_0__.LocalSearchHeaderComponent),
/* harmony export */   LocalSearchResultsComponent: () => (/* reexport safe */ _local_search_results_local_search_results_component__WEBPACK_IMPORTED_MODULE_1__.LocalSearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _local_search_header_local_search_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-search-header/local-search-header.component */ 47618);
/* harmony import */ var _local_search_results_local_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-search-results/local-search-results.component */ 78931);
/* harmony import */ var _local_inpage_search_local_inpage_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-inpage-search/local-inpage-search.component */ 37588);




/***/ }),

/***/ 37588:
/*!****************************************************************************************************!*\
  !*** ./apps/foundation/general-mfe/src/local/local-inpage-search/local-inpage-search.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalInpageSearchComponent: () => (/* binding */ LocalInpageSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_search_feat_inpage_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/search/feat-inpage-search */ 49581);
/* harmony import */ var _general_search_feat_inpage_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_search_feat_inpage_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_search_feat_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/search/feat-header */ 39082);
/* harmony import */ var _general_search_feat_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_search_feat_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);




class LocalInpageSearchComponent {
  static ɵfac = function LocalInpageSearchComponent_Factory(t) {
    return new (t || LocalInpageSearchComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LocalInpageSearchComponent,
    selectors: [["tg-foundation-general-search-inpage-search-local"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["searchResultsCollection", "{\"value\":\"telenet_residential_nl\", \"text\":\"Particulieren\"}", "searchResultsPage", "/results/", "brand", "telenet", "language", "nl", "includeHardwareResults", "true", 2, "display", "none"], ["suggestionsFieldName", "asYouType", "searchResultsPage", "http://localhost:4206/results", "searchCollection", "{\"value\":\"telenet_residential_nl\", \"text\":\"Particulieren\"}", "includeHardwareResults", "true"]],
    template: function LocalInpageSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tg-foundation-general-search-header", 0)(1, "tg-foundation-general-search-inpage-search", 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _general_search_feat_inpage_search__WEBPACK_IMPORTED_MODULE_1__.InpageSearchComponent, _general_search_feat_header__WEBPACK_IMPORTED_MODULE_2__.SearchHeaderComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 47618:
/*!****************************************************************************************************!*\
  !*** ./apps/foundation/general-mfe/src/local/local-search-header/local-search-header.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalSearchHeaderComponent: () => (/* binding */ LocalSearchHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_search_feat_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/search/feat-header */ 39082);
/* harmony import */ var _general_search_feat_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_search_feat_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class LocalSearchHeaderComponent {
  static ɵfac = function LocalSearchHeaderComponent_Factory(t) {
    return new (t || LocalSearchHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LocalSearchHeaderComponent,
    selectors: [["tg-foundation-general-search-header-local"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [["searchResultsCollection", "{\"value\":\"telenet_residential_nl\", \"text\":\"Particulieren\"}", "searchResultsPage", "/results/", "brand", "telenet", "language", "nl", "suggestionsFieldName", "hits", "includeHardwareResults", "true"]],
    template: function LocalSearchHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tg-foundation-general-search-header", 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _general_search_feat_header__WEBPACK_IMPORTED_MODULE_1__.SearchHeaderComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78931:
/*!******************************************************************************************************!*\
  !*** ./apps/foundation/general-mfe/src/local/local-search-results/local-search-results.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalSearchResultsComponent: () => (/* binding */ LocalSearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_search_feat_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/search/feat-results */ 30310);
/* harmony import */ var _general_search_feat_results__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_search_feat_results__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class LocalSearchResultsComponent {
  static ɵfac = function LocalSearchResultsComponent_Factory(t) {
    return new (t || LocalSearchResultsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LocalSearchResultsComponent,
    selectors: [["tg-foundation-general-search-results-local"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [["searchResultsCollections", "[{\"value\":\"telenet_residential_nl\", \"text\": \"Particulieren\"}, {\"value\":\"telenet_smele_nl\", \"text\": \"Bedrijven\"},  {\"value\":\"telenet_soho_nl\", \"text\": \"Zelfstandigen\"}]", "searchResultsFacets", "[subject,category,type]", "brand", "telenet", "language", "nl", "includeHardwareResults", "true"]],
    template: function LocalSearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tg-foundation-general-search-results-page", 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _general_search_feat_results__WEBPACK_IMPORTED_MODULE_1__.SearchResultsComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=apps_foundation_general-mfe_src_local_index_ts.js.map