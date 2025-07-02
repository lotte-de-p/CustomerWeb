(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_feat-personal-details_src_index_ts"],{

/***/ 19840:
/*!*****************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailsComponent: () => (/* reexport safe */ _lib_feat_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailsComponent),
/* harmony export */   PrivacyDisclaimerComponent: () => (/* reexport safe */ _lib_feat_personal_details_views__WEBPACK_IMPORTED_MODULE_1__.PrivacyDisclaimerComponent),
/* harmony export */   ProfileDetailsFormComponent: () => (/* reexport safe */ _lib_feat_personal_details_views__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _lib_feat_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feat-personal-details/personal-details.component */ 82000);
/* harmony import */ var _lib_feat_personal_details_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/feat-personal-details/views */ 85015);



/***/ }),

/***/ 82000:
/*!****************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/personal-details.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailsComponent: () => (/* binding */ PersonalDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sales/customer-registration/ui */ 92549);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views */ 85015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);












function PersonalDetailsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tg-sales-restricted-product", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("currentCategory", ctx_r0.isResidential ? "business" : "private")("marketingURL", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r0.marketingUrl));
  }
}
function PersonalDetailsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tg-sales-profile-details-form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "tg-sales-privacy-disclaimer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("customerBrand", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 6, ctx_r1.brand))("isPidEnabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, ctx_r1.isPidEnabled))("category", ctx_r1.isResidential ? "private" : "business")("personalDetails", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 10, ctx_r1.personalDetails))("itsMeDetails", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 12, ctx_r1.itsMeResponse));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("privacyPolicyUrl", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 14, ctx_r1.privacyPolicyUrl));
  }
}
class PersonalDetailsComponent {
  constructor(stepFacade, authorConfigurationFacade, personalDetailsFacade) {
    this.stepFacade = stepFacade;
    this.authorConfigurationFacade = authorConfigurationFacade;
    this.personalDetailsFacade = personalDetailsFacade;
    this.PRIVATE = 'private';
    this.BUSINESS = 'business';
    this.isToggleActive = false;
    this.isRestrictedProductDisclaimerVisible = false;
    this.isResidential = false;
    this.currentStep = this.stepFacade.currentStepKey$;
    this.marketingUrl = this.authorConfigurationFacade.marketingUrl$;
    this.privacyPolicyUrl = this.authorConfigurationFacade.privacyPolicyUrl$;
    this.isPidEnabled = this.authorConfigurationFacade.isPidEnabled$;
    this.personalDetails = this.personalDetailsFacade.personalDetails$;
    this.brand = this.personalDetailsFacade.brand$;
    this.itsMeResponse = this.personalDetailsFacade.itsMeResponse$;
  }
  ngOnInit() {
    this.isResidential = this.authorConfigurationFacade.isResidential();
    this.togglePersonalView(this.isResidential ? this.PRIVATE : this.BUSINESS);
    this.personalDetailsFacade.readEncryptedUrlData();
  }
  togglePersonalView(currentTab) {
    this.isToggleActive = this.PRIVATE === currentTab;
    this.isRestrictedProductDisclaimerVisible = this.isToggleActive ? !this.authorConfigurationFacade.isResidential() : !this.authorConfigurationFacade.isBusiness();
    this.toggleNavigationBarDisplay();
  }
  toggleNavigationBarDisplay() {
    this.isRestrictedProductDisclaimerVisible ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
  }
  onNextStep() {
    if (this.profileDetailsFormComponent) {
      const valid = this.profileDetailsFormComponent?.validateForm();
      if (valid) {
        const userInputPayload = this.profileDetailsFormComponent.getUserInputPayload();
        this.personalDetailsFacade.savePersonalDetails(userInputPayload);
        if (!this.isResidential) this.personalDetailsFacade.saveDOB(this.profileDetailsFormComponent.getDOB());
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(valid);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
  }
  static #_ = this.ɵfac = function PersonalDetailsComponent_Factory(t) {
    return new (t || PersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_3__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_2__.AuthorConfigurationFacade), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_2__.PersonalDetailsFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PersonalDetailsComponent,
    selectors: [["tg-sales-customer-registration-personal-details"]],
    viewQuery: function PersonalDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_views__WEBPACK_IMPORTED_MODULE_6__.ProfileDetailsFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.profileDetailsFormComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 14,
    consts: [[3, "currentStep"], [1, "mb--xxxg", "pb--l", "py--n", "col-lg-8", "col-md-9", "col-12", "m--auto"], [1, "mx--m", "mx--n--md", "col-md-9", "col-12"], [1, "select-tile--group", "display--grid", "grid-template-column--2", "gap--m", "mb--xl--md", "mb--l"], ["for", "private", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], [1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column", "gap--xm"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow"], [1, "heading--6", "heading--nomargin", "pl--xxs"], ["type", "radio", "id", "private", "name", "type", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "checked", "change"], ["for", "business", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], ["type", "radio", "id", "business", "name", "type", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "checked", "change"], [1, "background-white", "col-12", "m--auto", "p--xxxl--md", "p--xl"], [1, "row"], ["class", "m--auto"], [1, "m--auto"], [3, "currentCategory", "marketingURL"], [1, "col-sm-12"], [3, "customerBrand", "isPidEnabled", "category", "personalDetails", "itsMeDetails"], [1, "col-sm-12", "mt--xl--md", "mt--l"], [3, "privacyPolicyUrl"]],
    template: function PersonalDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tg-sales-customer-registration-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "label", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PersonalDetailsComponent_Template_input_change_13_listener() {
          return ctx.togglePersonalView(ctx.PRIVATE);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 11)(15, "div", 5)(16, "div", 6)(17, "div", 7)(18, "div", 8)(19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PersonalDetailsComponent_Template_input_change_22_listener() {
          return ctx.togglePersonalView(ctx.BUSINESS);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 13)(24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, PersonalDetailsComponent_Conditional_25_Template, 3, 4, "div", 15)(26, PersonalDetailsComponent_Conditional_26_Template, 9, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("currentStep", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 8, ctx.currentStep)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-cy", "personal-view-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 10, "customer-registration.lbl.private"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.isToggleActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-cy", "business-view-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 12, "customer-registration.lbl.business"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", !ctx.isToggleActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](25, ctx.isRestrictedProductDisclaimerVisible ? 25 : 26);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _views__WEBPACK_IMPORTED_MODULE_6__.PrivacyDisclaimerComponent, _views__WEBPACK_IMPORTED_MODULE_6__.ProfileDetailsFormComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_5__.RestrictedProductComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_5__.CustomerRegistrationTitleComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 85015:
/*!*************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/views/index.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyDisclaimerComponent: () => (/* reexport safe */ _privacy_disclaimer__WEBPACK_IMPORTED_MODULE_0__.PrivacyDisclaimerComponent),
/* harmony export */   ProfileDetailsFormComponent: () => (/* reexport safe */ _profile_details_form__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _privacy_disclaimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-disclaimer */ 26340);
/* harmony import */ var _profile_details_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-details-form */ 5824);



/***/ }),

/***/ 26340:
/*!********************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/views/privacy-disclaimer/index.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyDisclaimerComponent: () => (/* reexport safe */ _privacy_disclaimer_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyDisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _privacy_disclaimer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-disclaimer.component */ 91039);


