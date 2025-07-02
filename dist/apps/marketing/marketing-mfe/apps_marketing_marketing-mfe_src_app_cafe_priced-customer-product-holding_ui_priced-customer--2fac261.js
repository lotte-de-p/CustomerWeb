(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["apps_marketing_marketing-mfe_src_app_cafe_priced-customer-product-holding_ui_priced-customer--2fac261"],{

/***/ 89804:
/*!*********************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/marketing-cafe-ngxs.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketingCafeNgxsModule: () => (/* binding */ MarketingCafeNgxsModule)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priced-customer-product-holding/state/priced-cph.state */ 53384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MarketingCafeNgxsModule {
  static ɵfac = function MarketingCafeNgxsModule_Factory(t) {
    return new (t || MarketingCafeNgxsModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MarketingCafeNgxsModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__.PricedCphState])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarketingCafeNgxsModule, {
    imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

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

/***/ 59079:
/*!***************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/business-customer.notification.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessCustomerNotification: () => (/* binding */ BusinessCustomerNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);
/* harmony import */ var _http_cafe_contact_details_services_cafe_contact_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/cafe/contact-details/services/cafe-contact-details.service */ 51118);





class BusinessCustomerNotification {
  labelKey = 'business-customer';
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.ERROR;
  shouldShow(injector) {
    const cafeContactDetailsService = injector?.get(_http_cafe_contact_details_services_cafe_contact_details_service__WEBPACK_IMPORTED_MODULE_4__.CafeContactDetailsService);
    return cafeContactDetailsService?.getContactDetails(_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_3__.PricedCphConstants.MESSAGE_GROUP).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(cafeContactDetails => cafeContactDetails && cafeContactDetails.isOrganization())) || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
  }
}

/***/ }),

/***/ 38398:
/*!********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/no-manager.notification.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoManagerNotification: () => (/* binding */ NoManagerNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/priced-cph.state */ 53384);




class NoManagerNotification {
  labelKey = 'no-manager';
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.WARNING;
  shouldShow(injector) {
    const store = injector?.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store);
    const loginDetails = store?.selectSnapshot(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.loginDetails);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(!loginDetails?.hasManagerRole());
  }
}

/***/ }),

/***/ 29263:
/*!*********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/no-products.notification.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoProductsNotification: () => (/* binding */ NoProductsNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/priced-cph.state */ 53384);




class NoProductsNotification {
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.ERROR;
  labelKey = 'no-products';
  shouldShow(injector) {
    const store = injector?.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store);
    const overview = store?.selectSnapshot(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.overview);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.hasNoProducts(overview));
  }
  hasNoProducts(overview) {
    return !overview || !overview.some(value => value.products && value.products.length > 0);
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

/***/ 72616:
/*!********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/notifications.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);




class NotificationsService {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  notificationsIfConditionsMet$(notifications) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(notifications).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(notification => {
      return notification.shouldShow(this.injector).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(shouldShowNotification => shouldShowNotification), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => notification));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
  static ɵfac = function NotificationsService_Factory(t) {
    return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationsService,
    factory: NotificationsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 94227:
/*!***************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/priced-cph-datalayer.service.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCphDatalayerService: () => (/* binding */ PricedCphDatalayerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);




