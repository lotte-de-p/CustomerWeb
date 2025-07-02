(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_marketing_roaming-international_data-access_src_index_ts-_5d990"],{

/***/ 90104:
/*!***********************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryListService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CountryListService),
/* harmony export */   RATES_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RATES_FEATURE_KEY),
/* harmony export */   RateDetailType: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RateDetailType),
/* harmony export */   RateType: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RateType),
/* harmony export */   RatesService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RatesService),
/* harmony export */   RoamingInternationalEffects: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RoamingInternationalEffects),
/* harmony export */   RoamingInternationalFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RoamingInternationalFacade),
/* harmony export */   RoamingInternationalNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RoamingInternationalNgrxModule),
/* harmony export */   country: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.country),
/* harmony export */   getCountryErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getCountryErrorAction),
/* harmony export */   getRatesErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getRatesErrorAction),
/* harmony export */   initCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initCountry),
/* harmony export */   initRate: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initRate),
/* harmony export */   initRatesOverview: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initRatesOverview),
/* harmony export */   initialState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   loadCountryList: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadCountryList),
/* harmony export */   loadCountryListSuccess: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadCountryListSuccess),
/* harmony export */   loadRoamingRatesInsideSelectedCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesInsideSelectedCountry),
/* harmony export */   loadRoamingRatesInsideSelectedCountrySuccess: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesInsideSelectedCountrySuccess),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToAnotherDestinationCountry),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountrySuccess: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToAnotherDestinationCountrySuccess),
/* harmony export */   loadRoamingRatesToBelgium: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToBelgium),
/* harmony export */   loadRoamingRatesToBelgiumSuccess: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToBelgiumSuccess),
/* harmony export */   provideRoamingInternationalDomain: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideRoamingInternationalDomain),
/* harmony export */   ratesFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ratesFeature),
/* harmony export */   reducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   selectAnotherDestinationCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAnotherDestinationCountry),
/* harmony export */   selectCountriesList: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCountriesList),
/* harmony export */   selectFromCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectFromCountry),
/* harmony export */   selectRates: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectRates),
/* harmony export */   selectRoamingRatesInsideSelectedCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectRoamingRatesInsideSelectedCountry),
/* harmony export */   selectRoamingRatesToAnotherDestinationCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectRoamingRatesToAnotherDestinationCountry),
/* harmony export */   selectRoamingRatesToBelgium: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectRoamingRatesToBelgium),
/* harmony export */   selectUpSellOptionsForCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectUpSellOptionsForCountry),
/* harmony export */   selectedAnotherDestinationCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectedAnotherDestinationCountry),
/* harmony export */   selectedFromCountry: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectedFromCountry)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 27384);


/***/ }),

/***/ 88938:
/*!**************************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/+state/roaming-international-ngrx.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoamingInternationalNgrxModule: () => (/* binding */ RoamingInternationalNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _roaming_international_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roaming-international.effects */ 47148);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _roaming_international_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roaming-international.reducers */ 10562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class RoamingInternationalNgrxModule {
  static ɵfac = function RoamingInternationalNgrxModule_Factory(t) {
    return new (t || RoamingInternationalNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: RoamingInternationalNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_roaming_international_effects__WEBPACK_IMPORTED_MODULE_1__.RoamingInternationalEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_3__.ratesFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RoamingInternationalNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 27907:
/*!**********************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/+state/roaming-international.actions.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCountryErrorAction: () => (/* binding */ getCountryErrorAction),
/* harmony export */   getRatesErrorAction: () => (/* binding */ getRatesErrorAction),
/* harmony export */   loadCountryList: () => (/* binding */ loadCountryList),
/* harmony export */   loadCountryListSuccess: () => (/* binding */ loadCountryListSuccess),
/* harmony export */   loadRoamingRatesInsideSelectedCountry: () => (/* binding */ loadRoamingRatesInsideSelectedCountry),
/* harmony export */   loadRoamingRatesInsideSelectedCountrySuccess: () => (/* binding */ loadRoamingRatesInsideSelectedCountrySuccess),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountry: () => (/* binding */ loadRoamingRatesToAnotherDestinationCountry),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountrySuccess: () => (/* binding */ loadRoamingRatesToAnotherDestinationCountrySuccess),
/* harmony export */   loadRoamingRatesToBelgium: () => (/* binding */ loadRoamingRatesToBelgium),
/* harmony export */   loadRoamingRatesToBelgiumSuccess: () => (/* binding */ loadRoamingRatesToBelgiumSuccess),
/* harmony export */   selectedAnotherDestinationCountry: () => (/* binding */ selectedAnotherDestinationCountry),
/* harmony export */   selectedFromCountry: () => (/* binding */ selectedFromCountry)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const loadCountryList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadCountryList', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCountryListSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadCountryListSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectedFromCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] selectedFromCountry', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectedAnotherDestinationCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] selectedAnotherDestinationCountry', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesToBelgium = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesToBelgium', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesToBelgiumSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesToBelgiumSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesInsideSelectedCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesInsideSelectedCountry', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesInsideSelectedCountrySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesInsideSelectedCountrySuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesToAnotherDestinationCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesToAnotherDestinationCountry', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadRoamingRatesToAnotherDestinationCountrySuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] loadRoamingRatesToAnotherDestinationCountrySuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getCountryErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] get countries Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getRatesErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoamingInternational] get rates Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 47148:
/*!**********************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/+state/roaming-international.effects.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoamingInternationalEffects: () => (/* binding */ RoamingInternationalEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infrastructure_country_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/country-list.service */ 9280);
/* harmony import */ var _infrastructure_rates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/rates.service */ 73950);
/* harmony import */ var _roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roaming-international.actions */ 27907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);








