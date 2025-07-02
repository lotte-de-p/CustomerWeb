(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_demo_product_data-access_src_index_ts-_07ef1"],{

/***/ 10737:
/*!***************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* reexport safe */ _lib_entities_models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product),
/* harmony export */   ProductFacade: () => (/* reexport safe */ _lib_facade_product_facade__WEBPACK_IMPORTED_MODULE_1__.ProductFacade),
/* harmony export */   ProductNgrxModule: () => (/* reexport safe */ _lib_state_product_ngrx_module__WEBPACK_IMPORTED_MODULE_2__.ProductNgrxModule),
/* harmony export */   ProductOverviewConstants: () => (/* reexport safe */ _lib_entities_models_product_model__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants),
/* harmony export */   productReducer: () => (/* reexport safe */ _lib_state_product_reducer__WEBPACK_IMPORTED_MODULE_3__.productReducer)
/* harmony export */ });
/* harmony import */ var _lib_entities_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/entities/models/product.model */ 26721);
/* harmony import */ var _lib_facade_product_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/facade/product.facade */ 47595);
/* harmony import */ var _lib_state_product_ngrx_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/product-ngrx.module */ 97026);
/* harmony import */ var _lib_state_product_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/product.reducer */ 72028);





/***/ }),

/***/ 97026:
/*!****************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product-ngrx.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductNgrxModule: () => (/* binding */ ProductNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.reducer */ 72028);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.effects */ 64960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ProductNgrxModule {
  static #_ = this.ɵfac = function ProductNgrxModule_Factory(t) {
    return new (t || ProductNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ProductNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature([_product_effects__WEBPACK_IMPORTED_MODULE_3__.ProductEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_product_reducer__WEBPACK_IMPORTED_MODULE_1__.productsFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 93563:
/*!************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product.actions.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getErrorAction: () => (/* binding */ getErrorAction),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getProductsSuccessAction: () => (/* binding */ getProductsSuccessAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const getProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[demo - product] get products');
const getProductsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[demo - product] get products success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[demo - product] get products Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 64960:
/*!************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product.effects.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductEffects: () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/product.actions */ 93563);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _infrastructure_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/product.service */ 20155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ProductEffects {
  constructor(actions$, productService) {
    this.actions$ = actions$;
    this.productService = productService;
    this.products$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_state_product_actions__WEBPACK_IMPORTED_MODULE_1__.getProducts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
      return this.productService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(products => _state_product_actions__WEBPACK_IMPORTED_MODULE_1__.getProductsSuccessAction({
        products
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_state_product_actions__WEBPACK_IMPORTED_MODULE_1__.getErrorAction({
        error: error
      }))));
    })));
  }
  static #_ = this.ɵfac = function ProductEffects_Factory(t) {
    return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_infrastructure_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductEffects,
    factory: ProductEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72028:
/*!************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product.reducer.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productReducer: () => (/* binding */ productReducer),
/* harmony export */   productsFeature: () => (/* binding */ productsFeature),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.state */ 33840);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.actions */ 93563);




const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_product_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_actions__WEBPACK_IMPORTED_MODULE_2__.getProductsSuccessAction, (state, {
  products
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.products = products;
})));
function productReducer(state = _product_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, action) {
  return reducer(state, action);
}
const productsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: 'productsFeature',
  reducer: productReducer
});

/***/ }),

/***/ 41739:
/*!**************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product.selectors.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectProducts: () => (/* binding */ selectProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('productsFeature');
const selectProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products);

/***/ }),

/***/ 33840:
/*!**********************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/+state/product.state.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  products: []
};

/***/ }),

/***/ 26721:
/*!*******************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/entities/models/product.model.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLimitEnum: () => (/* binding */ DataLimitEnum),
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   ProductOverviewConstants: () => (/* binding */ ProductOverviewConstants)
/* harmony export */ });
class ProductOverviewConstants {
  static #_ = this.EMPTY = '';
  static #_2 = this.API_VERSION_V1 = 'v1';
  static #_3 = this.API_VERSION_V2 = 'v2';
  static #_4 = this.CONTEXT_PRODUCT = '/products';
  static #_5 = this.CONTEXT_PHONE_TO_GO = '/cloud-telephony/phone2go';
  static #_6 = this.PRODUCT_SERVICE_PREFIX = '/public/api/product-service/';
  static #_7 = this.RESOURCE_SERVICE_PREFIX = '/public/api/resource-service/';
  static #_8 = this.CUSTOMER_SERVICE_PREFIX = '/public/api/customer-service/'; // Statuses
  static #_9 = this.ACTIVE_STATUS = 'ACTIVE';
  static #_10 = this.SUSPENDED_STATUS = 'SUSPENDED';
  static #_11 = this.SUSPEND_PRODUCT_STATUSES = ['SUSPENDED', 'SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR'];
  static #_12 = this.MODIFICATION_PRODUCT_STATUSES = ['MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR'];
  static #_13 = this.DISCONNECTION_PRODUCT_STATUSES = ['DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'];
  static #_14 = this.ACTIVATION_PRODUCT_STATUSES = ['ACTIVATION_IN_PROGRESS', 'ACTIVATION_PASSED_PONR'];
  static #_15 = this.PREPAID_MOBILE = 'prepaid-mobile'; // KEEP
}
var DataLimitEnum;
(function (DataLimitEnum) {
  DataLimitEnum["FIVE_GB"] = "5 GB";
  DataLimitEnum["UNLIMITED"] = "Unlimited";
  DataLimitEnum["UNKNOWN"] = "Unknown";
})(DataLimitEnum || (DataLimitEnum = {}));
class Product {
  static #_ = this.BUNDLE_TYPE_C5 = 'Connect 5';
  static #_2 = this.BUNDLE_TYPE_KLIK = 'KLIK';
  isProductActive() {
    return this.status === ProductOverviewConstants.ACTIVE_STATUS;
  }
  isProductSuspended() {
    return ProductOverviewConstants.SUSPEND_PRODUCT_STATUSES.includes(this.status);
  }
  isProductModificationInProgress() {
    return ProductOverviewConstants.MODIFICATION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductDisconnectionInProgress() {
    return ProductOverviewConstants.DISCONNECTION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductActivationInProgress() {
    return ProductOverviewConstants.ACTIVATION_PRODUCT_STATUSES.includes(this.status);
  }
  isC5Bundle() {
    return this.bundleType === Product.BUNDLE_TYPE_C5 || !!this.bundleType?.match(Product.BUNDLE_TYPE_KLIK);
  }
  hasValidPrice(price) {
    return price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00';
  }
}

/***/ }),

