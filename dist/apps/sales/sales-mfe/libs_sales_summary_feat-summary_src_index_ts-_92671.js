(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_summary_feat-summary_src_index_ts-_92671"],{

/***/ 61605:
/*!******************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryEventTypeEnum: () => (/* reexport safe */ _lib_enums_event_type_enum__WEBPACK_IMPORTED_MODULE_2__.SummaryEventTypeEnum),
/* harmony export */   SummaryStepComponent: () => (/* reexport safe */ _lib_summary_step_component__WEBPACK_IMPORTED_MODULE_0__.SummaryStepComponent),
/* harmony export */   summaryEventStepKey: () => (/* reexport safe */ _lib_constants_summary_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.summaryEventStepKey)
/* harmony export */ });
/* harmony import */ var _lib_summary_step_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/summary-step.component */ 37132);
/* harmony import */ var _lib_constants_summary_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants/summary-event-step-key.const */ 88028);
/* harmony import */ var _lib_enums_event_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/enums/event-type.enum */ 95122);




/***/ }),

/***/ 88028:
/*!*******************************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/constants/summary-event-step-key.const.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   summaryEventStepKey: () => (/* binding */ summaryEventStepKey)
/* harmony export */ });
const summaryEventStepKey = 'order-confirmation';

/***/ }),

/***/ 95122:
/*!**************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/enums/event-type.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryEventTypeEnum: () => (/* binding */ SummaryEventTypeEnum)
/* harmony export */ });
var SummaryEventTypeEnum;
(function (SummaryEventTypeEnum) {
  SummaryEventTypeEnum["SHOW_CONTRACT_SUMMARY"] = "show-contract-summary";
  SummaryEventTypeEnum["PAYMENT"] = "payment-clicked";
})(SummaryEventTypeEnum || (SummaryEventTypeEnum = {}));

/***/ }),

/***/ 62662:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/events/contract-summary-link-clicked.const.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contractSummaryLinkClicked: () => (/* binding */ contractSummaryLinkClicked)
/* harmony export */ });
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/event-type.enum */ 95122);

const contractSummaryLinkClicked = {
  eventType: _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_0__.SummaryEventTypeEnum.SHOW_CONTRACT_SUMMARY
};

/***/ }),

/***/ 12197:
/*!***************************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/events/summary-step-finished.const.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   summaryStepFinished: () => (/* binding */ summaryStepFinished)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);

const summaryStepFinished = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: 'order-confirmation'
  }
};

/***/ }),

/***/ 91536:
/*!*************************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/events/summary-step-loaded.const.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   summaryStepLoaded: () => (/* binding */ summaryStepLoaded)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_summary_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/summary-event-step-key.const */ 88028);


const summaryStepLoaded = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: _constants_summary_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.summaryEventStepKey
  }
};

/***/ }),

/***/ 37132:
/*!***************************************************************************!*\
  !*** ./libs/sales/summary/feat-summary/src/lib/summary-step.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryStepComponent: () => (/* binding */ SummaryStepComponent)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_summary_step_finished_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/summary-step-finished.const */ 12197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events_summary_step_loaded_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/summary-step-loaded.const */ 91536);
/* harmony import */ var _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/summary/ui */ 77594);
/* harmony import */ var _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_shared_ingenico_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/shared/ingenico-form */ 85809);
/* harmony import */ var _sales_shared_ingenico_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ingenico_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _events_contract_summary_link_clicked_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/contract-summary-link-clicked.const */ 62662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















function SummaryStepComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "tg-sales-summary-error-notification", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "tg-sales-summary-personal-info", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "tg-sales-summary-delivery-info", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "tg-sales-summary-invoice-info", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "tg-sales-summary-order-data", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("orderButtonClicked", function SummaryStepComponent_ng_container_0_Template_tg_sales_summary_order_data_orderButtonClicked_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.handleOrderButtonClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "tg-sales-summary-footer", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("contractSummaryLinkClickedEvent", function SummaryStepComponent_ng_container_0_Template_tg_sales_summary_footer_contractSummaryLinkClickedEvent_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.showContractSummary());
    })("depreciationItemClickedEvent", function SummaryStepComponent_ng_container_0_Template_tg_sales_summary_footer_depreciationItemClickedEvent_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.showDepreciationOverlay($event));
    })("termsAndConditionsLinkClickedEvent", function SummaryStepComponent_ng_container_0_Template_tg_sales_summary_footer_termsAndConditionsLinkClickedEvent_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.showTermsAndConditions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "feat-summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 12, "ng.sales-checkout.lbl.title.order-confirmation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 14, "ng.sales-checkout.lbl.sub-title.order-confirmation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("notifications", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 16, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.generalNotifications$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("personalInfo", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 18, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.personalInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("notifications", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 20, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.deliveryNotifications$))("deliveryInfo", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 22, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.deliveryInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("invoiceInfo", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 24, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.invoiceInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("orderItems", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 26, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.orderItems$))("prices", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 28, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.prices$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contractSummaryRequired", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](32, 30, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.contractSummaryRequired$))("depreciationItems", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 32, ctx_r0.viewModel == null ? null : ctx_r0.viewModel.depreciationItems$));
  }
}
function SummaryStepComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "tg-sales-summary-depreciation-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closeOverlayClickedEvent", function SummaryStepComponent_ng_container_1_Template_tg_sales_summary_depreciation_table_closeOverlayClickedEvent_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.closeDepreciationTableOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isSoho", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r1.viewModel == null ? null : ctx_r1.viewModel.prices$)) == null ? null : tmp_0_0.vatInclusive))("depreciationItem", ctx_r1.selectedDepreciationItem);
  }
}
let SummaryStepComponent = class SummaryStepComponent {
  constructor(eventFacade, summaryFacade) {
    this.eventFacade = eventFacade;
    this.summaryFacade = summaryFacade;
    this.viewState = _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.ViewStateEnum.OVERLAY_CLOSED;
    this.viewStateEnum = _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.ViewStateEnum;
    this.ingenicoRequest$ = this.summaryFacade.ingenicoRequest$;
    this.ingenicoFormUrl$ = this.summaryFacade.ingenicoFormUrl$;
    this.viewModel = {
      personalInfo$: this.summaryFacade.personalInfo$,
      contractSummaryRequired$: this.summaryFacade.contractSummaryRequired$,
      deliveryInfo$: this.summaryFacade.deliveryInfo$,
      invoiceInfo$: this.summaryFacade.invoiceInfo$,
      orderItems$: this.summaryFacade.sortedOrderItems$,
      prices$: this.summaryFacade.prices$,
      depreciationItems$: this.summaryFacade.depreciationItems$,
      generalNotifications$: this.summaryFacade.generalNotifications$,
      deliveryNotifications$: this.summaryFacade.deliveryNotifications$
    };
    this.ingenicoFormReady$ = this.summaryFacade.ingenicoFormReady$;
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.ingenicoRequest$, this.ingenicoFormReady$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(([req, res]) => {
      if (req && res) {
        this.eventFacade.triggerAnalyticsClickEvent({
          name: 'redirected to payment gateway'
        });
        this.child?.sendRequest(req);
      }
    });
    // if the content of generalNotifications$ is changed, then autoscroll to the element tg-sales-summary-error-notification
    this.summaryFacade.generalNotifications$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(0), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(notifications => {
      if (notifications?.length > 0) {
        const elements = document.getElementsByTagName('tg-sales-summary-error-notification');
        if (elements.length > 0) {
          elements[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
    this.eventFacade.triggerEvent(_events_summary_step_loaded_const__WEBPACK_IMPORTED_MODULE_3__.summaryStepLoaded);
  }
  onNextStep() {
    this.eventFacade.triggerEvent(_events_summary_step_finished_const__WEBPACK_IMPORTED_MODULE_1__.summaryStepFinished);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
  }
  showDepreciationOverlay(depreciationItem) {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'view depreciation table link clicked'
    });
    this.selectedDepreciationItem = depreciationItem;
    this.eventFacade.triggerEvent(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.hideNavigationEvent);
    this.viewState = _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.ViewStateEnum.OVERLAY_OPEN;
  }
  closeDepreciationTableOverlay() {
    this.selectedDepreciationItem = undefined;
    this.eventFacade.triggerEvent(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.showNavigationEvent);
    this.viewState = _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.ViewStateEnum.OVERLAY_CLOSED;
  }
  showContractSummary() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'view contract summary link clicked'
    });
    this.eventFacade.triggerEvent(_events_contract_summary_link_clicked_const__WEBPACK_IMPORTED_MODULE_9__.contractSummaryLinkClicked);
  }
  showTermsAndConditions() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'Terms and Conditions link clicked'
    });
    this.summaryFacade.showTermsAndConditions().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.warn(err.message);
      return '';
    })).subscribe();
  }
  handlePaymentInitiated() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'payment initiated'
    });
  }
  handleOrderButtonClicked() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'order button clicked',
      attributes: {
        itemName: 'upfront payment'
      }
    });
    this.eventFacade.triggerEvent(_events_summary_step_finished_const__WEBPACK_IMPORTED_MODULE_1__.summaryStepFinished);
  }
  static #_ = this.ɵfac = function SummaryStepComponent_Factory(t) {
    return new (t || SummaryStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.SummaryFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SummaryStepComponent,
    selectors: [["tg-sales-step-summary"]],
    viewQuery: function SummaryStepComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_sales_shared_ingenico_form__WEBPACK_IMPORTED_MODULE_7__.IngenicoFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 5,
    consts: [[4, "ngIf"], [3, "actionUrl", "paymentInitiated"], ["id", "body-container", 1, "sales-page__container"], [1, "sales-page__container__content"], [1, "sales-page__container__content__section", "width--full"], [1, "sales-checkout", "container--medium"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "order-confirmation-section", "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "sales-review-container"], [1, "col-sm-12", "col-md-5"], [1, "order-confirmation-section", "mb--xxg", "pb--xxl--md", "ng-star-inserted"], [3, "notifications"], [3, "personalInfo"], [3, "notifications", "deliveryInfo"], [3, "invoiceInfo"], [1, "col-md-7", "col-sm-12", "mb--xxg--md", "pb--xxg--md", "ng-star-inserted"], ["id", "sticky-header-shopping-cart", 1, "position--sticky--md", "sticky-header-shopping-cart", "position--top--md", 2, "top", "-257px"], [3, "orderItems", "prices", "orderButtonClicked"], [3, "contractSummaryRequired", "depreciationItems", "contractSummaryLinkClickedEvent", "depreciationItemClickedEvent", "termsAndConditionsLinkClickedEvent"], [3, "isSoho", "depreciationItem", "closeOverlayClickedEvent"]],
    template: function SummaryStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SummaryStepComponent_ng_container_0_Template, 34, 34, "ng-container", 0)(1, SummaryStepComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "tg-sales-ingenico-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paymentInitiated", function SummaryStepComponent_Template_tg_sales_ingenico_form_paymentInitiated_2_listener() {
          return ctx.handlePaymentInitiated();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewState === ctx.viewStateEnum.OVERLAY_CLOSED);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewState === ctx.viewStateEnum.OVERLAY_OPEN);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("actionUrl", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, ctx.ingenicoFormUrl$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.OrderDataComponent, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.DeliverInfoComponent, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.InvoiceInfoComponent, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.PersonalInfoComponent, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.DepreciationTableComponent, _sales_shared_ingenico_form__WEBPACK_IMPORTED_MODULE_7__.IngenicoFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _sales_summary_ui__WEBPACK_IMPORTED_MODULE_4__.ErrorNotificationComponent],
    encapsulation: 2
  });
};
SummaryStepComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventFacade, _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_5__.SummaryFacade])], SummaryStepComponent);


/***/ })

}])
//# sourceMappingURL=libs_sales_summary_feat-summary_src_index_ts-_92671.js.map