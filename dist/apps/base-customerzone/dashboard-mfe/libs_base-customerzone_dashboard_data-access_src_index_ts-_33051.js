(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_data-access_src_index_ts-_33051"],{

/***/ 90434:
/*!*******************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingPaymentMethod: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.BillingPaymentMethod),
/* harmony export */   ImageSrcInterceptorDirective: () => (/* reexport safe */ _lib_util_directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_4__.ImageSrcInterceptorDirective),
/* harmony export */   MyBaseAnalyticsEventMobileUsage: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseAnalyticsEventMobileUsage),
/* harmony export */   MyBaseDashboardDatalayerAttributeData: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardDatalayerAttributeData),
/* harmony export */   MyBaseDashboardDatalayerAttributeGroup: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardDatalayerAttributeGroup),
/* harmony export */   MyBaseDashboardDatalayerAttributeName: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardDatalayerAttributeName),
/* harmony export */   MyBaseDashboardDatalayerEventName: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardDatalayerEventName),
/* harmony export */   MyBaseDashboardDatalayerEventType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__.MyBaseDashboardDatalayerEventType),
/* harmony export */   MyBaseDashboardDatalayerFacade: () => (/* reexport safe */ _lib_state_mybase_dashboard_datalayer_facade__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerFacade),
/* harmony export */   MyBaseDashboardDatalayerService: () => (/* reexport safe */ _lib_services_mybase_dashboard_datalayer_service__WEBPACK_IMPORTED_MODULE_5__.MyBaseDashboardDatalayerService),
/* harmony export */   MyBaseDashboardFacade: () => (/* reexport safe */ _lib_state_mybase_dashboard_facade__WEBPACK_IMPORTED_MODULE_1__.MyBaseDashboardFacade),
/* harmony export */   MyBaseDashoardNgrxModule: () => (/* reexport safe */ _lib_state_mybase_dashboard_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashoardNgrxModule),
/* harmony export */   NavigationCardType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.NavigationCardType),
/* harmony export */   ServiceMomentsType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.ServiceMomentsType),
/* harmony export */   ServiceType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.ServiceType),
/* harmony export */   SubType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.SubType),
/* harmony export */   SupportAssistanceType: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.SupportAssistanceType),
/* harmony export */   UsageStatusEnum: () => (/* reexport safe */ _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__.UsageStatusEnum)
/* harmony export */ });
/* harmony import */ var _lib_state_mybase_dashboard_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/mybase-dashboard-ngrx.module */ 12605);
/* harmony import */ var _lib_state_mybase_dashboard_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/mybase-dashboard.facade */ 35382);
/* harmony import */ var _lib_state_mybase_dashboard_datalayer_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/mybase-dashboard-datalayer.facade */ 75977);
/* harmony import */ var _lib_entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/entities/mybase-dashboard.interface */ 49690);
/* harmony import */ var _lib_util_directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/util/directories/image-src-interceptor.directive */ 63955);
/* harmony import */ var _lib_services_mybase_dashboard_datalayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/mybase-dashboard-datalayer.service */ 27349);
/* harmony import */ var _lib_entities_mybase_dashboard_datalayer_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/entities/mybase-dashboard-datalayer.interface */ 11736);








/***/ }),

/***/ 75977:
/*!**********************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard-datalayer.facade.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardDatalayerFacade: () => (/* binding */ MyBaseDashboardDatalayerFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_mybase_dashboard_datalayer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mybase-dashboard-datalayer.service */ 27349);



