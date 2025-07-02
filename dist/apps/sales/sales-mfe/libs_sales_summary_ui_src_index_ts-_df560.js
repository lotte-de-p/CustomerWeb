(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_summary_ui_src_index_ts-_df560"],{

/***/ 60025:
/*!********************************************!*\
  !*** ./libs/sales/summary/ui/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliverInfoComponent: () => (/* reexport safe */ _lib_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_1__.DeliverInfoComponent),
/* harmony export */   DepreciationTableComponent: () => (/* reexport safe */ _lib_footer_depreciation_table_depreciation_table_component__WEBPACK_IMPORTED_MODULE_7__.DepreciationTableComponent),
/* harmony export */   ErrorNotificationComponent: () => (/* reexport safe */ _lib_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_8__.ErrorNotificationComponent),
/* harmony export */   FooterComponent: () => (/* reexport safe */ _lib_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent),
/* harmony export */   InvoiceInfoComponent: () => (/* reexport safe */ _lib_invoice_info_invoice_info_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceInfoComponent),
/* harmony export */   NotificationComponent: () => (/* reexport safe */ _lib_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__.NotificationComponent),
/* harmony export */   OrderDataComponent: () => (/* reexport safe */ _lib_order_data_order_data_component__WEBPACK_IMPORTED_MODULE_3__.OrderDataComponent),
/* harmony export */   OrderTotalsComponent: () => (/* reexport safe */ _lib_order_data_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_4__.OrderTotalsComponent),
/* harmony export */   PersonalInfoComponent: () => (/* reexport safe */ _lib_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_0__.PersonalInfoComponent)
/* harmony export */ });
/* harmony import */ var _lib_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/personal-info/personal-info.component */ 34775);
/* harmony import */ var _lib_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/delivery-info/delivery-info.component */ 45216);
/* harmony import */ var _lib_invoice_info_invoice_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/invoice-info/invoice-info.component */ 39973);
/* harmony import */ var _lib_order_data_order_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/order-data/order-data.component */ 33345);
/* harmony import */ var _lib_order_data_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/order-data/order-totals/order-totals.component */ 43829);
/* harmony import */ var _lib_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/notification/notification.component */ 44432);
/* harmony import */ var _lib_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/footer/footer.component */ 33672);
/* harmony import */ var _lib_footer_depreciation_table_depreciation_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/footer/depreciation-table/depreciation-table.component */ 35676);
/* harmony import */ var _lib_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/error-notification/error-notification.component */ 44478);










/***/ }),

/***/ 45216:
/*!********************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/delivery-info/delivery-info.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliverInfoComponent: () => (/* binding */ DeliverInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification/notification.component */ 44432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function DeliverInfoComponent_tg_sales_summary_notification_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tg-sales-summary-notification", 10);
  }
  if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("notification", notification_r3);
  }
}
function DeliverInfoComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" /", ctx_r1.deliveryInfo == null ? null : ctx_r1.deliveryInfo.address == null ? null : ctx_r1.deliveryInfo.address.subHouseNumber, "");
  }
}
function DeliverInfoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" /", ctx_r2.deliveryInfo == null ? null : ctx_r2.deliveryInfo.address == null ? null : ctx_r2.deliveryInfo.address.box, "");
  }
}
class DeliverInfoComponent {
  static #_ = this.ɵfac = function DeliverInfoComponent_Factory(t) {
    return new (t || DeliverInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DeliverInfoComponent,
    selectors: [["tg-sales-summary-delivery-info"]],
    inputs: {
      deliveryInfo: "deliveryInfo",
      notifications: "notifications"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 19,
    consts: [[1, "shipping-info-section"], [1, "sales-display-info", "align-items--baseline"], [1, "m-0"], [3, "notification", 4, "ngFor", "ngForOf"], ["data-cs-mask", "", 1, "sales-display-info", "pb--l", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey"], [1, "sales-display-info__content"], [1, "sales-display-info__content__row", "mb--xs"], [1, "icon-house", "icon-md", "sales-display-info__content__row__icon"], [1, "sales-display-info__content__row__description"], [4, "ngIf"], [3, "notification"]],
    template: function DeliverInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DeliverInfoComponent_tg_sales_summary_notification_5_Template, 1, 1, "tg-sales-summary-notification", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DeliverInfoComponent_ng_container_15_Template, 2, 1, "ng-container", 9)(16, DeliverInfoComponent_ng_container_16_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 17, "ng.sales-checkout.text.review-shipping-info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "delivery-info-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.personalInfo == null ? null : ctx.deliveryInfo.personalInfo.firstname, " ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.personalInfo == null ? null : ctx.deliveryInfo.personalInfo.lastname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "delivery-info-address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.street, " ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.houseNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.subHouseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.postalCode, " ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.municipality, ", ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.address == null ? null : ctx.deliveryInfo.address.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "delivery-info-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.personalInfo == null ? null : ctx.deliveryInfo.personalInfo.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "delivery-info-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.deliveryInfo == null ? null : ctx.deliveryInfo.personalInfo == null ? null : ctx.deliveryInfo.personalInfo.email, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43217:
/*!********************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/enums/styling-option.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylingOption: () => (/* binding */ StylingOption),
/* harmony export */   TotalsType: () => (/* binding */ TotalsType)
/* harmony export */ });
var StylingOption;
(function (StylingOption) {
  StylingOption["yellow"] = "yellow";
})(StylingOption || (StylingOption = {}));
var TotalsType;
(function (TotalsType) {
  TotalsType["totals"] = "totals";
  TotalsType["subTotals"] = "subTotals";
})(TotalsType || (TotalsType = {}));

/***/ }),

