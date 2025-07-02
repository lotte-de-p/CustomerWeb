(self["webpackChunkcare_service_cases_mfe"] = self["webpackChunkcare_service_cases_mfe"] || []).push([["libs_engagement_care-service-cases_service-case_feat-service-case-overview_src_index_ts"],{

/***/ 88981:
/*!*************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/index.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseOverviewComponent: () => (/* reexport safe */ _lib_service_cases_overview_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_service_cases_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/service-cases-overview.component */ 15613);


/***/ }),

/***/ 69497:
/*!*************************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-detail/service-case-detail.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseDetailComponent: () => (/* binding */ ServiceCaseDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @care-service-cases/service-case/ui */ 37852);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function ServiceCaseDetailComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-deadline-date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, ctx_r3.selectedServiceCase.deadlineDate, "d MMMM y") || "-", " ");
  }
}
function ServiceCaseDetailComponent_div_0_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-deadline-date");
  }
}
function ServiceCaseDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 4)(12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4)(18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 4)(25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 6)(31, "div", 4)(32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "care-service-case-status", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 4)(37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ServiceCaseDetailComponent_div_0_div_40_Template, 3, 5, "div", 0)(41, ServiceCaseDetailComponent_div_0_ng_template_41_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](42);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 18, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 20, "ng.service-cases.item.type." + ctx_r0.selectedServiceCase.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 22, "ng.service-cases.item.type." + ctx_r0.selectedServiceCase.type + ".description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 24, "ng.service-cases.detail.case-id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedServiceCase.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 26, "ng.service-cases.detail.creation-date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-creation-date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](23, 28, ctx_r0.selectedServiceCase.creationDate, "d MMMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 31, "ng.service-cases.detail.product-type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-product-type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedServiceCase.productType || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 33, "ng.service-cases.detail.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", ctx_r0.selectedServiceCase.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 35, "ng.service-cases.detail.deadline-date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedServiceCase.type === "MOVE")("ngIfElse", _r5);
  }
}
function ServiceCaseDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ng.service-cases.detail.no-selected-service-case"));
  }
}
class ServiceCaseDetailComponent {
  selectedServiceCase;
  static ɵfac = function ServiceCaseDetailComponent_Factory(t) {
    return new (t || ServiceCaseDetailComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ServiceCaseDetailComponent,
    selectors: [["tg-service-case-detail"]],
    inputs: {
      selectedServiceCase: "selectedServiceCase"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["noServiceCaseSelected", ""], [1, "text--l", "mb--m--md", "mb--xxs", "text-weight--l"], [1, "background-white", "py--l", "px--m"], [1, "mb--l"], [1, "service-case__detail__information", "row"], [1, "col-md-6"], [1, "text-weight--xxl"], [3, "status"], ["noDeadline", ""]],
    template: function ServiceCaseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ServiceCaseDetailComponent_div_0_Template, 43, 37, "div", 0)(1, ServiceCaseDetailComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedServiceCase)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_2__.ServiceCaseStatusComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42654:
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-faq/service-case-faq.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseFaqComponent: () => (/* binding */ ServiceCaseFaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_case_faq_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-case-faq.constants */ 34159);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @care-service-cases/service-case/ui */ 37852);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_5__);









const _c0 = a0 => ({
  "pb--s": a0
});
function ServiceCaseFaqComponent_div_0_care_accordion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "care-accordion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("faqToggle", function ServiceCaseFaqComponent_div_0_care_accordion_item_6_Template_care_accordion_item_faqToggle_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const index_r3 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.faqToggle($event, ctx_r5.selectedServiceCase, index_r3 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r3 = ctx.index;
    const isLast_r4 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ("ng.service-cases.faq." + ctx_r1.selectedServiceCase.type + ".question-" + (index_r3 + 1)).toLowerCase()))("divider", !isLast_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, isLast_r4))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ("ng.service-cases.faq." + ctx_r1.selectedServiceCase.type + ".answer-" + (index_r3 + 1)).toLowerCase()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c1 = () => [];
function ServiceCaseFaqComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "care-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServiceCaseFaqComponent_div_0_care_accordion_item_6_Template, 4, 10, "care-accordion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.service-cases.faq.useful-information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1).constructor(ctx_r0.getQuestions(ctx_r0.selectedServiceCase)));
  }
}
class ServiceCaseFaqComponent {
  selectedServiceCase;
  translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService);
  serviceCasesDataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceCasesDatalayerService);
  getQuestions(serviceCase) {
    return _service_case_faq_constants__WEBPACK_IMPORTED_MODULE_3__.SERVICE_CASE_FAQ_TYPE_MAP[serviceCase.type] || 0;
  }
  faqToggle(isFaqToggleOpen, serviceCase, index) {
    if (isFaqToggleOpen) {
      this.serviceCasesDataLayerService.sendDataLayerEventWithAttributes(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceCasesConstants.FAQ_SERVICE_CASES_EVENT_NAME, _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceCasesConstants.EVENT_INFO_TYPE_CLICK, serviceCase.status, serviceCase.type, this.translateService.instant(('ng.service-cases.faq.' + serviceCase.type + '.question-' + index).toLowerCase()));
    }
  }
  static ɵfac = function ServiceCaseFaqComponent_Factory(t) {
    return new (t || ServiceCaseFaqComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCaseFaqComponent,
    selectors: [["tg-service-case-faq"]],
    inputs: {
      selectedServiceCase: "selectedServiceCase"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "text--l", "mb--m--md", "mb--xxs", "text-weight--l"], [1, "background-white", "px--s"], [3, "title", "divider", "faqToggle", 4, "ngFor", "ngForOf"], [3, "title", "divider", "faqToggle"], [3, "ngClass", "innerHTML"]],
    template: function ServiceCaseFaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceCaseFaqComponent_div_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedServiceCase);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_5__.AccordionComponent, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_5__.AccordionItemComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34159:
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-faq/service-case-faq.constants.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SERVICE_CASE_FAQ_TYPE_MAP: () => (/* binding */ SERVICE_CASE_FAQ_TYPE_MAP)
/* harmony export */ });
// Map to indicate how many faq questions there are per service case type
const SERVICE_CASE_FAQ_TYPE_MAP = {
  INSTALL: 3,
  MOVE: 3,
  TAKEOVER: 1,
  REPAIR: 2,
  HOME_DELIVERY: 3
};

/***/ }),

/***/ 91315:
/*!****************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-list/mobile-list/service-case-mobile-list.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseMobileListComponent: () => (/* binding */ ServiceCaseMobileListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _order_service_case_order_service_case_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order-service-case/order-service-case.pipe */ 38957);







