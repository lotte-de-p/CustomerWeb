(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_feat-mybase-dashboard-mobile_src_index_ts"],{

/***/ 8515:
/*!************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashboardMobileComponent),
/* harmony export */   MyBaseDashboardMobileUsageBaseZeroComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_baseZero_mybase_dashboard_mobile_usage_baseZero_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardMobileUsageBaseZeroComponent),
/* harmony export */   MyBaseDashboardMobileUsageBasedOnYouComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_basedOnYou_mybase_dashboard_mobile_usage_basedOnYou_component__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardMobileUsageBasedOnYouComponent),
/* harmony export */   MyBaseDashboardMobileUsagePostpaidComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_postpaid_mybase_dashboard_mobile_usage_postpaid_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseDashboardMobileUsagePostpaidComponent),
/* harmony export */   MyBaseDashboardMobileUsagePrepaidComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_prepaid_mybase_dashboard_mobile_usage_prepaid_component__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardMobileUsagePrepaidComponent),
/* harmony export */   MyBaseDashboardMobileUsageUnlimitedComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_unlimited_mybase_dashboard_mobile_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_5__.MyBaseDashboardMobileUsageUnlimitedComponent)
/* harmony export */ });
/* harmony import */ var _lib_mybase_dashboard_mobile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile.component */ 46256);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_postpaid_mybase_dashboard_mobile_usage_postpaid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-postpaid/mybase-dashboard-mobile-usage-postpaid.component */ 93578);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_prepaid_mybase_dashboard_mobile_usage_prepaid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-prepaid/mybase-dashboard-mobile-usage-prepaid.component */ 28965);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_baseZero_mybase_dashboard_mobile_usage_baseZero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-baseZero/mybase-dashboard-mobile-usage-baseZero.component */ 9727);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_basedOnYou_mybase_dashboard_mobile_usage_basedOnYou_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-basedOnYou/mybase-dashboard-mobile-usage-basedOnYou.component */ 5418);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_unlimited_mybase_dashboard_mobile_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-unlimited/mybase-dashboard-mobile-usage-unlimited.component */ 66076);







/***/ }),

/***/ 9727:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile-usage-baseZero/mybase-dashboard-mobile-usage-baseZero.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsageBaseZeroComponent: () => (/* binding */ MyBaseDashboardMobileUsageBaseZeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);











