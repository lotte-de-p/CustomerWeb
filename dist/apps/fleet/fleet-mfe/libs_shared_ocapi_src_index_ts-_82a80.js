(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_shared_ocapi_src_index_ts-_82a80"],{

/***/ 43421:
/*!****************************************!*\
  !*** ./libs/shared/ocapi/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_PROVIDER: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.AUTH_PROVIDER),
/* harmony export */   AUTH_SERVICE: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.AUTH_SERVICE),
/* harmony export */   AuthenticationPrompt: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.AuthenticationPrompt),
/* harmony export */   CacheService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.CacheService),
/* harmony export */   HttpTypesEnum: () => (/* reexport safe */ _lib_enums__WEBPACK_IMPORTED_MODULE_2__.HttpTypesEnum),
/* harmony export */   LoginComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_0__.LoginComponent),
/* harmony export */   LoginCustomerNameMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_4__.LoginCustomerNameMapper),
/* harmony export */   LoginDetails: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.LoginDetails),
/* harmony export */   LoginDetailsConstants: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_1__.LoginDetailsConstants),
/* harmony export */   LoginDetailsMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_4__.LoginDetailsMapper),
/* harmony export */   LoginDetailsTestfactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsTestfactory),
/* harmony export */   LoginModule: () => (/* reexport safe */ _lib_login_module__WEBPACK_IMPORTED_MODULE_8__.LoginModule),
/* harmony export */   LoginService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.LoginService),
/* harmony export */   LoginStatusEnum: () => (/* reexport safe */ _lib_enums__WEBPACK_IMPORTED_MODULE_2__.LoginStatusEnum),
/* harmony export */   LogoutDetails: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.LogoutDetails),
/* harmony export */   LogoutMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_4__.LogoutMapper),
/* harmony export */   OcapiCallConfig: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.OcapiCallConfig),
/* harmony export */   OcapiHelper: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.OcapiHelper),
/* harmony export */   OcapiService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.OcapiService),
/* harmony export */   OcapiSocketService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.OcapiSocketService),
/* harmony export */   SalesConstants: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_1__.SalesConstants),
/* harmony export */   UserDetailsService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_6__.UserDetailsService),
/* harmony export */   rawLoginDetailsInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_3__.rawLoginDetailsInterfaceFactory)
/* harmony export */ });
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components */ 56957);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants */ 6221);
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/enums */ 24385);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interfaces */ 34514);
/* harmony import */ var _lib_mappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/mappers */ 3941);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models */ 63042);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services */ 8419);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/utils */ 12574);
/* harmony import */ var _lib_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/login-module */ 73628);










/***/ }),

/***/ 56957:
/*!*******************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/components/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* reexport safe */ _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 56722);


/***/ }),

/***/ 56722:
/*!*****************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/components/login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ 24385);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 8419);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ 25987);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ 40913);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ 6221);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 17344);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cookie-service */ 58859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);



















function LoginComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoginComponent_ng_container_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
  }
}
function LoginComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_0_div_2_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.mode === "overlay")("ngIfElse", _r2);
  }
}
function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_0_ng_container_1_Template, 2, 0, "ng-container", 0)(2, LoginComponent_ng_container_0_div_2_Template, 2, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn());
  }
}
function LoginComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_ng_container_1_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.general-login.lbl.not-logged-in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "login-button-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "ng.general-login.btn.not-logged-in"));
  }
}
function LoginComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_div_2_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.login(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.general.login.lbl.narrowed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "ng.general.login.btn.narrowed"), " ");
  }
}
function LoginComponent_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_div_3_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.login(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.general-login.insufficient-rights-link.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "ng.general-login.insufficient-rights-link"), " ");
  }
}
function LoginComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_1_ng_container_1_Template, 8, 7, "ng-container", 10)(2, LoginComponent_ng_template_1_div_2_Template, 7, 6, "div", 11)(3, LoginComponent_ng_template_1_div_3_Template, 7, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.getLoginStatus());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.loginEnum.NOT_LOGGED_IN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.loginEnum.NARROWED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.loginEnum.INSUFFICIENT_PERMISSIONS);
  }
}
function LoginComponent_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
  }
}
function LoginComponent_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
  }
}
function LoginComponent_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
  }
}
function LoginComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 10)(5, LoginComponent_ng_template_3_ng_container_5_Template, 2, 1, "ng-container", 10)(6, LoginComponent_ng_template_3_ng_container_6_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r3.getLoginStatus());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r3.loginEnum.NOT_LOGGED_IN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r3.loginEnum.NARROWED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r3.loginEnum.INSUFFICIENT_PERMISSIONS);
  }
}
function LoginComponent_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "general.lbl.overlay-login-title-insufficient-rights"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "general.lbl.overlay-login-sub-title-insufficient-rights"), " ");
  }
}
function LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "general.lbl.overlay-login-title-abandon-cart"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "general.lbl.overlay-login-sub-title-abandon-cart"), " ");
  }
}
function LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "general.lbl.overlay-login-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "general.lbl.overlay-login-sub-title"), " ");
  }
}
function LoginComponent_ng_template_5_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template, 7, 6, "div", 24)(2, LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template, 7, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.source === "EMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.source !== "EMAIL");
  }
}
function LoginComponent_ng_template_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_ng_template_5_ng_template_2_div_0_Template, 3, 2, "div", 0);
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.getLoginStatus() !== ctx_r29.loginEnum.INSUFFICIENT_PERMISSIONS);
  }
}
function LoginComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_5_div_1_Template, 7, 6, "div", 20)(2, LoginComponent_ng_template_5_ng_template_2_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getLoginStatus() === ctx_r5.loginEnum.INSUFFICIENT_PERMISSIONS)("ngIfElse", _r30);
  }
}
function LoginComponent_ng_template_7_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_5_div_1_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.register("itsme"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "general.lbl.register-with-itsme-help"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "general.lbl.register-with-itsme"), " ");
  }
}
function LoginComponent_ng_template_7_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div")(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_template_7_div_5_div_1_div_6_Template, 9, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_5_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.register("internal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "general.lbl.need-more-info"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.showItsMeRegistrationOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "general.lbl.register"), " ");
  }
}
function LoginComponent_ng_template_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_7_div_5_div_1_Template, 10, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.styleHint === "sales");
  }
}
function LoginComponent_ng_template_7_div_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_6_div_1_div_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.register("itsme"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "general.lbl.register-with-itsme-help"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "general.lbl.register-with-itsme"), " ");
  }
}
function LoginComponent_ng_template_7_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div")(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_template_7_div_6_div_1_div_3_Template, 9, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_7_div_6_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.register("internal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.showItsMeRegistrationOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "general.lbl.register"), " ");
  }
}
function LoginComponent_ng_template_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_7_div_6_div_1_Template, 7, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.styleHint === "sales");
  }
}
const _c0 = a0 => ({
  brand: a0
});
function LoginComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_ng_template_7_div_5_Template, 2, 1, "div", 0)(6, LoginComponent_ng_template_7_div_6_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, "general.lbl.not-a-customer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r7.brand)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.brand !== "BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.brand === "BASE");
  }
}
function LoginComponent_ng_template_9_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "general.lbl.login-again-insufficient-rights"), " ");
  }
}
function LoginComponent_ng_template_9_div_3_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "general.lbl.login-again-abandon-cart"), " ");
  }
}
function LoginComponent_ng_template_9_div_3_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "general.lbl.already-a-customer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r57.brand)), " ");
  }
}
function LoginComponent_ng_template_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_9_div_3_h5_1_Template, 3, 3, "h5", 46)(2, LoginComponent_ng_template_9_div_3_h5_2_Template, 3, 6, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.source === "EMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.source !== "EMAIL");
  }
}
function LoginComponent_ng_template_9_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
  }
}
function LoginComponent_ng_template_9_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
  }
}
function LoginComponent_ng_template_9_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
  }
}
function LoginComponent_ng_template_9_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
  }
}
function LoginComponent_ng_template_9_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_9_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.login(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "general.login-link"), " ");
  }
}
function LoginComponent_ng_template_9_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_9_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r60.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "general.login-link"), " ");
  }
}
function LoginComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_template_9_h5_2_Template, 3, 3, "h5", 46)(3, LoginComponent_ng_template_9_div_3_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_ng_template_9_img_5_Template, 1, 0, "img", 48)(6, LoginComponent_ng_template_9_img_6_Template, 1, 0, "img", 49)(7, LoginComponent_ng_template_9_img_7_Template, 1, 0, "img", 50)(8, LoginComponent_ng_template_9_img_8_Template, 1, 0, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_ng_template_9_button_9_Template, 3, 3, "button", 52)(10, LoginComponent_ng_template_9_button_10_Template, 3, 3, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.brand === "BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.brand === "BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.brand !== "BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.brand !== "BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
  }
}
function LoginComponent_ng_template_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
  }
}
function LoginComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_11_ng_container_1_Template, 1, 1, "ng-container", 58);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.showRegistrationOptions());
  }
}
const _c1 = ["*"];
class LoginComponent {
  window;
  loginService;
  userDetailsService;
  configService;
  urlService;
  pathCategorisationService;
  languageService;
  dataLayerService;
  cookieService;
  scopes = [];
  messageGroupName;
  autoRedirect = false;
  styleHint = _constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.STYLE_HINT;
  mode;
  registrationUrl;
  showItsMeRegistrationOption;
  hasInstallableProductType;
  renderOnlyForOriginCustomer = false;
  componentCanRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  loginDetails;
  show = false;
  loginEnum = _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum;
  brand;
  source;
  action;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  constructor(window, loginService, userDetailsService, configService, urlService, pathCategorisationService, languageService, dataLayerService, cookieService) {
    this.window = window;
    this.loginService = loginService;
    this.userDetailsService = userDetailsService;
    this.configService = configService;
    this.urlService = urlService;
    this.pathCategorisationService = pathCategorisationService;
    this.languageService = languageService;
    this.dataLayerService = dataLayerService;
    this.cookieService = cookieService;
  }
  ngOnInit() {
    this.action = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.QueryParamEnum.ACTION, '');
    this.registerBasedOnAction();
    this.brand = this.pathCategorisationService.getCustomerBrand();
    this.initSource();
    this.loginService.getAuthenticationStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(_ => this.userDetailsService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeLast)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(loginDetails => {
      this.loginDetails = loginDetails;
      if (this.isLoggedIn() && this.canRenderComponentForLoggedInUser()) {
        this.show = true;
        this.componentCanRender.emit(loginDetails);
      } else if (this.autoRedirect && this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigConstants.IS_AUTHOR_MODE) !== 'true') {
        this.forceRedirect();
      } else {
        this.show = true;
        if (this.mode === 'overlay') {
          this.sendPageStepData();
        }
      }
    });
  }
  isLoggedIn() {
    return this.getLoginStatus() === _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.LOGGED_IN;
  }
  canRenderComponentForLoggedInUser() {
    if (this.renderOnlyForOriginCustomer) {
      return this.loginDetails.isBssSystemNetcracker();
    }
    return true;
  }
  getLoginStatus() {
    if (!this.loginDetails?.isLoggedIn()) {
      this.window['telenetgroupLoader']?.hideMask();
      return _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.NOT_LOGGED_IN;
    }
    if (this.isNarrowed()) {
      return _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.NARROWED;
    }
    if (!this.hasRequiredScopes() || this.brand === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.CustomerBrandEnum.BRAND_BASE && this.hasInstallableProductType && this.loginDetails?.isChild()) {
      this.window['telenetgroupLoader']?.hideMask();
      return _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.INSUFFICIENT_PERMISSIONS;
    }
    return _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.LOGGED_IN;
  }
  login(force = false) {
    this.pushEventDataToAnalytics(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.EventNameEnum.EVENT_NAME_LOGIN);
    const referrerUrl = this.urlService.getCurrentUrl();
    if (!force) {
      this.loginService.login(referrerUrl, this.styleHint);
      return;
    }
    this.loginService.loginWithPrompt(referrerUrl, this.styleHint);
  }
  isNarrowed() {
    return this.loginDetails.isNarrowed();
  }
  showRegistrationOptions() {
    return this.source !== _constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.SOURCE_EMAIL && this.getLoginStatus() !== _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.INSUFFICIENT_PERMISSIONS && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(this.styleHint);
  }
  register(idp) {
    const eventName = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.EventNameEnum.EVENT_NAME_REGISTER + '-' + idp;
    this.pushEventDataToAnalytics(eventName);
    this.redirectToRegistrationURL(idp);
  }
  initSource() {
    this.source = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.QueryParamEnum.SOURCE, '');
    this.source = this.source && this.source.toUpperCase();
  }
  hasRequiredScopes() {
    if (this.scopes && !this.scopes.length) {
      return true;
    }
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(this.scopes, scope => {
      return this.loginDetails.hasScope(scope);
    });
  }
  forceRedirect() {
    const loginStatus = this.getLoginStatus();
    const force = loginStatus !== _enums__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum.NOT_LOGGED_IN;
    this.login(force);
  }
  redirectToRegistrationURL(idp) {
    this.cleanCookies();
    if (idp === 'internal') {
      this.redirectToInternalRegistrationURL(this.styleHint);
    } else {
      this.redirectToItsMePortal(this.styleHint);
    }
  }
  cleanCookies() {
    const sessionKeys = this.getCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.COOKIE_KEYS);
    if (sessionKeys) {
      const keys = sessionKeys.split(',');
      for (let i = 0; i <= keys.length; i++) {
        this.cookieService.delete(keys[i], '/');
      }
      this.cookieService.delete(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.COOKIE_KEYS, '/');
    }
  }
  initCookies(channel, idp) {
    const requestParameters = this.urlService.getRequestParameters();
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(requestParameters, (item, key) => {
      this.addCookie(key, item);
    });
    this.addCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.CUSTOMER_REGISTRATION_URL, this.getCustomerRegistrationURL());
    this.addCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.PARAM_CHANNEL, channel);
    this.addCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.PARAM_IDP, idp);
    this.addCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.PARAM_REFERRER_URL, this.urlService.getCurrentUrl());
  }
  addCookie(key, value) {
    this.cookieService.set(key, value, {
      path: '/'
    });
    let sessionKeys = this.getCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.COOKIE_KEYS);
    sessionKeys = sessionKeys ? sessionKeys.concat(',', key) : key;
    this.cookieService.set(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.COOKIE_KEYS, sessionKeys, {
      path: '/'
    });
  }
  getCookie(key) {
    return this.cookieService.get(key);
  }
  redirectToInternalRegistrationURL(channel) {
    let referrer_url;
    let registrationUrl = this.registrationUrl + '?channel=' + channel + '&idp=' + 'internal';
    const sdata = this.urlService.getRequestParamValue(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.PARAM_SDATA, '');
    if (sdata) {
      registrationUrl += '&sdata=' + sdata;
    }
    if (this.action === 'register') {
      const newUrl = this.urlService.getActionParametersRemovedURL();
      referrer_url = encodeURIComponent(newUrl);
    } else {
      referrer_url = encodeURIComponent(this.urlService.getCurrentUrl());
    }
    registrationUrl += '&referrer_url=' + referrer_url;
    this.urlService.redirectTo(registrationUrl);
  }
  redirectToItsMePortal(channel) {
    this.initCookies(channel, 'itsme');
    const redirectURI = this.getRedirectURI();
    const params = {
      redirect_uri: redirectURI,
      language: this.languageService.getLanguage()
    };
    const itsMePortalUrl = this.getItsMeRegisterUrl() + '?language=' + params.language + '&redirect_uri=' + redirectURI + '&brand=' + this.brand;
    this.urlService.redirectTo(itsMePortalUrl);
  }
  getItsMeRegisterUrl() {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigConstants.OCAPI_URl) + _constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.ITS_ME_REGISTER_ENDPOINT;
  }
  getRedirectURI() {
    const redirect_uri = this.getCookie(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.CUSTOMER_REGISTRATION_URL);
    return encodeURIComponent(redirect_uri);
  }
  getCustomerRegistrationURL() {
    return this.urlService.getOrigin().concat(this.registrationUrl);
  }
  pushEventDataToAnalytics(eventName) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.EventTypeEnum.EVENT_TYPE_CLICK);
    eventInfoData.setEventStatus(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.EventStatusEnum.EVENT_STATUS_SUCCESS);
    const attributes = this.buildCommonEventAttributes();
    this.dataLayerService.sendEvent({
      eventInfo: eventInfoData,
      attributes
    });
  }
  buildCommonEventAttributes() {
    const styleHint = this.styleHint ? this.styleHint : 'care';
    const flowType = this.urlService.getRequestParamValue(_constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.PARAM_FLOW, '') || styleHint;
    return {
      flowType: flowType
    };
  }
  sendPageStepData() {
    const attributes = this.buildCommonEventAttributes();
    attributes.stepId = _constants__WEBPACK_IMPORTED_MODULE_5__.LoginDetailsConstants.STEP_ID_LOGIN_REGISTER;
    this.dataLayerService.addStepViewEvent(attributes);
  }
  registerBasedOnAction() {
    if (this.action === 'register') {
      return this.register('internal');
    } else if (this.action === 'register-via-itsme') {
      return this.register('external');
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.UserDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.PathCategorisationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__.CookieService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["tg-login"]],
    inputs: {
      scopes: "scopes",
      messageGroupName: "messageGroupName",
      autoRedirect: "autoRedirect",
      styleHint: "styleHint",
      mode: "mode",
      registrationUrl: "registrationUrl",
      showItsMeRegistrationOption: "showItsMeRegistrationOption",
      hasInstallableProductType: "hasInstallableProductType",
      renderOnlyForOriginCustomer: "renderOnlyForOriginCustomer"
    },
    outputs: {
      componentCanRender: "componentCanRender"
    },
    ngContentSelectors: _c1,
    decls: 13,
    vars: 1,
    consts: [[4, "ngIf"], ["noOverlay", ""], ["overlay", ""], ["headerTitleAndSubtitle", ""], ["onlyRegister", ""], ["onlyLogin", ""], ["loginOrRegister", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "notification notification--warning", 4, "ngSwitchCase"], [1, "notification", "notification--warning"], [1, "icon", "icon-error-shape", "warn"], [1, "button", "button--primary", "cta-secondary", 3, "click"], [1, "icon", "icon-alert-shape", "warn"], [1, "button", "button--primary", "cta-secondary", "button--width-auto", 3, "click"], [1, "end-journey__section__content__action"], [1, "login-sales-journey", "row", "align-items--stretch", "justify-content--center", "col-lg-6", "col-md-10", "col-12", "m--auto", "mb--g"], [1, "login-sales-journey-title", "px--xm", "px--n--md", "col-lg-5", "col-md-7", "col-12", "m--auto"], ["class", "display--flex flex-direction--column", 4, "ngIf", "ngIfElse"], ["otherThanInsufficientRights", ""], [1, "display--flex", "flex-direction--column"], [1, "font--body-regular", "pb--s"], ["class", "display--flex flex-direction--column", 4, "ngIf"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs"], [1, "text-align--center"], [1, "heading--5"], ["class", "display--block", 4, "ngIf"], [1, "display--block"], ["ng-class", "showItsMeRegistrationOption ? 'mb--xxl' : 'mt--xxxl mb--xs'", 1, "pb--xs", "text-align--center"], [1, "font--caption", 3, "innerHtml"], ["class", "width--full", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", 3, "click"], [1, "width--full"], [1, "font--caption", "text-align--center", "pb--xs"], [1, "button", "button--secondary", "button--fullwidth", "register-with-itsme", 3, "click"], [1, "divider--xxs__mid-grey", "my--xl"], [1, "display--block", "mt--xs"], ["class", "width--full mb--xs", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "pt-10", "pb-10", 3, "click"], [1, "width--full", "mb--xs"], [1, "font--caption", "pb--xs", "text-align--center"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "register-with-itsme", "pt--m", "pb--m", 3, "click"], [1, "ml--s--md"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs", "mr--xm--md", "mr--n", "mb--n--md", "mb--m"], ["class", "heading--5", 4, "ngIf"], [1, "m--auto"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "button button--primary button--fullwidth", 3, "click", 4, "ngIf"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 1, "hide-from-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 1, "hide-from-md"], [1, "button", "button--primary", "button--fullwidth", 3, "click"], [3, "ngTemplateOutlet", 4, "ngIf"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, LoginComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, LoginComponent_ng_template_3_Template, 7, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, LoginComponent_ng_template_5_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(7, LoginComponent_ng_template_7_Template, 7, 8, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(9, LoginComponent_ng_template_9_Template, 11, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(11, LoginComponent_ng_template_11_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6221:
/*!******************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/constants/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetailsConstants: () => (/* reexport safe */ _login_details_constant__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants),
/* harmony export */   SalesConstants: () => (/* reexport safe */ _sales_constant__WEBPACK_IMPORTED_MODULE_1__.SalesConstants)
/* harmony export */ });
/* harmony import */ var _login_details_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-details.constant */ 67650);
/* harmony import */ var _sales_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.constant */ 54199);



/***/ }),

/***/ 67650:
/*!***********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/constants/login-details.constant.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetailsConstants: () => (/* binding */ LoginDetailsConstants)
/* harmony export */ });
class LoginDetailsConstants {
  static EMPTY = '';
  static MASTER_ROLES = ['MASTER_USER', 'PREPAID_MASTER_USER', 'MANAGER'];
  static CHILD_ROLES = ['CHILD_USER', 'PREPAID_CHILD_USER'];
  static FLEET_MANAGER_ROLE = 'FLEET MANAGER';
  static FLEET_USER_ROLE = 'FLEET USER';
  static MEMBER_ROLE = 'MEMBER';
  static MANAGER_ROLE = 'MANAGER';
  static ORPHAN_ROLE = 'ORPHAN';
  static INTERNET_MASTER_ROLE = 'INTERNET_MASTER';
  static CUSTOMER_ADMIN_ROLE = 'CUSTOMER_ADMIN';
  static CONTRACT_HOLDER_ROLE = 'CONTRACT_HOLDER';
  static MANAGER_ROLES = [LoginDetailsConstants.MANAGER_ROLE, LoginDetailsConstants.INTERNET_MASTER_ROLE, LoginDetailsConstants.CUSTOMER_ADMIN_ROLE, LoginDetailsConstants.CONTRACT_HOLDER_ROLE];
  static CHARACTER_LIMIT = 39;
  static SUFFIX = '...';
  static BSS_SYSTEM_BASE_LEGACY = 'BASE_LEGACY';
  static BSS_SYSTEM_TELENET_LEGACY = 'TELENET_LEGACY';
  static BSS_SYSTEM_NETCRACKER = 'NETCRACKER';
  static STYLE_HINT = 'care';
  static PROMPT_NONE = 'none';
  static PROMPT_LOGIN = 'login';
  static CODE = 'code';
  static CLAIMS = '{"id_token":{"http://telenet.be/claims/roles":null,"http://telenet.be/claims/licenses":null}}';
  static CLIENT_ID_OCAPI_BASE = 'ocapi_base';
  static SOURCE_EMAIL = 'EMAIL';
  static CUSTOMER_REGISTRATION_URL = 'customer_registration_url';
  static COOKIE_KEYS = 'cookie_keys';
  static PARAM_CHANNEL = 'channel';
  static PARAM_IDP = 'idp';
  static PARAM_FLOW = 'flow';
  static PARAM_SDATA = 'sdata';
  static PARAM_REFERRER_URL = 'referrer_url';
  static ITS_ME_REGISTER_ENDPOINT = '/itsme/register';
  static STEP_ID_LOGIN_REGISTER = 'login-register';
  static LOGIN = 'LOGIN';
  static LOGIN_STATUS_COOKIENAME = 'loginStatus';
}

/***/ }),

/***/ 54199:
/*!***************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/constants/sales.constant.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesConstants: () => (/* binding */ SalesConstants)
/* harmony export */ });
class SalesConstants {
  static QUERY_URL = 'queryurl';
  static SPEC_URL = 'specurl';
}

/***/ }),

/***/ 83952:
/*!************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/enums/http-types.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpTypesEnum: () => (/* binding */ HttpTypesEnum)
/* harmony export */ });
var HttpTypesEnum;
(function (HttpTypesEnum) {
  HttpTypesEnum["GET"] = "GET";
  HttpTypesEnum["POST"] = "POST";
  HttpTypesEnum["PUT"] = "PUT";
  HttpTypesEnum["PATCH"] = "PATCH";
  HttpTypesEnum["DELETE"] = "DELETE";
  HttpTypesEnum["HEAD"] = "HEAD";
})(HttpTypesEnum || (HttpTypesEnum = {}));

/***/ }),

/***/ 24385:
/*!**************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/enums/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpTypesEnum: () => (/* reexport safe */ _http_types_enum__WEBPACK_IMPORTED_MODULE_0__.HttpTypesEnum),
/* harmony export */   LoginStatusEnum: () => (/* reexport safe */ _login_status_enum__WEBPACK_IMPORTED_MODULE_1__.LoginStatusEnum)
/* harmony export */ });
/* harmony import */ var _http_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-types.enum */ 83952);
/* harmony import */ var _login_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-status.enum */ 48054);



/***/ }),

/***/ 48054:
/*!**************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/enums/login-status.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginStatusEnum: () => (/* binding */ LoginStatusEnum)
/* harmony export */ });
var LoginStatusEnum;
(function (LoginStatusEnum) {
  LoginStatusEnum["LOGGED_IN"] = "LOGGED_IN";
  LoginStatusEnum["NOT_LOGGED_IN"] = "NOT_LOGGED_IN";
  LoginStatusEnum["INSUFFICIENT_PERMISSIONS"] = "INSUFFICIENT_PERMISSIONS";
  LoginStatusEnum["NARROWED"] = "NARROWED";
  LoginStatusEnum["UNKNOWN"] = "UNKNOWN";
})(LoginStatusEnum || (LoginStatusEnum = {}));

/***/ }),

/***/ 34514:
/*!*******************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rawLoginDetailsInterfaceFactory: () => (/* reexport safe */ _raw_login_details_interface_testfactory__WEBPACK_IMPORTED_MODULE_4__.rawLoginDetailsInterfaceFactory)
/* harmony export */ });
/* harmony import */ var _login_component_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-component.interface */ 1714);
/* harmony import */ var _login_method_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-method.interface */ 82886);
/* harmony import */ var _raw_login_details_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raw-login-details.interface */ 78160);
/* harmony import */ var _raw_logout_details_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raw-logout-details.interface */ 53672);
/* harmony import */ var _raw_login_details_interface_testfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-login-details.interface.testfactory */ 10482);






/***/ }),

/***/ 1714:
/*!***************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/login-component.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 82886:
/*!************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/login-method.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 10482:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/raw-login-details.interface.testfactory.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rawFormerLoginDetailsInterfaceFactory: () => (/* binding */ rawFormerLoginDetailsInterfaceFactory),
/* harmony export */   rawLoginDetailsInterfaceFactory: () => (/* binding */ rawLoginDetailsInterfaceFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const rawLoginDetailsInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  status: 'active',
  customer_number: '1208338235',
  identity_id: '817624297',
  username: 'kolatest@gmail.com',
  login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
  first_name: 'kola',
  last_name: 'psc1',
  scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
  explicit_login: true,
  narrowed_scope: false,
  bss_system: 'NETCRACKER',
  auth_age: 18,
  role: 'CONTRACT_HOLDER'
});
const rawFormerLoginDetailsInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  status: 'Former',
  customer_number: '1208338235',
  identity_id: '817624297',
  username: 'kolatest@gmail.com',
  login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
  first_name: 'kola',
  last_name: 'psc1',
  scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
  explicit_login: true,
  narrowed_scope: false,
  bss_system: 'NETCRACKER',
  auth_age: 18,
  role: 'CONTRACT_HOLDER'
});

