(self["webpackChunkcustomer_web_billing_limits_mfe"] = self["webpackChunkcustomer_web_billing_limits_mfe"] || []).push([["libs_billing_limits_mobile-usage-limits_feat-mobile-usage-limits_src_index_ts"],{

/***/ 4931:
/*!***************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsComponent: () => (/* reexport safe */ _lib_mobile_usage_limits_mobile_usage_limits_component__WEBPACK_IMPORTED_MODULE_0__.MobileUsageLimitsComponent),
/* harmony export */   OutOfBundleLimitsDetailsComponent: () => (/* reexport safe */ _lib_out_of_bundle_limits_details_out_of_bundle_limits_details_component__WEBPACK_IMPORTED_MODULE_1__.OutOfBundleLimitsDetailsComponent),
/* harmony export */   PremiumServicesComponent: () => (/* reexport safe */ _lib_premium_services_premium_services_component__WEBPACK_IMPORTED_MODULE_2__.PremiumServicesComponent)
/* harmony export */ });
/* harmony import */ var _lib_mobile_usage_limits_mobile_usage_limits_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mobile-usage-limits/mobile-usage-limits.component */ 48822);
/* harmony import */ var _lib_out_of_bundle_limits_details_out_of_bundle_limits_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/out-of-bundle-limits-details/out-of-bundle-limits-details.component */ 91123);
/* harmony import */ var _lib_premium_services_premium_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/premium-services/premium-services.component */ 21012);




/***/ }),

/***/ 48822:
/*!***************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/mobile-usage-limits/mobile-usage-limits.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsComponent: () => (/* binding */ MobileUsageLimitsComponent),
/* harmony export */   NO_LIMIT: () => (/* binding */ NO_LIMIT)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @billing/mobile-usage-limits/ui */ 81566);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @billing/mobile-usage-limits/data-access */ 54126);
/* harmony import */ var _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-usage-limits.constants */ 48901);
/* harmony import */ var _out_of_bundle_limits_details_out_of_bundle_limits_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../out-of-bundle-limits-details/out-of-bundle-limits-details.component */ 91123);
/* harmony import */ var _premium_services_premium_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../premium-services/premium-services.component */ 21012);
/* harmony import */ var _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @billing/shared/feat-mobile-line-selector */ 6454);
/* harmony import */ var _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);




















