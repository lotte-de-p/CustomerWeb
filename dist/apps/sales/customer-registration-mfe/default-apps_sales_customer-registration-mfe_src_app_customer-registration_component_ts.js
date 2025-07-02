(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-apps_sales_customer-registration-mfe_src_app_customer-registration_component_ts"],{

/***/ 78358:
/*!***************************************************************************************************!*\
  !*** ./apps/sales/customer-registration-mfe/src/app/constants/customer-registration.constants.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRegistrationConstants: () => (/* binding */ CustomerRegistrationConstants)
/* harmony export */ });
class CustomerRegistrationConstants {
  static #_ = this.MESSAGE_GROUP = 'customer-registration';
  static #_2 = this.IDP_TYPE_ITS_ME = 'itsme';
  static #_3 = this.IDP_TYPE_EID = 'eid';
  static #_4 = this.IDP_PARAM = 'idp';
}

/***/ }),

/***/ 66107:
/*!**********************************************************************************!*\
  !*** ./apps/sales/customer-registration-mfe/src/app/constants/step.constants.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesStepsForBusiness: () => (/* binding */ SalesStepsForBusiness),
/* harmony export */   SalesStepsForResidential: () => (/* binding */ SalesStepsForResidential)
/* harmony export */ });
/* harmony import */ var _sales_customer_registration_feat_business_identity_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/customer-registration/feat-business-identity-details */ 26721);
/* harmony import */ var _sales_customer_registration_feat_business_identity_details__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_feat_business_identity_details__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_customer_registration_feat_personal_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/customer-registration/feat-personal-details */ 2788);
/* harmony import */ var _sales_customer_registration_feat_personal_details__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_feat_personal_details__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_customer_registration_feat_identity_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/customer-registration/feat-identity-details */ 19063);
/* harmony import */ var _sales_customer_registration_feat_identity_details__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_feat_identity_details__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_customer_registration_feat_address_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/customer-registration/feat-address-identity */ 77122);
/* harmony import */ var _sales_customer_registration_feat_address_identity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_feat_address_identity__WEBPACK_IMPORTED_MODULE_3__);




const SalesStepsForResidential = [{
  key: 'personal',
  component: _sales_customer_registration_feat_personal_details__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailsComponent
}, {
  key: 'identity',
  component: _sales_customer_registration_feat_identity_details__WEBPACK_IMPORTED_MODULE_2__.IdentityDetailsComponent
}, {
  key: 'address',
  component: _sales_customer_registration_feat_address_identity__WEBPACK_IMPORTED_MODULE_3__.AddressIdentityComponent
}];
const SalesStepsForBusiness = [{
  key: 'personal',
  component: _sales_customer_registration_feat_personal_details__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailsComponent
}, {
  key: 'business-identity',
  component: _sales_customer_registration_feat_business_identity_details__WEBPACK_IMPORTED_MODULE_0__.BusinessIdentityDetailsComponent
}];

/***/ }),

/***/ 38434:
/*!*****************************************************************************************!*\
  !*** ./apps/sales/customer-registration-mfe/src/app/customer-registration.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRegistrationComponent: () => (/* binding */ CustomerRegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/shared/feature-sales-stepper */ 68342);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 58859);
/* harmony import */ var _constants_customer_registration_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/customer-registration.constants */ 78358);
/* harmony import */ var _constants_step_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/step.constants */ 66107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
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
















function CustomerRegistrationComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "tg-sales-stepper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showNavigation", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r0.showNavigationBar)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : undefined)("steps", ctx_r0.componentSteps);
  }
}
let CustomerRegistrationComponent = class CustomerRegistrationComponent {
  constructor(authorConfigurationFacade, cookieService, stepFacade) {
    this.authorConfigurationFacade = authorConfigurationFacade;
    this.cookieService = cookieService;
    this.stepFacade = stepFacade;
    this.componentSteps = _constants_step_constants__WEBPACK_IMPORTED_MODULE_7__.SalesStepsForResidential;
    this.showNavigationBar = this.stepFacade.showNavigation$;
    this.messageGroup = _constants_customer_registration_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerRegistrationConstants.MESSAGE_GROUP;
    this._loaded = false;
  }
  isLoaded() {
    return this._loaded;
  }
  ngOnInit() {
    this.authorConfigurationFacade.setBrandFromUrl();
    this.authorConfigurationFacade.setCustomerCategory();
    const authorConfiguration = {
      privacyPolicyUrl: this.privacyPolicyUrl,
      showSalesContactNumber: this.showSalesContactNumber,
      isPIDEnabled: this.enablePID,
      marketingUrl: this.marketingUrl
    };
    this.authorConfigurationFacade.setAuthorConfiguration(authorConfiguration);
    const idpParam = this.cookieService.get(_constants_customer_registration_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerRegistrationConstants.IDP_PARAM);
    if (_constants_customer_registration_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerRegistrationConstants.IDP_TYPE_ITS_ME === idpParam || _constants_customer_registration_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerRegistrationConstants.IDP_TYPE_EID === idpParam) {
      console.log('itsme/eid flow');
    }
    this.componentSteps = this.authorConfigurationFacade.isResidential() ? _constants_step_constants__WEBPACK_IMPORTED_MODULE_7__.SalesStepsForResidential : _constants_step_constants__WEBPACK_IMPORTED_MODULE_7__.SalesStepsForBusiness;
    const stepKeys = this.componentSteps.map(step => step.key);
    this.stepFacade.setStepConfig({
      steps: stepKeys
    });
    this._loaded = true;
  }
  static #_ = this.ɵfac = function CustomerRegistrationComponent_Factory(t) {
    return new (t || CustomerRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__.AuthorConfigurationFacade), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CustomerRegistrationComponent,
    selectors: [["tg-sales-customer-registration"]],
    inputs: {
      isHidePageTitle: "isHidePageTitle",
      privacyPolicyUrl: "privacyPolicyUrl",
      marketingUrl: "marketingUrl",
      pointOfSalesUrl: "pointOfSalesUrl",
      requestHelpUrl: "requestHelpUrl",
      componentInstanceID: "componentInstanceID",
      showSalesContactNumber: "showSalesContactNumber",
      enablePID: "enablePID",
      allowAnyNavsForFixedProducts: "allowAnyNavsForFixedProducts",
      enableMask: "enableMask",
      enableLoader: "enableLoader",
      pageType: "pageType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 6,
    consts: [[1, "py--m", "col-lg-8", "col-md-9", "col-12", "m--auto"], [3, "messageGroupName"], [3, "pageType", "enableLoader", "enableMask", "startByDefault"], [4, "ngIf"], [3, "showNavigation", "steps"]],
    template: function CustomerRegistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-message-flow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CustomerRegistrationComponent_ng_container_3_Template, 4, 4, "ng-container", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("messageGroupName", ctx.messageGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageType", ctx.pageType)("enableLoader", ctx.enableLoader)("enableMask", ctx.enableMask)("startByDefault", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded());
      }
    },
    dependencies: [_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.MessageFlowComponent, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepsNgrxModule, _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__.CustomerRegistrationNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__.SalesStepperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    encapsulation: 2
  });
};
CustomerRegistrationComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__.AuthorConfigurationFacade, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade])], CustomerRegistrationComponent);


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



/***/ })

}])
//# sourceMappingURL=default-apps_sales_customer-registration-mfe_src_app_customer-registration_component_ts.js.map