/***/ 44478:
/*!******************************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/error-notification/error-notification.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorNotificationComponent: () => (/* binding */ ErrorNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function ErrorNotificationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, notification_r1.message), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class ErrorNotificationComponent {
  static #_ = this.ɵfac = function ErrorNotificationComponent_Factory(t) {
    return new (t || ErrorNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ErrorNotificationComponent,
    selectors: [["tg-sales-summary-error-notification"]],
    inputs: {
      notifications: "notifications"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "notification notification--errorfield notification--errorfield--flow", "data-cy", "app-message-flow", 4, "ngFor", "ngForOf"], ["data-cy", "app-message-flow", 1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon-error-shape"], [3, "innerHTML"]],
    template: function ErrorNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ErrorNotificationComponent_div_0_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 35676:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/footer/depreciation-table/depreciation-table.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepreciationTableComponent: () => (/* binding */ DepreciationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);






function DepreciationTableComponent_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28)(1, "div", 24)(2, "div", 25)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "steps-tracker-", item_r1.monthIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-depreciation-item-cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20AC ", item_r1.remainingCost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-depreciation-item-month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.monthIndex + 1);
  }
}
class DepreciationTableComponent {
  constructor() {
    this.isSoho = false;
    this.closeOverlayClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.depreciationCostItems = [];
  }
  closeOverlay() {
    this.closeOverlayClickedEvent.next(true);
  }
  ngOnInit() {
    if (this.depreciationItem) {
      let remainingMonths = this.depreciationItem?.duration;
      let monthsAlreadyPayed = 1;
      const monthlyReduction = this.depreciationItem?.price / this.depreciationItem?.duration;
      while (remainingMonths > 0) {
        this.depreciationCostItems.push({
          monthIndex: this.depreciationItem?.duration - remainingMonths,
          remainingCost: Math.round(this.depreciationItem?.price - monthlyReduction * monthsAlreadyPayed)
        });
        monthsAlreadyPayed++;
        remainingMonths--;
      }
    }
  }
  static #_ = this.ɵfac = function DepreciationTableComponent_Factory(t) {
    return new (t || DepreciationTableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DepreciationTableComponent,
    selectors: [["tg-sales-summary-depreciation-table"]],
    inputs: {
      depreciationItem: "depreciationItem",
      isSoho: "isSoho"
    },
    outputs: {
      closeOverlayClickedEvent: "closeOverlayClickedEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 18,
    consts: [[1, "cdk-overlay-container"], [1, "cdk-overlay-backdrop", "cdk-overlay-backdrop-noop-animation", "cdk-overlay-dark-backdrop", "cdk-overlay-backdrop-showing"], ["dir", "ltr", 1, "cdk-global-overlay-wrapper", 2, "justify-content", "center", "align-items", "center"], ["id", "cdk-overlay-0", 1, "cdk-overlay-pane", 2, "max-width", "80vw", "position", "static"], ["aria-hidden", "true", "tabindex", "0", 1, "cdk-visually-hidden", "cdk-focus-trap-anchor"], [1, "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], [1, "overlay", "sales-overlay--depreciation-table"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "overlay__section__content--page"], ["href", "javascript:void(0)", 1, "display--inline", 3, "click"], [1, "overlay__section__content__close", "icon-close"], [1, "overlay__section__content__title"], [1, "overlay__section__content__sub-title"], [1, "overlay__section__content__description"], [1, "text-align--center", "text-weight--g", "depreciation-table--title", "text--xl"], [1, "depreciation-table--wrapper", "background-white"], [1, "depreciation-table__heading", "text-align--left", "mb-30"], [1, "text-align--right", "mb-10", "text--xs", "text--m--md", "text-weight--g", "display--block", "mt--xxs", "mt--n--md", "ml--n", "ml--xxs--md"], [1, "depreciation-table__info", "background-very-light-grey"], [1, "horizontal-step-tracker-centered", "text-align--center"], [1, "steps-tracker", "steps-tracker--with-label", "width--full", "m-0"], [1, "steps-tracker__step", "steps-tracker--with-text"], [1, "steps-tracker__step__content"], [1, "steps-tracker__step__content__left", "text--s", "text-weight--g", "text-align--center"], [1, "steps-tracker__step__content__right", "text--s", "mt--n", "mt--xl--md", "text-weight--g", "fl-left"], ["class", "steps-tracker__step horizontal-center-align center-align__column steps-tracker__step--completed", 3, "id", 4, "ngFor", "ngForOf"], [1, "steps-tracker__step", "horizontal-center-align", "center-align__column", "steps-tracker__step--completed", 3, "id"], [1, "steps-tracker__step__content__icon", "text-align--center", "m--m", "background-shape--squarcle"], [1, "icon-tick"], [1, "steps-tracker__step__content__right", "text--s", "text-align--center"]],
    template: function DepreciationTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepreciationTableComponent_Template_a_click_11_listener() {
          return ctx.closeOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13)(14, "div", 14)(15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17)(20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "ul", 22)(29, "li", 23)(30, "div", 24)(31, "div", 25)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26)(36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DepreciationTableComponent_li_39_Template, 10, 5, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-depreciation-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-depreciation-close-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-vat-indication" + (ctx.isSoho ? ".tbf" : "")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 14, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-amount-left"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 16, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-month"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.depreciationCostItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 33672:
/*!******************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/footer/footer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);






function FooterComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_li_9_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.contractSummaryLinkClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "ng.sales-checkout.contract-summary-pre.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-toc-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "ng.sales-checkout.contract-summary-link.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "ng.sales-checkout.contract-summary-post.text"), " ");
  }
}
function FooterComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_li_10_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const depreciationItem_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.depreciationItemClicked(depreciationItem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const depreciationItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", depreciationItem_r4 == null ? null : depreciationItem_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-depreciation-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.sales-checkout.shopping-cart.lbl.depreciation-table-link"), " ");
  }
}
class FooterComponent {
  constructor() {
    this.depreciationItemClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.overlayCloseClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contractSummaryLinkClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.termsAndConditionsLinkClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  depreciationItemClicked(depreciationItem) {
    this.depreciationItemClickedEvent.next(depreciationItem);
  }
  contractSummaryLinkClicked() {
    this.contractSummaryLinkClickedEvent.next(true);
  }
  termsAndConditionsLinkClicked() {
    this.termsAndConditionsLinkClickedEvent.next(true);
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["tg-sales-summary-footer"]],
    inputs: {
      depreciationItems: "depreciationItems",
      contractSummaryRequired: "contractSummaryRequired"
    },
    outputs: {
      depreciationItemClickedEvent: "depreciationItemClickedEvent",
      overlayCloseClickedEvent: "overlayCloseClickedEvent",
      contractSummaryLinkClickedEvent: "contractSummaryLinkClickedEvent",
      termsAndConditionsLinkClickedEvent: "termsAndConditionsLinkClickedEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 18,
    consts: [[1, "sales-cart__section", "sales-cart__order-info", "mt-10"], [1, "px--n", "py--l", "background-white"], [1, "sales-cart-row__content"], [1, "sales-cart__order-info__title", "color-shade_64", "mb--m"], [1, "icon", "icon-information-shape", "mr--s"], [1, "font--caption-bold"], [1, "color-shade_64", "font--caption", "ml--l"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "order-summary-terms-and-conditions", "href", "javascript:void(0)", 1, "link", "inline", 3, "click"], ["href", "javascript:void(0)", 1, "link", "inline", 3, "click"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_li_9_Template, 8, 10, "li", 7)(10, FooterComponent_li_10_Template, 5, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_17_listener() {
          return ctx.termsAndConditionsLinkClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "ng.sales-checkout.shopping-cart.lbl.important-order-information-section.title"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contractSummaryRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.depreciationItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "ng.hardware-checkout.shopping-cart.lbl.recall-right.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, "ng.hardware-checkout.shopping-cart.lbl.terms-and-conditions-pre.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-summary-terms-and-conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, "ng.hardware-checkout.shopping-cart.lbl.terms-and-conditions-link.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, "ng.hardware-checkout.shopping-cart.lbl.terms-and-conditions-post.text"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 39973:
/*!******************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/invoice-info/invoice-info.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceInfoComponent: () => (/* binding */ InvoiceInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function InvoiceInfoComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/", ctx_r0.invoiceInfo == null ? null : ctx_r0.invoiceInfo.subHouseNumber, "");
  }
}
function InvoiceInfoComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/", ctx_r1.invoiceInfo == null ? null : ctx_r1.invoiceInfo.box, "");
  }
}
class InvoiceInfoComponent {
  static #_ = this.ɵfac = function InvoiceInfoComponent_Factory(t) {
    return new (t || InvoiceInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InvoiceInfoComponent,
    selectors: [["tg-sales-summary-invoice-info"]],
    inputs: {
      invoiceInfo: "invoiceInfo"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 11,
    consts: [[1, "sales-display-info"], [1, "m-0"], [1, "sales-display-info", "pb--l", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey"], [1, "sales-display-info__content"], [1, "sales-display-info__content__row", "mb--xs"], [1, "icon-md", "sales-display-info__content__row__icon", "icon-euro"], ["data-cs-mask", "", 1, "sales-display-info__content__row__description"], [4, "ngIf"]],
    template: function InvoiceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InvoiceInfoComponent_ng_container_11_Template, 2, 1, "ng-container", 7)(12, InvoiceInfoComponent_ng_container_12_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, "ng.sales-checkout.lbl.billing-address-overlay.your-address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "invoice-info-address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.street, " ", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.houseNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.subHouseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.postalCode, " ", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.municipality, ", ", ctx.invoiceInfo == null ? null : ctx.invoiceInfo.country, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 44432:
/*!******************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/notification/notification.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function NotificationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "summary-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r0.notification.message));
  }
}
class NotificationComponent {
  static #_ = this.ɵfac = function NotificationComponent_Factory(t) {
    return new (t || NotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["tg-sales-summary-notification"]],
    inputs: {
      notification: "notification"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "notification notification--info mb-20", 4, "ngIf"], [1, "notification", "notification--info", "mb-20"], [1, "icon", "icon-information-shape"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.notification);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 33345:
/*!**************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/order-data/order-data.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDataComponent: () => (/* binding */ OrderDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-items/order-items.component */ 63727);
/* harmony import */ var _order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-totals/order-totals.component */ 43829);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/styling-option.enum */ 43217);









function OrderDataComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.all-prices-inclusive-vat"), " ");
  }
}
function OrderDataComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.all-prices-exclusive-vat"), " ");
  }
}
function OrderDataComponent_tg_sales_summary_order_totals_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-sales-summary-order-totals", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prices", ctx_r2.prices.subTotals)("type", ctx_r2.TotalsType.subTotals);
  }
}
function OrderDataComponent_tg_sales_summary_order_totals_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-sales-summary-order-totals", 18);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prices", ctx_r3.prices.totals);
  }
}
class OrderDataComponent {
  constructor() {
    this.type = _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_5__.TotalsType;
    this.TotalsType = _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_5__.TotalsType;
    this.orderButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onOrderClick() {
    this.orderButtonClicked.emit();
  }
  static #_ = this.ɵfac = function OrderDataComponent_Factory(t) {
    return new (t || OrderDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrderDataComponent,
    selectors: [["tg-sales-summary-order-data"]],
    inputs: {
      orderItems: "orderItems",
      prices: "prices"
    },
    outputs: {
      orderButtonClicked: "orderButtonClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 12,
    consts: [[1, "sales-cart", "m-0"], [1, "background-white", "display--flex", "align-items--center", "justify-content--between", "p--l", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey"], [1, "heading--nomargin"], ["class", "font--caption color-black", 4, "ngIf"], [1, "sales-cart__section", "sales-cart-row--shadow", "mb-0"], [3, "viewModel"], [1, "mt-10"], [1, "width--full", "color-black", "pb-0"], [3, "prices", "type", 4, "ngIf"], [3, "prices", 4, "ngIf"], [1, "shopping-cart-footer", "border--top--light-grey", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey", "p--l", "mb-10", "background-lemon"], [1, "order-totals-footer__action", "mr-0", "ml-0"], ["type", "button", 1, "button", "button--primary", "button--width-auto", 3, "click"], [2, "display", "none"], ["action", "", "enctype", "application/x-www-form-urlencoded", "method", "POST"], ["name", "submit", "type", "submit"], [1, "font--caption", "color-black"], [3, "prices", "type"], [3, "prices"]],
    template: function OrderDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDataComponent_p_5_Template, 3, 3, "p", 3)(6, OrderDataComponent_p_6_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tg-sales-summary-order-items", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderDataComponent_tg_sales_summary_order_totals_11_Template, 1, 2, "tg-sales-summary-order-totals", 8)(12, OrderDataComponent_tg_sales_summary_order_totals_12_Template, 1, 1, "tg-sales-summary-order-totals", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDataComponent_Template_button_click_15_listener() {
          return ctx.onOrderClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "ng.sales-checkout.order-confirmation.your-order.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prices == null ? null : ctx.prices.vatInclusive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.prices == null ? null : ctx.prices.vatInclusive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewModel", ctx.orderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prices && ctx.prices.subTotals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "order-footer-submit-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, "ng.sales-checkout.order-button.order"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_2__.OrderItemsComponent, _order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_3__.OrderTotalsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43829:
/*!*****************************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/order-data/order-totals/order-totals.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderTotalsComponent: () => (/* binding */ OrderTotalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/summary-price.pipe */ 81655);
/* harmony import */ var _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/styling-option.enum */ 43217);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/price.pipe */ 40981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








function OrderTotalsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.subtotals"), " ");
  }
}
function OrderTotalsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.totals"), " ");
  }
}
function OrderTotalsComponent_div_0_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.all-prices-exclusive-vat"), " ");
  }
}
function OrderTotalsComponent_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.shopping-cart.lbl.all-prices-inclusive-vat"), " ");
  }
}
function OrderTotalsComponent_div_0_ng_container_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 34)(10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "summaryPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const priceItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 4, priceItem_r7.labelKey), " ", priceItem_r7.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "order-summary-monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 6, priceItem_r7.price, priceItem_r7.isMonthly), " ");
  }
}
function OrderTotalsComponent_div_0_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrderTotalsComponent_div_0_ng_container_45_div_1_Template, 13, 9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.prices == null ? null : ctx_r5.prices.etfPrices);
  }
}
const _c0 = (a0, a1) => ({
  "background-lemon": a0,
  "background-white": a1
});
function OrderTotalsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OrderTotalsComponent_div_0_div_2_Template, 3, 3, "div", 3)(3, OrderTotalsComponent_div_0_div_3_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, OrderTotalsComponent_div_0_p_5_Template, 3, 3, "p", 5)(6, OrderTotalsComponent_div_0_p_6_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14)(17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "summaryPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18)(23, "div", 4)(24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20)(28, "div", 10)(29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "summaryPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22)(33, "div", 7)(34, "div", 8)(35, "div", 9)(36, "div", 10)(37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "span", 23)(39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 14)(42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "summaryPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, OrderTotalsComponent_div_0_ng_container_45_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](27, _c0, ctx_r0.type === ctx_r0.TotalsType.totals, ctx_r0.type === ctx_r0.TotalsType.subTotals));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.TotalsType.subTotals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.TotalsType.totals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.TotalsType.subTotals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.TotalsType.totals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 15, "ng.sales-checkout.shopping-cart.lbl.upfront-payment.tln"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "order-summary-secure-delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 17, ctx_r0.prices.upfrontCost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 19, "ng.sales-checkout.shopping-cart.lbl.hardware-cvp-delivery"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "order-summary-home-delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 21, ctx_r0.prices.deliveryCost), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 23, "ng.sales-checkout.shopping-cart.lbl.one-off-payment-next-invoice.tfb"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "order-summary-one-time-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 25, ctx_r0.prices.etfTotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.prices.etfPrices);
  }
}
class OrderTotalsComponent {
  constructor() {
    this.type = _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_3__.TotalsType.totals;
    this.TotalsType = _enums_styling_option_enum__WEBPACK_IMPORTED_MODULE_3__.TotalsType;
  }
  static #_ = this.ɵfac = function OrderTotalsComponent_Factory(t) {
    return new (t || OrderTotalsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: OrderTotalsComponent,
    selectors: [["tg-sales-summary-order-totals"]],
    inputs: {
      prices: "prices",
      isVatInclusive: "isVatInclusive",
      type: "type"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__.PricePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mt-10", 3, "ngClass", 4, "ngIf"], [1, "mt-10", 3, "ngClass"], [1, "display--flex", "align-items--center", "justify-content--between", "p--l"], ["class", "sales-cart-row__content__section__title color-black font-weight--bold", 4, "ngIf"], [1, "display--flex"], ["class", "font--caption color-black pr--xs pt--xxxs", 4, "ngIf"], [1, "width--full", "color-black", "border--t--r", "border-width--t--r", "border-style--t--solid", "border-color--t--light-grey", "upfront-payment", "p--m"], [1, "sales-cart-row__content", "mt--xxs"], [1, "display--flex", "justify-content--between"], [1, "sales-cart-row__content__section"], [1, "display--flex", "align-items--center"], [1, "text-flow--h6", "text-weight--l", "display--flex"], [1, "icon", "icon-sm", "mr--xs", "icon-euro-check"], [1, "text-flow--h6", "text-weight--l", 3, "innerHTML"], [1, "sales-cart-row__content__section", "right"], [1, "color-black", "text-flow--h6", "text-weight--l"], [1, "sales-cart-row__content", "sales-cart-row__content--small", "mt--xs"], [1, "display--flex", "flex-direction--row", "justify-content--between"], [1, "sales-cart-row__content__section", "ml-25"], [1, "text--m--md", "text--s", "text-weight--m"], [1, "sales-cart-row__content__section", "right", "ml--m"], [1, "text--m--md", "text--s", "text-weight--m", "ml--xxxs"], [1, "width--full", "color-black", "border--t--r", "border-width--t--r", "border-style--t--solid", "border-color--t--light-grey", "one-off-payment-for-next-month-vat-inclusiv", "p--m"], [1, "icon", "icon-sm", "mr--xs", "icon-euro"], [4, "ngIf"], [1, "sales-cart-row__content__section__title", "color-black", "font-weight--bold"], [1, "font--caption", "color-black", "pr--xs", "pt--xxxs"], ["class", "sales-cart-row-border-radius sales-cart-row-left width--full color-black py--s", 4, "ngFor", "ngForOf"], [1, "sales-cart-row-border-radius", "sales-cart-row-left", "width--full", "color-black", "py--s"], [1, "p-0", "width--full", "color-black", "py--s"], [1, "sales-cart-row__content"], [1, "width--full"], [1, "display--flex", "justify-content--between", "width--full"], [1, "ml--xl"], [1, "align-items--center", "display--flex"], [1, "color-black", "ml--m"]],
    template: function OrderTotalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OrderTotalsComponent_div_0_Template, 46, 30, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.prices);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_2__.SummaryPricePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87166:
/*!******************************************************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/order-items/order-item-with-discount/order-item-with-discount.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemWithDiscountComponent: () => (/* binding */ OrderItemWithDiscountComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/price.pipe */ 40981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/summary-price.pipe */ 81655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function OrderItemWithDiscountComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.orderItem == null ? null : ctx_r0.orderItem.mainImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class OrderItemWithDiscountComponent {
  static #_ = this.ɵfac = function OrderItemWithDiscountComponent_Factory(t) {
    return new (t || OrderItemWithDiscountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OrderItemWithDiscountComponent,
    selectors: [["tg-sales-summary-order-item-with-discount"]],
    inputs: {
      orderItem: "orderItem"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 32,
    vars: 16,
    consts: [[1, "sales-cart-row-border-radius", "sales-cart-row-left", "sales-cart-row"], [1, "p-0"], [1, "sales-cart-row__contents", "mb--m"], [1, "align-items--center", "sales-cart-row__content__section--discount", "mt--m", "mb-0", "px--l--md", "px--xs", "pb--m"], ["alt", "", "class", "icon icon-md text-weight--l hw-image", 3, "src", 4, "ngIf"], [1, "width--full", "pt--l"], [1, "display--flex", "justify-content--between", "width--full"], [1, "sales-cart-row__content__section__title"], [1, "font-body-small"], [1, "sales-cart-row__content__section__price", "align-items--top", "display--flex"], [1, "text-decoration--line-through", "sales-cart-row-right", "pr--xxxs", "opacity--small-transparency", "font--body-small", "font--caption", "pb--xxxs", "pb--n--md", "align-self--center", "space-nowrap"], [1, "sales-cart-row__content__section", "right"], [1, "align-items--center", "display--flex", "space-nowrap", "sales-cart-row__content__section__price"], [1, "color-black", "text-weight--l"], [1, "space-nowrap"], [1, "display--flex", "justify-content--between", "mt--xxs", "mb--n--md", "mb--xs"], [1, "sales-cart-row__content__section__price", "pl-0"], [1, "text--m--md", "text--xs", "sales-cart-row__content__discount", "text-weight--xl", "ml-0"], [1, "sales-cart-row__content__section__price", "align-items--center", "display--flex"], [1, "sales-cart-row__content__discount", "text--m--md", "text--xs", "sales-cart-row__content__section", "right", "mt--l", "ml--s", "mt-0"], [1, "space--nowrap"], ["alt", "", 1, "icon", "icon-md", "text-weight--l", "hw-image", 3, "src"]],
    template: function OrderItemWithDiscountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrderItemWithDiscountComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "summaryPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "summaryPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div")(23, "div", 15)(24, "div", 16)(25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "summaryPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.orderItem == null ? null : ctx.orderItem.mainImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-with-discount-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.orderItem == null ? null : ctx.orderItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-with-discount-price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, ctx.orderItem == null ? null : ctx.orderItem.prices == null ? null : ctx.orderItem.prices.total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-with-discount-discounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 12, ctx.orderItem == null ? null : ctx.orderItem.prices == null ? null : ctx.orderItem.prices.discounted));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-with-discount-discount-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.orderItem == null ? null : ctx.orderItem.discount == null ? null : ctx.orderItem.discount.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 14, ctx.orderItem == null ? null : ctx.orderItem.discount == null ? null : ctx.orderItem.discount.price), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_3__.SummaryPricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 74069:
/*!**************************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/order-items/order-item/order-item.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemComponent: () => (/* binding */ OrderItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/price.pipe */ 40981);
/* harmony import */ var _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/summary-price.pipe */ 81655);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function OrderItemComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.orderItem == null ? null : ctx_r0.orderItem.mainImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class OrderItemComponent {
  static #_ = this.ɵfac = function OrderItemComponent_Factory(t) {
    return new (t || OrderItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OrderItemComponent,
    selectors: [["tg-sales-summary-order-item"]],
    inputs: {
      orderItem: "orderItem"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 7,
    consts: [[1, "sales-cart-row-border-radius", "sales-cart-row-left", "sales-cart-row"], [1, "p-0"], [1, "sales-cart-row__contents", "mb--m"], [1, "align-items--center", "sales-cart-row__content__section--discount", "mt--m", "mb-0", "px--l--md", "px--xs", "pb--m"], ["alt", "", "class", "icon icon-md text-weight--l hw-image", 3, "src", 4, "ngIf"], [1, "width--full", "pt--l"], [1, "display--flex", "justify-content--between", "width--full"], [1, "sales-cart-row__content__section__title"], [1, "font-body-small"], [1, "sales-cart-row__content__section__price", "align-items--top", "display--flex"], [1, "sales-cart-row__content__section", "right"], [1, "align-items--center", "display--flex", "space-nowrap", "sales-cart-row__content__section__price"], [1, "color-black", "text-weight--l"], [1, "space-nowrap"], ["alt", "", 1, "icon", "icon-md", "text-weight--l", "hw-image", 3, "src"]],
    template: function OrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrderItemComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "summaryPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.orderItem == null ? null : ctx.orderItem.mainImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-without-discount-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.orderItem == null ? null : ctx.orderItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "order-item-without-discount-price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 5, ctx.orderItem == null ? null : ctx.orderItem.prices == null ? null : ctx.orderItem.prices.total));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _pipes_summary_price_pipe__WEBPACK_IMPORTED_MODULE_2__.SummaryPricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 63727:
/*!****************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/order-items/order-items.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemsComponent: () => (/* binding */ OrderItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-item/order-item.component */ 74069);
/* harmony import */ var _order_item_with_discount_order_item_with_discount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-item-with-discount/order-item-with-discount.component */ 87166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