class PricedCphDatalayerService {
  dataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService);
  category = this.dataLayerService.createCategory('general');
  viewedEventInfo = this.dataLayerService.createEventInfo('Priced product holding banner viewed', 'impression', [_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__.PricedCphConstants.MESSAGE_GROUP]);
  openedEventInfo = this.dataLayerService.createEventInfo('Priced product holding banner opened', 'click', [_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__.PricedCphConstants.MESSAGE_GROUP]);
  pushComponentViewed() {
    this.dataLayerService.sendEvent({
      eventInfo: this.viewedEventInfo,
      attributes: {},
      category: this.category
    });
  }
  pushComponentOpened() {
    this.dataLayerService.sendEvent({
      eventInfo: this.openedEventInfo,
      attributes: {},
      category: this.category
    });
  }
  static ɵfac = function PricedCphDatalayerService_Factory(t) {
    return new (t || PricedCphDatalayerService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PricedCphDatalayerService,
    factory: PricedCphDatalayerService.ɵfac,
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

/***/ 73255:
/*!*************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/bill-price/bill-price.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillPriceComponent: () => (/* binding */ BillPriceComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








function BillPriceComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BillPriceComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](",", ctx_r1.decimal, "");
  }
}
function BillPriceComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class BillPriceComponent {
  translateHelperService;
  languageService;
  price;
  integer;
  decimal;
  isFrench;
  constructor(translateHelperService, languageService) {
    this.translateHelperService = translateHelperService;
    this.languageService = languageService;
  }
  ngOnInit() {
    const priceArray = this.price.split('.');
    this.integer = priceArray[0];
    this.decimal = priceArray[1];
    this.isFrench = this.languageService.getLanguage() === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum.FR;
  }
  static ɵfac = function BillPriceComponent_Factory(t) {
    return new (t || BillPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__.TranslateHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BillPriceComponent,
    selectors: [["tg-marketing-cafe-bill-price"]],
    inputs: {
      price: "price"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 7,
    consts: [[1, "display--flex", "justify-content--end", "align-items--center", "mt--xl"], [1, "text-block__right", "text-align--right"], [1, "price", "price__total-month-promo-description"], ["class", "line-height--18 text--m text--xm--sm text-font-family--t6 vertical-align--text-top", 4, "ngIf"], [1, "text-font-family--t6", "text--xl--sm"], [1, "text--xs", "text--s--sm"], [1, "whitespace", "whitespace--medium"], [1, "line-height--18", "text--m", "text--xm--sm", "text-font-family--t6", "vertical-align--text-top"]],
    template: function BillPriceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BillPriceComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BillPriceComponent_span_6_Template, 2, 1, "span", 3)(7, BillPriceComponent_span_7_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isFrench);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.integer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.decimal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isFrench);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, ctx.translateHelperService.getText("price-month")));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59400:
/*!****************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/directives/panel-toggler.directive.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TogglePanelDirective: () => (/* binding */ TogglePanelDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class TogglePanelDirective {
  elRef;
  renderer;
  static CLASS_PANEL_COLLAPSED = 'accordion--panel__collapsed';
  panelClass;
  constructor(elRef, renderer) {
    this.elRef = elRef;
    this.renderer = renderer;
  }
  handleClick() {
    const header = this.elRef.nativeElement;
    const panel = this.panelClass ? header?.parentElement?.querySelector(`.${this.panelClass}`) : this.renderer.nextSibling(header);
    if (panel && !panel.classList.contains(TogglePanelDirective.CLASS_PANEL_COLLAPSED)) {
      this.renderer.addClass(panel, TogglePanelDirective.CLASS_PANEL_COLLAPSED);
      return;
    }
    if (panel && panel.style.maxHeight) {
      this.setHeight(panel, 'scrollHeight');
      requestAnimationFrame(() => {
        this.setHeight(panel, null);
      });
      return;
    }
    this.setHeight(panel, 'scrollHeight');
    const eventHandler = function () {
      if (getComputedStyle(panel).maxHeight !== '0px') {
        panel.style.maxHeight = 'unset';
      }
      panel.removeEventListener('transitionend', eventHandler);
    };
    panel.addEventListener('transitionend', eventHandler);
  }
  setHeight(el, heightProperty) {
    this.renderer.setStyle(el, 'maxHeight', heightProperty ? el[heightProperty] + 'px' : null);
  }
  static ɵfac = function TogglePanelDirective_Factory(t) {
    return new (t || TogglePanelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TogglePanelDirective,
    selectors: [["", "tgMarketingTogglePanel", ""]],
    hostBindings: function TogglePanelDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglePanelDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        });
      }
    },
    inputs: {
      panelClass: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "tgMarketingTogglePanel", "panelClass"]
    },
    standalone: true
  });
}

/***/ }),

