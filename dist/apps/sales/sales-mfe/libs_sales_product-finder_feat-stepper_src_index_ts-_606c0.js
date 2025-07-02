(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-stepper_src_index_ts-_606c0"],{

/***/ 95316:
/*!*************************************************************!*\
  !*** ./libs/sales/product-finder/feat-stepper/src/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepperComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 28679);


/***/ }),

/***/ 28679:
/*!*****************************************************************!*\
  !*** ./libs/sales/product-finder/feat-stepper/src/lib/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperComponent: () => (/* reexport safe */ _stepper_product_finder_stepper_component__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepperComponent)
/* harmony export */ });
/* harmony import */ var _stepper_product_finder_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepper/product-finder-stepper.component */ 33352);


/***/ }),

/***/ 33352:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-stepper/src/lib/stepper/product-finder-stepper.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperComponent: () => (/* binding */ ProductFinderStepperComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_product_finder_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/product-finder-view-component */ 40832);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








function ProductFinderStepperComponent_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7)(2, "div")(3, "a", 8)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9)(8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductFinderStepperComponent_div_2_ng_container_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.goToNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, "ng.product-finder.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 4, "ng.product-finder.start"));
  }
}
function ProductFinderStepperComponent_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductFinderStepperComponent_div_2_ng_template_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.goToPreviousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9)(7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductFinderStepperComponent_div_2_ng_template_4_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.goToNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "ng.product-finder.previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 4, "ng.product-finder.next"));
  }
}
function ProductFinderStepperComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("indicator-progress ready-", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r4.progressPercentage$), "");
  }
}
function ProductFinderStepperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductFinderStepperComponent_div_2_ng_container_2_Template, 12, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductFinderStepperComponent_div_2_ng_template_4_Template, 11, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductFinderStepperComponent_div_2_div_6_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx_r0.currentStepNumber$) === 1)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, ctx_r0.progressBarVisible$));
  }
}
class ProductFinderStepperComponent {
  constructor(productFinderStepperFacade) {
    this.productFinderStepperFacade = productFinderStepperFacade;
    this.currentStepNumber$ = this.productFinderStepperFacade.currentStepNumber$;
    this.progressPercentage$ = this.productFinderStepperFacade.progressPercentage$;
    this.progressBarVisible$ = this.productFinderStepperFacade.progressBarVisible$;
    this.visible$ = this.productFinderStepperFacade.visible$;
  }
  goToPreviousStep() {
    this.productFinderStepperFacade.goToPreviousStep();
  }
  goToNextStep() {
    this.productFinderStepperFacade.nextButtonClicked();
  }
  static #_ = this.ɵfac = function ProductFinderStepperComponent_Factory(t) {
    return new (t || ProductFinderStepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepperFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductFinderStepperComponent,
    selectors: [["app-sales-product-finder-stepper"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "product-finder"], ["class", "sticky-footer-v2 position--fixed background-white width--full py--m px--xm p--xm--md display--flex justify-content--center align-items--center box-sizing--inherit shadow--xs-inverse position--bottom position--left", 4, "ngIf"], [1, "sticky-footer-v2", "position--fixed", "background-white", "width--full", "py--m", "px--xm", "p--xm--md", "display--flex", "justify-content--center", "align-items--center", "box-sizing--inherit", "shadow--xs-inverse", "position--bottom", "position--left"], [1, "sticky-footer-v2__container", "width--full", "default-max-site-width", "display--flex", "justify-content--between", "align-items--center"], [4, "ngIf", "ngIfElse"], ["buttons", ""], ["class", "progress-bar", 4, "ngIf"], [1, "back-section"], ["href", "javascript:history.back();", 1, "link"], [1, "next-section"], [1, "button", "button--primary", 3, "click"], [1, "back-section", 3, "click"], [1, "link", "link--with-icon", "link--subtle"], [1, "icon", "icon-chevron-left", "icon--shaped"], [1, "progress-bar"]],
    template: function ProductFinderStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-sales-product-finder-component-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductFinderStepperComponent_div_2_Template, 8, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx.visible$));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe, _view_product_finder_view_component__WEBPACK_IMPORTED_MODULE_1__.ProductFinderViewComponent, _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepperNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_2__.ProductFinderNgrxModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40832:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-stepper/src/lib/stepper/view/product-finder-view-component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderViewComponent: () => (/* binding */ ProductFinderViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_product_finder_feat_intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/product-finder/feat-intro */ 46951);
