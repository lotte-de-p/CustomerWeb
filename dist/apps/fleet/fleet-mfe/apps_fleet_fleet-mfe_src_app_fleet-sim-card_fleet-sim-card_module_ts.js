(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["apps_fleet_fleet-mfe_src_app_fleet-sim-card_fleet-sim-card_module_ts"],{

/***/ 49870:
/*!******************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/fleet-sim-card.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FleetSimCardModule: () => (/* binding */ FleetSimCardModule)
/* harmony export */ });
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history/order-history.component */ 62161);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _line_apn_details_line_apn_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-apn-details/line-apn-details.component */ 90395);
/* harmony import */ var _line_more_details_line_more_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-more-details/line-more-details.component */ 46215);
/* harmony import */ var _line_number_line_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-number/line-number.component */ 94061);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _line_navigation_list_line_navigation_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./line-navigation-list/line-navigation-list.component */ 88951);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);














class FleetSimCardModule {
  static components = {
    'tg-order-history': _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryComponent,
    'tg-line-apn-details': _line_apn_details_line_apn_details_component__WEBPACK_IMPORTED_MODULE_4__.LineApnDetailsComponent,
    'tg-line-more-details': _line_more_details_line_more_details_component__WEBPACK_IMPORTED_MODULE_5__.LineMoreDetailsComponent,
    'tg-line-number': _line_number_line_number_component__WEBPACK_IMPORTED_MODULE_6__.LineNumberComponent,
    'tg-line-navigation-list': _line_navigation_list_line_navigation_list_component__WEBPACK_IMPORTED_MODULE_8__.LineNavigationListComponent
  };
  static ɵfac = function FleetSimCardModule_Factory(t) {
    return new (t || FleetSimCardModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: FleetSimCardModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__.LoaderModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__.InlineSVGModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_11__.TgFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FleetSimCardModule, {
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__.LoaderModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__.InlineSVGModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_11__.TgFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
  });
})();

/***/ }),

/***/ 30377:
/*!**************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-apn-details/constants/line-apn-details.constants.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineApnDetailsConstants: () => (/* binding */ LineApnDetailsConstants)
/* harmony export */ });
class LineApnDetailsConstants {
  static SCOPES = ['productholding'];
  static MESSAGE_GROUP = 'line-apn-details';
}

/***/ }),

/***/ 90395:
/*!****************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-apn-details/line-apn-details.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineApnDetailsComponent: () => (/* binding */ LineApnDetailsComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_line_apn_details_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/line-apn-details.constants */ 30377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








function LineApnDetailsComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r0.changeAPN, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "ng.line-apn-details.link.change-apn"));
  }
}
function LineApnDetailsComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r1.orderNewAPN, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "ng.line-apn-details.link.order-new-apn"));
  }
}
class LineApnDetailsComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AbstractBaseComponent {
  changeAPN;
  orderNewAPN;
  messageGroupName = _constants_line_apn_details_constants__WEBPACK_IMPORTED_MODULE_1__.LineApnDetailsConstants.MESSAGE_GROUP;
  scopes = _constants_line_apn_details_constants__WEBPACK_IMPORTED_MODULE_1__.LineApnDetailsConstants.SCOPES;
  constructor() {
    super();
  }
  static ɵfac = function LineApnDetailsComponent_Factory(t) {
    return new (t || LineApnDetailsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LineApnDetailsComponent,
    selectors: [["tg-line-apn-details"]],
    inputs: {
      changeAPN: "changeAPN",
      orderNewAPN: "orderNewAPN"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 10,
    consts: [[1, "row"], [1, "col-sn-12", "p-0"], [3, "messageGroupName", "scopes"], [1, "navigation-content"], [1, "navigation-content__header"], [1, "title"], [1, "header-icon", "icon-copy"], [1, "navigation-content__details", "apn"], [1, "footer-btn"], ["class", "mb-20 button button--tertiary button__icon--position-right", 3, "href", 4, "ngIf"], [1, "mb-20", "button", "button--tertiary", "button__icon--position-right", 3, "href"], [1, "icon", "icon-chevron-right"]],
    template: function LineApnDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "tg-login", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LineApnDetailsComponent_a_15_Template, 5, 4, "a", 9)(16, LineApnDetailsComponent_a_16_Template, 5, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 6, "ng.line-apn-details.lbl.apn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 8, "ng.line-apn-details.lbl.apn.overview"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.changeAPN);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orderNewAPN);
      }
    },
    dependencies: [_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95914:
/*!****************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-more-details/constants/line-more-details.constants.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineMoreDetailsConstants: () => (/* binding */ LineMoreDetailsConstants)
/* harmony export */ });
class LineMoreDetailsConstants {
  static SCOPES = ['productholding'];
  static MESSAGE_GROUP = 'line-overview';
}

/***/ }),

/***/ 46215:
/*!******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-more-details/line-more-details.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineMoreDetailsComponent: () => (/* binding */ LineMoreDetailsComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_line_more_details_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/line-more-details.constants */ 95914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class LineMoreDetailsComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AbstractBaseComponent {
  messageGroupName = _constants_line_more_details_constants__WEBPACK_IMPORTED_MODULE_1__.LineMoreDetailsConstants.MESSAGE_GROUP;
  scopes = _constants_line_more_details_constants__WEBPACK_IMPORTED_MODULE_1__.LineMoreDetailsConstants.SCOPES;
  constructor() {
    super();
  }
  static ɵfac = function LineMoreDetailsComponent_Factory(t) {
    return new (t || LineMoreDetailsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LineMoreDetailsComponent,
    selectors: [["tg-line-more-details"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 8,
    consts: [[1, "row"], [1, "col-sm-12", "p-0"], [3, "messageGroupName", "scopes"], [1, "navigation-content"], [1, "navigation-content__header"], [1, "title"], [1, "header-icon", "icon-plus"]],
    template: function LineMoreDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "tg-login", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName)("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 4, "ng.line-more-details.lbl.more"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 6, "ng.line-more-details.lbl.more.overview"), " ");
      }
    },
    dependencies: [_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 68179:
/*!**********************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-navigation-list/constants/line-navigation-list.constants.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNavigationListConstants: () => (/* binding */ LineNavigationListConstants)
/* harmony export */ });
class LineNavigationListConstants {
  static MESSAGE_GROUP = 'line-navigation-list';
  static MSISDN = 'msisdn';
  static PROFILE_STATUS_PENDING = 'PENDING_VALIDATION';
  static PROFILE_STATUS_INVITED = 'INVITED';
}

/***/ }),

/***/ 88951:
/*!************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-navigation-list/line-navigation-list.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNavigationListComponent: () => (/* binding */ LineNavigationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _services_line_navigation_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/line-navigation-list.service */ 65079);
/* harmony import */ var _constants_line_navigation_list_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/line-navigation-list.constants */ 68179);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__);














const _c0 = a0 => ({
  active: a0
});
const _c1 = a0 => ({
  "last-item": a0
});
function LineNavigationListComponent_ng_container_3_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineNavigationListComponent_ng_container_3_li_10_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const navItem_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.loadContent(navItem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const navItem_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r3.isNavItemActive(navItem_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "nav-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navigation-list__icon icon-", navItem_r4.tabName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "ng.line-navigation-list.link." + navItem_r4.tabName));
  }
}
const _c2 = a0 => ({
  "visibility--show": a0
});
const _c3 = a0 => ({
  "visibility--hide": a0
});
function LineNavigationListComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineNavigationListComponent_ng_container_3_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.showNavMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LineNavigationListComponent_ng_container_3_li_10_Template, 9, 13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const navItems_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r0.hideNavMenuWhenMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "ng.line-navigation-list.text.back-menu"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, ctx_r0.hideNavMenuWhenMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", navItems_r2);
  }
}
const _c4 = (a0, a1) => ({
  "visibility--show": a0,
  "visibility--hide": a1
});
function LineNavigationListComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const content_r10 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c4, ctx_r1.hideNavMenuWhenMobile, !ctx_r1.hideNavMenuWhenMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", content_r10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class LineNavigationListComponent {
  tabs;
  defaultQueryParam;
  navItems$;
  content$;
  activeNavItem;
  hideNavMenuWhenMobile = false;
  #urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService);
  #loaderService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderService);
  #lineNavigationListService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_line_navigation_list_service__WEBPACK_IMPORTED_MODULE_3__.LineNavigationListService);
  #dataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService);
  ngOnInit() {
    this.navItems$ = this.createNavItems$();
  }
  loadContent(navItem) {
    this.content$ = this.#lineNavigationListService.getSafeHtmlContent$(navItem.tabLink).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)({
      next: () => {
        this.pushPageStepDataToAnalytics(navItem.tabName);
        this.hideNavMenuWhenMobile = true;
        this.activeNavItem = navItem;
      },
      error: err => {
        console.error('Error loading content for navItem: ', navItem, err);
      }
    }));
  }
  isNavItemActive(navItem) {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.activeNavItem) && navItem.tabName === this.activeNavItem.tabName;
  }
  showNavMenu() {
    this.hideNavMenuWhenMobile = false;
  }
  createNavItems$() {
    this.#loaderService.start();
    const msisdn = this.#urlService.getParameterByName(_constants_line_navigation_list_constants__WEBPACK_IMPORTED_MODULE_4__.LineNavigationListConstants.MSISDN);
    const navItemsFromAuthor = JSON.parse(this.tabs);
    return this.#lineNavigationListService.createNavItems$(navItemsFromAuthor, msisdn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)({
      next: navItems => {
        if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(navItems)) {
          this.loadContentOfDefaultNavItem(navItems);
        }
        this.#loaderService.stop();
      },
      error: err => {
        console.error('Error loading nav items', err);
        this.#loaderService.stop();
      }
    }));
  }
  loadContentOfDefaultNavItem(navItems) {
    const defaultNavItemFromUrl = this.#urlService.getRequestParameterOrDefault(this.defaultQueryParam, '');
    this.loadContent(this.#lineNavigationListService.getDefaultNavItem(navItems, defaultNavItemFromUrl));
  }
  pushPageStepDataToAnalytics(stepId) {
    if (stepId) {
      stepId = stepId.replace(/\s/g, '-');
      const attributes = {};
      attributes['stepId'] = stepId;
      this.#dataLayerService.addStepViewEvent(attributes);
    }
  }
  static ɵfac = function LineNavigationListComponent_Factory(t) {
    return new (t || LineNavigationListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LineNavigationListComponent,
    selectors: [["tg-line-navigation-list"]],
    inputs: {
      tabs: "tabs",
      defaultQueryParam: "defaultQueryParam"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 10,
    consts: [[3, "enableLoader", "pageType", "enableMask", "startByDefault"], ["messageGroupName", "line-navigation-list"], [1, "row"], [4, "ngIf"], [1, "col-sm-12", "col-md-4"], [1, "navigation-list--deprecated"], [1, "nav-header-mobile", "font--body-small", "display--flex", "align-items--center", "position--relative", 3, "ngClass", "click"], [1, "icon", "icon-chevron-right", "back-arrow", "pr--xxs"], [1, "nav-list", 3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "link-section"], [1, "selection-bar"], [1, "list-item", 3, "ngClass"], [1, "col-sm-12", "col-md-8", "navigation--content", 3, "ngClass"], [3, "innerHTML"]],
    template: function LineNavigationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0)(1, "app-message-flow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LineNavigationListComponent_ng_container_3_Template, 11, 11, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LineNavigationListComponent_ng_container_5_Template, 3, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableLoader", true)("pageType", "fleet-page")("enableMask", true)("startByDefault", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.navItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.content$));
      }
    },
    dependencies: [_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessageFlowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 65079:
/*!*******************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-navigation-list/services/line-navigation-list.service.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNavigationListService: () => (/* binding */ LineNavigationListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_line_navigation_list_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/line-navigation-list.constants */ 68179);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _shared_common_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/common/services/products/products.service */ 28290);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 41855);









