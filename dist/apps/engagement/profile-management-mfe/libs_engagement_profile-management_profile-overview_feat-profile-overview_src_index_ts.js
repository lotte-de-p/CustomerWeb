(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_profile-overview_feat-profile-overview_src_index_ts"],{

/***/ 79352:
/*!************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/feat-profile-overview/src/index.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileOverviewComponent: () => (/* reexport safe */ _lib_profile_overview_component__WEBPACK_IMPORTED_MODULE_0__.ProfileOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_profile_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/profile-overview.component */ 22246);


/***/ }),

/***/ 22246:
/*!*************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/profile-overview/feat-profile-overview/src/lib/profile-overview.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileOverviewComponent: () => (/* binding */ ProfileOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @profile-management/profile-overview/ui */ 26326);
/* harmony import */ var _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__);









function ProfileOverviewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-pm-profile-overview-skeleton");
  }
}
function ProfileOverviewComponent_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "tg-pm-profile-overview-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("linkClick", function ProfileOverviewComponent_Conditional_3_ng_container_0_Template_tg_pm_profile_overview_header_linkClick_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.handleLinkClick($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tg-pm-profile-overview-nav-links", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("linkClick", function ProfileOverviewComponent_Conditional_3_ng_container_0_Template_tg_pm_profile_overview_nav_links_linkClick_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.handleLinkClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const profileOverview_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMember", ctx_r2.isMember)("hasProfilePicture", profileOverview_r5.hasProfilePicture)("profileOverview", profileOverview_r5)("profilePictureUrl", ctx_r2.profilePictureUrl)("moreInfoLink", ctx_r2.profileOverviewUrls.memberMoreInfoLink)("isBaseCustomer", ctx_r2.isBaseCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMember", ctx_r2.isMember)("isBaseCustomer", ctx_r2.isBaseCustomer)("profileOverview", profileOverview_r5)("navLinkUrls", ctx_r2.profileOverviewUrls);
  }
}
function ProfileOverviewComponent_Conditional_3_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-pm-profile-overview-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("errorAction", function ProfileOverviewComponent_Conditional_3_ng_template_2_Conditional_0_Template_tg_pm_profile_overview_error_errorAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.handleErrorAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileOverviewComponent_Conditional_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileOverviewComponent_Conditional_3_ng_template_2_Conditional_0_Template, 1, 0, "tg-pm-profile-overview-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.loadError$) ? 0 : -1);
  }
}
function ProfileOverviewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileOverviewComponent_Conditional_3_ng_container_0_Template, 4, 10, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileOverviewComponent_Conditional_3_ng_template_2_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r1.profileOverview$))("ngIfElse", _r4);
  }
}
class ProfileOverviewComponent {
  constructor() {
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
    this.customerProfileFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerProfileFacade);
    this.pathCategorisationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.PathCategorisationService);
    this.profileOverviewUrls = {};
    this.profileOverview$ = this.customerProfileFacade.profileOverview$;
    this.loading$ = this.customerProfileFacade.loading$;
    this.loadError$ = this.customerProfileFacade.loadError$;
  }
  initAfterLoggedIn(loginDetails) {
    this.isMember = loginDetails.isMember();
    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.CustomerBrandEnum.BRAND_BASE);
    this.customerProfileFacade.loadProfileOverview(loginDetails.identityId);
    this.profilePictureUrl = this.customerProfileFacade.getProfilePicture(loginDetails.identityId);
  }
  handleLinkClick(data, isLink) {
    this.customerProfileFacade.sendNavLinkClickedEvent(data.type, data.link, isLink);
    if (data.link) {
      this.urlService.redirectTo(data.link);
    }
  }
  handleErrorAction() {
    this.urlService.reloadWindow();
  }
  static #_ = this.ɵfac = function ProfileOverviewComponent_Factory(t) {
    return new (t || ProfileOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileOverviewComponent,
    selectors: [["tg-pm-profile-overview"]],
    inputs: {
      profileOverviewUrls: "profileOverviewUrls"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[3, "componentCanRender"], [4, "ngIf", "ngIfElse"], ["loadingError", ""], [1, "manage-profile-details", "care-page", "background-shade_04"], [3, "isMember", "hasProfilePicture", "profileOverview", "profilePictureUrl", "moreInfoLink", "isBaseCustomer", "linkClick"], [3, "isMember", "isBaseCustomer", "profileOverview", "navLinkUrls", "linkClick"], [3, "errorAction"]],
    template: function ProfileOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ProfileOverviewComponent_Template_tg_login_componentCanRender_0_listener($event) {
          return ctx.initAfterLoggedIn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileOverviewComponent_Conditional_1_Template, 1, 0, "tg-pm-profile-overview-skeleton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileOverviewComponent_Conditional_3_Template, 4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.loading$) ? 1 : 3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _profile_management_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerProfileNgrxModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__.PmProfileOverviewHeaderComponent, _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__.PmProfileOverviewNavLinksComponent, _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__.PmProfileOverviewSkeletonComponent, _profile_management_profile_overview_ui__WEBPACK_IMPORTED_MODULE_5__.ProfileOverviewErrorComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_profile-overview_feat-profile-overview_src_index_ts.js.map