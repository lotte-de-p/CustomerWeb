(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_feat-identity-details_src_index_ts"],{

/***/ 96168:
/*!*****************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsComponent: () => (/* reexport safe */ _lib_feat_identity_details_identity_details_component__WEBPACK_IMPORTED_MODULE_0__.IdentityDetailsComponent)
/* harmony export */ });
/* harmony import */ var _lib_feat_identity_details_identity_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feat-identity-details/identity-details.component */ 34260);


/***/ }),

/***/ 34260:
/*!****************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/identity-details.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsComponent: () => (/* binding */ IdentityDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ 95229);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sales/customer-registration/ui */ 92549);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views */ 11303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);
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

















function IdentityDetailsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "tg-sales-error-message", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errorMessage", "ng.customer-registration." + ctx.code + "-errorfield");
  }
}
function IdentityDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "label", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 20)(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function IdentityDetailsComponent_Conditional_7_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.identitySelection = $event);
    })("change", function IdentityDetailsComponent_Conditional_7_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.toggleIdentityView("belgian"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 23)(11, "div", 17)(12, "div", 18)(13, "div", 19)(14, "div", 20)(15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function IdentityDetailsComponent_Conditional_7_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.identitySelection = $event);
    })("change", function IdentityDetailsComponent_Conditional_7_Template_input_change_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.toggleIdentityView("other"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "belgianIdentity");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 5, "customer-registration.lbl.belgian"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.identitySelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 7, "customer-registration.lbl.other"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.identitySelection);
  }
}
function IdentityDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tg-sales-error-message-with-login-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("loginEmitter", function IdentityDetailsComponent_Conditional_14_Template_tg_sales_error_message_with_login_button_loginEmitter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.doLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("brand", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r2.brand$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "hard-match-error");
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "belgian-eid-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "customer-registration.form-belgian-eid-guidance-error-required"), " ");
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "belgian-eid-field-invalid-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "customer-registration.form-belgian-eid-guidance-error-belgian-eid-constraint"), " ");
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 29)(1, "div")(2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function IdentityDetailsComponent_Conditional_16_Conditional_2_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.toggleIdentityInfoOverlayView(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 32)(7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function IdentityDetailsComponent_Conditional_16_Conditional_2_Template_input_blur_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.searchCustomer("belgianEid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, IdentityDetailsComponent_Conditional_16_Conditional_2_Conditional_8_Template, 4, 4, "div", 34)(9, IdentityDetailsComponent_Conditional_16_Conditional_2_Conditional_9_Template, 4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 7, "customer-registration.belgian-eid-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", "000-0000000-00")("showMaskTyped", true)("dropSpecialCharacters", false)("placeHolderCharacter", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "belgian-eid-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](8, ctx_r13.identityDetailsForm.controls["belgianEid"].touched && (ctx_r13.identityDetailsForm.controls["belgianEid"].errors == null ? null : ctx_r13.identityDetailsForm.controls["belgianEid"].errors["required"]) ? 8 : ctx_r13.identityDetailsForm.controls["belgianEid"].touched && (ctx_r13.identityDetailsForm.controls["belgianEid"].errors == null ? null : ctx_r13.identityDetailsForm.controls["belgianEid"].errors["invalidEid"]) ? 9 : -1);
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "customer-registration.form-foreign-eid-guidance-error-required"), " ");
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "customer-registration.form-foreign-eid-guidance-error-foreign-eid-constraint"), " ");
  }
}
function IdentityDetailsComponent_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div")(3, "div", 39)(4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function IdentityDetailsComponent_Conditional_16_Conditional_3_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.toggleIdentityInfoOverlayView(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function IdentityDetailsComponent_Conditional_16_Conditional_3_Template_input_blur_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.searchCustomer("foreignEid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, IdentityDetailsComponent_Conditional_16_Conditional_3_Conditional_9_Template, 4, 3, "div", 34)(10, IdentityDetailsComponent_Conditional_16_Conditional_3_Conditional_10_Template, 4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 2, "customer-registration.belgian-eid-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](9, ctx_r14.identityDetailsForm.controls["foreignEid"].touched && (ctx_r14.identityDetailsForm.controls["foreignEid"].errors == null ? null : ctx_r14.identityDetailsForm.controls["foreignEid"].errors["required"]) ? 9 : ctx_r14.identityDetailsForm.controls["foreignEid"].touched && (ctx_r14.identityDetailsForm.controls["foreignEid"].errors == null ? null : ctx_r14.identityDetailsForm.controls["foreignEid"].errors["invalidEid"]) ? 10 : -1);
  }
}
function IdentityDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, IdentityDetailsComponent_Conditional_16_Conditional_2_Template, 10, 9, "div", 28)(3, IdentityDetailsComponent_Conditional_16_Conditional_3_Template, 11, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r3.identityDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](2, ctx_r3.isBelgianIdentity ? 2 : 3);
  }
}
function IdentityDetailsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tg-sales-identity-overlay", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closeOverlay", function IdentityDetailsComponent_Conditional_22_Template_tg_sales_identity_overlay_closeOverlay_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.toggleIdentityInfoOverlayView(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("brand", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r4.brand$))("isBelgianIdentity", ctx_r4.isBelgianIdentity);
  }
}
let IdentityDetailsComponent = class IdentityDetailsComponent {
  constructor(identityDetailsFacade, formBuilder, stepFacade, authorConfigurationFacade) {
    this.identityDetailsFacade = identityDetailsFacade;
    this.formBuilder = formBuilder;
    this.stepFacade = stepFacade;
    this.authorConfigurationFacade = authorConfigurationFacade;
    this.CUS_REG_SALES_IDENTITY_BELGIAN = 'belgian';
    this.CUS_REG_SALES_IDENTITY_FOREIGN_FORM = 'foreignEid';
    this.CUS_REG_SALES_IDENTITY_BELGIAN_FORM = 'belgianEid';
    this.isBelgianIdentity = false;
    this.identitySelection = 'belgian';
    this.showIdentityInfoOverlay = false;
    this.brand$ = this.identityDetailsFacade.brand$;
    this.currentStep$ = this.stepFacade.currentStepKey$;
    this.userInput$ = this.identityDetailsFacade.userInput$;
    this.searchCustomerResultExists$ = this.identityDetailsFacade.searchCustomerResultExists$;
    this.error$ = this.identityDetailsFacade.error$;
    this.prepaidOmapiProductExists$ = this.identityDetailsFacade.prepaidOmapiProductExists$;
    this.isResidential = true;
    this.itsMeResponse$ = this.identityDetailsFacade.itsMeResponse$;
    this.isBelgianIdentitySelected$ = this.identityDetailsFacade.isBelgianIdentitySelected$;
    this.identityDetailsForm = this.formBuilder.group({
      belgianEid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.BelgianEidValidator.isNumberValid]],
      foreignEid: ['']
    });
  }
  ngOnInit() {
    this.isBelgianIdentitySelected$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(isBelgianIdentity => {
      this.toggleIdentityView(isBelgianIdentity ? this.CUS_REG_SALES_IDENTITY_BELGIAN : '');
    });
    this.isResidential = this.authorConfigurationFacade.isResidential();
    this.populateFormFieldsFromInput();
  }
  toggleIdentityView(identityType) {
    this.isBelgianIdentity = identityType === this.CUS_REG_SALES_IDENTITY_BELGIAN;
    this.updateFormControl(this.isBelgianIdentity);
    this.populateBelgianEidFormFieldFromItsMe();
    this.populateFormFieldsFromInput();
  }
  updateFormControl(isBelgianEid) {
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].clearValidators();
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].clearValidators();
    this.identityDetailsForm.controls[isBelgianEid ? 'belgianEid' : 'foreignEid'].addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, isBelgianEid ? _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.BelgianEidValidator.isNumberValid : _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.ForeignEidValidator.isForeignEidValid]);
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].updateValueAndValidity();
    this.identityDetailsForm.controls[this.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].updateValueAndValidity();
  }
  populateFormFieldsFromInput() {
    this.userInput$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(userInput => !!userInput?.identityDetails), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(userInput => {
      const cardNumber = this.isBelgianIdentity ? userInput.identityDetails.belgianIdentityCardNumber : userInput.identityDetails.foreignIdentityCardNumber;
      const formControl = this.isBelgianIdentity ? 'belgianEid' : 'foreignEid';
      this.identitySelection = userInput.identityDetails.isBelgianIdentity ? 'belgian' : 'other';
      return {
        [formControl]: cardNumber
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(formValue => {
      const cardNumber = Object.values(formValue)[0];
      return cardNumber !== '';
    })).subscribe(formValue => {
      this.identityDetailsForm.patchValue(formValue);
    });
  }
  populateBelgianEidFormFieldFromItsMe() {
    this.itsMeResponse$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(itsMeDetails => !!itsMeDetails), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(itsMeDetails => {
      return {
        belgianEid: itsMeDetails.cardIDNumber
      };
    })).subscribe(formValue => {
      this.identityDetailsForm.patchValue(formValue);
    });
  }
  toggleIdentityInfoOverlayView(show) {
    const elementToScrollAtStart = document.querySelector('body');
    if (elementToScrollAtStart) {
      elementToScrollAtStart.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.showIdentityInfoOverlay = show;
  }
  searchCustomer(formControlName) {
    if (formControlName === 'nrn' || formControlName && this.identityDetailsForm.controls[formControlName].valid) {
      this.updateIdentityDetailsInState();
      this.identityDetailsFacade.searchResidentialCustomer();
      this.searchCustomerResultExists$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(searchCustomerResult => {
        searchCustomerResult ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
      });
    }
  }
  updateIdentityDetailsInState() {
    const identityDetails = this.identityDetailsFormComponent?.getIdentityDetails();
    if (identityDetails) {
      identityDetails.belgianIdentityCardNumber = this.identityDetailsForm.get('belgianEid')?.value;
      identityDetails.foreignIdentityCardNumber = this.identityDetailsForm.get('foreignEid')?.value;
      identityDetails.isBelgianIdentity = this.isBelgianIdentity;
      this.identityDetailsFacade.saveIdentityDetails(identityDetails);
    }
  }
  doLogin() {
    this.identityDetailsFacade.login();
  }
  onNextStep() {
    const isValidEIdNumber = this.identityDetailsFormComponent?.validateForm(this.identityDetailsForm);
    const isValidIdentityDetails = this.identityDetailsFormComponent?.validateForm();
    if (isValidEIdNumber && isValidIdentityDetails) {
      this.updateIdentityDetailsInState();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
  }
  static #_ = this.ɵfac = function IdentityDetailsComponent_Factory(t) {
    return new (t || IdentityDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.IdentityDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.AuthorConfigurationFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: IdentityDetailsComponent,
    selectors: [["tg-sales-customer-registration-identity-details"]],
    viewQuery: function IdentityDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_views__WEBPACK_IMPORTED_MODULE_9__.IdentityDetailsFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.identityDetailsFormComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 26,
    consts: [[3, "currentStep"], [1, "mb--xxxg", "pb--l", "py--n", "col-lg-8", "col-md-9", "col-12", "m--auto"], ["class", "my--m"], [1, "mb--g", "mb--xxxg--sm"], [1, "mx--m", "mx--n--md", "col-md-9", "col-12"], ["class", "select-tile--group display--grid grid-template-column--2 gap--m mb--xl--md mb--l"], [1, "background-white", "col-12", "m--auto", "px--xxxl--md", "px--xl", "py--m--md", "py--xxs"], [1, "row"], [1, "col-sm-12"], [3, "brand"], ["class", "mt--xl--md mt--l"], [3, "userInput", "prepaidOmapiProductExists", "itsMeDetails", "isResidential", "searchCustomerEmitter"], [3, "brand", "isBelgianIdentity"], [1, "my--m"], [3, "errorMessage"], [1, "select-tile--group", "display--grid", "grid-template-column--2", "gap--m", "mb--xl--md", "mb--l"], ["for", "belgian", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], [1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column", "gap--xm"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], [1, "heading--6", "heading--nomargin", "pl--xxs"], ["type", "radio", "id", "belgian", "value", "belgian", "name", "identity", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "ngModel", "ngModelChange", "change"], ["for", "other", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "background-white"], ["type", "radio", "id", "other", "value", "other", "name", "identity", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "ngModel", "ngModelChange", "change"], [3, "brand", "loginEmitter"], [1, "mt--xl--md", "mt--l"], [3, "formGroup"], ["class", "form-info-align position--relative"], [1, "form-info-align", "position--relative"], [1, "cursor--default", "pr--xxxs"], [1, "icon", "icon-information-shape", "position--absolute", "icon-sm", "cursor--pointer", 3, "click"], [1, "form__input-container", "mb--xl--md", "mb--l"], ["type", "text", "mask", "AAA-0000000-00", "formControlName", "belgianEid", 1, "form__input", 3, "placeholder", "showMaskTyped", "dropSpecialCharacters", "placeHolderCharacter", "blur"], ["class", "formErrorInput"], [1, "formErrorInput"], [1, "text--s", "mt--xxxs", "color-notification--error--light", "text-align--left"], [1, "form-group", "position--relative"], [1, "FormGroup__label", "FormGroup__label--input"], [1, "mb--xxs"], [1, "cursor--default"], [1, "icon", "icon-information-shape", "icon-sm", "cursor--pointer", 3, "click"], ["type", "text", "formControlName", "foreignEid", 1, "form__input", 3, "blur"], [3, "brand", "isBelgianIdentity", "closeOverlay"]],
    template: function IdentityDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-sales-customer-registration-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, IdentityDetailsComponent_Conditional_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, IdentityDetailsComponent_Conditional_7_Template, 19, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6)(10, "div")(11, "div")(12, "div", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, IdentityDetailsComponent_Conditional_14_Template, 2, 4, "tg-sales-error-message-with-login-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, IdentityDetailsComponent_Conditional_16_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tg-sales-identity-details-form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("searchCustomerEmitter", function IdentityDetailsComponent_Template_tg_sales_identity_details_form_searchCustomerEmitter_18_listener() {
          return ctx.searchCustomer("nrn");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, IdentityDetailsComponent_Conditional_22_Template, 2, 4, "tg-sales-identity-overlay", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let IdentityDetailsComponent_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentStep", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 10, ctx.currentStep$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](3, (IdentityDetailsComponent_contFlowTmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 12, ctx.error$)) ? 3 : -1, IdentityDetailsComponent_contFlowTmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 14, ctx.prepaidOmapiProductExists$) === false ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](14, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 16, ctx.searchCustomerResultExists$) === true ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](16, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 18, ctx.prepaidOmapiProductExists$) === false ? 16 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("userInput", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 20, ctx.userInput$))("prepaidOmapiProductExists", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 22, ctx.prepaidOmapiProductExists$))("itsMeDetails", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 24, ctx.itsMeResponse$))("isResidential", ctx.isResidential);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](22, ctx.showIdentityInfoOverlay ? 22 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.TgFormsModule, _views__WEBPACK_IMPORTED_MODULE_9__.IdentityDetailsFormComponent, _views__WEBPACK_IMPORTED_MODULE_9__.IdentityOverlayComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.CustomerRegistrationTitleComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.ErrorMessageComponent, ngx_mask__WEBPACK_IMPORTED_MODULE_6__.NgxMaskDirective, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_8__.ErrorMessageWithLoginButtonComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
IdentityDetailsComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.IdentityDetailsFacade, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_4__.StepFacade, _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.AuthorConfigurationFacade])], IdentityDetailsComponent);


/***/ }),