class MyBaseDashboardDatalayerFacade {
  myBaseDashboardDatalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_mybase_dashboard_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.MyBaseDashboardDatalayerService);
  initDataLayer() {
    this.myBaseDashboardDatalayerService.initDataLayer();
  }
  sendDatalayerEvent(event) {
    this.myBaseDashboardDatalayerService.sendDataLayerEventWithAttributes(event);
  }
  static ɵfac = function MyBaseDashboardDatalayerFacade_Factory(t) {
    return new (t || MyBaseDashboardDatalayerFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MyBaseDashboardDatalayerFacade,
    factory: MyBaseDashboardDatalayerFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12605:
/*!*****************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard-ngrx.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashoardNgrxModule: () => (/* binding */ MyBaseDashoardNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mybase-dashboard.effects */ 66447);
/* harmony import */ var _mybase_dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mybase-dashboard.reducer */ 52154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class MyBaseDashoardNgrxModule {
  static ɵfac = function MyBaseDashoardNgrxModule_Factory(t) {
    return new (t || MyBaseDashoardNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MyBaseDashoardNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_mybase_dashboard_effects__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_mybase_dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__.myBaseDashboardFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MyBaseDashoardNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 6221:
/*!*************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard.actions.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDtvLines: () => (/* binding */ loadDtvLines),
/* harmony export */   loadDtvLinesFailure: () => (/* binding */ loadDtvLinesFailure),
/* harmony export */   loadDtvLinesSuccess: () => (/* binding */ loadDtvLinesSuccess),
/* harmony export */   loadInternetLines: () => (/* binding */ loadInternetLines),
/* harmony export */   loadInternetLinesFailure: () => (/* binding */ loadInternetLinesFailure),
/* harmony export */   loadInternetLinesSuccess: () => (/* binding */ loadInternetLinesSuccess),
/* harmony export */   loadMobileLines: () => (/* binding */ loadMobileLines),
/* harmony export */   loadMobileLinesFailure: () => (/* binding */ loadMobileLinesFailure),
/* harmony export */   loadMobileLinesSuccess: () => (/* binding */ loadMobileLinesSuccess),
/* harmony export */   loadMyBaseDashboard: () => (/* binding */ loadMyBaseDashboard),
/* harmony export */   loadMyBaseDashboardFailure: () => (/* binding */ loadMyBaseDashboardFailure),
/* harmony export */   loadMyBaseDashboardInternetFailure: () => (/* binding */ loadMyBaseDashboardInternetFailure),
/* harmony export */   loadMyBaseDashboardInternetSuccess: () => (/* binding */ loadMyBaseDashboardInternetSuccess),
/* harmony export */   loadMyBaseDashboardMobileFailure: () => (/* binding */ loadMyBaseDashboardMobileFailure),
/* harmony export */   loadMyBaseDashboardMobileSuccess: () => (/* binding */ loadMyBaseDashboardMobileSuccess),
/* harmony export */   loadMyBaseDashboardSuccess: () => (/* binding */ loadMyBaseDashboardSuccess),
/* harmony export */   loadServiceMomentsFailure: () => (/* binding */ loadServiceMomentsFailure),
/* harmony export */   loadServiceMomentsSuccess: () => (/* binding */ loadServiceMomentsSuccess),
/* harmony export */   setInternetLine: () => (/* binding */ setInternetLine),
/* harmony export */   setMobileMsisdn: () => (/* binding */ setMobileMsisdn)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

// Dashboard
const loadMyBaseDashboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard] loadMyBaseDashboard', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadMyBaseDashboardSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard] loadMyBaseDashboardSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMyBaseDashboardFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard] loadMyBaseDashboardFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Mobile
const loadMyBaseDashboardMobileSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile] loadMyBaseDashboardMobileSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setMobileMsisdn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile] setMobileMsisdn', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMyBaseDashboardMobileFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile] loadMyBaseDashboardMobileFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Line selector
const loadMobileLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile-lines] loadMobileLines', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadMobileLinesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile-lines] loadMobileLinesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMobileLinesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-mobile-lines] loadMobileLinesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Address selector
const loadInternetLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet-lines] loadInternetLines', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadInternetLinesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet-lines] loadInternetLinesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadInternetLinesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet-lines] loadInternetLinesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Internet
const setInternetLine = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet] setInternetLine', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMyBaseDashboardInternetSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet] loadMyBaseDashboardInternetSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadMyBaseDashboardInternetFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-internet] loadMyBaseDashboardInternetFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// DTV lines
const loadDtvLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-dtv-lines] loadDtvLines', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadDtvLinesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-dtv-lines] loadDtvLinesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadDtvLinesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard-dtv-lines] loadDtvLinesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Service moments
const loadServiceMomentsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard] loadServiceMomentsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadServiceMomentsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[mybase-dashboard] loadServiceMomentsFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 66447:
/*!*************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard.effects.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardEffects: () => (/* binding */ MyBaseDashboardEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_mybase_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mybase-dashboard.service */ 2071);
/* harmony import */ var _mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mybase-dashboard.actions */ 6221);
/* harmony import */ var _mybase_dashboard_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mybase-dashboard.facade */ 35382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class MyBaseDashboardEffects {
  actions$;
  facade;
  myBaseDashboardService;
  loadMyBaseDashboard$;
  loadMyBaseDashboardMobile$;
  loadMyBaseDashboardInternet$;
  loadMobileLines$;
  loadInternetLines$;
  loadDtvLines$;
  loadServiceMoments$;
  constructor(actions$, facade, myBaseDashboardService) {
    this.actions$ = actions$;
    this.facade = facade;
    this.myBaseDashboardService = myBaseDashboardService;
    // Dashboard
    this.loadMyBaseDashboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.myBaseDashboardService.loadMyBaseDashboard()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(myBaseDashboardObject => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardSuccess)({
      myBaseDashboardObject
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardFailure)({
      error
    }))))));
    // Mobile
    this.loadMyBaseDashboardMobile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.setMobileMsisdn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(() => this.facade.myBaseDashboardMobileSelectedMsisdn$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(selectedMsisdn => this.myBaseDashboardService.loadMyBaseDashboardMobile(selectedMsisdn?.msisdn)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(myBaseDashboardObject => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardMobileSuccess)({
      myBaseDashboardObject
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardMobileFailure)({
      error
    }))))));
    // Mobile lines
    this.loadMobileLines$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMobileLines), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.myBaseDashboardService.loadMobileLines()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(mobileLines => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMobileLinesSuccess)({
      mobileLines
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMobileLinesFailure)({
      error
    }))))));
    // Internet lines
    this.loadInternetLines$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadInternetLines), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.myBaseDashboardService.loadInternetLines()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(internetLines => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadInternetLinesSuccess)({
      internetLines
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadInternetLinesFailure)({
      error
    }))))));
    // Internet
    this.loadMyBaseDashboardInternet$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.setInternetLine), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(() => this.facade.myBaseDashboardInternetSelectedLine$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(selectedInternetLine => this.myBaseDashboardService.loadMyBaseDashboardInternet(selectedInternetLine?.productIdentifier)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(myBaseDashboardObject => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardInternetSuccess)({
      myBaseDashboardObject
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboardInternetFailure)({
      error
    }))))));
    // DTV lines
    this.loadDtvLines$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadDtvLines), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.myBaseDashboardService.loadDtvLines()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(myBaseDashboardObject => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadDtvLinesSuccess)({
      myBaseDashboardObject
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadDtvLinesFailure)({
      error
    }))))));
    // Service Moments
    this.loadServiceMoments$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadMyBaseDashboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.myBaseDashboardService.loadServiceMoments()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(serviceMoments => (0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceMomentsSuccess)({
      serviceMoments
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceMomentsFailure)({
      error
    }))))));
  }
  static ɵfac = function MyBaseDashboardEffects_Factory(t) {
    return new (t || MyBaseDashboardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_mybase_dashboard_facade__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardFacade), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_mybase_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: MyBaseDashboardEffects,
    factory: MyBaseDashboardEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35382:
/*!************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard.facade.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardFacade: () => (/* binding */ MyBaseDashboardFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mybase-dashboard.actions */ 6221);
/* harmony import */ var _mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mybase-dashboard.selectors */ 89241);





class MyBaseDashboardFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  // Dashboard Observables
  myBaseDashboardShowBilling$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardShowBilling);
  myBaseDashboardBillingAccounts$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardBillingAccounts);
  products$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardProducts);
  supportAssistance$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardSupportAssistance);
  myBaseDashboardLoading$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardLoading);
  myBaseDashboardShowMobileUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardShowMobileUsage);
  myBaseDashboardMobileUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileUsage);
  myBaseDashboardShowInternetUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardShowInternetUsage);
  myBaseDashboardInternetUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetUsage);
  myBaseDashboardShowHomeNetwork$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardShowHomeNetwork);
  myBaseDashboardBillingPending$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardBillingPending);
  myBaseDashboardMobileUsagePending$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileUsagePending);
  myBaseDashboardInternetUsagePending$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetUsagePending);
  myBaseDashboardHomeNetworkPending$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardHomeNetworkPending);
  myBaseDashboardError$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardError);
  // Mobile Observables
  myBaseDashboardMobileMobileUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileMobileUsage);
  myBaseDashboardMobileNavigationCards$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileNavigationCards);
  myBaseDashboardMobileServices$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileServices);
  myBaseDashboardMobileSelectedMsisdn$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileMsisdn);
  myBaseDashboardMobileError$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileError);
  myBaseDashboardMobileLoading$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardMobileLoading);
  mobileLines$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMobileLines);
  // Internet Observables
  myBaseDashboardInternetInternetUsage$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetInternetUsage);
  myBaseDashboardInternetError$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetError);
  myBaseDashboardInternetLoading$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetLoading);
  myBaseDashboardInternetSelectedLine$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetLine);
  myBaseDashboardInternetGeneralCards$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetGeneralCards);
  myBaseDashboardInternetShowHomeNetwork$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetShowHomeNetwork);
  myBaseDashboardInternetServices$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardInternetServices);
  internetLines$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectInternetLines);
  // DTV observables
  myBaseDashboardDtvError$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardDtvError);
  myBaseDashboardDtvLoading$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardDtvLoading);
  myBaseDashboardDtvIdentifier$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardDtvIdentifier);
  myBaseDashboardDtvSimpleCards$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardDtvSimpleCards);
  myBaseDashboardDtvServices$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMyBaseDashboardDtvServices);
  dtvLines$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectDtvLines);
  // Service moments
  myBaseServiceMoments$ = this.store.select(_mybase_dashboard_selectors__WEBPACK_IMPORTED_MODULE_3__.selectServiceMoments);
  loadMyBaseDashboard() {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboard)());
  }
  setMobileMsisdn(selectedMsisdn) {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.setMobileMsisdn)({
      selectedMsisdn
    }));
  }
  loadMobileLines() {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMobileLines)());
  }
  loadInternetLines() {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadInternetLines)());
  }
  setInterLine(selectedInternetLine) {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.setInternetLine)({
      selectedInternetLine
    }));
  }
  loadDtvLines() {
    this.store.dispatch((0,_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadDtvLines)());
  }
  static ɵfac = function MyBaseDashboardFacade_Factory(t) {
    return new (t || MyBaseDashboardFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MyBaseDashboardFacade,
    factory: MyBaseDashboardFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 52154:
/*!*************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard.reducer.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MYBASE_FEATURE_KEY: () => (/* binding */ MYBASE_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   myBaseDashboardFeature: () => (/* binding */ myBaseDashboardFeature),
/* harmony export */   myBaseDashboardReducer: () => (/* binding */ myBaseDashboardReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/mybase-dashboard.interface */ 49690);
/* harmony import */ var _mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mybase-dashboard.actions */ 6221);



const MYBASE_FEATURE_KEY = 'mybase';
const initialState = {
  dashboard: {
    billing: {
      showCard: false,
      pending: false,
      billingAccounts: []
    },
    mobileUsage: {
      showCard: false,
      pending: false,
      products: []
    },
    internetUsage: {
      showCard: false,
      pending: false,
      products: []
    },
    products: {
      showCard: false,
      mobile: {
        pending: false,
        products: []
      },
      internet: {
        pending: false,
        products: []
      },
      dtv: {
        pending: false,
        products: []
      }
    },
    actions: [],
    homeNetwork: {
      showCard: false,
      pending: false
    },
    loading: false,
    loadError: undefined
  },
  mobile: {
    actions: [],
    mobileUsage: {
      showCard: false,
      postpaid: {
        daysUntilRenewal: 0,
        data: {
          remaining: 0,
          total: 0,
          carryOver: 0
        },
        outOfBundleLimit: 0,
        status: _entities_mybase_dashboard_interface__WEBPACK_IMPORTED_MODULE_1__.UsageStatusEnum.OK
      }
    },
    loading: false,
    lines: [],
    selectedMsisdn: undefined,
    loadError: undefined
  },
  internet: {
    lines: [],
    usage: {
      showCard: false
    },
    actions: [],
    homeNetwork: {
      showCard: false,
      pending: false
    },
    selectedInternetLine: undefined,
    loading: false,
    loadError: undefined
  },
  dtv: {
    loading: false,
    loadError: undefined,
    productIdentifier: undefined,
    actions: [],
    lines: []
  },
  serviceMoments: {
    loadError: undefined,
    loading: false,
    events: []
  }
};
const myBaseDashboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState,
// Dashboard
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboard, state => ({
  ...state,
  dashboard: {
    ...state.dashboard,
    loading: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardSuccess, (state, action) => ({
  ...state,
  dashboard: {
    ...state.dashboard,
    ...action.myBaseDashboardObject,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardFailure, (state, action) => ({
  ...state,
  dashboard: {
    ...state.dashboard,
    loading: false,
    loadError: action.error
  }
})),
// Mobile
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardMobileSuccess, (state, action) => ({
  ...state,
  mobile: {
    ...state.mobile,
    ...action.myBaseDashboardObject,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardMobileFailure, (state, action) => ({
  ...state,
  mobile: {
    ...state.mobile,
    loading: false,
    loadError: action.error
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.setMobileMsisdn, (state, action) => ({
  ...state,
  mobile: {
    ...state.mobile,
    selectedMsisdn: {
      ...action.selectedMsisdn
    },
    loading: true
  }
})),
// Mobile lines
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMobileLines, state => ({
  ...state,
  mobile: {
    ...state.mobile,
    loading: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMobileLinesSuccess, (state, action) => ({
  ...state,
  mobile: {
    ...state.mobile,
    lines: action.mobileLines,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMobileLinesFailure, (state, action) => ({
  ...state,
  mobile: {
    ...state.mobile,
    loading: false,
    loadError: action.error
  }
})),
// Internet lines
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadInternetLines, state => ({
  ...state,
  internet: {
    ...state.internet,
    loading: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadInternetLinesSuccess, (state, action) => ({
  ...state,
  internet: {
    ...state.internet,
    lines: action.internetLines,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadInternetLinesFailure, (state, action) => ({
  ...state,
  internet: {
    ...state.internet,
    loading: false,
    loadError: action.error
  }
})),
// Internet
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardInternetSuccess, (state, action) => ({
  ...state,
  internet: {
    ...state.internet,
    ...action.myBaseDashboardObject,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadMyBaseDashboardInternetFailure, (state, action) => ({
  ...state,
  internet: {
    ...state.internet,
    loading: false,
    loadError: action.error
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.setInternetLine, (state, action) => ({
  ...state,
  internet: {
    ...state.internet,
    selectedInternetLine: {
      ...action.selectedInternetLine
    },
    loading: true
  }
})),
// DTV lines
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadDtvLines, state => ({
  ...state,
  dtv: {
    ...state.dtv,
    loading: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadDtvLinesSuccess, (state, action) => ({
  ...state,
  dtv: {
    ...state.dtv,
    ...action.myBaseDashboardObject,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadDtvLinesFailure, (state, action) => ({
  ...state,
  dtv: {
    ...state.dtv,
    loading: false,
    loadError: action.error
  }
})),
// Service Moments
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceMomentsSuccess, (state, action) => ({
  ...state,
  serviceMoments: {
    ...state.serviceMoments,
    events: action.serviceMoments,
    loading: false,
    loadError: undefined
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_mybase_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceMomentsFailure, (state, action) => ({
  ...state,
  serviceMoments: {
    ...state.serviceMoments,
    loading: false,
    loadError: action.error
  }
})));
const myBaseDashboardFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: MYBASE_FEATURE_KEY,
  reducer: myBaseDashboardReducer
});

/***/ }),

/***/ 89241:
/*!***************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/+state/mybase-dashboard.selectors.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectDtvLines: () => (/* binding */ selectDtvLines),
/* harmony export */   selectInternetLines: () => (/* binding */ selectInternetLines),
/* harmony export */   selectMobileLines: () => (/* binding */ selectMobileLines),
/* harmony export */   selectMyBaseDashboardBillingAccounts: () => (/* binding */ selectMyBaseDashboardBillingAccounts),
/* harmony export */   selectMyBaseDashboardBillingPending: () => (/* binding */ selectMyBaseDashboardBillingPending),
/* harmony export */   selectMyBaseDashboardDtvError: () => (/* binding */ selectMyBaseDashboardDtvError),
/* harmony export */   selectMyBaseDashboardDtvIdentifier: () => (/* binding */ selectMyBaseDashboardDtvIdentifier),
/* harmony export */   selectMyBaseDashboardDtvLoading: () => (/* binding */ selectMyBaseDashboardDtvLoading),
/* harmony export */   selectMyBaseDashboardDtvServices: () => (/* binding */ selectMyBaseDashboardDtvServices),
/* harmony export */   selectMyBaseDashboardDtvSimpleCards: () => (/* binding */ selectMyBaseDashboardDtvSimpleCards),
/* harmony export */   selectMyBaseDashboardError: () => (/* binding */ selectMyBaseDashboardError),
/* harmony export */   selectMyBaseDashboardFeature: () => (/* binding */ selectMyBaseDashboardFeature),
/* harmony export */   selectMyBaseDashboardHomeNetworkPending: () => (/* binding */ selectMyBaseDashboardHomeNetworkPending),
/* harmony export */   selectMyBaseDashboardInternetError: () => (/* binding */ selectMyBaseDashboardInternetError),
/* harmony export */   selectMyBaseDashboardInternetGeneralCards: () => (/* binding */ selectMyBaseDashboardInternetGeneralCards),
/* harmony export */   selectMyBaseDashboardInternetInternetUsage: () => (/* binding */ selectMyBaseDashboardInternetInternetUsage),
/* harmony export */   selectMyBaseDashboardInternetLine: () => (/* binding */ selectMyBaseDashboardInternetLine),
/* harmony export */   selectMyBaseDashboardInternetLoading: () => (/* binding */ selectMyBaseDashboardInternetLoading),
/* harmony export */   selectMyBaseDashboardInternetServices: () => (/* binding */ selectMyBaseDashboardInternetServices),
/* harmony export */   selectMyBaseDashboardInternetShowHomeNetwork: () => (/* binding */ selectMyBaseDashboardInternetShowHomeNetwork),
/* harmony export */   selectMyBaseDashboardInternetUsage: () => (/* binding */ selectMyBaseDashboardInternetUsage),
/* harmony export */   selectMyBaseDashboardInternetUsagePending: () => (/* binding */ selectMyBaseDashboardInternetUsagePending),
/* harmony export */   selectMyBaseDashboardLoading: () => (/* binding */ selectMyBaseDashboardLoading),
/* harmony export */   selectMyBaseDashboardMobileError: () => (/* binding */ selectMyBaseDashboardMobileError),
/* harmony export */   selectMyBaseDashboardMobileLoading: () => (/* binding */ selectMyBaseDashboardMobileLoading),
/* harmony export */   selectMyBaseDashboardMobileMobileUsage: () => (/* binding */ selectMyBaseDashboardMobileMobileUsage),
/* harmony export */   selectMyBaseDashboardMobileMsisdn: () => (/* binding */ selectMyBaseDashboardMobileMsisdn),
/* harmony export */   selectMyBaseDashboardMobileNavigationCards: () => (/* binding */ selectMyBaseDashboardMobileNavigationCards),
/* harmony export */   selectMyBaseDashboardMobileServices: () => (/* binding */ selectMyBaseDashboardMobileServices),
/* harmony export */   selectMyBaseDashboardMobileUsage: () => (/* binding */ selectMyBaseDashboardMobileUsage),
/* harmony export */   selectMyBaseDashboardMobileUsagePending: () => (/* binding */ selectMyBaseDashboardMobileUsagePending),
/* harmony export */   selectMyBaseDashboardProducts: () => (/* binding */ selectMyBaseDashboardProducts),
/* harmony export */   selectMyBaseDashboardShowBilling: () => (/* binding */ selectMyBaseDashboardShowBilling),
/* harmony export */   selectMyBaseDashboardShowHomeNetwork: () => (/* binding */ selectMyBaseDashboardShowHomeNetwork),
/* harmony export */   selectMyBaseDashboardShowInternetUsage: () => (/* binding */ selectMyBaseDashboardShowInternetUsage),
/* harmony export */   selectMyBaseDashboardShowMobileUsage: () => (/* binding */ selectMyBaseDashboardShowMobileUsage),
/* harmony export */   selectMyBaseDashboardSupportAssistance: () => (/* binding */ selectMyBaseDashboardSupportAssistance),
/* harmony export */   selectServiceMoments: () => (/* binding */ selectServiceMoments)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mybase_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mybase-dashboard.reducer */ 52154);


const selectMyBaseDashboardFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_mybase_dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__.MYBASE_FEATURE_KEY);
// Dashboard (level 1)
const selectMyBaseDashboardShowBilling = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.billing.showCard);
const selectMyBaseDashboardBillingPending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.billing.pending);
const selectMyBaseDashboardBillingAccounts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.billing.billingAccounts);
const selectMyBaseDashboardProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.products);
const selectMyBaseDashboardSupportAssistance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.actions);
const selectMyBaseDashboardShowMobileUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.mobileUsage.showCard);
const selectMyBaseDashboardMobileUsagePending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.mobileUsage.pending);
const selectMyBaseDashboardMobileUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.mobileUsage.products);
const selectMyBaseDashboardShowInternetUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.internetUsage.showCard);
const selectMyBaseDashboardInternetUsagePending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.internetUsage.pending);
const selectMyBaseDashboardInternetUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.internetUsage.products);
const selectMyBaseDashboardLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.loading);
const selectMyBaseDashboardError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.loadError);
const selectMyBaseDashboardShowHomeNetwork = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.homeNetwork.showCard);
const selectMyBaseDashboardHomeNetworkPending = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dashboard.homeNetwork.pending);
// Mobile (level 2)
const selectMyBaseDashboardMobileMobileUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.mobileUsage);
const selectMyBaseDashboardMobileNavigationCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.actions);
const selectMyBaseDashboardMobileServices = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.actions);
const selectMyBaseDashboardMobileLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.loading);
const selectMyBaseDashboardMobileError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.loadError);
const selectMyBaseDashboardMobileMsisdn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.selectedMsisdn);
const selectMobileLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.mobile.lines);
// Internet (level 2)
const selectMyBaseDashboardInternetInternetUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.usage);
const selectMyBaseDashboardInternetLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.loading);
const selectMyBaseDashboardInternetError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.loadError);
const selectMyBaseDashboardInternetLine = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.selectedInternetLine);
const selectMyBaseDashboardInternetGeneralCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.actions);
const selectMyBaseDashboardInternetServices = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.actions);
const selectMyBaseDashboardInternetShowHomeNetwork = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.homeNetwork.showCard);
const selectInternetLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.internet.lines);
// DTV (level 2)
const selectMyBaseDashboardDtvLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv.loading);
const selectMyBaseDashboardDtvError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv.loadError);
const selectMyBaseDashboardDtvIdentifier = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv.productIdentifier);
const selectMyBaseDashboardDtvSimpleCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv.actions);
const selectMyBaseDashboardDtvServices = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv.actions);
const selectDtvLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.dtv);
// Service Moments
const selectServiceMoments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectMyBaseDashboardFeature, state => state.serviceMoments.events);

