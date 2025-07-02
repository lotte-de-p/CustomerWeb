(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["libs_foundation_general_search_feat-header_src_index_ts"],{

/***/ 38223:
/*!*****************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchHeaderComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 63530);


/***/ }),

/***/ 1212:
/*!***********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/brand-logo/brand-logo.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandLogoComponent: () => (/* binding */ BrandLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class BrandLogoComponent {
  static ɵfac = function BrandLogoComponent_Factory(t) {
    return new (t || BrandLogoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BrandLogoComponent,
    selectors: [["tg-foundation-general-search-brand-logo"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 4,
    consts: [[1, "search-bar__logo"], ["aria-hidden", "true", 1, "icon", "icon-logo-telenet", "hide--base"], ["hide", "base"], ["aria-hidden", "true", 1, "icon", "icon-logo-base", "hide--telenet"], ["hide", "telenet"]],
    template: function BrandLogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tg-foundation-general-search-accessibility-span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Telenet logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tg-foundation-general-search-accessibility-span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Base logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "telenet-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "telenet-accessibility-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "base-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "base-accessibility-text");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.AccessibilitySpanComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 31763:
/*!*****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/header-button/header-button.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderButtonComponent: () => (/* binding */ HeaderButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-icon/header-icon.component */ 27299);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);




const _c0 = (a0, a1, a2) => [a0, a1, a2];
const _c1 = ["*"];
class HeaderButtonComponent {
  type;
  expanded = false;
  hideMobile = false;
  static ɵfac = function HeaderButtonComponent_Factory(t) {
    return new (t || HeaderButtonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderButtonComponent,
    selectors: [["tg-foundation-general-search-header-button"]],
    inputs: {
      type: "type",
      expanded: "expanded",
      hideMobile: "hideMobile"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 9,
    consts: [[1, "display--flex", "height--full", 3, "hideMobile", "customClasses"], [3, "type"]],
    template: function HeaderButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tg-foundation-general-search-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "tg-foundation-general-search-header-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hideMobile", ctx.hideMobile)("customClasses", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c0, ctx.type === "backspace" ? "status-active-icon-backspace " : "", ctx.type === "search" || ctx.type === "backspace" ? "search-bar__form--button-icon-" + ctx.type : "", ctx.type === "cancel" || ctx.type === "close" ? "search-bar__button-item search-bar__button-item-" + ctx.type : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "general-search-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "general-search-header-icon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_1__.HeaderIconComponent, _general_ui_search__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 27299:
/*!*************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/header-icon/header-icon.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderIconComponent: () => (/* binding */ HeaderIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function HeaderIconComponent_tg_foundation_general_search_accessibility_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tg-foundation-general-search-accessibility-span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "accessibility-span-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "ng.search-header.open-search-bar", " ");
  }
}
function HeaderIconComponent_tg_foundation_general_search_accessibility_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tg-foundation-general-search-accessibility-span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "accessibility-span-clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "ng.search-header.clear-search-bar", " ");
  }
}
function HeaderIconComponent_tg_foundation_general_search_accessibility_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tg-foundation-general-search-accessibility-span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "accessibility-span-close-cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "ng.search-header.close-search-bar", " ");
  }
}
class HeaderIconComponent {
  type;
  mobile = false;
  static ɵfac = function HeaderIconComponent_Factory(t) {
    return new (t || HeaderIconComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderIconComponent,
    selectors: [["tg-foundation-general-search-header-icon"]],
    inputs: {
      type: "type",
      mobile: "mobile"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 6,
    consts: [[3, "type", "mobile"], [4, "ngIf"]],
    template: function HeaderIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tg-foundation-general-search-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderIconComponent_tg_foundation_general_search_accessibility_span_1_Template, 2, 2, "tg-foundation-general-search-accessibility-span", 1)(2, HeaderIconComponent_tg_foundation_general_search_accessibility_span_2_Template, 2, 2, "tg-foundation-general-search-accessibility-span", 1)(3, HeaderIconComponent_tg_foundation_general_search_accessibility_span_3_Template, 2, 2, "tg-foundation-general-search-accessibility-span", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.type)("mobile", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-testid", "general-search-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "close" || ctx.type === "cancel");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.AccessibilitySpanComponent, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.IconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 63530:
/*!*********************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHeaderComponent: () => (/* reexport safe */ _search_header_component__WEBPACK_IMPORTED_MODULE_0__.SearchHeaderComponent)
/* harmony export */ });
/* harmony import */ var _search_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-header.component */ 64659);


/***/ }),

