(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["libs_foundation_general_search_feat-results_src_index_ts"],{

/***/ 39690:
/*!******************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendedHardwarePagesComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BlendedHardwarePagesComponent),
/* harmony export */   NoResultsComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NoResultsComponent),
/* harmony export */   PaginationComponent: () => (/* reexport safe */ _lib_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent),
/* harmony export */   SearchResultsComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 8418);
/* harmony import */ var _lib_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/pagination/pagination.component */ 92706);



/***/ }),

/***/ 71980:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/choice-group/choice-group.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChoiceGroupComponent: () => (/* binding */ ChoiceGroupComponent),
/* harmony export */   ChoiceType: () => (/* binding */ ChoiceType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);






const _c0 = ["tg-general-search-choice-group", ""];
function ChoiceGroupComponent_div_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const facet_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", facet_r1.count, ")");
  }
}
function ChoiceGroupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChoiceGroupComponent_div_5_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.notifySelection(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChoiceGroupComponent_div_5_ng_container_8_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facet_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.type === ctx_r0.ChoiceType.SINGLE ? "form__radio" : "form__checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.getGroup() + "_" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", facet_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type === ctx_r0.ChoiceType.SINGLE ? "radio" : "checkbox")("ngClass", ctx_r0.type === ctx_r0.ChoiceType.SINGLE ? "form__radio__input" : "form__checkbox__input")("checked", facet_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx_r0.getGroup() + "_" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.type === ctx_r0.ChoiceType.SINGLE ? "form__radio__label" : "form__checkbox__label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx_r0.getGroup() + "_" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.type === ctx_r0.ChoiceType.SINGLE ? "label--large" : "form__checkbox__label--default label--large");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", facet_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, facet_r1.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", facet_r1.count);
  }
}
class ChoiceGroupComponent {
  ChoiceType = ChoiceType;
  facetGroup;
  groupPrefix = '';
  type = ChoiceType.MULTI;
  selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  getGroup() {
    return `${this.groupPrefix}_${this.facetGroup.title.replace(/\s/g, '').toLowerCase()}`;
  }
  notifySelection(index) {
    this.selectionChanged.emit(index);
  }
  static ɵfac = function ChoiceGroupComponent_Factory(t) {
    return new (t || ChoiceGroupComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChoiceGroupComponent,
    selectors: [["", "tg-general-search-choice-group", ""]],
    inputs: {
      facetGroup: "facetGroup",
      groupPrefix: "groupPrefix",
      type: "type"
    },
    outputs: {
      selectionChanged: "selectionChanged"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c0,
    decls: 6,
    vars: 4,
    consts: [[1, "search-product--nav__items", "mb--l"], [1, "search-product--nav__items-name", "heading--6", "heading--notopmargin", "mb--xxs", "mb--m--md"], ["class", "search-product--nav__items-select display--flex align-items--center mb--s", 4, "ngFor", "ngForOf"], [1, "search-product--nav__items-select", "display--flex", "align-items--center", "mb--s"], [3, "ngClass"], [3, "type", "ngClass", "id", "name", "checked", "change"], [3, "ngClass", "for"], [3, "for", "ngClass"], [4, "ngIf"]],
    template: function ChoiceGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "legend", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChoiceGroupComponent_div_5_Template, 9, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.facetGroup.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.facetGroup.facets);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}
var ChoiceType;
(function (ChoiceType) {
  ChoiceType[ChoiceType["SINGLE"] = 0] = "SINGLE";
  ChoiceType[ChoiceType["MULTI"] = 1] = "MULTI";
})(ChoiceType || (ChoiceType = {}));

/***/ }),

/***/ 52113:
/*!************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/didyoumean/didyoumean.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DidyoumeanComponent: () => (/* binding */ DidyoumeanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);







function DidyoumeanComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DidyoumeanComponent_div_0_ng_container_4_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.searchFor(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "didyoumean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", !last_r3 ? "," : "?", " ");
  }
}
function DidyoumeanComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DidyoumeanComponent_div_0_ng_container_4_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.search-results-page.lbl.didyoumean"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
class DidyoumeanComponent {
  items;
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService);
  searchFor(item) {
    this.urlService.replaceURLParameters([{
      key: 'q',
      value: item
    }]);
    this.urlService.redirectTo(this.urlService.getCurrentUrl());
  }
  static ɵfac = function DidyoumeanComponent_Factory(t) {
    return new (t || DidyoumeanComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DidyoumeanComponent,
    selectors: [["tg-foundation-general-search-didyoumean"]],
    inputs: {
      items: "items"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "searh__content__term pb--l", 4, "ngIf"], [1, "searh__content__term", "pb--l"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "link", 3, "click"]],
    template: function DidyoumeanComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DidyoumeanComponent_div_0_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx.items == null ? null : ctx.items.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0 > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 61019:
/*!************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/facet-experience/facet-experience.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacetExperienceComponent: () => (/* binding */ FacetExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _choice_group_choice_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../choice-group/choice-group.component */ 71980);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);







