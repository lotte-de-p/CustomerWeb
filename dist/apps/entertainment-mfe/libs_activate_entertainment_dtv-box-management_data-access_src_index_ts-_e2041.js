(self["webpackChunkentertainment_mfe"] = self["webpackChunkentertainment_mfe"] || []).push([["libs_activate_entertainment_dtv-box-management_data-access_src_index_ts-_e2041"],{

/***/ 84409:
/*!*********************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressMapper: () => (/* reexport safe */ _lib_mapper_address_mapper__WEBPACK_IMPORTED_MODULE_0__.AddressMapper),
/* harmony export */   DtvBoxManagementFacade: () => (/* reexport safe */ _lib_state_dtv_box_management_facade__WEBPACK_IMPORTED_MODULE_1__.DtvBoxManagementFacade),
/* harmony export */   DtvBoxManagementNgrxModule: () => (/* reexport safe */ _lib_state_dtv_box_management_ngrx_module__WEBPACK_IMPORTED_MODULE_2__.DtvBoxManagementNgrxModule),
/* harmony export */   DtvBoxType: () => (/* reexport safe */ _lib_enums_dtv_box_type_enum__WEBPACK_IMPORTED_MODULE_7__.DtvBoxType),
/* harmony export */   ImageSrcInterceptorDirective: () => (/* reexport safe */ _lib_util_image_src_interceptor_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_6__.ImageSrcInterceptorDirective),
/* harmony export */   SaleType: () => (/* reexport safe */ _lib_enums_sale_type_enum__WEBPACK_IMPORTED_MODULE_8__.SaleType),
/* harmony export */   SuccessModel: () => (/* reexport safe */ _lib_entities_success_model__WEBPACK_IMPORTED_MODULE_9__.SuccessModel)
/* harmony export */ });
/* harmony import */ var _lib_mapper_address_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mapper/address.mapper */ 51889);
/* harmony import */ var _lib_state_dtv_box_management_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/dtv-box-management.facade */ 46154);
/* harmony import */ var _lib_state_dtv_box_management_ngrx_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/dtv-box-management-ngrx.module */ 49595);
/* harmony import */ var _lib_entities_subscription_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/entities/subscription.model */ 49129);
/* harmony import */ var _lib_entities_address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/entities/address.model */ 15226);
/* harmony import */ var _lib_entities_dtv_box_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/entities/dtv-box.model */ 43910);
/* harmony import */ var _lib_util_image_src_interceptor_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/util/image-src-interceptor/image-src-interceptor.directive */ 86743);
/* harmony import */ var _lib_enums_dtv_box_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/enums/dtv-box-type.enum */ 1007);
/* harmony import */ var _lib_enums_sale_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/enums/sale-type.enum */ 40571);
/* harmony import */ var _lib_entities_success_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/entities/success.model */ 63276);











/***/ }),

/***/ 49595:
/*!*********************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management-ngrx.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxManagementNgrxModule: () => (/* binding */ DtvBoxManagementNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dtv_box_management_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dtv-box-management.effects */ 77866);
/* harmony import */ var _dtv_box_management_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dtv-box-management.reducer */ 96536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class DtvBoxManagementNgrxModule {
  static ɵfac = function DtvBoxManagementNgrxModule_Factory(t) {
    return new (t || DtvBoxManagementNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: DtvBoxManagementNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_dtv_box_management_effects__WEBPACK_IMPORTED_MODULE_2__.DtvBoxManagementEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_dtv_box_management_reducer__WEBPACK_IMPORTED_MODULE_3__.dtvBoxManagementFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DtvBoxManagementNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 27353:
/*!*****************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.actions.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAddresses: () => (/* binding */ loadAddresses),
/* harmony export */   loadAddressesFailure: () => (/* binding */ loadAddressesFailure),
/* harmony export */   loadAddressesSuccess: () => (/* binding */ loadAddressesSuccess),
/* harmony export */   loadSubscriptions: () => (/* binding */ loadSubscriptions),
/* harmony export */   loadSubscriptionsFailure: () => (/* binding */ loadSubscriptionsFailure),
/* harmony export */   loadSubscriptionsSuccess: () => (/* binding */ loadSubscriptionsSuccess),
/* harmony export */   resetPinCode: () => (/* binding */ resetPinCode),
/* harmony export */   resetPinCodeFailure: () => (/* binding */ resetPinCodeFailure),
/* harmony export */   resetPinCodeSuccess: () => (/* binding */ resetPinCodeSuccess),
/* harmony export */   setSelectedAddress: () => (/* binding */ setSelectedAddress),
/* harmony export */   showSecurityCode: () => (/* binding */ showSecurityCode)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

// Subscriptions
const loadSubscriptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadSubscriptions', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadSubscriptionsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadSubscriptionsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadSubscriptionsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadSubscriptionsFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Addresses
const loadAddresses = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadAddresses', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadAddressesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadAddressesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadAddressesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] loadAddressesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSelectedAddress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] setSelectedAddress', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Reset pin code
const resetPinCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] resetPinCode', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetPinCodeSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] resetPinCodeSuccess', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const resetPinCodeFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] resetPinCodeFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Show security code
const showSecurityCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[dtv-box-management] showSecurityCode', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);

