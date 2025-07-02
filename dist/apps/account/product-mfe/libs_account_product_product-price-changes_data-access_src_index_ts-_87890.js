(self["webpackChunkproduct_mfe"] = self["webpackChunkproduct_mfe"] || []).push([["libs_account_product_product-price-changes_data-access_src_index_ts-_87890"],{

/***/ 5598:
/*!*****************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingFrequency: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BillingFrequency),
/* harmony export */   ProductPriceChangesFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductPriceChangesFacade),
/* harmony export */   ProductPriceChangesNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductPriceChangesNgrxModule),
/* harmony export */   ProductPriceChangesService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductPriceChangesService),
/* harmony export */   provideProductPriceChangesDomain: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideProductPriceChangesDomain)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 88926);


/***/ }),

/***/ 86123:
/*!**************************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes-datalayer.effects.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesDatalayerEffects: () => (/* binding */ ProductPriceChangesDatalayerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product-price-changes-datalayer.service */ 83172);
/* harmony import */ var _product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-price-changes.actions */ 51952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ProductPriceChangesDatalayerEffects {
  actions$;
  productPriceChangesDatalayerService;
  productPriceChangesLoaded$;
  productPriceChangesNotLoaded$;
  selectBillingAccount$;
  inPageLoginShown$;
  constructor(actions$, productPriceChangesDatalayerService) {
    this.actions$ = actions$;
    this.productPriceChangesDatalayerService = productPriceChangesDatalayerService;
    this.productPriceChangesLoaded$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__.loadProductPriceChangesSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({
      productPriceChanges
    }) => productPriceChanges[0]?.productPriceChanges || [undefined]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(productPriceChanges => {
      productPriceChanges.forEach(productPriceChange => this.productPriceChangesDatalayerService.sendSelectProductPriceChange(productPriceChange));
    })), {
      dispatch: false
    });
    this.productPriceChangesNotLoaded$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__.loadProductPriceChangesFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      status
    }) => {
      if (status === 403) {
        this.productPriceChangesDatalayerService.sendImpression(_services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME, _services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LIMITED_ACCESS);
      }
    })), {
      dispatch: false
    });
    this.selectBillingAccount$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__.selectBillingAccount)), this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__.loadProductPriceChangesSuccess))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([{
      selectedBillingAccount
    }, {
      productPriceChanges
    }]) => productPriceChanges.find(productPriceChange => productPriceChange.accountNumber === selectedBillingAccount)?.productPriceChanges || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(productPriceChanges => productPriceChanges.forEach(productPriceChange => this.productPriceChangesDatalayerService.sendSelectProductPriceChange(productPriceChange)))), {
      dispatch: false
    });
    this.inPageLoginShown$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_2__.setAuthentication), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      isAuthenticated,
      customLogin
    }) => {
      if (!isAuthenticated) {
        this.productPriceChangesDatalayerService.sendImpression(_services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME, _services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN);
      }
      if (isAuthenticated && customLogin) {
        this.productPriceChangesDatalayerService.sendClick(_services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME, _services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN);
      }
    })), {
      dispatch: false
    });
  }
  static ɵfac = function ProductPriceChangesDatalayerEffects_Factory(t) {
    return new (t || ProductPriceChangesDatalayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_product_price_changes_datalayer_service__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesDatalayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductPriceChangesDatalayerEffects,
    factory: ProductPriceChangesDatalayerEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 90413:
/*!********************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes-ngrx.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesNgrxModule: () => (/* binding */ ProductPriceChangesNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_price_changes_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-price-changes.effects */ 98254);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-price-changes.reducers */ 87781);
/* harmony import */ var _product_price_changes_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-price-changes-datalayer.effects */ 86123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ProductPriceChangesNgrxModule {
  static ɵfac = function ProductPriceChangesNgrxModule_Factory(t) {
    return new (t || ProductPriceChangesNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ProductPriceChangesNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_product_price_changes_effects__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesEffects, _product_price_changes_datalayer_effects__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesDatalayerEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_3__.productPriceChangesFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductPriceChangesNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 51952:
/*!****************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes.actions.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProductPriceChanges: () => (/* binding */ loadProductPriceChanges),
/* harmony export */   loadProductPriceChangesFailure: () => (/* binding */ loadProductPriceChangesFailure),
/* harmony export */   loadProductPriceChangesSuccess: () => (/* binding */ loadProductPriceChangesSuccess),
/* harmony export */   loadingFinished: () => (/* binding */ loadingFinished),
/* harmony export */   selectBillingAccount: () => (/* binding */ selectBillingAccount),
/* harmony export */   selectProductPriceChanges: () => (/* binding */ selectProductPriceChanges),
/* harmony export */   setAuthentication: () => (/* binding */ setAuthentication),
/* harmony export */   validateAuthentication: () => (/* binding */ validateAuthentication),
/* harmony export */   validateCustomAuthentication: () => (/* binding */ validateCustomAuthentication),
/* harmony export */   validateCustomAuthenticationFailure: () => (/* binding */ validateCustomAuthenticationFailure)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const loadProductPriceChanges = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] loadProductPriceChanges');
const loadProductPriceChangesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] loadProductPriceChangesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadProductPriceChangesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] loadProductPriceChangesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const validateAuthentication = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] validateAuthentication');
const validateCustomAuthentication = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] validateCustomAuthentication', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const validateCustomAuthenticationFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] validateCustomAuthenticationFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAuthentication = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] setAuthentication', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectBillingAccount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] selectBillingAccount', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectProductPriceChanges = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] selectProductPriceChanges', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadingFinished = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[product-price-changes] loadingFinished');

