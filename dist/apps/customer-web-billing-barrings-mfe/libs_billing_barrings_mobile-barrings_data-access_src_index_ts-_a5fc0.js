(self["webpackChunkcustomer_web_billing_barrings_mfe"] = self["webpackChunkcustomer_web_billing_barrings_mfe"] || []).push([["libs_billing_barrings_mobile-barrings_data-access_src_index_ts-_a5fc0"],{

/***/ 25149:
/*!************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_INCOMING_AND_OUTGOING: () => (/* reexport safe */ _lib_entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_3__.ALL_INCOMING_AND_OUTGOING),
/* harmony export */   ALL_INCOMING_AND_OUTGOING_GROUP: () => (/* reexport safe */ _lib_entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_3__.ALL_INCOMING_AND_OUTGOING_GROUP),
/* harmony export */   MobileBarringStatus: () => (/* reexport safe */ _lib_entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_3__.MobileBarringStatus),
/* harmony export */   MobileBarringsDatalayerFacade: () => (/* reexport safe */ _lib_state_mobile_barrings_datalayer_facade__WEBPACK_IMPORTED_MODULE_1__.MobileBarringsDatalayerFacade),
/* harmony export */   MobileBarringsFacade: () => (/* reexport safe */ _lib_state_mobile_barrings_facade__WEBPACK_IMPORTED_MODULE_0__.MobileBarringsFacade),
/* harmony export */   MyBaseDashoardNgrxModule: () => (/* reexport safe */ _lib_state_mobile_barrings_ngrx_module__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule)
/* harmony export */ });
/* harmony import */ var _lib_state_mobile_barrings_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/mobile-barrings.facade */ 20895);
/* harmony import */ var _lib_state_mobile_barrings_datalayer_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/mobile-barrings-datalayer.facade */ 49918);
/* harmony import */ var _lib_state_mobile_barrings_ngrx_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/mobile-barrings-ngrx.module */ 95379);
/* harmony import */ var _lib_entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/entities/mobile-barrings.interface */ 69734);





/***/ }),

/***/ 49918:
/*!**************************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings-datalayer.facade.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsDatalayerFacade: () => (/* binding */ MobileBarringsDatalayerFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_mobile_barrings_datalayer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mobile-barrings-datalayer.service */ 41202);



class MobileBarringsDatalayerFacade {
  constructor() {
    this.mobileBarringsDatalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_mobile_barrings_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.MobileBarringsDatalayerService);
  }
  initDataLayer() {
    this.mobileBarringsDatalayerService.initDataLayer();
  }
  sendDatalayerEvent(event) {
    this.mobileBarringsDatalayerService.sendDataLayerEventWithAttributes(event);
  }
  static #_ = this.ɵfac = function MobileBarringsDatalayerFacade_Factory(t) {
    return new (t || MobileBarringsDatalayerFacade)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MobileBarringsDatalayerFacade,
    factory: MobileBarringsDatalayerFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 95379:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings-ngrx.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashoardNgrxModule: () => (/* binding */ MyBaseDashoardNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_barrings_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-barrings.effects */ 87900);
/* harmony import */ var _mobile_barrings_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-barrings.reducers */ 22944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class MyBaseDashoardNgrxModule {
  static #_ = this.ɵfac = function MyBaseDashoardNgrxModule_Factory(t) {
    return new (t || MyBaseDashoardNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MyBaseDashoardNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_mobile_barrings_effects__WEBPACK_IMPORTED_MODULE_2__.MobileBarringsEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_mobile_barrings_reducers__WEBPACK_IMPORTED_MODULE_3__.mobileBarringsFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MyBaseDashoardNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 13912:
/*!*****************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings.actions.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchMobileBarringsFailure: () => (/* binding */ fetchMobileBarringsFailure),
/* harmony export */   fetchMobileBarringsSuccess: () => (/* binding */ fetchMobileBarringsSuccess),
/* harmony export */   setSelectedMobileLine: () => (/* binding */ setSelectedMobileLine),
/* harmony export */   triggerLoading: () => (/* binding */ triggerLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const fetchMobileBarringsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-barrings] fetchMobileBarringsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchMobileBarringsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-barrings] fetchMobileBarringsFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSelectedMobileLine = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-barrings] setSelectedMobileLine', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const triggerLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mobile-barrings] triggerLoading', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 87900:
/*!*****************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings.effects.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsEffects: () => (/* binding */ MobileBarringsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_barrings_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-barrings.facade */ 20895);
/* harmony import */ var _services_mobile_barrings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mobile-barrings.service */ 77716);
/* harmony import */ var _mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-barrings.actions */ 13912);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/mobile-barrings.interface */ 69734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);