/***/ }),

/***/ 77866:
/*!*****************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.effects.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxManagementEffects: () => (/* binding */ DtvBoxManagementEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_dtv_box_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dtv-box-management.service */ 97827);
/* harmony import */ var _dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dtv-box-management.actions */ 27353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class DtvBoxManagementEffects {
  actions$;
  dtvBoxManagementService;
  loadSubscriptions$;
  loadAddresses$;
  resetPinCode$;
  constructor(actions$, dtvBoxManagementService) {
    this.actions$ = actions$;
    this.dtvBoxManagementService = dtvBoxManagementService;
    this.loadSubscriptions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadSubscriptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.dtvBoxManagementService.getSubscriptions()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(subscriptions => {
      return (0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadSubscriptionsSuccess)({
        subscriptions
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadSubscriptionsFailure)({
      error: error
    })))));
    this.loadAddresses$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadAddresses), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.dtvBoxManagementService.getAddresses()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(addresses => (0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadAddressesSuccess)({
      addresses
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.loadAddressesFailure)({
      error: error
    })))));
    this.resetPinCode$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.resetPinCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(request => this.dtvBoxManagementService.resetPincode(request.identifier)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response.status === 200) {
        return (0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.resetPinCodeSuccess)();
      } else {
        return (0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.resetPinCodeFailure)({
          error: {
            message: response.statusText
          }
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_3__.resetPinCodeFailure)({
      error: error
    })))));
  }
  static ɵfac = function DtvBoxManagementEffects_Factory(t) {
    return new (t || DtvBoxManagementEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_dtv_box_management_service__WEBPACK_IMPORTED_MODULE_2__.DtvBoxManagementService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: DtvBoxManagementEffects,
    factory: DtvBoxManagementEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 46154:
/*!****************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.facade.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxManagementFacade: () => (/* binding */ DtvBoxManagementFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dtv-box-management.actions */ 27353);
/* harmony import */ var _dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dtv-box-management.selectors */ 17860);





class DtvBoxManagementFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  subscriptions$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSubscriptionsWithDtvBoxes);
  addressesWithDtvBoxes$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAddressesWithDtvBoxes);
  selectedAddress$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSelectedAddress);
  isPinCodeReset$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsPinCodeReset);
  showSecurityCode$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectShowSecurityCode);
  selectedDtvSubscription$ = this.store.select(_dtv_box_management_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSubscriptionsBySelectedAddress);
  loadSubscriptions() {
    this.store.dispatch((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadSubscriptions)());
  }
  loadAddresses() {
    this.store.dispatch((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadAddresses)());
  }
  resetPinCode(identifier) {
    this.store.dispatch((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.resetPinCode)({
      identifier
    }));
  }
  showSecurityCode() {
    this.store.dispatch((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.showSecurityCode)());
  }
  setSelectedAddress(address) {
    this.store.dispatch((0,_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.setSelectedAddress)({
      address
    }));
  }
  static ɵfac = function DtvBoxManagementFacade_Factory(t) {
    return new (t || DtvBoxManagementFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DtvBoxManagementFacade,
    factory: DtvBoxManagementFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96536:
/*!*****************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.reducer.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DTV_BOX_MANAGEMENT_FEATURE_KEY: () => (/* binding */ DTV_BOX_MANAGEMENT_FEATURE_KEY),
/* harmony export */   dtvBoxManagementFeature: () => (/* binding */ dtvBoxManagementFeature),
/* harmony export */   dtvBoxManagementReducer: () => (/* binding */ dtvBoxManagementReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dtv_box_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dtv-box-management.state */ 26919);
/* harmony import */ var _dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dtv-box-management.actions */ 27353);



