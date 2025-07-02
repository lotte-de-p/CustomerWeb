(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_manage-social-login_feat-manage-social-login_src_index_ts"],{

/***/ 92941:
/*!******************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-social-login/feat-manage-social-login/src/index.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageSocialLoginComponent: () => (/* reexport safe */ _lib_manage_social_login_manage_social_login_component__WEBPACK_IMPORTED_MODULE_0__.ManageSocialLoginComponent)
/* harmony export */ });
/* harmony import */ var _lib_manage_social_login_manage_social_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/manage-social-login/manage-social-login.component */ 5316);


/***/ }),

/***/ 5316:
/*!******************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-social-login/feat-manage-social-login/src/lib/manage-social-login/manage-social-login.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageSocialLoginComponent: () => (/* binding */ ManageSocialLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _unlink_confirm_dialog_unlink_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unlink-confirm-dialog/unlink-confirm-dialog.component */ 34098);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @profile-management/util */ 63387);
/* harmony import */ var _profile_management_util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_profile_management_util__WEBPACK_IMPORTED_MODULE_10__);





















function ManageSocialLoginComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.manage-social-login.lbl.social-login-not-linked"), " ");
  }
}
function ManageSocialLoginComponent_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageSocialLoginComponent_div_9_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.openUnlinkConfirmationDialog("itsme"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-social-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "ng.manage-social-login.lbl.unlink-itsme"), " ");
  }
}
function ManageSocialLoginComponent_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.manage-social-login.lbl.social-login-not-linked"), " ");
  }
}
function ManageSocialLoginComponent_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageSocialLoginComponent_div_9_div_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.openUnlinkConfirmationDialog("itsme"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-social-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "ng.manage-social-login.lbl.unlink-itsme"), " ");
  }
}
function ManageSocialLoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12)(6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "itsme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageSocialLoginComponent_div_9_div_8_Template, 4, 3, "div", 15)(9, ManageSocialLoginComponent_div_9_div_9_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16)(11, "div", 17)(12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18)(15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "itsme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageSocialLoginComponent_div_9_div_17_Template, 4, 3, "div", 15)(18, ManageSocialLoginComponent_div_9_div_18_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const socialLogins_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-social-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(socialLogins_r1 == null ? null : socialLogins_r1.isLinkedToItsme));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLogins_r1 == null ? null : socialLogins_r1.isLinkedToItsme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moduleId", "tg-pm-manage-social-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(socialLogins_r1 == null ? null : socialLogins_r1.isLinkedToItsme));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLogins_r1 == null ? null : socialLogins_r1.isLinkedToItsme);
  }
}
class ManageSocialLoginComponent {
  constructor(dialog, loginService, pathCategorisationService) {
    this.dialog = dialog;
    this.loginService = loginService;
    this.pathCategorisationService = pathCategorisationService;
    this.customerProfileFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_5__.CustomerProfileFacade);
    this.socialLogins$ = this.customerProfileFacade.socialLogins$;
    this.scopes = ['unlinksociallogin'];
    this.messageGroupName = _profile_management_data_access__WEBPACK_IMPORTED_MODULE_5__.ManageSocialLoginConstants.MESSAGE_GROUP;
    this.loggedIn = false;
  }
  ngOnInit() {
    this.getUserDetails();
    this.isBrandBase = this.pathCategorisationService.isCustomerOfBrandTypes([_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.CustomerBrandEnum.BRAND_BASE]);
  }
  initAfterLoggedIn() {
    this.loggedIn = true;
  }
  getUserDetails() {
    this.loginService.getLoginDetails().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.customerProfileFacade.loadSocialLogins()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe();
  }
  openUnlinkConfirmationDialog(socialType) {
    this.dialogRef = this.dialog.open(_unlink_confirm_dialog_unlink_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__.UnlinkConfirmDialogComponent, {
      data: {
        socialType: socialType
      }
    });
    this.callCloseDialogSubscription();
  }
  callCloseDialogSubscription() {
    this.dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Close') {
        this.closeDialog();
      }
    });
  }
  closeDialog() {
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function ManageSocialLoginComponent_Factory(t) {
    return new (t || ManageSocialLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.PathCategorisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ManageSocialLoginComponent,
    selectors: [["tg-pm-manage-social-login"]],
    inputs: {
      pageType: "pageType",
      enableMask: "enableMask",
      enableLoader: "enableLoader",
      socialLoginDetailsUrl: "socialLoginDetailsUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 14,
    consts: [[3, "messageGroupName", "scopes", "componentCanRender"], [3, "enableLoader", "pageType", "enableMask"], [3, "messageGroupName"], [1, "manage-social-login", "col-sm-12", "background-white", "m--auto", "content-section"], [1, "text-align--left", "text-font-family--t7", "text--l", "font-weight--black", "p--xl--sm", "p--l", "border--t--r", "border-width--t--r", "border-style--t--solid", "border-color--t--white"], [1, "divider", "divider--s__very-light-grey"], [1, "align-center", "text-align--center", "text--l--sm", "text--xxm", "font-weight--black", "p--xl--sm", "p--l", "border--t--r", "border-width--t--r", "border-style--t--solid", "border-color--t--white"], [4, "ngrxLet"], [1, "text--s--sm", "text--m", "font-weight--black", "p--l", "text-align--center--sm", "text-align--center"], [1, "link", 3, "href"], [1, "display--flex", "align-items-center", "justify-content--center"], [1, "hidden-mobile", "display--flex", "align-items-center", "justify-content--center", "m--s"], [1, "p--xl", "border--r--r", "border-width--r--r", "border-style--r--solid", "border-color--r--white"], ["tgProfileManagementImageSrcInterceptor", "", "src", "/assets/logo_itsme.svg", "alt", "itsme icon", 1, "manage-social-login__icon-section", 3, "moduleId"], [1, "text--xxm--sm", "text--m", "font-weight--black"], [4, "ngIf"], [1, "display--flex", "align-items-center", "justify-content--center", 2, "display", "inline-block"], [1, "hidden-desktop", "display--flex", "align-items-center", "mb-30", "justify-content--center"], [1, "p--s", "border--r--r", "border-width--r--r", "border-style--r--solid", "border-color--r--white"], ["tgProfileManagementImageSrcInterceptor", "", "src", "/assets/logo_itsme.svg", "alt", "itsme icon", 2, "width", "7.4rem", "height", "7.4rem", 3, "moduleId"], [1, "text--s--sm", "text--m", "font--body-regular", "text-align--center--sm", "text-align--center", "py--xs"], [1, "button", "button--secondary", 3, "click"], ["tgProfileManagementImageSrcInterceptor", "", "src", "/assets/icon_broken_lock.svg", "alt", "broken lock icon", 3, "moduleId"], [1, "text--s--sm", "text--m", "font--body-regular", "p--l", "text-align--center--sm", "text-align--center"]],
    template: function ManageSocialLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ManageSocialLoginComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader", 1)(2, "app-message-flow", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageSocialLoginComponent_div_9_Template, 19, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName)("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableLoader", ctx.enableLoader)("pageType", ctx.pageType)("enableMask", ctx.enableMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "ng.manage-social-login.lbl.view-change-connections-info"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx.socialLogins$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialLoginDetailsUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "ng.manage-social-login.lbl.social-login-more-info"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.MessageFlowComponent, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _profile_management_data_access__WEBPACK_IMPORTED_MODULE_5__.CustomerProfileNgrxModule, _profile_management_util__WEBPACK_IMPORTED_MODULE_10__.ImageSrcInterceptorDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34098:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-social-login/feat-manage-social-login/src/lib/manage-social-login/unlink-confirm-dialog/unlink-confirm-dialog.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlinkConfirmDialogComponent: () => (/* binding */ UnlinkConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_7__);











class UnlinkConfirmDialogComponent {
  constructor(dialogRef, data, dialog) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this.customerProfileFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_7__.CustomerProfileFacade);
    this.messageGroupName = _profile_management_data_access__WEBPACK_IMPORTED_MODULE_7__.ManageSocialLoginConstants.MESSAGE_GROUP;
  }
  closeDialog() {
    this.dialogRef.close(true);
  }
  unlinkSocialLogin() {
    const payLoad = {
      socialLoginType: this.data.socialType
    };
    this.closeDialog();
    this.customerProfileFacade.unlinkSocialLogin(payLoad.socialLoginType);
  }
  static #_ = this.ɵfac = function UnlinkConfirmDialogComponent_Factory(t) {
    return new (t || UnlinkConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UnlinkConfirmDialogComponent,
    selectors: [["tg-pm-unlink-confirm-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 9,
    consts: [[1, "manage-social-login"], [1, "overlay", "manage-profile-details--change-role"], [1, "overlay__mask", "overlay__mask--backdrop", "backdrop-filter--3", "animation--fade-in"], [1, "overlay__section"], [1, "overlay__section__content--wrapper", "animation--slide-down-to-screen", "center-align", "p-0", "ml-0", "mr-0"], [1, "overlay__section__content__description"], [1, "invite-new-user__invite-close", "position--fixed", "fl-inherit", "cursor--pointer", "icon", "icon-cross", 3, "click"], [1, "content-section", "background-transparent_white_12", "p--xl--md", "p--m", "manage-profile-details__details-content"], [1, "text-align--center", "text--l--sm", "text--xxm", "font-weight--black", "mb--l", "mt--l"], [1, "flex-direction--row--sm", "flex-direction--column-reverse", "justify-content--center", "p--n--sm", "pt--n", "pb--n", "mt--l", "display--flex"], [1, "col-sm-6", "p-0"], [1, "button", "button--secondary", "button--fullwidth", 3, "click"], [1, "display--flex", "mt--n--sm", "ml--m--sm", "mb--xm--sm", "mr--n--sm", "mt--n", "mr--n", "mb--m", "ml--n", "col-sm-6"], [1, "button", "button--primary", "button--fullwidth", 3, "click"]],
    template: function UnlinkConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnlinkConfirmDialogComponent_Template_div_click_6_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnlinkConfirmDialogComponent_Template_button_click_13_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnlinkConfirmDialogComponent_Template_button_click_18_listener() {
          return ctx.unlinkSocialLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, "ng.manage-social-login.title.want-to-unlink-social-login"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, "ng.manage-social-login.unlink.btn.cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, "ng.manage-social-login.unlink.btn.ok"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43956:
/*!******************************************************************!*\
  !*** ./node_modules/@ngrx/component/fesm2022/ngrx-component.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LetDirective: () => (/* binding */ LetDirective),
/* harmony export */   PushPipe: () => (/* binding */ PushPipe),
/* harmony export */   RenderScheduler: () => (/* binding */ RenderScheduler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);




function isNgZone(zone) {
  return zone instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone;
}
class TickScheduler {
  /** @nocollapse */
  static #_ = this.ɵfac = function TickScheduler_Factory(t) {
    return new (t || TickScheduler)();
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TickScheduler,
    factory: () => (() => {
      const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
    })(),
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: () => {
        const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
        return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
      }
    }]
  }], null, null);
})();
class AnimationFrameTickScheduler extends TickScheduler {
  constructor(appRef) {
    super();
    this.appRef = appRef;
    this.isScheduled = false;
  }
  schedule() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      requestAnimationFrame(() => {
        this.appRef.tick();
        this.isScheduled = false;
      });
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function AnimationFrameTickScheduler_Factory(t) {
    return new (t || AnimationFrameTickScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnimationFrameTickScheduler,
    factory: AnimationFrameTickScheduler.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationFrameTickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }], null);
})();
class NoopTickScheduler extends TickScheduler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  schedule() {}
}

