(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_profile-overview_ui_src_index_ts-_49e60"],{

/***/ 82014:
/*!*****************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileIconComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PmProfileIconComponent),
/* harmony export */   PmProfileOverviewHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PmProfileOverviewHeaderComponent),
/* harmony export */   PmProfileOverviewNavLinkComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PmProfileOverviewNavLinkComponent),
/* harmony export */   PmProfileOverviewNavLinksComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PmProfileOverviewNavLinksComponent),
/* harmony export */   PmProfileOverviewSkeletonComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PmProfileOverviewSkeletonComponent),
/* harmony export */   ProfileOverviewErrorComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProfileOverviewErrorComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 68470);


/***/ }),

/***/ 68470:
/*!*********************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileIconComponent: () => (/* reexport safe */ _pm_profile_icon_pm_profile_icon_component__WEBPACK_IMPORTED_MODULE_0__.PmProfileIconComponent),
/* harmony export */   PmProfileOverviewHeaderComponent: () => (/* reexport safe */ _pm_profile_overview_header_pm_profile_overview_header_component__WEBPACK_IMPORTED_MODULE_1__.PmProfileOverviewHeaderComponent),
/* harmony export */   PmProfileOverviewNavLinkComponent: () => (/* reexport safe */ _pm_profile_overview_nav_link_pm_profile_overview_nav_link_component__WEBPACK_IMPORTED_MODULE_2__.PmProfileOverviewNavLinkComponent),
/* harmony export */   PmProfileOverviewNavLinksComponent: () => (/* reexport safe */ _pm_profile_overview_nav_links_pm_profile_overview_nav_links_component__WEBPACK_IMPORTED_MODULE_3__.PmProfileOverviewNavLinksComponent),
/* harmony export */   PmProfileOverviewSkeletonComponent: () => (/* reexport safe */ _pm_profile_overview_skeleton_pm_profile_overview_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.PmProfileOverviewSkeletonComponent),
/* harmony export */   ProfileOverviewErrorComponent: () => (/* reexport safe */ _profile_overview_error_profile_overview_error_component__WEBPACK_IMPORTED_MODULE_6__.ProfileOverviewErrorComponent)
/* harmony export */ });
/* harmony import */ var _pm_profile_icon_pm_profile_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pm-profile-icon/pm-profile-icon.component */ 53536);
/* harmony import */ var _pm_profile_overview_header_pm_profile_overview_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pm-profile-overview-header/pm-profile-overview-header.component */ 7727);
/* harmony import */ var _pm_profile_overview_nav_link_pm_profile_overview_nav_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pm-profile-overview-nav-link/pm-profile-overview-nav-link.component */ 42918);
/* harmony import */ var _pm_profile_overview_nav_links_pm_profile_overview_nav_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pm-profile-overview-nav-links/pm-profile-overview-nav-links.component */ 4100);
/* harmony import */ var _interfaces_profile_overview_nav_links_urls_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces/profile-overview-nav-links-urls.interface */ 67026);
/* harmony import */ var _pm_profile_overview_skeleton_pm_profile_overview_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pm-profile-overview-skeleton/pm-profile-overview-skeleton.component */ 71028);
/* harmony import */ var _profile_overview_error_profile_overview_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-overview-error/profile-overview-error.component */ 61979);








/***/ }),

/***/ 67026:
/*!********************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/interfaces/profile-overview-nav-links-urls.interface.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53536:
/*!*********************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/pm-profile-icon/pm-profile-icon.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileIconComponent: () => (/* binding */ PmProfileIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @profile-management/util */ 63387);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_management_util__WEBPACK_IMPORTED_MODULE_1__);



function PmProfileIconComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-profile-overview");
  }
}
function PmProfileIconComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-profile-overview");
  }
}
function PmProfileIconComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PmProfileIconComponent_Conditional_1_Conditional_0_Template, 1, 1, "img", 1)(1, PmProfileIconComponent_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r0.isBaseCustomer() ? 0 : 1);
  }
}
function PmProfileIconComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.profilePictureUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class PmProfileIconComponent {
  constructor() {
    this.hasProfilePicture = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.profilePictureUrl = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.isBaseCustomer = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
  }
  static #_ = this.ɵfac = function PmProfileIconComponent_Factory(t) {
    return new (t || PmProfileIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PmProfileIconComponent,
    selectors: [["tg-pm-profile-icon"]],
    inputs: {
      hasProfilePicture: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "hasProfilePicture"],
      profilePictureUrl: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "profilePictureUrl"],
      isBaseCustomer: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "isBaseCustomer"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [["data-cs-mask", "", 1, "cmp-image", "mr--xs"], ["class", "cmp-image__image border-radius--circle", "tgProfileManagementImageSrcInterceptor", "", "src", "/assets/profile-avatar-base.svg", "alt", "profile picture avatar", 3, "moduleId"], ["tgProfileManagementImageSrcInterceptor", "", "src", "/assets/profile-avatar-base.svg", "alt", "profile picture avatar", 1, "cmp-image__image", "border-radius--circle", 3, "moduleId"], ["tgProfileManagementImageSrcInterceptor", "", "src", "/assets/profile-avatar.svg", "alt", "profile picture avatar", 1, "cmp-image__image", "border-radius--circle", 3, "moduleId"], ["alt", "profile", 1, "cmp-image__image", "border-radius--circle", 3, "src"]],
    template: function PmProfileIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PmProfileIconComponent_Conditional_1_Template, 2, 1)(2, PmProfileIconComponent_Conditional_2_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.hasProfilePicture() ? 1 : 2);
      }
    },
    dependencies: [_profile_management_util__WEBPACK_IMPORTED_MODULE_1__.ImageSrcInterceptorDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7727:
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/pm-profile-overview-header/pm-profile-overview-header.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileOverviewHeaderComponent: () => (/* binding */ PmProfileOverviewHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pm_profile_icon_pm_profile_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pm-profile-icon/pm-profile-icon.component */ 53536);





function PmProfileOverviewHeaderComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PmProfileOverviewHeaderComponent_Conditional_10_Template_a_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.trackLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.profile-overview.more-info-link.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.moreInfoLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "ng.profile-overview.more-info-link.title"));
  }
}
function PmProfileOverviewHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div")(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PmProfileOverviewHeaderComponent_Conditional_11_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.copyToClipboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.profile-overview.customer-number.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.profileOverview().customerNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "ng.profile-overview.copy.btn"));
  }
}
class PmProfileOverviewHeaderComponent {
  constructor() {
    this.profileOverview = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.hasProfilePicture = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.profilePictureUrl = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.moreInfoLink = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.isMember = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.isBaseCustomer = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ROLE_MEMBER = 'Member';
    this.MORE_INFO = 'more-info';
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.profileOverview().customerNumber).then(() => {
      console.info('Customer number copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
  trackLinkClick(event) {
    event.preventDefault();
    this.linkClick.emit({
      type: this.MORE_INFO,
      link: this.moreInfoLink()
    });
  }
  static #_ = this.ɵfac = function PmProfileOverviewHeaderComponent_Factory(t) {
    return new (t || PmProfileOverviewHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PmProfileOverviewHeaderComponent,
    selectors: [["tg-pm-profile-overview-header"]],
    inputs: {
      profileOverview: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "profileOverview"],
      hasProfilePicture: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "hasProfilePicture"],
      profilePictureUrl: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "profilePictureUrl"],
      moreInfoLink: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "moreInfoLink"],
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "isMember"],
      isBaseCustomer: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "isBaseCustomer"]
    },
    outputs: {
      linkClick: "linkClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 10,
    consts: [[1, "profile-overview-header", "content-section", "mr--xxs"], [1, "display--flex", "flex-direction--column", "flex-direction--row--md", "width--full"], [1, "display--flex", "align-items--center", "gap--m", "align-self--stretch--md", "p--m", "width--full"], [3, "profilePictureUrl", "hasProfilePicture", "isBaseCustomer"], ["data-cs-mask", "", 1, "heading--4", "heading--nomargin"], ["data-cs-mask", "", 1, "font--caption"], ["class", "display--flex gap--xxxs align-items--center font--caption-small"], ["class", "profile-overview-header--details py--m pr--m pl--l align-self--stretch--md display--flex justify-content--between align-items--center width--full"], [1, "display--flex", "gap--xxxs", "align-items--center", "font--caption-small"], [1, "icon", "icon-information-shape", "icon-sm"], [1, "link", 3, "href", "click"], [1, "profile-overview-header--details", "py--m", "pr--m", "pl--l", "align-self--stretch--md", "display--flex", "justify-content--between", "align-items--center", "width--full"], [1, "font--caption-bold"], ["data-cs-mask", "", 1, "font--body-small"], [1, "button", "button--secondary", "button--small", 3, "click"]],
    template: function PmProfileOverviewHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tg-pm-profile-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PmProfileOverviewHeaderComponent_Conditional_10_Template, 9, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PmProfileOverviewHeaderComponent_Conditional_11_Template, 11, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profilePictureUrl", ctx.profilePictureUrl())("hasProfilePicture", ctx.hasProfilePicture())("isBaseCustomer", ctx.isBaseCustomer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.profileOverview().firstName, " ", ctx.profileOverview().lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "ng.profile-overview.role-" + ctx.profileOverview().role + ".title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](10, ctx.isMember() ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](11, !ctx.isMember() ? 11 : -1);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _pm_profile_icon_pm_profile_icon_component__WEBPACK_IMPORTED_MODULE_2__.PmProfileIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42918:
