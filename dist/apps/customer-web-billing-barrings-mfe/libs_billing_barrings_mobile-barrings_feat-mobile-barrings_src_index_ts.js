(self["webpackChunkcustomer_web_billing_barrings_mfe"] = self["webpackChunkcustomer_web_billing_barrings_mfe"] || []).push([["libs_billing_barrings_mobile-barrings_feat-mobile-barrings_src_index_ts"],{

/***/ 61747:
/*!*********************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/feat-mobile-barrings/src/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarringComponent: () => (/* reexport safe */ _lib_barring_barring_component__WEBPACK_IMPORTED_MODULE_1__.BarringComponent),
/* harmony export */   MobileBarringsComponent: () => (/* reexport safe */ _lib_mobile_barrings_component__WEBPACK_IMPORTED_MODULE_0__.MobileBarringsComponent)
/* harmony export */ });
/* harmony import */ var _lib_mobile_barrings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mobile-barrings.component */ 69675);
/* harmony import */ var _lib_barring_barring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/barring/barring.component */ 13293);



/***/ }),

/***/ 13293:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/feat-mobile-barrings/src/lib/barring/barring.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarringComponent: () => (/* binding */ BarringComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_barrings_mobile_barrings_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/barrings/mobile-barrings/ui */ 13204);
/* harmony import */ var _billing_barrings_mobile_barrings_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_barrings_mobile_barrings_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);







function BarringComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "ng.mobile-barrings.disabled-by-fraud.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "ng.mobile-barrings.disabled-by-fraud.explanation"), " ");
  }
}
function BarringComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-barrings.group.no-restrictions"), " ");
  }
}
const _c0 = (a0, a1) => ({
  "listing--none": a0,
  " pl--m": a1
});
function BarringComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const activeBar_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r2.activeBarrings.length === 1, ctx_r2.activeBarrings.length !== 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activeBar_r3);
  }
}
class BarringComponent {
  constructor() {
    this.translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService);
    this.isReadOnly = false;
    this.globalBarringEnabled = false;
    this.bannerLinkClicked = false;
    this.suspendedNumber = false;
    this.saveBarrings = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.toggleBarring = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addAnalyticsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeBarrings = [];
  }
  set barringGroup(data) {
    if (data?.group) {
      this.barringGroupData = data.group;
      if (data.savedBarring) {
        this.activeBarrings = data.group.barringSettings.reduce((setting, item) => {
          if (item.isBarred) {
            setting.push(this.translateService.instant(`ng.mobile-barrings.barring-name.${item.code}`));
          }
          return setting;
        }, []);
      }
      if (data.group.disabledByFraud) {
        const analyticsEvent = {
          eventName: 'message banner',
          eventType: 'view-banner',
          attributeName: 'fraud ban',
          attributeData: 'info',
          attributeGroup: data.group.code
        };
        this.addAnalyticsEvent.emit(analyticsEvent);
      }
    }
  }
  switchBarring(setting) {
    this.toggleBarring.emit({
      setting,
      groupCode: this.barringGroupData.code
    });
  }
  static #_ = this.ɵfac = function BarringComponent_Factory(t) {
    return new (t || BarringComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BarringComponent,
    selectors: [["tg-barring"]],
    inputs: {
      barringGroup: "barringGroup",
      isReadOnly: "isReadOnly",
      globalBarringEnabled: "globalBarringEnabled",
      bannerLinkClicked: "bannerLinkClicked",
      suspendedNumber: "suspendedNumber",
      originalValueOfGeneralBarring: "originalValueOfGeneralBarring"
    },
    outputs: {
      saveBarrings: "saveBarrings",
      toggleBarring: "toggleBarring",
      cancel: "cancel",
      addAnalyticsEvent: "addAnalyticsEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 17,
    consts: [[1, "background-white"], [1, "barring-header", "display--flex", "justify-content--between", "align-items--center", "p--xl"], [1, "title", "heading--4", "m--n"], [3, "isReadOnly", "barringSettings", "globalBarringEnabled", "bannerLinkIsClicked", "suspendedNumber", "originalValueOfGeneralBarring", "saveBarrings", "toggleBarring", "cancel", "addAnalyticsEvent"], [1, "divider", "divider--s__very-light-grey"], [1, "barring-details", "p--xl"], ["class", "background-notification--info--light--shade_16 p--m mb--l display--flex"], [1, "barring-text", "mb--l", "text-flow", "text-flow--detail"], [1, "current-barring-title", "font--caption"], ["class", "current-barring text-flow text-flow--h6"], [1, "background-notification--info--light--shade_16", "p--m", "mb--l", "display--flex"], [1, "icon", "icon-md", "icon-information-shape", "color-notification--info--light", "mr--l"], [1, "heading--6", "mt--n", "mb--m"], [1, "font--body-regular"], [1, "current-barring", "text-flow", "text-flow--h6"], [1, "current-barring", "display--flex", "align-items--center", "text-flow", "text-flow--h6", "listing--bullit", 3, "ngClass"], ["class", "current-barring display--flex align-items--center text-flow text-flow--h6 listing--bullit", 3, "ngClass"]],
    template: function BarringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tg-barring-selector", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveBarrings", function BarringComponent_Template_tg_barring_selector_saveBarrings_5_listener() {
          return ctx.saveBarrings.emit();
        })("toggleBarring", function BarringComponent_Template_tg_barring_selector_toggleBarring_5_listener($event) {
          return ctx.switchBarring($event);
        })("cancel", function BarringComponent_Template_tg_barring_selector_cancel_5_listener() {
          return ctx.cancel.emit();
        })("addAnalyticsEvent", function BarringComponent_Template_tg_barring_selector_addAnalyticsEvent_5_listener($event) {
          return ctx.addAnalyticsEvent.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BarringComponent_Conditional_8_Template, 9, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BarringComponent_Conditional_15_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](16, BarringComponent_For_17_Template, 3, 5, "ul", 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "ng.mobile-barrings.group.title." + ctx.barringGroupData.code));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isReadOnly", ctx.isReadOnly)("barringSettings", ctx.barringGroupData)("globalBarringEnabled", ctx.globalBarringEnabled)("bannerLinkIsClicked", ctx.bannerLinkClicked)("suspendedNumber", ctx.suspendedNumber)("originalValueOfGeneralBarring", ctx.originalValueOfGeneralBarring);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx.barringGroupData.disabledByFraud ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, "ng.mobile-barrings.group.description." + ctx.barringGroupData.code), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, "ng.mobile-barrings.group.current-bar"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](15, !ctx.activeBarrings.length ? 15 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.activeBarrings);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _billing_barrings_mobile_barrings_ui__WEBPACK_IMPORTED_MODULE_2__.BarringSelectorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 69675:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/feat-mobile-barrings/src/lib/mobile-barrings.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsComponent: () => (/* binding */ MobileBarringsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/barrings/mobile-barrings/data-access */ 49164);
/* harmony import */ var _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @billing/shared/feat-mobile-line-selector */ 6454);
/* harmony import */ var _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _barring_barring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./barring/barring.component */ 13293);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__);














function MobileBarringsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tg-error-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("description", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "ng.mobile-barrings.error-barrings-description"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "ng.mobile-barrings.error-barrings-label"));
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "ng.mobile-barrings.member-read-only"), " ");
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileBarringsComponent_Conditional_4_Conditional_2_Template_span_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.openGeneral($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "ng.mobile-barrings.global-barring-enabled"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "ng.mobile-barrings.group.title.general"));
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "ng.mobile-barrings.suspended-mobile-line"), " ");
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "ng.mobile-barrings.save-successful"), " ");
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.mobile-barrings.save-error"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = a0 => ({
  "mt--xl display--block": a0
});
const _c1 = (a0, a1) => ({
  group: a0,
  savedBarring: a1
});
function MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-barring", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveBarrings", function MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template_tg_barring_saveBarrings_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.save());
    })("toggleBarring", function MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template_tg_barring_toggleBarring_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.toggleBarring($event));
    })("cancel", function MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template_tg_barring_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.cancel());
    })("addAnalyticsEvent", function MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template_tg_barring_addAnalyticsEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addAnalyticsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const $index_r13 = ctx.$index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, !($index_r13 === 0)))("barringGroup", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, group_r12, ctx_r11.savedBarring))("isReadOnly", ctx_r11.isReadOnly)("globalBarringEnabled", ctx_r11.globalBarringEnabled)("bannerLinkClicked", ctx_r11.bannerLinkClicked)("suspendedNumber", ctx_r11.suspendedNumber)("originalValueOfGeneralBarring", ctx_r11.originalValueOfGeneralBarring);
  }
}
function MobileBarringsComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, MobileBarringsComponent_Conditional_4_Conditional_6_For_2_Template, 1, 12, "tg-barring", 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r8.mobileBarringGroups);
  }
}
function MobileBarringsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mobile-line-selector", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileLineSelected", function MobileBarringsComponent_Conditional_4_Template_tg_mobile_line_selector_mobileLineSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.onSelectMobileLine($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MobileBarringsComponent_Conditional_4_Conditional_1_Template, 5, 3, "div", 7)(2, MobileBarringsComponent_Conditional_4_Conditional_2_Template, 9, 6, "div", 8)(3, MobileBarringsComponent_Conditional_4_Conditional_3_Template, 5, 3, "div", 7)(4, MobileBarringsComponent_Conditional_4_Conditional_4_Template, 5, 3, "div", 9)(5, MobileBarringsComponent_Conditional_4_Conditional_5_Template, 4, 3, "div", 10)(6, MobileBarringsComponent_Conditional_4_Conditional_6_Template, 3, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r1.isReadOnly ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r1.showGlobalBarringEnabledMessage ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx_r1.suspendedNumber ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ctx_r1.saveSuccessful ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, ctx_r1.errorOnSave ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, (ctx_r1.mobileBarringGroups == null ? null : ctx_r1.mobileBarringGroups.length) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx_r1.mobileBarringsLoading$) === false ? 6 : -1);
  }
}
function MobileBarringsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MobileBarringsComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.AbstractBaseComponent {
  constructor() {
    super(...arguments);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.MobileBarringsFacade);
    this.userDetailsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.UserDetailsService);
    this.datalayerFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.MobileBarringsDatalayerFacade);
    this.scopes = ['barringsettings'];
    this.mobileBarringGroups$ = this.facade.mobileBarringGroups$;
    this.mobileBarringReadOnly$ = this.facade.mobileBarringReadOnly$;
    this.mobileBarringProductStatus$ = this.facade.mobileBarringProductStatus$;
    this.mobileBarringsLoading$ = this.facade.loadingState$;
    this.mobileBarringError$ = this.facade.mobileBarringError$;
    this.saveSuccessful = false;
    this.isReadOnly = false;
    this.errorOnSave = false;
    this.savedBarring = true;
    this.barringGroupOrder = {
      general: 1,
      roaming: 2,
      'premium-voice': 3,
      'premium-sms': 4,
      'pay-by-mobile': 5
    };
    this.globalBarringEnabled = false;
    this.bannerLinkClicked = false;
    this.suspendedNumber = false;
    this.showGlobalBarringEnabledMessage = false;
  }
  initAfterLoggedIn() {
    this.datalayerFacade.initDataLayer();
    this.obs(this.mobileBarringReadOnly$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(readOnly => {
      this.isReadOnly = readOnly;
      if (this.isReadOnly) {
        const analyticsEvent = {
          eventName: 'message banner',
          eventType: 'view-banner',
          attributeName: 'member message',
          attributeData: 'info'
        };
        this.addAnalyticsEvent(analyticsEvent);
      }
    });
    this.obs(this.mobileBarringGroups$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(groups => {
      const groupsCheckedWithFraud = this.checkFraud(groups);
      this.originalMobileBarringGroups = groupsCheckedWithFraud;
      this.mobileBarringGroups = JSON.parse(JSON.stringify(groupsCheckedWithFraud));
      // we have to track the original value of general barring because of the second window that needs to open
      this.originalValueOfGeneralBarring = this.checkForGlobalSetting();
      this.globalBarringEnabled = this.checkForGlobalSetting();
      this.showGlobalBarringEnabledMessage = this.checkForGlobalSetting();
    });
    this.obs(this.mobileBarringProductStatus$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(productStatus => {
      this.suspendedNumber = productStatus === _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.MobileBarringStatus.SUSPENDED_STATUS;
    });
  }
  onSelectMobileLine(mobileLine) {
    if (mobileLine) {
      this.facade.setSelectedMobileLine(mobileLine);
      this.errorOnSave = false;
      this.saveSuccessful = false;
    }
  }
  toggleBarring(data) {
    // this stupid boolean is making sure the barring component does not update when doing stuff in selector
    this.savedBarring = false;
    const newRefGroup = JSON.parse(JSON.stringify(this.mobileBarringGroups));
    const affectedGroup = newRefGroup.find(group => group.code === data.groupCode);
    if (affectedGroup) {
      const setting = affectedGroup.barringSettings.find(set => set.id === data.setting.id);
      if (setting) {
        setting.isBarred = !setting?.isBarred;
        if (setting.isBarred && setting.mutualExclusiveBarringIds?.length) {
          setting.mutualExclusiveBarringIds.forEach(exBarId => {
            newRefGroup.forEach(group => {
              group.barringSettings.forEach(set => {
                if (set.id === exBarId) {
                  set.isBarred = false;
                }
              });
            });
          });
        }
      }
    }
    this.mobileBarringGroups = newRefGroup;
    this.globalBarringEnabled = this.checkForGlobalSetting();
  }
  checkFraud(groups) {
    const groupsCheckedForFraud = JSON.parse(JSON.stringify(groups));
    let fraudIds = [];
    groupsCheckedForFraud.forEach(group => {
      group.barringSettings.forEach(set => {
        if (set.isSetByFraudManager) {
          fraudIds = [...fraudIds, set.id];
          if (set.mutualExclusiveBarringIds?.length) {
            fraudIds = [...fraudIds, ...set.mutualExclusiveBarringIds];
          }
        }
      });
    });
    groupsCheckedForFraud.forEach(gr => {
      gr.disabledByFraud = gr.barringSettings.some(set => fraudIds.includes(set.id));
    });
    return groupsCheckedForFraud;
  }
  checkForGlobalSetting() {
    return this.mobileBarringGroups.find(gr => gr.code === _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.ALL_INCOMING_AND_OUTGOING_GROUP)?.barringSettings.find(set => set.code === _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.ALL_INCOMING_AND_OUTGOING)?.isBarred ?? false;
  }
  cancel() {
    this.mobileBarringGroups = JSON.parse(JSON.stringify(this.originalMobileBarringGroups));
    this.globalBarringEnabled = this.checkForGlobalSetting();
    this.bannerLinkClicked = false;
  }
  openGeneral(event) {
    event.stopPropagation();
    this.bannerLinkClicked = true;
  }
  addAnalyticsEvent(event) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
  save() {
    this.facade.triggerLoading(true);
    this.saveSuccessful = false;
    this.errorOnSave = false;
    this.savedBarring = true;
    window.scrollTo(0, 0);
    const barringsToSave = [];
    this.mobileBarringGroups.forEach(group => {
      const originalGroup = this.originalMobileBarringGroups.find(ori => ori.code === group.code);
      group.barringSettings.forEach(setting => {
        const original = originalGroup?.barringSettings.find(set => set.id === setting.id);
        if (original && original.isBarred !== setting.isBarred) {
          barringsToSave.push({
            id: setting.id,
            isBarred: setting.isBarred
          });
        }
      });
    });
    const payload = {
      updateBarringSettings: barringsToSave,
      advisorId: undefined
    };
    const selectedMobileLine$ = this.facade.selectMobileBarringSelectedMobileLine$;
    const advisorId$ = this.userDetailsService.getUserDetails().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(details => details.advisorId));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([selectedMobileLine$, advisorId$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([selectedMobileLine, advisorId]) => {
      payload.advisorId = advisorId;
      return this.facade.updateBarrings(payload, selectedMobileLine.msisdn);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe({
      next: response => {
        this.saveSuccessful = true;
        const barrings = {
          barringGroups: response?.barringGroups,
          updatable: response?.updatable,
          productName: response?.productName,
          productStatus: response?.productStatus
        };
        this.facade.setMobileBarrings(barrings);
      },
      error: () => {
        this.errorOnSave = true;
        this.savedBarring = false;
        this.facade.triggerLoading(false);
        this.mobileBarringGroups = JSON.parse(JSON.stringify(this.originalMobileBarringGroups));
      }
    });
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵMobileBarringsComponent_BaseFactory;
    return function MobileBarringsComponent_Factory(t) {
      return (ɵMobileBarringsComponent_BaseFactory || (ɵMobileBarringsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MobileBarringsComponent)))(t || MobileBarringsComponent);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MobileBarringsComponent,
    selectors: [["tg-mobile-barrings"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 7,
    consts: [[3, "scopes", "componentCanRender"], [1, "barrings-wrapper"], ["class", "row"], [1, "row"], [1, "col-12", "mt--l--md"], [3, "description", "label"], [3, "mobileLineSelected"], ["class", "background-notification--info--light--shade_16 pl--xl pt--m pr--m pb--m mt--s mb--l"], ["class", "background-notification--info--light--shade_16 pl--xl p--m mb--l display--flex"], ["class", "background-notification--success--light--shade_16 pl--xl pt--m pr--m pb--m mt--s mb--l"], ["class", "background-notification--error--light--shade_16 display--flex pl--xl pt--m pr--m pb--m mt--s mb--l"], [1, "background-notification--info--light--shade_16", "pl--xl", "pt--m", "pr--m", "pb--m", "mt--s", "mb--l"], [1, "icon", "icon-md", "icon-information-shape", "color-notification--info--light", "mr--xs"], [1, "heading--6"], [1, "background-notification--info--light--shade_16", "pl--xl", "p--m", "mb--l", "display--flex"], [1, "heading--6", "mt--n"], [1, "underline", "cursor--pointer", 3, "click"], [1, "background-notification--success--light--shade_16", "pl--xl", "pt--m", "pr--m", "pb--m", "mt--s", "mb--l"], [1, "icon", "icon-md", "icon-check-shape", "color-notification--success--light", "mr--xs"], [1, "background-notification--error--light--shade_16", "display--flex", "pl--xl", "pt--m", "pr--m", "pb--m", "mt--s", "mb--l"], [1, "icon", "icon-md", "icon-error-shape", "color-notification--error--light", "mr--xs"], [1, "display--inline", 3, "innerHTML"], [3, "ngClass", "barringGroup", "isReadOnly", "globalBarringEnabled", "bannerLinkClicked", "suspendedNumber", "originalValueOfGeneralBarring", "saveBarrings", "toggleBarring", "cancel", "addAnalyticsEvent"], [3, "ngClass", "barringGroup", "isReadOnly", "globalBarringEnabled", "bannerLinkClicked", "suspendedNumber", "originalValueOfGeneralBarring"], [1, "p--xxxg", "skeleton", "skeleton--basic", "skeleton--container"], [1, "p--l"], [1, "mt--xl", "p--xxxg", "skeleton", "skeleton--basic", "skeleton--container"]],
    template: function MobileBarringsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componentCanRender", function MobileBarringsComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MobileBarringsComponent_Conditional_2_Template, 5, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MobileBarringsComponent_Conditional_4_Template, 8, 8)(5, MobileBarringsComponent_Conditional_5_Template, 10, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.mobileBarringError$) ? 2 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx.mobileBarringsLoading$) ? 5 : -1);
      }
    },
    dependencies: [_billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _barring_barring_component__WEBPACK_IMPORTED_MODULE_8__.BarringComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_3__.MobileLineSelectorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__.ErrorNotificationComponent],
    styles: [".barrings-wrapper[_ngcontent-%COMP%] {\n  max-width: 96rem;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9iYXJyaW5ncy9tb2JpbGUtYmFycmluZ3MvZmVhdC1tb2JpbGUtYmFycmluZ3Mvc3JjL2xpYi9tb2JpbGUtYmFycmluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJyaW5ncy13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA5NnJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_barrings_mobile-barrings_feat-mobile-barrings_src_index_ts.js.map