/***/ }),

/***/ 78160:
/*!*****************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/raw-login-details.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53672:
/*!******************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/interfaces/raw-logout-details.interface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73628:
/*!***************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/login-module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ 56957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);




class LoginModule {
  static ɵfac = function LoginModule_Factory(t) {
    return new (t || LoginModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: LoginModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    exports: [_components__WEBPACK_IMPORTED_MODULE_2__.LoginComponent]
  });
})();

/***/ }),

/***/ 3941:
/*!****************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/mappers/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginCustomerNameMapper: () => (/* reexport safe */ _login_customer_name_mapper__WEBPACK_IMPORTED_MODULE_0__.LoginCustomerNameMapper),
/* harmony export */   LoginDetailsMapper: () => (/* reexport safe */ _login_details_mapper__WEBPACK_IMPORTED_MODULE_1__.LoginDetailsMapper),
/* harmony export */   LogoutMapper: () => (/* reexport safe */ _logout_mapper__WEBPACK_IMPORTED_MODULE_2__.LogoutMapper)
/* harmony export */ });
/* harmony import */ var _login_customer_name_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-customer-name.mapper */ 93461);
/* harmony import */ var _login_details_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-details.mapper */ 8300);
/* harmony import */ var _logout_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.mapper */ 45680);




/***/ }),

/***/ 93461:
/*!*************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/mappers/login-customer-name.mapper.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginCustomerNameMapper: () => (/* binding */ LoginCustomerNameMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class LoginCustomerNameMapper {
  toModel() {
    return null;
  }
  static ɵfac = function LoginCustomerNameMapper_Factory(t) {
    return new (t || LoginCustomerNameMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LoginCustomerNameMapper,
    factory: LoginCustomerNameMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8300:
/*!*******************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/mappers/login-details.mapper.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetailsMapper: () => (/* binding */ LoginDetailsMapper)
/* harmony export */ });
/* harmony import */ var _models_login_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/login-details.model */ 28802);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class LoginDetailsMapper {
  toModel(rawResponse) {
    if (rawResponse.status && rawResponse.status === 401) {
      return this.getLoginDetails(rawResponse.data, rawResponse.status);
    } else {
      return this.getLoginDetails(rawResponse, 200);
    }
  }
  getLoginDetails(rawResponse, status) {
    const loginDetails = new _models_login_details_model__WEBPACK_IMPORTED_MODULE_0__.LoginDetails(status);
    if (loginDetails.isLoggedIn()) {
      this.createLoginDetails(rawResponse, loginDetails);
    } else {
      this.createStatAndNonce(rawResponse, loginDetails);
    }
    return loginDetails;
  }
  createStatAndNonce(rawResponse, loginDetails) {
    loginDetails.state = rawResponse?.split?.(',')?.[0];
    loginDetails.nonce = rawResponse?.split?.(',')?.[1];
  }
  createLoginDetails(rawResponse, loginDetails) {
    const rawLoginDetails = rawResponse;
    loginDetails.customerNumber = rawLoginDetails.customer_number;
    loginDetails.identityId = rawLoginDetails.identity_id;
    loginDetails.username = rawLoginDetails.username;
    loginDetails.firstName = rawLoginDetails.first_name;
    loginDetails.lastName = rawLoginDetails.last_name;
    loginDetails.narrowedScope = rawLoginDetails.narrowed_scope;
    loginDetails.scopes = this.createScopes(rawLoginDetails.scopes ? rawLoginDetails.scopes : []);
    loginDetails.authAge = rawLoginDetails.auth_age;
    loginDetails.isPid = rawLoginDetails.is_pid;
    loginDetails.bssSystem = rawLoginDetails.bss_system;
    loginDetails.isImpersonated = rawLoginDetails.impersonated;
    loginDetails.role = rawLoginDetails.role;
    loginDetails.isExplicitLogin = rawLoginDetails.explicit_login;
    loginDetails.isTelenetLogin = rawLoginDetails.is_telenet_login;
    loginDetails.isSubLogin = rawLoginDetails.is_sub_login;
    loginDetails.loginAlias = rawLoginDetails.login_alias;
    loginDetails.status = rawLoginDetails.status;
    loginDetails.identityRequestId = rawLoginDetails.identity_request_id;
    loginDetails.pegaServiceCaseId = rawLoginDetails.pega_service_case_id;
    loginDetails.contactNumber = rawLoginDetails.contact_number;
    loginDetails.advisorId = rawLoginDetails.advisorId || '';
  }
  createScopes(rawScopes) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawScopes, this.createScope);
  }
  createScope(rawScope) {
    return rawScope.split(':')[0];
  }
  static ɵfac = function LoginDetailsMapper_Factory(t) {
    return new (t || LoginDetailsMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoginDetailsMapper,
    factory: LoginDetailsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45680:
/*!************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/mappers/logout.mapper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutMapper: () => (/* binding */ LogoutMapper)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 63042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class LogoutMapper {
  toModel(rawLogoutResponse) {
    const logoutDetails = new _models__WEBPACK_IMPORTED_MODULE_0__.LogoutDetails();
    logoutDetails.logout_redirect_uri = rawLogoutResponse.logout_redirect_uri;
    return logoutDetails;
  }
  static ɵfac = function LogoutMapper_Factory(t) {
    return new (t || LogoutMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LogoutMapper,
    factory: LogoutMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 63042:
/*!***************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/models/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetails: () => (/* reexport safe */ _login_details_model__WEBPACK_IMPORTED_MODULE_0__.LoginDetails),
/* harmony export */   LoginDetailsTestfactory: () => (/* reexport safe */ _login_details_testfactory__WEBPACK_IMPORTED_MODULE_1__.LoginDetailsTestfactory),
/* harmony export */   LogoutDetails: () => (/* reexport safe */ _logout_details_model__WEBPACK_IMPORTED_MODULE_2__.LogoutDetails),
/* harmony export */   OcapiCallConfig: () => (/* reexport safe */ _ocapi_call_model__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig)
/* harmony export */ });
/* harmony import */ var _login_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-details.model */ 28802);
/* harmony import */ var _login_details_testfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-details.testfactory */ 79907);
/* harmony import */ var _logout_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout-details.model */ 18095);
/* harmony import */ var _ocapi_call_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocapi-call.model */ 85508);





/***/ }),

/***/ 28802:
/*!*****************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/models/login-details.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetails: () => (/* binding */ LoginDetails)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 5509);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 25987);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 94011);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 6221);


class LoginDetails {
  state;
  nonce;
  status;
  narrowed = false;
  httpStatus;
  scopes;
  bssSystem;
  customerNumber;
  identityId;
  username;
  firstName;
  lastName;
  narrowedScope;
  authAge;
  isPid;
  bssSytem;
  isImpersonated;
  role;
  isExplicitLogin;
  isTelenetLogin;
  isSubLogin;
  loginAlias;
  identityRequestId;
  pegaServiceCaseId;
  contactNumber;
  advisorId;
  msisdn;
  constructor(httpStatus) {
    this.httpStatus = httpStatus;
  }
  isLoggedIn() {
    return this.httpStatus === 200;
  }
  isNarrowed() {
    return this.isLoggedIn() && this.narrowedScope;
  }
  invalidResponse() {
    return this.httpStatus === 0;
  }
  isAuthenticated() {
    return this.isLoggedIn() && !this.isNarrowed() && !this.invalidResponse();
  }
  isMaster() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.MASTER_ROLES, this.role);
  }
  isChild() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.CHILD_ROLES, this.role);
  }
  isMember() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role.toUpperCase().includes(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.MEMBER_ROLE);
  }
  isContractHolder() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role.toUpperCase().includes(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.CONTRACT_HOLDER_ROLE);
  }
  isOrphan() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role.toUpperCase().includes(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.ORPHAN_ROLE);
  }
  isNewlyRegisteredUser() {
    return !!(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.firstName);
  }
  getName() {
    return this.firstName.concat(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.EMPTY).concat(this.lastName);
  }
  getShortenedName() {
    return this.getName().length <= _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.CHARACTER_LIMIT ? this.getName() : this.getName().substring(0, _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.CHARACTER_LIMIT - _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.SUFFIX.length).concat(_constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.SUFFIX);
  }
  isCafeUser() {
    return this.bssSystem === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.BSS_SYSTEM_TELENET_LEGACY;
  }
  isBaseLegacyCustomer() {
    return this.bssSystem === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.BSS_SYSTEM_BASE_LEGACY;
  }
  isBssSystemNetcracker() {
    return this.bssSystem === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.BSS_SYSTEM_NETCRACKER;
  }
  hasScope(scopeName) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this.scopes, function (scope) {
      return scope.toUpperCase() === scopeName.toUpperCase();
    });
  }
  isFleetManager() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.FLEET_MANAGER_ROLE;
  }
  isFleetUser() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.FLEET_USER_ROLE;
  }
  isManager() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && this.role === _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.MANAGER_ROLE;
  }
  hasManagerRole() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(this.role) && _constants__WEBPACK_IMPORTED_MODULE_0__.LoginDetailsConstants.MANAGER_ROLES.includes(this.role);
  }
  enrich(loginDetailsJSON) {
    let enrichedLoginDetails = new LoginDetails(401);
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(loginDetailsJSON)) {
      enrichedLoginDetails = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(enrichedLoginDetails, loginDetailsJSON);
    }
    return enrichedLoginDetails;
  }
  isNotLoggedInOrDoesNotHaveScope(scope) {
    return !this.isLoggedIn() || !this.hasScope(scope);
  }
  get isSuccess() {
    return this.httpStatus === 200;
  }
  // useless setter but needed to avoid 'cannot set property on [object Object] which only has getter
  set isSuccess(success) {
    if (success) {
      this.httpStatus = 200;
    }
  }
}

/***/ }),

/***/ 79907:
/*!***********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/models/login-details.testfactory.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDetailsTestfactory: () => (/* binding */ LoginDetailsTestfactory)
/* harmony export */ });
/* harmony import */ var _login_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-details.model */ 28802);

class LoginDetailsTestfactory {
  static build(properties) {
    const loginDetails = new _login_details_model__WEBPACK_IMPORTED_MODULE_0__.LoginDetails(200);
    loginDetails.customerNumber = '12345';
    loginDetails.state = 'test_state';
    loginDetails.nonce = 'test_nonce';
    loginDetails.status = 'test_status';
    loginDetails.scopes = [];
    loginDetails.bssSystem = 'test_bss_system';
    loginDetails.identityId = '';
    loginDetails.username = 'test_user';
    loginDetails.firstName = 'test_firstname';
    loginDetails.lastName = 'test_lastname';
    loginDetails.narrowed = false;
    loginDetails.authAge = 18;
    loginDetails.isPid = false;
    loginDetails.bssSytem = 'test_bssSytem';
    loginDetails.isImpersonated = false;
    loginDetails.role = '';
    loginDetails.isExplicitLogin = false;
    loginDetails.isTelenetLogin = true;
    loginDetails.isSubLogin = false;
    loginDetails.loginAlias = 'test_login_alias';
    loginDetails.advisorId = 'adminfmc';
    if (properties) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.keys(properties).forEach(key => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        loginDetails[key] = properties[key];
      });
    }
    return loginDetails;
  }
}

/***/ }),

/***/ 18095:
/*!******************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/models/logout-details.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutDetails: () => (/* binding */ LogoutDetails)
/* harmony export */ });
class LogoutDetails {
  logout_redirect_uri;
}

/***/ }),

/***/ 85508:
/*!**************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/models/ocapi-call.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiCallConfig: () => (/* binding */ OcapiCallConfig)
/* harmony export */ });
class OcapiCallConfig {
  messageGroupName;
  endpoint;
  mapper;
  data;
  withCredentials = true;
  withDefaultContentType = true;
  errorHandler;
  httpType;
  customHeaders;
  observeAsResponse;
  responseType;
  useAdaptorEndpoint;
  silentlyHandleError;
  authNeeded = true;
  constructor(messageGroupName, endpoint, mapper, data, customHeaders = {}, observeAsResponse, responseType, useAdaptorEndpoint, silentlyHandleError = false) {
    this.messageGroupName = messageGroupName;
    this.endpoint = endpoint;
    this.mapper = mapper;
    this.data = data;
    this.customHeaders = customHeaders;
    this.observeAsResponse = observeAsResponse;
    this.responseType = responseType;
    this.useAdaptorEndpoint = useAdaptorEndpoint;
    this.silentlyHandleError = silentlyHandleError;
  }
  getEndpoint() {
    return this.useAdaptorEndpoint ? this.endpoint.replace('/public', '-adaptor/public') : this.endpoint;
  }
}

/***/ }),

/***/ 97524:
/*!*********************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/factory/authentication.factory.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticationProviderFactory: () => (/* binding */ authenticationProviderFactory),
/* harmony export */   authenticationServiceFactory: () => (/* binding */ authenticationServiceFactory)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers */ 11061);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 32034);



const extractJwtParameter = urlService => {
  return urlService.getHashParameter('jwt') || urlService.getRequestParamValue('jwt', '');
};
const authenticationProviderFactory = (urlService, configService) => {
  const jwtParameter = extractJwtParameter(urlService);
  if ((configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.AUTH_PROVIDER) === _providers__WEBPACK_IMPORTED_MODULE_1__.OcapiAuthenticationProvider.PROVIDER_TYPE || urlService.getRequestParamValue('loginFlow', '') === 'oktaLogin') && !jwtParameter) {
    return new _providers__WEBPACK_IMPORTED_MODULE_1__.OcapiAuthenticationProvider();
  }
  return new _providers__WEBPACK_IMPORTED_MODULE_1__.OpenidAuthenticationProvider();
};
const authenticationServiceFactory = urlService => {
  const jwtParameter = extractJwtParameter(urlService);
  if (jwtParameter) {
    return new _services__WEBPACK_IMPORTED_MODULE_2__.JWTAuthenticationService();
  } else {
    return new _services__WEBPACK_IMPORTED_MODULE_2__.TransparentAuthenticationService();
  }
};

/***/ }),

/***/ 66878:
/*!****************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/factory/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticationProviderFactory: () => (/* reexport safe */ _authentication_factory__WEBPACK_IMPORTED_MODULE_0__.authenticationProviderFactory),
/* harmony export */   authenticationServiceFactory: () => (/* reexport safe */ _authentication_factory__WEBPACK_IMPORTED_MODULE_0__.authenticationServiceFactory)
/* harmony export */ });
/* harmony import */ var _authentication_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.factory */ 97524);


/***/ }),

/***/ 91367:
/*!********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_PROVIDER: () => (/* reexport safe */ _tokens__WEBPACK_IMPORTED_MODULE_0__.AUTH_PROVIDER),
/* harmony export */   AUTH_SERVICE: () => (/* reexport safe */ _tokens__WEBPACK_IMPORTED_MODULE_0__.AUTH_SERVICE),
/* harmony export */   AuthenticationPrompt: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPrompt)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ 79781);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 30563);



/***/ }),

/***/ 60487:
/*!**************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/models/authentication-service.model.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4077:
/*!***********************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/models/authentication.parameters.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationPrompt: () => (/* binding */ AuthenticationPrompt)
/* harmony export */ });
var AuthenticationPrompt;
(function (AuthenticationPrompt) {
  AuthenticationPrompt["NONE"] = "none";
  AuthenticationPrompt["LOGIN"] = "login";
})(AuthenticationPrompt || (AuthenticationPrompt = {}));

/***/ }),

/***/ 30563:
/*!***************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/models/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationPrompt: () => (/* reexport safe */ _authentication_parameters__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPrompt)
/* harmony export */ });
/* harmony import */ var _authentication_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.parameters */ 4077);
/* harmony import */ var _authentication_service_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.model */ 60487);



/***/ }),

/***/ 78866:
/*!************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/providers/authentication.provider.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationProvider: () => (/* binding */ AuthenticationProvider)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ 12574);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ 6221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);






class AuthenticationProvider {
  configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigService);
  languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LanguageService);
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService);
  httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  ocapiHelper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_utils__WEBPACK_IMPORTED_MODULE_3__.OcapiHelper);
  getParameters(authenticationParameters) {
    const {
      styleHint = _constants__WEBPACK_IMPORTED_MODULE_4__.LoginDetailsConstants.STYLE_HINT,
      prompt
    } = authenticationParameters;
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('lang', this.languageService.getLanguage()).set('style_hint', styleHint);
    if (prompt) {
      httpParams = httpParams.append('prompt', prompt);
    }
    return httpParams;
  }
}

/***/ }),

/***/ 11061:
/*!******************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/providers/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationProvider: () => (/* reexport safe */ _authentication_provider__WEBPACK_IMPORTED_MODULE_0__.AuthenticationProvider),
/* harmony export */   OcapiAuthenticationProvider: () => (/* reexport safe */ _ocapi_authentication_provider__WEBPACK_IMPORTED_MODULE_1__.OcapiAuthenticationProvider),
/* harmony export */   OpenidAuthenticationProvider: () => (/* reexport safe */ _openid_authentication_provider__WEBPACK_IMPORTED_MODULE_2__.OpenidAuthenticationProvider)
/* harmony export */ });
/* harmony import */ var _authentication_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.provider */ 78866);
/* harmony import */ var _ocapi_authentication_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ocapi-authentication.provider */ 54842);
/* harmony import */ var _openid_authentication_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openid-authentication.provider */ 55228);




/***/ }),

/***/ 54842:
/*!******************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/providers/ocapi-authentication.provider.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiAuthenticationProvider: () => (/* binding */ OcapiAuthenticationProvider)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _authentication_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.provider */ 78866);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__);





class OcapiAuthenticationProvider extends _authentication_provider__WEBPACK_IMPORTED_MODULE_2__.AuthenticationProvider {
  static PROVIDER_TYPE = 'ocapi';
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__.LogFactory.createLogger(OcapiAuthenticationProvider);
  constructor() {
    super();
    OcapiAuthenticationProvider.LOG.logDebug('Use OcapiAuthenticationProvider for authentication');
  }
  getType() {
    return OcapiAuthenticationProvider.PROVIDER_TYPE;
  }
  getAuthenticationUrl() {
    const ocapiUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl);
    const clientId = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_CLIENT_ID);
    if (!ocapiUrl || !clientId) {
      OcapiAuthenticationProvider.LOG.logError('OCAPI_URL or OCAPI_CLIENT_ID has no been configured');
      return null;
    }
    return ocapiUrl + '/login/authorization/' + clientId;
  }
  getParameters(authenticationParameters) {
    const {
      referrerUrl
    } = authenticationParameters;
    let httpParams = super.getParameters(authenticationParameters);
    httpParams = httpParams.appendAll({
      targetUrl: (referrerUrl || undefined) ?? this.urlService.getCurrentUrl()
    });
    return httpParams;
  }
  sendAuthCall(params) {
    OcapiAuthenticationProvider.LOG.logDebug(`Sending jsonp request without prompt to ocapi authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`);
    const authUrl = this.getAuthenticationUrl();
    if (!authUrl) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse({
        error: {
          text: 'Authentication url of ocapi provider could not be determined'
        }
      }));
    }
    const url = `${authUrl}?${params.toString()}`;
    return this.httpClient.jsonp(url, 'callback');
  }
}

/***/ }),

/***/ 55228:
/*!*******************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/providers/openid-authentication.provider.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenidAuthenticationProvider: () => (/* binding */ OpenidAuthenticationProvider)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _authentication_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.provider */ 78866);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ 6221);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);






class OpenidAuthenticationProvider extends _authentication_provider__WEBPACK_IMPORTED_MODULE_2__.AuthenticationProvider {
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.LogFactory.createLogger(OpenidAuthenticationProvider);
  static PROVIDER_TYPE = 'openid';
  constructor() {
    super();
    OpenidAuthenticationProvider.LOG.logDebug('Use OpenidAuthenticationProvider for authentication');
  }
  getType() {
    return OpenidAuthenticationProvider.PROVIDER_TYPE;
  }
  getAuthenticationUrl() {
    if (!this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OPENID_AUTH_URL)) {
      OpenidAuthenticationProvider.LOG.logError('OPENID_AUTH_URL has not been configured');
      return null;
    }
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OPENID_AUTH_URL);
  }
  getParameters(authenticationParameters) {
    const {
      referrerUrl,
      state,
      nonce
    } = authenticationParameters;
    let httpParams = super.getParameters(authenticationParameters);
    httpParams = httpParams.appendAll({
      client_id: this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OPENID_CLIENT_ID),
      response_type: _constants__WEBPACK_IMPORTED_MODULE_3__.LoginDetailsConstants.CODE,
      claims: _constants__WEBPACK_IMPORTED_MODULE_3__.LoginDetailsConstants.CLAIMS
    });
    if (state && nonce) {
      httpParams = httpParams.appendAll({
        state,
        nonce
      });
    }
    if (referrerUrl) {
      httpParams = httpParams.append('referrer_url', referrerUrl);
    }
    if (this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OAUTH_CALLBACK_URL)) {
      httpParams = httpParams.append('redirect_uri', this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OAUTH_CALLBACK_URL));
    }
    return httpParams;
  }
  sendAuthCall(params) {
    OpenidAuthenticationProvider.LOG.logDebug(`Sending GET request without prompt to openid authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`);
    const authUrl = this.getAuthenticationUrl();
    if (!authUrl) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse({
        error: {
          text: 'Authentication url of openid provider could not be determined'
        }
      }));
    }
    const url = `${authUrl}?${params.toString()}`;
    const options = {
      withCredentials: true,
      headers: this.ocapiHelper.getHttpHeaders()
    };
    return this.httpClient.get(url, options);
  }
}

/***/ }),

/***/ 27080:
/*!**********************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/services/authentication.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAuthenticationService: () => (/* binding */ AbstractAuthenticationService)
/* harmony export */ });
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-details.service */ 12444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_authentication_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/authentication.state */ 74588);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ 6221);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../enums */ 24385);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 58859);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 21650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tokens */ 79781);










class AbstractAuthenticationService {
  userDetailsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_user_details_service__WEBPACK_IMPORTED_MODULE_0__.UserDetailsService);
  cookieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService);
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService);
  authenticationState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_state_authentication_state__WEBPACK_IMPORTED_MODULE_3__.AuthenticationState);
  authenticationProvider = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_tokens__WEBPACK_IMPORTED_MODULE_6__.AUTH_PROVIDER);
  authenticationStatus;
  constructor() {
    this.getLog().logDebug(`Authenticate on load using service: ${this.constructor.name}`);
  }
  authenticate(authenticationParameters) {
    const authUrl = this.getAuthenticationUrl(authenticationParameters);
    if (authUrl) {
      this.urlService.openWindow(authUrl);
    }
  }
  getRootDomain() {
    return location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
  }
  setAuthenticatedStatus(isAuthenticated) {
    if (!this.cookieService.check(_constants__WEBPACK_IMPORTED_MODULE_4__.LoginDetailsConstants.LOGIN_STATUS_COOKIENAME)) {
      this.cookieService.set(_constants__WEBPACK_IMPORTED_MODULE_4__.LoginDetailsConstants.LOGIN_STATUS_COOKIENAME, isAuthenticated ? _enums__WEBPACK_IMPORTED_MODULE_5__.LoginStatusEnum.LOGGED_IN.toString() : _enums__WEBPACK_IMPORTED_MODULE_5__.LoginStatusEnum.NOT_LOGGED_IN.toString(), {
        path: '/',
        sameSite: 'Lax',
        domain: `.${this.getRootDomain()}`
      });
    }
    this.authenticationState.setAuthenticated(isAuthenticated);
  }
  getAuthenticationUrl(authenticationParameters) {
    const parameters = this.authenticationProvider.getParameters(authenticationParameters);
    const url = this.authenticationProvider.getAuthenticationUrl();
    if (!url) {
      return null;
    }
    return `${url}?${parameters.toString()}`;
  }
  getAuthenticationStatus() {
    if (!this.authenticationStatus) {
      this.authenticationStatus = this.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)({
        bufferSize: 1,
        refCount: false
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(isAuthenticated => this.setAuthenticatedStatus(isAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
        this.getLog().logError(`Failed to retrieve authentication status`, error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(false);
      }));
    }
    return this.authenticationStatus;
  }
}

/***/ }),

/***/ 32034:
/*!*****************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/services/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAuthenticationService: () => (/* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AbstractAuthenticationService),
/* harmony export */   JWTAuthenticationService: () => (/* reexport safe */ _jwt_authentication_service__WEBPACK_IMPORTED_MODULE_1__.JWTAuthenticationService),
/* harmony export */   TransparentAuthenticationService: () => (/* reexport safe */ _transparent_authentication_service__WEBPACK_IMPORTED_MODULE_2__.TransparentAuthenticationService)
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 27080);
/* harmony import */ var _jwt_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt-authentication.service */ 19150);
/* harmony import */ var _transparent_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transparent-authentication.service */ 52914);




/***/ }),

/***/ 19150:
/*!**************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/services/jwt-authentication.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTAuthenticationService: () => (/* binding */ JWTAuthenticationService)
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 27080);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__);




