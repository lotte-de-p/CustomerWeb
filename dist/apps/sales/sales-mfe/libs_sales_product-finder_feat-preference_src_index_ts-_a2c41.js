(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-preference_src_index_ts-_a2c41"],{

/***/ 61523:
/*!****************************************************************!*\
  !*** ./libs/sales/product-finder/feat-preference/src/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenceComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PreferenceComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 81322);


/***/ }),

/***/ 81322:
/*!********************************************************************!*\
  !*** ./libs/sales/product-finder/feat-preference/src/lib/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenceComponent: () => (/* reexport safe */ _preference_preference_component__WEBPACK_IMPORTED_MODULE_0__.PreferenceComponent)
/* harmony export */ });
/* harmony import */ var _preference_preference_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preference/preference.component */ 74405);


/***/ }),

/***/ 74405:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-preference/src/lib/preference/preference.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenceComponent: () => (/* binding */ PreferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
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













function PreferenceComponent_app_overlay_popup_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-overlay-popup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("primaryButtonClicked", function PreferenceComponent_app_overlay_popup_0_Template_app_overlay_popup_primaryButtonClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.selectInternet());
    })("closeButtonClicked", function PreferenceComponent_app_overlay_popup_0_Template_app_overlay_popup_closeButtonClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, "ng.product-finder.step-preferences.popup.title"))("content", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 5, "ng.product-finder.step-preferences.popup.text"))("primaryButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, "ng.product-finder.step-preferences.popup.btn.accept"));
  }
}
function PreferenceComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 1, "ng.product-finder.step-preferences.multiple.options.error"));
  }
}
let PreferenceComponent = class PreferenceComponent {
  constructor(fb, preferenceFacade) {
    this.fb = fb;
    this.preferenceFacade = preferenceFacade;
    this.preferenceFrom = this.fb.nonNullable.group({
      mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false),
      surfing: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false),
      watchTv: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false),
      fixedLine: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false)
    });
    this.showAtLeastOneValueIsTrueError$ = this.preferenceFacade.hasErrorRequireAtLeastOnePreferenceToBeSelected$;
    this.showPopup$ = this.preferenceFacade.hasErrorRequireInternetWhenTvIsSelected$;
  }
  ngOnInit() {
    this.preferenceFacade.preference$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(preference => {
      this.preferenceFrom.patchValue(preference);
    });
    this.preferenceFrom.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(preference => {
      this.preferenceFacade.updatePreference(preference);
    });
  }
  selectInternet() {
    this.preferenceFrom.patchValue({
      surfing: true
    });
  }
  closePopup() {
    this.preferenceFacade.clearError();
  }
  static #_ = this.ɵfac = function PreferenceComponent_Factory(t) {
    return new (t || PreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.PreferenceFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: PreferenceComponent,
    selectors: [["app-sales-product-finder-preference"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 22,
    consts: [[3, "title", "content", "primaryButtonText", "primaryButtonClicked", "closeButtonClicked", 4, "ngIf"], [1, "stepper-page__body"], [1, "stepper-page__body-inner"], [1, "stepper-page__title"], [1, "text-flow", "text-flow--h3"], [1, "font--caption", "mt--xxxs", "stepper-page__title-label"], [1, "stepper-page__content--split", "container"], [1, "stepper-page__content-first", "stepper-page__content-first--full-width-img", "flex-hide-until-md", "sticky", "ml--xm--md", "ml--n--lg"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/product-finder/preference/preference.png", "alt", "preference image", 3, "moduleId"], ["id", "product-finder-v2-container", 1, "stepper-page__content-second", "mx--s--md", "mx--n--lg"], ["class", "mb--m mx--l mx--n--md", 4, "ngIf"], [1, "Container", "Container--partitioned", "py--m--md", "mx--n"], [1, "Container--partitioned--partition", "Container--partitioned--partition--last-item"], [1, "select-tile--group", "display--grid", "grid-template-column--2--md", "gap--xm", "mx--m--md", 3, "formGroup"], ["formControlName", "surfing", 3, "iconClass", "label"], ["formControlName", "watchTv", 3, "iconClass", "label"], ["formControlName", "mobile", 3, "iconClass", "label"], ["formControlName", "fixedLine", 3, "iconClass", "label"], [3, "title", "content", "primaryButtonText", "primaryButtonClicked", "closeButtonClicked"], [1, "mb--m", "mx--l", "mx--n--md"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"]],
    template: function PreferenceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PreferenceComponent_app_overlay_popup_0_Template, 4, 9, "app-overlay-popup", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, PreferenceComponent_div_15_Template, 7, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "tg-sales-checkbox", 14)(21, "tg-sales-checkbox", 15)(22, "tg-sales-checkbox", 16)(23, "tg-sales-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 14, ctx.showPopup$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 16, "ng.product-finder.step-preferences.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 18, "ng.product-finder.step-preferences.sub-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("moduleId", "product-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 20, ctx.showAtLeastOneValueIsTrueError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.preferenceFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconClass", "icon-wifi-signal")("label", "ng.product-finder.step-preferences.surf");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconClass", "icon-pc")("label", "ng.product-finder.step-preferences.watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconClass", "icon-mobile")("label", "ng.product-finder.step-preferences.mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconClass", "icon-telephone")("label", "ng.product-finder.step-preferences.fixed-line");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _sales_shared_util__WEBPACK_IMPORTED_MODULE_4__.ImageSrcInterceptorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__.OverlayPopupComponent, _sales_shared_ui__WEBPACK_IMPORTED_MODULE_7__.CheckboxComponent],
    encapsulation: 2
  });
};
PreferenceComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder, _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.PreferenceFacade])], PreferenceComponent);


/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-preference_src_index_ts-_a2c41.js.map