/* harmony import */ var _sales_product_finder_feat_intro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_intro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_product_finder_feat_preference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/product-finder/feat-preference */ 71842);
/* harmony import */ var _sales_product_finder_feat_preference__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_preference__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_product_finder_feat_household__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/product-finder/feat-household */ 29921);
/* harmony import */ var _sales_product_finder_feat_household__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_household__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_product_finder_feat_internet_usage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/product-finder/feat-internet-usage */ 26441);
/* harmony import */ var _sales_product_finder_feat_internet_usage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_internet_usage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_product_finder_feat_number_of_sims__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/product-finder/feat-number-of-sims */ 14041);
/* harmony import */ var _sales_product_finder_feat_number_of_sims__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_number_of_sims__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_product_finder_feat_mobile_usage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/product-finder/feat-mobile-usage */ 93315);
/* harmony import */ var _sales_product_finder_feat_mobile_usage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_mobile_usage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sales_product_finder_feat_tv_channels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sales/product-finder/feat-tv-channels */ 37891);
/* harmony import */ var _sales_product_finder_feat_tv_channels__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_tv_channels__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sales_product_finder_feat_tv_experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/product-finder/feat-tv-experience */ 73343);
/* harmony import */ var _sales_product_finder_feat_tv_experience__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_tv_experience__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sales_product_finder_feat_results_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/product-finder/feat-results-screen */ 70589);
/* harmony import */ var _sales_product_finder_feat_results_screen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_results_screen__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _product_finder_view_container_product_finder_view_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-finder-view-container/product-finder-view-container.component */ 50000);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const _c0 = ["viewContainer"];
let ProductFinderViewComponent = class ProductFinderViewComponent {
  constructor() {
    this.productFinderSteps = [{
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.INTRO,
      component: _sales_product_finder_feat_intro__WEBPACK_IMPORTED_MODULE_2__.IntroComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.PREFERENCE,
      component: _sales_product_finder_feat_preference__WEBPACK_IMPORTED_MODULE_3__.PreferenceComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.HOUSEHOLD,
      component: _sales_product_finder_feat_household__WEBPACK_IMPORTED_MODULE_4__.HouseholdComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.INTERNET_USAGE,
      component: _sales_product_finder_feat_internet_usage__WEBPACK_IMPORTED_MODULE_5__.InternetUsageComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.NUMBER_OF_SIMS,
      component: _sales_product_finder_feat_number_of_sims__WEBPACK_IMPORTED_MODULE_6__.NumberOfSimsComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.MOBILE_USAGE,
      component: _sales_product_finder_feat_mobile_usage__WEBPACK_IMPORTED_MODULE_7__.MobileUsageComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.TV_CHANNELS,
      component: _sales_product_finder_feat_tv_channels__WEBPACK_IMPORTED_MODULE_8__.TvChannelsComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.TV_EXPERIENCE,
      component: _sales_product_finder_feat_tv_experience__WEBPACK_IMPORTED_MODULE_9__.TvExperienceComponent
    }, {
      key: _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepEnum.RESULTS_SCREEN,
      component: _sales_product_finder_feat_results_screen__WEBPACK_IMPORTED_MODULE_10__.ResultsScreenComponent
    }];
    this.productFinderStepperFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepperFacade);
  }
  ngOnInit() {
    this.productFinderStepperFacade.currentStepKey$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(key => {
      const step = this.productFinderSteps.find(step => key === step.key);
      if (step) {
        this.viewContainer.clear();
        const componentRef = this.viewContainer.createComponent(_product_finder_view_container_product_finder_view_container_component__WEBPACK_IMPORTED_MODULE_11__.ProductFinderViewContainerComponent);
        componentRef.instance.componentStep = step;
      }
    });
  }
  static #_ = this.ɵfac = function ProductFinderViewComponent_Factory(t) {
    return new (t || ProductFinderViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductFinderViewComponent,
    selectors: [["app-sales-product-finder-component-view"]],
    viewQuery: function ProductFinderViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContainer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["viewContainer", ""]],
    template: function ProductFinderViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
      }
    },
    encapsulation: 2
  });
};
ProductFinderViewComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)()], ProductFinderViewComponent);


/***/ }),

/***/ 50000:
/*!**********************************************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-stepper/src/lib/stepper/view/product-finder-view-container/product-finder-view-container.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderViewContainerComponent: () => (/* binding */ ProductFinderViewContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__);




const _c0 = ["viewContainer"];
class ProductFinderViewContainerComponent {
  constructor(productFinderStepperFacade) {
    this.productFinderStepperFacade = productFinderStepperFacade;
  }
  set componentStep(componentStep) {
    this.viewContainer.clear();
    this.viewContainer.createComponent(componentStep.component);
    this.key = componentStep.key;
  }
  ngAfterViewInit() {
    this.productFinderStepperFacade.notifyStepRendered(this.key);
  }
  static #_ = this.ɵfac = function ProductFinderViewContainerComponent_Factory(t) {
    return new (t || ProductFinderViewContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderStepperFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductFinderViewContainerComponent,
    selectors: [["app-product-finder-view-container"]],
    viewQuery: function ProductFinderViewContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContainer = _t.first);
      }
    },
    inputs: {
      componentStep: "componentStep"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["viewContainer", ""]],
    template: function ProductFinderViewContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
      }
    },
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



/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-stepper_src_index_ts-_606c0.js.map