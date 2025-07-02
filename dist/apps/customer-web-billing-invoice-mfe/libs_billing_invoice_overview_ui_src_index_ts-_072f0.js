(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_billing_invoice_overview_ui_src_index_ts-_072f0"],{

/***/ 29533:
/*!*******************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BRAND_TELENET: () => (/* reexport safe */ _lib_billing_overview_no_billing_accounts_billing_overview_no_billing_accounts_component__WEBPACK_IMPORTED_MODULE_15__.BRAND_TELENET),
/* harmony export */   BillingOverviewAmountComponent: () => (/* reexport safe */ _lib_billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_1__.BillingOverviewAmountComponent),
/* harmony export */   BillingOverviewCurrentSummaryComponent: () => (/* reexport safe */ _lib_billing_overview_current_summary_billing_overview_current_summary_component__WEBPACK_IMPORTED_MODULE_0__.BillingOverviewCurrentSummaryComponent),
/* harmony export */   BillingOverviewDownloadComponent: () => (/* reexport safe */ _lib_billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_2__.BillingOverviewDownloadComponent),
/* harmony export */   BillingOverviewDownloadErrorDialogComponent: () => (/* reexport safe */ _lib_billing_overview_download_error_dialog_billing_overview_download_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BillingOverviewDownloadErrorDialogComponent),
/* harmony export */   BillingOverviewExportComponent: () => (/* reexport safe */ _lib_billing_overview_export_billing_overview_export_component__WEBPACK_IMPORTED_MODULE_14__.BillingOverviewExportComponent),
/* harmony export */   BillingOverviewIconComponent: () => (/* reexport safe */ _lib_billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_4__.BillingOverviewIconComponent),
/* harmony export */   BillingOverviewLoadingComponent: () => (/* reexport safe */ _lib_billing_overview_loading_billing_overview_loading_component__WEBPACK_IMPORTED_MODULE_5__.BillingOverviewLoadingComponent),
/* harmony export */   BillingOverviewNoBillingAccountsComponent: () => (/* reexport safe */ _lib_billing_overview_no_billing_accounts_billing_overview_no_billing_accounts_component__WEBPACK_IMPORTED_MODULE_15__.BillingOverviewNoBillingAccountsComponent),
/* harmony export */   BillingOverviewNoBillsComponent: () => (/* reexport safe */ _lib_billing_overview_no_bills_billing_overview_no_bills_component__WEBPACK_IMPORTED_MODULE_6__.BillingOverviewNoBillsComponent),
/* harmony export */   BillingOverviewPayComponent: () => (/* reexport safe */ _lib_billing_overview_pay_billing_overview_pay_component__WEBPACK_IMPORTED_MODULE_8__.BillingOverviewPayComponent),
/* harmony export */   BillingOverviewPaymentMethodChangedComponent: () => (/* reexport safe */ _lib_billing_overview_payment_method_changed_billing_overview_payment_method_changed_component__WEBPACK_IMPORTED_MODULE_18__.BillingOverviewPaymentMethodChangedComponent),
/* harmony export */   BillingOverviewSkeletonComponent: () => (/* reexport safe */ _lib_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_16__.BillingOverviewSkeletonComponent),
/* harmony export */   BillingOverviewUnpaidStatusComponent: () => (/* reexport safe */ _lib_billing_overview_unpaid_status_billing_overview_unpaid_status_component__WEBPACK_IMPORTED_MODULE_7__.BillingOverviewUnpaidStatusComponent),
/* harmony export */   PaidInvoiceComponent: () => (/* reexport safe */ _lib_billing_overview_paid_invoice_billing_overview_paid_invoice_component__WEBPACK_IMPORTED_MODULE_10__.PaidInvoiceComponent),
/* harmony export */   PaymentEncouragementComponent: () => (/* reexport safe */ _lib_billing_overview_payment_encouragement_billing_overview_payment_encouragement_component__WEBPACK_IMPORTED_MODULE_11__.PaymentEncouragementComponent),
/* harmony export */   ToDescriptionsPipe: () => (/* reexport safe */ _lib_pipes_to_descriptions_pipe__WEBPACK_IMPORTED_MODULE_17__.ToDescriptionsPipe),
/* harmony export */   TreatmentMessageComponent: () => (/* reexport safe */ _lib_billing_overview_treatment_message_billing_overview_treatment_message_component__WEBPACK_IMPORTED_MODULE_12__.TreatmentMessageComponent),
/* harmony export */   UnpaidInvoiceComponent: () => (/* reexport safe */ _lib_billing_overview_unpaid_invoice_billing_overview_unpaid_invoice_component__WEBPACK_IMPORTED_MODULE_9__.UnpaidInvoiceComponent),
/* harmony export */   UnpaidStatusNotificationComponent: () => (/* reexport safe */ _lib_billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_13__.UnpaidStatusNotificationComponent)
/* harmony export */ });
/* harmony import */ var _lib_billing_overview_current_summary_billing_overview_current_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/billing-overview-current-summary/billing-overview-current-summary.component */ 92537);
/* harmony import */ var _lib_billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/billing-overview-amount/billing-overview-amount.component */ 2413);
/* harmony import */ var _lib_billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/billing-overview-download/billing-overview-download.component */ 44835);
/* harmony import */ var _lib_billing_overview_download_error_dialog_billing_overview_download_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/billing-overview-download-error-dialog/billing-overview-download-error-dialog.component */ 20110);
/* harmony import */ var _lib_billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/billing-overview-icon/billing-overview-icon.component */ 2878);
/* harmony import */ var _lib_billing_overview_loading_billing_overview_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/billing-overview-loading/billing-overview-loading.component */ 31806);
/* harmony import */ var _lib_billing_overview_no_bills_billing_overview_no_bills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/billing-overview-no-bills/billing-overview-no-bills.component */ 8590);
/* harmony import */ var _lib_billing_overview_unpaid_status_billing_overview_unpaid_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/billing-overview-unpaid-status/billing-overview-unpaid-status.component */ 42223);
/* harmony import */ var _lib_billing_overview_pay_billing_overview_pay_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/billing-overview-pay/billing-overview-pay.component */ 67896);
/* harmony import */ var _lib_billing_overview_unpaid_invoice_billing_overview_unpaid_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/billing-overview-unpaid-invoice/billing-overview-unpaid-invoice.component */ 22996);
/* harmony import */ var _lib_billing_overview_paid_invoice_billing_overview_paid_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/billing-overview-paid-invoice/billing-overview-paid-invoice.component */ 88602);
/* harmony import */ var _lib_billing_overview_payment_encouragement_billing_overview_payment_encouragement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/billing-overview-payment-encouragement/billing-overview-payment-encouragement.component */ 74432);
/* harmony import */ var _lib_billing_overview_treatment_message_billing_overview_treatment_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/billing-overview-treatment-message/billing-overview-treatment-message.component */ 52489);
/* harmony import */ var _lib_billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component */ 37342);
/* harmony import */ var _lib_billing_overview_export_billing_overview_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/billing-overview-export/billing-overview-export.component */ 16029);
/* harmony import */ var _lib_billing_overview_no_billing_accounts_billing_overview_no_billing_accounts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/billing-overview-no-billing-accounts/billing-overview-no-billing-accounts.component */ 50532);
/* harmony import */ var _lib_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/skeleton/skeleton.component */ 14704);
/* harmony import */ var _lib_pipes_to_descriptions_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/pipes/to-descriptions.pipe */ 68455);
/* harmony import */ var _lib_billing_overview_payment_method_changed_billing_overview_payment_method_changed_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/billing-overview-payment-method-changed/billing-overview-payment-method-changed.component */ 3837);




















