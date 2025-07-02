(self["webpackChunkcustomer_web_billing_limits_mfe"] = self["webpackChunkcustomer_web_billing_limits_mfe"] || []).push([["libs_billing_limits_mobile-usage-limits_data-access_src_index_ts-_02db0"],{

/***/ 74063:
/*!**************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsFacade: () => (/* reexport safe */ _lib_mobile_usage_limits_facade__WEBPACK_IMPORTED_MODULE_0__.MobileUsageLimitsFacade),
/* harmony export */   MobileUsageLimitsNgrxModule: () => (/* reexport safe */ _lib_state_mobile_usage_limits_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.MobileUsageLimitsNgrxModule)
/* harmony export */ });
/* harmony import */ var _lib_mobile_usage_limits_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mobile-usage-limits.facade */ 19949);
/* harmony import */ var _lib_state_mobile_usage_limits_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/mobile-usage-limits-ngrx.module */ 76833);



/***/ }),

/***/ 49176:
/*!*********************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits-datalayer.effects.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsDatalayerEffects: () => (/* binding */ MobileUsageLimitsDatalayerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_datalayer_mobile_usage_limits_datalayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/datalayer/mobile-usage-limits-datalayer.service */ 12178);
/* harmony import */ var _mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-usage-limits.actions */ 21909);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mobile-usage-limits-service.constants */ 61622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