const _c0 = ["list"];
function ServiceCaseMobileListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "ng.service-cases.item.type." + ctx_r1.selectedServiceCase.type + ".short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "service-case-item-id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx_r1.selectedServiceCase.id, " ");
  }
}
function ServiceCaseMobileListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.service-cases.list.no-service-cases"), " ");
  }
}
function ServiceCaseMobileListComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.showSelector ? "icon-chevron-up" : "icon-chevron-down");
  }
}
function ServiceCaseMobileListComponent_ul_11_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.service-cases.list.no-service-cases"), " ");
  }
}
const _c1 = a0 => ({
  "account-selector__list__options__item--active": a0
});
function ServiceCaseMobileListComponent_ul_11_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCaseMobileListComponent_ul_11_li_5_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const serviceCase_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.selectServiceCaseItem(serviceCase_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const serviceCase_r10 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, (ctx_r7.selectedServiceCase == null ? null : ctx_r7.selectedServiceCase.id) === serviceCase_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "ng.service-cases.item.type." + serviceCase_r10.type + ".short"), " (#", serviceCase_r10.id, ") ");
  }
}
function ServiceCaseMobileListComponent_ul_11_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCaseMobileListComponent_ul_11_li_10_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const serviceCase_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.selectServiceCaseItem(serviceCase_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const serviceCase_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, (ctx_r8.selectedServiceCase == null ? null : ctx_r8.selectedServiceCase.id) === serviceCase_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "ng.service-cases.item.type." + serviceCase_r13.type + ".short"), " (#", serviceCase_r13.id, ") ");
  }
}
function ServiceCaseMobileListComponent_ul_11_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.service-cases.list.no-closed-service-cases"), " ");
  }
}
const _c2 = a0 => ({
  "account-selector__list--opened-with-icon account-selector__list__options--opened": a0
});
function ServiceCaseMobileListComponent_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17)(1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServiceCaseMobileListComponent_ul_11_li_4_Template, 3, 3, "li", 19)(5, ServiceCaseMobileListComponent_ul_11_li_5_Template, 7, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceCaseMobileListComponent_ul_11_li_10_Template, 7, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiceCaseMobileListComponent_ul_11_li_12_Template, 3, 3, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r5.showSelector));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "ng.service-cases.open-cases"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.serviceCases.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx_r5.openServiceCases));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, "ng.service-cases.closed-cases"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx_r5.closedServiceCases));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.closedServiceCases.length === 0);
  }
}
const _c3 = (a0, a1) => ({
  "account-selector__list--opened-with-icon account-selector__list__first-item--opened": a0,
  "account-selector__list__first-item--closed": a1
});
class ServiceCaseMobileListComponent {
  serviceCases = [];
  openServiceCases = [];
  closedServiceCases = [];
  selectedServiceCase = undefined;
  selectServiceCase = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  element = undefined;
  showSelector = false;
  onGlobalClick(event) {
    if (!this.element?.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.showSelector = false;
    }
  }
  toggleSelector() {
    if (this.serviceCases.length) {
      this.showSelector = !this.showSelector;
    }
  }
  selectServiceCaseItem(serviceCase) {
    this.selectServiceCase.emit(serviceCase);
    this.showSelector = false;
  }
  static ɵfac = function ServiceCaseMobileListComponent_Factory(t) {
    return new (t || ServiceCaseMobileListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCaseMobileListComponent,
    selectors: [["tg-service-case-mobile-list"]],
    viewQuery: function ServiceCaseMobileListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
      }
    },
    hostBindings: function ServiceCaseMobileListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ServiceCaseMobileListComponent_mousedown_HostBindingHandler($event) {
          return ctx.onGlobalClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      serviceCases: "serviceCases",
      openServiceCases: "openServiceCases",
      closedServiceCases: "closedServiceCases",
      selectedServiceCase: "selectedServiceCase"
    },
    outputs: {
      selectServiceCase: "selectServiceCase"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 8,
    consts: [[1, "position--relative"], ["list", ""], [1, "background-shade_16", "py--s", "px--xs", "account-selector__list", "account-selector__list__first-item", "account-selector__list--with-icon", "cursor--pointer", "display--flex", "justify-content--between", "width--auto", "pr--m", "align-items--center", 3, "ngClass", "click"], [1, "display--flex", "align-items--center", "gap--s"], [1, "account-selector__list__icon"], [1, "icon-file", "color-dark-brown", "background-yellow"], [1, "account-selector__list__account-info"], ["class", "account-selector__list__account-info__account-details", 4, "ngIf", "ngIfElse"], ["noSelectedServiceCase", ""], ["class", "account-selector__action display--flex align-items--center mr--xs", 4, "ngIf"], ["class", "account-selector__list account-selector__list__options position--absolute background-white list-style--none py--xs px--xs box-shadow width--full", "style", "z-index: 100", 3, "ngClass", 4, "ngIf"], [1, "account-selector__list__account-info__account-details"], [1, "text-weight--l"], [1, "color-white_32", "text--m"], [1, "text--s"], [1, "account-selector__action", "display--flex", "align-items--center", "mr--xs"], [1, "icon", "icon-sm", "position--absolute", "text-weight--g", 3, "ngClass"], [1, "account-selector__list", "account-selector__list__options", "position--absolute", "background-white", "list-style--none", "py--xs", "px--xs", "box-shadow", "width--full", 2, "z-index", "100", 3, "ngClass"], [1, "text-weight--l", "py--xxs"], ["class", "text--s", 4, "ngIf"], ["class", "account-selector__list__options__item cursor--pointer py--xxs", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "account-selector__list__options__item", "cursor--pointer", "py--xxs", 3, "ngClass"], [1, "account-selector__list__options__item__link", 3, "click"]],
    template: function ServiceCaseMobileListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCaseMobileListComponent_Template_div_click_2_listener() {
          return ctx.toggleSelector();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceCaseMobileListComponent_div_7_Template, 8, 8, "div", 7)(8, ServiceCaseMobileListComponent_ng_template_8_Template, 3, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceCaseMobileListComponent_a_10_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServiceCaseMobileListComponent_ul_11_Template, 13, 17, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, ctx.showSelector, !ctx.showSelector));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedServiceCase)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serviceCases.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelector);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _order_service_case_order_service_case_pipe__WEBPACK_IMPORTED_MODULE_3__.OrderByPipe],
    styles: [".account-selector__list__icon[_ngcontent-%COMP%]   .icon-file[_ngcontent-%COMP%] {\n  width: 4.8rem;\n  height: 4.8rem;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZW5nYWdlbWVudC9jYXJlLXNlcnZpY2UtY2FzZXMvc2VydmljZS1jYXNlL2ZlYXQtc2VydmljZS1jYXNlLW92ZXJ2aWV3L3NyYy9saWIvc2VydmljZS1jYXNlLWxpc3QvbW9iaWxlLWxpc3Qvc2VydmljZS1jYXNlLW1vYmlsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LXNlbGVjdG9yX19saXN0X19pY29uIC5pY29uLWZpbGUge1xuICB3aWR0aDogNC44cmVtO1xuICBoZWlnaHQ6IDQuOHJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 38957:
/*!************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-list/order-service-case/order-service-case.pipe.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByPipe: () => (/* binding */ OrderByPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class OrderByPipe {
  transform(value = [], order = 'desc') {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.creationDate.getTime() - b.creationDate.getTime();
      }
      return b.creationDate.getTime() - a.creationDate.getTime();
    });
  }
  static ɵfac = function OrderByPipe_Factory(t) {
    return new (t || OrderByPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "orderBy",
    type: OrderByPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 21283:
/*!*********************************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-case-list/service-case-list.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseListComponent: () => (/* binding */ ServiceCaseListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @care-service-cases/service-case/ui */ 37852);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mobile_list_service_case_mobile_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-list/service-case-mobile-list.component */ 91315);
/* harmony import */ var _order_service_case_order_service_case_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-service-case/order-service-case.pipe */ 38957);









function ServiceCaseListComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.service-cases.list.no-service-cases"), " ");
  }
}
function ServiceCaseListComponent_div_0_ng_template_8_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.service-cases.list.no-closed-service-cases"), " ");
  }
}
const _c0 = a0 => ({
  serviceCases: a0
});
function ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r10.closedServiceCases));
  }
}
function ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.toggleHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "service-case-item-history-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.service-cases.list." + (ctx_r11.showHistory ? "hide" : "show") + "-history"), " ");
  }
}
function ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_ng_container_0_Template, 1, 4, "ng-container", 15)(1, ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_div_1_Template, 3, 4, "div", 16);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showHistory && ctx_r8.closedServiceCases.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.closedServiceCases.length);
  }
}
function ServiceCaseListComponent_div_0_ng_template_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServiceCaseListComponent_div_0_ng_template_8_div_3_div_4_Template, 3, 3, "div", 6)(5, ServiceCaseListComponent_div_0_ng_template_8_div_3_ng_template_5_Template, 2, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "closed-service-cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.service-cases.closed-cases"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.closedServiceCases.length === 0)("ngIfElse", _r9);
  }
}
function ServiceCaseListComponent_div_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceCaseListComponent_div_0_ng_template_8_div_3_Template, 7, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "open-service-cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.openServiceCases));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.closedServiceCases);
  }
}
function ServiceCaseListComponent_div_0_ng_template_10_div_0_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceCase_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.service-cases.item.type." + serviceCase_r16.type + ".short"), " ");
  }
}
function ServiceCaseListComponent_div_0_ng_template_10_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceCase_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.service-cases.your"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.service-cases.item.type." + serviceCase_r16.type + ".short"), " ");
  }
}
function ServiceCaseListComponent_div_0_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCaseListComponent_div_0_ng_template_10_div_0_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const serviceCase_r16 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.selectServiceCase.emit(serviceCase_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "care-service-case-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceCaseListComponent_div_0_ng_template_10_div_0_h6_3_Template, 4, 6, "h6", 21)(4, ServiceCaseListComponent_div_0_ng_template_10_div_0_ng_template_4_Template, 4, 6, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "care-service-case-status", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const serviceCase_r16 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r15.selectedServiceCase == null ? null : ctx_r15.selectedServiceCase.id) === serviceCase_r16.id ? "border-color--all--brand-primary" : "border-color--all--transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "service-case-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", serviceCase_r16.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.selectedServiceCase == null ? null : ctx_r15.selectedServiceCase.id) === serviceCase_r16.id)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "service-case-item-id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", serviceCase_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", serviceCase_r16.status);
  }
}
function ServiceCaseListComponent_div_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceCaseListComponent_div_0_ng_template_10_div_0_Template, 9, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "orderBy");
  }
  if (rf & 2) {
    const serviceCases_r14 = ctx.serviceCases;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, serviceCases_r14));
  }
}
function ServiceCaseListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "tg-service-case-mobile-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectServiceCase", function ServiceCaseListComponent_div_0_Template_tg_service_case_mobile_list_selectServiceCase_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.selectServiceCase.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceCaseListComponent_div_0_div_7_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiceCaseListComponent_div_0_ng_template_8_Template, 4, 6, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(10, ServiceCaseListComponent_div_0_ng_template_10_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serviceCases", ctx_r0.serviceCases)("openServiceCases", ctx_r0.openServiceCases)("closedServiceCases", ctx_r0.closedServiceCases)("selectedServiceCase", ctx_r0.selectedServiceCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "ng.service-cases.open-cases"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.serviceCases.length === 0)("ngIfElse", _r3);
  }
}
class ServiceCaseListComponent {
  serviceCases = [];
  openServiceCases = [];
  closedServiceCases = [];
  selectedServiceCase;
  selectServiceCase = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  toggleHistoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  showHistory = false;
  toggleHistory() {
    this.showHistory = !this.showHistory;
    this.toggleHistoryEvent.emit(this.showHistory);
  }
  static ɵfac = function ServiceCaseListComponent_Factory(t) {
    return new (t || ServiceCaseListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCaseListComponent,
    selectors: [["tg-service-case-list"]],
    inputs: {
      serviceCases: "serviceCases",
      openServiceCases: "openServiceCases",
      closedServiceCases: "closedServiceCases",
      selectedServiceCase: "selectedServiceCase"
    },
    outputs: {
      selectServiceCase: "selectServiceCase",
      toggleHistoryEvent: "toggleHistoryEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "service-cases", 4, "ngIf"], [1, "service-cases"], [1, "hide-from-md"], [3, "serviceCases", "openServiceCases", "closedServiceCases", "selectedServiceCase", "selectServiceCase"], [1, "hide-until-md"], [1, "text--l", "text-weight--l"], ["class", "text--s", 4, "ngIf", "ngIfElse"], ["serviceCasesList", ""], ["serviceCasesListTemplate", ""], [1, "text--s"], [1, "service-cases-list"], [1, "mb--xxl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["closedServiceCasesTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "text-decoration--underline cur-pointer", 3, "click", 4, "ngIf"], [1, "text-decoration--underline", "cur-pointer", 3, "click"], ["class", "py--xs px--s my--xs display--flex gap--m cur-pointer service-case-list__item border--left border-width--l--l transition--all-3ms", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py--xs", "px--s", "my--xs", "display--flex", "gap--m", "cur-pointer", "service-case-list__item", "border--left", "border-width--l--l", "transition--all-3ms", 3, "ngClass", "click"], [2, "margin-top", "5px", 3, "type"], ["class", "mt-0", 4, "ngIf", "ngIfElse"], ["serviceCaseRegular", ""], [1, "color-white_32", "text--s", "mb--xxxs"], [3, "status"], [1, "mt-0"]],
    template: function ServiceCaseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServiceCaseListComponent_div_0_Template, 12, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serviceCases);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_3__.ServiceCaseStatusComponent, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_3__.ServiceCaseIconComponent, _mobile_list_service_case_mobile_list_component__WEBPACK_IMPORTED_MODULE_4__.ServiceCaseMobileListComponent, _order_service_case_order_service_case_pipe__WEBPACK_IMPORTED_MODULE_5__.OrderByPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 15613:
/*!********************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-cases-overview.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseOverviewComponent: () => (/* binding */ ServiceCaseOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_case_list_service_case_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-case-list/service-case-list.component */ 21283);
/* harmony import */ var _service_case_detail_service_case_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-case-detail/service-case-detail.component */ 69497);
/* harmony import */ var _service_case_faq_service_case_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-case-faq/service-case-faq.component */ 42654);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @care-service-cases/service-case/ui */ 37852);
/* harmony import */ var _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__);