class RoamingInternationalEffects {
  actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions);
  countryListService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_infrastructure_country_list_service__WEBPACK_IMPORTED_MODULE_3__.CountryListService);
  ratesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_infrastructure_rates_service__WEBPACK_IMPORTED_MODULE_4__.RatesService);
  loadCountries$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadCountryList), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(a => this.countryListService.load(a.searchKey, a.customerType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(countries => (0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadCountryListSuccess)({
    countries
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.getCountryErrorAction)({
    error: error
  })))))));
  loadRoamingRatesToBelgium = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesToBelgium), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(args => this.ratesService.getRoamingRates(args.country, args.customerType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(ratesData => {
    return this.ratesService.convertToOverview(args.country, args.toBelgium, ratesData[0]);
  }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rates => (0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesToBelgiumSuccess)({
    rates
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.getRatesErrorAction)({
    error: error
  })))));
  loadRoamingRatesInsideSelectedCountry = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesInsideSelectedCountry), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(args => this.ratesService.getRoamingRatesForSameCountry(args.country, args.customerType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rates => {
    return this.ratesService.convertToOverview(args.country, args.toBelgium, rates[0]);
  }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rates => (0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesInsideSelectedCountrySuccess)({
    rates
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.getRatesErrorAction)({
    error: error
  })))));
  loadRoamingRatesToAnotherDestinationCountry = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesToAnotherDestinationCountry), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(args => this.ratesService.getRoamingRates(args.fromCountry, args.customerType, args.toCountry).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rates => {
    return this.ratesService.convertToOverview(args.fromCountry, false, rates[0], !!args.toCountry);
  }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rates => (0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.loadRoamingRatesToAnotherDestinationCountrySuccess)({
    rates
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_roaming_international_actions__WEBPACK_IMPORTED_MODULE_5__.getRatesErrorAction)({
    error: error
  })))));
  static ɵfac = function RoamingInternationalEffects_Factory(t) {
    return new (t || RoamingInternationalEffects)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RoamingInternationalEffects,
    factory: RoamingInternationalEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 10562:
/*!***********************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/+state/roaming-international.reducers.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RATES_FEATURE_KEY: () => (/* binding */ RATES_FEATURE_KEY),
/* harmony export */   country: () => (/* binding */ country),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   ratesFeature: () => (/* binding */ ratesFeature),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roaming-international.actions */ 27907);