const _c0 = (a0, a4) => [a0, "EUR", "symbol", "1.0-1", a4];
const _c1 = a0 => ({
  daysUntilRenewal: a0
});
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__["default"]);
class MyBaseDashboardMobileUsageBaseZeroComponent {
  set data(data) {
    if (!data.baseZero) return;
    this.used = data.baseZero.used;
    this.daysUntilRenewal = data.baseZero.daysUntilRenewal;
  }
  mobileUsageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  daysUntilRenewal = 0;
  used = 0;
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LanguageService);
  goToMobileUsage() {
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseAnalyticsEventMobileUsage.BASE_ZERO,
      destinationUrl: this.mobileUsageUrl
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
  get locale() {
    const lang = this.languageService.getLanguage();
    if (lang === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LanguageEnum.EN || lang === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LanguageEnum.NL) {
      return _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LanguageEnum.NL;
    }
    return lang;
  }
  static ɵfac = function MyBaseDashboardMobileUsageBaseZeroComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsageBaseZeroComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsageBaseZeroComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-basezero"]],
    inputs: {
      data: "data",
      mobileUsageUrl: "mobileUsageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 26,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mb--xs"], [1, "text-flow", "text-flow--h1"], [1, "text-flow", "text-flow--h6"], [1, "font--caption-small", "mb--s"]],
    template: function MyBaseDashboardMobileUsageBaseZeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageBaseZeroComponent_Template_div_click_1_listener() {
          return ctx.goToMobileUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basezero");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "ng.mybase-dashboard-mobile.mobile-usage-basezero.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basezero-monetary-used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](11, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c0, ctx.used, ctx.locale)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 16, "ng.mybase-dashboard-mobile.mobile-usage-baseZero.monetary-used-part-one"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basezero-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 18, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.daysUntilRenewal)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.mybase-label[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  background-color: #ececec;\n  color: #676767;\n  margin-right: 1.4rem;\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\n.mybase-dashboard--card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1iYXNlWmVyby9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1iYXNlWmVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUlJO0VBQ0UsY0FBQTtBQUROIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXliYXNlLWxhYmVsIHtcbiAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICM2NzY3Njc7XG4gIG1hcmdpbi1yaWdodDogMS40cmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkIHtcbiAgJjpob3ZlciB7XG4gICAgLmljb24uaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICAgIGNvbG9yOiAjMDA4MDdiOyAvLyBjb2xvcignYnJhbmQtcHJpbWFyeScpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5418:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile-usage-basedOnYou/mybase-dashboard-mobile-usage-basedOnYou.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsageBasedOnYouComponent: () => (/* binding */ MyBaseDashboardMobileUsageBasedOnYouComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);












const _c0 = (a0, a4) => [a0, "EUR", "symbol", "1.0-2", a4];
const _c1 = a0 => ({
  daysUntilRenewal: a0
});
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__["default"]);
class MyBaseDashboardMobileUsageBasedOnYouComponent {
  set data(data) {
    if (!data.basedOnYou) return;
    this.total = data.basedOnYou.total;
    this.remaining = data.basedOnYou.remaining;
    const used = this.total - this.remaining;
    this.usedPct = used / this.total * 100;
    this.daysUntilRenewal = data.basedOnYou.daysUntilRenewal;
    switch (data.basedOnYou.status) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.OK:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_ALMOST_REACHED:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.WARN;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED:
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.ERROR;
        break;
    }
  }
  mobileUsageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  daysUntilRenewal = 0;
  total = 0;
  remaining = 0;
  usedPct = 0;
  progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageService);
  goToMobileUsage() {
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseAnalyticsEventMobileUsage.BASED_ON_YOU,
      destinationUrl: this.mobileUsageUrl
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
  get locale() {
    const lang = this.languageService.getLanguage();
    if (lang === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageEnum.EN || lang === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageEnum.NL) {
      return _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageEnum.NL;
    }
    return lang;
  }
  static ɵfac = function MyBaseDashboardMobileUsageBasedOnYouComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsageBasedOnYouComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsageBasedOnYouComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-basedonyou"]],
    inputs: {
      data: "data",
      mobileUsageUrl: "mobileUsageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 42,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mb--xs"], [1, "text-flow", "text-flow--h1"], [1, "text-flow", "text-flow--h6"], [3, "progress", "barColor"], [1, "font--caption-small", "mb--s"]],
    template: function MyBaseDashboardMobileUsageBasedOnYouComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageBasedOnYouComponent_Template_div_click_1_listener() {
          return ctx.goToMobileUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "tg-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basedonyou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, "ng.mybase-dashboard-mobile.mobile-usage-basedonyou.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basedonyou-credit-remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](11, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c0, ctx.remaining, ctx.locale)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 21, "ng.mybase-dashboard-mobile.mobile-usage-basedonyou.credit-remaining-part-one"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 23, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.volume-used-part-two"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basedonyou-credit-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](20, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c0, ctx.total, ctx.locale)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.usedPct)("barColor", ctx.progressBarStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-basedonyou-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 31, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c1, ctx.daysUntilRenewal)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.mybase-label[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  background-color: #ececec;\n  color: #676767;\n  margin-right: 1.4rem;\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\n.mybase-dashboard--card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1iYXNlZE9uWW91L215YmFzZS1kYXNoYm9hcmQtbW9iaWxlLXVzYWdlLWJhc2VkT25Zb3UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFJSTtFQUNFLGNBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm15YmFzZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGNvbG9yOiAjNjc2NzY3O1xuICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4ubXliYXNlLWRhc2hib2FyZC0tY2FyZCB7XG4gICY6aG92ZXIge1xuICAgIC5pY29uLmljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICBjb2xvcjogIzAwODA3YjsgLy8gY29sb3IoJ2JyYW5kLXByaW1hcnknKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 93578:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile-usage-postpaid/mybase-dashboard-mobile-usage-postpaid.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsagePostpaidComponent: () => (/* binding */ MyBaseDashboardMobileUsagePostpaidComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);