/***/ }),

/***/ 98254:
/*!****************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes.effects.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesEffects: () => (/* binding */ ProductPriceChangesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-price-changes.actions */ 51952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-price-changes.service */ 57146);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);












class ProductPriceChangesEffects {
  actions$;
  productPriceChangesService;
  loginService;
  messageService;
  setAuthentication$;
  loadProductPriceChanges$;
  validateCustomAuthentication$;
  validateAuthentication$;
  selectBillingAccount$;
  constructor(actions$, productPriceChangesService, loginService, messageService) {
    this.actions$ = actions$;
    this.productPriceChangesService = productPriceChangesService;
    this.loginService = loginService;
    this.messageService = messageService;
    this.setAuthentication$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.setAuthentication),
    // on changing the authentication to true, load product price changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(({
      isAuthenticated
    }) => isAuthenticated), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => (0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChanges)())));
    this.loadProductPriceChanges$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChanges),
    // on this action => load the product price changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.productPriceChangesService.getProductPriceChanges()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.messageService.clearMessages(_services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesService.MESSAGE_GROUP)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(productPriceChanges => (0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChangesSuccess)({
      productPriceChanges
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)((0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChangesFailure)({
      error: error.message,
      status: error.status
    }))))));
    this.validateCustomAuthentication$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.validateCustomAuthentication),
    // on this action validate the custom login
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(loginDetails => this.productPriceChangesService.login(loginDetails)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.messageService.clearMessages(_services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesService.MESSAGE_GROUP)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => (0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.setAuthentication)({
      isAuthenticated: true,
      customLogin: true
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)((0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.validateCustomAuthenticationFailure)({
      error
    }))))));
    this.validateAuthentication$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.validateAuthentication),
    // on this action validate if the user is logged in
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.loginService.getLoginDetails()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(loginDetails => (0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.setAuthentication)({
      isAuthenticated: loginDetails?.isLoggedIn(),
      customLogin: false
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((_error, source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)((0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadingFinished)())))));
    this.selectBillingAccount$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.selectBillingAccount)), this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChangesSuccess))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([{
      selectedBillingAccount
    }, {
      productPriceChanges
    }]) => (0,_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.selectProductPriceChanges)({
      selectedProductPriceChanges: productPriceChanges.find(productPriceChange => productPriceChange.accountNumber === selectedBillingAccount)?.productPriceChanges || []
    }))));
  }
  static ɵfac = function ProductPriceChangesEffects_Factory(t) {
    return new (t || ProductPriceChangesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ProductPriceChangesEffects,
    factory: ProductPriceChangesEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 87781:
/*!*****************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes.reducers.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_PRICE_CHANGES_FEATURE_KEY: () => (/* binding */ PRODUCT_PRICE_CHANGES_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   productPriceChangesFeature: () => (/* binding */ productPriceChangesFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-price-changes.actions */ 51952);


const PRODUCT_PRICE_CHANGES_FEATURE_KEY = 'product-price-changes';
const initialState = {
  isAuthenticated: false,
  productPriceChanges: [],
  selectedProductPriceChanges: [],
  selectedBillingAccount: undefined,
  loading: false,
  loadError: undefined,
  loginError: undefined
};
const productPriceChangesFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCT_PRICE_CHANGES_FEATURE_KEY,
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.validateAuthentication, state => ({
    ...state,
    loading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.validateCustomAuthenticationFailure, (state, action) => ({
    ...state,
    loading: false,
    loginError: action.error
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChangesSuccess, (state, action) => {
    const defaultProductPriceChangesByAccount = action.productPriceChanges[0];
    return {
      ...state,
      productPriceChanges: action.productPriceChanges,
      selectedProductPriceChanges: defaultProductPriceChangesByAccount?.productPriceChanges || [],
      selectedBillingAccount: defaultProductPriceChangesByAccount?.accountNumber,
      loading: false,
      loadError: undefined,
      loginError: undefined
    };
  }), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadProductPriceChangesFailure, (state, action) => ({
    ...state,
    loading: false,
    loadError: action.error
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.setAuthentication, (state, action) => ({
    ...state,
    isAuthenticated: action.isAuthenticated,
    loading: action.isAuthenticated
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.loadingFinished, state => ({
    ...state,
    loading: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_1__.selectProductPriceChanges, (state, action) => ({
    ...state,
    selectedProductPriceChanges: action.selectedProductPriceChanges
  })))
});

/***/ }),

/***/ 56976:
/*!******************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/+state/product-price-changes.selectors.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAuthenticationError: () => (/* binding */ selectAuthenticationError),
/* harmony export */   selectIsAuthenticated: () => (/* binding */ selectIsAuthenticated),
/* harmony export */   selectLoadError: () => (/* binding */ selectLoadError),
/* harmony export */   selectLoading: () => (/* binding */ selectLoading),
/* harmony export */   selectProductPriceChanges: () => (/* binding */ selectProductPriceChanges),
/* harmony export */   selectProductPriceChangesFeature: () => (/* binding */ selectProductPriceChangesFeature),
/* harmony export */   selectSelectedBillingAccount: () => (/* binding */ selectSelectedBillingAccount),
/* harmony export */   selectSelectedProductPriceChanges: () => (/* binding */ selectSelectedProductPriceChanges)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-price-changes.reducers */ 87781);


const selectProductPriceChangesFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_PRICE_CHANGES_FEATURE_KEY);
const selectIsAuthenticated = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.isAuthenticated);
const selectProductPriceChanges = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.productPriceChanges);
const selectSelectedProductPriceChanges = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.selectedProductPriceChanges);
const selectSelectedBillingAccount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.selectedBillingAccount);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.loading);
const selectLoadError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.loadError);
const selectAuthenticationError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductPriceChangesFeature, state => state.loginError);