/***/ 64659:
/*!***************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/search-header.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHeaderComponent: () => (/* binding */ SearchHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ 80766);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__);





class SearchHeaderComponent {
  searchResultsCollection = '';
  searchResultsPage = '';
  detailsPagePath;
  suggestionsFieldName;
  brand;
  language;
  includeHardwareResults;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__.SearchFacadeService);
  includeHardwareResultsBool;
  ngOnInit() {
    const collection = JSON.parse(this.searchResultsCollection);
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);
    this.#searchFacadeService.setInputParameters(collection.value, this.searchResultsPage, this.brand, this.language);
    const searchResultId = sessionStorage.getItem('searchResultId');
    if (searchResultId && this.brand && this.language) {
      this.#searchFacadeService.postClick(searchResultId, this.brand, this.language);
    }
  }
  static ɵfac = function SearchHeaderComponent_Factory(t) {
    return new (t || SearchHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchHeaderComponent,
    selectors: [["tg-foundation-general-search-header"]],
    inputs: {
      searchResultsCollection: "searchResultsCollection",
      searchResultsPage: "searchResultsPage",
      detailsPagePath: "detailsPagePath",
      suggestionsFieldName: "suggestionsFieldName",
      brand: "brand",
      language: "language",
      includeHardwareResults: "includeHardwareResults"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "detailsPagePath", "suggestionsFieldName", "includeHardwareResults"]],
    template: function SearchHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-foundation-general-search-search-input", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detailsPagePath", ctx.detailsPagePath)("suggestionsFieldName", ctx.suggestionsFieldName)("includeHardwareResults", ctx.includeHardwareResultsBool);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__.SearchInputComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80766:
/*!***************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/search-input/search-input.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInputComponent: () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suggestions/suggestions.component */ 273);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _top_results_top_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../top-results/top-results.component */ 52567);
/* harmony import */ var _brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../brand-logo/brand-logo.component */ 1212);
/* harmony import */ var _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header-icon/header-icon.component */ 27299);
/* harmony import */ var _header_button_header_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header-button/header-button.component */ 31763);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















function SearchInputComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-foundation-general-search-suggestions", 18)(2, "tg-foundation-general-search-top-results", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions$", ctx_r1.suggestions$)("suggestionsFieldName", ctx_r1.suggestionsFieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detailsPagePath", ctx_r1.detailsPagePath);
  }
}
const _c0 = a0 => ({
  "header-search-v2-center-expanded": a0
});
const _c1 = a0 => ({
  visible: a0
});
const _c2 = (a0, a1, a2) => ({
  "search-bar-from-v2-expanded--border": a0,
  "onclick-icon-search-remove": a1,
  "search-bar-from-v2-expanded--border-active": a2
});
const _c3 = (a0, a1) => ({
  "search-bar__input-expanded": a0,
  "": a1
});
const _c4 = (a0, a1) => [a0, a1];
const _c5 = a0 => ({
  "display--none": a0
});
const _c6 = () => ["icon-search--mobile"];
let SearchInputComponent = class SearchInputComponent {
  elementRef;
  detailsPagePath;
  suggestionsFieldName;
  includeHardwareResults;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_10__.SearchFacadeService);
  #urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_12__.UrlService);
  #cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  isSearchExpanded = false;
  queryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
  searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
    query: this.queryFormControl
  });
  suggestions$ = this.#searchFacadeService.suggestions$;
  isSearchExpanded$ = this.#searchFacadeService.headerExpanded$;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.checkQueryParamsAndSetQueryIfNeeded();
    this.queryFormControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(value => this.onValueChanged(value ?? '')), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe();
    this.isSearchExpanded$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(expanded => this.isSearchExpanded = expanded);
    this.#searchFacadeService.query$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(query => this.queryFormControl.setValue(query));
    this.#searchFacadeService.getHeaderExpanded().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(headerExpanded => {
      const overflowHiddenClass = 'overflow--hidden';
      if (headerExpanded) {
        document.body?.classList.add(overflowHiddenClass);
      } else {
        document.body?.classList.remove(overflowHiddenClass);
      }
    });
  }
  onValueChanged(query) {
    if (query.length > 2) {
      this.#searchFacadeService.searchSuggestions(query, this.suggestionsFieldName, this.includeHardwareResults);
    }
  }
  clear(closeHeader = false, clearInput = true) {
    if (clearInput) {
      this.queryFormControl.setValue('');
    }
    this.#searchFacadeService.clearHeader();
    if (closeHeader) {
      this.#searchFacadeService.setHeaderExpanded(false);
    }
  }
  redirectOrUpdateSearchResultsPage(searchResultsPageUrl) {
    this.#searchFacadeService.redirectOrUpdateSearchResultsPage(searchResultsPageUrl, this.includeHardwareResults).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe();
  }
  setExpanded(isExpanded) {
    this.#searchFacadeService.setHeaderExpanded(isExpanded);
    this.#searchFacadeService.setLastUsedComponent(isExpanded ? _general_data_access_search__WEBPACK_IMPORTED_MODULE_10__.SearchTypes.HEADER_SEARCH : _general_data_access_search__WEBPACK_IMPORTED_MODULE_10__.SearchTypes.UNKNOWN);
  }
  onKeydownHandler(event) {
    if (event.key === 'Escape') {
      this.#searchFacadeService.setHeaderExpanded(false);
      this.clear();
    }
  }
  checkQueryParamsAndSetQueryIfNeeded() {
    const query = this.#urlService.getRequestParameters()['q'];
    if (query) {
      this.queryFormControl.setValue(query);
      this.#searchFacadeService.setQuery(query);
      this.#cdr.detectChanges();
    }
  }
  searchOrOpenHeader() {
    const query = this.searchFormGroup.get('query')?.value ?? '';
    this.#searchFacadeService.getSearchResultsPageUrl(query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(url => {
      this.#searchFacadeService.setQuery(query);
      if (this.isSearchExpanded) {
        this.redirectOrUpdateSearchResultsPage(url);
        this.setExpanded(false);
      } else {
        this.setExpanded(true);
      }
    });
  }
  static ɵfac = function SearchInputComponent_Factory(t) {
    return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchInputComponent,
    selectors: [["tg-foundation-general-search-search-input"]],
    hostBindings: function SearchInputComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchInputComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydownHandler($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      detailsPagePath: "detailsPagePath",
      suggestionsFieldName: "suggestionsFieldName",
      includeHardwareResults: "includeHardwareResults"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 43,
    consts: [[1, "overlay-mask", "position--fixed", 3, "ngClass", "click"], [1, "header-search-v2", "position--relative", "display--flex", "flex-direction--row", "justify-content--end--md", 3, "ngClass"], [1, "search-bar__item-logo", "hide--mobile", "display--none", 3, "ngClass"], ["action", "", "autocomplete", "off", "id", "search-bar", 1, "search-bar__form", "display--flex", 3, "formGroup", "ngClass"], ["type", "search", 1, "display--flex", 3, "click", "keyup.enter"], ["type", "search", "id", "searchTerm", 1, "search-bar__input", "outline--none", "font--body", 3, "formControl", "placeholder", "ngClass", "click"], ["inputField", ""], ["type", "backspace", 1, "display--flex", "search-bar__form--button-icon-backspace--wrapper", 3, "ngClass", "click"], [1, "search-bar__button", "display--none", 3, "ngClass"], ["type", "cancel", 3, "hideMobile", "click"], ["type", "close", 3, "click"], [1, "search-bar__item-search--mobile", "display--none--md", 3, "ngClass"], [3, "customClasses", "click"], ["type", "search", 3, "mobile"], [1, "hide--telenet", "mt--default", "text--xs", "text-font-family--t1", 3, "innerHTML"], [1, "header-search-results", "justify-content--center", "flex-direction--row--md", "width--full", "position--fixed", "flex-direction--column", "display--flex", 3, "ngClass"], ["class", "header-search--autosuggest width--full justify-content--center display--flex background-white flex-direction--column flex-direction--row--md", "tgFoundationGeneralSearchKeyBoardNavigationDirective", "", 4, "ngIf"], ["tgFoundationGeneralSearchKeyBoardNavigationDirective", "", 1, "header-search--autosuggest", "width--full", "justify-content--center", "display--flex", "background-white", "flex-direction--column", "flex-direction--row--md"], [3, "suggestions$", "suggestionsFieldName"], [3, "detailsPagePath"]],
    template: function SearchInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_div_click_0_listener() {
          return ctx.clear(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tg-foundation-general-search-brand-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3)(5, "tg-foundation-general-search-header-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_header_button_click_5_listener() {
          return ctx.searchOrOpenHeader();
        })("keyup.enter", function SearchInputComponent_Template_tg_foundation_general_search_header_button_keyup_enter_5_listener() {
          return ctx.searchOrOpenHeader();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_input_click_6_listener() {
          return ctx.setExpanded(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tg-foundation-general-search-header-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_header_button_click_9_listener() {
          return ctx.clear(false, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "tg-foundation-general-search-header-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_header_button_click_11_listener() {
          return ctx.clear(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tg-foundation-general-search-header-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_header_button_click_14_listener() {
          return ctx.clear(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "tg-foundation-general-search-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_tg_foundation_general_search_button_click_16_listener() {
          return ctx.setExpanded(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tg-foundation-general-search-header-icon", 13)(18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchInputComponent_div_21_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSearchExpanded ? "" : "display--none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.isSearchExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.isSearchExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchFormGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](30, _c2, ctx.isSearchExpanded || _r0.value.length > 0, !ctx.isSearchExpanded, _r0.value.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.queryFormControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, "ng.search-header.phd.search"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c3, ctx.isSearchExpanded, _r0.value.length > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchSearchInput");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c4, _r0.value.length < 1 ? "visibility--hide" : "", !ctx.isSearchExpanded && _r0.value.length < 1 ? "display--none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSearchExpanded ? "visible" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideMobile", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "tgFoundationGeneralSearchSearchInputCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 22, "ng.search-header.lbl.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c5, ctx.isSearchExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mobile", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 24, "ng.search-header.lbl.search"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSearchExpanded && _r0.value.length > 2 ? "header-search-results--keyword" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_2__.SuggestionsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _top_results_top_results_component__WEBPACK_IMPORTED_MODULE_6__.TopResultsComponent, _brand_logo_brand_logo_component__WEBPACK_IMPORTED_MODULE_7__.BrandLogoComponent, _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_8__.HeaderIconComponent, _general_ui_search__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _header_button_header_button_component__WEBPACK_IMPORTED_MODULE_9__.HeaderButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _general_data_access_search__WEBPACK_IMPORTED_MODULE_10__.SearchNgrxModule],
    encapsulation: 2
  });
};
SearchInputComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])], SearchInputComponent);


/***/ }),

/***/ 5652:
/*!***********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/suggestion/suggestion.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionComponent: () => (/* binding */ SuggestionComponent)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);








function SuggestionComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuggestionComponent_a_0_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const url_r1 = restoredCtx.ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goToResultsPage(url_r1));
    })("focus", function SuggestionComponent_a_0_Template_a_focus_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.selectSuggestion());
    })("mouseover", function SuggestionComponent_a_0_Template_a_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.selectSuggestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tg-foundation-general-search-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-testid", "suggestion-item")("aria-label", ctx_r0.item == null ? null : ctx_r0.item.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-testid", "general-search-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.item == null ? null : ctx_r0.item.highlight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-testid", "suggestion-text");
  }
}
class SuggestionComponent {
  item;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_4__.SearchFacadeService);
  getSearchResultsPageUrl() {
    return this.#searchFacadeService.getSearchResultsPageUrl(this.item?.text);
  }
  goToResultsPage(url) {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.#searchFacadeService.setQuery(_this.item?.text ?? '');
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.#searchFacadeService.redirectOrUpdateSearchResultsPage(url, true));
      _this.#searchFacadeService.setHeaderExpanded(false);
    })();
  }
  selectSuggestion() {
    if (this.item) {
      this.#searchFacadeService.selectSuggestion(this.item);
    }
  }
  static ɵfac = function SuggestionComponent_Factory(t) {
    return new (t || SuggestionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SuggestionComponent,
    selectors: [["tg-foundation-general-search-suggestion"]],
    inputs: {
      item: "item"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["tabindex", "0", "class", "display--flex flex-direction--row width--full text-decoration--none pr--xxxs color-text", 3, "click", "focus", "mouseover", 4, "ngIf"], ["tabindex", "0", 1, "display--flex", "flex-direction--row", "width--full", "text-decoration--none", "pr--xxxs", "color-text", 3, "click", "focus", "mouseover"], ["aria-hidden", "true", 1, "header-search--autosuggest-query-item-icon"], ["type", "search"], [1, "header-search--autosuggest-query-item", 3, "innerHTML"]],
    template: function SuggestionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SuggestionComponent_a_0_Template, 4, 5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.getSearchResultsPageUrl()));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _general_ui_search__WEBPACK_IMPORTED_MODULE_3__.IconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 273:
/*!*************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/suggestions/suggestions.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsComponent: () => (/* binding */ SuggestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suggestion/suggestion.component */ 5652);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);







function SuggestionsComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SuggestionsComponent_li_1_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setFocus(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-foundation-general-search-suggestion", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestionItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", suggestionItem_r1);
  }
}
class SuggestionsComponent {
  suggestions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
  suggestionsFieldName;
  #keyboardNavigationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__.KeyboardNavigationService);
  setFocus(el) {
    this.#keyboardNavigationService.setFocusedElement(el);
  }
  static ɵfac = function SuggestionsComponent_Factory(t) {
    return new (t || SuggestionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SuggestionsComponent,
    selectors: [["tg-foundation-general-search-suggestions"]],
    inputs: {
      suggestions$: "suggestions$",
      suggestionsFieldName: "suggestionsFieldName"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["tabindex", "0", 1, "header-search--autosuggest-query", "display--flex", "flex-direction--column", "width--full"], ["class", "header-search--autosuggest-query-items display--flex flex-direction--row width--full", 3, "mouseenter", 4, "ngFor", "ngForOf"], [1, "header-search--autosuggest-query-items", "display--flex", "flex-direction--row", "width--full", 3, "mouseenter"], ["el", ""], [1, "width--full", 3, "item"]],
    template: function SuggestionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuggestionsComponent_li_1_Template, 3, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.suggestions$)) == null ? null : tmp_0_0[ctx.suggestionsFieldName]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_2__.SuggestionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2156:
/*!***********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/top-result/top-result.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopResultComponent: () => (/* binding */ TopResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_4__);








function TopResultComponent_tg_foundation_general_search_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-foundation-general-search-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const categoryLabel_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, categoryLabel_r1), " ");
  }
}
class TopResultComponent {
  item;
  detailsPagePath;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_4__.SearchFacadeService);
  getCategoryLabel() {
    const category = this.item?.tags.find(tag => 'category' === tag.name)?.value[0];
    if (category) {
      return `tags.category.${category}`;
    }
    return '';
  }
  goToPage($event, searchResult) {
    if ($event.currentTarget?.['href']) {
      $event.preventDefault();
      this.#searchFacadeService.goToResult($event.currentTarget?.['href'], searchResult);
    }
  }
  static ɵfac = function TopResultComponent_Factory(t) {
    return new (t || TopResultComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TopResultComponent,
    selectors: [["tg-foundation-general-search-top-result"]],
    inputs: {
      item: "item",
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "display--flex", "flex-direction--row", "width--full", "text-decoration--none", "justify-content--between", "align-items--center", "color-text", 3, "href", "click"], [1, "header-search--autosuggest-results-item"], [4, "ngIf"]],
    template: function TopResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopResultComponent_Template_a_click_0_listener($event) {
          return ctx.goToPage($event, ctx.item);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopResultComponent_tg_foundation_general_search_badge_3_Template, 3, 3, "tg-foundation-general-search-badge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", (ctx.item == null ? null : ctx.item.type) === "product" ? ctx.detailsPagePath + "?productId=" + (ctx.item == null ? null : ctx.item.product == null ? null : ctx.item.product.id) : ctx.item == null ? null : ctx.item.displayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getCategoryLabel());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _general_ui_search__WEBPACK_IMPORTED_MODULE_2__.BadgeComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 52567:
/*!*************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-header/src/lib/top-results/top-results.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopResultsComponent: () => (/* binding */ TopResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _top_result_top_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-result/top-result.component */ 2156);






function TopResultsComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-foundation-general-search-top-result", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topResult_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", topResult_r1)("detailsPagePath", ctx_r0.detailsPagePath);
  }
}
class TopResultsComponent {
  detailsPagePath;
  searchFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchFacadeService);
  topResults$ = this.searchFacade.topResults$;
  static ɵfac = function TopResultsComponent_Factory(t) {
    return new (t || TopResultsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TopResultsComponent,
    selectors: [["tg-foundation-general-search-top-results"]],
    inputs: {
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "header-search--autosuggest-results", "width--full"], ["class", "header-search--autosuggest-results-items display--flex flex-direction-row border-width--b--r border-style--b--solid border-color--b--light-grey", 4, "ngFor", "ngForOf"], [1, "header-search--autosuggest-results-items", "display--flex", "flex-direction-row", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey"], [1, "width--full", "display--flex", 3, "item", "detailsPagePath"]],
    template: function TopResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopResultsComponent_li_1_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.topResults$)) == null ? null : tmp_0_0.hits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _top_result_top_result_component__WEBPACK_IMPORTED_MODULE_3__.TopResultComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52813:
/*!******************************************************************************!*\
  !*** ./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntilDestroy: () => (/* binding */ UntilDestroy),
/* harmony export */   untilDestroyed: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNG_PIPE_DEF"];
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetLContext"])(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}])
//# sourceMappingURL=libs_foundation_general_search_feat-header_src_index_ts.js.map