class LineNavigationListService {
  #productService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_shared_common_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService);
  #http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  #sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer);
  ADDRESS_TAB_NAME = 'address';
  createNavItems$(navItemsFromAuthor, msisdn) {
    return this.#productService.getProductByIdentifier(_constants_line_navigation_list_constants__WEBPACK_IMPORTED_MODULE_2__.LineNavigationListConstants.MESSAGE_GROUP, msisdn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(productHolding => {
      return navItemsFromAuthor.filter(navItem => this.isNavItemLinkNotEmpty(navItem)).filter(navItem => this.showAddressNavItem(navItem, productHolding));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error('An error occurred:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => error);
    }));
  }
  getDefaultNavItem(navItems, defaultNavItemNameFromUrl) {
    const defaultNavItemIndexFromUrl = this.findDefaultNavItemIndexWithName(navItems, defaultNavItemNameFromUrl);
    const defaultNavItemIndexWithDefaultFlag = this.findDefaultNavItemIndexWithDefaultFlag(navItems);
    if (defaultNavItemIndexFromUrl !== -1) {
      return navItems[defaultNavItemIndexFromUrl];
    }
    if (defaultNavItemIndexWithDefaultFlag !== -1) {
      return navItems[defaultNavItemIndexWithDefaultFlag];
    }
    return navItems[0];
  }
  getSafeHtmlContent$(url) {
    return this.#http.get(url + '.html', {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(html => this.#sanitizer.bypassSecurityTrustHtml(html)));
  }
  isNavItemLinkNotEmpty(navItem) {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(navItem.tabLink);
  }
  showAddressNavItem(navItem, productHolding) {
    if (navItem.tabName === this.ADDRESS_TAB_NAME) {
      return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(productHolding.splitBillProfile);
    }
    return true;
  }
  findDefaultNavItemIndexWithName(navItems, defaultNavItemNameFromUrl) {
    return navItems.findIndex(navItem => navItem.tabName === defaultNavItemNameFromUrl);
  }
  findDefaultNavItemIndexWithDefaultFlag(navItems) {
    return navItems.findIndex(navItem => navItem.default);
  }
  static ɵfac = function LineNavigationListService_Factory(t) {
    return new (t || LineNavigationListService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LineNavigationListService,
    factory: LineNavigationListService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 54046:
/*!****************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-number/constants/line-number.constants.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNumberConstants: () => (/* binding */ LineNumberConstants)
/* harmony export */ });
class LineNumberConstants {
  static MSISDN = 'msisdn';
  static MESSAGE_GROUP = 'line-number';
}

/***/ }),

/***/ 94061:
/*!******************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-number/line-number.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNumberComponent: () => (/* binding */ LineNumberComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_line_number_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/line-number.constants */ 54046);
/* harmony import */ var _service_navigation_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/navigation-menu-service */ 84660);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _shared_common_pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common/pipes/phone-number.pipe */ 14107);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);















function LineNumberComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.lineNumber));
  }
}
const _c0 = a0 => ({
  "visibility-hidden": a0
});
class LineNumberComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AbstractBaseComponent {
  urlService;
  phoneNumberTransformService;
  navigationMenuService;
  messageGroupName = _constants_line_number_constants__WEBPACK_IMPORTED_MODULE_2__.LineNumberConstants.MESSAGE_GROUP;
  lineNumber;
  toggleNavMenu$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false);
  constructor(urlService, phoneNumberTransformService, navigationMenuService) {
    super();
    this.urlService = urlService;
    this.phoneNumberTransformService = phoneNumberTransformService;
    this.navigationMenuService = navigationMenuService;
  }
  ngOnInit() {
    const msisdnFromUrl = this.urlService.getParameterByName(_constants_line_number_constants__WEBPACK_IMPORTED_MODULE_2__.LineNumberConstants.MSISDN);
    if (msisdnFromUrl) {
      this.lineNumber = this.phoneNumberTransformService.autoFormatPhoneNumber(msisdnFromUrl);
      this.toggleNavMenu$ = this.navigationMenuService.getToggleNavMenu();
    }
  }
  static ɵfac = function LineNumberComponent_Factory(t) {
    return new (t || LineNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_navigation_menu_service__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LineNumberComponent,
    selectors: [["tg-line-number"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 10,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "messageGroupName"], [1, "line-details-header", "mb-10", 3, "ngClass"], [1, "icon-mobile"], [1, "header"], [1, "header", "header__text"], ["class", "header header__value", 4, "ngIf"], [1, "header", "header__value"]],
    template: function LineNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-message-flow", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, LineNumberComponent_p_10_Template, 3, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx.toggleNavMenu$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 6, "ng.line-number.lbl.edit-line-details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.lineNumber);
      }
    },
    dependencies: [_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessageFlowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _shared_common_pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 84660:
/*!****************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-number/service/navigation-menu-service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationMenuService: () => (/* binding */ NavigationMenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class NavigationMenuService {
  toggleNavMenu$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
  setToggleNavMenu(newFlag) {
    this.toggleNavMenu$.next(newFlag);
  }
  getToggleNavMenu() {
    return this.toggleNavMenu$;
  }
  static ɵfac = function NavigationMenuService_Factory(t) {
    return new (t || NavigationMenuService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NavigationMenuService,
    factory: NavigationMenuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36827:
/*!********************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/order-history/constants/order-history.constants.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryConstants: () => (/* binding */ OrderHistoryConstants)
/* harmony export */ });
class OrderHistoryConstants {
  static SCOPES = ['sales'];
  static MESSAGE_GROUP = 'order-history';
  static STATUS_FAILED = 'Failed';
}

/***/ }),

/***/ 45421:
/*!**************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/order-history/mapper/order.history.mapper.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryMapper: () => (/* binding */ OrderHistoryMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class OrderHistoryMapper {
  toModel(rawOrderHistory) {
    return this.createOrderHistory(rawOrderHistory);
  }
  createOrderHistory(rawOrderHistory) {
    if (rawOrderHistory) {
      return rawOrderHistory.map(rawOrder => (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.Builder)().orderNumber(rawOrder.orderNumber).dateCreated(rawOrder.dateCreated).status(rawOrder.status).orderItems(this.createOrderItems(rawOrder.orderItems)).build());
    }
    return [];
  }
  createOrderItems(orderItemInterface) {
    if (orderItemInterface) {
      return orderItemInterface.map(rawOrderItem => (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.Builder)().name(rawOrderItem.name).action(rawOrderItem.action).technical(rawOrderItem.technical).identifier(rawOrderItem.identifier).orderItems(this.createOrderItems(rawOrderItem.orderItems)).validations(this.createOrderItemValidations(rawOrderItem.validations)).build());
    }
    return [];
  }
  createOrderItemValidations(validationsInterface) {
    if (validationsInterface) {
      return validationsInterface.map(rawValidation => (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.Builder)().validationError(rawValidation.validationError).build());
    }
    return [];
  }
  static ɵfac = function OrderHistoryMapper_Factory(t) {
    return new (t || OrderHistoryMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OrderHistoryMapper,
    factory: OrderHistoryMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62161:
/*!**********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/order-history/order-history.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryComponent: () => (/* binding */ OrderHistoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 17474);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_order_history_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/order-history.constants */ 36827);
/* harmony import */ var _service_order_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/order-history.service */ 66356);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);












