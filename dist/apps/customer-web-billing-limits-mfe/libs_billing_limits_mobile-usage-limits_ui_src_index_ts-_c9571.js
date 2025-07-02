(self["webpackChunkcustomer_web_billing_limits_mfe"] = self["webpackChunkcustomer_web_billing_limits_mfe"] || []).push([["libs_billing_limits_mobile-usage-limits_ui_src_index_ts-_c9571"],{

/***/ 84032:
/*!*****************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageLimitsComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ManageLimitsComponent),
/* harmony export */   MemberNotificationHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.MemberNotificationHeaderComponent),
/* harmony export */   MobileUsageLimitsSkeletonComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.MobileUsageLimitsSkeletonComponent),
/* harmony export */   OutOfBundleLimitsDescriptionComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.OutOfBundleLimitsDescriptionComponent),
/* harmony export */   OutOfBundleLimitsHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.OutOfBundleLimitsHeaderComponent),
/* harmony export */   OutOfBundleLimitsNotificationComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.OutOfBundleLimitsNotificationComponent),
/* harmony export */   PremiumLimitsNotificationComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PremiumLimitsNotificationComponent),
/* harmony export */   PremiumServicesAdjustLimitComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PremiumServicesAdjustLimitComponent),
/* harmony export */   PremiumServicesDescriptionComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PremiumServicesDescriptionComponent),
/* harmony export */   PremiumServicesHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PremiumServicesHeaderComponent),
/* harmony export */   PremiumServicesMemberNotificationComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PremiumServicesMemberNotificationComponent),
/* harmony export */   UpdateMobileUsageLimitsComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UpdateMobileUsageLimitsComponent),
/* harmony export */   UpdateWarningDialogComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UpdateWarningDialogComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 17284);


/***/ }),