const RATES_FEATURE_KEY = 'rates';
const country = {
  iso: '',
  region: '',
  name: '',
  roamingZone: '',
  internationalZone: ''
};
const initialState = {
  countryList: {
    countries: []
  },
  roamingRates: {}
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.loadCountryListSuccess, (state, action) => ({
  ...state,
  countryList: {
    ...state.countryList,
    countries: action.countries
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.selectedFromCountry, (state, action) => ({
  ...initialState,
  countryList: {
    ...state.countryList,
    fromCountry: action.country
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.selectedAnotherDestinationCountry, (state, action) => ({
  ...state,
  countryList: {
    ...state.countryList,
    anotherDestinationCountry: action.country
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesToBelgiumSuccess, (state, action) => ({
  ...state,
  roamingRates: {
    ...state.roamingRates,
    toBelgium: action.rates
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesInsideSelectedCountrySuccess, (state, action) => ({
  ...state,
  roamingRates: {
    ...state.roamingRates,
    insideCountry: action.rates,
    upsellOptions: action.rates.options
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesToAnotherDestinationCountrySuccess, (state, action) => ({
  ...state,
  roamingRates: {
    ...state.roamingRates,
    toAnotherDestinationCountry: action.rates,
    upsellOptions: action.rates.options
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.getCountryErrorAction, (state, action) => ({
  ...state,
  error: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_roaming_international_actions__WEBPACK_IMPORTED_MODULE_1__.getRatesErrorAction, (state, action) => ({
  ...state,
  error: action.error
})));
const ratesFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: RATES_FEATURE_KEY,
  reducer: reducer
});

/***/ }),

/***/ 15439:
/*!************************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/+state/roaming-international.selectors.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAnotherDestinationCountry: () => (/* binding */ selectAnotherDestinationCountry),
/* harmony export */   selectCountriesList: () => (/* binding */ selectCountriesList),
/* harmony export */   selectFromCountry: () => (/* binding */ selectFromCountry),
/* harmony export */   selectRates: () => (/* binding */ selectRates),
/* harmony export */   selectRoamingRatesInsideSelectedCountry: () => (/* binding */ selectRoamingRatesInsideSelectedCountry),
/* harmony export */   selectRoamingRatesToAnotherDestinationCountry: () => (/* binding */ selectRoamingRatesToAnotherDestinationCountry),
/* harmony export */   selectRoamingRatesToBelgium: () => (/* binding */ selectRoamingRatesToBelgium),
/* harmony export */   selectUpSellOptionsForCountry: () => (/* binding */ selectUpSellOptionsForCountry)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _roaming_international_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roaming-international.reducers */ 10562);


const selectRates = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_1__.RATES_FEATURE_KEY);
const selectCountriesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.countryList.countries);
const selectFromCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.countryList.fromCountry);
const selectAnotherDestinationCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.countryList.anotherDestinationCountry);
const selectRoamingRatesToBelgium = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.roamingRates.toBelgium);
const selectRoamingRatesInsideSelectedCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.roamingRates.insideCountry);
const selectRoamingRatesToAnotherDestinationCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.roamingRates.toAnotherDestinationCountry);
const selectUpSellOptionsForCountry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRates, ratesState => ratesState.roamingRates.upsellOptions);

/***/ }),

/***/ 58067:
/*!*****************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/entities/country-list.interface.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCountry: () => (/* binding */ initCountry)
/* harmony export */ });
const initCountry = {
  iso: '',
  region: '',
  country: '',
  internationalZone: '',
  roamingZone: ''
};

/***/ }),

/***/ 14522:
/*!*********************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/entities/rate.interface.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateDetailType: () => (/* binding */ RateDetailType),
/* harmony export */   RateType: () => (/* binding */ RateType),
/* harmony export */   initRate: () => (/* binding */ initRate),
/* harmony export */   initRatesOverview: () => (/* binding */ initRatesOverview)
/* harmony export */ });
/* harmony import */ var _country_list_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list.interface */ 58067);

var RateType;
(function (RateType) {
  RateType["SMS"] = "SMS";
  RateType["MMS"] = "MMS";
  RateType["CALL"] = "CALL";
  RateType["DATA"] = "DATA";
})(RateType || (RateType = {}));
var RateDetailType;
(function (RateDetailType) {
  RateDetailType["INCOMING"] = "INCOMING";
  RateDetailType["OUTGOING"] = "OUTGOING";
  RateDetailType["VOLUME"] = "VOLUME";
})(RateDetailType || (RateDetailType = {}));
const initRate = {
  type: RateType.SMS,
  details: []
};
const initRatesOverview = {
  rates: [],
  country: _country_list_interface__WEBPACK_IMPORTED_MODULE_0__.initCountry,
  toBelgium: true,
  options: ''
};

/***/ }),

