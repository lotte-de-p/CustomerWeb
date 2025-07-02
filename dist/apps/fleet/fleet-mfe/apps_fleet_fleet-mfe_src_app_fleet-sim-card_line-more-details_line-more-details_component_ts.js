(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["apps_fleet_fleet-mfe_src_app_fleet-sim-card_line-more-details_line-more-details_component_ts"],{

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

/***/ })

}])
//# sourceMappingURL=apps_fleet_fleet-mfe_src_app_fleet-sim-card_line-more-details_line-more-details_component_ts.js.map