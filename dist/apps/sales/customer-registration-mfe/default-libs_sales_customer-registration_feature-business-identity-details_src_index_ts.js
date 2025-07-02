(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_feature-business-identity-details_src_index_ts"],{

/***/ 91227:
/*!*****************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feature-business-identity-details/src/index.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessIdentityDetailsComponent: () => (/* reexport safe */ _lib_feat_business_identity_details_business_identity_details_component__WEBPACK_IMPORTED_MODULE_0__.BusinessIdentityDetailsComponent)
/* harmony export */ });
/* harmony import */ var _lib_feat_business_identity_details_business_identity_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feat-business-identity-details/business-identity-details.component */ 18870);


/***/ }),

/***/ 18870:
/*!**********************************************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feature-business-identity-details/src/lib/feat-business-identity-details/business-identity-details.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessIdentityDetailsComponent: () => (/* binding */ BusinessIdentityDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/form/src/errors/form.directive */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ 95229);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sales/customer-registration/ui */ 92549);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__);
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





















const _c0 = ["legalAddress"];
const _c1 = ["installationAddress"];
const _c2 = ["billingAddress"];
const BusinessIdentityDetailsComponent_Defer_53_DepsFn = () => [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.AddressFormComponent];
function BusinessIdentityDetailsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-sales-error-message", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", "ng.customer-registration." + ctx.code + "-errorfield");
  }
}
function BusinessIdentityDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-sales-error-message-with-login-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginEmitter", function BusinessIdentityDetailsComponent_Conditional_10_Template_tg_sales_error_message_with_login_button_loginEmitter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.doLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("brand", ctx_r1.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "hard-match-error")("data-testid", "hard-match-error");
  }
}
function BusinessIdentityDetailsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.form-company-name-guidance-error-required"), " ");
  }
}
function BusinessIdentityDetailsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "company-name-constraint")("data-testid", "company-name-constraint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "customer-registration.company-name-guidance-error-company-name-constraint"), " ");
  }
}
function BusinessIdentityDetailsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.vat-number-guidance-error-required"), " ");
  }
}
function BusinessIdentityDetailsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "belgian-enterprise-number-constraint")("data-testid", "belgian-enterprise-number-constraint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "customer-registration.vat-number-guidance-error-enterprise-number-constraint"), " ");
  }
}
function BusinessIdentityDetailsComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessIdentityDetailsComponent_For_39_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const entity_r17 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.validateEnitity(entity_r17.name, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entity_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", entity_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r17.name);
  }
}
function BusinessIdentityDetailsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.form-legal-entity-guidance-error-required"), " ");
  }
}
function BusinessIdentityDetailsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.legal-entity-guidance-error-invalid"), " ");
  }
}
function BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-sales-customer-registration-address-form", 21, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateStreetsEmitter", function BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template_tg_sales_customer_registration_address_form_updateStreetsEmitter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.updateStreets($event));
    })("updateSubHouseEmitter", function BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template_tg_sales_customer_registration_address_form_updateSubHouseEmitter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.updateSubHouse());
    })("updateBoxEmitter", function BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template_tg_sales_customer_registration_address_form_updateBoxEmitter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.updateBox());
    })("saveAddressEmitter", function BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template_tg_sales_customer_registration_address_form_saveAddressEmitter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.saveAddressToState($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locationSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r24.locationSuggestion$))("streetSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r24.streetSuggestion$))("subHouseNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r24.subHouseNoSuggestions$))("boxNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx_r24.boxNoSuggestions$))("addressType", "installationAddress");
  }
}
function BusinessIdentityDetailsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-sales-customer-registration-address-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChecked", function BusinessIdentityDetailsComponent_Conditional_48_Template_tg_sales_customer_registration_address_toggle_isChecked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.toggleAddressVisibility($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BusinessIdentityDetailsComponent_Conditional_48_Conditional_1_Template, 6, 13, "tg-sales-customer-registration-address-form", 30);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showBillingAddressToggle", false)("addressType", "installationAddress")("showInstallationAddressToggle", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "installation-address-toggle")("data-testid", "installation-address-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r11.showInstallationAddress ? 1 : -1);
  }
}
function BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33)(1, "tg-sales-customer-registration-address-form", 21, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateStreetsEmitter", function BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template_tg_sales_customer_registration_address_form_updateStreetsEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.updateStreets($event));
    })("updateSubHouseEmitter", function BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template_tg_sales_customer_registration_address_form_updateSubHouseEmitter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.updateSubHouse());
    })("updateBoxEmitter", function BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template_tg_sales_customer_registration_address_form_updateBoxEmitter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.updateBox());
    })("saveAddressEmitter", function BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template_tg_sales_customer_registration_address_form_saveAddressEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.saveAddressToState($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locationSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r33.locationSuggestion$))("streetSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r33.streetSuggestion$))("subHouseNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx_r33.subHouseNoSuggestions$))("boxNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx_r33.boxNoSuggestions$))("addressType", "billingAddress");
  }
}
function BusinessIdentityDetailsComponent_Defer_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BusinessIdentityDetailsComponent_Defer_51_Conditional_0_Template, 7, 13, "div", 32);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r12.showBillingAddress ? 0 : -1);
  }
}
function BusinessIdentityDetailsComponent_DeferPlaceholder_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
  }
}
const _c3 = a0 => ({
  "form__input--error": a0
});
let BusinessIdentityDetailsComponent = class BusinessIdentityDetailsComponent {
  constructor(formBuilder, stepFacade, businessIdentityDetailsFacade, authorConfigurationFacade, _element, cdref) {
    this.formBuilder = formBuilder;
    this.stepFacade = stepFacade;
    this.businessIdentityDetailsFacade = businessIdentityDetailsFacade;
    this.authorConfigurationFacade = authorConfigurationFacade;
    this._element = _element;
    this.cdref = cdref;
    this.messageGroupName = 'customer-registration';
    this.currentStep = this.stepFacade.currentStepKey$;
    this.error$ = this.businessIdentityDetailsFacade.error$;
    this.searchCustomerResultExists$ = this.businessIdentityDetailsFacade.searchCustomerResultExists$;
    this.brand = this.authorConfigurationFacade.getBrand();
    this.legalEntities = [];
    this.legalFilteredEntities = [];
    this.isLegalEntityValid = 1;
    this.streetSuggestion$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    this.showInstallationAddress = false;
    this.showBillingAddress = false;
    this.address$ = this.businessIdentityDetailsFacade.addresses$;
    this.subHouseNoSuggestions$ = this.businessIdentityDetailsFacade.subHouseNumbers$;
    this.boxNoSuggestions$ = this.businessIdentityDetailsFacade.boxNumbers$;
    this.checkAddressFormValidity$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
    this.isInstallableProductExists$ = this.businessIdentityDetailsFacade.isInstallableProductExists$;
    this.businessIdentityDetailsForm = this.formBuilder.group({
      companyNameField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.CompanyNameValidator.validCompanyName]],
      belgianEnterpriseNumberField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.VatNumberValidator.isValidVatNumber]],
      legalEntityField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
    this.locationSuggestion$ = this.businessIdentityDetailsFacade.getMunicipalities().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
  }
  onNextStep() {
    const isValidIdentity = this.validateForm();
    const isValidLegalAddress = this.addressFormComponent?.validateForm();
    const isValidBillingAddress = this.showBillingAddress ? this.billingAddressFormComponent?.validateForm() : true;
    const isValidInstallationAddress = this.showInstallationAddress ? this.installationAddressFormComponent?.validateForm() : true;
    if (isValidIdentity && isValidLegalAddress && isValidBillingAddress && isValidInstallationAddress) {
      this.updateBusinessIdentityDetails();
      this.businessIdentityDetailsFacade.searchCustomer();
      this.processSearchCustomerResult();
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
  }
  ngOnInit() {
    this.getLegalEntityDetails();
    this.populateFormFieldsFromInput();
  }
  populateFormFieldsFromInput() {
    this.businessIdentityDetailsFacade.businessIdentityDetails$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(businessIdentityDetails => !!businessIdentityDetails), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(businessIdentityDetails => {
      return {
        belgianEnterpriseNumberField: businessIdentityDetails.belgianEnterpriseNumber,
        companyNameField: businessIdentityDetails.companyName,
        legalEntityField: (this.legalEntities || []).find(entity => entity.id === businessIdentityDetails.legalForm)?.name
      };
    })).subscribe(patchToForm => {
      this.businessIdentityDetailsForm.patchValue(patchToForm);
    });
  }
  searchCustomerWithBelgianEnterpriseNumber() {
    if (this.businessIdentityDetailsForm.controls['belgianEnterpriseNumberField'].valid) {
      this.updateBusinessIdentityDetails();
      this.businessIdentityDetailsFacade.searchCustomer();
      this.processSearchCustomerResult();
    }
  }
  processSearchCustomerResult() {
    this.searchCustomerResultExists$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(searchCustomerResultExists => {
      searchCustomerResultExists ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
    });
  }
  updateBusinessIdentityDetails() {
    const payLoad = {
      belgianEnterpriseNumber: this.businessIdentityDetailsForm.controls['belgianEnterpriseNumberField'].value,
      companyName: this.businessIdentityDetailsForm.controls['companyNameField'].value,
      legalForm: this.legalEntities?.find(entity => entity.name === this.businessIdentityDetailsForm.controls['legalEntityField']?.value)?.id,
      installationAddressToggle: this.showInstallationAddress,
      billingAddressToggle: this.showBillingAddress
    };
    this.businessIdentityDetailsFacade.saveBusinessIdentityDetails(payLoad);
  }
  doLogin() {
    this.businessIdentityDetailsFacade.login();
  }
  getLegalEntityDetails() {
    this.businessIdentityDetailsFacade.getLegalEntityDetails();
    this.businessIdentityDetailsFacade.legalEntityDetails$.pipe().subscribe(legalEntityDetails => {
      this.legalEntities = this.legalFilteredEntities = legalEntityDetails[0]?.values;
    });
  }
  filterResults(event) {
    this.legalFilteredEntities = this.legalEntities.filter(val => val.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }
  validateEnitity(event, eventBlur) {
    const val = eventBlur ? event.target.value : event;
    this.isLegalEntityValid = this.legalEntities.filter(entity => entity.name === val).length;
    if (this.isLegalEntityValid) {
      this.updateBusinessIdentityDetails();
    }
  }
  saveAddressToState(address) {
    this.businessIdentityDetailsFacade.loadAddress(address);
    this.address$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(addresses => {
      this.businessIdentityDetailsFacade.saveMatchedAddress(addresses, address);
    });
    this.businessIdentityDetailsFacade.resetSearchCustomer();
    this.processSearchCustomerResult();
  }
  updateStreets(postalCode) {
    this.streetSuggestion$ = this.businessIdentityDetailsFacade.getStreets(postalCode);
  }
  toggleAddressVisibility(event) {
    if (event.type === 'installationAddress') {
      this.showInstallationAddress = !event.checked;
    }
    if (event.type === 'billingAddress') {
      this.showBillingAddress = !event.checked;
    }
  }
  updateSubHouse() {
    this.address$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(addresses => {
      if (addresses.length > 0) {
        this.businessIdentityDetailsFacade.getSubHouseNumbers(addresses);
      }
    });
  }
  updateBox() {
    this.address$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(addresses => {
      if (addresses.length > 0) {
        this.businessIdentityDetailsFacade.getBoxNumbers(addresses);
      }
    });
  }
  validateForm() {
    const formGroup = this.businessIdentityDetailsForm;
    const valid = formGroup.valid;
    if (!formGroup.valid) {
      formGroup.markAllAsTouched();
      formGroup.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }
  setFocusOnFirstErrorField() {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }
  static #_ = this.ɵfac = function BusinessIdentityDetailsComponent_Factory(t) {
    return new (t || BusinessIdentityDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.BusinessIdentityDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.AuthorConfigurationFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BusinessIdentityDetailsComponent,
    selectors: [["tg-customer-registration-business-identity-details"]],
    viewQuery: function BusinessIdentityDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addressFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.installationAddressFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.billingAddressFormComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 55,
    vars: 59,
    consts: [[3, "currentStep"], [1, "mb--xxxg", "pb--l", "py--n", "col-lg-8", "col-md-9", "col-12", "m--auto"], ["class", "my--m"], [1, "mb--g", "mb--xxxg--sm"], [1, "background-white", "col-12", "m--auto", "px--xxxl--md", "px--xl", "py--m--md", "py--xxs"], [1, "row"], [1, "col-sm-12"], [3, "formGroup"], [3, "brand"], [1, "address-identity-section"], [1, "my--xl"], ["for", "companyNameField", 1, "text--m", "cursor--default"], [1, "form__input-container", "mb--xl"], ["type", "text", "id", "companyNameField", "name", "companyNameField", "formControlName", "companyNameField", 1, "form__input"], ["class", "formErrorInput"], ["for", "belgianEnterpriseNumberField", 1, "text--m", "cursor--default"], ["type", "text", "id", "belgianEnterpriseNumberField", "name", "belgianEnterpriseNumberField", "mask", "0000.000.000", "placeholder", "0000.000.000", "formControlName", "belgianEnterpriseNumberField", 1, "form__input", 3, "dropSpecialCharacters", "showMaskTyped", "blur"], [1, "form-group", "position--relative"], ["for", "legalEntityField", 1, "text--m", "cursor--default"], ["type", "text", "formControlName", "legalEntityField", "name", "legalEntityField", "id", "legalEntityField", "matInput", "", 1, "form__input", "ellipsis", "cursor--pointer", "form__input--valid", 3, "ngClass", "matAutocomplete", "placeholder", "keyup", "blur"], ["auto", "matAutocomplete"], [3, "locationSuggestions", "streetSuggestions", "subHouseNoSuggestions", "boxNoSuggestions", "addressType", "updateStreetsEmitter", "updateSubHouseEmitter", "updateBoxEmitter", "saveAddressEmitter"], ["legalAddress", ""], [3, "showBillingAddressToggle", "addressType", "showInstallationAddressToggle", "isChecked"], [1, "my--m"], [3, "errorMessage"], [3, "brand", "loginEmitter"], [1, "formErrorInput"], [1, "text--s", "mt--xxxs", "color-notification--error--light", "text-align--left"], [3, "value", "click"], [3, "locationSuggestions", "streetSuggestions", "subHouseNoSuggestions", "boxNoSuggestions", "addressType"], ["installationAddress", ""], ["class", "mt--xl--md mt--l"], [1, "mt--xl--md", "mt--l"], ["billingAddress", ""], [3, "value"]],
    template: function BusinessIdentityDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-sales-customer-registration-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BusinessIdentityDetailsComponent_Conditional_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BusinessIdentityDetailsComponent_Conditional_10_Template, 1, 3, "tg-sales-error-message-with-login-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BusinessIdentityDetailsComponent_Conditional_19_Template, 4, 3, "div", 14)(20, BusinessIdentityDetailsComponent_Conditional_20_Template, 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12)(26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function BusinessIdentityDetailsComponent_Template_input_blur_26_listener() {
          return ctx.searchCustomerWithBelgianEnterpriseNumber();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BusinessIdentityDetailsComponent_Conditional_27_Template, 4, 3, "div", 14)(28, BusinessIdentityDetailsComponent_Conditional_28_Template, 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "div", 17)(31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BusinessIdentityDetailsComponent_Template_input_keyup_34_listener($event) {
          return ctx.filterResults($event);
        })("blur", function BusinessIdentityDetailsComponent_Template_input_blur_34_listener($event) {
          return ctx.validateEnitity($event, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-autocomplete", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](38, BusinessIdentityDetailsComponent_For_39_Template, 2, 2, "mat-option", 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, BusinessIdentityDetailsComponent_Conditional_40_Template, 4, 3, "div", 14)(41, BusinessIdentityDetailsComponent_Conditional_41_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tg-sales-customer-registration-address-form", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateStreetsEmitter", function BusinessIdentityDetailsComponent_Template_tg_sales_customer_registration_address_form_updateStreetsEmitter_42_listener($event) {
          return ctx.updateStreets($event);
        })("updateSubHouseEmitter", function BusinessIdentityDetailsComponent_Template_tg_sales_customer_registration_address_form_updateSubHouseEmitter_42_listener() {
          return ctx.updateSubHouse();
        })("updateBoxEmitter", function BusinessIdentityDetailsComponent_Template_tg_sales_customer_registration_address_form_updateBoxEmitter_42_listener() {
          return ctx.updateBox();
        })("saveAddressEmitter", function BusinessIdentityDetailsComponent_Template_tg_sales_customer_registration_address_form_saveAddressEmitter_42_listener($event) {
          return ctx.saveAddressToState($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BusinessIdentityDetailsComponent_Conditional_48_Template, 2, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tg-sales-customer-registration-address-toggle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChecked", function BusinessIdentityDetailsComponent_Template_tg_sales_customer_registration_address_toggle_isChecked_50_listener($event) {
          return ctx.toggleAddressVisibility($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BusinessIdentityDetailsComponent_Defer_51_Template, 1, 1)(52, BusinessIdentityDetailsComponent_DeferPlaceholder_52_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefer"](53, 51, BusinessIdentityDetailsComponent_Defer_53_DepsFn, null, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdeferOnViewport"](0, -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        let BusinessIdentityDetailsComponent_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 33, ctx.currentStep));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, (BusinessIdentityDetailsComponent_contFlowTmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 35, ctx.error$)) ? 3 : -1, BusinessIdentityDetailsComponent_contFlowTmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.businessIdentityDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 37, ctx.searchCustomerResultExists$) === true ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "company-name-field")("data-testid", "company-name-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 39, "customer-registration.form-company-name-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](19, ctx.businessIdentityDetailsForm.controls["companyNameField"].touched && (ctx.businessIdentityDetailsForm.controls["companyNameField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["companyNameField"].errors["required"]) ? 19 : ctx.businessIdentityDetailsForm.controls["companyNameField"].touched && (ctx.businessIdentityDetailsForm.controls["companyNameField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["companyNameField"].errors["invalidCompanyName"]) ? 20 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "belgian-enterprise-number-field")("data-testid", "belgian-enterprise-number-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 41, "customer-registration.vat-number-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false)("showMaskTyped", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](27, ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].touched && (ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].errors["required"]) ? 27 : ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].touched && (ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["belgianEnterpriseNumberField"].errors["invalidVatNumber"]) ? 28 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 43, "customer-registration.legal-entity-label"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 45, "customer-registration.lbl.legal-entity-placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c3, !ctx.isLegalEntityValid))("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "legal-entity-field")("data-testid", "legal-entity-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.legalFilteredEntities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](40, ctx.businessIdentityDetailsForm.controls["legalEntityField"].touched && (ctx.businessIdentityDetailsForm.controls["legalEntityField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["legalEntityField"].errors["required"]) ? 40 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](41, !ctx.isLegalEntityValid && !(ctx.businessIdentityDetailsForm.controls["legalEntityField"].errors == null ? null : ctx.businessIdentityDetailsForm.controls["legalEntityField"].errors["required"]) ? 41 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locationSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 47, ctx.locationSuggestion$))("streetSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 49, ctx.streetSuggestion$))("subHouseNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 51, ctx.subHouseNoSuggestions$))("boxNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 53, ctx.boxNoSuggestions$))("addressType", "legalAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 55, ctx.isInstallableProductExists$) === true ? 48 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showBillingAddressToggle", true)("addressType", "billingAddress")("showInstallationAddressToggle", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "billing-address-toggle")("data-testid", "billing-address-toggle");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.FormDirective, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.CustomerRegistrationTitleComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.ErrorMessageComponent, ngx_mask__WEBPACK_IMPORTED_MODULE_6__.NgxMaskDirective, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.ErrorMessageWithLoginButtonComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.AddressFormComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.AddressToggleComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
BusinessIdentityDetailsComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__.StepFacade, _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.BusinessIdentityDetailsFacade, _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.AuthorConfigurationFacade, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef])], BusinessIdentityDetailsComponent);


/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_feature-business-identity-details_src_index_ts.js.map