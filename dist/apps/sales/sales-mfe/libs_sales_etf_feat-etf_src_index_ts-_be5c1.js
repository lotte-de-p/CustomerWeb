(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_etf_feat-etf_src_index_ts-_be5c1"],{

/***/ 66962:
/*!**********************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfComponent: () => (/* reexport safe */ _lib_etf_component__WEBPACK_IMPORTED_MODULE_0__.EtfComponent),
/* harmony export */   etfEventStepKey: () => (/* reexport safe */ _lib_constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.etfEventStepKey),
/* harmony export */   etfStepLoaded: () => (/* reexport safe */ _lib_events_etf_step_loaded_const__WEBPACK_IMPORTED_MODULE_4__.etfStepLoaded),
/* harmony export */   stepImage: () => (/* reexport safe */ _lib_constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.stepImage)
/* harmony export */ });
/* harmony import */ var _lib_etf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/etf.component */ 79468);
/* harmony import */ var _lib_constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants/etf-event-step-key.const */ 55277);
/* harmony import */ var _lib_interfaces_response_model_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces/response-model.interface */ 78482);
/* harmony import */ var _lib_interfaces_view_model_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interfaces/view-model.interface */ 16141);
/* harmony import */ var _lib_events_etf_step_loaded_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/events/etf-step-loaded.const */ 98271);






/***/ }),

/***/ 55277:
/*!*******************************************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/constants/etf-event-step-key.const.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   etfEventStepKey: () => (/* binding */ etfEventStepKey),
/* harmony export */   stepImage: () => (/* binding */ stepImage)
/* harmony export */ });
const etfEventStepKey = 'etf-buy-off';
const stepImage = 'etf-buy-off.svg';

/***/ }),

/***/ 57588:
/*!******************************************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/constants/etf-step-finished.const.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEtfStepViewed: () => (/* binding */ createEtfStepViewed)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etf-event-step-key.const */ 55277);


const createEtfStepViewed = (discountIdsToRemove, orderItemsToAddDiscounts) => {
  return {
    eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_FINISHED,
    body: {
      stepKey: _etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.etfEventStepKey,
      existingDiscountsToRemove: discountIdsToRemove,
      targetOrderItemIdsToDiscount: orderItemsToAddDiscounts
    }
  };
};

/***/ }),

/***/ 79468:
/*!**********************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/etf.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfComponent: () => (/* binding */ EtfComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_etf_step_loaded_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/etf-step-loaded.const */ 98271);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/etf/data-access */ 8129);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/etf-event-step-key.const */ 55277);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sales/etf/ui */ 59517);
/* harmony import */ var _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _constants_etf_step_finished_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/etf-step-finished.const */ 57588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);
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




















function EtfComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inlineSVG", ctx_r0.viewModel.stepImage)("resolveSVGUrl", false);
  }
}
function EtfComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "feat-etf-validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "ng.sales-checkout.error.yes-or-no-to-continue-errorfield"), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
  }
}
function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tg-sales-etf-order-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("setOrderItemTerminationStateEvent", function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_1_Template_tg_sales_etf_order_item_setOrderItemTerminationStateEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.setOrderItemTerminationStateEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orderItemWithDiscount_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("orderItemWithDiscount", orderItemWithDiscount_r3);
  }
}
function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_marked_as_no_discount_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tg-sales-etf-order-item-marked-as-no-discount", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("setOrderMarkedForDiscount", function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_marked_as_no_discount_2_Template_tg_sales_etf_order_item_marked_as_no_discount_setOrderMarkedForDiscount_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.setOrderItemMarkedForDiscount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orderItemWithDiscount_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("orderItemWithDiscount", orderItemWithDiscount_r3);
  }
}
function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_etf_list_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tg-sales-etf-order-item-with-etf-list", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("applyEtfCancellationEvent", function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_etf_list_3_Template_tg_sales_etf_order_item_with_etf_list_applyEtfCancellationEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.selectDiscountToTerminate($event));
    })("cancelEtfSelectionEvent", function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_etf_list_3_Template_tg_sales_etf_order_item_with_etf_list_cancelEtfSelectionEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.cancelEtfTermination($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usedAndPendingDiscountSlotList_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    const orderItemWithDiscount_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("orderItemWithDiscount", orderItemWithDiscount_r3)("usedAndPendingDiscountSlotList", usedAndPendingDiscountSlotList_r6);
  }
}
function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_termination_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tg-sales-etf-order-item-with-termination", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("showEtfOptionsEvent", function EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_termination_4_Template_tg_sales_etf_order_item_with_termination_showEtfOptionsEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.setShowEtfOptions($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orderItemWithDiscount_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("orderItemWithDiscount", orderItemWithDiscount_r3);
  }
}
function EtfComponent_ng_container_28_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_1_Template, 1, 1, "tg-sales-etf-order-item", 29)(2, EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_marked_as_no_discount_2_Template, 1, 1, "tg-sales-etf-order-item-marked-as-no-discount", 30)(3, EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_etf_list_3_Template, 1, 2, "tg-sales-etf-order-item-with-etf-list", 31)(4, EtfComponent_ng_container_28_ng_container_2_ng_container_1_tg_sales_etf_order_item_with_termination_4_Template, 1, 1, "tg-sales-etf-order-item-with-termination", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const orderItemWithDiscount_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !orderItemWithDiscount_r3.hasMadeASelection && !orderItemWithDiscount_r3.selectedEtfDiscountSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", orderItemWithDiscount_r3.hasMadeASelection && !orderItemWithDiscount_r3.selectedEtfDiscountSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", orderItemWithDiscount_r3.showEtfOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", orderItemWithDiscount_r3.selectedEtfDiscountSlot && !orderItemWithDiscount_r3.showEtfOptions);
  }
}
function EtfComponent_ng_container_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, EtfComponent_ng_container_28_ng_container_2_ng_container_1_Template, 5, 4, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const usedAndPendingDiscountSlotList_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", usedAndPendingDiscountSlotList_r6 && usedAndPendingDiscountSlotList_r6.length);
  }
}
function EtfComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, EtfComponent_ng_container_28_ng_container_2_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const trackerIndex_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMapInterpolate1"]("tracker--step ready-", trackerIndex_r4, " mb-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 4, ctx_r2.viewModel == null ? null : ctx_r2.viewModel.usedAndPendingDiscounts));
  }
}
const _c0 = () => ({
  hideTracker: true
});
let EtfComponent = class EtfComponent {
  constructor(eventFacade, etfFacade) {
    this.eventFacade = eventFacade;
    this.etfFacade = etfFacade;
    this.viewModel = {
      stepImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_10__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_7__.stepImage),
      discountItems: this.etfFacade.orderItemsWithDiscount$,
      usedAndPendingDiscounts: this.etfFacade.usedAndPendingDiscountSlots$,
      showValidationNotification: false
    };
  }
  ngOnInit() {
    this.eventFacade.triggerEvent(_events_etf_step_loaded_const__WEBPACK_IMPORTED_MODULE_4__.etfStepLoaded);
  }
  onNextStep() {
    this.validateAndApplyEtf();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
  }
  validateAndApplyEtf() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)({
      orderItemsWithDiscount: this.etfFacade.orderItemsWithDiscount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)),
      usedDiscountSlots: this.etfFacade.usedAndPendingDiscountSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(({
      orderItemsWithDiscount,
      usedDiscountSlots
    }) => {
      if (!orderItemsWithDiscount || !usedDiscountSlots) {
        throw new Error('No order item');
      }
      const hasOrderItemsThatAreNotMarkedYet = orderItemsWithDiscount.some(orderItemWithDiscount => !orderItemWithDiscount.hasMadeASelection);
      this.setShowValidationNotification(hasOrderItemsThatAreNotMarkedYet);
      if (!hasOrderItemsThatAreNotMarkedYet) {
        this.applyEtf(orderItemsWithDiscount, usedDiscountSlots);
      }
    });
  }
  validateOnly() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)({
      orderItemsWithDiscount: this.etfFacade.orderItemsWithDiscount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)),
      usedDiscountSlots: this.etfFacade.usedAndPendingDiscountSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(({
      orderItemsWithDiscount,
      usedDiscountSlots
    }) => {
      if (!orderItemsWithDiscount || !usedDiscountSlots) {
        throw new Error('No order item');
      }
      const hasOrderItemsThatAreNotMarkedYet = orderItemsWithDiscount.some(orderItemWithDiscount => !orderItemWithDiscount.hasMadeASelection);
      this.setShowValidationNotification(hasOrderItemsThatAreNotMarkedYet);
    });
  }
  setShowEtfOptions(orderItemWithDiscount, showEtfOptions) {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'enable discount link clicked'
    });
    this.etfFacade.setShowEtfOptions(orderItemWithDiscount, showEtfOptions);
  }
  setOrderItemTerminationStateEvent(event) {
    const clickEvent = {
      name: 'terminate existing contract selected',
      attributes: {
        itemName: `discount-slot-${event.orderItemWithDiscount.id}`,
        itemData: event.buyWithDiscount ? 'yes' : 'no'
      }
    };
    this.eventFacade.triggerAnalyticsClickEvent(clickEvent);
    if (event.buyWithDiscount) {
      this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, true);
    } else {
      this.etfFacade.setOrderItemToMarkedForBuyingWithoutDiscount(event.orderItemWithDiscount);
    }
    this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, event.buyWithDiscount);
  }
  cancelEtfTermination(orderItemWithDiscount) {
    const analyticsEvent = {
      name: 'cancel button clicked',
      attributes: {
        itemName: `discount-slot-${orderItemWithDiscount.id}`
      }
    };
    this.eventFacade.triggerAnalyticsClickEvent(analyticsEvent);
    this.etfFacade.cancelEtfTermination(orderItemWithDiscount);
    this.etfFacade.setShowEtfOptions(orderItemWithDiscount, false);
  }
  selectDiscountToTerminate(event) {
    const analyticsEvent = {
      name: 'apply button clicked',
      attributes: {
        itemName: `discount-slot-${event.orderItemWithDiscount.id}`
      }
    };
    this.eventFacade.triggerAnalyticsClickEvent(analyticsEvent);
    this.etfFacade.setDiscountToTerminate(event.orderItemWithDiscount, event.usedDiscountSlot);
    this.etfFacade.setShowEtfOptions(event.orderItemWithDiscount, false);
    this.validateOnly();
  }
  setOrderItemMarkedForDiscount(orderItemWithDiscount) {
    this.etfFacade.resetOrderItem(orderItemWithDiscount);
  }
  applyEtf(orderItemsWithDiscount, usedDiscountSlots) {
    const orderItemsToAddDiscounts = [];
    if (orderItemsWithDiscount) {
      orderItemsWithDiscount.forEach(orderItemWithDiscount => {
        if (orderItemWithDiscount.selectedEtfDiscountSlot) {
          orderItemsToAddDiscounts.push({
            id: orderItemWithDiscount.rule.targetOrderItemIds[0]
          });
        }
      });
    }
    const discountIdsToRemove = [];
    if (usedDiscountSlots) {
      usedDiscountSlots.forEach(usedDiscountSlot => {
        if (usedDiscountSlot.shouldBeTerminated) {
          discountIdsToRemove.push({
            id: usedDiscountSlot.id
          });
        }
      });
    }
    this.eventFacade.triggerEvent((0,_constants_etf_step_finished_const__WEBPACK_IMPORTED_MODULE_12__.createEtfStepViewed)(discountIdsToRemove, orderItemsToAddDiscounts));
  }
  setShowValidationNotification(show) {
    if (this.viewModel) {
      this.viewModel.showValidationNotification = show;
    }
  }
  static #_ = this.ɵfac = function EtfComponent_Factory(t) {
    return new (t || EtfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_5__.EtfFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: EtfComponent,
    selectors: [["tg-sales-etf"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 14,
    consts: [[1, "sales-checkout", "container--medium"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "horizontal-center-align"], [1, "col-sm-12", "sales-checkout"], [1, "stepper-page__body-inner", "p-0"], [1, "stepper-page__content--split", "container", "mobile-lines"], [1, "stepper-page__content-first", "flex-hide-until-md", "position--sticky--md", "position--top--md"], ["class", "stepper-page__content-first flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl", 4, "ngIf"], [1, "stepper-page__content-second"], ["id", "undefined", 1, "stepper-move"], [1, "text-flow", "text-flow--label", "stepper-page__title-label", "m-0"], [1, "sales-flow"], [1, "sales-flow__content__delivery", "mb--xxxg"], [1, "mobile-lines__discount"], ["class", "mb--s mt--s", 4, "ngIf"], [1, "mobile-lines__vertical-step-content", "m--auto"], [1, "mobile-lines__options", "display--flex", "flex-direction--column"], [1, "vertical-step-tracker", 3, "ngClass"], [1, "Container"], [4, "ngFor", "ngForOf"], [1, "whitespace", "whitespace--medium"], [1, "stepper-page__content-first", "flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl"], [1, "mb--s", "mt--s"], [1, "notification", "notification--errorfield"], [1, "icon-status-errorfield", "errorfield", 3, "innerHTML"], [4, "ngIf"], [3, "orderItemWithDiscount", "setOrderItemTerminationStateEvent", 4, "ngIf"], [3, "orderItemWithDiscount", "setOrderMarkedForDiscount", 4, "ngIf"], [3, "orderItemWithDiscount", "usedAndPendingDiscountSlotList", "applyEtfCancellationEvent", "cancelEtfSelectionEvent", 4, "ngIf"], [3, "orderItemWithDiscount", "showEtfOptionsEvent", 4, "ngIf"], [3, "orderItemWithDiscount", "setOrderItemTerminationStateEvent"], [3, "orderItemWithDiscount", "setOrderMarkedForDiscount"], [3, "orderItemWithDiscount", "usedAndPendingDiscountSlotList", "applyEtfCancellationEvent", "cancelEtfSelectionEvent"], [3, "orderItemWithDiscount", "showEtfOptionsEvent"]],
    template: function EtfComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div")(12, "div", 7)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, EtfComponent_div_15_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div")(20, "div", 14)(21, "div", 15)(22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, EtfComponent_div_23_Template, 4, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, EtfComponent_ng_container_28_Template, 4, 6, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "feat-etf");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "ng.sales-checkout.lbl.title.etf-buy-off"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 9, "ng.sales-checkout.lbl.sub-title.etf-buy-off"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.viewModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.viewModel == null ? null : ctx.viewModel.showValidationNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](29, 11, ctx.viewModel == null ? null : ctx.viewModel.discountItems));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_8__.InlineSVGDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_9__.TgFormsModule, _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__.OrderItemComponent, _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__.OrderItemWithEtfListComponent, _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__.OrderItemWithTerminationComponent, _sales_etf_ui__WEBPACK_IMPORTED_MODULE_11__.OrderItemMarkedAsNoDiscountComponent],
    encapsulation: 2
  });
};
EtfComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventFacade, _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_5__.EtfFacade])], EtfComponent);


/***/ }),

/***/ 98271:
/*!*************************************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/events/etf-step-loaded.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   etfStepLoaded: () => (/* binding */ etfStepLoaded)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/etf-event-step-key.const */ 55277);


const etfStepLoaded = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: _constants_etf_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.etfEventStepKey
  }
};

/***/ }),

/***/ 78482:
/*!********************************************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/interfaces/response-model.interface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 16141:
/*!****************************************************************************!*\
  !*** ./libs/sales/etf/feat-etf/src/lib/interfaces/view-model.interface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);










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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this._cloneSVG(SVGCacheService._cache.get(svgUrl)));
    }
    if (SVGCacheService._inProgressReqs.has(svgUrl)) {
      return SVGCacheService._inProgressReqs.get(svgUrl);
    }
    var req = this._http.get(svgUrl, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function () {
      SVGCacheService._inProgressReqs.delete(svgUrl);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (error) {
      SVGCacheService._inProgressReqs.delete(svgUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.message);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (svgText) {
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
    return new (t || SVGCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2));
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
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
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

/***/ })

}])
//# sourceMappingURL=libs_sales_etf_feat-etf_src_index_ts-_be5c1.js.map