class MobileUsageLimitsDatalayerEffects {
  constructor(actions$, mobileUsageLimitsDatalayerService) {
    this.actions$ = actions$;
    this.mobileUsageLimitsDatalayerService = mobileUsageLimitsDatalayerService;
    this.updateLimitsSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageLimits)), this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageLimitsSuccess)), this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageDataLayerEvent))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(([usageLimitsRequest, usageLimitsResponse, updatedDataLayerAttributes]) => {
      if (!usageLimitsResponse.usageLimits && usageLimitsRequest) return;
      const {
        outOfBundleLimit,
        premiumServiceLimit
      } = usageLimitsRequest.updateUsageLimitsRequest;
      this.sendDataLayerEvent(premiumServiceLimit?.value, outOfBundleLimit?.value, updatedDataLayerAttributes);
    })), {
      dispatch: false
    });
    this.cancelUpdateLimitOnWarning$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageDataLayerEvent))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(([updatedDataLayerAttributes]) => {
      this.sendDataLayerEvent(undefined, undefined, updatedDataLayerAttributes);
    })), {
      dispatch: false
    });
  }
  sendDataLayerEvent(premiumServiceLimitValue, outOfBundleLimitValue, updatedDataLayerAttributes) {
    if (updatedDataLayerAttributes) {
      if (premiumServiceLimitValue !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(updatedDataLayerAttributes.limitAlreadyExceeded, updatedDataLayerAttributes.updateDeclined, premiumServiceLimitValue.toString(), _services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_5__.THIRD_PARTY_SERVICES);
      } else if (outOfBundleLimitValue !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(updatedDataLayerAttributes.limitAlreadyExceeded, updatedDataLayerAttributes.updateDeclined, outOfBundleLimitValue.toString(), _services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_5__.OUT_OF_BUNDLE);
      } else if (updatedDataLayerAttributes.cancelledLimit !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(updatedDataLayerAttributes.limitAlreadyExceeded, updatedDataLayerAttributes.updateDeclined, updatedDataLayerAttributes.cancelledLimit, updatedDataLayerAttributes.itemName);
      }
    }
  }
  static #_ = this.ɵfac = function MobileUsageLimitsDatalayerEffects_Factory(t) {
    return new (t || MobileUsageLimitsDatalayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_datalayer_mobile_usage_limits_datalayer_service__WEBPACK_IMPORTED_MODULE_2__.MobileUsageLimitsDatalayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: MobileUsageLimitsDatalayerEffects,
    factory: MobileUsageLimitsDatalayerEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 76833:
/*!***************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits-ngrx.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsNgrxModule: () => (/* binding */ MobileUsageLimitsNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_usage_limits_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-usage-limits.effects */ 23933);
/* harmony import */ var _mobile_usage_limits_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-usage-limits.reducers */ 73043);
/* harmony import */ var _mobile_usage_limits_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-usage-limits-datalayer.effects */ 49176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class MobileUsageLimitsNgrxModule {
  static #_ = this.ɵfac = function MobileUsageLimitsNgrxModule_Factory(t) {
    return new (t || MobileUsageLimitsNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MobileUsageLimitsNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_mobile_usage_limits_effects__WEBPACK_IMPORTED_MODULE_2__.MobileUsageLimitsEffects, _mobile_usage_limits_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__.MobileUsageLimitsDatalayerEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_mobile_usage_limits_reducers__WEBPACK_IMPORTED_MODULE_3__.mobileUsageLimitsFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MobileUsageLimitsNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 21909:
/*!***********************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits.actions.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchMobileUsageLimitsDetails: () => (/* binding */ fetchMobileUsageLimitsDetails),
/* harmony export */   fetchMobileUsageLimitsDetailsFailure: () => (/* binding */ fetchMobileUsageLimitsDetailsFailure),
/* harmony export */   fetchMobileUsageLimitsDetailsSuccess: () => (/* binding */ fetchMobileUsageLimitsDetailsSuccess),
/* harmony export */   fetchOutOfBundleLimits: () => (/* binding */ fetchOutOfBundleLimits),
/* harmony export */   fetchOutOfBundleLimitsFailure: () => (/* binding */ fetchOutOfBundleLimitsFailure),
/* harmony export */   fetchOutOfBundleLimitsSuccess: () => (/* binding */ fetchOutOfBundleLimitsSuccess),
/* harmony export */   resetMobileUsageLimits: () => (/* binding */ resetMobileUsageLimits),
/* harmony export */   updateMobileUsageDataLayerEvent: () => (/* binding */ updateMobileUsageDataLayerEvent),
/* harmony export */   updateMobileUsageLimits: () => (/* binding */ updateMobileUsageLimits),
/* harmony export */   updateMobileUsageLimitsFailure: () => (/* binding */ updateMobileUsageLimitsFailure),
/* harmony export */   updateMobileUsageLimitsSuccess: () => (/* binding */ updateMobileUsageLimitsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const fetchMobileUsageLimitsDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch mobile usage limits', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchMobileUsageLimitsDetailsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch mobile usage limits details success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchMobileUsageLimitsDetailsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch mobile usage limits details failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileUsageLimits = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] update mobile usage limits', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileUsageLimitsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] update mobile usage limits failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileUsageLimitsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] update mobile usage limits success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchOutOfBundleLimits = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch out of bundle limits', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchOutOfBundleLimitsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch out of bundle limits success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchOutOfBundleLimitsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] fetch out of bundle limits failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileUsageDataLayerEvent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-usage-limits] updateMobileUsageDataLayerEvent', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetMobileUsageLimits = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[MobileUsageLimits] Reset Mobile Usage Limits');

/***/ }),

/***/ 23933:
/*!***********************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits.effects.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsEffects: () => (/* binding */ MobileUsageLimitsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-usage-limits.actions */ 21909);
/* harmony import */ var _services_usage_limits_usage_limits_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usage-limits/usage-limits.service */ 55184);
/* harmony import */ var _services_out_of_bundle_limits_out_of_bundle_limits_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/out-of-bundle-limits/out-of-bundle-limits.service */ 8352);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/mobile-usage-limits-service.constants */ 61622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);













