(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_products-details_data-access_src_index_ts-_c2571"],{

/***/ 65877:
/*!**************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCTS_DETAILS_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_DETAILS_FEATURE_KEY),
/* harmony export */   ProductsDetailsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsFacade),
/* harmony export */   ProductsDetailsNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsNgrxModule),
/* harmony export */   ProductsDetailsOrderFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsOrderFacade),
/* harmony export */   ProductsDetailsRowContainerFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsRowContainerFacade),
/* harmony export */   featureState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.featureState),
/* harmony export */   initialState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   productsDetailsFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productsDetailsFeature),
/* harmony export */   productsDetailsReducers: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productsDetailsReducers),
/* harmony export */   selectCustomerProductHolding: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCustomerProductHolding),
/* harmony export */   selectHumanCheckoutUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHumanCheckoutUrl),
/* harmony export */   selectIsDarwinUser: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsDarwinUser),
/* harmony export */   selectIsFixedTelephoneRowVisible: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsFixedTelephoneRowVisible),
/* harmony export */   selectIsInternetRowVisible: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsInternetRowVisible),
/* harmony export */   selectIsMobileRowVisible: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsMobileRowVisible),
/* harmony export */   selectIsTvFlowRowVisible: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsTvFlowRowVisible),
/* harmony export */   selectIsTvIconicRowVisible: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsTvIconicRowVisible),
/* harmony export */   selectOffers: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectOffers),
/* harmony export */   selectProducts: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectProducts),
/* harmony export */   selectPromotions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSalesCheckoutUrl),
/* harmony export */   selectSalesOffer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSalesOffer)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 7182);


/***/ }),

/***/ 87445:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details-analytics.effects.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsAnalyticsEffects: () => (/* binding */ ProductsDetailsAnalyticsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products_details_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-details.actions */ 45457);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _products_details_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-details.selectors */ 39336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);












class DataLayerConstants {
  static #_ = this.MESSAGE_GROUPS = ['product-finder'];
  static #_2 = this.EVENT_NAME_VIEW_PRODUCT = 'product viewed';
  static #_3 = this.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED = 'order button clicked';
}
class ProductsDetailsAnalyticsEffects {
  constructor(actions$, dataLayerService, store) {
    this.actions$ = actions$;
    this.dataLayerService = dataLayerService;
    this.store = store;
    this.onOrderParkOrderEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_6__.selectProducts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(products => this.parkOrderEvent(products))), {
      dispatch: false
    });
    this.onUpdateProductsSendProductViewedEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateProducts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_6__.selectProducts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(products => this.sendProductViewedEvent(products))), {
      dispatch: false
    });
  }
  parkOrderEvent(products) {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventNameEnum.EVENT_NAME_BUTTON_CLICKED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.EVENT_TYPE_CLICK, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED,
        product: this.createUdlItems(products)
      }),
      category: this.categorySelfService(),
      strategy: udl__WEBPACK_IMPORTED_MODULE_4__.AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE
    });
  }
  categorySelfService() {
    return this.dataLayerService.createCategory('self-service');
  }
  enrichWithCommonAttributes(attributes) {
    return Object.assign(this.commonAttributes(), attributes);
  }
  commonAttributes() {
    return {
      intent: 'product finder',
      flowType: 'self-service',
      source: 'information'
    };
  }
  createUdlItems(products) {
    return products.map(product => new udl__WEBPACK_IMPORTED_MODULE_4__.ItemBuilder().withProductInfo(new udl__WEBPACK_IMPORTED_MODULE_4__.ProductBuilder().withProductId(product.omapiProduct.externalProductCode).withProductType(product.omapiProduct.productType).build()).build());
  }
  sendProductViewedEvent(products) {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_VIEW_PRODUCT, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.EVENT_TYPE_VIEW_PRODUCT_DETAILS, DataLayerConstants.MESSAGE_GROUPS),
      attributes: {
        product: this.createUdlItems(products)
      }
    });
  }
  static #_ = this.ɵfac = function ProductsDetailsAnalyticsEffects_Factory(t) {
    return new (t || ProductsDetailsAnalyticsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ProductsDetailsAnalyticsEffects,
    factory: ProductsDetailsAnalyticsEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 14996:
/*!************************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details-ngrx.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsNgrxModule: () => (/* binding */ ProductsDetailsNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _products_details_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-details.reducers */ 26850);
/* harmony import */ var _products_details_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-details.effects */ 59028);
/* harmony import */ var _products_details_analytics_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-details-analytics.effects */ 87445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ProductsDetailsNgrxModule {
  static #_ = this.ɵfac = function ProductsDetailsNgrxModule_Factory(t) {
    return new (t || ProductsDetailsNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ProductsDetailsNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_products_details_reducers__WEBPACK_IMPORTED_MODULE_2__.productsDetailsFeature), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature(_products_details_effects__WEBPACK_IMPORTED_MODULE_3__.ProductsDetailsEffects, _products_details_analytics_effects__WEBPACK_IMPORTED_MODULE_4__.ProductsDetailsAnalyticsEffects)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductsDetailsNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 45457:
/*!********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details.actions.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initEffects: () => (/* binding */ initEffects),
/* harmony export */   navigateToHumanCheckout: () => (/* binding */ navigateToHumanCheckout),
/* harmony export */   navigateToSalesCheckout: () => (/* binding */ navigateToSalesCheckout),
/* harmony export */   order: () => (/* binding */ order),
/* harmony export */   updateCustomerProductHolding: () => (/* binding */ updateCustomerProductHolding),
/* harmony export */   updateHumanCheckoutUrl: () => (/* binding */ updateHumanCheckoutUrl),
/* harmony export */   updateLoginDetails: () => (/* binding */ updateLoginDetails),
/* harmony export */   updateOffers: () => (/* binding */ updateOffers),
/* harmony export */   updateProducts: () => (/* binding */ updateProducts),
/* harmony export */   updatePromotions: () => (/* binding */ updatePromotions),
/* harmony export */   updateSalesCheckoutUrl: () => (/* binding */ updateSalesCheckoutUrl),
/* harmony export */   updateSalesOffer: () => (/* binding */ updateSalesOffer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const initEffects = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] init effects');
const updateLoginDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Details] update login details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePromotions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Details] update promotions', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCustomerProductHolding = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Details] update customer product holding', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateOffers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] update offers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] update products', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateSalesOffer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] update sales offer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateSalesCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] update sales checkout url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateHumanCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] update human checkout url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const order = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] order');
const navigateToSalesCheckout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] navigate to sales checkout');
const navigateToHumanCheckout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Details] navigate to human checkout');

