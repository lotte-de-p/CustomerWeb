(self["webpackChunkcare_service_cases_mfe"] = self["webpackChunkcare_service_cases_mfe"] || []).push([["libs_engagement_care-service-cases_service-case_data-access_src_index_ts-_f1571"],{

/***/ 62962:
/*!**********************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseFacade),
/* harmony export */   ServiceCaseNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseNgrxModule),
/* harmony export */   ServiceCaseService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseService),
/* harmony export */   ServiceCasesConstants: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCasesConstants),
/* harmony export */   ServiceCasesDatalayerService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCasesDatalayerService),
/* harmony export */   Status: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Status),
/* harmony export */   Type: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Type),
/* harmony export */   provideServiceCaseDomain: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideServiceCaseDomain)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 53810);


/***/ }),

/***/ 75297:
/*!**********************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case-datalayer.effects.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseDatalayerEffects: () => (/* binding */ ServiceCaseDatalayerEffects)
/* harmony export */ });
/* harmony import */ var _services_service_cases_datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service-cases-datalayer.service */ 22874);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_case_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-case.actions */ 39948);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/service-cases.constants */ 52067);
/* harmony import */ var _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entitities/service-case.interface */ 78561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









class ServiceCaseDatalayerEffects {
  actions$;
  serviceCasesDatalayerService;
  serviceCasesLoaded$;
  serviceCaseSelected$;
  toggleHistory$;
  constructor(actions$, serviceCasesDatalayerService) {
    this.actions$ = actions$;
    this.serviceCasesDatalayerService = serviceCasesDatalayerService;
    this.serviceCasesLoaded$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceCasesSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.combineLatestWith)([this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.serviceCasesPageView))]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(([{
      serviceCases
    }]) => {
      if (serviceCases.length === 0) {
        this.serviceCasesDatalayerService.addPageEvent();
        this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.NO_SERVICE_CASES_EVENT_NAME, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION);
      } else {
        const openCase = serviceCases.find(serviceCase => serviceCase.status === _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_5__.Status.OPEN);
        if (openCase !== undefined) {
          this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION, openCase.status, openCase.type);
        }
      }
    })), {
      dispatch: false
    });
    this.serviceCaseSelected$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.selectServiceCase), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      selectedServiceCase
    }) => {
      this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION, selectedServiceCase.status, selectedServiceCase.type);
    })), {
      dispatch: false
    });
    this.toggleHistory$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.toggleHistoryAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.SERVICE_CASE_NAVIGATION_CLICK_EVENT_NAME, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.EVENT_INFO_TYPE_CLICK, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_4__.ServiceCasesConstants.SERVICE_CASE_SHOW_HISTORY, '');
    })), {
      dispatch: false
    });
  }
  static ɵfac = function ServiceCaseDatalayerEffects_Factory(t) {
    return new (t || ServiceCaseDatalayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_service_cases_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.ServiceCasesDatalayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ServiceCaseDatalayerEffects,
    factory: ServiceCaseDatalayerEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16918:
/*!****************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case-ngrx.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseNgrxModule: () => (/* binding */ ServiceCaseNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_case_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-case.reducers */ 6320);
/* harmony import */ var _service_case_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-case.effects */ 93907);
/* harmony import */ var _service_case_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-case-datalayer.effects */ 75297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ServiceCaseNgrxModule {
  static ɵfac = function ServiceCaseNgrxModule_Factory(t) {
    return new (t || ServiceCaseNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ServiceCaseNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_service_case_effects__WEBPACK_IMPORTED_MODULE_3__.ServiceCaseEffects, _service_case_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__.ServiceCaseDatalayerEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_service_case_reducers__WEBPACK_IMPORTED_MODULE_2__.serviceCaseFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ServiceCaseNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 39948:
/*!************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case.actions.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadServiceCases: () => (/* binding */ loadServiceCases),
/* harmony export */   loadServiceCasesFailure: () => (/* binding */ loadServiceCasesFailure),
/* harmony export */   loadServiceCasesSuccess: () => (/* binding */ loadServiceCasesSuccess),
/* harmony export */   selectServiceCase: () => (/* binding */ selectServiceCase),
/* harmony export */   serviceCasesPageView: () => (/* binding */ serviceCasesPageView),
/* harmony export */   toggleHistoryAction: () => (/* binding */ toggleHistoryAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const loadServiceCases = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] loadServiceCases', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const serviceCasesPageView = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] serviceCasesPageView', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const loadServiceCasesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] loadServiceCasesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadServiceCasesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] loadServiceCasesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectServiceCase = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] selectServiceCase', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleHistoryAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[service-case] toggleHistory', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 93907:
/*!************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case.effects.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseEffects: () => (/* binding */ ServiceCaseEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_service_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service-case.service */ 72117);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_case_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-case.actions */ 39948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ServiceCaseEffects {
  actions$;
  serviceCaseService;
  loadServiceCases$;
  constructor(actions$, serviceCaseService) {
    this.actions$ = actions$;
    this.serviceCaseService = serviceCaseService;
    this.loadServiceCases$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceCases), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.serviceCaseService.load()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(serviceCases => (0,_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceCasesSuccess)({
      serviceCases
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)((0,_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceCasesFailure)({
      error
    }))))));
  }
  static ɵfac = function ServiceCaseEffects_Factory(t) {
    return new (t || ServiceCaseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_service_case_service__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ServiceCaseEffects,
    factory: ServiceCaseEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6320:
/*!*************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case.reducers.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SERVICE_CASE_FEATURE_KEY: () => (/* binding */ SERVICE_CASE_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   serviceCaseFeature: () => (/* binding */ serviceCaseFeature)
/* harmony export */ });
/* harmony import */ var _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entitities/service-case.interface */ 78561);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_case_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-case.actions */ 39948);