/***/ 47595:
/*!***********************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/facade/product.facade.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFacade: () => (/* binding */ ProductFacade)
/* harmony export */ });
/* harmony import */ var _state_product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../+state/product.actions */ 93563);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_product_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/product.selectors */ 41739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductFacade {
  constructor(store) {
    this.store = store;
    this.products$ = this.store.select(_state_product_selectors__WEBPACK_IMPORTED_MODULE_2__.selectProducts);
  }
  loadProducts() {
    this.store.dispatch((0,_state_product_actions__WEBPACK_IMPORTED_MODULE_0__.getProducts)());
  }
  manageBundleOptions(planIdentifier, product) {
    console.log(planIdentifier);
    console.log(product);
  }
  manageProducOptions(product) {
    console.log(product);
  }
  static #_ = this.ɵfac = function ProductFacade_Factory(t) {
    return new (t || ProductFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductFacade,
    factory: ProductFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 20155:
/*!********************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/infrastructure/product.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_testfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.testfactory */ 8096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class ProductService {
  getProducts() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _product_testfactory__WEBPACK_IMPORTED_MODULE_1__.ProductTestfactory().getProductsMockWithBundle());
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8096:
/*!************************************************************************************************!*\
  !*** ./libs/foundation/demo/product/data-access/src/lib/infrastructure/product.testfactory.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTestfactory: () => (/* binding */ ProductTestfactory)
/* harmony export */ });
var CATEGORY;
(function (CATEGORY) {
  CATEGORY["FOR_RULES_2_ND_HOME_PROMO_MANUAL"] = "for-rules---2nd-home-promo-manual";
  CATEGORY["FOR_RULES_FOR_129521_DISCOUNT"] = "for-rules---for-129521-discount";
  CATEGORY["FOR_RULES_125420_PROMO"] = "for-rules---125420-promo";
  CATEGORY["FOR_RULES_2_P_BUNDLES_FOR_649"] = "for-rules---2p-bundles-for-649";
  CATEGORY["FOR_RULES_874_PROMO"] = "for-rules---874-promo";
  CATEGORY["FOR_RULES_TLOS_WITH_TELENET_TV_1_0"] = "for-rules---tlos-with-telenet-tv-1-0";
  CATEGORY["FOR_DISCOUNTS_874_PROMO"] = "for-discounts---874-promo";
  CATEGORY["FOR_RULES_FOR_110620_DISCOUNT"] = "for-rules---for-110620-discount";
  CATEGORY["FOR_RULES_PARTNER_DISCOUNT_EXCEPT_ONEUP"] = "for-rules---partner-discount-except-oneup";
  CATEGORY["FOR_RULES_453_EXTERNE_MEDEWERKERS_KORTING"] = "for-rules---453-externe-medewerkers-korting";
  CATEGORY["FOR_RULES_OFFERINGS_FOR_107800"] = "for-rules---offerings-for-107800";
  CATEGORY["FOR_DISCOUNTS_FOR_120800_AND_120820"] = "for-discounts---for-120800-and-120820";
  CATEGORY["FOR_DISCOUNTS_782_PROMO"] = "for-discounts---782-promo";
  CATEGORY["FOR_DISCOUNT_2_ND_HOME_PROMO_3_P_BUNDLES_INTERNET"] = "for-discount---2nd-home-promo-3p-bundles--internet";
  CATEGORY["FOR_RULES_TLOS_WITH_SPEEDBOOST"] = "for-rules---tlos-with-speedboost";
  CATEGORY["FOR_RULES_4_P_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE"] = "for-rules---4p2p1p-plans-where-safespot-is-payable";
  CATEGORY["FOR_RULES_2_P_BUNDLES"] = "for-rules---2p-bundles";
  CATEGORY["FOR_DISCOUNT_121810_PROMO"] = "for-discount---121810-promo";
  CATEGORY["FOR_RULES_TOP_OFFERING_WITH_SERVICE_POLICIES"] = "for-rules----top-offering-with-service-policies";
  CATEGORY["FOR_RULES_WIGO_FOR_126941"] = "for-rules---wigo-for-126941";
  CATEGORY["FOR_DISCOUNT_2_P_3_P_BUNDLES_INTERNET"] = "for-discount---2p3p-bundles--internet";
  CATEGORY["FOR_RULES_TV_ICONIC_FLOW_ONLY"] = "for-rules---tv-iconic--flow-only";
  CATEGORY["STAFF_DISCOUNT_FURIOUS_WITH_FIXED_LINE_NEW_OFFERING"] = "staff-discount-furious-with-fixed-line-new-offering";
  CATEGORY["FOR_RULES_WIGOONEUP_BUNDLES"] = "for-rules---wigooneup-bundles";
  CATEGORY["FOR_DISCOUNTS_159_PROMO"] = "for-discounts---159-promo";
  CATEGORY["FOR_RULES_PARTNER_DISCOUNT"] = "for-rules---partner-discount";
  CATEGORY["FOR_DISCOUNTS_117200_PROMO"] = "for-discounts---117200-promo";
  CATEGORY["FOR_RULES_115810_ONLY"] = "for-rules---115810-only";
  CATEGORY["FOR_DISCOUNTS_132941_PROMO"] = "for-discounts---132941-promo";
  CATEGORY["FOR_DISCOUNT_GROUP_DISCOUNT_MANUAL"] = "for-discount---group-discount-manual";
  CATEGORY["FOR_RULES_RES_DIGITAL_TV_AND_BUNDLES_WITH_DIGITAL_TV"] = "for-rules---res-digital-tv-and-bundles-with-digital-tv";
  CATEGORY["FOR_RULES_ALL_INTERNET_TV_WIGO_FOR_100650"] = "for-rules---all-internet--tv-wigo-for-100650";
  CATEGORY["FOR_RULES_139331_PROMO"] = "for-rules---139331-promo";
  CATEGORY["FOR_RULES_649_ONLY"] = "for-rules---649-only";
  CATEGORY["FOR_RULES_TLOS_FOR_3_TB_FUP_INTERNET_SERVICE_POLICIES"] = "for-rules--tlos-for-3tb-fup-internet-service-policies";
  CATEGORY["FOR_RULES_RES_BUNDLES"] = "for-rules---res-bundles";
  CATEGORY["FOR_DISCOUNTS_133331_PROMO"] = "for-discounts---133331-promo";
  CATEGORY["FOR_SPONSOR_DISCOUNT_ALL_TLO_PRODUCTS"] = "for-sponsor-discount---all-tlo-products";
  CATEGORY["FOR_DISCOUNT_FOR_107020_DISCOUNTS"] = "for-discount---for-107020-discounts";
  CATEGORY["FOR_DISCOUNTS_26_PROMO"] = "for-discounts---26-promo";
  CATEGORY["FOR_RULES_ALL_INTERNET_TV_WIGO"] = "for-rules---all-internet--tv-wigo";
  CATEGORY["FOR_RULES_PRICE_REDUCTION_DURING_3_MONTHS"] = "for-rules---price-reduction-during-3-months";
  CATEGORY["FOR_RULES_FOR_112721_DISCOUNT"] = "for-rules---for-112721-discount";
  CATEGORY["FOR_RULES_FIXED_AND_BUNDLES_CATEGORY"] = "for-rules---fixed-and-bundles-category";
  CATEGORY["FOR_RULES_ALL_INTERNET_TELENET_TV_ICONIC_ALL_INTERNET_TELENET_TV_FLOW_ONE_FOR_X_ONEUP_FOR_X"] = "for-rules---all-internet--telenet-tv-iconic--all-internet--telenet-tv-flow--one-for-x--oneup-for-x";
  CATEGORY["FOR_RULES_OFFERINGS_FOR_120531"] = "for-rules---offerings-for-120531";
  CATEGORY["FOR_RULES_SUBSCRIPTION_CABLE_TV"] = "for-rules--subscription-cable-tv";
  CATEGORY["FOR_RULES_2_P_BUNDLES_INTERNET_IDTV"] = "for-rules---2p-bundles-internet-idtv";
  CATEGORY["FOR_RULES_FREE_ACTIVATION_PROMO"] = "for-rules---free-activation-promo";
  CATEGORY["_2P_BUNDLE"] = "2p-bundle";
  CATEGORY["FOR_RULES_MULTI_DTV_PROMO"] = "for-rules---multi-dtv-promo";
  CATEGORY["FOR_RULES_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE"] = "for-rules---2p1p-plans-where-safespot-is-payable";
  CATEGORY["FOR_RULES_PARTNER_DISCOUNT_ONEUP_WITH_FIXED_LINE"] = "for-rules---partner-discount-oneup-with-fixed-line";
  CATEGORY["FOR_RULES_FOR_124951_DISCOUNT"] = "for-rules---for-124951-discount";
  CATEGORY["FOR_RULES_FOR_107020_DISCOUNTS"] = "for-rules---for-107020-discounts";
  CATEGORY["FOR_RULES_DISCOUNTED_OFFERINGS_FOR_107800"] = "for-rules---discounted-offerings-for-107800";
  CATEGORY["FOR_RULES_ALL_INTERNET_INTERNET_FIBER_200"] = "for-rules---all-internet-internet-fiber-200";
  CATEGORY["FOR_RULES_875_DISCOUNT"] = "for-rules---875-discount";
  CATEGORY["FOR_RULES_139601_PROMO"] = "for-rules---139601-promo";
  CATEGORY["FOR_RULES_141321_INT_LINES"] = "for-rules---141321-int-lines";
  CATEGORY["FOR_RULES_9_PERSONEELSKORTING_TELENET"] = "for-rules---9-personeelskorting-telenet";
  CATEGORY["POST_PAID_MOBILE"] = "post-paid-mobile";
})(CATEGORY || (CATEGORY = {}));
const WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS = 'watch-live-and-delayed-tv-on-33-channels';
const ONBEPERKT_SURFEN = 'Onbeperkt surfen';
const SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP = 'spec-fixedinternet-volume-download-fup';
const SPEC_FIXEDINTERNET_MAILBOX_INCLUDED = 'spec-fixedinternet-mailbox-included';
const ALL_INTERNET_LOGO = 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/all-internet-+-telenet-tv-iconic.png';
const ALL_INTERNET_TELENET_TV = 'All-Internet + Telenet TV';
const RECURRENT_CHARGE = 'Recurrent Charge';
const INTERNET_DTV = 'Internet+DTV';
const INTERNET_SERVICE_LOGO = 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/internet-service.png';
const IDDTV_ACCESS_LOGO = 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/idtv-access-(sipadan).png';
const DTV_SIPADAN_TYPE = 'dtv[SIPADAN]';
const ALL_INTERNET_TELENET_TVICONIC_LABEL = 'All-Internet + Telenet TV Iconic';
const PRODUCTION_TEST = 'production-test';
const DOWNLOADSNELHEID_TOT = 'Downloadsnelheid: tot';
const THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY = 'the-best-local-and-international-series-with-play';
const AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS = 'automatically-save-programs-for-up-to-60-days';
const SPEC_FIXEDINTERNET_SPEED_UPLOAD = 'spec-fixedinternet-speed-upload';
const UPLOADSNELHEID_TOT = 'Uploadsnelheid: tot';
const SPEC_FIXEDINTERNET_SPEED_DOWNLOAD = 'spec-fixedinternet-speed-download';
const WATCH_TV_BACK_UP_TO_7_DAYS = 'watch-tv-back-up-to-7-days';
const WATCH_TV_BACK_UP = 'Watch TV back up';
const PER_MAILBOX = 'per mailbox';
const SPEC_FIXEDINTERNET_MAILBOX_VOLUME = 'spec-fixedinternet-mailbox-volume';
class ProductTestfactory {
  getProductsMockWithBundle() {
    return [{
      isC5Bundle() {
        return false;
      },
      children: [{
        isProductActivationInProgress() {
          return false;
        },
        isProductDisconnectionInProgress() {
          return false;
        },
        isProductModificationInProgress() {
          return false;
        },
        isProductSuspended() {
          return false;
        },
        isProductActive() {
          return true;
        },
        id: '9167320892413189785',
        productInfo: {
          isShowRates() {
            return false;
          },
          getSortedSpecifications() {
            return [{
              labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
              unit: 'GB',
              value: 'unlimited',
              visible: true,
              weight: '10',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: ONBEPERKT_SURFEN
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: false,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: true
            }, {
              labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
              visible: true,
              weight: '20',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
              unit: 'GB',
              value: '5',
              visible: true,
              weight: '20',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: PER_MAILBOX
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
              visible: true,
              weight: '40',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_TV_BACK_UP
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
              unit: 'Mbps',
              value: '300',
              visible: true,
              weight: '40',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: DOWNLOADSNELHEID_TOT
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
              visible: true,
              weight: '50',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
              unit: 'Mbps',
              value: '20',
              visible: true,
              weight: '50',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: UPLOADSNELHEID_TOT
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
              visible: true,
              weight: '60',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
              value: '10',
              visible: true,
              weight: '60',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: 'mailboxen'
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }];
          },
          internalCategory: CATEGORY.POST_PAID_MOBILE,
          productId: 'TWOP0013',
          isYupProduct: false,
          externalProductCode: 'TWOP0013',
          productType: 'BUNDLE',
          categories: [...[CATEGORY.FOR_RULES_2_ND_HOME_PROMO_MANUAL, CATEGORY.FOR_RULES_FOR_129521_DISCOUNT, CATEGORY.FOR_RULES_125420_PROMO, CATEGORY.FOR_RULES_2_P_BUNDLES_FOR_649, CATEGORY.FOR_RULES_874_PROMO, CATEGORY.FOR_RULES_TLOS_WITH_TELENET_TV_1_0, CATEGORY.FOR_DISCOUNTS_874_PROMO, CATEGORY.FOR_RULES_FOR_110620_DISCOUNT, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_EXCEPT_ONEUP, CATEGORY.FOR_RULES_453_EXTERNE_MEDEWERKERS_KORTING, CATEGORY.FOR_RULES_OFFERINGS_FOR_107800, CATEGORY.FOR_DISCOUNTS_FOR_120800_AND_120820, CATEGORY.FOR_DISCOUNTS_782_PROMO, CATEGORY.FOR_DISCOUNT_2_ND_HOME_PROMO_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TLOS_WITH_SPEEDBOOST, CATEGORY.FOR_RULES_4_P_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_2_P_BUNDLES, CATEGORY.FOR_DISCOUNT_121810_PROMO, CATEGORY.FOR_RULES_TOP_OFFERING_WITH_SERVICE_POLICIES, CATEGORY.FOR_RULES_WIGO_FOR_126941, CATEGORY.FOR_DISCOUNT_2_P_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TV_ICONIC_FLOW_ONLY, CATEGORY.STAFF_DISCOUNT_FURIOUS_WITH_FIXED_LINE_NEW_OFFERING, CATEGORY.FOR_RULES_WIGOONEUP_BUNDLES, CATEGORY.FOR_DISCOUNTS_159_PROMO, CATEGORY.FOR_RULES_PARTNER_DISCOUNT, CATEGORY.FOR_DISCOUNTS_117200_PROMO, CATEGORY.FOR_RULES_115810_ONLY, CATEGORY.FOR_DISCOUNTS_132941_PROMO, CATEGORY.FOR_DISCOUNT_GROUP_DISCOUNT_MANUAL, CATEGORY.FOR_RULES_RES_DIGITAL_TV_AND_BUNDLES_WITH_DIGITAL_TV, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO_FOR_100650, CATEGORY.FOR_RULES_139331_PROMO, CATEGORY.FOR_RULES_649_ONLY, CATEGORY.FOR_RULES_TLOS_FOR_3_TB_FUP_INTERNET_SERVICE_POLICIES, CATEGORY.FOR_RULES_RES_BUNDLES, CATEGORY.FOR_DISCOUNTS_133331_PROMO, CATEGORY.FOR_SPONSOR_DISCOUNT_ALL_TLO_PRODUCTS, CATEGORY.FOR_DISCOUNT_FOR_107020_DISCOUNTS, CATEGORY.FOR_DISCOUNTS_26_PROMO, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO, CATEGORY.FOR_RULES_PRICE_REDUCTION_DURING_3_MONTHS, CATEGORY.FOR_RULES_FOR_112721_DISCOUNT, CATEGORY.FOR_RULES_FIXED_AND_BUNDLES_CATEGORY, CATEGORY.FOR_RULES_ALL_INTERNET_TELENET_TV_ICONIC_ALL_INTERNET_TELENET_TV_FLOW_ONE_FOR_X_ONEUP_FOR_X, CATEGORY.FOR_RULES_OFFERINGS_FOR_120531, CATEGORY.FOR_RULES_SUBSCRIPTION_CABLE_TV, CATEGORY.FOR_RULES_2_P_BUNDLES_INTERNET_IDTV, CATEGORY.FOR_RULES_FREE_ACTIVATION_PROMO, CATEGORY._2P_BUNDLE, CATEGORY.FOR_RULES_MULTI_DTV_PROMO, CATEGORY.FOR_RULES_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_ONEUP_WITH_FIXED_LINE, CATEGORY.FOR_RULES_FOR_124951_DISCOUNT, CATEGORY.FOR_RULES_FOR_107020_DISCOUNTS, CATEGORY.FOR_RULES_DISCOUNTED_OFFERINGS_FOR_107800, CATEGORY.FOR_RULES_ALL_INTERNET_INTERNET_FIBER_200, CATEGORY.FOR_RULES_875_DISCOUNT, CATEGORY.FOR_RULES_139601_PROMO, CATEGORY.FOR_RULES_141321_INT_LINES, CATEGORY.FOR_RULES_9_PERSONEELSKORTING_TELENET, CATEGORY.POST_PAID_MOBILE]],
          customerCategories: ['residential', 'eventdemo', PRODUCTION_TEST],
          subCategory: {},
          labelKey: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          visible: true,
          weight: 370,
          services: [{
            serviceType: 'DTV',
            specifications: [{
              labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
              visible: true,
              weight: '20',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
              }
            }, {
              labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
              visible: true,
              weight: '60',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
              }
            }, {
              labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
              visible: true,
              weight: '40',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_TV_BACK_UP
              }
            }, {
              labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
              visible: true,
              weight: '50',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
              }
            }],
            experience: {
              experienceType: 'ENTERTAINMENT'
            }
          }, {
            serviceType: 'FIXED_INTERNET',
            specifications: [{
              labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
              unit: 'GB',
              value: 'unlimited',
              visible: true,
              weight: '10',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: ONBEPERKT_SURFEN
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
              unit: 'Mbps',
              value: '300',
              visible: true,
              weight: '40',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: DOWNLOADSNELHEID_TOT
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
              unit: 'GB',
              value: '5',
              visible: true,
              weight: '20',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: PER_MAILBOX
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
              unit: 'Mbps',
              value: '20',
              visible: true,
              weight: '50',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: UPLOADSNELHEID_TOT
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
              value: '10',
              visible: true,
              weight: '60',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: 'mailboxen'
              }
            }],
            experience: {
              experienceType: 'SURF'
            }
          }],
          apps: [],
          localizedContent: [{
            locale: 'en',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }, {
            locale: 'nl',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }, {
            locale: 'fr',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }],
          shortDescription: {
            localizedContent: {
              locale: 'nl',
              name: ALL_INTERNET_TELENET_TV
            }
          },
          visibilityRules: {
            conditionalVisibility: false
          },
          unlimited: false,
          eligibleForDiscount: false,
          priceType: RECURRENT_CHARGE,
          characteristics: {
            serviceCategory: 'FUP',
            productGroup: 'FMC',
            productSubGroup: INTERNET_DTV,
            productSegment: 'RMD',
            priceInclVat: 74,
            recipientsMandatory: false,
            esimAvailable: false
          },
          usageBasedRatePlan: false,
          requiresInstallation: true,
          chars: [{
            key: 'internet_usage_limit',
            values: ['3000'],
            unit: 'GB'
          }, {
            key: 'internet_usage_initial_threshold',
            values: ['2400'],
            unit: 'GB'
          }, {
            key: 'internet_usage_alert_threshold',
            values: ['2700'],
            unit: 'GB'
          }],
          isExternalContentPack: 'false',
          isEligibleForSettinglimits: false,
          isEligibleForAutoPause: false,
          isEligibleForPauseProfile: false,
          isFPBProduct: false,
          name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          logo: ALL_INTERNET_LOGO,
          usageLimits: {
            premiumService: {
              preferenceGroup: 'PremiumServices',
              limits: [{
                communicationPreferenceType: 'OutBundleFraud',
                communicationPreferenceTypeValue: 'NA',
                isEditable: false,
                values: []
              }, {
                communicationPreferenceType: 'OutBundlePremiumSpendingLimit',
                communicationPreferenceTypeValue: 'NA',
                isEditable: false,
                values: []
              }]
            }
          },
          usagenotifications: {
            mobile: [],
            internet: [{
              category: 'FUP',
              preferenceGroup: 'InternetFUP',
              threshold: [{
                communicationPreferenceType: 'Internet90',
                communicationPreferenceTypeValue: '90',
                isEditable: false,
                values: []
              }, {
                communicationPreferenceType: 'Internet100',
                communicationPreferenceTypeValue: '100',
                isEditable: false,
                values: []
              }]
            }]
          },
          productConstituents: [{
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'internet_line',
            minCount: '1',
            maxCount: '1'
          }]
        },
        handsets: [],
        productType: 'internet',
        addressId: '9165638478413166537',
        identifier: 'INT000063582',
        hasIncludedOptions: false,
        options: [],
        hasExtraOptions: false,
        label: 'Internet Service',
        productSpec: {
          internalCategory: CATEGORY.POST_PAID_MOBILE,
          productId: 'INLN0001',
          isYupProduct: false,
          externalProductCode: 'INLN0001',
          productType: 'INTERNET LINE',
          categories: ['for-rules---intenet-technical-lines', 'for-rules---technical-line-slos', 'for-rules---technical-line-slostv-equipmentmbp', 'for-rules---products-for-installation-fee', 'for-rules---lines-for-discount-slot', 'for-rules---mbp-digital-products', 'for-rules---fixed-interactive-product', 'for-rules---bundle-tlos-technical-lines-for-res-and-b2b', 'for-rules---internet-service--tv-acces-for-2p-bundles', 'for-rules---res-products-for-mailbox', 'for-rules---fixed-interactive-product-res--b2b', 'for-rules---fixed-interactive-product-res--b2b-with-tv-lines', 'for-rules---fixed-interactive-product-res-with-tv-lines', 'for-rules---fixed-interactive-product-res--b2b-with-all-tv-lines', 'for-rules---fixed-interactive-product-res-with-all-tv-lines', 'for-rules---fixeddtvinternst-accesses', 'for-rules---products-with-activation-trigger-char-c-res--b2b', 'for-rules---products-with-tech-workaround-sale-char-c-res--b2b', 'for-rules---fixed-technical-lines-resb2b'],
          customerCategories: ['residential', 'eventdemo', PRODUCTION_TEST],
          subCategory: {},
          labelKey: 'Internet Service',
          visible: true,
          weight: 10,
          services: [{
            serviceType: 'FIXED_INTERNET',
            specifications: [],
            experience: {
              experienceType: 'SURF'
            }
          }],
          apps: [],
          localizedContent: [{
            locale: 'en',
            name: 'Internet',
            logo: INTERNET_SERVICE_LOGO
          }, {
            locale: 'nl',
            name: 'Internet',
            logo: INTERNET_SERVICE_LOGO
          }, {
            locale: 'fr',
            name: 'Internet',
            logo: INTERNET_SERVICE_LOGO
          }],
          shortDescription: {},
          visibilityRules: {
            conditionalVisibility: false
          },
          unlimited: false,
          eligibleForDiscount: false,
          priceType: RECURRENT_CHARGE,
          characteristics: {
            productGroup: 'OTHER',
            productSubGroup: '',
            productSegment: 'RMD',
            priceInclVat: 0,
            recipientsMandatory: false,
            esimAvailable: false
          },
          usageBasedRatePlan: false,
          requiresInstallation: false,
          isExternalContentPack: 'false',
          isEligibleForSettinglimits: false,
          isEligibleForAutoPause: false,
          isEligibleForPauseProfile: false,
          isFPBProduct: false,
          name: 'Internet',
          logo: INTERNET_SERVICE_LOGO
        },
        status: 'ACTIVE',
        bundleMaxlines: null
      }, {
        isProductActivationInProgress() {
          return false;
        },
        isProductDisconnectionInProgress() {
          return false;
        },
        isProductModificationInProgress() {
          return false;
        },
        isProductSuspended() {
          return false;
        },
        isProductActive() {
          return true;
        },
        id: '9167320897313189785',
        productInfo: {
          isShowRates() {
            return false;
          },
          getSortedSpecifications() {
            return [{
              labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
              unit: 'GB',
              value: 'unlimited',
              visible: true,
              weight: '10',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: ONBEPERKT_SURFEN
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: false,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: true
            }, {
              labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
              visible: true,
              weight: '20',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
              unit: 'GB',
              value: '5',
              visible: true,
              weight: '20',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: PER_MAILBOX
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
              visible: true,
              weight: '40',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_TV_BACK_UP
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
              unit: 'Mbps',
              value: '300',
              visible: true,
              weight: '40',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: DOWNLOADSNELHEID_TOT
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
              visible: true,
              weight: '50',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
              unit: 'Mbps',
              value: '20',
              visible: true,
              weight: '50',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: UPLOADSNELHEID_TOT
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
              visible: true,
              weight: '60',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
              },
              serviceType: 'DTV',
              id: 'TWOP0013',
              showUnit: false,
              isValue: false,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
              value: '10',
              visible: true,
              weight: '60',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: 'mailboxen'
              },
              serviceType: 'FIXED_INTERNET',
              id: 'TWOP0013',
              showUnit: true,
              isValue: true,
              isMonetary: false,
              isRange: false,
              isAsterisk: false
            }];
          },
          internalCategory: CATEGORY.POST_PAID_MOBILE,
          productId: 'TWOP0013',
          isYupProduct: false,
          externalProductCode: 'TWOP0013',
          productType: 'BUNDLE',
          categories: [CATEGORY.FOR_RULES_2_ND_HOME_PROMO_MANUAL, CATEGORY.FOR_RULES_FOR_129521_DISCOUNT, CATEGORY.FOR_RULES_125420_PROMO, CATEGORY.FOR_RULES_2_P_BUNDLES_FOR_649, CATEGORY.FOR_RULES_874_PROMO, CATEGORY.FOR_RULES_TLOS_WITH_TELENET_TV_1_0, CATEGORY.FOR_DISCOUNTS_874_PROMO, CATEGORY.FOR_RULES_FOR_110620_DISCOUNT, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_EXCEPT_ONEUP, CATEGORY.FOR_RULES_453_EXTERNE_MEDEWERKERS_KORTING, CATEGORY.FOR_RULES_OFFERINGS_FOR_107800, CATEGORY.FOR_DISCOUNTS_FOR_120800_AND_120820, CATEGORY.FOR_DISCOUNTS_782_PROMO, CATEGORY.FOR_DISCOUNT_2_ND_HOME_PROMO_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TLOS_WITH_SPEEDBOOST, CATEGORY.FOR_RULES_4_P_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_2_P_BUNDLES, CATEGORY.FOR_DISCOUNT_121810_PROMO, CATEGORY.FOR_RULES_TOP_OFFERING_WITH_SERVICE_POLICIES, CATEGORY.FOR_RULES_WIGO_FOR_126941, CATEGORY.FOR_DISCOUNT_2_P_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TV_ICONIC_FLOW_ONLY, CATEGORY.STAFF_DISCOUNT_FURIOUS_WITH_FIXED_LINE_NEW_OFFERING, CATEGORY.FOR_RULES_WIGOONEUP_BUNDLES, CATEGORY.FOR_DISCOUNTS_159_PROMO, CATEGORY.FOR_RULES_PARTNER_DISCOUNT, CATEGORY.FOR_DISCOUNTS_117200_PROMO, CATEGORY.FOR_RULES_115810_ONLY, CATEGORY.FOR_DISCOUNTS_132941_PROMO, CATEGORY.FOR_DISCOUNT_GROUP_DISCOUNT_MANUAL, CATEGORY.FOR_RULES_RES_DIGITAL_TV_AND_BUNDLES_WITH_DIGITAL_TV, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO_FOR_100650, CATEGORY.FOR_RULES_139331_PROMO, CATEGORY.FOR_RULES_649_ONLY, CATEGORY.FOR_RULES_TLOS_FOR_3_TB_FUP_INTERNET_SERVICE_POLICIES, CATEGORY.FOR_RULES_RES_BUNDLES, CATEGORY.FOR_DISCOUNTS_133331_PROMO, CATEGORY.FOR_SPONSOR_DISCOUNT_ALL_TLO_PRODUCTS, CATEGORY.FOR_DISCOUNT_FOR_107020_DISCOUNTS, CATEGORY.FOR_DISCOUNTS_26_PROMO, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO, CATEGORY.FOR_RULES_PRICE_REDUCTION_DURING_3_MONTHS, CATEGORY.FOR_RULES_FOR_112721_DISCOUNT, CATEGORY.FOR_RULES_FIXED_AND_BUNDLES_CATEGORY, CATEGORY.FOR_RULES_ALL_INTERNET_TELENET_TV_ICONIC_ALL_INTERNET_TELENET_TV_FLOW_ONE_FOR_X_ONEUP_FOR_X, CATEGORY.FOR_RULES_OFFERINGS_FOR_120531, CATEGORY.FOR_RULES_SUBSCRIPTION_CABLE_TV, CATEGORY.FOR_RULES_2_P_BUNDLES_INTERNET_IDTV, CATEGORY.FOR_RULES_FREE_ACTIVATION_PROMO, CATEGORY._2P_BUNDLE, CATEGORY.FOR_RULES_MULTI_DTV_PROMO, CATEGORY.FOR_RULES_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_ONEUP_WITH_FIXED_LINE, CATEGORY.FOR_RULES_FOR_124951_DISCOUNT, CATEGORY.FOR_RULES_FOR_107020_DISCOUNTS, CATEGORY.FOR_RULES_DISCOUNTED_OFFERINGS_FOR_107800, CATEGORY.FOR_RULES_ALL_INTERNET_INTERNET_FIBER_200, CATEGORY.FOR_RULES_875_DISCOUNT, CATEGORY.FOR_RULES_139601_PROMO, CATEGORY.FOR_RULES_141321_INT_LINES, CATEGORY.FOR_RULES_9_PERSONEELSKORTING_TELENET, CATEGORY.POST_PAID_MOBILE],
          customerCategories: ['residential', 'eventdemo', PRODUCTION_TEST],
          subCategory: {},
          labelKey: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          visible: true,
          weight: 370,
          services: [{
            serviceType: 'DTV',
            specifications: [{
              labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
              visible: true,
              weight: '20',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
              }
            }, {
              labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
              visible: true,
              weight: '60',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
              }
            }, {
              labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
              visible: true,
              weight: '40',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: WATCH_TV_BACK_UP
              }
            }, {
              labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
              visible: true,
              weight: '50',
              productType: 'DTV',
              localizedContent: {
                locale: 'nl',
                name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
              }
            }],
            experience: {
              experienceType: 'ENTERTAINMENT'
            }
          }, {
            serviceType: 'FIXED_INTERNET',
            specifications: [{
              labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
              unit: 'GB',
              value: 'unlimited',
              visible: true,
              weight: '10',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: ONBEPERKT_SURFEN
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
              unit: 'Mbps',
              value: '300',
              visible: true,
              weight: '40',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: DOWNLOADSNELHEID_TOT
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
              unit: 'GB',
              value: '5',
              visible: true,
              weight: '20',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: PER_MAILBOX
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
              unit: 'Mbps',
              value: '20',
              visible: true,
              weight: '50',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: UPLOADSNELHEID_TOT
              }
            }, {
              labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
              value: '10',
              visible: true,
              weight: '60',
              productType: 'INTERNET',
              localizedContent: {
                locale: 'nl',
                name: 'mailboxen'
              }
            }],
            experience: {
              experienceType: 'SURF'
            }
          }],
          apps: [],
          localizedContent: [{
            locale: 'en',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }, {
            locale: 'nl',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }, {
            locale: 'fr',
            name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
            logo: ALL_INTERNET_LOGO
          }],
          shortDescription: {
            localizedContent: {
              locale: 'nl',
              name: ALL_INTERNET_TELENET_TV
            }
          },
          visibilityRules: {
            conditionalVisibility: false
          },
          unlimited: false,
          eligibleForDiscount: false,
          priceType: RECURRENT_CHARGE,
          characteristics: {
            serviceCategory: 'FUP',
            productGroup: 'FMC',
            productSubGroup: INTERNET_DTV,
            productSegment: 'RMD',
            priceInclVat: 74,
            recipientsMandatory: false,
            esimAvailable: false
          },
          usageBasedRatePlan: false,
          requiresInstallation: true,
          chars: [{
            key: 'internet_usage_limit',
            values: ['3000'],
            unit: 'GB'
          }, {
            key: 'internet_usage_initial_threshold',
            values: ['2400'],
            unit: 'GB'
          }, {
            key: 'internet_usage_alert_threshold',
            values: ['2700'],
            unit: 'GB'
          }],
          isExternalContentPack: 'false',
          isEligibleForSettinglimits: false,
          isEligibleForAutoPause: false,
          isEligibleForPauseProfile: false,
          isFPBProduct: false,
          name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          logo: ALL_INTERNET_LOGO,
          usageLimits: {
            premiumService: {
              preferenceGroup: 'PremiumServices',
              limits: [{
                communicationPreferenceType: 'OutBundleFraud',
                communicationPreferenceTypeValue: 'NA',
                isEditable: false,
                values: []
              }, {
                communicationPreferenceType: 'OutBundlePremiumSpendingLimit',
                communicationPreferenceTypeValue: 'NA',
                isEditable: false,
                values: []
              }]
            }
          },
          usagenotifications: {
            mobile: [],
            internet: [{
              category: 'FUP',
              preferenceGroup: 'InternetFUP',
              threshold: [{
                communicationPreferenceType: 'Internet90',
                communicationPreferenceTypeValue: '90',
                isEditable: false,
                values: []
              }, {
                communicationPreferenceType: 'Internet100',
                communicationPreferenceTypeValue: '100',
                isEditable: false,
                values: []
              }]
            }]
          },
          productConstituents: [{
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: DTV_SIPADAN_TYPE,
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'dtv[EOS]',
            minCount: '0',
            maxCount: '1'
          }, {
            type: 'internet_line',
            minCount: '1',
            maxCount: '1'
          }]
        },
        handsets: [],
        productType: 'dtv',
        addressId: '9165638478413166537',
        identifier: 'DTV000025139',
        hasIncludedOptions: false,
        options: [],
        hasExtraOptions: false,
        label: 'iDTV access (Sipadan)',
        productSpec: {
          internalCategory: CATEGORY.POST_PAID_MOBILE,
          productId: 'TSIP0001',
          isYupProduct: false,
          externalProductCode: 'TSIP0001',
          productType: 'IDTV LINE',
          categories: ['for-rules---atvdtvidtv', 'for-rules---idtv-accessessipadan-for-stb-update', 'for-rules---technical-line-slos', 'for-rules---dtv-lines', 'for-rules---lines-for-discount-slot', 'for-rules---technical-line-slostv-equipmentmbp', 'for-rules---idtv-accesses-under-tv-and-bundles', 'for-rules---mbp-digital-products', 'for-rules---bundle-tlos-technical-lines-for-res-and-b2b', 'for-rules---idtv', 'for-rules---internet-service--tv-acces-for-2p-bundles', 'for-rules---idtv-access-eossipadan', 'for-rules---res-products-for-mailbox', 'for-rules---idtv-accessessipadan', 'for-rules---fixed-interactive-product-res--b2b-with-tv-lines', 'for-rules---fixed-interactive-product-res-with-tv-lines', 'for-rules---fixed-interactive-product-res--b2b-with-all-tv-lines', 'for-rules---fixed-interactive-product-res-with-all-tv-lines', 'for-rules---idtv-sipadan-resb2b', 'for-rules---fixed-technical-lines-resb2b', 'for-rules---res-idtv-accesses', 'for-rules---res-idtv-and-ott-accesses', 'for-rules---res-and-b2b-idtv-access-eossipadan'],
          customerCategories: ['all', 'residential', 'production-test-business', 'internal', PRODUCTION_TEST, 'eventdemo', 'business'],
          subCategory: {},
          labelKey: 'iDTV access (Sipadan)',
          visible: true,
          weight: 40,
          services: [{
            serviceType: 'DTV',
            specifications: [],
            experience: {
              experienceType: 'ENTERTAINMENT'
            }
          }],
          apps: [],
          localizedContent: [{
            locale: 'en',
            name: 'Digital TV access',
            logo: IDDTV_ACCESS_LOGO
          }, {
            locale: 'nl',
            name: 'Toegang digitale tv',
            logo: IDDTV_ACCESS_LOGO
          }, {
            locale: 'fr',
            name: 'Accès TV digitale',
            logo: IDDTV_ACCESS_LOGO
          }],
          shortDescription: {},
          visibilityRules: {
            conditionalVisibility: false
          },
          unlimited: false,
          eligibleForDiscount: false,
          priceType: RECURRENT_CHARGE,
          characteristics: {
            productGroup: 'OTHER',
            productSubGroup: '',
            productSegment: 'ALL',
            priceInclVat: 0,
            recipientsMandatory: false,
            esimAvailable: false
          },
          usageBasedRatePlan: false,
          requiresInstallation: true,
          maxCount: '1',
          isExternalContentPack: 'false',
          isEligibleForSettinglimits: false,
          isEligibleForAutoPause: false,
          isEligibleForPauseProfile: false,
          isFPBProduct: false,
          name: 'Toegang digitale tv',
          logo: IDDTV_ACCESS_LOGO,
          productConstituents: []
        },
        status: 'ACTIVE',
        bundleMaxlines: null
      }],
      bundleType: INTERNET_DTV,
      productInfo: {
        hasCategory() {
          return false;
        },
        getSortedSpecifications() {
          return [{
            labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
            unit: 'GB',
            value: 'unlimited',
            visible: true,
            weight: '10',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: ONBEPERKT_SURFEN
            },
            serviceType: 'FIXED_INTERNET',
            id: 'TWOP0013',
            showUnit: false,
            isValue: true,
            isMonetary: false,
            isRange: false,
            isAsterisk: true
          }, {
            labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
            visible: true,
            weight: '20',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
            },
            serviceType: 'DTV',
            id: 'TWOP0013',
            showUnit: false,
            isValue: false,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
            unit: 'GB',
            value: '5',
            visible: true,
            weight: '20',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: PER_MAILBOX
            },
            serviceType: 'FIXED_INTERNET',
            id: 'TWOP0013',
            showUnit: true,
            isValue: true,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
            visible: true,
            weight: '40',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: WATCH_TV_BACK_UP
            },
            serviceType: 'DTV',
            id: 'TWOP0013',
            showUnit: false,
            isValue: false,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
            unit: 'Mbps',
            value: '300',
            visible: true,
            weight: '40',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: DOWNLOADSNELHEID_TOT
            },
            serviceType: 'FIXED_INTERNET',
            id: 'TWOP0013',
            showUnit: true,
            isValue: true,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
            visible: true,
            weight: '50',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
            },
            serviceType: 'DTV',
            id: 'TWOP0013',
            showUnit: false,
            isValue: false,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
            unit: 'Mbps',
            value: '20',
            visible: true,
            weight: '50',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: UPLOADSNELHEID_TOT
            },
            serviceType: 'FIXED_INTERNET',
            id: 'TWOP0013',
            showUnit: true,
            isValue: true,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
            visible: true,
            weight: '60',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
            },
            serviceType: 'DTV',
            id: 'TWOP0013',
            showUnit: false,
            isValue: false,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }, {
            labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
            value: '10',
            visible: true,
            weight: '60',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: 'mailboxen'
            },
            serviceType: 'FIXED_INTERNET',
            id: 'TWOP0013',
            showUnit: true,
            isValue: true,
            isMonetary: false,
            isRange: false,
            isAsterisk: false
          }];
        },
        internalCategory: CATEGORY.POST_PAID_MOBILE,
        productId: 'TWOP0013',
        isYupProduct: false,
        externalProductCode: 'TWOP0013',
        productType: 'BUNDLE',
        categories: [CATEGORY.FOR_RULES_2_ND_HOME_PROMO_MANUAL, CATEGORY.FOR_RULES_FOR_129521_DISCOUNT, CATEGORY.FOR_RULES_125420_PROMO, CATEGORY.FOR_RULES_2_P_BUNDLES_FOR_649, CATEGORY.FOR_RULES_874_PROMO, CATEGORY.FOR_RULES_TLOS_WITH_TELENET_TV_1_0, CATEGORY.FOR_DISCOUNTS_874_PROMO, CATEGORY.FOR_RULES_FOR_110620_DISCOUNT, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_EXCEPT_ONEUP, CATEGORY.FOR_RULES_453_EXTERNE_MEDEWERKERS_KORTING, CATEGORY.FOR_RULES_OFFERINGS_FOR_107800, CATEGORY.FOR_DISCOUNTS_FOR_120800_AND_120820, CATEGORY.FOR_DISCOUNTS_782_PROMO, CATEGORY.FOR_DISCOUNT_2_ND_HOME_PROMO_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TLOS_WITH_SPEEDBOOST, CATEGORY.FOR_RULES_4_P_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_2_P_BUNDLES, CATEGORY.FOR_DISCOUNT_121810_PROMO, CATEGORY.FOR_RULES_TOP_OFFERING_WITH_SERVICE_POLICIES, CATEGORY.FOR_RULES_WIGO_FOR_126941, CATEGORY.FOR_DISCOUNT_2_P_3_P_BUNDLES_INTERNET, CATEGORY.FOR_RULES_TV_ICONIC_FLOW_ONLY, CATEGORY.STAFF_DISCOUNT_FURIOUS_WITH_FIXED_LINE_NEW_OFFERING, CATEGORY.FOR_RULES_WIGOONEUP_BUNDLES, CATEGORY.FOR_DISCOUNTS_159_PROMO, CATEGORY.FOR_RULES_PARTNER_DISCOUNT, CATEGORY.FOR_DISCOUNTS_117200_PROMO, CATEGORY.FOR_RULES_115810_ONLY, CATEGORY.FOR_DISCOUNTS_132941_PROMO, CATEGORY.FOR_DISCOUNT_GROUP_DISCOUNT_MANUAL, CATEGORY.FOR_RULES_RES_DIGITAL_TV_AND_BUNDLES_WITH_DIGITAL_TV, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO_FOR_100650, CATEGORY.FOR_RULES_139331_PROMO, CATEGORY.FOR_RULES_649_ONLY, CATEGORY.FOR_RULES_TLOS_FOR_3_TB_FUP_INTERNET_SERVICE_POLICIES, CATEGORY.FOR_RULES_RES_BUNDLES, CATEGORY.FOR_DISCOUNTS_133331_PROMO, CATEGORY.FOR_SPONSOR_DISCOUNT_ALL_TLO_PRODUCTS, CATEGORY.FOR_DISCOUNT_FOR_107020_DISCOUNTS, CATEGORY.FOR_DISCOUNTS_26_PROMO, CATEGORY.FOR_RULES_ALL_INTERNET_TV_WIGO, CATEGORY.FOR_RULES_PRICE_REDUCTION_DURING_3_MONTHS, CATEGORY.FOR_RULES_FOR_112721_DISCOUNT, CATEGORY.FOR_RULES_FIXED_AND_BUNDLES_CATEGORY, CATEGORY.FOR_RULES_ALL_INTERNET_TELENET_TV_ICONIC_ALL_INTERNET_TELENET_TV_FLOW_ONE_FOR_X_ONEUP_FOR_X, CATEGORY.FOR_RULES_OFFERINGS_FOR_120531, CATEGORY.FOR_RULES_SUBSCRIPTION_CABLE_TV, CATEGORY.FOR_RULES_2_P_BUNDLES_INTERNET_IDTV, CATEGORY.FOR_RULES_FREE_ACTIVATION_PROMO, CATEGORY._2P_BUNDLE, CATEGORY.FOR_RULES_MULTI_DTV_PROMO, CATEGORY.FOR_RULES_2_P_1_P_PLANS_WHERE_SAFESPOT_IS_PAYABLE, CATEGORY.FOR_RULES_PARTNER_DISCOUNT_ONEUP_WITH_FIXED_LINE, CATEGORY.FOR_RULES_FOR_124951_DISCOUNT, CATEGORY.FOR_RULES_FOR_107020_DISCOUNTS, CATEGORY.FOR_RULES_DISCOUNTED_OFFERINGS_FOR_107800, CATEGORY.FOR_RULES_ALL_INTERNET_INTERNET_FIBER_200, CATEGORY.FOR_RULES_875_DISCOUNT, CATEGORY.FOR_RULES_139601_PROMO, CATEGORY.FOR_RULES_141321_INT_LINES, CATEGORY.FOR_RULES_9_PERSONEELSKORTING_TELENET, CATEGORY.POST_PAID_MOBILE],
        customerCategories: ['residential', 'eventdemo', PRODUCTION_TEST],
        subCategory: {},
        labelKey: ALL_INTERNET_TELENET_TVICONIC_LABEL,
        visible: true,
        weight: 370,
        services: [{
          serviceType: 'DTV',
          specifications: [{
            labelKey: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS,
            visible: true,
            weight: '20',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: WATCH_LIVE_AND_DELAYED_TV_ON_33_CHANNELS
            }
          }, {
            labelKey: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS,
            visible: true,
            weight: '60',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: AUTOMATICALLY_SAVE_PROGRAMS_FOR_UP_TO_60_DAYS
            }
          }, {
            labelKey: WATCH_TV_BACK_UP_TO_7_DAYS,
            visible: true,
            weight: '40',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: WATCH_TV_BACK_UP
            }
          }, {
            labelKey: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY,
            visible: true,
            weight: '50',
            productType: 'DTV',
            localizedContent: {
              locale: 'nl',
              name: THE_BEST_LOCAL_AND_INTERNATIONAL_SERIES_WITH_PLAY
            }
          }],
          experience: {
            experienceType: 'ENTERTAINMENT'
          }
        }, {
          serviceType: 'FIXED_INTERNET',
          specifications: [{
            labelKey: SPEC_FIXEDINTERNET_VOLUME_DOWNLOAD_FUP,
            unit: 'GB',
            value: 'unlimited',
            visible: true,
            weight: '10',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: ONBEPERKT_SURFEN
            }
          }, {
            labelKey: SPEC_FIXEDINTERNET_SPEED_DOWNLOAD,
            unit: 'Mbps',
            value: '300',
            visible: true,
            weight: '40',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: DOWNLOADSNELHEID_TOT
            }
          }, {
            labelKey: SPEC_FIXEDINTERNET_MAILBOX_VOLUME,
            unit: 'GB',
            value: '5',
            visible: true,
            weight: '20',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: PER_MAILBOX
            }
          }, {
            labelKey: SPEC_FIXEDINTERNET_SPEED_UPLOAD,
            unit: 'Mbps',
            value: '20',
            visible: true,
            weight: '50',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: UPLOADSNELHEID_TOT
            }
          }, {
            labelKey: SPEC_FIXEDINTERNET_MAILBOX_INCLUDED,
            value: '10',
            visible: true,
            weight: '60',
            productType: 'INTERNET',
            localizedContent: {
              locale: 'nl',
              name: 'mailboxen'
            }
          }],
          experience: {
            experienceType: 'SURF'
          }
        }],
        apps: [],
        localizedContent: [{
          locale: 'en',
          name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          logo: ALL_INTERNET_LOGO
        }, {
          locale: 'nl',
          name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          logo: ALL_INTERNET_LOGO
        }, {
          locale: 'fr',
          name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
          logo: ALL_INTERNET_LOGO
        }],
        shortDescription: {
          localizedContent: {
            locale: 'nl',
            name: ALL_INTERNET_TELENET_TV
          }
        },
        visibilityRules: {
          conditionalVisibility: false
        },
        unlimited: false,
        eligibleForDiscount: false,
        priceType: RECURRENT_CHARGE,
        characteristics: {
          serviceCategory: 'FUP',
          productGroup: 'FMC',
          productSubGroup: INTERNET_DTV,
          productSegment: 'RMD',
          priceInclVat: 74,
          recipientsMandatory: false,
          esimAvailable: false
        },
        usageBasedRatePlan: false,
        requiresInstallation: true,
        chars: [{
          key: 'internet_usage_limit',
          values: ['3000'],
          unit: 'GB'
        }, {
          key: 'internet_usage_initial_threshold',
          values: ['2400'],
          unit: 'GB'
        }, {
          key: 'internet_usage_alert_threshold',
          values: ['2700'],
          unit: 'GB'
        }],
        isExternalContentPack: 'false',
        isEligibleForSettinglimits: false,
        isEligibleForAutoPause: false,
        isEligibleForPauseProfile: false,
        isFPBProduct: false,
        name: ALL_INTERNET_TELENET_TVICONIC_LABEL,
        logo: ALL_INTERNET_LOGO,
        usageLimits: {
          premiumService: {
            preferenceGroup: 'PremiumServices',
            limits: [{
              communicationPreferenceType: 'OutBundleFraud',
              communicationPreferenceTypeValue: 'NA',
              isEditable: false,
              values: []
            }, {
              communicationPreferenceType: 'OutBundlePremiumSpendingLimit',
              communicationPreferenceTypeValue: 'NA',
              isEditable: false,
              values: []
            }]
          }
        },
        usagenotifications: {
          mobile: [],
          internet: [{
            category: 'FUP',
            preferenceGroup: 'InternetFUP',
            threshold: [{
              communicationPreferenceType: 'Internet90',
              communicationPreferenceTypeValue: '90',
              isEditable: false,
              values: []
            }, {
              communicationPreferenceType: 'Internet100',
              communicationPreferenceTypeValue: '100',
              isEditable: false,
              values: []
            }]
          }]
        },
        productConstituents: [{
          type: DTV_SIPADAN_TYPE,
          minCount: '0',
          maxCount: '1'
        }, {
          type: DTV_SIPADAN_TYPE,
          minCount: '0',
          maxCount: '1'
        }, {
          type: DTV_SIPADAN_TYPE,
          minCount: '0',
          maxCount: '1'
        }, {
          type: DTV_SIPADAN_TYPE,
          minCount: '0',
          maxCount: '1'
        }, {
          type: 'dtv[EOS]',
          minCount: '0',
          maxCount: '1'
        }, {
          type: 'dtv[EOS]',
          minCount: '0',
          maxCount: '1'
        }, {
          type: 'dtv[EOS]',
          minCount: '0',
          maxCount: '1'
        }, {
          type: 'dtv[EOS]',
          minCount: '0',
          maxCount: '1'
        }, {
          type: 'internet_line',
          minCount: '1',
          maxCount: '1'
        }]
      },
      handsets: [],
      productType: 'bundle',
      addressId: '9165638478413166537',
      identifier: 'INTDTV000013364',
      hasIncludedOptions: false,
      options: [],
      hasExtraOptions: false,
      accountNumber: 501365353,
      label: 'All-Internet + Telenet TV iconic',
      specUrl: 'https://api.int.telenet.be/omapi/public/product/TWOP0013',
      status: 'ACTIVE',
      price: {
        taxInclPrices: {}
      },
      isUnderMove: false,
      locationId: '9167320887513186766',
      showModemUpgradeBanner: false
    }];
  }
}

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


/***/ })

}])
//# sourceMappingURL=libs_foundation_demo_product_data-access_src_index_ts-_07ef1.js.map