/***/ 43510:
/*!*************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/disclaimer/disclaimer.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisclaimerComponent: () => (/* binding */ DisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function DisclaimerComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisclaimerComponent_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r0.translateHelperService.getText("disclaimer-read-more")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function DisclaimerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r1.translateHelperService.getText("disclaimer-expanded")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
class DisclaimerComponent {
  translateHelperService;
  showMore;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  static ɵfac = function DisclaimerComponent_Factory(t) {
    return new (t || DisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DisclaimerComponent,
    selectors: [["tg-marketing-cafe-disclaimer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "display--block", "text--xs", "text--s--sm"], [3, "innerHTML"], [3, "innerHTML", "click", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML", "click"]],
    template: function DisclaimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DisclaimerComponent_span_3_Template, 2, 3, "span", 2)(4, DisclaimerComponent_span_4_Template, 2, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.translateHelperService.getText("disclaimer")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showMore);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 10662:
/*!*********************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion-header/drop-down-accordion-header.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionHeaderComponent: () => (/* binding */ DropDownAccordionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/priced-cph-datalayer.service */ 94227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class DropDownAccordionHeaderComponent {
  pricedCphDatalayerService;
  title;
  isPanelCollapsed;
  rotateChevron;
  constructor(pricedCphDatalayerService) {
    this.pricedCphDatalayerService = pricedCphDatalayerService;
  }
  handleClick() {
    this.rotateChevron = !this.rotateChevron;
    if (this.rotateChevron) {
      this.pricedCphDatalayerService.pushComponentOpened();
    }
  }
  static ɵfac = function DropDownAccordionHeaderComponent_Factory(t) {
    return new (t || DropDownAccordionHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.PricedCphDatalayerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DropDownAccordionHeaderComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion-header"]],
    inputs: {
      title: "title",
      isPanelCollapsed: "isPanelCollapsed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "header-accordion", "heading--5", "cursor--pointer", "user-select--none", "p--l", "m--n", 3, "click"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "header-accordion--link", "display--flex", "align-items--center"], [1, "icon", "icon-sm", "transition--all-3ms", 3, "ngClass"]],
    template: function DropDownAccordionHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DropDownAccordionHeaderComponent_Template_div_click_0_listener() {
          return ctx.handleClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rotate--180", ctx.rotateChevron);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isPanelCollapsed ? "icon-chevron-down" : "icon-chevron-up");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78011:
/*!*******************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion-panel/drop-down-accordion-panel.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionPanelComponent: () => (/* binding */ DropDownAccordionPanelComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _group_overview_group_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group/overview-group-type.enum */ 57191);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var _error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-notification/error-notification.component */ 89144);
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../disclaimer/disclaimer.component */ 43510);
/* harmony import */ var _bill_price_bill_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bill-price/bill-price.component */ 73255);
/* harmony import */ var _group_overview_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../group/overview-group.component */ 46615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../marketing-cafe-ngxs.module */ 89804);
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











function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_tg_marketing_cafe_bill_price_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-marketing-cafe-bill-price", 7);
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("price", overview_r4.lastBillPrice);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "tg-marketing-cafe-overview-group", 5)(2, "tg-marketing-cafe-overview-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_tg_marketing_cafe_bill_price_3_Template, 1, 1, "tg-marketing-cafe-bill-price", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", overview_r4.products)("type", ctx_r6.overviewGroupTypeEnum.PRODUCTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", overview_r4.options)("type", ctx_r6.overviewGroupTypeEnum.OPTIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4.lastBillPrice);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_Template, 4, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4.products.length > 0);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "tg-marketing-cafe-disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.overviews);
  }
}
function DropDownAccordionPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-marketing-cafe-error-notification", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("labelKey", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r1.notification).labelKey)("type", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, ctx_r1.notification).type);
  }
}
class DropDownAccordionPanelComponent {
  overviews;
  notification;
  overviewGroupTypeEnum = _group_overview_group_type_enum__WEBPACK_IMPORTED_MODULE_2__.OverviewGroupTypeEnum;
  static ɵfac = function DropDownAccordionPanelComponent_Factory(t) {
    return new (t || DropDownAccordionPanelComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: DropDownAccordionPanelComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion-panel"]],
    inputs: {
      overviews: "overviews"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[4, "ngIf", "ngIfElse"], ["notificationHandling", ""], [1, "whitespace", "whitespace--medium"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "items", "type"], [3, "price", 4, "ngIf"], [3, "price"], [3, "labelKey", "type"]],
    template: function DropDownAccordionPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, DropDownAccordionPanelComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DropDownAccordionPanelComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 2);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.notification) === null)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _group_overview_group_component__WEBPACK_IMPORTED_MODULE_7__.OverviewGroupComponent, _bill_price_bill_price_component__WEBPACK_IMPORTED_MODULE_6__.BillPriceComponent, _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__.DisclaimerComponent, _error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_4__.ErrorNotificationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_9__.MarketingCafeNgxsModule],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.notification), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], DropDownAccordionPanelComponent.prototype, "notification", void 0);

