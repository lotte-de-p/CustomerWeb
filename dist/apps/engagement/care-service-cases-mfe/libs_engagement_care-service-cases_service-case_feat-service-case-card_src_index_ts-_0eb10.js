(self["webpackChunkcare_service_cases_mfe"] = self["webpackChunkcare_service_cases_mfe"] || []).push([["libs_engagement_care-service-cases_service-case_feat-service-case-card_src_index_ts-_0eb10"],{

/***/ 18917:
/*!*********************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-card/src/index.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseCardComponent: () => (/* reexport safe */ _lib_service_case_card_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseCardComponent)
/* harmony export */ });
/* harmony import */ var _lib_service_case_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/service-case-card.component */ 80345);


/***/ }),

/***/ 80345:
/*!***********************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-card/src/lib/service-case-card.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseCardComponent: () => (/* binding */ ServiceCaseCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);







function ServiceCaseCardComponent_div_0_ng_template_2_Template(rf, ctx) {}
const _c0 = a0 => ({
  amount: a0
});
function ServiceCaseCardComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    const openServiceCases_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "ng.service-cases.card.one-open-service-case")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, openServiceCases_r1.length));
  }
}
function ServiceCaseCardComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    const openServiceCases_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translate", "ng.service-cases.card.open-service-cases")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, openServiceCases_r1.length));
  }
}
function ServiceCaseCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServiceCaseCardComponent_div_0_ng_template_2_Template, 0, 0, "ng-template", 2)(3, ServiceCaseCardComponent_div_0_ng_template_3_Template, 1, 4, "ng-template", 3)(4, ServiceCaseCardComponent_div_0_ng_template_4_Template, 1, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const openServiceCases_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngPlural", openServiceCases_r1.length);
  }
}
class ServiceCaseCardComponent {
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceCaseFacade);
  openServiceCases$ = this.facade.openServiceCases$;
  static ɵfac = function ServiceCaseCardComponent_Factory(t) {
    return new (t || ServiceCaseCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCaseCardComponent,
    selectors: [["tg-service-case-card"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], ["data-cy", "service-case-open-cases", 3, "translate", "translateParams"]],
    template: function ServiceCaseCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceCaseCardComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.openServiceCases$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgPluralCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceCaseNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_care-service-cases_service-case_feat-service-case-card_src_index_ts-_0eb10.js.map