/***/ }),

/***/ 2413:
/*!***************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-amount/billing-overview-amount.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewAmountComponent: () => (/* binding */ BillingOverviewAmountComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/invoice-amount.pipe */ 85423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);








const _c0 = a0 => ({
  amount: a0
});
function BillingOverviewAmountComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "invoiceAmount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "ng.billing-overview.outstanding-debt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 4, ctx_r0.invoiceAmount, ctx_r0.locale))), " ");
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_6__["default"]);
class BillingOverviewAmountComponent {
  get amount() {
    if (this.outstandingDebt === 0) return this.invoiceAmount;
    return this.outstandingDebt;
  }
  get isPartiallyPaid() {
    return this.invoiceAmount > this.outstandingDebt && this.outstandingDebt > 0;
  }
  static #_ = this.ɵfac = function BillingOverviewAmountComponent_Factory(t) {
    return new (t || BillingOverviewAmountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BillingOverviewAmountComponent,
    selectors: [["tg-billing-overview-amount"]],
    inputs: {
      invoiceAmount: "invoiceAmount",
      outstandingDebt: "outstandingDebt",
      locale: "locale"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [["data-testid", "billing-overview-amount"], ["data-testid", "billing-overview-amount-value", 1, "heading--3", "my--n"], ["class", "font--body-small color-shade_64", "data-testid", "billing-overview-amount-remaining", 4, "ngIf"], ["data-testid", "billing-overview-amount-remaining", 1, "font--body-small", "color-shade_64"]],
    template: function BillingOverviewAmountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "invoiceAmount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BillingOverviewAmountComponent_div_4_Template, 4, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 2, ctx.amount, ctx.locale), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPartiallyPaid);
      }
    },
    dependencies: [_pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_2__.InvoiceAmountPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 92537:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-current-summary/billing-overview-current-summary.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewCurrentSummaryComponent: () => (/* binding */ BillingOverviewCurrentSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__);









function BillingOverviewCurrentSummaryComponent_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10)(2, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "wink-paragraph", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const description_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-summary-method-description-text-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", description_r2.value, " ");
  }
}
function BillingOverviewCurrentSummaryComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7)(2, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BillingOverviewCurrentSummaryComponent_ng_container_4_ng_container_5_Template, 6, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const description_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-summary-method-description-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, description_r2.caption), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", description_r2.value);
  }
}
function BillingOverviewCurrentSummaryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "wink-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15)(4, "wink-paragraph", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-payment-method-change-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r1.updatedPaymentMethodNotification), " ");
  }
}
class BillingOverviewCurrentSummaryComponent {
  constructor() {
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
    this.datalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__.InvoiceOverviewDatalayerService);
  }
  redirectToManageBillingSettings() {
    if (this.type === 'DELIVERY_METHOD') {
      this.datalayerService.sendChangeDeliveryMethod();
    } else {
      this.datalayerService.sendChangePaymentMethod();
    }
    this.urlService.redirectTo(this.billingSettingsUrl);
  }
  get updatedPaymentMethodNotification() {
    const notificationMap = {
      [_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__.PaymentMethod.MANUAL + _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__.UPDATED_PAYMENT_METHOD]: 'ng.billing-overview.lbl.payment-changed-to-manual-notification',
      [_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__.PaymentMethod.DIRECT_DEBIT + _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_5__.UPDATED_PAYMENT_METHOD]: 'ng.billing-overview.lbl.payment-changed-to-direct-debit-notification'
    };
    return notificationMap[this.updatedPaymentMethod] || '';
  }
  get isPaymentMethodUpdated() {
    return this.updatedPaymentMethod !== '' && this.type === 'PAYMENT_METHOD';
  }
  static #_ = this.ɵfac = function BillingOverviewCurrentSummaryComponent_Factory(t) {
    return new (t || BillingOverviewCurrentSummaryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewCurrentSummaryComponent,
    selectors: [["tg-billing-overview-current-summary"]],
    inputs: {
      headerText: "headerText",
      type: "type",
      descriptions: "descriptions",
      billingSettingsUrl: "billingSettingsUrl",
      updatedPaymentMethod: "updatedPaymentMethod"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 8,
    consts: [[1, "row", "m--n"], [1, "col-9", "p--n"], ["appearance", "caption", "size", "regular", 1, "hydrated", "font--caption-regular", "color-shade_72", "word-break--ellipsis"], [4, "ngFor", "ngForOf"], ["class", "display--flex flex-direction--row align-items--center", 4, "ngIf"], [1, "col-3", "text-align--right", "p--n"], ["type", "button", "appearance", "secondary", "size", "sm", "width", "none", "status", "none", 3, "text", "click"], [1, "display--flex", "align-items--center"], [1, "heading--nomargin", "col--grow"], [4, "ngIf"], [1, "px--xxxs"], [1, "heading--nomargin", "bullet"], ["appearance", "body", "size", "small", 1, "hydrated", "font--caption-regular", "color-shade_72", "word-break--ellipsis"], [1, "display--flex", "flex-direction--row", "align-items--center"], ["icon", "hourglass", "appearance", "default", "size", "md", 1, "border-color--r--shade_16"], [1, "pt--xxxs"]],
    template: function BillingOverviewCurrentSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "wink-paragraph", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BillingOverviewCurrentSummaryComponent_ng_container_4_Template, 6, 5, "ng-container", 3)(5, BillingOverviewCurrentSummaryComponent_div_5_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "wink-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewCurrentSummaryComponent_Template_wink_button_click_7_listener() {
          return ctx.redirectToManageBillingSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-summary-method-header-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.descriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPaymentMethodUpdated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "ng.billing-overview.lbl.manage-billing-settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-summary-manage-billing-settings");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkButton, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkParagraph, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkIcon],
    styles: [".bullet[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L3VpL3NyYy9saWIvYmlsbGluZy1vdmVydmlldy1jdXJyZW50LXN1bW1hcnkvYmlsbGluZy1vdmVydmlldy1jdXJyZW50LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5idWxsZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20110:
/*!*********************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-download-error-dialog/billing-overview-download-error-dialog.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewDownloadErrorDialogComponent: () => (/* binding */ BillingOverviewDownloadErrorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class BillingOverviewDownloadErrorDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function BillingOverviewDownloadErrorDialogComponent_Factory(t) {
    return new (t || BillingOverviewDownloadErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BillingOverviewDownloadErrorDialogComponent,
    selectors: [["tg-billing-overview-download-error-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 9,
    consts: [["data-testid", "billing-overview-download-error-dialog", 1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content"], [1, "overlay__section__content__close", "icon-close", 3, "click"], [1, "overlay__section__content__title", "heading--5", "heading--nomargin"], [1, "overlay__section__content__description"], [1, "mt--l"], ["data-testid", "billing-overview-download-error-dialog-close", "element", "button", "type", "button", "appearance", "primary", "size", "md", "width", "full", "status", "none", 3, "text", "click"]],
    template: function BillingOverviewDownloadErrorDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BillingOverviewDownloadErrorDialogComponent_Template_div_click_4_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "wink-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BillingOverviewDownloadErrorDialogComponent_Template_wink_button_click_12_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "ng.billing-overview.download.overlay.error-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "ng.billing-overview.download.overlay.error-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, "ng.billing-overview.download.overlay.btn-cancel"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 44835:
/*!*******************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-download/billing-overview-download.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewDownloadComponent: () => (/* binding */ BillingOverviewDownloadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_overview_download_error_dialog_billing_overview_download_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../billing-overview-download-error-dialog/billing-overview-download-error-dialog.component */ 20110);
/* harmony import */ var _billing_overview_loading_billing_overview_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../billing-overview-loading/billing-overview-loading.component */ 31806);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ 46778);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);









function BillingOverviewDownloadComponent_wink_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wink-icon", 2);
  }
}
function BillingOverviewDownloadComponent_tg_billing_overview_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-loading");
  }
}
class BillingOverviewDownloadComponent {
  constructor() {
    this.loading = false;
    this.invoiceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.InvoiceOverviewService);
    this.datalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.InvoiceOverviewDatalayerService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog);
  }
  downloadDocument() {
    this.loading = true;
    this.datalayerService.sendDownloadInvoice();
    this.invoiceService.downloadDocument(this.invoice).subscribe({
      next: response => {
        const fileName = `${this.invoice.invoiceNumber}.pdf`;
        file_saver__WEBPACK_IMPORTED_MODULE_7___default().saveAs(response, fileName);
      },
      error: () => {
        this.loading = false;
        this.dialog.open(_billing_overview_download_error_dialog_billing_overview_download_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__.BillingOverviewDownloadErrorDialogComponent);
      },
      complete: () => this.loading = false
    });
  }
  static #_ = this.ɵfac = function BillingOverviewDownloadComponent_Factory(t) {
    return new (t || BillingOverviewDownloadComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewDownloadComponent,
    selectors: [["tg-billing-overview-download"]],
    inputs: {
      invoice: "invoice"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["class", "cursor--pointer", "data-testid", "billing-overview-download", "appearance", "default", "icon", "download", "size", "md", 4, "ngIf"], [4, "ngIf"], ["data-testid", "billing-overview-download", "appearance", "default", "icon", "download", "size", "md", 1, "cursor--pointer"]],
    template: function BillingOverviewDownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewDownloadComponent_wink_icon_1_Template, 1, 0, "wink-icon", 0)(2, BillingOverviewDownloadComponent_tg_billing_overview_loading_2_Template, 1, 0, "tg-billing-overview-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_1__.WinkIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _billing_overview_loading_billing_overview_loading_component__WEBPACK_IMPORTED_MODULE_6__.BillingOverviewLoadingComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 16029:
/*!***************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-export/billing-overview-export.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewExportComponent: () => (/* binding */ BillingOverviewExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 46778);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);










