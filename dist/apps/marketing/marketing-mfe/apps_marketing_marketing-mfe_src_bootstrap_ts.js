(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["apps_marketing_marketing-mfe_src_bootstrap_ts"],{

/***/ 43606:
/*!***************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/app.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_image_src_interceptor_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/image-src-interceptor/image-src-interceptor.directive */ 19183);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 44578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class AppComponent {
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["tg-marketing-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 1,
    consts: [[1, "container"], [1, "logo"], ["alt", "telenet-logo", 3, "src"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/", 1, "nav-link"], ["routerLink", "/roaming-international-rates", 1, "nav-link"], ["routerLink", "/cafe/pricing", 1, "nav-link"], ["routerLink", "/cafe/wink-pricing", 1, "nav-link"], [1, "my-4"], [1, "card"], [1, "card-body"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nav", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 6)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Roaming and Internation Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 6)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 6)(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Wink Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "telenet-logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _shared_image_src_interceptor_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_0__.ImageSrcInterceptorDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87743:
/*!************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/app.config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 44578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 23826);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ 18042);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _cafe_priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cafe/priced-customer-product-holding/state/priced-cph.state */ 53384);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_11__);












const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forRoot({
    missingTranslationHandler: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.MissingTranslationHandler,
      useClass: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.TelenetMissingTranslationHandler,
      deps: [_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.TelenetMissingTranslationService]
    },
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateLoader,
      useClass: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.TelenetTranslateLoader
    }
  }), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    // Retains last 25 states
    logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.isDevMode)(),
    traceLimit: 75
  }), _ngxs_store__WEBPACK_IMPORTED_MODULE_9__.NgxsModule.forRoot([_cafe_priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_10__.PricedCphState]), _ngxs_store__WEBPACK_IMPORTED_MODULE_9__.NgxsModule.forRoot()), {
    provide: 'Window',
    useValue: window
  }, _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_11__.ConfigService, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_1__.MARKETING_ROUTES), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withInterceptorsFromDi)())]
};

/***/ }),

/***/ 23826:
/*!************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/app.routes.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MARKETING_ROUTES: () => (/* binding */ MARKETING_ROUTES)
/* harmony export */ });
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marketing/marketing/roaming-international/data-access */ 62826);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__);

const MARKETING_ROUTES = [{
  path: 'roaming-international-rates',
  loadComponent: () => __webpack_require__.e(/*! import() */ "webpack_sharing_consume_default_marketing_marketing_roaming-international_feat-rates_marketin-386e3f").then(__webpack_require__.t.bind(__webpack_require__, /*! @marketing/marketing/roaming-international/feat-rates */ 62062, 23)).then(m => m.RatesComponent),
  providers: [(0,_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__.provideRoamingInternationalDomain)()]
}, {
  path: 'cafe',
  loadChildren: () => __webpack_require__.e(/*! import() */ "apps_marketing_marketing-mfe_src_app_cafe_cafe_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cafe/cafe.routes */ 87674)).then(m => m.MARKETING_CAFE_ROUTES)
}, {
  path: 'nc',
  loadChildren: () => __webpack_require__.e(/*! import() */ "apps_marketing_marketing-mfe_src_app_nc_mock_marketing-nc-mock_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nc/mock/marketing-nc-mock.routes */ 43844)).then(m => m.MARKETING_NC_MOCK_ROUTES)
}];

/***/ }),

/***/ 9291:
/*!***********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/backend-error.notification.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackendErrorNotification: () => (/* binding */ BackendErrorNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);


class BackendErrorNotification {
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.ERROR;
  labelKey = 'general';
  shouldShow() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
  }
}

/***/ }),

/***/ 80176:
/*!***************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/notification.model.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationTypeEnum: () => (/* binding */ NotificationTypeEnum)
/* harmony export */ });
var NotificationTypeEnum;
(function (NotificationTypeEnum) {
  NotificationTypeEnum[NotificationTypeEnum["INFO"] = 0] = "INFO";
  NotificationTypeEnum[NotificationTypeEnum["ERROR"] = 1] = "ERROR";
  NotificationTypeEnum[NotificationTypeEnum["WARNING"] = 2] = "WARNING";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));

/***/ }),

/***/ 24782:
/*!**************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/abstract.mapper.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractMapper: () => (/* binding */ AbstractMapper)
/* harmony export */ });
class AbstractMapper {
  icon;
  static MAX_WEIGHT = 999;
  constructor(icon) {
    this.icon = icon;
  }
  map(product, parent) {
    if (!product) {
      return undefined;
    }
    const label = this.getLabel(product, parent);
    return {
      key: this.getKey(label),
      label: label,
      amount: 1,
      icon: this.icon,
      weight: this.getWeight(product?.productInfo)
    };
  }
  getKey(label) {
    return label.key;
  }
  getWeight(omapiProduct) {
    return omapiProduct && omapiProduct.weight ? omapiProduct.weight : AbstractMapper.MAX_WEIGHT;
  }
}

/***/ }),