/***/ }),

/***/ 11736:
/*!***************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/entities/mybase-dashboard-datalayer.interface.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseAnalyticsEventMobileUsage: () => (/* binding */ MyBaseAnalyticsEventMobileUsage),
/* harmony export */   MyBaseDashboardDatalayerAttributeData: () => (/* binding */ MyBaseDashboardDatalayerAttributeData),
/* harmony export */   MyBaseDashboardDatalayerAttributeGroup: () => (/* binding */ MyBaseDashboardDatalayerAttributeGroup),
/* harmony export */   MyBaseDashboardDatalayerAttributeName: () => (/* binding */ MyBaseDashboardDatalayerAttributeName),
/* harmony export */   MyBaseDashboardDatalayerEventName: () => (/* binding */ MyBaseDashboardDatalayerEventName),
/* harmony export */   MyBaseDashboardDatalayerEventType: () => (/* binding */ MyBaseDashboardDatalayerEventType)
/* harmony export */ });
var MyBaseAnalyticsEventMobileUsage;
(function (MyBaseAnalyticsEventMobileUsage) {
  MyBaseAnalyticsEventMobileUsage["BASED_ON_YOU"] = "mobile usage based on you";
  MyBaseAnalyticsEventMobileUsage["BASE_ZERO"] = "mobile usage base zero";
  MyBaseAnalyticsEventMobileUsage["UNLIMITED"] = "mobile usage unlimited";
  MyBaseAnalyticsEventMobileUsage["PREPAID"] = "mobile usage prepaid";
  MyBaseAnalyticsEventMobileUsage["POSTPAID"] = "mobile usage postpaid";
})(MyBaseAnalyticsEventMobileUsage || (MyBaseAnalyticsEventMobileUsage = {}));
var MyBaseDashboardDatalayerEventName;
(function (MyBaseDashboardDatalayerEventName) {
  MyBaseDashboardDatalayerEventName["STATUS_CARD_VIEWED"] = "status card viewed";
  MyBaseDashboardDatalayerEventName["STATUS_CARD_CLICKED"] = "status card clicked";
  MyBaseDashboardDatalayerEventName["BUTTON_CLICKED"] = "button clicked";
  MyBaseDashboardDatalayerEventName["CARD_CLICKED"] = "card clicked";
})(MyBaseDashboardDatalayerEventName || (MyBaseDashboardDatalayerEventName = {}));
var MyBaseDashboardDatalayerEventType;
(function (MyBaseDashboardDatalayerEventType) {
  MyBaseDashboardDatalayerEventType["IMPRESSION"] = "impression";
  MyBaseDashboardDatalayerEventType["CLICK"] = "click";
  MyBaseDashboardDatalayerEventType["CLICK_CARD"] = "click-card";
})(MyBaseDashboardDatalayerEventType || (MyBaseDashboardDatalayerEventType = {}));
var MyBaseDashboardDatalayerAttributeName;
(function (MyBaseDashboardDatalayerAttributeName) {
  MyBaseDashboardDatalayerAttributeName["BILLING"] = "billing";
  MyBaseDashboardDatalayerAttributeName["MOBILE_USAGE"] = "mobile usage";
  MyBaseDashboardDatalayerAttributeName["INTERNET_USAGE"] = "internet usage";
  MyBaseDashboardDatalayerAttributeName["INTERNET_USAGE_LIMITED"] = "internet usage limited";
  MyBaseDashboardDatalayerAttributeName["INTERNET_USAGE_UNLIMITED"] = "internet usage unlimited";
  MyBaseDashboardDatalayerAttributeName["HOME_NETWORK"] = "home network";
  MyBaseDashboardDatalayerAttributeName["SERVICE_MOMENT"] = "service moment";
  MyBaseDashboardDatalayerAttributeName["SHARE_HOME_NETWORK"] = "share home network";
  MyBaseDashboardDatalayerAttributeName["MANAGE_INTERNET"] = "manage internet";
  MyBaseDashboardDatalayerAttributeName["MANAGE_MOBILE"] = "manage mobile";
  MyBaseDashboardDatalayerAttributeName["MANAGE_DTV"] = "manage tv";
  MyBaseDashboardDatalayerAttributeName["SUPPORT"] = "support";
  MyBaseDashboardDatalayerAttributeName["CHANGE_LINE"] = "change line";
  MyBaseDashboardDatalayerAttributeName["CHANGE_ADDRESS"] = "change address";
})(MyBaseDashboardDatalayerAttributeName || (MyBaseDashboardDatalayerAttributeName = {}));
var MyBaseDashboardDatalayerAttributeData;
(function (MyBaseDashboardDatalayerAttributeData) {
  MyBaseDashboardDatalayerAttributeData["ALL_GOOD"] = "all good";
  MyBaseDashboardDatalayerAttributeData["OUTSTANDING_BILL"] = "outstanding bill";
  MyBaseDashboardDatalayerAttributeData["PAYMENT_OVERDUE"] = "payment overdue";
  MyBaseDashboardDatalayerAttributeData["REFUND_ISSUED"] = "refund issued";
  MyBaseDashboardDatalayerAttributeData["USAGE_LIMIT_WARNING"] = "usage limit warning";
  MyBaseDashboardDatalayerAttributeData["USAGE_LIMIT_REACHED"] = "usage limit reached";
  MyBaseDashboardDatalayerAttributeData["ACTIVATE_SIM"] = "activate your SIM card";
  MyBaseDashboardDatalayerAttributeData["PRODUCTS_ACTIVATION"] = "products waiting activation";
  MyBaseDashboardDatalayerAttributeData["PLANNED_WORKS"] = "planned works";
  MyBaseDashboardDatalayerAttributeData["INSTALLATION_APPOINTMENT"] = "installation appointment";
  MyBaseDashboardDatalayerAttributeData["EASY_SWITCH"] = "easy switch";
  MyBaseDashboardDatalayerAttributeData["BEST_TARIFF"] = "best tariff";
  MyBaseDashboardDatalayerAttributeData["SUPPORT"] = "support";
  MyBaseDashboardDatalayerAttributeData["WATCH_TV"] = "watch tv";
})(MyBaseDashboardDatalayerAttributeData || (MyBaseDashboardDatalayerAttributeData = {}));
var MyBaseDashboardDatalayerAttributeGroup;
(function (MyBaseDashboardDatalayerAttributeGroup) {
  MyBaseDashboardDatalayerAttributeGroup["PAY_NOW_BUTTON"] = "pay now button";
  MyBaseDashboardDatalayerAttributeGroup["VIEW_BILLS_BUTTON"] = "view bills button";
  MyBaseDashboardDatalayerAttributeGroup["VIEW_DETAILS_LINK"] = "link to view details";
  MyBaseDashboardDatalayerAttributeGroup["USAGE_DETAILS_LINK"] = "link to usage details";
  MyBaseDashboardDatalayerAttributeGroup["USAGE_LIMIT_REACHED"] = "usage limit reached";
  MyBaseDashboardDatalayerAttributeGroup["ACTIVATE"] = "activate";
  MyBaseDashboardDatalayerAttributeGroup["VIEW_DETAILS"] = "view details";
})(MyBaseDashboardDatalayerAttributeGroup || (MyBaseDashboardDatalayerAttributeGroup = {}));