/***/ }),

/***/ 79317:
/*!*********************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/entities/product-price-change.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingFrequency: () => (/* binding */ BillingFrequency)
/* harmony export */ });
var BillingFrequency;
(function (BillingFrequency) {
  BillingFrequency["MONTHLY"] = "MONTHLY";
  BillingFrequency["QUARTERLY"] = "QUARTERLY";
  BillingFrequency["HALF_YEARLY"] = "HALF_YEARLY";
  BillingFrequency["YEARLY"] = "YEARLY";
})(BillingFrequency || (BillingFrequency = {}));

/***/ }),

/***/ 88926:
/*!*********************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingFrequency: () => (/* reexport safe */ _entities_product_price_change__WEBPACK_IMPORTED_MODULE_3__.BillingFrequency),
/* harmony export */   ProductPriceChangesFacade: () => (/* reexport safe */ _product_price_changes_facade__WEBPACK_IMPORTED_MODULE_0__.ProductPriceChangesFacade),
/* harmony export */   ProductPriceChangesNgrxModule: () => (/* reexport safe */ _state_product_price_changes_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.ProductPriceChangesNgrxModule),
/* harmony export */   ProductPriceChangesService: () => (/* reexport safe */ _services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesService),
/* harmony export */   provideProductPriceChangesDomain: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.provideProductPriceChangesDomain)
/* harmony export */ });
/* harmony import */ var _product_price_changes_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-price-changes.facade */ 21393);
/* harmony import */ var _state_product_price_changes_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/product-price-changes-ngrx.module */ 90413);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers */ 16620);
/* harmony import */ var _entities_product_price_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/product-price-change */ 79317);
/* harmony import */ var _services_product_price_changes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/product-price-changes.service */ 57146);