/***/ 17284:
/*!*********************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageLimitsComponent: () => (/* reexport safe */ _manage_limits_manage_limits_component__WEBPACK_IMPORTED_MODULE_9__.ManageLimitsComponent),
/* harmony export */   MemberNotificationHeaderComponent: () => (/* reexport safe */ _member_notification_header_member_notification_header_component__WEBPACK_IMPORTED_MODULE_1__.MemberNotificationHeaderComponent),
/* harmony export */   MobileUsageLimitsSkeletonComponent: () => (/* reexport safe */ _mobile_usage_limits_skeleton_mobile_usage_limits_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.MobileUsageLimitsSkeletonComponent),
/* harmony export */   OutOfBundleLimitsDescriptionComponent: () => (/* reexport safe */ _out_of_bundle_limits_description_out_of_bundle_limits_description_component__WEBPACK_IMPORTED_MODULE_11__.OutOfBundleLimitsDescriptionComponent),
/* harmony export */   OutOfBundleLimitsHeaderComponent: () => (/* reexport safe */ _out_of_bundle_limits_header_out_of_bundle_limits_header_component__WEBPACK_IMPORTED_MODULE_2__.OutOfBundleLimitsHeaderComponent),
/* harmony export */   OutOfBundleLimitsNotificationComponent: () => (/* reexport safe */ _out_of_bundle_limits_notification_out_of_bundle_limits_notification_component__WEBPACK_IMPORTED_MODULE_5__.OutOfBundleLimitsNotificationComponent),
/* harmony export */   PremiumLimitsNotificationComponent: () => (/* reexport safe */ _premium_limits_notification_premium_limits_notification_component__WEBPACK_IMPORTED_MODULE_10__.PremiumLimitsNotificationComponent),
/* harmony export */   PremiumServicesAdjustLimitComponent: () => (/* reexport safe */ _premium_services_adjust_limit_premium_services_adjust_limit_component__WEBPACK_IMPORTED_MODULE_6__.PremiumServicesAdjustLimitComponent),
/* harmony export */   PremiumServicesDescriptionComponent: () => (/* reexport safe */ _premium_services_description_premium_services_description_component__WEBPACK_IMPORTED_MODULE_12__.PremiumServicesDescriptionComponent),
/* harmony export */   PremiumServicesHeaderComponent: () => (/* reexport safe */ _premium_services_header_premium_services_header_component__WEBPACK_IMPORTED_MODULE_7__.PremiumServicesHeaderComponent),
/* harmony export */   PremiumServicesMemberNotificationComponent: () => (/* reexport safe */ _premium_services_member_notification_premium_services_member_notification_component__WEBPACK_IMPORTED_MODULE_8__.PremiumServicesMemberNotificationComponent),
/* harmony export */   UpdateMobileUsageLimitsComponent: () => (/* reexport safe */ _update_mobile_usage_limits_update_mobile_usage_limits_component__WEBPACK_IMPORTED_MODULE_3__.UpdateMobileUsageLimitsComponent),
/* harmony export */   UpdateWarningDialogComponent: () => (/* reexport safe */ _update_warning_dialog_update_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__.UpdateWarningDialogComponent)
/* harmony export */ });
/* harmony import */ var _mobile_usage_limits_skeleton_mobile_usage_limits_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-usage-limits-skeleton/mobile-usage-limits-skeleton.component */ 37612);
/* harmony import */ var _member_notification_header_member_notification_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-notification-header/member-notification-header.component */ 30971);
/* harmony import */ var _out_of_bundle_limits_header_out_of_bundle_limits_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./out-of-bundle-limits-header/out-of-bundle-limits-header.component */ 55925);
/* harmony import */ var _update_mobile_usage_limits_update_mobile_usage_limits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-mobile-usage-limits/update-mobile-usage-limits.component */ 75322);
/* harmony import */ var _update_warning_dialog_update_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-warning-dialog/update-warning-dialog.component */ 65355);
/* harmony import */ var _out_of_bundle_limits_notification_out_of_bundle_limits_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./out-of-bundle-limits-notification/out-of-bundle-limits-notification.component */ 73154);
/* harmony import */ var _premium_services_adjust_limit_premium_services_adjust_limit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium-services-adjust-limit/premium-services-adjust-limit.component */ 75952);
/* harmony import */ var _premium_services_header_premium_services_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./premium-services-header/premium-services-header.component */ 89439);
/* harmony import */ var _premium_services_member_notification_premium_services_member_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./premium-services-member-notification/premium-services-member-notification.component */ 5898);
/* harmony import */ var _manage_limits_manage_limits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-limits/manage-limits.component */ 99298);
/* harmony import */ var _premium_limits_notification_premium_limits_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./premium-limits-notification/premium-limits-notification.component */ 42834);
/* harmony import */ var _out_of_bundle_limits_description_out_of_bundle_limits_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./out-of-bundle-limits-description/out-of-bundle-limits-description.component */ 80867);
/* harmony import */ var _premium_services_description_premium_services_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./premium-services-description/premium-services-description.component */ 38272);














/***/ }),

/***/ 99298:
/*!*****************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/manage-limits/manage-limits.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageLimitsComponent: () => (/* binding */ ManageLimitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





