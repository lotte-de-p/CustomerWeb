(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_shared_config_src_index_ts-_cef30"],{

/***/ 13478:
/*!*****************************************!*\
  !*** ./libs/shared/config/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* reexport safe */ _lib_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG),
/* harmony export */   ConfigComponent: () => (/* reexport safe */ _lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigComponent),
/* harmony export */   ConfigConstants: () => (/* reexport safe */ _lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants),
/* harmony export */   ConfigModule: () => (/* reexport safe */ _lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigModule),
/* harmony export */   ConfigService: () => (/* reexport safe */ _lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigService)
/* harmony export */ });
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/config */ 78693);


/***/ }),

/***/ 60708:
/*!*******************************************************************!*\
  !*** ./libs/shared/config/src/lib/config/app-config.interface.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 61772:
/*!*********************************************************!*\
  !*** ./libs/shared/config/src/lib/config/app.config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

const APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('app.config');

/***/ }),

/***/ 75012:
/*!***************************************************************!*\
  !*** ./libs/shared/config/src/lib/config/config.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigComponent: () => (/* binding */ ConfigComponent)
/* harmony export */ });
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 48386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class ConfigComponent {
  configService;
  static webcomponentSelector = 'tg-config';
  ocapiUrl;
  openidAuthUrl;
  ocapiClientId;
  openidClientId;
  authProvider;
  openidUrl;
  oauthCallbackUrl;
  phpEshopUrl;
  omapiQueryUrl;
  omapiUrl;
  gatewayUrl;
  gsaUrl;
  sofyUrl;
  isAuthorMode;
  baseAcSystemsUrl;
  kbcPostMessageReceiverOriginUrl;
  recaptchaApiUrl;
  recaptchaSiteKey;
  recaptchaV3SiteKey;
  searchIndexParameter;
  searchApiUrl;
  productFinderUrl;
  constructor(configService) {
    this.configService = configService;
  }
  ngOnInit() {
    this.configService.addConfig({
      'ocapi-url': this.ocapiUrl,
      'openid-auth-url': this.openidAuthUrl,
      'ocapi-client-id': this.ocapiClientId,
      'openid-client-id': this.openidClientId,
      'auth-provider': this.authProvider,
      'openid-url': this.openidUrl,
      'oauth-callback-url': this.oauthCallbackUrl,
      'php-eshop-url': this.phpEshopUrl,
      'omapi-url': this.omapiUrl,
      'omapi-query-url': this.omapiQueryUrl,
      'gateway-url': this.gatewayUrl,
      'gsa-url': this.gsaUrl,
      'sofy-url': this.sofyUrl,
      'is-author-mode': this.isAuthorMode,
      'base-ac-systems-url': this.baseAcSystemsUrl,
      'kbc-post-message-receiver-origin-url': this.kbcPostMessageReceiverOriginUrl,
      'recaptcha-api-url': this.recaptchaApiUrl,
      'recaptcha-site-key': this.recaptchaSiteKey,
      'recaptcha-v3-site-key': this.recaptchaV3SiteKey,
      'search-index-parameter': this.searchIndexParameter,
      'search-api-url': this.searchApiUrl,
      'product-finder-url': this.productFinderUrl
    });
  }
  static ɵfac = function ConfigComponent_Factory(t) {
    return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConfigComponent,
    selectors: [["app-config"]],
    inputs: {
      ocapiUrl: "ocapiUrl",
      openidAuthUrl: "openidAuthUrl",
      ocapiClientId: "ocapiClientId",
      openidClientId: "openidClientId",
      authProvider: "authProvider",
      openidUrl: "openidUrl",
      oauthCallbackUrl: "oauthCallbackUrl",
      phpEshopUrl: "phpEshopUrl",
      omapiQueryUrl: "omapiQueryUrl",
      omapiUrl: "omapiUrl",
      gatewayUrl: "gatewayUrl",
      gsaUrl: "gsaUrl",
      sofyUrl: "sofyUrl",
      isAuthorMode: "isAuthorMode",
      baseAcSystemsUrl: "baseAcSystemsUrl",
      kbcPostMessageReceiverOriginUrl: "kbcPostMessageReceiverOriginUrl",
      recaptchaApiUrl: "recaptchaApiUrl",
      recaptchaSiteKey: "recaptchaSiteKey",
      recaptchaV3SiteKey: "recaptchaV3SiteKey",
      searchIndexParameter: "searchIndexParameter",
      searchApiUrl: "searchApiUrl",
      productFinderUrl: "productFinderUrl"
    },
    decls: 1,
    vars: 0,
    template: function ConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 33348:
/*!***************************************************************!*\
  !*** ./libs/shared/config/src/lib/config/config.constants.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigConstants: () => (/* binding */ ConfigConstants)
/* harmony export */ });
class ConfigConstants {
  static MESSAGE_GROUP = 'message-group';
  static OCAPI_URl = 'ocapi-url';
  static OMAPI_URL = 'omapi-url';
  static OMAPI_QUERY_URL = 'omapi-query-url';
  static OPENID_URL = 'openid-url';
  static OAUTH_CALLBACK_URL = 'oauth-callback-url';
  static PHP_ESHOP_URL = 'php-eshop-url';
  static OCAPI_QUERY_URL = 'ocapi-query-url';
  static OCAPI_SOCKET_URL = 'ocapi-socket-url';
  static GATEWAY_URL = 'gateway-url';
  static GSA_URL = 'gsa-url';
  static SOFY_URL = 'sofy-url';
  static IS_AUTHOR_MODE = 'is-author-mode';
  static BASE_AC_SYSTEMS_URL = 'base-ac-systems-url';
  static POST_MESSAGE_RECEIVER_ORIGIN_URL = 'kbc-post-message-receiver-origin-url';
  static RECAPTCHA_API_URL = 'recaptcha-api-url';
  static RECAPTCHA_SITE_KEY = 'recaptcha-site-key';
  static RECAPTCHA_V3_SITE_KEY = 'recaptcha-v3-site-key';
  static SEARCH_INDEX_PARAMETER = 'search-index-parameter';
  static SEARCH_API_URL = 'search-api-url';
  static PRODUCT_FINDER_URL = 'product-finder-url';
  static OPENID_AUTH_URL = 'openid-auth-url';
  static OPENID_CLIENT_ID = 'openid-client-id';
  static OCAPI_CLIENT_ID = 'ocapi-client-id';
  static AUTH_PROVIDER = 'auth-provider';
}