/***/ }),

/***/ 21393:
/*!********************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/product-price-changes.facade.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesFacade: () => (/* binding */ ProductPriceChangesFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/product-price-changes.selectors */ 56976);
/* harmony import */ var _state_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/product-price-changes.actions */ 51952);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);






class ProductPriceChangesFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  loading$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
  loadError$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoadError);
  authenticationError$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAuthenticationError).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(loginError => !!loginError));
  isAuthenticated$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated);
  productPriceChanges$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectProductPriceChanges);
  selectedProductPriceChanges$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSelectedProductPriceChanges);
  selectedBillingAccount$ = this.store.select(_state_product_price_changes_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSelectedBillingAccount);
  validateAuthentication() {
    this.store.dispatch((0,_state_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_3__.validateAuthentication)());
  }
  login(loginDetails) {
    this.store.dispatch((0,_state_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_3__.validateCustomAuthentication)(loginDetails));
  }
  selectBillingAccount(selectedBillingAccount) {
    this.store.dispatch((0,_state_product_price_changes_actions__WEBPACK_IMPORTED_MODULE_3__.selectBillingAccount)({
      selectedBillingAccount
    }));
  }
  get billingAccounts$() {
    return this.productPriceChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(productPriceChanges => productPriceChanges.map(productPriceChange => productPriceChange.accountNumber)));
  }
  static ɵfac = function ProductPriceChangesFacade_Factory(t) {
    return new (t || ProductPriceChangesFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductPriceChangesFacade,
    factory: ProductPriceChangesFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16620:
/*!*************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/providers.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideProductPriceChangesDomain: () => (/* binding */ provideProductPriceChangesDomain)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/product-price-changes.reducers */ 87781);
/* harmony import */ var _state_product_price_changes_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/product-price-changes.effects */ 98254);
/* harmony import */ var _state_product_price_changes_datalayer_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/product-price-changes-datalayer.effects */ 86123);






function provideProductPriceChangesDomain() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature(_state_product_price_changes_reducers__WEBPACK_IMPORTED_MODULE_3__.productPriceChangesFeature)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature([_state_product_price_changes_effects__WEBPACK_IMPORTED_MODULE_4__.ProductPriceChangesEffects, _state_product_price_changes_datalayer_effects__WEBPACK_IMPORTED_MODULE_5__.ProductPriceChangesDatalayerEffects]))];
}

/***/ }),