const _c0 = a0 => ({
  exportType: a0
});
function BillingOverviewExportComponent_wink_notification_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-notification", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "wink-title", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "ng.billing-overview.export-failed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.error)));
  }
}
class BillingOverviewExportComponent {
  constructor() {
    this.invoiceOverviewService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__.InvoiceOverviewService);
    this.datalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__.InvoiceOverviewDatalayerService);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageService);
    this.showMenu = false;
  }
  open(event) {
    event.stopPropagation();
    this.showMenu = true;
  }
  close() {
    this.showMenu = false;
  }
  export(exportType) {
    this.downloading = exportType;
    this.error = undefined;
    this.datalayerService.sendExportInvoices(exportType);
    this.invoiceOverviewService.exportInvoices(this.billingAccountNumber, exportType, this.languageService.getLanguage()).subscribe({
      next: response => {
        const fileName = `export.${exportType}`;
        this.downloading = undefined;
        file_saver__WEBPACK_IMPORTED_MODULE_6___default().saveAs(response, fileName);
      },
      error: () => {
        this.error = exportType;
        this.downloading = undefined;
      }
    });
  }
  static #_ = this.ɵfac = function BillingOverviewExportComponent_Factory(t) {
    return new (t || BillingOverviewExportComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewExportComponent,
    selectors: [["tg-billing-overview-export"]],
    inputs: {
      billingAccountNumber: "billingAccountNumber"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 26,
    consts: [["data-testid", "billing-overview-export", 1, "display--flex", "justify-content--between", "p--m", "cursor--pointer", "invoice-overview-export", "align-items--center", 3, "click"], [1, "display--flex", "gap--m", "align-items--center"], ["icon", "download", "appearance", "secondary"], [1, ""], ["icon", "chevron-right"], ["padding", "px--xs", "data-testid", "billing-overview-export-content", 3, "showMenu", "closeMenu"], [1, "mb--xl"], ["appearance", "error", "has-close-icon", "false", 4, "ngIf"], [1, "heading--4", "mt--n"], [1, "color-shade_64"], [1, "heading--5", "mb--l"], [1, "display--flex", "gap--l", "flex-grow--sm"], [1, "export-button", "flex--1"], ["data-testid", "billing-overview-export-pdf", "appearance", "secondary", "icon", "file-pdf", "size", "md", "iconPosition", "left", "width", "full", 3, "status", "text", "click"], ["data-testid", "billing-overview-export-csv", "width", "full", "appearance", "secondary", "icon", "file-xls", 3, "status", "text", "click"], [1, "display--flex", "mt--l", "justify-content--start--md", "justify-content--center"], ["data-testid", "billing-overview-export-zip", "appearance", "tertiary", 3, "status", "text", "click"], ["appearance", "error", "has-close-icon", "false"], ["slot", "heading", "html-tag", "h6", "spacing-y", "none", "data-testid", "billing-overview-export-failure", 3, "text"]],
    template: function BillingOverviewExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewExportComponent_Template_div_click_1_listener($event) {
          return ctx.open($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "wink-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "wink-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tg-slide-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function BillingOverviewExportComponent_Template_tg_slide_menu_closeMenu_9_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BillingOverviewExportComponent_wink_notification_11_Template, 3, 6, "wink-notification", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "wink-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewExportComponent_Template_wink_button_click_23_listener() {
          return ctx.export("pdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12)(26, "wink-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewExportComponent_Template_wink_button_click_26_listener() {
          return ctx.export("csv");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15)(29, "wink-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewExportComponent_Template_wink_button_click_29_listener() {
          return ctx.export("zip");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "ng.billing-overview.export-description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "ng.billing-overview.export-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, "ng.billing-overview.export-explanation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 18, "ng.billing-overview.export-as"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.downloading === "pdf" ? "loading" : undefined)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 20, "ng.billing-overview.export-pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.downloading === "csv" ? "loading" : undefined)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 22, "ng.billing-overview.export-csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.downloading === "zip" ? "loading" : undefined)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 24, "ng.billing-overview.export-all"));
      }
    },
    dependencies: [_billing_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SlideMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkIcon, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkButton, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkNotification, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkTitle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: [".invoice-overview-export[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n  background-color: #ffffff;\n}\n.invoice-overview-export[_ngcontent-%COMP%]:hover {\n  background-color: rgba(41, 29, 24, 0.04);\n}\n.invoice-overview-export[_ngcontent-%COMP%]:active {\n  background-color: rgba(41, 29, 24, 0.08);\n}\n\n.export-button[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n@media only screen and (max-width: 768px) {\n  .flex--1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L3VpL3NyYy9saWIvYmlsbGluZy1vdmVydmlldy1leHBvcnQvYmlsbGluZy1vdmVydmlldy1leHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLHdDQUFBO0FBQ0o7QUFFRTtFQUNFLHdDQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxPQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLW92ZXJ2aWV3LWV4cG9ydCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzI5MWQxOCwgMDQlKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyOTFkMTgsIDA4JSk7XG4gIH1cbn1cblxuLmV4cG9ydC1idXR0b24ge1xuICBtaW4td2lkdGg6IDE3MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mbGV4LS0xIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2878:
/*!***********************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-icon/billing-overview-icon.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewIconComponent: () => (/* binding */ BillingOverviewIconComponent)
/* harmony export */ });
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class BillingOverviewIconComponent {
  get icon() {
    return this.invoiceAmount >= 0 ? 'bill' : 'euro-arrow-counterclockwise';
  }
  static #_ = this.ɵfac = function BillingOverviewIconComponent_Factory(t) {
    return new (t || BillingOverviewIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BillingOverviewIconComponent,
    selectors: [["tg-billing-overview-icon"]],
    inputs: {
      invoiceAmount: "invoiceAmount"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["data-testid", "billing-overview-invoice-icon", "appearance", "secondary", "size", "lg", 3, "icon"]],
    template: function BillingOverviewIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "wink-icon", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("icon", ctx.icon);
      }
    },
    dependencies: [_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__.WinkIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 31806:
/*!*****************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-loading/billing-overview-loading.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewLoadingComponent: () => (/* binding */ BillingOverviewLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class BillingOverviewLoadingComponent {
  static #_ = this.ɵfac = function BillingOverviewLoadingComponent_Factory(t) {
    return new (t || BillingOverviewLoadingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewLoadingComponent,
    selectors: [["tg-billing-overview-loading"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [["data-testid", "billing-overview-loading", 1, "loading--circular"]],
    template: function BillingOverviewLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: [".loading--circular[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-width: 0.4rem;\n  border-color: var(--color-primary);\n  border-right-color: #eeeded;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L3VpL3NyYy9saWIvYmlsbGluZy1vdmVydmlldy1sb2FkaW5nL2JpbGxpbmctb3ZlcnZpZXctbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy0tY2lyY3VsYXIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItd2lkdGg6IDAuNHJlbTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZWVlZGVkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50532:
/*!*****************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-no-billing-accounts/billing-overview-no-billing-accounts.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BRAND_TELENET: () => (/* binding */ BRAND_TELENET),
/* harmony export */   BillingOverviewNoBillingAccountsComponent: () => (/* binding */ BillingOverviewNoBillingAccountsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








function BillingOverviewNoBillingAccountsComponent_wink_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewNoBillingAccountsComponent_wink_button_10_Template_wink_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.redirectToConsultInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ng.billing-overview.no-billing-accounts-link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-no-billing-accounts-consult-invoice-link");
  }
}
const BRAND_TELENET = 'TELENET';
class BillingOverviewNoBillingAccountsComponent {
  constructor() {
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  }
  redirectToConsultInvoice() {
    this.urlService.redirectTo(this.homePageLink);
  }
  static #_ = this.ɵfac = function BillingOverviewNoBillingAccountsComponent_Factory(t) {
    return new (t || BillingOverviewNoBillingAccountsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewNoBillingAccountsComponent,
    selectors: [["tg-billing-overview-no-billing-accounts"]],
    inputs: {
      homePageLink: "homePageLink",
      isTelenetCustomer: "isTelenetCustomer"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 14,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], ["brandImage", "", "loading", "lazy", 1, "hydrated", 3, "isTelenet", "img", "telenetImg", "baseImg"], [1, "text-align--center", "mt--l"], [1, "heading--nomargin"], ["appearance", "body", "size", "regular", 1, "text-align--center", "mt--xxs", "mb--m"], ["type", "button", "appearance", "primary", "size", "md", "status", "none", "class", "width--full width--auto--md", "width", "full", 3, "text", "click", 4, "ngIf"], [1, "whitespace", "whitespace--medium"], ["type", "button", "appearance", "primary", "size", "md", "status", "none", "width", "full", 1, "width--full", "width--auto--md", 3, "text", "click"]],
    template: function BillingOverviewNoBillingAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "wink-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "wink-paragraph", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BillingOverviewNoBillingAccountsComponent_wink_button_10_Template, 2, 4, "wink-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isTelenet", ctx.isTelenetCustomer)("img", "/content/dam/www-telenet-touch/nl/dfd/no-billing-accounts.svg")("telenetImg", "/content/dam/www-telenet-touch/nl/dfd/no-billing-accounts.svg")("baseImg", "/content/dam/www-telenet-touch/nl/dfd/no-billing-accounts-base.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-no-billing-accounts-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-no-billing-accounts-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "ng.billing-overview.no-billing-accounts-header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-no-billing-accounts-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "ng.billing-overview.no-billing-accounts-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homePageLink);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkImg, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkButton, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkParagraph, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.BrandImageDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8590:
/*!*******************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-no-bills/billing-overview-no-bills.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewNoBillsComponent: () => (/* binding */ BillingOverviewNoBillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/invoice-amount.pipe */ 85423);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);










const _c0 = a0 => ({
  amount: a0
});
function BillingOverviewNoBillsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "invoiceAmount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, "ng.billing-overview.no-unpaid.reimbursement", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 4, ctx_r0.amount, ctx_r0.locale))), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__["default"]);
class BillingOverviewNoBillsComponent {
  get amount() {
    return Math.abs(this.totalAmount);
  }
  static #_ = this.ɵfac = function BillingOverviewNoBillsComponent_Factory(t) {
    return new (t || BillingOverviewNoBillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BillingOverviewNoBillsComponent,
    selectors: [["tg-billing-overview-no-bills"]],
    inputs: {
      totalAmount: "totalAmount",
      telenetImg: "telenetImg",
      baseImg: "baseImg",
      isTelenet: "isTelenet",
      text: "text",
      locale: "locale"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 6,
    consts: [["data-testid", "billing-overview-no-bills", 1, "background-white", "mt--xxl", "p--l", "display--flex", "flex-direction--column", "align-items--center"], ["brandImage", "", 3, "isTelenet", "img", "telenetImg", "baseImg"], [1, "heading--4", "mt--m"], ["class", "color-notification--success--light", "data-testid", "billing-overview-no-bills-reimbursement", 4, "ngIf"], ["data-testid", "billing-overview-no-bills-reimbursement", 1, "color-notification--success--light"], ["size", "md", 1, "mr--xxs", "icon-md", "icon-information-shape-filled"], [3, "innerHTML"]],
    template: function BillingOverviewNoBillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "wink-img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BillingOverviewNoBillsComponent_div_4_Template, 5, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isTelenet", ctx.isTelenet)("img", ctx.telenetImg)("telenetImg", ctx.telenetImg)("baseImg", ctx.baseImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalAmount < 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_2__.InvoiceAmountPipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkImg, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.BrandImageDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 88602:
/*!***************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-paid-invoice/billing-overview-paid-invoice.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaidInvoiceComponent: () => (/* binding */ PaidInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../billing-overview-amount/billing-overview-amount.component */ 2413);
/* harmony import */ var _billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../billing-overview-download/billing-overview-download.component */ 44835);
/* harmony import */ var _billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../billing-overview-icon/billing-overview-icon.component */ 2878);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);







const _c0 = a0 => ({
  "color-notification--success--light": a0
});
class PaidInvoiceComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageService);
  }
  isReimbursement(invoiceAmount) {
    return invoiceAmount < 0;
  }
  get locale() {
    return this.languageService.getLocaleString();
  }
  static #_ = this.ɵfac = function PaidInvoiceComponent_Factory(t) {
    return new (t || PaidInvoiceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaidInvoiceComponent,
    selectors: [["tg-billing-paid-invoice"]],
    inputs: {
      invoice: "invoice"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 14,
    consts: [["data-testid", "billing-overview-paid-invoice", 1, "cursor--pointer", 3, "click"], [1, "display--flex", "justify-content--between"], [1, "display--flex", "align-items--center", "py--l", "gap--m"], [1, "display--flex", "gap--m"], [1, "invoice-icon"], [3, "invoiceAmount"], [1, "display--flex", "flex-direction--column", "justify-content--center"], ["data-testid", "billing-overview-invoice-date"], [1, "display--flex", "align-items--center", "display--flex", "gap--xs"], [3, "ngClass", "invoiceAmount", "outstandingDebt", "locale"], [3, "invoice"], ["download", ""]],
    template: function PaidInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaidInvoiceComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.downloadDocument());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-billing-overview-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tg-billing-overview-amount", 9)(12, "tg-billing-overview-download", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoiceAmount", ctx.invoice.invoiceAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 7, ctx.invoice.invoiceDate, "d MMMM", "+0200", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isReimbursement(ctx.invoice.invoiceAmount)))("invoiceAmount", ctx.invoice.invoiceAmount)("outstandingDebt", 0)("locale", ctx.locale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoice", ctx.invoice);
      }
    },
    dependencies: [_billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_2__.BillingOverviewAmountComponent, _billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_3__.BillingOverviewDownloadComponent, _billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_4__.BillingOverviewIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67896:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-pay/billing-overview-pay.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewPayComponent: () => (/* binding */ BillingOverviewPayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/invoice-amount.pipe */ 85423);











const _c0 = a0 => ({
  amount: a0
});
function BillingOverviewPayComponent_wink_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewPayComponent_wink_button_0_Template_wink_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.redirectToOnlinePayment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "invoiceAmount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r0.translationKey, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, ctx_r0.amount, ctx_r0.locale))));
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__["default"]);
class BillingOverviewPayComponent {
  constructor() {
    this.translationKey = 'ng.billing-overview.pay';
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  }
  redirectToOnlinePayment(event) {
    event?.stopPropagation();
    this.urlService.redirectTo(this.onlinePaymentLink);
  }
  static #_ = this.ɵfac = function BillingOverviewPayComponent_Factory(t) {
    return new (t || BillingOverviewPayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewPayComponent,
    selectors: [["tg-billing-overview-pay"]],
    inputs: {
      amount: "amount",
      locale: "locale",
      translationKey: "translationKey",
      onlinePaymentLink: "onlinePaymentLink"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["data-testid", "billing-overview-invoice-pay", "appearance", "primary", 3, "text", "click", 4, "ngIf"], ["data-testid", "billing-overview-invoice-pay", "appearance", "primary", 3, "text", "click"]],
    template: function BillingOverviewPayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BillingOverviewPayComponent_wink_button_0_Template, 3, 9, "wink-button", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.amount);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_3__.WinkButton, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _pipes_invoice_amount_pipe__WEBPACK_IMPORTED_MODULE_5__.InvoiceAmountPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 74432:
/*!*********************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-payment-encouragement/billing-overview-payment-encouragement.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentEncouragementComponent: () => (/* binding */ PaymentEncouragementComponent)
/* harmony export */ });
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function PaymentEncouragementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "wink-icon", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r0.message), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class PaymentEncouragementComponent {
  get message() {
    if (this.paymentMethod === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.PaymentMethod.MANUAL) return 'ng.billing-overview.payment-encouragement.direct-debit';
    if (![_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.DispatchMethod.DOCCLE, _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.DispatchMethod.ETIS].includes(this.dispatchMethod)) return 'ng.billing-overview.payment-encouragement.doccle';
    return undefined;
  }
  static #_ = this.ɵfac = function PaymentEncouragementComponent_Factory(t) {
    return new (t || PaymentEncouragementComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PaymentEncouragementComponent,
    selectors: [["tg-billing-payment-encouragement"]],
    inputs: {
      paymentMethod: "paymentMethod",
      dispatchMethod: "dispatchMethod"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "background-shade_04"], ["class", "py--l px--s display--flex align-items--center gap--m", "data-testid", "billing-overview-payment-encouragement", 4, "ngIf"], ["data-testid", "billing-overview-payment-encouragement", 1, "py--l", "px--s", "display--flex", "align-items--center", "gap--m"], ["appearance", "secondary", "icon", "telenet-assistant", "size", "lg"], [3, "innerHTML"]],
    template: function PaymentEncouragementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentEncouragementComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
      }
    },
    dependencies: [_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__.WinkIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3837:
/*!***********************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-payment-method-changed/billing-overview-payment-method-changed.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewPaymentMethodChangedComponent: () => (/* binding */ BillingOverviewPaymentMethodChangedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class BillingOverviewPaymentMethodChangedComponent {
  get paymentMethodDetails() {
    switch (this.updatedPaymentMethod) {
      case _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.PaymentMethod.MANUAL + _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.UPDATED_PAYMENT_METHOD:
        return {
          message: 'ng.billing-overview.lbl.payment-changed-to-manual-info',
          header: 'ng.billing-overview.lbl.payment-changed-to-manual-header'
        };
      case _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.PaymentMethod.DIRECT_DEBIT + _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_3__.UPDATED_PAYMENT_METHOD:
        return {
          message: 'ng.billing-overview.lbl.payment-changed-to-direct-debit-info',
          header: 'ng.billing-overview.lbl.payment-changed-to-direct-debit-header'
        };
      default:
        return {
          message: '',
          header: ''
        };
    }
  }
  get message() {
    return this.paymentMethodDetails.message;
  }
  get header() {
    return this.paymentMethodDetails.header;
  }
  static #_ = this.ɵfac = function BillingOverviewPaymentMethodChangedComponent_Factory(t) {
    return new (t || BillingOverviewPaymentMethodChangedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BillingOverviewPaymentMethodChangedComponent,
    selectors: [["tg-billing-overview-payment-method-changed"]],
    inputs: {
      updatedPaymentMethod: "updatedPaymentMethod"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 6,
    consts: [[1, "background-white", "p--l", "display--flex", "flex-direction--row", "align-items--center"], ["icon", "arrows-counterclockwise", "appearance", "primary", "size", "lg", "data-testid", "billing-overview-payment-method-changed-icon"], [1, "px--l"], ["slot", "heading", "html-tag", "h6", "spacing-y", "bottom", "data-testid", "billing-overview-payment-method-changed-header", 3, "text"], ["size", "regular", "appearance", "body", "data-testid", "billing-overview-payment-method-changed-description", 1, "font--body-small"]],
    template: function BillingOverviewPaymentMethodChangedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "wink-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "wink-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "wink-paragraph", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.header));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, ctx.message), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkParagraph, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkIcon, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_2__.WinkTitle],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52489:
