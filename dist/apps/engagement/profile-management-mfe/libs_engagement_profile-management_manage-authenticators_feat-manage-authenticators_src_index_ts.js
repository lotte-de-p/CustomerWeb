(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_manage-authenticators_feat-manage-authenticators_src_index_ts"],{

/***/ 74126:
/*!**********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/feat-manage-authenticators/src/index.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsActivateComponent: () => (/* reexport safe */ _lib_manage_authenticators_activate_manage_authenticators_activate_component__WEBPACK_IMPORTED_MODULE_2__.ManageAuthenticatorsActivateComponent),
/* harmony export */   ManageAuthenticatorsComponent: () => (/* reexport safe */ _lib_manage_authenticators_component__WEBPACK_IMPORTED_MODULE_0__.ManageAuthenticatorsComponent),
/* harmony export */   ManageAuthenticatorsOverviewComponent: () => (/* reexport safe */ _lib_manage_authenticators_overview_manage_authenticators_overview_component__WEBPACK_IMPORTED_MODULE_1__.ManageAuthenticatorsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_manage_authenticators_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/manage-authenticators.component */ 52999);
/* harmony import */ var _lib_manage_authenticators_overview_manage_authenticators_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/manage-authenticators-overview/manage-authenticators-overview.component */ 17122);
/* harmony import */ var _lib_manage_authenticators_activate_manage_authenticators_activate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/manage-authenticators-activate/manage-authenticators-activate.component */ 65477);




/***/ }),

/***/ 65477:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/feat-manage-authenticators/src/lib/manage-authenticators-activate/manage-authenticators-activate.component.ts ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsActivateComponent: () => (/* binding */ ManageAuthenticatorsActivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @profile-management/util */ 63387);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_management_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profile-management/manage-authenticators/ui */ 85278);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_4__);








function ManageAuthenticatorsActivateComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/logo_", ctx_r0.selectedAuthenticator == null ? null : ctx_r0.selectedAuthenticator.type, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "", ctx_r0.selectedAuthenticator == null ? null : ctx_r0.selectedAuthenticator.type, " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-authenticators");
  }
}
function ManageAuthenticatorsActivateComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-pm-manage-authenticators-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "" + (ctx_r1.selectedAuthenticator == null ? null : ctx_r1.selectedAuthenticator.type))("size", "icon-component--size__l");
  }
}
class ManageAuthenticatorsActivateComponent {
  constructor() {
    this.toggleActivateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showActivate = false;
  }
  cancel() {
    this.showActivate = !this.showActivate;
    this.toggleActivateEvent.emit(false);
  }
  activateAuthenticator() {
    const enrollmentLink = this.selectedAuthenticator?.enrollmentLink;
    const redirectUri = encodeURIComponent(this.redirectUrl());
    const enrollmentUrl = `${enrollmentLink}?redirect_uri=${redirectUri}`;
    this.navigateToEnrollmentUrl(enrollmentUrl);
  }
  redirectUrl() {
    const currentDomain = window.location.origin;
    return this.isAbsoluteUrl(this.successPageUrl) ? this.successPageUrl : `${currentDomain}${this.successPageUrl}`;
  }
  isAbsoluteUrl(url) {
    const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i;
    return absoluteUrlPattern.test(url);
  }
  navigateToEnrollmentUrl(url) {
    window.location.href = url;
  }
  static #_ = this.ɵfac = function ManageAuthenticatorsActivateComponent_Factory(t) {
    return new (t || ManageAuthenticatorsActivateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageAuthenticatorsActivateComponent,
    selectors: [["tg-pm-manage-authenticators-activate"]],
    inputs: {
      selectedAuthenticator: "selectedAuthenticator",
      successPageUrl: "successPageUrl"
    },
    outputs: {
      toggleActivateEvent: "toggleActivateEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 27,
    consts: [[1, "link-list-item__icon", "align-self--stretch", "display--flex", "align-items--start", "p--s"], [4, "ngIf"], [1, "cmp", "cmp-title", "p--s"], [1, "text-align--left"], [1, "cmp-text", "theme--inherit", "p--s", 3, "innerHTML"], [1, "col-sm-12", "col-md-12"], [1, "content-section"], [1, "heading--4", "heading--nomargin", "p--s"], [1, "p--m--sm", "p--m"], [1, "button", "button--primary", 3, "click"], [1, "button", "button--secondary", 3, "click"], ["aria-hidden", "true", 1, "icon", "icon-component", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "backdrop-mask", "icon-component--size__l", "hide--base", "icon-component--secondary"], ["tgProfileManagementImageSrcInterceptor", "", 3, "moduleId", "src", "alt"], [3, "type", "size"]],
    template: function ManageAuthenticatorsActivateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageAuthenticatorsActivateComponent_div_2_Template, 3, 3, "div", 1)(3, ManageAuthenticatorsActivateComponent_div_3_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageAuthenticatorsActivateComponent_Template_button_click_18_listener() {
          return ctx.activateAuthenticator();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageAuthenticatorsActivateComponent_Template_button_click_21_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) === "itsme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) !== "itsme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "ng.manage-authenticators.lbl.activate-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 17, "ng.manage-authenticators.lbl.activate-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, "ng.manage-authenticators.lbl.activate-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-subtitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, "ng.manage-authenticators.lbl.activate-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-steps"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-btn-activate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 23, "ng.manage-authenticators.btn.activate-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-activate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-activate-btn-cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 25, "ng.manage-authenticators.btn.activate-cancel"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_4__.ManageAuthenticatorsIconComponent, _profile_management_util__WEBPACK_IMPORTED_MODULE_3__.ImageSrcInterceptorDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 671:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/feat-manage-authenticators/src/lib/manage-authenticators-manage/manage-authenticators-manage.component.ts ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsManageComponent: () => (/* binding */ ManageAuthenticatorsManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profile-management/util */ 63387);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_management_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @profile-management/manage-authenticators/ui */ 85278);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_5__);









function ManageAuthenticatorsManageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/logo_", ctx_r0.selectedAuthenticator == null ? null : ctx_r0.selectedAuthenticator.type, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "", ctx_r0.selectedAuthenticator == null ? null : ctx_r0.selectedAuthenticator.type, " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-authenticators");
  }
}
function ManageAuthenticatorsManageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-pm-manage-authenticators-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "" + (ctx_r1.selectedAuthenticator == null ? null : ctx_r1.selectedAuthenticator.type))("size", "icon-component--size__l");
  }
}
class ManageAuthenticatorsManageComponent {
  constructor() {
    this.toggleManageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showManage = false;
  }
  manageAuthenticator() {
    if (this.selectedAuthenticator?.type === _profile_management_data_access__WEBPACK_IMPORTED_MODULE_3__.Factors.SMS) {
      window.location.href = this.successPageUrl;
    }
  }
  cancel() {
    this.showManage = !this.showManage;
    this.toggleManageEvent.emit(false);
  }
  static #_ = this.ɵfac = function ManageAuthenticatorsManageComponent_Factory(t) {
    return new (t || ManageAuthenticatorsManageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageAuthenticatorsManageComponent,
    selectors: [["tg-pm-manage-authenticators-manage"]],
    inputs: {
      selectedAuthenticator: "selectedAuthenticator",
      successPageUrl: "successPageUrl"
    },
    outputs: {
      toggleManageEvent: "toggleManageEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 27,
    consts: [[1, "link-list-item__icon", "align-self--stretch", "display--flex", "align-items--start", "p--s"], ["class", "p--s", 4, "ngIf"], [4, "ngIf"], [1, "cmp", "cmp-title", "p--s"], [1, "text-align--left"], [1, "cmp-text", "theme--inherit", "p--s", 3, "innerHTML"], [1, "col-sm-12", "col-md-12"], [1, "content-section"], [1, "heading--4", "heading--nomargin", "p--s"], [1, "p--m--sm", "p--m"], [1, "button", "button--primary", 3, "click"], [1, "button", "button--secondary", 3, "click"], [1, "p--s"], ["aria-hidden", "true", 1, "icon", "icon-component", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "backdrop-mask", "icon-component--size__l", "hide--base", "icon-component--secondary"], ["tgProfileManagementImageSrcInterceptor", "", 3, "moduleId", "src", "alt"], [3, "type", "size"]],
    template: function ManageAuthenticatorsManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageAuthenticatorsManageComponent_div_2_Template, 3, 3, "div", 1)(3, ManageAuthenticatorsManageComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageAuthenticatorsManageComponent_Template_button_click_18_listener() {
          return ctx.manageAuthenticator();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageAuthenticatorsManageComponent_Template_button_click_21_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) === "itsme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) !== "itsme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "ng.manage-authenticators.lbl.manage-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 17, "ng.manage-authenticators.lbl.manage-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, "ng.manage-authenticators.lbl.manage-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-subtitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, "ng.manage-authenticators.lbl.manage-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-steps"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-btn-deactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 23, "ng.manage-authenticators.btn.manage-" + (ctx.selectedAuthenticator == null ? null : ctx.selectedAuthenticator.type) + "-deactivate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-manage-btn-cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 25, "ng.manage-authenticators.btn.manage-cancel"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_5__.ManageAuthenticatorsIconComponent, _profile_management_util__WEBPACK_IMPORTED_MODULE_4__.ImageSrcInterceptorDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 17122:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/feat-manage-authenticators/src/lib/manage-authenticators-overview/manage-authenticators-overview.component.ts ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsOverviewComponent: () => (/* binding */ ManageAuthenticatorsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @profile-management/util */ 63387);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_management_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @profile-management/manage-authenticators/ui */ 85278);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _manage_authenticators_activate_manage_authenticators_activate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../manage-authenticators-activate/manage-authenticators-activate.component */ 65477);
/* harmony import */ var _manage_authenticators_manage_manage_authenticators_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manage-authenticators-manage/manage-authenticators-manage.component */ 671);