/***/ 28497:
/*!**************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/data-sim.mapper.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSimMapper: () => (/* binding */ DataSimMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class DataSimMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  _key = 'ng.product-finder.step-card-offer.mobile-data-sim';
  constructor() {
    super('icon-sim-card-data');
  }
  getLabel(_product, _parent) {
    return {
      key: this._key
    };
  }
  static ɵfac = function DataSimMapper_Factory(t) {
    return new (t || DataSimMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataSimMapper,
    factory: DataSimMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 93381:
/*!*************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/default.mapper.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMapper: () => (/* binding */ DefaultMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _translate_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-helper.service */ 30963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class DefaultMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  translateHelperService;
  constructor(translateHelperService) {
    super('');
    this.translateHelperService = translateHelperService;
  }
  getKey(label) {
    return label?.args?.['itemName'] || '';
  }
  getLabel(product, _parent) {
    const labelKey = this.translateHelperService.getLabel('item');
    return {
      key: labelKey,
      args: {
        itemName: product?.productInfo?.name ?? 'unknown'
      }
    };
  }
  static ɵfac = function DefaultMapper_Factory(t) {
    return new (t || DefaultMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__.TranslateHelperService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DefaultMapper,
    factory: DefaultMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57138:
/*!****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/digital-tv.mapper.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalTvMapper: () => (/* binding */ DigitalTvMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class DigitalTvMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  static ICON_DTV = 'icon-tv';
  _key = 'ng.product-finder.step-card-offer.dtv';
  constructor() {
    super(DigitalTvMapper.ICON_DTV);
  }
  getLabel(product, parent) {
    let key = this._key;
    switch (true) {
      case product.isFlow():
        key += '-flow';
        break;
      case product.isIconic():
        key += '-terugkijk-play';
        break;
      case product.isYugoTv():
        key += '-yugo';
        break;
      case !parent:
        key += '-standalone';
        break;
      case this.isHighTierWigo(parent):
        key += '-terugkijk';
        break;
    }
    return {
      key: key
    };
  }
  isHighTierWigo(product) {
    return Boolean(product?.productInfo?.isWigo() && product?.productInfo?.isHighTier());
  }
  static ɵfac = function DigitalTvMapper_Factory(t) {
    return new (t || DigitalTvMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DigitalTvMapper,
    factory: DigitalTvMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18970:
/*!***************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/fixed-tel.mapper.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedTelMapper: () => (/* binding */ FixedTelMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class FixedTelMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  static ICON_FIXED_TEL = 'icon-telephone';
  _key = 'ng.product-finder.step-card-offer.fixed-tel';
  constructor() {
    super(FixedTelMapper.ICON_FIXED_TEL);
  }
  getLabel(_product, parent) {
    let key = this._key;
    switch (true) {
      case !parent:
        key += '-standalone';
        break;
      case this.isWigo3p(parent):
        key += '-wigo3P';
        break;
      case this.isWigo4p(parent):
        key += '-wigo4P';
        break;
      case this.isConnect5(parent):
        key += '-one';
        break;
    }
    return {
      key: key
    };
  }
  isWigo4p(product) {
    return product?.is4P() && product?.productInfo?.isWigo() || false;
  }
  isWigo3p(product) {
    return product?.is3P() && product?.productInfo?.isWigo() || false;
  }
  isConnect5(product) {
    return product?.productInfo?.isConnect5() || false;
  }
  static ɵfac = function FixedTelMapper_Factory(t) {
    return new (t || FixedTelMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FixedTelMapper,
    factory: FixedTelMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41816:
/*!**************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/internet.mapper.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetMapper: () => (/* binding */ InternetMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class InternetMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  static ICON_WIFI_SIGNAL = 'icon-wifi-signal';
  _downloadSpeedSpec = 'spec.fixedinternet.speed.download';
  _downloadVolumeSpec = 'spec.fixedinternet.volume.download.cap';
  FUP = 'FUP';
  _serviceCategory = 'serviceCategory';
  constructor() {
    super(InternetMapper.ICON_WIFI_SIGNAL);
  }
  getLabel(product, _parent) {
    const keyValue = product && product.productInfo && this.FUP === product.productInfo.getCharacteristic(this._serviceCategory) ? 'ng.product-finder.step-card-offer.unlimited.internet' : 'ng.product-finder.step-card-offer.internet';
    return {
      key: keyValue,
      args: this.getLabelArgs(product)
    };
  }
  getLabelArgs(product) {
    const downloadSpeedSpec = this.getSpecOrUndefined(product, this._downloadSpeedSpec);
    const downloadVolumeSpec = this.getSpecOrUndefined(product, this._downloadVolumeSpec);
    let args = {};
    if (downloadSpeedSpec) {
      args = Object.assign(args, {
        internetSpeed: this.createSpecString(downloadSpeedSpec)
      });
    }
    if (downloadVolumeSpec && downloadVolumeSpec.value !== this.FUP) {
      args = Object.assign(args, {
        internetVolume: this.createSpecString(downloadVolumeSpec)
      });
    }
    return Object.keys(args).length === 0 ? undefined : args;
  }
  getSpecOrUndefined(product, labelKey) {
    return product.productInfo ? product.productInfo.getServiceSpecificationByLabelKey(labelKey) : undefined;
  }
  createSpecString(spec) {
    return spec.value + ' ' + spec.unit;
  }
  static ɵfac = function InternetMapper_Factory(t) {
    return new (t || InternetMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: InternetMapper,
    factory: InternetMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 51010:
/*!************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/mobile.mapper.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileMapper: () => (/* binding */ MobileMapper)
/* harmony export */ });
/* harmony import */ var _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.mapper */ 24782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class MobileMapper extends _abstract_mapper__WEBPACK_IMPORTED_MODULE_0__.AbstractMapper {
  static ICON_MOBILE = 'icon-mobile';
  _key = 'ng.product-finder.step-card-offer.mobile-data-';
  _gbDisplay = ' GB';
  _unlimitedDisplay = 'Unlimited';
  _mobileInternetVolume = 'spec.mobileinternet.volume.cap';
  _mobileInternet = 'MOBILE_INTERNET';
  constructor() {
    super(MobileMapper.ICON_MOBILE);
  }
  getLabel(product, parent) {
    let key = this._key;
    let args;
    let maxMobileLines;
    const hasParent = !parent ? true : false;
    switch (true) {
      case this.isWigo(parent):
        key += 'wigo';
        maxMobileLines = this.getMaxMobileLines(parent);
        args = {
          data: this.getDataForParent(product, parent),
          simCards: maxMobileLines
        };
        key += maxMobileLines > 1 ? '.multiple-sim-cards' : '.single-sim-cards';
        break;
      case this.isConnect5(parent):
        key += 'one';
        break;
      case product.isPVV():
        key += 'pvv';
        break;
      case hasParent:
        args = {
          data: this.getData(product)
        };
        key += 'standalone';
        break;
    }
    return {
      key: key,
      args: args
    };
  }
  getDataForParent(product, parent) {
    return product.productInfo && product.productInfo.hasUnlimitedInternetBasedOnLabelKey() ? this._unlimitedDisplay : parent?.productInfo?.getSharedMobileData() + this._gbDisplay;
  }
  getData(product) {
    const spec = product.productInfo && product.productInfo.getServiceSpecificationByLabelKey(this._mobileInternetVolume, this._mobileInternet);
    return (spec && spec.value + ' ' + spec.unit) ?? '';
  }
  isWigo(product) {
    return product?.productInfo?.isWigo() ?? false;
  }
  isConnect5(product) {
    return product?.productInfo?.isConnect5() ?? false;
  }
  getMaxMobileLines(product) {
    return Number(product?.productInfo?.getMaxMobileLines());
  }
  static ɵfac = function MobileMapper_Factory(t) {
    return new (t || MobileMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MobileMapper,
    factory: MobileMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41038:
/*!*****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/priced-cph.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCphService: () => (/* binding */ PricedCphService)
/* harmony export */ });
/* harmony import */ var _http_cafe_bills_utils_cafe_bills_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../http/cafe/bills/utils/cafe-bills.util */ 40733);
/* harmony import */ var _specifications_mapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specifications-mapper.service */ 55552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class PricedCphService {
  specificationsMapperService;
  static MAX_WEIGHT = 999;
  constructor(specificationsMapperService) {
    this.specificationsMapperService = specificationsMapperService;
  }
  getOverview(productHolding, bills) {
    const overviews = [];
    if (productHolding.products && productHolding.products.length > 0) {
      const products = this.getVisibleProductsOnFirstInstallationAddress(productHolding);
      if (products.length === 0) {
        return this.defaultOverviews();
      }
      const accountNumbers = this.getFlattenedUniqueAccountNumbers(productHolding);
      for (const accountNumber of accountNumbers) {
        let cphOverview = this.getCphOverview(products, accountNumber);
        cphOverview = bills.length > 0 && cphOverview.products.length > 0 ? this.enrichWithPrice(cphOverview, bills, accountNumber) : cphOverview;
        overviews.push(cphOverview);
      }
      return overviews;
    } else {
      return this.defaultOverviews();
    }
  }
  defaultOverviews() {
    return [{
      products: [],
      options: []
    }];
  }
  getFlattenedUniqueAccountNumbers(productHolding) {
    const accountNumbers = productHolding.products.reduce((acc, val) => acc.concat(val.accountNumber), []);
    return Array.from(new Set(accountNumbers));
  }
  getCphOverview(products, accountNumber) {
    return {
      products: this.getProducts(products, accountNumber).sort(this.sortByWeight()).reduce(this.groupThem, []),
      options: this.getOptions(products, accountNumber).sort(this.sortByWeight()).reduce(this.groupThem, [])
    };
  }
  getVisibleProductsOnFirstInstallationAddress(productHolding) {
    const firstInstallationAddress = productHolding.installationAddresses[0];
    const productsForAddress = productHolding.getProductsForAddress(productHolding.products, firstInstallationAddress);
    return this.filterInvisibleProducts(productsForAddress);
  }
  filterInvisibleProducts(products) {
    const filteredProducts = products.filter(product => product.productInfo ? product.productInfo.visible : false);
    filteredProducts.forEach(product => {
      product.options = product.options.filter(option => option.productInfo ? option.productInfo.visible : false);
      product.products = this.filterInvisibleProducts(product.products);
    });
    return filteredProducts;
  }
  getProducts(products, accountNumber) {
    return products.filter(product => product.accountNumber === accountNumber).map(product => {
      const productInfo = product.productInfo;
      return {
        key: product?.productInfo?.name,
        amount: 1,
        weight: productInfo && this.getWeight(productInfo),
        specifications: this.getSpecifications(product)
      };
    });
  }
  getSpecifications(product) {
    if (product?.productInfo?.isBundle()) {
      return product.products.map(subProduct => this.specificationsMapperService.map(subProduct, product)).sort(this.sortByWeight()).reduce(this.groupThem, []);
    }
    const mappedProduct = this.specificationsMapperService.map(product);
    if (mappedProduct) {
      return [mappedProduct];
    }
    return [];
  }
  getOptions(products, accountNumber) {
    if (accountNumber) {
      products = products.filter(product => product.accountNumber === accountNumber);
    }
    return products.map(product => this.mapOptions(product)).flatMap(product => product);
  }
  mapOptions(product) {
    return [...product.options.map(option => {
      const productInfo = option?.productInfo;
      return {
        key: option?.productInfo?.name,
        amount: 1,
        weight: productInfo && this.getWeight(productInfo)
      };
    }), ...this.mapBundleOptions(product)];
  }
  mapBundleOptions(product) {
    if (product?.productInfo?.isBundle()) {
      return this.getOptions(product.products);
    }
    return [];
  }
  groupThem(accum, each) {
    if (!each) return accum;
    const existingItem = accum.find(pricedItem => pricedItem.key === each.key);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      accum.push(each);
    }
    return accum;
  }
  enrichWithPrice(overview, bills, accountNumber) {
    if (bills.length > 0 && _http_cafe_bills_utils_cafe_bills_util__WEBPACK_IMPORTED_MODULE_0__.CafeBillsUtil.hasBillsForAccount(String(accountNumber), bills)) {
      const statement = _http_cafe_bills_utils_cafe_bills_util__WEBPACK_IMPORTED_MODULE_0__.CafeBillsUtil.retrieveLastBillStatementByAccountNumber(String(accountNumber), bills);
      overview.lastBillPrice = String(statement.billamount.amount);
    }
    return overview;
  }
  sortByWeight() {
    return (a, b) => {
      if (a && b) {
        return a.weight - b.weight;
      }
      return 0;
    };
  }
  getWeight(omapiProduct) {
    return omapiProduct && omapiProduct.weight ? omapiProduct.weight : PricedCphService.MAX_WEIGHT;
  }
  static ɵfac = function PricedCphService_Factory(t) {
    return new (t || PricedCphService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_specifications_mapper_service__WEBPACK_IMPORTED_MODULE_1__.SpecificationsMapperService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PricedCphService,
    factory: PricedCphService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55552:
/*!****************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/specifications-mapper.service.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecificationsMapperService: () => (/* binding */ SpecificationsMapperService)
/* harmony export */ });
/* harmony import */ var _digital_tv_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-tv.mapper */ 57138);
/* harmony import */ var _fixed_tel_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed-tel.mapper */ 18970);
/* harmony import */ var _internet_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internet.mapper */ 41816);
/* harmony import */ var _mobile_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile.mapper */ 51010);
/* harmony import */ var _default_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default.mapper */ 93381);
/* harmony import */ var _data_sim_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-sim.mapper */ 28497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);













