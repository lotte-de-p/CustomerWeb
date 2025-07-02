(self["webpackChunkdiscount_mfe"] = self["webpackChunkdiscount_mfe"] || []).push([["libs_account_discount_hardware-discount_data-access_src_index_ts-_ea7b1"],{

/***/ 99122:
/*!**************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountFacade: () => (/* reexport safe */ _lib_state_hardware_discount_facade__WEBPACK_IMPORTED_MODULE_0__.HardwareDiscountFacade),
/* harmony export */   HardwareDiscountNgrxModule: () => (/* reexport safe */ _lib_state_hardware_discount_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.HardwareDiscountNgrxModule),
/* harmony export */   HardwareDiscountService: () => (/* reexport safe */ _lib_services_hardware_discount_service__WEBPACK_IMPORTED_MODULE_3__.HardwareDiscountService),
/* harmony export */   ImageSrcInterceptorDirective: () => (/* reexport safe */ _lib_util_directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective)
/* harmony export */ });
/* harmony import */ var _lib_state_hardware_discount_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/hardware-discount.facade */ 61043);
/* harmony import */ var _lib_state_hardware_discount_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/hardware-discount-ngrx.module */ 87039);
/* harmony import */ var _lib_util_directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util/directories/image-src-interceptor.directive */ 48881);
/* harmony import */ var _lib_services_hardware_discount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/hardware-discount.service */ 51110);





/***/ }),

/***/ 87039:
/*!*************************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount-ngrx.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountNgrxModule: () => (/* binding */ HardwareDiscountNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_discount_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-discount.effects */ 86166);
/* harmony import */ var _hardware_discount_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-discount.reducer */ 36799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class HardwareDiscountNgrxModule {
  static ɵfac = function HardwareDiscountNgrxModule_Factory(t) {
    return new (t || HardwareDiscountNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: HardwareDiscountNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_hardware_discount_effects__WEBPACK_IMPORTED_MODULE_2__.HardwareDiscountEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_hardware_discount_reducer__WEBPACK_IMPORTED_MODULE_3__.hardwareDiscountFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HardwareDiscountNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 3222:
/*!*********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount.actions.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHardwareDiscount: () => (/* binding */ loadHardwareDiscount),
/* harmony export */   loadHardwareDiscountFailure: () => (/* binding */ loadHardwareDiscountFailure),
/* harmony export */   loadHardwareDiscountSuccess: () => (/* binding */ loadHardwareDiscountSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const loadHardwareDiscount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware-discount] loadHardwareDiscount', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadHardwareDiscountSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware-discount] loadHardwareDiscountSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadHardwareDiscountFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware-discount] loadHardwareDiscountFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 86166:
/*!*********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount.effects.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountEffects: () => (/* binding */ HardwareDiscountEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_hardware_discount_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hardware-discount.service */ 51110);
/* harmony import */ var _hardware_discount_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-discount.actions */ 3222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class HardwareDiscountEffects {
  actions$;
  hardwareDiscountService;
  loadHardwareDiscount$;
  constructor(actions$, hardwareDiscountService) {
    this.actions$ = actions$;
    this.hardwareDiscountService = hardwareDiscountService;
    this.loadHardwareDiscount$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_3__.loadHardwareDiscount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.hardwareDiscountService.loadHardwareDiscount()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(hardwareDiscountObject => (0,_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_3__.loadHardwareDiscountSuccess)({
      hardwareDiscountObject
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_3__.loadHardwareDiscountFailure)({
      error
    }))))));
  }
  static ɵfac = function HardwareDiscountEffects_Factory(t) {
    return new (t || HardwareDiscountEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_hardware_discount_service__WEBPACK_IMPORTED_MODULE_2__.HardwareDiscountService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: HardwareDiscountEffects,
    factory: HardwareDiscountEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61043:
/*!********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount.facade.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountFacade: () => (/* binding */ HardwareDiscountFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_discount_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-discount.actions */ 3222);
/* harmony import */ var _hardware_discount_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-discount.selectors */ 22355);
/* harmony import */ var _services_hardware_discount_datalayer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/hardware-discount-datalayer.service */ 66861);






class HardwareDiscountFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  hardwareDiscountDatalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_hardware_discount_datalayer_service__WEBPACK_IMPORTED_MODULE_4__.HardwareDiscountDatalayerService);
  selectHardwareDiscountOverview$ = this.store.select(_hardware_discount_selectors__WEBPACK_IMPORTED_MODULE_3__.selectHardwareDiscountOverview);
  selectHardwareDiscountError$ = this.store.select(_hardware_discount_selectors__WEBPACK_IMPORTED_MODULE_3__.selectHardwareDiscountError);
  selectHardwareDiscountLoading$ = this.store.select(_hardware_discount_selectors__WEBPACK_IMPORTED_MODULE_3__.selectHardwareDiscountLoading);
  loadHardwareDiscount() {
    this.store.dispatch((0,_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_2__.loadHardwareDiscount)());
  }
  sendDatalayerEvent(event, attributes) {
    this.hardwareDiscountDatalayerService.sendDataLayerEventWithAttributes(event, attributes);
  }
  static ɵfac = function HardwareDiscountFacade_Factory(t) {
    return new (t || HardwareDiscountFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HardwareDiscountFacade,
    factory: HardwareDiscountFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36799:
/*!*********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount.reducer.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HARDWARE_DISCOUNT_FEATURE_KEY: () => (/* binding */ HARDWARE_DISCOUNT_FEATURE_KEY),
/* harmony export */   hardwareDiscountFeature: () => (/* binding */ hardwareDiscountFeature),
/* harmony export */   hardwareDiscountReducer: () => (/* binding */ hardwareDiscountReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_discount_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-discount.actions */ 3222);


const HARDWARE_DISCOUNT_FEATURE_KEY = 'hardware-discount';
const initialState = {
  discountOverview: {
    availableSlots: 0,
    totalSlots: 0,
    creditCheck: '',
    usedDiscounts: [{
      device: {
        manufacturer: '',
        name: '',
        imageUrl: '',
        itemCode: ''
      },
      deliveryOrder: {
        id: '',
        expectedDeliveryDate: '',
        tracking: {
          number: '',
          url: ''
        }
      },
      originalPrice: 0,
      discountedPrice: 0,
      invoice: {
        billingAccountNumber: '',
        documentReferenceNumber: ''
      },
      contract: {
        remainingMonths: 0,
        obligationInMonths: 0,
        remainingValue: 0
      },
      depreciations: [{
        date: '',
        remainingValue: 0,
        status: ''
      }]
    }]
  },
  loading: false,
  loadError: undefined
};
const hardwareDiscountReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_1__.loadHardwareDiscountSuccess, (state, action) => ({
  ...state,
  loading: false,
  loadError: undefined,
  discountOverview: {
    ...action.hardwareDiscountObject
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_1__.loadHardwareDiscountFailure, (state, action) => ({
  ...state,
  loading: false,
  loadError: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_discount_actions__WEBPACK_IMPORTED_MODULE_1__.loadHardwareDiscount, state => ({
  ...state,
  loading: true
})));
const hardwareDiscountFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: HARDWARE_DISCOUNT_FEATURE_KEY,
  reducer: hardwareDiscountReducer
});

/***/ }),

/***/ 22355:
/*!***********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/+state/hardware-discount.selectors.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectHardwareDiscountError: () => (/* binding */ selectHardwareDiscountError),
/* harmony export */   selectHardwareDiscountFeature: () => (/* binding */ selectHardwareDiscountFeature),
/* harmony export */   selectHardwareDiscountLoading: () => (/* binding */ selectHardwareDiscountLoading),
/* harmony export */   selectHardwareDiscountOverview: () => (/* binding */ selectHardwareDiscountOverview)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_discount_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-discount.reducer */ 36799);


const selectHardwareDiscountFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_hardware_discount_reducer__WEBPACK_IMPORTED_MODULE_1__.HARDWARE_DISCOUNT_FEATURE_KEY);
const selectHardwareDiscountOverview = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectHardwareDiscountFeature, state => state.discountOverview);
const selectHardwareDiscountLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectHardwareDiscountFeature, state => state.loading);
const selectHardwareDiscountError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectHardwareDiscountFeature, state => state.loadError);

/***/ }),

/***/ 66861:
/*!*********************************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/services/hardware-discount-datalayer.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountDatalayerService: () => (/* binding */ HardwareDiscountDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class HardwareDiscountDatalayerService {
  dataLayerService;
  static CATEGORY_HARDWARE = 'hardware';
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  sendDataLayerEventWithAttributes(event, attributes) {
    const category = this.dataLayerService.createCategory(HardwareDiscountDatalayerService.CATEGORY_HARDWARE);
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }
  initDataLayer() {
    this.dataLayerService.init();
  }
  static ɵfac = function HardwareDiscountDatalayerService_Factory(t) {
    return new (t || HardwareDiscountDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HardwareDiscountDatalayerService,
    factory: HardwareDiscountDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 51110:
/*!***********************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/services/hardware-discount.service.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareDiscountService: () => (/* binding */ HardwareDiscountService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class HardwareDiscountService {
  ocapiService;
  mock_reply = {};
  static MESSAGE_GROUP = 'hardware-discount';
  static HARDWARE_ENDPOINT = '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview';
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  loadHardwareDiscount() {
    const endpoint = HardwareDiscountService.HARDWARE_ENDPOINT;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(HardwareDiscountService.MESSAGE_GROUP, endpoint));
  }
  getHardwareInvoice(invoice) {
    const endpoint = HardwareDiscountService.HARDWARE_ENDPOINT + `/${invoice.billingAccountNumber}/invoices/${invoice.documentReferenceNumber}`;
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(HardwareDiscountService.MESSAGE_GROUP, endpoint);
    ocapiCallConfig.responseType = 'blob';
    ocapiCallConfig.observeAsResponse = true;
    ocapiCallConfig.errorHandler = error => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    return this.ocapiService.doGet(ocapiCallConfig).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(response => !!response.body), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => new Blob([response.body], {
      type: 'pdf'
    })));
  }
  static ɵfac = function HardwareDiscountService_Factory(t) {
    return new (t || HardwareDiscountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HardwareDiscountService,
    factory: HardwareDiscountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48881:
/*!*************************************************************************************************************************!*\
  !*** ./libs/account/discount/hardware-discount/data-access/src/lib/util/directories/image-src-interceptor.directive.ts ***!
  \*************************************************************************************************************************/
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
  moduleId;
  src = '';
  constructor(el, configService) {
    this.el = el;
    this.configService = configService;
  }
  ngOnChanges(changes) {
    const remoteHost = this.getRemoteHost();
    if (remoteHost) {
      let imagePath = changes['src'].currentValue;
      const indexOfAssetsFolder = imagePath.indexOf('/assets');
      if (indexOfAssetsFolder !== -1) {
        imagePath = imagePath.slice(indexOfAssetsFolder);
      }
      this.el.nativeElement.src = `${remoteHost}${imagePath}`;
    }
  }
  getRemoteHost() {
    const remoteHostConfig = this.configService.getRemoteHostConfig(this.moduleId);
    return remoteHostConfig?.remoteHost || '';
  }
  static ɵfac = function ImageSrcInterceptorDirective_Factory(t) {
    return new (t || ImageSrcInterceptorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ImageSrcInterceptorDirective,
    selectors: [["", "appHardwareDiscountDashboardImageSrcInterceptor", ""]],
    inputs: {
      moduleId: "moduleId",
      src: "src"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_account_discount_hardware-discount_data-access_src_index_ts-_ea7b1.js.map