/*!***********************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/pm-profile-overview-nav-link/pm-profile-overview-nav-link.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileOverviewNavLinkComponent: () => (/* binding */ PmProfileOverviewNavLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function PmProfileOverviewNavLinkComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.profile-overview." + ctx_r0.type() + "-link.subtitle"), " ");
  }
}
class PmProfileOverviewNavLinkComponent {
  constructor() {
    this.type = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.icon = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.link = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.subTitle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.isBaseCustomer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  trackLinkClick(event) {
    event.preventDefault();
    this.linkClick.emit({
      type: this.type(),
      link: this.link()
    });
  }
  static #_ = this.ɵfac = function PmProfileOverviewNavLinkComponent_Factory(t) {
    return new (t || PmProfileOverviewNavLinkComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PmProfileOverviewNavLinkComponent,
    selectors: [["tg-pm-profile-overview-nav-link"]],
    inputs: {
      type: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "type"],
      icon: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "icon"],
      link: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "link"],
      subTitle: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "subTitle"],
      isBaseCustomer: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "isBaseCustomer"]
    },
    outputs: {
      linkClick: "linkClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 13,
    consts: [[1, "link-list-item", "link", "link--unstyled", "display--flex", "gap--m", "gap--m--lg", "width--full", "pl--m", "pl--l--lg", 3, "href", "ngClass", "click"], [1, "link-list-item__icon", "my--m", "my--l--lg", "align-self--stretch", "display--flex", 3, "ngClass"], ["aria-hidden", "true", 3, "ngClass"], [1, "link-list-item__content", "display--flex", "width--full", "justify-content--between", "align-self--stretch", "gap--m", "gap--m--lg", "py--m", "pr--m", "py--l--lg", "pr--l--lg", "border-width--b--r", "border-style--b--solid", "border-color--b--light-grey", 3, "ngClass"], [1, "link-list-item__content__title"], [1, "cmp-text"], ["class", "link-list-item__content__subtext color-shade_72"], ["aria-hidden", "true", 1, "icon", "icon-component", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "icon-chevron-right", "icon-component", "icon-component--size__m", "icon-component--no-padding", "backdrop-mask"], [1, "link-list-item__content__subtext", "color-shade_72"]],
    template: function PmProfileOverviewNavLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PmProfileOverviewNavLinkComponent_Template_a_click_0_listener($event) {
          return ctx.trackLinkClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div")(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PmProfileOverviewNavLinkComponent_Conditional_9_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", ctx.subTitle() ? "align-items--start" : "align-items--center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "pm-po-nav-link-" + ctx.type());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.subTitle() ? "align-items--start" : "align-items--center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon icon-component display--inline-flex aspect-ratio--1-1 width--fit-content backdrop-mask icon-component--size__m icon-", ctx.icon(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isBaseCustomer() ? "hide--telenet icon-component--no-padding" : "hide--base icon-component--secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.subTitle() ? "align-items--start" : "align-items--center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "ng.profile-overview." + ctx.type() + "-link.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ctx.subTitle() ? 9 : -1);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4100:
/*!*************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/pm-profile-overview-nav-links/pm-profile-overview-nav-links.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileOverviewNavLinksComponent: () => (/* binding */ PmProfileOverviewNavLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pm_profile_overview_nav_link_pm_profile_overview_nav_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pm-profile-overview-nav-link/pm-profile-overview-nav-link.component */ 42918);