/**
 * Provides rendering functionality regardless of whether `zone.js` is present
 * or not. It must be provided at the component/directive level.
 *
 * @usageNotes
 *
 * ### Rerender zone-less app on route changes
 *
 * ```ts
 * @Component({
 *   selector: 'app-root',
 *   template: '<router-outlet>',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class AppComponent implements OnInit {
 *   constructor(
 *     private readonly router: Router,
 *     private readonly renderScheduler: RenderScheduler
 *   ) {}
 *
 *   ngOnInit(): void {
 *     this.router.events
 *       .pipe(filter((e) => e instanceof NavigationEnd))
 *       .subscribe(() => this.renderScheduler.schedule());
 *   }
 * }
 * ```
 *
 * ### Rerender component on interval
 *
 * ```ts
 * @Component({
 *   selector: 'app-interval',
 *   template: '{{ elapsedTime }}ms',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class IntervalComponent implements OnInit {
 *   elapsedTime = 0;
 *
 *   constructor(private readonly renderScheduler: RenderScheduler) {}
 *
 *   ngOnInit(): void {
 *     setInterval(() => {
 *       this.elapsedTime += 1000;
 *       this.renderScheduler.schedule();
 *     }, 1000);
 *   }
 * }
 * ```
 */
class RenderScheduler {
  constructor(cdRef, tickScheduler) {
    this.cdRef = cdRef;
    this.tickScheduler = tickScheduler;
  }
  /**
   * Marks component and its ancestors as dirty.
   * It also schedules a new change detection cycle in zone-less mode.
   */
  schedule() {
    this.cdRef.markForCheck();
    this.tickScheduler.schedule();
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function RenderScheduler_Factory(t) {
    return new (t || RenderScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TickScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RenderScheduler,
    factory: RenderScheduler.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: TickScheduler
  }], null);
})();
function createRenderScheduler() {
  return new RenderScheduler((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(TickScheduler));
}
function combineRenderEventHandlers(handlers) {
  return event => handlers[event.type]?.(event);
}
function fromPotentialObservable(potentialObservable) {
  if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(potentialObservable)) {
    return potentialObservable;
  }
  if (isObservableDictionary(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(toDistinctObsDictionary(potentialObservable));
  }
  if (isPromiseLike(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(potentialObservable);
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    subscriber.next(potentialObservable);
  });
}
function isPromiseLike(value) {
  return typeof value?.then === 'function';
}
function isObservableDictionary(value) {
  return isDictionary(value) && Object.keys(value).length > 0 && Object.values(value).every(rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable);
}
function isDictionary(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
function toDistinctObsDictionary(obsDictionary) {
  return Object.keys(obsDictionary).reduce((acc, key) => ({
    ...acc,
    [key]: obsDictionary[key].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)())
  }), {});
}
function createRenderEventManager(handlers) {
  const handleRenderEvent = combineRenderEventHandlers(handlers);
  const potentialObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  return {
    nextPotentialObservable(potentialObservable) {
      potentialObservable$.next(potentialObservable);
    },
    handlePotentialObservableChanges() {
      return potentialObservable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), switchMapToRenderEvent(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(renderEventComparator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(handleRenderEvent));
    }
  };
}
function switchMapToRenderEvent() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(potentialObservable => {
    const observable$ = fromPotentialObservable(potentialObservable);
    let reset = true;
    let synchronous = true;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      const subscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => observable$.subscribe({
        next(value) {
          subscriber.next({
            type: 'next',
            value,
            reset,
            synchronous
          });
          reset = false;
        },
        error(error) {
          subscriber.next({
            type: 'error',
            error,
            reset,
            synchronous
          });
          reset = false;
        },
        complete() {
          subscriber.next({
            type: 'complete',
            reset,
            synchronous
          });
          reset = false;
        }
      }));
      if (reset) {
        subscriber.next({
          type: 'suspense',
          reset,
          synchronous: true
        });
        reset = false;
      }
      synchronous = false;
      return subscription;
    });
  }));
}
function renderEventComparator(previous, current) {
  if (previous.type !== current.type || previous.reset !== current.reset) {
    return false;
  }
  if (current.type === 'next') {
    return previous.value === current.value;
  }
  if (current.type === 'error') {
    return previous.error === current.error;
  }
  return true;
}

