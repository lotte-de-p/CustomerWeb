(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_feat-mybase-dashboard-internet_src_index_ts"],{

/***/ 75612:
/*!**************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-internet/src/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardInternetComponent: () => (/* reexport safe */ _lib_mybase_dashboard_internet_component__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardInternetComponent),
/* harmony export */   MyBaseDashboardInternetUsageLimitedComponent: () => (/* reexport safe */ _lib_mybase_dashboard_internet_usage_limited_mybase_dashboard_internet_usage_limited_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashboardInternetUsageLimitedComponent),
/* harmony export */   MyBaseDashboardInternetUsageUnlimitedComponent: () => (/* reexport safe */ _lib_mybase_dashboard_internet_usage_unlimited_mybase_dashboard_internet_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseDashboardInternetUsageUnlimitedComponent)
/* harmony export */ });
/* harmony import */ var _lib_mybase_dashboard_internet_usage_limited_mybase_dashboard_internet_usage_limited_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mybase-dashboard-internet-usage-limited/mybase-dashboard-internet-usage-limited.component */ 80437);
/* harmony import */ var _lib_mybase_dashboard_internet_usage_unlimited_mybase_dashboard_internet_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mybase-dashboard-internet-usage-unlimited/mybase-dashboard-internet-usage-unlimited.component */ 2568);
/* harmony import */ var _lib_mybase_dashboard_internet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mybase-dashboard-internet.component */ 62966);




/***/ }),

/***/ 80437:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-internet/src/lib/mybase-dashboard-internet-usage-limited/mybase-dashboard-internet-usage-limited.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardInternetUsageLimitedComponent: () => (/* binding */ MyBaseDashboardInternetUsageLimitedComponent)
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









function MyBaseDashboardInternetUsageLimitedComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
  }
}
function MyBaseDashboardInternetUsageLimitedComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
  }
}
const _c0 = a0 => ({
  daysUntilRenewal: a0
});
class MyBaseDashboardInternetUsageLimitedComponent {
  internetUsageUrl;
  set data(data) {
    if (!data.limited) return;
    const total = data.limited.totalBytes;
    const remaining = data.limited.remainingBytes;
    this.total = total / 1024 ** 3;
    this.used = (total - remaining) / 1024 ** 3;
    this.usedPct = this.used / this.total * 100;
    this.daysUntilRenewal = data.limited.daysUntilRenewal;
    if (this.usedPct >= 80 && this.usedPct < 100) {
      this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.WARN;
    } else if (this.usedPct >= 100) {
      this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.ERROR;
    } else {
      this.progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
    }
  }
  total = 0;
  used = 0;
  usedPct = 0;
  daysUntilRenewal = 0;
  progressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
  ProgressBarStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  goToInternetUsage() {
    this.sendAnalyticsData();
    this.urlService.redirectTo(this.internetUsageUrl);
  }
  sendAnalyticsData() {
    const myBaseDashbaordAnalyticsData = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE_LIMITED,
      destinationUrl: this.internetUsageUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardInternetUsageLimitedComponent_Factory(t) {
    return new (t || MyBaseDashboardInternetUsageLimitedComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardInternetUsageLimitedComponent,
    selectors: [["tg-mybase-dashboard-internet-usage-limited"]],
    inputs: {
      internetUsageUrl: "internetUsageUrl",
      data: "data"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 35,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "height--full", "p--m", "background-white", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mybase-dashboard--card--content", "display--flex", "flex-direction--column", "justify-content--between", "flex-grow"], [1, "mb--xxl--md"], [1, "display--flex", "justify-content--between", "align-items--center", "flex-grow"], [1, "mb--xs"], [1, "text-flow", "text-flow--h1"], [1, "text-flow", "text-flow--h6"], ["class", "icon icon-no-size-override icon-md icon-alert-shape-filled color-notification--warning--light", 4, "ngIf"], ["class", "icon icon-no-size-override icon-md icon-error-shape-filled color-notification--error--light", 4, "ngIf"], [3, "progress", "barColor"], [1, "font--caption-small", "mb--s"], [1, "icon", "icon-no-size-override", "icon-md", "icon-alert-shape-filled", "color-notification--warning--light"], [1, "icon", "icon-no-size-override", "icon-md", "icon-error-shape-filled", "color-notification--error--light"]],
    template: function MyBaseDashboardInternetUsageLimitedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardInternetUsageLimitedComponent_Template_div_click_1_listener() {
          return ctx.goToInternetUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MyBaseDashboardInternetUsageLimitedComponent_i_25_Template, 1, 0, "i", 11)(26, MyBaseDashboardInternetUsageLimitedComponent_i_26_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "tg-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 16, "ng.mybase-dashboard-internet.internet-usage-limited.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-limited-volume-used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 18, ctx.used, "1.0-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "ng.mybase-dashboard-internet.internet-usage-limited.volume-used-part-one"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 23, "ng.mybase-dashboard-internet.internet-usage-limited.volume-used-part-two"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-limited-volume-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 25, ctx.total, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 28, "ng.mybase-dashboard-internet.internet-usage-limited.volume-used-part-three"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBarStatus === ctx.ProgressBarStatus.WARN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBarStatus === ctx.ProgressBarStatus.ERROR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.usedPct)("barColor", ctx.progressBarStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-limited-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 30, "ng.mybase-dashboard-internet.internet-usage-limited.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx.daysUntilRenewal)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2568:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-internet/src/lib/mybase-dashboard-internet-usage-unlimited/mybase-dashboard-internet-usage-unlimited.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardInternetUsageUnlimitedComponent: () => (/* binding */ MyBaseDashboardInternetUsageUnlimitedComponent)
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









function MyBaseDashboardInternetUsageUnlimitedComponent_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited-icon-ok");
  }
}
function MyBaseDashboardInternetUsageUnlimitedComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited-icon-warn");
  }
}
function MyBaseDashboardInternetUsageUnlimitedComponent_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited-icon-error");
  }
}
const _c0 = a0 => ({
  daysUntilRenewal: a0
});
class MyBaseDashboardInternetUsageUnlimitedComponent {
  internetUsageUrl;
  set data(data) {
    if (!data.unlimited) return;
    this.used = data.unlimited.usedBytes / 1024 ** 3;
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
  used = 0;
  daysUntilRenewal = 0;
  usageStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus.OK;
  UsageStatus = _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBarStatus;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  goToInternetUsage() {
    this.sendAnalyticsData();
    this.urlService.redirectTo(this.internetUsageUrl);
  }
  sendAnalyticsData() {
    const myBaseDashbaordAnalyticsData = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE_UNLIMITED,
      destinationUrl: this.internetUsageUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardInternetUsageUnlimitedComponent_Factory(t) {
    return new (t || MyBaseDashboardInternetUsageUnlimitedComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardInternetUsageUnlimitedComponent,
    selectors: [["tg-mybase-dashboard-internet-usage-unlimited"]],
    inputs: {
      internetUsageUrl: "internetUsageUrl",
      data: "data"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 26,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "height--full", "display--flex", "flex-direction--column"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mybase-dashboard--card--content", "display--flex", "flex-direction--column", "justify-content--between", "flex-grow"], [1, "mb--xxl--md"], [1, "display--flex", "align-items--center", "flex-grow", "text-flow", "text-flow--h1"], [1, "mr--xs"], ["class", "icon icon-no-size-override icon-md icon-infinity color-cyan-green", 4, "ngIf"], ["class", "icon icon-no-size-override icon-md icon-alert-shape-filled color-notification--warning--light", 4, "ngIf"], ["class", "icon icon-no-size-override icon-md icon-error-shape-filled color-notification--error--light", 4, "ngIf"], [1, "font--caption-small", "mb--s"], [1, "icon", "icon-no-size-override", "icon-md", "icon-infinity", "color-cyan-green"], [1, "icon", "icon-no-size-override", "icon-md", "icon-alert-shape-filled", "color-notification--warning--light"], [1, "icon", "icon-no-size-override", "icon-md", "icon-error-shape-filled", "color-notification--error--light"]],
    template: function MyBaseDashboardInternetUsageUnlimitedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardInternetUsageUnlimitedComponent_Template_div_click_1_listener() {
          return ctx.goToInternetUsage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MyBaseDashboardInternetUsageUnlimitedComponent_i_13_Template, 1, 1, "i", 9)(14, MyBaseDashboardInternetUsageUnlimitedComponent_i_14_Template, 1, 1, "i", 10)(15, MyBaseDashboardInternetUsageUnlimitedComponent_i_15_Template, 1, 1, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, "ng.mybase-dashboard-internet.internet-usage-unlimited.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 14, "ng.mybase-dashboard-internet.internet-usage-unlimited.label-unlimited"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.OK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.WARN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usageStatus === ctx.UsageStatus.ERROR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited-volume-used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 16, ctx.used, "1.0-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 19, "ng.mybase-dashboard-internet.internet-usage-unlimited.label-gb-used"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-unlimited-days-until-renewal")("data-cy-daysUntilRenewal", ctx.daysUntilRenewal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 21, "ng.mybase-dashboard-internet.internet-usage-unlimited.label-days-until-renewal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.daysUntilRenewal)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 62966:
/*!************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-internet/src/lib/mybase-dashboard-internet.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardInternetComponent: () => (/* binding */ MyBaseDashboardInternetComponent)
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
/* harmony import */ var _mybase_dashboard_internet_usage_limited_mybase_dashboard_internet_usage_limited_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mybase-dashboard-internet-usage-limited/mybase-dashboard-internet-usage-limited.component */ 80437);
/* harmony import */ var _mybase_dashboard_internet_usage_unlimited_mybase_dashboard_internet_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mybase-dashboard-internet-usage-unlimited/mybase-dashboard-internet-usage-unlimited.component */ 2568);













function MyBaseDashboardInternetComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tg-mybase-dashboard-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.myBaseDashboardInternetError$));
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-internet-usage-limited", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template_tg_mybase_dashboard_internet_usage_limited_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r8.myBaseDashboardInternetInternetUsage$))("internetUsageUrl", ctx_r8.internetUsageUrl);
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-dashboard-internet-usage-unlimited", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_3_Template_tg_mybase_dashboard_internet_usage_unlimited_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r9.myBaseDashboardInternetInternetUsage$))("internetUsageUrl", ctx_r9.internetUsageUrl);
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_1_Template, 2, 4, "tg-mybase-dashboard-internet-usage-limited", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Conditional_3_Template, 2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.myBaseDashboardInternetInternetUsage$)) == null ? null : tmp_0_0.limited) ? 1 : ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx_r4.myBaseDashboardInternetInternetUsage$)) == null ? null : tmp_1_0.unlimited) ? 3 : -1);
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "tg-mybase-dashboard-home-network", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_3_Template_tg_mybase_dashboard_home_network_analyticsData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("homeNetworkUrl", ctx_r5.homeNetworkUrl)("wifiPassportUrl", ctx_r5.wifiPassportUrl)("marginTop", false)("componentPrefix", "ng.mybase-dashboard-internet")("isLevel1", false);
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-navigation-cards", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_7_Template_tg_mybase_navigation_cards_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("internetUsageNotificationUrl", ctx_r6.internetUsageNotificationUrl)("speedTestUrl", ctx_r6.speedTestUrl)("productOverviewUrl", ctx_r6.productOverviewUrl)("myDeviceUrl", ctx_r6.myDeviceUrl)("type", "internet")("devicesUsingNetworkUrl", ctx_r6.devicesUsingNetworkUrl)("mobileTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, "ng.mybase-dashboard-internet.navigation-cards.title"))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, ctx_r6.topLevelNavigationCards$));
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-navigation-cards", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_11_Template_tg_mybase_navigation_cards_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("internetUsageNotificationUrl", ctx_r7.internetUsageNotificationUrl)("speedTestUrl", ctx_r7.speedTestUrl)("productOverviewUrl", ctx_r7.productOverviewUrl)("myDeviceUrl", ctx_r7.myDeviceUrl)("devicesUsingNetworkUrl", ctx_r7.devicesUsingNetworkUrl)("customClassGrid", "col-lg-4")("type", "internet")("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, ctx_r7.bottomLevelNavigationCards$));
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_1_Template, 5, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_3_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_7_Template, 3, 12, "tg-mybase-navigation-cards", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Conditional_11_Template, 2, 10, "tg-mybase-navigation-cards", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div")(15, "tg-mybase-services-cards", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Template_tg_mybase_services_cards_analyticsData_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, ctx_r2.myBaseDashboardInternetInternetUsage$)) == null ? null : tmp_0_0.showCard) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, ctx_r2.myBaseDashboardInternetShowHomeNetwork$) ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](7, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 13, ctx_r2.topLevelNavigationCards$)) == null ? null : tmp_2_0.length) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](11, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 15, ctx_r2.bottomLevelNavigationCards$)) == null ? null : tmp_3_0.length) ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("easySwitchUrl", ctx_r2.easySwitchUrl)("bestTariffUrl", ctx_r2.bestTariffUrl)("returnDeviceUrl", ctx_r2.returnDeviceUrl)("type", "internet")("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 17, ctx_r2.myBaseDashboardInternetServices$));
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9)(6, "div", 3)(7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "div", 3)(13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function MyBaseDashboardInternetComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 6)(2, "tg-address-selector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectInternetAddress", function MyBaseDashboardInternetComponent_Conditional_4_Template_tg_address_selector_selectInternetAddress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.selectInternetAddress($event));
    })("analyticsData", function MyBaseDashboardInternetComponent_Conditional_4_Template_tg_address_selector_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardInternetComponent_Conditional_4_Conditional_4_Template, 17, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBaseDashboardInternetComponent_Conditional_4_Conditional_6_Template, 19, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r1.internetLines$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx_r1.myBaseDashboardInternetLoading$) === false ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx_r1.myBaseDashboardInternetLoading$) ? 6 : -1);
  }
}
class MyBaseDashboardInternetComponent {
  internetUsageUrl;
  easySwitchUrl;
  bestTariffUrl;
  returnDeviceUrl;
  homeNetworkUrl;
  wifiPassportUrl;
  internetUsageNotificationUrl;
  productOverviewUrl;
  speedTestUrl;
  myDeviceUrl;
  devicesUsingNetworkUrl;
  scopes = ['customeraccount']; // TBD
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardFacade);
  datalayerFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerFacade);
  internetLines$ = this.facade.internetLines$;
  myBaseDashboardInternetInternetUsage$ = this.facade.myBaseDashboardInternetInternetUsage$;
  myBaseDashboardInternetGeneralCards$ = this.facade.myBaseDashboardInternetGeneralCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(cards => {
    const navCards = cards;
    return navCards.filter(card => this.navigationCardTypes.includes(card));
  }));
  myBaseDashboardInternetServices$ = this.facade.myBaseDashboardInternetServices$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(cards => {
    const serviceCards = cards;
    return serviceCards.filter(card => this.serviceTypes.includes(card));
  }));
  myBaseDashboardInternetError$ = this.facade.myBaseDashboardInternetError$;
  myBaseDashboardInternetLoading$ = this.facade.myBaseDashboardInternetLoading$;
  myBaseDashboardInternetShowHomeNetwork$ = this.facade.myBaseDashboardInternetShowHomeNetwork$;
  topLevelNavigationCards$;
  bottomLevelNavigationCards$;
  // Sorted array, determines the order of the cards
  navigationCardTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.INTERNET_USAGE_NOTIFICATIONS, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SPEEDTEST, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_PRODUCT, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MY_DEVICE, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.DEVICES_USING_YOUR_NETWORK];
  serviceTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BEST_TARIFF, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.EASY_SWITCH, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.RETURN_DEVICE];
  initAfterLoggedIn() {
    this.facade.loadInternetLines();
    this.seggregateCards();
  }
  selectInternetAddress(internetLine) {
    this.facade.setInterLine(internetLine);
  }
  seggregateCards() {
    this.topLevelNavigationCards$ = this.myBaseDashboardInternetGeneralCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(navigationCards => {
      return navigationCards.slice(0, 2);
    }));
    this.bottomLevelNavigationCards$ = this.myBaseDashboardInternetGeneralCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(navigationCards => {
      return navigationCards.slice(2);
    }));
  }
  addAnalyticsEvent(event) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
  static ɵfac = function MyBaseDashboardInternetComponent_Factory(t) {
    return new (t || MyBaseDashboardInternetComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardInternetComponent,
    selectors: [["tg-mybase-dashboard-internet"]],
    inputs: {
      internetUsageUrl: "internetUsageUrl",
      easySwitchUrl: "easySwitchUrl",
      bestTariffUrl: "bestTariffUrl",
      returnDeviceUrl: "returnDeviceUrl",
      homeNetworkUrl: "homeNetworkUrl",
      wifiPassportUrl: "wifiPassportUrl",
      internetUsageNotificationUrl: "internetUsageNotificationUrl",
      productOverviewUrl: "productOverviewUrl",
      speedTestUrl: "speedTestUrl",
      myDeviceUrl: "myDeviceUrl",
      devicesUsingNetworkUrl: "devicesUsingNetworkUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[3, "scopes", "componentCanRender"], [1, "mybase-dashboard-internet"], ["class", "row"], [1, "row"], [1, "col-12", "mt--l--md"], [3, "error"], [1, "col-12"], [3, "data", "selectInternetAddress", "analyticsData"], ["class", "col-12 col-md-6 col-lg-4 mb--m mt--xxxs--md"], [1, "col-12", "col-md-6", "col-lg-4"], [3, "internetUsageNotificationUrl", "speedTestUrl", "productOverviewUrl", "myDeviceUrl", "type", "devicesUsingNetworkUrl", "mobileTitle", "data"], [3, "internetUsageNotificationUrl", "speedTestUrl", "productOverviewUrl", "myDeviceUrl", "devicesUsingNetworkUrl", "customClassGrid", "type", "data"], [3, "easySwitchUrl", "bestTariffUrl", "returnDeviceUrl", "type", "data", "analyticsData"], [1, "col-12", "col-md-6", "col-lg-4", "mb--m", "mt--xxxs--md"], [3, "data", "internetUsageUrl"], [3, "data", "internetUsageUrl", "analyticsData"], [3, "homeNetworkUrl", "wifiPassportUrl", "marginTop", "componentPrefix", "isLevel1", "analyticsData"], [3, "internetUsageNotificationUrl", "speedTestUrl", "productOverviewUrl", "myDeviceUrl", "type", "devicesUsingNetworkUrl", "mobileTitle", "data", "analyticsData"], [3, "internetUsageNotificationUrl", "speedTestUrl", "productOverviewUrl", "myDeviceUrl", "devicesUsingNetworkUrl", "customClassGrid", "type", "data", "analyticsData"], [1, "col-12", "col-md-6", "col-lg-4", "mb--l"], [1, "height--full", "skeleton", "skeleton--basic", "skeleton--container", "navigation--card", "p--m"], [1, "col-12", "mb--l"], [1, "skeleton", "skeleton--basic", "skeleton--container", "navigation--card", "p--m"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton--title", "p--m"], [1, "col-12", "mb--l", "col-lg-4"], [1, "skeleton", "skeleton--basic", "skeleton--container", "service--card", "p--m"]],
    template: function MyBaseDashboardInternetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componentCanRender", function MyBaseDashboardInternetComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyBaseDashboardInternetComponent_Conditional_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardInternetComponent_Conditional_4_Template, 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.myBaseDashboardInternetError$) ? 2 : 4);
      }
    },
    dependencies: [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _mybase_dashboard_internet_usage_limited_mybase_dashboard_internet_usage_limited_component__WEBPACK_IMPORTED_MODULE_7__.MyBaseDashboardInternetUsageLimitedComponent, _mybase_dashboard_internet_usage_unlimited_mybase_dashboard_internet_usage_unlimited_component__WEBPACK_IMPORTED_MODULE_8__.MyBaseDashboardInternetUsageUnlimitedComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseServicesCardsComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardHomeNetworkComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseNavigationCardsComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.AddressSelectorComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".mybase-dashboard-internet[_ngcontent-%COMP%] {\n  margin-top: -7.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .mybase-dashboard-internet[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n.mybase-dashboard-internet[_ngcontent-%COMP%]   .navigation--card[_ngcontent-%COMP%] {\n  min-height: 10rem;\n}\n.mybase-dashboard-internet[_ngcontent-%COMP%]   .service--card[_ngcontent-%COMP%] {\n  min-height: 7rem;\n}\n.mybase-dashboard-internet[_ngcontent-%COMP%]   .skeleton--title[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1pbnRlcm5ldC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtaW50ZXJuZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxtQkFBQTtBQUZGO0FBREU7RUFERjtJQUVJLGdCQUFBO0VBSUY7QUFDRjtBQUZFO0VBQ0UsaUJBQUE7QUFJSjtBQUZFO0VBQ0UsZ0JBQUE7QUFJSjtBQUZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFJSiIsInNvdXJjZXNDb250ZW50IjpbIi5teWJhc2UtZGFzaGJvYXJkLWludGVybmV0IHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgbWFyZ2luLXRvcDogLTcuNXJlbTtcbiAgLm5hdmlnYXRpb24tLWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zZXJ2aWNlLS1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA3cmVtO1xuICB9XG4gIC5za2VsZXRvbi0tdGl0bGUge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_base-customerzone_dashboard_feat-mybase-dashboard-internet_src_index_ts.js.map