/***/ }),

/***/ 80697:
/*!*******************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion/drop-down-accordion.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionComponent: () => (/* binding */ DropDownAccordionComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/priced-cph-datalayer.service */ 94227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _drop_down_accordion_panel_drop_down_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drop-down-accordion-panel/drop-down-accordion-panel.component */ 78011);
/* harmony import */ var _directives_panel_toggler_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/panel-toggler.directive */ 59400);
/* harmony import */ var _drop_down_accordion_header_drop_down_accordion_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drop-down-accordion-header/drop-down-accordion-header.component */ 10662);
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










class DropDownAccordionComponent {
  pricedCphDatalayerService;
  title;
  overviews;
  notification;
  constructor(pricedCphDatalayerService) {
    this.pricedCphDatalayerService = pricedCphDatalayerService;
  }
  ngOnInit() {
    this.pricedCphDatalayerService.pushComponentViewed();
  }
  static ɵfac = function DropDownAccordionComponent_Factory(t) {
    return new (t || DropDownAccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_3__.PricedCphDatalayerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DropDownAccordionComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion"]],
    inputs: {
      title: "title",
      overviews: "overviews"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [["tgMarketingTogglePanel", "", 3, "title", "isPanelCollapsed"], [1, "display--flex", "flex-direction--column", "flex-grow", "px--l", 3, "overviews"]],
    template: function DropDownAccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tg-marketing-cafe-drop-down-accordion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "tg-marketing-cafe-drop-down-accordion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.title)("isPanelCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 5, ctx.notification) === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("accordion--panel__collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, ctx.notification) === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("overviews", ctx.overviews);
      }
    },
    dependencies: [_drop_down_accordion_header_drop_down_accordion_header_component__WEBPACK_IMPORTED_MODULE_7__.DropDownAccordionHeaderComponent, _directives_panel_toggler_directive__WEBPACK_IMPORTED_MODULE_6__.TogglePanelDirective, _drop_down_accordion_panel_drop_down_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__.DropDownAccordionPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__.PricedCphState.notification), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable)], DropDownAccordionComponent.prototype, "notification", void 0);

/***/ }),

/***/ 89144:
/*!*****************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/error-notification/error-notification.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorNotificationComponent: () => (/* binding */ ErrorNotificationComponent)
/* harmony export */ });
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _model_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/notification.model */ 80176);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ErrorNotificationComponent {
  translateHelperService;
  labelKey;
  type;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  getClass() {
    switch (this.type) {
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.ERROR:
        return 'notification--errorfield';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.WARNING:
        return 'notification--warning';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.INFO:
        return 'notification--info';
    }
  }
  getIconClass() {
    switch (this.type) {
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.ERROR:
        return 'icon-error-shape errorfield';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.WARNING:
        return 'icon-alert-shape warning';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.INFO:
        return 'icon-information-shape info';
    }
  }
  static ɵfac = function ErrorNotificationComponent_Factory(t) {
    return new (t || ErrorNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ErrorNotificationComponent,
    selectors: [["tg-marketing-cafe-error-notification"]],
    inputs: {
      labelKey: "labelKey",
      type: "type"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "notification", 3, "ngClass"], [1, "icon", 3, "ngClass"]],
    template: function ErrorNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getIconClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx.translateHelperService.getText("error." + ctx.labelKey)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 57191:
/*!************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/group/overview-group-type.enum.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewGroupTypeEnum: () => (/* binding */ OverviewGroupTypeEnum)
/* harmony export */ });
var OverviewGroupTypeEnum;
(function (OverviewGroupTypeEnum) {
  OverviewGroupTypeEnum["PRODUCTS"] = "products";
  OverviewGroupTypeEnum["OPTIONS"] = "options";
})(OverviewGroupTypeEnum || (OverviewGroupTypeEnum = {}));