class JWTAuthenticationService extends _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AbstractAuthenticationService {
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_1__.LogFactory.createLogger(JWTAuthenticationService);
  constructor() {
    super();
  }
  isAuthenticated() {
    return this.userDetailsService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(loginDetails => {
      const isLoggedIn = loginDetails.isLoggedIn();
      JWTAuthenticationService.LOG.logDebug(`Authentication: ${loginDetails}`);
      return isLoggedIn;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(_e => {
      JWTAuthenticationService.LOG.logDebug(`Authentication: false}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
    }));
  }
  getLog() {
    return JWTAuthenticationService.LOG;
  }
}

/***/ }),

/***/ 52914:
/*!**********************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/services/transparent-authentication.service.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransparentAuthenticationService: () => (/* binding */ TransparentAuthenticationService)
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 27080);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 39877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ 30563);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers */ 11061);








class TransparentAuthenticationService extends _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AbstractAuthenticationService {
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.LogFactory.createLogger(TransparentAuthenticationService);
  httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  constructor() {
    super();
  }
  isAuthenticated() {
    return this.userDetailsService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(loginDetails => {
      if (loginDetails.isLoggedIn()) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(loginDetails.isLoggedIn());
      }
      return this.attemptAuthenticate(loginDetails.state, loginDetails.nonce).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => {
        this.userDetailsService.reset();
        return this.userDetailsService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(loginDetails => loginDetails.isLoggedIn()));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
        this.getLog().logError('Failed to authenticate', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
      }));
    }));
  }
  getLog() {
    return TransparentAuthenticationService.LOG;
  }
  attemptAuthenticate(state, nonce) {
    let params = this.authenticationProvider.getParameters({
      prompt: _models__WEBPACK_IMPORTED_MODULE_3__.AuthenticationPrompt.NONE
    });
    if (state && nonce) {
      params = params.append('state', state).append('nonce', nonce);
    }
    this.getLog().logDebug(`Trying authenticate with provider ${this.authenticationProvider.getType()}`);
    if (!this.authenticationProvider.getAuthenticationUrl()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('Authentication url is not defined, not trying to authenticate'));
    }
    return this.authenticationProvider.sendAuthCall(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      if (error?.error?.text?.includes('callback')) {
        TransparentAuthenticationService.LOG.logDebug(`Error during attempt to authenticate, with callback: ${error.error.text}`);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
          data: error.error.text
        });
      } else {
        TransparentAuthenticationService.LOG.logDebug(`Error during attempt to authenticate, rethrowing: ${error?.error?.text}`);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
          data: error.error.text
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)(res => {
      TransparentAuthenticationService.LOG.logDebug(`Executing callback: ${res.data}`);
      if (this.authenticationProvider.getType() === _providers__WEBPACK_IMPORTED_MODULE_5__.OcapiAuthenticationProvider.PROVIDER_TYPE) {
        // For ocapi we don't want to manually get a callback, this already happened via jsonp
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(undefined);
      }
      return this.httpClient.get(res.data, this.getCallBackOptions());
    }));
  }
  getCallBackOptions() {
    return {
      withCredentials: true,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'text/plain',
        'Content-Type': 'text/plain;charset=UTF-8'
      }),
      responseType: 'text'
    };
  }
}

/***/ }),

/***/ 74588:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/state/authentication.state.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationState: () => (/* binding */ AuthenticationState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens */ 79781);





class AuthenticationState {
  injector;
  authenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  isStatusKnown = false;
  constructor(injector) {
    this.injector = injector;
  }
  setAuthenticated(authenticated) {
    this.authenticatedSubject.next(authenticated);
    this.isStatusKnown = true;
  }
  getAuthenticated() {
    if (!this.isStatusKnown) {
      const authenticationService = this.injector.get(_tokens__WEBPACK_IMPORTED_MODULE_1__.AUTH_SERVICE);
      return authenticationService.getAuthenticationStatus();
    }
    return this.authenticatedSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }
  static ɵfac = function AuthenticationState_Factory(t) {
    return new (t || AuthenticationState)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthenticationState,
    factory: AuthenticationState.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16644:
/*!***************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/tokens/authentication-provider.token.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_PROVIDER: () => (/* binding */ AUTH_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory */ 66878);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__);




const AUTH_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('AuthProvider', {
  providedIn: 'root',
  factory: () => {
    const urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService);
    const configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService);
    return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.authenticationProviderFactory)(urlService, configService);
  }
});

/***/ }),

/***/ 18992:
/*!**************************************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/tokens/authentication-service.token.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_SERVICE: () => (/* binding */ AUTH_SERVICE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ 66878);



const AUTH_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('AuthService', {
  providedIn: 'root',
  factory: () => {
    const urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService);
    return (0,_factory__WEBPACK_IMPORTED_MODULE_2__.authenticationServiceFactory)(urlService);
  }
});

/***/ }),

/***/ 79781:
/*!***************************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/authentication/tokens/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_PROVIDER: () => (/* reexport safe */ _authentication_provider_token__WEBPACK_IMPORTED_MODULE_1__.AUTH_PROVIDER),
/* harmony export */   AUTH_SERVICE: () => (/* reexport safe */ _authentication_service_token__WEBPACK_IMPORTED_MODULE_0__.AUTH_SERVICE)
/* harmony export */ });
/* harmony import */ var _authentication_service_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-service.token */ 18992);
/* harmony import */ var _authentication_provider_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-provider.token */ 16644);



/***/ }),

/***/ 31141:
/*!*******************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/cache/cache.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 21650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class CacheService {
  cache = {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  add(key, response$) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.cache[key] = response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)({
      bufferSize: 1
    }));
  }
  get(key) {
    return this.cache[key];
  }
  remove(key) {
    delete this.cache[key];
  }
  static ɵfac = function CacheService_Factory(t) {
    return new (t || CacheService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CacheService,
    factory: CacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3605:
/*!********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/error-report.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorReportService: () => (/* binding */ ErrorReportService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class ErrorReportService {
  dataLayerService;
  urlService;
  constructor(dataLayerService, urlService) {
    this.dataLayerService = dataLayerService;
    this.urlService = urlService;
  }
  sendErrorEventToAnalytics(ocapiCall, errorResponse, errorCode) {
    const eventInfo = this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventNameEnum.EVENT_NAME_ERROR_OCCURRED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.EVENT_TYPE_ERROR);
    eventInfo.setEventStatus(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventStatusEnum.EVENT_STATUS_FAILED);
    let errorMessage = errorCode;
    if (errorResponse && errorResponse['errorDetails'] && errorResponse['errorDetails'].length) {
      errorMessage = errorMessage + '|' + errorResponse['errorDetails'][0].errorDetailCode + '|' + errorResponse['errorDetails'][0].message;
    }
    if (errorMessage) {
      eventInfo.setEventStatusMessage(errorMessage);
    }
    const attributes = {
      itemName: ocapiCall.messageGroupName,
      itemData: ocapiCall.httpType + ' ' + ocapiCall.endpoint,
      itemGroup: errorResponse ? errorResponse['cause'] : '',
      itemIdentifier: errorResponse ? errorResponse['correlationId'] : ''
    };
    const flow = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.QueryParamEnum.FLOW, '');
    const sData = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.QueryParamEnum.SDATA, '');
    const sId = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.QueryParamEnum.SALES_ORDER_ID, '');
    if (!flow || !sData && !sId) {
      this.dataLayerService.sendEvent({
        eventInfo,
        attributes
      });
    }
  }
  static ɵfac = function ErrorReportService_Factory(t) {
    return new (t || ErrorReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ErrorReportService,
    factory: ErrorReportService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8419:
/*!*****************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_PROVIDER: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_4__.AUTH_PROVIDER),
/* harmony export */   AUTH_SERVICE: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_4__.AUTH_SERVICE),
/* harmony export */   AuthenticationPrompt: () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_4__.AuthenticationPrompt),
/* harmony export */   CacheService: () => (/* reexport safe */ _cache_cache_service__WEBPACK_IMPORTED_MODULE_3__.CacheService),
/* harmony export */   LoginService: () => (/* reexport safe */ _login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService),
/* harmony export */   OcapiService: () => (/* reexport safe */ _ocapi_service__WEBPACK_IMPORTED_MODULE_2__.OcapiService),
/* harmony export */   OcapiSocketService: () => (/* reexport safe */ _ocapi_socket_service__WEBPACK_IMPORTED_MODULE_1__.OcapiSocketService),
/* harmony export */   UserDetailsService: () => (/* reexport safe */ _user_details_service__WEBPACK_IMPORTED_MODULE_5__.UserDetailsService)
/* harmony export */ });
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 7878);
/* harmony import */ var _ocapi_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ocapi-socket.service */ 72281);
/* harmony import */ var _ocapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ocapi.service */ 40784);
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache/cache.service */ 31141);
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication */ 91367);
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details.service */ 12444);







/***/ }),

/***/ 7878:
/*!*************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/login.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mappers */ 3941);
/* harmony import */ var _ocapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ocapi.service */ 40784);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ 63042);
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.service */ 12444);
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication */ 91367);
















class LoginService {
  _ngZone;
  window;
  authenticationService;
  ocapiService;
  urlService;
  messageService;
  loginCustomerNameMapper;
  logoutMapper;
  userDetailsService;
  constructor(_ngZone, window, authenticationService, ocapiService, urlService, messageService, loginCustomerNameMapper, logoutMapper, userDetailsService) {
    this._ngZone = _ngZone;
    this.window = window;
    this.authenticationService = authenticationService;
    this.ocapiService = ocapiService;
    this.urlService = urlService;
    this.messageService = messageService;
    this.loginCustomerNameMapper = loginCustomerNameMapper;
    this.logoutMapper = logoutMapper;
    this.userDetailsService = userDetailsService;
  }
  /**
   * @deprecated This function is deprecated, please use getUserDetails from UserDetailsService instead.
   */
  getLoginDetails(withCredentials = true, referrerUrl, _isRoleRequired = true) {
    return this.userDetailsService.getUserDetails({
      withCredentials,
      referrerUrl
    });
  }
  login(referrerUrl, styleHint) {
    this.getStateAndNonce(referrerUrl).subscribe(loginDetails => {
      const authParameters = {
        state: loginDetails.state,
        nonce: loginDetails.nonce,
        referrerUrl,
        styleHint
      };
      this.authenticationService.authenticate(authParameters);
    });
  }
  loginWithPrompt(referrerUrl, styleHint) {
    this.getStateAndNonce(referrerUrl).subscribe(loginDetails => {
      const authParameters = {
        state: loginDetails.state,
        nonce: loginDetails.nonce,
        referrerUrl,
        styleHint,
        prompt: _authentication__WEBPACK_IMPORTED_MODULE_7__.AuthenticationPrompt.LOGIN
      };
      this.authenticationService.authenticate(authParameters);
    });
  }
  logout(messageGroupName, logoutPath) {
    const endpoint = '/logout?targetUrl=' + encodeURIComponent(this.getLogoutRedirectUrl(logoutPath));
    const ocapiConfig = new _models__WEBPACK_IMPORTED_MODULE_5__.OcapiCallConfig(messageGroupName, endpoint, this.logoutMapper, {});
    ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
    return this.ocapiService.doGet(ocapiConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
      this.authenticationService.setAuthenticatedStatus(false);
      if (response && response.logout_redirect_uri) {
        this.urlService.redirectTo(response.logout_redirect_uri);
        return {};
      }
      return response;
    }));
  }
  getLogoutRedirectUrl(logoutPath) {
    let logoutRedirectUrl = this.urlService.getCurrentUrl();
    if (logoutPath) {
      logoutRedirectUrl = logoutPath.startsWith('https://') ? logoutPath : location.protocol + '//' + location.host + logoutPath;
    }
    return this.urlService.removeParametersFromUrl(logoutRedirectUrl, 'jwt');
  }
  getStateAndNonce(refererUrl) {
    return this.userDetailsService.getUserDetails({
      withCredentials: false,
      referrerUrl: refererUrl
    });
  }
  loginWithCustomerNumber(messageGroupName, _customerNumber, key, value, mobileNumber) {
    const endpoint = '/oauth/login?' + key + '=' + value + '&mobilenumber=' + mobileNumber;
    const ocapiConfig = new _models__WEBPACK_IMPORTED_MODULE_5__.OcapiCallConfig(messageGroupName, endpoint, this.loginCustomerNameMapper, {});
    ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
    return this.ocapiService.doPost(ocapiConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => {
      this.authenticationService.setAuthenticatedStatus(true);
      this.userDetailsService.reset();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => response));
  }
  handleErrorResponse(error, ocapiCall) {
    if (error.status === 401) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        data: error.error,
        status: error.status
      });
    } else if (error.status === 400 && error.error && error.error.code) {
      const errorCode = error.status.toString().concat('-').concat(error.error.code);
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode));
    } else {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName);
  }
  getAuthenticationStatus() {
    return this.authenticationService.getAuthenticationStatus();
  }
  static ɵfac = function LoginService_Factory(t) {
    return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication__WEBPACK_IMPORTED_MODULE_7__.AUTH_SERVICE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ocapi_service__WEBPACK_IMPORTED_MODULE_4__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mappers__WEBPACK_IMPORTED_MODULE_3__.LoginCustomerNameMapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mappers__WEBPACK_IMPORTED_MODULE_3__.LogoutMapper), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_details_service__WEBPACK_IMPORTED_MODULE_6__.UserDetailsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LoginService,
    factory: LoginService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72281:
/*!********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/ocapi-socket.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiSocketService: () => (/* binding */ OcapiSocketService)
/* harmony export */ });
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ 22988);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/rx-stomp */ 99979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class OcapiSocketService {
  configService;
  baseUrl;
  isAnonymous = false;
  TOPIC_PREFIX;
  ANONYMOUS_TOPIC_PREFIX;
  stompClient;
  isInitialised;
  constructor(configService) {
    this.configService = configService;
    this.TOPIC_PREFIX = '/user/topic/';
    this.ANONYMOUS_TOPIC_PREFIX = '/topic/action/';
    this.baseUrl = configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.OCAPI_URl) + '/notify/';
    this.isInitialised = false;
  }
  init() {
    this.initializeWebSocketConnection();
    this.isInitialised = true;
  }
  setAnonymous(anonymous) {
    this.isAnonymous = anonymous;
  }
  getTopicPrefix() {
    return this.isAnonymous ? this.ANONYMOUS_TOPIC_PREFIX : this.TOPIC_PREFIX;
  }
  initializeWebSocketConnection() {
    this.stompClient = new _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__.RxStomp();
    const stompConfig = {
      webSocketFactory: () => {
        return new (sockjs_client__WEBPACK_IMPORTED_MODULE_0___default())(this.baseUrl);
      }
    };
    this.stompClient.configure(stompConfig);
    this.stompClient.activate();
  }
  watchStompClientOnTopic(topic) {
    if (!this.isInitialised) {
      this.init();
    }
    return this.stompClient.watch(this.getTopicPrefix() + topic);
  }
  static ɵfac = function OcapiSocketService_Factory(t) {
    return new (t || OcapiSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OcapiSocketService,
    factory: OcapiSocketService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 40784:
/*!*************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/ocapi.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiService: () => (/* binding */ OcapiService)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash-es */ 40913);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 72607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 39877);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 12574);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums */ 24385);
/* harmony import */ var _telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-omapi-query */ 94761);
/* harmony import */ var _telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ 6221);
/* harmony import */ var _authentication_state_authentication_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/state/authentication.state */ 74588);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _error_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-report.service */ 3605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);
// @ts-nocheck



























class OcapiService {
  http;
  configService;
  messageService;
  omapiProductService;
  omapiQueryProductService;
  ocapiHelper;
  dataLayerService;
  urlService;
  authenticationState;
  errorReportService;
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_11__.LogFactory.createLogger(OcapiService);
  constructor(http, configService, messageService, omapiProductService, omapiQueryProductService, ocapiHelper, dataLayerService, urlService, authenticationState, errorReportService) {
    this.http = http;
    this.configService = configService;
    this.messageService = messageService;
    this.omapiProductService = omapiProductService;
    this.omapiQueryProductService = omapiQueryProductService;
    this.ocapiHelper = ocapiHelper;
    this.dataLayerService = dataLayerService;
    this.urlService = urlService;
    this.authenticationState = authenticationState;
    this.errorReportService = errorReportService;
  }
  doGet(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.GET, ocapiCallConfig);
  }
  doPost(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.POST, ocapiCallConfig);
  }
  doPut(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.PUT, ocapiCallConfig);
  }
  doRestHead(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.HEAD, ocapiCallConfig);
  }
  doPatch(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.PATCH, ocapiCallConfig);
  }
  doDelete(ocapiCallConfig) {
    return this.doResolve(_enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.DELETE, ocapiCallConfig);
  }
  doResolve(httpType, ocapiCallConfig) {
    ocapiCallConfig.httpType = httpType;
    try {
      return this.doRequest(ocapiCallConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(ocapiResponse => {
        return this.ocapiResponseEnrichedWithOmapiData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse, ocapiCallConfig.silentlyHandleError);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(ocapiResponse => {
        return this.ocapiResponseEnrichedWithOmapiQueryData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(ocapiResponseEnrichedWithOmapiData => {
        return ocapiCallConfig.mapper?.toModel(ocapiResponseEnrichedWithOmapiData) || ocapiResponseEnrichedWithOmapiData;
      }));
    } catch (e) {
      this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCallConfig.messageGroupName, 'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)));
    }
  }
  ocapiResponseEnrichedWithOmapiQueryData$(messageGroup, ocapiResponse, isResponseObservable) {
    const queryUrls = this.recursiveUrls(ocapiResponse, _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.QUERY_URL);
    let responseBody = ocapiResponse;
    if (isResponseObservable) {
      responseBody = ocapiResponse['body'];
    }
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(queryUrls)) {
      return this.omapiQueryProductService.rawQueryProductsFromEndpoints$(messageGroup, queryUrls).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(omapiQueryResponses => {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__["default"])(omapiQueryResponses, omapiQueryResponse => this.recursiveAddDataToOcapiResponse(responseBody, omapiQueryResponse, _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.QUERY_URL));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => {
        return ocapiResponse;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(ocapiResponse);
    }
  }
  ocapiResponseEnrichedWithOmapiData$(messageGroup, ocapiResponse, isResponseObservable, silentlyHandleError) {
    const specUrls = this.recursiveUrls(ocapiResponse, _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.SPEC_URL);
    let responseBody = ocapiResponse;
    if (isResponseObservable) {
      responseBody = ocapiResponse['body'];
    }
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(specUrls)) {
      return this.omapiProductService.rawProductsFromEndpoints$(messageGroup, specUrls, silentlyHandleError).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(omapiResponses => {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__["default"])(omapiResponses, omapiResponse => this.recursiveAddDataToOcapiResponse(responseBody, omapiResponse, _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.SPEC_URL));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => {
        return ocapiResponse;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(ocapiResponse);
    }
  }
  doRequest(ocapiCall) {
    const options = this.ocapiHelper.getHttpOptions(ocapiCall);
    switch (ocapiCall.httpType) {
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.GET:
        {
          const request$ = this.http.get(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.getEndpoint(), options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => this.handleError(error, ocapiCall)));
          if (ocapiCall.authNeeded) {
            OcapiService.LOG.logDebug(`Auth is needed for request: ${ocapiCall.getEndpoint()}`);
            return this.authenticationState.getAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.concatMap)(() => {
              return request$;
            }));
          }
          OcapiService.LOG.logDebug(`Auth is not needed for request: ${ocapiCall.getEndpoint()}`);
          return request$;
        }
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.POST:
        return this.http.post(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => this.handleError(error, ocapiCall)));
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.PUT:
        return this.http.put(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => this.handleError(error, ocapiCall)));
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.PATCH:
        return this.http.patch(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => this.handleError(error, ocapiCall)));
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.HEAD:
        return this.http.head(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => this.handleError(error, ocapiCall)));
      case _enums__WEBPACK_IMPORTED_MODULE_7__.HttpTypesEnum.DELETE:
        return this.http.delete(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => {
          return this.handleError(error, ocapiCall);
        }));
    }
  }
  recursiveAddDataToOcapiResponse(data, omapiorOmapiQueryResponse, type) {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.SPEC_URL && type === _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.SPEC_URL) {
          this.isSpecUrl(value, data, omapiorOmapiQueryResponse);
        } else if (key === _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.QUERY_URL && type === _constants__WEBPACK_IMPORTED_MODULE_9__.SalesConstants.QUERY_URL) {
          this.isQueryUrl(value, data, omapiorOmapiQueryResponse);
        }
        if (typeof value === 'object') {
          this.recursiveAddDataToOcapiResponse(value, omapiorOmapiQueryResponse, type);
        }
      });
    }
    return data;
  }
  isQueryUrl(value, data, omapiorOmapiQueryResponse) {
    const itemCodeFromQueryUrl = this.urlService.getParamsValueFromUrl(value.toString(), 'itemcodes');
    const itemCodeFromOmapiQuery = this.getProductIdFromOmapiResponse(omapiorOmapiQueryResponse, itemCodeFromQueryUrl);
    if ((itemCodeFromQueryUrl && itemCodeFromQueryUrl.toString()) === (itemCodeFromOmapiQuery && itemCodeFromOmapiQuery.toString()) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(omapiorOmapiQueryResponse.products)) {
      data['rawOmapiQuery'] = omapiorOmapiQueryResponse;
    }
  }
  isSpecUrl(value, data, omapiorOmapiQueryResponse) {
    const epcFromSpecUrl = value.toString() && value.toString().split('/').pop();
    const epcFromOmapi = omapiorOmapiQueryResponse.product && omapiorOmapiQueryResponse.product.productid;
    if ((epcFromSpecUrl && epcFromSpecUrl.toString()) === (epcFromOmapi && epcFromOmapi.toString())) {
      data['rawOmapi'] = omapiorOmapiQueryResponse;
    }
  }
  getProductIdFromOmapiResponse(omapiQueryResponse, itemCode) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(omapiQueryResponse.products) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(omapiQueryResponse.products[0].variants)) {
      const filteredVariant = omapiQueryResponse.products[0].variants.find(varaint => {
        return varaint.productId === itemCode;
      });
      return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(filteredVariant) ? filteredVariant.productId : '';
    } else {
      return '';
    }
  }
  recursiveUrls(data, type, urls = []) {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === type && value !== null) {
          urls.push(value.toString());
        }
        if (value !== null && typeof value === 'object') {
          this.recursiveUrls(value, type, urls);
        }
      });
    }
    return urls;
  }
  handleError(error, ocapiCall) {
    if (ocapiCall.errorHandler !== undefined) {
      this.sendErrorEventToAnalyticsForCustomError(error, ocapiCall);
      return ocapiCall.errorHandler(error, ocapiCall);
    }
    let errorCode = 'ocapi.'.concat(error.status.toString());
    switch (error.status) {
      case 401:
        break;
      case 400:
      case 500:
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCall.messageGroupName, errorCode));
        this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        break;
      default:
        errorCode = this.getDetailedErrorCode(error, errorCode);
        if (errorCode !== 'ocapi.422-OCAPI-ERR-ODSO156') {
          this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCall.messageGroupName, errorCode));
        }
        this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        break;
    }
    const errorDetails = 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode;
    const throwErrorDetails = errorCode && errorCode.includes('VM000061') ? errorDetails + ' | ' + error.error.cause : errorDetails;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.throwError)(() => throwErrorDetails);
  }
  sendErrorEventToAnalyticsForCustomError(error, ocapiCall) {
    if (error && error.status !== 401) {
      let errorCode = 'ocapi.'.concat(error.status.toString());
      errorCode = this.getDetailedErrorCode(error, errorCode);
      this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
    }
  }
  getDetailedErrorCode(error, errorCode) {
    if (error.error && error.error.code) {
      return errorCode.concat('-').concat(error.error.code);
    }
    return errorCode;
  }
  static ɵfac = function OcapiService_Factory(t) {
    return new (t || OcapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_3__.OmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_8__.OmapiQueryProductService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_utils__WEBPACK_IMPORTED_MODULE_6__.OcapiHelper), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_authentication_state_authentication_state__WEBPACK_IMPORTED_MODULE_10__.AuthenticationState), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_error_report_service__WEBPACK_IMPORTED_MODULE_12__.ErrorReportService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: OcapiService,
    factory: OcapiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12444:
/*!********************************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/services/user-details.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDetailsService: () => (/* binding */ UserDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 21650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 17474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ 63042);
/* harmony import */ var _mappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mappers */ 3941);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ 12574);
/* harmony import */ var _error_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-report.service */ 3605);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_9__);













class UserDetailsService {
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_9__.LogFactory.createLogger(UserDetailsService);
  endpoint = '/oauth/userdetails';
  cache = new Map();
  loginDetailsMapper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_mappers__WEBPACK_IMPORTED_MODULE_4__.LoginDetailsMapper);
  messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService);
  ocapiHelper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_utils__WEBPACK_IMPORTED_MODULE_6__.OcapiHelper);
  configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_5__.ConfigService);
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  errorReportService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_error_report_service__WEBPACK_IMPORTED_MODULE_7__.ErrorReportService);
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlService);
  reset() {
    this.cache.clear();
  }
  getUserDetails(options = {}) {
    const {
      withCredentials = true,
      referrerUrl,
      jwtToken
    } = options;
    let endpointWithParameters = this.endpoint;
    const jwt = jwtToken ? jwtToken : this.extractJwtFromUrl();
    if (jwt) {
      endpointWithParameters = `${endpointWithParameters}?jwt=${jwt}`;
    }
    const ocapiConfig = new _models__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig('', endpointWithParameters, this.loginDetailsMapper);
    ocapiConfig.withCredentials = withCredentials;
    ocapiConfig.authNeeded = false;
    if (referrerUrl && referrerUrl.length > 0) {
      ocapiConfig.customHeaders = {
        ...(ocapiConfig.customHeaders || {}),
        'x-alt-referer': referrerUrl
      };
    }
    return this.getUserDetailsForConfig(ocapiConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)({
      bufferSize: 1,
      refCount: false
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
      if (error.status !== 401) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(() => error);
      }
      const {
        status,
        error: errorMessage
      } = error;
      const [state, nonce] = String(errorMessage).split(',');
      const loginDetails = new _models__WEBPACK_IMPORTED_MODULE_3__.LoginDetails(status);
      loginDetails.state = state;
      loginDetails.nonce = nonce;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(loginDetails);
    }));
  }
  extractJwtFromUrl() {
    const jwtToken = this.urlService.getRequestParamValue(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.QueryParamEnum.JWT_TOKEN, '');
    return jwtToken ? jwtToken : this.urlService.getHashParameter(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.QueryParamEnum.JWT_TOKEN);
  }
  createHashKey(ocapiCall) {
    const {
      errorHandler: _,
      endpoint: __,
      ...otherProps
    } = ocapiCall;
    return btoa(JSON.stringify(otherProps));
  }
  hasJwtParameter(endpoint) {
    return !!endpoint && endpoint.includes('jwt');
  }
  getUserDetailsForConfig(config) {
    const cacheKey = this.createHashKey(config);
    if (!this.hasJwtParameter(config.endpoint) && this.cache.has(cacheKey)) {
      const replaySubject$ = this.cache.get(cacheKey);
      if (replaySubject$) {
        return replaySubject$.asObservable();
      }
    }
    return this.getCacheableUserDetailsObservable(cacheKey, config);
  }
  getCacheableUserDetailsObservable(cacheKey, config) {
    const freshReplaySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.ReplaySubject(1);
    this.cache.set(cacheKey, freshReplaySubject$);
    this.doResolve(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
      freshReplaySubject$.complete();
    })).subscribe({
      next: loginDetails => {
        if (loginDetails instanceof _models__WEBPACK_IMPORTED_MODULE_3__.LoginDetails) {
          freshReplaySubject$.next(loginDetails);
        }
      },
      error: error => freshReplaySubject$.error(error)
    });
    return freshReplaySubject$.asObservable();
  }
  handleError(ocapiCallConfig) {
    return error => {
      if (error.status !== 401) {
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCallConfig.messageGroupName, 'ocapi.' + error.status));
        UserDetailsService.LOG.logDebug(`An error occurred while trying to fetch ${ocapiCallConfig.messageGroupName}`, error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(() => 'An error occured while trying to fetch ' + ocapiCallConfig.messageGroupName);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(() => error);
    };
  }
  doResolve(ocapiCallConfig) {
    try {
      const options = this.getHttpOptions(ocapiCallConfig);
      return this.http.get(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_5__.ConfigConstants.OCAPI_URl) + ocapiCallConfig.getEndpoint(), options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(ocapiResponse => {
        return ocapiCallConfig.mapper?.toModel(ocapiResponse) || ocapiResponse;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError(ocapiCallConfig)));
    } catch (e) {
      this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(ocapiCallConfig.messageGroupName, 'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(() => new Error('An error occured while trying to fetch ' + ocapiCallConfig.endpoint));
    }
  }
  getHttpOptions(ocapiConfig) {
    const httpOptions = {
      withCredentials: ocapiConfig.withCredentials,
      headers: this.ocapiHelper.getHttpHeaders(ocapiConfig),
      responseType: 'json'
    };
    return httpOptions;
  }
  static ɵfac = function UserDetailsService_Factory(t) {
    return new (t || UserDetailsService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserDetailsService,
    factory: UserDetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12574:
/*!**************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/utils/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiHelper: () => (/* reexport safe */ _ocapi_helper__WEBPACK_IMPORTED_MODULE_0__.OcapiHelper)
/* harmony export */ });
/* harmony import */ var _ocapi_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ocapi.helper */ 51487);


/***/ }),

/***/ 51487:
/*!*********************************************************!*\
  !*** ./libs/shared/ocapi/src/lib/utils/ocapi.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcapiHelper: () => (/* binding */ OcapiHelper)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 58859);









class OcapiHelper {
  urlService;
  cookieService;
  configService;
  constructor(urlService, cookieService, configService) {
    this.urlService = urlService;
    this.cookieService = cookieService;
    this.configService = configService;
  }
  getHttpHeaders(ocapiConfig) {
    return this.createHttpHeaders(ocapiConfig);
  }
  createHttpHeaders(ocapiConfig) {
    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    const accessToken = sessionStorage.getItem('TOKEN-ACCESS');
    httpHeaders = httpHeaders.set('x-alt-referer', this.urlService.getCurrentUrl());
    httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
    if (ocapiConfig?.withDefaultContentType) {
      httpHeaders = httpHeaders.set('Content-Type', 'application/json;charset=UTF-8');
    }
    if (accessToken) {
      httpHeaders = httpHeaders.set('Authorization', this.getAccessToken(accessToken));
    } else {
      const TOKEN_XSRF = this.cookieService.get('TOKEN-XSRF');
      if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(TOKEN_XSRF)) {
        httpHeaders = httpHeaders.set('X-TOKEN-XSRF', TOKEN_XSRF);
      }
    }
    if (ocapiConfig && ocapiConfig.customHeaders) {
      for (const [key, value] of Object.entries(ocapiConfig.customHeaders)) {
        httpHeaders = httpHeaders.set(key, value);
      }
    }
    const oauthClientId = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants.OPENID_CLIENT_ID);
    if (oauthClientId === 'fleet_portal' || oauthClientId === 'tip_portal') {
      httpHeaders = httpHeaders.set('X-Client-Id', oauthClientId);
    }
    return httpHeaders;
  }
  getHttpOptions(ocapiConfig) {
    const httpOptions = {
      withCredentials: ocapiConfig.withCredentials,
      headers: this.getHttpHeaders(ocapiConfig)
    };
    if (ocapiConfig.observeAsResponse) {
      httpOptions.observe = 'response';
    }
    if (ocapiConfig.responseType) {
      httpOptions.responseType = ocapiConfig.responseType;
    }
    return httpOptions;
  }
  getAccessToken(accessToken) {
    return `Bearer ${accessToken}`;
  }
  static ɵfac = function OcapiHelper_Factory(t) {
    return new (t || OcapiHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: OcapiHelper,
    factory: OcapiHelper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99199:
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependenices
 */
const clone = __webpack_require__(/*! shallow-clone */ 92751);
const typeOf = __webpack_require__(/*! kind-of */ 46030);
const isPlainObject = __webpack_require__(/*! is-plain-object */ 87680);
function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default:
      {
        return clone(val);
      }
  }
}
function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

/***/ }),

/***/ 82015:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/async.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryFromSync = exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.TransformFactory = exports.Factory = exports.Derived = exports.Generator = exports.lift = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const Sync = __webpack_require__(/*! ./sync */ 77109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
function isPromise(t) {
  return !!t && typeof t["then"] === "function";
}
function lift(t) {
  if (isPromise(t)) {
    return t;
  } else {
    return Promise.resolve(t);
  }
}
exports.lift = lift;
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return lift(this.func(seq));
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    return lift(this.func(owner, seq));
  }
}
exports.Derived = Derived;
class Factory {
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      return this.buildInner(null, item);
    });
    this.buildInner = (buildKeys, item) => __awaiter(this, void 0, void 0, function* () {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = yield buildBase(seqNum, this.builder);
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = yield der.derived.build(v, seqNum);
      }
      return lift(v);
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const ts = Array(count); // allocate to correct size
      // don't run in parallel, so that seq num works predictably
      for (let i = 0; i < count; i++) {
        ts[i] = yield this.build(item);
      }
      return ts;
    });
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = Object.assign({}, this.builder, def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = Object.assign({}, this.builder, other.builder);
    return new Factory(builder, this.config);
  }
  transform(fn) {
    return new TransformFactory(this, fn);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => __awaiter(this, void 0, void 0, function* () {
      delete v2[kOut];
      const origValue = (yield this.buildInner([kOut], v2))[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    }));
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
class TransformFactory {
  constructor(inner, transform) {
    this.inner = inner;
    this.transform = transform;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      const v = yield this.inner.build(item);
      const u = yield lift(this.transform(v));
      return u;
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const vs = yield this.inner.buildList(count, item);
      return Promise.all(vs.map(this.transform).map(lift));
    });
  }
}
exports.TransformFactory = TransformFactory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvedBuilder = yield lift(builder);
    const t = {};
    const keys = Object.getOwnPropertyNames(resolvedBuilder);
    const derived = [];
    for (const key of keys) {
      const v = resolvedBuilder[key];
      let value = v;
      if (!!v && typeof v === "object") {
        if (isPromise(v)) {
          value = yield v;
        } else if (v.constructor === Generator) {
          value = yield v.build(seqNum);
        } else if (v.constructor == Derived) {
          derived.push({
            key,
            derived: v
          });
        } else if (v.constructor === Sync.Generator) {
          value = v.build(seqNum);
        } else if (v.constructor == Sync.Derived) {
          derived.push({
            key,
            derived: new Derived(v.func)
          });
        } else {
          value = cloneDeep(v);
        }
      }
      t[key] = value;
    }
    return {
      value: t,
      derived
    };
  });
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;
function makeFactoryFromSync(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryFromSync = makeFactoryFromSync;

/***/ }),

/***/ 46032:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = exports.Pipeline = exports.Sync = exports.Async = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
exports.Async = Async;
const Sync = __webpack_require__(/*! ./sync */ 77109);
exports.Sync = Sync;
const Pipeline = __webpack_require__(/*! ./pipeline */ 8983);
exports.Pipeline = Pipeline;
// for now, for backwards compat
var sync_1 = __webpack_require__(/*! ./sync */ 77109);
Object.defineProperty(exports, "Generator", ({
  enumerable: true,
  get: function () {
    return sync_1.Generator;
  }
}));
Object.defineProperty(exports, "Derived", ({
  enumerable: true,
  get: function () {
    return sync_1.Derived;
  }
}));
Object.defineProperty(exports, "Factory", ({
  enumerable: true,
  get: function () {
    return sync_1.Factory;
  }
}));
Object.defineProperty(exports, "val", ({
  enumerable: true,
  get: function () {
    return sync_1.val;
  }
}));
Object.defineProperty(exports, "each", ({
  enumerable: true,
  get: function () {
    return sync_1.each;
  }
}));
Object.defineProperty(exports, "makeFactory", ({
  enumerable: true,
  get: function () {
    return sync_1.makeFactory;
  }
}));

/***/ }),

/***/ 8983:
/*!*************************************************!*\
  !*** ./node_modules/factory.ts/lib/pipeline.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Pipeline = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
class Pipeline {
  constructor(current) {
    this.current = current;
  }
  static start() {
    return new Pipeline(Promise.resolve({}));
  }
  //add<T,U>(factory: Async.IFactory<T,U> | Async.FactoryFunc<T,U>, val: Parti (p:P) => Partial<T>)
  addValues(val) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const v = typeof val === "function" ? yield Async.lift(val(c)) : val;
      return Object.assign(Object.assign({}, c), v);
    })));
  }
  // NOTE: want to combine all addFactory() methods, but
  // Typescript and or ts-node seems to have problems
  // also want use object { key: partial } instead
  // but can't get the types right
  addFactoryFunc(factory, key, partial) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const p = typeof partial === "function" ? yield Async.lift(partial(c)) : partial;
      const val = yield factory(p);
      const newV = {};
      newV[key] = val;
      return Object.assign(Object.assign({}, c), newV);
    })));
  }
  addFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  addTxFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  then(onfulfilled, onrejected) {
    return this.current.then(onfulfilled, onrejected);
  }
  toFactory() {
    return Async.makeFactory(this.current);
  }
}
exports.Pipeline = Pipeline;

/***/ }),

/***/ 56109:
/*!***********************************************!*\
  !*** ./node_modules/factory.ts/lib/shared.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uniq = exports.recursivePartialOverride = void 0;
function recursivePartialOverride(x, y) {
  if (y === undefined || y === null) return x;
  const objProto = Object.getPrototypeOf({});
  if (Object.getPrototypeOf(y) != objProto) return y;
  let v = Object.assign({}, x);
  let yKeys = Object.keys(y);
  const allKeys = uniq(Object.keys(v).concat(yKeys));
  for (const key of allKeys) {
    if (yKeys.indexOf(key) >= 0) {
      const itemKeyVal = y[key];
      if (null != itemKeyVal && typeof itemKeyVal === "object") {
        const baseKeyVal = v[key];
        v[key] = recursivePartialOverride(baseKeyVal, itemKeyVal);
      } else {
        v[key] = itemKeyVal;
      }
    }
  }
  return v;
}
exports.recursivePartialOverride = recursivePartialOverride;
function uniq(ts) {
  const out = [];
  for (const v of ts) {
    if (out.indexOf(v) < 0) {
      out.push(v);
    }
  }
  return out;
}
exports.uniq = uniq;

/***/ }),

/***/ 77109:
/*!*********************************************!*\
  !*** ./node_modules/factory.ts/lib/sync.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return this.func(seq);
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    const ret = this.func(owner, seq);
    return ret;
  }
}
exports.Derived = Derived;
class Factory {
  expandBuilder() {
    return typeof this.builder === "function" ? this.builder() : this.builder;
  }
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => {
      return this.buildInner(null, item);
    };
    this.buildInner = (buildKeys, item) => {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = buildBase(seqNum, this.expandBuilder());
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = der.derived.build(v, seqNum);
      }
      return v;
    };
    this.buildList = (count, item) => {
      const ts = Array(count); // allocate to correct size
      for (let i = 0; i < count; i++) {
        ts[i] = this.build(item);
      }
      return ts;
    };
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = () => Object.assign({}, this.expandBuilder(), def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = () => Object.assign({}, this.expandBuilder(), other.expandBuilder());
    return new Factory(builder, this.config);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => {
      delete v2[kOut];
      const origValue = this.buildInner([kOut], v2)[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    });
    return this.extend(partial);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  const t = {};
  const keys = Object.getOwnPropertyNames(builder);
  const derived = [];
  for (const key of keys) {
    const v = builder[key];
    let value = v;
    if (!!v && typeof v === "object") {
      if (v.constructor === Generator) {
        value = v.build(seqNum);
      } else if (v.constructor == Derived) {
        derived.push({
          key,
          derived: v
        });
      } else {
        value = cloneDeep(v);
      }
    }
    t[key] = value;
  }
  return {
    value: t,
    derived
  };
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;

/***/ }),

/***/ 44663:
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ 87680:
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ 6859);
function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}
module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ 6859:
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ ((module) => {

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ 46030:
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';
  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';
    case 'Promise':
      return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap':
      return 'weakmap';
    case 'WeakSet':
      return 'weakset';
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';

    // 8-bit typed arrays
    case 'Int8Array':
      return 'int8array';
    case 'Uint8Array':
      return 'uint8array';
    case 'Uint8ClampedArray':
      return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array':
      return 'int16array';
    case 'Uint16Array':
      return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array':
      return 'int32array';
    case 'Uint32Array':
      return 'uint32array';
    case 'Float32Array':
      return 'float32array';
    case 'Float64Array':
      return 'float64array';
  }
  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators
    case '[object Map Iterator]':
      return 'mapiterator';
    case '[object Set Iterator]':
      return 'setiterator';
    case '[object String Iterator]':
      return 'stringiterator';
    case '[object Array Iterator]':
      return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}
function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}
function isGeneratorObj(val) {
  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';
}
function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

/***/ }),

/***/ 1466:
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ 96716:
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



var has = Object.prototype.hasOwnProperty,
  undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
    result = {},
    part;
  while (part = parser.exec(query)) {
    var key = decode(part[1]),
      value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }
  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
    value,
    key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';
  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }
      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }
  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ 716:
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/***/ ((module) => {



/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;
  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;
    case 'https':
    case 'wss':
      return port !== 443;
    case 'ftp':
      return port !== 21;
    case 'gopher':
      return port !== 70;
    case 'file':
      return false;
  }
  return port !== 0;
};

/***/ }),

/***/ 58071:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BehaviorSubject: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 72513);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}

/***/ }),

/***/ 36959:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 12235:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 14373);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 22476);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 50575);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 55400:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 72513);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 26926);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ }),

/***/ 72513:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 12235);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 61558);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 35559);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 50575);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  }
  next(value) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const {
      hasError,
      isStopped,
      observers
    } = this;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      thrownError,
      isStopped
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  }
}

/***/ }),

/***/ 58559:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 16929);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 72707);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 36959);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 38411);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 50575);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 31523:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 30101);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 35559);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 15445:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 60331:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 31967);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 16290:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/empty.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY: () => (/* binding */ EMPTY),
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}

/***/ }),

/***/ 56231:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 15535);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 60384);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}

/***/ }),

/***/ 60384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 16929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 14373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 84980:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 56231);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}

/***/ }),

/***/ 33252:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwError: () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);


function throwError(errorOrErrorFactory, scheduler) {
  const errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
  const init = subscriber => subscriber.error(errorFactory());
  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(scheduler ? subscriber => scheduler.schedule(init, 0, subscriber) : init);
}

/***/ }),

/***/ 35678:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 58559);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 2389:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/catchError.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catchError: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}

/***/ }),

/***/ 39877:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/concatMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatMap: () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeMap */ 72607);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, 1);
}

/***/ }),

/***/ 74520:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/filter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 17474:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/finalize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finalize: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

/***/ }),

/***/ 79736:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 78164:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeInternals: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

/***/ }),

/***/ 72607:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeMap: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 79736);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 78164);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}

/***/ }),

/***/ 42704:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

/***/ }),

/***/ 85584:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 72513);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 58559);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);




function share(options = {}) {
  const {
    connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(),
    resetOnError = true,
    resetOnComplete = true,
    resetOnRefCountZero = true
  } = options;
  return wrapperSource => {
    let connection;
    let resetConnection;
    let subject;
    let refCount = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };
    const reset = () => {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
          next: value => dest.next(value),
          error: err => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on, ...args) {
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  const onSubscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(on(...args)).subscribe(onSubscriber);
}

/***/ }),

/***/ 21650:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 55400);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 85584);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 42499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

/***/ }),

/***/ 81891:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/switchMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchMap: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}

/***/ }),

/***/ 81527:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/take.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   take: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 16290);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

/***/ }),

/***/ 17344:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeLast.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeLast: () => (/* binding */ takeLast)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 16290);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function takeLast(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let buffer = [];
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, () => {
      for (const value of buffer) {
        subscriber.next(value);
      }
      subscriber.complete();
    }, undefined, () => {
      buffer = null;
    }));
  });
}

/***/ }),

/***/ 20274:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeUntil: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 72707);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 13738:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tap: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 10204);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}

/***/ }),

/***/ 88297:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

/***/ }),

/***/ 86679:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 47695:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}

/***/ }),

/***/ 35158:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 22147:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 19405:
/*!*************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

/***/ }),

/***/ 15535:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 35158);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 22147);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 88297);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 47695);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 19405);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}

/***/ }),

/***/ 26926:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 38411:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 96691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 14373:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 31967:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/EmptyError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyError: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});

/***/ }),

/***/ 61558:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});

/***/ }),

/***/ 30101:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 76190:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: () => (/* binding */ popNumber),
/* harmony export */   popResultSelector: () => (/* binding */ popResultSelector),
/* harmony export */   popScheduler: () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 77426);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

/***/ }),

/***/ 35559:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 81566:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 50575:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 15445);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 29701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 10204:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 31287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 95235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 82602:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 87808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 14373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 19449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 53972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 70401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 82602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 77426:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 34114:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 72707:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 22476:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 10204);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 16929:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 15445);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 38411);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 42614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 92751:
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ 46030);
function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default:
      {
        return val;
      }
  }
}
function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}
function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}
function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}
function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}
function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/***/ }),

/***/ 22988:
/*!*************************************************!*\
  !*** ./node_modules/sockjs-client/lib/entry.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var transportList = __webpack_require__(/*! ./transport-list */ 88494);
module.exports = __webpack_require__(/*! ./main */ 16150)(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

/***/ }),

/***/ 52225:
/*!*******************************************************!*\
  !*** ./node_modules/sockjs-client/lib/event/close.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  Event = __webpack_require__(/*! ./event */ 35639);
function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}
inherits(CloseEvent, Event);
module.exports = CloseEvent;

/***/ }),

/***/ 33621:
/*!*********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/event/emitter.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventTarget = __webpack_require__(/*! ./eventtarget */ 3859);
function EventEmitter() {
  EventTarget.call(this);
}
inherits(EventEmitter, EventTarget);
EventEmitter.prototype.removeAllListeners = function (type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};
EventEmitter.prototype.once = function (type, listener) {
  var self = this,
    fired = false;
  function g() {
    self.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }
  this.on(type, g);
};
EventEmitter.prototype.emit = function () {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
module.exports.EventEmitter = EventEmitter;

/***/ }),

/***/ 35639:
/*!*******************************************************!*\
  !*** ./node_modules/sockjs-client/lib/event/event.js ***!
  \*******************************************************/
/***/ ((module) => {



function Event(eventType) {
  this.type = eventType;
}
Event.prototype.initEvent = function (eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};
Event.prototype.stopPropagation = function () {};
Event.prototype.preventDefault = function () {};
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;
module.exports = Event;

/***/ }),

/***/ 3859:
/*!*************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/event/eventtarget.js ***!
  \*************************************************************/
/***/ ((module) => {



/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */
function EventTarget() {
  this._listeners = {};
}
EventTarget.prototype.addEventListener = function (eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};
EventTarget.prototype.removeEventListener = function (eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};
EventTarget.prototype.dispatchEvent = function () {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};
module.exports = EventTarget;

/***/ }),

/***/ 40144:
/*!***************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/event/trans-message.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  Event = __webpack_require__(/*! ./event */ 35639);
function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}
inherits(TransportMessageEvent, Event);
module.exports = TransportMessageEvent;

/***/ }),

/***/ 60949:
/*!**************************************************!*\
  !*** ./node_modules/sockjs-client/lib/facade.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var iframeUtils = __webpack_require__(/*! ./utils/iframe */ 13501);
function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}
FacadeJS.prototype._transportClose = function (code, reason) {
  iframeUtils.postMessage('c', JSON.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function (frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function (data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function () {
  this._transport.close();
  this._transport.removeAllListeners();
};
module.exports = FacadeJS;

/***/ }),

/***/ 98497:
/*!************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/iframe-bootstrap.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var urlUtils = __webpack_require__(/*! ./utils/url */ 23998),
  eventUtils = __webpack_require__(/*! ./utils/event */ 87491),
  FacadeJS = __webpack_require__(/*! ./facade */ 60949),
  InfoIframeReceiver = __webpack_require__(/*! ./info-iframe-receiver */ 25621),
  iframeUtils = __webpack_require__(/*! ./utils/iframe */ 13501),
  loc = __webpack_require__(/*! ./location */ 51890);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:iframe-bootstrap');
}
module.exports = function (SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function (at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function () {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function (e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }
      var iframeMessage;
      try {
        iframeMessage = JSON.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }
      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
        case 's':
          var p;
          try {
            p = JSON.parse(iframeMessage.data);
          } catch (ignored) {
            debug('bad json', iframeMessage.data);
            break;
          }
          var version = p[0];
          var transport = p[1];
          var transUrl = p[2];
          var baseUrl = p[3];
          debug(version, transport, transUrl, baseUrl);
          // change this to semver logic
          if (version !== SockJS.version) {
            throw new Error('Incompatible SockJS! Main site uses:' + ' "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
          }
          if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) {
            throw new Error('Can\'t connect to different domain from within an ' + 'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
          }
          facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
          break;
        case 'm':
          facade._send(iframeMessage.data);
          break;
        case 'c':
          if (facade) {
            facade._close();
          }
          facade = null;
          break;
      }
    };
    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};

/***/ }),

/***/ 8767:
/*!*****************************************************!*\
  !*** ./node_modules/sockjs-client/lib/info-ajax.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663),
  objectUtils = __webpack_require__(/*! ./utils/object */ 8031);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:info-ajax');
}
function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);
  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);
  this.xo.once('finish', function (status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = +new Date() - t0;
      if (text) {
        try {
          info = JSON.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }
      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}
inherits(InfoAjax, EventEmitter);
InfoAjax.prototype.close = function () {
  this.removeAllListeners();
  this.xo.close();
};
module.exports = InfoAjax;

/***/ }),

/***/ 25621:
/*!****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/info-iframe-receiver.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  XHRLocalObject = __webpack_require__(/*! ./transport/sender/xhr-local */ 15567),
  InfoAjax = __webpack_require__(/*! ./info-ajax */ 8767);
function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);
  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function (info, rtt) {
    self.ir = null;
    self.emit('message', JSON.stringify([info, rtt]));
  });
}
inherits(InfoReceiverIframe, EventEmitter);
InfoReceiverIframe.transportName = 'iframe-info-receiver';
InfoReceiverIframe.prototype.close = function () {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};
module.exports = InfoReceiverIframe;

/***/ }),

/***/ 72364:
/*!*******************************************************!*\
  !*** ./node_modules/sockjs-client/lib/info-iframe.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663),
  utils = __webpack_require__(/*! ./utils/event */ 87491),
  IframeTransport = __webpack_require__(/*! ./transport/iframe */ 48299),
  InfoReceiverIframe = __webpack_require__(/*! ./info-iframe-receiver */ 25621);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:info-iframe');
}
function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);
  var go = function () {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
    ifr.once('message', function (msg) {
      if (msg) {
        var d;
        try {
          d = JSON.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }
        var info = d[0],
          rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });
    ifr.once('close', function () {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}
inherits(InfoIframe, EventEmitter);
InfoIframe.enabled = function () {
  return IframeTransport.enabled();
};
InfoIframe.prototype.close = function () {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};
module.exports = InfoIframe;

/***/ }),

/***/ 91019:
/*!*********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/info-receiver.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663),
  urlUtils = __webpack_require__(/*! ./utils/url */ 23998),
  XDR = __webpack_require__(/*! ./transport/sender/xdr */ 97980),
  XHRCors = __webpack_require__(/*! ./transport/sender/xhr-cors */ 90950),
  XHRLocal = __webpack_require__(/*! ./transport/sender/xhr-local */ 15567),
  XHRFake = __webpack_require__(/*! ./transport/sender/xhr-fake */ 77282),
  InfoIframe = __webpack_require__(/*! ./info-iframe */ 72364),
  InfoAjax = __webpack_require__(/*! ./info-ajax */ 8767);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:info-receiver');
}
function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);
  setTimeout(function () {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}
inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function (baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};
InfoReceiver.prototype.doXhr = function (baseUrl, urlInfo) {
  var self = this,
    url = urlUtils.addPath(baseUrl, '/info');
  debug('doXhr', url);
  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
  this.timeoutRef = setTimeout(function () {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);
  this.xo.once('finish', function (info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};
InfoReceiver.prototype._cleanup = function (wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};
InfoReceiver.prototype.close = function () {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};
InfoReceiver.timeout = 8000;
module.exports = InfoReceiver;

/***/ }),

/***/ 51890:
/*!****************************************************!*\
  !*** ./node_modules/sockjs-client/lib/location.js ***!
  \****************************************************/
/***/ ((module) => {



module.exports = global.location || {
  origin: 'http://localhost:80',
  protocol: 'http:',
  host: 'localhost',
  port: 80,
  href: 'http://localhost/',
  hash: ''
};

/***/ }),

/***/ 16150:
/*!************************************************!*\
  !*** ./node_modules/sockjs-client/lib/main.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(/*! ./shims */ 85800);
var URL = __webpack_require__(/*! url-parse */ 46299),
  inherits = __webpack_require__(/*! inherits */ 44663),
  random = __webpack_require__(/*! ./utils/random */ 51637),
  escape = __webpack_require__(/*! ./utils/escape */ 53557),
  urlUtils = __webpack_require__(/*! ./utils/url */ 23998),
  eventUtils = __webpack_require__(/*! ./utils/event */ 87491),
  transport = __webpack_require__(/*! ./utils/transport */ 75148),
  objectUtils = __webpack_require__(/*! ./utils/object */ 8031),
  browser = __webpack_require__(/*! ./utils/browser */ 18770),
  log = __webpack_require__(/*! ./utils/log */ 72834),
  Event = __webpack_require__(/*! ./event/event */ 35639),
  EventTarget = __webpack_require__(/*! ./event/eventtarget */ 3859),
  loc = __webpack_require__(/*! ./location */ 51890),
  CloseEvent = __webpack_require__(/*! ./event/close */ 52225),
  TransportMessageEvent = __webpack_require__(/*! ./event/trans-message */ 40144),
  InfoReceiver = __webpack_require__(/*! ./info-receiver */ 91019);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:main');
}
var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);
  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};
  this._timeout = options.timeout || 0;
  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function () {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }
  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }
  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    // exception is 127.0.0.0/8 and ::1 urls
    if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) {
      throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
    }
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function (proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain(),
    sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
    sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };
  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}
inherits(SockJS, EventTarget);
function userSetCode(code) {
  return code === 1000 || code >= 3000 && code <= 4999;
}
SockJS.prototype.close = function (code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};
SockJS.prototype.send = function (data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};
SockJS.version = __webpack_require__(/*! ./version */ 25037);
SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;
SockJS.prototype._receiveInfo = function (info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');
  this._connect();
};
SockJS.prototype._connect = function () {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body || typeof global.document.readyState !== 'undefined' && global.document.readyState !== 'complete' && global.document.readyState !== 'interactive') {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = Math.max(this._timeout, this._rto * Transport.roundTrips || 5000);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);
    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;
    return;
  }
  this._close(2000, 'All transports failed', false);
};
SockJS.prototype._transportTimeout = function () {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }
    this._transportClose(2007, 'Transport timed out');
  }
};
SockJS.prototype._transportMessage = function (msg) {
  debug('_transportMessage', msg);
  var self = this,
    type = msg.slice(0, 1),
    content = msg.slice(1),
    payload;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }
  if (content) {
    try {
      payload = JSON.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }
  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }
  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function (p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};
SockJS.prototype._transportClose = function (code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }
  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }
  this._close(code, reason);
};
SockJS.prototype._open = function () {
  debug('_open', this._transport && this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};
SockJS.prototype._close = function (code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;
  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }
  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }
  this.readyState = SockJS.CLOSING;
  setTimeout(function () {
    this.readyState = SockJS.CLOSED;
    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }
    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;
    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function (rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};
module.exports = function (availableTransports) {
  transports = transport(availableTransports);
  __webpack_require__(/*! ./iframe-bootstrap */ 98497)(SockJS, availableTransports);
  return SockJS;
};

/***/ }),

/***/ 85800:
/*!*************************************************!*\
  !*** ./node_modules/sockjs-client/lib/shims.js ***!
  \*************************************************/
/***/ (() => {

/* eslint-disable */
/* jscs: disable */


// pulled specific shims from https://github.com/es-shims/es5-shim
var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;
var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
  return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
  return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
  return _toString.call(obj) === '[object String]';
};
var supportsDescriptors = Object.defineProperty && function () {
  try {
    Object.defineProperty({}, 'x', {});
    return true;
  } catch (e) {
    /* this is ES3 */
    return false;
  }
}();

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
  defineProperty = function (object, name, method, forceAssign) {
    if (!forceAssign && name in object) {
      return;
    }
    Object.defineProperty(object, name, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: method
    });
  };
} else {
  defineProperty = function (object, name, method, forceAssign) {
    if (!forceAssign && name in object) {
      return;
    }
    object[name] = method;
  };
}
var defineProperties = function (object, map, forceAssign) {
  for (var name in map) {
    if (ObjectPrototype.hasOwnProperty.call(map, name)) {
      defineProperty(object, name, map[name], forceAssign);
    }
  }
};
var toObject = function (o) {
  if (o == null) {
    // this matches both null and undefined
    throw new TypeError("can't convert " + o + ' to object');
  }
  return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
  var n = +num;
  if (n !== n) {
    // isNaN
    n = 0;
  } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
    n = (n > 0 || -1) * Math.floor(Math.abs(n));
  }
  return n;
}
function ToUint32(x) {
  return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}
defineProperties(FunctionPrototype, {
  bind: function bind(that) {
    // .length is 1
    // 1. Let Target be the this value.
    var target = this;
    // 2. If IsCallable(Target) is false, throw a TypeError exception.
    if (!isFunction(target)) {
      throw new TypeError('Function.prototype.bind called on incompatible ' + target);
    }
    // 3. Let A be a new (possibly empty) internal list of all of the
    //   argument values provided after thisArg (arg1, arg2 etc), in order.
    // XXX slicedArgs will stand in for "A" if used
    var args = array_slice.call(arguments, 1); // for normal call
    // 4. Let F be a new native ECMAScript object.
    // 11. Set the [[Prototype]] internal property of F to the standard
    //   built-in Function prototype object as specified in 15.3.3.1.
    // 12. Set the [[Call]] internal property of F as described in
    //   15.3.4.5.1.
    // 13. Set the [[Construct]] internal property of F as described in
    //   15.3.4.5.2.
    // 14. Set the [[HasInstance]] internal property of F as described in
    //   15.3.4.5.3.
    var binder = function () {
      if (this instanceof bound) {
        // 15.3.4.5.2 [[Construct]]
        // When the [[Construct]] internal method of a function object,
        // F that was created using the bind function is called with a
        // list of arguments ExtraArgs, the following steps are taken:
        // 1. Let target be the value of F's [[TargetFunction]]
        //   internal property.
        // 2. If target has no [[Construct]] internal method, a
        //   TypeError exception is thrown.
        // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
        //   property.
        // 4. Let args be a new list containing the same values as the
        //   list boundArgs in the same order followed by the same
        //   values as the list ExtraArgs in the same order.
        // 5. Return the result of calling the [[Construct]] internal
        //   method of target providing args as the arguments.

        var result = target.apply(this, args.concat(array_slice.call(arguments)));
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        // 15.3.4.5.1 [[Call]]
        // When the [[Call]] internal method of a function object, F,
        // which was created using the bind function is called with a
        // this value and a list of arguments ExtraArgs, the following
        // steps are taken:
        // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
        //   property.
        // 2. Let boundThis be the value of F's [[BoundThis]] internal
        //   property.
        // 3. Let target be the value of F's [[TargetFunction]] internal
        //   property.
        // 4. Let args be a new list containing the same values as the
        //   list boundArgs in the same order followed by the same
        //   values as the list ExtraArgs in the same order.
        // 5. Return the result of calling the [[Call]] internal method
        //   of target providing boundThis as the this value and
        //   providing args as the arguments.

        // equiv: target.call(this, ...boundArgs, ...args)
        return target.apply(that, args.concat(array_slice.call(arguments)));
      }
    };

    // 15. If the [[Class]] internal property of Target is "Function", then
    //     a. Let L be the length property of Target minus the length of A.
    //     b. Set the length own property of F to either 0 or L, whichever is
    //       larger.
    // 16. Else set the length own property of F to 0.

    var boundLength = Math.max(0, target.length - args.length);

    // 17. Set the attributes of the length own property of F to the values
    //   specified in 15.3.5.1.
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs.push('$' + i);
    }

    // XXX Build a dynamic function with desired amount of arguments is the only
    // way to set the length property of a function.
    // In environments where Content Security Policies enabled (Chrome extensions,
    // for ex.) all use of eval or Function costructor throws an exception.
    // However in all of these environments Function.prototype.bind exists
    // and so this code will never be executed.
    var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
    if (target.prototype) {
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      // Clean up dangling references.
      Empty.prototype = null;
    }

    // TODO
    // 18. Set the [[Extensible]] internal property of F to true.

    // TODO
    // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
    // 20. Call the [[DefineOwnProperty]] internal method of F with
    //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
    //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
    //   false.
    // 21. Call the [[DefineOwnProperty]] internal method of F with
    //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
    //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
    //   and false.

    // TODO
    // NOTE Function objects created using Function.prototype.bind do not
    // have a prototype property or the [[Code]], [[FormalParameters]], and
    // [[Scope]] internal properties.
    // XXX can't delete prototype in pure-js.

    // 22. Return F.
    return bound;
  }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, {
  isArray: isArray
});
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
var properlyBoxesContext = function properlyBoxed(method) {
  // Check node 0.6.21 bug where third parameter is not boxed
  var properlyBoxesNonStrict = true;
  var properlyBoxesStrict = true;
  if (method) {
    method.call('foo', function (_, __, context) {
      if (typeof context !== 'object') {
        properlyBoxesNonStrict = false;
      }
    });
    method.call([1], function () {
      'use strict';

      properlyBoxesStrict = typeof this === 'string';
    }, 'x');
  }
  return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};
defineProperties(ArrayPrototype, {
  forEach: function forEach(fun /*, thisp*/) {
    var object = toObject(this),
      self = splitString && isString(this) ? this.split('') : object,
      thisp = arguments[1],
      i = -1,
      length = self.length >>> 0;

    // If no callback function or if callback is not a callable function
    if (!isFunction(fun)) {
      throw new TypeError(); // TODO message
    }
    while (++i < length) {
      if (i in self) {
        // Invoke the callback function with call, passing arguments:
        // context, property value, property key, thisArg object
        // context
        fun.call(thisp, self[i], i, object);
      }
    }
  }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
  indexOf: function indexOf(sought /*, fromIndex */) {
    var self = splitString && isString(this) ? this.split('') : toObject(this),
      length = self.length >>> 0;
    if (!length) {
      return -1;
    }
    var i = 0;
    if (arguments.length > 1) {
      i = toInteger(arguments[1]);
    }

    // handle negative indices
    i = i >= 0 ? i : Math.max(0, length + i);
    for (; i < length; i++) {
      if (i in self && self[i] === sought) {
        return i;
      }
    }
    return -1;
  }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
  (function () {
    var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

    StringPrototype.split = function (separator, limit) {
      var string = this;
      if (separator === void 0 && limit === 0) {
        return [];
      }

      // If `separator` is not a regex, use native split
      if (_toString.call(separator) !== '[object RegExp]') {
        return string_split.call(this, separator, limit);
      }
      var output = [],
        flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + (
        // Proposed for ES6
        separator.sticky ? 'y' : ''),
        // Firefox 3+
        lastLastIndex = 0,
        // Make `global` and avoid `lastIndex` issues by working with a copy
        separator2,
        match,
        lastIndex,
        lastLength;
      separator = new RegExp(separator.source, flags + 'g');
      string += ''; // Type-convert
      if (!compliantExecNpcg) {
        // Doesn't need flags gy, but they don't hurt
        separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
      }
      /* Values for `limit`, per the spec:
       * If undefined: 4294967295 // Math.pow(2, 32) - 1
       * If 0, Infinity, or NaN: 0
       * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
       * If negative number: 4294967296 - Math.floor(Math.abs(limit))
       * If other: Type-convert, then use the above rules
       */
      limit = limit === void 0 ? -1 >>> 0 :
      // Math.pow(2, 32) - 1
      ToUint32(limit);
      while (match = separator.exec(string)) {
        // `separator.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0].length;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for
          // nonparticipating capturing groups
          if (!compliantExecNpcg && match.length > 1) {
            match[0].replace(separator2, function () {
              for (var i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === void 0) {
                  match[i] = void 0;
                }
              }
            });
          }
          if (match.length > 1 && match.index < string.length) {
            ArrayPrototype.push.apply(output, match.slice(1));
          }
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= limit) {
            break;
          }
        }
        if (separator.lastIndex === match.index) {
          separator.lastIndex++; // Avoid an infinite loop
        }
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separator.test('')) {
          output.push('');
        }
      } else {
        output.push(string.slice(lastLastIndex));
      }
      return output.length > limit ? output.slice(0, limit) : output;
    };
  })();

  // [bugfix, chrome]
  // If separator is undefined, then the result array contains just one String,
  // which is the this value (converted to a String). If limit is not undefined,
  // then the output array is truncated so that it contains no more than limit
  // elements.
  // "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
  StringPrototype.split = function split(separator, limit) {
    if (separator === void 0 && limit === 0) {
      return [];
    }
    return string_split.call(this, separator, limit);
  };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
  substr: function substr(start, length) {
    return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
  }
}, hasNegativeSubstrBug);