function ManageAuthenticatorsOverviewComponent_div_1_For_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const authenticator_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/logo_", authenticator_r4.type, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "", authenticator_r4.type, " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-authenticators");
  }
}
function ManageAuthenticatorsOverviewComponent_div_1_For_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-pm-manage-authenticators-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const authenticator_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "" + authenticator_r4.type)("size", "icon-component--size__m");
  }
}
function ManageAuthenticatorsOverviewComponent_div_1_For_17_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.manage-authenticators.lbl.authenticator-status"), " ");
  }
}
function ManageAuthenticatorsOverviewComponent_div_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageAuthenticatorsOverviewComponent_div_1_For_17_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const authenticator_r4 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onSelectAuthenticator(authenticator_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageAuthenticatorsOverviewComponent_div_1_For_17_div_3_Template, 3, 3, "div", 1)(4, ManageAuthenticatorsOverviewComponent_div_1_For_17_div_4_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14)(6, "div")(7, "div", 15)(8, "div", 16)(9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18)(13, "div", 16)(14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageAuthenticatorsOverviewComponent_div_1_For_17_div_18_Template, 4, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const authenticator_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authenticator_r4.type === "itsme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (authenticator_r4 == null ? null : authenticator_r4.type) !== "itsme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "ng.manage-authenticators.lbl." + authenticator_r4.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-authenticator-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "ng.manage-authenticators.lbl." + authenticator_r4.type + "-subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authenticator_r4.enabled);
  }
}
function ManageAuthenticatorsOverviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 4)(3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](16, ManageAuthenticatorsOverviewComponent_div_1_For_17_Template, 20, 13, "li", 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "a", 11)(28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14)(31, "div")(32, "div", 15)(33, "div", 16)(34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18)(38, "div", 16)(39, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-overview-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, "ng.manage-authenticators.lbl.overview-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, "ng.manage-authenticators.lbl.overview-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-overview-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-passwordless-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, "ng.manage-authenticators.lbl.passwordless-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, "ng.manage-authenticators.lbl.passwordless-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-passwordless-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 22, ctx_r0.authenticators$)) == null ? null : tmp_8_0.authenticators);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 24, "ng.manage-authenticators.lbl.2fa-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, "ng.manage-authenticators.lbl.2fa-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-2fa-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 28, "ng.manage-authenticators.lbl.2fa"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pm-ma-2fa-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 30, "ng.manage-authenticators.lbl.2fa-subtitle"), " ");
  }
}
function ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_activate_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-pm-manage-authenticators-activate", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleActivateEvent", function ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_activate_2_Template_tg_pm_manage_authenticators_activate_toggleActivateEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.toggleActivateEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAuthenticator", ctx_r1.selectedAuthenticator)("successPageUrl", ctx_r1.successPageUrl);
  }
}
function ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_manage_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-pm-manage-authenticators-manage", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleManageEvent", function ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_manage_3_Template_tg_pm_manage_authenticators_manage_toggleManageEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.toggleManageEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAuthenticator", ctx_r2.selectedAuthenticator)("successPageUrl", ctx_r2.successPageUrl);
  }
}
class ManageAuthenticatorsOverviewComponent {
  constructor() {
    this.customerProfileFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileFacade);
    this.showOverview = true;
    this.showActivate = false;
    this.showManage = false;
    this.successPageUrl = '';
  }
  onSelectAuthenticator(selectedAuthenticator) {
    this.selectedAuthenticator = selectedAuthenticator;
    if (selectedAuthenticator.enabled) {
      this.toggleManageEvent(true);
      this.successPageUrl = this.verifySuccessPageUrl(this.getSuccessPageUrl(selectedAuthenticator.type, selectedAuthenticator.enabled));
    } else {
      this.toggleActivateEvent(true);
      this.successPageUrl = this.verifySuccessPageUrl(this.getSuccessPageUrl(selectedAuthenticator.type, selectedAuthenticator.enabled));
    }
  }
  toggleActivateEvent(toggleActivate) {
    this.showOverview = !toggleActivate;
    this.showActivate = toggleActivate;
    this.customerProfileFacade.toggleActivate(toggleActivate);
  }
  toggleManageEvent(toggleManage) {
    this.showOverview = !toggleManage;
    this.showManage = toggleManage;
    this.customerProfileFacade.toggleManage(toggleManage);
  }
  getSuccessPageUrl(type, isFactorEnabled) {
    switch (type) {
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.Factors.ITSME:
        return isFactorEnabled ? this.deactivationItsmeSuccessPageUrl : this.activationItsmeSuccessPageUrl;
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.Factors.PASSKEY:
        return isFactorEnabled ? this.deactivationPasskeySuccessPageUrl : this.activationPasskeySuccessPageUrl;
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.Factors.AUTHENTICATOR:
        return isFactorEnabled ? this.deactivationAuthenticatorSuccessPageUrl : this.activationAuthenticatorSuccessPageUrl;
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.Factors.SMS:
        return this.profileSettingsPageUrl;
      default:
        return '';
    }
  }
  verifySuccessPageUrl(successPageUrl) {
    if (!successPageUrl) {
      throw Error('successPageUrl is empty');
    } else {
      return successPageUrl;
    }
  }
  static #_ = this.ɵfac = function ManageAuthenticatorsOverviewComponent_Factory(t) {
    return new (t || ManageAuthenticatorsOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageAuthenticatorsOverviewComponent,
    selectors: [["tg-pm-manage-authenticators-overview"]],
    inputs: {
      activationItsmeSuccessPageUrl: "activationItsmeSuccessPageUrl",
      deactivationItsmeSuccessPageUrl: "deactivationItsmeSuccessPageUrl",
      activationPasskeySuccessPageUrl: "activationPasskeySuccessPageUrl",
      deactivationPasskeySuccessPageUrl: "deactivationPasskeySuccessPageUrl",
      activationAuthenticatorSuccessPageUrl: "activationAuthenticatorSuccessPageUrl",
      deactivationAuthenticatorSuccessPageUrl: "deactivationAuthenticatorSuccessPageUrl",
      activation2FASuccessPageUrl: "activation2FASuccessPageUrl",
      deactivation2FASuccessPageUrl: "deactivation2FASuccessPageUrl",
      profileSettingsPageUrl: "profileSettingsPageUrl",
      authenticators$: "authenticators$",
      selectedAuthenticator: "selectedAuthenticator"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "manage-authenticators", "col-sm-12", "background-shade_04", "m--auto"], [4, "ngIf"], [3, "selectedAuthenticator", "successPageUrl", "toggleActivateEvent", 4, "ngIf"], [3, "selectedAuthenticator", "successPageUrl", "toggleManageEvent", 4, "ngIf"], [1, "cmp", "cmp-title", "p--s"], [1, "text-align--left"], [1, "cmp-text", "theme--inherit", "p--s", 3, "innerHTML"], [1, "heading--4", "heading--nomargin", "p--s"], [1, "col-sm-12", "col-md-12", "p--s"], [1, "content-section"], [1, "link-list"], [1, "link-list-item", "link", "link--unstyled", "display--flex", "gap--m", "gap--m--lg", "width--full", "pl--m", "pl--l--lg", "align-items--start"], [1, "link-list-item__icon", "my--m", "my--l--lg", "align-self--stretch", "display--flex", "align-items--start"], ["aria-hidden", "true", 1, "icon", "icon-component", "icon-shield-key", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "backdrop-mask", "icon-component--size__m", "hide--base", "icon-component--secondary"], [1, "link-list-item__content", "display--flex", "width--full", "justify-content--between", "align-self--stretch", "gap--m", "gap--m--lg", "py--m", "pr--m", "py--l--lg", "pr--l--lg", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey", "align-items--start"], [1, "link-list-item__content__title"], [1, "cmp-text"], [1, "text--xxm--sm", "text--s", "text-weight--xxs"], [1, "link-list-item__content__subtext", "color-shade_72"], ["aria-hidden", "true", 1, "icon", "icon-component", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "icon-chevron-right", "icon-component", "icon-component--size__m", "icon-component--no-padding", "backdrop-mask"], [1, "link-list__item"], [1, "link-list-item", "link", "link--unstyled", "display--flex", "gap--m", "gap--m--lg", "width--full", "pl--m", "pl--l--lg", "align-items--start", 3, "click"], [1, "display--flex"], ["class", "text--xxm--sm text--s text-weight--xxs text-align--left mr--l", 4, "ngIf"], ["aria-hidden", "true", 1, "icon", "icon-component", "justify-content--end", "aspect-ratio--1-1", "width--fit-content", "icon-chevron-right", "icon-component", "icon-component--size__m", "icon-component--no-padding", "backdrop-mask"], ["aria-hidden", "true", 1, "icon", "icon-component", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "backdrop-mask", "icon-component--size__m", "hide--base", "icon-component--secondary"], ["tgProfileManagementImageSrcInterceptor", "", 3, "moduleId", "src", "alt"], [3, "type", "size"], [1, "text--xxm--sm", "text--s", "text-weight--xxs", "text-align--left", "mr--l"], [1, "status-indicator", "status-indicator--positive", "word-break--ellipsis"], ["class", "link-list__item"], [3, "selectedAuthenticator", "successPageUrl", "toggleActivateEvent"], [3, "selectedAuthenticator", "successPageUrl", "toggleManageEvent"]],
    template: function ManageAuthenticatorsOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageAuthenticatorsOverviewComponent_div_1_Template, 43, 32, "div", 1)(2, ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_activate_2_Template, 1, 2, "tg-pm-manage-authenticators-activate", 2)(3, ManageAuthenticatorsOverviewComponent_tg_pm_manage_authenticators_manage_3_Template, 1, 2, "tg-pm-manage-authenticators-manage", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showActivate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showManage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _profile_management_util__WEBPACK_IMPORTED_MODULE_3__.ImageSrcInterceptorDirective, _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__.ManageAuthenticatorsIconComponent, _manage_authenticators_activate_manage_authenticators_activate_component__WEBPACK_IMPORTED_MODULE_7__.ManageAuthenticatorsActivateComponent, _manage_authenticators_manage_manage_authenticators_manage_component__WEBPACK_IMPORTED_MODULE_8__.ManageAuthenticatorsManageComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52999:
/*!****************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/feat-manage-authenticators/src/lib/manage-authenticators.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsComponent: () => (/* binding */ ManageAuthenticatorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manage_authenticators_overview_manage_authenticators_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-authenticators-overview/manage-authenticators-overview.component */ 17122);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @profile-management/manage-authenticators/ui */ 85278);
/* harmony import */ var _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__);