// is it a factory instead of a service?
class SpecificationsMapperService {
  digitalTvMapper;
  fixedTelMapper;
  internetMapper;
  mobileMapper;
  dataSimMapper;
  defaultMapper;
  constructor(digitalTvMapper, fixedTelMapper, internetMapper, mobileMapper, dataSimMapper, defaultMapper) {
    this.digitalTvMapper = digitalTvMapper;
    this.fixedTelMapper = fixedTelMapper;
    this.internetMapper = internetMapper;
    this.mobileMapper = mobileMapper;
    this.dataSimMapper = dataSimMapper;
    this.defaultMapper = defaultMapper;
  }
  map(product, parent) {
    const mapper = this.getMapper(product);
    const pricedCphSpec = mapper?.map(product, parent);
    if (product.productInfo && product.productInfo.hasServiceType('ATV') && pricedCphSpec) {
      pricedCphSpec.icon = _digital_tv_mapper__WEBPACK_IMPORTED_MODULE_0__.DigitalTvMapper.ICON_DTV;
    }
    return pricedCphSpec;
  }
  getMapper(product) {
    switch (true) {
      case product.isInternet():
        return this.internetMapper;
      case product.isMobile():
        return this.mobileMapper;
      case product.isDTV():
        return this.digitalTvMapper;
      case product.isFixedCalling():
        return this.fixedTelMapper;
      case product.isMobileInternet():
        return this.dataSimMapper;
      default:
        return this.defaultMapper;
    }
  }
  static ɵfac = function SpecificationsMapperService_Factory(t) {
    return new (t || SpecificationsMapperService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_digital_tv_mapper__WEBPACK_IMPORTED_MODULE_0__.DigitalTvMapper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_fixed_tel_mapper__WEBPACK_IMPORTED_MODULE_1__.FixedTelMapper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_internet_mapper__WEBPACK_IMPORTED_MODULE_2__.InternetMapper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_mobile_mapper__WEBPACK_IMPORTED_MODULE_3__.MobileMapper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_data_sim_mapper__WEBPACK_IMPORTED_MODULE_5__.DataSimMapper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_default_mapper__WEBPACK_IMPORTED_MODULE_4__.DefaultMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: SpecificationsMapperService,
    factory: SpecificationsMapperService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30963:
/*!***********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/translate-helper.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateHelperService: () => (/* binding */ TranslateHelperService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class TranslateHelperService {
  getTitle(key) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LabelUtil.getLabelKeyWithTypeTitle(this.joinValues([_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_1__.PricedCphConstants.MESSAGE_GROUP, key]));
  }
  getLabel(key) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LabelUtil.getLabelKeyWithTypeLabel(this.joinValues([_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_1__.PricedCphConstants.MESSAGE_GROUP, key]));
  }
  getText(key) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LabelUtil.getLabelKeyWithTypeText(this.joinValues([_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_1__.PricedCphConstants.MESSAGE_GROUP, key]));
  }
  joinValues(values) {
    return values.join('.');
  }
  static ɵfac = function TranslateHelperService_Factory(t) {
    return new (t || TranslateHelperService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TranslateHelperService,
    factory: TranslateHelperService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44707:
/*!*******************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/state/priced-cph-state.model.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  loginDetails: undefined,
  overview: undefined,
  isLoggedIn: false
};

/***/ }),

/***/ 60672:
/*!***************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/state/priced-cph.actions.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Initialize: () => (/* binding */ Initialize),
/* harmony export */   SetLoginDetails: () => (/* binding */ SetLoginDetails),
/* harmony export */   SetNotificationIfNotSet: () => (/* binding */ SetNotificationIfNotSet),
/* harmony export */   SetOverview: () => (/* binding */ SetOverview)
/* harmony export */ });
class Initialize {
  static type = '[PricedCPH] Initialise the data';
}
class SetNotificationIfNotSet {
  notification;
  static type = '[PricedCPH] Set notification';
  constructor(notification) {
    this.notification = notification;
  }
}
class SetLoginDetails {
  loginDetails;
  static type = '[PricedCPH] Set login details';
  constructor(loginDetails) {
    this.loginDetails = loginDetails;
  }
}
class SetOverview {
  overview;
  static type = '[PricedCPH] Set overview';
  constructor(overview) {
    this.overview = overview;
  }
}

/***/ }),

/***/ 53384:
/*!*************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/state/priced-cph.state.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCphState: () => (/* binding */ PricedCphState)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priced-cph.actions */ 60672);
/* harmony import */ var _priced_cph_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priced-cph-state.model */ 44707);
/* harmony import */ var _service_priced_cph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/priced-cph.service */ 41038);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);
/* harmony import */ var _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/backend-error.notification */ 9291);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _http_cafe_product_holding_services_product_holding_adaptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../http/cafe/product-holding/services/product-holding-adaptor.service */ 49321);
/* harmony import */ var _http_cafe_bills_services_cafe_bills_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../http/cafe/bills/services/cafe-bills.service */ 9774);
/* harmony import */ var _http_cafe_product_holding_models_product_holding_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../http/cafe/product-holding/models/product-holding.model */ 68771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_12__);
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


















let PricedCphState = class PricedCphState {
  loginService;
  productHoldingService;
  pricedCphService;
  billService;
  constructor(loginService, productHoldingService, pricedCphService, billService) {
    this.loginService = loginService;
    this.productHoldingService = productHoldingService;
    this.pricedCphService = pricedCphService;
    this.billService = billService;
  }
  static loginDetails(state) {
    return state?.loginDetails;
  }
  static overview(state) {
    return state?.overview;
  }
  static notification(state) {
    return state.notification;
  }
  static isLoggedIn(state) {
    return state?.loginDetails?.isLoggedIn();
  }
  initialize(ctx) {
    return this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(loginDetails => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.loadCustomerProductHolding(loginDetails), this.loadBills(loginDetails), ctx.dispatch(new _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetLoginDetails(loginDetails))])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => this.pricedCphService.getOverview(result[0], result[1])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(pricedCphOverviews => ctx.dispatch(new _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetOverview(pricedCphOverviews || []))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      ctx.dispatch(new _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotificationIfNotSet(new _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_7__.BackendErrorNotification()));
      console.error('CPH: error in loading data ', err);
      return [];
    }));
  }
  setOverview(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_13__.produce)(ctx.getState(), draft => {
      draft.overview = action.overview;
    }));
  }
  setNotificationIfNotSet(ctx, action) {
    if (!ctx.getState().notification) {
      ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_13__.produce)(ctx.getState(), draft => {
        draft.notification = action.notification;
      }));
    }
  }
  setLoginDetails(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_13__.produce)(ctx.getState(), draft => {
      draft.loginDetails = action.loginDetails;
    }));
  }
  loadCustomerProductHolding(loginDetails) {
    if (loginDetails.isLoggedIn()) {
      return this.productHoldingService.getCustomerProductHolding(_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_6__.PricedCphConstants.MESSAGE_GROUP);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(new _http_cafe_product_holding_models_product_holding_model__WEBPACK_IMPORTED_MODULE_11__.ProductHolding());
  }
  loadBills(loginDetails) {
    if (loginDetails.isLoggedIn() && loginDetails.isManager()) {
      return this.billService.getBills(_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_6__.PricedCphConstants.MESSAGE_GROUP);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
  }
  static ɵfac = function PricedCphState_Factory(t) {
    return new (t || PricedCphState)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_http_cafe_product_holding_services_product_holding_adaptor_service__WEBPACK_IMPORTED_MODULE_9__.ProductHoldingAdaptorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_service_priced_cph_service__WEBPACK_IMPORTED_MODULE_3__.PricedCphService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_http_cafe_bills_services_cafe_bills_service__WEBPACK_IMPORTED_MODULE_10__.CafeBillsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: PricedCphState,
    factory: PricedCphState.ɵfac
  });
};
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.Initialize), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable)], PricedCphState.prototype, "initialize", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetOverview), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetOverview]), __metadata("design:returntype", void 0)], PricedCphState.prototype, "setOverview", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotificationIfNotSet), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotificationIfNotSet]), __metadata("design:returntype", void 0)], PricedCphState.prototype, "setNotificationIfNotSet", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetLoginDetails), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _priced_cph_actions__WEBPACK_IMPORTED_MODULE_1__.SetLoginDetails]), __metadata("design:returntype", void 0)], PricedCphState.prototype, "setLoginDetails", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], PricedCphState, "loginDetails", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], PricedCphState, "overview", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], PricedCphState, "notification", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], PricedCphState, "isLoggedIn", null);
PricedCphState = __decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
  name: 'pricedcph',
  defaults: _priced_cph_state_model__WEBPACK_IMPORTED_MODULE_2__.defaultState
}), __metadata("design:paramtypes", [_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_8__.LoginService, _http_cafe_product_holding_services_product_holding_adaptor_service__WEBPACK_IMPORTED_MODULE_9__.ProductHoldingAdaptorService, _service_priced_cph_service__WEBPACK_IMPORTED_MODULE_3__.PricedCphService, _http_cafe_bills_services_cafe_bills_service__WEBPACK_IMPORTED_MODULE_10__.CafeBillsService])], PricedCphState);


/***/ }),

/***/ 79620:
/*!****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/util/priced-cph.constants.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCphConstants: () => (/* binding */ PricedCphConstants)
/* harmony export */ });
class PricedCphConstants {
  static MESSAGE_GROUP = 'priced-cph';
}

/***/ }),

