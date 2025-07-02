(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-internet-usage_src_index_ts-_65871"],{

/***/ 60754:
/*!********************************************************************!*\
  !*** ./libs/sales/product-finder/feat-internet-usage/src/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetUsageComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InternetUsageComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 26433);


/***/ }),

/***/ 26433:
/*!************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-internet-usage/src/lib/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetUsageComponent: () => (/* reexport safe */ _internet_usage_internet_usage_component__WEBPACK_IMPORTED_MODULE_0__.InternetUsageComponent)
/* harmony export */ });
/* harmony import */ var _internet_usage_internet_usage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internet-usage/internet-usage.component */ 2691);


/***/ }),

/***/ 2691:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-internet-usage/src/lib/internet-usage/internet-usage.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetUsageComponent: () => (/* binding */ InternetUsageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);












function InternetUsageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "ng.product-finder.step-internet-usage.multiple.options.error"));
  }
}
function InternetUsageComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 14)(2, "div", 15)(3, "tg-sales-multiple-select-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InternetUsageComponent_ng_container_15_ng_container_1_Template_tg_sales_multiple_select_chip_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.updateInternetUsage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chips", o_r2.chips)("ngModel", o_r2.internetUsage.selection);
  }
}
function InternetUsageComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, InternetUsageComponent_ng_container_15_ng_container_1_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r2.chips && o_r2.internetUsage);
  }
}
const _c0 = (a0, a1) => ({
  chips: a0,
  internetUsage: a1
});
class InternetUsageComponent {
  constructor(internetUsageFacade) {
    this.internetUsageFacade = internetUsageFacade;
    this.showAtLeastOneValueSelectedError$ = this.internetUsageFacade.hasErrorRequireAtLeastOneInternetUsageToBeSelected$;
    this.chips$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
      key: 'SURFING',
      icon: 'icon icon-globe-lines',
      label: 'ng.product-finder.step-internet-usage.surfing'
    }, {
      key: 'SOCIAL_MEDIA',
      icon: 'icon icon-like',
      label: 'ng.product-finder.step-internet-usage.social-media'
    }, {
      key: 'MESSAGING',
      icon: 'icon icon-messaging',
      label: 'ng.product-finder.step-internet-usage.messaging'
    }, {
      key: 'MUSIC_STREAMING',
      icon: 'icon icon-speaker',
      label: 'ng.product-finder.step-internet-usage.music-streaming'
    }, {
      key: 'VIDEO_STREAMING',
      icon: 'icon icon-play-square',
      label: 'ng.product-finder.step-internet-usage.video-streaming'
    }, {
      key: 'GAMING',
      icon: 'icon icon-game-controller',
      label: 'ng.product-finder.step-internet-usage.gaming'
    }, {
      key: 'DOMOTICS',
      icon: 'icon icon-light-bulb',
      label: 'ng.product-finder.step-internet-usage.domotics'
    }, {
      key: 'HOME_OFFICE',
      icon: 'icon icon-laptop',
      label: 'ng.product-finder.step-internet-usage.home-office'
    }]);
    this.internetUsage$ = this.internetUsageFacade.internetUsage$;
  }
  updateInternetUsage(selection) {
    this.internetUsageFacade.updateInternetUsage({
      selection
    });
  }
  static #_ = this.ɵfac = function InternetUsageComponent_Factory(t) {
    return new (t || InternetUsageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_6__.InternetUsageFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: InternetUsageComponent,
    selectors: [["tg-sales-internet-usage"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 18,
    consts: [[1, "stepper-page__body"], [1, "stepper-page__body-inner"], [1, "stepper-page__title"], [1, "text-flow", "text-flow--h3"], [1, "font--caption", "mt--xxxs", "stepper-page__title-label"], [1, "stepper-page__content--split", "container"], [1, "stepper-page__content-first", "stepper-page__content-first--full-width-img", "flex-hide-until-md", "sticky", "ml--xm--md", "ml--n--lg"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/product-finder/internet-usage/internet-usage.png", "alt", "Internet usage", 3, "moduleId"], ["id", "product-finder-v2-container--internet-usage", 1, "stepper-page__content-second", "mx--s--md", "mx--n--lg"], ["class", "mb--l mx--m mx--n--md", 4, "ngIf"], [4, "ngIf"], [1, "mb--l", "mx--m", "mx--n--md"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error", "errorfield"], [1, "Container", "Container--partitioned", "py--m--md", "mx--n"], [1, "Container--partitioned--partition", "Container--partitioned--partition--last-item"], [3, "chips", "ngModel", "ngModelChange"]],
    template: function InternetUsageComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, InternetUsageComponent_div_13_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, InternetUsageComponent_ng_container_15_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, "ng.product-finder.step-internet-services.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, "ng.product-finder.step-internet-services.sub-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("moduleId", "product-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 9, ctx.showAtLeastOneValueSelectedError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 11, ctx.chips$), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 13, ctx.internetUsage$)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__.ImageSrcInterceptorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _sales_shared_ui__WEBPACK_IMPORTED_MODULE_3__.MultipleSelectChipComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-internet-usage_src_index_ts-_65871.js.map