class MobileBarringsEffects {
  constructor(actions$, facade, mobileBarringsService) {
    this.actions$ = actions$;
    this.facade = facade;
    this.mobileBarringsService = mobileBarringsService;
    this.defaultMobileBarrings = {
      productName: '',
      updatable: true,
      productStatus: '',
      barringGroups: []
    };
    this.loadMobileBarrings$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.setSelectedMobileLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concatMap)(() => this.facade.selectMobileBarringSelectedMobileLine$), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concatMap)(mobileLine => {
      if (mobileLine.status === _entities_mobile_barrings_interface__WEBPACK_IMPORTED_MODULE_5__.MobileBarringStatus.ACTIVATION_IN_PROGRESS_STATUS) {
        // we need to do this or the skeleton will keep flashing
        this.facade.triggerLoading(false);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.defaultMobileBarrings);
      } else {
        return this.mobileBarringsService.getMobileBarrings(mobileLine.msisdn);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(mobileBarringObject => (0,_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileBarringsSuccess)({
      mobileBarringObject
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)((error, source) => source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)((0,_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileBarringsFailure)({
      error
    }))))));
  }
  static #_ = this.ɵfac = function MobileBarringsEffects_Factory(t) {
    return new (t || MobileBarringsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_mobile_barrings_facade__WEBPACK_IMPORTED_MODULE_1__.MobileBarringsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_mobile_barrings_service__WEBPACK_IMPORTED_MODULE_2__.MobileBarringsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: MobileBarringsEffects,
    factory: MobileBarringsEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 20895:
/*!****************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings.facade.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsFacade: () => (/* binding */ MobileBarringsFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_mobile_barrings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mobile-barrings.service */ 77716);
/* harmony import */ var _mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-barrings.actions */ 13912);
/* harmony import */ var _mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-barrings.selectors */ 66676);






class MobileBarringsFacade {
  constructor() {
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
    this.mobileBarringService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_mobile_barrings_service__WEBPACK_IMPORTED_MODULE_2__.MobileBarringsService);
    this.selectMobileBarringSelectedMobileLine$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileBarringSelectedMobileLine);
    this.mobileBarringGroups$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileBarringGroups);
    this.mobileBarringReadOnly$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileBarringReadOnly);
    this.mobileBarringProductStatus$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileBarringProductStatus);
    this.mobileBarringError$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileBarringError);
    this.loadingState$ = this.store.select(_mobile_barrings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectLoadingState);
  }
  setSelectedMobileLine(selectedMobileLine) {
    this.store.dispatch((0,_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.setSelectedMobileLine)({
      selectedMobileLine
    }));
  }
  updateBarrings(payload, msisdn) {
    return this.mobileBarringService.updateMobileBarrings(payload, msisdn);
  }
  triggerLoading(value) {
    this.store.dispatch((0,_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.triggerLoading)({
      value
    }));
  }
  setMobileBarrings(mobileBarringObject) {
    this.store.dispatch((0,_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_3__.fetchMobileBarringsSuccess)({
      mobileBarringObject
    }));
  }
  static #_ = this.ɵfac = function MobileBarringsFacade_Factory(t) {
    return new (t || MobileBarringsFacade)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MobileBarringsFacade,
    factory: MobileBarringsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 22944:
/*!******************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings.reducers.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOBILE_BARRINGS_FEATURE_KEY: () => (/* binding */ MOBILE_BARRINGS_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   mobileBarringsFeature: () => (/* binding */ mobileBarringsFeature),
/* harmony export */   mobileBarringsReducer: () => (/* binding */ mobileBarringsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-barrings.actions */ 13912);


const MOBILE_BARRINGS_FEATURE_KEY = 'mobile-barrings';
const initialState = {
  barringGroups: [],
  readOnly: false,
  productName: '',
  loading: false,
  loadError: undefined,
  productStatus: '',
  selectedMobileLine: {
    name: '',
    msisdn: '',
    isDataOnly: false
  }
};
const mobileBarringsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_1__.triggerLoading, (state, action) => ({
  ...state,
  loading: action.value
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_1__.fetchMobileBarringsSuccess, (state, action) => ({
  ...state,
  loading: false,
  barringGroups: action.mobileBarringObject.barringGroups,
  readOnly: !action.mobileBarringObject.updatable,
  productName: action.mobileBarringObject.productName,
  productStatus: action.mobileBarringObject.productStatus
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_1__.fetchMobileBarringsFailure, (state, action) => ({
  ...state,
  loading: false,
  loadError: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mobile_barrings_actions__WEBPACK_IMPORTED_MODULE_1__.setSelectedMobileLine, (state, action) => ({
  ...state,
  loading: true,
  selectedMobileLine: action.selectedMobileLine
})));
const mobileBarringsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: MOBILE_BARRINGS_FEATURE_KEY,
  reducer: mobileBarringsReducer
});

/***/ }),

