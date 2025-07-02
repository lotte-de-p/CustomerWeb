(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_billing_invoice_overview_feat-billing-account-selector_src_index_ts-_31491"],{

/***/ 62108:
/*!**********************************************************************************!*\
  !*** ./libs/billing/invoice/overview/feat-billing-account-selector/src/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingAccountSelectorComponent: () => (/* reexport safe */ _lib_billing_account_selector_billing_account_selector_component__WEBPACK_IMPORTED_MODULE_0__.BillingAccountSelectorComponent)
/* harmony export */ });
/* harmony import */ var _lib_billing_account_selector_billing_account_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/billing-account-selector/billing-account-selector.component */ 88891);


/***/ }),

/***/ 88891:
/*!********************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/feat-billing-account-selector/src/lib/billing-account-selector/billing-account-selector.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingAccountSelectorComponent: () => (/* binding */ BillingAccountSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_account_status_billing_account_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../billing-account-status/billing-account-status.component */ 47594);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @billing/invoice-overview/ui */ 78473);
/* harmony import */ var _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_8__);












function BillingAccountSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-error-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ng.billing-overview.billing-account-selector.lbl.error-description"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "ng.billing-overview.billing-account-selector.lbl.error-label"));
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-billing-overview-no-billing-accounts", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("homePageLink", ctx_r5.homePageLink)("isTelenetCustomer", ctx_r5.isTelenetCustomer);
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const selectedBillingAccount_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectedBillingAccount_r7 == null ? null : selectedBillingAccount_r7.billingAccountNumber, "");
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_a_6_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.open($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.billing-overview.billing-account-selector.lbl.change-account"));
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const billingAccount_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](billingAccount_r15.billingAccountNumber);
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const billingAccount_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", billingAccount_r15.billingAddress.subHouseNumber, "");
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const billingAccount_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.billing-overview.billing-account-selector.lbl.address.box"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", billingAccount_r15.billingAddress.boxNumber, "");
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_span_3_Template, 2, 1, "span", 6)(4, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_span_4_Template, 5, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const billingAccount_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", billingAccount_r15.billingAddress.street, " ", billingAccount_r15.billingAddress.houseNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", billingAccount_r15.billingAddress.subHouseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", billingAccount_r15.billingAddress.boxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](", ", billingAccount_r15.billingAddress.postalCode, " ", billingAccount_r15.billingAddress.municipality, " ");
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "wink-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = a0 => ({
  "border-style--b--solid": a0
});
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const billingAccount_r15 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.selectBillingAccount(billingAccount_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_4_Template, 3, 1, "div", 21)(5, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_div_5_Template, 6, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-billing-account-status", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_i_8_Template, 2, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const billingAccount_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    const selectedBillingAccount_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-accounts-option-" + billingAccount_r15.billingAccountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !last_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", billingAccount_r15 == null ? null : billingAccount_r15.billingAccountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", billingAccount_r15.billingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentStatus", billingAccount_r15.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", billingAccount_r15.billingAccountNumber === (selectedBillingAccount_r7 == null ? null : selectedBillingAccount_r7.billingAccountNumber));
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-slide-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_Template_tg_slide_menu_closeMenu_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_li_3_Template, 9, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx_r10.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "ng.billing-overview.billing-account-selector.lbl.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.billingAccounts);
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_span_5_Template, 2, 1, "span", 10)(6, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_a_6_Template, 4, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_tg_slide_menu_7_Template, 4, 5, "tg-slide-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const selectedBillingAccount_r7 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.billing-overview.billing-account-selector.lbl.billing-account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedBillingAccount_r7 == null ? null : selectedBillingAccount_r7.billingAccountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.billingAccounts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.billingAccounts.length > 1);
  }
}
function BillingAccountSelectorComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BillingAccountSelectorComponent_ng_template_1_Conditional_1_div_0_Template, 2, 2, "div", 5)(1, BillingAccountSelectorComponent_ng_template_1_Conditional_1_ng_container_1_Template, 8, 6, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.billingAccounts.length === 0 && !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selectedBillingAccount());
  }
}
function BillingAccountSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BillingAccountSelectorComponent_ng_template_1_Conditional_0_Template, 3, 6, "tg-error-notification", 4)(1, BillingAccountSelectorComponent_ng_template_1_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r1.error ? 0 : 1);
  }
}
class BillingAccountSelectorComponent {
  constructor() {
    this.billingAccounts = [];
    this.loading = false;
    this.showMenu = false;
    this.error = false;
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__.BillingAccountService);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_4__.InvoiceOverviewFacade);
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.UrlService);
  }
  static #_ = this.BILLING_ACCOUNT_STORAGE_KEY = 'selected-billing-account';
  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.service.getBillingAccounts().subscribe({
      next: billingAccounts => {
        this.billingAccounts = billingAccounts;
        const defaultBillingAccount = this.getSelectedBillingAccount(billingAccounts);
        this.selectBillingAccount(defaultBillingAccount);
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
      complete: () => this.loading = false
    });
  }
  selectBillingAccount(billingAccount) {
    if (billingAccount) {
      this.facade.selectBillingAccount(billingAccount);
      sessionStorage.setItem(BillingAccountSelectorComponent.BILLING_ACCOUNT_STORAGE_KEY, billingAccount.billingAccountNumber);
      this.close();
    }
  }
  close() {
    this.showMenu = false;
  }
  open(event) {
    event?.stopPropagation();
    this.showMenu = true;
  }
  get selectedBillingAccount() {
    return this.facade.selectedBillingAccount;
  }
  getSelectedBillingAccount(billingAccounts) {
    const storedBillingAccount = sessionStorage.getItem(BillingAccountSelectorComponent.BILLING_ACCOUNT_STORAGE_KEY);
    const queryBillingAccount = this.urlService.getRequestParamValue('accountNumber', '');
    return billingAccounts.find(billingAccount => billingAccount.billingAccountNumber === queryBillingAccount) || billingAccounts.find(billingAccount => billingAccount.billingAccountNumber === storedBillingAccount) || billingAccounts[0];
  }
  static #_2 = this.ɵfac = function BillingAccountSelectorComponent_Factory(t) {
    return new (t || BillingAccountSelectorComponent)();
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingAccountSelectorComponent,
    selectors: [["tg-billing-account-selector"]],
    inputs: {
      homePageLink: "homePageLink",
      isTelenetCustomer: "isTelenetCustomer"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["selector", ""], [1, "flex-col", "m--n", "flex-grow"], [1, "col-5", "heading--notopmargin", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], ["data-testid", "billing-overview-billing-accounts-error", 3, "description", "label"], ["data-testid", "billing-overview-no-billing-accounts", 4, "ngIf"], [4, "ngIf"], ["data-testid", "billing-overview-no-billing-accounts"], [3, "homePageLink", "isTelenetCustomer"], ["data-testid", "billing-account-selector-wrapper"], ["data-testid", "selected-billing-account", 4, "ngIf"], ["class", "link cursor--pointer ml--xs", "tabindex", "-1", "data-testid", "change-billing-account", 3, "click", 4, "ngIf"], ["padding", "px--xs", "data-testid", "billing-account-selector", 3, "showMenu", "title", "closeMenu", 4, "ngIf"], ["data-testid", "selected-billing-account"], ["tabindex", "-1", "data-testid", "change-billing-account", 1, "link", "cursor--pointer", "ml--xs", 3, "click"], ["padding", "px--xs", "data-testid", "billing-account-selector", 3, "showMenu", "title", "closeMenu"], ["data-testid", "billing-accounts-list", 1, "justify-content--start", "align-items--start", "flex-direction--column", "display--flex", "flex-wrap--wrap", "border-radius--all--n", "listing--none", "width--full", "mt-0"], ["class", "width--full billing-account", 3, "click", 4, "ngFor", "ngForOf"], [1, "width--full", "billing-account", 3, "click"], [1, "border-width--b--r", "border--b--r", "border-color--all--light-grey", "cursor--pointer", "display--flex", "justify-content--between", "mx--xs", "align-items--center", 3, "ngClass"], [1, "py--l", "justify-content--start", "align-items--center", "flex-direction--row", "display--flex", "flex-wrap--nowrap"], ["data-testid", "billing-accounts-option-number", 4, "ngIf"], ["class", "font--body-small color-shade_72", "data-testid", "billing-accounts-option-address", 4, "ngIf"], [3, "paymentStatus"], [1, "px--xs", "display--flex"], ["class", "ml--xs color-text-t-black-b-white background-brand-primary billing-account-selected text-weight--xxs color-mid-grey", 4, "ngIf"], ["data-testid", "billing-accounts-option-number"], ["data-testid", "billing-accounts-option-address", 1, "font--body-small", "color-shade_72"], [1, "ml--xs", "color-text-t-black-b-white", "background-brand-primary", "billing-account-selected", "text-weight--xxs", "color-mid-grey"], ["appearance", "default", "icon", "tick", "size", "sm"]],
    template: function BillingAccountSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BillingAccountSelectorComponent_ng_container_0_Template, 3, 0, "ng-container", 0)(1, BillingAccountSelectorComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SlideMenuComponent, _billing_account_status_billing_account_status_component__WEBPACK_IMPORTED_MODULE_5__.BillingAccountStatusComponent, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorNotificationComponent, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_6__.WinkIcon, _billing_invoice_overview_ui__WEBPACK_IMPORTED_MODULE_8__.BillingOverviewNoBillingAccountsComponent],
    styles: [".billing-account-selected[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.billing-account[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n}\n.billing-account[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.billing-account[_ngcontent-%COMP%]:active {\n  background-color: rgba(17, 17, 17, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L2ZlYXQtYmlsbGluZy1hY2NvdW50LXNlbGVjdG9yL3NyYy9saWIvYmlsbGluZy1hY2NvdW50LXNlbGVjdG9yL2JpbGxpbmctYWNjb3VudC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7QUFDSjtBQUVFO0VBQ0Usd0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLWFjY291bnQtc2VsZWN0ZWQge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmlsbGluZy1hY2NvdW50IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwNCUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzExMTExMSwgMDglKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47594:
/*!****************************************************************************************************************************************!*\
  !*** ./libs/billing/invoice/overview/feat-billing-account-selector/src/lib/billing-account-status/billing-account-status.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingAccountStatusComponent: () => (/* binding */ BillingAccountStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/invoice-overview/data-access */ 49428);