/***/ }),

/***/ 88494:
/*!**********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport-list.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = [
// streaming transports
__webpack_require__(/*! ./transport/websocket */ 95338), __webpack_require__(/*! ./transport/xhr-streaming */ 62826), __webpack_require__(/*! ./transport/xdr-streaming */ 42134), __webpack_require__(/*! ./transport/eventsource */ 36555), __webpack_require__(/*! ./transport/lib/iframe-wrap */ 50795)(__webpack_require__(/*! ./transport/eventsource */ 36555))

// polling transports
, __webpack_require__(/*! ./transport/htmlfile */ 71950), __webpack_require__(/*! ./transport/lib/iframe-wrap */ 50795)(__webpack_require__(/*! ./transport/htmlfile */ 71950)), __webpack_require__(/*! ./transport/xhr-polling */ 78232), __webpack_require__(/*! ./transport/xdr-polling */ 15873), __webpack_require__(/*! ./transport/lib/iframe-wrap */ 50795)(__webpack_require__(/*! ./transport/xhr-polling */ 78232)), __webpack_require__(/*! ./transport/jsonp-polling */ 74407)];

/***/ }),

/***/ 15884:
/*!**************************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663),
  utils = __webpack_require__(/*! ../../utils/event */ 87491),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998),
  XHR = global.XMLHttpRequest;
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:browser:xhr');
}
function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);
  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}