/*!*************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-treatment-message/billing-overview-treatment-message.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreatmentMessageComponent: () => (/* binding */ TreatmentMessageComponent)
/* harmony export */ });
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function TreatmentMessageComponent_wink_notification_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "wink-notification", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "wink-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.message));
  }
}
class TreatmentMessageComponent {
  get message() {
    switch (this.collectionsTreatmentMessage) {
      case _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.CollectionsTreatmentMessage.AVOID_EXTRA_COSTS:
        return 'ng.billing-overview.lbl.treatment-message-avoid-extra-costs';
      case _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.CollectionsTreatmentMessage.RESUME_SUSPENDED_SERVICES:
        return 'ng.billing-overview.lbl.treatment-message-resume-suspended-services';
      case _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.CollectionsTreatmentMessage.AVOID_SUSPENDED_SERVICES:
        return 'ng.billing-overview.lbl.treatment-message-avoid-suspended-services';
      default:
        return '';
    }
  }
  static #_ = this.ɵfac = function TreatmentMessageComponent_Factory(t) {
    return new (t || TreatmentMessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TreatmentMessageComponent,
    selectors: [["tg-billing-overview-treatment-message"]],
    inputs: {
      collectionsTreatmentMessage: "collectionsTreatmentMessage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["appearance", "error", "has-close-icon", "false", "data-testid", "billing-overview-treatment-message", 4, "ngIf"], ["appearance", "error", "has-close-icon", "false", "data-testid", "billing-overview-treatment-message"], ["slot", "heading", "html-tag", "h6", "spacing-y", "bottom", 3, "text"]],
    template: function TreatmentMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TreatmentMessageComponent_wink_notification_0_Template, 3, 3, "wink-notification", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__.WinkNotification, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_0__.WinkTitle],
    encapsulation: 2
  });
}