/***/ 66676:
/*!*******************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/+state/mobile-barrings.selectors.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectLoadingState: () => (/* binding */ selectLoadingState),
/* harmony export */   selectMobileBarringError: () => (/* binding */ selectMobileBarringError),
/* harmony export */   selectMobileBarringGroups: () => (/* binding */ selectMobileBarringGroups),
/* harmony export */   selectMobileBarringProductStatus: () => (/* binding */ selectMobileBarringProductStatus),
/* harmony export */   selectMobileBarringReadOnly: () => (/* binding */ selectMobileBarringReadOnly),
/* harmony export */   selectMobileBarringSelectedMobileLine: () => (/* binding */ selectMobileBarringSelectedMobileLine),
/* harmony export */   selectMobileBarringsFeature: () => (/* binding */ selectMobileBarringsFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_barrings_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-barrings.reducers */ 22944);


const selectMobileBarringsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_mobile_barrings_reducers__WEBPACK_IMPORTED_MODULE_1__.MOBILE_BARRINGS_FEATURE_KEY);
const selectMobileBarringGroups = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.barringGroups);
const selectMobileBarringReadOnly = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.readOnly);
const selectMobileBarringError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.loadError);
const selectMobileBarringProductStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.productStatus);
const selectMobileBarringSelectedMobileLine = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.selectedMobileLine);
const selectLoadingState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMobileBarringsFeature, state => state.loading);

/***/ }),

/***/ 69734:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/entities/mobile-barrings.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_INCOMING_AND_OUTGOING: () => (/* binding */ ALL_INCOMING_AND_OUTGOING),
/* harmony export */   ALL_INCOMING_AND_OUTGOING_GROUP: () => (/* binding */ ALL_INCOMING_AND_OUTGOING_GROUP),
/* harmony export */   MobileBarringStatus: () => (/* binding */ MobileBarringStatus)
/* harmony export */ });
const ALL_INCOMING_AND_OUTGOING = 'all-incoming-and-outgoing';
const ALL_INCOMING_AND_OUTGOING_GROUP = 'general';
var MobileBarringStatus;
(function (MobileBarringStatus) {
  MobileBarringStatus["ACTIVE_STATUS"] = "ACTIVE";
  MobileBarringStatus["SUSPENDED_STATUS"] = "SUSPENDED";
  MobileBarringStatus["ACTIVATION_IN_PROGRESS_STATUS"] = "ACTIVATION_IN_PROGRESS";
  MobileBarringStatus["DISCONNECTION_IN_PROGRESS_STATUS"] = "DISCONNECTION_IN_PROGRESS";
  MobileBarringStatus["DISCONNECTED_STATUS"] = "DISCONNECTED";
})(MobileBarringStatus || (MobileBarringStatus = {}));

/***/ }),

/***/ 41202:
/*!*****************************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/services/mobile-barrings-datalayer.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsDatalayerService: () => (/* binding */ MobileBarringsDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class MobileBarringsDatalayerService {
  static #_ = this.MESSAGE_GROUP = 'mobile';
  static #_2 = this.CATEGORY_GENERAL = 'care';
  static #_3 = this.ATTRIBUTES_ITEM_NAME = 'itemName';
  static #_4 = this.ATTRIBUTES_ITEM_DATA = 'itemData';
  static #_5 = this.ATTRIBUTES_ITEM_GROUP = 'itemGroup';
  static #_6 = this.ATTRIBUTES_DESTINATION_URL = 'destinationURL';
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  sendDataLayerEventWithAttributes(event) {
    const attributes = {};
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_NAME] = event.attributeName;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_DATA] = event.attributeData;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_ITEM_GROUP] = event.attributeGroup;
    attributes[MobileBarringsDatalayerService.ATTRIBUTES_DESTINATION_URL] = event.destinationUrl;
    const category = this.dataLayerService.createCategory(MobileBarringsDatalayerService.CATEGORY_GENERAL, MobileBarringsDatalayerService.MESSAGE_GROUP);
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType, [MobileBarringsDatalayerService.MESSAGE_GROUP]);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }
  initDataLayer() {
    this.dataLayerService.init();
  }
  static #_7 = this.ɵfac = function MobileBarringsDatalayerService_Factory(t) {
    return new (t || MobileBarringsDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static #_8 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MobileBarringsDatalayerService,
    factory: MobileBarringsDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 77716:
/*!*******************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/data-access/src/lib/services/mobile-barrings.service.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBarringsService: () => (/* binding */ MobileBarringsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class MobileBarringsService {
  static #_ = this.MESSAGE_GROUP = 'mobile-barrings';
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  getMobileBarrings(msisdn) {
    const endpoint = `/public/api/mobile-barrings-service/v1/mobile-barrings/${msisdn}`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MobileBarringsService.MESSAGE_GROUP, endpoint));
  }
  updateMobileBarrings(payload, msisdn) {
    const endpoint = `/public/api/mobile-barrings-service/v1/mobile-barrings/${msisdn}`;
    return this.ocapiService.doPatch(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MobileBarringsService.MESSAGE_GROUP, endpoint, undefined, payload));
  }
  static #_2 = this.ɵfac = function MobileBarringsService_Factory(t) {
    return new (t || MobileBarringsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MobileBarringsService,
    factory: MobileBarringsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_barrings_mobile-barrings_data-access_src_index_ts-_a5fc0.js.map