const DTV_BOX_MANAGEMENT_FEATURE_KEY = 'dtv-box-management';
const dtvBoxManagementReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_dtv_box_management_state__WEBPACK_IMPORTED_MODULE_1__.initialState,
// Subscriptions
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadSubscriptions, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadSubscriptionsSuccess, (state, action) => ({
  ...state,
  subscriptions: action.subscriptions,
  isLoading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadSubscriptionsFailure, (state, action) => ({
  ...state,
  error: action.error,
  isLoading: false
})),
// Addresses
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadAddresses, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadAddressesSuccess, (state, action) => ({
  ...state,
  addresses: action.addresses,
  selectedAddress: action.addresses[0],
  isLoading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.loadAddressesFailure, (state, action) => ({
  ...state,
  error: action.error,
  isLoading: false
})),
// Selected address
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.setSelectedAddress, (state, action) => ({
  ...state,
  selectedAddress: action.address,
  isPinCodeReset: false,
  showSecurityCode: false
})),
// PinCode
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.resetPinCode, state => ({
  ...state,
  isLoading: true,
  isPinCodeReset: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.resetPinCodeSuccess, state => ({
  ...state,
  isLoading: false,
  isPinCodeReset: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.resetPinCodeFailure, (state, action) => ({
  ...state,
  error: action.error,
  isPinCodeReset: false,
  isLoading: false
})),
// Show security code
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_dtv_box_management_actions__WEBPACK_IMPORTED_MODULE_2__.showSecurityCode, state => ({
  ...state,
  showSecurityCode: true
})));
const dtvBoxManagementFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: DTV_BOX_MANAGEMENT_FEATURE_KEY,
  reducer: dtvBoxManagementReducer
});

/***/ }),

/***/ 17860:
/*!*******************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.selectors.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dtvBoxManagementFeature: () => (/* binding */ dtvBoxManagementFeature),
/* harmony export */   selectAddresses: () => (/* binding */ selectAddresses),
/* harmony export */   selectAddressesWithDtvBoxes: () => (/* binding */ selectAddressesWithDtvBoxes),
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectIsPinCodeReset: () => (/* binding */ selectIsPinCodeReset),
/* harmony export */   selectSelectedAddress: () => (/* binding */ selectSelectedAddress),
/* harmony export */   selectShowSecurityCode: () => (/* binding */ selectShowSecurityCode),
/* harmony export */   selectSubscriptionsBySelectedAddress: () => (/* binding */ selectSubscriptionsBySelectedAddress),
/* harmony export */   selectSubscriptionsWithDtvBoxes: () => (/* binding */ selectSubscriptionsWithDtvBoxes)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dtv_box_management_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dtv-box-management.reducer */ 96536);


const dtvBoxManagementFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_dtv_box_management_reducer__WEBPACK_IMPORTED_MODULE_1__.DTV_BOX_MANAGEMENT_FEATURE_KEY);
const selectSubscriptionsWithDtvBoxes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.subscriptions.filter(subscription => subscription.dtvBoxes.length > 0));
const selectAddresses = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.addresses);
const selectAddressesWithDtvBoxes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAddresses, selectSubscriptionsWithDtvBoxes, (addresses, subscriptions) => addresses.filter(address => subscriptions.some(subscription => subscription.addressId === address.id)));
const selectSelectedAddress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.selectedAddress);
const selectSubscriptionsBySelectedAddress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectSelectedAddress, selectSubscriptionsWithDtvBoxes, (selectedAddress, subscriptions) => subscriptions.find(subscription => subscription.addressId === selectedAddress?.id));
const selectIsPinCodeReset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.isPinCodeReset);
const selectShowSecurityCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.showSecurityCode);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(dtvBoxManagementFeature, state => state.error);

/***/ }),

/***/ 26919:
/*!***************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/+state/dtv-box-management.state.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
  subscriptions: [],
  addresses: [],
  selectedAddressDevices: [],
  selectedAddress: undefined,
  error: undefined,
  isLoading: false,
  isPinCodeReset: false,
  showSecurityCode: false
};

/***/ }),

/***/ 15226:
/*!******************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/entities/address.model.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 43910:
/*!******************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/entities/dtv-box.model.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 49129:
/*!***********************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/entities/subscription.model.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 63276:
/*!******************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/entities/success.model.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessModel: () => (/* binding */ SuccessModel)
/* harmony export */ });
class SuccessModel {
  status;
}

/***/ }),

/***/ 1007:
/*!*******************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/enums/dtv-box-type.enum.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxType: () => (/* binding */ DtvBoxType)
/* harmony export */ });
var DtvBoxType;
(function (DtvBoxType) {
  DtvBoxType["EOS"] = "EOS";
  DtvBoxType["SIPADAN"] = "SIPADAN";
})(DtvBoxType || (DtvBoxType = {}));

/***/ }),

/***/ 40571:
/*!****************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/enums/sale-type.enum.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaleType: () => (/* binding */ SaleType)
/* harmony export */ });
var SaleType;
(function (SaleType) {
  SaleType["BUY"] = "BUY";
  SaleType["RENT"] = "RENT";
})(SaleType || (SaleType = {}));

/***/ }),