/***/ }),

/***/ 59028:
/*!********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details.effects.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsEffects: () => (/* binding */ ProductsDetailsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products_details_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-details.actions */ 45457);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _products_details_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-details.selectors */ 39336);
/* harmony import */ var _infrastructure_sales_offer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infrastructure/sales-offer.service */ 69334);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);

















class ProductsDetailsEffects {
  constructor(actions$, store, loginService, promotionService, customerProductHoldingService, urlService, jsonUrlService, productService, salesOfferService) {
    this.actions$ = actions$;
    this.store = store;
    this.loginService = loginService;
    this.promotionService = promotionService;
    this.customerProductHoldingService = customerProductHoldingService;
    this.urlService = urlService;
    this.jsonUrlService = jsonUrlService;
    this.productService = productService;
    this.salesOfferService = salesOfferService;
    this.onInitEffectsUpdateLoginDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.initEffects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(loginDetails => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails)({
      loginDetails: loginDetails.httpStatus === 401 ? null : loginDetails
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails)({
      loginDetails: null
    })))))));
    this.onUpdateLoginDetailsUpdatePromotions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsDarwinUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(isDarwinUser => isDarwinUser ? this.promotionService.getPromotions() : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(promotions => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updatePromotions)({
      promotions
    }))))));
    this.onUpdateLoginDetailsUpdateCustomerProductHolding$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsDarwinUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(isDarwinUser => isDarwinUser ? this.customerProductHoldingService.getCustomerProductHolding() : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(customerProductHolding => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateCustomerProductHolding)({
      customerProductHolding
    }))))));
    this.updateOffers$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.initEffects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.urlService.getParameterByName('sdata') ?? ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(sdata => this.jsonUrlService.decompress(sdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(salesData => salesData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(salesData => salesData.offers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(offers => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateOffers)({
      offers
    }))))));
    this.updateProducts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateOffers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectOffers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(offers => this.productService.getProducts({
      offers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(products => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateProducts)({
      products
    }))))));
    this.updateSalesOffer$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateOffers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectOffers), this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectPromotions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(promotions => promotions !== null)), this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCustomerProductHolding).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(customerProductHolding => customerProductHolding !== null))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([offers, promotions, customerProductHolding]) => ({
      offers,
      promotions,
      customerProductHolding
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(salesOfferRequest => this.salesOfferService.getSalesOffer(salesOfferRequest)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(salesOffer => (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateSalesOffer)({
      salesOffer
    }))))));
    this.order$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectOffers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(offers => offers.length === 1 ? (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.navigateToSalesCheckout)() : (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.navigateToHumanCheckout)())))));
    this.navigateToSalesCheckout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.navigateToSalesCheckout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectOffers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(offers => ({
      offers
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(salesData => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSalesCheckoutUrl), this.jsonUrlService.compress(salesData)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([salesCheckoutUrl, sdata]) => this.urlService.getUrlWithParams(salesCheckoutUrl, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlParam('sdata', sdata)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(url => this.urlService.redirectTo(url))))), {
      dispatch: false
    });
    this.navigateToHumanCheckout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.navigateToHumanCheckout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectHumanCheckoutUrl), this.store.select(_products_details_selectors__WEBPACK_IMPORTED_MODULE_7__.selectProducts)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([humanCheckoutUrl, products]) => this.createHumanCheckoutUrl(humanCheckoutUrl, products)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(url => this.urlService.redirectTo(url))))), {
      dispatch: false
    });
  }
  ngrxOnInitEffects() {
    return (0,_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.initEffects)();
  }
  createHumanCheckoutUrl(url, products) {
    const fieldSelectedProduct = _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__.ProductUtils.createFieldSelectedProduct(products);
    return this.urlService.getUrlWithParams(url, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlParam('field_selected_product', fieldSelectedProduct)]);
  }
  static #_ = this.ɵfac = function ProductsDetailsEffects_Factory(t) {
    return new (t || ProductsDetailsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_9__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__.PromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__.CustomerProductHoldingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.JsonUrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_5__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_infrastructure_sales_offer_service__WEBPACK_IMPORTED_MODULE_8__.SalesOfferService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: ProductsDetailsEffects,
    factory: ProductsDetailsEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 26850:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details.reducers.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCTS_DETAILS_FEATURE_KEY: () => (/* binding */ PRODUCTS_DETAILS_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   productsDetailsFeature: () => (/* binding */ productsDetailsFeature),
/* harmony export */   productsDetailsReducers: () => (/* binding */ productsDetailsReducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _products_details_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-details.actions */ 45457);



const PRODUCTS_DETAILS_FEATURE_KEY = 'products-details';
const initialState = {
  loginDetails: null,
  promotions: null,
  customerProductHolding: null,
  offers: [],
  products: [],
  salesOffer: undefined,
  salesCheckoutUrl: '',
  humanCheckoutUrl: ''
};
const productsDetailsReducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails, (state, {
  loginDetails
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.loginDetails = loginDetails;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updatePromotions, (state, {
  promotions
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.promotions = promotions;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateCustomerProductHolding, (state, {
  customerProductHolding
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.customerProductHolding = customerProductHolding;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateOffers, (state, {
  offers
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.offers = offers;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateProducts, (state, {
  products
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.products = products;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateSalesOffer, (state, {
  salesOffer
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.salesOffer = salesOffer;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateSalesCheckoutUrl, (state, {
  salesCheckoutUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.salesCheckoutUrl = salesCheckoutUrl;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_products_details_actions__WEBPACK_IMPORTED_MODULE_1__.updateHumanCheckoutUrl, (state, {
  humanCheckoutUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.humanCheckoutUrl = humanCheckoutUrl;
})));
const productsDetailsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCTS_DETAILS_FEATURE_KEY,
  reducer: productsDetailsReducers
});

/***/ }),

/***/ 39336:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/+state/products-details.selectors.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectCustomerProductHolding: () => (/* binding */ selectCustomerProductHolding),
/* harmony export */   selectHumanCheckoutUrl: () => (/* binding */ selectHumanCheckoutUrl),
/* harmony export */   selectIsDarwinUser: () => (/* binding */ selectIsDarwinUser),
/* harmony export */   selectIsFixedTelephoneRowVisible: () => (/* binding */ selectIsFixedTelephoneRowVisible),
/* harmony export */   selectIsInternetRowVisible: () => (/* binding */ selectIsInternetRowVisible),
/* harmony export */   selectIsMobileRowVisible: () => (/* binding */ selectIsMobileRowVisible),
/* harmony export */   selectIsTvFlowRowVisible: () => (/* binding */ selectIsTvFlowRowVisible),
/* harmony export */   selectIsTvIconicRowVisible: () => (/* binding */ selectIsTvIconicRowVisible),
/* harmony export */   selectOffers: () => (/* binding */ selectOffers),
/* harmony export */   selectProducts: () => (/* binding */ selectProducts),
/* harmony export */   selectPromotions: () => (/* binding */ selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* binding */ selectSalesCheckoutUrl),
/* harmony export */   selectSalesOffer: () => (/* binding */ selectSalesOffer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products_details_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-details.reducers */ 26850);


const tvIconicOmapiIds = ['TEOS0001', 'TWOP0010', 'TWOP0011', 'TWOP0013'];
const tvFlowOmapiIds = ['OTTV0000', 'TWOP0012'];
const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_DETAILS_FEATURE_KEY);
const selectIsDarwinUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.loginDetails?.bssSystem === 'NETCRACKER');
const selectOffers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.offers);
const selectPromotions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.promotions);
const selectCustomerProductHolding = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.customerProductHolding);
const selectProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products);
const selectSalesOffer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.salesOffer);
const selectSalesCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.salesCheckoutUrl);
const selectHumanCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.humanCheckoutUrl);
const selectIsInternetRowVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products.some(product => product.productSpec.detailedSpecs.some(detailedSpec => detailedSpec.type === 'INTERNET')));
const selectIsTvIconicRowVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products.some(product => tvIconicOmapiIds.some(omapiId => omapiId === product.omapiProduct.externalProductCode)));
const selectIsTvFlowRowVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products.some(product => tvFlowOmapiIds.some(omapiId => omapiId === product.omapiProduct.externalProductCode)));
const selectIsMobileRowVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products.some(product => product.productSpec.detailedSpecs.some(detailedSpec => detailedSpec.type === 'MOBILE')));
const selectIsFixedTelephoneRowVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.products.some(product => product.productSpec.detailedSpecs.some(detailedSpec => detailedSpec.type === 'FIXED_TELEPHONE')));