/***/ 95235:
/*!*************************************************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/views/identity-details-form/identity-details-form.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsFormComponent: () => (/* binding */ IdentityDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/form/src/controls/date-of-birth-picker/default/date-of-birth-picker.component */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ 95229);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_6__);












function IdentityDetailsFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "nrn-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "customer-registration.form-nrn-guidance-error-required"), " ");
  }
}
function IdentityDetailsFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "customer-registration.form-nrn-guidance-error-national-registry-number-constraint"), " ");
  }
}
function IdentityDetailsFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-date-of-birth-picker", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "customer-registration.form-dob-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r2.identityDetailsForm)("day", ctx_r2.identityDetailsForm.controls["day"].value)("month", ctx_r2.identityDetailsForm.controls["selectedMonth"].value)("year", ctx_r2.identityDetailsForm.controls["year"].value)("minDefaultLegalAge", ctx_r2.minDefaultAge);
  }
}
function IdentityDetailsFormComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "place-of-birth-field-required-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "customer-registration.form-place-of-birth-guidance-error-required"), " ");
  }
}
class IdentityDetailsFormComponent {
  constructor(formBuilder, _element, cdref) {
    this.formBuilder = formBuilder;
    this._element = _element;
    this.cdref = cdref;
    this.searchCustomerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.MIN_AGE_LIMIT_PREPAID = 16;
    this.MIN_AGE_LIMIT_POSTPAID = 18;
    this.minDefaultAge = this.MIN_AGE_LIMIT_POSTPAID;
    this.identityDetailsForm = this.formBuilder.group({
      nationalRegistrationNumberField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.NationalRegistryNumberValidator.isNumberValid]],
      day: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      selectedMonth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      placeOfBirthField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  ngOnInit() {
    this.populateIdentityDetailsFormFieldsFromItsMe();
    this.populateFormFieldsFromInput();
    this.setMinimumAgeLimit();
  }
  populateFormFieldsFromInput() {
    if (this.userInput?.identityDetails?.dateOfBirth !== undefined) {
      this.identityDetailsForm.patchValue({
        nationalRegistrationNumberField: this.userInput.identityDetails.nationalRegistrationNumber,
        day: this.userInput.identityDetails.dateOfBirth.getDate() + '',
        selectedMonth: _sales_shared_util__WEBPACK_IMPORTED_MODULE_6__.ExtractDobUtil.getMonthAsString(new Date(this.userInput?.identityDetails.dateOfBirth)),
        year: this.userInput.identityDetails.dateOfBirth.getFullYear() + '',
        placeOfBirthField: this.userInput.identityDetails.placeOfBirth
      });
    }
  }
  populateIdentityDetailsFormFieldsFromItsMe() {
    if (this.itsMeDetails !== undefined && this.itsMeDetails !== null && this.itsMeDetails.rrn !== '') {
      this.identityDetailsForm.patchValue({
        belgianEid: this.itsMeDetails.cardIDNumber,
        nationalRegistrationNumberField: this.itsMeDetails.rrn,
        placeOfBirthField: this.itsMeDetails.birthLocation
      });
      this.extractDateOfBirthFromNRN();
    }
  }
  setFocusOnFirstErrorField() {
    const invalidControl = this._element.nativeElement.querySelectorAll('.ng-invalid');
    invalidControl[0]?.focus();
  }
  getIdentityDetails() {
    return {
      nationalRegistrationNumber: this.identityDetailsForm.controls['nationalRegistrationNumberField'].value,
      placeOfBirth: this.identityDetailsForm.controls['placeOfBirthField'].value,
      dateOfBirth: _sales_shared_util__WEBPACK_IMPORTED_MODULE_6__.ExtractDobUtil.parseDateOfBirth(this.identityDetailsForm.controls['day'].value, this.identityDetailsForm.controls['selectedMonth'].value, this.identityDetailsForm.controls['year'].value)
    };
  }
  extractDateOfBirthFromNRN() {
    if (this.identityDetailsForm.controls['nationalRegistrationNumberField'].valid) {
      const DoBFromNRN = this.identityDetailsForm.controls['nationalRegistrationNumberField'].value.split('-')[0];
      const extractedDoB = _sales_shared_util__WEBPACK_IMPORTED_MODULE_6__.ExtractDobUtil.extractDateOfBirth(DoBFromNRN);
      this.identityDetailsForm.patchValue({
        day: extractedDoB.getDate().toString(),
        selectedMonth: (extractedDoB.getMonth() + 1).toString(),
        year: extractedDoB.getFullYear().toString()
      });
      // emit value here because the search customer api needs a date of birth
      this.searchCustomerEmitter.emit();
    }
  }
  setMinimumAgeLimit() {
    this.minDefaultAge = this.prepaidOmapiProductExists && this.MIN_AGE_LIMIT_PREPAID || this.MIN_AGE_LIMIT_POSTPAID;
  }
  validateForm(form) {
    const formGroup = form ? form : this.identityDetailsForm;
    const valid = formGroup.valid;
    if (!valid) {
      formGroup.markAllAsTouched();
      formGroup.markAsDirty();
      this.cdref.markForCheck();
      this.setFocusOnFirstErrorField();
    }
    return valid;
  }
  static #_ = this.ɵfac = function IdentityDetailsFormComponent_Factory(t) {
    return new (t || IdentityDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IdentityDetailsFormComponent,
    selectors: [["tg-sales-identity-details-form"]],
    inputs: {
      userInput: "userInput",
      prepaidOmapiProductExists: "prepaidOmapiProductExists",
      itsMeDetails: "itsMeDetails",
      isResidential: "isResidential"
    },
    outputs: {
      searchCustomerEmitter: "searchCustomerEmitter"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 21,
    consts: [[3, "formGroup"], [1, "mt--xl--md", "mt--l"], ["for", "nationalRegistrationNumberField", 1, "cursor--default"], [1, "form__input-container", "mb--xl--md", "mb--l"], ["type", "text", "id", "nationalRegistrationNumberField", "name", "nationalRegistrationNumberField", "mask", "00.00.00-000.00", "formControlName", "nationalRegistrationNumberField", 1, "form__input", 3, "placeholder", "showMaskTyped", "placeHolderCharacter", "dropSpecialCharacters", "blur"], ["class", "formErrorInput"], ["class", "mt--xl--md mt--l"], ["for", "placeOfBirthField", 1, "cursor--default"], ["type", "text", "id", "placeOfBirthField", "name", "placeOfBirthField", "formControlName", "placeOfBirthField", 1, "form__input", 3, "placeholder"], [1, "formErrorInput"], [1, "text--s", "mt--xxxs", "color-notification--error--light", "text-align--left"], [1, "text-align--left", "cursor--default"], ["ngDefaultControl", "", 3, "form", "day", "month", "year", "minDefaultLegalAge"]],
    template: function IdentityDetailsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function IdentityDetailsFormComponent_Template_input_blur_6_listener() {
          return ctx.extractDateOfBirthFromNRN();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IdentityDetailsFormComponent_Conditional_7_Template, 4, 4, "div", 5)(8, IdentityDetailsFormComponent_Conditional_8_Template, 4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IdentityDetailsFormComponent_Conditional_9_Template, 5, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IdentityDetailsFormComponent_Conditional_17_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.identityDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "nationalRegistrationNumberField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 15, "customer-registration.form-nrn-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "00.00.00-000.00")("showMaskTyped", true)("placeHolderCharacter", "0")("dropSpecialCharacters", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "nrn-field")("data-testid", "nrn-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](7, ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].touched && (ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].errors == null ? null : ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].errors["required"]) ? 7 : ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].touched && (ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].errors == null ? null : ctx.identityDetailsForm.controls["nationalRegistrationNumberField"].errors["invalidNrn"]) ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ctx.isResidential ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "placeOfBirthField");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, "customer-registration.form-place-of-birth-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 19, "customer-registration.form-place-of-birth-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](17, ctx.identityDetailsForm.controls["placeOfBirthField"].touched && (ctx.identityDetailsForm.controls["placeOfBirthField"].errors == null ? null : ctx.identityDetailsForm.controls["placeOfBirthField"].errors["required"]) ? 17 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.FormDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.DateOfBirthPickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_5__.NgxMaskDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 46719:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/views/identity-details-form/index.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsFormComponent: () => (/* reexport safe */ _identity_details_form_component__WEBPACK_IMPORTED_MODULE_0__.IdentityDetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _identity_details_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity-details-form.component */ 95235);


/***/ }),

/***/ 49103:
/*!***************************************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/views/identity-overlay/identity-overlay.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityOverlayComponent: () => (/* binding */ IdentityOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);





function IdentityOverlayComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const brand_r2 = ctx.brand;
    const imageName_r3 = ctx.imageName;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", brand_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/etc/designs/aff-telenetgroup/ngjs/components/customer-registration/identity-info/" + brand_r2 + imageName_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = a0 => ({
  "mb--xl": a0
});
const _c1 = (a0, a1) => ({
  brand: a0,
  imageName: a1
});
class IdentityOverlayComponent {
  constructor() {
    this.brand = '';
    this.isBelgianIdentity = false;
    this.closeOverlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  close() {
    this.closeOverlay.emit();
  }
  static #_ = this.ɵfac = function IdentityOverlayComponent_Factory(t) {
    return new (t || IdentityOverlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IdentityOverlayComponent,
    selectors: [["tg-sales-identity-overlay"]],
    inputs: {
      brand: "brand",
      isBelgianIdentity: "isBelgianIdentity"
    },
    outputs: {
      closeOverlay: "closeOverlay"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 34,
    consts: [[1, "tip-invitation--help-overlay", "tip-overlay-width"], [1, "overlay"], [1, "overlay__mask", "overlay__mask--backdrop", "backdrop-filter--3", "animation--fade-in"], [1, "overlay__section", "overlay__section--align-top", "py--g--sm", "py--l", "py--xxxg--md"], [1, "overlay__section__content--wrapper", "animation--slide-down-to-screen"], [1, "overlay__section__content__close", 3, "click"], [1, "icon", "icon-cross"], [1, "overlay__section__content__description"], [1, "col-12", "p--n"], [1, "text-flow", "text-flow--h3", "my--l", "text-align--left--md", "text-align--center"], [1, "row", "flex-direction--column", "align-items--center"], [1, "col-12", "shadow--m--sm", "shadow--n", "px--n", 3, "ngClass"], [1, "row", "justify-content--around"], [1, "col-12", "col-sm-5", "pb--m", "pb--n--sm", "px--n"], [1, "Container", "Container--default"], [1, "text-align--center", "text-align--left--md"], [1, "text-flow", "text-flow--h6"], [1, "font--body-small"], [1, "tip-invitation--help-overlay__image", "text-align--center", "text-align--left--md", "py--m"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "tip-invitation--help-overlay__body", "text-align--left", "pb--xl"], [1, "text-align--left", "display--none", "display--block--md"], ["image", ""], [1, "width--full\u2014md", 3, "alt", "src"]],
    template: function IdentityOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityOverlayComponent_Template_div_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20)(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](40, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20)(42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IdentityOverlayComponent_ng_template_45_Template, 1, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, "customer-registration.form.identity.where-to-find"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, !ctx.isBelgianIdentity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, "customer-registration.form-belgian-eid-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, "customer-registration.form.identity.front"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c1, ctx.brand, ctx.isBelgianIdentity ? "/IDCN-1.svg" : "/IDCN-2.svg"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 18, "customer-registration.form.identity.front-desc"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 20, "customer-registration.form-nrn-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 22, ctx.isBelgianIdentity ? "customer-registration.form.identity.back" : "customer-registration.form.identity.front"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c1, ctx.brand, ctx.isBelgianIdentity ? "/NRN-1.svg" : "/NRN-2.svg"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 24, ctx.isBelgianIdentity ? "customer-registration.form.identity.back-desc" : "customer-registration.form.identity.front-desc"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 81238:
/*!******************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/views/identity-overlay/index.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityOverlayComponent: () => (/* reexport safe */ _identity_overlay_component__WEBPACK_IMPORTED_MODULE_0__.IdentityOverlayComponent)
/* harmony export */ });
/* harmony import */ var _identity_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity-overlay.component */ 49103);


/***/ }),

/***/ 11303:
/*!*************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-identity-details/src/lib/feat-identity-details/views/index.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsFormComponent: () => (/* reexport safe */ _identity_details_form__WEBPACK_IMPORTED_MODULE_0__.IdentityDetailsFormComponent),
/* harmony export */   IdentityOverlayComponent: () => (/* reexport safe */ _identity_overlay__WEBPACK_IMPORTED_MODULE_1__.IdentityOverlayComponent)
/* harmony export */ });
/* harmony import */ var _identity_details_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity-details-form */ 46719);
/* harmony import */ var _identity_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity-overlay */ 81238);



/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_feat-identity-details_src_index_ts.js.map