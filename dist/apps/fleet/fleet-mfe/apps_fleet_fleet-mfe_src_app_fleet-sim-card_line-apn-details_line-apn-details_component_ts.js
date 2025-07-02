(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["apps_fleet_fleet-mfe_src_app_fleet-sim-card_line-apn-details_line-apn-details_component_ts"],{

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

/***/ })

}])
//# sourceMappingURL=apps_fleet_fleet-mfe_src_app_fleet-sim-card_line-apn-details_line-apn-details_component_ts.js.map