/***/ }),

/***/ 46615:
/*!************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/group/overview-group.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewGroupComponent: () => (/* binding */ OverviewGroupComponent)
/* harmony export */ });
/* harmony import */ var _overview_group_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview-group-type.enum */ 57191);
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function OverviewGroupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r0.translateHelperService.getTitle(ctx_r0.type)), " ");
  }
}
function OverviewGroupComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function OverviewGroupComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
const _c0 = (a0, a1, a2) => ({
  labelKey: a0,
  args: a1,
  icon: a2,
  rowClass: "position--relative",
  class: "ml--xl text--s text--m--sm p--n"
});
function OverviewGroupComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const spec_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, spec_r7.label.key, spec_r7.label.args, spec_r7.icon));
  }
}
const _c1 = (a0, a1, a2) => ({
  labelKey: a0,
  args: a1,
  class: a2
});
function OverviewGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6)(2, OverviewGroupComponent_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](3, _c1, ctx_r1.translateHelperService.getLabel(ctx_r1.getLabelKey(item_r4)), ctx_r1.getLabelArgs(item_r4), ctx_r1.type === ctx_r1.overviewGroupTypeEnum.PRODUCTS ? "text--m text--xm--sm" : " text--s text--m--sm p--n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r4.specifications);
  }
}
function OverviewGroupComponent_ng_template_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const icon_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", icon_r11);
  }
}
function OverviewGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_template_2_i_1_Template, 1, 1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const labelKey_r9 = ctx.labelKey;
    const args_r10 = ctx.args;
    const icon_r11 = ctx.icon;
    const rowClass_r12 = ctx.rowClass;
    const itemClass_r13 = ctx.class;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", rowClass_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", icon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", itemClass_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 4, labelKey_r9, args_r10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class OverviewGroupComponent {
  translateHelperService;
  items;
  type;
  overviewGroupTypeEnum = _overview_group_type_enum__WEBPACK_IMPORTED_MODULE_0__.OverviewGroupTypeEnum;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  getLabelKey(item) {
    return item.amount === 1 ? 'item' : 'item-with-amount';
  }
  getLabelArgs(item) {
    return {
      itemName: item.key,
      amount: item.amount
    };
  }
  static ɵfac = function OverviewGroupComponent_Factory(t) {
    return new (t || OverviewGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OverviewGroupComponent,
    selectors: [["tg-marketing-cafe-overview-group"]],
    inputs: {
      items: "items",
      type: "type"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [["class", "display--flex justify-content--between align-items--center heading--6 mb--xxs mt--s", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["record", ""], [1, "display--flex", "justify-content--between", "align-items--center", "heading--6", "mb--xxs", "mt--s"], [1, "text-block__left"], [1, "text-block__right", "display--flex", "align-items--baseline", "word-break--keep-all"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "display--flex", "justify-content--between", "align-content--center", "mb--xxs", 3, "ngClass"], ["class", "position--absolute cursor--pointer text--xxm line-height--20", 3, "ngClass", 4, "ngIf"], [1, "display--flex", "flex-grow", "justify-content--between", "align-items--center", 3, "ngClass"], [1, "text-block__left", 3, "innerHTML"], [1, "position--absolute", "cursor--pointer", "text--xxm", "line-height--20", 3, "ngClass"]],
    template: function OverviewGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OverviewGroupComponent_div_0_Template, 5, 3, "div", 0)(1, OverviewGroupComponent_ng_container_1_Template, 3, 7, "ng-container", 1)(2, OverviewGroupComponent_ng_template_2_Template, 6, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 99827:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/priced-customer-product-holding/priced-customer-product-holding.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCustomerProductHoldingComponent: () => (/* binding */ PricedCustomerProductHoldingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var _service_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notifications.service */ 72616);
/* harmony import */ var _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/backend-error.notification */ 9291);
/* harmony import */ var _model_business_customer_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/business-customer.notification */ 59079);
/* harmony import */ var _model_no_products_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/no-products.notification */ 29263);
/* harmony import */ var _model_no_manager_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/no-manager.notification */ 38398);
/* harmony import */ var _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/priced-cph.actions */ 60672);
/* harmony import */ var _drop_down_accordion_drop_down_accordion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../drop-down-accordion/drop-down-accordion.component */ 80697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../marketing-cafe-ngxs.module */ 89804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);
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
