/***/ 27384:
/*!***************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryListService: () => (/* reexport safe */ _infrastructure_country_list_service__WEBPACK_IMPORTED_MODULE_7__.CountryListService),
/* harmony export */   RATES_FEATURE_KEY: () => (/* reexport safe */ _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__.RATES_FEATURE_KEY),
/* harmony export */   RateDetailType: () => (/* reexport safe */ _entities_rate_interface__WEBPACK_IMPORTED_MODULE_6__.RateDetailType),
/* harmony export */   RateType: () => (/* reexport safe */ _entities_rate_interface__WEBPACK_IMPORTED_MODULE_6__.RateType),
/* harmony export */   RatesService: () => (/* reexport safe */ _infrastructure_rates_service__WEBPACK_IMPORTED_MODULE_8__.RatesService),
/* harmony export */   RoamingInternationalEffects: () => (/* reexport safe */ _state_roaming_international_effects__WEBPACK_IMPORTED_MODULE_1__.RoamingInternationalEffects),
/* harmony export */   RoamingInternationalFacade: () => (/* reexport safe */ _roaming_international_facade__WEBPACK_IMPORTED_MODULE_9__.RoamingInternationalFacade),
/* harmony export */   RoamingInternationalNgrxModule: () => (/* reexport safe */ _state_roaming_international_ngrx_module__WEBPACK_IMPORTED_MODULE_4__.RoamingInternationalNgrxModule),
/* harmony export */   country: () => (/* reexport safe */ _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__.country),
/* harmony export */   getCountryErrorAction: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.getCountryErrorAction),
/* harmony export */   getRatesErrorAction: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.getRatesErrorAction),
/* harmony export */   initCountry: () => (/* reexport safe */ _entities_country_list_interface__WEBPACK_IMPORTED_MODULE_5__.initCountry),
/* harmony export */   initRate: () => (/* reexport safe */ _entities_rate_interface__WEBPACK_IMPORTED_MODULE_6__.initRate),
/* harmony export */   initRatesOverview: () => (/* reexport safe */ _entities_rate_interface__WEBPACK_IMPORTED_MODULE_6__.initRatesOverview),
/* harmony export */   initialState: () => (/* reexport safe */ _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__.initialState),
/* harmony export */   loadCountryList: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadCountryList),
/* harmony export */   loadCountryListSuccess: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadCountryListSuccess),
/* harmony export */   loadRoamingRatesInsideSelectedCountry: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesInsideSelectedCountry),
/* harmony export */   loadRoamingRatesInsideSelectedCountrySuccess: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesInsideSelectedCountrySuccess),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountry: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToAnotherDestinationCountry),
/* harmony export */   loadRoamingRatesToAnotherDestinationCountrySuccess: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToAnotherDestinationCountrySuccess),
/* harmony export */   loadRoamingRatesToBelgium: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToBelgium),
/* harmony export */   loadRoamingRatesToBelgiumSuccess: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoamingRatesToBelgiumSuccess),
/* harmony export */   provideRoamingInternationalDomain: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_10__.provideRoamingInternationalDomain),
/* harmony export */   ratesFeature: () => (/* reexport safe */ _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__.ratesFeature),
/* harmony export */   reducer: () => (/* reexport safe */ _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   selectAnotherDestinationCountry: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAnotherDestinationCountry),
/* harmony export */   selectCountriesList: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCountriesList),
/* harmony export */   selectFromCountry: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectFromCountry),
/* harmony export */   selectRates: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectRates),
/* harmony export */   selectRoamingRatesInsideSelectedCountry: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectRoamingRatesInsideSelectedCountry),
/* harmony export */   selectRoamingRatesToAnotherDestinationCountry: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectRoamingRatesToAnotherDestinationCountry),
/* harmony export */   selectRoamingRatesToBelgium: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectRoamingRatesToBelgium),
/* harmony export */   selectUpSellOptionsForCountry: () => (/* reexport safe */ _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUpSellOptionsForCountry),
/* harmony export */   selectedAnotherDestinationCountry: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.selectedAnotherDestinationCountry),
/* harmony export */   selectedFromCountry: () => (/* reexport safe */ _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__.selectedFromCountry)
/* harmony export */ });
/* harmony import */ var _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/roaming-international.actions */ 27907);
/* harmony import */ var _state_roaming_international_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/roaming-international.effects */ 47148);
/* harmony import */ var _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/roaming-international.reducers */ 10562);
/* harmony import */ var _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/roaming-international.selectors */ 15439);
/* harmony import */ var _state_roaming_international_ngrx_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/roaming-international-ngrx.module */ 88938);
/* harmony import */ var _entities_country_list_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/country-list.interface */ 58067);
/* harmony import */ var _entities_rate_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/rate.interface */ 14522);
/* harmony import */ var _infrastructure_country_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infrastructure/country-list.service */ 9280);
/* harmony import */ var _infrastructure_rates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infrastructure/rates.service */ 73950);
/* harmony import */ var _roaming_international_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./roaming-international-facade */ 33832);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers */ 73233);












