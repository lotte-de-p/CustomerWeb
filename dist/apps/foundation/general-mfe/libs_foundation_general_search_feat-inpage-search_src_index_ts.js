(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["libs_foundation_general_search_feat-inpage-search_src_index_ts"],{

/***/ 38782:
/*!************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-inpage-search/src/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InpageSearchComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InpageSearchComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 25153);


/***/ }),

/***/ 25153:
/*!****************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-inpage-search/src/lib/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InpageSearchComponent: () => (/* reexport safe */ _inpage_search_component__WEBPACK_IMPORTED_MODULE_0__.InpageSearchComponent)
/* harmony export */ });
/* harmony import */ var _inpage_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inpage-search.component */ 71106);


/***/ }),

/***/ 71106:
/*!**********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-inpage-search/src/lib/inpage-search.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InpageSearchComponent: () => (/* binding */ InpageSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-input/search-input.component */ 78264);







class InpageSearchComponent {
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchFacadeService);
  searchCollection = '';
  searchResultsPage = '';
  suggestionsFieldName = '';
  includeHardwareResults;
  brand;
  language;
  includeHardwareResultsBool;
  query$ = this.#searchFacadeService.inPageQuery$;
  ngOnInit() {
    const collection = JSON.parse(this.searchCollection);
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);
    this.#searchFacadeService.initInPage(collection.value, this.searchResultsPage);
    if (!this.#searchFacadeService.getBrand() && !this.#searchFacadeService.getLanguage()) {
      this.#searchFacadeService.setInputParameters(collection.value, this.searchResultsPage, this.brand, this.language);
    }
  }
  static ɵfac = function InpageSearchComponent_Factory(t) {
    return new (t || InpageSearchComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InpageSearchComponent,
    selectors: [["tg-foundation-general-search-inpage-search"]],
    inputs: {
      searchCollection: "searchCollection",
      searchResultsPage: "searchResultsPage",
      suggestionsFieldName: "suggestionsFieldName",
      includeHardwareResults: "includeHardwareResults",
      brand: "brand",
      language: "language"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 6,
    consts: [[3, "suggestionsFieldName", "query", "includeHardwareResults"]],
    template: function InpageSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-foundation-general-search-inpage-search-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestionsFieldName", ctx.suggestionsFieldName)("query", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.query$))("includeHardwareResults", ctx.includeHardwareResultsBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchInpageSearch");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__.SearchInputComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78264:
/*!**********************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-inpage-search/src/lib/search-input/search-input.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInputComponent: () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);













const _c0 = ["inputField"];
function SearchInputComponent_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
  }
  if (rf & 2) {
    const suggestions_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", suggestions_r2)("suggestionsFieldName", ctx_r3.suggestionsFieldName);
  }
}
function SearchInputComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchInputComponent_ng_container_16_div_1_Template, 1, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const suggestions_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = suggestions_r2 == null ? null : suggestions_r2[ctx_r1.suggestionsFieldName] == null ? null : suggestions_r2[ctx_r1.suggestionsFieldName].length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0 > 0);
  }
}
const _c1 = () => ["in-page-search--input--button-icon-search"];
const _c2 = () => ["in-page-search--input--button-icon-backspace ", "cursor--pointer"];
const _c3 = a0 => [a0];
class SearchInputComponent {
  query = '';
  suggestionsFieldName;
  includeHardwareResults;
  inputField;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_5__.SearchFacadeService);
  #cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  #destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  suggestions$ = this.#searchFacadeService.inPageSuggestions$;
  queryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
  inPageFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
    query: this.queryFormControl
  });
  ngOnDestroy() {
    this.#destroy$.next(true);
    this.#destroy$.complete();
  }
  ngOnInit() {
    if (this.query) {
      this.queryFormControl.setValue(this.query);
      this.#cdr.detectChanges();
    }
    this.queryFormControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(value => this.onValueChanged(value ?? '', this.includeHardwareResults)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.#destroy$)).subscribe();
  }
  onKeydownHandler(event) {
    if (event.key === 'Escape') {
      this.clear();
    }
  }
  onValueChanged(query, includeHardwareResults) {
    if (query.length > 2) {
      this.#searchFacadeService.setQueryForInPage(query, includeHardwareResults);
    } else {
      this.#searchFacadeService.clearInPage();
    }
  }
  clear() {
    this.queryFormControl.setValue('');
    this.#searchFacadeService.clearInPage();
    this.inputField.nativeElement.focus();
  }
  clearNoFocus() {
    this.queryFormControl.setValue('');
    this.#searchFacadeService.clearInPage();
  }
  goToResults() {
    const searchTerm = this.getSearchTerm();
    if (searchTerm) {
      this.#searchFacadeService.navigateToInPageResults(searchTerm);
    } else {
      this.inputField.nativeElement.focus();
    }
  }
  getSearchTerm() {
    return this.inPageFormGroup.get('query')?.value ?? '';
  }
  static ɵfac = function SearchInputComponent_Factory(t) {
    return new (t || SearchInputComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchInputComponent,
    selectors: [["tg-foundation-general-search-inpage-search-input"]],
    viewQuery: function SearchInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputField = _t.first);
      }
    },
    hostBindings: function SearchInputComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchInputComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydownHandler($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      query: "query",
      suggestionsFieldName: "suggestionsFieldName",
      includeHardwareResults: "includeHardwareResults"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 27,
    consts: [[1, "in-page-search", "position--relative", "display--flex", "flex-direction--row", 3, "appClickOutside"], [1, "in-page-search--container", "display--flex", "flex-direction--column", "border-radius--all--xxs", "form__input-container"], ["action", "", 1, "in-page-search--input-container", "display--flex", "flex-direction--row", "flex-wrap--nowrap", "form__input-container", "mr--xs--md", 3, "formGroup"], [1, "in-page-search--input--tg-foundation-general-search-button", "display--flex", 3, "customClasses", "click", "keyup.enter"], ["aria-hidden", "true", 1, "icon", "icon-search", "pl--xxs"], ["autocomplete", "off", "type", "search", "id", "searchTerm", 1, "in-page-search--input", "form__input--max-width", "width--full", "border-width--all--n", "mb--n", 3, "formControl", "placeholder"], ["inputField", ""], [1, "display--flex", 3, "customClasses", "ngClass", "click"], ["aria-hidden", "true", 1, "icon", "icon-backspace", "clear-input"], [4, "ngIf"], [1, "button", "button-primary", "align-self--start", "hide-until-md", 3, "click"], ["tg-foundation-general-search-inpage-search-suggestions", "", "class", "in-page-search--results justify-content--center flex-direction--column mr--xs", "tgFoundationGeneralSearchKeyboardNavigationDirective", "", 3, "suggestions", "suggestionsFieldName", 4, "ngIf"], ["tg-foundation-general-search-inpage-search-suggestions", "", "tgFoundationGeneralSearchKeyboardNavigationDirective", "", 1, "in-page-search--results", "justify-content--center", "flex-direction--column", "mr--xs", 3, "suggestions", "suggestionsFieldName"]],
    template: function SearchInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appClickOutside", function SearchInputComponent_Template_div_appClickOutside_0_listener() {
          return ctx.clearNoFocus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "form", 2)(3, "tg-foundation-general-search-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_button_click_3_listener() {
          return ctx.goToResults();
        })("keyup.enter", function SearchInputComponent_Template_tg_foundation_general_search_button_keyup_enter_3_listener() {
          return ctx.goToResults();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tg-foundation-general-search-accessibility-span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tg-foundation-general-search-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_button_click_11_listener() {
          return ctx.clear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tg-foundation-general-search-accessibility-span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SearchInputComponent_ng_container_16_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_button_click_18_listener() {
          return ctx.goToResults();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inPageFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, "ng.search-inpage.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.queryFormControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, "ng.search-inpage.phd.search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchSearchInput");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx.getSearchTerm().length < 1 ? "display--none" : "display--flex"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchBackspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "ng.search-inpage.clear"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 19, ctx.suggestions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "ng.search-inpage.search"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _general_ui_search__WEBPACK_IMPORTED_MODULE_2__.AccessibilitySpanComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _general_ui_search__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.ClickOutsideDirective, _general_data_access_search__WEBPACK_IMPORTED_MODULE_5__.KeyboardNavigationDirective],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_foundation_general_search_feat-inpage-search_src_index_ts.js.map