/***/ 74501:
/*!*******************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/bills/mappers/cafe-bills.mapper.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeBillsMapper: () => (/* binding */ CafeBillsMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class CafeBillsMapper {
  toModel(data, _httpStatus) {
    return data.bills.map(rawBill => {
      return {
        accountnumber: rawBill.accountnumber,
        bills: rawBill.bills
      };
    });
  }
  static ɵfac = function CafeBillsMapper_Factory(t) {
    return new (t || CafeBillsMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CafeBillsMapper,
    factory: CafeBillsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9774:
/*!*********************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/bills/services/cafe-bills.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeBillsService: () => (/* binding */ CafeBillsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mappers_cafe_bills_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mappers/cafe-bills.mapper */ 74501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class CafeBillsService {
  ocapiService;
  cafeBillsMapper;
  PROPERTY_URL = '/public/?p=bills';
  cafeBillsCache;
  constructor(ocapiService, cafeBillsMapper) {
    this.ocapiService = ocapiService;
    this.cafeBillsMapper = cafeBillsMapper;
  }
  getBills(messageGroup) {
    if (this.cafeBillsCache) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cafeBillsCache);
    }
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.cafeBillsMapper)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response) {
        this.cafeBillsCache = response;
      }
    }));
  }
  static ɵfac = function CafeBillsService_Factory(t) {
    return new (t || CafeBillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mappers_cafe_bills_mapper__WEBPACK_IMPORTED_MODULE_3__.CafeBillsMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CafeBillsService,
    factory: CafeBillsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 40733:
/*!***************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/bills/utils/cafe-bills.util.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeBillsUtil: () => (/* binding */ CafeBillsUtil)
/* harmony export */ });
class CafeBillsUtil {
  static hasBillsForAccount(accountNumber, bills) {
    return bills && bills.some(bill => bill.accountnumber === accountNumber);
  }
  static retrieveLastBillStatementByAccountNumber(accountNumber, bills) {
    const map = bills.filter(bill => bill.accountnumber === accountNumber).map(billsByAccount => billsByAccount.bills).reduce((acc, val) => acc.concat(val), []);
    return map.reduce((a, b) => {
      return new Date(a.statementdate) > new Date(b.statementdate) ? a : b;
    });
  }
}

/***/ }),

/***/ 92720:
/*!*****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/constants/product-characteristic.enum.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCharacteristicEnum: () => (/* binding */ ProductCharacteristicEnum),
/* harmony export */   ProductGroupEnum: () => (/* binding */ ProductGroupEnum),
/* harmony export */   ProductLevelEnum: () => (/* binding */ ProductLevelEnum),
/* harmony export */   ProductTierEnum: () => (/* binding */ ProductTierEnum)
/* harmony export */ });
var ProductCharacteristicEnum;
(function (ProductCharacteristicEnum) {
  ProductCharacteristicEnum["PRODUCT_GROUP"] = "productGroup";
  ProductCharacteristicEnum["PRODUCT_LEVEL"] = "productLevel";
  ProductCharacteristicEnum["PRODUCT_TIER"] = "productTier";
  ProductCharacteristicEnum["MAX_MOBILE_LINES"] = "maxMobileLines";
  ProductCharacteristicEnum["SHARED_MOBILE_DATA"] = "sharedMobileData";
})(ProductCharacteristicEnum || (ProductCharacteristicEnum = {}));
var ProductGroupEnum;
(function (ProductGroupEnum) {
  ProductGroupEnum["FMC"] = "FMC";
})(ProductGroupEnum || (ProductGroupEnum = {}));
var ProductLevelEnum;
(function (ProductLevelEnum) {
  ProductLevelEnum["LEVEL_2P"] = "2P";
  ProductLevelEnum["LEVEL_3P"] = "3P";
  ProductLevelEnum["LEVEL_4P"] = "4P";
})(ProductLevelEnum || (ProductLevelEnum = {}));
var ProductTierEnum;
(function (ProductTierEnum) {
  ProductTierEnum["LOW"] = "Low";
  ProductTierEnum["MID"] = "Mid";
  ProductTierEnum["HIGH"] = "High";
})(ProductTierEnum || (ProductTierEnum = {}));

/***/ }),

/***/ 46182:
/*!*******************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/constants/product.constants.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductConstants: () => (/* binding */ ProductConstants)
/* harmony export */ });
class ProductConstants {
  static CUSTOMER_PRODUCT_HOLDING = 'customerproductholding';
  static ADAPTOR_URL = '-adaptor';
}

/***/ }),

/***/ 88784:
/*!*************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/mappers/option.mapper.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionMapper: () => (/* binding */ OptionMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_option_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/option.model */ 88919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class OptionMapper {
  omapiMapper;
  constructor(omapiMapper) {
    this.omapiMapper = omapiMapper;
  }
  toModel(option) {
    return this.createOption(option);
  }
  createOption(rawOption) {
    const option = new _models_option_model__WEBPACK_IMPORTED_MODULE_1__.Option();
    option.label = rawOption.label;
    option.specUrl = rawOption.specurl;
    option.productInfo = this.omapiMapper.toModel(rawOption.rawOmapi);
    return option;
  }
  static ɵfac = function OptionMapper_Factory(t) {
    return new (t || OptionMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OptionMapper,
    factory: OptionMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7670:
/*!**********************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/mappers/product-holding.mapper.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductHoldingMapper: () => (/* binding */ ProductHoldingMapper)
/* harmony export */ });
/* harmony import */ var _models_product_holding_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product-holding.model */ 68771);
/* harmony import */ var _product_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.mapper */ 39273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductHoldingMapper {
  productMapper;
  constructor(productMapper) {
    this.productMapper = productMapper;
  }
  toModel(data, _httpStatus) {
    return this.createCustomerProductHoldings(data.customerproductholding);
  }
  createCustomerProductHoldings(rawProductHolding) {
    const productHolding = new _models_product_holding_model__WEBPACK_IMPORTED_MODULE_0__.ProductHolding();
    productHolding.products = this.createProducts(rawProductHolding);
    return productHolding;
  }
  createProducts(rawProductHolding) {
    const products = [];
    rawProductHolding.forEach(rawProduct => {
      products.push(this.productMapper.toModel(rawProduct));
    });
    return products;
  }
  static ɵfac = function ProductHoldingMapper_Factory(t) {
    return new (t || ProductHoldingMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_product_mapper__WEBPACK_IMPORTED_MODULE_1__.ProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductHoldingMapper,
    factory: ProductHoldingMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 39273:
/*!**************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/mappers/product.mapper.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductMapper: () => (/* binding */ ProductMapper)
/* harmony export */ });
/* harmony import */ var _common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/address/mappers/address.mapper */ 21798);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product.model */ 96374);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 60287);
/* harmony import */ var _option_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option.mapper */ 88784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);









class ProductMapper {
  addressMapper;
  omapiMapper;
  optionMapper;
  constructor(addressMapper, omapiMapper, optionMapper) {
    this.addressMapper = addressMapper;
    this.omapiMapper = omapiMapper;
    this.optionMapper = optionMapper;
  }
  toModel(product) {
    return this.createProduct(product);
  }
  createProduct(rawProduct) {
    const product = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
    product.accountNumber = Number(rawProduct.accountnumber);
    if (rawProduct.address) {
      product.address = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(this.createAddress(rawProduct.address));
    }
    product.customerProductId = Number(rawProduct.customerproductid);
    product.identifier = rawProduct.identifier;
    product.lineIdentifier = rawProduct.lineIdentifier;
    product.label = rawProduct.label;
    product.specUrl = rawProduct.specurl;
    product.products = this.createProducts(rawProduct.products, rawProduct?.address);
    if (rawProduct.rawOmapi) product.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    product.options = this.createOptions(rawProduct.options);
    return product;
  }
  createProductInfo(rawOmapi) {
    if (rawOmapi) {
      return this.omapiMapper.toModel(rawOmapi);
    }
    return {};
  }
  createAddress(rawAddresses) {
    if (rawAddresses) {
      return this.addressMapper.toModel([rawAddresses]);
    }
    return undefined;
  }
  createProducts(products, address) {
    if (products) {
      return products.map(product => {
        product.address = address;
        return this.toModel(product);
      });
    }
    return [];
  }
  createOptions(options) {
    return options.map(option => {
      return this.optionMapper.toModel(option);
    });
  }
  static ɵfac = function ProductMapper_Factory(t) {
    return new (t || ProductMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_0__.AddressMapper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__.OmapiProductMapper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_option_mapper__WEBPACK_IMPORTED_MODULE_3__.OptionMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductMapper,
    factory: ProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88919:
/*!***********************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/models/option.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Option: () => (/* binding */ Option)
/* harmony export */ });
class Option {
  label;
  specUrl;
  productInfo;
  getOmapiId() {
    return this.productInfo ? this.productInfo.productId : undefined;
  }
}

/***/ }),

/***/ 68771:
/*!********************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/models/product-holding.model.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductHolding: () => (/* binding */ ProductHolding)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var factory_ts_lib_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! factory.ts/lib/shared */ 56109);
/* harmony import */ var _common_address_utils_address_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/address/utils/address.util */ 7765);