/***/ }),

/***/ 9280:
/*!*********************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/infrastructure/country-list.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryListService: () => (/* binding */ CountryListService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class CountryListService {
  http;
  languageService;
  pathCategorisationService;
  configService;
  countries = [];
  constructor(http, languageService, pathCategorisationService, configService) {
    this.http = http;
    this.languageService = languageService;
    this.pathCategorisationService = pathCategorisationService;
    this.configService = configService;
  }
  load(searchKey, customerType) {
    const baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;
    const url = [baseUrl, 'country'].join('/');
    const language = this.languageService.getLanguage();
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('key', searchKey).set('language', language).set('brand', this.pathCategorisationService.getCustomerBrand()).set('category', customerType);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {
      params,
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const result = response.countries;
      return result?.sort((a, b) => a.country?.localeCompare(b.country));
    }));
  }
  static ɵfac = function CountryListService_Factory(t) {
    return new (t || CountryListService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.PathCategorisationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CountryListService,
    factory: CountryListService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73950:
/*!**************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/infrastructure/rates.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatesService: () => (/* binding */ RatesService)
/* harmony export */ });
/* harmony import */ var _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/rate.interface */ 14522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class RatesService {
  http;
  pathCategorisationService;
  configService;
  constructor(http, pathCategorisationService, configService) {
    this.http = http;
    this.pathCategorisationService = pathCategorisationService;
    this.configService = configService;
  }
  getRoamingRates(from, customerType, toCountry) {
    const destinationCountry = toCountry ? toCountry.roamingZone : 'Belgium';
    const baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;
    const endpoint = from.iso === 'BE' ? 'international' : 'roaming';
    const url = [baseUrl, 'rates/' + endpoint].join('/');
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('brand', this.pathCategorisationService.getCustomerBrand()).set('category', customerType).set('toZone', destinationCountry);
    if (from.iso !== 'BE') {
      params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('brand', this.pathCategorisationService.getCustomerBrand()).set('category', customerType).set('toZone', destinationCountry).set('fromZone', from.roamingZone);
    }
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {
      params,
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.rates));
  }
  getRoamingRatesForSameCountry(from, customerType) {
    const baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;
    const endpoint = 'roaming';
    const url = [baseUrl, 'rates/' + endpoint].join('/');
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('brand', this.pathCategorisationService.getCustomerBrand()).set('category', customerType).set('toZone', from.roamingZone).set('fromZone', from.roamingZone);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, {
      params,
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.rates));
  }
  convertToOverview(country, toBelgium, raw, isAnotherCountry) {
    return {
      country: country,
      toBelgium: toBelgium,
      rates: this.convertToRates(raw, toBelgium, isAnotherCountry),
      options: raw.options
    };
  }
  convertToRates(raw, toBelgium, isAnotherCountry) {
    const voice = this.convertToVoiceRates(raw, toBelgium, isAnotherCountry);
    const sms = this.convertToSmsRates(raw);
    const mms = this.convertToMmsRates(raw);
    const rates = [voice, sms, mms];
    const data = this.convertToDataRates(raw, toBelgium, isAnotherCountry);
    if (data) {
      rates.push(data);
    }
    return rates;
  }
  convertToDataRates(raw, toBelgium, isAnotherCountry) {
    if (!toBelgium && !isAnotherCountry && raw.data !== undefined) {
      const data = {
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateType.DATA,
        details: [{
          type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.VOLUME,
          amount: raw.data
        }]
      };
      return data;
    }
    return undefined;
  }
  convertToMmsRates(raw) {
    const mms = {
      type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateType.MMS,
      details: [{
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.OUTGOING,
        amount: raw.mms.outgoing
      }, {
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.INCOMING,
        amount: raw.mms.received
      }]
    };
    return mms;
  }
  convertToSmsRates(raw) {
    const sms = {
      type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateType.SMS,
      details: [{
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.OUTGOING,
        amount: raw.sms.outgoing
      }, {
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.INCOMING,
        amount: raw.sms.received
      }]
    };
    return sms;
  }
  convertToVoiceRates(raw, toBelgium, isAnotherCountry) {
    const voice = {
      type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateType.CALL,
      details: [{
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.OUTGOING,
        amount: raw.voice.same_country && !toBelgium && !isAnotherCountry ? raw.voice.same_country : raw.voice.outgoing
      }, {
        type: _entities_rate_interface__WEBPACK_IMPORTED_MODULE_0__.RateDetailType.INCOMING,
        amount: raw.voice.received
      }]
    };
    return voice;
  }
  static ɵfac = function RatesService_Factory(t) {
    return new (t || RatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.PathCategorisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: RatesService,
    factory: RatesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73233:
/*!*******************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/providers.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideRoamingInternationalDomain: () => (/* binding */ provideRoamingInternationalDomain)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_roaming_international_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/roaming-international.effects */ 47148);
/* harmony import */ var _state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/roaming-international.reducers */ 10562);