/**
 *
 * @description
 *
 * The `*ngrxLet` directive serves a convenient way of binding observables to a view context
 * (DOM element's scope). It also helps with several internal processing under the hood.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-container *ngrxLet="number$; let n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * ```
 *
 * ### Tracking Different Observable Events
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; error as e; complete as c">
 *   <app-number [number]="n" *ngIf="!e && !c">
 *   </app-number>
 *
 *   <p *ngIf="e">There is an error: {{ e }}</p>
 *   <p *ngIf="c">Observable is completed.</p>
 * </ng-container>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <ng-container *ngrxLet="{ users: users$, query: query$ } as vm">
 *   <app-search-bar [query]="vm.query"></app-search-bar>
 *   <app-user-list [users]="vm.users"></app-user-list>
 * </ng-container>
 * ```
 *
 * ### Using Suspense Template
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; suspenseTpl: loading">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-template #loading>
 *   <p>Loading...</p>
 * </ng-template>
 * ```
 *
 * ### Using Aliases for Non-Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="userForm.controls.email as email">
 *   <input type="text" [formControl]="email" />
 *
 *   <ng-container *ngIf="email.errors && (email.touched || email.dirty)">
 *     <p *ngIf="email.errors.required">This field is required.</p>
 *     <p *ngIf="email.errors.email">This field must be an email.</p>
 *   </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
class LetDirective {
  set ngrxLet(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
  }
  constructor(mainTemplateRef, viewContainerRef, errorHandler, renderScheduler) {
    this.mainTemplateRef = mainTemplateRef;
    this.viewContainerRef = viewContainerRef;
    this.errorHandler = errorHandler;
    this.renderScheduler = renderScheduler;
    this.isMainViewCreated = false;
    this.isSuspenseViewCreated = false;
    this.viewContext = {
      $implicit: undefined,
      ngrxLet: undefined,
      error: undefined,
      complete: false
    };
    this.renderEventManager = createRenderEventManager({
      suspense: () => {
        this.viewContext.$implicit = undefined;
        this.viewContext.ngrxLet = undefined;
        this.viewContext.error = undefined;
        this.viewContext.complete = false;
        this.renderSuspenseView();
      },
      next: event => {
        this.viewContext.$implicit = event.value;
        this.viewContext.ngrxLet = event.value;
        if (event.reset) {
          this.viewContext.error = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
      },
      error: event => {
        this.viewContext.error = event.error;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        this.viewContext.complete = true;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.error = undefined;
        }
        this.renderMainView(event.synchronous);
      }
    });
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
  ngOnInit() {
    this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  renderMainView(isSyncEvent) {
    if (this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (!this.isMainViewCreated) {
      this.isMainViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext);
    }
    if (!isSyncEvent) {
      this.renderScheduler.schedule();
    }
  }
  renderSuspenseView() {
    if (this.isMainViewCreated) {
      this.isMainViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (this.suspenseTemplateRef && !this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef);
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function LetDirective_Factory(t) {
    return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RenderScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LetDirective,
    selectors: [["", "ngrxLet", ""]],
    inputs: {
      ngrxLet: "ngrxLet",
      suspenseTemplateRef: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "ngrxLetSuspenseTpl", "suspenseTemplateRef"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RenderScheduler])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngrxLet]',
      providers: [RenderScheduler]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }, {
    type: RenderScheduler
  }], {
    ngrxLet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suspenseTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngrxLetSuspenseTpl']
    }]
  });
})();

/**
 * @description
 *
 * The `ngrxPush` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <p>{{ number$ | ngrxPush }}</p>
 *
 * <ng-container *ngIf="number$ | ngrxPush as n">{{ n }}</ng-container>
 *
 * <app-number [number]="number$ | ngrxPush"></app-number>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <code>
 *   {{ { users: users$, query: query$ } | ngrxPush | json }}
 * </code>
 * ```
 *
 * @publicApi
 */
class PushPipe {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
    this.renderScheduler = createRenderScheduler();
    this.renderEventManager = createRenderEventManager({
      suspense: event => this.setRenderedValue(undefined, event.synchronous),
      next: event => this.setRenderedValue(event.value, event.synchronous),
      error: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
      }
    });
    this.subscription = this.renderEventManager.handlePotentialObservableChanges().subscribe();
  }
  transform(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
    return this.renderedValue;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setRenderedValue(value, isSyncEvent) {
    if (value !== this.renderedValue) {
      this.renderedValue = value;
      if (!isSyncEvent) {
        this.renderScheduler.schedule();
      }
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function PushPipe_Factory(t) {
    return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, 16));
  };
  /** @nocollapse */
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "ngrxPush",
    type: PushPipe,
    pure: false,
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      standalone: true,
      name: 'ngrxPush',
      pure: false
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }], null);
})();

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_manage-social-login_feat-manage-social-login_src_index_ts.js.map