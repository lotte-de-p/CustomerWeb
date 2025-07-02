(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_feat-mybase-dashboard_src_index_ts"],{

/***/ 3372:
/*!*****************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardBillingCardComponent: () => (/* reexport safe */ _lib_mybase_dashboard_billing_card_mybase_dashboard_billing_card_component__WEBPACK_IMPORTED_MODULE_1__.MyBaseDashboardBillingCardComponent),
/* harmony export */   MyBaseDashboardComponent: () => (/* reexport safe */ _lib_mybase_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashboardComponent),
/* harmony export */   MyBaseDashboardInternetUsageCardComponent: () => (/* reexport safe */ _lib_mybase_dashboard_internet_usage_card_mybase_dashboard_internet_usage_card_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardInternetUsageCardComponent),
/* harmony export */   MyBaseDashboardManageProductsComponent: () => (/* reexport safe */ _lib_mybase_dashboard_manage_products_mybase_dashboard_manage_products_component__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardManageProductsComponent),
/* harmony export */   MyBaseDashboardMobileUsageCardComponent: () => (/* reexport safe */ _lib_mybase_dashboard_mobile_usage_card_mybase_dashboard_mobile_usage_card_component__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardMobileUsageCardComponent),
/* harmony export */   MyBaseDashboardSupportAssistanceComponent: () => (/* reexport safe */ _lib_mybase_dashboard_support_assistance_mybase_dashboard_support_assistance_component__WEBPACK_IMPORTED_MODULE_5__.MyBaseDashboardSupportAssistanceComponent),
/* harmony export */   MybaseDashboardOnboardingUsageCardComponent: () => (/* reexport safe */ _lib_mybase_dashboard_onboarding_usage_card_mybase_dashboard_onboarding_usage_card_component__WEBPACK_IMPORTED_MODULE_6__.MybaseDashboardOnboardingUsageCardComponent)
/* harmony export */ });
/* harmony import */ var _lib_mybase_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mybase-dashboard.component */ 51112);
/* harmony import */ var _lib_mybase_dashboard_billing_card_mybase_dashboard_billing_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mybase-dashboard-billing-card/mybase-dashboard-billing-card.component */ 66162);
/* harmony import */ var _lib_mybase_dashboard_manage_products_mybase_dashboard_manage_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mybase-dashboard-manage-products/mybase-dashboard-manage-products.component */ 34018);
/* harmony import */ var _lib_mybase_dashboard_internet_usage_card_mybase_dashboard_internet_usage_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mybase-dashboard-internet-usage-card/mybase-dashboard-internet-usage-card.component */ 99659);
/* harmony import */ var _lib_mybase_dashboard_mobile_usage_card_mybase_dashboard_mobile_usage_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/mybase-dashboard-mobile-usage-card/mybase-dashboard-mobile-usage-card.component */ 9514);
/* harmony import */ var _lib_mybase_dashboard_support_assistance_mybase_dashboard_support_assistance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/mybase-dashboard-support-assistance/mybase-dashboard-support-assistance.component */ 4368);
/* harmony import */ var _lib_mybase_dashboard_onboarding_usage_card_mybase_dashboard_onboarding_usage_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/mybase-dashboard-onboarding-usage-card/mybase-dashboard-onboarding-usage-card.component */ 22259);








/***/ }),

/***/ 66162:
/*!*************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-billing-card/mybase-dashboard-billing-card.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardBillingCardComponent: () => (/* binding */ MyBaseDashboardBillingCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








function MyBaseDashboardBillingCardComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r9);
  }
}
function MyBaseDashboardBillingCardComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r11);
  }
}
function MyBaseDashboardBillingCardComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r13);
  }
}
function MyBaseDashboardBillingCardComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r15);
  }
}
function MyBaseDashboardBillingCardComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r17);
  }
}
function MyBaseDashboardBillingCardComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r19);
  }
}
function MyBaseDashboardBillingCardComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r21);
  }
}
function MyBaseDashboardBillingCardComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r23);
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_15_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.goToBillingDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16)(3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18)(5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-no-open-amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "ng.mybase-dashboard.billing-card.status-no-open-amount"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_17_Conditional_8_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.goToPayNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-pay-now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "ng.mybase-dashboard.billing-card.button.pay-now"), " ");
  }
}
const _c0 = a0 => ({
  dueInDays: a0
});
function MyBaseDashboardBillingCardComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyBaseDashboardBillingCardComponent_ng_template_17_Conditional_8_Template, 4, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-due-bill-single");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, ctx_r10.billingCardViewModel.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 7, "ng.mybase-dashboard.billing-card.status-due-bill-single", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r10.billingCardViewModel.dueInDays)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, ctx_r10.billingCardViewModel.showButton ? 8 : -1);
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23)(11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_19_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.goToViewBills(ctx_r29.billingCardViewModel.accountNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-due-bill-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "ng.mybase-dashboard.billing-card.status-due-bill-multiple-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "ng.mybase-dashboard.billing-card.status-due-bill-multiple-subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-view-bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "ng.mybase-dashboard.billing-card.button.view-bills"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_21_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_21_Conditional_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.goToPayNow(ctx_r32.billingCardViewModel.accountNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-pay-now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "ng.mybase-dashboard.billing-card.button.pay-now"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyBaseDashboardBillingCardComponent_ng_template_21_Conditional_10_Template, 4, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-overdue-bill-single");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, ctx_r14.billingCardViewModel.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 7, "ng.mybase-dashboard.billing-card.status-overdue-bill-single", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r14.billingCardViewModel.dueInDays)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](10, ctx_r14.billingCardViewModel.showButton ? 10 : -1);
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_23_Conditional_10_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.goToViewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-view-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ng.mybase-dashboard.billing-card.button.view-details"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyBaseDashboardBillingCardComponent_ng_template_23_Conditional_10_Template, 3, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-overdue-bill-single");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, ctx_r16.billingCardViewModel.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "ng.mybase-dashboard.billing-card.status-overdue-bill-single-direct-debit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](10, ctx_r16.billingCardViewModel.showButton ? 10 : -1);
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23)(7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_25_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.goToViewBills(ctx_r37.billingCardViewModel.accountNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-overdue-bill-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "ng.mybase-dashboard.billing-card.status-overdue-bill-multiple"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-view-bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "ng.mybase-dashboard.billing-card.button.view-bills"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_27_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.goToViewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-refunds-single");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20AC\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 5, ctx_r20.billingCardViewModel.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "ng.mybase-dashboard.billing-card.status-refund-single"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-view-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, "ng.mybase-dashboard.billing-card.button.view-details"), " ");
  }
}
function MyBaseDashboardBillingCardComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_ng_template_29_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.goToViewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-content-refunds-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "ng.mybase-dashboard.billing-card.status-refund-multiple-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "ng.mybase-dashboard.billing-card.status-refund-multiple-subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card-view-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "ng.mybase-dashboard.billing-card.button.view-details"), " ");
  }
}
class MyBaseDashboardBillingCardComponent {
  set billingAccounts(billingAccounts) {
    this.billingCardViewModel = this.setUpBillingCardViewModel(billingAccounts);
  }
  billingUrl;
  payNowUrl;
  viewBillsUrl;
  viewDetailsUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  billingCardViewModel;
  attributeData;
  // Key to correspond with L3's billing account selector's session storage key (BillingAccountSelectorComponent)
  SESSION_STORAGE_KEY = 'billing-account-selector';
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  setUpBillingCardViewModel(billingAccounts) {
    if (billingAccounts.length === 1) {
      const billAcc = billingAccounts[0];
      return this.setUpBillingCardViewModelForOneBillingAccount(billAcc);
    } else if (billingAccounts.length > 1) {
      return this.setUpBillingCardViewModelForMultipleBillingAccounts(billingAccounts);
    }
    console.warn("There are no billing accounts (which should not happen), so returning 'NO_OPEN_AMOUNT'");
    return {
      type: 'NO_OPEN_AMOUNT'
    };
  }
  setUpBillingCardViewModelForOneBillingAccount(billAcc) {
    // Happy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=627704460
    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201
    // AC #2 (Happy flow)
    if (billAcc.openBills.length === 0 && billAcc.refunds.length === 0) {
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
      return {
        type: 'NO_OPEN_AMOUNT'
      };
    }
    // AC #5 (Unhappy flow)
    if (billAcc.refunds.length) {
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.REFUND_ISSUED);
      if (billAcc.refunds.length === 1) {
        return {
          type: 'REFUND_SINGLE',
          amount: billAcc.refunds[0].amount * -1
        };
      } else {
        return {
          type: 'REFUND_MULTIPLE'
        };
      }
    }
    const dueBills = billAcc.openBills.filter(bill => bill.dueInDays > 0);
    const overDueBills = billAcc.openBills.filter(bill => bill.dueInDays <= 0);
    // AC #4 (Happy flow) and AC #4 (Unhappy flow)
    if (overDueBills.length === 1) {
      if (overDueBills[0].paymentMethod === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL) {
        this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
        return {
          type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
          amount: overDueBills[0].openAmount,
          dueInDays: Math.abs(overDueBills[0].dueInDays),
          showButton: overDueBills[0].showPayNowButton,
          paymentMethod: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL
        };
      } else {
        this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
        return {
          type: 'OVERDUE_SINGLE_PAYMENT_DIRECT_DEBIT',
          amount: overDueBills[0].openAmount,
          dueInDays: Math.abs(overDueBills[0].dueInDays),
          showButton: overDueBills[0].showPayNowButton,
          paymentMethod: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.DIRECT_DEBIT
        };
      }
    } else if (overDueBills.length > 1) {
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return {
        type: 'OVERDUE_MULTIPLE'
      };
    }
    // AC #3 (Happy flow)
    if (dueBills.length) {
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.OUTSTANDING_BILL);
    }
    if (dueBills.length === 1 && dueBills[0].paymentMethod === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL) {
      return {
        type: 'DUE_SINGLE',
        amount: dueBills[0].openAmount,
        dueInDays: dueBills[0].dueInDays,
        showButton: dueBills[0].showPayNowButton
      };
    } else if (dueBills.length > 1) {
      return {
        type: 'DUE_MULTIPLE'
      };
    }
    console.warn("No other cases match when one billing account, so returning 'NO_OPEN_AMOUNT'");
    return {
      type: 'NO_OPEN_AMOUNT'
    };
  }
  setUpBillingCardViewModelForMultipleBillingAccounts(billAccounts) {
    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201
    const allOpenBills = [];
    for (const billAcc of billAccounts) {
      allOpenBills.push(...billAcc.openBills);
    }
    const dueExists = allOpenBills.some(bill => bill.dueInDays > 0);
    const overDueBills = allOpenBills.filter(bill => bill.dueInDays <= 0);
    const atLeastOneManualPayment = overDueBills.some(bill => bill.paymentMethod === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL);
    // AC #8 (Unhappy flow)
    if (overDueBills.length && atLeastOneManualPayment) {
      const matchingBillingAccount = billAccounts.find(billAcc => billAcc.openBills.some(bill => bill.dueInDays <= 0 && bill.paymentMethod === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL));
      const accountNumber = matchingBillingAccount.accountNumber;
      const {
        amount,
        dueInDays
      } = matchingBillingAccount.openBills.reduce((obj, bill) => {
        return {
          amount: obj.amount + bill.openAmount,
          dueInDays: Math.min(obj.dueInDays, bill.dueInDays)
        };
      }, {
        amount: 0,
        dueInDays: 0
      });
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return {
        type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
        amount,
        dueInDays: Math.abs(dueInDays),
        showButton: overDueBills[0].showPayNowButton,
        paymentMethod: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingPaymentMethod.MANUAL,
        accountNumber
      };
    }
    // AC #3 (Unhappy flow)
    if (overDueBills.length) {
      const matchingBillingAccount = billAccounts.find(billAcc => billAcc.openBills.some(bill => bill.dueInDays <= 0));
      const accountNumber = matchingBillingAccount?.accountNumber;
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return {
        type: 'OVERDUE_MULTIPLE',
        accountNumber
      };
    }
    // AC #2 (Unhappy flow)
    if (dueExists) {
      const matchingBillingAccount = billAccounts.find(billAcc => billAcc.openBills.some(bill => bill.dueInDays > 0));
      const accountNumber = matchingBillingAccount?.accountNumber;
      this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.OUTSTANDING_BILL);
      return {
        type: 'DUE_MULTIPLE',
        accountNumber
      };
    }
    console.warn("No other cases match when multiple billing accounts, so returning 'NO_OPEN_AMOUNT'");
    this.sendAnalyticsData(false, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
    return {
      type: 'NO_OPEN_AMOUNT'
    };
  }
  goToBillingDetail() {
    this.sendAnalyticsData(true, this.attributeData, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD, this.billingUrl);
    this.urlService.redirectTo(this.billingUrl);
  }
  goToPayNow(preSelectedAccountNumber) {
    if (preSelectedAccountNumber) {
      window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, preSelectedAccountNumber);
    }
    this.sendAnalyticsData(true, this.attributeData, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeGroup.PAY_NOW_BUTTON, this.payNowUrl);
    this.urlService.redirectTo(this.payNowUrl);
  }
  goToViewBills(preSelectedAccountNumber) {
    if (preSelectedAccountNumber) {
      window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, preSelectedAccountNumber);
    }
    this.sendAnalyticsData(true, this.attributeData, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeGroup.VIEW_BILLS_BUTTON, this.viewBillsUrl);
    this.urlService.redirectTo(this.viewBillsUrl);
  }
  goToViewDetails() {
    this.sendAnalyticsData(true, this.attributeData, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeGroup.VIEW_DETAILS_LINK, this.viewDetailsUrl);
    this.urlService.redirectTo(this.viewDetailsUrl);
  }
  sendAnalyticsData(isClick, attributeData, attributeGroup, destinationUrl) {
    if (!isClick) {
      this.attributeData = attributeData;
    }
    const myBaseDashbaordAnalyticsData = {
      eventName: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.BILLING,
      attributeData: this.attributeData || attributeData,
      attributeGroup: attributeGroup,
      destinationUrl: destinationUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardBillingCardComponent_Factory(t) {
    return new (t || MyBaseDashboardBillingCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardBillingCardComponent,
    selectors: [["tg-mybase-dashboard-billing-card"]],
    inputs: {
      billingAccounts: "billingAccounts",
      billingUrl: "billingUrl",
      payNowUrl: "payNowUrl",
      viewBillsUrl: "viewBillsUrl",
      viewDetailsUrl: "viewDetailsUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 5,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "mt--l--md"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override", "display--flex", "align-items--center"], ["noOpenAmount", ""], ["dueBillSingle", ""], ["dueBillMultiple", ""], ["overDueBillSinglePaymentManual", ""], ["overDueBillSinglePaymentDirectDebit", ""], ["overDueBillMultiple", ""], ["refundsSingle", ""], ["refundsMultiple", ""], [3, "ngTemplateOutlet"], [1, "mybase-dashboard--card--content"], [1, "cursor--pointer", "display--flex", "flex-direction--column", "align-items--center", 3, "click"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/happy-bills.svg", 1, "hide-until-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/happy-bills-mobile-view.svg", 1, "hide-from-md", 3, "moduleId"], [1, "mybase-dashboard--card--content--status", "mt--xxs"], [1, "heading--6", "m--n"], [1, "text-flow", "text-flow--h3"], [1, "font--body-small", "color-shade_72"], ["class", "display--flex mt--l"], [1, "display--flex", "mt--l"], [1, "button", "button--primary", "button--alternate", "flex-grow", 3, "click"], [1, ""], [1, "display--flex", "align-items--center"], [1, "icon", "icon-md", "icon-bill", "mr--xs", "icon-no-size-override"], [1, "heading--6", "mt--n"], [1, "color-red", "icon-md", "icon", "icon-error-shape-filled", "mr--xs", "icon-no-size-override"], ["class", "display--flex justify-content--end mt--l"], [1, "display--flex", "justify-content--end", "mt--l"], ["class", "display--inline-block text-flow text-flow--h6 width--fit-content border-style--b--solid border-width--b--b cursor--pointer--hover mt--l", "style", "color: #00807b"], [1, "display--inline-block", "text-flow", "text-flow--h6", "width--fit-content", "border-style--b--solid", "border-width--b--b", "cursor--pointer--hover", "mt--l", 2, "color", "#00807b", 3, "click"], [1, "color-red", "icon", "icon-md", "icon-error-shape-filled", "mr--xs", "icon-no-size-override"]],
    template: function MyBaseDashboardBillingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardBillingCardComponent_Template_div_click_1_listener() {
          return ctx.goToBillingDetail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyBaseDashboardBillingCardComponent_Case_7_Template, 1, 1)(8, MyBaseDashboardBillingCardComponent_Case_8_Template, 1, 1)(9, MyBaseDashboardBillingCardComponent_Case_9_Template, 1, 1)(10, MyBaseDashboardBillingCardComponent_Case_10_Template, 1, 1)(11, MyBaseDashboardBillingCardComponent_Case_11_Template, 1, 1)(12, MyBaseDashboardBillingCardComponent_Case_12_Template, 1, 1)(13, MyBaseDashboardBillingCardComponent_Case_13_Template, 1, 1)(14, MyBaseDashboardBillingCardComponent_Case_14_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MyBaseDashboardBillingCardComponent_ng_template_15_Template, 8, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(17, MyBaseDashboardBillingCardComponent_ng_template_17_Template, 9, 12, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(19, MyBaseDashboardBillingCardComponent_ng_template_19_Template, 14, 11, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(21, MyBaseDashboardBillingCardComponent_ng_template_21_Template, 11, 12, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(23, MyBaseDashboardBillingCardComponent_ng_template_23_Template, 11, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(25, MyBaseDashboardBillingCardComponent_ng_template_25_Template, 10, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(27, MyBaseDashboardBillingCardComponent_ng_template_27_Template, 11, 12, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(29, MyBaseDashboardBillingCardComponent_ng_template_29_Template, 11, 11, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let MyBaseDashboardBillingCardComponent_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-billing-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "ng.mybase-dashboard.billing-card.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](7, (MyBaseDashboardBillingCardComponent_contFlowTmp = ctx.billingCardViewModel.type) === "NO_OPEN_AMOUNT" ? 7 : MyBaseDashboardBillingCardComponent_contFlowTmp === "DUE_SINGLE" ? 8 : MyBaseDashboardBillingCardComponent_contFlowTmp === "DUE_MULTIPLE" ? 9 : MyBaseDashboardBillingCardComponent_contFlowTmp === "OVERDUE_SINGLE_PAYMENT_MANUAL" ? 10 : MyBaseDashboardBillingCardComponent_contFlowTmp === "OVERDUE_SINGLE_PAYMENT_DIRECT_DEBIT" ? 11 : MyBaseDashboardBillingCardComponent_contFlowTmp === "OVERDUE_MULTIPLE" ? 12 : MyBaseDashboardBillingCardComponent_contFlowTmp === "REFUND_SINGLE" ? 13 : MyBaseDashboardBillingCardComponent_contFlowTmp === "REFUND_MULTIPLE" ? 14 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.mybase-dashboard--card--content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  flex: 1;\n}\n.mybase-dashboard--card--content[_ngcontent-%COMP%]   .icons-circle[_ngcontent-%COMP%] {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtYmlsbGluZy1jYXJkL215YmFzZS1kYXNoYm9hcmQtYmlsbGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbIi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICYtLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcblxuICAgIC5pY29ucy1jaXJjbGUge1xuICAgICAgd2lkdGg6IDIuNHJlbTtcbiAgICAgIGhlaWdodDogMi40cmVtO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99659:
/*!***************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-internet-usage-card/mybase-dashboard-internet-usage-card.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardInternetUsageCardComponent: () => (/* binding */ MyBaseDashboardInternetUsageCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__);










function MyBaseDashboardInternetUsageCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-header-icon");
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardInternetUsageCardComponent_Conditional_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.redirectToUsage(ctx_r3.smoothSurfing));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9)(3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-status-ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-smooth-surfing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-smooth-surfing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "ng.mybase-dashboard.usages.smooth-surfing"), " ");
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-limit-almost-reached-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("- ", ctx_r14.getCompleteAddress(usage_r6.address.street, usage_r6.address.houseNumber, usage_r6.address.subHouseNumber, usage_r6.address.boxNumber), " ", usage_r6.address.postalCode, " ", usage_r6.address.municipality, ", ", usage_r6.address.country, "");
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18)(2, "div", 19)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_4_Conditional_9_Template, 2, 5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-limit-almost-reached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.mybase-dashboard.limit-almost-reached-internet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usage_r6.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, ctx_r11.internetUsage.length > 1 && usage_r6.address ? 9 : -1);
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-limit-exceeded-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("- ", ctx_r17.getCompleteAddress(usage_r6.address.street, usage_r6.address.houseNumber, usage_r6.address.subHouseNumber, usage_r6.address.boxNumber), " ", usage_r6.address.postalCode, " ", usage_r6.address.municipality, ", ", usage_r6.address.country, "");
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18)(2, "div", 19)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_5_Conditional_9_Template, 2, 5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-limit-exceeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.mybase-dashboard.limit-exceeded-internet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usage_r6.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, ctx_r12.internetUsage.length > 1 && usage_r6.address ? 9 : -1);
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18)(2, "div", 19)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card-limit-exceeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "ng.mybase-dashboard.slow-speed-internet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usage_r6.productName, " ");
  }
}
const _c0 = a0 => ({
  "pt--xs": a0
});
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const usage_r6 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.redirectToUsage(true, usage_r6.productIdentifier));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_4_Template, 10, 6)(5, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_5_Template, 10, 6)(6, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Case_6_Template, 9, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const usage_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    let MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_contFlowTmp;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !($index_r7 === 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, (MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_contFlowTmp = usage_r6.usageStatus) === "LIMIT_ALMOST_REACHED" ? 4 : MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_contFlowTmp === "LIMIT_EXCEEDED" ? 5 : MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_contFlowTmp === "LIMIT_EXCEEDED_SLOW_SPEED" ? 6 : -1);
  }
}
function MyBaseDashboardInternetUsageCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, MyBaseDashboardInternetUsageCardComponent_Conditional_9_For_1_Template, 7, 4, "div", 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r2.internetUsage);
  }
}
const _c1 = a0 => ({
  "cursor--pointer": a0
});
class MyBaseDashboardInternetUsageCardComponent {
  urlService;
  internetUsage;
  internetUsagePageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  smoothSurfing = false;
  isLimitWarning = false;
  isLimitReached = false;
  constructor(urlService) {
    this.urlService = urlService;
  }
  ngOnInit() {
    this.smoothSurfing = this.internetUsage.every(usage => usage.usageStatus === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.OK);
    this.isLimitWarning = this.internetUsage.some(usage => usage.usageStatus === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_ALMOST_REACHED);
    this.isLimitReached = this.internetUsage.some(usage => [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED].includes(usage.usageStatus));
    this.sendAnalyticsData(false);
  }
  getCompleteAddress(street, houseNo, subHouseNo, boxNo) {
    if (!street || !houseNo) {
      return;
    }
    let completeAddress = street.concat(' ').concat(houseNo);
    if (subHouseNo) {
      completeAddress = completeAddress.concat('/', subHouseNo);
    }
    if (boxNo) {
      completeAddress = completeAddress.concat('/', boxNo);
    }
    return completeAddress;
  }
  redirectToUsage(clickable = true, productIdentifier) {
    if (!clickable) {
      return;
    }
    if (productIdentifier) {
      window.sessionStorage.setItem(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__.AddressSelectorComponent.SESSION_STORAGE_KEY, productIdentifier);
    }
    this.sendAnalyticsData(true);
    this.urlService.redirectTo(this.internetUsagePageUrl);
  }
  getAttributeData() {
    switch (true) {
      case this.isLimitReached:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_REACHED;
      case this.isLimitWarning:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_WARNING;
      case this.smoothSurfing:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD;
      default:
        return '';
    }
  }
  sendAnalyticsData(isClick) {
    const myBaseDashbaordAnalyticsData = {
      eventName: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE,
      attributeData: this.getAttributeData(),
      attributeGroup: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeGroup.USAGE_DETAILS_LINK : undefined,
      destinationUrl: isClick ? this.internetUsagePageUrl : undefined
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardInternetUsageCardComponent_Factory(t) {
    return new (t || MyBaseDashboardInternetUsageCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyBaseDashboardInternetUsageCardComponent,
    selectors: [["tg-mybase-dashboard-internet-usage-card"]],
    inputs: {
      internetUsage: "internetUsage",
      internetUsagePageUrl: "internetUsagePageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 10,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "mt--l--md"], [1, "display--flex", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "ngClass", "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], ["class", "icon icon-md icon-chevron-right color-shade_48 icon-no-size-override display--flex align-items--center"], ["class", "mybase-dashboard--card--content cursor--pointer"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override", "display--flex", "align-items--center"], [1, "mybase-dashboard--card--content", "cursor--pointer", 3, "click"], [1, "display--flex", "flex-direction--column", "align-items--center"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/internet-usage.svg", 1, "hide-until-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/internet-usage-mobile-view.svg", 1, "hide-from-md", 3, "moduleId"], [1, "mybase-dashboard--card--content--status", "mt--xxs"], [1, "heading--6", "m--n"], [1, "mybase-dashboard--card--content", "display--flex", "justify-content--between", 3, "ngClass"], [1, "display--flex", "flex-grow", "cursor--pointer--hover", "overflow-hidden-flex", 3, "click"], [1, "mybase-dashboard--card--content--status", "overflow-hidden-flex"], [1, "display--flex"], [1, "icon", "icon-alert-shape-filled", "color-orange", "icon-md", "icon-no-size-override"], [1, "heading--6", "mt--n", "ml--xs", "overflow-hidden-flex"], [1, "display--flex", "justify-content--between"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], ["data-cs-mask", "", 1, "font--body-small", "color-shade_72", "mt--xxxs", "text-ellipsis"], [1, "icon", "icon-error-shape-filled", "color-red", "icon-md", "icon-no-size-override"], [1, "font--body-small", "color-shade_72"], ["class", "mybase-dashboard--card--content display--flex justify-content--between", 3, "ngClass"]],
    template: function MyBaseDashboardInternetUsageCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardInternetUsageCardComponent_Template_div_click_1_listener() {
          return ctx.redirectToUsage(ctx.smoothSurfing);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyBaseDashboardInternetUsageCardComponent_Conditional_6_Template, 1, 1, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyBaseDashboardInternetUsageCardComponent_Conditional_8_Template, 8, 8, "div", 5)(9, MyBaseDashboardInternetUsageCardComponent_Conditional_9_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-internet-usage-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.smoothSurfing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "ng.mybase-dashboard.internet-usage-card.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx.smoothSurfing ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-usage-card-internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx.smoothSurfing ? 8 : 9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mybase-dashboard--card[_ngcontent-%COMP%]   .text-ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mybase-dashboard--card[_ngcontent-%COMP%]   .overflow-hidden-flex[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: 1;\n}\n\n.mybase-dashboard--card--content--flex-basis[_ngcontent-%COMP%] {\n  flex-basis: 4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtaW50ZXJuZXQtdXNhZ2UtY2FyZC9teWJhc2UtZGFzaGJvYXJkLWludGVybmV0LXVzYWdlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLE9BQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIubXliYXNlLWRhc2hib2FyZC0tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcblxuICAudGV4dC1lbGxpcHNpcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLm92ZXJmbG93LWhpZGRlbi1mbGV4IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkLS1jb250ZW50LS1mbGV4LWJhc2lzIHtcbiAgZmxleC1iYXNpczogNHJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 34018:
/*!*******************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-manage-products/mybase-dashboard-manage-products.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardManageProductsComponent: () => (/* binding */ MyBaseDashboardManageProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








const _c0 = (a1, a2, a3) => ({
  key: "mobile",
  last: a1,
  products: a2,
  pending: a3
});
function MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 3);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, !ctx_r5.products["internet"] && !ctx_r5.products["dtv"], ctx_r5.products["mobile"], ctx_r5.pendingProducts["mobile"]));
  }
}
const _c1 = (a1, a2, a3) => ({
  key: "internet",
  last: a1,
  products: a2,
  pending: a3
});
function MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 3);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c1, !ctx_r6.products["dtv"], ctx_r6.products["internet"], ctx_r6.pendingProducts["internet"]));
  }
}
const _c2 = (a2, a3) => ({
  key: "dtv",
  last: true,
  products: a2,
  pending: a3
});
function MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 3);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, ctx_r7.products["dtv"], ctx_r7.pendingProducts["dtv"]));
  }
}
function MyBaseDashboardManageProductsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_3_Template, 1, 6, "ng-container", 3)(4, MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_4_Template, 1, 6, "ng-container", 3)(5, MyBaseDashboardManageProductsComponent_Conditional_0_Conditional_5_Template, 1, 5, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "ng.mybase-dashboard.manage-products.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx_r0.products["mobile"] ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, ctx_r0.products["internet"] ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, ctx_r0.products["dtv"] ? 5 : -1);
  }
}
const _c3 = a0 => ({
  "mb--m--l": a0
});
const _c4 = (a0, a1, a2, a3) => ({
  key: a0,
  last: a1,
  products: a2,
  pending: a3
});
function MyBaseDashboardManageProductsComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const last_r10 = ctx_r14.last;
    const key_r8 = ctx_r14.key;
    const products_r9 = ctx_r14.products;
    const pending_r11 = ctx_r14.pending;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, !last_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-manage-products-card-pending-" + key_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](6, _c4, key_r8, last_r10, products_r9, pending_r11));
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseDashboardManageProductsComponent_ng_template_1_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().key;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.redirectTo(key_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const last_r10 = ctx_r18.last;
    const key_r8 = ctx_r18.key;
    const products_r9 = ctx_r18.products;
    const pending_r11 = ctx_r18.pending;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, !last_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-manage-products-card-" + key_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](6, _c4, key_r8, last_r10, products_r9, pending_r11));
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBaseDashboardManageProductsComponent_ng_template_1_Conditional_0_Template, 2, 11, "div", 4)(1, MyBaseDashboardManageProductsComponent_ng_template_1_Conditional_1_Template, 2, 11);
  }
  if (rf & 2) {
    const pending_r11 = ctx.pending;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, pending_r11 ? 0 : 1);
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().products;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = products_r20.at(0)) == null ? null : tmp_0_0.productName, " ");
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().products;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", products_r20.length, "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ng.mybase-dashboard.manage-products.products-suffix-label"), "");
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 13);
  }
}
function MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-manage-products-card-pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "ng.mybase-dashboard.manage-products.pending-label"));
  }
}
const _c5 = a0 => ({
  "opacity--mid-transparency": a0
});
function MyBaseDashboardManageProductsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_6_Template, 2, 1, "div", 10)(7, MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_7_Template, 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_8_Template, 1, 0, "div", 11)(9, MyBaseDashboardManageProductsComponent_ng_template_3_Conditional_9_Template, 4, 4);
  }
  if (rf & 2) {
    const key_r19 = ctx.key;
    const products_r20 = ctx.products;
    const pending_r22 = ctx.pending;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c5, pending_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon icon-md ", ctx_r3.iconMap[key_r19], " icon-no-size-override");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c5, pending_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "ng.mybase-dashboard.manage-products.product-title-" + key_r19), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, products_r20.length === 1 ? 6 : products_r20.length > 1 ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, !pending_r22 ? 8 : 9);
  }
}
class MyBaseDashboardManageProductsComponent {
  set data(data) {
    this.showCard = data.showCard;
    const products = {};
    if (data.mobile?.products.length) products['mobile'] = data.mobile.products;
    if (data.dtv?.products.length) products['dtv'] = data.dtv.products;
    if (data.internet?.products.length) products['internet'] = data.internet.products;
    this.pendingProducts['mobile'] = data.mobile?.pending;
    this.pendingProducts['internet'] = data.internet?.pending;
    this.pendingProducts['dtv'] = data.dtv?.pending;
    this.products = products;
  }
  manageProductsMobileLink;
  manageProductsInternetLink;
  manageProductsDTVLink;
  showCard = true;
  products = {};
  pendingProducts = {};
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  iconMap = {
    dtv: 'icon-tv',
    internet: 'icon-wifi',
    mobile: 'icon-mobile'
  };
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  redirectTo(productType) {
    const url = this.getUrl(productType);
    this.sendAnalyticsData(productType, url);
    this.urlService.redirectTo(url);
  }
  getUrl(productType) {
    switch (productType) {
      case 'mobile':
        return this.manageProductsMobileLink;
      case 'internet':
        return this.manageProductsInternetLink;
      case 'dtv':
        return this.manageProductsDTVLink;
      default:
        return '';
    }
  }
  sendAnalyticsData(productType, destinationUrl) {
    const myBaseDashbaordAnalyticsData = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName['MANAGE_' + productType.toUpperCase()],
      destinationUrl: destinationUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardManageProductsComponent_Factory(t) {
    return new (t || MyBaseDashboardManageProductsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardManageProductsComponent,
    selectors: [["tg-mybase-dashboard-manage-products"]],
    inputs: {
      data: "data",
      manageProductsMobileLink: "manageProductsMobileLink",
      manageProductsInternetLink: "manageProductsInternetLink",
      manageProductsDTVLink: "manageProductsDTVLink"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [["card", ""], ["cardInfo", ""], [1, "heading--4", "mt--n", "mb--s"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "display--flex align-items--center p--m p--l--lg background-white mb--s user-select--none", 3, "ngClass"], [1, "display--flex", "align-items--center", "p--m", "p--l--lg", "background-white", "mb--s", "user-select--none", 3, "ngClass"], [1, "display--flex", "align-items--center", "p--m", "p--l--lg", "background-white", "mb--s", "cursor--pointer--hover", 3, "ngClass", "click"], [1, "display--flex", "justify-content--center", "align-items--center", "mr--s", "product-icon", 3, "ngClass"], [1, "display--flex", "flex-grow", "flex-direction--column", 3, "ngClass"], [1, "heading--6", "heading--nomargin"], ["class", "font--body-small color-shade_72"], ["class", "icon icon-md icon-chevron-right color-shade_48 icon-no-size-override"], [1, "font--body-small", "color-shade_72"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "status-indicator", "display--inline-block", "vertical-align--middle", "status-indicator", "status-indicator--inactive"]],
    template: function MyBaseDashboardManageProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBaseDashboardManageProductsComponent_Conditional_0_Template, 6, 6)(1, MyBaseDashboardManageProductsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(3, MyBaseDashboardManageProductsComponent_ng_template_3_Template, 10, 14, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.showCard ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".product-icon[_ngcontent-%COMP%] {\n  height: 4.8rem;\n  min-width: 4.8rem;\n  background-color: #b8e2e1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtbWFuYWdlLXByb2R1Y3RzL215YmFzZS1kYXNoYm9hcmQtbWFuYWdlLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWljb24ge1xuICBoZWlnaHQ6IDQuOHJlbTtcbiAgbWluLXdpZHRoOiA0LjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGUyZTE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9514:
/*!***********************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-mobile-usage-card/mybase-dashboard-mobile-usage-card.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardMobileUsageCardComponent: () => (/* binding */ MyBaseDashboardMobileUsageCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__);










function MyBaseDashboardMobileUsageCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-header-icon");
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageCardComponent_Conditional_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.redirectToUsage(ctx_r5.smoothSurfing));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10)(3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-status-ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-smooth-surfing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-smooth-surfing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "ng.mybase-dashboard.usages.smooth-surfing"), " ");
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
  }
  if (rf & 2) {
    const usage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-limit-almost-reached-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, usage_r8.msisdn));
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_4_Conditional_8_Template, 4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-limit-almost-reached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.mybase-dashboard.limit-almost-reached-mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx_r13.mobileUsage.length > 1 ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usage_r8.productName, " ");
  }
}
const _c0 = a0 => ({
  usage: a0
});
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 23);
  }
  if (rf & 2) {
    const usage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, usage_r8));
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 23);
  }
  if (rf & 2) {
    const usage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, usage_r8));
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const usage_r8 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.redirectToUsage(true, usage_r8.msisdn));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_4_Template, 10, 6)(5, MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_5_Template, 1, 4)(6, MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Case_6_Template, 1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const usage_r8 = ctx.$implicit;
    let MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_contFlowTmp;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, (MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_contFlowTmp = usage_r8.usageStatus) === "LIMIT_ALMOST_REACHED" ? 4 : MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_contFlowTmp === "LIMIT_EXCEEDED" ? 5 : MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_contFlowTmp === "LIMIT_EXCEEDED_SLOW_SPEED" ? 6 : -1);
  }
}
function MyBaseDashboardMobileUsageCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, MyBaseDashboardMobileUsageCardComponent_Conditional_9_For_1_Template, 7, 1, "div", 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r2.mobileUsage);
  }
}
function MyBaseDashboardMobileUsageCardComponent_ng_template_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
  }
  if (rf & 2) {
    const usage_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().usage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-limit-exceeded-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, usage_r23.msisdn));
  }
}
function MyBaseDashboardMobileUsageCardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyBaseDashboardMobileUsageCardComponent_ng_template_10_Conditional_8_Template, 4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usage_r23 = ctx.usage;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card-limit-exceeded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.mybase-dashboard.limit-exceeded-mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx_r3.mobileUsage.length > 1 ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usage_r23.productName, " ");
  }
}
const _c1 = a0 => ({
  "cursor--pointer": a0
});
class MyBaseDashboardMobileUsageCardComponent {
  urlService;
  mobileUsage;
  mobileUsagePageUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  smoothSurfing = false;
  isLimitWarning = false;
  isLimitReached = false;
  constructor(urlService) {
    this.urlService = urlService;
  }
  ngOnInit() {
    this.smoothSurfing = this.mobileUsage.every(usage => usage.usageStatus === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.OK);
    this.isLimitWarning = this.mobileUsage.some(usage => usage.usageStatus === _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_ALMOST_REACHED);
    this.isLimitReached = this.mobileUsage.some(usage => [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.UsageStatusEnum.LIMIT_EXCEEDED].includes(usage.usageStatus));
    this.sendAnalyticsData(false);
  }
  redirectToUsage(clickable = true, msisdn) {
    if (!clickable) {
      return;
    }
    if (msisdn) {
      window.sessionStorage.setItem(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__.LineSelectorComponent.SESSION_STORAGE_KEY, msisdn);
    }
    this.sendAnalyticsData(true);
    this.urlService.redirectTo(this.mobileUsagePageUrl);
  }
  getAttributeData() {
    switch (true) {
      case this.isLimitReached:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_REACHED;
      case this.isLimitWarning:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_WARNING;
      case this.smoothSurfing:
        return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD;
      default:
        return '';
    }
  }
  sendAnalyticsData(isClick) {
    const myBaseDashbaordAnalyticsData = {
      eventName: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.MOBILE_USAGE,
      attributeData: this.getAttributeData(),
      attributeGroup: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeGroup.USAGE_DETAILS_LINK : undefined,
      destinationUrl: isClick ? this.mobileUsagePageUrl : undefined
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardMobileUsageCardComponent_Factory(t) {
    return new (t || MyBaseDashboardMobileUsageCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyBaseDashboardMobileUsageCardComponent,
    selectors: [["tg-mybase-dashboard-mobile-usage-card"]],
    inputs: {
      mobileUsage: "mobileUsage",
      mobileUsagePageUrl: "mobileUsagePageUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 9,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "mt--l--md"], [1, "display--flex", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "ngClass", "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], ["class", "icon icon-md icon-chevron-right color-shade_48 icon-no-size-override display--flex align-items--center"], ["class", "mybase-dashboard--card--content cursor--pointer"], ["limitExceeded", ""], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override", "display--flex", "align-items--center"], [1, "mybase-dashboard--card--content", "cursor--pointer", 3, "click"], [1, "display--flex", "flex-direction--column", "align-items--center"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/mobile-usage.svg", 1, "hide-until-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/mobile-usage-mobile-view.svg", 1, "hide-from-md", 3, "moduleId"], [1, "mybase-dashboard--card--content--status", "mt--xxs"], [1, "heading--6", "m--n"], [1, "mybase-dashboard--card--content", "display--flex", "justify-content--between", "pt--xs"], [1, "display--flex", "flex-grow", "cursor--pointer--hover", 3, "click"], [1, "mybase-dashboard--card--content--status", "flex--1"], [1, "display--flex"], [1, "icon", "icon-alert-shape-filled", "color-orange", "icon-md", "icon-no-size-override"], [1, "heading--6", "m--n", "ml--xs", "flex--1"], [1, "display--flex", "justify-content--between"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], ["data-cs-mask", "", 1, "font--body-small", "color-shade_72"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mybase-dashboard--card--content display--flex justify-content--between pt--xs"], [1, "icon", "icon-error-shape-filled", "color-red", "icon-md", "icon-no-size-override"]],
    template: function MyBaseDashboardMobileUsageCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardMobileUsageCardComponent_Template_div_click_1_listener() {
          return ctx.redirectToUsage(ctx.smoothSurfing);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyBaseDashboardMobileUsageCardComponent_Conditional_6_Template, 1, 1, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyBaseDashboardMobileUsageCardComponent_Conditional_8_Template, 8, 8, "div", 5)(9, MyBaseDashboardMobileUsageCardComponent_Conditional_9_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyBaseDashboardMobileUsageCardComponent_ng_template_10_Template, 10, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-mobile-usage-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.smoothSurfing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "ng.mybase-dashboard.mobile-usage-card.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx.smoothSurfing ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx.smoothSurfing ? 8 : 9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mybase-dashboard--card[_ngcontent-%COMP%]   .flex--1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.mybase-dashboard--card--content--flex-basis[_ngcontent-%COMP%] {\n  flex-basis: 4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtbW9iaWxlLXVzYWdlLWNhcmQvbXliYXNlLWRhc2hib2FyZC1tb2JpbGUtdXNhZ2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsT0FBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5mbGV4LS0xIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4ubXliYXNlLWRhc2hib2FyZC0tY2FyZC0tY29udGVudC0tZmxleC1iYXNpcyB7XG4gIGZsZXgtYmFzaXM6IDRyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 22259:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-onboarding-usage-card/mybase-dashboard-onboarding-usage-card.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MybaseDashboardOnboardingUsageCardComponent: () => (/* binding */ MybaseDashboardOnboardingUsageCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);








function MybaseDashboardOnboardingUsageCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10)(1, "img", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12)(1, "img", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14)(1, "img", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16)(1, "img", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-mybase-dashboard");
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-onboarding-card-no-bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.mybase-dashboard.onboarding.no-bills-label"), " ");
  }
}
function MybaseDashboardOnboardingUsageCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-onboarding-card-coming-soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.mybase-dashboard.onboarding.coming-soon-label"));
  }
}
const _c0 = (a0, a1) => ({
  "cursor--pointer": a0,
  "color-shade_48": a1
});
const _c1 = (a0, a1) => ({
  "cursor--pointer": a0,
  "user-select--none": a1
});
class MybaseDashboardOnboardingUsageCardComponent {
  title;
  cardType;
  billingUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  goToBillingDetail() {
    this.sendAnalyticsData();
    this.urlService.redirectTo(this.billingUrl);
  }
  sendAnalyticsData() {
    const myBaseDashbaordAnalyticsData = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeName.BILLING,
      destinationUrl: this.billingUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MybaseDashboardOnboardingUsageCardComponent_Factory(t) {
    return new (t || MybaseDashboardOnboardingUsageCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MybaseDashboardOnboardingUsageCardComponent,
    selectors: [["tg-mybase-dashboard-onboarding-usage-card"]],
    inputs: {
      title: "title",
      cardType: "cardType",
      billingUrl: "billingUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 15,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "mt--l--md"], [1, "display--flex", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "ngClass", "click"], [1, "mybase-dashboard--card--title", "display--flex", "user-select--none"], [1, "text-flow", "text-flow--h5"], ["class", "icon icon-md icon-chevron-right color-shade_48 icon-no-size-override display--flex align-items--center"], [1, "mybase-dashboard--card--content"], [1, "display--flex", "flex-direction--column", "align-items--center", 3, "ngClass", "click"], [1, "mybase-dashboard--card--content--status", "mt--m"], ["class", "heading--6 m--n"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override", "display--flex", "align-items--center"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-billing.svg", 1, "hide-until-md", "mybase-dashboard-image", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-billing.svg", 1, "hide-from-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-mobile.svg", 1, "hide-until-md", "mybase-dashboard-image", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-mobile.svg", 1, "hide-from-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-internet.svg", 1, "hide-until-md", "mybase-dashboard-image", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-internet.svg", 1, "hide-from-md", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-home-network.svg", 1, "hide-until-md", "mybase-dashboard-image", 3, "moduleId"], ["appMybaseDashboardImageSrcInterceptor", "", "src", "/assets/pending-home-network.svg", 1, "hide-from-md", 3, "moduleId"], [1, "heading--6", "m--n"], [1, "status-indicator", "display--inline-block", "vertical-align--middle", "status-indicator", "status-indicator--inactive"]],
    template: function MybaseDashboardOnboardingUsageCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MybaseDashboardOnboardingUsageCardComponent_Template_div_click_1_listener() {
          return ctx.cardType === "billing" && ctx.goToBillingDetail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MybaseDashboardOnboardingUsageCardComponent_Conditional_6_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MybaseDashboardOnboardingUsageCardComponent_Template_div_click_8_listener() {
          return ctx.cardType === "billing" && ctx.goToBillingDetail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MybaseDashboardOnboardingUsageCardComponent_Case_9_Template, 2, 2)(10, MybaseDashboardOnboardingUsageCardComponent_Case_10_Template, 2, 2)(11, MybaseDashboardOnboardingUsageCardComponent_Case_11_Template, 2, 2)(12, MybaseDashboardOnboardingUsageCardComponent_Case_12_Template, 2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MybaseDashboardOnboardingUsageCardComponent_Conditional_14_Template, 3, 4, "div", 8)(15, MybaseDashboardOnboardingUsageCardComponent_Conditional_15_Template, 4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        let MybaseDashboardOnboardingUsageCardComponent_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-onboarding-" + ctx.cardType + "-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.cardType === "billing", ctx.cardType !== "billing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx.cardType === "billing" ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c1, ctx.cardType === "billing", ctx.cardType !== "billing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, (MybaseDashboardOnboardingUsageCardComponent_contFlowTmp = ctx.cardType) === "billing" ? 9 : MybaseDashboardOnboardingUsageCardComponent_contFlowTmp === "mobile" ? 10 : MybaseDashboardOnboardingUsageCardComponent_contFlowTmp === "internet" ? 11 : MybaseDashboardOnboardingUsageCardComponent_contFlowTmp === "home-network" ? 12 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](14, ctx.cardType === "billing" ? 14 : 15);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.ImageSrcInterceptorDirective],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mybase-dashboard--card[_ngcontent-%COMP%]   .flex--1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mybase-dashboard--card[_ngcontent-%COMP%]   .mybase-dashboard-image[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n\n.mybase-dashboard--card--content--flex-basis[_ngcontent-%COMP%] {\n  flex-basis: 4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQtb25ib2FyZGluZy11c2FnZS1jYXJkL215YmFzZS1kYXNoYm9hcmQtb25ib2FyZGluZy11c2FnZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIubXliYXNlLWRhc2hib2FyZC0tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcblxuICAuZmxleC0tMSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5teWJhc2UtZGFzaGJvYXJkLWltYWdlIHtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG59XG4ubXliYXNlLWRhc2hib2FyZC0tY2FyZC0tY29udGVudC0tZmxleC1iYXNpcyB7XG4gIGZsZXgtYmFzaXM6IDRyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4368:
/*!*************************************************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard-support-assistance/mybase-dashboard-support-assistance.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardSupportAssistanceComponent: () => (/* binding */ MyBaseDashboardSupportAssistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);









const _c0 = a0 => ({
  "display--block mb--m": a0
});
function MyBaseDashboardSupportAssistanceComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-mybase-simple-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cardClicked", function MyBaseDashboardSupportAssistanceComponent_Conditional_0_For_4_Template_tg_mybase_simple_card_cardClicked_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const card_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.redirectTo(card_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const $count_r5 = ctx.$count;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, "ng.mybase-dashboard.support-assistance.card-" + card_r2))("cypressTag", "mybase-dashboard-support-assistance-card-" + card_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !($index_r3 === $count_r5 - 1)))("isExternalLink", ctx_r1.externalLinks.includes(card_r2));
  }
}
function MyBaseDashboardSupportAssistanceComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](3, MyBaseDashboardSupportAssistanceComponent_Conditional_0_For_4_Template, 2, 8, "tg-mybase-simple-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ng.mybase-dashboard.support-assistance.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.cards);
  }
}
class MyBaseDashboardSupportAssistanceComponent {
  watchTvUrl;
  bestTariffUrl;
  easySwitchUrl;
  supportUrl;
  data;
  cards = [];
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  cardOrder = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.SUPPORT, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.EASY_SWITCH, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.BEST_TARIFF, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.WATCH_TV];
  externalLinks = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.WATCH_TV];
  ngOnChanges() {
    this.updateData();
  }
  redirectTo(card) {
    const url = this.getUrl(card);
    this.sendAnalyticsData(card, url);
    this.urlService.redirectTo(url);
  }
  getUrl(card) {
    switch (card) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.WATCH_TV:
        return this.watchTvUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.BEST_TARIFF:
        return this.bestTariffUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.EASY_SWITCH:
        return this.easySwitchUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.SUPPORT:
        return this.supportUrl;
    }
  }
  updateData() {
    // Only show cards that have a configured URL
    this.cards = this.data.filter(card => {
      switch (card) {
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.WATCH_TV:
          return !!this.watchTvUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.BEST_TARIFF:
          return !!this.bestTariffUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.SUPPORT:
          return !!this.supportUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.SupportAssistanceType.EASY_SWITCH:
          return !!this.easySwitchUrl;
        default:
          return false;
      }
    }).sort((a, b) => this.cardOrder.indexOf(a) - this.cardOrder.indexOf(b));
  }
  sendAnalyticsData(card, destinationUrl) {
    const myBaseDashbaordAnalyticsData = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.SUPPORT,
      attributeData: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeData[card.toUpperCase().replace('-', '_')],
      destinationUrl: destinationUrl
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  static ɵfac = function MyBaseDashboardSupportAssistanceComponent_Factory(t) {
    return new (t || MyBaseDashboardSupportAssistanceComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardSupportAssistanceComponent,
    selectors: [["tg-mybase-dashboard-support-assistance"]],
    inputs: {
      watchTvUrl: "watchTvUrl",
      bestTariffUrl: "bestTariffUrl",
      easySwitchUrl: "easySwitchUrl",
      supportUrl: "supportUrl",
      data: "data"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[1, "heading--4", "mt--n", "mb--s"], [3, "title", "cypressTag", "ngClass", "isExternalLink", "cardClicked"], [3, "title", "cypressTag", "ngClass", "isExternalLink"]],
    template: function MyBaseDashboardSupportAssistanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBaseDashboardSupportAssistanceComponent_Conditional_0_Template, 5, 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.cards.length > 0 ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseSimpleCardComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 51112:
/*!******************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardComponent: () => (/* binding */ MyBaseDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mybase_dashboard_internet_usage_card_mybase_dashboard_internet_usage_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mybase-dashboard-internet-usage-card/mybase-dashboard-internet-usage-card.component */ 99659);
/* harmony import */ var _mybase_dashboard_billing_card_mybase_dashboard_billing_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mybase-dashboard-billing-card/mybase-dashboard-billing-card.component */ 66162);
/* harmony import */ var _mybase_dashboard_manage_products_mybase_dashboard_manage_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mybase-dashboard-manage-products/mybase-dashboard-manage-products.component */ 34018);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mybase_dashboard_support_assistance_mybase_dashboard_support_assistance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mybase-dashboard-support-assistance/mybase-dashboard-support-assistance.component */ 4368);
/* harmony import */ var _mybase_dashboard_mobile_usage_card_mybase_dashboard_mobile_usage_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mybase-dashboard-mobile-usage-card/mybase-dashboard-mobile-usage-card.component */ 9514);
/* harmony import */ var _mybase_dashboard_onboarding_usage_card_mybase_dashboard_onboarding_usage_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mybase-dashboard-onboarding-usage-card/mybase-dashboard-onboarding-usage-card.component */ 22259);













function MyBaseDashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-mybase-dashboard-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.myBaseDashboardError$));
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-mybase-service-moments", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_2_Template_tg_mybase_service_moments_analyticsData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simActivationUrl", ctx_r2.simActivationUrl)("eSimActivationUrl", ctx_r2.eSimActivationUrl)("appointmentUrl", ctx_r2.appointmentUrl)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r2.myBaseServiceMoments$));
  }
}
const _c0 = a0 => ({
  "col-12 mb--m col-md-6 col-lg-3": a0
});
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-mybase-dashboard-onboarding-usage-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_0_Template_tg_mybase_dashboard_onboarding_usage_card_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r11.myBaseDashboardBillingPending$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ng.mybase-dashboard.billing-card.title")("cardType", "billing")("billingUrl", ctx_r11.billingUrl);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-mybase-dashboard-billing-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_2_Template_tg_mybase_dashboard_billing_card_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r12.myBaseDashboardShowBilling$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("billingAccounts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r12.myBaseDashboardBillingAccounts$))("billingUrl", ctx_r12.billingUrl)("payNowUrl", ctx_r12.payNowUrl)("viewBillsUrl", ctx_r12.viewBillsUrl)("viewDetailsUrl", ctx_r12.viewDetailsUrl);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_0_Template, 3, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Conditional_2_Template, 4, 12);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r7.myBaseDashboardBillingPending$) ? 0 : 2);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-mybase-dashboard-onboarding-usage-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r17.myBaseDashboardMobileUsagePending$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ng.mybase-dashboard.mobile-usage-card.title")("cardType", "mobile");
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-mybase-dashboard-mobile-usage-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Conditional_2_Template_tg_mybase_dashboard_mobile_usage_card_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r18.myBaseDashboardShowMobileUsage$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mobileUsage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r18.myBaseDashboardMobileUsage$))("mobileUsagePageUrl", ctx_r18.mobileUsagePageUrl);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Conditional_0_Template, 3, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Conditional_2_Template, 4, 9);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r8.myBaseDashboardMobileUsagePending$) ? 0 : 2);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-mybase-dashboard-onboarding-usage-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r21.myBaseDashboardInternetUsagePending$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ng.mybase-dashboard.internet-usage-card.title")("cardType", "internet");
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-mybase-dashboard-internet-usage-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Conditional_2_Template_tg_mybase_dashboard_internet_usage_card_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r22.myBaseDashboardShowInternetUsage$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("internetUsage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r22.myBaseDashboardInternetUsage$))("internetUsagePageUrl", ctx_r22.internetUsagePageUrl);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Conditional_0_Template, 3, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Conditional_2_Template, 4, 9);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r9.myBaseDashboardInternetUsagePending$) ? 0 : 2);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-mybase-dashboard-onboarding-usage-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r25.myBaseDashboardHomeNetworkPending$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "ng.mybase-dashboard.home-network.title")("cardType", "home-network");
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-mybase-dashboard-home-network", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Conditional_2_Template_tg_mybase_dashboard_home_network_analyticsData_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r26.myBaseDashboardShowHomeNetwork$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("homeNetworkUrl", ctx_r26.homeNetworkUrl)("wifiPassportUrl", ctx_r26.wifiPassportUrl)("componentPrefix", "ng.mybase-dashboard")("isLevel1", true);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Conditional_0_Template, 3, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Conditional_2_Template, 3, 9);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r10.myBaseDashboardHomeNetworkPending$) ? 0 : 2);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_2_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_4_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_6_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyBaseDashboardComponent_Conditional_4_Conditional_4_Conditional_8_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 3)(12, "div", 10)(13, "tg-mybase-dashboard-manage-products", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Template_tg_mybase_dashboard_manage_products_analyticsData_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "tg-mybase-dashboard-support-assistance", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("analyticsData", function MyBaseDashboardComponent_Conditional_4_Conditional_4_Template_tg_mybase_dashboard_support_assistance_analyticsData_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, ctx_r3.myBaseDashboardShowBilling$) ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, ctx_r3.myBaseDashboardShowMobileUsage$) ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, ctx_r3.myBaseDashboardShowInternetUsage$) ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, ctx_r3.myBaseDashboardShowHomeNetwork$) ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 21, ctx_r3.products$))("manageProductsMobileLink", ctx_r3.manageProductsMobileLink)("manageProductsDTVLink", ctx_r3.manageProductsDTVLink)("manageProductsInternetLink", ctx_r3.manageProductsInternetLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 23, ctx_r3.supportAssistance$))("watchTvUrl", ctx_r3.watchTvUrl)("bestTariffUrl", ctx_r3.bestTariffUrl)("easySwitchUrl", ctx_r3.easySwitchUrl)("supportUrl", ctx_r3.supportUrl);
  }
}
function MyBaseDashboardComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 3)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 3)(12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 23)(14, "div", 24)(15, "div", 24)(16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 23)(19, "div", 25)(20, "div", 25)(21, "div", 25)(22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function MyBaseDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_4_Conditional_2_Template, 2, 6, "tg-mybase-service-moments", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBaseDashboardComponent_Conditional_4_Conditional_4_Template, 18, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyBaseDashboardComponent_Conditional_4_Conditional_6_Template, 23, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r1.myBaseServiceMoments$)) == null ? null : tmp_0_0.length) ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx_r1.myBaseDashboardLoading$) === false ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r1.myBaseDashboardLoading$) ? 6 : -1);
  }
}
class MyBaseDashboardComponent {
  billingUrl;
  payNowUrl;
  viewBillsUrl;
  viewDetailsUrl;
  manageProductsMobileLink;
  manageProductsInternetLink;
  manageProductsDTVLink;
  mobileUsagePageUrl;
  internetUsagePageUrl;
  watchTvUrl;
  bestTariffUrl;
  easySwitchUrl;
  supportUrl;
  homeNetworkUrl;
  wifiPassportUrl;
  simActivationUrl;
  eSimActivationUrl;
  appointmentUrl;
  scopes = ['customeraccount']; // TBD
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardFacade);
  datalayerFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerFacade);
  myBaseDashboardBillingAccounts$ = this.facade.myBaseDashboardBillingAccounts$;
  myBaseDashboardShowBilling$ = this.facade.myBaseDashboardShowBilling$;
  products$ = this.facade.products$;
  supportAssistance$ = this.facade.supportAssistance$;
  myBaseDashboardLoading$ = this.facade.myBaseDashboardLoading$;
  myBaseDashboardError$ = this.facade.myBaseDashboardError$;
  myBaseDashboardShowMobileUsage$ = this.facade.myBaseDashboardShowMobileUsage$;
  myBaseDashboardShowInternetUsage$ = this.facade.myBaseDashboardShowInternetUsage$;
  myBaseDashboardMobileUsage$ = this.facade.myBaseDashboardMobileUsage$;
  myBaseDashboardInternetUsage$ = this.facade.myBaseDashboardInternetUsage$;
  myBaseDashboardShowHomeNetwork$ = this.facade.myBaseDashboardShowHomeNetwork$;
  myBaseDashboardBillingPending$ = this.facade.myBaseDashboardBillingPending$;
  myBaseDashboardMobileUsagePending$ = this.facade.myBaseDashboardMobileUsagePending$;
  myBaseDashboardInternetUsagePending$ = this.facade.myBaseDashboardInternetUsagePending$;
  myBaseDashboardHomeNetworkPending$ = this.facade.myBaseDashboardHomeNetworkPending$;
  myBaseServiceMoments$ = this.facade.myBaseServiceMoments$;
  initAfterLoggedIn() {
    this.facade.loadMyBaseDashboard();
    this.datalayerFacade.initDataLayer();
  }
  sendAnalyticsData(event) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
  static ɵfac = function MyBaseDashboardComponent_Factory(t) {
    return new (t || MyBaseDashboardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyBaseDashboardComponent,
    selectors: [["tg-mybase-dashboard"]],
    inputs: {
      billingUrl: "billingUrl",
      payNowUrl: "payNowUrl",
      viewBillsUrl: "viewBillsUrl",
      viewDetailsUrl: "viewDetailsUrl",
      manageProductsMobileLink: "manageProductsMobileLink",
      manageProductsInternetLink: "manageProductsInternetLink",
      manageProductsDTVLink: "manageProductsDTVLink",
      mobileUsagePageUrl: "mobileUsagePageUrl",
      internetUsagePageUrl: "internetUsagePageUrl",
      watchTvUrl: "watchTvUrl",
      bestTariffUrl: "bestTariffUrl",
      easySwitchUrl: "easySwitchUrl",
      supportUrl: "supportUrl",
      homeNetworkUrl: "homeNetworkUrl",
      wifiPassportUrl: "wifiPassportUrl",
      simActivationUrl: "simActivationUrl",
      eSimActivationUrl: "eSimActivationUrl",
      appointmentUrl: "appointmentUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[3, "scopes", "componentCanRender"], [1, "mybase-dashboard", "px--m", "px--n--md"], ["class", "row"], [1, "row"], [1, "col-12", "mt--l--md"], [3, "error"], [3, "simActivationUrl", "eSimActivationUrl", "appointmentUrl", "data"], [3, "simActivationUrl", "eSimActivationUrl", "appointmentUrl", "data", "analyticsData"], [1, "mybase-dashboard--focus-cards"], [1, "mybase-dashboard--navigation"], [1, "col-12", "col-md-8", "mt--m", "mt--g--lg"], [3, "data", "manageProductsMobileLink", "manageProductsDTVLink", "manageProductsInternetLink", "analyticsData"], [1, "col-12", "col-md-4", "mt--m", "mt--g--lg"], [3, "data", "watchTvUrl", "bestTariffUrl", "easySwitchUrl", "supportUrl", "analyticsData"], [3, "ngClass"], [3, "title", "cardType", "billingUrl", "analyticsData"], [3, "billingAccounts", "billingUrl", "payNowUrl", "viewBillsUrl", "viewDetailsUrl", "analyticsData"], [3, "title", "cardType"], [3, "mobileUsage", "mobileUsagePageUrl", "analyticsData"], [3, "internetUsage", "internetUsagePageUrl", "analyticsData"], [3, "homeNetworkUrl", "wifiPassportUrl", "componentPrefix", "isLevel1", "analyticsData"], [1, "col-12", "mb--m", "col-md-6", "col-lg-3"], [1, "skeleton", "skeleton--basic", "skeleton--container", "mybase-dashboard--card", "p--m", "mt--l--md"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton--title", "p--m", "mb--sm"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton-manage-product--card", "p--m", "mt--l--md"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton-support--card", "p--m", "mt--l--md"]],
    template: function MyBaseDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function MyBaseDashboardComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyBaseDashboardComponent_Conditional_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyBaseDashboardComponent_Conditional_4_Template, 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.myBaseDashboardError$) ? 2 : 4);
      }
    },
    dependencies: [_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule, _mybase_dashboard_billing_card_mybase_dashboard_billing_card_component__WEBPACK_IMPORTED_MODULE_5__.MyBaseDashboardBillingCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _mybase_dashboard_internet_usage_card_mybase_dashboard_internet_usage_card_component__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardInternetUsageCardComponent, _mybase_dashboard_mobile_usage_card_mybase_dashboard_mobile_usage_card_component__WEBPACK_IMPORTED_MODULE_9__.MyBaseDashboardMobileUsageCardComponent, _mybase_dashboard_manage_products_mybase_dashboard_manage_products_component__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardManageProductsComponent, _mybase_dashboard_support_assistance_mybase_dashboard_support_assistance_component__WEBPACK_IMPORTED_MODULE_8__.MyBaseDashboardSupportAssistanceComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7__.MyBaseDashboardErrorComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7__.MyBaseDashboardHomeNetworkComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_7__.MyBaseServiceMomentsComponent, _mybase_dashboard_onboarding_usage_card_mybase_dashboard_onboarding_usage_card_component__WEBPACK_IMPORTED_MODULE_10__.MybaseDashboardOnboardingUsageCardComponent],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 15rem;\n}\n\n.mybase-dashboard--card--content--flex-basis[_ngcontent-%COMP%] {\n  flex-basis: 4rem;\n}\n\n.mybase-dashboard[_ngcontent-%COMP%] {\n  margin-top: -6rem;\n}\n@media only screen and (min-width: 768px) {\n  .mybase-dashboard[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.skeleton--title[_ngcontent-%COMP%] {\n  width: 25rem;\n  height: 3rem;\n}\n\n.skeleton-manage-product--card[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n\n.skeleton-support--card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC9zcmMvbGliL215YmFzZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFNRSxpQkFBQTtBQUhGO0FBRkU7RUFERjtJQUVJLGFBQUE7RUFLRjtBQUNGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7QUFHRiIsInNvdXJjZXNDb250ZW50IjpbIi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxNXJlbTtcbn1cbi5teWJhc2UtZGFzaGJvYXJkLS1jYXJkLS1jb250ZW50LS1mbGV4LWJhc2lzIHtcbiAgZmxleC1iYXNpczogNHJlbTtcbn1cblxuLm15YmFzZS1kYXNoYm9hcmQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAvLyBAaW5jbHVkZSBtZWRpYSgnbWQnKSB7XG5cbiAgbWFyZ2luLXRvcDogLTZyZW07XG59XG4uc2tlbGV0b24tLXRpdGxlIHtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbi5za2VsZXRvbi1tYW5hZ2UtcHJvZHVjdC0tY2FyZCB7XG4gIGhlaWdodDogMTByZW07XG59XG5cbi5za2VsZXRvbi1zdXBwb3J0LS1jYXJkIHtcbiAgaGVpZ2h0OiA4cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_base-customerzone_dashboard_feat-mybase-dashboard_src_index_ts.js.map