function PricedCustomerProductHoldingComponent_tg_marketing_cafe_drop_down_accordion_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-marketing-cafe-drop-down-accordion", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", ctx_r0.title)("overviews", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, ctx_r0.overview$));
  }
}
class PricedCustomerProductHoldingComponent {
  store;
  notificationsService;
  title;
  loginDetails$;
  isLoggedIn$;
  overview$;
  constructor(store, notificationsService) {
    this.store = store;
    this.notificationsService = notificationsService;
  }
  ngOnInit() {
    const NOTIFICATIONS = [new _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_5__.BackendErrorNotification(), new _model_business_customer_notification__WEBPACK_IMPORTED_MODULE_6__.BusinessCustomerNotification(), new _model_no_manager_notification__WEBPACK_IMPORTED_MODULE_8__.NoManagerNotification(), new _model_no_products_notification__WEBPACK_IMPORTED_MODULE_7__.NoProductsNotification()];
    this.store.dispatch(new _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__.Initialize()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(() => this.notificationsService.notificationsIfConditionsMet$(NOTIFICATIONS)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(notification => {
      if (notification) {
        this.store.dispatch(new _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__.SetNotificationIfNotSet(notification));
      }
    })).subscribe();
  }
  static ɵfac = function PricedCustomerProductHoldingComponent_Factory(t) {
    return new (t || PricedCustomerProductHoldingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: PricedCustomerProductHoldingComponent,
    selectors: [["tg-marketing-cafe-priced-customer-product-holding"]],
    inputs: {
      title: "title"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["class", "Container", 3, "title", "overviews", 4, "ngIf"], [1, "Container", 3, "title", "overviews"]],
    template: function PricedCustomerProductHoldingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PricedCustomerProductHoldingComponent_tg_marketing_cafe_drop_down_accordion_0_Template, 2, 4, "tg-marketing-cafe-drop-down-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx.isLoggedIn$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _drop_down_accordion_drop_down_accordion_component__WEBPACK_IMPORTED_MODULE_10__.DropDownAccordionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_12__.MarketingCafeNgxsModule],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.loginDetails), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "loginDetails$", void 0);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.isLoggedIn), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "isLoggedIn$", void 0);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.overview), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "overview$", void 0);

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

/***/ 66137:
/*!**********************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/enums/cafe-contact-detail-type.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailType: () => (/* binding */ CafeContactDetailType)
/* harmony export */ });
var CafeContactDetailType;
(function (CafeContactDetailType) {
  CafeContactDetailType[CafeContactDetailType["INDIVIDUAL"] = 0] = "INDIVIDUAL";
  CafeContactDetailType[CafeContactDetailType["ORGANIZATION"] = 1] = "ORGANIZATION";
})(CafeContactDetailType || (CafeContactDetailType = {}));

/***/ }),