function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_i_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_i_24_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.toggle(pendingSalesOrder_r5.orderNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r6.isToggled(pendingSalesOrder_r5.orderNumber) ? "icon-chevron-up" : "icon-chevron-down");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "div", 3)(2, "div", 4)(3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4)(11, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 4)(15, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "ng.order-history.lbl.product-name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, "ng.order-history.lbl.number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 8, "ng.order-history.lbl.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 10, "ng.order-history.lbl.order"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.order-failed"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.order-pending"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.order-failed"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.order-pending"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_a_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_a_28_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.toggle(orderItem_r16.identifier));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.view-options"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.toggle(orderItem_r16.identifier));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r22.isToggled(orderItem_r16.identifier) ? "icon-chevron-up" : "icon-chevron-down");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const options_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", options_r34.name, " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 41)(3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_30_span_6_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "ng.order-history.lbl.options"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", orderItem_r16.orderItems);
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 21);
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_32_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.toggle(orderItem_r16.identifier));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_32_Template_i_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.toggle(orderItem_r16.identifier));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orderItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "ng.order-history.lbl.view-options"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r25.isToggled(orderItem_r16.identifier) ? "icon-chevron-up" : "icon-chevron-down");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 9)(3, "div", 10)(4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_10_Template, 3, 3, "span", 30)(11, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_11_Template, 3, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_19_Template, 3, 3, "span", 30)(20, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_span_20_Template, 3, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 10)(22, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_a_28_Template, 3, 3, "a", 33)(29, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_i_29_Template, 1, 1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_30_Template, 7, 4, "div", 1)(31, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_31_Template, 1, 0, "div", 35)(32, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_div_32_Template, 5, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orderItem_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 15, "ng.order-history.lbl.product-name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](orderItem_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.validations));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r15.hasAny(orderItem_r16.validations));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 17, "ng.order-history.lbl.number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](orderItem_r16.identifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.validations));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r15.hasAny(orderItem_r16.validations));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 19, "ng.order-history.lbl.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](orderItem_r16.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.isToggled(orderItem_r16.identifier) && ctx_r15.hasAny(orderItem_r16.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.hasAny(orderItem_r16.orderItems));
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_div_1_Template, 33, 21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", pendingSalesOrder_r5.orderItems);
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.toggle(pendingSalesOrder_r5.orderNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ng.order-history.lbl.view-orders"), " ");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_div_2_Template, 21, 12, "div", 20)(3, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_ng_container_3_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_span_6_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.toggle(pendingSalesOrder_r5.orderNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pendingSalesOrder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isToggled(pendingSalesOrder_r5.orderNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isToggled(pendingSalesOrder_r5.orderNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.hasAny(pendingSalesOrder_r5.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r7.isToggled(pendingSalesOrder_r5.orderNumber) ? "icon-chevron-up" : "icon-chevron-down");
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10)(12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10)(18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_i_24_Template, 1, 1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_div_25_Template, 8, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pendingSalesOrder_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, "ng.order-history.lbl.order-reference"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", pendingSalesOrder_r5.orderNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", pendingSalesOrder_r5.orderItems == null ? null : pendingSalesOrder_r5.orderItems.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 11, "ng.order-history.lbl.date-created"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](pendingSalesOrder_r5.dateCreated);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 13, "ng.order-history.lbl.summary"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](pendingSalesOrder_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.hasAny(pendingSalesOrder_r5.orderItems));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.hasAny(pendingSalesOrder_r5.orderItems));
  }
}
function OrderHistoryComponent_div_1_div_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderHistoryComponent_div_1_div_1_ng_container_16_div_1_Template, 26, 15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const failedSalesOrders_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", failedSalesOrders_r1);
  }
}
function OrderHistoryComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4)(13, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, OrderHistoryComponent_div_1_div_1_ng_container_16_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const failedSalesOrders_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 4, "ng.order-history.lbl.order-reference"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 6, "ng.order-history.lbl.date-created"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 8, "ng.order-history.lbl.summary"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasAny(failedSalesOrders_r1));
  }
}
function OrderHistoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderHistoryComponent_div_1_div_1_Template, 17, 10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const failedSalesOrders_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.hasAny(failedSalesOrders_r1));
  }
}
class OrderHistoryComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AbstractBaseComponent {
  orderHistoryService;
  loaderService;
  messageGroupName = _constants_order_history_constants__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryConstants.MESSAGE_GROUP;
  scopes = _constants_order_history_constants__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryConstants.SCOPES;
  failedOrders$;
  toggledItems = new Array();
  constructor(orderHistoryService, loaderService) {
    super();
    this.orderHistoryService = orderHistoryService;
    this.loaderService = loaderService;
  }
  initAfterLoggedIn() {
    this.failedOrders$ = this.getCustomerFailedOrderHistory();
  }
  toggle(identifier) {
    this.isToggled(identifier) ? this.removeElement(identifier) : this.addElement(identifier);
  }
  isToggled(identifier) {
    return this.toggledItems.includes(identifier);
  }
  hasAny(array) {
    return array.length > 0;
  }
  addElement(identifier) {
    this.toggledItems.push(identifier);
  }
  removeElement(identifier) {
    this.toggledItems.splice(this.toggledItems.indexOf(identifier), 1);
  }
  getCustomerFailedOrderHistory() {
    this.loaderService.start();
    return this.obs(this.orderHistoryService.getOrderHistory(this.messageGroupName, _constants_order_history_constants__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryConstants.STATUS_FAILED).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loaderService.stop())));
  }
  static ɵfac = function OrderHistoryComponent_Factory(t) {
    return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_order_history_service__WEBPACK_IMPORTED_MODULE_2__.OrderHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: OrderHistoryComponent,
    selectors: [["tg-order-history"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 5,
    consts: [[3, "messageGroupName", "scopes", "componentCanRender"], [4, "ngIf"], [1, "product-row-item", "label-row", "product-row-item__failed-orders__label-row"], [1, "product-row-item__items", "label-profile", "mt--m"], [1, "product-row-item__item", "label-profile", "hidden-mobile-row-item", "cursor--pointer"], [1, "product-row-item__failed-orders-label", "font-weight--black"], ["class", "product-row-item product-row-item__failed-orders content-row no-scroll", 4, "ngFor", "ngForOf"], [1, "product-row-item", "product-row-item__failed-orders", "content-row", "no-scroll"], [1, "content-section", "mb-0", "mb--m--md"], [1, "product-row-item__items", "consult-profile"], [1, "product-row-item__item", "consult-profile"], [1, "hidden-desktop-row-item", "product-row-item__failed-orders-label", "text--m"], [1, "text-weight--g"], [1, "background-very-light-grey", "border-radius--all--l", "ml--l--lg", "ml--s--md", "ml--l", "text-weight--g", "text--m", "text--xm--md", "pt--xxxs", "pb--xxxs", "pr--s--md", "pl--s--md", "pr--xs", "pl--xs"], [1, "product-row-item__item", "consult-profile", "pb-0", "hide-until-md", "text-align--right"], ["class", "icon-chevron-down", 3, "ngClass", "click", 4, "ngIf"], ["class", "product-row-item__failed-orders__data", 4, "ngIf"], [1, "icon-chevron-down", 3, "ngClass", "click"], [1, "product-row-item__failed-orders__data"], [1, "divider", "divider--xxs__very-light-grey", "hide-until-md"], ["class", "product-row-item label-row product-row-item__failed-orders__data--label", 4, "ngIf"], [1, "divider", "divider--xxs__very-light-grey", "hide-from-md"], [1, "product-row-item__item", "consult-profile", "pb-0", "mt--l", "mb--l", "mb--n--md", "mt--n--md", "hide-from-md", "text-align--center"], ["class", "mr--s", 3, "click", 4, "ngIf"], [1, "product-row-item", "label-row", "product-row-item__failed-orders__data--label"], [1, "hidden-mobile-row-item", "cursor--pointer"], ["class", "product-row-item content-row product-row-item__failed-orders__data--items", 4, "ngFor", "ngForOf"], [1, "product-row-item", "content-row", "product-row-item__failed-orders__data--items"], [1, "content-section"], [1, "product-row-item__item", "consult-profile", "hide-from-md"], ["class", "background-red color-white border-radius--all--l pt--xxs pb--xxs pr--m pl--m text-uppercase text--s", 4, "ngIf"], ["class", "background-blue-green color-white border-radius--all--l pt--xxs pb--xxs pr--m pl--m text-uppercase text--s", 4, "ngIf"], [1, "product-row-item__item", "consult-profile", "hide-until-md"], ["class", "link link--no-underline secondary", 3, "click", 4, "ngIf"], ["class", "icon-chevron-down ml-10", 3, "ngClass", "click", 4, "ngIf"], ["class", "divider divider--xxs__very-light-grey hide-from-md", 4, "ngIf"], ["class", "product-row-item__item consult-profile pb-0 mt--l mb--l mb--n--md mt--n--md hide-from-md text-align--center", 4, "ngIf"], [1, "background-red", "color-white", "border-radius--all--l", "pt--xxs", "pb--xxs", "pr--m", "pl--m", "text-uppercase", "text--s"], [1, "background-blue-green", "color-white", "border-radius--all--l", "pt--xxs", "pb--xxs", "pr--m", "pl--m", "text-uppercase", "text--s"], [1, "link", "link--no-underline", "secondary", 3, "click"], [1, "icon-chevron-down", "ml-10", 3, "ngClass", "click"], [1, "display--flex", "product-row-item__failed-orders__data--items__options", "flex-direction--row--md", "flex-direction--column"], [1, "hide-from-md", "product-row-item__failed-orders-label", "text-uppercase", "pb--m", "text--m"], ["class", "text--m mb--s mb--s--md", 4, "ngFor", "ngForOf"], [1, "text--m", "mb--s", "mb--s--md"], [1, "mr--s", 3, "click"]],
    template: function OrderHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("componentCanRender", function OrderHistoryComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderHistoryComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName)("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx.failedOrders$));
      }
    },
    dependencies: [_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 66356:
/*!****************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-sim-card/order-history/service/order-history.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderHistoryService: () => (/* binding */ OrderHistoryService)
/* harmony export */ });
/* harmony import */ var _mapper_order_history_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapper/order.history.mapper */ 45421);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class OrderHistoryService {
  ocapiService;
  orderHistoryMapper;
  constructor(ocapiService, orderHistoryMapper) {
    this.ocapiService = ocapiService;
    this.orderHistoryMapper = orderHistoryMapper;
  }
  getOrderHistory(messageGroupName, status) {
    const suffix = status ? `?status=${status}` : '';
    const url = '/public/api/fleet-customer-service/v1/customers/salesorderhistory'.concat(suffix);
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(messageGroupName, url, this.orderHistoryMapper));
  }
  static ɵfac = function OrderHistoryService_Factory(t) {
    return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_mapper_order_history_mapper__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OrderHistoryService,
    factory: OrderHistoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32831:
/*!**************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/constants/fleet-products-service.constants.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FleetProductsServiceConstants: () => (/* binding */ FleetProductsServiceConstants)
/* harmony export */ });
class FleetProductsServiceConstants {
  static FLEET_PRODUCT_SERVICE_PREFIX = '/public/api/fleet-product-service/';
  static API_VERSION_V1 = 'v1';
  static CONTEXT_PRODUCTS = '/products';
  static EMPTY = '';
}

/***/ }),