const _c0 = ["tg-general-search-facets", ""];
function FacetExperienceComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChanged", function FacetExperienceComponent_div_14_Template_div_selectionChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.notifyCollectionChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.ChoiceType.SINGLE)("facetGroup", ctx_r0.collections)("groupPrefix", "mobile");
  }
}
function FacetExperienceComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChanged", function FacetExperienceComponent_div_15_Template_div_selectionChanged_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const groupIndex_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.notifyFacetsChanged(groupIndex_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facetGroup_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("facetGroup", facetGroup_r6)("groupPrefix", "mobile");
  }
}
function FacetExperienceComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChanged", function FacetExperienceComponent_div_30_Template_div_selectionChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.notifyCollectionChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r2.ChoiceType.SINGLE)("facetGroup", ctx_r2.collections)("groupPrefix", "desktop");
  }
}
function FacetExperienceComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChanged", function FacetExperienceComponent_div_31_Template_div_selectionChanged_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const groupIndex_r13 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.notifyFacetsChanged(groupIndex_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facetGroup_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.ChoiceType.MULTI)("facetGroup", facetGroup_r12)("groupPrefix", "desktop");
  }
}
const _c1 = ["*"];
class FacetExperienceComponent {
  ChoiceType = _choice_group_choice_group_component__WEBPACK_IMPORTED_MODULE_2__.ChoiceType;
  facetGroups = [];
  collections;
  overlayActive = false;
  overlayActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  facetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  collectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  facetsCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  notifyFacetsChanged(groupIndex, facetIndex) {
    this.facetChanged.emit({
      groupIndex,
      facetIndex
    });
  }
  notifyCollectionChanged(collectionIndex) {
    this.collectionChanged.emit(collectionIndex);
  }
  notifyFacetsCleared() {
    this.facetsCleared.emit();
  }
  toggleOverlay() {
    this.overlayActive = !this.overlayActive;
    this.overlayActiveChange.emit(this.overlayActive);
  }
  static ɵfac = function FacetExperienceComponent_Factory(t) {
    return new (t || FacetExperienceComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FacetExperienceComponent,
    selectors: [["", "tg-general-search-facets", ""]],
    inputs: {
      facetGroups: "facetGroups",
      collections: "collections",
      overlayActive: "overlayActive"
    },
    outputs: {
      overlayActiveChange: "overlayActiveChange",
      facetChanged: "facetChanged",
      collectionChanged: "collectionChanged",
      facetsCleared: "facetsCleared"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 33,
    vars: 14,
    consts: [[1, "overlay-container", 3, "ngClass"], [1, "overlay", "overlay--page"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content__description"], [1, "sticky-header", "border--b--r", "border-width--b--r", "border-color--b--light-grey", "border-style--b--solid"], [1, "display--flex", "align-items--center", "justify-content--between"], [1, "search__overlay-title", "heading--4", "heading--notopmargin"], ["aria-label", "Close button", 1, "border-width--all--n", "background-white", "close-btn", "cursor--pointer", 3, "click"], ["aria-hidden", "true", 1, "icon", "icon-md", "icon-cross"], [1, "search__nav", "position--relative", "p--m"], [1, "search-product", "search-product--nav", "mb--s", "mb--n--md"], ["tg-general-search-choice-group", "", 3, "type", "facetGroup", "groupPrefix", "selectionChanged", 4, "ngIf"], ["tg-general-search-choice-group", "", 3, "facetGroup", "groupPrefix", "selectionChanged", 4, "ngFor", "ngForOf"], [1, "sticky-footer-v2", "position--fixed", "background-white", "width--full", "py--m", "px--xm", "p--xm--md", "display--flex", "justify-content--center", "align-items--center", "box-sizing--inherit", "shadow--xs-inverse", "position--bottom", "position--left"], [1, "sticky-footer-v2__container", "width--full", "default-max-site-width", "display--flex", "justify-content--center", "align-items--center"], [1, "back-section", "mr--m"], [1, "button", "button--secondary", 3, "click"], [1, "next-section"], [1, "button", "button--primary", 3, "click"], [1, "search__nav", "width--full", "hide-until-md"], ["tg-general-search-choice-group", "", 3, "type", "facetGroup", "groupPrefix", "selectionChanged", 4, "ngFor", "ngForOf"], ["tg-general-search-choice-group", "", 3, "type", "facetGroup", "groupPrefix", "selectionChanged"], ["tg-general-search-choice-group", "", 3, "facetGroup", "groupPrefix", "selectionChanged"]],
    template: function FacetExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetExperienceComponent_Template_button_click_10_listener() {
          return ctx.toggleOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FacetExperienceComponent_div_14_Template, 1, 3, "div", 12)(15, FacetExperienceComponent_div_15_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetExperienceComponent_Template_a_click_19_listener() {
          return ctx.notifyFacetsCleared();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetExperienceComponent_Template_button_click_24_listener() {
          return ctx.toggleOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20)(29, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FacetExperienceComponent_div_30_Template, 1, 3, "div", 12)(31, FacetExperienceComponent_div_31_Template, 1, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](32);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.overlayActive ? "" : "visibility--hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "ng.search-results-page.lbl.filter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.facetGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "ng.search-results-page.lbl.clear"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, "ng.search-results-page.lbl.apply"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.facetGroups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _choice_group_choice_group_component__WEBPACK_IMPORTED_MODULE_2__.ChoiceGroupComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8418:
/*!**********************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendedHardwarePagesComponent: () => (/* reexport safe */ _pages_blended_hardware_pages_blended_hardware_pages_component__WEBPACK_IMPORTED_MODULE_1__.BlendedHardwarePagesComponent),
/* harmony export */   NoResultsComponent: () => (/* reexport safe */ _pages_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_2__.NoResultsComponent),
/* harmony export */   SearchResultsComponent: () => (/* reexport safe */ _search_results_component__WEBPACK_IMPORTED_MODULE_0__.SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _search_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results.component */ 52942);
/* harmony import */ var _pages_blended_hardware_pages_blended_hardware_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/blended-hardware-pages/blended-hardware-pages.component */ 19444);
/* harmony import */ var _pages_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/no-results/no-results.component */ 91992);






/***/ }),

/***/ 18966:
/*!****************************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/blended-content-pages/blended-content-pages.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendedContentPagesComponent: () => (/* binding */ BlendedContentPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _full_content_pages_full_content_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../full-content-pages/full-content-pages.component */ 12953);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const _c0 = ["contentTitle"];
let BlendedContentPagesComponent = class BlendedContentPagesComponent {
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchFacadeService);
  hits;
  scrollTargetRef;
  ngOnInit() {
    this.#searchFacadeService.hardware$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(_ => {
      if (this.scrollTargetRef && this.scrollTargetRef.nativeElement) {
        this.scrollTargetRef.nativeElement.scrollIntoView();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe();
  }
  static ɵfac = function BlendedContentPagesComponent_Factory(t) {
    return new (t || BlendedContentPagesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlendedContentPagesComponent,
    selectors: [["tg-foundation-general-search-blended-content-pages"]],
    viewQuery: function BlendedContentPagesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollTargetRef = _t.first);
      }
    },
    inputs: {
      hits: "hits"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [[1, "search__content__header-hardware", "width--full", "display--flex", "align-items--center", "justify-content--between", "pt--l"], ["contentTitle", ""], [1, "font--body-large", "heading--4", "heading--nomargin"], [3, "hits"]],
    template: function BlendedContentPagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-foundation-general-search-full-content-pages", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "blended-content-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.search-results-page.lbl.articles"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hits", ctx.hits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _full_content_pages_full_content_pages_component__WEBPACK_IMPORTED_MODULE_4__.FullContentPagesComponent],
    encapsulation: 2
  });
};
BlendedContentPagesComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()], BlendedContentPagesComponent);


/***/ }),

/***/ 19444:
/*!******************************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/blended-hardware-pages/blended-hardware-pages.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendedHardwarePagesComponent: () => (/* binding */ BlendedHardwarePagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hardware-page/hardware-page.component */ 9055);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ 41904);
/* eslint-disable sonarjs/no-duplicate-string */









