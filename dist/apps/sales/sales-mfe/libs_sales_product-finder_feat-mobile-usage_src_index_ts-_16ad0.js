(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-mobile-usage_src_index_ts-_16ad0"],{

/***/ 38624:
/*!******************************************************************!*\
  !*** ./libs/sales/product-finder/feat-mobile-usage/src/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.MobileUsageComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 95833);


/***/ }),

/***/ 95833:
/*!**********************************************************************!*\
  !*** ./libs/sales/product-finder/feat-mobile-usage/src/lib/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageComponent: () => (/* reexport safe */ _mobile_usage_mobile_usage_component__WEBPACK_IMPORTED_MODULE_0__.MobileUsageComponent)
/* harmony export */ });
/* harmony import */ var _mobile_usage_mobile_usage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-usage/mobile-usage.component */ 23641);


/***/ }),

/***/ 23641:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-mobile-usage/src/lib/mobile-usage/mobile-usage.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageComponent: () => (/* binding */ MobileUsageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);











function MobileUsageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "ng.product-finder.step-mobile-usage.multiple.options.error"));
  }
}
function MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 28);
  }
}
function MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const i_r6 = restoredCtx.index;
      const mobileLine_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.updateMobileLineCollapsed(i_r6, !mobileLine_r5.collapsed));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 18)(3, "div", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_span_5_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 23)(10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "tg-sales-multiple-select-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_Template_tg_sales_multiple_select_chip_ngModelChange_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const i_r6 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.updateMobileLineSelection(i_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mobileLine_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", mobileLine_r5.collapsed ? "header-accordion--closed" : "header-accordion--opened");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mobileLine_r5.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, "ng.product-finder.step-mobile-usage.mobile-number"), " ", i_r6 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", mobileLine_r5.collapsed)("chips", o_r2.chips)("ngModel", o_r2.mobileUsage.mobileLines[i_r6].selection);
  }
}
function MobileUsageComponent_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MobileUsageComponent_ng_container_17_ng_container_1_ng_container_1_Template, 14, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", o_r2.mobileUsage.mobileLines);
  }
}
function MobileUsageComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MobileUsageComponent_ng_container_17_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r2.chips && o_r2.mobileUsage);
  }
}
const _c0 = (a0, a1) => ({
  chips: a0,
  mobileUsage: a1
});
class MobileUsageComponent {
  constructor(mobileUsageFacade) {
    this.mobileUsageFacade = mobileUsageFacade;
    this.chips$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([{
      key: 'CALLING_AND_MESSAGING',
      icon: 'icon icon-phone-message',
      label: 'ng.product-finder.step-mobile-usage.calling-and-messaging'
    }, {
      key: 'SOCIAL_MEDIA',
      icon: 'icon icon-like',
      label: 'ng.product-finder.step-mobile-usage.social-media'
    }, {
      key: 'MUSIC_STREAMING',
      icon: 'icon icon-speaker',
      label: 'ng.product-finder.step-mobile-usage.music-streaming'
    }, {
      key: 'VIDEO_STREAMING',
      icon: 'icon icon-play-square',
      label: 'ng.product-finder.step-mobile-usage.video-streaming'
    }, {
      key: 'GPS',
      icon: 'icon icon-location-pin',
      label: 'ng.product-finder.step-mobile-usage.gps'
    }, {
      key: 'NEWS',
      icon: 'icon icon-article',
      label: 'ng.product-finder.step-mobile-usage.news'
    }, {
      key: 'MESSAGING',
      icon: 'icon icon-messaging',
      label: 'ng.product-finder.step-mobile-usage.messaging'
    }, {
      key: 'GAMING',
      icon: 'icon icon-game-controller',
      label: 'ng.product-finder.step-mobile-usage.gaming'
    }]);
    this.mobileUsage$ = this.mobileUsageFacade.mobileUsage$;
    this.showAtLeastOneValueSelectedError$ = this.mobileUsageFacade.hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$;
  }
  updateMobileLineSelection(index, selection) {
    this.mobileUsageFacade.updateMobileLineSelection(index, selection);
  }
  updateMobileLineCollapsed(index, collapsed) {
    this.mobileUsageFacade.updateMobileLineCollapsed(index, collapsed);
  }
  static #_ = this.ɵfac = function MobileUsageComponent_Factory(t) {
    return new (t || MobileUsageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_3__.MobileUsageFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MobileUsageComponent,
    selectors: [["tg-sales-mobile-usage"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 18,
    consts: [[1, "stepper-page__body"], [1, "stepper-page__body-inner"], [1, "stepper-page__title"], [1, "text-flow", "text-flow--h3"], [1, "font--caption", "mt--xxxs", "stepper-page__title-label"], [1, "stepper-page__content--split", "container"], [1, "stepper-page__content-first", "stepper-page__content-first--full-width-img", "flex-hide-until-md", "sticky", "ml--xm--md", "ml--n--lg"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/product-finder/mobile-usage/mobile-usage.png", "alt", "mobile usage image", 3, "moduleId"], [1, "stepper-page__content-second", "mx--s--md", "mx--n--lg"], ["class", "mb--m mx--l mx--n--md", 4, "ngIf"], [1, "Container", "Container--partitioned", "py--m--md", "mx--n"], [1, "Container--partitioned--partition", "Container--partitioned--partition--last-item"], [4, "ngIf"], [1, "mb--m", "mx--l", "mx--n--md"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error", "errorfield"], [4, "ngFor", "ngForOf"], [1, "header-accordion", "mb--m", "mx--m--md", "cursor--pointer", 3, "ngClass", "click"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "display--flex", "align-items--center", "text-flow", "text-flow--h4"], ["class", "icon icon-error-shape mr--xxs color-notification--error--light", 4, "ngIf"], [1, "mt--xxxs"], [1, "header-accordion--link", "text-flow", "text-flow--h4"], [1, "header-accordion--link__icon", "text-flow", "text-flow--h4"], [1, "text-weight--g", "icon-chevron-down", "icon-md"], [3, "hidden", "chips", "ngModel", "ngModelChange"], [1, "product-finder-mobile-usage--divider", "divider--xxs__light-grey", "my--xl--md", "my--l", "mx--m--md"], [1, "icon", "icon-error-shape", "mr--xxs", "color-notification--error--light"]],
    template: function MobileUsageComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MobileUsageComponent_div_13_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MobileUsageComponent_ng_container_17_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, "ng.product-finder.step-mobile-usage.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, "ng.product-finder.step-mobile-usage.sub-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("moduleId", "product-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 9, ctx.showAtLeastOneValueSelectedError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 11, ctx.chips$), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 13, ctx.mobileUsage$)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _sales_shared_util__WEBPACK_IMPORTED_MODULE_5__.ImageSrcInterceptorDirective, _sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__.MultipleSelectChipComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-mobile-usage_src_index_ts-_16ad0.js.map