inherits(AbstractXHRObject, EventEmitter);
AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
  var self = this;
  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }
  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + +new Date());

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function () {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function () {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }
  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }
  this.xhr.onreadystatechange = function () {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
        case 3:
          // IE doesn't like peeking into responseText or status
          // on Microsoft.XMLHTTP and readystate=3
          try {
            status = x.status;
            text = x.responseText;
          } catch (e) {
            // intentionally empty
          }
          debug('status', status);
          // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
          if (status === 1223) {
            status = 204;
          }

          // IE does return readystate == 3 for 404 answers.
          if (status === 200 && text && text.length > 0) {
            debug('chunk');
            self.emit('chunk', status, text);
          }
          break;
        case 4:
          status = x.status;
          debug('status', status);
          // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
          if (status === 1223) {
            status = 204;
          }
          // IE returns this for a bad port
          // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
          if (status === 12005 || status === 12029) {
            status = 0;
          }
          debug('finish', status, x.responseText);
          self.emit('finish', status, x.responseText);
          self._cleanup(false);
          break;
      }
    }
  };
  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};
AbstractXHRObject.prototype._cleanup = function (abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function () {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }
  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};
AbstractXHRObject.prototype.close = function () {
  debug('close');
  this._cleanup(true);
};
AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && axo in global) {
  debug('overriding xmlhttprequest');
  XHR = function () {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}
var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}
AbstractXHRObject.supportsCORS = cors;
module.exports = AbstractXHRObject;

/***/ }),

/***/ 26852:
/*!*************************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/browser/eventsource.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = global.EventSource;

/***/ }),

/***/ 75312:
/*!***********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/browser/websocket.js ***!
  \***********************************************************************/
/***/ ((module) => {



var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
  module.exports = function WebSocketBrowserDriver(url) {
    return new Driver(url);
  };
} else {
  module.exports = undefined;
}

/***/ }),

/***/ 36555:
/*!*****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/eventsource.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934),
  EventSourceReceiver = __webpack_require__(/*! ./receiver/eventsource */ 61036),
  XHRCorsObject = __webpack_require__(/*! ./sender/xhr-cors */ 90950),
  EventSourceDriver = __webpack_require__(/*! eventsource */ 26852);
function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}
inherits(EventSourceTransport, AjaxBasedTransport);
EventSourceTransport.enabled = function () {
  return !!EventSourceDriver;
};
EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;
module.exports = EventSourceTransport;

/***/ }),

/***/ 71950:
/*!**************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/htmlfile.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  HtmlfileReceiver = __webpack_require__(/*! ./receiver/htmlfile */ 59385),
  XHRLocalObject = __webpack_require__(/*! ./sender/xhr-local */ 15567),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934);
function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}
inherits(HtmlFileTransport, AjaxBasedTransport);
HtmlFileTransport.enabled = function (info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};
HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;
module.exports = HtmlFileTransport;

/***/ }),

/***/ 48299:
/*!************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/iframe.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php
var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  version = __webpack_require__(/*! ../version */ 25037),
  urlUtils = __webpack_require__(/*! ../utils/url */ 23998),
  iframeUtils = __webpack_require__(/*! ../utils/iframe */ 13501),
  eventUtils = __webpack_require__(/*! ../utils/event */ 87491),
  random = __webpack_require__(/*! ../utils/random */ 51637);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:transport:iframe');
}
function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);
  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);
  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);
  this.iframeObj = iframeUtils.createIframe(iframeUrl, function (r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });
  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}
inherits(IframeTransport, EventEmitter);
IframeTransport.prototype.close = function () {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};
IframeTransport.prototype._message = function (e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }
  var iframeMessage;
  try {
    iframeMessage = JSON.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }
  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }
  switch (iframeMessage.type) {
    case 's':
      this.iframeObj.loaded();
      // window global dependency
      this.postMessage('s', JSON.stringify([version, this.transport, this.transUrl, this.baseUrl]));
      break;
    case 't':
      this.emit('message', iframeMessage.data);
      break;
    case 'c':
      var cdata;
      try {
        cdata = JSON.parse(iframeMessage.data);
      } catch (ignored) {
        debug('bad json', iframeMessage.data);
        return;
      }
      this.emit('close', cdata[0], cdata[1]);
      this.close();
      break;
  }
};
IframeTransport.prototype.postMessage = function (type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON.stringify({
    windowId: this.windowId,
    type: type,
    data: data || ''
  }), this.origin);
};
IframeTransport.prototype.send = function (message) {
  debug('send', message);
  this.postMessage('m', message);
};
IframeTransport.enabled = function () {
  return iframeUtils.iframeEnabled;
};
IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;
module.exports = IframeTransport;

/***/ }),

/***/ 74407:
/*!*******************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/jsonp-polling.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors
var inherits = __webpack_require__(/*! inherits */ 44663),
  SenderReceiver = __webpack_require__(/*! ./lib/sender-receiver */ 24714),
  JsonpReceiver = __webpack_require__(/*! ./receiver/jsonp */ 45445),
  jsonpSender = __webpack_require__(/*! ./sender/jsonp */ 51325);
function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}
inherits(JsonPTransport, SenderReceiver);
JsonPTransport.enabled = function () {
  return !!global.document;
};
JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;
module.exports = JsonPTransport;

/***/ }),

/***/ 38934:
/*!********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/lib/ajax-based.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998),
  SenderReceiver = __webpack_require__(/*! ./sender-receiver */ 24714);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:ajax-based');
}
function createAjaxSender(AjaxObject) {
  return function (url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {
        'Content-type': 'text/plain'
      };
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function (status) {
      debug('finish', status);
      xo = null;
      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function () {
      debug('abort');
      xo.close();
      xo = null;
      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}
function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}
inherits(AjaxBasedTransport, SenderReceiver);
module.exports = AjaxBasedTransport;

/***/ }),

/***/ 91169:
/*!*************************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:buffered-sender');
}
function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}
inherits(BufferedSender, EventEmitter);
BufferedSender.prototype.send = function (message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function () {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function () {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function () {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};
BufferedSender.prototype.sendSchedule = function () {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function (err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};
BufferedSender.prototype._cleanup = function () {
  debug('_cleanup');
  this.removeAllListeners();
};
BufferedSender.prototype.close = function () {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};
module.exports = BufferedSender;

/***/ }),

/***/ 50795:
/*!*********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  IframeTransport = __webpack_require__(/*! ../iframe */ 48299),
  objectUtils = __webpack_require__(/*! ../../utils/object */ 8031);
module.exports = function (transport) {
  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }
  inherits(IframeWrapTransport, IframeTransport);
  IframeWrapTransport.enabled = function (url, info) {
    if (!global.document) {
      return false;
    }
    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };
  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;
  return IframeWrapTransport;
};

/***/ }),

/***/ 25773:
/*!*****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/lib/polling.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:polling');
}
function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}
inherits(Polling, EventEmitter);
Polling.prototype._scheduleReceiver = function () {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
  poll.on('message', function (msg) {
    debug('message', msg);
    self.emit('message', msg);
  });
  poll.once('close', function (code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;
    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};
Polling.prototype.abort = function () {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};
module.exports = Polling;

/***/ }),

/***/ 24714:
/*!*************************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998),
  BufferedSender = __webpack_require__(/*! ./buffered-sender */ 91169),
  Polling = __webpack_require__(/*! ./polling */ 25773);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:sender-receiver');
}
function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);
  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function (msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function (code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}
inherits(SenderReceiver, BufferedSender);
SenderReceiver.prototype.close = function () {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};
module.exports = SenderReceiver;

/***/ }),

/***/ 61036:
/*!**************************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/receiver/eventsource.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  EventSourceDriver = __webpack_require__(/*! eventsource */ 26852);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:receiver:eventsource');
}
function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function (e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function (e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = es.readyState !== 2 ? 'network' : 'permanent';
    self._cleanup();
    self._close(reason);
  };
}
inherits(EventSourceReceiver, EventEmitter);
EventSourceReceiver.prototype.abort = function () {
  debug('abort');
  this._cleanup();
  this._close('user');
};
EventSourceReceiver.prototype._cleanup = function () {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};
EventSourceReceiver.prototype._close = function (reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function () {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};
module.exports = EventSourceReceiver;

/***/ }),

/***/ 59385:
/*!***********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  iframeUtils = __webpack_require__(/*! ../../utils/iframe */ 13501),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  random = __webpack_require__(/*! ../../utils/random */ 51637);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:receiver:htmlfile');
}
function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();
  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;
  global[iframeUtils.WPrefix][this.id] = {
    start: function () {
      debug('start');
      self.iframeObj.loaded();
    },
    message: function (data) {
      debug('message', data);
      self.emit('message', data);
    },
    stop: function () {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function () {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}
inherits(HtmlfileReceiver, EventEmitter);
HtmlfileReceiver.prototype.abort = function () {
  debug('abort');
  this._cleanup();
  this._close('user');
};
HtmlfileReceiver.prototype._cleanup = function () {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};
HtmlfileReceiver.prototype._close = function (reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};
HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}
HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
module.exports = HtmlfileReceiver;

/***/ }),

/***/ 45445:
/*!********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/receiver/jsonp.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var utils = __webpack_require__(/*! ../../utils/iframe */ 13501),
  random = __webpack_require__(/*! ../../utils/random */ 51637),
  browser = __webpack_require__(/*! ../../utils/browser */ 18770),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998),
  inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:receiver:jsonp');
}
function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);
  utils.polluteGlobalNamespace();
  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function () {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}
inherits(JsonpReceiver, EventEmitter);
JsonpReceiver.prototype.abort = function () {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};
JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;
JsonpReceiver.prototype._callback = function (data) {
  debug('_callback', data);
  this._cleanup();
  if (this.aborting) {
    return;
  }
  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};
JsonpReceiver.prototype._abort = function (err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};
JsonpReceiver.prototype._cleanup = function () {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};
JsonpReceiver.prototype._scriptError = function () {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }
  this.errorTimer = setTimeout(function () {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};
JsonpReceiver.prototype._createScript = function (url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2; // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function () {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function () {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }
  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};
module.exports = JsonpReceiver;

/***/ }),

/***/ 68416:
/*!******************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/receiver/xhr.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:receiver:xhr');
}
function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  this.bufferPosition = 0;
  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function (status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}
inherits(XhrReceiver, EventEmitter);
XhrReceiver.prototype._chunkHandler = function (status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }
  for (var idx = -1;; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};
XhrReceiver.prototype._cleanup = function () {
  debug('_cleanup');
  this.removeAllListeners();
};
XhrReceiver.prototype.abort = function () {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};
module.exports = XhrReceiver;

/***/ }),

/***/ 51325:
/*!******************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/sender/jsonp.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var random = __webpack_require__(/*! ../../utils/random */ 51637),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:sender:jsonp');
}
var form, area;
function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}
function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';
  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);
  global.document.body.appendChild(form);
}
module.exports = function (url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);
  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();
  var completed = function (err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function () {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function () {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function () {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function (e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function () {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

/***/ }),

/***/ 97980:
/*!****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/sender/xdr.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663),
  eventUtils = __webpack_require__(/*! ../../utils/event */ 87491),
  browser = __webpack_require__(/*! ../../utils/browser */ 18770),
  urlUtils = __webpack_require__(/*! ../../utils/url */ 23998);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);
  setTimeout(function () {
    self._start(method, url, payload);
  }, 0);
}
inherits(XDRObject, EventEmitter);
XDRObject.prototype._start = function (method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + +new Date());
  xdr.onerror = function () {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function () {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function () {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function () {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function () {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};
XDRObject.prototype._error = function () {
  this.emit('finish', 0, '');
  this._cleanup(false);
};
XDRObject.prototype._cleanup = function (abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);
  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};
XDRObject.prototype.close = function () {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());
module.exports = XDRObject;

/***/ }),

/***/ 90950:
/*!*********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  XhrDriver = __webpack_require__(/*! ../driver/xhr */ 15884);
function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}
inherits(XHRCorsObject, XhrDriver);
XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
module.exports = XHRCorsObject;

/***/ }),

/***/ 77282:
/*!*********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  inherits = __webpack_require__(/*! inherits */ 44663);
function XHRFake( /* method, url, payload, opts */
) {
  var self = this;
  EventEmitter.call(this);
  this.to = setTimeout(function () {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}
inherits(XHRFake, EventEmitter);
XHRFake.prototype.close = function () {
  clearTimeout(this.to);
};
XHRFake.timeout = 2000;
module.exports = XHRFake;

/***/ }),

/***/ 15567:
/*!**********************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-local.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  XhrDriver = __webpack_require__(/*! ../driver/xhr */ 15884);
function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}
inherits(XHRLocalObject, XhrDriver);
XHRLocalObject.enabled = XhrDriver.enabled;
module.exports = XHRLocalObject;

/***/ }),

/***/ 95338:
/*!***************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/websocket.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var utils = __webpack_require__(/*! ../utils/event */ 87491),
  urlUtils = __webpack_require__(/*! ../utils/url */ 23998),
  inherits = __webpack_require__(/*! inherits */ 44663),
  EventEmitter = (__webpack_require__(/*! events */ 33621).EventEmitter),
  WebsocketDriver = __webpack_require__(/*! ./driver/websocket */ 75312);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:websocket');
}
function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);
  debug('constructor', transUrl);
  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;
  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function (e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function () {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function (e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function (e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}
inherits(WebSocketTransport, EventEmitter);
WebSocketTransport.prototype.send = function (data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};
WebSocketTransport.prototype.close = function () {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};
WebSocketTransport.prototype._cleanup = function () {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};
WebSocketTransport.enabled = function () {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;
module.exports = WebSocketTransport;

/***/ }),

/***/ 15873:
/*!*****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/xdr-polling.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934),
  XdrStreamingTransport = __webpack_require__(/*! ./xdr-streaming */ 42134),
  XhrReceiver = __webpack_require__(/*! ./receiver/xhr */ 68416),
  XDRObject = __webpack_require__(/*! ./sender/xdr */ 97980);
function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}
inherits(XdrPollingTransport, AjaxBasedTransport);
XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;

/***/ }),

/***/ 42134:
/*!*******************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/xdr-streaming.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934),
  XhrReceiver = __webpack_require__(/*! ./receiver/xhr */ 68416),
  XDRObject = __webpack_require__(/*! ./sender/xdr */ 97980);

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}
inherits(XdrStreamingTransport, AjaxBasedTransport);
XdrStreamingTransport.enabled = function (info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};
XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;

/***/ }),

/***/ 78232:
/*!*****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/xhr-polling.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934),
  XhrReceiver = __webpack_require__(/*! ./receiver/xhr */ 68416),
  XHRCorsObject = __webpack_require__(/*! ./sender/xhr-cors */ 90950),
  XHRLocalObject = __webpack_require__(/*! ./sender/xhr-local */ 15567);
function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}
inherits(XhrPollingTransport, AjaxBasedTransport);
XhrPollingTransport.enabled = function (info) {
  if (info.nullOrigin) {
    return false;
  }
  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};
XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;

/***/ }),

/***/ 62826:
/*!*******************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/transport/xhr-streaming.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var inherits = __webpack_require__(/*! inherits */ 44663),
  AjaxBasedTransport = __webpack_require__(/*! ./lib/ajax-based */ 38934),
  XhrReceiver = __webpack_require__(/*! ./receiver/xhr */ 68416),
  XHRCorsObject = __webpack_require__(/*! ./sender/xhr-cors */ 90950),
  XHRLocalObject = __webpack_require__(/*! ./sender/xhr-local */ 15567),
  browser = __webpack_require__(/*! ../utils/browser */ 18770);
function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}
inherits(XhrStreamingTransport, AjaxBasedTransport);
XhrStreamingTransport.enabled = function (info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }
  return XHRCorsObject.enabled;
};
XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;
module.exports = XhrStreamingTransport;

/***/ }),

/***/ 22295:
/*!****************************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/browser-crypto.js ***!
  \****************************************************************/
/***/ ((module) => {



if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function (length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function (length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

/***/ }),

/***/ 18770:
/*!*********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/browser.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = {
  isOpera: function () {
    return global.navigator && /opera/i.test(global.navigator.userAgent);
  },
  isKonqueror: function () {
    return global.navigator && /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
  ,
  hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }
    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

/***/ }),

/***/ 53557:
/*!********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/escape.js ***!
  \********************************************************/
/***/ ((module) => {



// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex, no-misleading-character-class
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
  extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function (escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push(String.fromCharCode(i));
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function (a) {
    unrolled[a] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function (string) {
    var quoted = JSON.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }
    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }
    return quoted.replace(extraEscapable, function (a) {
      return extraLookup[a];
    });
  }
};

/***/ }),

/***/ 87491:
/*!*******************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/event.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var random = __webpack_require__(/*! ./random */ 51637);
var onUnload = {},
  afterUnload = false
  // detect google chrome packaged apps because they don't allow the 'unload' event
  ,
  isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;