/***/ 48827:
/*!*******************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/constants/products/product.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductConstants: () => (/* binding */ ProductConstants)
/* harmony export */ });
class ProductConstants {
  static EMPTY = '';
  static WEIGHT = 'weight';
  static API_VERSION_V1 = 'v1';
  static UNLIMITED = 'UNLIMITED';
  static MOBILE_CALLING = 'MOBILE_CALLING';
  static MOBILE_INTERNET = 'MOBILE_INTERNET';
  static FIXED_INTERNET = 'FIXED_INTERNET';
  static MOBILE_LINE = 'mobile_line';
  static MOBILE_MONETARY = 'MOBILE_MONETARY';
  static TV = 'TV';
  static MINUTES = 'MINUTES';
  static MIN = 'MIN';
  static FUP = 'FUP';
  static VOICE = ['voice', 'call-to-other-networks'];
  static DATA = ['data', 'mobile-data'];
  static EPC_LIST_TO_SHOW_RATE = ['PREPAID-MOBILE', 'BASE0000'];
  static CONTEXT_PRODUCTS = '/products';
  static OMAPI_CATEGORY_BASE_PRO = 'BASE-PRO';
  static OMAPI_CATEGORY_BASE_PRO_VOICE = 'BASE-PRO-VOICE';
  static OMAPI_CATEGORY_PRE_PAID_MOBILE = 'PREPAID-MOBILE';
  static OMAPI_CATEGORY_POST_PAID_MOBILE = 'POST-PAID-MOBILE';
  static PRODUCT_TYPE_TELEPHONE = 'telephone';
  static PRODUCT_TYPE_MOBILE = 'mobile';
  static PRODUCT_TYPE_DTV = 'dtv';
  static PRODUCT_TYPE_INTERNET = 'internet';
  static TELEPHONE_RANK = '4';
  static MOBILE_RANK = '5';
  static DTV_RANK = '3';
  static INTERNET_RANK = '2';
  static BUNDLE_RANK = '1';
  static PRODUCT_TYPE_BUNDLE = 'bundle';
  static USAGE = '/usage';
  static PREPAID = 'prepaid-mobile';
  static CONTEXT_GROUP_BUNDLES = '/groupbundles/';
  static PRODUCT_TYPE = '/type';
  static PRODUCTS = '/products';
}

/***/ }),

/***/ 66432:
/*!********************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/constants/profile/create-fleet-profile-constants.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateFleetProfileConstants: () => (/* binding */ CreateFleetProfileConstants)
/* harmony export */ });
class CreateFleetProfileConstants {
  static FLOW_MOBILE_NUMBER = 'mobile-number';
  static FLOW_PERSONAL_DETAILS = 'personal-details';
  static FLOW_VALIDATE_SMS_CODE = 'validate-smscode';
  static FLOW_THANK_YOU = 'thank-you';
  static FLOW_CHANGE_PASSWORD = 'change-password';
  static FLOW_PARAM_CREATE = 'create';
  static FLOW_PARAM_MANAGE = 'manage';
  static FLOW_PARAM_COMPLETE = 'complete';
  static FLOW_PARAM_CHANGEPWD = 'changepwd';
  static FLOW_PARAM_RECOVER = 'validateEmail';
  static FLOW_PARAM_COMPLETE_RECOVER = 'completeRecoverPassword';
  static FLOW_PARAM_INITIATE_RECOVER = 'initiateRecoverPassword';
  static MESSAGE_GROUP = 'create-fleet-profile';
  static NEXT_EVENT = 'next';
  static PREV_EVENT = 'prev';
  static ENDPOINT_RESEND_INVITATION = 'identities/{{identityId}}/invitations';
  static ENDPOINT_FLEET_IDENTITY_STATUS_BY_IDENTIFIER = '/identity';
  static FLEET_PROFILE_ACTION_UPDATE = '?action=update';
  static CALL_SUCCESS = 200;
  static REQUEST_PARAMETER_KEY = 'flow';
  static INVALID_FLEET_NUMBER_ERROR_CODE = 'OCAPI-ERR-ODPD102';
  static PROFILE_NOT_FOUND_ERROR_CODE = 'OCAPI-ERR-ODPD103';
  static IDENTITY_STATUS_PENDING_VALIDATION_ERROR_CODE = 'OCAPI-ERR-ODCS117';
  static IDENTITY_STATUS_SUCCES = 'SUCCESS';
  static IDENTITY_STATUS_VALIDATED = 'VALIDATED';
  static IDENTITY_STATUS_INVITED = 'INVITED';
  static IDENTITY_STATUS_PENDING_VALIDATION = 'PENDING_VALIDATION';
  static ROLE = 'Fleet User';
  static ACCESS_CODE = 'accesscode';
  static ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];
  static ALLOWED_FILE_SIZE = 5242880;
  static PHONE_REGEX = '^[0-9]+$';
  static STEP_ID_MANAGE_PROFILE = 'manage-profile';
  static STEP_ID_CHANGE_PASSWORD = 'change-password';
  static STEP_ID_THANK_YOU = 'thank-you';
  static MOBILE_NUMBER_URL = 'mobile-number';
  static PERSONAL_DETAILS_URL = '/personal-details';
  static CHANGE_PASSWORD_URL = '/change-password';
  static THANK_YOU_URL = '/thank-you';
}

/***/ }),

/***/ 79502:
/*!*******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/mappers/account/account-master-agreement.mapper.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountMasterAgreementMapper: () => (/* binding */ AccountMasterAgreementMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class AccountMasterAgreementMapper {
  omapiMapper;
  constructor(omapiMapper) {
    this.omapiMapper = omapiMapper;
  }
  toModel(rawAccountMasterAgreement) {
    const accountMasterAgreement = {};
    accountMasterAgreement.activeMSA = this.createActiveMsa(rawAccountMasterAgreement.activeMSA);
    return accountMasterAgreement;
  }
  createActiveMsa(rawMasterAgreement) {
    const activeMasterAgreements = [];
    rawMasterAgreement.forEach(rawAgreement => {
      const masterAgreement = {};
      masterAgreement.bundles = this.createBundle(rawAgreement.bundles);
      activeMasterAgreements.push(masterAgreement);
    });
    return activeMasterAgreements;
  }
  createBundle(rawBundles) {
    const bundles = [];
    rawBundles.forEach(rawBundle => {
      const bundle = {};
      bundle.externalProductCode = rawBundle.externalProductCode;
      bundle.name = rawBundle.name;
      bundle.activePlan = rawBundle.activePlan;
      bundle.productInfo = this.omapiMapper.toModel(rawBundle.rawOmapi);
      bundles.push(bundle);
    });
    return bundles;
  }
  static ɵfac = function AccountMasterAgreementMapper_Factory(t) {
    return new (t || AccountMasterAgreementMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AccountMasterAgreementMapper,
    factory: AccountMasterAgreementMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57945:
/*!************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/mappers/customer-product-holding/customer-product-holding.mapper.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHoldingMapper: () => (/* binding */ CustomerProductHoldingMapper)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _models_customer_product_holding_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/customer-product-holding.model */ 43029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class CustomerProductHoldingMapper {
  toModel(rawCustomerProductHolding) {
    return this.createCustomerProductHolding(rawCustomerProductHolding);
  }
  createCustomerProductHolding(rawCustomerProductHolding) {
    const customerProductHolding = new _models_customer_product_holding_model__WEBPACK_IMPORTED_MODULE_0__.CustomerProductHolding();
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawCustomerProductHolding)) {
      customerProductHolding.splitBillProfile = {
        id: rawCustomerProductHolding.splitBillProfile?.id,
        name: rawCustomerProductHolding.splitBillProfile?.name
      };
      customerProductHolding.referenceInformation = rawCustomerProductHolding.referenceInformation;
      customerProductHolding.secondaryBillingAddressId = rawCustomerProductHolding.secondaryBillingAddressId;
      customerProductHolding.status = rawCustomerProductHolding.status;
    }
    return customerProductHolding;
  }
  static ɵfac = function CustomerProductHoldingMapper_Factory(t) {
    return new (t || CustomerProductHoldingMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomerProductHoldingMapper,
    factory: CustomerProductHoldingMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 25164:
/*!********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/mappers/products/product-line.mapper.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductLineMapper: () => (/* binding */ ProductLineMapper)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _customer_product_holding_customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer-product-holding/customer-product-holding.mapper */ 57945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);




class ProductLineMapper {
  customerProductHoldingMapper;
  constructor(customerProductHoldingMapper) {
    this.customerProductHoldingMapper = customerProductHoldingMapper;
  }
  toModel(rawProductCatalog) {
    return this.createProductCatalog(rawProductCatalog, rawProductCatalog.headers.get('content-range'));
  }
  createProductCatalog(rawProductLines, range) {
    return rawProductLines && this.createProductCatalogs(rawProductLines.body, range);
  }
  createProductCatalogs(rawProductLineInterface, range) {
    const productLine = {};
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawProductLineInterface)) {
      productLine.range = range;
      productLine.lines = rawProductLineInterface.map(rawLine => {
        return this.customerProductHoldingMapper.toModel(rawLine);
      });
    }
    return productLine;
  }
  static ɵfac = function ProductLineMapper_Factory(t) {
    return new (t || ProductLineMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_customer_product_holding_customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_0__.CustomerProductHoldingMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProductLineMapper,
    factory: ProductLineMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6082:
/*!********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/mappers/products/product-type.mapper.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTypeMapper: () => (/* binding */ ProductTypeMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class ProductTypeMapper {
  toModel(rawProductTypeInterface) {
    const productType = {};
    productType.brand = rawProductTypeInterface.brand;
    return productType;
  }
  static ɵfac = function ProductTypeMapper_Factory(t) {
    return new (t || ProductTypeMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductTypeMapper,
    factory: ProductTypeMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 43029:
/*!*********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/models/customer-product-holding.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHolding: () => (/* binding */ CustomerProductHolding),
/* harmony export */   SplitBillProfile: () => (/* binding */ SplitBillProfile)
/* harmony export */ });
class CustomerProductHolding {
  splitBillProfile;
  referenceInformation;
  secondaryBillingAddressId;
  status;
}
class SplitBillProfile {
  id;
  name;
}

/***/ }),