class ProductHolding {
  products = [];
  _installationAddresses;
  containsFMC() {
    return this.products.some(product => {
      return product.isFmc();
    });
  }
  containsWigoHomeS() {
    return this.products.some(product => {
      return product.isFmc() && product.isMidTier() && product.is3P();
    });
  }
  containsWhoppa() {
    return this.products.some(product => {
      return product.isWhoppa();
    });
  }
  containsInternetProduct() {
    return this.getFlattenedProducts(this.products).some(product => {
      return product.isInternet();
    });
  }
  containsOnlyGivenProductsAndOptions(omapiIds) {
    const holdingOmapiIds = (0,factory_ts_lib_shared__WEBPACK_IMPORTED_MODULE_1__.uniq)(this.getProductsAndOptionsOmapiIds());
    return holdingOmapiIds.length === omapiIds.length && this.products.every(product => {
      return omapiIds.indexOf(product.getOmapiId() ?? '') >= 0;
    });
  }
  containsFixedLine() {
    return this.getLines().indexOf(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.PHONE) >= 0;
  }
  containsDtv() {
    return this.getLines().indexOf(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.IDTV) >= 0;
  }
  getFixedLine() {
    const product = this.getFlattenedProducts(this.products).find(currentProduct => {
      return currentProduct.isFixedCalling();
    });
    return product ? product.identifier : '';
  }
  getLines() {
    const flattenedProducts = this.getFlattenedProducts(this.products);
    return this.getProductLines(flattenedProducts);
  }
  getLinesForAddress(address) {
    let flattenedProducts = this.getFlattenedProducts(this.products);
    flattenedProducts = this.getProductsForAddress(flattenedProducts, address);
    return this.getProductLines(flattenedProducts);
  }
  getMaxMobileLines() {
    if (typeof this.products[0]?.productInfo?.characteristics === 'object' && this.products[0]?.productInfo?.characteristics && typeof this.products[0]?.productInfo?.characteristics['maxMobileLines'] === 'string') return this.products[0]?.productInfo?.characteristics['maxMobileLines'];
    return '';
  }
  getBundleMaxMobileLines() {
    return Number(this.products.find(product => product.productInfo && product.productInfo.isBundle())?.productInfo?.getMaxMobileLines());
  }
  getBundleDtvIdentifier() {
    const bundle = this.products.find(product => product.productInfo && product.productInfo.isBundle());
    return bundle ? bundle.getDtvIdentifier() : undefined;
  }
  getProductsForAddress(flattenedProducts, address) {
    return flattenedProducts.filter(product => {
      return product.address ? _common_address_utils_address_util__WEBPACK_IMPORTED_MODULE_2__.AddressUtil.compareAddresses(product.address, address) : false;
    });
  }
  getProductIds() {
    return this.products.flatMap(product => product.productInfo?.productId !== undefined ? [product.productInfo?.productId] : []);
  }
  get installationAddresses() {
    if (this._installationAddresses) {
      return this._installationAddresses;
    }
    this._installationAddresses = this.getInstallationAddressesForProduct(() => {
      return true;
    });
    return this._installationAddresses;
  }
  getInstallationAddressesForProduct(predicate) {
    return this.getFlattenedProducts(this.products).filter(predicate).filter(product => {
      return !!product.address?.addressId;
    }).reduce((addresses, product) => {
      if (!addresses.find(needle => {
        return needle.addressId === product.address?.addressId;
      })) {
        const productAdress = product.address;
        if (productAdress) addresses.push(productAdress);
      }
      return addresses;
    }, []);
  }
  getFlattenedProducts(products, returnProductList = []) {
    products.forEach(product => {
      if (product.products && product.products.length > 0) {
        returnProductList.push(product);
        returnProductList = this.getFlattenedProducts(product.products, returnProductList);
      } else {
        returnProductList.push(product);
      }
    });
    return returnProductList;
  }
  getProductsAndOptionsOmapiIds() {
    const omapiIds = [];
    this.getFlattenedProducts(this.products).forEach(product => {
      const productId = product.getOmapiId();
      if (productId) omapiIds.push(productId);
      product.options.forEach(option => {
        const optionOmapiId = option.getOmapiId();
        if (optionOmapiId) {
          omapiIds.push(optionOmapiId);
        }
      });
    });
    return omapiIds;
  }
  getProductLines(products) {
    const serviceTypes = [];
    products.forEach(product => {
      product?.productInfo?.services?.forEach(service => {
        switch (service.serviceType) {
          case 'DTV':
            serviceTypes.push(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.IDTV);
            break;
          case 'FIXED_INTERNET':
            serviceTypes.push(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.INTERNET);
            break;
          case 'FIXED_CALLING':
            serviceTypes.push(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.PHONE);
            break;
          case 'ATV':
            serviceTypes.push(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.LineEnum.ANALOGTV);
            break;
        }
      });
    });
    return serviceTypes;
  }
}

/***/ }),

/***/ 33419:
/*!**********************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/models/product-identifier.enum.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductIdentifierEnum: () => (/* binding */ ProductIdentifierEnum)
/* harmony export */ });
var ProductIdentifierEnum;
(function (ProductIdentifierEnum) {
  ProductIdentifierEnum[ProductIdentifierEnum["WHOPPA"] = 70] = "WHOPPA";
  ProductIdentifierEnum[ProductIdentifierEnum["WHOP"] = 71] = "WHOP";
  ProductIdentifierEnum[ProductIdentifierEnum["FLOW"] = 43755] = "FLOW";
  ProductIdentifierEnum[ProductIdentifierEnum["ICONIC"] = 40816] = "ICONIC";
  ProductIdentifierEnum[ProductIdentifierEnum["YUGO_TV"] = 12948] = "YUGO_TV";
  ProductIdentifierEnum[ProductIdentifierEnum["PVV"] = 678] = "PVV";
})(ProductIdentifierEnum || (ProductIdentifierEnum = {}));

/***/ }),

/***/ 96374:
/*!************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/models/product.model.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/product-characteristic.enum */ 92720);
/* harmony import */ var _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-identifier.enum */ 33419);


class Product {
  static FIXED_INTERNET = 'FIXED_INTERNET';
  static DTV = 'DTV';
  static GENERAL = 'GENERAL';
  static FIXED_CALLING = 'FIXED_CALLING';
  static MOBILE_CALLING = 'MOBILE_CALLING';
  static MOBILE_INTERNET = 'MOBILE_INTERNET';
  static ATV = 'ATV';
  identifier;
  lineIdentifier;
  customerProductId;
  accountNumber;
  label;
  specUrl;
  options = [];
  products = [];
  productInfo;
  address;
  hasIdentifier(identifier) {
    return identifier === this.identifier || this.products && this.products.some(product => {
      return product.identifier === identifier;
    });
  }
  isFmc() {
    return this.getProductGroup() === _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductGroupEnum.FMC;
  }
  is3P() {
    return this.getProductLevel() === _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductLevelEnum.LEVEL_3P;
  }
  is4P() {
    return this.getProductLevel() === _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductLevelEnum.LEVEL_4P;
  }
  isMidTier() {
    return this.getProductTier() === _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductTierEnum.MID;
  }
  isHighTier() {
    return this.getProductTier() === _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductTierEnum.HIGH;
  }
  isWhop() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.WHOP.toString();
  }
  isWhoppa() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.WHOPPA.toString();
  }
  isFlow() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.FLOW.toString();
  }
  isIconic() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.ICONIC.toString();
  }
  isYugoTv() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.YUGO_TV.toString();
  }
  isPVV() {
    return this.productInfo && this.productInfo.productId && this.productInfo.productId === _product_identifier_enum__WEBPACK_IMPORTED_MODULE_1__.ProductIdentifierEnum.PVV.toString();
  }
  isInternet() {
    return this.productInfo?.hasServiceType(Product.FIXED_INTERNET) || false;
  }
  isFixedCalling() {
    return this.productInfo?.hasServiceType(Product.FIXED_CALLING) || false;
  }
  isDTV() {
    return this.productInfo?.hasServiceType(Product.DTV) || false;
  }
  hasDtvSubProducts() {
    return this.products && this.products.some(product => {
      return product.isDTV();
    });
  }
  getDtvIdentifier() {
    if (this.products) {
      const dtvProduct = this.products.find(product => product.isDTV());
      if (dtvProduct) {
        return dtvProduct.identifier;
      }
    }
    return undefined;
  }
  isMobile() {
    return this.productInfo?.hasServiceType(Product.MOBILE_CALLING) || false;
  }
  isMobileInternet() {
    return this.productInfo?.hasServiceType(Product.MOBILE_INTERNET) && !this.isMobile() || false;
  }
  getOmapiId() {
    return this.productInfo ? this.productInfo.productId : undefined;
  }
  getProductGroup() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(_constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductCharacteristicEnum.PRODUCT_GROUP);
    }
    return false;
  }
  isOnAddress(addressId) {
    return this.address?.addressId === addressId;
  }
  getProductLevel() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(_constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductCharacteristicEnum.PRODUCT_LEVEL);
    }
    return false;
  }
  getProductTier() {
    if (this.productInfo && this.productInfo.characteristics) {
      return this.productInfo.getCharacteristic(_constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.ProductCharacteristicEnum.PRODUCT_TIER);
    }
    return false;
  }
}

/***/ }),

/***/ 76259:
/*!*****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/services/base-product-holding.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseProductHoldingService: () => (/* binding */ BaseProductHoldingService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_product_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/product.constants */ 46182);




class BaseProductHoldingService {
  ocapiService;
  productHoldingMapper;
  PROPERTY_URL = '/public/?p=' + _constants_product_constants__WEBPACK_IMPORTED_MODULE_3__.ProductConstants.CUSTOMER_PRODUCT_HOLDING;
  productHoldingCache;
  constructor(ocapiService, productHoldingMapper) {
    this.ocapiService = ocapiService;
    this.productHoldingMapper = productHoldingMapper;
  }
  getCustomerProductHolding(messageGroup) {
    if (this.productHoldingCache) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.productHoldingCache);
    }
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.productHoldingMapper)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response) {
        this.productHoldingCache = response;
      }
    }));
  }
  getCustomerProductsByAddressId(messageGroup, addressId) {
    return this.getCustomerProductHolding(messageGroup).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.products.filter(product => product.address && product.address.addressId === addressId)));
  }
}

/***/ }),