const _c0 = ["slickModal"];
function BlendedHardwarePagesComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlendedHardwarePagesComponent_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r3.filterHardware();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.search-results-page.lbl.see-all-hardware"));
  }
}
function BlendedHardwarePagesComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const hit_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResultItem", hit_r5)("detailsPagePath", ctx_r2.detailsPagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "carousel-item");
  }
}
class BlendedHardwarePagesComponent {
  hits;
  detailsPagePath;
  slickModal;
  slideConfig = {
    dots: true,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    nextArrow: '<div class="slick-slider-button slick-slider-button--right cursor--pointer slick-slider-button__highlight background-shape--squarcle--white display--inline-flex justify-content--center align-items--center box-shadow" aria-disabled="false"><i class="icon icon-chevron-right icon-md"></i></div>',
    prevArrow: '<div class="slick-slider-button slick-slider-button--left cursor--pointer slick-slider-button__highlight background-shape--squarcle--white display--inline-flex justify-content--center align-items--center box-shadow" aria-disabled="false"><i class="icon icon-chevron-left icon-md"></i></div>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: false
      }
    }]
  };
  ngOnChanges(changes) {
    if (changes['hits']) {
      this.slickModal?.$instance?.slick?.('removeSlide', null, null, true);
      this.slickModal?.$instance?.slick?.('unslick');
      this.slickModal?.$instance?.slick?.('remove');
      this.slickModal?.$instance?.slick?.(this.slideConfig);
    }
  }
  filterHardware() {
    const devicesFilter = document.getElementsByName('tags.category.devices');
    if (devicesFilter && devicesFilter.length > 0) {
      devicesFilter.item(0).click();
    }
  }
  static ɵfac = function BlendedHardwarePagesComponent_Factory(t) {
    return new (t || BlendedHardwarePagesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlendedHardwarePagesComponent,
    selectors: [["tg-foundation-general-search-blended-hardware-pages"]],
    viewQuery: function BlendedHardwarePagesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModal = _t.first);
      }
    },
    inputs: {
      hits: "hits",
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 7,
    consts: [[1, "search__content__header-hardware", "width--full", "display--flex", "align-items--center", "justify-content--between", "py--l"], [1, "font--body-large", "heading--4", "heading--nomargin"], ["href", "", "class", "link link link--chevron text-decoration--underline", 3, "click", 4, "ngIf"], [1, "search__content__hardware", 3, "config"], ["slickModal", "slick-carousel"], [4, "ngFor", "ngForOf"], ["href", "", 1, "link", "link", "link--chevron", "text-decoration--underline", 3, "click"], ["ngxSlickItem", "", "tg-general-search-hardware-page", "", 1, "display--flex", "width--full", 3, "searchResultItem", "detailsPagePath"]],
    template: function BlendedHardwarePagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlendedHardwarePagesComponent_a_4_Template, 4, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-slick-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BlendedHardwarePagesComponent_ng_container_7_Template, 2, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "blended-hardware-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "ng.search-results-page.lbl.hardware"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.hits == null ? null : ctx.hits.length) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_3__.HardwarePageComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickItemDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8873:
/*!**********************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/content-page/content-page.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentPageComponent: () => (/* binding */ ContentPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.component */ 62036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function ContentPageComponent_tg_foundation_general_search_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tg-foundation-general-search-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "best-result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-testid", "keymatch-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "ng.search-results-page.lbl.bestresult"), " ");
  }
}
function ContentPageComponent_tg_foundation_general_search_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tg-foundation-general-search-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-testid", "badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r1.category), " ");
  }
}
const _c0 = a0 => ({
  "border--all--r border-width--all--b border-color--all--light-grey border-style--all--solid highlighted px--l": a0
});
const _c1 = a0 => ({
  "ml--s": a0
});
class ContentPageComponent extends _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__.SearchResultComponent {
  displayUrl;
  category;
  name;
  content;
  keyMatch;
  searchResult;
  constructor() {
    super();
  }
  static ɵfac = function ContentPageComponent_Factory(t) {
    return new (t || ContentPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContentPageComponent,
    selectors: [["tg-foundation-general-search-content-page"]],
    inputs: {
      displayUrl: "displayUrl",
      category: "category",
      name: "name",
      content: "content",
      keyMatch: "keyMatch",
      searchResult: "searchResult"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 15,
    consts: [[1, "width-full", "border--b--r", "border-width--b--r", "border-color--b--light-grey", "border-style--b--solid", "py--l", 3, "ngClass"], [1, "search__content__articles__link", "text-decoration--none", "color-text", 3, "href", "click"], [1, "search-article__content__header", "justify-content--start", "display--flex", "width-full", "align-items--center", "mb--xs"], [3, "color", 4, "ngIf"], [4, "ngIf"], [1, "font--body-small", "color-shade_64", 3, "ngClass", "innerHTML"], [1, "heading--6", "heading--notopmargin", "mb--xs", 3, "innerHTML"], [1, "search-article__content", 3, "innerHTML"], [3, "color"]],
    template: function ContentPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentPageComponent_Template_a_click_1_listener($event) {
          return ctx.goToResult($event, ctx.searchResult);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ContentPageComponent_tg_foundation_general_search_badge_3_Template, 3, 5, "tg-foundation-general-search-badge", 3)(4, ContentPageComponent_tg_foundation_general_search_badge_4_Template, 3, 4, "tg-foundation-general-search-badge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "h6", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.keyMatch));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.displayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.keyMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx.category))("innerHTML", ctx.displayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-testid", "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.name, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-testid", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-testid", "content");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.BadgeComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 12953:
/*!**********************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/full-content-pages/full-content-pages.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullContentPagesComponent: () => (/* binding */ FullContentPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-page/content-page.component */ 8873);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pagination/pagination.component */ 92706);







function FullContentPagesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-foundation-general-search-content-page", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResult", ctx_r0.keyMatches[0])("name", ctx_r0.keyMatches[0].name)("content", ctx_r0.keyMatches[0].content)("displayUrl", ctx_r0.keyMatches[0].url)("keyMatch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "keymatches");
  }
}
function FullContentPagesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-foundation-general-search-content-page", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const hit_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResult", hit_r3)("category", ctx_r1.getCategoryLabel(hit_r3))("name", hit_r3.name)("content", hit_r3.content)("displayUrl", hit_r3.displayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "content-page");
  }
}
function FullContentPagesComponent_tg_foundation_general_search_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-foundation-general-search-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function FullContentPagesComponent_tg_foundation_general_search_pagination_4_Template_tg_foundation_general_search_pagination_pageChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.contentPagesPageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPageNumber", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.contentPagesPagination$)) == null ? null : tmp_0_0.currentPage) || 1)("totalPages", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r2.contentPagesPagination$)) == null ? null : tmp_1_0.totalNumberOfPages) || 1);
  }
}
class FullContentPagesComponent {
  hits;
  keyMatches;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__.SearchFacadeService);
  contentPagesPagination$ = this.#searchFacadeService.contentPagesPagination$;
  contentPagesPageChanged(page) {
    this.#searchFacadeService.selectContentPagesPage(page);
  }
  getCategoryLabel(searchResultItem) {
    const category = searchResultItem.tags.find(tag => 'category' === tag.name)?.value[0];
    if (category) {
      return `tags.category.${category}`;
    }
    return '';
  }
  static ɵfac = function FullContentPagesComponent_Factory(t) {
    return new (t || FullContentPagesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FullContentPagesComponent,
    selectors: [["tg-foundation-general-search-full-content-pages"]],
    inputs: {
      hits: "hits",
      keyMatches: "keyMatches"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [["aria-live", "polite", 1, "search__content__articles"], [1, "pl--n", "list-style--none", "flex-wrap--wrap"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "currentPageNumber", "totalPages", "pageChanged", 4, "ngIf"], [3, "searchResult", "name", "content", "displayUrl", "keyMatch"], [3, "searchResult", "category", "name", "content", "displayUrl"], [3, "currentPageNumber", "totalPages", "pageChanged"]],
    template: function FullContentPagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullContentPagesComponent_ng_container_2_Template, 2, 6, "ng-container", 2)(3, FullContentPagesComponent_ng_container_3_Template, 2, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FullContentPagesComponent_tg_foundation_general_search_pagination_4_Template, 3, 6, "tg-foundation-general-search-pagination", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.keyMatches && ctx.keyMatches.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.contentPagesPagination$)) == null ? null : tmp_2_0.totalNumberOfPages) || 0) > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_2__.ContentPageComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 24996:
/*!************************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/full-hardware-pages/full-hardware-pages.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullHardwarePagesComponent: () => (/* binding */ FullHardwarePagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hardware-page/hardware-page.component */ 9055);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pagination/pagination.component */ 92706);







function FullHardwarePagesComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const hit_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResultItem", hit_r3)("detailsPagePath", ctx_r2.detailsPagePath);
  }
}
function FullHardwarePagesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullHardwarePagesComponent_div_0_ng_container_2_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hits);
  }
}
function FullHardwarePagesComponent_tg_foundation_general_search_pagination_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-foundation-general-search-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function FullHardwarePagesComponent_tg_foundation_general_search_pagination_1_Template_tg_foundation_general_search_pagination_pageChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.hardwarePagesPageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPageNumber", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r1.hardwarePagesPagination$)) == null ? null : tmp_0_0.currentPage) || 1)("totalPages", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r1.hardwarePagesPagination$)) == null ? null : tmp_1_0.totalNumberOfPages) || 1);
  }
}
class FullHardwarePagesComponent {
  hits;
  detailsPagePath;
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__.SearchFacadeService);
  hardwarePagesPagination$ = this.#searchFacadeService.hardwarePagesPagination$;
  hardwarePagesPageChanged(page) {
    this.#searchFacadeService.selectHardwarePage(page);
  }
  static ɵfac = function FullHardwarePagesComponent_Factory(t) {
    return new (t || FullHardwarePagesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FullHardwarePagesComponent,
    selectors: [["tg-foundation-general-search-full-hardware-pages"]],
    inputs: {
      hits: "hits",
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 4,
    consts: [["class", "search__content__hardware", "aria-live", "polite", 4, "ngIf"], [3, "currentPageNumber", "totalPages", "pageChanged", 4, "ngIf"], ["aria-live", "polite", 1, "search__content__hardware"], [1, "clear-both", "display--flex", "flex-wrap--wrap", "list-style--none", "pt--l", "pl--n"], [4, "ngFor", "ngForOf"], ["tg-general-search-hardware-page", "", 1, "display--flex", "width--full", "mb--l", "mr--m", 3, "searchResultItem", "detailsPagePath"], [3, "currentPageNumber", "totalPages", "pageChanged"]],
    template: function FullHardwarePagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FullHardwarePagesComponent_div_0_Template, 3, 1, "div", 0)(1, FullHardwarePagesComponent_tg_foundation_general_search_pagination_1_Template, 3, 6, "tg-foundation-general-search-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.hardwarePagesPagination$)) == null ? null : tmp_1_0.totalNumberOfPages) || 0) > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_2__.HardwarePageComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9055:
/*!************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/hardware-page/hardware-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwarePageComponent: () => (/* binding */ HardwarePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @general/ui-search */ 7263);
/* harmony import */ var _general_ui_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_general_ui_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_price_hardware_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hardware-price/hardware-price.component */ 74186);
/* harmony import */ var _hardware_plan_hardware_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hardware-plan/hardware-plan.component */ 29268);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-result/search-result.component */ 62036);
/* harmony import */ var _pipes_tln_tag_badge_color_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/tln-tag-badge-color.pipe */ 35763);
/* harmony import */ var _pipes_tln_tag_label_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/tln-tag-label.pipe */ 57819);
/* harmony import */ var _pipes_tln_product_tags_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/tln-product-tags.pipe */ 52391);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);