/***/ 14107:
/*!*******************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/pipes/phone-number.pipe.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class PhoneNumberPipe {
  phoneNumberTransformService;
  constructor(phoneNumberTransformService) {
    this.phoneNumberTransformService = phoneNumberTransformService;
  }
  transform(phoneNumber) {
    return this.transFormPhoneNumber(phoneNumber);
  }
  transFormPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
  static ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 28290:
/*!******************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/services/products/products.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _mappers_customer_product_holding_customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mappers/customer-product-holding/customer-product-holding.mapper */ 57945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _constants_fleet_products_service_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/fleet-products-service.constants */ 32831);
/* harmony import */ var _mappers_products_product_line_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mappers/products/product-line.mapper */ 25164);
/* harmony import */ var _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/products/product.constant */ 48827);
/* harmony import */ var _mappers_products_product_type_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mappers/products/product-type.mapper */ 6082);
/* harmony import */ var _mappers_account_account_master_agreement_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mappers/account/account-master-agreement.mapper */ 79502);
/* harmony import */ var _constants_profile_create_fleet_profile_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/profile/create-fleet-profile-constants */ 66432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);

















class ProductsService {
  ocapiService;
  customerProductHoldingMapper;
  productLineMapper;
  productTypeMapper;
  accountMasterAgreementMapper;
  customerProductHoldingCache;
  constructor(ocapiService, customerProductHoldingMapper, productLineMapper, productTypeMapper, accountMasterAgreementMapper) {
    this.ocapiService = ocapiService;
    this.customerProductHoldingMapper = customerProductHoldingMapper;
    this.productLineMapper = productLineMapper;
    this.productTypeMapper = productTypeMapper;
    this.accountMasterAgreementMapper = accountMasterAgreementMapper;
  }
  getProductByIdentifier(messageGroup, productIdentifier, force, productType) {
    if (this.customerProductHoldingCache && !force) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.customerProductHoldingCache);
    }
    let endpoint = `/${productIdentifier}`;
    if (productType) {
      endpoint = `/${productIdentifier}?producttype=${productType}`;
    }
    endpoint = this.getServiceURI(endpoint, _constants_fleet_products_service_constants__WEBPACK_IMPORTED_MODULE_2__.FleetProductsServiceConstants.CONTEXT_PRODUCTS, _constants_fleet_products_service_constants__WEBPACK_IMPORTED_MODULE_2__.FleetProductsServiceConstants.API_VERSION_V1);
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, endpoint, this.customerProductHoldingMapper)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
      if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(response)) {
        this.customerProductHoldingCache = response;
      }
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => {
      console.error('An error occurred:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(() => error);
    }));
  }
  getServiceURI(endpoint, context, version) {
    return _constants_fleet_products_service_constants__WEBPACK_IMPORTED_MODULE_2__.FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }
  getProductServiceURI(version, context, suffix, endpoint, parameters) {
    return _constants_fleet_products_service_constants__WEBPACK_IMPORTED_MODULE_2__.FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version).concat(context).concat(suffix).concat(endpoint).concat(parameters);
  }
  getFilteredLines(messageGroup, requestBody) {
    const url = this.getServiceURI('/search', _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.CONTEXT_PRODUCTS, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.API_VERSION_V1);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, url, this.productLineMapper, requestBody);
    ocapiConfig.observeAsResponse = true;
    return this.ocapiService.doPost(ocapiConfig);
  }
  getProductType(messageGroup, phoneNumber) {
    const endPoint = `/${phoneNumber}${_constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.PRODUCT_TYPE}`;
    const url = this.getServiceURI(endPoint, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.PRODUCTS, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.API_VERSION_V1);
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, url, this.productTypeMapper));
  }
  getGroupBundles(messageGroup, billingAccountNumber) {
    const url = this.getServiceURI(billingAccountNumber, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.CONTEXT_GROUP_BUNDLES, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.API_VERSION_V1);
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, url, this.accountMasterAgreementMapper));
  }
  validateFleetProfileIdentifier(msisdn, messageGroup, mapper) {
    const endpoint = '/'.concat(msisdn, _constants_profile_create_fleet_profile_constants__WEBPACK_IMPORTED_MODULE_7__.CreateFleetProfileConstants.ENDPOINT_FLEET_IDENTITY_STATUS_BY_IDENTIFIER);
    const url = this.getServiceURI(endpoint, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.CONTEXT_PRODUCTS, _constants_products_product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants.API_VERSION_V1);
    const config = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, url, mapper);
    config.errorHandler = this.handleFleetIdentityErrorResponse.bind(this);
    return this.ocapiService.doGet(config);
  }
  handleFleetIdentityErrorResponse(httpErrorResponse) {
    if (httpErrorResponse.error.code === _constants_profile_create_fleet_profile_constants__WEBPACK_IMPORTED_MODULE_7__.CreateFleetProfileConstants.PROFILE_NOT_FOUND_ERROR_CODE) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)({
        status: httpErrorResponse.error.code,
        identityid: ' '
      });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(() => httpErrorResponse);
  }
  static ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_mappers_customer_product_holding_customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__.CustomerProductHoldingMapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_mappers_products_product_line_mapper__WEBPACK_IMPORTED_MODULE_3__.ProductLineMapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_mappers_products_product_type_mapper__WEBPACK_IMPORTED_MODULE_5__.ProductTypeMapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_mappers_account_account_master_agreement_mapper__WEBPACK_IMPORTED_MODULE_6__.AccountMasterAgreementMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ProductsService,
    factory: ProductsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21993:
/*!************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* reexport safe */ _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__.InlineSVGConfig),
/* harmony export */   InlineSVGDirective: () => (/* reexport safe */ _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective),
/* harmony export */   InlineSVGModule: () => (/* reexport safe */ _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule),
/* harmony export */   SVGCacheService: () => (/* reexport safe */ _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService)
/* harmony export */ });
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.module */ 61962);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);





/***/ }),

/***/ 61563:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.component.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGComponent: () => (/* binding */ InlineSVGComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.service */ 96046);





var InlineSVGComponent = function () {
  function InlineSVGComponent(_inlineSVGService, el) {
    this._inlineSVGService = _inlineSVGService;
    this._el = el;
  }
  InlineSVGComponent.prototype.ngAfterViewInit = function () {
    this._updateContent();
  };
  InlineSVGComponent.prototype.ngOnChanges = function (changes) {
    if (changes['content']) {
      this._updateContent();
    }
  };
  InlineSVGComponent.prototype._updateContent = function () {
    this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
  };
  InlineSVGComponent.ɵfac = function InlineSVGComponent_Factory(t) {
    return new (t || InlineSVGComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  InlineSVGComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InlineSVGComponent,
    selectors: [["inline-svg"]],
    inputs: {
      context: "context",
      content: "content",
      replaceContents: "replaceContents",
      prepend: "prepend"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function InlineSVGComponent_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
  return InlineSVGComponent;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'inline-svg',
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/***/ }),

/***/ 77181:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.config.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* binding */ InlineSVGConfig)
/* harmony export */ });
var InlineSVGConfig = function () {
  function InlineSVGConfig() {}
  return InlineSVGConfig;
}();


/***/ }),

/***/ 16360:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.directive.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGDirective: () => (/* binding */ InlineSVGDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-svg.service */ 96046);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _svg_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg-util */ 32851);











