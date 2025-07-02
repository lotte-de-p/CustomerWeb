(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_shared_config_src_index_ts-_cef31"],{

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
  static #_ = this.webcomponentSelector = 'tg-config';
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
  static #_2 = this.ɵfac = function ConfigComponent_Factory(t) {
    return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
  static #_ = this.MESSAGE_GROUP = 'message-group';
  static #_2 = this.OCAPI_URl = 'ocapi-url';
  static #_3 = this.OMAPI_URL = 'omapi-url';
  static #_4 = this.OMAPI_QUERY_URL = 'omapi-query-url';
  static #_5 = this.OPENID_URL = 'openid-url';
  static #_6 = this.OAUTH_CALLBACK_URL = 'oauth-callback-url';
  static #_7 = this.PHP_ESHOP_URL = 'php-eshop-url';
  static #_8 = this.OCAPI_QUERY_URL = 'ocapi-query-url';
  static #_9 = this.OCAPI_SOCKET_URL = 'ocapi-socket-url';
  static #_10 = this.GATEWAY_URL = 'gateway-url';
  static #_11 = this.GSA_URL = 'gsa-url';
  static #_12 = this.SOFY_URL = 'sofy-url';
  static #_13 = this.IS_AUTHOR_MODE = 'is-author-mode';
  static #_14 = this.BASE_AC_SYSTEMS_URL = 'base-ac-systems-url';
  static #_15 = this.POST_MESSAGE_RECEIVER_ORIGIN_URL = 'kbc-post-message-receiver-origin-url';
  static #_16 = this.RECAPTCHA_API_URL = 'recaptcha-api-url';
  static #_17 = this.RECAPTCHA_SITE_KEY = 'recaptcha-site-key';
  static #_18 = this.RECAPTCHA_V3_SITE_KEY = 'recaptcha-v3-site-key';
  static #_19 = this.SEARCH_INDEX_PARAMETER = 'search-index-parameter';
  static #_20 = this.SEARCH_API_URL = 'search-api-url';
  static #_21 = this.PRODUCT_FINDER_URL = 'product-finder-url';
  static #_22 = this.OPENID_AUTH_URL = 'openid-auth-url';
  static #_23 = this.OPENID_CLIENT_ID = 'openid-client-id';
  static #_24 = this.OCAPI_CLIENT_ID = 'ocapi-client-id';
  static #_25 = this.AUTH_PROVIDER = 'auth-provider';
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
  static #_ = this.ɵfac = function ConfigModule_Factory(t) {
    return new (t || ConfigModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ConfigModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
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
  static #_ = this.LOG = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.LogFactory.createLogger(ConfigService);
  constructor(window) {
    this.window = window;
    this.defaultConfig = {
      remoteHosts: {}
    };
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
  static #_2 = this.ɵfac = function ConfigService_Factory(t) {
    return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('Window'));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
//# sourceMappingURL=libs_shared_config_src_index_ts-_cef31.js.map