class ManageLimitsComponent {
  constructor() {
    this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event) {
    event.stopPropagation();
    this.clickEvent.emit(true);
  }
  static #_ = this.ɵfac = function ManageLimitsComponent_Factory(t) {
    return new (t || ManageLimitsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageLimitsComponent,
    selectors: [["care-billing-mobile-usage-limits-manage-limits"]],
    outputs: {
      clickEvent: "clickEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [[1, "button", "button--tertiary", "button--small", "ml--m", 3, "click"]],
    template: function ManageLimitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLimitsComponent_Template_button_click_0_listener($event) {
          return ctx.onClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-manage-limits-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.mobile-usage-limits.lbl.manage-limit"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30971:
/*!*******************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/member-notification-header/member-notification-header.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberNotificationHeaderComponent: () => (/* binding */ MemberNotificationHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MemberNotificationHeaderComponent {
  static #_ = this.ɵfac = function MemberNotificationHeaderComponent_Factory(t) {
    return new (t || MemberNotificationHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MemberNotificationHeaderComponent,
    selectors: [["care-billing-mobile-usage-limits-member-notification-header"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "notification", "notification--info", "mb-15"], [1, "icon", "icon-information-shape", "info"]],
    template: function MemberNotificationHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "mobile-usage-limits.member-notification-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.mobile-usage-limits.lbl.member-notification-admin"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 37612:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/mobile-usage-limits-skeleton/mobile-usage-limits-skeleton.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsSkeletonComponent: () => (/* binding */ MobileUsageLimitsSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class MobileUsageLimitsSkeletonComponent {
  static #_ = this.ɵfac = function MobileUsageLimitsSkeletonComponent_Factory(t) {
    return new (t || MobileUsageLimitsSkeletonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MobileUsageLimitsSkeletonComponent,
    selectors: [["care-billing-mobile-usage-limits-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "mr--m--lg", "mr--n", "mb--m", "mb--n--lg", "flex-grow"], [1, "skeleton--v2", "skeleton--basic", "skeleton--container", "content-section", "mb-20", 2, "width", "100%", "height", "16rem"]],
    template: function MobileUsageLimitsSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 1)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "mobile-usage-limits-skeleton");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80867:
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/out-of-bundle-limits-description/out-of-bundle-limits-description.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBundleLimitsDescriptionComponent: () => (/* binding */ OutOfBundleLimitsDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function OutOfBundleLimitsDescriptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-section-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.mobile-usage-limits.lbl.out-of-bundle-description"), " ");
  }
}
function OutOfBundleLimitsDescriptionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-section-description-member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.mobile-usage-limits.lbl.member-out-of-bundle-description"), " ");
  }
}
class OutOfBundleLimitsDescriptionComponent {
  static #_ = this.ɵfac = function OutOfBundleLimitsDescriptionComponent_Factory(t) {
    return new (t || OutOfBundleLimitsDescriptionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OutOfBundleLimitsDescriptionComponent,
    selectors: [["care-billing-mobile-usage-limits-out-of-bundle-limits-description"]],
    inputs: {
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "isMember", "isMember", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [["class", "font--body-regular pt--xxs color-shade_72 col-12 col-md-10"], [1, "font--body-regular", "pt--xxs", "color-shade_72", "col-12", "col-md-10"]],
    template: function OutOfBundleLimitsDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OutOfBundleLimitsDescriptionComponent_Conditional_0_Template, 3, 4, "p", 0)(1, OutOfBundleLimitsDescriptionComponent_Conditional_1_Template, 3, 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, !ctx.isMember ? 0 : 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55925:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/out-of-bundle-limits-header/out-of-bundle-limits-header.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBundleLimitsHeaderComponent: () => (/* binding */ OutOfBundleLimitsHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function OutOfBundleLimitsHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.title.out-of-bundle-limit"), " ");
  }
}
function OutOfBundleLimitsHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.title.member-out-of-bundle-limit"), " ");
  }
}
class OutOfBundleLimitsHeaderComponent {
  static #_ = this.ɵfac = function OutOfBundleLimitsHeaderComponent_Factory(t) {
    return new (t || OutOfBundleLimitsHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OutOfBundleLimitsHeaderComponent,
    selectors: [["care-billing-mobile-usage-limits-out-of-bundle-limits-header"]],
    inputs: {
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "isMember", "isMember", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "heading--nomargin"]],
    template: function OutOfBundleLimitsHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutOfBundleLimitsHeaderComponent_Conditional_2_Template, 2, 3)(3, OutOfBundleLimitsHeaderComponent_Conditional_3_Template, 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-section-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-section-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !ctx.isMember ? 2 : 3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 73154:
/*!*********************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/out-of-bundle-limits-notification/out-of-bundle-limits-notification.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBundleLimitsNotificationComponent: () => (/* binding */ OutOfBundleLimitsNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





function OutOfBundleLimitsNotificationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-current-limit-price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "ng.mobile-usage-limits.lbl.no-limits"), " ");
  }
}
const _c0 = a0 => ({
  value: a0
});
function OutOfBundleLimitsNotificationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-current-limit-price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, "ng.mobile-usage-limits.lbl.limit", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r1.outOfBundleLimitValue)), " ");
  }
}
class OutOfBundleLimitsNotificationComponent {
  constructor() {
    this.MESSAGE_GROUP = 'mobile-usage-limits';
    this.isOutOfBundleNoLimits = false;
  }
  ngOnInit() {
    if (this.currentOutOfBundleLimit?.limit?.enabled === false) {
      this.isOutOfBundleNoLimits = true;
    } else {
      this.outOfBundleLimitValue = this.currentOutOfBundleLimit ? Math.floor(this.currentOutOfBundleLimit.limit?.value) : undefined;
    }
  }
  static #_ = this.ɵfac = function OutOfBundleLimitsNotificationComponent_Factory(t) {
    return new (t || OutOfBundleLimitsNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OutOfBundleLimitsNotificationComponent,
    selectors: [["care-billing-mobile-usage-limits-out-of-bundle-limits-notification"]],
    inputs: {
      currentOutOfBundleLimit: "currentOutOfBundleLimit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [[1, "font--body-small", "color-shade_72"], ["class", "heading--5 heading--nomargin text-weight--xl"], [1, "heading--5", "heading--nomargin", "text-weight--xl"]],
    template: function OutOfBundleLimitsNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OutOfBundleLimitsNotificationComponent_Conditional_4_Template, 3, 4, "div", 1)(5, OutOfBundleLimitsNotificationComponent_Conditional_5_Template, 3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-current-limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "ng.mobile-usage-limits.lbl.out-of-bundle-current-limit"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](4, ctx.isOutOfBundleNoLimits ? 4 : 5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42834:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/premium-limits-notification/premium-limits-notification.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumLimitsNotificationComponent: () => (/* binding */ PremiumLimitsNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





const _c0 = a0 => ({
  value: a0
});
class PremiumLimitsNotificationComponent {
  constructor() {
    this.MESSAGE_GROUP = 'mobile-usage-limits';
  }
  static #_ = this.ɵfac = function PremiumLimitsNotificationComponent_Factory(t) {
    return new (t || PremiumLimitsNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PremiumLimitsNotificationComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-limits-notification"]],
    inputs: {
      currentPremiumLimit: "currentPremiumLimit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 11,
    consts: [[1, "font--body-small", "color-shade_72"], [1, "heading--5", "heading--nomargin", "text-weight--xl"]],
    template: function PremiumLimitsNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-current-usage-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "ng.mobile-usage-limits.lbl.premium-services-current-limit"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "mobile-usage-limits-premium-services-current-usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 6, "ng.mobile-usage-limits.lbl.limit", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.currentPremiumLimit)), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 75952:
/*!*************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/premium-services-adjust-limit/premium-services-adjust-limit.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumServicesAdjustLimitComponent: () => (/* binding */ PremiumServicesAdjustLimitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = a0 => ({
  value: a0
});
class PremiumServicesAdjustLimitComponent {
  constructor() {
    this.MESSAGE_GROUP = 'mobile-usage-limits';
    this.isAdjustLimitClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onEdit(e) {
    e.preventDefault();
    this.isAdjustLimitClicked.emit({
      isEditMode: true
    });
  }
  static #_ = this.ɵfac = function PremiumServicesAdjustLimitComponent_Factory(t) {
    return new (t || PremiumServicesAdjustLimitComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PremiumServicesAdjustLimitComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-services-adjust-limit"]],
    inputs: {
      currentPremiumLimit: "currentPremiumLimit"
    },
    outputs: {
      isAdjustLimitClicked: "isAdjustLimitClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 11,
    consts: [[1, "mobile-usage-limits__premium-input"], [1, "mobile-usage-limits__premium-edit"], [1, "mr--xxs", "text-weight--l"], ["href", "javascript:void(0)", 1, "link", 3, "click"]],
    template: function PremiumServicesAdjustLimitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PremiumServicesAdjustLimitComponent_Template_a_click_5_listener($event) {
          return ctx.onEdit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-services-adjust-limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, "ng.mobile-usage-limits.lbl.limit", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.currentPremiumLimit)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-services-adjust-limit-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ng.mobile-usage-limits.lnk.edit"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38272:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/premium-services-description/premium-services-description.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumServicesDescriptionComponent: () => (/* binding */ PremiumServicesDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function PremiumServicesDescriptionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.lbl.premium-services-description"), " ");
  }
}
function PremiumServicesDescriptionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.lbl.member-premium-services-description"), " ");
  }
}
class PremiumServicesDescriptionComponent {
  static #_ = this.ɵfac = function PremiumServicesDescriptionComponent_Factory(t) {
    return new (t || PremiumServicesDescriptionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PremiumServicesDescriptionComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-services-description"]],
    inputs: {
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "isMember", "isMember", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [[1, "font--body-regular", "pt--xxs", "color-shade_72", "col-12", "col-md-10"]],
    template: function PremiumServicesDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PremiumServicesDescriptionComponent_Conditional_1_Template, 2, 3)(2, PremiumServicesDescriptionComponent_Conditional_2_Template, 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-services-header-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.isMember ? 1 : 2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 89439:
/*!*************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/premium-services-header/premium-services-header.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumServicesHeaderComponent: () => (/* binding */ PremiumServicesHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function PremiumServicesHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.title.member-premium-services-limit"), " ");
  }
}
function PremiumServicesHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.mobile-usage-limits.title.premium-services-limit"), " ");
  }
}
class PremiumServicesHeaderComponent {
  static #_ = this.ɵfac = function PremiumServicesHeaderComponent_Factory(t) {
    return new (t || PremiumServicesHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PremiumServicesHeaderComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-services-header"]],
    inputs: {
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "isMember", "isMember", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "heading--nomargin"]],
    template: function PremiumServicesHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PremiumServicesHeaderComponent_Conditional_2_Template, 2, 3)(3, PremiumServicesHeaderComponent_Conditional_3_Template, 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-services-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "premium-services-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.isMember ? 2 : 3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5898:
/*!***************************************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/premium-services-member-notification/premium-services-member-notification.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumServicesMemberNotificationComponent: () => (/* binding */ PremiumServicesMemberNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





const _c0 = a0 => ({
  value: a0
});
function PremiumServicesMemberNotificationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "ng.mobile-usage-limits.lbl.limit", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentPremiumLimit)), " ");
  }
}
class PremiumServicesMemberNotificationComponent {
  constructor() {
    this.MESSAGE_GROUP = 'mobile-usage-limits';
  }
  static #_ = this.ɵfac = function PremiumServicesMemberNotificationComponent_Factory(t) {
    return new (t || PremiumServicesMemberNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PremiumServicesMemberNotificationComponent,
    selectors: [["care-billing-mobile-usage-limits-premium-services-member-notification"]],
    inputs: {
      currentPremiumLimit: "currentPremiumLimit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "px--xl--md", "pb--xl--md", "px--l", "pb--l"], [1, "font--body-regular", "mr--xxs--md"], ["class", "text-weight--l"], [1, "text-weight--l"]],
    template: function PremiumServicesMemberNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PremiumServicesMemberNotificationComponent_Conditional_4_Template, 3, 6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "premium-services-member-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "ng.mobile-usage-limits.lbl.max-additional-premium-usages"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](4, ctx.currentPremiumLimit ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 75322:
/*!*******************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/update-mobile-usage-limits/update-mobile-usage-limits.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateMobileUsageLimitsComponent: () => (/* binding */ UpdateMobileUsageLimitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);






class UpdateMobileUsageLimitsComponent {
  constructor() {
    this.MESSAGE_GROUP = 'mobile-usage-limits';
    this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  submit() {
    this.clickEvent.emit(true);
  }
  cancel() {
    this.clickEvent.emit(false);
  }
  static #_ = this.ɵfac = function UpdateMobileUsageLimitsComponent_Factory(t) {
    return new (t || UpdateMobileUsageLimitsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UpdateMobileUsageLimitsComponent,
    selectors: [["care-billing-mobile-usage-limits-update-mobile-usage-limits"]],
    outputs: {
      clickEvent: "clickEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 8,
    consts: [[1, "display--flex", "py--l", "width--full", "border--t-r", "border-color--all--light-grey", "border-width--t--r", "border-style--t--solid", "background-white"], [1, "button-override", "button", "button--secondary", "button--fullwidth", "mr--m", 3, "click"], [1, "button-override", "button", "button--primary", "button--fullwidth", 3, "click"]],
    template: function UpdateMobileUsageLimitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateMobileUsageLimitsComponent_Template_button_click_1_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateMobileUsageLimitsComponent_Template_button_click_5_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-update-limits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.mobile-usage-limits.btn.cancel-changes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "save-limits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "ng.mobile-usage-limits.btn.save-changes"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
    styles: [".button.button-override[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex: 1;\n  width: auto;\n  min-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9saW1pdHMvbW9iaWxlLXVzYWdlLWxpbWl0cy91aS9zcmMvbGliL3VwZGF0ZS1tb2JpbGUtdXNhZ2UtbGltaXRzL3VwZGF0ZS1tb2JpbGUtdXNhZ2UtbGltaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5idXR0b24tb3ZlcnJpZGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmbGV4OiAxO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 65355:
/*!*********************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/ui/src/lib/update-warning-dialog/update-warning-dialog.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateWarningDialogComponent: () => (/* binding */ UpdateWarningDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__);







function UpdateWarningDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateWarningDialogComponent_div_3_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateWarningDialogComponent_div_3_Template_label_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "update-warning-dialog-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.dialogData.warningDetails), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "update-warning-dialog-cancel-button-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r0.dialogData.cancelButtonText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "update-warning-dialog-confirm-button-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx_r0.dialogData.confirmButtonText), " ");
  }
}
class UpdateWarningDialogComponent {
  constructor() {
    this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onConfirm() {
    this.clickEvent.emit(true);
  }
  onCancel() {
    this.clickEvent.emit(false);
  }
  static #_ = this.ɵfac = function UpdateWarningDialogComponent_Factory(t) {
    return new (t || UpdateWarningDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UpdateWarningDialogComponent,
    selectors: [["care-billing-mobile-usage-limits-update-warning-dialog"]],
    inputs: {
      dialogData: "dialogData",
      showWarningDialog: "showWarningDialog"
    },
    outputs: {
      clickEvent: "clickEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [[3, "showMenu", "title", "hideCloseButton", "cancelClickOutside", "closeMenu"], [1, "px--m"], [4, "ngIf"], [1, "pb-30"], [1, "overlay__section__content__description"], [1, "color-shade_72", 3, "innerHTML"], [1, "flex-direction--row--md", "flex-direction--column-reverse", "p--n--sm", "pt--n", "pb--n", "mt--l", "display--flex"], [1, "pl-0", "pr-0", "display--flex", "mt--n--sm", "mb--xm--sm", "mr--n--sm", "mt--n", "mr--n", "mb--m", "ml--n", 3, "click"], [1, "button", "button--secondary", "font-weight--black", "button--fullwidth"], [1, "pl-0", "pr-0", "display--flex", "mt--n--sm", "ml--m--md", "mb--xm--sm", "mr--n--sm", "mt--n", "mr--n", "mb--m", "ml--n"], [1, "button", "button--primary", "button--fullwidth", 3, "click"]],
    template: function UpdateWarningDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-slide-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function UpdateWarningDialogComponent_Template_tg_slide_menu_closeMenu_0_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdateWarningDialogComponent_div_3_Template, 14, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showWarningDialog)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, ctx.showWarningDialog ? ctx.dialogData.warningText : ""))("hideCloseButton", true)("cancelClickOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-usage-limits-out-of-bundle-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "update-warning-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWarningDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SlideMenuComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_limits_mobile-usage-limits_ui_src_index_ts-_c9571.js.map