function OrderItemsComponent_ng_container_2_tg_sales_summary_order_item_with_discount_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tg-sales-summary-order-item-with-discount", 4);
  }
  if (rf & 2) {
    const orderItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("orderItem", orderItem_r1);
  }
}
function OrderItemsComponent_ng_container_2_tg_sales_summary_order_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tg-sales-summary-order-item", 4);
  }
  if (rf & 2) {
    const orderItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("orderItem", orderItem_r1);
  }
}
function OrderItemsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrderItemsComponent_ng_container_2_tg_sales_summary_order_item_with_discount_1_Template, 1, 1, "tg-sales-summary-order-item-with-discount", 3)(2, OrderItemsComponent_ng_container_2_tg_sales_summary_order_item_2_Template, 1, 1, "tg-sales-summary-order-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const orderItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", orderItem_r1 && orderItem_r1.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", orderItem_r1 && !orderItem_r1.discount);
  }
}
class OrderItemsComponent {
  static #_ = this.ɵfac = function OrderItemsComponent_Factory(t) {
    return new (t || OrderItemsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OrderItemsComponent,
    selectors: [["tg-sales-summary-order-items"]],
    inputs: {
      viewModel: "viewModel"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [["id", "sticky-sales-cart__section"], [1, "sales-cart-row--shadow-review"], [4, "ngFor", "ngForOf"], [3, "orderItem", 4, "ngIf"], [3, "orderItem"]],
    template: function OrderItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OrderItemsComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.viewModel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_1__.OrderItemComponent, _order_item_with_discount_order_item_with_discount_component__WEBPACK_IMPORTED_MODULE_2__.OrderItemWithDiscountComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34775:
/*!********************************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/personal-info/personal-info.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalInfoComponent: () => (/* binding */ PersonalInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class PersonalInfoComponent {
  static #_ = this.ɵfac = function PersonalInfoComponent_Factory(t) {
    return new (t || PersonalInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PersonalInfoComponent,
    selectors: [["tg-sales-summary-personal-info"]],
    inputs: {
      personalInfo: "personalInfo"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 8,
    consts: [[1, "mt--m", "mt--m--md"], [1, "sales-display-info", "align-items--baseline"], [1, "m-0"], ["data-cs-mask", "", 1, "sales-display-info", "pb--l", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey"], [1, "sales-display-info__content"], [1, "sales-display-info__content__row", "mb--xs"], [1, "icon-md", "sales-display-info__content__row__icon", "icon-user"], [1, "sales-display-info__content__row__description"], [1, "icon-email", "icon-md", "sales-display-info__content__row__icon"]],
    template: function PersonalInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "ng.sales-checkout.text.review-personal-info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "personal-info-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.personalInfo == null ? null : ctx.personalInfo.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.personalInfo == null ? null : ctx.personalInfo.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "personal-info-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.personalInfo == null ? null : ctx.personalInfo.email, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40981:
/*!***********************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/pipes/price.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricePipe: () => (/* binding */ PricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PricePipe {
  transform(price) {
    let priceAsNumber = 0;
    if (price) {
      priceAsNumber = parseFloat(price.value);
    }
    return priceAsNumber.toFixed(2).replace('.', ',');
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

/***/ }),

/***/ 81655:
/*!*******************************************************************!*\
  !*** ./libs/sales/summary/ui/src/lib/pipes/summary-price.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryPricePipe: () => (/* binding */ SummaryPricePipe)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _price_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price.pipe */ 40981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class SummaryPricePipe {
  constructor(translatePipe, pricePipe) {
    this.translatePipe = translatePipe;
    this.pricePipe = pricePipe;
  }
  transform(priceValue, isMonthly = false) {
    let label = 'ng.sales-checkout.shopping-cart.lbl.price-one-time';
    if (isMonthly) {
      label = 'ng.sales-checkout.shopping-cart.lbl.price-monthly';
    }
    return this.translatePipe.transform(label, {
      value: this.pricePipe.transform(priceValue)
    });
  }
  static #_ = this.ɵfac = function SummaryPricePipe_Factory(t) {
    return new (t || SummaryPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_price_pipe__WEBPACK_IMPORTED_MODULE_1__.PricePipe, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
    name: "summaryPrice",
    type: SummaryPricePipe,
    pure: true,
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_summary_ui_src_index_ts-_df560.js.map