/***/ 96498:
/*!***************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/mappers/cafe-contact-details.mapper.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailsMapper: () => (/* binding */ CafeContactDetailsMapper)
/* harmony export */ });
/* harmony import */ var _models_cafe_contact_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cafe-contact-details.model */ 9745);
/* harmony import */ var _common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/address/mappers/address.mapper */ 21798);
/* harmony import */ var _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/cafe-contact-detail-type */ 66137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class CafeContactDetailsMapper {
  addressMapper;
  constructor(addressMapper) {
    this.addressMapper = addressMapper;
  }
  toModel(response) {
    const contactDetails = new _models_cafe_contact_details_model__WEBPACK_IMPORTED_MODULE_0__.CafeContactDetails();
    if (response === undefined || response.contactdetails === undefined) {
      return contactDetails;
    }
    const rawContactDetails = response.contactdetails;
    switch (rawContactDetails.class) {
      case 'ORGANIZATION':
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.ORGANIZATION;
        break;
      case 'INDIVIDUAL':
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.INDIVIDUAL;
        break;
      default:
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.INDIVIDUAL;
        break;
    }
    const organization = rawContactDetails.organization;
    if (organization) {
      contactDetails.firstName = organization.name;
      contactDetails.lastName = '';
      contactDetails.organisation = {
        companyName: organization.name,
        customerNumber: organization.customernumber,
        legalForm: organization.type,
        vatNumber: organization.vat
      };
    } else {
      contactDetails.epithet = rawContactDetails?.individual?.epithet ?? '';
      contactDetails.firstName = rawContactDetails?.individual?.firstname ?? '';
      contactDetails.lastName = rawContactDetails?.individual?.lastname ?? '';
      contactDetails.dateofbirth = rawContactDetails?.individual?.dateofbirth;
    }
    contactDetails.language = rawContactDetails.language.toLowerCase();
    if (rawContactDetails.contactinfo) {
      contactDetails.telephoneNumbers = rawContactDetails.contactinfo.telephones;
      contactDetails.mobilePhoneNumbers = rawContactDetails.contactinfo.mobiles;
      contactDetails.emails = rawContactDetails.contactinfo.emails;
      contactDetails.internationalPhoneNumbers = rawContactDetails.contactinfo.internationalphones;
    }
    contactDetails.privacySetting = rawContactDetails.privacysetting;
    contactDetails.rightToObjectStatus = rawContactDetails.righttoobjectstatus;
    this.setAddresses(contactDetails, rawContactDetails?.addresses);
    return contactDetails;
  }
  setAddresses(contactDetails, rawAddresses) {
    if (rawAddresses) contactDetails.addresses = this.addressMapper.toModel(rawAddresses);
  }
  static ɵfac = function CafeContactDetailsMapper_Factory(t) {
    return new (t || CafeContactDetailsMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_1__.AddressMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CafeContactDetailsMapper,
    factory: CafeContactDetailsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9745:
/*!*************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/models/cafe-contact-details.model.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetails: () => (/* binding */ CafeContactDetails),
/* harmony export */   RawContactDetails: () => (/* binding */ RawContactDetails)
/* harmony export */ });
/* harmony import */ var _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/cafe-contact-detail-type */ 66137);

class CafeContactDetails {
  static POSTAL_CONTACT_TYPE = 'POSTALCONTACT';
  type;
  language;
  epithet;
  firstName;
  lastName;
  dateofbirth;
  addresses = [];
  telephoneNumbers = [];
  mobilePhoneNumbers = [];
  emails = [];
  internationalPhoneNumbers = [];
  privacySetting;
  rightToObjectStatus;
  organisation;
  isOrganization() {
    return this.type === _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_0__.CafeContactDetailType.ORGANIZATION;
  }
}
class RawContactDetails {
  class;
  specurl;
  privacysetting;
  organization;
  individual;
  language;
  righttoobjectstatus;
  addresses;
  contactinfo;
}

/***/ }),

/***/ 51118:
/*!*****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/services/cafe-contact-details.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailsService: () => (/* binding */ CafeContactDetailsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappers_cafe_contact_details_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mappers/cafe-contact-details.mapper */ 96498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class CafeContactDetailsService {
  ocapiService;
  cafeContactDetailsMapper;
  PROPERTY_URL = '/public/?p=contactdetails';
  constructor(ocapiService, cafeContactDetailsMapper) {
    this.ocapiService = ocapiService;
    this.cafeContactDetailsMapper = cafeContactDetailsMapper;
  }
  getContactDetails(messageGroup) {
    return this.ocapiService.doGet(this.getOcapiCallConfig(messageGroup));
  }
  getOcapiCallConfig(messageGroup) {
    return new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.cafeContactDetailsMapper);
  }
  static ɵfac = function CafeContactDetailsService_Factory(t) {
    return new (t || CafeContactDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_mappers_cafe_contact_details_mapper__WEBPACK_IMPORTED_MODULE_1__.CafeContactDetailsMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CafeContactDetailsService,
    factory: CafeContactDetailsService.ɵfac,
    providedIn: 'root'
  });
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
//# sourceMappingURL=apps_marketing_marketing-mfe_src_app_cafe_priced-customer-product-holding_ui_priced-customer--2fac261.js.map