const _c0 = a0 => ({
  carryOver: a0
});
function MyBaseDashboardMobileUsagePostpaidComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid-carry-over")("data-cy-carryOver", ctx_r0.carryOver);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.label-data-jump", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, ctx_r0.carryOver, "1.0-2"))));
  }
}
const _c1 = a0 => ({
  outOfBundleLimit: a0
});
function MyBaseDashboardMobileUsagePostpaidComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid-out-of-bundle-limit")("data-cy-outOfBundleLimit", ctx_r1.outOfBundleLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.label-budget-limit", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx_r1.outOfBundleLimit)), "");
  }
}
const _c2 = a0 => ({
  daysUntilRenewal: a0
});
class MyBaseDashboardMobileUsagePostpaidComponent {
  set data(data) {
    if (data.postpaid) {
      this.calculateVars(data.postpaid);
    }
    if (data.legacy) {
      this.calculateVars(data.legacy);
    }
  }
  mobileUsageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  daysUntilRenewal = 0;
  total = 0;
  used = 0;
  usedPct = 0;
  carryOver = 0;
  outOfBundleLimit = 0;
  progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  goToMobileUsage() {
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseAnalyticsEventMobileUsage.POSTPAID,
      destinationUrl: this.mobileUsageUrl
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
  calculateVars(postPaid) {
    const total = postPaid.data.total;
    const remaining = postPaid.data.remaining;
    this.total = total / 1024 ** 3;
    this.used = (total - remaining) / 1024 ** 3;
    this.usedPct = this.used / this.total * 100;
    this.daysUntilRenewal = postPaid.daysUntilRenewal;
    this.carryOver = postPaid.data.carryOver / 1024 ** 3;
    this.outOfBundleLimit = postPaid.outOfBundleLimit || 0;
    switch (postPaid.status) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.OK:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_ALMOST_REACHED:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.WARN;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED:
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED:
        this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.ERROR;
        break;
    }
  }
  static ɵfac = function MyBaseDashboardMobileUsagePostpaidComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsagePostpaidComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsagePostpaidComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-postpaid"]],
    inputs: {
      data: "data",
      mobileUsageUrl: "mobileUsageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 35,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mb--xs"], [1, "text-flow", "text-flow--h1"], [1, "text-flow", "text-flow--h6"], [3, "progress", "barColor"], [1, "font--caption-small", "mb--s"], ["class", "mybase-label text-flow text-flow--label", 4, "ngIf"], [1, "mybase-label", "text-flow", "text-flow--label"]],
    template: function MyBaseDashboardMobileUsagePostpaidComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsagePostpaidComponent_Template_div_click_1_listener() {
          return ctx.goToMobileUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "tg-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MyBaseDashboardMobileUsagePostpaidComponent_span_28_Template, 4, 11, "span", 10)(29, MyBaseDashboardMobileUsagePostpaidComponent_span_29_Template, 3, 8, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 16, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid-volume-used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 18, ctx.used, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 21, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.volume-used-part-one"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 23, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.volume-used-part-two"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid-volume-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 25, ctx.total, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 28, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.volume-used-part-three"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.usedPct)("barColor", ctx.progressBarStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-postpaid-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 30, "ng.mybase-dashboard-mobile.mobile-usage-postpaid.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c2, ctx.daysUntilRenewal)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carryOver > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.outOfBundleLimit > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.mybase-label[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  background-color: #ececec;\n  color: #676767;\n  margin-right: 1.4rem;\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\n.mybase-dashboard--card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1wb3N0cGFpZC9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1wb3N0cGFpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUlJO0VBQ0UsY0FBQTtBQUROIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXliYXNlLWxhYmVsIHtcbiAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICM2NzY3Njc7XG4gIG1hcmdpbi1yaWdodDogMS40cmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkIHtcbiAgJjpob3ZlciB7XG4gICAgLmljb24uaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgICAgIGNvbG9yOiAjMDA4MDdiOyAvLyBjb2xvcignYnJhbmQtcHJpbWFyeScpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28965:
/*!************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile-usage-prepaid/mybase-dashboard-mobile-usage-prepaid.component.ts ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsagePrepaidComponent: () => (/* binding */ MyBaseDashboardMobileUsagePrepaidComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








class MyBaseDashboardMobileUsagePrepaidComponent {
  set data(data) {
    if (!data.prepaid) return;
    this.balance = data.prepaid.balance;
    this.expiryDate = data.prepaid.expiryDate;
  }
  topUpUrl;
  mobileUsageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  balance = 0;
  expiryDate = new Date().toISOString();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  goToTopUpLink(event) {
    // Prevent the click event on the actual card itself
    event.stopPropagation();
    this.urlService.redirectTo(this.topUpUrl);
  }
  goToMobileUsage() {
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseAnalyticsEventMobileUsage.PREPAID,
      destinationUrl: this.mobileUsageUrl
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
  static ɵfac = function MyBaseDashboardMobileUsagePrepaidComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsagePrepaidComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsagePrepaidComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-prepaid"]],
    inputs: {
      data: "data",
      topUpUrl: "topUpUrl",
      mobileUsageUrl: "mobileUsageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 24,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "text-flow", "text-flow--h1", "mr--xxs"], [1, "text-flow", "text-flow--h6"], [1, "font--caption-small", "mb--s"], [1, "button", "button--secondary", "button--alternate", "button--fullwidth", "cursor--pointer", 3, "click"], [1, "icon", "icon-mobile-arrow-up", "icon-md", "mr--s"]],
    template: function MyBaseDashboardMobileUsagePrepaidComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsagePrepaidComponent_Template_div_click_1_listener() {
          return ctx.goToMobileUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div")(9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsagePrepaidComponent_Template_button_click_19_listener($event) {
          return ctx.goToTopUpLink($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-prepaid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, "ng.mybase-dashboard-mobile.mobile-usage-prepaid.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-prepaid-amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 12, ctx.balance, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, "ng.mybase-dashboard-mobile.mobile-usage-prepaid.label-left"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-prepaid-expiry-date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, "ng.mybase-dashboard-mobile.mobile-usage-prepaid.label-expires-on"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 19, ctx.expiryDate, "longDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-prepaid-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 22, "ng.mybase-dashboard-mobile.mobile-usage-prepaid.button-top-up"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.mybase-dashboard--card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS1wcmVwYWlkL215YmFzZS1kYXNoYm9hcmQtbW9iaWxlLXVzYWdlLXByZXBhaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUlJO0VBQ0UsY0FBQTtBQUROIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXliYXNlLWRhc2hib2FyZC0tY2FyZCB7XG4gICY6aG92ZXIge1xuICAgIC5pY29uLmljb24tY2hldnJvbi1yaWdodCB7XG4gICAgICBjb2xvcjogIzAwODA3YjsgLy8gY29sb3IoJ2JyYW5kLXByaW1hcnknKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 66076:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile-usage-unlimited/mybase-dashboard-mobile-usage-unlimited.component.ts ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsageUnlimitedComponent: () => (/* binding */ MyBaseDashboardMobileUsageUnlimitedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);









function MyBaseDashboardMobileUsageUnlimitedComponent_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited-icon-ok");
  }
}
function MyBaseDashboardMobileUsageUnlimitedComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited-icon-warn");
  }
}
function MyBaseDashboardMobileUsageUnlimitedComponent_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited-icon-error");
  }
}
const _c0 = a0 => ({
  daysUntilRenewal: a0
});
class MyBaseDashboardMobileUsageUnlimitedComponent {
  set data(data) {
    if (!data.unlimited) return;
    this.used = data.unlimited.used / 1024 ** 3;
    this.daysUntilRenewal = data.unlimited.daysUntilRenewal;
    switch (data.unlimited.status) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.OK:
        this.usageStatus = this.UsageStatus.OK;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_ALMOST_REACHED:
        this.usageStatus = this.UsageStatus.WARN;
        break;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED:
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED:
        this.usageStatus = this.UsageStatus.ERROR;
        break;
    }
  }
  mobileUsageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  used = 0;
  daysUntilRenewal = 0;
  usageStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
  UsageStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus;
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  goToMobileUsage() {
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseAnalyticsEventMobileUsage.UNLIMITED,
      destinationUrl: this.mobileUsageUrl
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
  static ɵfac = function MyBaseDashboardMobileUsageUnlimitedComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsageUnlimitedComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsageUnlimitedComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-unlimited"]],
    inputs: {
      data: "data",
      mobileUsageUrl: "mobileUsageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 26,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "display--flex", "justify-content--between", "align-items--center", "flex-grow", "text-flow", "text-flow--h1"], ["class", "icon icon-no-size-override icon-md icon-infinity color-cyan-green", 4, "ngIf"], ["class", "icon icon-no-size-override icon-md icon-alert-shape-filled color-notification--warning--light", 4, "ngIf"], ["class", "icon icon-no-size-override icon-md icon-error-shape-filled color-notification--error--light", 4, "ngIf"], [1, "font--caption-small", "mb--s"], [1, "icon", "icon-no-size-override", "icon-md", "icon-infinity", "color-cyan-green"], [1, "icon", "icon-no-size-override", "icon-md", "icon-alert-shape-filled", "color-notification--warning--light"], [1, "icon", "icon-no-size-override", "icon-md", "icon-error-shape-filled", "color-notification--error--light"]],
    template: function MyBaseDashboardMobileUsageUnlimitedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageUnlimitedComponent_Template_div_click_1_listener() {
          return ctx.goToMobileUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MyBaseDashboardMobileUsageUnlimitedComponent_i_11_Template, 1, 1, "i", 6)(12, MyBaseDashboardMobileUsageUnlimitedComponent_i_12_Template, 1, 1, "i", 7)(13, MyBaseDashboardMobileUsageUnlimitedComponent_i_13_Template, 1, 1, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, "ng.mybase-dashboard-mobile.mobile-usage-unlimited.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 14, "ng.mybase-dashboard-mobile.mobile-usage-unlimited.label-unlimited"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.OK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.WARN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.ERROR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited-volume-used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 16, ctx.used, "1.0-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 19, "ng.mybase-dashboard-mobile.mobile-usage-unlimited.label-gb-used"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-unlimited-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 21, "ng.mybase-dashboard-mobile.mobile-usage-unlimited.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.daysUntilRenewal)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n\n.mybase-label[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.8rem;\n  background-color: #ececec;\n  color: #676767;\n  margin-right: 1.4rem;\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\n.mybase-dashboard--card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS11c2FnZS11bmxpbWl0ZWQvbXliYXNlLWRhc2hib2FyZC1tb2JpbGUtdXNhZ2UtdW5saW1pdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBSUk7RUFDRSxjQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5teWJhc2UtbGFiZWwge1xuICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBjb2xvcjogIzY3Njc2NztcbiAgbWFyZ2luLXJpZ2h0OiAxLjRyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLm15YmFzZS1kYXNoYm9hcmQtLWNhcmQge1xuICAmOmhvdmVyIHtcbiAgICAuaWNvbi5pY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgY29sb3I6ICMwMDgwN2I7IC8vIGNvbG9yKCdicmFuZC1wcmltYXJ5Jyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 46256:
/*!********************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileComponent: () => (/* binding */ MyBaseDashboardMobileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mybase_dashboard_mobile_usage_baseZero_mybase_dashboard_mobile_usage_baseZero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-baseZero/mybase-dashboard-mobile-usage-baseZero.component */ 9727);
/* harmony import */ var _mybase_dashboard_mobile_usage_basedOnYou_mybase_dashboard_mobile_usage_basedOnYou_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-basedOnYou/mybase-dashboard-mobile-usage-basedOnYou.component */ 5418);
/* harmony import */ var _mybase_dashboard_mobile_usage_postpaid_mybase_dashboard_mobile_usage_postpaid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-postpaid/mybase-dashboard-mobile-usage-postpaid.component */ 93578);
/* harmony import */ var _mybase_dashboard_mobile_usage_prepaid_mybase_dashboard_mobile_usage_prepaid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-prepaid/mybase-dashboard-mobile-usage-prepaid.component */ 28965);
/* harmony import */ var _mybase_dashboard_mobile_usage_unlimited_mybase_dashboard_mobile_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-unlimited/mybase-dashboard-mobile-usage-unlimited.component */ 66076);
















function MyBaseDashboardMobileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tg-mybase-dashboard-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.myBaseDashboardMobileError$));
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-mobile-usage-postpaid", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template_tg_mybase_dashboard_mobile_usage_postpaid_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r9.myBaseDashboardMobileUsage$))("mobileUsageUrl", ctx_r9.mobileUsageUrl);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-mobile-usage-prepaid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_4_Template_tg_mybase_dashboard_mobile_usage_prepaid_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx_r10.myBaseDashboardMobileUsage$))("topUpUrl", ctx_r10.topupUrl)("mobileUsageUrl", ctx_r10.mobileUsageUrl);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-mobile-usage-unlimited", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_6_Template_tg_mybase_dashboard_mobile_usage_unlimited_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r11.myBaseDashboardMobileUsage$))("mobileUsageUrl", ctx_r11.mobileUsageUrl);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-mobile-usage-basezero", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_8_Template_tg_mybase_dashboard_mobile_usage_basezero_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r12.myBaseDashboardMobileUsage$))("mobileUsageUrl", ctx_r12.mobileUsageUrl);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-mobile-usage-basedonyou", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_10_Template_tg_mybase_dashboard_mobile_usage_basedonyou_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r13.myBaseDashboardMobileUsage$))("mobileUsageUrl", ctx_r13.mobileUsageUrl);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template, 2, 4, "tg-mybase-dashboard-mobile-usage-postpaid", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_4_Template, 2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_6_Template, 2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_8_Template, 2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_10_Template, 2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_0_0.postpaid) || ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_0_0.legacy) ? 1 : ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_1_0.prepaid) ? 4 : ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_2_0.unlimited) ? 6 : ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_3_0.baseZero) ? 8 : ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 11, ctx_r4.myBaseDashboardMobileUsage$)) == null ? null : tmp_4_0.basedOnYou) ? 10 : -1);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-navigation-cards", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_4_Template_tg_mybase_navigation_cards_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mobileUsageNotificationUrl", ctx_r5.mobileUsageNotificationUrl)("voicemailUrl", ctx_r5.voicemailUrl)("simManagementUrl", ctx_r5.simManagementUrl)("productOverviewUrl", ctx_r5.productOverviewUrl)("topopUrl", ctx_r5.topupUrl)("topupHistoryUrl", ctx_r5.topupHistoryUrl)("mobileUsageDetailsUrl", ctx_r5.mobileUsageDetailsUrl)("mobileUsageLimitsUrl", ctx_r5.mobileUsageLimitsUrl)("barringsUrl", ctx_r5.barringsUrl)("type", "mobile")("customClassGrid", "col-lg-6")("mobileTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 13, "ng.mybase-dashboard-mobile.navigation-cards.title"))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 15, ctx_r5.topLevelNavigationCards$));
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "tg-mybase-navigation-cards", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_6_Template_tg_mybase_navigation_cards_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("voicemailUrl", ctx_r6.voicemailUrl)("simManagementUrl", ctx_r6.simManagementUrl)("productOverviewUrl", ctx_r6.productOverviewUrl)("topopUrl", ctx_r6.topupUrl)("mobileUsageDetailsUrl", ctx_r6.mobileUsageDetailsUrl)("type", "mobile")("customClassGrid", "col-lg-4")("topupHistoryUrl", ctx_r6.topupHistoryUrl)("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx_r6.bottomLevelNavigationCards$));
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "tg-mybase-navigation-cards", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_9_Template_tg_mybase_navigation_cards_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mobileUsageNotificationUrl", ctx_r7.mobileUsageNotificationUrl)("mobileUsageLimitsUrl", ctx_r7.mobileUsageLimitsUrl)("barringsUrl", ctx_r7.barringsUrl)("type", "mobile")("customClassGrid", "col-lg-4")("showControlUsageTitle", true)("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, ctx_r7.controlUsageNavCards$));
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "tg-mybase-services-cards", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_12_Template_tg_mybase_services_cards_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("payByMobileUrl", ctx_r8.payByMobileUrl)("buyHardwareDiscountUrl", ctx_r8.buyHardwareDiscountUrl)("type", "mobile")("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r8.myBaseDashboardMobileServices$));
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_1_Template, 12, 13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_4_Template, 3, 17, "tg-mybase-navigation-cards", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_6_Template, 4, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_9_Template, 4, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Conditional_12_Template, 4, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx_r2.myBaseDashboardMobileUsage$)) == null ? null : tmp_0_0.showCard) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r2.myBaseDashboardMobileNavigationCards$) ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, ctx_r2.bottomLevelNavigationCards$)) == null ? null : tmp_2_0.length) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, ctx_r2.myBaseDashboardMobileLoading$) === false ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx_r2.controlUsageNavCards$)) == null ? null : tmp_3_0.length) ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, ctx_r2.myBaseDashboardMobileServices$) ? 12 : -1);
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "div", 3)(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div", 3)(15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function MyBaseDashboardMobileComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "tg-line-selector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectMsisdn", function MyBaseDashboardMobileComponent_Conditional_4_Template_tg_line_selector_selectMsisdn_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.selectMsisdn($event));
    })("analyticsData", function MyBaseDashboardMobileComponent_Conditional_4_Template_tg_line_selector_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardMobileComponent_Conditional_4_Conditional_4_Template, 14, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBaseDashboardMobileComponent_Conditional_4_Conditional_6_Template, 21, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r1.mobileLines$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx_r1.myBaseDashboardMobileLoading$) === false ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx_r1.myBaseDashboardMobileLoading$) ? 6 : -1);
  }
}
class MyBaseDashboardMobileComponent {
  mobileUsageUrl;
  mobileUsageNotificationUrl;
  voicemailUrl;
  simManagementUrl;
  productOverviewUrl;
  payByMobileUrl;
  buyHardwareDiscountUrl;
  topupUrl;
  topupHistoryUrl;
  mobileUsageDetailsUrl;
  mobileUsageLimitsUrl;
  barringsUrl;
  scopes = ['customeraccount']; // TBD
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardFacade);
  datalayerFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerFacade);
  myBaseDashboardMobileUsage$ = this.facade.myBaseDashboardMobileMobileUsage$;
  myBaseDashboardMobileNavigationCards$ = this.facade.myBaseDashboardMobileNavigationCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(cards => {
    const navCards = cards;
    return navCards.filter(card => this.navigationCardTypes.includes(card)).sort((a, b) => this.navigationCardTypes.indexOf(a) - this.navigationCardTypes.indexOf(b));
  }));
  myBaseDashboardMobileServices$ = this.facade.myBaseDashboardMobileServices$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(cards => {
    const serviceCards = cards;
    return serviceCards.filter(card => this.serviceTypes.includes(card)).sort((a, b) => this.serviceTypes.indexOf(a) - this.serviceTypes.indexOf(b));
  }));
  controlUsageNavCards$ = this.facade.myBaseDashboardMobileNavigationCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(cards => {
    const navCards = cards;
    return navCards.filter(card => this.controlUsageNavCards.includes(card)).sort((a, b) => this.controlUsageNavCards.indexOf(a) - this.controlUsageNavCards.indexOf(b));
  }));
  myBaseDashboardMobileError$ = this.facade.myBaseDashboardMobileError$;
  mobileLines$ = this.facade.mobileLines$;
  myBaseDashboardMobileLoading$ = this.facade.myBaseDashboardMobileLoading$;
  topLevelNavigationCards$;
  bottomLevelNavigationCards$;
  // Sorted array, determines the order of the cards
  navigationCardTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_DETAILS, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP_HISTORY, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.VOICEMAIL, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SIM_MANAGEMENT, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.PRODUCT_OVERVIEW];
  // Sorted array, determines the order of the cards
  serviceTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.PAYBYMOBILE, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BUY_HARDWARE_DISCOUNT];
  // Sorted array, determines the order of the cards
  controlUsageNavCards = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MOBILE_USAGE_NOTIFICATIONS, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_LIMITS, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.BARRINGS];
  initAfterLoggedIn() {
    this.facade.loadMobileLines();
    this.datalayerFacade.initDataLayer();
    this.seggregateCards();
  }
  selectMsisdn(msisdn) {
    this.facade.setMobileMsisdn(msisdn);
  }
  seggregateCards() {
    this.topLevelNavigationCards$ = this.myBaseDashboardMobileNavigationCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(navigationCards => {
      return navigationCards.slice(0, 4);
    }));
    this.bottomLevelNavigationCards$ = this.myBaseDashboardMobileNavigationCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(navigationCards => {
      return navigationCards.slice(4);
    }));
  }
  addAnalyticsEvent(event) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
  static ɵfac = function MyBaseDashboardMobileComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileComponent,
    selectors: [["tg-mybase-dashboard-mobile"]],
    inputs: {
      mobileUsageUrl: "mobileUsageUrl",
      mobileUsageNotificationUrl: "mobileUsageNotificationUrl",
      voicemailUrl: "voicemailUrl",
      simManagementUrl: "simManagementUrl",
      productOverviewUrl: "productOverviewUrl",
      payByMobileUrl: "payByMobileUrl",
      buyHardwareDiscountUrl: "buyHardwareDiscountUrl",
      topupUrl: "topupUrl",
      topupHistoryUrl: "topupHistoryUrl",
      mobileUsageDetailsUrl: "mobileUsageDetailsUrl",
      mobileUsageLimitsUrl: "mobileUsageLimitsUrl",
      barringsUrl: "barringsUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[3, "scopes", "componentCanRender"], [1, "mybase-dashboard-mobile"], ["class", "row"], [1, "row"], [1, "col-12", "mt--l--md"], [3, "error"], [1, "col-12"], [3, "data", "selectMsisdn", "analyticsData"], ["class", "col-12 col-md-6 col-lg-4 mb--m mt--xxxs--md"], [1, "col-12", "col-md-6", "col-lg-8"], [3, "mobileUsageNotificationUrl", "voicemailUrl", "simManagementUrl", "productOverviewUrl", "topopUrl", "topupHistoryUrl", "mobileUsageDetailsUrl", "mobileUsageLimitsUrl", "barringsUrl", "type", "customClassGrid", "mobileTitle", "data"], [1, "col-12", "col-md-6", "col-lg-4", "mb--m", "mt--xxxs--md"], [3, "data", "mobileUsageUrl"], [3, "data", "mobileUsageUrl", "analyticsData"], [3, "data", "topUpUrl", "mobileUsageUrl", "analyticsData"], [3, "mobileUsageNotificationUrl", "voicemailUrl", "simManagementUrl", "productOverviewUrl", "topopUrl", "topupHistoryUrl", "mobileUsageDetailsUrl", "mobileUsageLimitsUrl", "barringsUrl", "type", "customClassGrid", "mobileTitle", "data", "analyticsData"], [3, "voicemailUrl", "simManagementUrl", "productOverviewUrl", "topopUrl", "mobileUsageDetailsUrl", "type", "customClassGrid", "topupHistoryUrl", "data", "analyticsData"], [3, "mobileUsageNotificationUrl", "mobileUsageLimitsUrl", "barringsUrl", "type", "customClassGrid", "showControlUsageTitle", "data", "analyticsData"], [3, "payByMobileUrl", "buyHardwareDiscountUrl", "type", "data", "analyticsData"], [1, "col-12", "col-md-6", "col-lg-4", "mb--l"], [1, "height--full", "skeleton", "skeleton--basic", "skeleton--container", "navigation--card", "p--m"], [1, "col-12", "mb--l", "col-lg-6"], [1, "skeleton", "skeleton--basic", "skeleton--container", "navigation--card", "p--m"], [1, "col-12", "mb--l"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton--title", "p--m"], [1, "col-12", "mb--l", "col-lg-4"], [1, "skeleton", "skeleton--basic", "skeleton--container", "service--card", "p--m"]],
    template: function MyBaseDashboardMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componentCanRender", function MyBaseDashboardMobileComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyBaseDashboardMobileComponent_Conditional_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardMobileComponent_Conditional_4_Template, 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.myBaseDashboardMobileError$) ? 2 : 4);
      }
    },
    dependencies: [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseNavigationCardsComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.LineSelectorComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardErrorComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseServicesCardsComponent, _mybase_dashboard_mobile_usage_postpaid_mybase_dashboard_mobile_usage_postpaid_component__WEBPACK_IMPORTED_MODULE_9__.MyBaseDashboardMobileUsagePostpaidComponent, _mybase_dashboard_mobile_usage_prepaid_mybase_dashboard_mobile_usage_prepaid_component__WEBPACK_IMPORTED_MODULE_10__.MyBaseDashboardMobileUsagePrepaidComponent, _mybase_dashboard_mobile_usage_baseZero_mybase_dashboard_mobile_usage_baseZero_component__WEBPACK_IMPORTED_MODULE_7__.MyBaseDashboardMobileUsageBaseZeroComponent, _mybase_dashboard_mobile_usage_basedOnYou_mybase_dashboard_mobile_usage_basedOnYou_component__WEBPACK_IMPORTED_MODULE_8__.MyBaseDashboardMobileUsageBasedOnYouComponent, _mybase_dashboard_mobile_usage_unlimited_mybase_dashboard_mobile_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_11__.MyBaseDashboardMobileUsageUnlimitedComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".mybase-dashboard-mobile[_ngcontent-%COMP%] {\n  margin-top: -7.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .mybase-dashboard-mobile[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n.mybase-dashboard-mobile[_ngcontent-%COMP%]   .navigation--card[_ngcontent-%COMP%] {\n  min-height: 10rem;\n}\n.mybase-dashboard-mobile[_ngcontent-%COMP%]   .service--card[_ngcontent-%COMP%] {\n  min-height: 7rem;\n}\n.mybase-dashboard-mobile[_ngcontent-%COMP%]   .skeleton--title[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1tb2JpbGUvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLW1vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLG1CQUFBO0FBRkY7QUFERTtFQURGO0lBRUksZ0JBQUE7RUFJRjtBQUNGO0FBREU7RUFDRSxpQkFBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtBQUdKO0FBREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLm15YmFzZS1kYXNoYm9hcmQtbW9iaWxlIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgbWFyZ2luLXRvcDogLTcuNXJlbTtcblxuICAubmF2aWdhdGlvbi0tY2FyZCB7XG4gICAgbWluLWhlaWdodDogMTByZW07XG4gIH1cbiAgLnNlcnZpY2UtLWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDdyZW07XG4gIH1cbiAgLnNrZWxldG9uLS10aXRsZSB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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

/***/ })

}])
//# sourceMappingURL=libs_base-customerzone_dashboard_feat-mybase-dashboard-mobile_src_index_ts.js.map