/***/ 49321:
/*!********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/product-holding/services/product-holding-adaptor.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductHoldingAdaptorService: () => (/* binding */ ProductHoldingAdaptorService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappers_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mappers/product-holding.mapper */ 7670);
/* harmony import */ var _constants_product_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product.constants */ 46182);
/* harmony import */ var _base_product_holding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-product-holding.service */ 76259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ProductHoldingAdaptorService extends _base_product_holding_service__WEBPACK_IMPORTED_MODULE_3__.BaseProductHoldingService {
  ocapiService;
  productHoldingMapper;
  constructor(ocapiService, productHoldingMapper) {
    super(ocapiService, productHoldingMapper);
    this.ocapiService = ocapiService;
    this.productHoldingMapper = productHoldingMapper;
    this.PROPERTY_URL = '-adaptor/public/?p=' + _constants_product_constants__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.CUSTOMER_PRODUCT_HOLDING;
  }
  static ɵfac = function ProductHoldingAdaptorService_Factory(t) {
    return new (t || ProductHoldingAdaptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mappers_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__.ProductHoldingMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductHoldingAdaptorService,
    factory: ProductHoldingAdaptorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21798:
/*!********************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/common/address/mappers/address.mapper.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressMapper: () => (/* binding */ AddressMapper)
/* harmony export */ });
/* harmony import */ var _models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/address.model */ 92409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class AddressMapper {
  toModel(rawAddresses) {
    return this.createContactAddresses(rawAddresses);
  }
  createContactAddresses(rawAddresses) {
    let address;
    if (rawAddresses instanceof Array) {
      address = rawAddresses;
    } else if (rawAddresses.address instanceof Array) {
      return this.createContactAddressesForObject(rawAddresses);
    } else {
      address = [rawAddresses];
    }
    return address.map(rawAddress => this.createContactAddress(rawAddress));
  }
  createContactAddress(rawAddress) {
    const address = new _models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address();
    address.street = rawAddress.street;
    address.streetId = rawAddress.streetId ?? '';
    address.country = rawAddress.country;
    address.municipality = rawAddress.municipality;
    address.addressId = rawAddress.id || rawAddress.addressid || '';
    address.type = rawAddress.type || rawAddress.addresstype || '';
    address.boxNumber = rawAddress.boxNumber || rawAddress.boxnr || '';
    address.floorNumber = rawAddress.floorNumber || rawAddress.floor;
    address.houseNumber = rawAddress.houseNumber || rawAddress.housenr || '';
    address.postalCode = rawAddress.postalCode || rawAddress.postalcode || '';
    address.countryCode = rawAddress.countryCode || rawAddress.countrycode;
    address.subHouseNumber = rawAddress.subHouseNumber || rawAddress.subhousenr || '';
    address.tinaLocationId = rawAddress.tinaLocationId;
    return address;
  }
  createContactAddressesForObject(rawAddresses) {
    const address = rawAddresses.address && rawAddresses.address.length > 0 ? rawAddresses.address : [rawAddresses];
    return address.map(rawAddress => this.createContactAddressForObject(rawAddress, rawAddresses));
  }
  createContactAddressForObject(rawChildAddress, rawParentAddress) {
    const address = new _models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address();
    address.street = rawParentAddress.street;
    address.streetId = rawParentAddress.streetId ?? '';
    address.country = rawParentAddress.country;
    address.type = rawParentAddress.type || rawParentAddress.addresstype || '';
    address.municipality = rawParentAddress.municipality;
    address.houseNumber = rawParentAddress.houseNumber || rawParentAddress.housenr || '';
    address.postalCode = rawParentAddress.postalCode || rawParentAddress.postalcode || '';
    address.countryCode = rawParentAddress.countryCode || rawParentAddress.countrycode || '';
    address.addressId = rawChildAddress.id || rawChildAddress.addressid || '';
    address.boxNumber = rawChildAddress.boxNumber || rawChildAddress.boxnr || '';
    address.floorNumber = rawChildAddress.floorNumber || rawChildAddress.floor;
    address.subHouseNumber = rawChildAddress.subHouseNumber || rawChildAddress.subhousenr || '';
    address.tinaLocationId = rawChildAddress.tinaLocationId;
    return address;
  }
  static ɵfac = function AddressMapper_Factory(t) {
    return new (t || AddressMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AddressMapper,
    factory: AddressMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 92409:
/*!******************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/common/address/models/address.model.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address)
/* harmony export */ });
/* harmony import */ var _geolocation_models_location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geolocation/models/location.model */ 72871);

class Address {
  addressId;
  type;
  houseNumber;
  boxNumber;
  subHouseNumber;
  street;
  streetId;
  postalCode;
  municipality;
  country;
  countryCode;
  floorNumber;
  addressType;
  tinaLocationId;
  plannedMaintenance;
  getDisplayAddress(getFullAddress = false, singleLine = false) {
    const displayAddress = {};
    if (this.street) {
      displayAddress.address = this.street.concat(' ').concat(this.houseNumber);
    }
    if (this.subHouseNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.subHouseNumber);
    }
    if (this.boxNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.boxNumber);
    }
    if (this.postalCode && getFullAddress) {
      displayAddress.address = this.getPostalCode(displayAddress, singleLine);
    }
    displayAddress.zipMunicipality = this.getDisplayAddressValue(this.postalCode);
    displayAddress.addressId = this.getDisplayAddressValue(this.addressId);
    if (this.municipality) {
      displayAddress.zipMunicipality = displayAddress.zipMunicipality.concat(' ').concat(this.municipality);
      if (getFullAddress) {
        displayAddress.address = displayAddress.address.concat(' ').concat(this.municipality);
      }
    }
    displayAddress.houseNrSubHouseNr = this.houseNumber;
    if (this.subHouseNumber) {
      displayAddress.houseNrSubHouseNr = displayAddress.houseNrSubHouseNr.concat('/').concat(this.subHouseNumber);
    }
    displayAddress.country = this.country || '';
    return displayAddress;
  }
  getDisplayAddressValue(value) {
    return value ? value : '';
  }
  isAppartment() {
    return !!this.floorNumber;
  }
  getLocation() {
    const location = new _geolocation_models_location_model__WEBPACK_IMPORTED_MODULE_0__.Location();
    location.location = this.municipality;
    location.postalCode = this.postalCode;
    return location;
  }
  doesContainAllDataNeededForConnectFiveCheckout() {
    return !!this.postalCode && !!this.municipality && !!this.street && !!this.houseNumber;
  }
  connectFiveAddressFormat() {
    const connectFiveAddress = {
      city: this.municipality,
      zip: this.postalCode,
      street: this.street,
      nr: this.houseNumber,
      floor: ''
    };
    if (this.boxNumber) {
      connectFiveAddress.box = this.boxNumber;
    }
    return connectFiveAddress;
  }
  getPostalCode(displayAddress, singleLine) {
    return displayAddress.address.concat(', ').concat(singleLine ? '' : '\n').concat(this.postalCode);
  }
}

/***/ }),

/***/ 7765:
/*!****************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/common/address/utils/address.util.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressUtil: () => (/* binding */ AddressUtil)
/* harmony export */ });
class AddressUtil {
  static compareAddresses(address, secondAddress) {
    return address.addressId === secondAddress.addressId;
  }
  static formatAddress(address, options) {
    let addressString = '';
    addressString = this.addParameter(addressString, address.street);
    addressString = this.addParameter(addressString, address.houseNumber);
    addressString = this.addParameter(addressString, address.boxNumber, '/');
    if (options && options.streetMunicipalitySeperator && address.street) {
      addressString = this.addParameter(addressString, options.streetMunicipalitySeperator, '');
    }
    if (options && options.useBreak) {
      addressString = this.addParameter(addressString, '<br>', '');
    }
    addressString = this.addParameter(addressString, address.postalCode);
    addressString = this.addParameter(addressString, address.municipality);
    return addressString;
  }
  static addParameter(initialString, parameter, seperator = ' ') {
    if (parameter) {
      if (initialString === '') {
        initialString = initialString.concat(parameter);
      } else {
        initialString = initialString.concat(seperator).concat(parameter);
      }
    }
    return initialString;
  }
}

/***/ }),

/***/ 72871:
/*!***********************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/common/geolocation/models/location.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Location: () => (/* binding */ Location)
/* harmony export */ });
class Location {
  postalCode;
  location;
  toString() {
    return `${this.postalCode} - ${this.location}`;
  }
}

/***/ }),

/***/ 19183:
/*!**************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/shared/image-src-interceptor/image-src-interceptor.directive.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSrcInterceptorDirective: () => (/* binding */ ImageSrcInterceptorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);




class ImageSrcInterceptorDirective {
  el;
  configService;
  override = false;
  constructor(el, configService) {
    this.el = el;
    this.configService = configService;
  }
  getRemoteHost() {
    const remoteHostConfig = this.configService.getRemoteHostConfig('MarketingModule');
    return remoteHostConfig?.remoteHost || '';
  }
  ngOnInit() {
    if (this.override) {
      return;
    }
    const image = this.el.nativeElement.src.split('/').pop();
    const imagePath = window.location.href.includes('localhost') ? `${this.getRemoteHost()}/assets/` : this.getRemoteHost();
    this.el.nativeElement.src = `${imagePath}${image}`;
  }
  static ɵfac = function ImageSrcInterceptorDirective_Factory(t) {
    return new (t || ImageSrcInterceptorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ImageSrcInterceptorDirective,
    selectors: [["img", "src", ""]],
    inputs: {
      override: "override"
    },
    exportAs: ["src"],
    standalone: true
  });
}

/***/ }),