const _c0 = ["tg-general-search-hardware-page", ""];
function HardwarePageComponent_tg_foundation_general_search_badge_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "euroSign");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](3, 3, ctx_r3.searchResultItem.product.discountedPriceAfterCashback, false, false)), " ");
  }
}
function HardwarePageComponent_tg_foundation_general_search_badge_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tg-foundation-general-search-badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "tlnTagBadgeColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HardwarePageComponent_tg_foundation_general_search_badge_17_ng_container_2_Template, 4, 7, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "tlnTagLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 4, tag_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-testid", "badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.searchResultItem.product.discountedPriceAfterCashback > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, tag_r2), " ");
  }
}
function HardwarePageComponent_tg_foundation_general_search_plan_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-foundation-general-search-plan", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", ctx_r1.searchResultItem.product);
  }
}
class HardwarePageComponent extends _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__.SearchResultComponent {
  translateService;
  searchResultItem = {
    product: {
      id: ''
    }
  };
  detailsPagePath;
  locale;
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.locale = this.translateService.currentLang;
  }
  getHardwareDetailsUrl() {
    return `${this.detailsPagePath}?productId=${this.searchResultItem.product?.id}`;
  }
  static ɵfac = function HardwarePageComponent_Factory(t) {
    return new (t || HardwarePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: HardwarePageComponent,
    selectors: [["", "tg-general-search-hardware-page", ""]],
    inputs: {
      searchResultItem: "searchResultItem",
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    attrs: _c0,
    decls: 21,
    vars: 13,
    consts: [[1, "justify-content--start--md", "justify-content--center", "search-product", "display--flex", "width--full", "height--full", "text-decoration--none", "mb--l", "mx--xxs", 3, "href", "click"], [1, "cards--append", "cards--container", "cursor--pointer", "cards--shadow", "display--flex", "width--full", "border--all--n", "color-text", "link", "link--no-underline", "secondary", "justify-content--stretch", "p--m"], [1, "cards--body", "height--full"], [1, "cards--body--inner-container", "display--flex", "flex-direction--column", "height--full", "width--full"], [1, "search-product__header", "mb--l"], [1, "font--caption"], [1, "heading--6", "heading--notopmargin"], [1, "search-product__content", "display--flex", "flex-direction--column", "width--full", "height--full", "justify-content--between"], [1, "search-product__content__first"], [1, "search-product__content__image", "display--flex", "align-items--center", "justify-content--center"], [3, "src", "alt"], [1, "search-product__content__configurations", "mt--xxs"], ["tg-general-search-color-bullets", "", 1, "row", "mb--l", "justify-content--center", 3, "colors"], [1, ""], [1, "search-product__badge", "horizontal-center-align", "center-align__column"], [3, "color", 4, "ngFor", "ngForOf"], [3, "product"], [3, "product", 4, "ngIf"], [3, "color"], [4, "ngIf"]],
    template: function HardwarePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HardwarePageComponent_Template_a_click_0_listener($event) {
          return ctx.goToResult($event, ctx.searchResultItem);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HardwarePageComponent_tg_foundation_general_search_badge_17_Template, 5, 8, "tg-foundation-general-search-badge", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "tlnProductTags");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "tg-foundation-general-search-hardware-price", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HardwarePageComponent_tg_foundation_general_search_plan_20_Template, 1, 1, "tg-foundation-general-search-plan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx.getHardwareDetailsUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-testid", "tg-foundation-general-search-hardware-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.searchResultItem.product.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.searchResultItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.searchResultItem.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", ctx.searchResultItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-testid", "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("colors", ctx.searchResultItem.product.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 11, ctx.searchResultItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", ctx.searchResultItem.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchResultItem.product);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.BadgeComponent, _hardware_price_hardware_price_component__WEBPACK_IMPORTED_MODULE_2__.HardwarePriceComponent, _hardware_plan_hardware_plan_component__WEBPACK_IMPORTED_MODULE_3__.HardwarePlanComponent, _general_ui_search__WEBPACK_IMPORTED_MODULE_1__.ColorBulletComponent, _pipes_tln_tag_badge_color_pipe__WEBPACK_IMPORTED_MODULE_5__.TlnTagBadgeColorPipe, _pipes_tln_tag_label_pipe__WEBPACK_IMPORTED_MODULE_6__.TlnTagLabelPipe, _pipes_tln_product_tags_pipe__WEBPACK_IMPORTED_MODULE_7__.TlnProductTagsPipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__.PricePipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__.EuroSignPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 29268:
/*!************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/hardware-plan/hardware-plan.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwarePlanComponent: () => (/* binding */ HardwarePlanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);







function HardwarePlanComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const productPlan_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.search-results-page.lbl.with"), " ", productPlan_r1 == null ? null : productPlan_r1.product == null ? null : productPlan_r1.product.labelkey, " ");
  }
}
class HardwarePlanComponent {
  hardwarePlanService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.HardwarePlanService);
  product;
  $plan;
  ngOnInit() {
    if (this.product?.plan) {
      this.$plan = this.hardwarePlanService.getHardwarePlan(this.product.plan);
    }
  }
  static ɵfac = function HardwarePlanComponent_Factory(t) {
    return new (t || HardwarePlanComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HardwarePlanComponent,
    selectors: [["tg-foundation-general-search-plan"]],
    inputs: {
      product: "product"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "search-product__content__plan", "font--caption", "mt--m", "mb--n", "align-items--baseline"], [4, "ngIf"]],
    template: function HardwarePlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HardwarePlanComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.$plan));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 74186:
/*!**************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/hardware-price/hardware-price.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwarePriceComponent: () => (/* binding */ HardwarePriceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);









function HardwarePriceComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HardwarePriceComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function HardwarePriceComponent_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function HardwarePriceComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HardwarePriceComponent_ng_container_11_ng_container_1_Template, 2, 0, "ng-container", 7)(2, HardwarePriceComponent_ng_container_11_ng_container_2_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "euroSign");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.locale !== "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.locale === "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "" + ctx_r1.product.discountedPrice).split(".")[1], " ");
  }
}
function HardwarePriceComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "back-euro-sign");
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__["default"]);
class HardwarePriceComponent {
  translateService;
  product = {
    originalPrice: 0
  };
  locale;
  constructor(translateService) {
    this.translateService = translateService;
    this.locale = this.translateService.currentLang;
  }
  static ɵfac = function HardwarePriceComponent_Factory(t) {
    return new (t || HardwarePriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HardwarePriceComponent,
    selectors: [["tg-foundation-general-search-hardware-price"]],
    inputs: {
      product: "product"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 18,
    consts: [[1, "search-product__content__price", "mt--l", "display--flex", "align-items--end"], [1, "promo-highlight", "display--flex", "flex-direction--row", "align-items--end", "flex-wrap--wrap"], [1, "promo-highlight__second-row", "text-decoration--line-through", "align-items--baseline", "font--caption", "space-nowrap"], [1, "promo-highlight__third-row", "display--flex", "justify-content--center", "space-nowrap"], ["class", "promo-highlight__third-row--before-text text--xm line-height--18", 4, "ngIf"], [1, "promo-highlight__third-row--price"], [1, "promo-highlight__third-row--with-comma", "text--m", "line-height--18"], [4, "ngIf"], [1, "promo-highlight__third-row--before-text", "text--xm", "line-height--18"]],
    template: function HardwarePriceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "euroSign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HardwarePriceComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HardwarePriceComponent_ng_container_11_Template, 5, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "euroSign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HardwarePriceComponent_span_13_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "original-price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](5, 11, ctx.product.originalPrice, false, false, ctx.locale)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "front-euro-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.locale !== "fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ("" + ctx.product.discountedPrice).split(".")[0], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-testid", "price-decimals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 16, "" + ctx.product.discountedPrice).split(".").length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.locale === "fr");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.EuroSignPipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91992:
/*!******************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/no-results/no-results.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoResultsComponent: () => (/* binding */ NoResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








function NoResultsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fragment_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", fragment_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class NoResultsComponent {
  noResultsExpFragmentLocation = '';
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_3__.SearchFacadeService);
  #experienceFragmentService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.ExperienceFragmentService);
  query$ = this.#searchFacadeService.query$;
  noResultsExpFragment;
  ngOnInit() {
    if (this.noResultsExpFragmentLocation) {
      const lastIndexOfSlash = this.noResultsExpFragmentLocation.lastIndexOf('/');
      const name = this.noResultsExpFragmentLocation.substring(lastIndexOfSlash + 1);
      const location = this.noResultsExpFragmentLocation.substring(0, lastIndexOfSlash);
      this.noResultsExpFragment = this.#experienceFragmentService.fetchExpFragment(name, location);
    }
  }
  static ɵfac = function NoResultsComponent_Factory(t) {
    return new (t || NoResultsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NoResultsComponent,
    selectors: [["tg-foundation-general-search-no-results"]],
    inputs: {
      noResultsExpFragmentLocation: "noResultsExpFragmentLocation"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 13,
    consts: [[1, "search__content"], [1, "search__content__no-result", "pb--l"], [1, "heading--4", "heading--notopmargin"], [1, "font-body-regular", "pb--s"], [4, "ngIf"], [3, "innerHTML"]],
    template: function NoResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NoResultsComponent_ng_container_12_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "no-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "ng.search-results-page.lbl.noresults"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ng.search-results-page.lbl.sorrymessage"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.query$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, ctx.noResultsExpFragment));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 28782:
/*!****************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/page-controller/page-controller.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageControllerComponent: () => (/* binding */ PageControllerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _full_hardware_pages_full_hardware_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../full-hardware-pages/full-hardware-pages.component */ 24996);
/* harmony import */ var _full_content_pages_full_content_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../full-content-pages/full-content-pages.component */ 12953);
/* harmony import */ var _blended_hardware_pages_blended_hardware_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blended-hardware-pages/blended-hardware-pages.component */ 19444);
/* harmony import */ var _blended_content_pages_blended_content_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blended-content-pages/blended-content-pages.component */ 18966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);







function PageControllerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hr", 1)(2, "tg-foundation-general-search-full-hardware-pages", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hits", ctx_r0.hardwareItems)("detailsPagePath", ctx_r0.detailsPagePath);
  }
}
function PageControllerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hr", 1)(2, "tg-foundation-general-search-blended-hardware-pages", 2)(3, "tg-foundation-general-search-blended-content-pages", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hits", ctx_r1.hardwareItems)("detailsPagePath", ctx_r1.detailsPagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hits", ctx_r1.contentItems);
  }
}
function PageControllerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hr", 1)(2, "tg-foundation-general-search-full-content-pages", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hits", ctx_r2.contentItems)("keyMatches", ctx_r2.keyMatches);
  }
}
var ContentType;
(function (ContentType) {
  ContentType[ContentType["LOADING"] = 0] = "LOADING";
  ContentType[ContentType["NO_RESULTS"] = 1] = "NO_RESULTS";
  ContentType[ContentType["CONTENT"] = 2] = "CONTENT";
  ContentType[ContentType["HARDWARE"] = 3] = "HARDWARE";
  ContentType[ContentType["BLENDED"] = 4] = "BLENDED";
})(ContentType || (ContentType = {}));
class PageControllerComponent {
  loading = true;
  contentItems;
  keyMatches;
  hardwareItems;
  detailsPagePath;
  ContentType = ContentType;
  getContentType = () => {
    if (this.loading) {
      return ContentType.LOADING;
    }
    const hasContent = this.contentItems && this.contentItems.length > 0;
    const hasHardware = this.hardwareItems && this.hardwareItems.length > 0;
    if (hasContent && hasHardware) {
      return ContentType.BLENDED;
    } else if (hasContent) {
      return ContentType.CONTENT;
    } else if (hasHardware) {
      return ContentType.HARDWARE;
    } else {
      return ContentType.NO_RESULTS;
    }
  };
  static ɵfac = function PageControllerComponent_Factory(t) {
    return new (t || PageControllerComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PageControllerComponent,
    selectors: [["tg-foundation-general-search-page-controller"]],
    inputs: {
      loading: "loading",
      contentItems: "contentItems",
      keyMatches: "keyMatches",
      hardwareItems: "hardwareItems",
      detailsPagePath: "detailsPagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], [1, "divider", "divider--s__very-light-grey", "m--n"], [3, "hits", "detailsPagePath"], [3, "hits"], [3, "hits", "keyMatches"]],
    template: function PageControllerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PageControllerComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, PageControllerComponent_ng_container_1_Template, 4, 3, "ng-container", 0)(2, PageControllerComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getContentType() === ctx.ContentType.HARDWARE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getContentType() === ctx.ContentType.BLENDED);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getContentType() === ctx.ContentType.CONTENT);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _full_hardware_pages_full_hardware_pages_component__WEBPACK_IMPORTED_MODULE_1__.FullHardwarePagesComponent, _full_content_pages_full_content_pages_component__WEBPACK_IMPORTED_MODULE_2__.FullContentPagesComponent, _blended_content_pages_blended_content_pages_component__WEBPACK_IMPORTED_MODULE_4__.BlendedContentPagesComponent, _blended_hardware_pages_blended_hardware_pages_component__WEBPACK_IMPORTED_MODULE_3__.BlendedHardwarePagesComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 62036:
/*!************************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pages/search-result/search-result.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultComponent: () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class SearchResultComponent {
  searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_0__.SearchFacadeService);
  goToResult($event, searchResultItem) {
    if ($event.currentTarget?.['href']) {
      $event.preventDefault();
      sessionStorage.setItem('searchResultId', searchResultItem.id);
      this.searchFacadeService.goToResultFromResultsPage($event.currentTarget?.['href'], searchResultItem);
    }
  }
}

/***/ }),