class MobileUsageLimitsEffects {
  constructor(actions$, outOfBundleLimitsService, usageLimitsService, messageService) {
    this.actions$ = actions$;
    this.outOfBundleLimitsService = outOfBundleLimitsService;
    this.usageLimitsService = usageLimitsService;
    this.messageService = messageService;
    this.fetchMobileUsageLimitsDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileUsageLimitsDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(({
      mobileLine
    }) => this.usageLimitsService.getUsageLimits(mobileLine.msisdn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(usageLimits => (0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileUsageLimitsDetailsSuccess)({
      usageLimits
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)((0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileUsageLimitsDetailsFailure)({
      error
    })))))));
    this.fetchOutOfBundleLimits$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchOutOfBundleLimits), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(({
      mobileLine
    }) => this.outOfBundleLimitsService.getOutOfBundleLimits(mobileLine.msisdn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(outOfBundleLimits => (0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchOutOfBundleLimitsSuccess)({
      outOfBundleLimits
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error.includes(_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND)) {
        this.messageService.clearMessages(_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)((0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.fetchOutOfBundleLimitsFailure)({
        error
      }));
    })))));
    this.updateMobileUsageLimits$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageLimits), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(({
      updateUsageLimitsRequest,
      mobileLine
    }) => this.usageLimitsService.updateUsageLimits(updateUsageLimitsRequest, mobileLine.msisdn)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.SuccessMessage(_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP, `${_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP}.${_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.USAGE_LIMIT_UPDATED}`))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(usageLimits => (0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageLimitsSuccess)({
      usageLimits
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage(_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP, `${_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.MESSAGE_GROUP}.${_services_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_7__.USAGE_LIMIT_DECLINED}`));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)((0,_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_3__.updateMobileUsageLimitsFailure)({
        error
      }));
    })));
  }
  static #_ = this.ɵfac = function MobileUsageLimitsEffects_Factory(t) {
    return new (t || MobileUsageLimitsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_out_of_bundle_limits_out_of_bundle_limits_service__WEBPACK_IMPORTED_MODULE_5__.OutOfBundleLimitsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_usage_limits_usage_limits_service__WEBPACK_IMPORTED_MODULE_4__.UsageLimitsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: MobileUsageLimitsEffects,
    factory: MobileUsageLimitsEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73043:
/*!************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits.reducers.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOBILE_USAGE_LIMITS_FEATURE_KEY: () => (/* binding */ MOBILE_USAGE_LIMITS_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   mobileUsageLimitsFeature: () => (/* binding */ mobileUsageLimitsFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-usage-limits.actions */ 21909);


const MOBILE_USAGE_LIMITS_FEATURE_KEY = 'mobile-usage-limits';
const initialState = {
  selectedMobileUsageLimits: null,
  selectedOutOfBundleLimits: [],
  selectedMobileUsageLimitsLoaded: false,
  selectedOutOfBundleLimitsLoaded: false
};
const mobileUsageLimitsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: MOBILE_USAGE_LIMITS_FEATURE_KEY,
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchMobileUsageLimitsDetails, (state, action) => ({
    ...state,
    selectedMobileLine: action.mobileLine,
    selectedMobileUsageLimitsLoaded: false,
    selectedOutOfBundleLimitsLoaded: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchMobileUsageLimitsDetailsSuccess, (state, action) => ({
    ...state,
    selectedMobileUsageLimits: action.usageLimits,
    selectedMobileUsageLimitsLoaded: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchMobileUsageLimitsDetailsFailure, state => ({
    ...state,
    selectedMobileUsageLimits: null,
    selectedMobileUsageLimitsLoaded: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchOutOfBundleLimits, (state, action) => ({
    ...state,
    selectedMobileLine: action.mobileLine,
    selectedOutOfBundleLimitsLoaded: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchOutOfBundleLimitsSuccess, (state, action) => ({
    ...state,
    selectedOutOfBundleLimits: action.outOfBundleLimits,
    selectedOutOfBundleLimitsLoaded: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.fetchOutOfBundleLimitsFailure, state => ({
    ...state,
    selectedOutOfBundleLimits: [],
    selectedOutOfBundleLimitsLoaded: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileUsageLimits, (state, action) => ({
    ...state,
    selectedMobileLine: action.mobileLine,
    selectedMobileUsageLimitsLoaded: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileUsageLimitsSuccess, (state, action) => ({
    ...state,
    selectedMobileUsageLimits: action.usageLimits,
    selectedMobileUsageLimitsLoaded: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileUsageLimitsFailure, state => ({
    ...state,
    selectedMobileUsageLimitsLoaded: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_1__.resetMobileUsageLimits, state => ({
    ...state,
    selectedMobileUsageLimitsLoaded: false,
    selectedOutOfBundleLimitsLoaded: false
  })))
});

/***/ }),

/***/ 58619:
/*!*************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/+state/mobile-usage-limits.selectors.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectMobileUsageLimitsFeature: () => (/* binding */ selectMobileUsageLimitsFeature),
/* harmony export */   selectedMobileUsageLimits: () => (/* binding */ selectedMobileUsageLimits),
/* harmony export */   selectedMobileUsageLimitsLoaded: () => (/* binding */ selectedMobileUsageLimitsLoaded),
/* harmony export */   selectedOutOfBundleLimits: () => (/* binding */ selectedOutOfBundleLimits),
/* harmony export */   selectedOutOfBundleLimitsLoaded: () => (/* binding */ selectedOutOfBundleLimitsLoaded)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_usage_limits_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-usage-limits.reducers */ 73043);


const selectMobileUsageLimitsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_mobile_usage_limits_reducers__WEBPACK_IMPORTED_MODULE_1__.MOBILE_USAGE_LIMITS_FEATURE_KEY);
const selectedMobileUsageLimits = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileUsageLimitsFeature, state => state.selectedMobileUsageLimits);
const selectedMobileUsageLimitsLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileUsageLimitsFeature, state => state.selectedMobileUsageLimitsLoaded);
const selectedOutOfBundleLimits = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileUsageLimitsFeature, state => state.selectedOutOfBundleLimits);
const selectedOutOfBundleLimitsLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileUsageLimitsFeature, state => state.selectedOutOfBundleLimitsLoaded);

/***/ }),

/***/ 19949:
/*!***************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/mobile-usage-limits.facade.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsFacade: () => (/* binding */ MobileUsageLimitsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_mobile_usage_limits_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/mobile-usage-limits.selectors */ 58619);
/* harmony import */ var _state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/mobile-usage-limits.actions */ 21909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class MobileUsageLimitsFacade {
  constructor(store) {
    this.store = store;
    this.selectedMobileUsageLimits$ = this.store.select(_state_mobile_usage_limits_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedMobileUsageLimits);
    this.selectedOutOfBundleLimits$ = this.store.select(_state_mobile_usage_limits_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedOutOfBundleLimits);
    this.selectedOutOfBundleLimitsLoaded$ = this.store.select(_state_mobile_usage_limits_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedOutOfBundleLimitsLoaded);
    this.selectedMobileUsageLimitsLoaded$ = this.store.select(_state_mobile_usage_limits_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedMobileUsageLimitsLoaded);
  }
  loadMobileUsageLimits(params) {
    this.store.dispatch((0,_state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__.fetchMobileUsageLimitsDetails)(params));
  }
  loadOutOfBundleLimits(params) {
    this.store.dispatch((0,_state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__.fetchOutOfBundleLimits)(params));
  }
  updateMobileUsageLimits(params) {
    this.store.dispatch((0,_state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__.updateMobileUsageLimits)(params));
  }
  updateMobileUsageDataLayerEvent(params) {
    this.store.dispatch((0,_state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__.updateMobileUsageDataLayerEvent)(params));
  }
  resetMobileUsageLimits() {
    this.store.dispatch((0,_state_mobile_usage_limits_actions__WEBPACK_IMPORTED_MODULE_2__.resetMobileUsageLimits)());
  }
  static #_ = this.ɵfac = function MobileUsageLimitsFacade_Factory(t) {
    return new (t || MobileUsageLimitsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MobileUsageLimitsFacade,
    factory: MobileUsageLimitsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12178:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/services/datalayer/mobile-usage-limits-datalayer.service.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageLimitsDatalayerService: () => (/* binding */ MobileUsageLimitsDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile-usage-limits-service.constants */ 61622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MobileUsageLimitsDatalayerService {
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, updatedLimit, itemName) {
    if (itemName !== null && itemName !== undefined) {
      const eventName = updateDeclined ? _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.EVENT_NAME_DECLINED : _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.EVENT_NAME_CHANGED;
      const attributes = {
        [_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ITEM_NAME]: itemName
      };
      attributes[_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ITEM_DATA] = updatedLimit;
      if (!updateDeclined) {
        attributes[_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_ITEM_GROUP] = limitAlreadyExceeded ? _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_DATA_LIMIT_EXCEEDED : _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_DATA_LIMIT_NOT_EXCEEDED;
      }
      const category = this.dataLayerService.createCategory(_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_PRIMARY_CARE, _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_SUBCATEGORY_MOBILE);
      const eventInfo = this.dataLayerService.createEventInfo(eventName, _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.EVENT_TYPE, [_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_GROUP]);
      this.dataLayerService.sendEvent({
        eventInfo,
        attributes,
        category
      });
    }
  }
  static #_ = this.ɵfac = function MobileUsageLimitsDatalayerService_Factory(t) {
    return new (t || MobileUsageLimitsDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MobileUsageLimitsDatalayerService,
    factory: MobileUsageLimitsDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61622:
/*!***********************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/services/mobile-usage-limits-service.constants.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTRIBUTE_ITEM_DATA: () => (/* binding */ ATTRIBUTE_ITEM_DATA),
/* harmony export */   ATTRIBUTE_ITEM_GROUP: () => (/* binding */ ATTRIBUTE_ITEM_GROUP),
/* harmony export */   ATTRIBUTE_ITEM_NAME: () => (/* binding */ ATTRIBUTE_ITEM_NAME),
/* harmony export */   CATEGORY_PRIMARY_CARE: () => (/* binding */ CATEGORY_PRIMARY_CARE),
/* harmony export */   CATEGORY_SUBCATEGORY_MOBILE: () => (/* binding */ CATEGORY_SUBCATEGORY_MOBILE),
/* harmony export */   EVENT_NAME_CHANGED: () => (/* binding */ EVENT_NAME_CHANGED),
/* harmony export */   EVENT_NAME_DECLINED: () => (/* binding */ EVENT_NAME_DECLINED),
/* harmony export */   EVENT_TYPE: () => (/* binding */ EVENT_TYPE),
/* harmony export */   ITEM_DATA_LIMIT_EXCEEDED: () => (/* binding */ ITEM_DATA_LIMIT_EXCEEDED),
/* harmony export */   ITEM_DATA_LIMIT_NOT_EXCEEDED: () => (/* binding */ ITEM_DATA_LIMIT_NOT_EXCEEDED),
/* harmony export */   MESSAGE_GROUP: () => (/* binding */ MESSAGE_GROUP),
/* harmony export */   MOBILE_LINES_ENDPOINT: () => (/* binding */ MOBILE_LINES_ENDPOINT),
/* harmony export */   MOBILE_USAGE_LIMITS_ENDPOINT: () => (/* binding */ MOBILE_USAGE_LIMITS_ENDPOINT),
/* harmony export */   OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND: () => (/* binding */ OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND),
/* harmony export */   OUT_OF_BUNDLE: () => (/* binding */ OUT_OF_BUNDLE),
/* harmony export */   OUT_OF_BUNDLE_LIMITS_ENDPOINT: () => (/* binding */ OUT_OF_BUNDLE_LIMITS_ENDPOINT),
/* harmony export */   PRIMARY_CATEGORY: () => (/* binding */ PRIMARY_CATEGORY),
/* harmony export */   SECONDARY_CATEGORY: () => (/* binding */ SECONDARY_CATEGORY),
/* harmony export */   THIRD_PARTY_SERVICES: () => (/* binding */ THIRD_PARTY_SERVICES),
/* harmony export */   USAGE_LIMIT_DECLINED: () => (/* binding */ USAGE_LIMIT_DECLINED),
/* harmony export */   USAGE_LIMIT_UPDATED: () => (/* binding */ USAGE_LIMIT_UPDATED)
/* harmony export */ });
const MESSAGE_GROUP = 'mobile-usage-limits';
const SECONDARY_CATEGORY = 'billing';
const PRIMARY_CATEGORY = 'care';
const MOBILE_LINES_ENDPOINT = '/public/api/mobile-usage-limits-service/v1/mobile-lines';
const OUT_OF_BUNDLE_LIMITS_ENDPOINT = '/public/api/mobile-usage-limits-service/v1/mobile-usage-limits/outofbundle/limits/';
const MOBILE_USAGE_LIMITS_ENDPOINT = '/public/api/mobile-usage-limits-service/v1/mobile-usage-limits/';
const USAGE_LIMIT_UPDATED = 'lbl.successfully-saved';
const OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND = 'ocapi.400';
const ATTRIBUTE_ITEM_NAME = 'itemName';
const ATTRIBUTE_ITEM_DATA = 'itemData';
const ATTRIBUTE_ITEM_GROUP = 'itemGroup';
const CATEGORY_PRIMARY_CARE = 'care';
const CATEGORY_SUBCATEGORY_MOBILE = 'mobile';
const EVENT_NAME_CHANGED = 'mobile usage limit changed';
const EVENT_NAME_DECLINED = 'mobile usage limit declined';
const EVENT_TYPE = 'click';
const ITEM_DATA_LIMIT_EXCEEDED = 'limit already exceeded';
const ITEM_DATA_LIMIT_NOT_EXCEEDED = 'limit not exceeded';
const THIRD_PARTY_SERVICES = 'Third-party Services';
const OUT_OF_BUNDLE = 'Out of Bundle';
const USAGE_LIMIT_DECLINED = 'lbl.something-went-wrong';

/***/ }),

/***/ 8352:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/services/out-of-bundle-limits/out-of-bundle-limits.service.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBundleLimitsService: () => (/* binding */ OutOfBundleLimitsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile-usage-limits-service.constants */ 61622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class OutOfBundleLimitsService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  getOutOfBundleLimits(msisdn) {
    const endpoint = _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.OUT_OF_BUNDLE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_GROUP, endpoint));
  }
  static #_ = this.ɵfac = function OutOfBundleLimitsService_Factory(t) {
    return new (t || OutOfBundleLimitsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OutOfBundleLimitsService,
    factory: OutOfBundleLimitsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55184:
/*!*******************************************************************************************************************!*\
  !*** ./libs/billing/limits/mobile-usage-limits/data-access/src/lib/services/usage-limits/usage-limits.service.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsageLimitsService: () => (/* binding */ UsageLimitsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile-usage-limits-service.constants */ 61622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class UsageLimitsService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  getUsageLimits(msisdn) {
    const endpoint = _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MOBILE_USAGE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_GROUP, endpoint));
  }
  updateUsageLimits(payload, msisdn) {
    const endpoint = _mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MOBILE_USAGE_LIMITS_ENDPOINT + msisdn;
    return this.ocapiService.doPut(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(_mobile_usage_limits_service_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_GROUP, endpoint, undefined, payload));
  }
  static #_ = this.ɵfac = function UsageLimitsService_Factory(t) {
    return new (t || UsageLimitsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: UsageLimitsService,
    factory: UsageLimitsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_limits_mobile-usage-limits_data-access_src_index_ts-_02db0.js.map