function ServiceCaseOverviewComponent_care_service_case_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "care-service-case-error", 4);
  }
  if (rf & 2) {
    const loadError_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", loadError_r4);
  }
}
function ServiceCaseOverviewComponent_care_service_case_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "care-service-case-loader", 5);
  }
  if (rf & 2) {
    const loading_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", loading_r5);
  }
}
const _c0 = () => [];
function ServiceCaseOverviewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "tg-service-case-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleHistoryEvent", function ServiceCaseOverviewComponent_ng_template_5_Template_tg_service_case_list_toggleHistoryEvent_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.toggleHistoryEvent($event));
    })("selectServiceCase", function ServiceCaseOverviewComponent_ng_template_5_Template_tg_service_case_list_selectServiceCase_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.selectServiceCase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tg-service-case-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tg-service-case-faq", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedServiceCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r2.selectedServiceCase$))("serviceCases", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx_r2.serviceCase$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("closedServiceCases", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx_r2.closedServiceCases$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("openServiceCases", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx_r2.openServiceCases$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedServiceCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, ctx_r2.selectedServiceCase$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedServiceCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, ctx_r2.selectedServiceCase$));
  }
}
class ServiceCaseOverviewComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__.AbstractBaseComponent {
  scopes = ['customeraccount'];
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_5__.ServiceCaseFacade);
  selectedServiceCase$ = this.facade.selectedServiceCase$;
  serviceCase$ = this.facade.serviceCases$;
  openServiceCases$ = this.facade.openServiceCases$;
  closedServiceCases$ = this.facade.closedServiceCases$;
  loadError$ = this.facade.loadError$;
  loading$ = this.facade.loading$;
  initAfterLoggedIn() {
    this.facade.loadServiceCases();
    this.facade.serviceCasesPageView();
  }
  selectServiceCase(serviceCase) {
    this.facade.selectServiceCase(serviceCase);
  }
  toggleHistoryEvent(toggleHistory) {
    this.facade.toggleHistory(toggleHistory);
  }
  static ɵfac = /*@__PURE__*/(() => {
    let ɵServiceCaseOverviewComponent_BaseFactory;
    return function ServiceCaseOverviewComponent_Factory(t) {
      return (ɵServiceCaseOverviewComponent_BaseFactory || (ɵServiceCaseOverviewComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ServiceCaseOverviewComponent)))(t || ServiceCaseOverviewComponent);
    };
  })();
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCaseOverviewComponent,
    selectors: [["tg-service-cases-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 8,
    consts: [[3, "scopes", "componentCanRender"], [3, "error", 4, "ngIf"], [3, "loading", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "error"], [3, "loading"], [1, "row"], [1, "col-md-3", "p--s"], [3, "selectedServiceCase", "serviceCases", "closedServiceCases", "openServiceCases", "toggleHistoryEvent", "selectServiceCase"], [1, "col-md-9", "p--s"], [1, "mb--xxl--md", "mb--l"], [3, "selectedServiceCase"]],
    template: function ServiceCaseOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ServiceCaseOverviewComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServiceCaseOverviewComponent_care_service_case_error_1_Template, 1, 1, "care-service-case-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceCaseOverviewComponent_care_service_case_loader_3_Template, 1, 1, "care-service-case-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ServiceCaseOverviewComponent_ng_template_5_Template, 14, 21, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.loadError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.loading$))("ngIfElse", _r3);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_5__.ServiceCaseNgrxModule, _service_case_list_service_case_list_component__WEBPACK_IMPORTED_MODULE_2__.ServiceCaseListComponent, _service_case_detail_service_case_detail_component__WEBPACK_IMPORTED_MODULE_3__.ServiceCaseDetailComponent, _service_case_faq_service_case_faq_component__WEBPACK_IMPORTED_MODULE_4__.ServiceCaseFaqComponent, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_6__.ServiceCaseErrorComponent, _care_service_cases_service_case_ui__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__.LoginComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_care-service-cases_service-case_feat-service-case-overview_src_index_ts.js.map