var InlineSVGDirective = function () {
  function InlineSVGDirective(_el, _viewContainerRef, _resolver, _svgCache, _renderer, _inlineSVGService, _config, platformId) {
    this._el = _el;
    this._viewContainerRef = _viewContainerRef;
    this._resolver = _resolver;
    this._svgCache = _svgCache;
    this._renderer = _renderer;
    this._inlineSVGService = _inlineSVGService;
    this._config = _config;
    this.platformId = platformId;
    this.resolveSVGUrl = true;
    this.replaceContents = true;
    this.prepend = false;
    this.injectComponent = false;
    this.cacheSVG = true;
    this.forceEvalStyles = false;
    this.evalScripts = "always";
    this.onSVGInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSVGFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._supportsSVG = _svg_util__WEBPACK_IMPORTED_MODULE_6__.isSvgSupported();
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      this._fail('Embed SVG are not supported by this browser');
    }
  }
  InlineSVGDirective.prototype.ngOnInit = function () {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    this._insertSVG();
  };
  InlineSVGDirective.prototype.ngOnChanges = function (changes) {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    var setSVGAttributesChanged = Boolean(changes['setSVGAttributes']);
    if (changes['inlineSVG'] || setSVGAttributesChanged) {
      this._insertSVG(setSVGAttributesChanged);
    }
  };
  InlineSVGDirective.prototype.ngOnDestroy = function () {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  };
  InlineSVGDirective.prototype._insertSVG = function (force) {
    var _this = this;
    if (force === void 0) {
      force = false;
    }
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      return;
    }
    if (!this.inlineSVG) {
      this._fail('No URL passed to [inlineSVG]');
      return;
    }
    if (!force && this.inlineSVG === this._prevUrl) {
      return;
    }
    this._prevUrl = this.inlineSVG;
    this._subscription = this._svgCache.getSVG(this.inlineSVG, this.resolveSVGUrl, this.cacheSVG).subscribe(function (svg) {
      if (_svg_util__WEBPACK_IMPORTED_MODULE_6__.isUrlSymbol(_this.inlineSVG)) {
        var symbolId = _this.inlineSVG.split('#')[1];
        svg = _svg_util__WEBPACK_IMPORTED_MODULE_6__.createSymbolSvg(_this._renderer, svg, symbolId);
      }
      _this._processSvg(svg);
    }, function (err) {
      _this._fail(err);
    });
  };
  InlineSVGDirective.prototype._processSvg = function (svg) {
    if (!svg) {
      return;
    }
    if (this.removeSVGAttributes && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.removeAttributes(svg, this.removeSVGAttributes);
    }
    if (this.setSVGAttributes) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.setAttributes(svg, this.setSVGAttributes);
    }
    if (this.onSVGLoaded) {
      svg = this.onSVGLoaded(svg, this._el.nativeElement);
    }
    this._insertEl(svg);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this._inlineSVGService.evalScripts(svg, this.inlineSVG, this.evalScripts);
    }
    if (this.forceEvalStyles) {
      var styleTags = svg.querySelectorAll('style');
      Array.from(styleTags).forEach(function (tag) {
        return tag.textContent += '';
      });
    }
    this.onSVGInserted.emit(svg);
  };
  InlineSVGDirective.prototype._insertEl = function (el) {
    if (this.injectComponent) {
      if (!this._svgComp) {
        var factory = this._resolver.resolveComponentFactory(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent);
        this._svgComp = this._viewContainerRef.createComponent(factory);
      }
      this._svgComp.instance.context = this;
      this._svgComp.instance.replaceContents = this.replaceContents;
      this._svgComp.instance.prepend = this.prepend;
      this._svgComp.instance.content = el;
      this._renderer.appendChild(this._el.nativeElement, this._svgComp.injector.get(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent)._el.nativeElement);
    } else {
      this._inlineSVGService.insertEl(this, this._el.nativeElement, el, this.replaceContents, this.prepend);
    }
  };
  InlineSVGDirective.prototype._fail = function (msg) {
    this.onSVGFailed.emit(msg);
    if (this.fallbackImgUrl) {
      var elImg = this._renderer.createElement('IMG');
      this._renderer.setAttribute(elImg, 'src', this.fallbackImgUrl);
      this._insertEl(elImg);
    } else if (this.fallbackSVG && this.fallbackSVG !== this.inlineSVG) {
      this.inlineSVG = this.fallbackSVG;
      this._insertSVG();
    }
  };
  InlineSVGDirective.prototype._isValidPlatform = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) || (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  };
  InlineSVGDirective.prototype._isSSRDisabled = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && this._config && this._config.clientOnly;
  };
  InlineSVGDirective.ɵfac = function InlineSVGDirective_Factory(t) {
    return new (t || InlineSVGDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  InlineSVGDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InlineSVGDirective,
    selectors: [["", "inlineSVG", ""]],
    inputs: {
      inlineSVG: "inlineSVG",
      resolveSVGUrl: "resolveSVGUrl",
      replaceContents: "replaceContents",
      prepend: "prepend",
      injectComponent: "injectComponent",
      cacheSVG: "cacheSVG",
      setSVGAttributes: "setSVGAttributes",
      removeSVGAttributes: "removeSVGAttributes",
      forceEvalStyles: "forceEvalStyles",
      evalScripts: "evalScripts",
      fallbackImgUrl: "fallbackImgUrl",
      fallbackSVG: "fallbackSVG",
      onSVGLoaded: "onSVGLoaded"
    },
    outputs: {
      onSVGInserted: "onSVGInserted",
      onSVGFailed: "onSVGFailed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return InlineSVGDirective;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[inlineSVG]',
      providers: [_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, {
    inlineSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolveSVGUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    injectComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cacheSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    setSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    forceEvalStyles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    evalScripts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackImgUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGInserted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSVGFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/***/ }),

/***/ 61962:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.module.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGModule: () => (/* binding */ InlineSVGModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);





var InlineSVGModule = function () {
  function InlineSVGModule() {}
  InlineSVGModule.forRoot = function (config) {
    return {
      ngModule: InlineSVGModule,
      providers: [{
        provide: _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__.InlineSVGConfig,
        useValue: config
      }]
    };
  };
  InlineSVGModule.ɵfac = function InlineSVGModule_Factory(t) {
    return new (t || InlineSVGModule)();
  };
  InlineSVGModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InlineSVGModule
  });
  InlineSVGModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return InlineSVGModule;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
      exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective],
      entryComponents: [_inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InlineSVGModule, {
    declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
    exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective]
  });
})();

/***/ }),

/***/ 96046:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.service.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGService: () => (/* binding */ InlineSVGService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var InlineSVGService = function () {
  function InlineSVGService(rendererFactory) {
    this._ranScripts = {};
    this._renderer = rendererFactory.createRenderer(null, null);
  }
  InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
    if (replaceContents && !prepend) {
      var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
      if (parentNode) {
        this._renderer.removeChild(parentNode, dir._prevSVG);
      }
      parentEl.innerHTML = '';
    }
    if (prepend) {
      this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
    } else {
      this._renderer.appendChild(parentEl, content);
    }
    if (content.nodeName === 'svg') {
      dir._prevSVG = content;
    }
  };
  InlineSVGService.prototype.evalScripts = function (svg, url, evalMode) {
    var scripts = svg.querySelectorAll('script');
    var scriptsToEval = [];
    for (var i = 0; i < scripts.length; i++) {
      var scriptType = scripts[i].getAttribute('type');
      if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
        var script = scripts[i].innerText || scripts[i].textContent;
        scriptsToEval.push(script);
        this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
      }
    }
    if (scriptsToEval.length > 0 && (evalMode === "always" || evalMode === "once" && !this._ranScripts[url])) {
      for (var i = 0; i < scriptsToEval.length; i++) {
        new Function(scriptsToEval[i])(window);
      }
      this._ranScripts[url] = true;
    }
  };
  InlineSVGService.ɵfac = function InlineSVGService_Factory(t) {
    return new (t || InlineSVGService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2));
  };
  InlineSVGService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InlineSVGService,
    factory: InlineSVGService.ɵfac,
    providedIn: 'root'
  });
  return InlineSVGService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 70947:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-cache.service.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGCacheService: () => (/* binding */ SVGCacheService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85584);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-svg.config */ 77181);










var SVGCacheService = function () {
  function SVGCacheService(_appBase, _location, _config, httpClient, httpBackend, rendererFactory) {
    this._appBase = _appBase;
    this._location = _location;
    this._config = _config;
    this._http = _config && !_config.bypassHttpClientInterceptorChain ? httpClient : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient(httpBackend);
    this._renderer = rendererFactory.createRenderer(null, null);
    this.setBaseUrl();
    if (!SVGCacheService._cache) {
      SVGCacheService._cache = new Map();
    }
    if (!SVGCacheService._inProgressReqs) {
      SVGCacheService._inProgressReqs = new Map();
    }
  }
  SVGCacheService.prototype.getSVG = function (url, resolveSVGUrl, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = true;
    }
    var svgUrl = (resolveSVGUrl ? this.getAbsoluteUrl(url) : url).replace(/#.+$/, '');
    if (cache && SVGCacheService._cache.has(svgUrl)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this._cloneSVG(SVGCacheService._cache.get(svgUrl)));
    }
    if (SVGCacheService._inProgressReqs.has(svgUrl)) {
      return SVGCacheService._inProgressReqs.get(svgUrl);
    }
    var req = this._http.get(svgUrl, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function () {
      SVGCacheService._inProgressReqs.delete(svgUrl);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (error) {
      SVGCacheService._inProgressReqs.delete(svgUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error.message);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (svgText) {
      var svgEl = _this._svgElementFromString(svgText);
      SVGCacheService._cache.set(svgUrl, svgEl);
      return _this._cloneSVG(svgEl);
    }));
    SVGCacheService._inProgressReqs.set(svgUrl, req);
    return req;
  };
  SVGCacheService.prototype.setBaseUrl = function () {
    if (this._config) {
      this._baseUrl = this._config.baseUrl;
    } else if (this._appBase !== null) {
      this._baseUrl = this._appBase;
    } else if (this._location !== null) {
      this._baseUrl = this._location.getBaseHrefFromDOM();
    }
  };
  SVGCacheService.prototype.getAbsoluteUrl = function (url) {
    if (this._baseUrl && !/^https?:\/\//i.test(url)) {
      url = this._baseUrl + url;
      if (url.indexOf('//') === 0) {
        url = url.substring(1);
      }
    }
    var base = this._renderer.createElement('BASE');
    base.href = url;
    return base.href;
  };
  SVGCacheService.prototype._svgElementFromString = function (str) {
    var div = this._renderer.createElement('DIV');
    div.innerHTML = str;
    var svg = div.querySelector('svg');
    if (!svg) {
      throw new Error('No SVG found in loaded contents');
    }
    return svg;
  };
  SVGCacheService.prototype._cloneSVG = function (svg) {
    return svg.cloneNode(true);
  };
  SVGCacheService.ɵfac = function SVGCacheService_Factory(t) {
    return new (t || SVGCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_3__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2));
  };
  SVGCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SVGCacheService,
    factory: SVGCacheService.ɵfac,
    providedIn: 'root'
  });
  return SVGCacheService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SVGCacheService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF]
      }]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_3__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 32851:
/*!***************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-util.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSymbolSvg: () => (/* binding */ createSymbolSvg),
/* harmony export */   isSvgSupported: () => (/* binding */ isSvgSupported),
/* harmony export */   isUrlSymbol: () => (/* binding */ isUrlSymbol),
/* harmony export */   removeAttributes: () => (/* binding */ removeAttributes),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
function isUrlSymbol(url) {
  return url.charAt(0) === '#' || url.indexOf('.svg#') > -1;
}
function isSvgSupported() {
  return typeof SVGRect !== 'undefined';
}
function createSymbolSvg(renderer, svg, symbolId) {
  var symbol = svg.querySelector("[id=\"".concat(symbolId, "\"]"));
  if (!symbol) {
    throw new Error("Symbol \"".concat(symbolId, "\" not found"));
  }
  var elSvg = renderer.createElement('svg', 'svg');
  renderer.appendChild(elSvg, symbol);
  var elSvgUse = renderer.createElement('use', 'svg');
  renderer.setAttribute(elSvgUse, 'href', "#".concat(symbolId), 'xlink');
  renderer.appendChild(elSvg, elSvgUse);
  return elSvg;
}
function removeAttributes(element, attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var elAttr = element.getAttribute(attrs[i]);
    if (elAttr) {
      element.removeAttribute(attrs[i]);
    }
  }
  var innerEls = element.getElementsByTagName('*');
  for (var i = 0; i < innerEls.length; i++) {
    removeAttributes(innerEls[i], attrs);
  }
}
function setAttributes(element, attrs) {
  for (var attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
}

/***/ }),

/***/ 58071:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BehaviorSubject: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 72513);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}

/***/ }),

/***/ 36959:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 12235:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 14373);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 22476);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 50575);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 72513:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 12235);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 61558);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 35559);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 50575);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  }
  next(value) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const {
      hasError,
      isStopped,
      observers
    } = this;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      thrownError,
      isStopped
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  }
}

/***/ }),