/***/ 37563:
/*!*******************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/bootstrap.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 77120);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 43606);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.config */ 87743);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_3__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 77120:
/*!**********************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/environments/environment.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

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

/***/ 36480:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserModule: () => (/* binding */ BrowserModule),
/* harmony export */   By: () => (/* binding */ By),
/* harmony export */   DomSanitizer: () => (/* binding */ DomSanitizer),
/* harmony export */   EVENT_MANAGER_PLUGINS: () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   EventManager: () => (/* binding */ EventManager),
/* harmony export */   EventManagerPlugin: () => (/* binding */ EventManagerPlugin),
/* harmony export */   HAMMER_GESTURE_CONFIG: () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   HAMMER_LOADER: () => (/* binding */ HAMMER_LOADER),
/* harmony export */   HammerGestureConfig: () => (/* binding */ HammerGestureConfig),
/* harmony export */   HammerModule: () => (/* binding */ HammerModule),
/* harmony export */   HydrationFeatureKind: () => (/* binding */ HydrationFeatureKind),
/* harmony export */   Meta: () => (/* binding */ Meta),
/* harmony export */   REMOVE_STYLES_ON_COMPONENT_DESTROY: () => (/* binding */ REMOVE_STYLES_ON_COMPONENT_DESTROY),
/* harmony export */   Title: () => (/* binding */ Title),
/* harmony export */   TransferState: () => (/* binding */ TransferState),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   bootstrapApplication: () => (/* binding */ bootstrapApplication),
/* harmony export */   createApplication: () => (/* binding */ createApplication),
/* harmony export */   disableDebugTools: () => (/* binding */ disableDebugTools),
/* harmony export */   enableDebugTools: () => (/* binding */ enableDebugTools),
/* harmony export */   makeStateKey: () => (/* binding */ makeStateKey),
/* harmony export */   platformBrowser: () => (/* binding */ platformBrowser),
/* harmony export */   provideClientHydration: () => (/* binding */ provideClientHydration),
/* harmony export */   provideProtractorTestingSupport: () => (/* binding */ provideProtractorTestingSupport),
/* harmony export */   withHttpTransferCacheOptions: () => (/* binding */ withHttpTransferCacheOptions),
/* harmony export */   withNoHttpTransferCache: () => (/* binding */ withNoHttpTransferCache),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"]),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/**
 * @license Angular v17.1.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵparseCookieValue"])(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
function relativePath(url) {
  // The base URL doesn't really matter, we just need it so relative paths have something
  // to resolve against. In the browser `HTMLBaseElement.href` is always absolute.
  return new URL(url, document.baseURI).pathname;
}
class BrowserGetTestability {
  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAngularTestability'] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5103 /* RuntimeErrorCode.TESTABILITY_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Could not find testability for element.');
      }
      return testability;
    };
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularRootElements'] = () => registry.getAllRootElements();
    const whenAllStable = callback => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities']();
      let count = testabilities.length;
      const decrement = function () {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach(testability => {
        testability.whenStable(decrement);
      });
    };
    if (!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers']) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'] = [];
    }
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
class BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static #_ = this.ɵfac = function BrowserXhr_Factory(t) {
    return new (t || BrowserXhr)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BrowserXhr,
    factory: BrowserXhr.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * The injection token for plugins of the `EventManager` service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
class EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = new Map();
    plugins.forEach(plugin => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find(plugin => plugin.supports(eventName));
    if (!plugin) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static #_ = this.ɵfac = function EventManager_Factory(t) {
    return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EventManager,
    factory: EventManager.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();
/**
 * The plugin definition for the `EventManager` class
 *
 * It can be used as a base class to create custom manager plugins, i.e. you can create your own
 * class that extends the `EventManagerPlugin` one.
 *
 * @publicApi
 */
class EventManagerPlugin {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
}

/** The style elements attribute name used to set value of `APP_ID` token. */
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
class SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    // Maps all registered host nodes to a list of style nodes that have been added to the host node.
    this.styleRef = new Map();
    this.hostNodes = new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style);
      }
    }
  }
  removeStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach(node => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style of this.getAllStyles()) {
      this.onStyleRemoved(style);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style);
    }
  }
  onStyleRemoved(style) {
    const styleRef = this.styleRef;
    styleRef.get(style)?.elements?.forEach(node => node.remove());
    styleRef.delete(style);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = new Map();
      styles.forEach(style => {
        if (style.textContent != null) {
          styleMap.set(style.textContent, style);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style, delta) {
    const map = this.styleRef;
    if (map.has(style)) {
      const styleRefValue = map.get(style);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map.set(style, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style);
    if (styleEl?.parentNode === host) {
      // `styleNodesInDOM` cannot be undefined due to the above `styleNodesInDOM?.get`.
      styleNodesInDOM.delete(style);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // This attribute is solely used for debugging purposes.
        styleEl.setAttribute('ng-style-reused', '');
      }
      return styleEl;
    } else {
      const styleEl = this.doc.createElement('style');
      if (this.nonce) {
        styleEl.setAttribute('nonce', this.nonce);
      }
      styleEl.textContent = style;
      if (this.platformIsServer) {
        styleEl.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl);
      return styleEl;
    }
  }
  addStyleToHost(host, style) {
    const styleEl = this.getStyleElement(host, style);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    // Re-add the head element back since this is the default host.
    hostNodes.add(this.doc.head);
  }
  static #_ = this.ɵfac = function SharedStylesHost_Factory(t) {
    return new (t || SharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedStylesHost,
    factory: SharedStylesHost.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedStylesHost, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
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
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `true`.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RemoveStylesOnCompDestroy', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
class DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = new Map();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom) {
      // Domino does not support shadow DOM.
      type = {
        ...type,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated
      };
    }
    const renderer = this.getOrCreateRenderer(element, type);
    // Renderers have different logic due to different encapsulation behaviours.
    // Ex: for emulated, an attribute is added to the element.
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  static #_ = this.ɵfac = function DomRendererFactory2_Factory(t) {
    return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomRendererFactory2,
    factory: DomRendererFactory2.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomRendererFactory2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }]
  }], null);
})();
class DefaultDomRenderer2 {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = Object.create(null);
    /**
     * By default this renderer throws when encountering synthetic properties
     * This can be disabled for example by the AsyncAnimationRendererFactory
     */
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle
    // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
    // unwrap the listener (see below).
    return event => {
      // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
      // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
      // debug_node can inspect the listener toString contents for the existence of this special
      // token. Because the token is a string literal, it is ensured to not be modified by compiled
      // code.
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      // Run the event handler inside the ngZone because event handlers are not patched
      // by Zone on the server. This is required only for tests.
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = (() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
class DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
  static #_ = this.ɵfac = function DomEventsPlugin_Factory(t) {
    return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomEventsPlugin,
    factory: DomEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * A browser plug-in that provides support for handling of key events in Angular.
 */
class KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
      return null;
    }
    const key = KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = '';
    let codeIX = parts.indexOf('code');
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = 'code.';
    }
    MODIFIER_KEYS.forEach(modifierName => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + '.';
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      // returning null instead of throwing to let another plugin process the event
      return null;
    }
    // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
    //       The code must remain in the `result['domEventName']` form.
    // return {domEventName, fullKey};
    const result = {};
    result['domEventName'] = domEventName;
    result['fullKey'] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = '';
    if (fullKeyCode.indexOf('code.') > -1) {
      keycode = event.code;
      key = 'code.';
    }
    // the keycode could be unidentified so we have to check here
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === ' ') {
      keycode = 'space'; // for readability
    } else if (keycode === '.') {
      keycode = 'dot'; // because '.' is used as a separator in event names
    }
    MODIFIER_KEYS.forEach(modifierName => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + '.';
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return event => {
      if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === 'esc' ? 'escape' : keyName;
  }
  static #_ = this.ɵfac = function KeyEventsPlugin_Factory(t) {
    return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: KeyEventsPlugin,
    factory: KeyEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function createApplication(options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])(createProvidersConfig(options));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @publicApi
 */
function provideProtractorTestingSupport() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideProtractorTestingSupport` call results in app
  // code.
  return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler();
}
function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetDocument"])(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"],
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY"],
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}];
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
class BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && providersAlreadyPresent) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5100 /* RuntimeErrorCode.BROWSER_MODULE_ALREADY_LOADED */, `Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: BrowserModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID,
        useValue: params.appId
      }]
    };
  }
  static #_ = this.ɵfac = function BrowserModule_Factory(t) {
    return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BROWSER_MODULE_PROVIDERS_MARKER, 12));
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BrowserModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();