function MobileUsageLimitsComponent_ng_template_3_care_billing_mobile_usage_limits_skeleton_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "care-billing-mobile-usage-limits-skeleton");
  }
}
function MobileUsageLimitsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, MobileUsageLimitsComponent_ng_template_3_care_billing_mobile_usage_limits_skeleton_0_Template, 1, 0, "care-billing-mobile-usage-limits-skeleton", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r0.selectedMobileLine == null ? null : ctx_r0.selectedMobileLine.status) !== "ACTIVATION_IN_PROGRESS");
  }
}
function MobileUsageLimitsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-error-notification", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("description", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, "ng.mobile-usage-limits.error-limits-description"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "ng.mobile-usage-limits.error-limits-label"));
  }
}
function MobileUsageLimitsComponent_ng_container_7_div_1_care_billing_mobile_usage_limits_member_notification_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "care-billing-mobile-usage-limits-member-notification-header");
  }
}
function MobileUsageLimitsComponent_ng_container_7_div_1_div_3_care_billing_mobile_usage_limits_manage_limits_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "care-billing-mobile-usage-limits-manage-limits", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickEvent", function MobileUsageLimitsComponent_ng_container_7_div_1_div_3_care_billing_mobile_usage_limits_manage_limits_4_Template_care_billing_mobile_usage_limits_manage_limits_clickEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.showManageLimit($event, "out-of-plan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "mobile-usage-limits-manage-oob");
  }
}
function MobileUsageLimitsComponent_ng_container_7_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "care-billing-mobile-usage-limits-out-of-bundle-limits-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MobileUsageLimitsComponent_ng_container_7_div_1_div_3_care_billing_mobile_usage_limits_manage_limits_4_Template, 1, 1, "care-billing-mobile-usage-limits-manage-limits", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "care-billing-mobile-usage-limits-out-of-bundle-limits-description", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "care-billing-mobile-usage-limits-out-of-bundle-limits-details", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("outOfBundleLimitUpdated", function MobileUsageLimitsComponent_ng_container_7_div_1_div_3_Template_care_billing_mobile_usage_limits_out_of_bundle_limits_details_outOfBundleLimitUpdated_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.updateOOBLimits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMember", ctx_r9.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r9.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMember", ctx_r9.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("outOfBundleLimits", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 7, ctx_r9.outOfBundleLimits$))("isMember", ctx_r9.isMember)("currentOutOfBundleLimit", ctx_r9.currentUsageLimits == null ? null : ctx_r9.currentUsageLimits.outOfBundle)("showOutOfBundleLimit", ctx_r9.showOutOfBundleLimit);
  }
}
function MobileUsageLimitsComponent_ng_container_7_div_1_care_billing_mobile_usage_limits_manage_limits_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "care-billing-mobile-usage-limits-manage-limits", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickEvent", function MobileUsageLimitsComponent_ng_container_7_div_1_care_billing_mobile_usage_limits_manage_limits_9_Template_care_billing_mobile_usage_limits_manage_limits_clickEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.showManageLimit($event, "premium-services"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "mobile-usage-limits-manage-premium-services");
  }
}
function MobileUsageLimitsComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "care-billing-mobile-usage-limits-update-warning-dialog", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickEvent", function MobileUsageLimitsComponent_ng_container_7_div_1_Template_care_billing_mobile_usage_limits_update_warning_dialog_clickEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.warningDialogEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MobileUsageLimitsComponent_ng_container_7_div_1_care_billing_mobile_usage_limits_member_notification_header_2_Template, 1, 0, "care-billing-mobile-usage-limits-member-notification-header", 6)(3, MobileUsageLimitsComponent_ng_container_7_div_1_div_3_Template, 8, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 10)(6, "div", 11)(7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "care-billing-mobile-usage-limits-premium-services-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, MobileUsageLimitsComponent_ng_container_7_div_1_care_billing_mobile_usage_limits_manage_limits_9_Template, 1, 1, "care-billing-mobile-usage-limits-manage-limits", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "care-billing-mobile-usage-limits-premium-services-description", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "care-billing-mobile-usage-limits-premium-services", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("premiumLimitUpdated", function MobileUsageLimitsComponent_ng_container_7_div_1_Template_care_billing_mobile_usage_limits_premium_services_premiumLimitUpdated_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.updatePremiumLimits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const usageLimits_r7 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dialogData", ctx_r6.warningDialogData)("showWarningDialog", ctx_r6.showWarningDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 9, ctx_r6.outOfBundleLimitsLoaded$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMember", ctx_r6.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r6.isMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isMember", ctx_r6.isMember)("currentPremiumUsageLimit", usageLimits_r7.premiumService)("showPremiumServices", ctx_r6.showPremiumServices);
  }
}
function MobileUsageLimitsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MobileUsageLimitsComponent_ng_container_7_div_1_Template, 12, 11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r4.selectedMobileUsageLimits$))("ngIfElse", _r3);
  }
}
const NO_LIMIT = 'NO LIMIT';
class MobileUsageLimitsComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AbstractBaseComponent {
  constructor(mobileUsageLimitsFacade, messageService) {
    super();
    this.mobileUsageLimitsFacade = mobileUsageLimitsFacade;
    this.messageService = messageService;
    this.scopes = ['D_usagelimits'];
    this.selectedMobileUsageLimits$ = this.mobileUsageLimitsFacade.selectedMobileUsageLimits$;
    this.selectedMobileLine = null;
    this.outOfBundleLimits$ = this.mobileUsageLimitsFacade.selectedOutOfBundleLimits$;
    this.outOfBundleLimitsLoaded$ = this.mobileUsageLimitsFacade.selectedOutOfBundleLimitsLoaded$;
    this.mobileUsageLimitsLoaded$ = this.mobileUsageLimitsFacade.selectedMobileUsageLimitsLoaded$;
    this.showWarningDialog = false;
    this.showOutOfBundleLimit = false;
    this.showPremiumServices = false;
    this.MESSAGE_GROUP_NAME = _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.MESSAGE_GROUP_NAME;
  }
  initAfterLoggedIn(loginDetails) {
    this.isMember = loginDetails.isMember();
    this.selectedMobileUsageLimits$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(currentLimit => {
      this.currentUsageLimits = currentLimit;
    });
  }
  onSelectMobileLine(mobileLine) {
    this.selectedMobileLine = mobileLine;
    if (mobileLine) {
      if (mobileLine.status === _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.ACTIVATION_IN_PROGRESS) {
        this.resetLimits();
      } else {
        this.clearMessagesAndLoadLimits(mobileLine);
        this.loadOutOfBundleLimits(mobileLine);
      }
    }
  }
  loadOutOfBundleLimits(mobileLine) {
    this.mobileUsageLimitsLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(isLoaded => {
      if (isLoaded && this.currentUsageLimits?.outOfBundle) {
        this.mobileUsageLimitsFacade.loadOutOfBundleLimits({
          mobileLine
        });
      }
    });
  }
  clearMessagesAndLoadLimits(mobileLine) {
    this.messageService.clearMessages(this.MESSAGE_GROUP_NAME);
    this.mobileUsageLimitsFacade.loadMobileUsageLimits({
      mobileLine
    });
  }
  resetLimits() {
    this.mobileUsageLimitsFacade.resetMobileUsageLimits();
  }
  showManageLimit(status, section) {
    if (status && section === _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.OUT_OF_PLAN_LIMIT_SECTION_KEY) {
      this.showOutOfBundleLimit = status;
    } else if (status && section === _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.PREMIUM_LIMIT_SECTION_KEY) {
      this.showPremiumServices = status;
    }
  }
  warningDialogEvent(status) {
    this.showWarningDialog = false;
    if (status) {
      this.saveDataIfLineSelected();
    } else {
      this.handleLimitIfLessThanCurrentUsage(this.updatedOutOfLimitsData, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.OUT_OF_BUNDLE_WARNING_DIALOG_DATA, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.OUT_OF_BUNDLE, 'showOutOfBundleLimit', this.currentUsageLimits?.outOfBundle?.currentUsage);
      this.handleLimitIfLessThanCurrentUsage(this.updatedPremiumLimitsData, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.PREMIUM_LIMITS_WARNING_DIALOG_DATA, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.THIRD_PARTY_SERVICES, 'showPremiumServices', this.currentUsageLimits?.premiumService?.currentUsage);
    }
  }
  handleLimits(cancelledLimit, itemName) {
    this.mobileUsageLimitsFacade.updateMobileUsageDataLayerEvent({
      limitAlreadyExceeded: false,
      updateDeclined: true,
      cancelledLimit: cancelledLimit,
      itemName: itemName
    });
  }
  handleLimitIfLessThanCurrentUsage(updatedLimit, warningDialogData, limitType, showLimit, currentUsage) {
    if (this.isSelectedLimitLessThanCurrentUsage(updatedLimit, warningDialogData, currentUsage)) {
      this.handleLimits(updatedLimit, limitType);
      this[showLimit] = true;
    }
  }
  saveDataIfLineSelected() {
    if (this.selectedMobileLine) {
      this.saveData(true);
    }
  }
  submit() {
    if (this.isSelectedLimitLessThanCurrentUsage(this.updatedOutOfLimitsData, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.OUT_OF_BUNDLE_WARNING_DIALOG_DATA, this.currentUsageLimits?.outOfBundle?.currentUsage) || this.isSelectedLimitLessThanCurrentUsage(this.updatedPremiumLimitsData, _mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.PREMIUM_LIMITS_WARNING_DIALOG_DATA, this.currentUsageLimits?.premiumService?.currentUsage)) {
      this.showWarningDialog = true;
      this.showOutOfBundleLimit = false;
      this.showPremiumServices = false;
    } else {
      if (this.selectedMobileLine) {
        this.saveData(false);
      }
    }
  }
  saveData(showWarning) {
    this.messageService.clearMessages(_mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_8__.MESSAGE_GROUP_NAME);
    const limitRequest = this.setUpdateMobileUsageLimitsRequest();
    if (this.selectedMobileLine) {
      this.mobileUsageLimitsFacade.updateMobileUsageLimits({
        updateUsageLimitsRequest: limitRequest,
        mobileLine: this.selectedMobileLine
      });
      this.mobileUsageLimitsFacade.updateMobileUsageDataLayerEvent({
        limitAlreadyExceeded: showWarning,
        updateDeclined: false
      });
      this.showWarningDialog = false;
      this.showOutOfBundleLimit = false;
      this.showPremiumServices = false;
    }
  }
  setUpdateMobileUsageLimitsRequest() {
    const request = {};
    if (this.updatedOutOfLimitsData) {
      request.outOfBundleLimit = {
        enabled: this.updatedOutOfLimitsData !== NO_LIMIT,
        value: this.updatedOutOfLimitsData !== NO_LIMIT ? parseInt(this.updatedOutOfLimitsData) : undefined
      };
    }
    if (this.updatedPremiumLimitsData) {
      request.premiumServiceLimit = {
        value: parseInt(this.updatedPremiumLimitsData)
      };
    }
    return request;
  }
  updateOOBLimits({
    limits
  }) {
    this.updatedOutOfLimitsData = limits;
    if (limits) {
      this.submit();
    } else {
      this.showOutOfBundleLimit = false;
    }
  }
  updatePremiumLimits({
    updatedLimit
  }) {
    this.updatedPremiumLimitsData = updatedLimit;
    if (updatedLimit) {
      this.submit();
    } else {
      this.showPremiumServices = false;
    }
  }
  isSelectedLimitLessThanCurrentUsage(updatedLimit, warningDialogData, currentUsage) {
    const isLimitLess = !!(updatedLimit && currentUsage && updatedLimit !== '' && +updatedLimit < +Math.trunc(currentUsage));
    if (isLimitLess) {
      this.setWarningLabels(warningDialogData);
    }
    return isLimitLess;
  }
  setWarningLabels(warningDialogData) {
    this.warningDialogData = {
      warningText: warningDialogData[0],
      warningDetails: warningDialogData[1],
      confirmButtonText: warningDialogData[2],
      cancelButtonText: warningDialogData[3]
    };
  }
  static #_ = this.ɵfac = function MobileUsageLimitsComponent_Factory(t) {
    return new (t || MobileUsageLimitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__.MobileUsageLimitsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: MobileUsageLimitsComponent,
    selectors: [["care-billing-mobile-usage-limits"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 6,
    consts: [[3, "scopes", "componentCanRender"], [3, "mobileLineSelected"], [3, "messageGroupName"], ["mobileUsageLimitsSkeleton", ""], ["limitsErrorNotification", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "description", "label"], [3, "dialogData", "showWarningDialog", "clickEvent"], ["class", "content-section mb-20", 4, "ngIf"], [1, "content-section", "mb-20"], [1, "p--xl--md", "p--l"], [1, "display--flex", "flex-direction--row", "justify-content--between"], [3, "isMember"], [3, "clickEvent", 4, "ngIf"], [1, "row", "m--n"], [3, "isMember", "currentPremiumUsageLimit", "showPremiumServices", "premiumLimitUpdated"], [1, "row", "m--n", 3, "isMember"], [3, "outOfBundleLimits", "isMember", "currentOutOfBundleLimit", "showOutOfBundleLimit", "outOfBundleLimitUpdated"], [3, "clickEvent"]],
    template: function MobileUsageLimitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("componentCanRender", function MobileUsageLimitsComponent_Template_tg_login_componentCanRender_0_listener($event) {
          return ctx.initAfterLoggedIn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tg-mobile-line-selector", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("mobileLineSelected", function MobileUsageLimitsComponent_Template_tg_mobile_line_selector_mobileLineSelected_1_listener($event) {
          return ctx.onSelectMobileLine($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-message-flow", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MobileUsageLimitsComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"])(5, MobileUsageLimitsComponent_ng_template_5_Template, 3, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"])(7, MobileUsageLimitsComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("messageGroupName", ctx.MESSAGE_GROUP_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 4, ctx.mobileUsageLimitsLoaded$))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageFlowComponent, _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__.MobileUsageLimitsNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.MobileUsageLimitsSkeletonComponent, _billing_shared_feat_mobile_line_selector__WEBPACK_IMPORTED_MODULE_11__.MobileLineSelectorComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.OutOfBundleLimitsHeaderComponent, _out_of_bundle_limits_details_out_of_bundle_limits_details_component__WEBPACK_IMPORTED_MODULE_9__.OutOfBundleLimitsDetailsComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.UpdateWarningDialogComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.MemberNotificationHeaderComponent, _premium_services_premium_services_component__WEBPACK_IMPORTED_MODULE_10__.PremiumServicesComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.ManageLimitsComponent, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_12__.ErrorNotificationComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.OutOfBundleLimitsDescriptionComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.PremiumServicesDescriptionComponent, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.PremiumServicesHeaderComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 48901:
/*!***************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/mobile-usage-limits/mobile-usage-limits.constants.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIVATION_IN_PROGRESS: () => (/* binding */ ACTIVATION_IN_PROGRESS),
/* harmony export */   MESSAGE_GROUP_NAME: () => (/* binding */ MESSAGE_GROUP_NAME),
/* harmony export */   OUT_OF_BUNDLE: () => (/* binding */ OUT_OF_BUNDLE),
/* harmony export */   OUT_OF_BUNDLE_WARNING_DIALOG_DATA: () => (/* binding */ OUT_OF_BUNDLE_WARNING_DIALOG_DATA),
/* harmony export */   OUT_OF_PLAN_LIMIT_SECTION_KEY: () => (/* binding */ OUT_OF_PLAN_LIMIT_SECTION_KEY),
/* harmony export */   PREMIUM_LIMITS_WARNING_DIALOG_DATA: () => (/* binding */ PREMIUM_LIMITS_WARNING_DIALOG_DATA),
/* harmony export */   PREMIUM_LIMIT_SECTION_KEY: () => (/* binding */ PREMIUM_LIMIT_SECTION_KEY),
/* harmony export */   THIRD_PARTY_SERVICES: () => (/* binding */ THIRD_PARTY_SERVICES)
/* harmony export */ });
const OUT_OF_BUNDLE_WARNING_DIALOG_DATA = ['ng.mobile-usage-limits.lbl.out-of-bundle-warning', 'ng.mobile-usage-limits.lbl.out-of-bundle-warning-description', 'ng.mobile-usage-limits.btn.confirm', 'ng.mobile-usage-limits.btn.other-limit'];
const MESSAGE_GROUP_NAME = 'mobile-usage-limits';
const PREMIUM_LIMIT_SECTION_KEY = 'premium-services';
const OUT_OF_PLAN_LIMIT_SECTION_KEY = 'out-of-plan';
const THIRD_PARTY_SERVICES = 'Third-party Services';
const OUT_OF_BUNDLE = 'Out of Bundle';
const PREMIUM_LIMITS_WARNING_DIALOG_DATA = ['ng.mobile-usage-limits.lbl.premium-services-warning', 'ng.mobile-usage-limits.lbl.premium-services-warning-description', 'ng.mobile-usage-limits.btn.confirm', 'ng.mobile-usage-limits.btn.other-limit'];
const ACTIVATION_IN_PROGRESS = 'ACTIVATION_IN_PROGRESS';

/***/ }),

/***/ 91123:
/*!*********************************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/out-of-bundle-limits-details/out-of-bundle-limits-details.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBundleLimitsDetailsComponent: () => (/* binding */ OutOfBundleLimitsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @billing/mobile-usage-limits/ui */ 81566);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _out_of_bundle_limits_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./out-of-bundle-limits.constants */ 59983);
/* harmony import */ var _mobile_usage_limits_mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mobile-usage-limits/mobile-usage-limits.constants */ 48901);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__);