/***/ 92706:
/*!************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pagination/pagination.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




function PaginationComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.goToPreviousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function PaginationComponent_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_4_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const pageNumber_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.goToPage(pageNumber_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pageNumber_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.isCurrent(pageNumber_r5) ? "active" : "in-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.isCurrent(pageNumber_r5) ? "pagination__list__item__active" : "pagination__list__item__in-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageNumber_r5, " ");
  }
}
function PaginationComponent_ng_container_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageNumber_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageNumber_r5, " ");
  }
}
function PaginationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_ng_container_4_li_1_Template, 3, 3, "li", 8)(2, PaginationComponent_ng_container_4_li_2_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pageNumber_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPageNumber(pageNumber_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isPageNumber(pageNumber_r5));
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.goToNextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class PaginationComponent {
  DOTS = '...';
  NUMBER_OF_PAGES = 5;
  totalPages;
  currentPageNumber;
  pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  visiblePageNumbers = [];
  ngOnChanges() {
    this.visiblePageNumbers = this.createPageNumberArray();
  }
  goToPreviousPage() {
    this.emitNewPage(this.currentPageNumber - 1);
  }
  goToNextPage() {
    this.emitNewPage(this.currentPageNumber + 1);
  }
  goToPage(s) {
    const i = +s;
    if (!isNaN(i)) {
      this.emitNewPage(+s);
    }
  }
  isCurrent(s) {
    return this.isPageNumber(s) && this.currentPageNumber === +s;
  }
  getVisiblePageNumbersWithDots() {
    const first = this.visiblePageNumbers[0];
    const last = this.visiblePageNumbers[this.visiblePageNumbers.length - 1];
    const output = this.visiblePageNumbers.map(i => i.toString());
    if (first !== 1) {
      output.splice(0, 1, '1', this.DOTS);
    }
    if (last !== this.totalPages) {
      output.splice(output.length - 1, 1, this.DOTS, this.totalPages.toString());
    }
    return output;
  }
  isPageNumber(s) {
    return !isNaN(+s);
  }
  displayLeftArrow() {
    return this.visiblePageNumbers.length !== 0 && this.visiblePageNumbers[0] !== 1;
  }
  displayRightArrow() {
    return this.visiblePageNumbers.length !== 0 && this.totalPages - this.visiblePageNumbers[this.visiblePageNumbers.length - 1] !== 0;
  }
  emitNewPage(number) {
    this.pageChanged.emit(number);
  }
  createPageNumberArray() {
    const halfNumberOfPages = Math.ceil(this.NUMBER_OF_PAGES / 2);
    if (this.totalPages <= this.NUMBER_OF_PAGES) {
      return this.generatePageRange(1, this.totalPages);
    }
    if (this.currentPageNumber <= halfNumberOfPages) {
      return this.generatePageRange(1, this.NUMBER_OF_PAGES);
    }
    if (this.currentPageNumber + halfNumberOfPages - 1 >= this.totalPages) {
      return this.generatePageRange(this.totalPages - this.NUMBER_OF_PAGES + 1, this.totalPages);
    }
    const startPage = this.currentPageNumber - halfNumberOfPages + 1;
    const endPage = this.currentPageNumber + halfNumberOfPages - 1;
    return this.generatePageRange(startPage, endPage);
  }
  generatePageRange(start, end) {
    return Array.from(Array(end - start + 1).keys()).map(i => start + i);
  }
  static ɵfac = function PaginationComponent_Factory(t) {
    return new (t || PaginationComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaginationComponent,
    selectors: [["tg-foundation-general-search-pagination"]],
    inputs: {
      totalPages: "totalPages",
      currentPageNumber: "currentPageNumber"
    },
    outputs: {
      pageChanged: "pageChanged"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 3,
    consts: [[1, "search__pagination", "pt--xs"], [1, "pagination"], [1, "pagination__list"], ["class", "pagination__list__item", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "pagination__list__item"], ["href", "javascript:void(0);", 1, "pagination__list__link", 3, "click"], [1, "icon", "icon-chevron-left", "font-weight--bold"], ["class", "pagination__list__item", 3, "ngClass", 4, "ngIf"], [1, "pagination__list__item", 3, "ngClass"], ["href", "javascript:void(0);", 3, "ngClass", "click"], ["href", "javascript:void(0);", 1, "pagination__list__link", "pagination__list__link--enabled", 3, "click"], [1, "icon", "icon-chevron-right", "font-weight--bold"]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 0, "li", 3)(4, PaginationComponent_ng_container_4_Template, 3, 2, "ng-container", 4)(5, PaginationComponent_li_5_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayLeftArrow());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getVisiblePageNumbersWithDots());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayRightArrow());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52391:
/*!********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pipes/tln-product-tags.pipe.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlnProductTagsPipe: () => (/* binding */ TlnProductTagsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class TlnProductTagsPipe {
  transform(value) {
    return value.product?.tags && value.product?.tags.length > 0 ? value.product?.tags.filter(tag => tag.startsWith('cp_label') || tag.startsWith('vp_label') || tag.startsWith('online_excl') || tag.startsWith('pre_order_label')) : [];
  }
  static ɵfac = function TlnProductTagsPipe_Factory(t) {
    return new (t || TlnProductTagsPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tlnProductTags",
    type: TlnProductTagsPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 35763:
/*!***********************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pipes/tln-tag-badge-color.pipe.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlnTagBadgeColorPipe: () => (/* binding */ TlnTagBadgeColorPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class TlnTagBadgeColorPipe {
  transform(value) {
    if (value.startsWith('cp_label')) {
      return 'cashback';
    }
    if (value.startsWith('vp_label')) {
      return 'accessories';
    }
    if (value.startsWith('online_excl')) {
      return 'recommended';
    }
    if (value.startsWith('pre_order_label')) {
      return 'recommended';
    }
    return 'info';
  }
  static ɵfac = function TlnTagBadgeColorPipe_Factory(t) {
    return new (t || TlnTagBadgeColorPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tlnTagBadgeColor",
    type: TlnTagBadgeColorPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 57819:
/*!*****************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/pipes/tln-tag-label.pipe.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TlnTagLabelPipe: () => (/* binding */ TlnTagLabelPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class TlnTagLabelPipe {
  transform(value) {
    if (value.startsWith('cp_label') || value.startsWith('vp_label') || value.startsWith('online_excl') || value.startsWith('pre_order_label')) {
      return value.split('|')[1];
    }
    return value;
  }
  static ɵfac = function TlnTagLabelPipe_Factory(t) {
    return new (t || TlnTagLabelPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tlnTagLabel",
    type: TlnTagLabelPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 52942:
/*!*****************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/search-results.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsComponent: () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _facet_experience_facet_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facet-experience/facet-experience.component */ 61019);
/* harmony import */ var _searched_for_searched_for_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searched-for/searched-for.component */ 21391);
/* harmony import */ var _pages_page_controller_page_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-controller/page-controller.component */ 28782);












function SearchResultsComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const appliedFilter_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, appliedFilter_r1), "", last_r2 ? "" : ", ", " ");
  }
}
class SearchResultsComponent {
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchFacadeService);
  #urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  filtersOverlayActive = false;
  searchResultsCollections = '[]';
  searchResultsFacets = '[]';
  detailsPagePath = '';
  includeHardwareResults;
  noResultsFragmentLocation = '';
  brand;
  language;
  includeHardwareResultsBool;
  facetGroups$ = this.#searchFacadeService.facetsGroups$;
  collections$ = this.#searchFacadeService.collections$;
  appliedFilters$ = this.#searchFacadeService.appliedFilters$;
  query$ = this.#searchFacadeService.query$;
  numberOfSearchResults$ = this.#searchFacadeService.numberOfSearchResults$;
  contentItems$ = this.#searchFacadeService.contentPages$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(content => content?.hits));
  keyMatches$ = this.#searchFacadeService.contentPages$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(content => content?.keymatches));
  didYouMean$ = this.#searchFacadeService.contentPages$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(content => content?.didYouMean));
  hardwareItems$ = this.#searchFacadeService.hardware$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(hw => hw?.hits));
  loading$ = this.#searchFacadeService.resultsLoading$;
  ngOnInit() {
    this.#searchFacadeService.setResultsComponentFound(true);
    this.setQueryParams();
    this.includeHardwareResultsBool = JSON.parse(this.includeHardwareResults);
    if (!this.#searchFacadeService.getBrand() && !this.#searchFacadeService.getLanguage()) {
      this.#searchFacadeService.setInputParameters('', '', this.brand, this.language);
    }
    this.#searchFacadeService.initialSearch(JSON.parse(this.searchResultsCollections), JSON.parse(this.convertInputToJson(this.searchResultsFacets)), this.includeHardwareResultsBool);
  }
  facetChanged(groupIndex, facetIndex) {
    this.#searchFacadeService.selectFacet(groupIndex, facetIndex, this.includeHardwareResultsBool);
  }
  facetsCleared() {
    this.#searchFacadeService.clearFacets(this.includeHardwareResultsBool);
  }
  collectionChanged(collectionIndex) {
    this.#searchFacadeService.selectCollection(collectionIndex, this.includeHardwareResultsBool);
  }
  toggleFiltersOverlay() {
    this.filtersOverlayActive = !this.filtersOverlayActive;
  }
  setQueryParams() {
    const queryParams = this.#urlService.getRequestParameters();
    const query = queryParams['q'];
    const collection = queryParams['collection'];
    const page = Number.parseInt(queryParams['page']);
    if (query) {
      this.#searchFacadeService.setQuery(query);
    }
    if (collection) {
      this.processAndSetCollection(collection);
    }
    if (page) {
      this.#searchFacadeService.setPage(page);
    }
  }
  convertInputToJson(input) {
    return `[${input.slice(1, -1).split(',').map(value => `"${value}"`).join(', ')}]`;
  }
  processAndSetCollection(collection) {
    const baseSearchValue = collection.replace(/_[a-zA-Z]{2}$/, '');
    const regex = new RegExp(`"value":\\s*"(${baseSearchValue}(?:_[a-zA-Z]{2})?)"`);
    const matches = this.searchResultsCollections.match(regex);
    if (matches) {
      this.#urlService.replaceURLParameters([{
        key: 'collection',
        value: matches[1]
      }]);
      this.#searchFacadeService.setCollection(matches[1]);
    } else {
      this.#urlService.removeURLParameters(['collection']);
    }
  }
  static ɵfac = function SearchResultsComponent_Factory(t) {
    return new (t || SearchResultsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchResultsComponent,
    selectors: [["tg-foundation-general-search-results-page"]],
    inputs: {
      searchResultsCollections: "searchResultsCollections",
      searchResultsFacets: "searchResultsFacets",
      detailsPagePath: "detailsPagePath",
      includeHardwareResults: "includeHardwareResults",
      noResultsFragmentLocation: "noResultsFragmentLocation",
      brand: "brand",
      language: "language"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 42,
    consts: [["tg-general-search-facets", "", 1, "search", "display--flex", 3, "facetGroups", "collections", "overlayActive", "facetChanged", "facetsCleared", "collectionChanged", "overlayActiveChange"], [1, "search__content"], [3, "query", "numberOfSearchResults", "loading", "didYouMean", "noResultsFragmentLocation"], [1, "hide-from-md"], [1, "py--m"], [1, "button", "button--secondary", "button--fullwidth", "button--filter", 3, "click"], [1, "divider", "divider--s__very-light-grey", "mb--n"], [4, "ngFor", "ngForOf"], [3, "contentItems", "keyMatches", "hardwareItems", "loading", "detailsPagePath"]],
    template: function SearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("facetChanged", function SearchResultsComponent_Template_div_facetChanged_0_listener($event) {
          return ctx.facetChanged($event.groupIndex, $event.facetIndex);
        })("facetsCleared", function SearchResultsComponent_Template_div_facetsCleared_0_listener() {
          return ctx.facetsCleared();
        })("collectionChanged", function SearchResultsComponent_Template_div_collectionChanged_0_listener($event) {
          return ctx.collectionChanged($event);
        })("overlayActiveChange", function SearchResultsComponent_Template_div_overlayActiveChange_0_listener($event) {
          return ctx.filtersOverlayActive = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tg-foundation-general-search-searched-for", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultsComponent_Template_button_click_11_listener() {
          return ctx.toggleFiltersOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "p")(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchResultsComponent_ng_container_21_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tg-foundation-general-search-page-controller", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("facetGroups", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 16, ctx.facetGroups$))("collections", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 18, ctx.collections$))("overlayActive", ctx.filtersOverlayActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("query", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 20, ctx.query$))("numberOfSearchResults", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 22, ctx.numberOfSearchResults$))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 24, ctx.loading$))("didYouMean", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 26, ctx.didYouMean$))("noResultsFragmentLocation", ctx.noResultsFragmentLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, "ng.search-results-page.lbl.filter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 30, "ng.search-results-page.lbl.activefilters"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 32, ctx.appliedFilters$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 34, ctx.contentItems$))("keyMatches", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 36, ctx.keyMatches$))("hardwareItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 38, ctx.hardwareItems$))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 40, ctx.loading$))("detailsPagePath", ctx.detailsPagePath);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _general_data_access_search__WEBPACK_IMPORTED_MODULE_2__.SearchNgrxModule, _facet_experience_facet_experience_component__WEBPACK_IMPORTED_MODULE_6__.FacetExperienceComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _searched_for_searched_for_component__WEBPACK_IMPORTED_MODULE_7__.SearchedForComponent, _pages_page_controller_page_controller_component__WEBPACK_IMPORTED_MODULE_8__.PageControllerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21391:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/general/search/feat-results/src/lib/searched-for/searched-for.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchedForComponent: () => (/* binding */ SearchedForComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/no-results/no-results.component */ 91992);
/* harmony import */ var _didyoumean_didyoumean_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../didyoumean/didyoumean.component */ 52113);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @general/data-access-search */ 61758);
/* harmony import */ var _general_data_access_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_general_data_access_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const _c0 = ["hardwareTitle"];
function SearchedForComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "ng.search-results-page.lbl.resultsfor"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r4.numberOfSearchResults || 0, ")");
  }
}
function SearchedForComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.search-results-page.lbl.allresults"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r5.numberOfSearchResults || 0, ")");
  }
}
function SearchedForComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchedForComponent_div_0_ng_container_3_Template, 7, 5, "ng-container", 6)(4, SearchedForComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "search-result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.query);
  }
}
function SearchedForComponent_tg_foundation_general_search_didyoumean_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-foundation-general-search-didyoumean", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.didYouMean);
  }
}
function SearchedForComponent_tg_foundation_general_search_no_results_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-foundation-general-search-no-results", 9);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noResultsExpFragmentLocation", ctx_r2.noResultsFragmentLocation);
  }
}
let SearchedForComponent = class SearchedForComponent {
  #searchFacadeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_general_data_access_search__WEBPACK_IMPORTED_MODULE_5__.SearchFacadeService);
  query;
  numberOfSearchResults;
  loading = true;
  didYouMean;
  noResultsFragmentLocation = '';
  scrollTargetRef;
  ngOnInit() {
    this.#searchFacadeService.hardware$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => {
      if (this.scrollTargetRef && this.scrollTargetRef.nativeElement) {
        this.scrollTargetRef.nativeElement.scrollIntoView();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe();
  }
  static ɵfac = function SearchedForComponent_Factory(t) {
    return new (t || SearchedForComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchedForComponent,
    selectors: [["tg-foundation-general-search-searched-for"]],
    viewQuery: function SearchedForComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollTargetRef = _t.first);
      }
    },
    inputs: {
      query: "query",
      numberOfSearchResults: "numberOfSearchResults",
      loading: "loading",
      didYouMean: "didYouMean",
      noResultsFragmentLocation: "noResultsFragmentLocation"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["class", "search__content__header width--full display--flex align-items--center justify-content--between pb--l", 4, "ngIf"], [3, "items", 4, "ngIf"], [3, "noResultsExpFragmentLocation", 4, "ngIf"], [1, "search__content__header", "width--full", "display--flex", "align-items--center", "justify-content--between", "pb--l"], ["hardwareTitle", ""], [1, "font--body-large"], [4, "ngIf"], [1, "font--caption-small", "color-shade_64"], [3, "items"], [3, "noResultsExpFragmentLocation"]],
    template: function SearchedForComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchedForComponent_div_0_Template, 5, 3, "div", 0)(1, SearchedForComponent_tg_foundation_general_search_didyoumean_1_Template, 1, 1, "tg-foundation-general-search-didyoumean", 1)(2, SearchedForComponent_tg_foundation_general_search_no_results_2_Template, 1, 1, "tg-foundation-general-search-no-results", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfSearchResults && ctx.numberOfSearchResults > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.didYouMean);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && (!ctx.numberOfSearchResults || ctx.numberOfSearchResults === 0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _pages_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_3__.NoResultsComponent, _didyoumean_didyoumean_component__WEBPACK_IMPORTED_MODULE_4__.DidyoumeanComponent],
    encapsulation: 2
  });
};
SearchedForComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], SearchedForComponent);


