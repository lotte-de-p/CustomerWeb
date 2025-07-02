(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-tv-experience_src_index_ts-_b8471"],{

/***/ 19433:
/*!*******************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-experience/src/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvExperienceComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TvExperienceComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 1873);


/***/ }),

/***/ 1873:
/*!***********************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-experience/src/lib/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvExperienceComponent: () => (/* reexport safe */ _tv_experience_tv_experience_component__WEBPACK_IMPORTED_MODULE_0__.TvExperienceComponent)
/* harmony export */ });
/* harmony import */ var _tv_experience_tv_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-experience/tv-experience.component */ 85574);


/***/ }),

/***/ 85574:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-experience/src/lib/tv-experience/tv-experience.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvExperienceComponent: () => (/* binding */ TvExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);
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












function TvExperienceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "ng.product-finder.step-tv-experience.multiple.tv-experience.error"));
  }
}
function TvExperienceComponent_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tg-sales-multi-select-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TvExperienceComponent_ng_container_18_ng_container_1_Template_tg_sales_multi_select_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.updateTvExperience($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checkboxes", o_r2.checkboxes)("ngModel", o_r2.tvExperience.selection);
  }
}
function TvExperienceComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TvExperienceComponent_ng_container_18_ng_container_1_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r2.checkboxes && o_r2.tvExperience);
  }
}
const _c0 = (a0, a1) => ({
  checkboxes: a0,
  tvExperience: a1
});
let TvExperienceComponent = class TvExperienceComponent {
  constructor(tvExperienceFacade) {
    this.tvExperienceFacade = tvExperienceFacade;
    this.checkboxes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([{
      key: 'TV_BOX',
      label: 'ng.product-finder.step-tv-experience.tv-box',
      iconClass: 'icon-remote'
    }, {
      key: 'TV_APP',
      label: 'ng.product-finder.step-tv-experience.tv-app',
      iconClass: 'icon-cast'
    }]);
    this.tvExperience$ = this.tvExperienceFacade.tvExperience$;
    this.showAtLeastOneValueSelectedError$ = this.tvExperienceFacade.hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$;
  }
  updateTvExperience(selection) {
    this.tvExperienceFacade.updateTvExperience({
      selection
    });
  }
  static #_ = this.ɵfac = function TvExperienceComponent_Factory(t) {
    return new (t || TvExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__.TvExperienceFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: TvExperienceComponent,
    selectors: [["tg-sales-tv-experience"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 18,
    consts: [[1, "stepper-page__body"], [1, "stepper-page__body-inner"], [1, "stepper-page__title"], [1, "text-flow", "text-flow--h3"], [1, "font--caption", "mt--xxxs", "stepper-page__title-label"], [1, "stepper-page__content--split", "container"], [1, "stepper-page__content-first", "stepper-page__content-first--full-width-img", "flex-hide-until-md", "sticky", "ml--xm--md", "ml--n--lg"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/product-finder/tv-experience/tv-experience.png", "alt", "tv experience image", 3, "moduleId"], ["id", "product-finder-v2-container", 1, "stepper-page__content-second", "mx--s--md", "mx--n--lg"], ["class", "mb--m mx--l mx--n--md", 4, "ngIf"], [1, "Container", "Container--partitioned", "py--m--md", "mx--n"], [1, "Container--partitioned--partition", "Container--partitioned--partition--last-item"], [1, "select-tile--group", "display--grid", "grid-template-column--1--sm", "gap--xm", "mx--m--md"], [4, "ngIf"], [1, "mb--m", "mx--l", "mx--n--md"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [3, "checkboxes", "ngModel", "ngModelChange"]],
    template: function TvExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, TvExperienceComponent_div_13_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, TvExperienceComponent_ng_container_18_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, "ng.product-finder.step-tv-experience.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, "ng.product-finder.step-tv-experience.sub-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("moduleId", "product-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 9, ctx.showAtLeastOneValueSelectedError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 11, ctx.checkboxes$), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 13, ctx.tvExperience$)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__.ImageSrcInterceptorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__.MultiSelectCheckboxComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
TvExperienceComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__.TvExperienceFacade])], TvExperienceComponent);


/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-tv-experience_src_index_ts-_b8471.js.map