const SERVICE_CASE_FEATURE_KEY = 'service-case';
const initialState = {
  serviceCases: [],
  selectedServiceCase: undefined,
  loading: false,
  loadError: undefined
};
const getOpenCase = serviceCases => serviceCases.find(serviceCase => serviceCase.status === _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_0__.Status.OPEN);
const serviceCaseFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: SERVICE_CASE_FEATURE_KEY,
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceCases, state => ({
    ...state,
    loading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceCasesSuccess, (state, action) => ({
    ...state,
    selectedServiceCase: getOpenCase(action.serviceCases),
    serviceCases: action.serviceCases,
    loading: false,
    loadError: undefined
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.selectServiceCase, (state, action) => ({
    ...state,
    selectedServiceCase: action.selectedServiceCase
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_service_case_actions__WEBPACK_IMPORTED_MODULE_2__.loadServiceCasesFailure, (state, action) => ({
    ...state,
    loading: false,
    loadError: action.error
  })))
});

/***/ }),

/***/ 18437:
/*!**************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/+state/service-case.selectors.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectClosedServiceCases: () => (/* binding */ selectClosedServiceCases),
/* harmony export */   selectLoadError: () => (/* binding */ selectLoadError),
/* harmony export */   selectLoading: () => (/* binding */ selectLoading),
/* harmony export */   selectOpenServiceCases: () => (/* binding */ selectOpenServiceCases),
/* harmony export */   selectSelectedServiceCase: () => (/* binding */ selectSelectedServiceCase),
/* harmony export */   selectServiceCaseFeature: () => (/* binding */ selectServiceCaseFeature),
/* harmony export */   selectServiceCases: () => (/* binding */ selectServiceCases)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_case_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-case.reducers */ 6320);
/* harmony import */ var _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entitities/service-case.interface */ 78561);



const selectServiceCaseFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_service_case_reducers__WEBPACK_IMPORTED_MODULE_1__.SERVICE_CASE_FEATURE_KEY);
const selectServiceCases = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.serviceCases);
const selectOpenServiceCases = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.serviceCases.filter(serviceCase => serviceCase.status === _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__.Status.OPEN));
const selectClosedServiceCases = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.serviceCases.filter(serviceCase => serviceCase.status === _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__.Status.RESOLVED));
const selectSelectedServiceCase = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.selectedServiceCase);
const selectLoadError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.loadError);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectServiceCaseFeature, state => state.loading);

/***/ }),

