(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_etf_ui_src_index_ts-_c1d60"],{

/***/ 45501:
/*!****************************************!*\
  !*** ./libs/sales/etf/ui/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfListComponent: () => (/* reexport safe */ _lib_etf_list_etf_list_component__WEBPACK_IMPORTED_MODULE_0__.EtfListComponent),
/* harmony export */   OrderItemComponent: () => (/* reexport safe */ _lib_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_1__.OrderItemComponent),
/* harmony export */   OrderItemMarkedAsNoDiscountComponent: () => (/* reexport safe */ _lib_order_item_marked_as_no_discount_order_item_marked_as_no_discount_component__WEBPACK_IMPORTED_MODULE_2__.OrderItemMarkedAsNoDiscountComponent),
/* harmony export */   OrderItemWithEtfListComponent: () => (/* reexport safe */ _lib_order_item_with_etf_list_order_item_with_etf_list_component__WEBPACK_IMPORTED_MODULE_3__.OrderItemWithEtfListComponent),
/* harmony export */   OrderItemWithTerminationComponent: () => (/* reexport safe */ _lib_order_item_with_termination_order_item_with_termination_component__WEBPACK_IMPORTED_MODULE_4__.OrderItemWithTerminationComponent),
/* harmony export */   PricePipe: () => (/* reexport safe */ _lib_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_5__.PricePipe)
/* harmony export */ });
/* harmony import */ var _lib_etf_list_etf_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/etf-list/etf-list.component */ 10495);
/* harmony import */ var _lib_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/order-item/order-item.component */ 7311);
/* harmony import */ var _lib_order_item_marked_as_no_discount_order_item_marked_as_no_discount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/order-item-marked-as-no-discount/order-item-marked-as-no-discount.component */ 92899);
/* harmony import */ var _lib_order_item_with_etf_list_order_item_with_etf_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/order-item-with-etf-list/order-item-with-etf-list.component */ 45023);
/* harmony import */ var _lib_order_item_with_termination_order_item_with_termination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/order-item-with-termination/order-item-with-termination.component */ 77694);
/* harmony import */ var _lib_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/pipes/price.pipe */ 943);







/***/ }),

/***/ 10495:
/*!******************************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/etf-list/etf-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfListComponent: () => (/* binding */ EtfListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/price.pipe */ 943);