module.exports = {
  attachEvent: function (event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  },
  detachEvent: function (event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  },
  unloadAdd: function (listener) {
    if (isChromePackagedApp) {
      return null;
    }
    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  },
  unloadDel: function (ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  },
  triggerUnloadCallbacks: function () {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};
var unloadTriggered = function () {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

/***/ }),

/***/ 13501:
/*!********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/iframe.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var eventUtils = __webpack_require__(/*! ./event */ 87491),
  browser = __webpack_require__(/*! ./browser */ 18770);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:utils:iframe');
}
module.exports = {
  WPrefix: '_jp',
  currentWindowId: null,
  polluteGlobalNamespace: function () {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  },
  postMessage: function (type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON.stringify({
        windowId: module.exports.currentWindowId,
        type: type,
        data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  },
  createIframe: function (iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function () {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function () {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function () {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function (err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function (msg, origin) {
      debug('post', msg, origin);
      setTimeout(function () {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };
    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function () {
      onerror('onerror');
    };
    iframe.onload = function () {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function () {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function () {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post,
      cleanup: cleanup,
      loaded: unattach
    };
  }

  /* eslint no-undef: "off", new-cap: "off" */,
  createHtmlfile: function (iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function () {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function () {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function (r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function (msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function () {
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };
    doc.open();
    doc.write('<html><s' + 'cript>' + 'document.domain="' + global.document.domain + '";' + '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function () {
      onerror('onerror');
    };
    tref = setTimeout(function () {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post,
      cleanup: cleanup,
      loaded: unattach
    };
  }
};
module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' || typeof global.postMessage === 'object') && !browser.isKonqueror();
}

/***/ }),

/***/ 72834:
/*!*****************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/log.js ***!
  \*****************************************************/
/***/ ((module) => {



var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;
  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch (e) {
    // do nothing
  }
  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : level === 'log' ? function () {} : logObject.log;
});
module.exports = logObject;

/***/ }),

/***/ 8031:
/*!********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/object.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = {
  isObject: function (obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  },
  extend: function (obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};

/***/ }),

/***/ 51637:
/*!********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/random.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var crypto = __webpack_require__(/*! crypto */ 22295);

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function (length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  },
  number: function (max) {
    return Math.floor(Math.random() * max);
  },
  numberString: function (max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};

/***/ }),

/***/ 75148:
/*!***********************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/transport.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:utils:transport');
}
module.exports = function (availableTransports) {
  return {
    filterToEnabled: function (transportsWhitelist, info) {
      var transports = {
        main: [],
        facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }
      availableTransports.forEach(function (trans) {
        if (!trans) {
          return;
        }
        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }
        if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }
        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};

/***/ }),

/***/ 23998:
/*!*****************************************************!*\
  !*** ./node_modules/sockjs-client/lib/utils/url.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var URL = __webpack_require__(/*! url-parse */ 46299);
var debug = function () {};
if (true) {
  debug = __webpack_require__(/*! debug */ 26318)('sockjs-client:utils:url');
}
module.exports = {
  getOrigin: function (url) {
    if (!url) {
      return null;
    }
    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }
    var port = p.port;
    if (!port) {
      port = p.protocol === 'https:' ? '443' : '80';
    }
    return p.protocol + '//' + p.hostname + ':' + port;
  },
  isOriginEqual: function (a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  },
  isSchemeEqual: function (a, b) {
    return a.split(':')[0] === b.split(':')[0];
  },
  addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  },
  addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
  },
  isLoopbackAddr: function (addr) {
    return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
  }
};

/***/ }),

/***/ 25037:
/*!***************************************************!*\
  !*** ./node_modules/sockjs-client/lib/version.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = '1.6.1';

/***/ }),

/***/ 26318:
/*!**********************************************************************!*\
  !*** ./node_modules/sockjs-client/node_modules/debug/src/browser.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.

  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632

  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
  if (!this.useColors) {
    return;
  }
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }
    index++;
    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG

  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }
  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
module.exports = __webpack_require__(/*! ./common */ 19564)(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};

/***/ }),

/***/ 19564:
/*!*********************************************************************!*\
  !*** ./node_modules/sockjs-client/node_modules/debug/src/common.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ 1466);
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;
    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }
  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations

      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }
        index++;
        var formatter = createDebug.formatters[format];
        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }
        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }
    createDebug.instances.push(debug);
    return debug;
  }
  function destroy() {
    var index = createDebug.instances.indexOf(this);
    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }
    return false;
  }
  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */

  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;
    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */

  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */

  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }
    var i;
    var len;
    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */

  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }
  createDebug.enable(createDebug.load());
  return createDebug;
}
module.exports = setup;

/***/ }),

/***/ 46299:
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var required = __webpack_require__(/*! requires-port */ 716),
  qs = __webpack_require__(/*! querystringify */ 96716),
  controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
  CRHTLF = /[\n\r\t]/g,
  slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
  port = /:\d+$/,
  protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
  windowsDriveLetter = /^[a-zA-Z]:/;

/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(controlOrWhitespace, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'],
// Extract from the back.
['?', 'query'],
// Extract from the back.
function sanitize(address, url) {
  // Sanitize what is left of the address
  return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
}, ['/', 'pathname'],
// Extract from the back.
['@', 'auth', 1],
// Extract from the front.
[NaN, 'host', undefined, 1, 1],
// Set left over value.
[/:(\d*)$/, 'port', undefined, 1],
// RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = {
  hash: 1,
  query: 1
};

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
    type = typeof loc,
    key;
  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }
    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }
  return finaldestination;
}

/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */
function isSpecial(scheme) {
  return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address, location) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  location = location || {};
  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;
  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4];
    }
  }
  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }
  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
    i = path.length,
    last = path[i - 1],
    unshift = false,
    up = 0;
  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }
  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }
  var relative,
    extracted,
    parse,
    instruction,
    index,
    key,
    instructions = rules.slice(),
    type = typeof location,
    url = this,
    i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }
  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
    instructions[3] = [/(.*)/, 'pathname'];
  }
  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }
    parse = instruction[0];
    key = instruction[1];
    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      index = parse === '@' ? address.lastIndexOf(parse) : address.indexOf(parse);
      if (~index) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }
    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    index = url.auth.indexOf(':');
    if (~index) {
      url.username = url.auth.slice(0, index);
      url.username = encodeURIComponent(decodeURIComponent(url.username));
      url.password = url.auth.slice(index + 1);
      url.password = encodeURIComponent(decodeURIComponent(url.password));
    } else {
      url.username = encodeURIComponent(decodeURIComponent(url.auth));
    }
    url.auth = url.password ? url.username + ':' + url.password : url.username;
  }
  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;
  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }
      url[part] = value;
      break;
    case 'port':
      url[part] = value;
      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }
      break;
    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;
    case 'host':
      url[part] = value;
      if (port.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }
      break;
    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;
    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;
    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;
    case 'auth':
      var index = value.indexOf(':');
      if (~index) {
        url.username = value.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));
        url.password = value.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(value));
      }
  }
  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }
  url.auth = url.password ? url.username + ':' + url.password : url.username;
  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
    url = this,
    host = url.host,
    protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');
  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  } else if (url.password) {
    result += ':' + url.password;
    result += '@';
  } else if (url.protocol !== 'file:' && isSpecial(url.protocol) && !host && url.pathname !== '/') {
    //
    // Add back the empty userinfo, otherwise the original invalid URL
    // might be transformed into a valid one with `url.pathname` as host.
    //
    result += '@';
  }

  //
  // Trailing colon is removed from `url.host` when it is parsed. If it still
  // ends with a colon, then add back the trailing colon that was removed. This
  // prevents an invalid URL from being transformed into a valid one.
  //
  if (host[host.length - 1] === ':' || port.test(url.hostname) && !url.port) {
    host += ':';
  }
  result += host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}
Url.prototype = {
  set: set,
  toString: toString
};

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;

/***/ }),

/***/ 64486:
/*!*************************************************************!*\
  !*** ./node_modules/@stomp/rx-stomp/esm6/rx-stomp-state.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxStompState: () => (/* binding */ RxStompState)
/* harmony export */ });
/**
 * Possible states for the RxStomp
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompState;
(function (RxStompState) {
  RxStompState[RxStompState["CONNECTING"] = 0] = "CONNECTING";
  RxStompState[RxStompState["OPEN"] = 1] = "OPEN";
  RxStompState[RxStompState["CLOSING"] = 2] = "CLOSING";
  RxStompState[RxStompState["CLOSED"] = 3] = "CLOSED";
})(RxStompState = RxStompState || (RxStompState = {}));

/***/ }),

/***/ 99979:
/*!*******************************************************!*\
  !*** ./node_modules/@stomp/rx-stomp/esm6/rx-stomp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxStomp: () => (/* binding */ RxStomp)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 12235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 81527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 85584);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/stompjs */ 31754);
/* harmony import */ var _rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-stomp-state.js */ 64486);




/**
 * This is the main Stomp Client.
 * Typically, you will create an instance of this to connect to the STOMP broker.
 *
 * This wraps an instance of [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
 * {@link Client}.
 *
 * The key difference is that it exposes operations as RxJS Observables.
 * For example, when a STOMP endpoint is subscribed it returns an Observable
 * that will stream all received messages.
 *
 * With exception to beforeConnect, functionality related to all callbacks in
 * [@stomp/stompjs Client]{@link Client}
 * is exposed as Observables/Subjects/BehaviorSubjects.
 *
 * RxStomp also tries to transparently handle connection failures.
 *
 * Part of `@stomp/rx-stomp`
 */
class RxStomp {
  /**
   * Instance of actual
   * [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
   * {@link Client}.
   *
   * **Be careful in calling methods on it directly - you may get unintended consequences.**
   */
  get stompClient() {
    return this._stompClient;
  }
  /**
   * Constructor
   *
   * @param stompClient optionally inject the
   * [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
   * {@link Client} to wrap. If this is not provided, a client will
   * be constructed internally.
   */
  constructor(stompClient) {
    /**
     * Internal array to hold locally queued messages when STOMP broker is not connected.
     */
    this._queuedMessages = [];
    const client = stompClient ? stompClient : new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__.Client();
    this._stompClient = client;
    const noOp = () => {};
    // Before connect is no op by default
    this._beforeConnect = noOp;
    // Correlate errors is falsey op by default
    this._correlateErrors = () => undefined;
    // debug is no-op by default
    this._debug = noOp;
    // Initial state is CLOSED
    this._connectionStatePre$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CLOSED);
    this._connectedPre$ = this._connectionStatePre$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(currentState => {
      return currentState === _rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.OPEN;
    }));
    // Initial state is CLOSED
    this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CLOSED);
    this.connected$ = this.connectionState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(currentState => {
      return currentState === _rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.OPEN;
    }));
    // Setup sending queuedMessages
    this.connected$.subscribe(() => {
      this._sendQueuedMessages();
    });
    this._serverHeadersBehaviourSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.serverHeaders$ = this._serverHeadersBehaviourSubject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(headers => {
      return headers !== null;
    }));
    this.stompErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.unhandledMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.unhandledReceipts$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.unhandledFrame$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.webSocketErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  /**
   * Set configuration. This method may be called multiple times.
   * Each call will add to the existing configuration.
   *
   * Example:
   *
   * ```javascript
   *        const rxStomp = new RxStomp();
   *        rxStomp.configure({
   *          brokerURL: 'ws://127.0.0.1:15674/ws',
   *          connectHeaders: {
   *            login: 'guest',
   *            passcode: 'guest'
   *          },
   *          heartbeatIncoming: 0,
   *          heartbeatOutgoing: 20000,
   *          reconnectDelay: 200,
   *          debug: (msg: string): void => {
   *            console.log(new Date(), msg);
   *          }
   *        });
   *        rxStomp.activate();
   * ```
   *
   * Maps to: [Client#configure]{@link Client#configure}
   */
  configure(rxStompConfig) {
    const stompConfig = Object.assign({}, rxStompConfig);
    if (stompConfig.beforeConnect) {
      this._beforeConnect = stompConfig.beforeConnect;
      delete stompConfig.beforeConnect;
    }
    if (stompConfig.correlateErrors) {
      this._correlateErrors = stompConfig.correlateErrors;
      delete stompConfig.correlateErrors;
    }
    // RxStompConfig has subset of StompConfig fields
    this._stompClient.configure(stompConfig);
    if (stompConfig.debug) {
      this._debug = stompConfig.debug;
    }
  }
  /**
   * Initiate the connection with the broker.
   * If the connection breaks, as per [RxStompConfig#reconnectDelay]{@link RxStompConfig#reconnectDelay},
   * it will keep trying to reconnect.
   *
   * Call [RxStomp#deactivate]{@link RxStomp#deactivate} to disconnect and stop reconnection attempts.
   *
   * Maps to: [Client#activate]{@link Client#activate}
   */
  activate() {
    var _this = this;
    this._stompClient.configure({
      beforeConnect: function () {
        var _ref = (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this._changeState(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CONNECTING);
          // Call handler
          yield _this._beforeConnect(_this);
        });
        return function beforeConnect() {
          return _ref.apply(this, arguments);
        };
      }(),
      onConnect: frame => {
        this._serverHeadersBehaviourSubject$.next(frame.headers);
        // Indicate our connected state to observers
        this._changeState(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.OPEN);
      },
      onStompError: frame => {
        // Trigger the frame subject
        this.stompErrors$.next(frame);
      },
      onWebSocketClose: () => {
        this._changeState(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CLOSED);
      },
      onUnhandledMessage: message => {
        this.unhandledMessage$.next(message);
      },
      onUnhandledReceipt: frame => {
        this.unhandledReceipts$.next(frame);
      },
      onUnhandledFrame: frame => {
        this.unhandledFrame$.next(frame);
      },
      onWebSocketError: evt => {
        this.webSocketErrors$.next(evt);
      }
    });
    // Attempt connection
    this._stompClient.activate();
  }
  /**
   * Disconnect if connected and stop auto reconnect loop.
   * Appropriate callbacks will be invoked if the underlying STOMP connection was connected.
   *
   * To reactivate, you can call [RxStomp#activate]{@link RxStomp#activate}.
   *
   * This call is async. It will resolve immediately if there is no underlying active websocket,
   * otherwise, it will resolve after the underlying websocket is properly disposed of.
   *
   * Experimental: Since version 2.0.0, pass `force: true` to immediately discard the underlying connection.
   * See [Client#deactivate]{@link Client#deactivate} for details.
   *
   * Maps to: [Client#deactivate]{@link Client#deactivate}
   */
  deactivate(options = {}) {
    var _this2 = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._changeState(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CLOSING);
      // The promise will be resolved immediately if there is no active connection
      // otherwise, after it has successfully disconnected.
      yield _this2._stompClient.deactivate(options);
      _this2._changeState(_rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.CLOSED);
    })();
  }
  /**
   * It will return `true` if STOMP broker is connected and `false` otherwise.
   */
  connected() {
    return this.connectionState$.getValue() === _rx_stomp_state_js__WEBPACK_IMPORTED_MODULE_3__.RxStompState.OPEN;
  }
  /**
   * If the client is active (connected or going to reconnect).
   *
   *  Maps to: [Client#active]{@link Client#active}
   */
  get active() {
    return this.stompClient.active;
  }
  /**
   * Send a message to a named destination. Refer to your STOMP broker documentation for types
   * and naming of destinations.
   *
   * STOMP protocol specifies and suggests some headers and also allows broker-specific headers.
   *
   * `body` must be String.
   * You will need to covert the payload to string in case it is not string (e.g. JSON).
   *
   * To send a binary message body, use binaryBody parameter. It should be a
   * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
   * Sometimes brokers may not support binary frames out of the box.
   * Please check your broker documentation.
   *
   * The ` content-length` header is automatically added to the STOMP Frame sent to the broker.
   * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
   * For binary messages, `content-length` header is always added.
   *
   * Caution: The broker will, most likely, report an error and disconnect if the message body has NULL octet(s)
   * and `content-length` header is missing.
   *
   * The message will get locally queued if the STOMP broker is not connected. It will attempt to
   * publish queued messages as soon as the broker gets connected.
   * If you do not want that behavior,
   * please set [retryIfDisconnected]{@link IRxStompPublishParams#retryIfDisconnected} to `false`
   * in the parameters.
   * When `false`, this function will raise an error if a message could not be sent immediately.
   *
   * Maps to: [Client#publish]{@link Client#publish}
   *
   * See: {@link IRxStompPublishParams} and {@link IPublishParams}
   *
   * ```javascript
   *        rxStomp.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
   *
   *        // Only destination is mandatory parameter
   *        rxStomp.publish({destination: "/queue/test", body: "Hello, STOMP"});
   *
   *        // Skip content-length header in the frame to the broker
   *        rxStomp.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
   *
   *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
   *        // setting content-type header is not mandatory, however a good practice
   *        rxStomp.publish({destination: '/topic/special', binaryBody: binaryData,
   *                         headers: {'content-type': 'application/octet-stream'}});
   * ```
   */
  publish(parameters) {
    // retry behaviour is defaulted to true
    const shouldRetry = parameters.retryIfDisconnected == null ? true : parameters.retryIfDisconnected;
    if (this.connected()) {
      this._stompClient.publish(parameters);
    } else if (shouldRetry) {
      this._debug(`Not connected, queueing`);
      this._queuedMessages.push(parameters);
    } else {
      throw new Error('Cannot publish while broker is not connected');
    }
  }
  /** It will send queued messages. */
  _sendQueuedMessages() {
    const queuedMessages = this._queuedMessages;
    this._queuedMessages = [];
    if (queuedMessages.length === 0) {
      return;
    }
    this._debug(`Will try sending  ${queuedMessages.length} queued message(s)`);
    for (const queuedMessage of queuedMessages) {
      this._debug(`Attempting to send ${queuedMessage}`);
      this.publish(queuedMessage);
    }
  }
  watch(opts, headers = {}) {
    const defaults = {
      subHeaders: {},
      unsubHeaders: {},
      subscribeOnlyOnce: false
    };
    let params;
    if (typeof opts === 'string') {
      params = Object.assign({}, defaults, {
        destination: opts,
        subHeaders: headers
      });
    } else {
      params = Object.assign({}, defaults, opts);
    }
    /* Well, the logic is complicated but works beautifully. RxJS is indeed wonderful.
     *
     * We need to activate the underlying subscription immediately if Stomp is connected. If not, it should
     * subscribe when it gets next connected. Further, it should re-establish the subscription whenever Stomp
     * successfully reconnects.
     *
     * Actual implementation is simple, we filter the BehaviourSubject 'state' so that we can trigger whenever Stomp is
     * connected. Since 'state' is a BehaviourSubject, if Stomp is already connected, it will immediately trigger.
     *
     * The observable that we return to the caller remains the same across all reconnects, so no special handling needed at
     * the message subscriber.
     */
    this._debug(`Request to subscribe ${params.destination}`);
    const coldObservable = rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable.create(messages => {
      /*
       * These variables will be used as part of the closure and work their magic during unsubscribe
       */
      let stompSubscription; // Stomp
      let stompConnectedSubscription; // RxJS
      let connectedPre$ = this._connectedPre$;
      if (params.subscribeOnlyOnce) {
        connectedPre$ = connectedPre$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
      }
      const stompErrorsSubscription = this.stompErrors$.subscribe(error => {
        const correlatedDestination = this._correlateErrors(error);
        if (correlatedDestination === params.destination) {
          messages.error(error);
        }
      });
      stompConnectedSubscription = connectedPre$.subscribe(() => {
        this._debug(`Will subscribe to ${params.destination}`);
        let subHeaders = params.subHeaders;
        if (typeof subHeaders === 'function') {
          subHeaders = subHeaders();
        }
        stompSubscription = this._stompClient.subscribe(params.destination, message => {
          messages.next(message);
        }, subHeaders);
      });
      return () => {
        /* cleanup function, it will be called when no subscribers are left */
        this._debug(`Stop watching connection state (for ${params.destination})`);
        stompConnectedSubscription.unsubscribe();
        stompErrorsSubscription.unsubscribe();
        if (this.connected()) {
          this._debug(`Will unsubscribe from ${params.destination} at Stomp`);
          let unsubHeaders = params.unsubHeaders;
          if (typeof unsubHeaders === 'function') {
            unsubHeaders = unsubHeaders();
          }
          stompSubscription.unsubscribe(unsubHeaders);
        } else {
          this._debug(`Stomp not connected, no need to unsubscribe from ${params.destination} at Stomp`);
        }
      };
    });
    /**
     * Important - convert it to hot Observable - otherwise, if the user code subscribes
     * to this observable twice, it will subscribe twice to Stomp broker. (This was happening in the current example).
     * A long but good explanatory article at https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
     */
    return coldObservable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
  }
  /**
   * **Deprecated** Please use {@link asyncReceipt}.
   */
  watchForReceipt(receiptId, callback) {
    this._stompClient.watchForReceipt(receiptId, callback);
  }
  /**
   * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
   * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
   * The value (say receipt-id) for this header needs to be unique for each use. Typically, a sequence, a UUID, a
   * random number or a combination may be used.
   *
   * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
   * The operation needs to be matched based on the value of the receipt-id.
   *
   * This method allows watching for a receipt and invoking the callback
   * when the corresponding receipt has been received.
   *
   * The promise will yield the actual {@link IFrame}.
   *
   * Example:
   * ```javascript
   *        // Publishing with acknowledgement
   *        let receiptId = randomText();
   *
   *        rxStomp.publish({destination: '/topic/special', headers: {receipt: receiptId}, body: msg});
   *        await rxStomp.asyncReceipt(receiptId);; // it yields the actual Frame
   * ```
   *
   * Maps to: [Client#watchForReceipt]{@link Client#watchForReceipt}
   */
  asyncReceipt(receiptId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(this.unhandledReceipts$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(frame => frame.headers['receipt-id'] === receiptId)));
  }
  _changeState(state) {
    this._connectionStatePre$.next(state);
    this.connectionState$.next(state);
  }
}

/***/ }),

/***/ 21374:
/*!***************************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/augment-websocket.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   augmentWebsocket: () => (/* binding */ augmentWebsocket)
/* harmony export */ });
/**
 * @internal
 */
function augmentWebsocket(webSocket, debug) {
  webSocket.terminate = function () {
    const noOp = () => {};
    // set all callbacks to no op
    this.onerror = noOp;
    this.onmessage = noOp;
    this.onopen = noOp;
    const ts = new Date();
    const id = Math.random().toString().substring(2, 8); // A simulated id
    const origOnClose = this.onclose;
    // Track delay in actual closure of the socket
    this.onclose = closeEvent => {
      const delay = new Date().getTime() - ts.getTime();
      debug(`Discarded socket (#${id})  closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
    };
    this.close();
    origOnClose?.call(webSocket, {
      code: 4001,
      reason: `Quick discarding socket (#${id}) without waiting for the shutdown sequence.`,
      wasClean: false
    });
  };
}

/***/ }),

/***/ 70516:
/*!**************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/byte.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BYTE: () => (/* binding */ BYTE)
/* harmony export */ });
/**
 * Some byte values, used as per STOMP specifications.
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
const BYTE = {
  // LINEFEED byte (octet 10)
  LF: '\x0A',
  // NULL byte (octet 0)
  NULL: '\x00'
};

/***/ }),

/***/ 31754:
/*!****************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/client.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _stomp_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stomp-handler.js */ 88642);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 70415);
/* harmony import */ var _versions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versions.js */ 43653);




/**
 * STOMP Client Class.
 *
 * Part of `@stomp/stompjs`.
 */