/***/ }),

/***/ 49690:
/*!*****************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/entities/mybase-dashboard.interface.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingPaymentMethod: () => (/* binding */ BillingPaymentMethod),
/* harmony export */   NavigationCardType: () => (/* binding */ NavigationCardType),
/* harmony export */   ServiceMomentsType: () => (/* binding */ ServiceMomentsType),
/* harmony export */   ServiceType: () => (/* binding */ ServiceType),
/* harmony export */   SubType: () => (/* binding */ SubType),
/* harmony export */   SupportAssistanceType: () => (/* binding */ SupportAssistanceType),
/* harmony export */   UsageStatusEnum: () => (/* binding */ UsageStatusEnum)
/* harmony export */ });
var BillingPaymentMethod;
(function (BillingPaymentMethod) {
  BillingPaymentMethod["DIRECT_DEBIT"] = "DIRECT_DEBIT";
  BillingPaymentMethod["MANUAL"] = "MANUAL";
})(BillingPaymentMethod || (BillingPaymentMethod = {}));
var UsageStatusEnum;
(function (UsageStatusEnum) {
  UsageStatusEnum["OK"] = "OK";
  UsageStatusEnum["LIMIT_ALMOST_REACHED"] = "LIMIT_ALMOST_REACHED";
  UsageStatusEnum["LIMIT_EXCEEDED_SLOW_SPEED"] = "LIMIT_EXCEEDED_SLOW_SPEED";
  UsageStatusEnum["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
})(UsageStatusEnum || (UsageStatusEnum = {}));
var SupportAssistanceType;
(function (SupportAssistanceType) {
  SupportAssistanceType["WATCH_TV"] = "watch-tv";
  SupportAssistanceType["BEST_TARIFF"] = "best-tariff";
  SupportAssistanceType["EASY_SWITCH"] = "easy-switch";
  SupportAssistanceType["SUPPORT"] = "support";
})(SupportAssistanceType || (SupportAssistanceType = {}));
var NavigationCardType;
(function (NavigationCardType) {
  NavigationCardType["MOBILE_USAGE_NOTIFICATIONS"] = "mobile-usage-notifications";
  NavigationCardType["VOICEMAIL"] = "voicemail";
  NavigationCardType["SIM_MANAGEMENT"] = "sim-management";
  NavigationCardType["PRODUCT_OVERVIEW"] = "product-overview";
  NavigationCardType["TOPUP"] = "topup";
  NavigationCardType["TOPUP_HISTORY"] = "topup-history";
  NavigationCardType["USAGE_DETAILS"] = "usage-details";
  NavigationCardType["USAGE_LIMITS"] = "usage-limits";
  NavigationCardType["BARRINGS"] = "barrings";
  NavigationCardType["INTERNET_USAGE_NOTIFICATIONS"] = "internet-notifications";
  NavigationCardType["SPEEDTEST"] = "speedtest";
  NavigationCardType["MANAGE_YOUR_PRODUCT"] = "manage-your-product";
  NavigationCardType["MY_DEVICE"] = "my-device";
  NavigationCardType["DEVICES_USING_YOUR_NETWORK"] = "devices-using-your-network";
  NavigationCardType["MANAGE_YOUR_DEVICE"] = "manage-your-device";
  NavigationCardType["WATCH_TV_ONLINE"] = "watch-tv-online";
  NavigationCardType["MANAGE_CONTENT_PACKS"] = "manage-content-packs";
  NavigationCardType["ADD_TV_BOX"] = "add-remove-tv-box";
})(NavigationCardType || (NavigationCardType = {}));
var ServiceType;
(function (ServiceType) {
  ServiceType["PAYBYMOBILE"] = "paybymobile";
  ServiceType["BUY_HARDWARE_DISCOUNT"] = "buy-hardware-discount";
  ServiceType["EASY_SWITCH"] = "easy-switch";
  ServiceType["BEST_TARIFF"] = "best-tariff";
  ServiceType["RETURN_DEVICE"] = "return-device";
})(ServiceType || (ServiceType = {}));
var ServiceMomentsType;
(function (ServiceMomentsType) {
  ServiceMomentsType["SIM_ACTIVATION"] = "SIM_ACTIVATION";
  ServiceMomentsType["ESIM_ACTIVATION"] = "ESIM_ACTIVATION";
  ServiceMomentsType["APPOINTMENT"] = "APPOINTMENT";
})(ServiceMomentsType || (ServiceMomentsType = {}));
var SubType;
(function (SubType) {
  SubType["SIM_ACTIVATION"] = "sim-activation";
  SubType["ESIM_ACTIVATION"] = "esim-activation";
  SubType["PLANNED_APPOINTMENT"] = "planned-appointment";
  SubType["UNPLANNED_APPOINTMENT"] = "unplanned-appointment";
})(SubType || (SubType = {}));

/***/ }),