/* harmony import */ var _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = (a0, a1) => [a0, a1];
class BillingAccountStatusComponent {
  getIcon(paymentStatus) {
    if (paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.OVERDUE) {
      return 'icon-error-shape-filled';
    }
    return paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.PAID ? 'icon-check-shape-filled' : 'icon-information-shape-filled';
  }
  getTextClass(paymentStatus) {
    if (paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.OVERDUE) {
      return 'color-notification--error--light';
    }
    return paymentStatus === _billing_invoice_overview_data_access__WEBPACK_IMPORTED_MODULE_2__.PaymentStatus.PAID ? 'color-notification--success--light' : 'color-notification--info--light';
  }
  static #_ = this.ɵfac = function BillingAccountStatusComponent_Factory(t) {
    return new (t || BillingAccountStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BillingAccountStatusComponent,
    selectors: [["tg-billing-account-status"]],
    inputs: {
      paymentStatus: "paymentStatus"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 8,
    consts: [["data-testid", "billing-accounts-option-status", 1, "display--flex", "align-content--center"], [1, "mr--xs"], ["size", "md", 1, "icon-md", 3, "ngClass"], [1, "billing-status-text", 3, "ngClass"]],
    template: function BillingAccountStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, ctx.getIcon(ctx.paymentStatus), ctx.getTextClass(ctx.paymentStatus)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.getTextClass(ctx.paymentStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "ng.billing-overview.billing-account-selector.lbl.status." + ctx.paymentStatus));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".billing-status-text[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9pbnZvaWNlL292ZXJ2aWV3L2ZlYXQtYmlsbGluZy1hY2NvdW50LXNlbGVjdG9yL3NyYy9saWIvYmlsbGluZy1hY2NvdW50LXN0YXR1cy9iaWxsaW5nLWFjY291bnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLXN0YXR1cy10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_invoice_overview_feat-billing-account-selector_src_index_ts-_31491.js.map