function PmProfileOverviewNavLinksComponent_ng_container_0_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_li_5_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r9 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "user")("type", "manage-personal-data")("isBaseCustomer", ctx_r2.isBaseCustomer())("link", navLink_r9);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_li_6_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r12 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "lock")("type", "manage-login-password")("isBaseCustomer", ctx_r3.isBaseCustomer())("link", navLink_r12);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_li_7_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r15 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "users-community")("type", "social-login")("isBaseCustomer", ctx_r4.isBaseCustomer())("link", navLink_r15);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_li_8_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r18 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "link")("type", "connected-services")("isBaseCustomer", ctx_r5.isBaseCustomer())("link", navLink_r18)("subTitle", true);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_9_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_9_li_0_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r22 = ctx.ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "users")("type", "manage-other-users")("isBaseCustomer", ctx_r21.isBaseCustomer())("link", navLink_r22);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_9_li_0_Template, 2, 4, "li", 5);
  }
  if (rf & 2) {
    const navLinkUrls_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.manageUsersUrl);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Conditional_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Conditional_2_li_0_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r31 = ctx.ngIf;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "arrows-left-right")("type", "easy-switch")("link", navLink_r31)("isBaseCustomer", ctx_r30.isBaseCustomer())("subTitle", true);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Conditional_2_li_0_Template, 2, 5, "li", 5);
  }
  if (rf & 2) {
    const navLinkUrls_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.easySwitchUrl);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_li_3_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r35 = ctx.ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bill")("type", "payment-method")("link", navLink_r35)("isBaseCustomer", ctx_r29.isBaseCustomer());
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Conditional_2_Template, 1, 1, "li", 6)(3, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_li_3_Template, 2, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLinkUrls_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r26.profileOverview().canManageDtvProducts || ctx_r26.profileOverview().canManageInternetProducts ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.invoiceSettingsUrl);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_2_li_0_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const navLink_r42 = ctx.ngIf;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "qr-code-scan")("type", "wifi-password")("link", navLink_r42)("isBaseCustomer", ctx_r41.isBaseCustomer());
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_2_li_0_Template, 2, 4, "li", 5);
  }
  if (rf & 2) {
    const navLinkUrls_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.wifiPasswordUrl);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9)(1, "tg-pm-profile-overview-nav-link", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_3_li_0_Template_tg_pm_profile_overview_nav_link_linkClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r47 = ctx.ngIf;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "sim-card")("type", "sim-cards")("link", link_r47)("isBaseCustomer", ctx_r46.isBaseCustomer());
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_3_li_0_Template, 2, 4, "li", 5);
  }
  if (rf & 2) {
    const navLinkUrls_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.simManagementPageUrl);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_2_Template, 1, 1, "li", 6)(3, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_3_Template, 1, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r27.profileOverview().canManageInternetProducts ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx_r27.profileOverview().canManageSimCards ? 3 : -1);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_0_Template, 4, 2, "div", 12)(1, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Conditional_1_Template, 4, 2, "div", 12);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx_r7.showProductRelatedLinks() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r7.showConnectivityOptions() ? 1 : -1);
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "ul", 4)(2, "li", 9)(3, "tg-pm-profile-overview-nav-link", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("linkClick", function PmProfileOverviewNavLinksComponent_ng_container_0_div_12_Template_tg_pm_profile_overview_nav_link_linkClick_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r52.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const navLink_r51 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "eye-off")("type", "privacy-settings")("link", navLink_r51)("isBaseCustomer", ctx_r8.isBaseCustomer());
  }
}
function PmProfileOverviewNavLinksComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PmProfileOverviewNavLinksComponent_ng_container_0_li_5_Template, 2, 4, "li", 5)(6, PmProfileOverviewNavLinksComponent_ng_container_0_li_6_Template, 2, 4, "li", 5)(7, PmProfileOverviewNavLinksComponent_ng_container_0_li_7_Template, 2, 4, "li", 5)(8, PmProfileOverviewNavLinksComponent_ng_container_0_li_8_Template, 2, 5, "li", 5)(9, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_9_Template, 1, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PmProfileOverviewNavLinksComponent_ng_container_0_Conditional_11_Template, 2, 2)(12, PmProfileOverviewNavLinksComponent_ng_container_0_div_12_Template, 4, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const navLinkUrls_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.managePersonalDataUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.loginPasswordUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.manageSocialLoginUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.connectedServicesUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, !ctx_r0.isMember() ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](11, !ctx_r0.isMember() ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navLinkUrls_r1.privacySettingsUrl);
  }
}
class PmProfileOverviewNavLinksComponent {
  constructor() {
    this.navLinkUrls = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.profileOverview = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.isMember = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.isBaseCustomer = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.showProductRelatedLinks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.checkProductLinksVisibility);
    this.showConnectivityOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.checkConnectivityOptionsVisibility);
    this.ROLE_MEMBER = 'Member';
    this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  handleLinkClick(data) {
    this.linkClick.emit({
      ...data
    });
  }
  get checkProductLinksVisibility() {
    const {
      easySwitchUrl,
      invoiceSettingsUrl
    } = this.navLinkUrls();
    const {
      canManageDtvProducts,
      canManageInternetProducts
    } = this.profileOverview();
    const hasEasySwitchUrl = easySwitchUrl && (canManageDtvProducts || canManageInternetProducts);
    const hasInvoiceSettingsUrl = !!invoiceSettingsUrl;
    return hasEasySwitchUrl || hasInvoiceSettingsUrl;
  }
  get checkConnectivityOptionsVisibility() {
    const {
      wifiPasswordUrl,
      simManagementPageUrl
    } = this.navLinkUrls();
    const {
      canManageInternetProducts,
      canManageSimCards
    } = this.profileOverview();
    return !!wifiPasswordUrl && canManageInternetProducts || !!simManagementPageUrl && canManageSimCards;
  }
  static #_ = this.ɵfac = function PmProfileOverviewNavLinksComponent_Factory(t) {
    return new (t || PmProfileOverviewNavLinksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PmProfileOverviewNavLinksComponent,
    selectors: [["tg-pm-profile-overview-nav-links"]],
    inputs: {
      navLinkUrls: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "navLinkUrls"],
      profileOverview: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "profileOverview"],
      isMember: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "isMember"],
      isBaseCustomer: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "isBaseCustomer"]
    },
    outputs: {
      linkClick: "linkClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "row", "display--flex", "width--full"], [1, "col-sm-12", "col-md-6", "pr--n", "pr--xxs--md"], [1, "content-section"], [1, "link-list"], ["class", "link-list__item", 4, "ngIf"], ["class", "link-list__item"], [1, "col-sm-12", "col-md-6", "pr--n"], ["class", "content-section", 4, "ngIf"], [1, "link-list__item"], [3, "icon", "type", "isBaseCustomer", "link", "linkClick"], [3, "icon", "type", "isBaseCustomer", "link", "subTitle", "linkClick"], ["class", "content-section"], [3, "icon", "type", "link", "isBaseCustomer", "subTitle", "linkClick"], [3, "icon", "type", "link", "isBaseCustomer", "linkClick"]],
    template: function PmProfileOverviewNavLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PmProfileOverviewNavLinksComponent_ng_container_0_Template, 13, 7, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.navLinkUrls());
      }
    },
    dependencies: [_pm_profile_overview_nav_link_pm_profile_overview_nav_link_component__WEBPACK_IMPORTED_MODULE_2__.PmProfileOverviewNavLinkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 71028:
/*!***********************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/pm-profile-overview-skeleton/pm-profile-overview-skeleton.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PmProfileOverviewSkeletonComponent: () => (/* binding */ PmProfileOverviewSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PmProfileOverviewSkeletonComponent {
  static #_ = this.ɵfac = function PmProfileOverviewSkeletonComponent_Factory(t) {
    return new (t || PmProfileOverviewSkeletonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PmProfileOverviewSkeletonComponent,
    selectors: [["tg-pm-profile-overview-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 0,
    consts: [[1, "row", "display--flex", "width--full"], [1, "col-sm-12", "col-md-6", "pr--n", "pr--xxs--md"], [1, "notification", "skeleton", "skeleton--basic", "skeleton--container", "mb--l--sm", "off-grid-image__height--medium"], [1, "col-sm-12", "col-md-6", "pr--n"], [1, "mb--l--sm"], [1, "notification", "skeleton", "skeleton--basic", "skeleton--container", "skeleton-header--secondary-section"], [1, "notification", "skeleton", "skeleton--basic", "skeleton--container", "mb--l--sm", "skeleton-header--secondary-section"], [1, "heading--notopmargin", "skeleton", "skeleton--basic", "skeleton--one-line"]],
    template: function PmProfileOverviewSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 61979:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/ui/src/lib/profile-overview-error/profile-overview-error.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileOverviewErrorComponent: () => (/* binding */ ProfileOverviewErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





class ProfileOverviewErrorComponent {
  constructor() {
    this.errorAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  handleErrorAction() {
    this.errorAction.emit();
  }
  static #_ = this.ɵfac = function ProfileOverviewErrorComponent_Factory(t) {
    return new (t || ProfileOverviewErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileOverviewErrorComponent,
    selectors: [["tg-pm-profile-overview-error"]],
    outputs: {
      errorAction: "errorAction"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 7,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], [1, "cmp-image"], ["alt", "error", 1, "cmp-image__image", "cmp-image__image--original-size", 3, "src"], [1, "text-align--center"], [1, "cmp", "cmp-title"], [1, "mt--m"], [1, "button", "button--primary", 3, "click"], [1, "whitespace", "whitespace--medium"]],
    template: function ProfileOverviewErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileOverviewErrorComponent_Template_button_click_10_listener() {
          return ctx.handleErrorAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/content/dam/www-telenet-touch/nl/dfd/desktop-error.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, "ng.profile-overview.error.txt"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "ng.profile-overview.error.btn"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_profile-overview_ui_src_index_ts-_49e60.js.map