const _c0 = a0 => ({
  etfEndDateOfContract: a0
});
const _c1 = a0 => ({
  terminationFee: a0
});
function EtfListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EtfListComponent_ng_container_0_ng_container_1_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const usedDiscountSlot_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.selectDiscountToTerminate(usedDiscountSlot_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 7)(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12)(12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17)(21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const usedDiscountSlot_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("--animation-delay: ", i_r3, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-etf-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "choice-", ctx_r1.orderItemWithDiscount.id, "-", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "radio-", ctx_r1.orderItemWithDiscount.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", (ctx_r1.orderItemWithDiscount.selectedEtfDiscountSlot == null ? null : ctx_r1.orderItemWithDiscount.selectedEtfDiscountSlot.id) === usedDiscountSlot_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", (ctx_r1.orderItemWithDiscount.selectedEtfDiscountSlot == null ? null : ctx_r1.orderItemWithDiscount.selectedEtfDiscountSlot.id) !== usedDiscountSlot_r2.id && usedDiscountSlot_r2.shouldBeTerminated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "choice-", ctx_r1.orderItemWithDiscount.id, "-", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usedDiscountSlot_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 15, "ng.sales-checkout.text.etf-end-date", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 18, usedDiscountSlot_r2.endDateOfContract, "dd.MM.yyyy"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 21, "ng.sales-checkout.text.etf-termination-fee", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, usedDiscountSlot_r2.etf.value))));
  }
}
function EtfListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EtfListComponent_ng_container_0_ng_container_1_Template, 26, 30, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.usedDiscountSlotList);
  }
}
class EtfListComponent {
  constructor() {
    this._usedDiscountSlotList = [];
    this.discountTerminationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  set usedDiscountSlotList(value) {
    this._usedDiscountSlotList = value?.filter(usedDiscountSlot => !!usedDiscountSlot.endDateOfContract) || [];
  }
  get usedDiscountSlotList() {
    return this._usedDiscountSlotList;
  }
  selectDiscountToTerminate(usedDiscountSlot) {
    this.discountTerminationSelected.next(usedDiscountSlot);
  }
  static #_ = this.ɵfac = function EtfListComponent_Factory(t) {
    return new (t || EtfListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EtfListComponent,
    selectors: [["tg-sales-etf-list"]],
    inputs: {
      usedDiscountSlotList: "usedDiscountSlotList",
      orderItemWithDiscount: "orderItemWithDiscount"
    },
    outputs: {
      discountTerminationSelected: "discountTerminationSelected"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", "value", "usedDiscountSlot", 1, "label-modifier-radio", 3, "id", "name", "checked", "click"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for"], [1, "label-modifier-content__header-text"], [1, "label-modifier-content__header"], [1, "icon-tick"], [1, "label-modifier-content__desc"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], [1, "display--flex", "flex-direction--row--md", "flex-direction--column"], [1, "pr--xxs", "mb--xxs--md", "text-weight--g"], [1, "text-flow", "label-modifier-content__body-range", "text--s"], [1, "text-weight--g"], [1, "text-flow", "label-modifier-content__body-range", "text--s", "ml--l--md"], [1, "label-modifier-content__timing"]],
    template: function EtfListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EtfListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItemWithDiscount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 92899:
/*!******************************************************************************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/order-item-marked-as-no-discount/order-item-marked-as-no-discount.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemMarkedAsNoDiscountComponent: () => (/* binding */ OrderItemMarkedAsNoDiscountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/price.pipe */ 943);







const _c0 = a0 => ({
  customerChosenDiscount: a0
});
function OrderItemMarkedAsNoDiscountComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemMarkedAsNoDiscountComponent_div_0_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectForDiscount(ctx_r1.orderItemWithDiscount));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-marked-as-no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderItemWithDiscount.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-marked-as-no-activate-discount-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, "ng.sales-checkout.lnk.etf-enable-discount", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx_r0.orderItemWithDiscount.rule.discountAmount.value))), " ");
  }
}
class OrderItemMarkedAsNoDiscountComponent {
  constructor() {
    this.setOrderMarkedForDiscount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectForDiscount(orderItemWithDiscount) {
    this.setOrderMarkedForDiscount.next(orderItemWithDiscount);
  }
  static #_ = this.ɵfac = function OrderItemMarkedAsNoDiscountComponent_Factory(t) {
    return new (t || OrderItemMarkedAsNoDiscountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderItemMarkedAsNoDiscountComponent,
    selectors: [["tg-sales-etf-order-item-marked-as-no-discount"]],
    inputs: {
      orderItemWithDiscount: "orderItemWithDiscount"
    },
    outputs: {
      setOrderMarkedForDiscount: "setOrderMarkedForDiscount"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mobile-line mobile-line--step", 4, "ngIf"], [1, "mobile-line", "mobile-line--step"], [1, "tracker--step__content"], [1, "display--block", "display--flex--md", "justify-content--between"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "text-flow", "text-flow--body", "text-weight--g"], [1, "header-accordion--link", "space-nowrap"], ["href", "javascript:void(0)", 1, "link", "link--unstyled", "text-weight--g", "text-flow", "text-flow--hyperlink", 3, "click"]],
    template: function OrderItemMarkedAsNoDiscountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderItemMarkedAsNoDiscountComponent_div_0_Template, 12, 11, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItemWithDiscount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45023:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/order-item-with-etf-list/order-item-with-etf-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemWithEtfListComponent: () => (/* binding */ OrderItemWithEtfListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _etf_list_etf_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etf-list/etf-list.component */ 10495);







function OrderItemWithEtfListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "div", 9)(11, "div", 10)(12, "tg-sales-etf-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("discountTerminationSelected", function OrderItemWithEtfListComponent_div_0_Template_tg_sales_etf_list_discountTerminationSelected_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectDiscountToTerminate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemWithEtfListComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.applyEtfCancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemWithEtfListComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.cancelEtfSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-with-etf-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderItemWithDiscount.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderItemWithDiscount", ctx_r0.orderItemWithDiscount)("usedDiscountSlotList", ctx_r0.usedAndPendingDiscountSlotList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "ng.sales-checkout.text.etf-want-to-apply-changes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-list-apply-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "ng.sales-checkout.btn.etf-apply-discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-list-cancel-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, "ng.sales-checkout.btn.etf-cancel-discount"), " ");
  }
}
class OrderItemWithEtfListComponent {
  constructor() {
    this.cancelEtfSelectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.applyEtfCancellationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  applyEtfCancellation() {
    if (this.orderItemWithDiscount && this.selectedDiscountToTerminate) {
      this.applyEtfCancellationEvent.next({
        orderItemWithDiscount: this.orderItemWithDiscount,
        usedDiscountSlot: this.selectedDiscountToTerminate
      });
    }
  }
  cancelEtfSelection() {
    if (this.orderItemWithDiscount) {
      this.cancelEtfSelectionEvent.next(this.orderItemWithDiscount);
    }
  }
  selectDiscountToTerminate(usedDiscountSlot) {
    this.selectedDiscountToTerminate = usedDiscountSlot;
  }
  static #_ = this.ɵfac = function OrderItemWithEtfListComponent_Factory(t) {
    return new (t || OrderItemWithEtfListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderItemWithEtfListComponent,
    selectors: [["tg-sales-etf-order-item-with-etf-list"]],
    inputs: {
      usedAndPendingDiscountSlotList: "usedAndPendingDiscountSlotList",
      orderItemWithDiscount: "orderItemWithDiscount"
    },
    outputs: {
      cancelEtfSelectionEvent: "cancelEtfSelectionEvent",
      applyEtfCancellationEvent: "applyEtfCancellationEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mobile-line mobile-line--step", 4, "ngIf"], [1, "mobile-line", "mobile-line--step"], [1, "tracker--step__content"], [1, "display--block", "display--flex--md", "justify-content--between"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "text-flow", "text-flow--body", "text-weight--g"], [1, "tracker--step__content", "mb--m"], [1, "text--xm", "font-weight--bold"], [1, "mt-20"], [1, "label-modifier-box", "card-mini"], [3, "orderItemWithDiscount", "usedDiscountSlotList", "discountTerminationSelected"], [1, "text--s", "text-weight--r", "mt--l"], [1, "mt-20", "overlay__section__content__action"], [1, "button", "button--primary", "mr-10", "mb--n--sm", "mb--s", 3, "click"], [1, "button", "button--secondary", 3, "click"]],
    template: function OrderItemWithEtfListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderItemWithEtfListComponent_div_0_Template, 23, 15, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItemWithDiscount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _etf_list_etf_list_component__WEBPACK_IMPORTED_MODULE_3__.EtfListComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77694:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/order-item-with-termination/order-item-with-termination.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemWithTerminationComponent: () => (/* binding */ OrderItemWithTerminationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/price.pipe */ 943);







const _c0 = a0 => ({
  customerChosenDiscount: a0
});
const _c1 = a0 => ({
  deviceName: a0
});
const _c2 = a0 => ({
  terminationFee: a0
});
function OrderItemWithTerminationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemWithTerminationComponent_div_0_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setOrderItemTerminationState(ctx_r1.orderItemWithDiscount));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 4)(16, "div", 5)(17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 4)(27, "div", 5)(28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-with-cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderItemWithDiscount.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "ng.sales-checkout.text.etf-edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, "ng.sales-checkout.text.etf-month-contract", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, ctx_r0.orderItemWithDiscount.rule.discountAmount.value))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 14, "ng.sales-checkout.price.etf-customer-chosen-discount", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, ctx_r0.orderItemWithDiscount.rule.discountAmount.value))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 19, "ng.sales-checkout.text.etf-termination-fee-for-used-discount", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx_r0.orderItemWithDiscount.selectedEtfDiscountSlot.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 22, "ng.sales-checkout.price.etf-price", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 25, ctx_r0.orderItemWithDiscount.selectedEtfDiscountSlot.etf.value))), " ");
  }
}
class OrderItemWithTerminationComponent {
  constructor() {
    this.showEtfOptionsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  setOrderItemTerminationState(orderItemWithDiscount) {
    this.showEtfOptionsEvent.next(orderItemWithDiscount);
  }
  static #_ = this.ɵfac = function OrderItemWithTerminationComponent_Factory(t) {
    return new (t || OrderItemWithTerminationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderItemWithTerminationComponent,
    selectors: [["tg-sales-etf-order-item-with-termination"]],
    inputs: {
      orderItemWithDiscount: "orderItemWithDiscount"
    },
    outputs: {
      showEtfOptionsEvent: "showEtfOptionsEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mobile-line mobile-line--step", 4, "ngIf"], [1, "mobile-line", "mobile-line--step"], [1, "tracker--step__content"], [1, "display--block", "display--flex--md", "justify-content--between"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "text-flow", "text-flow--body", "text-weight--g"], [1, "header-accordion--link", "space-nowrap"], ["href", "javascript:void(0)", 1, "link", "link--unstyled", "text-weight--g", "text-flow", "text-flow--hyperlink", 3, "click"], [1, "m-0", "mt-20"], [1, "tracker--step__content", "mb--m"], [1, "mt-20"], [1, "header-accordion", "header-accordion"], [1, "text-flow", "text-flow--body", "text-weight--g", "space-nowrap"], [1, "header-accordion", "header-accordion", "mt-20"]],
    template: function OrderItemWithTerminationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderItemWithTerminationComponent_div_0_Template, 35, 35, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItemWithDiscount && ctx.orderItemWithDiscount.selectedEtfDiscountSlot);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7311:
/*!**********************************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/order-item/order-item.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemComponent: () => (/* binding */ OrderItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);






function OrderItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemComponent_div_0_Template_label_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setOrderItemTerminationState(ctx_r1.orderItemWithDiscount, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemComponent_div_0_Template_label_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setOrderItemTerminationState(ctx_r3.orderItemWithDiscount, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderItemWithDiscount.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "ng.sales-checkout.text.etf-buy-off-message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-etf-yes-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 8, "ng.sales-checkout.lbl.etf-terminate-contract-yes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-etf-order-item-etf-no-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, "ng.sales-checkout.lbl.etf-terminate-contract-no"), " ");
  }
}
class OrderItemComponent {
  constructor() {
    this.setOrderItemTerminationStateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  setOrderItemTerminationState(orderItemWithDiscount, buyWithDiscount) {
    this.setOrderItemTerminationStateEvent.next({
      orderItemWithDiscount,
      buyWithDiscount
    });
  }
  static #_ = this.ɵfac = function OrderItemComponent_Factory(t) {
    return new (t || OrderItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderItemComponent,
    selectors: [["tg-sales-etf-order-item"]],
    inputs: {
      orderItemWithDiscount: "orderItemWithDiscount"
    },
    outputs: {
      setOrderItemTerminationStateEvent: "setOrderItemTerminationStateEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mobile-line mobile-line--step", 4, "ngIf"], [1, "mobile-line", "mobile-line--step"], [1, "tracker--step__content"], [1, "display--block", "display--flex--md", "justify-content--between"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "text-flow", "text-flow--body", "text-weight--g"], [1, "m-0", "mt-20"], [1, "tracker--step__content", "mb--m"], [1, "text--xm", "font-weight--bold"], [1, "mt-20"], [1, "text--s", "text-weight--r", "mt--l"], [1, "form-group", "mt-30"], [1, "mb--m"], [1, "form__radio--button-group"], [1, "form__radio--button", "mobile-lines__form-button-height"], ["id", "btn-yes", "name", "radio-buttons-group", "type", "radio", "value", "yes", 1, "form__radio--button__input"], ["for", "btn-yes", 1, "form__radio--button__label", "text-weight--g", 3, "click"], ["id", "btn-no", "name", "radio-buttons-group", "type", "radio", "value", "no", 1, "form__radio--button__input"], ["for", "btn-no", 1, "form__radio--button__label", "text-weight--g", 3, "click"]],
    template: function OrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderItemComponent_div_0_Template, 27, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItemWithDiscount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 943:
/*!*******************************************************!*\
  !*** ./libs/sales/etf/ui/src/lib/pipes/price.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricePipe: () => (/* binding */ PricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PricePipe {
  transform(price) {
    const newPrice = Number(price);
    return newPrice.toFixed(2).replace('.', ',');
  }
  static #_ = this.ɵfac = function PricePipe_Factory(t) {
    return new (t || PricePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "price",
    type: PricePipe,
    pure: true,
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_etf_ui_src_index_ts-_c1d60.js.map