/***/ }),

/***/ 22996:
/*!*******************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-unpaid-invoice/billing-overview-unpaid-invoice.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnpaidInvoiceComponent: () => (/* binding */ UnpaidInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../billing-overview-amount/billing-overview-amount.component */ 2413);
/* harmony import */ var _billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../billing-overview-download/billing-overview-download.component */ 44835);
/* harmony import */ var _billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../billing-overview-icon/billing-overview-icon.component */ 2878);
/* harmony import */ var _billing_overview_pay_billing_overview_pay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../billing-overview-pay/billing-overview-pay.component */ 67896);
/* harmony import */ var _billing_overview_unpaid_status_billing_overview_unpaid_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../billing-overview-unpaid-status/billing-overview-unpaid-status.component */ 42223);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component */ 37342);













function UnpaidInvoiceComponent_tg_billing_overview_unpaid_status_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-unpaid-status", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentMethod", ctx_r0.paymentMethod)("paymentDueDate", ctx_r0.invoice.paymentDueDate)("paymentStatus", ctx_r0.invoice.paymentStatus);
  }
}
function UnpaidInvoiceComponent_ng_container_16_tg_billing_overview_unpaid_status_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-unpaid-status", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentMethod", ctx_r3.paymentMethod)("paymentDueDate", ctx_r3.invoice.paymentDueDate)("paymentStatus", ctx_r3.invoice.paymentStatus);
  }
}
function UnpaidInvoiceComponent_ng_container_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-billing-unpaid-status-notification", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.billing-overview.direct-debit.failed"), " ");
  }
}
function UnpaidInvoiceComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UnpaidInvoiceComponent_ng_container_16_tg_billing_overview_unpaid_status_2_Template, 1, 3, "tg-billing-overview-unpaid-status", 16)(3, UnpaidInvoiceComponent_ng_container_16_ng_template_3_Template, 3, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-billing-overview-pay", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentMethod === "MANUAL")("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onlinePaymentLink", ctx_r2.onlinePaymentLink)("amount", ctx_r2.invoice.outstandingDebt)("locale", ctx_r2.locale);
  }
}
class UnpaidInvoiceComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.LanguageService);
    this.isEligibleForPayment = false;
    this.displayUnpaidStatus = false;
    this.isBusinessCustomer = false;
  }
  get locale() {
    return this.languageService.getLocaleString();
  }
  static #_ = this.ɵfac = function UnpaidInvoiceComponent_Factory(t) {
    return new (t || UnpaidInvoiceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UnpaidInvoiceComponent,
    selectors: [["tg-billing-unpaid-invoice"]],
    inputs: {
      invoice: "invoice",
      isEligibleForPayment: "isEligibleForPayment",
      displayUnpaidStatus: "displayUnpaidStatus",
      isBusinessCustomer: "isBusinessCustomer",
      onlinePaymentLink: "onlinePaymentLink",
      paymentMethod: "paymentMethod"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 13,
    consts: [["data-testid", "billing-overview-unpaid-invoice"], [1, "px--l", "invoice-info", "cursor--pointer", 3, "click"], [1, "display--flex", "justify-content--between"], [1, "display--flex", "py--l", "flex-direction--column", "gap--s"], [1, "display--flex", "align-items--center", "gap--m"], [1, "invoice-icon"], [3, "invoiceAmount"], ["data-testid", "billing-overview-invoice-date"], [3, "invoiceAmount", "outstandingDebt", "locale"], [3, "paymentMethod", "paymentDueDate", "paymentStatus", 4, "ngIf"], [1, "py--l"], [3, "invoice"], ["download", ""], [4, "ngIf"], [3, "paymentMethod", "paymentDueDate", "paymentStatus"], [1, "px--l", "py--m", "border-width--t--r", "border--t--r", "border-color--t--light-grey", "border-style--t--solid", "display--flex", "flex-direction--column", "gap--s"], [3, "paymentMethod", "paymentDueDate", "paymentStatus", 4, "ngIf", "ngIfElse"], ["directDebitFailure", ""], [3, "onlinePaymentLink", "amount", "locale"], ["icon", "icon-error-shape-filled", "textClass", "color-notification--error--light"]],
    template: function UnpaidInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnpaidInvoiceComponent_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.downloadDocument());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-billing-overview-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tg-billing-overview-amount", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UnpaidInvoiceComponent_tg_billing_overview_unpaid_status_12_Template, 1, 3, "tg-billing-overview-unpaid-status", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tg-billing-overview-download", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UnpaidInvoiceComponent_ng_container_16_Template, 6, 5, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoiceAmount", ctx.invoice.invoiceAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 8, ctx.invoice.invoiceDate, "d MMMM", "+0200", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoiceAmount", ctx.invoice.invoiceAmount)("outstandingDebt", ctx.invoice.outstandingDebt)("locale", ctx.locale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayUnpaidStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoice", ctx.invoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBusinessCustomer && ctx.isEligibleForPayment);
      }
    },
    dependencies: [_billing_overview_amount_billing_overview_amount_component__WEBPACK_IMPORTED_MODULE_3__.BillingOverviewAmountComponent, _billing_overview_download_billing_overview_download_component__WEBPACK_IMPORTED_MODULE_4__.BillingOverviewDownloadComponent, _billing_overview_icon_billing_overview_icon_component__WEBPACK_IMPORTED_MODULE_5__.BillingOverviewIconComponent, _billing_overview_pay_billing_overview_pay_component__WEBPACK_IMPORTED_MODULE_6__.BillingOverviewPayComponent, _billing_overview_unpaid_status_billing_overview_unpaid_status_component__WEBPACK_IMPORTED_MODULE_7__.BillingOverviewUnpaidStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_10__.UnpaidStatusNotificationComponent],
    styles: [".invoice-info[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n  background-color: #ffffff;\n}\n.invoice-info[_ngcontent-%COMP%]:hover {\n  background-color: rgba(41, 29, 24, 0.04);\n}\n.invoice-info[_ngcontent-%COMP%]:active {\n  background-color: rgba(41, 29, 24, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L3VpL3NyYy9saWIvYmlsbGluZy1vdmVydmlldy11bnBhaWQtaW52b2ljZS9iaWxsaW5nLW92ZXJ2aWV3LXVucGFpZC1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSx3Q0FBQTtBQUNKO0FBRUU7RUFDRSx3Q0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2UtaW5mbyB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzI5MWQxOCwgMDQlKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyOTFkMTgsIDA4JSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37342:
/*!*******************************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnpaidStatusNotificationComponent: () => (/* binding */ UnpaidStatusNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


const _c0 = (a0, a1) => [a0, a1];
const _c1 = ["*"];
class UnpaidStatusNotificationComponent {
  static #_ = this.ɵfac = function UnpaidStatusNotificationComponent_Factory(t) {
    return new (t || UnpaidStatusNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UnpaidStatusNotificationComponent,
    selectors: [["tg-billing-unpaid-status-notification"]],
    inputs: {
      icon: "icon",
      text: "text",
      textClass: "textClass"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 5,
    consts: [["data-testid", "billing-overview-invoice-status-notification"], [1, "mr--xs"], ["size", "md", 1, "icon-md", 3, "ngClass"], [1, "billing-overview-invoice-status-notification", 3, "ngClass"]],
    template: function UnpaidStatusNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx.icon, ctx.textClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.textClass);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    styles: [".billing-overview-invoice-status-notification[_ngcontent-%COMP%] {\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L3VpL3NyYy9saWIvYmlsbGluZy1vdmVydmlldy11bnBhaWQtc3RhdHVzLW5vdGlmaWNhdGlvbi9iaWxsaW5nLW92ZXJ2aWV3LXVucGFpZC1zdGF0dXMtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLW92ZXJ2aWV3LWludm9pY2Utc3RhdHVzLW5vdGlmaWNhdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 42223:
/*!*****************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/billing-overview-unpaid-status/billing-overview-unpaid-status.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewUnpaidStatusComponent: () => (/* binding */ BillingOverviewUnpaidStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component */ 37342);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ 70292);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/fr */ 12602);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ 72060);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/nl */ 17754);













