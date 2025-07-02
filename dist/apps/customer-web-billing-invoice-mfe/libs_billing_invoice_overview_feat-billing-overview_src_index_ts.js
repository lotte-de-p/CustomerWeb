(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_billing_invoice_overview_feat-billing-overview_src_index_ts"],{

/***/ 95270:
/*!**************************************************************************!*\
  !*** ./libs/billing/invoice/overview/feat-billing-overview/src/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewComponent: () => (/* reexport safe */ _lib_billing_overview_billing_overview_component__WEBPACK_IMPORTED_MODULE_0__.BillingOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_billing_overview_billing_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/billing-overview/billing-overview.component */ 64800);


/***/ }),

/***/ 64800:
/*!********************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/feat-billing-overview/src/lib/billing-overview/billing-overview.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewComponent: () => (/* binding */ BillingOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_shared_feat_billing_account_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/shared/feat-billing-account-selector */ 24955);
/* harmony import */ var _billing_shared_feat_billing_account_selector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_feat_billing_account_selector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @billing/invoice-overview/ui */ 78473);
/* harmony import */ var _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__);















function BillingOverviewComponent_div_2_tg_billing_overview_treatment_message_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-treatment-message", 10);
  }
  if (rf & 2) {
    const selectedBillingAccount_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionsTreatmentMessage", selectedBillingAccount_r5.collectionsTreatmentMessage);
  }
}
function BillingOverviewComponent_div_2_wink_notification_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-notification", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "wink-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "wink-paragraph", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.billing-overview.lbl.payment-plan.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.billing-overview.lbl.payment-plan.description"), " ");
  }
}
const _c0 = a0 => ({
  "mt--l": a0
});
function BillingOverviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewComponent_div_2_tg_billing_overview_treatment_message_1_Template, 1, 1, "tg-billing-overview-treatment-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingOverviewComponent_div_2_wink_notification_3_Template, 6, 6, "wink-notification", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedBillingAccount_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedBillingAccount_r5.collectionsTreatmentMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, selectedBillingAccount_r5.collectionsTreatmentMessage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isPaymentPlanActive());
  }
}
function BillingOverviewComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-overview-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-error-notification", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.billing-overview.error-overview-description"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.billing-overview.error-overview-label"));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_tg_billing_overview_no_bills_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-no-bills", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isTelenet", ctx_r12.isTelenetCustomer)("telenetImg", ctx_r12.noBills)("baseImg", ctx_r12.noBillsBase)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ng.billing-overview.no-bills-yet"));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.billing-overview.incl.VAT"));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_1_span_4_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.billing-overview.to-pay"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isBusinessCustomer());
  }
}
const _c1 = a0 => ({
  "border-style--b--solid": a0
});
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
  }
  if (rf & 2) {
    const last_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, !last_r28));
  }
}
const _c2 = a0 => ({
  "mb--l": a0
});
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-unpaid-invoice", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_div_1_div_2_Template, 1, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invoice_r27 = ctx.$implicit;
    const last_r28 = ctx.last;
    const selectedBillingAccount_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, !last_r28 && ctx_r25.isBusinessCustomer()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoice", invoice_r27)("onlinePaymentLink", ctx_r25.getOnlinePaymentUrl(selectedBillingAccount_r21, invoice_r27))("isEligibleForPayment", ctx_r25.isEligibleForPayment)("displayUnpaidStatus", invoiceOverview_r11.unpaidInvoices.invoices.length > 1 && !ctx_r25.isBusinessCustomer() && !(selectedBillingAccount_r21 == null ? null : selectedBillingAccount_r21.isEligibleForManualPayment))("paymentMethod", selectedBillingAccount_r21.currentPaymentMethod)("isBusinessCustomer", ctx_r25.isBusinessCustomer() || false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.isBusinessCustomer());
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_tg_billing_overview_unpaid_status_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-unpaid-status", 38);
  }
  if (rf & 2) {
    const selectedBillingAccount_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentMethod", selectedBillingAccount_r21.currentPaymentMethod)("paymentDueDate", invoiceOverview_r11.unpaidInvoices.invoices[0].paymentDueDate)("paymentStatus", invoiceOverview_r11.unpaidInvoices.invoices[0].paymentStatus);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_tg_billing_unpaid_status_notification_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-billing-unpaid-status-notification", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.billing-overview.direct-debit.failed"), " ");
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_tg_billing_overview_unpaid_status_3_Template, 1, 3, "tg-billing-overview-unpaid-status", 35)(4, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_tg_billing_unpaid_status_notification_4_Template, 3, 3, "tg-billing-unpaid-status-notification", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-billing-overview-pay", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const selectedBillingAccount_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", invoiceOverview_r11.unpaidInvoices.invoices.length === 1 && !(selectedBillingAccount_r21 == null ? null : selectedBillingAccount_r21.isEligibleForManualPayment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedBillingAccount_r21.isEligibleForManualPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translationKey", invoiceOverview_r11.unpaidInvoices.invoices.length === 1 ? "ng.billing-overview.pay" : "ng.billing-overview.total-pay")("onlinePaymentLink", ctx_r26.getOnlinePaymentUrl(selectedBillingAccount_r21, invoiceOverview_r11.unpaidInvoices.invoices[0]))("amount", invoiceOverview_r11.unpaidInvoices.totalAmount)("locale", ctx_r26.locale);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_div_1_Template, 3, 10, "div", 28)(2, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_ng_container_2_Template, 6, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", invoiceOverview_r11.unpaidInvoices.invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.isEligibleForPayment && !ctx_r22.isBusinessCustomer());
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-billing-overview-no-bills", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalAmount", invoiceOverview_r11.unpaidInvoices.totalAmount)("isTelenet", ctx_r23.isTelenetCustomer)("telenetImg", ctx_r23.noUnpaidBills)("baseImg", ctx_r23.noUnpaidBillsBase)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, "ng.billing-overview.no-unpaid-bills-yet"))("locale", ctx_r23.locale);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_div_1_Template, 3, 2, "div", 3)(2, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_ng_template_2_Template, 2, 8, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", invoiceOverview_r11.unpaidInvoices.invoices.length && invoiceOverview_r11.unpaidInvoices.totalAmount > 0)("ngIfElse", _r24);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-billing-overview-payment-method-changed", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "ng.billing-overview.payment-method-changed-header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("updatedPaymentMethod", ctx_r17.updatedPaymentMethod);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.billing-overview.incl.VAT"));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-paid-invoice", 53)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invoice_r49 = ctx.$implicit;
    const last_r50 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoice", invoice_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !last_r50));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_div_7_div_3_Template, 3, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invoiceGroup_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invoiceGroup_r47.invoiceYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", invoiceGroup_r47.invoices);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "wink-img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isTelenet", ctx_r44.isTelenetCustomer)("img", ctx_r44.allLoaded)("telenetImg", ctx_r44.allLoaded)("baseImg", ctx_r44.allLoadedBase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "ng.billing-overview.end-of-online-history"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "ng.billing-overview.missing-invoices"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_ng_template_9_Template_wink_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.billing-overview.view-all-invoices"));
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_span_5_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_div_7_Template, 4, 2, "div", 48)(8, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_ng_container_8_Template, 8, 10, "ng-container", 3)(9, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_ng_template_9_Template, 2, 3, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "ng.billing-overview.paid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.isBusinessCustomer());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", invoiceOverview_r11.paidInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.showAll())("ngIfElse", _r46);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-overview-export", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const billingAccount_r54 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("billingAccountNumber", billingAccount_r54.billingAccountNumber);
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_1_Template, 5, 4, "div", 19)(2, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_ng_container_2_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_3_Template, 6, 4, "div", 20)(4, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_4_Template, 11, 7, "div", 21)(5, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_div_5_Template, 2, 1, "div", 22);
  }
  if (rf & 2) {
    const invoiceOverview_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", invoiceOverview_r11.unpaidInvoices.invoices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.selectedBillingAccount());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isPaymentMethodUpdated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.paidInvoicesAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isBusinessCustomer() && ctx_r13.selectedBillingAccount());
  }
}
function BillingOverviewComponent_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewComponent_ng_template_4_ng_container_1_tg_billing_overview_no_bills_1_Template, 2, 6, "tg-billing-overview-no-bills", 15)(2, BillingOverviewComponent_ng_template_4_ng_container_1_ng_template_2_Template, 6, 5, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const invoiceOverview_r11 = ctx.ngIf;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !invoiceOverview_r11.unpaidInvoices.invoices.length && !invoiceOverview_r11.paidInvoices.length && !ctx_r10.paidInvoicesAvailable())("ngIfElse", _r14);
  }
}
function BillingOverviewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BillingOverviewComponent_ng_template_4_ng_container_0_Template, 4, 6, "ng-container", 5)(1, BillingOverviewComponent_ng_template_4_ng_container_1_Template, 4, 2, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.invoiceOverview());
  }
}
function BillingOverviewComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 61)(5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-billing-overview-current-summary", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "toDescriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 64)(10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tg-billing-overview-current-summary", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "toDescriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tg-billing-payment-encouragement", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const selectedBillingAccount_r56 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "ng.billing-overview.title.billing-settings"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-payment-method-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "ng.billing-overview.title.current-payment-method"))("descriptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 20, selectedBillingAccount_r56, selectedBillingAccount_r56.currentPaymentMethod))("billingSettingsUrl", ctx_r4.getBillingSettingsUrl(selectedBillingAccount_r56))("type", "PAYMENT_METHOD")("updatedPaymentMethod", ctx_r4.updatedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-title-current-payment-method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-current-delivery-method-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 23, "ng.billing-overview.title.current-delivery-method"))("descriptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 25, selectedBillingAccount_r56, selectedBillingAccount_r56.dispatchMethod))("billingSettingsUrl", ctx_r4.getBillingSettingsUrl(selectedBillingAccount_r56))("type", "DELIVERY_METHOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-overview-title-current-delivery-method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentMethod", selectedBillingAccount_r56.currentPaymentMethod)("dispatchMethod", selectedBillingAccount_r56.dispatchMethod);
  }
}
class BillingOverviewComponent {
  constructor() {
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageService);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__.InvoiceOverviewFacade);
    this.pathCategorisationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.PathCategorisationService);
    this.scopes = ['invoices'];
    this.allLoaded = '/content/dam/www-telenet-touch/nl/dfd/check.svg';
    this.allLoadedBase = '/content/dam/www-telenet-touch/nl/dfd/check-base.svg';
    this.noBills = '/content/dam/www-telenet-touch/nl/dfd/sleeping-bill.svg';
    this.noBillsBase = '/content/dam/www-telenet-touch/nl/dfd/sleeping-bill-base.svg';
    this.noUnpaidBills = '/content/dam/www-telenet-touch/nl/dfd/all-bills-paid.svg';
    this.noUnpaidBillsBase = '/content/dam/www-telenet-touch/nl/dfd/all-bills-paid-base.svg';
  }
  static #_ = this.MESSAGE_GROUP = 'billing-overview';
  loadMore() {
    this.facade.loadMore();
  }
  get loading() {
    return this.facade.loading;
  }
  get invoiceOverview() {
    return this.facade.invoiceOverview;
  }
  get showAll() {
    return this.facade.showAll;
  }
  get error() {
    return this.facade.loadError;
  }
  get locale() {
    return this.languageService.getLocaleString();
  }
  get selectedBillingAccount() {
    return this.facade.selectedBillingAccount;
  }
  get paidInvoicesAvailable() {
    return this.facade.paidInvoicesAvailable;
  }
  get isBusinessCustomer() {
    return this.facade.isBusinessCustomer;
  }
  get isPaymentPlanActive() {
    return this.facade.isPaymentPlanActive;
  }
  getBillingSettingsUrl(billingAccount) {
    return this.billingSettingsLink && `${this.billingSettingsLink}?accountNumber=${billingAccount?.billingAccountNumber}`;
  }
  getOnlinePaymentUrl(billingAccount, invoice) {
    const onlinePaymentSuffix = this.isBusinessCustomer() ? `&billNumber=${invoice.invoiceNumber}&ogmCode=${invoice.ogmCode}` : '';
    return this.onlinePaymentLink && `${this.onlinePaymentLink}?accountNumber=${billingAccount?.billingAccountNumber}${onlinePaymentSuffix}`;
  }
  get isEligibleForPayment() {
    return this.facade.isEligibleForPayment();
  }
  get isTelenetCustomer() {
    return this.pathCategorisationService.getCustomerBrand() === _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BRAND_TELENET;
  }
  get updatedPaymentMethod() {
    return this.facade.updatedPaymentMethod();
  }
  get isPaymentMethodUpdated() {
    return this.updatedPaymentMethod !== '';
  }
  static #_2 = this.ɵfac = function BillingOverviewComponent_Factory(t) {
    return new (t || BillingOverviewComponent)();
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewComponent,
    selectors: [["tg-billing-overview"]],
    inputs: {
      billingSettingsLink: "billingSettingsLink",
      onlinePaymentLink: "onlinePaymentLink",
      homePageLink: "homePageLink"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 7,
    consts: [["data-testid", "billing-overview", 3, "scopes"], [1, "pt--l--md", 3, "homePageLink", "isTelenetCustomer"], ["class", "mt--xl", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["invoiceOverviewBlock", ""], [4, "ngIf"], [1, "mt--xl"], [3, "collectionsTreatmentMessage", 4, "ngIf"], [3, "ngClass"], ["appearance", "information", "has-close-icon", "false", "data-testid", "billing-overview-payment-plan-notification", 4, "ngIf"], [3, "collectionsTreatmentMessage"], ["appearance", "information", "has-close-icon", "false", "data-testid", "billing-overview-payment-plan-notification"], ["slot", "heading", "html-tag", "h5", "spacing-y", "bottom", 3, "text"], ["slot", "content", "appearance", "body", "size", "regular"], ["data-testid", "billing-overview-error", 3, "description", "label"], [3, "isTelenet", "telenetImg", "baseImg", "text", 4, "ngIf", "ngIfElse"], ["invoicesPresent", ""], [3, "isTelenet", "telenetImg", "baseImg", "text"], [1, "invoice-overview-to-pay"], ["class", "display--flex justify-content--between mt--xxl mb--m", 4, "ngIf"], ["class", "invoice-overview-payment-method-change mt--l--md mt--m", "data-testid", "billing-overview-payment-method-changed", 4, "ngIf"], ["class", "invoice-overview-paid", 4, "ngIf"], ["class", "invoice-overview-export mt--m", 4, "ngIf"], [1, "display--flex", "justify-content--between", "mt--xxl", "mb--m"], [1, "heading--4", "my--n"], ["data-testid", "billing-overview-vat-inclusive", "class", "font--body-small transparent_white_64 align-content--end", 4, "ngIf"], ["data-testid", "billing-overview-vat-inclusive", 1, "font--body-small", "transparent_white_64", "align-content--end"], ["noUnpaid", ""], ["class", "background-white", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "background-white", 3, "ngClass"], [3, "invoice", "onlinePaymentLink", "isEligibleForPayment", "displayUnpaidStatus", "paymentMethod", "isBusinessCustomer"], ["class", "border-width--b--r border--b--r border-color--all--light-grey", 3, "ngClass", 4, "ngIf"], [1, "border-width--b--r", "border--b--r", "border-color--all--light-grey", 3, "ngClass"], [1, "background-white"], [1, "mx--l", "py--m", "border-width--t--r", "border--t--r", "border-color--t--light-grey", "border-style--t--solid", "display--flex", "flex-direction--column", "gap--s"], [3, "paymentMethod", "paymentDueDate", "paymentStatus", 4, "ngIf"], ["icon", "icon-error-shape-filled", "textClass", "color-notification--error--light", 4, "ngIf"], [3, "translationKey", "onlinePaymentLink", "amount", "locale"], [3, "paymentMethod", "paymentDueDate", "paymentStatus"], ["icon", "icon-error-shape-filled", "textClass", "color-notification--error--light"], ["data-testid", "billing-overview-no-unpaid-bills", 3, "totalAmount", "isTelenet", "telenetImg", "baseImg", "text", "locale"], ["data-testid", "billing-overview-payment-method-changed", 1, "invoice-overview-payment-method-change", "mt--l--md", "mt--m"], [1, "display--flex", "flex-direction--column", "mt--m--md", "mb--s", "mt--s"], [1, "heading--5", "my--n", "mb--xxs--md"], [3, "updatedPaymentMethod"], [1, "invoice-overview-paid"], [1, "display--flex", "justify-content--between", "mt--xl", "mb--m"], [1, "background-white", "pb--m"], [4, "ngFor", "ngForOf"], ["loadMoreLink", ""], ["data-testid", "billing-overview-paid-invoice-year", 1, "mx--l", "pt--l", "color-shade_72"], ["class", "invoice px--l", 4, "ngFor", "ngForOf"], [1, "invoice", "px--l"], [3, "invoice"], ["data-testid", "billing-overview-all-loaded", 1, "pt--m", "display--flex", "justify-content--center", "align-items--center", "flex-direction--column"], ["brandImage", "", 3, "isTelenet", "img", "telenetImg", "baseImg"], [1, "color-shade_72", 3, "innerHTML"], ["data-testid", "billing-overview-view-all-invoices", "type", "button", "appearance", "tertiary", "size", "md", "width", "none", "status", "none", 1, "ml--l", "mt--m", 3, "text", "click"], [1, "invoice-overview-export", "mt--m"], [3, "billingAccountNumber"], ["data-testid", "billing-overview-title-billing-settings"], [1, "background-white", "mt--l", "py--l--md", "p--m", "px--n--md", "display--flex", "width--full", "flex-direction--column", "flex-direction--row--md"], [1, "mr--s--md", "px--l--md", "mb--m", "mb--n--md", "flex--1"], [3, "headerText", "descriptions", "billingSettingsUrl", "type", "updatedPaymentMethod"], [1, "border--r--r", "border-width--r--r", "border-color--r--shade_16"], [1, "divider--xxs__light-grey"], [1, "ml--s--md", "px--l--md", "mt--m", "mb--n--md", "flex--1", "mt--n--md"], [3, "headerText", "descriptions", "billingSettingsUrl", "type"], [1, "background-white", "px--l--md", "pb--l", "px--m"], [3, "paymentMethod", "dispatchMethod"]],
    template: function BillingOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-account-selector", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillingOverviewComponent_div_2_Template, 4, 5, "div", 2)(3, BillingOverviewComponent_ng_container_3_Template, 2, 0, "ng-container", 3)(4, BillingOverviewComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, BillingOverviewComponent_ng_container_6_Template, 17, 28, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("homePageLink", ctx.homePageLink)("isTelenetCustomer", ctx.isTelenetCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedBillingAccount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading())("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedBillingAccount());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _billing_shared_feat_billing_account_selector__WEBPACK_IMPORTED_MODULE_2__.BillingAccountSelectorComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewNoBillsComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewSkeletonComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewPayComponent, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__.ErrorNotificationComponent, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_9__.MessagesModule, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewUnpaidStatusComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewCurrentSummaryComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.ToDescriptionsPipe, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.UnpaidInvoiceComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.PaidInvoiceComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.PaymentEncouragementComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.UnpaidStatusNotificationComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.TreatmentMessageComponent, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewExportComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.BrandImageDirective, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__.WinkButton, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__.WinkNotification, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__.WinkTitle, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__.WinkParagraph, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_7__.WinkImg, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_10__.BillingOverviewPaymentMethodChangedComponent],
    styles: [".invoice[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n  background-color: #ffffff;\n}\n.invoice[_ngcontent-%COMP%]:hover {\n  background-color: rgba(41, 29, 24, 0.04);\n}\n.invoice[_ngcontent-%COMP%]:active {\n  background-color: rgba(41, 29, 24, 0.08);\n}\n\n.flex--1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L2ZlYXQtYmlsbGluZy1vdmVydmlldy9zcmMvbGliL2JpbGxpbmctb3ZlcnZpZXcvYmlsbGluZy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7QUFDSjtBQUVFO0VBQ0Usd0NBQUE7QUFBSjs7QUFJQTtFQUNFLE9BQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjkxZDE4LCAwNCUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzI5MWQxOCwgMDglKTtcbiAgfVxufVxuXG4uZmxleC0tMSB7XG4gIGZsZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_invoice_overview_feat-billing-overview_src_index_ts.js.map