/***/ 58559:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 16929);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 72707);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 36959);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 38411);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 50575);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 31523:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 30101);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 35559);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 15445:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 16290:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/empty.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY: () => (/* binding */ EMPTY),
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}

/***/ }),

/***/ 56231:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 15535);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 60384);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}

/***/ }),

/***/ 60384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 16929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 14373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 84980:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 56231);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}

/***/ }),

/***/ 33252:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwError: () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);


function throwError(errorOrErrorFactory, scheduler) {
  const errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
  const init = subscriber => subscriber.error(errorFactory());
  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(scheduler ? subscriber => scheduler.schedule(init, 0, subscriber) : init);
}

/***/ }),

/***/ 35678:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 58559);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 2389:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/catchError.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catchError: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}

/***/ }),

/***/ 17474:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/finalize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finalize: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

/***/ }),

/***/ 79736:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 42704:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

/***/ }),

/***/ 85584:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 72513);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 58559);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);




function share(options = {}) {
  const {
    connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(),
    resetOnError = true,
    resetOnComplete = true,
    resetOnRefCountZero = true
  } = options;
  return wrapperSource => {
    let connection;
    let resetConnection;
    let subject;
    let refCount = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };
    const reset = () => {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
          next: value => dest.next(value),
          error: err => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on, ...args) {
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  const onSubscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(on(...args)).subscribe(onSubscriber);
}

/***/ }),

/***/ 42499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

/***/ }),

/***/ 81527:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/take.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   take: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 16290);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

/***/ }),

/***/ 13738:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tap: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 10204);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}

/***/ }),

/***/ 88297:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

/***/ }),

/***/ 86679:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 47695:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}

/***/ }),

/***/ 35158:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 22147:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 19405:
/*!*************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

/***/ }),

/***/ 15535:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 35158);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 22147);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 88297);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 47695);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 19405);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}

/***/ }),

/***/ 38411:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 96691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 14373:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 61558:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});

/***/ }),

/***/ 30101:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 76190:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: () => (/* binding */ popNumber),
/* harmony export */   popResultSelector: () => (/* binding */ popResultSelector),
/* harmony export */   popScheduler: () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 77426);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

/***/ }),

/***/ 35559:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 81566:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 50575:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 15445);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 29701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 10204:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 31287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 95235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 82602:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 87808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 14373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 19449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 53972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 70401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 82602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 77426:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 34114:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 72707:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 22476:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 10204);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 16929:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 15445);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 38411);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 42614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 36480:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserModule: () => (/* binding */ BrowserModule),
/* harmony export */   By: () => (/* binding */ By),
/* harmony export */   DomSanitizer: () => (/* binding */ DomSanitizer),
/* harmony export */   EVENT_MANAGER_PLUGINS: () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   EventManager: () => (/* binding */ EventManager),
/* harmony export */   EventManagerPlugin: () => (/* binding */ EventManagerPlugin),
/* harmony export */   HAMMER_GESTURE_CONFIG: () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   HAMMER_LOADER: () => (/* binding */ HAMMER_LOADER),
/* harmony export */   HammerGestureConfig: () => (/* binding */ HammerGestureConfig),
/* harmony export */   HammerModule: () => (/* binding */ HammerModule),
/* harmony export */   HydrationFeatureKind: () => (/* binding */ HydrationFeatureKind),
/* harmony export */   Meta: () => (/* binding */ Meta),
/* harmony export */   REMOVE_STYLES_ON_COMPONENT_DESTROY: () => (/* binding */ REMOVE_STYLES_ON_COMPONENT_DESTROY),
/* harmony export */   Title: () => (/* binding */ Title),
/* harmony export */   TransferState: () => (/* binding */ TransferState),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   bootstrapApplication: () => (/* binding */ bootstrapApplication),
/* harmony export */   createApplication: () => (/* binding */ createApplication),
/* harmony export */   disableDebugTools: () => (/* binding */ disableDebugTools),
/* harmony export */   enableDebugTools: () => (/* binding */ enableDebugTools),
/* harmony export */   makeStateKey: () => (/* binding */ makeStateKey),
/* harmony export */   platformBrowser: () => (/* binding */ platformBrowser),
/* harmony export */   provideClientHydration: () => (/* binding */ provideClientHydration),
/* harmony export */   provideProtractorTestingSupport: () => (/* binding */ provideProtractorTestingSupport),
/* harmony export */   withHttpTransferCacheOptions: () => (/* binding */ withHttpTransferCacheOptions),
/* harmony export */   withNoHttpTransferCache: () => (/* binding */ withNoHttpTransferCache),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"]),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/**
 * @license Angular v17.1.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵparseCookieValue"])(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
function relativePath(url) {
  // The base URL doesn't really matter, we just need it so relative paths have something
  // to resolve against. In the browser `HTMLBaseElement.href` is always absolute.
  return new URL(url, document.baseURI).pathname;
}
class BrowserGetTestability {
  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAngularTestability'] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5103 /* RuntimeErrorCode.TESTABILITY_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Could not find testability for element.');
      }
      return testability;
    };
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularRootElements'] = () => registry.getAllRootElements();
    const whenAllStable = callback => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities']();
      let count = testabilities.length;
      const decrement = function () {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach(testability => {
        testability.whenStable(decrement);
      });
    };
    if (!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers']) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'] = [];
    }
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
class BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static #_ = this.ɵfac = function BrowserXhr_Factory(t) {
    return new (t || BrowserXhr)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BrowserXhr,
    factory: BrowserXhr.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * The injection token for plugins of the `EventManager` service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
class EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = new Map();
    plugins.forEach(plugin => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find(plugin => plugin.supports(eventName));
    if (!plugin) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static #_ = this.ɵfac = function EventManager_Factory(t) {
    return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EventManager,
    factory: EventManager.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();
/**
 * The plugin definition for the `EventManager` class
 *
 * It can be used as a base class to create custom manager plugins, i.e. you can create your own
 * class that extends the `EventManagerPlugin` one.
 *
 * @publicApi
 */
class EventManagerPlugin {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
}

/** The style elements attribute name used to set value of `APP_ID` token. */
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
class SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    // Maps all registered host nodes to a list of style nodes that have been added to the host node.
    this.styleRef = new Map();
    this.hostNodes = new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style);
      }
    }
  }
  removeStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach(node => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style of this.getAllStyles()) {
      this.onStyleRemoved(style);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style);
    }
  }
  onStyleRemoved(style) {
    const styleRef = this.styleRef;
    styleRef.get(style)?.elements?.forEach(node => node.remove());
    styleRef.delete(style);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = new Map();
      styles.forEach(style => {
        if (style.textContent != null) {
          styleMap.set(style.textContent, style);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style, delta) {
    const map = this.styleRef;
    if (map.has(style)) {
      const styleRefValue = map.get(style);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map.set(style, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style);
    if (styleEl?.parentNode === host) {
      // `styleNodesInDOM` cannot be undefined due to the above `styleNodesInDOM?.get`.
      styleNodesInDOM.delete(style);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // This attribute is solely used for debugging purposes.
        styleEl.setAttribute('ng-style-reused', '');
      }
      return styleEl;
    } else {
      const styleEl = this.doc.createElement('style');
      if (this.nonce) {
        styleEl.setAttribute('nonce', this.nonce);
      }
      styleEl.textContent = style;
      if (this.platformIsServer) {
        styleEl.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl);
      return styleEl;
    }
  }
  addStyleToHost(host, style) {
    const styleEl = this.getStyleElement(host, style);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    // Re-add the head element back since this is the default host.
    hostNodes.add(this.doc.head);
  }
  static #_ = this.ɵfac = function SharedStylesHost_Factory(t) {
    return new (t || SharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedStylesHost,
    factory: SharedStylesHost.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedStylesHost, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `true`.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RemoveStylesOnCompDestroy', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
class DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = new Map();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom) {
      // Domino does not support shadow DOM.
      type = {
        ...type,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated
      };
    }
    const renderer = this.getOrCreateRenderer(element, type);
    // Renderers have different logic due to different encapsulation behaviours.
    // Ex: for emulated, an attribute is added to the element.
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  static #_ = this.ɵfac = function DomRendererFactory2_Factory(t) {
    return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomRendererFactory2,
    factory: DomRendererFactory2.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomRendererFactory2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }]
  }], null);
})();
class DefaultDomRenderer2 {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = Object.create(null);
    /**
     * By default this renderer throws when encountering synthetic properties
     * This can be disabled for example by the AsyncAnimationRendererFactory
     */
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle
    // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
    // unwrap the listener (see below).
    return event => {
      // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
      // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
      // debug_node can inspect the listener toString contents for the existence of this special
      // token. Because the token is a string literal, it is ensured to not be modified by compiled
      // code.
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      // Run the event handler inside the ngZone because event handlers are not patched
      // by Zone on the server. This is required only for tests.
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = (() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
class DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
  static #_ = this.ɵfac = function DomEventsPlugin_Factory(t) {
    return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomEventsPlugin,
    factory: DomEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * A browser plug-in that provides support for handling of key events in Angular.
 */
class KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
      return null;
    }
    const key = KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = '';
    let codeIX = parts.indexOf('code');
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = 'code.';
    }
    MODIFIER_KEYS.forEach(modifierName => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + '.';
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      // returning null instead of throwing to let another plugin process the event
      return null;
    }
    // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
    //       The code must remain in the `result['domEventName']` form.
    // return {domEventName, fullKey};
    const result = {};
    result['domEventName'] = domEventName;
    result['fullKey'] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = '';
    if (fullKeyCode.indexOf('code.') > -1) {
      keycode = event.code;
      key = 'code.';
    }
    // the keycode could be unidentified so we have to check here
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === ' ') {
      keycode = 'space'; // for readability
    } else if (keycode === '.') {
      keycode = 'dot'; // because '.' is used as a separator in event names
    }
    MODIFIER_KEYS.forEach(modifierName => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + '.';
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return event => {
      if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === 'esc' ? 'escape' : keyName;
  }
  static #_ = this.ɵfac = function KeyEventsPlugin_Factory(t) {
    return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: KeyEventsPlugin,
    factory: KeyEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function createApplication(options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])(createProvidersConfig(options));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @publicApi
 */