/***/ }),

/***/ 91132:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/facades/products-details-order.facade.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsOrderFacade: () => (/* binding */ ProductsDetailsOrderFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/products-details.selectors */ 39336);
/* harmony import */ var _state_products_details_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/products-details.actions */ 45457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductsDetailsOrderFacade {
  constructor(store) {
    this.store = store;
    this.salesOffer$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectSalesOffer);
  }
  updateSalesCheckoutUrl(salesCheckoutUrl) {
    this.store.dispatch((0,_state_products_details_actions__WEBPACK_IMPORTED_MODULE_2__.updateSalesCheckoutUrl)({
      salesCheckoutUrl
    }));
  }
  updateHumanCheckoutUrl(humanCheckoutUrl) {
    this.store.dispatch((0,_state_products_details_actions__WEBPACK_IMPORTED_MODULE_2__.updateHumanCheckoutUrl)({
      humanCheckoutUrl
    }));
  }
  order() {
    this.store.dispatch((0,_state_products_details_actions__WEBPACK_IMPORTED_MODULE_2__.order)());
  }
  static #_ = this.ɵfac = function ProductsDetailsOrderFacade_Factory(t) {
    return new (t || ProductsDetailsOrderFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductsDetailsOrderFacade,
    factory: ProductsDetailsOrderFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 49726:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/facades/products-details-row-container.facade.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsRowContainerFacade: () => (/* binding */ ProductsDetailsRowContainerFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/products-details.selectors */ 39336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductsDetailsRowContainerFacade {
  constructor(store) {
    this.store = store;
    this.isInternetRowVisible$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsInternetRowVisible);
    this.isTvIconicRowVisible$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsTvIconicRowVisible);
    this.isTvFlowRowVisible$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsTvFlowRowVisible);
    this.isMobileRowVisible$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsMobileRowVisible);
    this.isFixedTelephoneRowVisible$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsFixedTelephoneRowVisible);
  }
  static #_ = this.ɵfac = function ProductsDetailsRowContainerFacade_Factory(t) {
    return new (t || ProductsDetailsRowContainerFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductsDetailsRowContainerFacade,
    factory: ProductsDetailsRowContainerFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5760:
/*!********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/facades/products-details.facade.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsFacade: () => (/* binding */ ProductsDetailsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/products-details.selectors */ 39336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductsDetailsFacade {
  constructor(store) {
    this.store = store;
    this.products$ = this.store.select(_state_products_details_selectors__WEBPACK_IMPORTED_MODULE_1__.selectProducts);
  }
  static #_ = this.ɵfac = function ProductsDetailsFacade_Factory(t) {
    return new (t || ProductsDetailsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductsDetailsFacade,
    factory: ProductsDetailsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7182:
/*!******************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCTS_DETAILS_FEATURE_KEY: () => (/* reexport safe */ _state_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_DETAILS_FEATURE_KEY),
/* harmony export */   ProductsDetailsFacade: () => (/* reexport safe */ _facades_products_details_facade__WEBPACK_IMPORTED_MODULE_3__.ProductsDetailsFacade),
/* harmony export */   ProductsDetailsNgrxModule: () => (/* reexport safe */ _state_products_details_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsNgrxModule),
/* harmony export */   ProductsDetailsOrderFacade: () => (/* reexport safe */ _facades_products_details_order_facade__WEBPACK_IMPORTED_MODULE_4__.ProductsDetailsOrderFacade),
/* harmony export */   ProductsDetailsRowContainerFacade: () => (/* reexport safe */ _facades_products_details_row_container_facade__WEBPACK_IMPORTED_MODULE_5__.ProductsDetailsRowContainerFacade),
/* harmony export */   featureState: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.featureState),
/* harmony export */   initialState: () => (/* reexport safe */ _state_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   productsDetailsFeature: () => (/* reexport safe */ _state_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__.productsDetailsFeature),
/* harmony export */   productsDetailsReducers: () => (/* reexport safe */ _state_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__.productsDetailsReducers),
/* harmony export */   selectCustomerProductHolding: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCustomerProductHolding),
/* harmony export */   selectHumanCheckoutUrl: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectHumanCheckoutUrl),
/* harmony export */   selectIsDarwinUser: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsDarwinUser),
/* harmony export */   selectIsFixedTelephoneRowVisible: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsFixedTelephoneRowVisible),
/* harmony export */   selectIsInternetRowVisible: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsInternetRowVisible),
/* harmony export */   selectIsMobileRowVisible: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsMobileRowVisible),
/* harmony export */   selectIsTvFlowRowVisible: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsTvFlowRowVisible),
/* harmony export */   selectIsTvIconicRowVisible: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsTvIconicRowVisible),
/* harmony export */   selectOffers: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectOffers),
/* harmony export */   selectProducts: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectProducts),
/* harmony export */   selectPromotions: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSalesCheckoutUrl),
/* harmony export */   selectSalesOffer: () => (/* reexport safe */ _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSalesOffer)
/* harmony export */ });
/* harmony import */ var _state_products_details_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/products-details-ngrx.module */ 14996);
/* harmony import */ var _state_products_details_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/products-details.reducers */ 26850);
/* harmony import */ var _state_products_details_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/products-details.selectors */ 39336);
/* harmony import */ var _facades_products_details_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facades/products-details.facade */ 5760);
/* harmony import */ var _facades_products_details_order_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facades/products-details-order.facade */ 91132);
/* harmony import */ var _facades_products_details_row_container_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facades/products-details-row-container.facade */ 49726);