function OutOfBundleLimitsDetailsComponent_ng_container_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-usage-limits.lbl.no-limit"));
  }
}
function OutOfBundleLimitsDetailsComponent_ng_container_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "euroSign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const limit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, limit_r1)), " ");
  }
}
function OutOfBundleLimitsDetailsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OutOfBundleLimitsDetailsComponent_ng_container_17_Conditional_7_Template, 3, 3, "span")(8, OutOfBundleLimitsDetailsComponent_ng_container_17_Conditional_8_Template, 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const limit_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-selected-value-" + index_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, limit_r1 === "NO LIMIT" ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", limit_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-selected-radio-" + index_r2);
  }
}
class OutOfBundleLimitsDetailsComponent {
  constructor() {
    this.outOfBundleLimitUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.outOfBundleLimitsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
    this.MESSAGE_GROUP_NAME = _mobile_usage_limits_mobile_usage_limits_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP_NAME;
  }
  ngOnInit() {
    this.initialOutOfBundleLimit = this.getOutOfBundleLimit(this.currentOutOfBundleLimit);
    this.outOfBundleLimitsForm.addControl('selectedLimit', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.initialOutOfBundleLimit));
  }
  handleLimitUpdate(isSubmit) {
    let updatedLimit = '';
    if (isSubmit) {
      const submittedValue = this.outOfBundleLimitsForm.controls['selectedLimit']?.value;
      if (submittedValue !== this.initialOutOfBundleLimit) {
        updatedLimit = submittedValue;
      }
    } else {
      this.outOfBundleLimitsForm.controls['selectedLimit'].setValue(this.initialOutOfBundleLimit);
    }
    this.showOutOfBundleLimit = false;
    this.outOfBundleLimitUpdated.emit({
      limits: updatedLimit
    });
  }
  getOutOfBundleLimit(outOfBundle) {
    return outOfBundle?.limit.enabled ? Math.trunc(outOfBundle.limit.value).toString() : _out_of_bundle_limits_constants__WEBPACK_IMPORTED_MODULE_6__.NO_LIMIT;
  }
  static #_ = this.ɵfac = function OutOfBundleLimitsDetailsComponent_Factory(t) {
    return new (t || OutOfBundleLimitsDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OutOfBundleLimitsDetailsComponent,
    selectors: [["care-billing-mobile-usage-limits-out-of-bundle-limits-details"]],
    inputs: {
      outOfBundleLimits: "outOfBundleLimits",
      isMember: "isMember",
      currentOutOfBundleLimit: "currentOutOfBundleLimit",
      showOutOfBundleLimit: "showOutOfBundleLimit"
    },
    outputs: {
      outOfBundleLimitUpdated: "outOfBundleLimitUpdated"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 20,
    consts: [[1, "pt--xl--md", "pt--l", "pr-0"], [3, "currentOutOfBundleLimit"], [3, "showMenu", "isStickyFooter", "hideCloseButton", "title", "closeMenu"], [1, "px--m"], [1, "font--body-regular", "mb--m"], [1, "display--flex", "justify-content--between", "align-items--baseline", "gap--xxs"], [1, "flex-grow"], [1, "form-item__input__label", "mb--l", "color-shade_72"], [1, "font--caption", "color-shade_64"], [1, "select-tile--group", "display--grid", "grid-template-column--1--sm", "gap--xm", "px--m"], [1, "form-group", 3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "clickEvent"], [1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "mb--m"], [1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], [1, "heading--5", "heading--nomargin"], ["type", "radio", "formControlName", "selectedLimit", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "value"], [1, "icon", "icon-md", "font-weight--bold"]],
    template: function OutOfBundleLimitsDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "care-billing-mobile-usage-limits-out-of-bundle-limits-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-slide-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function OutOfBundleLimitsDetailsComponent_Template_tg_slide_menu_closeMenu_2_listener() {
          return ctx.handleLimitUpdate(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header")(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OutOfBundleLimitsDetailsComponent_ng_container_17_Template, 10, 4, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer")(19, "care-billing-mobile-usage-limits-update-mobile-usage-limits", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function OutOfBundleLimitsDetailsComponent_Template_care_billing_mobile_usage_limits_update_mobile_usage_limits_clickEvent_19_listener($event) {
          return ctx.handleLimitUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentOutOfBundleLimit", ctx.currentOutOfBundleLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showOutOfBundleLimit)("isStickyFooter", true)("hideCloseButton", false)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "ng.mobile-usage-limits.title.manage-out-of-bundle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-select-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 16, "ng.mobile-usage-limits.lbl.manage-out-of-bundle-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-select-limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "ng.mobile-usage-limits.lbl.select-out-of-bundle-limit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "out-of-bundle-select-values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.outOfBundleLimitsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outOfBundleLimits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.OutOfBundleLimitsNotificationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_8__.SlideMenuComponent, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.PricePipe, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.UpdateMobileUsageLimitsComponent, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.EuroSignPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59983:
/*!*************************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/out-of-bundle-limits-details/out-of-bundle-limits.constants.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EURO_SYMBOL: () => (/* binding */ EURO_SYMBOL),
/* harmony export */   NO_LIMIT: () => (/* binding */ NO_LIMIT)
/* harmony export */ });
const NO_LIMIT = 'NO LIMIT';
const EURO_SYMBOL = '€ ';

/***/ }),

