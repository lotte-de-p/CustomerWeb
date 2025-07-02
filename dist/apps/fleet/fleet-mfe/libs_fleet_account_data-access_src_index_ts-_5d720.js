(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_fleet_account_data-access_src_index_ts-_5d720"],{

/***/ 2410:
/*!*****************************************************!*\
  !*** ./libs/fleet/account/data-access/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCOUNT_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT_FEATURE_KEY),
/* harmony export */   AccountEffects: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AccountEffects),
/* harmony export */   AccountNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AccountNgrxModule),
/* harmony export */   accountFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.accountFeature),
/* harmony export */   accountReducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.accountReducer),
/* harmony export */   initialState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   selectAccount: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAccount),
/* harmony export */   selectNextPage: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectNextPage),
/* harmony export */   selectPhoneNumber: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPhoneNumber),
/* harmony export */   setNextPage: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setNextPage),
/* harmony export */   setPhoneNumber: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setPhoneNumber)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 6375);


/***/ }),

/***/ 2701:
/*!******************************************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/+state/account-ngrx.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountNgrxModule: () => (/* binding */ AccountNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.reducers */ 81842);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 57818);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _account_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.effects */ 3087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class AccountNgrxModule {
  static ɵfac = function AccountNgrxModule_Factory(t) {
    return new (t || AccountNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AccountNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_account_reducers__WEBPACK_IMPORTED_MODULE_1__.accountFeature), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature([_account_effects__WEBPACK_IMPORTED_MODULE_3__.AccountEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 11974:
/*!**************************************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/+state/account.actions.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setNextPage: () => (/* binding */ setNextPage),
/* harmony export */   setPhoneNumber: () => (/* binding */ setPhoneNumber)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setNextPage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[account] setNextPage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPhoneNumber = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[account] setPhoneNumber', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3087:
/*!**************************************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/+state/account.effects.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountEffects: () => (/* binding */ AccountEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 57818);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.actions */ 11974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class AccountEffects {
  actions$;
  setNextPage$;
  constructor(actions$) {
    this.actions$ = actions$;
    this.setNextPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_account_actions__WEBPACK_IMPORTED_MODULE_1__.setPhoneNumber), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_account_actions__WEBPACK_IMPORTED_MODULE_1__.setNextPage)({
      page: ''
    }))));
  }
  static ɵfac = function AccountEffects_Factory(t) {
    return new (t || AccountEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AccountEffects,
    factory: AccountEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81842:
/*!***************************************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/+state/account.reducers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCOUNT_FEATURE_KEY: () => (/* binding */ ACCOUNT_FEATURE_KEY),
/* harmony export */   accountFeature: () => (/* binding */ accountFeature),
/* harmony export */   accountReducer: () => (/* binding */ accountReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.actions */ 11974);


const ACCOUNT_FEATURE_KEY = 'account';
const initialState = {
  nextPage: '',
  phoneNumber: ''
};
const accountFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: ACCOUNT_FEATURE_KEY,
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_account_actions__WEBPACK_IMPORTED_MODULE_1__.setNextPage, (state, action) => {
    return {
      ...state,
      nextPage: action.page
    };
  }), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_account_actions__WEBPACK_IMPORTED_MODULE_1__.setPhoneNumber, (state, action) => {
    return {
      ...state,
      phoneNumber: action.phoneNumber
    };
  }))
});
function accountReducer(state = initialState, action) {
  return accountFeature.reducer(state, action);
}

/***/ }),

/***/ 14716:
/*!****************************************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/+state/account.selectors.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAccount: () => (/* binding */ selectAccount),
/* harmony export */   selectNextPage: () => (/* binding */ selectNextPage),
/* harmony export */   selectPhoneNumber: () => (/* binding */ selectPhoneNumber)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.reducers */ 81842);


const selectAccount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_account_reducers__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_FEATURE_KEY);
const selectNextPage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAccount, account => account.nextPage);
const selectPhoneNumber = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAccount, account => account.phoneNumber);

/***/ }),

/***/ 6375:
/*!*********************************************************!*\
  !*** ./libs/fleet/account/data-access/src/lib/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCOUNT_FEATURE_KEY: () => (/* reexport safe */ _state_account_reducers__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_FEATURE_KEY),
/* harmony export */   AccountEffects: () => (/* reexport safe */ _state_account_effects__WEBPACK_IMPORTED_MODULE_4__.AccountEffects),
/* harmony export */   AccountNgrxModule: () => (/* reexport safe */ _state_account_ngrx_module__WEBPACK_IMPORTED_MODULE_3__.AccountNgrxModule),
/* harmony export */   accountFeature: () => (/* reexport safe */ _state_account_reducers__WEBPACK_IMPORTED_MODULE_1__.accountFeature),
/* harmony export */   accountReducer: () => (/* reexport safe */ _state_account_reducers__WEBPACK_IMPORTED_MODULE_1__.accountReducer),
/* harmony export */   initialState: () => (/* reexport safe */ _state_account_reducers__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   selectAccount: () => (/* reexport safe */ _state_account_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAccount),
/* harmony export */   selectNextPage: () => (/* reexport safe */ _state_account_selectors__WEBPACK_IMPORTED_MODULE_2__.selectNextPage),
/* harmony export */   selectPhoneNumber: () => (/* reexport safe */ _state_account_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPhoneNumber),
/* harmony export */   setNextPage: () => (/* reexport safe */ _state_account_actions__WEBPACK_IMPORTED_MODULE_0__.setNextPage),
/* harmony export */   setPhoneNumber: () => (/* reexport safe */ _state_account_actions__WEBPACK_IMPORTED_MODULE_0__.setPhoneNumber)
/* harmony export */ });
/* harmony import */ var _state_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/account.actions */ 11974);
/* harmony import */ var _state_account_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/account.reducers */ 81842);
/* harmony import */ var _state_account_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/account.selectors */ 14716);
/* harmony import */ var _state_account_ngrx_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/account-ngrx.module */ 2701);
/* harmony import */ var _state_account_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/account.effects */ 3087);






/***/ })

}])
//# sourceMappingURL=libs_fleet_account_data-access_src_index_ts-_5d720.js.map