function provideProtractorTestingSupport() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideProtractorTestingSupport` call results in app
  // code.
  return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler();
}
function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetDocument"])(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"],
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY"],
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}];
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
class BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && providersAlreadyPresent) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5100 /* RuntimeErrorCode.BROWSER_MODULE_ALREADY_LOADED */, `Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: BrowserModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID,
        useValue: params.appId
      }]
    };
  }
  static #_ = this.ɵfac = function BrowserModule_Factory(t) {
    return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BROWSER_MODULE_PROVIDERS_MARKER, 12));
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BrowserModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();

/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */
function createMeta() {
  return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
class Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      // It's allowed to have multiple elements with the same name so it's not enough to
      // just check that element with the same name already present on the page. We also need to
      // check if element has tag attributes
      const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
      if (elem !== undefined) return elem;
    }
    const element = this._dom.createElement('meta');
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName('head')[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? 'name' : 'property';
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static #_ = this.ɵfac = function Meta_Factory(t) {
    return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Meta,
    factory: function Meta_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createMeta();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Meta, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createMeta,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * Factory to create Title service.
 */
function createTitle() {
  return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
class Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || '';
  }
  static #_ = this.ɵfac = function Title_Factory(t) {
    return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Title,
    factory: function Title_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createTitle();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Title, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createTitle,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] || {};
    ng[name] = value;
  }
}
const win = typeof window !== 'undefined' && window || {};
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    const isProfilerAvailable = win.console.profile != null;
    if (record && isProfilerAvailable) {
      win.console.profile(profileName);
    }
    const start = performanceNow();
    let numTicks = 0;
    while (numTicks < 5 || performanceNow() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performanceNow();
    if (record && isProfilerAvailable) {
      win.console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    win.console.log(`ran ${numTicks} change detection cycles`);
    win.console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
function performanceNow() {
  return win.performance && win.performance.now ? win.performance.now() : new Date().getTime();
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see {@link HammerGestureConfig}
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
class HammerGestureConfig {
  constructor() {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    this.events = [];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     *
     */
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get('pinch').set({
      enable: true
    });
    mc.get('rotate').set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static #_ = this.ɵfac = function HammerGestureConfig_Factory(t) {
    return new (t || HammerGestureConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGestureConfig,
    factory: HammerGestureConfig.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGestureConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
class HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console, loader) {
    super(doc);
    this._config = _config;
    this.console = console;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    // If Hammer is not present but a loader is specified, we defer adding the event listener
    // until Hammer is loaded.
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      // This `addEventListener` method returns a function to remove the added listener.
      // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
      // than remove anything.
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        // If Hammer isn't actually loaded when the custom loader resolves, give up.
        if (!window.Hammer) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {};
          return;
        }
        if (!cancelRegistration) {
          // Now that Hammer is loaded and the listener is being loaded for real,
          // the deregistration function changes from canceling registration to
          // removal.
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
        }
        deregister = () => {};
      }));
      // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
      // can change the behavior of `deregister` once the listener is added. Using a closure in
      // this way allows us to avoid any additional data structures to track listener removal.
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      // Creating the manager bind events, must be done outside of angular
      const mc = this._config.buildHammer(element);
      const callback = function (eventObj) {
        zone.runGuarded(function () {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        // destroy mc to prevent memory leak
        if (typeof mc.destroy === 'function') {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static #_ = this.ɵfac = function HammerGesturesPlugin_Factory(t) {
    return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_LOADER, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGesturesPlugin,
    factory: HammerGesturesPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGesturesPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
 *
 * @publicApi
 */
class HammerModule {
  static #_ = this.ɵfac = function HammerModule_Factory(t) {
    return new (t || HammerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: HammerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
      deps: []
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
class DomSanitizer {
  static #_ = this.ɵfac = function DomSanitizer_Factory(t) {
    return new (t || DomSanitizer)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizer,
    factory: function DomSanitizer_Factory(t) {
      let r = null;
      if (t) {
        r = new (t || DomSanitizer)();
      } else {
        r = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomSanitizerImpl);
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
function domSanitizerImplFactory(injector) {
  return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
class DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.NONE:
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.STYLE:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.SCRIPT:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5200 /* RuntimeErrorCode.SANITIZATION_UNSAFE_SCRIPT */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'unsafe value used in a script context');
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeUrl"])(String(value));
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5201 /* RuntimeErrorCode.SANITIZATION_UNSAFE_RESOURCE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
      default:
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5202 /* RuntimeErrorCode.SANITIZATION_UNEXPECTED_CTX */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustHtml"])(value);
  }
  bypassSecurityTrustStyle(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustStyle"])(value);
  }
  bypassSecurityTrustScript(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustScript"])(value);
  }
  bypassSecurityTrustUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustUrl"])(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustResourceUrl"])(value);
  }
  static #_ = this.ɵfac = function DomSanitizerImpl_Factory(t) {
    return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizerImpl,
    factory: function DomSanitizerImpl_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = domSanitizerImplFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizerImpl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: domSanitizerImplFactory,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * The list of features as an enum to uniquely type each `HydrationFeature`.
 * @see {@link HydrationFeature}
 *
 * @publicApi
 */
var HydrationFeatureKind;
(function (HydrationFeatureKind) {
  HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
/**
 * Helper function to create an object that represents a Hydration feature.
 */
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
  return {
    ɵkind,
    ɵproviders
  };
}
/**
 * Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
 * server and other one on the browser.
 *
 * @publicApi
 */
function withNoHttpTransferCache() {
  // This feature has no providers and acts as a flag that turns off
  // HTTP transfer cache (which otherwise is turned on by default).
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
 * The function accepts a an object, which allows to configure cache parameters,
 * such as which headers should be included (no headers are included by default),
 * wether POST requests should be cached or a callback function to determine if a
 * particular request should be cached.
 *
 * @publicApi
 */
function withHttpTransferCacheOptions(options) {
  // This feature has no providers and acts as a flag to pass options to the HTTP transfer cache.
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])(options));
}
/**
 * Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
 * that verifies whether compatible ZoneJS was used in an application
 * and logs a warning in a console if it's not the case.
 */
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      // Checking `ngZone instanceof NgZone` would be insufficient here,
      // because custom implementations might use NgZone as a base class.
      if (ngZone.constructor !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone) {
        const console = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]);
        const message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵformatRuntimeError"])(-5000 /* RuntimeErrorCode.UNSUPPORTED_ZONEJS_INSTANCE */, 'Angular detected that hydration was enabled for an application ' + 'that uses a custom or a noop Zone.js implementation. ' + 'This is not yet a fully supported configuration.');
        // tslint:disable-next-line:no-console
        console.warn(message);
      }
    },
    multi: true
  }];
}
/**
 * Sets up providers necessary to enable hydration functionality for the application.
 *
 * By default, the function enables the recommended set of features for the optimal
 * performance for most of the applications. It includes the following features:
 *
 * * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
 * * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
 * transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
 * [here](/guide/ssr#caching-data-when-using-httpclient).
 *
 * These functions allow you to disable some of the default features or configure features
 * * {@link withNoHttpTransferCache} to disable HTTP transfer cache
 * * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
 *
 * @usageNotes
 *
 * Basic example of how you can enable hydration in your application when
 * `bootstrapApplication` function is used:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration()]
 * });
 * ```
 *
 * Alternatively if you are using NgModules, you would add `provideClientHydration`
 * to your root app module's provider list.
 * ```
 * @NgModule({
 *   declarations: [RootCmp],
 *   bootstrap: [RootCmp],
 *   providers: [provideClientHydration()],
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link withNoHttpTransferCache}
 * @see {@link withHttpTransferCacheOptions}
 *
 * @param features Optional features to configure additional router behaviors.
 * @returns A set of providers to enable hydration.
 *
 * @publicApi
 */
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    ɵproviders,
    ɵkind
  } of features) {
    featuresKind.add(ɵkind);
    if (ɵproviders.length) {
      providers.push(ɵproviders);
    }
  }
  if (typeof ngDevMode !== 'undefined' && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    // TODO: Make this a runtime error
    throw new Error('Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.');
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([typeof ngDevMode !== 'undefined' && ngDevMode ? provideZoneJsCompatibilityDetector() : [], (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵwithDomHydration"])(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])({}), providers]);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('17.1.0');

// Re-export TransferState to the public API of the `platform-browser` for backwards-compatibility.
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 * @deprecated `makeStateKey` has moved, please import `makeStateKey` from `@angular/core` instead.
 */
// The below is a workaround to add a deprecated message.
const makeStateKey = _angular_core__WEBPACK_IMPORTED_MODULE_0__.makeStateKey;
// The below type is needed for G3 due to JSC_CONFORMANCE_VIOLATION.
const TransferState = _angular_core__WEBPACK_IMPORTED_MODULE_0__.TransferState;

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 17558:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 525:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 89433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23684:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 82134:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ 12680:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 79304:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ 11650);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ 5354);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ 34063:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);

/***/ }),

/***/ 52020:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ 38426);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ 51540);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);

/***/ }),

/***/ 80970:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);

/***/ }),

/***/ 22093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 93058);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 87523:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);

/***/ }),

/***/ 1408:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);

/***/ }),

/***/ 60800:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ 72483:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ 52020);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ 91680);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);

/***/ }),

/***/ 11650:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ 8020:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 17558);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 89433);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 12680);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 51540);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 91680:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ 38426:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ 1408);


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);

/***/ }),

/***/ 54036:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);

/***/ }),

/***/ 93058:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 92596:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);

/***/ }),

/***/ 5354:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ 84119:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);

/***/ }),

/***/ 16396:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ 51540:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);

/***/ }),

/***/ 77018:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ 34063);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return arguments;
}()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);

/***/ }),

/***/ 66328:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 64070:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ 74080);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);

/***/ }),

/***/ 92467:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ 68534);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);

/***/ }),

/***/ 41855:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEmpty.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);









/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || typeof value == 'string' || typeof value.splice == 'function' || (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value))) {
    return !value.length;
  }
  var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if ((0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
    return !(0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);

/***/ }),

/***/ 93084:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 74080:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);

/***/ }),

/***/ 32176:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 333:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ 54752:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ 80970);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);

/***/ }),

/***/ 68534:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);

/***/ }),

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}])
//# sourceMappingURL=apps_fleet_fleet-mfe_src_app_fleet-sim-card_fleet-sim-card_module_ts.js.map