/***/ 27349:
/*!*************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/services/mybase-dashboard-datalayer.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardDatalayerService: () => (/* binding */ MyBaseDashboardDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class MyBaseDashboardDatalayerService {
  dataLayerService;
  static MESSAGE_GROUP = 'mybase-dashboard';
  static CATEGORY_GENERAL = 'general';
  static ATTRIBUTES_ITEM_NAME = 'itemName';
  static ATTRIBUTES_ITEM_DATA = 'itemData';
  static ATTRIBUTES_ITEM_GROUP = 'itemGroup';
  static ATTRIBUTES_DESTINATION_URL = 'destinationURL';
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  sendDataLayerEventWithAttributes(event) {
    const attributes = {};
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_NAME] = event.attributeName;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_DATA] = event.attributeData;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_ITEM_GROUP] = event.attributeGroup;
    attributes[MyBaseDashboardDatalayerService.ATTRIBUTES_DESTINATION_URL] = event.destinationUrl;
    const category = this.dataLayerService.createCategory(MyBaseDashboardDatalayerService.CATEGORY_GENERAL, MyBaseDashboardDatalayerService.MESSAGE_GROUP);
    const eventInfo = this.dataLayerService.createEventInfo(event.eventName, event.eventType, [MyBaseDashboardDatalayerService.MESSAGE_GROUP]);
    this.dataLayerService.addEvent(eventInfo, attributes, category);
  }
  initDataLayer() {
    this.dataLayerService.init();
  }
  static ɵfac = function MyBaseDashboardDatalayerService_Factory(t) {
    return new (t || MyBaseDashboardDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MyBaseDashboardDatalayerService,
    factory: MyBaseDashboardDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2071:
/*!***************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/services/mybase-dashboard.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardService: () => (/* binding */ MyBaseDashboardService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class MyBaseDashboardService {
  ocapiService;
  mock_reply = {};
  static MESSAGE_GROUP = 'mybase-dashboard';
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  loadMyBaseDashboard() {
    const endpoint = '/public/api/mybase-dashboard-service/v1/dashboard';
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadMyBaseDashboardMobile(msisdn) {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/mobile/${msisdn}`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadMobileLines() {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/mobile/lines`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadInternetLines() {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/internet/addresses`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadMyBaseDashboardInternet(productIdentifier) {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/internet/${productIdentifier}`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadDtvLines() {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/tv`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  loadServiceMoments() {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/service-moments?limit=2`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(MyBaseDashboardService.MESSAGE_GROUP, endpoint));
  }
  static ɵfac = function MyBaseDashboardService_Factory(t) {
    return new (t || MyBaseDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MyBaseDashboardService,
    factory: MyBaseDashboardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 63955:
/*!******************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/data-access/src/lib/util/directories/image-src-interceptor.directive.ts ***!
  \******************************************************************************************************************/
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
    selectors: [["", "appMybaseDashboardImageSrcInterceptor", ""]],
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
//# sourceMappingURL=libs_base-customerzone_dashboard_data-access_src_index_ts-_33051.js.map