const _c0 = (a0, a1) => ({
  "=1": a0,
  other: a1
});
const _c1 = (a0, a1) => ({
  daysPast: a0,
  dueDate: a1
});
function BillingOverviewUnpaidStatusComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r0.getDaysPastPaymentDueDate(ctx_r0.paymentDueDate), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, "ng.billing-overview.billing-overview.lbl.status." + ctx_r0.paymentStatus + ".singular", "ng.billing-overview.billing-overview.lbl.status." + ctx_r0.paymentStatus)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c1, ctx_r0.getDaysPastPaymentDueDate(ctx_r0.paymentDueDate), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](4, 7, ctx_r0.paymentDueDate, "d MMMM", "+0200", ctx_r0.locale))), " ");
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__["default"]);
class BillingOverviewUnpaidStatusComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LanguageService);
  }
  getIcon(paymentStatus, paymentMethod) {
    if (paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.OVERDUE) {
      return 'icon-error-shape-filled';
    }
    return paymentMethod === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentMethod.DIRECT_DEBIT ? 'icon-calendar' : 'icon-information-shape-filled';
  }
  getTextClass(paymentStatus) {
    return paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.OVERDUE ? 'color-notification--error--light' : 'color-notification--info--light';
  }
  getDaysPastPaymentDueDate(paymentDueDate) {
    return dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(paymentDueDate), 'days');
  }
  get locale() {
    return this.languageService.getLocaleString();
  }
  static #_ = this.ɵfac = function BillingOverviewUnpaidStatusComponent_Factory(t) {
    return new (t || BillingOverviewUnpaidStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewUnpaidStatusComponent,
    selectors: [["tg-billing-overview-unpaid-status"]],
    inputs: {
      paymentStatus: "paymentStatus",
      paymentMethod: "paymentMethod",
      paymentDueDate: "paymentDueDate"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["data-testid", "billing-overview-unpaid-status", 1, "display--flex", "align-content--center", "flex-direction--column"], [3, "icon", "textClass"], [4, "ngIf"]],
    template: function BillingOverviewUnpaidStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "tg-billing-unpaid-status-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillingOverviewUnpaidStatusComponent_span_2_Template, 5, 18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.getIcon(ctx.paymentStatus, ctx.paymentMethod))("textClass", ctx.getTextClass(ctx.paymentStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentDueDate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _billing_overview_unpaid_status_notification_billing_overview_unpaid_status_notification_component__WEBPACK_IMPORTED_MODULE_1__.UnpaidStatusNotificationComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 85423:
/*!*******************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/pipes/invoice-amount.pipe.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceAmountPipe: () => (/* binding */ InvoiceAmountPipe)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class InvoiceAmountPipe {
  transform(amount, locale) {
    return new _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe(locale).transform(amount, 'EUR', 'symbol', '1.2-2');
  }
  static #_ = this.ɵfac = function InvoiceAmountPipe_Factory(t) {
    return new (t || InvoiceAmountPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "invoiceAmount",
    type: InvoiceAmountPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 68455:
/*!********************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/pipes/to-descriptions.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDescriptionsPipe: () => (/* binding */ ToDescriptionsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__);



class ToDescriptionsPipe {
  constructor() {
    this.displayPhoneNumberService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.DisplayPhoneNumberService);
  }
  transform(billingAccount, method) {
    const descriptionsMap = {
      DIRECT_DEBIT: [{
        caption: 'ng.billing-overview.lbl.current-payment-method-direct-debit'
      }],
      MANUAL: [{
        caption: 'ng.billing-overview.lbl.current-payment-method-manual'
      }],
      PAPER: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-paper',
        value: (0,_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_1__.billingAddressToDisplay)(billingAccount.billingAddress)
      }],
      SMS: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-sms',
        value: this.displayPhoneNumberService.formatPhoneNumber(billingAccount.mobilePhoneNumber || '')
      }],
      EMAIL: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-email',
        value: billingAccount.email
      }],
      EMAIL_SMS: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-email',
        value: billingAccount.email
      }, {
        caption: 'ng.billing-overview.lbl.current-delivery-method-sms',
        value: this.displayPhoneNumberService.formatPhoneNumber(billingAccount.mobilePhoneNumber || '')
      }],
      DOCCLE: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-doccle'
      }],
      ETIS: [{
        caption: 'ng.billing-overview.lbl.current-delivery-method-etis',
        value: billingAccount.email
      }]
    };
    return descriptionsMap[method];
  }
  static #_ = this.ɵfac = function ToDescriptionsPipe_Factory(t) {
    return new (t || ToDescriptionsPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "toDescriptions",
    type: ToDescriptionsPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 14704:
/*!*********************************************************************************!*\
  !*** ./libs/billing/invoice/overview/ui/src/lib/skeleton/skeleton.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewSkeletonComponent: () => (/* binding */ BillingOverviewSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class BillingOverviewSkeletonComponent {
  static #_ = this.ɵfac = function BillingOverviewSkeletonComponent_Factory(t) {
    return new (t || BillingOverviewSkeletonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BillingOverviewSkeletonComponent,
    selectors: [["tg-billing-overview-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 0,
    consts: [["data-testid", "billing-overview-skeleton", 1, "mr--m--lg", "mr--n", "mb--m", "mb--n--lg", "flex-grow"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines", "mb--m"]],
    template: function BillingOverviewSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "div", 1)(6, "div", 1)(7, "div", 1)(8, "div", 1)(9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 70292:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function (t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function (t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function (t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function (t, e) {
      if (S(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function (t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function (t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function (t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function (t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function (t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function () {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ }),

/***/ 46778:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ 72060:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/en.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["en", [["a", "p"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural]);

/***/ }),

/***/ 12602:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length,
    e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
  if (i === 0 || i === 1) return 1;
  if (e === 0 && !(i === 0) && i % 1000000 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["fr", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u, "р."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u, "¥"],
  "COP": ["$CO", "$"],
  "CYP": ["£CY"],
  "EGP": [u, "£E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["£FK", "£"],
  "FRF": ["F"],
  "GBP": ["£GB", "£"],
  "GIP": ["£GI", "£"],
  "HKD": [u, "$"],
  "IEP": ["£IE"],
  "ILP": ["£IL"],
  "ITL": ["₤IT"],
  "JPY": [u, "¥"],
  "KMF": [u, "FC"],
  "LBP": ["£LB", "£L"],
  "MTP": ["£MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u, "₱"],
  "RHD": ["$RH"],
  "RON": [u, "L"],
  "RWF": [u, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u, "Kw"]
}, "ltr", plural]);

/***/ }),

/***/ 17754:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/nl.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["nl", [["a.m.", "p.m."], u, u], u, [["Z", "M", "D", "W", "D", "V", "Z"], ["zo", "ma", "di", "wo", "do", "vr", "za"], ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], ["zo", "ma", "di", "wo", "do", "vr", "za"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]], u, [["v.C.", "n.C."], ["v.Chr.", "n.Chr."], ["voor Christus", "na Christus"]], 1, [6, 0], ["dd-MM-y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, "{1} 'om' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤ #,##0.00;¤ -#,##0.00", "#E0"], "EUR", "€", "Euro", {
  "AUD": ["AU$", "$"],
  "BYN": [u, "р."],
  "CAD": ["C$", "$"],
  "FJD": ["FJ$", "$"],
  "JPY": ["JP¥", "¥"],
  "PHP": [u, "₱"],
  "RUR": [u, "р."],
  "SBD": ["SI$", "$"],
  "THB": ["฿"],
  "TWD": ["NT$"],
  "USD": ["US$", "$"],
  "XPF": [],
  "XXX": []
}, "ltr", plural]);

/***/ })

}])
//# sourceMappingURL=libs_billing_invoice_overview_ui_src_index_ts-_072f0.js.map