/***/ 83172:
/*!****************************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/services/product-price-changes-datalayer.service.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesDatalayerService: () => (/* binding */ ProductPriceChangesDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class ProductPriceChangesDatalayerService {
  dataLayerService;
  static MESSAGE_GROUP = 'product-price-changes';
  static CATEGORY_CARE = 'care';
  static EVENT_COMPONENT_NAME = 'product price change component';
  static EVENT_INPAGE_LOGIN_NAME = 'inpage login';
  static ATTRIBUTES_ITEM_NAME = 'itemName';
  static EVENT_INFO_TYPE_IMPRESSION = 'impression';
  static EVENT_INFO_TYPE_CLICK = 'click';
  static EVENT_INFO_NAME_NOT_IMPACTED = 'not impacted';
  static EVENT_INFO_NAME_NOT_POSSIBLE = 'not possible to show the information';
  static EVENT_INFO_NAME_DISPLAYED = 'product price change displayed';
  static EVENT_INFO_NAME_LIMITED_ACCESS = 'limited access';
  static EVENT_INFO_NAME_LOGIN = 'login';
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  sendSelectProductPriceChange(productPriceChange) {
    let itemName;
    if (productPriceChange) {
      itemName = productPriceChange.priceAccordingToConsumption ? ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_IMPACTED : ProductPriceChangesDatalayerService.EVENT_INFO_NAME_DISPLAYED;
    } else {
      itemName = ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_POSSIBLE;
    }
    this.sendImpression(ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME, itemName);
  }
  sendImpression(eventName, itemName) {
    this.sendDataLayerEventWithAttributes(eventName, itemName, ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_IMPRESSION);
  }
  sendClick(eventName, itemName) {
    this.sendDataLayerEventWithAttributes(eventName, itemName, ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_CLICK);
  }
  sendDataLayerEventWithAttributes(eventName, itemName, eventType) {
    const attributes = {};
    attributes[ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME] = itemName;
    const category = this.dataLayerService.createCategory(ProductPriceChangesDatalayerService.CATEGORY_CARE, ProductPriceChangesDatalayerService.MESSAGE_GROUP);
    const eventInfo = this.dataLayerService.createEventInfo(eventName, eventType, [ProductPriceChangesDatalayerService.MESSAGE_GROUP]);
    this.dataLayerService.sendEvent({
      eventInfo,
      attributes,
      category
    });
  }
  static ɵfac = function ProductPriceChangesDatalayerService_Factory(t) {
    return new (t || ProductPriceChangesDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProductPriceChangesDatalayerService,
    factory: ProductPriceChangesDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57146:
/*!******************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/data-access/src/lib/services/product-price-changes.service.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceChangesService: () => (/* binding */ ProductPriceChangesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ProductPriceChangesService {
  ocapiService;
  messageService;
  static MESSAGE_GROUP = 'product-price-changes';
  static PRODUCT_PRICE_CHANGES_ENDPOINT = '/public/api/product-price-change-service/v1/product-price-changes';
  static AUTH_ENDPOINT = '/oauth/login';
  constructor(ocapiService, messageService) {
    this.ocapiService = ocapiService;
    this.messageService = messageService;
  }
  login(login) {
    const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('customernumber', login.customerNumber).set('lastname', login.lastName);
    return this.ocapiService.doPost(this.getOcapiCallConfig(ProductPriceChangesService.MESSAGE_GROUP, `${ProductPriceChangesService.AUTH_ENDPOINT}?${httpParams.toString()}`)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => this.handleError(error, ProductPriceChangesService.MESSAGE_GROUP, this.getLoginError)));
  }
  getProductPriceChanges() {
    return this.ocapiService.doGet(this.getOcapiCallConfig(ProductPriceChangesService.MESSAGE_GROUP, ProductPriceChangesService.PRODUCT_PRICE_CHANGES_ENDPOINT)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      const messageGroupName = error.status === 403 ? `${ProductPriceChangesService.MESSAGE_GROUP}.hidden` : ProductPriceChangesService.MESSAGE_GROUP;
      return this.handleError(error, messageGroupName, this.getProductPriceChangesError);
    }));
  }
  getOcapiCallConfig(messageGroupName, endpoint) {
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(messageGroupName, endpoint);
    ocapiCallConfig.errorHandler = error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    return ocapiCallConfig;
  }
  handleError(error, messageGroupName, getLabelKey) {
    const errorLabelKey = getLabelKey(error.status);
    this.addErrorMessage(errorLabelKey, messageGroupName);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
  }
  addErrorMessage(key, messageGroupName) {
    this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(messageGroupName, key));
  }
  getLoginError(status) {
    return status === 400 ? `${ProductPriceChangesService.MESSAGE_GROUP}.ocapi.wrong-credentials` : `ocapi.${status}`;
  }
  getProductPriceChangesError(status) {
    return status === 403 ? 'ocapi.403-OCAPI-ERR-004' : `ocapi.${status}`;
  }
  static ɵfac = function ProductPriceChangesService_Factory(t) {
    return new (t || ProductPriceChangesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductPriceChangesService,
    factory: ProductPriceChangesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_account_product_product-price-changes_data-access_src_index_ts-_87890.js.map