/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */
function createMeta() {
  return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
class Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      // It's allowed to have multiple elements with the same name so it's not enough to
      // just check that element with the same name already present on the page. We also need to
      // check if element has tag attributes
      const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
      if (elem !== undefined) return elem;
    }
    const element = this._dom.createElement('meta');
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName('head')[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? 'name' : 'property';
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static #_ = this.ɵfac = function Meta_Factory(t) {
    return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Meta,
    factory: function Meta_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createMeta();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Meta, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createMeta,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * Factory to create Title service.
 */
function createTitle() {
  return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
class Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || '';
  }
  static #_ = this.ɵfac = function Title_Factory(t) {
    return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Title,
    factory: function Title_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createTitle();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Title, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createTitle,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] || {};
    ng[name] = value;
  }
}
const win = typeof window !== 'undefined' && window || {};
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    const isProfilerAvailable = win.console.profile != null;
    if (record && isProfilerAvailable) {
      win.console.profile(profileName);
    }
    const start = performanceNow();
    let numTicks = 0;
    while (numTicks < 5 || performanceNow() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performanceNow();
    if (record && isProfilerAvailable) {
      win.console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    win.console.log(`ran ${numTicks} change detection cycles`);
    win.console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
function performanceNow() {
  return win.performance && win.performance.now ? win.performance.now() : new Date().getTime();
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see {@link HammerGestureConfig}
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
class HammerGestureConfig {
  constructor() {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    this.events = [];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     *
     */
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get('pinch').set({
      enable: true
    });
    mc.get('rotate').set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static #_ = this.ɵfac = function HammerGestureConfig_Factory(t) {
    return new (t || HammerGestureConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGestureConfig,
    factory: HammerGestureConfig.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGestureConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
class HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console, loader) {
    super(doc);
    this._config = _config;
    this.console = console;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    // If Hammer is not present but a loader is specified, we defer adding the event listener
    // until Hammer is loaded.
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      // This `addEventListener` method returns a function to remove the added listener.
      // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
      // than remove anything.
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        // If Hammer isn't actually loaded when the custom loader resolves, give up.
        if (!window.Hammer) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {};
          return;
        }
        if (!cancelRegistration) {
          // Now that Hammer is loaded and the listener is being loaded for real,
          // the deregistration function changes from canceling registration to
          // removal.
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
        }
        deregister = () => {};
      }));
      // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
      // can change the behavior of `deregister` once the listener is added. Using a closure in
      // this way allows us to avoid any additional data structures to track listener removal.
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      // Creating the manager bind events, must be done outside of angular
      const mc = this._config.buildHammer(element);
      const callback = function (eventObj) {
        zone.runGuarded(function () {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        // destroy mc to prevent memory leak
        if (typeof mc.destroy === 'function') {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static #_ = this.ɵfac = function HammerGesturesPlugin_Factory(t) {
    return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_LOADER, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGesturesPlugin,
    factory: HammerGesturesPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGesturesPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
 *
 * @publicApi
 */
class HammerModule {
  static #_ = this.ɵfac = function HammerModule_Factory(t) {
    return new (t || HammerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: HammerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
      deps: []
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
class DomSanitizer {
  static #_ = this.ɵfac = function DomSanitizer_Factory(t) {
    return new (t || DomSanitizer)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizer,
    factory: function DomSanitizer_Factory(t) {
      let r = null;
      if (t) {
        r = new (t || DomSanitizer)();
      } else {
        r = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomSanitizerImpl);
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
function domSanitizerImplFactory(injector) {
  return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
class DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.NONE:
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.STYLE:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.SCRIPT:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5200 /* RuntimeErrorCode.SANITIZATION_UNSAFE_SCRIPT */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'unsafe value used in a script context');
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeUrl"])(String(value));
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5201 /* RuntimeErrorCode.SANITIZATION_UNSAFE_RESOURCE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
      default:
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5202 /* RuntimeErrorCode.SANITIZATION_UNEXPECTED_CTX */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustHtml"])(value);
  }
  bypassSecurityTrustStyle(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustStyle"])(value);
  }
  bypassSecurityTrustScript(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustScript"])(value);
  }
  bypassSecurityTrustUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustUrl"])(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustResourceUrl"])(value);
  }
  static #_ = this.ɵfac = function DomSanitizerImpl_Factory(t) {
    return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizerImpl,
    factory: function DomSanitizerImpl_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = domSanitizerImplFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizerImpl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: domSanitizerImplFactory,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * The list of features as an enum to uniquely type each `HydrationFeature`.
 * @see {@link HydrationFeature}
 *
 * @publicApi
 */
var HydrationFeatureKind;
(function (HydrationFeatureKind) {
  HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
/**
 * Helper function to create an object that represents a Hydration feature.
 */
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
  return {
    ɵkind,
    ɵproviders
  };
}
/**
 * Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
 * server and other one on the browser.
 *
 * @publicApi
 */
function withNoHttpTransferCache() {
  // This feature has no providers and acts as a flag that turns off
  // HTTP transfer cache (which otherwise is turned on by default).
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
 * The function accepts a an object, which allows to configure cache parameters,
 * such as which headers should be included (no headers are included by default),
 * wether POST requests should be cached or a callback function to determine if a
 * particular request should be cached.
 *
 * @publicApi
 */
function withHttpTransferCacheOptions(options) {
  // This feature has no providers and acts as a flag to pass options to the HTTP transfer cache.
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])(options));
}
/**
 * Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
 * that verifies whether compatible ZoneJS was used in an application
 * and logs a warning in a console if it's not the case.
 */
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      // Checking `ngZone instanceof NgZone` would be insufficient here,
      // because custom implementations might use NgZone as a base class.
      if (ngZone.constructor !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone) {
        const console = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]);
        const message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵformatRuntimeError"])(-5000 /* RuntimeErrorCode.UNSUPPORTED_ZONEJS_INSTANCE */, 'Angular detected that hydration was enabled for an application ' + 'that uses a custom or a noop Zone.js implementation. ' + 'This is not yet a fully supported configuration.');
        // tslint:disable-next-line:no-console
        console.warn(message);
      }
    },
    multi: true
  }];
}
/**
 * Sets up providers necessary to enable hydration functionality for the application.
 *
 * By default, the function enables the recommended set of features for the optimal
 * performance for most of the applications. It includes the following features:
 *
 * * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
 * * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
 * transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
 * [here](/guide/ssr#caching-data-when-using-httpclient).
 *
 * These functions allow you to disable some of the default features or configure features
 * * {@link withNoHttpTransferCache} to disable HTTP transfer cache
 * * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
 *
 * @usageNotes
 *
 * Basic example of how you can enable hydration in your application when
 * `bootstrapApplication` function is used:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration()]
 * });
 * ```
 *
 * Alternatively if you are using NgModules, you would add `provideClientHydration`
 * to your root app module's provider list.
 * ```
 * @NgModule({
 *   declarations: [RootCmp],
 *   bootstrap: [RootCmp],
 *   providers: [provideClientHydration()],
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link withNoHttpTransferCache}
 * @see {@link withHttpTransferCacheOptions}
 *
 * @param features Optional features to configure additional router behaviors.
 * @returns A set of providers to enable hydration.
 *
 * @publicApi
 */
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    ɵproviders,
    ɵkind
  } of features) {
    featuresKind.add(ɵkind);
    if (ɵproviders.length) {
      providers.push(ɵproviders);
    }
  }
  if (typeof ngDevMode !== 'undefined' && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    // TODO: Make this a runtime error
    throw new Error('Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.');
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([typeof ngDevMode !== 'undefined' && ngDevMode ? provideZoneJsCompatibilityDetector() : [], (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵwithDomHydration"])(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])({}), providers]);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('17.1.0');

// Re-export TransferState to the public API of the `platform-browser` for backwards-compatibility.
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 * @deprecated `makeStateKey` has moved, please import `makeStateKey` from `@angular/core` instead.
 */
// The below is a workaround to add a deprecated message.
const makeStateKey = _angular_core__WEBPACK_IMPORTED_MODULE_0__.makeStateKey;
// The below type is needed for G3 due to JSC_CONFORMANCE_VIOLATION.
const TransferState = _angular_core__WEBPACK_IMPORTED_MODULE_0__.TransferState;

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 75825:
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
// All error codes, starting by 0:
function (plugin) {
  return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
}, function (thing) {
  return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
}, "This object has been frozen and should not be mutated", function (data) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
}, "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", "Immer forbids circular references", "The first or second argument to `produce` must be a function", "The third argument to `produce` must be a function or undefined", "First argument to `createDraft` must be a plain object, an array, or an immerable object", "First argument to `finishDraft` must be a draft returned by `createDraft`", function (thing) {
  return `'current' expects a draft, got: ${thing}`;
}, "Object.defineProperty() cannot be used on an Immer draft", "Object.setPrototypeOf() cannot be used on an Immer draft", "Immer only supports deleting array indices", "Immer only supports setting array indices and the 'length' property", function (thing) {
  return `'original' expects a draft, got: ${thing}`;
}
// Note: if more errors are added, the errorOffset in Patches.ts should be increased
// See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value)) die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */) thing.set(propOrOldValue, value);else if (t === 3 /* Set */) {
    thing.add(value);
  } else thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  if (!strict && isPlainObject(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */Object.create(null);
      return Object.assign(obj, base);
    }
    return {
      ...base
    };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set) descriptors[key] = {
      configurable: true,
      writable: true,
      // could live with !!desc.set as well here...
      enumerable: desc.enumerable,
      value: base[key]
    };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep) each(obj, (_key, value) => freeze(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */) state.revoke_();else state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path), true
    // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope) return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject) die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ &&
    // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_) maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,

    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const {
    revoke,
    proxy
  } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && (
    // special case: handle new props with value 'undefined'
    value !== void 0 || prop in state.copy_) ||
    // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function (state, prop) {
  if ( true && isNaN(parseInt(prop))) die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function (state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop))) die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value :
  // This is a very special case, if the prop is a getter defined by the
  // prototype, we should invoke it with the draft as context!
  desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source)) return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, draft => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function") die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError) revokeScope(scope);else leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0) result = base;
        if (result === NOTHING) result = void 0;
        if (this.autoFreeze_) freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, draft => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_) die(9);
    const {
      scope_: scope
    } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(base, draft => applyPatchesImpl(draft, patches));
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value)) die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_) return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push('Sets cannot have "replace" patches.', function (op) {
      return "Unsupported patch operation: " + op;
    }, function (path) {
      return "Cannot apply patch, path doesn't resolve: " + path;
    }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(state, basePath, patches, inversePatches);
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      assigned_
    } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const {
      base_,
      copy_
    } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE) return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? {
        op,
        path
      } : {
        op,
        path,
        value
      });
      inversePatches.push(op === ADD ? {
        op: REMOVE,
        path
      } : op === REMOVE ? {
        op: ADD,
        path,
        value: clonePatchValueIfNeeded(origValue)
      } : {
        op: REPLACE,
        path,
        value: clonePatchValueIfNeeded(origValue)
      });
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      copy_
    } = state;
    let i = 0;
    base_.forEach(value => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach(value => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach(patch => {
      const {
        path,
        op
      } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
    if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
    if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */new Map();
        each(state.base_, key => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value)) return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : ( /* istanbul ignore next */
      false));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */new Set();
      state.base_.forEach(value => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", {
    proxyMap_,
    proxySet_
  });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(immer);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}


/***/ }),

/***/ 60287:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/head.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return array && array.length ? array[0] : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (head);

/***/ })

}])
//# sourceMappingURL=apps_marketing_marketing-mfe_src_bootstrap_ts.js.map