class Client {
  /**
   * Create an instance.
   */
  constructor(conf = {}) {
    /**
     * STOMP versions to attempt during STOMP handshake. By default, versions `1.2`, `1.1`, and `1.0` are attempted.
     *
     * Example:
     * ```javascript
     *        // Try only versions 1.1 and 1.0
     *        client.stompVersions = new Versions(['1.1', '1.0'])
     * ```
     */
    this.stompVersions = _versions_js__WEBPACK_IMPORTED_MODULE_1__.Versions.default;
    /**
     * Will retry if Stomp connection is not established in specified milliseconds.
     * Default 0, which switches off automatic reconnection.
     */
    this.connectionTimeout = 0;
    /**
     *  automatically reconnect with delay in milliseconds, set to 0 to disable.
     */
    this.reconnectDelay = 5000;
    /**
     * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
     */
    this.heartbeatIncoming = 10000;
    /**
     * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
     */
    this.heartbeatOutgoing = 10000;
    /**
     * This switches on a non-standard behavior while sending WebSocket packets.
     * It splits larger (text) packets into chunks of [maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
     * Only Java Spring brokers seem to support this mode.
     *
     * WebSockets, by itself, split large (text) packets,
     * so it is not needed with a truly compliant STOMP/WebSocket broker.
     * Setting it for such a broker will cause large messages to fail.
     *
     * `false` by default.
     *
     * Binary frames are never split.
     */
    this.splitLargeFrames = false;
    /**
     * See [splitLargeFrames]{@link Client#splitLargeFrames}.
     * This has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
     */
    this.maxWebSocketChunkSize = 8 * 1024;
    /**
     * Usually the
     * [type of WebSocket frame]{@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send#Parameters}
     * is automatically decided by type of the payload.
     * Default is `false`, which should work with all compliant brokers.
     *
     * Set this flag to force binary frames.
     */
    this.forceBinaryWSFrames = false;
    /**
     * A bug in ReactNative chops a string on occurrence of a NULL.
     * See issue [https://github.com/stomp-js/stompjs/issues/89]{@link https://github.com/stomp-js/stompjs/issues/89}.
     * This makes incoming WebSocket messages invalid STOMP packets.
     * Setting this flag attempts to reverse the damage by appending a NULL.
     * If the broker splits a large message into multiple WebSocket messages,
     * this flag will cause data loss and abnormal termination of connection.
     *
     * This is not an ideal solution, but a stop gap until the underlying issue is fixed at ReactNative library.
     */
    this.appendMissingNULLonIncoming = false;
    /**
     * Browsers do not immediately close WebSockets when `.close` is issued.
     * This may cause reconnection to take a significantly long time in case
     *  of some types of failures.
     * In case of incoming heartbeat failure, this experimental flag instructs
     * the library to discard the socket immediately
     * (even before it is actually closed).
     */
    this.discardWebsocketOnCommFailure = false;
    /**
     * Activation state.
     *
     * It will usually be ACTIVE or INACTIVE.
     * When deactivating, it may go from ACTIVE to INACTIVE without entering DEACTIVATING.
     */
    this.state = _types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.INACTIVE;
    // No op callbacks
    const noOp = () => {};
    this.debug = noOp;
    this.beforeConnect = noOp;
    this.onConnect = noOp;
    this.onDisconnect = noOp;
    this.onUnhandledMessage = noOp;
    this.onUnhandledReceipt = noOp;
    this.onUnhandledFrame = noOp;
    this.onStompError = noOp;
    this.onWebSocketClose = noOp;
    this.onWebSocketError = noOp;
    this.logRawCommunication = false;
    this.onChangeState = noOp;
    // These parameters would typically get proper values before connect is called
    this.connectHeaders = {};
    this._disconnectHeaders = {};
    // Apply configuration
    this.configure(conf);
  }
  /**
   * Underlying WebSocket instance, READONLY.
   */
  get webSocket() {
    return this._stompHandler?._webSocket;
  }
  /**
   * Disconnection headers.
   */
  get disconnectHeaders() {
    return this._disconnectHeaders;
  }
  set disconnectHeaders(value) {
    this._disconnectHeaders = value;
    if (this._stompHandler) {
      this._stompHandler.disconnectHeaders = this._disconnectHeaders;
    }
  }
  /**
   * `true` if there is an active connection to STOMP Broker
   */
  get connected() {
    return !!this._stompHandler && this._stompHandler.connected;
  }
  /**
   * version of STOMP protocol negotiated with the server, READONLY
   */
  get connectedVersion() {
    return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
  }
  /**
   * if the client is active (connected or going to reconnect)
   */
  get active() {
    return this.state === _types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.ACTIVE;
  }
  _changeState(state) {
    this.state = state;
    this.onChangeState(state);
  }
  /**
   * Update configuration.
   */
  configure(conf) {
    // bulk assign all properties to this
    Object.assign(this, conf);
  }
  /**
   * Initiate the connection with the broker.
   * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
   * it will keep trying to reconnect.
   *
   * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
   */
  activate() {
    const _activate = () => {
      if (this.active) {
        this.debug('Already ACTIVE, ignoring request to activate');
        return;
      }
      this._changeState(_types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.ACTIVE);
      this._connect();
    };
    // if it is deactivating, wait for it to complete before activating.
    if (this.state === _types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.DEACTIVATING) {
      this.debug('Waiting for deactivation to finish before activating');
      this.deactivate().then(() => {
        _activate();
      });
    } else {
      _activate();
    }
  }
  _connect() {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.beforeConnect();
      if (_this._stompHandler) {
        _this.debug('There is already a stompHandler, skipping the call to connect');
        return;
      }
      if (!_this.active) {
        _this.debug('Client has been marked inactive, will not attempt to connect');
        return;
      }
      // setup connection watcher
      if (_this.connectionTimeout > 0) {
        // clear first
        if (_this._connectionWatcher) {
          clearTimeout(_this._connectionWatcher);
        }
        _this._connectionWatcher = setTimeout(() => {
          if (_this.connected) {
            return;
          }
          // Connection not established, close the underlying socket
          // a reconnection will be attempted
          _this.debug(`Connection not established in ${_this.connectionTimeout}ms, closing socket`);
          _this.forceDisconnect();
        }, _this.connectionTimeout);
      }
      _this.debug('Opening Web Socket...');
      // Get the actual WebSocket (or a similar object)
      const webSocket = _this._createWebSocket();
      _this._stompHandler = new _stomp_handler_js__WEBPACK_IMPORTED_MODULE_3__.StompHandler(_this, webSocket, {
        debug: _this.debug,
        stompVersions: _this.stompVersions,
        connectHeaders: _this.connectHeaders,
        disconnectHeaders: _this._disconnectHeaders,
        heartbeatIncoming: _this.heartbeatIncoming,
        heartbeatOutgoing: _this.heartbeatOutgoing,
        splitLargeFrames: _this.splitLargeFrames,
        maxWebSocketChunkSize: _this.maxWebSocketChunkSize,
        forceBinaryWSFrames: _this.forceBinaryWSFrames,
        logRawCommunication: _this.logRawCommunication,
        appendMissingNULLonIncoming: _this.appendMissingNULLonIncoming,
        discardWebsocketOnCommFailure: _this.discardWebsocketOnCommFailure,
        onConnect: frame => {
          // Successfully connected, stop the connection watcher
          if (_this._connectionWatcher) {
            clearTimeout(_this._connectionWatcher);
            _this._connectionWatcher = undefined;
          }
          if (!_this.active) {
            _this.debug('STOMP got connected while deactivate was issued, will disconnect now');
            _this._disposeStompHandler();
            return;
          }
          _this.onConnect(frame);
        },
        onDisconnect: frame => {
          _this.onDisconnect(frame);
        },
        onStompError: frame => {
          _this.onStompError(frame);
        },
        onWebSocketClose: evt => {
          _this._stompHandler = undefined; // a new one will be created in case of a reconnect
          if (_this.state === _types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.DEACTIVATING) {
            // Mark deactivation complete
            _this._changeState(_types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.INACTIVE);
          }
          // The callback is called before attempting to reconnect, this would allow the client
          // to be `deactivated` in the callback.
          _this.onWebSocketClose(evt);
          if (_this.active) {
            _this._schedule_reconnect();
          }
        },
        onWebSocketError: evt => {
          _this.onWebSocketError(evt);
        },
        onUnhandledMessage: message => {
          _this.onUnhandledMessage(message);
        },
        onUnhandledReceipt: frame => {
          _this.onUnhandledReceipt(frame);
        },
        onUnhandledFrame: frame => {
          _this.onUnhandledFrame(frame);
        }
      });
      _this._stompHandler.start();
    })();
  }
  _createWebSocket() {
    let webSocket;
    if (this.webSocketFactory) {
      webSocket = this.webSocketFactory();
    } else if (this.brokerURL) {
      webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
    } else {
      throw new Error('Either brokerURL or webSocketFactory must be provided');
    }
    webSocket.binaryType = 'arraybuffer';
    return webSocket;
  }
  _schedule_reconnect() {
    if (this.reconnectDelay > 0) {
      this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`);
      this._reconnector = setTimeout(() => {
        this._connect();
      }, this.reconnectDelay);
    }
  }
  /**
   * Disconnect if connected and stop auto reconnect loop.
   * Appropriate callbacks will be invoked if there is an underlying STOMP connection.
   *
   * This call is async. It will resolve immediately if there is no underlying active websocket,
   * otherwise, it will resolve after the underlying websocket is properly disposed of.
   *
   * It is not an error to invoke this method more than once.
   * Each of those would resolve on completion of deactivation.
   *
   * To reactivate, you can call [Client#activate]{@link Client#activate}.
   *
   * Experimental: pass `force: true` to immediately discard the underlying connection.
   * This mode will skip both the STOMP and the Websocket shutdown sequences.
   * In some cases, browsers take a long time in the Websocket shutdown
   * if the underlying connection had gone stale.
   * Using this mode can speed up.
   * When this mode is used, the actual Websocket may linger for a while
   * and the broker may not realize that the connection is no longer in use.
   *
   * It is possible to invoke this method initially without the `force` option
   * and subsequently, say after a wait, with the `force` option.
   */
  deactivate(options = {}) {
    var _this2 = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const force = options.force || false;
      const needToDispose = _this2.active;
      let retPromise;
      if (_this2.state === _types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.INACTIVE) {
        _this2.debug(`Already INACTIVE, nothing more to do`);
        return Promise.resolve();
      }
      _this2._changeState(_types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.DEACTIVATING);
      // Clear if a reconnection was scheduled
      if (_this2._reconnector) {
        clearTimeout(_this2._reconnector);
        _this2._reconnector = undefined;
      }
      if (_this2._stompHandler &&
      // @ts-ignore - if there is a _stompHandler, there is the webSocket
      _this2.webSocket.readyState !== _types_js__WEBPACK_IMPORTED_MODULE_2__.StompSocketState.CLOSED) {
        const origOnWebSocketClose = _this2._stompHandler.onWebSocketClose;
        // we need to wait for the underlying websocket to close
        retPromise = new Promise((resolve, reject) => {
          // @ts-ignore - there is a _stompHandler
          _this2._stompHandler.onWebSocketClose = evt => {
            origOnWebSocketClose(evt);
            resolve();
          };
        });
      } else {
        // indicate that auto reconnect loop should terminate
        _this2._changeState(_types_js__WEBPACK_IMPORTED_MODULE_2__.ActivationState.INACTIVE);
        return Promise.resolve();
      }
      if (force) {
        _this2._stompHandler?.discardWebsocket();
      } else if (needToDispose) {
        _this2._disposeStompHandler();
      }
      return retPromise;
    })();
  }
  /**
   * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
   * This is different from a normal disconnect where a DISCONNECT sequence is carried out with the broker.
   * After forcing disconnect, automatic reconnect will be attempted.
   * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
   */
  forceDisconnect() {
    if (this._stompHandler) {
      this._stompHandler.forceDisconnect();
    }
  }
  _disposeStompHandler() {
    // Dispose STOMP Handler
    if (this._stompHandler) {
      this._stompHandler.dispose();
    }
  }
  /**
   * Send a message to a named destination. Refer to your STOMP broker documentation for types
   * and naming of destinations.
   *
   * STOMP protocol specifies and suggests some headers and also allows broker-specific headers.
   *
   * `body` must be String.
   * You will need to covert the payload to string in case it is not string (e.g. JSON).
   *
   * To send a binary message body, use `binaryBody` parameter. It should be a
   * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
   * Sometimes brokers may not support binary frames out of the box.
   * Please check your broker documentation.
   *
   * `content-length` header is automatically added to the STOMP Frame sent to the broker.
   * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
   * For binary messages, `content-length` header is always added.
   *
   * Caution: The broker will, most likely, report an error and disconnect
   * if the message body has NULL octet(s) and `content-length` header is missing.
   *
   * ```javascript
   *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
   *
   *        // Only destination is mandatory parameter
   *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
   *
   *        // Skip content-length header in the frame to the broker
   *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
   *
   *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
   *        // setting content-type header is not mandatory, however a good practice
   *        client.publish({destination: '/topic/special', binaryBody: binaryData,
   *                         headers: {'content-type': 'application/octet-stream'}});
   * ```
   */
  publish(params) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.publish(params);
  }
  _checkConnection() {
    if (!this.connected) {
      throw new TypeError('There is no underlying STOMP connection');
    }
  }
  /**
   * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
   * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
   * The value (say receipt-id) for this header needs to be unique for each use.
   * Typically, a sequence, a UUID, a random number or a combination may be used.
   *
   * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
   * The operation needs to be matched based on the value of the receipt-id.
   *
   * This method allows watching for a receipt and invoking the callback
   *  when the corresponding receipt has been received.
   *
   * The actual {@link IFrame} will be passed as parameter to the callback.
   *
   * Example:
   * ```javascript
   *        // Subscribing with acknowledgement
   *        let receiptId = randomText();
   *
   *        client.watchForReceipt(receiptId, function() {
   *          // Will be called after server acknowledges
   *        });
   *
   *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
   *
   *
   *        // Publishing with acknowledgement
   *        receiptId = randomText();
   *
   *        client.watchForReceipt(receiptId, function() {
   *          // Will be called after server acknowledges
   *        });
   *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
   * ```
   */
  watchForReceipt(receiptId, callback) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.watchForReceipt(receiptId, callback);
  }
  /**
   * Subscribe to a STOMP Broker location. The callback will be invoked for each
   * received message with the {@link IMessage} as argument.
   *
   * Note: The library will generate a unique ID if there is none provided in the headers.
   *       To use your own ID, pass it using the `headers` argument.
   *
   * ```javascript
   *        callback = function(message) {
   *        // called when the client receives a STOMP message from the server
   *          if (message.body) {
   *            alert("got message with body " + message.body)
   *          } else {
   *            alert("got empty message");
   *          }
   *        });
   *
   *        var subscription = client.subscribe("/queue/test", callback);
   *
   *        // Explicit subscription id
   *        var mySubId = 'my-subscription-id-001';
   *        var subscription = client.subscribe(destination, callback, { id: mySubId });
   * ```
   */
  subscribe(destination, callback, headers = {}) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    return this._stompHandler.subscribe(destination, callback, headers);
  }
  /**
   * It is preferable to unsubscribe from a subscription by calling
   * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
   *
   * ```javascript
   *        var subscription = client.subscribe(destination, onmessage);
   *        // ...
   *        subscription.unsubscribe();
   * ```
   *
   * See: https://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
   */
  unsubscribe(id, headers = {}) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.unsubscribe(id, headers);
  }
  /**
   * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
   * and [abort]{@link ITransaction#abort}.
   *
   * `transactionId` is optional, if not passed the library will generate it internally.
   */
  begin(transactionId) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    return this._stompHandler.begin(transactionId);
  }
  /**
   * Commit a transaction.
   *
   * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
   * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
   *
   * ```javascript
   *        var tx = client.begin(txId);
   *        //...
   *        tx.commit();
   * ```
   */
  commit(transactionId) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.commit(transactionId);
  }
  /**
   * Abort a transaction.
   * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
   * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
   *
   * ```javascript
   *        var tx = client.begin(txId);
   *        //...
   *        tx.abort();
   * ```
   */
  abort(transactionId) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.abort(transactionId);
  }
  /**
   * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
   * on the {@link IMessage} handled by a subscription callback:
   *
   * ```javascript
   *        var callback = function (message) {
   *          // process the message
   *          // acknowledge it
   *          message.ack();
   *        };
   *        client.subscribe(destination, callback, {'ack': 'client'});
   * ```
   */
  ack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.ack(messageId, subscriptionId, headers);
  }
  /**
   * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
   * on the {@link IMessage} handled by a subscription callback:
   *
   * ```javascript
   *        var callback = function (message) {
   *          // process the message
   *          // an error occurs, nack it
   *          message.nack();
   *        };
   *        client.subscribe(destination, callback, {'ack': 'client'});
   * ```
   */
  nack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    // @ts-ignore - we already checked that there is a _stompHandler, and it is connected
    this._stompHandler.nack(messageId, subscriptionId, headers);
  }
}

/***/ }),

/***/ 84611:
/*!********************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/frame-impl.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameImpl: () => (/* binding */ FrameImpl)
/* harmony export */ });
/* harmony import */ var _byte_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte.js */ 70516);

/**
 * Frame class represents a STOMP frame.
 *
 * @internal
 */
class FrameImpl {
  /**
   * Frame constructor. `command`, `headers` and `body` are available as properties.
   *
   * @internal
   */
  constructor(params) {
    const {
      command,
      headers,
      body,
      binaryBody,
      escapeHeaderValues,
      skipContentLengthHeader
    } = params;
    this.command = command;
    this.headers = Object.assign({}, headers || {});
    if (binaryBody) {
      this._binaryBody = binaryBody;
      this.isBinaryBody = true;
    } else {
      this._body = body || '';
      this.isBinaryBody = false;
    }
    this.escapeHeaderValues = escapeHeaderValues || false;
    this.skipContentLengthHeader = skipContentLengthHeader || false;
  }
  /**
   * body of the frame
   */
  get body() {
    if (!this._body && this.isBinaryBody) {
      this._body = new TextDecoder().decode(this._binaryBody);
    }
    return this._body || '';
  }
  /**
   * body as Uint8Array
   */
  get binaryBody() {
    if (!this._binaryBody && !this.isBinaryBody) {
      this._binaryBody = new TextEncoder().encode(this._body);
    }
    // At this stage it will definitely have a valid value
    return this._binaryBody;
  }
  /**
   * deserialize a STOMP Frame from raw data.
   *
   * @internal
   */
  static fromRawFrame(rawFrame, escapeHeaderValues) {
    const headers = {};
    const trim = str => str.replace(/^\s+|\s+$/g, '');
    // In case of repeated headers, as per standards, first value need to be used
    for (const header of rawFrame.headers.reverse()) {
      const idx = header.indexOf(':');
      const key = trim(header[0]);
      let value = trim(header[1]);
      if (escapeHeaderValues && rawFrame.command !== 'CONNECT' && rawFrame.command !== 'CONNECTED') {
        value = FrameImpl.hdrValueUnEscape(value);
      }
      headers[key] = value;
    }
    return new FrameImpl({
      command: rawFrame.command,
      headers,
      binaryBody: rawFrame.binaryBody,
      escapeHeaderValues
    });
  }
  /**
   * @internal
   */
  toString() {
    return this.serializeCmdAndHeaders();
  }
  /**
   * serialize this Frame in a format suitable to be passed to WebSocket.
   * If the body is string the output will be string.
   * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
   *
   * @internal
   */
  serialize() {
    const cmdAndHeaders = this.serializeCmdAndHeaders();
    if (this.isBinaryBody) {
      return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
    } else {
      return cmdAndHeaders + this._body + _byte_js__WEBPACK_IMPORTED_MODULE_0__.BYTE.NULL;
    }
  }
  serializeCmdAndHeaders() {
    const lines = [this.command];
    if (this.skipContentLengthHeader) {
      delete this.headers['content-length'];
    }
    for (const name of Object.keys(this.headers || {})) {
      const value = this.headers[name];
      if (this.escapeHeaderValues && this.command !== 'CONNECT' && this.command !== 'CONNECTED') {
        lines.push(`${name}:${FrameImpl.hdrValueEscape(`${value}`)}`);
      } else {
        lines.push(`${name}:${value}`);
      }
    }
    if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) {
      lines.push(`content-length:${this.bodyLength()}`);
    }
    return lines.join(_byte_js__WEBPACK_IMPORTED_MODULE_0__.BYTE.LF) + _byte_js__WEBPACK_IMPORTED_MODULE_0__.BYTE.LF + _byte_js__WEBPACK_IMPORTED_MODULE_0__.BYTE.LF;
  }
  isBodyEmpty() {
    return this.bodyLength() === 0;
  }
  bodyLength() {
    const binaryBody = this.binaryBody;
    return binaryBody ? binaryBody.length : 0;
  }
  /**
   * Compute the size of a UTF-8 string by counting its number of bytes
   * (and not the number of characters composing the string)
   */
  static sizeOfUTF8(s) {
    return s ? new TextEncoder().encode(s).length : 0;
  }
  static toUnit8Array(cmdAndHeaders, binaryBody) {
    const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
    const nullTerminator = new Uint8Array([0]);
    const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
    uint8Frame.set(uint8CmdAndHeaders);
    uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
    uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
    return uint8Frame;
  }
  /**
   * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
   *
   * @internal
   */
  static marshall(params) {
    const frame = new FrameImpl(params);
    return frame.serialize();
  }
  /**
   *  Escape header values
   */
  static hdrValueEscape(str) {
    return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
  }
  /**
   * UnEscape header values
   */
  static hdrValueUnEscape(str) {
    return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
  }
}

/***/ }),

/***/ 74867:
/*!****************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/parser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/**
 * @internal
 */
const NULL = 0;
/**
 * @internal
 */
const LF = 10;
/**
 * @internal
 */
const CR = 13;
/**
 * @internal
 */
const COLON = 58;
/**
 * This is an evented, rec descent parser.
 * A stream of Octets can be passed and whenever it recognizes
 * a complete Frame or an incoming ping it will invoke the registered callbacks.
 *
 * All incoming Octets are fed into _onByte function.
 * Depending on current state the _onByte function keeps changing.
 * Depending on the state it keeps accumulating into _token and _results.
 * State is indicated by current value of _onByte, all states are named as _collect.
 *
 * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
 * imply that all lengths are considered in bytes (instead of string lengths).
 * So, before actual parsing, if the incoming data is String it is converted to Octets.
 * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
 *
 * There is no peek function on the incoming data.
 * When a state change occurs based on an Octet without consuming the Octet,
 * the Octet, after state change, is fed again (_reinjectByte).
 * This became possible as the state change can be determined by inspecting just one Octet.
 *
 * There are two modes to collect the body, if content-length header is there then it by counting Octets
 * otherwise it is determined by NULL terminator.
 *
 * Following the standards, the command and headers are converted to Strings
 * and the body is returned as Octets.
 * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
 *
 * This parser does not use Regular Expressions as that can only operate on Strings.
 *
 * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
 * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
 * is pushed.
 *
 * Typically the higher level function will convert headers to Hash, handle unescaping of header values
 * (which is protocol version specific), and convert body to text.
 *
 * Check the parser.spec.js to understand cases that this parser is supposed to handle.
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
class Parser {
  constructor(onFrame, onIncomingPing) {
    this.onFrame = onFrame;
    this.onIncomingPing = onIncomingPing;
    this._encoder = new TextEncoder();
    this._decoder = new TextDecoder();
    this._token = [];
    this._initState();
  }
  parseChunk(segment, appendMissingNULLonIncoming = false) {
    let chunk;
    if (typeof segment === 'string') {
      chunk = this._encoder.encode(segment);
    } else {
      chunk = new Uint8Array(segment);
    }
    // See https://github.com/stomp-js/stompjs/issues/89
    // Remove when underlying issue is fixed.
    //
    // Send a NULL byte, if the last byte of a Text frame was not NULL.F
    if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
      const chunkWithNull = new Uint8Array(chunk.length + 1);
      chunkWithNull.set(chunk, 0);
      chunkWithNull[chunk.length] = 0;
      chunk = chunkWithNull;
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < chunk.length; i++) {
      const byte = chunk[i];
      this._onByte(byte);
    }
  }
  // The following implements a simple Rec Descent Parser.
  // The grammar is simple and just one byte tells what should be the next state
  _collectFrame(byte) {
    if (byte === NULL) {
      // Ignore
      return;
    }
    if (byte === CR) {
      // Ignore CR
      return;
    }
    if (byte === LF) {
      // Incoming Ping
      this.onIncomingPing();
      return;
    }
    this._onByte = this._collectCommand;
    this._reinjectByte(byte);
  }
  _collectCommand(byte) {
    if (byte === CR) {
      // Ignore CR
      return;
    }
    if (byte === LF) {
      this._results.command = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaders(byte) {
    if (byte === CR) {
      // Ignore CR
      return;
    }
    if (byte === LF) {
      this._setupCollectBody();
      return;
    }
    this._onByte = this._collectHeaderKey;
    this._reinjectByte(byte);
  }
  _reinjectByte(byte) {
    this._onByte(byte);
  }
  _collectHeaderKey(byte) {
    if (byte === COLON) {
      this._headerKey = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaderValue;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaderValue(byte) {
    if (byte === CR) {
      // Ignore CR
      return;
    }
    if (byte === LF) {
      this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]);
      this._headerKey = undefined;
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _setupCollectBody() {
    const contentLengthHeader = this._results.headers.filter(header => {
      return header[0] === 'content-length';
    })[0];
    if (contentLengthHeader) {
      this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
      this._onByte = this._collectBodyFixedSize;
    } else {
      this._onByte = this._collectBodyNullTerminated;
    }
  }
  _collectBodyNullTerminated(byte) {
    if (byte === NULL) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _collectBodyFixedSize(byte) {
    // It is post decrement, so that we discard the trailing NULL octet
    if (this._bodyBytesRemaining-- === 0) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _retrievedBody() {
    this._results.binaryBody = this._consumeTokenAsRaw();
    try {
      this.onFrame(this._results);
    } catch (e) {
      console.log(`Ignoring an exception thrown by a frame handler. Original exception: `, e);
    }
    this._initState();
  }
  // Rec Descent Parser helpers
  _consumeByte(byte) {
    this._token.push(byte);
  }
  _consumeTokenAsUTF8() {
    return this._decoder.decode(this._consumeTokenAsRaw());
  }
  _consumeTokenAsRaw() {
    const rawResult = new Uint8Array(this._token);
    this._token = [];
    return rawResult;
  }
  _initState() {
    this._results = {
      command: undefined,
      headers: [],
      binaryBody: undefined
    };
    this._token = [];
    this._headerKey = undefined;
    this._onByte = this._collectFrame;
  }
}

/***/ }),

/***/ 88642:
/*!***********************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/stomp-handler.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StompHandler: () => (/* binding */ StompHandler)
/* harmony export */ });
/* harmony import */ var _byte_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./byte.js */ 70516);
/* harmony import */ var _frame_impl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame-impl.js */ 84611);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser.js */ 74867);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 70415);
/* harmony import */ var _versions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./versions.js */ 43653);
/* harmony import */ var _augment_websocket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./augment-websocket.js */ 21374);






/**
 * The STOMP protocol handler
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */
class StompHandler {
  constructor(_client, _webSocket, config) {
    this._client = _client;
    this._webSocket = _webSocket;
    this._connected = false;
    this._serverFrameHandlers = {
      // [CONNECTED Frame](https://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
      CONNECTED: frame => {
        this.debug(`connected to server ${frame.headers.server}`);
        this._connected = true;
        this._connectedVersion = frame.headers.version;
        // STOMP version 1.2 needs header values to be escaped
        if (this._connectedVersion === _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_2) {
          this._escapeHeaderValues = true;
        }
        this._setupHeartbeat(frame.headers);
        this.onConnect(frame);
      },
      // [MESSAGE Frame](https://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
      MESSAGE: frame => {
        // the callback is registered when the client calls
        // `subscribe()`.
        // If there is no registered subscription for the received message,
        // the default `onUnhandledMessage` callback is used that the client can set.
        // This is useful for subscriptions that are automatically created
        // on the browser side (e.g. [RabbitMQ's temporary
        // queues](https://www.rabbitmq.com/stomp.html)).
        const subscription = frame.headers.subscription;
        const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
        // bless the frame to be a Message
        const message = frame;
        const client = this;
        const messageId = this._connectedVersion === _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_2 ? message.headers.ack : message.headers['message-id'];
        // add `ack()` and `nack()` methods directly to the returned frame
        // so that a simple call to `message.ack()` can acknowledge the message.
        message.ack = (headers = {}) => {
          return client.ack(messageId, subscription, headers);
        };
        message.nack = (headers = {}) => {
          return client.nack(messageId, subscription, headers);
        };
        onReceive(message);
      },
      // [RECEIPT Frame](https://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
      RECEIPT: frame => {
        const callback = this._receiptWatchers[frame.headers['receipt-id']];
        if (callback) {
          callback(frame);
          // Server will acknowledge only once, remove the callback
          delete this._receiptWatchers[frame.headers['receipt-id']];
        } else {
          this.onUnhandledReceipt(frame);
        }
      },
      // [ERROR Frame](https://stomp.github.com/stomp-specification-1.2.html#ERROR)
      ERROR: frame => {
        this.onStompError(frame);
      }
    };
    // used to index subscribers
    this._counter = 0;
    // subscription callbacks indexed by subscriber's ID
    this._subscriptions = {};
    // receipt-watchers indexed by receipts-ids
    this._receiptWatchers = {};
    this._partialData = '';
    this._escapeHeaderValues = false;
    this._lastServerActivityTS = Date.now();
    this.debug = config.debug;
    this.stompVersions = config.stompVersions;
    this.connectHeaders = config.connectHeaders;
    this.disconnectHeaders = config.disconnectHeaders;
    this.heartbeatIncoming = config.heartbeatIncoming;
    this.heartbeatOutgoing = config.heartbeatOutgoing;
    this.splitLargeFrames = config.splitLargeFrames;
    this.maxWebSocketChunkSize = config.maxWebSocketChunkSize;
    this.forceBinaryWSFrames = config.forceBinaryWSFrames;
    this.logRawCommunication = config.logRawCommunication;
    this.appendMissingNULLonIncoming = config.appendMissingNULLonIncoming;
    this.discardWebsocketOnCommFailure = config.discardWebsocketOnCommFailure;
    this.onConnect = config.onConnect;
    this.onDisconnect = config.onDisconnect;
    this.onStompError = config.onStompError;
    this.onWebSocketClose = config.onWebSocketClose;
    this.onWebSocketError = config.onWebSocketError;
    this.onUnhandledMessage = config.onUnhandledMessage;
    this.onUnhandledReceipt = config.onUnhandledReceipt;
    this.onUnhandledFrame = config.onUnhandledFrame;
  }
  get connectedVersion() {
    return this._connectedVersion;
  }
  get connected() {
    return this._connected;
  }
  start() {
    const parser = new _parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser(
    // On Frame
    rawFrame => {
      const frame = _frame_impl_js__WEBPACK_IMPORTED_MODULE_2__.FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
      // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage
      if (!this.logRawCommunication) {
        this.debug(`<<< ${frame}`);
      }
      const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
      serverFrameHandler(frame);
    },
    // On Incoming Ping
    () => {
      this.debug('<<< PONG');
    });
    this._webSocket.onmessage = evt => {
      this.debug('Received data');
      this._lastServerActivityTS = Date.now();
      if (this.logRawCommunication) {
        const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
        this.debug(`<<< ${rawChunkAsString}`);
      }
      parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
    };
    this._webSocket.onclose = closeEvent => {
      this.debug(`Connection closed to ${this._webSocket.url}`);
      this._cleanUp();
      this.onWebSocketClose(closeEvent);
    };
    this._webSocket.onerror = errorEvent => {
      this.onWebSocketError(errorEvent);
    };
    this._webSocket.onopen = () => {
      // Clone before updating
      const connectHeaders = Object.assign({}, this.connectHeaders);
      this.debug('Web Socket Opened...');
      connectHeaders['accept-version'] = this.stompVersions.supportedVersions();
      connectHeaders['heart-beat'] = [this.heartbeatOutgoing, this.heartbeatIncoming].join(',');
      this._transmit({
        command: 'CONNECT',
        headers: connectHeaders
      });
    };
  }
  _setupHeartbeat(headers) {
    if (headers.version !== _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_1 && headers.version !== _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_2) {
      return;
    }
    // It is valid for the server to not send this header
    // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating
    if (!headers['heart-beat']) {
      return;
    }
    // heart-beat header received from the server looks like:
    //
    //     heart-beat: sx, sy
    const [serverOutgoing, serverIncoming] = headers['heart-beat'].split(',').map(v => parseInt(v, 10));
    if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
      const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
      this.debug(`send PING every ${ttl}ms`);
      this._pinger = setInterval(() => {
        if (this._webSocket.readyState === _types_js__WEBPACK_IMPORTED_MODULE_3__.StompSocketState.OPEN) {
          this._webSocket.send(_byte_js__WEBPACK_IMPORTED_MODULE_4__.BYTE.LF);
          this.debug('>>> PING');
        }
      }, ttl);
    }
    if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
      const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
      this.debug(`check PONG every ${ttl}ms`);
      this._ponger = setInterval(() => {
        const delta = Date.now() - this._lastServerActivityTS;
        // We wait twice the TTL to be flexible on window's setInterval calls
        if (delta > ttl * 2) {
          this.debug(`did not receive server activity for the last ${delta}ms`);
          this._closeOrDiscardWebsocket();
        }
      }, ttl);
    }
  }
  _closeOrDiscardWebsocket() {
    if (this.discardWebsocketOnCommFailure) {
      this.debug('Discarding websocket, the underlying socket may linger for a while');
      this.discardWebsocket();
    } else {
      this.debug('Issuing close on the websocket');
      this._closeWebsocket();
    }
  }
  forceDisconnect() {
    if (this._webSocket) {
      if (this._webSocket.readyState === _types_js__WEBPACK_IMPORTED_MODULE_3__.StompSocketState.CONNECTING || this._webSocket.readyState === _types_js__WEBPACK_IMPORTED_MODULE_3__.StompSocketState.OPEN) {
        this._closeOrDiscardWebsocket();
      }
    }
  }
  _closeWebsocket() {
    this._webSocket.onmessage = () => {}; // ignore messages
    this._webSocket.close();
  }
  discardWebsocket() {
    if (typeof this._webSocket.terminate !== 'function') {
      (0,_augment_websocket_js__WEBPACK_IMPORTED_MODULE_5__.augmentWebsocket)(this._webSocket, msg => this.debug(msg));
    }
    // @ts-ignore - this method will be there at this stage
    this._webSocket.terminate();
  }
  _transmit(params) {
    const {
      command,
      headers,
      body,
      binaryBody,
      skipContentLengthHeader
    } = params;
    const frame = new _frame_impl_js__WEBPACK_IMPORTED_MODULE_2__.FrameImpl({
      command,
      headers,
      body,
      binaryBody,
      escapeHeaderValues: this._escapeHeaderValues,
      skipContentLengthHeader
    });
    let rawChunk = frame.serialize();
    if (this.logRawCommunication) {
      this.debug(`>>> ${rawChunk}`);
    } else {
      this.debug(`>>> ${frame}`);
    }
    if (this.forceBinaryWSFrames && typeof rawChunk === 'string') {
      rawChunk = new TextEncoder().encode(rawChunk);
    }
    if (typeof rawChunk !== 'string' || !this.splitLargeFrames) {
      this._webSocket.send(rawChunk);
    } else {
      let out = rawChunk;
      while (out.length > 0) {
        const chunk = out.substring(0, this.maxWebSocketChunkSize);
        out = out.substring(this.maxWebSocketChunkSize);
        this._webSocket.send(chunk);
        this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
      }
    }
  }
  dispose() {
    if (this.connected) {
      try {
        // clone before updating
        const disconnectHeaders = Object.assign({}, this.disconnectHeaders);
        if (!disconnectHeaders.receipt) {
          disconnectHeaders.receipt = `close-${this._counter++}`;
        }
        this.watchForReceipt(disconnectHeaders.receipt, frame => {
          this._closeWebsocket();
          this._cleanUp();
          this.onDisconnect(frame);
        });
        this._transmit({
          command: 'DISCONNECT',
          headers: disconnectHeaders
        });
      } catch (error) {
        this.debug(`Ignoring error during disconnect ${error}`);
      }
    } else {
      if (this._webSocket.readyState === _types_js__WEBPACK_IMPORTED_MODULE_3__.StompSocketState.CONNECTING || this._webSocket.readyState === _types_js__WEBPACK_IMPORTED_MODULE_3__.StompSocketState.OPEN) {
        this._closeWebsocket();
      }
    }
  }
  _cleanUp() {
    this._connected = false;
    if (this._pinger) {
      clearInterval(this._pinger);
      this._pinger = undefined;
    }
    if (this._ponger) {
      clearInterval(this._ponger);
      this._ponger = undefined;
    }
  }
  publish(params) {
    const {
      destination,
      headers,
      body,
      binaryBody,
      skipContentLengthHeader
    } = params;
    const hdrs = Object.assign({
      destination
    }, headers);
    this._transmit({
      command: 'SEND',
      headers: hdrs,
      body,
      binaryBody,
      skipContentLengthHeader
    });
  }
  watchForReceipt(receiptId, callback) {
    this._receiptWatchers[receiptId] = callback;
  }
  subscribe(destination, callback, headers = {}) {
    headers = Object.assign({}, headers);
    if (!headers.id) {
      headers.id = `sub-${this._counter++}`;
    }
    headers.destination = destination;
    this._subscriptions[headers.id] = callback;
    this._transmit({
      command: 'SUBSCRIBE',
      headers
    });
    const client = this;
    return {
      id: headers.id,
      unsubscribe(hdrs) {
        return client.unsubscribe(headers.id, hdrs);
      }
    };
  }
  unsubscribe(id, headers = {}) {
    headers = Object.assign({}, headers);
    delete this._subscriptions[id];
    headers.id = id;
    this._transmit({
      command: 'UNSUBSCRIBE',
      headers
    });
  }
  begin(transactionId) {
    const txId = transactionId || `tx-${this._counter++}`;
    this._transmit({
      command: 'BEGIN',
      headers: {
        transaction: txId
      }
    });
    const client = this;
    return {
      id: txId,
      commit() {
        client.commit(txId);
      },
      abort() {
        client.abort(txId);
      }
    };
  }
  commit(transactionId) {
    this._transmit({
      command: 'COMMIT',
      headers: {
        transaction: transactionId
      }
    });
  }
  abort(transactionId) {
    this._transmit({
      command: 'ABORT',
      headers: {
        transaction: transactionId
      }
    });
  }
  ack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers['message-id'] = messageId;
    }
    headers.subscription = subscriptionId;
    this._transmit({
      command: 'ACK',
      headers
    });
  }
  nack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === _versions_js__WEBPACK_IMPORTED_MODULE_0__.Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers['message-id'] = messageId;
    }
    headers.subscription = subscriptionId;
    return this._transmit({
      command: 'NACK',
      headers
    });
  }
}

/***/ }),

/***/ 70415:
/*!***************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivationState: () => (/* binding */ ActivationState),
/* harmony export */   StompSocketState: () => (/* binding */ StompSocketState)
/* harmony export */ });
/**
 * Possible states for the IStompSocket
 */
var StompSocketState;
(function (StompSocketState) {
  StompSocketState[StompSocketState["CONNECTING"] = 0] = "CONNECTING";
  StompSocketState[StompSocketState["OPEN"] = 1] = "OPEN";
  StompSocketState[StompSocketState["CLOSING"] = 2] = "CLOSING";
  StompSocketState[StompSocketState["CLOSED"] = 3] = "CLOSED";
})(StompSocketState = StompSocketState || (StompSocketState = {}));
/**
 * Possible activation state
 */
var ActivationState;
(function (ActivationState) {
  ActivationState[ActivationState["ACTIVE"] = 0] = "ACTIVE";
  ActivationState[ActivationState["DEACTIVATING"] = 1] = "DEACTIVATING";
  ActivationState[ActivationState["INACTIVE"] = 2] = "INACTIVE";
})(ActivationState = ActivationState || (ActivationState = {}));

/***/ }),

/***/ 43653:
/*!******************************************************!*\
  !*** ./node_modules/@stomp/stompjs/esm6/versions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Versions: () => (/* binding */ Versions)
/* harmony export */ });
/**
 * Supported STOMP versions
 *
 * Part of `@stomp/stompjs`.
 */
class Versions {
  /**
   * Takes an array of versions, typical elements '1.2', '1.1', or '1.0'
   *
   * You will be creating an instance of this class if you want to override
   * supported versions to be declared during STOMP handshake.
   */
  constructor(versions) {
    this.versions = versions;
  }
  /**
   * Used as part of CONNECT STOMP Frame
   */
  supportedVersions() {
    return this.versions.join(',');
  }
  /**
   * Used while creating a WebSocket
   */
  protocolVersions() {
    return this.versions.map(x => `v${x.replace('.', '')}.stomp`);
  }
}
/**
 * Indicates protocol version 1.0
 */
Versions.V1_0 = '1.0';
/**
 * Indicates protocol version 1.1
 */
Versions.V1_1 = '1.1';
/**
 * Indicates protocol version 1.2
 */
Versions.V1_2 = '1.2';
/**
 * @internal
 */
Versions.default = new Versions([Versions.V1_2, Versions.V1_1, Versions.V1_0]);

/***/ }),

/***/ 17558:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 73875:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ 64014);
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ 32208);
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ 16546);
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ 32502);
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ 36788);






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);

/***/ }),

/***/ 32938:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ 99537);
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ 15126);
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ 23936);
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ 69420);
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ 88886);






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);

/***/ }),

/***/ 525:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 80795:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ 43771);
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ 99809);
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ 29080);
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ 89927);
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ 58096);






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);

/***/ }),

/***/ 89433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23684:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 77081:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 80795);
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ 64924);
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ 68336);




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCache);

/***/ }),

/***/ 53536:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ 6677);
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ 55311);
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ 95121);
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ 90669);
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ 79746);







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ 82134:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ 49764:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);

/***/ }),

/***/ 12680:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 36318:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_apply.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apply);

/***/ }),

/***/ 47528:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 74423:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 54937:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ 26513);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
    isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
    isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);

/***/ }),

/***/ 64987:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);

/***/ }),

/***/ 11191:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 72125:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);

/***/ }),

/***/ 70077:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_assignMergeValue.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !(0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[key], value) || value === undefined && !(key in object)) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignMergeValue);

/***/ }),

/***/ 68676:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) || value === undefined && !(key in object)) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);

/***/ }),

/***/ 23342:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);

/***/ }),

/***/ 72681:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ 11307);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);

/***/ }),

/***/ 31088:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);

/***/ }),

/***/ 59121:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseEach.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseForOwn.js */ 93246);
/* harmony import */ var _createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseEach.js */ 58772);



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0,_createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseEach);

/***/ }),

/***/ 24150:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);

/***/ }),

/***/ 93867:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseFor.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ 24400);


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0,_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFor);

/***/ }),

/***/ 93246:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseForOwn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ 93867);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, iteratee, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseForOwn);

/***/ }),

/***/ 31527:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 17478);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 50667);



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return index && index == length ? object : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);

/***/ }),

/***/ 70341:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 79304:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ 11650);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ 5354);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ 2100:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseHasIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseHasIn);

/***/ }),

/***/ 79994:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ 24150);
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsNaN.js */ 33085);
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_strictIndexOf.js */ 69343);




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? (0,_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, fromIndex) : (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"], fromIndex);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIndexOf);

/***/ }),

/***/ 34063:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);

/***/ }),

/***/ 90153:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ 2649);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other)) {
    return value !== value && other !== other;
  }
  return (0,_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqual);

/***/ }),

/***/ 2649:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_equalByTag.js */ 38790);
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_equalObjects.js */ 40457);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    othIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    objTag = objIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
    othTag = othIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
    if (!(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return objIsArr || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) ? (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, bitmask, customizer, equalFunc, stack) : (0,_equalByTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return (0,_equalObjects_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqualDeep);

/***/ }),

/***/ 75435:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMatch.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ 90153);



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMatch);

/***/ }),

/***/ 33085:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNaN);

/***/ }),

/***/ 52020:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ 38426);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ 51540);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);

/***/ }),

/***/ 80970:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);

/***/ }),

/***/ 34018:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIteratee.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMatches.js */ 76623);
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ 24185);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 25416);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ 14691);






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if (typeof value == 'object') {
    return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? (0,_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value[0], value[1]) : (0,_baseMatches_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
  }
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIteratee);

/***/ }),

/***/ 22093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 93058);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 2171:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ 22879);




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);

/***/ }),

/***/ 10650:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseEach.js */ 59121);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
    result = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? Array(collection.length) : [];
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMap);

/***/ }),

/***/ 76623:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatches.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMatch.js */ 75435);
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMatchData.js */ 33741);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 30499);




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = (0,_getMatchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || (0,_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, source, matchData);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatches);

/***/ }),

/***/ 24185:
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatchesProperty.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseIsEqual.js */ 90153);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get.js */ 26687);
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hasIn.js */ 23595);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 96646);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 30499);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ 50667);








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) && (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue)) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path), srcValue);
  }
  return function (object) {
    var objValue = (0,_get_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, path);
    return objValue === undefined && objValue === srcValue ? (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, path) : (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatchesProperty);

/***/ }),

/***/ 45674:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseMerge.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_assignMergeValue.js */ 70077);
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ 93867);
/* harmony import */ var _baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMergeDeep.js */ 10880);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keysIn.js */ 22229);
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_safeGet.js */ 58883);








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, function (srcValue, key) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
    if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue)) {
      (0,_baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer((0,_safeGet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, newValue);
    }
  }, _keysIn_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMerge);

/***/ }),

/***/ 10880:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseMergeDeep.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignMergeValue.js */ 70077);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_cloneBuffer.js */ 21691);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 7721);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ 54196);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ 71372);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLikeObject.js */ 65306);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isPlainObject.js */ 59702);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_safeGet.js */ 58883);
/* harmony import */ var _toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toPlainObject.js */ 25949);
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key),
    srcValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue),
      isBuff = !isArr && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(srcValue),
      isTyped = !isArr && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(objValue)) {
        newValue = objValue;
      } else if ((0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(objValue)) {
        newValue = (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__["default"])(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(srcValue, true);
      } else {
        newValue = [];
      }
    } else if ((0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])(srcValue) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(srcValue)) {
      newValue = objValue;
      if ((0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(objValue)) {
        newValue = (0,_toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__["default"])(objValue);
      } else if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_12__["default"])(objValue) || (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_13__["default"])(objValue)) {
        newValue = (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMergeDeep);

/***/ }),

/***/ 54005:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseProperty);

/***/ }),

/***/ 2539:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyDeep.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 31527);


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePropertyDeep);

/***/ }),

/***/ 15736:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ 25416);
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ 89116);
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ 13483);




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseRest);

/***/ }),

/***/ 55095:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseSetToString.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ 4324);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ 11307);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ 25416);




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function (func, string) {
  return (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string),
    'writable': true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSetToString);

/***/ }),

/***/ 76864:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseSome.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ 59121);


/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function (value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSome);

/***/ }),

/***/ 26513:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);

/***/ }),

/***/ 25696:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ 67380);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);

/***/ }),

/***/ 99276:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 88655);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);

/***/ }),

/***/ 87523:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);

/***/ }),

/***/ 78518:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseValues.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function (key) {
    return object[key];
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseValues);

/***/ }),

/***/ 44066:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheHas);

/***/ }),

/***/ 37259:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_castFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 25416);


/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castFunction);

/***/ }),

/***/ 17478:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ 21769);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ 88511);





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);

/***/ }),

/***/ 82583:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);

/***/ }),

/***/ 21691:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);

/***/ }),

/***/ 7721:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 82583);


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);

/***/ }),

/***/ 54196:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);

/***/ }),

/***/ 87480:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ 68676);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);

/***/ }),

/***/ 1408:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);

/***/ }),

/***/ 57650:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createAssigner.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ 15736);
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ 79154);



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAssigner);

/***/ }),

/***/ 58772:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseEach.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseEach);

/***/ }),

/***/ 24400:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseFor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseFor);

/***/ }),

/***/ 11307:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);

var defineProperty = function () {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);

/***/ }),

/***/ 77604:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ 77081);
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ 72125);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ 44066);




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0,_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function (othValue, othIndex) {
        if (!(0,_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalArrays);

/***/ }),

/***/ 38790:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ 28325);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapToArray.js */ 74269);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_setToArray.js */ 60974);







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalByTag);

/***/ }),

/***/ 40457:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ 44857);


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    objLength = objProps.length,
    othProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalObjects);

/***/ }),

/***/ 60800:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ 44857:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 70341);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 9294);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 54564:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ 64405);


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);

/***/ }),

/***/ 33741:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getMatchData.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 96646);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ 31192);



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)];
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatchData);

/***/ }),

/***/ 72483:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ 52020);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ 91680);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);

/***/ }),

/***/ 41640:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);

/***/ }),

/***/ 11650:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ 9294:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 74423);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71509);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 8020:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 17558);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 89433);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 12680);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 51540);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 91680:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ 71183:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hasPath.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 17478);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 50667);







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasPath);

/***/ }),

/***/ 64014:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);

/***/ }),

/***/ 32208:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);

/***/ }),

/***/ 16546:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);

/***/ }),

/***/ 32502:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);

/***/ }),

/***/ 36788:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);

/***/ }),

/***/ 71372:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ 31088);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);

/***/ }),

/***/ 36570:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);

/***/ }),

/***/ 79154:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_isIterateeCall.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.js */ 28325);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length) : type == 'string' && index in object) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object[index], value);
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);

/***/ }),

/***/ 75836:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ 67380);



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);

/***/ }),

/***/ 64405:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);

/***/ }),

/***/ 38426:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ 1408);


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);

/***/ }),

/***/ 54036:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);

/***/ }),

/***/ 96646:
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/_isStrictComparable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isStrictComparable);

/***/ }),

/***/ 99537:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);

/***/ }),

/***/ 15126:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);

/***/ }),

/***/ 23936:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  return index < 0 ? undefined : data[index][1];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);

/***/ }),

/***/ 69420:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);

/***/ }),

/***/ 88886:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);

/***/ }),

/***/ 43771:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ 73875);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);

/***/ }),

/***/ 99809:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);

/***/ }),

/***/ 29080:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);

/***/ }),

/***/ 89927:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);

/***/ }),

/***/ 58096:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);

/***/ }),

/***/ 74269:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapToArray);

/***/ }),

/***/ 30499:
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_matchesStrictComparable.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matchesStrictComparable);

/***/ }),

/***/ 65119:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ 80151);


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);

/***/ }),

/***/ 9140:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);

/***/ }),

/***/ 93058:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 22879:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);

/***/ }),

/***/ 92596:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);

/***/ }),

/***/ 5354:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ 84119:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);

/***/ }),

/***/ 89116:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_overRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ 36318);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0,_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overRest);

/***/ }),

/***/ 16396:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ 58883:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_safeGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeGet);

/***/ }),

/***/ 64924:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheAdd);

/***/ }),

/***/ 68336:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheHas);

/***/ }),

/***/ 60974:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToArray);

/***/ }),

/***/ 13483:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setToString.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSetToString.js */ 55095);
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shortOut.js */ 58685);



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0,_shortOut_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToString);

/***/ }),

/***/ 58685:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_shortOut.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortOut);

/***/ }),

/***/ 6677:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);

/***/ }),

/***/ 55311:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);

/***/ }),

/***/ 95121:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);

/***/ }),

/***/ 90669:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);

/***/ }),

/***/ 79746:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ 80795);




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);

/***/ }),

/***/ 69343:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strictIndexOf);

/***/ }),

/***/ 21769:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ 65119);


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);

/***/ }),

/***/ 50667:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);

/***/ }),

/***/ 51540:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);

/***/ }),

/***/ 88655:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);

/***/ }),

/***/ 4324:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/constant.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constant);

/***/ }),

/***/ 28325:
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);

/***/ }),

/***/ 40913:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/forEach.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ 47528);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseEach.js */ 59121);
/* harmony import */ var _castFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_castFunction.js */ 37259);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseEach_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_castFunction_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forEach);

/***/ }),

/***/ 26687:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 31527);


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);

/***/ }),

/***/ 23595:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/hasIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseHasIn.js */ 2100);
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasPath.js */ 71183);



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && (0,_hasPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasIn);

/***/ }),

/***/ 25416:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);

/***/ }),

/***/ 5509:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/includes.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseIndexOf.js */ 79994);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isString.js */ 39362);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ 37861);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ 8733);






/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? collection : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection);
  fromIndex = fromIndex && !guard ? (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return (0,_isString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(collection, value, fromIndex) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (includes);

/***/ }),

/***/ 77018:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ 34063);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return arguments;
}()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);

/***/ }),

/***/ 66328:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 64070:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ 74080);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);

/***/ }),

/***/ 65306:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/isArrayLikeObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLikeObject);

/***/ }),

/***/ 92467:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ 68534);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);

/***/ }),

/***/ 41855:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEmpty.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);









/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || typeof value == 'string' || typeof value.splice == 'function' || (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value))) {
    return !value.length;
  }
  var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if ((0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
    return !(0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);

/***/ }),

/***/ 93084:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 74080:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);

/***/ }),

/***/ 32176:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 333:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ 59702:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);

/***/ }),

/***/ 39362:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == stringTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isString);

/***/ }),

/***/ 67380:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);

/***/ }),

/***/ 54752:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ 80970);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);

/***/ }),

/***/ 31192:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 22229:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ 2171);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);

/***/ }),

/***/ 3715:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/map.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ 10650);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ }),

/***/ 80151:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 80795);


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);

/***/ }),

/***/ 94011:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/merge.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ 45674);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ 57650);



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = (0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, source, srcIndex) {
  (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, source, srcIndex);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 14691:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/property.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseProperty.js */ 54005);
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_basePropertyDeep.js */ 2539);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ 50667);





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) ? (0,_baseProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path)) : (0,_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);

/***/ }),

/***/ 25987:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/some.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ 72125);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseSome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseSome.js */ 76864);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIterateeCall.js */ 79154);






/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseSome_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_4__["default"])(predicate, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (some);

/***/ }),

/***/ 71509:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 68534:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);

/***/ }),

/***/ 82071:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toFinite.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 20567);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);

/***/ }),

/***/ 37861:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/toInteger.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ 82071);


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toInteger);

/***/ }),

/***/ 20567:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 99276);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);

/***/ }),

/***/ 25949:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/toPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 22229);



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPlainObject);

/***/ }),

/***/ 88511:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ 25696);


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);

/***/ }),

/***/ 8733:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/values.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseValues.js */ 78518);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : (0,_baseValues_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (values);

/***/ }),

/***/ 58859:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieService: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);




// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies
class CookieService {
  constructor(document,
  // Get the `PLATFORM_ID` so we can check if we're in a browser.
  platformId) {
    this.document = document;
    this.platformId = platformId;
    this.documentIsAccessible = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  }
  /**
   * Get cookie Regular Expression
   *
   * @param name Cookie name
   * @returns property RegExp
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static getCookieRegExp(name) {
    const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, '\\$1');
    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }
  /**
   * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @param encodedURIComponent A value representing an encoded URI component.
   *
   * @returns The unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static safeDecodeURIComponent(encodedURIComponent) {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      // probably it is not uri encoded. return as is
      return encodedURIComponent;
    }
  }
  /**
   * Return `true` if {@link Document} is accessible, otherwise return `false`
   *
   * @param name Cookie name
   * @returns boolean - whether cookie with specified name exists
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  check(name) {
    if (!this.documentIsAccessible) {
      return false;
    }
    name = encodeURIComponent(name);
    const regExp = CookieService.getCookieRegExp(name);
    return regExp.test(this.document.cookie);
  }
  /**
   * Get cookies by name
   *
   * @param name Cookie name
   * @returns property value
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  get(name) {
    if (this.documentIsAccessible && this.check(name)) {
      name = encodeURIComponent(name);
      const regExp = CookieService.getCookieRegExp(name);
      const result = regExp.exec(this.document.cookie);
      return result[1] ? CookieService.safeDecodeURIComponent(result[1]) : '';
    } else {
      return '';
    }
  }
  /**
   * Get all cookies in JSON format
   *
   * @returns all the cookies in json
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  getAll() {
    if (!this.documentIsAccessible) {
      return {};
    }
    const cookies = {};
    const document = this.document;
    if (document.cookie && document.cookie !== '') {
      document.cookie.split(';').forEach(currentCookie => {
        const [cookieName, cookieValue] = currentCookie.split('=');
        cookies[CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = CookieService.safeDecodeURIComponent(cookieValue);
      });
    }
    return cookies;
  }
  set(name, value, expiresOrOptions, path, domain, secure, sameSite) {
    if (!this.documentIsAccessible) {
      return;
    }
    if (typeof expiresOrOptions === 'number' || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
      const optionsBody = {
        expires: expiresOrOptions,
        path,
        domain,
        secure,
        sameSite: sameSite ? sameSite : 'Lax'
      };
      this.set(name, value, optionsBody);
      return;
    }
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
    const options = expiresOrOptions ? expiresOrOptions : {};
    if (options.expires) {
      if (typeof options.expires === 'number') {
        const dateExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + options.expires.toUTCString() + ';';
      }
    }
    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }
    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }
    if (options.secure === false && options.sameSite === 'None') {
      options.secure = true;
      console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` + `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
    }
    if (options.secure) {
      cookieString += 'secure;';
    }
    if (!options.sameSite) {
      options.sameSite = 'Lax';
    }
    cookieString += 'sameSite=' + options.sameSite + ';';
    this.document.cookie = cookieString;
  }
  /**
   * Delete cookie by name
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Cookie secure flag
   * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  delete(name, path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
    this.set(name, '', {
      expires: expiresDate,
      path,
      domain,
      secure,
      sameSite
    });
  }
  /**
   * Delete all cookies
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Is the Cookie secure
   * @param sameSite Is the cookie same site
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  deleteAll(path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const cookies = this.getAll();
    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain, secure, sameSite);
      }
    }
  }
  static #_ = this.ɵfac = function CookieService_Factory(t) {
    return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CookieService,
    factory: CookieService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();

/*
 * Public API Surface of ngx-cookie-service
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}])
//# sourceMappingURL=libs_shared_ocapi_src_index_ts-_82a80.js.map