/***/ }),

/***/ 53854:
/*!************************************************************!*\
  !*** ./libs/shared/config/src/lib/config/config.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigModule: () => (/* binding */ ConfigModule)
/* harmony export */ });
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.component */ 75012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ConfigModule {
  static ɵfac = function ConfigModule_Factory(t) {
    return new (t || ConfigModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ConfigModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfigModule, {
    declarations: [_config_component__WEBPACK_IMPORTED_MODULE_0__.ConfigComponent],
    exports: [_config_component__WEBPACK_IMPORTED_MODULE_0__.ConfigComponent]
  });
})();

/***/ }),

/***/ 48386:
/*!*************************************************************!*\
  !*** ./libs/shared/config/src/lib/config/config.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ConfigService {
  window;
  static LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.LogFactory.createLogger(ConfigService);
  defaultConfig = {
    remoteHosts: {}
  };
  constructor(window) {
    this.window = window;
    this.window['Config'] = window['Config'] ?? this.defaultConfig;
    ConfigService.LOG.logDebug('ConfigService Instantiating ' + new Date().toDateString(), this.window['Config']);
  }
  getAllConfig() {
    return this.window['Config'];
  }
  getConfig(key) {
    const configuration = this.window['Config'] || {};
    ConfigService.LOG.logDebug(`ConfigService GetConfig: ${key} [${configuration[key]}]`);
    return configuration[key] ?? '';
  }
  addRemoteHostConfig(moduleId, remoteModuleConfigOptions) {
    if (this.window['Config']?.['remoteHosts']) {
      this.window['Config']['remoteHosts'][moduleId] = remoteModuleConfigOptions;
    }
  }
  addConfig(config) {
    this.window['Config'] = {
      ...this.window['Config'],
      ...config
    };
  }
  getRemoteHostConfig(moduleId) {
    if (this.window['Config']?.['remoteHosts']) {
      return this.window['Config']['remoteHosts'][moduleId];
    }
    return undefined;
  }
  static ɵfac = function ConfigService_Factory(t) {
    return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('Window'));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78693:
/*!****************************************************!*\
  !*** ./libs/shared/config/src/lib/config/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* reexport safe */ _app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG),
/* harmony export */   ConfigComponent: () => (/* reexport safe */ _config_component__WEBPACK_IMPORTED_MODULE_5__.ConfigComponent),
/* harmony export */   ConfigConstants: () => (/* reexport safe */ _config_constants__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants),
/* harmony export */   ConfigModule: () => (/* reexport safe */ _config_module__WEBPACK_IMPORTED_MODULE_3__.ConfigModule),
/* harmony export */   ConfigService: () => (/* reexport safe */ _config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 61772);
/* harmony import */ var _app_config_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config.interface */ 60708);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.constants */ 33348);
/* harmony import */ var _config_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.module */ 53854);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ 48386);
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.component */ 75012);







/***/ })

}])
//# sourceMappingURL=libs_shared_config_src_index_ts-_cef30.js.map