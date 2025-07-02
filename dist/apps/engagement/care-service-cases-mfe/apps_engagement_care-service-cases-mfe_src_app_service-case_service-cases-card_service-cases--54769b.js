(self["webpackChunkcare_service_cases_mfe"] = self["webpackChunkcare_service_cases_mfe"] || []).push([["apps_engagement_care-service-cases-mfe_src_app_service-case_service-cases-card_service-cases--54769b"],{

/***/ 88438:
/*!************************************************************************************************************************!*\
  !*** ./apps/engagement/care-service-cases-mfe/src/app/service-case/service-cases-card/service-cases-card.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCasesCardComponent: () => (/* binding */ ServiceCasesCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _care_service_cases_service_case_feat_service_case_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @care-service-cases/service-case/feat-service-case-card */ 83777);
/* harmony import */ var _care_service_cases_service_case_feat_service_case_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_feat_service_case_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_6__);










class ServiceCasesCardComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.AbstractCardComponent {
  facade;
  scopes = ['customeraccount'];
  constructor(facade, elementRef, document) {
    super(elementRef, document);
    this.facade = facade;
  }
  initAfterLoggedIn() {
    this.facade.loadServiceCases();
    this.showSimpleCard();
  }
  static ɵfac = function ServiceCasesCardComponent_Factory(t) {
    return new (t || ServiceCasesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServiceCasesCardComponent,
    selectors: [["care-service-cases-card"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[3, "scopes", "componentCanRender"]],
    template: function ServiceCasesCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ServiceCasesCardComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-service-case-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseNgrxModule, _care_service_cases_service_case_feat_service_case_card__WEBPACK_IMPORTED_MODULE_3__.ServiceCaseCardComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_6__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_6__.LoginComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=apps_engagement_care-service-cases-mfe_src_app_service-case_service-cases-card_service-cases--54769b.js.map