/***/ }),

/***/ 41484:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/infrastructure/sales-offer.mapper.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferMapper: () => (/* binding */ SalesOfferMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class SalesOfferMapper {
  toModel(rawSalesOffer) {
    return {
      price: rawSalesOffer.price,
      promo: rawSalesOffer.promo === null ? null : this.mapToPromo(rawSalesOffer.promo)
    };
  }
  mapToPromo(rawPromo) {
    return {
      price: rawPromo.price,
      durationInMonths: rawPromo.durationInMonths
    };
  }
  static #_ = this.ɵfac = function SalesOfferMapper_Factory(t) {
    return new (t || SalesOfferMapper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SalesOfferMapper,
    factory: SalesOfferMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 69334:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/products-details/data-access/src/lib/infrastructure/sales-offer.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferService: () => (/* binding */ SalesOfferService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_offer_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-offer.mapper */ 41484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class SalesOfferService {
  constructor(http, salesOfferMapper, configService) {
    this.http = http;
    this.salesOfferMapper = salesOfferMapper;
    this.configService = configService;
  }
  getSalesOffer(salesOfferRequest) {
    return this.http.post(this.getSalesOfferUrl(), salesOfferRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rawSalesOffer => this.salesOfferMapper.toModel(rawSalesOffer)));
  }
  getSalesOfferUrl() {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.PRODUCT_FINDER_URL).concat('/product-finder/api/v1/sales-offer');
  }
  static #_ = this.ɵfac = function SalesOfferService_Factory(t) {
    return new (t || SalesOfferService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_sales_offer_mapper__WEBPACK_IMPORTED_MODULE_3__.SalesOfferMapper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SalesOfferService,
    factory: SalesOfferService.ɵfac,
    providedIn: 'root'
  });
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
//# sourceMappingURL=libs_sales_products-details_data-access_src_index_ts-_c2571.js.map