/***/ }),

/***/ 72060:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/en.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["en", [["a", "p"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural]);

/***/ }),

/***/ 12602:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length,
    e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
  if (i === 0 || i === 1) return 1;
  if (e === 0 && !(i === 0) && i % 1000000 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["fr", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u, "р."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u, "¥"],
  "COP": ["$CO", "$"],
  "CYP": ["£CY"],
  "EGP": [u, "£E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["£FK", "£"],
  "FRF": ["F"],
  "GBP": ["£GB", "£"],
  "GIP": ["£GI", "£"],
  "HKD": [u, "$"],
  "IEP": ["£IE"],
  "ILP": ["£IL"],
  "ITL": ["₤IT"],
  "JPY": [u, "¥"],
  "KMF": [u, "FC"],
  "LBP": ["£LB", "£L"],
  "MTP": ["£MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u, "₱"],
  "RHD": ["$RH"],
  "RON": [u, "L"],
  "RWF": [u, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u, "Kw"]
}, "ltr", plural]);

/***/ }),

/***/ 17754:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/nl.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["nl", [["a.m.", "p.m."], u, u], u, [["Z", "M", "D", "W", "D", "V", "Z"], ["zo", "ma", "di", "wo", "do", "vr", "za"], ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], ["zo", "ma", "di", "wo", "do", "vr", "za"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]], u, [["v.C.", "n.C."], ["v.Chr.", "n.Chr."], ["voor Christus", "na Christus"]], 1, [6, 0], ["dd-MM-y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, "{1} 'om' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤ #,##0.00;¤ -#,##0.00", "#E0"], "EUR", "€", "Euro", {
  "AUD": ["AU$", "$"],
  "BYN": [u, "р."],
  "CAD": ["C$", "$"],
  "FJD": ["FJ$", "$"],
  "JPY": ["JP¥", "¥"],
  "PHP": [u, "₱"],
  "RUR": [u, "р."],
  "SBD": ["SI$", "$"],
  "THB": ["฿"],
  "TWD": ["NT$"],
  "USD": ["US$", "$"],
  "XPF": [],
  "XXX": []
}, "ltr", plural]);

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