/***/ 51889:
/*!*****************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/mapper/address.mapper.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressMapper: () => (/* binding */ AddressMapper)
/* harmony export */ });
class AddressMapper {
  toModel(rawAddress) {
    return rawAddress.map(rawAddress => ({
      id: rawAddress.id,
      country: rawAddress.country,
      countryCode: rawAddress.countryCode,
      city: rawAddress.city,
      postalCode: rawAddress.postalCode,
      street: rawAddress.street,
      houseNumber: rawAddress.houseNumber
    }));
  }
}

/***/ }),

/***/ 78924:
/*!**********************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/mapper/subscription.mapper.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxSubscriptionMapper: () => (/* binding */ DtvBoxSubscriptionMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class DtvBoxSubscriptionMapper {
  normalizationService;
  constructor(normalizationService) {
    this.normalizationService = normalizationService;
  }
  toModel(rawSubscriptions) {
    return rawSubscriptions.map(raw => ({
      id: raw.id,
      identifier: raw.identifier,
      addressId: raw.addressId,
      dtvBoxes: this.mapDtvBoxes(raw.devices)
    }));
  }
  mapDtvBoxes(dtvBoxes) {
    return dtvBoxes.map(raw => ({
      id: raw.id,
      name: raw.name,
      type: raw.type,
      saleType: raw.saleType,
      macAddress: raw.macAddress,
      serialNumber: raw.serialNumber,
      modelNumber: raw.modelNumber,
      modelImageName: this.getModelImageName(raw.modelNumber)
    }));
  }
  getModelImageName(modelNumber) {
    return modelNumber ? this.normalizationService.normalizeKey(modelNumber) + '.png' : 'dtv-default.png';
  }
  static ɵfac = function DtvBoxSubscriptionMapper_Factory(t) {
    return new (t || DtvBoxSubscriptionMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.NormalizationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DtvBoxSubscriptionMapper,
    factory: DtvBoxSubscriptionMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97827:
/*!*******************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/services/dtv-box-management.service.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxManagementService: () => (/* binding */ DtvBoxManagementService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapper_subscription_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper/subscription.mapper */ 78924);
/* harmony import */ var _mapper_address_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mapper/address.mapper */ 51889);





class DtvBoxManagementService {
  messageGroup = 'dtv-box-management';
  endpoint = '/public/api/dtv-box-management-service/v1/subscriptions';
  ocapiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiService);
  DtvBoxSubscriptionMapper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_mapper_subscription_mapper__WEBPACK_IMPORTED_MODULE_2__.DtvBoxSubscriptionMapper);
  getSubscriptions() {
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(this.messageGroup, this.endpoint, this.DtvBoxSubscriptionMapper));
  }
  getAddresses() {
    // For now we use the return devices Client Service for fetching addresses.
    // This will be moved to a seperated Client Service in the future.
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(this.messageGroup, '/public/api/return-devices-service/v1/addresses', new _mapper_address_mapper__WEBPACK_IMPORTED_MODULE_3__.AddressMapper()));
  }
  resetPincode(identifier) {
    const path = `${this.endpoint}/${identifier}/resetPin`;
    return this.ocapiService.doPost(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(this.messageGroup, path, undefined, {}, undefined, true));
  }
  static ɵfac = function DtvBoxManagementService_Factory(t) {
    return new (t || DtvBoxManagementService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DtvBoxManagementService,
    factory: DtvBoxManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 86743:
/*!******************************************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/data-access/src/lib/util/image-src-interceptor/image-src-interceptor.directive.ts ***!
  \******************************************************************************************************************************************/
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
  // imagesRootPath is configured in AEM (eg: /content/dam/www-telenet-touch/nl/common/components/dtv-details)
  // On localhost and storybook, this will be an empty string.
  imagesRootPath = '';
  src = '';
  moduleId = 'tg-entertainment-dtv-box-overview';
  constructor(el, configService) {
    this.el = el;
    this.configService = configService;
  }
  ngOnChanges(changes) {
    const source = changes['src'].currentValue.replace('/assets/', '');
    if (this.isRemoteHost()) {
      this.el.nativeElement.src = `${this.imagesRootPath}/${source}`;
    } else {
      this.el.nativeElement.src = '/assets/' + source;
    }
  }
  isRemoteHost() {
    return !!this.configService.getRemoteHostConfig(this.moduleId)?.remoteHost;
  }
  static ɵfac = function ImageSrcInterceptorDirective_Factory(t) {
    return new (t || ImageSrcInterceptorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ImageSrcInterceptorDirective,
    selectors: [["", "tgEntertainmentDtvBoxImageSrcInterceptor", ""]],
    inputs: {
      imagesRootPath: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "tgEntertainmentDtvBoxImageSrcInterceptor", "imagesRootPath"],
      src: "src"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_activate_entertainment_dtv-box-management_data-access_src_index_ts-_e2041.js.map