/***/ }),

/***/ 91039:
/*!*******************************************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/views/privacy-disclaimer/privacy-disclaimer.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyDisclaimerComponent: () => (/* binding */ PrivacyDisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = a0 => ({
  link: a0
});
function PrivacyDisclaimerComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx_r0.privacyDisclaimerKeys[1]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, ctx_r0.privacyDisclaimerKeys[2]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, ctx_r0.privacyDisclaimerKeys[3]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 11, ctx_r0.privacyDisclaimerKeys[4], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx_r0.privacyPolicyUrl)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 14, ctx_r0.privacyDisclaimerKeys[5]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function PrivacyDisclaimerComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "customer-registration.lbl.read-more"));
  }
}
function PrivacyDisclaimerComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "customer-registration.lbl.read-less"));
  }
}
class PrivacyDisclaimerComponent {
  constructor(authorConfigurationFacade) {
    this.authorConfigurationFacade = authorConfigurationFacade;
    this.privacyDisclaimerKeys = [];
    this.toggleBtn = true;
    this.disclaimerLink = '';
  }
  ngOnInit() {
    const customerBrand = this.authorConfigurationFacade?.getBrand();
    this.privacyDisclaimerKeys = ['customer-registration.lbl.privacy-section-one' + '-' + customerBrand, 'customer-registration.lbl.privacy-section-two' + '-' + customerBrand, 'customer-registration.lbl.privacy-section-three' + '-' + customerBrand, 'customer-registration.lbl.privacy-section-four' + '-' + customerBrand, 'customer-registration.lbl.privacy-section-five' + '-' + customerBrand, 'customer-registration.lbl.privacy-section-six' + '-' + customerBrand];
  }
  toggleDisclaimerLink() {
    this.toggleBtn = !this.toggleBtn;
    this.disclaimerLink = this.toggleBtn ? 'more' : 'less';
  }
  static #_ = this.ɵfac = function PrivacyDisclaimerComponent_Factory(t) {
    return new (t || PrivacyDisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthorConfigurationFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PrivacyDisclaimerComponent,
    selectors: [["tg-sales-privacy-disclaimer"]],
    inputs: {
      privacyPolicyUrl: "privacyPolicyUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 9,
    consts: [[1, "text-flow", "text-flow--h6"], [1, "text-flow", "text-flow--body"], [1, "mb--xl--md", "mb--l"], ["class", "mt--xl", 4, "ngIf"], ["href", "JavaScript:void(0);", 3, "click"], [4, "ngIf"], [1, "mt--xl"], [1, "mt--xl", 3, "innerHTML"]],
    template: function PrivacyDisclaimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PrivacyDisclaimerComponent_div_7_Template, 11, 18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrivacyDisclaimerComponent_Template_a_click_8_listener() {
          return ctx.toggleDisclaimerLink();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PrivacyDisclaimerComponent_span_9_Template, 3, 3, "span", 5)(10, PrivacyDisclaimerComponent_span_10_Template, 3, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "customer-registration.lbl.privacy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, ctx.privacyDisclaimerKeys[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.toggleBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.toggleBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.toggleBtn);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5824:
/*!**********************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/views/profile-details-form/index.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsFormComponent: () => (/* reexport safe */ _profile_details_form_component__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _profile_details_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-details-form.component */ 36211);


/***/ }),

/***/ 36211:
/*!***********************************************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-personal-details/src/lib/feat-personal-details/views/profile-details-form/profile-details-form.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsFormComponent: () => (/* binding */ ProfileDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/form/src/controls/date-of-birth-picker/default/date-of-birth-picker.component */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















function ProfileDetailsFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "first-name-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "customer-registration.form-first-name-guidance-error-required"), " ");
  }
}
function ProfileDetailsFormComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "first-name-field-invalid-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "customer-registration.form-first-name-guidance-error-multi-lingual-constraint"), " ");
  }
}
function ProfileDetailsFormComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "last-name-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "customer-registration.form-last-name-guidance-error-required"), " ");
  }
}
function ProfileDetailsFormComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "last-name-field-invalid-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "customer-registration.form-last-name-guidance-error-multi-lingual-constraint"), " ");
  }
}
function ProfileDetailsFormComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "email-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "customer-registration.form-email-guidance-error-required"), " ");
  }
}
function ProfileDetailsFormComponent_div_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "email-field-maxlength-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "customer-registration.form-email-guidance-error-maxlength"), " ");
  }
}
function ProfileDetailsFormComponent_div_50_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "email-field-invalid-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "customer-registration.form-email-guidance-error-darwin-email-constraint"), " ");
  }
}
function ProfileDetailsFormComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDetailsFormComponent_div_50_div_1_Template, 3, 4, "div", 33)(2, ProfileDetailsFormComponent_div_50_div_2_Template, 3, 4, "div", 33)(3, ProfileDetailsFormComponent_div_50_div_3_Template, 3, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["maxlength"]) && !(ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["required"]) && !(ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["email"]) && !(ctx_r9.profileDetailsForm.controls["emailField"].errors == null ? null : ctx_r9.profileDetailsForm.controls["emailField"].errors["required"]));
  }
}
function ProfileDetailsFormComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-date-of-birth-picker", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "customer-registration.form-dob-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r10.profileDetailsForm)("day", ctx_r10.profileDetailsForm.controls["day"].value)("month", ctx_r10.profileDetailsForm.controls["selectedMonth"].value)("year", ctx_r10.profileDetailsForm.controls["year"].value)("minDefaultLegalAge", 18)("dayBasedValidationFeatureFlag", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "dob-field");
  }
}
function ProfileDetailsFormComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "phone-number-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "customer-registration.form-phone-number-guidance-error-required"), " ");
  }
}
function ProfileDetailsFormComponent_div_58_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "phone-number-field-invalid-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "customer-registration.form-phone-number-guidance-error-delivery-order-phone-number-constraint"), " ");
  }
}
function ProfileDetailsFormComponent_div_58_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileDetailsFormComponent_div_58_ng_template_2_div_0_Template, 3, 4, "div", 33);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.profileDetailsForm.controls["phoneNumberField"].errors == null ? null : ctx_r17.profileDetailsForm.controls["phoneNumberField"].errors["format"]);
  }
}
function ProfileDetailsFormComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDetailsFormComponent_div_58_div_1_Template, 3, 4, "div", 37)(2, ProfileDetailsFormComponent_div_58_ng_template_2_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.profileDetailsForm.controls["phoneNumberField"].errors == null ? null : ctx_r12.profileDetailsForm.controls["phoneNumberField"].errors["required"])("ngIfElse", _r18);
  }
}
let ProfileDetailsFormComponent = class ProfileDetailsFormComponent {
  set itsMeDetails(value) {
    this._itsMeDetails = value;
    this.populatePersonalDetailsFromItsMe();
  }
  constructor(personalDetailsFacade, _element, formBuilder, cdref) {
    this.personalDetailsFacade = personalDetailsFacade;
    this._element = _element;
    this.formBuilder = formBuilder;
    this.cdref = cdref;
    this.isValidNumber = false;
    const nameValidation = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(1), _sales_shared_util__WEBPACK_IMPORTED_MODULE_2__.NameValidator.validName];
    this.profileDetailsForm = this.formBuilder.group({
      firstNameField: ['', nameValidation],
      lastNameField: ['', nameValidation],
      salutationField: ['Mr.', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      emailField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(80)]],
      phoneNumberField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _sales_shared_util__WEBPACK_IMPORTED_MODULE_2__.SalesPhoneNumberValidator.validNumber]],
      day: [''],
      selectedMonth: [''],
      year: ['']
    });
  }
  ngOnInit() {
    this.populateDetailsFromInput();
  }
  populateDetailsFromInput() {
    if (this.personalDetails !== undefined && this.personalDetails !== null && this.personalDetails.firstName.length > 0) {
      this.profileDetailsForm.patchValue({
        firstNameField: this.personalDetails.firstName,
        lastNameField: this.personalDetails.lastName,
        emailField: this.personalDetails.email,
        phoneNumberField: this.personalDetails.phoneNumber,
        salutationField: this.personalDetails.salutation === _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__.Salutation.DHR ? 'Mr.' : 'Mrs.'
      });
    }
    if (this.category === 'business') {
      this.profileDetailsForm.controls['day'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.profileDetailsForm.controls['year'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.profileDetailsForm.controls['selectedMonth'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.personalDetailsFacade.dateOfBirth$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(dob => !!dob), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(dob => {
        return {
          day: dob?.getDate() + '',
          selectedMonth: _sales_shared_util__WEBPACK_IMPORTED_MODULE_2__.ExtractDobUtil.getMonthAsString(new Date(dob + '')),
          year: dob?.getFullYear() + ''
        };
      })).subscribe(patchToForm => {
        this.profileDetailsForm.patchValue(patchToForm);
      });
    }
  }
  populatePersonalDetailsFromItsMe() {
    if (this._itsMeDetails !== undefined && this._itsMeDetails !== null) {
      this.profileDetailsForm.patchValue({
        firstNameField: this._itsMeDetails.firstName,
        lastNameField: this._itsMeDetails.lastName,
        emailField: this._itsMeDetails.email,
        phoneNumberField: this._itsMeDetails.phoneNumber
      });
    }
  }
  formatPhoneNumber() {
    this.isValidNumber = true;
    let phone = this.profileDetailsForm.controls['phoneNumberField'].value;
    phone = this.personalDetailsFacade.formatPhoneNumber(phone);
    this.profileDetailsForm.controls['phoneNumberField'].setValue(phone);
  }
  setFocusOnFirstErrorField() {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }
  getUserInputPayload() {
    return {
      salutation: this.profileDetailsForm.controls['salutationField'].value === 'Mr.' ? _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__.Salutation.DHR : _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__.Salutation.MVR,
      firstName: this.profileDetailsForm.controls['firstNameField'].value,
      lastName: this.profileDetailsForm.controls['lastNameField'].value,
      email: this.profileDetailsForm.controls['emailField'].value,
      phoneNumber: this.profileDetailsForm.controls['phoneNumberField'].value
    };
  }
  getDOB() {
    return _sales_shared_util__WEBPACK_IMPORTED_MODULE_2__.ExtractDobUtil.parseDateOfBirth(this.profileDetailsForm.controls['day'].value, this.profileDetailsForm.controls['selectedMonth'].value, this.profileDetailsForm.controls['year'].value);
  }
  validateForm() {
    const valid = this.profileDetailsForm.valid;
    if (!valid) {
      this.profileDetailsForm.markAllAsTouched();
      this.profileDetailsForm.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }
  static #_ = this.ɵfac = function ProfileDetailsFormComponent_Factory(t) {
    return new (t || ProfileDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__.PersonalDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileDetailsFormComponent,
    selectors: [["tg-sales-profile-details-form"]],
    inputs: {
      customerBrand: "customerBrand",
      category: "category",
      isPidEnabled: "isPidEnabled",
      personalDetails: "personalDetails",
      itsMeDetails: "itsMeDetails"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 59,
    vars: 31,
    consts: [[3, "formGroup"], [1, "mb--xxxs", "cursor--default"], [1, "col-12", "col-md-8", "p-0"], [1, "select-tile--group", "display--grid", "grid-template-column--2", "gap--m"], ["for", "Mr.", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], [1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column", "gap--xm"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], [1, "heading--6", "heading--nomargin", "pl--xxs"], ["name", "salutationField", "formControlName", "salutationField", "type", "radio", "id", "Mr.", "value", "Mr.", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle"], ["salutationField", ""], ["for", "Mrs.", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], ["name", "salutationField", "formControlName", "salutationField", "type", "radio", "id", "Mrs.", "value", "Mrs.", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle"], [1, "mt--xl"], ["for", "firstNameField", 1, "mb--xxxs", "cursor--default"], [1, "form__input-container", "mb--xl--md", "mb--l"], ["type", "text", "id", "firstNameField", "name", "firstNameField", "formControlName", "firstNameField", 1, "form__input"], ["firstNameField", ""], ["class", "formErrorInput"], ["for", "lastNameField", 1, "mb--xxxs", "cursor--default"], ["type", "text", "name", "lastNameField", "id", "lastNameField", "formControlName", "lastNameField", "autocomplete", "off", "required", "true", 1, "form__input"], ["lastNameField", ""], ["for", "emailField", 1, "mb--xxxs", "cursor--default"], ["type", "text", "name", "emailField", "id", "emailField", "autocomplete", "off", "formControlName", "emailField", 1, "form__input"], ["emailField", ""], ["class", "formErrorInput mb--xxxs", 4, "ngIf"], ["class", "mt--xl"], ["type", "text", "name", "phoneNumberField", "id", "phoneNumberField", "formControlName", "phoneNumberField", "required", "true", 1, "form__input", 3, "blur"], ["phoneNumberField", ""], [1, "formErrorInput"], [1, "text--s", "mt--xxxs", "color-notification--error--light", "text-align--left"], [1, "formErrorInput", "mb--xxxs"], ["class", "color-red text--s", 4, "ngIf"], [1, "color-red", "text--s"], ["for", "dob", 1, "mb--xxxs", "cursor--default"], ["ngDefaultControl", "", 3, "form", "day", "month", "year", "minDefaultLegalAge", "dayBasedValidationFeatureFlag"], ["class", "color-red text--s", 4, "ngIf", "ngIfElse"], ["formatError", ""]],
    template: function ProfileDetailsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div")(2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "label", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12)(18, "div", 5)(19, "div", 6)(20, "div", 7)(21, "div", 8)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14)(28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileDetailsFormComponent_Conditional_34_Template, 4, 4, "div", 19)(35, ProfileDetailsFormComponent_Conditional_35_Template, 4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14)(37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProfileDetailsFormComponent_Conditional_42_Template, 4, 4, "div", 19)(43, ProfileDetailsFormComponent_Conditional_43_Template, 4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14)(45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileDetailsFormComponent_div_50_Template, 4, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProfileDetailsFormComponent_Conditional_51_Template, 5, 10, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14)(53, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ProfileDetailsFormComponent_Template_input_blur_56_listener() {
          return ctx.formatPhoneNumber();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ProfileDetailsFormComponent_div_58_Template, 4, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, "customer-registration.lbl.salutation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, "customer-registration.form-mr-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 21, "customer-registration.form-mrs-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 23, "customer-registration.form-first-name-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "first-name-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](34, (ctx.profileDetailsForm.controls["firstNameField"].errors == null ? null : ctx.profileDetailsForm.controls["firstNameField"].errors["required"]) && ctx.profileDetailsForm.controls["firstNameField"].touched ? 34 : (ctx.profileDetailsForm.controls["firstNameField"].errors == null ? null : ctx.profileDetailsForm.controls["firstNameField"].errors["format"]) && ctx.profileDetailsForm.controls["firstNameField"].touched ? 35 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 25, "customer-registration.form-last-name-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "last-name-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](42, (ctx.profileDetailsForm.controls["lastNameField"].errors == null ? null : ctx.profileDetailsForm.controls["lastNameField"].errors["required"]) && ctx.profileDetailsForm.controls["lastNameField"].touched ? 42 : (ctx.profileDetailsForm.controls["lastNameField"].errors == null ? null : ctx.profileDetailsForm.controls["lastNameField"].errors["format"]) && ctx.profileDetailsForm.controls["lastNameField"].touched ? 43 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 27, "customer-registration.form-email-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "email-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileDetailsForm.controls["emailField"].errors && ctx.profileDetailsForm.controls["emailField"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](51, ctx.category === "business" ? 51 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 29, "customer-registration.form-phone-number-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "phone-number-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileDetailsForm.controls["phoneNumberField"].errors && ctx.profileDetailsForm.controls["phoneNumberField"].touched);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3__.FormDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_3__.DateOfBirthPickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
};
ProfileDetailsFormComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_4__.PersonalDetailsFacade, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef])], ProfileDetailsFormComponent);


/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_feat-personal-details_src_index_ts.js.map