/***/ 41904:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm2022/ngx-slick-carousel.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlickCarouselComponent: () => (/* binding */ SlickCarouselComponent),
/* harmony export */   SlickCarouselModule: () => (/* binding */ SlickCarouselModule),
/* harmony export */   SlickItemDirective: () => (/* binding */ SlickItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);





/**
 * Slick component
 */
const _c0 = ["*"];
class SlickCarouselComponent {
  config;
  afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  $instance;
  // access from parent component can be a problem with change detection timing. Please use afterChange output
  currentIndex = 0;
  slides = [];
  initialized = false;
  _removedSlides = [];
  _addedSlides = [];
  el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
  zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  /**
   * On component destroy
   */
  ngOnDestroy() {
    this.unslick();
  }
  ngAfterViewInit() {
    this.ngAfterViewChecked();
  }
  /**
   * On component view checked
   */
  ngAfterViewChecked() {
    if (this.isServer) {
      return;
    }
    if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
      const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
      if (!this.initialized) {
        if (nextSlidesLength > 0) {
          this.initSlick();
        }
        // if nextSlidesLength is zere, do nothing
      } else if (nextSlidesLength === 0) {
        // unslick case
        this.unslick();
      } else {
        this._addedSlides.forEach(slickItem => {
          this.slides.push(slickItem);
          this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickAdd', slickItem.el.nativeElement);
          });
        });
        this._addedSlides = [];
        this._removedSlides.forEach(slickItem => {
          const idx = this.slides.indexOf(slickItem);
          this.slides = this.slides.filter(s => s !== slickItem);
          this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickRemove', idx);
          });
        });
        this._removedSlides = [];
      }
    }
  }
  /**
   * init slick
   */
  initSlick() {
    this.slides = this._addedSlides;
    this._addedSlides = [];
    this._removedSlides = [];
    this.zone.runOutsideAngular(() => {
      this.$instance = jQuery(this.el.nativeElement);
      this.$instance.on('init', (event, slick) => {
        this.zone.run(() => {
          this.init.emit({
            event,
            slick
          });
        });
      });
      this.$instance.slick(this.config);
      this.zone.run(() => {
        this.initialized = true;
        this.currentIndex = this.config?.initialSlide || 0;
      });
      this.$instance.on('afterChange', (event, slick, currentSlide) => {
        this.zone.run(() => {
          this.afterChange.emit({
            event,
            slick,
            currentSlide,
            first: currentSlide === 0,
            last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
          });
          this.currentIndex = currentSlide;
        });
      });
      this.$instance.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        this.zone.run(() => {
          this.beforeChange.emit({
            event,
            slick,
            currentSlide,
            nextSlide
          });
          this.currentIndex = nextSlide;
        });
      });
      this.$instance.on('breakpoint', (event, slick, breakpoint) => {
        this.zone.run(() => {
          this.breakpoint.emit({
            event,
            slick,
            breakpoint
          });
        });
      });
      this.$instance.on('destroy', (event, slick) => {
        this.zone.run(() => {
          this.destroy.emit({
            event,
            slick
          });
          this.initialized = false;
        });
      });
    });
  }
  addSlide(slickItem) {
    this._addedSlides.push(slickItem);
  }
  removeSlide(slickItem) {
    this._removedSlides.push(slickItem);
  }
  /**
   * Slick Method
   */
  slickGoTo(index) {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickGoTo', index);
    });
  }
  slickNext() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickNext');
    });
  }
  slickPrev() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPrev');
    });
  }
  slickPause() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPause');
    });
  }
  slickPlay() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPlay');
    });
  }
  unslick() {
    if (this.$instance) {
      this.zone.runOutsideAngular(() => {
        this.$instance.slick('unslick');
      });
      this.$instance = undefined;
    }
    this.initialized = false;
  }
  ngOnChanges(changes) {
    if (this.initialized) {
      const config = changes['config'];
      if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
        const refresh = config.currentValue['refresh'];
        const newOptions = Object.assign({}, config.currentValue);
        delete newOptions['refresh'];
        this.zone.runOutsideAngular(() => {
          this.$instance.slick('slickSetOption', newOptions, refresh);
        });
      }
    }
  }
  /** @nocollapse */
  static ɵfac = function SlickCarouselComponent_Factory(t) {
    return new (t || SlickCarouselComponent)();
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SlickCarouselComponent,
    selectors: [["ngx-slick-carousel"]],
    inputs: {
      config: "config"
    },
    outputs: {
      afterChange: "afterChange",
      beforeChange: "beforeChange",
      breakpoint: "breakpoint",
      destroy: "destroy",
      init: "init"
    },
    exportAs: ["slick-carousel"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SlickCarouselComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SlickCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlickCarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-slick-carousel',
      exportAs: 'slick-carousel',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SlickCarouselComponent),
        multi: true
      }],
      template: '<ng-content></ng-content>'
    }]
  }], null, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    afterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    beforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    destroy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    init: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SlickItemDirective {
  carousel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(SlickCarouselComponent, {
    host: true
  });
  renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2);
  el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
  isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  ngOnInit() {
    this.carousel.addSlide(this);
    if (this.isServer && this.carousel.slides.length > 0) {
      // Do not show other slides in server side rendering (broken ui can be affacted to Core Web Vitals)
      this.renderer.setStyle(this.el, 'display', 'none');
    }
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
  /** @nocollapse */
  static ɵfac = function SlickItemDirective_Factory(t) {
    return new (t || SlickItemDirective)();
  };
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SlickItemDirective,
    selectors: [["", "ngxSlickItem", ""]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlickItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ngxSlickItem]'
    }]
  }], null, null);
})();
class SlickCarouselModule {
  /** @nocollapse */static ɵfac = function SlickCarouselModule_Factory(t) {
    return new (t || SlickCarouselModule)();
  };
  /** @nocollapse */
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SlickCarouselModule
  });
  /** @nocollapse */
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlickCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      declarations: [SlickCarouselComponent, SlickItemDirective],
      exports: [SlickCarouselComponent, SlickItemDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_foundation_general_search_feat-results_src_index_ts.js.map