/***/ 21012:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/premium-services/premium-services.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumServicesComponent: () => (/* binding */ PremiumServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @billing/mobile-usage-limits/ui */ 81566);
/* harmony import */ var _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @billing/mobile-usage-limits/data-access */ 54126);
/* harmony import */ var _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 95229);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _premium_services_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./premium-services.constants */ 71237);
















function PremiumServicesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-usage-limits.lbl.inputfield-limit-premium-services-max-error"), " ");
  }
}
function PremiumServicesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-usage-limits.lbl.inputfield-limit-premium-services-mandatory-error"), " ");
  }
}
class PremiumServicesComponent {
  constructor() {
    this.messageGroupName = 'mobile-usage-limits';
    this.premiumLimitUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.thirdPartyServicesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
  }
  ngOnInit() {
    this.currentPremiumLimit = Math.trunc(this.currentPremiumUsageLimit?.limit?.value);
    this.thirdPartyServicesForm.addControl('premiumLimit', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.currentPremiumLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_8__.RegexConstants.NUMBER_ONLY_REGEX), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(_premium_services_constants__WEBPACK_IMPORTED_MODULE_11__.MIN_PREMIUM_SERVICE_LIMIT), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(_premium_services_constants__WEBPACK_IMPORTED_MODULE_11__.MAX_PREMIUM_SERVICE_LIMIT)]));
  }
  ngOnChanges() {
    this.currentPremiumLimit = Math.trunc(this.currentPremiumUsageLimit?.limit?.value);
  }
  handlePremiumLimitUpdate(isSubmit) {
    let updatedLimit = '';
    if (isSubmit) {
      const submittedValue = this.thirdPartyServicesForm.controls['premiumLimit']?.value?.toString();
      if (submittedValue !== this.currentPremiumLimit) {
        updatedLimit = submittedValue;
      }
    } else {
      this.thirdPartyServicesForm.controls['premiumLimit'].setValue(this.currentPremiumLimit);
    }
    this.showPremiumServices = false;
    this.premiumLimitUpdated.emit({
      updatedLimit
    });
  }
  static #_ = this.ɵfac = function PremiumServicesComponent_Factory(t) {
    return new (t || PremiumServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PremiumServicesComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-services"]],
    inputs: {
      isMember: "isMember",
      currentPremiumUsageLimit: "currentPremiumUsageLimit",
      showPremiumServices: "showPremiumServices"
    },
    outputs: {
      premiumLimitUpdated: "premiumLimitUpdated"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 26,
    vars: 27,
    consts: [[1, "mobile-usage-limits"], [1, "pt--xl--md", "pt--l", "pr-0"], [3, "currentPremiumLimit"], [3, "showMenu", "isStickyFooter", "hideCloseButton", "title", "closeMenu"], [1, "input-v2--wrapper", "mb--l", "px--m"], [1, "form-item__input__label", "mb--l", "color-shade_72"], ["for", "input-id", "id", "input-id:Label", 1, "label-v2"], [1, "label-v2__label"], ["id", "input-id:Helper", 1, "label-v2__helper"], [1, "form-group", 3, "formGroup"], [1, "display--flex", "width--full"], [1, "input-v2__affix", "input-v2__affix--prefix"], ["required", "", "formControlName", "premiumLimit", "id", "input-id", "type", "number", "inputmode", "", "placeholder", "XXX", "value", "", "autocomplete", "off", 1, "input-v2", 3, "min", "max", "mask"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "clickEvent"], [1, "formErrorInput", "Form__input__invalid-message"]],
    template: function PremiumServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "care-billing-mobile-usage-limits-premium-limits-notification", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tg-slide-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function PremiumServicesComponent_Template_tg_slide_menu_closeMenu_3_listener() {
          return ctx.handlePremiumLimitUpdate(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header")(6, "div", 4)(7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9)(18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PremiumServicesComponent_div_22_Template, 3, 3, "div", 13)(23, PremiumServicesComponent_div_23_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer")(25, "care-billing-mobile-usage-limits-update-mobile-usage-limits", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function PremiumServicesComponent_Template_care_billing_mobile_usage_limits_update_mobile_usage_limits_clickEvent_25_listener($event) {
          return ctx.handlePremiumLimitUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPremiumLimit", ctx.currentPremiumLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showPremiumServices)("isStickyFooter", true)("hideCloseButton", false)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 19, "ng.mobile-usage-limits.title.manage-premium-services-limit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, "ng.mobile-usage-limits.lbl.manage-premium-services-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-enter-limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 23, "ng.mobile-usage-limits.lbl.enter-premium-services-limit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-max-allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, "ng.mobile-usage-limits.lbl.max-limit-premium-services"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdPartyServicesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 300)("mask", "000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-limit-value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdPartyServicesForm.controls["premiumLimit"].hasError("min") || ctx.thirdPartyServicesForm.controls["premiumLimit"].hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdPartyServicesForm.controls["premiumLimit"].hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, _billing_mobile_usage_limits_data_access__WEBPACK_IMPORTED_MODULE_6__.MobileUsageLimitsNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.UpdateMobileUsageLimitsComponent, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_9__.SlideMenuComponent, ngx_mask__WEBPACK_IMPORTED_MODULE_10__.NgxMaskDirective, _billing_mobile_usage_limits_ui__WEBPACK_IMPORTED_MODULE_5__.PremiumLimitsNotificationComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 71237:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/feat-mobile-usage-limits/src/lib/premium-services/premium-services.constants.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_PREMIUM_SERVICE_LIMIT: () => (/* binding */ MAX_PREMIUM_SERVICE_LIMIT),
/* harmony export */   MIN_PREMIUM_SERVICE_LIMIT: () => (/* binding */ MIN_PREMIUM_SERVICE_LIMIT)
/* harmony export */ });
const MAX_PREMIUM_SERVICE_LIMIT = 300;
const MIN_PREMIUM_SERVICE_LIMIT = 0;

/***/ })

}])
//# sourceMappingURL=libs_billing_limits_mobile-usage-limits_feat-mobile-usage-limits_src_index_ts.js.map