function ManageAuthenticatorsComponent_tg_pm_manage_authenticators_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-pm-manage-authenticators-loader", 3);
  }
  if (rf & 2) {
    const loading_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", loading_r3);
  }
}
function ManageAuthenticatorsComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-pm-manage-authenticators-overview", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authenticators$", ctx_r4.authenticators$)("activationItsmeSuccessPageUrl", ctx_r4.activationItsmeSuccessPageUrl)("deactivationItsmeSuccessPageUrl", ctx_r4.deactivationItsmeSuccessPageUrl)("activationPasskeySuccessPageUrl", ctx_r4.activationPasskeySuccessPageUrl)("deactivationPasskeySuccessPageUrl", ctx_r4.deactivationPasskeySuccessPageUrl)("activationAuthenticatorSuccessPageUrl", ctx_r4.activationAuthenticatorSuccessPageUrl)("deactivationAuthenticatorSuccessPageUrl", ctx_r4.deactivationAuthenticatorSuccessPageUrl)("activation2FASuccessPageUrl", ctx_r4.activation2FASuccessPageUrl)("deactivation2FASuccessPageUrl", ctx_r4.deactivation2FASuccessPageUrl)("profileSettingsPageUrl", ctx_r4.profileSettingsPageUrl);
  }
}
function ManageAuthenticatorsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageAuthenticatorsComponent_ng_template_3_ng_container_0_Template, 2, 10, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.authenticators$));
  }
}
class ManageAuthenticatorsComponent {
  constructor() {
    this.scopes = ['manageauthenticators'];
    this.customerProfileFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileFacade);
    this.authenticators$ = this.customerProfileFacade.authenticators$;
    this.loadError$ = this.customerProfileFacade.loadError$;
    this.loading$ = this.customerProfileFacade.loading$;
  }
  initAfterLoggedIn() {
    this.customerProfileFacade.loadAuthenticators();
  }
  static #_ = this.ɵfac = function ManageAuthenticatorsComponent_Factory(t) {
    return new (t || ManageAuthenticatorsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageAuthenticatorsComponent,
    selectors: [["tg-pm-manage-authenticators"]],
    inputs: {
      activationItsmeSuccessPageUrl: "activationItsmeSuccessPageUrl",
      deactivationItsmeSuccessPageUrl: "deactivationItsmeSuccessPageUrl",
      activationPasskeySuccessPageUrl: "activationPasskeySuccessPageUrl",
      deactivationPasskeySuccessPageUrl: "deactivationPasskeySuccessPageUrl",
      activationAuthenticatorSuccessPageUrl: "activationAuthenticatorSuccessPageUrl",
      deactivationAuthenticatorSuccessPageUrl: "deactivationAuthenticatorSuccessPageUrl",
      activation2FASuccessPageUrl: "activation2FASuccessPageUrl",
      deactivation2FASuccessPageUrl: "deactivation2FASuccessPageUrl",
      profileSettingsPageUrl: "profileSettingsPageUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[3, "scopes", "componentCanRender"], [3, "loading", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "loading"], [4, "ngIf"], [3, "authenticators$", "activationItsmeSuccessPageUrl", "deactivationItsmeSuccessPageUrl", "activationPasskeySuccessPageUrl", "deactivationPasskeySuccessPageUrl", "activationAuthenticatorSuccessPageUrl", "deactivationAuthenticatorSuccessPageUrl", "activation2FASuccessPageUrl", "deactivation2FASuccessPageUrl", "profileSettingsPageUrl"]],
    template: function ManageAuthenticatorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ManageAuthenticatorsComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageAuthenticatorsComponent_tg_pm_manage_authenticators_loader_1_Template, 1, 1, "tg-pm-manage-authenticators-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageAuthenticatorsComponent_ng_template_3_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.loading$))("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _profile_management_data_access__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileNgrxModule, _manage_authenticators_overview_manage_authenticators_overview_component__WEBPACK_IMPORTED_MODULE_5__.ManageAuthenticatorsOverviewComponent, _profile_management_manage_authenticators_ui__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_manage-authenticators_feat-manage-authenticators_src_index_ts.js.map