/***/ 52067:
/*!******************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/constants/service-cases.constants.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCasesConstants: () => (/* binding */ ServiceCasesConstants)
/* harmony export */ });
class ServiceCasesConstants {
  static MESSAGE_GROUP = 'service-cases';
  static STEP_SERVICE_CASES = 'service-cases';
  static INTENT_VIEW_SERVICE_CASES = 'view-service-cases';
  static CATEGORY_CARE = 'care';
  static NO_SERVICE_CASES_EVENT_NAME = 'no service case created';
  static FAQ_SERVICE_CASES_EVENT_NAME = 'faq accordeon expanded';
  static SERVICE_CASE_NAVIGATION_CLICK_EVENT_NAME = 'service case navigation clicked';
  static SERVICE_CASE_SHOW_HISTORY = 'show history';
  static SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME = 'service case navigation viewed';
  static EVENT_INFO_TYPE_IMPRESSION = 'impression';
  static EVENT_INFO_TYPE_CLICK = 'click';
  static ATTRIBUTES_ITEM_NAME = 'itemName';
  static ATTRIBUTES_ITEM_DATA = 'itemData';
  static ATTRIBUTES_ITEM_GROUP = 'itemGroup';
}

/***/ }),

/***/ 78561:
/*!******************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/entitities/service-case.interface.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* binding */ Status),
/* harmony export */   Type: () => (/* binding */ Type)
/* harmony export */ });
var Type;
(function (Type) {
  Type["INSTALL"] = "INSTALL";
  Type["MOVE"] = "MOVE";
  Type["TAKEOVER"] = "TAKEOVER";
  Type["REPAIR"] = "REPAIR";
  Type["HOME_DELIVERY"] = "HOME_DELIVERY";
  Type["OTHER"] = "OTHER";
})(Type || (Type = {}));
var Status;
(function (Status) {
  Status["OPEN"] = "OPEN";
  Status["RESOLVED"] = "RESOLVED";
})(Status || (Status = {}));

/***/ }),

/***/ 53810:
/*!**************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseFacade: () => (/* reexport safe */ _service_case_facade__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseFacade),
/* harmony export */   ServiceCaseNgrxModule: () => (/* reexport safe */ _state_service_case_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseNgrxModule),
/* harmony export */   ServiceCaseService: () => (/* reexport safe */ _services_service_case_service__WEBPACK_IMPORTED_MODULE_4__.ServiceCaseService),
/* harmony export */   ServiceCasesConstants: () => (/* reexport safe */ _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_6__.ServiceCasesConstants),
/* harmony export */   ServiceCasesDatalayerService: () => (/* reexport safe */ _services_service_cases_datalayer_service__WEBPACK_IMPORTED_MODULE_5__.ServiceCasesDatalayerService),
/* harmony export */   Status: () => (/* reexport safe */ _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__.Status),
/* harmony export */   Type: () => (/* reexport safe */ _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__.Type),
/* harmony export */   provideServiceCaseDomain: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.provideServiceCaseDomain)
/* harmony export */ });
/* harmony import */ var _state_service_case_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/service-case-ngrx.module */ 16918);
/* harmony import */ var _service_case_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-case.facade */ 76469);
/* harmony import */ var _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entitities/service-case.interface */ 78561);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers */ 44809);
/* harmony import */ var _services_service_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/service-case.service */ 72117);
/* harmony import */ var _services_service_cases_datalayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/service-cases-datalayer.service */ 22874);
/* harmony import */ var _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/service-cases.constants */ 52067);








/***/ }),

/***/ 44809:
/*!******************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/providers.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideServiceCaseDomain: () => (/* binding */ provideServiceCaseDomain)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_service_case_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/service-case.reducers */ 6320);
/* harmony import */ var _state_service_case_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/service-case.effects */ 93907);





function provideServiceCaseDomain() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_state_service_case_reducers__WEBPACK_IMPORTED_MODULE_3__.serviceCaseFeature)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature([_state_service_case_effects__WEBPACK_IMPORTED_MODULE_4__.ServiceCaseEffects]))];
}

/***/ }),

/***/ 76469:
/*!****************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/service-case.facade.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseFacade: () => (/* binding */ ServiceCaseFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/service-case.selectors */ 18437);
/* harmony import */ var _state_service_case_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/service-case.actions */ 39948);





class ServiceCaseFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  loading$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
  loadError$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoadError);
  serviceCases$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectServiceCases);
  selectedServiceCase$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSelectedServiceCase);
  openServiceCases$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectOpenServiceCases);
  closedServiceCases$ = this.store.select(_state_service_case_selectors__WEBPACK_IMPORTED_MODULE_2__.selectClosedServiceCases);
  loadServiceCases() {
    this.store.dispatch((0,_state_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.loadServiceCases)());
  }
  serviceCasesPageView() {
    this.store.dispatch((0,_state_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.serviceCasesPageView)());
  }
  selectServiceCase(selectedServiceCase) {
    this.store.dispatch((0,_state_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.selectServiceCase)({
      selectedServiceCase
    }));
  }
  toggleHistory(isToggleHistory) {
    this.store.dispatch((0,_state_service_case_actions__WEBPACK_IMPORTED_MODULE_3__.toggleHistoryAction)({
      isToggleHistory
    }));
  }
  static ɵfac = function ServiceCaseFacade_Factory(t) {
    return new (t || ServiceCaseFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ServiceCaseFacade,
    factory: ServiceCaseFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97042:
/*!*************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/services/service-case.mapper.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseMapper: () => (/* binding */ ServiceCaseMapper)
/* harmony export */ });
/* harmony import */ var _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entitities/service-case.interface */ 78561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ServiceCaseMapper {
  toModel(data) {
    return data.map(raw => ({
      id: raw.id,
      status: _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_0__.Status[raw.status.toUpperCase()],
      type: _entitities_service_case_interface__WEBPACK_IMPORTED_MODULE_0__.Type[raw.type.toUpperCase()],
      creationDate: new Date(raw.creationDate),
      deadlineDate: raw.deadlineDate ? new Date(raw.deadlineDate) : undefined,
      productType: raw.productType
    }));
  }
  static ɵfac = function ServiceCaseMapper_Factory(t) {
    return new (t || ServiceCaseMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ServiceCaseMapper,
    factory: ServiceCaseMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72117:
/*!**************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/services/service-case.service.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseService: () => (/* binding */ ServiceCaseService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_case_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-case.mapper */ 97042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class ServiceCaseService {
  ocapiService;
  serviceCaseMapper;
  static MESSAGE_GROUP = 'service-cases';
  constructor(ocapiService, serviceCaseMapper) {
    this.ocapiService = ocapiService;
    this.serviceCaseMapper = serviceCaseMapper;
  }
  load() {
    const endpoint = '/public/api/service-cases-service/v1/service-cases';
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(ServiceCaseService.MESSAGE_GROUP, endpoint, this.serviceCaseMapper));
  }
  static ɵfac = function ServiceCaseService_Factory(t) {
    return new (t || ServiceCaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_case_mapper__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ServiceCaseService,
    factory: ServiceCaseService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 22874:
/*!*************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/data-access/src/lib/services/service-cases-datalayer.service.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCasesDatalayerService: () => (/* binding */ ServiceCasesDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/service-cases.constants */ 52067);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ServiceCasesDatalayerService {
  dataLayerService;
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  setPageProperties() {
    const pageInfo = new udl__WEBPACK_IMPORTED_MODULE_2__.PageInfo();
    pageInfo.setPageID(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.MESSAGE_GROUP);
    pageInfo.setPageName(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.MESSAGE_GROUP);
    const pageJSON = {
      pageInfo: pageInfo
    };
    const page = new udl__WEBPACK_IMPORTED_MODULE_2__.Page(pageJSON);
    this.dataLayerService.setPage(page);
  }
  addPageEvent() {
    this.dataLayerService.addPageEvent(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.STEP_SERVICE_CASES, {
      intent: _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.INTENT_VIEW_SERVICE_CASES,
      stepId: _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.STEP_SERVICE_CASES
    });
  }
  sendDataLayerEventWithAttributes(name, type, itemName, itemData, itemGroup) {
    const attributes = {};
    if (itemName !== null) {
      attributes[_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.ATTRIBUTES_ITEM_NAME] = itemName;
    }
    if (itemData !== null) {
      attributes[_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.ATTRIBUTES_ITEM_DATA] = itemData;
    }
    if (itemGroup !== null) {
      attributes[_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.ATTRIBUTES_ITEM_GROUP] = itemGroup;
    }
    const category = this.dataLayerService.createCategory(_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.CATEGORY_CARE, _constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.MESSAGE_GROUP);
    const eventInfo = this.dataLayerService.createEventInfo(name, type, [_constants_service_cases_constants__WEBPACK_IMPORTED_MODULE_1__.ServiceCasesConstants.MESSAGE_GROUP]);
    this.dataLayerService.sendEvent({
      eventInfo,
      attributes,
      category
    });
  }
  static ɵfac = function ServiceCasesDatalayerService_Factory(t) {
    return new (t || ServiceCasesDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ServiceCasesDatalayerService,
    factory: ServiceCasesDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_care-service-cases_service-case_data-access_src_index_ts-_f1571.js.map