function provideRoamingInternationalDomain() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_state_roaming_international_reducers__WEBPACK_IMPORTED_MODULE_4__.ratesFeature)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature([_state_roaming_international_effects__WEBPACK_IMPORTED_MODULE_3__.RoamingInternationalEffects]))];
}

/***/ }),

/***/ 33832:
/*!**************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/data-access/src/lib/roaming-international-facade.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoamingInternationalFacade: () => (/* binding */ RoamingInternationalFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ 27384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/roaming-international.selectors */ 15439);
/* harmony import */ var _state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/roaming-international.actions */ 27907);






class RoamingInternationalFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store);
  countriesList$ = this.store.select(_state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCountriesList);
  selectedFromCountry$ = this.store.select(_state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectFromCountry);
  selectedAnotherCountry$ = this.store.select(_state_roaming_international_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAnotherDestinationCountry);
  roamingRatesFromSelectedCountryToBelgium$ = this.store.select(___WEBPACK_IMPORTED_MODULE_1__.selectRoamingRatesToBelgium);
  roamingRatesInsideSelectedCountry$ = this.store.select(___WEBPACK_IMPORTED_MODULE_1__.selectRoamingRatesInsideSelectedCountry);
  roamingRatesToAnotherDestinationCountry$ = this.store.select(___WEBPACK_IMPORTED_MODULE_1__.selectRoamingRatesToAnotherDestinationCountry);
  upsellOptionsForCountry$ = this.store.select(___WEBPACK_IMPORTED_MODULE_1__.selectUpSellOptionsForCountry);
  loadCountryList(searchKey, customerType) {
    this.store.dispatch((0,_state_roaming_international_actions__WEBPACK_IMPORTED_MODULE_4__.loadCountryList)({
      searchKey,
      customerType
    }));
  }
  selectedFromCountry(country, customerType) {
    this.store.dispatch((0,___WEBPACK_IMPORTED_MODULE_1__.selectedFromCountry)({
      country
    }));
    this.loadRoamingRatesForSelectedCountry(country, customerType);
  }
  selectedAnotherDestinationCountry(fromCountry, country, customerType) {
    this.store.dispatch((0,___WEBPACK_IMPORTED_MODULE_1__.selectedAnotherDestinationCountry)({
      country
    }));
    this.loadRoamingRatesToAnotherCountry(fromCountry, country, customerType);
  }
  loadRoamingRatesForSelectedCountry(country, customerType) {
    this.store.dispatch((0,___WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesToBelgium)({
      country: country,
      toBelgium: true,
      customerType: customerType
    }));
    this.store.dispatch((0,___WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesInsideSelectedCountry)({
      country: country,
      toBelgium: false,
      customerType: customerType
    }));
  }
  loadRoamingRatesToAnotherCountry(fromCountry, toCountry, customerType) {
    this.store.dispatch((0,___WEBPACK_IMPORTED_MODULE_1__.loadRoamingRatesToAnotherDestinationCountry)({
      fromCountry: fromCountry,
      toCountry: toCountry,
      customerType: customerType
    }));
  }
  static ɵfac = function RoamingInternationalFacade_Factory(t) {
    return new (t || RoamingInternationalFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RoamingInternationalFacade,
    factory: RoamingInternationalFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_marketing_roaming-international_data-access_src_index_ts-_5d990.js.map