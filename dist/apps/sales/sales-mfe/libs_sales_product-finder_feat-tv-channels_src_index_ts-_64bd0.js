(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_feat-tv-channels_src_index_ts-_64bd0"],{

/***/ 4394:
/*!*****************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-channels/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChannelsComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TvChannelsComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 74025);


/***/ }),

/***/ 74025:
/*!*********************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-channels/src/lib/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChannelsComponent: () => (/* reexport safe */ _tv_channels_tv_channels_component__WEBPACK_IMPORTED_MODULE_0__.TvChannelsComponent)
/* harmony export */ });
/* harmony import */ var _tv_channels_tv_channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-channels/tv-channels.component */ 18188);


/***/ }),

/***/ 18188:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/product-finder/feat-tv-channels/src/lib/tv-channels/tv-channels.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChannelsComponent: () => (/* binding */ TvChannelsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);













function TvChannelsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 1, "ng.product-finder.step-tv-channels.multiple.options.error"));
  }
}
function TvChannelsComponent_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tg-sales-multi-select-checkbox-with-image", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TvChannelsComponent_ng_container_18_ng_container_1_Template_tg_sales_multi_select_checkbox_with_image_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.updateTvChannels($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checkboxes", o_r2.checkboxes)("ngModel", o_r2.tvChannels.selection);
  }
}
function TvChannelsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TvChannelsComponent_ng_container_18_ng_container_1_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r2.checkboxes && o_r2.tvChannels);
  }
}
const _c0 = (a0, a1) => ({
  checkboxes: a0,
  tvChannels: a1
});
class TvChannelsComponent {
  constructor(tvChannelsFacade, languageService) {
    this.tvChannelsFacade = tvChannelsFacade;
    this.languageService = languageService;
    this.tvChannels$ = this.tvChannelsFacade.tvChannels$;
    this.checkboxes$ = this.languageService.getLanguage() === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.FR ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([{
      key: 'BELGIUM',
      label: 'ng.product-finder.step-tv-channels.belgium',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/belgium.png'
    }, {
      key: 'FRENCH_SPEAKING',
      label: 'ng.product-finder.step-tv-channels.french-speaking',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/french-speaking.png'
    }, {
      key: 'KIDS',
      label: 'ng.product-finder.step-tv-channels.kids',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/kids.png'
    }, {
      key: 'SPORTS',
      label: 'ng.product-finder.step-tv-channels.sports',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/sports.png'
    }, {
      key: 'FLEMISH_FR',
      label: 'ng.product-finder.step-tv-channels.flemish',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/flemish.png'
    }, {
      key: 'INTERNATIONAL',
      label: 'ng.product-finder.step-tv-channels.international',
      imgSrc: '/assets/sales/product-finder/tv-channels/fr/international.png'
    }]) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([{
      key: 'FLEMISH_NL',
      label: 'ng.product-finder.step-tv-channels.flemish',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/flemish.png'
    }, {
      key: 'KIDS',
      label: 'ng.product-finder.step-tv-channels.kids',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/kids.png'
    }, {
      key: 'SPORTS',
      label: 'ng.product-finder.step-tv-channels.sports',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/sports.png'
    }, {
      key: 'SHOWBIZ',
      label: 'ng.product-finder.step-tv-channels.showbiz',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/showbiz.png'
    }, {
      key: 'INTERNATIONAL',
      label: 'ng.product-finder.step-tv-channels.international',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/international.png'
    }, {
      key: 'FRENCH',
      label: 'ng.product-finder.step-tv-channels.french',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/french.png'
    }, {
      key: 'THEME',
      label: 'ng.product-finder.step-tv-channels.theme',
      imgSrc: '/assets/sales/product-finder/tv-channels/nl/theme.png'
    }]);
    this.showAtLeastOneValueSelectedError$ = this.tvChannelsFacade.hasErrorRequireAtLeastOneTvChannelToBeSelectedError$;
  }
  updateTvChannels(selection) {
    this.tvChannelsFacade.updateTvChannels({
      selection
    });
  }
  static #_ = this.ɵfac = function TvChannelsComponent_Factory(t) {
    return new (t || TvChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_7__.TvChannelsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TvChannelsComponent,
    selectors: [["tg-sales-tv-channels"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 21,
    consts: [[1, "stepper-page__body"], [1, "stepper-page__body-inner"], [1, "stepper-page__title"], [1, "text-flow", "text-flow--h3"], [1, "font--caption", "mt--xxxs", "stepper-page__title-label"], [1, "stepper-page__content--split", "container"], [1, "stepper-page__content-first", "stepper-page__content-first--full-width-img", "flex-hide-until-md", "sticky", "ml--xm--md", "ml--n--lg"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/product-finder/tv-channels/tv-channels.png", "alt", "TV channels image", 1, "product-finder-img", 3, "moduleId"], ["id", "product-finder-v2-container", 1, "stepper-page__content-second", "mx--s--md", "mx--n--lg"], ["class", "mb--m mx--l mx--n--md", 4, "ngIf"], [1, "Container", "Container--partitioned", "py--m--md", "mx--n"], [1, "Container--partitioned--partition", "Container--partitioned--partition--last-item"], [1, "select-tile--group", "display--grid", "grid-template-column--1--sm", "gap--xm", "mx--xxs--md"], [4, "ngIf"], [1, "display--flex", "flex-direction--row", "align-items--baseline"], [1, "icon", "icon-information-shape", "info", "mr--xxs"], [1, "font--caption"], [1, "mb--m", "mx--l", "mx--n--md"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error", "errorfield"], [3, "checkboxes", "ngModel", "ngModelChange"]],
    template: function TvChannelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TvChannelsComponent_div_13_Template, 7, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, TvChannelsComponent_ng_container_18_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div")(24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, "ng.product-finder.step-tv-channels.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 8, "ng.product-finder.step-tv-channels.sub-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("moduleId", "product-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 10, ctx.showAtLeastOneValueSelectedError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 12, ctx.checkboxes$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 14, ctx.tvChannels$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 16, "ng.product-finder.step-tv-channels.info"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _sales_shared_util__WEBPACK_IMPORTED_MODULE_1__.ImageSrcInterceptorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _sales_shared_ui__WEBPACK_IMPORTED_MODULE_4__.MultiSelectCheckboxWithImageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_feat-tv-channels_src_index_ts-_64bd0.js.map