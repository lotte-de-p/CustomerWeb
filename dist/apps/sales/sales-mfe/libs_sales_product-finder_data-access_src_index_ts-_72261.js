(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_product-finder_data-access_src_index_ts-_72261"],{

/***/ 16421:
/*!************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HouseholdFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HouseholdFacade),
/* harmony export */   InternetUsageFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InternetUsageFacade),
/* harmony export */   MobileUsageFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.MobileUsageFacade),
/* harmony export */   NumberOfSimsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NumberOfSimsFacade),
/* harmony export */   PRODUCT_FINDER_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FINDER_FEATURE_KEY),
/* harmony export */   PRODUCT_FINDER_STEPPER_FEATURE_KEY: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_FINDER_STEPPER_FEATURE_KEY),
/* harmony export */   PreferenceFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PreferenceFacade),
/* harmony export */   ProductFinderConfigFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderConfigFacade),
/* harmony export */   ProductFinderNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderNgrxModule),
/* harmony export */   ProductFinderStepEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepEnum),
/* harmony export */   ProductFinderStepperFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepperFacade),
/* harmony export */   ProductFinderStepperNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepperNgrxModule),
/* harmony export */   ResultsScreenFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ResultsScreenFacade),
/* harmony export */   TvChannelsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TvChannelsFacade),
/* harmony export */   TvExperienceFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TvExperienceFacade),
/* harmony export */   featureState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.featureState),
/* harmony export */   initialState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.initialState),
/* harmony export */   productFinderFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productFinderFeature),
/* harmony export */   productFinderReducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productFinderReducer),
/* harmony export */   productFinderStepperFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productFinderStepperFeature),
/* harmony export */   productFinderStepperReducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.productFinderStepperReducer),
/* harmony export */   selectCustomerProductHolding: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCustomerProductHolding),
/* harmony export */   selectEnableLoader: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectEnableLoader),
/* harmony export */   selectEnableLoaderMask: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectEnableLoaderMask),
/* harmony export */   selectHasErrorRequireAtLeastOneInternetUsageToBeSelected: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireAtLeastOneInternetUsageToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine),
/* harmony export */   selectHasErrorRequireAtLeastOnePreferenceToBeSelected: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireAtLeastOnePreferenceToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError),
/* harmony export */   selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError),
/* harmony export */   selectHasErrorRequireInternetWhenTvIsSelected: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHasErrorRequireInternetWhenTvIsSelected),
/* harmony export */   selectHousehold: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHousehold),
/* harmony export */   selectHumanCheckoutUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectHumanCheckoutUrl),
/* harmony export */   selectInternetUsage: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectInternetUsage),
/* harmony export */   selectIsDarwinUser: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsDarwinUser),
/* harmony export */   selectLastKnownState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectLastKnownState),
/* harmony export */   selectMobileLines: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectMobileLines),
/* harmony export */   selectMobileUsage: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectMobileUsage),
/* harmony export */   selectNumberOfSims: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectNumberOfSims),
/* harmony export */   selectOnMobileDevice: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectOnMobileDevice),
/* harmony export */   selectOneConfiguratorUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectOneConfiguratorUrl),
/* harmony export */   selectPreference: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPreference),
/* harmony export */   selectProductRecommendationByIndex: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectProductRecommendationByIndex),
/* harmony export */   selectProductRecommendationResult: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectProductRecommendationResult),
/* harmony export */   selectProductsDetailsUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectProductsDetailsUrl),
/* harmony export */   selectPromotions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSalesCheckoutUrl),
/* harmony export */   selectTvChannels: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectTvChannels),
/* harmony export */   selectTvExperience: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectTvExperience),
/* harmony export */   stepperInitialState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.stepperInitialState)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 35075);


/***/ }),

/***/ 7128:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder-analytics.effects.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderAnalyticsEffects: () => (/* binding */ ProductFinderAnalyticsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-finder.actions */ 63487);
/* harmony import */ var _stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepper/product-finder-stepper.actions */ 84583);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper/product-finder-stepper.selectors */ 54752);
/* harmony import */ var _product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-finder.selectors */ 2017);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entities/stepper/product-finder-step.enum */ 36918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);
















class DataLayerConstants {
  static #_ = this.MESSAGE_GROUPS = ['product-finder'];
  static #_2 = this.EVENT_NAME_SELF_SERVICE_FLOW_STARTED = 'self-service flow started';
  static #_3 = this.EVENT_NAME_SELF_SERVICE_FLOW_ENDED = 'self-service flow ended';
  static #_4 = this.EVENT_NAME_NEXT_PREFERENCE = 'preferences selected';
  static #_5 = this.EVENT_NAME_NEXT_HOUSEHOLD = 'household selected';
  static #_6 = this.EVENT_NAME_NEXT_NUMBER_OF_SIMS = 'mobile numbers selected';
  static #_7 = this.EVENT_NAME_NEXT_TV_CHANNELS = 'tv channels selected';
  static #_8 = this.EVENT_NAME_NEXT_TV_EXPERIENCE = 'tv experience selected';
  static #_9 = this.EVENT_TYPE_NEXT = 'option-click';
  static #_10 = this.ATTRIBUTE_ITEM_NAME_CONTINUE_BUTTON_CLICKED = 'continue button clicked';
  static #_11 = this.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED = 'order button clicked';
  static #_12 = this.ATTRIBUTE_ITEM_NAME_MORE_INFO = 'more info';
  static #_13 = this.ATTRIBUTE_ITEM_NAME_RETAKE_TEST = 'retake the test';
}
class ProductFinderAnalyticsEffects {
  constructor(actions$, dataLayerService, stepperStore, store) {
    this.actions$ = actions$;
    this.dataLayerService = dataLayerService;
    this.stepperStore = stepperStore;
    this.store = store;
    this.onNotifyStepRendered$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.notifyStepRendered), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(action => action.step), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(step => this.dataLayerService.addStepViewEvent(this.enrichWithCommonAttributes({
      stepId: step
    })))), {
      dispatch: false
    });
    this.onGoToNextStep$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(step => {
      if (step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.INTRO) {
        this.sendStartEvent();
      } else {
        this.sendNextEvent();
      }
    })), {
      dispatch: false
    });
    this.onGoToNextStepOnStepPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(step => step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.PREFERENCE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectPreference).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(preference => this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_NEXT_PREFERENCE, DataLayerConstants.EVENT_TYPE_NEXT, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: Object.keys(preference).filter(key => preference[key]).join(',')
      }),
      category: this.categorySelfService()
    }))))))), {
      dispatch: false
    });
    this.onGoToNextStepOnStepHousehold$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(step => step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.HOUSEHOLD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectHousehold).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(household => household !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(household => this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_NEXT_HOUSEHOLD, DataLayerConstants.EVENT_TYPE_NEXT, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: (household.adults + household.teens + household.children).toString(),
        itemData: `adults:${household.adults}|teenagers:${household.teens}|children:${household.children}`
      }),
      category: this.categorySelfService()
    }))))))), {
      dispatch: false
    });
    this.onGoToNextStepOnStepNumberOfSims$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(step => step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.NUMBER_OF_SIMS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectNumberOfSims).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(numberOfSims => numberOfSims !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(numberOfSims => this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_NEXT_NUMBER_OF_SIMS, DataLayerConstants.EVENT_TYPE_NEXT, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: numberOfSims.toString()
      }),
      category: this.categorySelfService()
    }))))))), {
      dispatch: false
    });
    this.onGoToNextStepOnStepTvChannels$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(step => step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.TV_CHANNELS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectTvChannels).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(tvChannels => tvChannels !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(tvChannels => this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_NEXT_TV_CHANNELS, DataLayerConstants.EVENT_TYPE_NEXT, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: tvChannels.selection.join(',')
      }),
      category: this.categorySelfService()
    }))))))), {
      dispatch: false
    });
    this.onGoToNextStepOnStepTvExperience$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.stepperStore.select(_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_7__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(step => step === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_10__.ProductFinderStepEnum.TV_EXPERIENCE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectTvExperience).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(tvExperience => tvExperience !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(tvExperience => this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_NEXT_TV_EXPERIENCE, DataLayerConstants.EVENT_TYPE_NEXT, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: tvExperience.selection.join(',')
      }),
      category: this.categorySelfService()
    }))))))), {
      dispatch: false
    });
    this.onOrderParkOrderEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(action => action.index), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(index => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectProductRecommendationResult).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(productRecommendationResult => productRecommendationResult !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(productRecommendationResult => this.parkOrderEvent(index, productRecommendationResult))))), {
      dispatch: false
    });
    this.onGetProductRecommendationsSuccessSendEndEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.getProductRecommendationsSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectProductRecommendationResult).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(productRecommendationResult => productRecommendationResult !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(productRecommendationResult => productRecommendationResult.mostRecommendedIndex !== null ? this.putMostRecommendedRecommendationAtFirstIndex(productRecommendationResult.productRecommendations, productRecommendationResult.mostRecommendedIndex) : productRecommendationResult.productRecommendations))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(productRecommendations => this.sendEndEvent(productRecommendations))), {
      dispatch: false
    });
    this.onResultDetailsSendMoreInfoEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.resultDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(action => action.index), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(index => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_8__.selectProductRecommendationResult).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(productRecommendationResult => productRecommendationResult !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(productRecommendationResult => this.sendMoreInfoEvent(productRecommendationResult, index))))), {
      dispatch: false
    });
    this.onRedoTestSendRedoTestEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_3__.redoTest), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      this.sendRedoTestEvent();
    })), {
      dispatch: false
    });
  }
  sendStartEvent() {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_SELF_SERVICE_FLOW_STARTED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_STARTED, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.commonAttributes(),
      category: this.categorySelfService()
    });
  }
  sendNextEvent() {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventNameEnum.EVENT_NAME_CONTINUE_BUTTON_CLICKED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_CLICK, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_CONTINUE_BUTTON_CLICKED
      }),
      category: this.categorySelfService()
    });
  }
  parkOrderEvent(index, productRecommendationResult) {
    const productRecommendation = productRecommendationResult.productRecommendations[index];
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventNameEnum.EVENT_NAME_BUTTON_CLICKED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_CLICK, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_ORDER_BUTTON_CLICKED,
        itemData: this.getRecommendedItemData(productRecommendationResult.mostRecommendedIndex, index),
        product: this.createUdlItems(productRecommendation.products)
      }),
      category: this.categorySelfService(),
      strategy: udl__WEBPACK_IMPORTED_MODULE_5__.AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE
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
  putMostRecommendedRecommendationAtFirstIndex(productRecommendations, mostRecommendedIndex) {
    return [productRecommendations[mostRecommendedIndex]].concat(productRecommendations.filter((_, i) => i !== mostRecommendedIndex));
  }
  sendEndEvent(productRecommendations) {
    const titles = this.createTitles(productRecommendations);
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(DataLayerConstants.EVENT_NAME_SELF_SERVICE_FLOW_ENDED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_END, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: titles.join(' | '),
        product: this.createUdlItems(productRecommendations.flatMap(productRecommendation => productRecommendation.products)),
        itemData: titles[0],
        itemGroup: titles[1]
      }),
      category: this.categorySelfService()
    });
  }
  createTitles(productRecommendations) {
    return productRecommendations.map(productRecommendation => productRecommendation.products).map(products => _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__.ProductUtils.createTitle(products));
  }
  createUdlItems(products) {
    return products.map(product => new udl__WEBPACK_IMPORTED_MODULE_5__.ItemBuilder().withProductInfo(new udl__WEBPACK_IMPORTED_MODULE_5__.ProductBuilder().withProductId(product.omapiProduct.externalProductCode).withProductType(product.omapiProduct.productType).build()).build());
  }
  sendMoreInfoEvent(productRecommendationResult, index) {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventNameEnum.EVENT_NAME_LINK_CLICKED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_CLICK, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_MORE_INFO,
        itemData: this.getRecommendedItemData(productRecommendationResult.mostRecommendedIndex, index),
        product: this.createUdlItems(productRecommendationResult.productRecommendations[index].products)
      }),
      category: this.categorySelfService()
    });
  }
  getRecommendedItemData(mostRecommendedIndex, index) {
    return mostRecommendedIndex === index ? 'recommended for you' : 'alternative';
  }
  sendRedoTestEvent() {
    this.dataLayerService.sendEvent({
      eventInfo: this.dataLayerService.createEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventNameEnum.EVENT_NAME_LINK_CLICKED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_CLICK, DataLayerConstants.MESSAGE_GROUPS),
      attributes: this.enrichWithCommonAttributes({
        itemName: DataLayerConstants.ATTRIBUTE_ITEM_NAME_RETAKE_TEST
      }),
      category: this.categorySelfService()
    });
  }
  static #_ = this.ɵfac = function ProductFinderAnalyticsEffects_Factory(t) {
    return new (t || ProductFinderAnalyticsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: ProductFinderAnalyticsEffects,
    factory: ProductFinderAnalyticsEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68804:
/*!********************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder-ngrx.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderNgrxModule: () => (/* binding */ ProductFinderNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_finder_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder.reducers */ 35880);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_finder_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-finder.effects */ 37810);
/* harmony import */ var _product_finder_analytics_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-finder-analytics.effects */ 7128);
/* harmony import */ var _stepper_product_finder_stepper_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper/product-finder-stepper.effects */ 18312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









class ProductFinderNgrxModule {
  static #_ = this.ɵfac = function ProductFinderNgrxModule_Factory(t) {
    return new (t || ProductFinderNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ProductFinderNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_product_finder_reducers__WEBPACK_IMPORTED_MODULE_1__.productFinderFeature), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature(_product_finder_effects__WEBPACK_IMPORTED_MODULE_3__.ProductFinderEffects, _product_finder_analytics_effects__WEBPACK_IMPORTED_MODULE_4__.ProductFinderAnalyticsEffects, _stepper_product_finder_stepper_effects__WEBPACK_IMPORTED_MODULE_5__.ProductFinderStepperEffects)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductFinderNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 63487:
/*!****************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder.actions.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backupCurrentState: () => (/* binding */ backupCurrentState),
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   getProductRecommendations: () => (/* binding */ getProductRecommendations),
/* harmony export */   getProductRecommendationsSuccess: () => (/* binding */ getProductRecommendationsSuccess),
/* harmony export */   handleNumberOfSimsChanged: () => (/* binding */ handleNumberOfSimsChanged),
/* harmony export */   handlePreferenceChanged: () => (/* binding */ handlePreferenceChanged),
/* harmony export */   initEffects: () => (/* binding */ initEffects),
/* harmony export */   navigateToHumanCheckout: () => (/* binding */ navigateToHumanCheckout),
/* harmony export */   navigateToOneConfigurator: () => (/* binding */ navigateToOneConfigurator),
/* harmony export */   navigateToProductsDetails: () => (/* binding */ navigateToProductsDetails),
/* harmony export */   navigateToSalesCheckout: () => (/* binding */ navigateToSalesCheckout),
/* harmony export */   order: () => (/* binding */ order),
/* harmony export */   requireAtLeastOneInternetUsageToBeSelectedError: () => (/* binding */ requireAtLeastOneInternetUsageToBeSelectedError),
/* harmony export */   requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError: () => (/* binding */ requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError),
/* harmony export */   requireAtLeastOnePreferenceToBeSelectedError: () => (/* binding */ requireAtLeastOnePreferenceToBeSelectedError),
/* harmony export */   requireAtLeastOneTvChannelToBeSelectedError: () => (/* binding */ requireAtLeastOneTvChannelToBeSelectedError),
/* harmony export */   requireAtLeastOneTvExperienceToBeSelectedError: () => (/* binding */ requireAtLeastOneTvExperienceToBeSelectedError),
/* harmony export */   requireInternetWhenTvIsSelectedError: () => (/* binding */ requireInternetWhenTvIsSelectedError),
/* harmony export */   resetStateToInitialState: () => (/* binding */ resetStateToInitialState),
/* harmony export */   resultDetails: () => (/* binding */ resultDetails),
/* harmony export */   updateCustomerProductHolding: () => (/* binding */ updateCustomerProductHolding),
/* harmony export */   updateEnableLoader: () => (/* binding */ updateEnableLoader),
/* harmony export */   updateEnableLoaderMask: () => (/* binding */ updateEnableLoaderMask),
/* harmony export */   updateHousehold: () => (/* binding */ updateHousehold),
/* harmony export */   updateHumanCheckoutUrl: () => (/* binding */ updateHumanCheckoutUrl),
/* harmony export */   updateInternetUsage: () => (/* binding */ updateInternetUsage),
/* harmony export */   updateLoginDetails: () => (/* binding */ updateLoginDetails),
/* harmony export */   updateMobileLineCollapsed: () => (/* binding */ updateMobileLineCollapsed),
/* harmony export */   updateMobileLineSelection: () => (/* binding */ updateMobileLineSelection),
/* harmony export */   updateMobileLines: () => (/* binding */ updateMobileLines),
/* harmony export */   updateMobileUsage: () => (/* binding */ updateMobileUsage),
/* harmony export */   updateNumberOfSims: () => (/* binding */ updateNumberOfSims),
/* harmony export */   updateOnMobileDevice: () => (/* binding */ updateOnMobileDevice),
/* harmony export */   updateOneConfiguratorUrl: () => (/* binding */ updateOneConfiguratorUrl),
/* harmony export */   updatePreference: () => (/* binding */ updatePreference),
/* harmony export */   updateProductsDetailsUrl: () => (/* binding */ updateProductsDetailsUrl),
/* harmony export */   updatePromotions: () => (/* binding */ updatePromotions),
/* harmony export */   updateSalesCheckoutUrl: () => (/* binding */ updateSalesCheckoutUrl),
/* harmony export */   updateTvChannels: () => (/* binding */ updateTvChannels),
/* harmony export */   updateTvExperience: () => (/* binding */ updateTvExperience)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const initEffects = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Finder] init effects');
const updateOnMobileDevice = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update on mobile device', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateLoginDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update login details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePromotions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update promotions', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCustomerProductHolding = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update customer product holding', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePreference = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update preference', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateHousehold = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update household', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateInternetUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update internet usage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateNumberOfSims = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update number of sims', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update mobile usage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update mobile lines', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileLineSelection = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update mobile line selection', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateMobileLineCollapsed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update mobile line collapsed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateTvChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update tv channels', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateTvExperience = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update tv experience', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const backupCurrentState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] backup current state');
const handlePreferenceChanged = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] handle preference changed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const handleNumberOfSimsChanged = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] handle number of sims changed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductRecommendations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] get product recommendations');
const getProductRecommendationsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] get product recommendations success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetStateToInitialState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] reset state to initial state');
const updateEnableLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update enable loader', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateEnableLoaderMask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update enable loader mask', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateSalesCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update sales checkout url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateHumanCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update human checkout url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const order = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] order', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToSalesCheckout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] navigate to sales checkout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToHumanCheckout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] navigate to human checkout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateOneConfiguratorUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update ONE configurator url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateProductsDetailsUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] update product details url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resultDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] result details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToOneConfigurator = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] navigate to ONE configurator', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToProductsDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] navigate to products details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const requireAtLeastOnePreferenceToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require at least one preference to be selected');
const requireInternetWhenTvIsSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require internet when tv is selected');
const requireAtLeastOneInternetUsageToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require at least one internet usage to be selected');
const requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require at least one mobile usage to be selected for each mobile line');
const requireAtLeastOneTvChannelToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require at least one tv channel to be selected');
const requireAtLeastOneTvExperienceToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] require at least one tv experience to be selected');
const clearError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder] clear error');

/***/ }),

/***/ 37810:
/*!****************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder.effects.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderEffects: () => (/* binding */ ProductFinderEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-finder.actions */ 63487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../+state/product-finder.selectors */ 2017);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper/product-finder-stepper.actions */ 84583);
/* harmony import */ var _infrastructure_results_screen_product_recommendation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infrastructure/results-screen/product-recommendation.service */ 743);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ 8851);




















class ProductFinderEffects {
  constructor(actions$, store, deviceDetectorService, loginService, loaderService, promotionService, customerProductHoldingService, productRecommendationService, urlService, jsonUrlService) {
    this.actions$ = actions$;
    this.store = store;
    this.deviceDetectorService = deviceDetectorService;
    this.loginService = loginService;
    this.loaderService = loaderService;
    this.promotionService = promotionService;
    this.customerProductHoldingService = customerProductHoldingService;
    this.productRecommendationService = productRecommendationService;
    this.urlService = urlService;
    this.jsonUrlService = jsonUrlService;
    this.onInitEffectsUpdateOnMobileDevice$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.initEffects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.deviceDetectorService.isMobile()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(onMobileDevice => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateOnMobileDevice)({
      onMobileDevice
    }))));
    this.onInitEffectsUpdateLoginDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.initEffects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(loginDetails => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateLoginDetails)({
      loginDetails: loginDetails.httpStatus === 401 ? null : loginDetails
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateLoginDetails)({
      loginDetails: null
    })))))));
    this.onUpdateLoginDetailsUpdatePromotions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateLoginDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsDarwinUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(isDarwinUser => isDarwinUser ? this.promotionService.getPromotions() : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(promotions => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updatePromotions)({
      promotions
    }))))));
    this.onUpdateLoginDetailsUpdateCustomerProductHolding$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateLoginDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsDarwinUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(isDarwinUser => isDarwinUser ? this.customerProductHoldingService.getCustomerProductHolding() : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(customerProductHolding => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateCustomerProductHolding)({
      customerProductHolding
    }))))));
    this.backupCurrentState$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_6__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.backupCurrentState)())));
    this.checkIfPreferenceChanged$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_6__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPreference), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectLastKnownState)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([preference, lastKnownState]) => Object.fromEntries(Object.entries(preference).filter(([key, val]) => lastKnownState.preference?.[key] !== val))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => Object.keys(preference).length !== 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged)({
      preference: preference
    }))))));
    this.checkIfNumberOfSimsChanged$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_6__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectNumberOfSims), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectLastKnownState)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(([numberOfSims, lastKnownState]) => numberOfSims !== lastKnownState.numberOfSims), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([numberOfSims]) => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handleNumberOfSimsChanged)({
      numberOfSims: numberOfSims
    }))))));
    this.updateHouseholdBasedOnPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.preference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => preference.surfing !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateHousehold)({
      household: preference.surfing ? {
        adults: 1,
        teens: 0,
        children: 0
      } : null
    }))));
    this.updateInternetUsageBasedOnPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.preference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => preference.surfing !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateInternetUsage)({
      internetUsage: preference.surfing ? {
        selection: []
      } : null
    }))));
    this.updateNumberOfSimsBasedOnPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.preference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => preference.mobile !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateNumberOfSims)({
      numberOfSims: preference.mobile ? 1 : null
    }))));
    this.updateMobileUsageBasedOnNumberOfSims$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handleNumberOfSimsChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.numberOfSims), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.withLatestFrom)(this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileLines), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectOnMobileDevice)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([numberOfSims, mobileLines, onMobileDevice]) => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateMobileUsage)({
      mobileUsage: numberOfSims !== null ? {
        mobileLines: Array(numberOfSims).fill(undefined).map((_, index) => mobileLines[index] || {
          selection: [],
          collapsed: index !== 0 || onMobileDevice,
          error: null
        })
      } : null
    }))));
    this.updateTvChannelsBasedOnPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.preference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => preference.watchTv !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateTvChannels)({
      tvChannels: preference.watchTv ? {
        selection: []
      } : null
    }))));
    this.updateTvExperienceBasedOnPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.handlePreferenceChanged), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.preference), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(preference => preference.watchTv !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateTvExperience)({
      tvExperience: preference.watchTv ? {
        selection: []
      } : null
    }))));
    this.getProductRecommendations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.getProductRecommendations), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.loaderService.start()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPreference), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectHousehold), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectInternetUsage), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectMobileLines), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTvChannels), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTvExperience), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPromotions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(promotions => promotions !== null)), this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCustomerProductHolding).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(customerProductHolding => customerProductHolding !== null))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([preference, household, internetUsage, mobileLines, tvChannels, tvExperience, promotions, customerProductHolding]) => ({
      household,
      internetUsages: internetUsage === null ? null : internetUsage.selection,
      mobileLines: mobileLines.map(mobileLine => ({
        mobileUsages: mobileLine.selection
      })),
      tvChannels: tvChannels === null ? null : tvChannels.selection,
      tvExperiences: tvExperience === null ? null : tvExperience.selection,
      fixedTelephone: preference.fixedLine,
      promotions,
      customerProductHolding
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(productRecommendationsRequest => this.productRecommendationService.getProductRecommendations(productRecommendationsRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendationResult => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.getProductRecommendationsSuccess)({
      productRecommendationResult: productRecommendationResult
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loaderService.stop())))));
    this.resetStateToInitialStateOnRedoTest = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_6__.redoTest), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.resetStateToInitialState)())));
    this.order$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.index), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(index => this.store.select((0,_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectProductRecommendationByIndex)(index)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(productRecommendation => productRecommendation !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendation => productRecommendation.offers.length === 1 ? (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToSalesCheckout)({
      productRecommendation
    }) : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToHumanCheckout)({
      productRecommendation
    }))))));
    this.navigateToSalesCheckout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToSalesCheckout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.productRecommendation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendation => productRecommendation.offers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(offers => ({
      offers
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(salesData => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectSalesCheckoutUrl), this.jsonUrlService.compress(salesData)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([salesCheckoutUrl, sdata]) => this.urlService.getUrlWithParams(salesCheckoutUrl, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlParam('sdata', sdata)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(url => this.urlService.redirectTo(url))))), {
      dispatch: false
    });
    this.navigateToHumanCheckout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToHumanCheckout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.productRecommendation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(productRecommendation => this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectHumanCheckoutUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(url => this.createHumanCheckoutUrl(url, productRecommendation)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(humanCheckoutUrl => this.urlService.redirectTo(humanCheckoutUrl))))), {
      dispatch: false
    });
    this.resultDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.resultDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.index), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(index => this.store.select((0,_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectProductRecommendationByIndex)(index)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(productRecommendation => productRecommendation !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendation => productRecommendation.products.map(product => product.omapiProduct).some(omapiProduct => omapiProduct.isConnect5()) ? (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToOneConfigurator)({
      productRecommendation
    }) : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToProductsDetails)({
      productRecommendation
    }))))));
    this.navigateToOneConfigurator$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToOneConfigurator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.productRecommendation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendation => productRecommendation.offers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(offers => ({
      offers
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(salesData => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectOneConfiguratorUrl), this.jsonUrlService.compress(salesData)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([oneConfiguratorUrl, sdata]) => this.urlService.getUrlWithParams(oneConfiguratorUrl, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlParam('sdata', sdata)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(url => this.urlService.openNewTab(url))))), {
      dispatch: false
    });
    this.navigateToProductsDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.navigateToProductsDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.productRecommendation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(productRecommendation => productRecommendation.offers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(offers => ({
      offers
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(salesData => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_4__.selectProductsDetailsUrl), this.jsonUrlService.compress(salesData)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([productsDetailsUrl, sdata]) => this.urlService.getUrlWithParams(productsDetailsUrl, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlParam('sdata', sdata)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(url => this.urlService.openNewTab(url))))), {
      dispatch: false
    });
  }
  ngrxOnInitEffects() {
    return (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.initEffects)();
  }
  createHumanCheckoutUrl(url, productRecommendation) {
    const fieldSelectedProduct = _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__.ProductUtils.createFieldSelectedProduct(productRecommendation.products);
    return this.urlService.getUrlWithParams(url, [new _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlParam('field_selected_product', fieldSelectedProduct)]);
  }
  static #_ = this.ɵfac = function ProductFinderEffects_Factory(t) {
    return new (t || ProductFinderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_10__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__.PromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_9__.CustomerProductHoldingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_infrastructure_results_screen_product_recommendation_service__WEBPACK_IMPORTED_MODULE_7__.ProductRecommendationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.JsonUrlService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: ProductFinderEffects,
    factory: ProductFinderEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35880:
/*!*****************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder.reducers.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_FINDER_FEATURE_KEY: () => (/* binding */ PRODUCT_FINDER_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   productFinderFeature: () => (/* binding */ productFinderFeature),
/* harmony export */   productFinderReducer: () => (/* binding */ productFinderReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _product_finder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder.actions */ 63487);
/* harmony import */ var _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/error/product-finder-error.enum */ 91318);




const PRODUCT_FINDER_FEATURE_KEY = 'product-finder';
const initialPartialState = {
  preference: {
    mobile: false,
    surfing: false,
    watchTv: false,
    fixedLine: false
  },
  numberOfSims: null
};
const initialState = {
  ...initialPartialState,
  error: null,
  onMobileDevice: false,
  loginDetails: null,
  promotions: null,
  customerProductHolding: null,
  household: null,
  internetUsage: null,
  mobileUsage: null,
  tvChannels: null,
  tvExperience: null,
  lastKnownState: initialPartialState,
  productRecommendationResult: null,
  enableLoader: false,
  enableLoaderMask: false,
  salesCheckoutUrl: '',
  humanCheckoutUrl: '',
  oneConfiguratorUrl: '',
  productsDetailsUrl: ''
};
const productFinderReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateOnMobileDevice, (state, {
  onMobileDevice
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.onMobileDevice = onMobileDevice;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateLoginDetails, (state, {
  loginDetails
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.loginDetails = loginDetails;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updatePromotions, (state, {
  promotions
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.promotions = promotions;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateCustomerProductHolding, (state, {
  customerProductHolding
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.customerProductHolding = customerProductHolding;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updatePreference, (state, {
  preference
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.preference = preference;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateHousehold, (state, {
  household
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.household = household;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateInternetUsage, (state, {
  internetUsage
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.internetUsage = internetUsage;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateNumberOfSims, (state, {
  numberOfSims
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.numberOfSims = numberOfSims;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileUsage, (state, {
  mobileUsage
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.mobileUsage = mobileUsage;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileLines, (state, {
  mobileLines
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  if (!draft.mobileUsage) {
    throw new Error('Cannot handle action updateMobileLines in current state!');
  }
  draft.mobileUsage.mobileLines = mobileLines;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileLineSelection, (state, {
  index,
  selection
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  if (!draft.mobileUsage?.mobileLines[index]) {
    throw new Error('Cannot handle action updateMobileLineSelection in current state!');
  }
  draft.mobileUsage.mobileLines[index].selection = selection;
  draft.mobileUsage.mobileLines[index].error = null;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileLineCollapsed, (state, {
  index,
  collapsed
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  if (!draft.mobileUsage?.mobileLines[index]) {
    throw new Error('Cannot handle action updateMobileLineCollapsed in current state!');
  }
  draft.mobileUsage.mobileLines[index].collapsed = collapsed;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateTvChannels, (state, {
  tvChannels
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.tvChannels = tvChannels;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateTvExperience, (state, {
  tvExperience
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.tvExperience = tvExperience;
  draft.error = null;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.backupCurrentState, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.lastKnownState = {
    preference: state.preference,
    numberOfSims: state.numberOfSims
  };
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.getProductRecommendationsSuccess, (state, {
  productRecommendationResult
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.productRecommendationResult = productRecommendationResult;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.resetStateToInitialState, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, () => ({
  ...initialState,
  loginDetails: state.loginDetails,
  promotions: state.promotions,
  customerProductHolding: state.customerProductHolding,
  enableLoader: state.enableLoader,
  enableLoaderMask: state.enableLoaderMask,
  salesCheckoutUrl: state.salesCheckoutUrl,
  humanCheckoutUrl: state.humanCheckoutUrl,
  oneConfiguratorUrl: state.oneConfiguratorUrl,
  productsDetailsUrl: state.productsDetailsUrl
}))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateEnableLoader, (state, {
  enableLoader
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.enableLoader = enableLoader;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateEnableLoaderMask, (state, {
  enableLoaderMask
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.enableLoaderMask = enableLoaderMask;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateSalesCheckoutUrl, (state, {
  salesCheckoutUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.salesCheckoutUrl = salesCheckoutUrl;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateHumanCheckoutUrl, (state, {
  humanCheckoutUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.humanCheckoutUrl = humanCheckoutUrl;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateOneConfiguratorUrl, (state, {
  oneConfiguratorUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.oneConfiguratorUrl = oneConfiguratorUrl;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateProductsDetailsUrl, (state, {
  productsDetailsUrl
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.productsDetailsUrl = productsDetailsUrl;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireAtLeastOnePreferenceToBeSelectedError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireInternetWhenTvIsSelectedError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireAtLeastOneInternetUsageToBeSelectedError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE;
  draft.mobileUsage?.mobileLines.forEach(mobileLine => mobileLine.error = mobileLine.selection.length === 0 ? _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED : null);
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireAtLeastOneTvChannelToBeSelectedError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.requireAtLeastOneTvExperienceToBeSelectedError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.clearError, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.error = null;
})));
const productFinderFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCT_FINDER_FEATURE_KEY,
  reducer: productFinderReducer
});

/***/ }),

/***/ 2017:
/*!******************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/product-finder.selectors.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectCustomerProductHolding: () => (/* binding */ selectCustomerProductHolding),
/* harmony export */   selectEnableLoader: () => (/* binding */ selectEnableLoader),
/* harmony export */   selectEnableLoaderMask: () => (/* binding */ selectEnableLoaderMask),
/* harmony export */   selectHasErrorRequireAtLeastOneInternetUsageToBeSelected: () => (/* binding */ selectHasErrorRequireAtLeastOneInternetUsageToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine: () => (/* binding */ selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine),
/* harmony export */   selectHasErrorRequireAtLeastOnePreferenceToBeSelected: () => (/* binding */ selectHasErrorRequireAtLeastOnePreferenceToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError: () => (/* binding */ selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError),
/* harmony export */   selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError: () => (/* binding */ selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError),
/* harmony export */   selectHasErrorRequireInternetWhenTvIsSelected: () => (/* binding */ selectHasErrorRequireInternetWhenTvIsSelected),
/* harmony export */   selectHousehold: () => (/* binding */ selectHousehold),
/* harmony export */   selectHumanCheckoutUrl: () => (/* binding */ selectHumanCheckoutUrl),
/* harmony export */   selectInternetUsage: () => (/* binding */ selectInternetUsage),
/* harmony export */   selectIsDarwinUser: () => (/* binding */ selectIsDarwinUser),
/* harmony export */   selectLastKnownState: () => (/* binding */ selectLastKnownState),
/* harmony export */   selectMobileLines: () => (/* binding */ selectMobileLines),
/* harmony export */   selectMobileUsage: () => (/* binding */ selectMobileUsage),
/* harmony export */   selectNumberOfSims: () => (/* binding */ selectNumberOfSims),
/* harmony export */   selectOnMobileDevice: () => (/* binding */ selectOnMobileDevice),
/* harmony export */   selectOneConfiguratorUrl: () => (/* binding */ selectOneConfiguratorUrl),
/* harmony export */   selectPreference: () => (/* binding */ selectPreference),
/* harmony export */   selectProductRecommendationByIndex: () => (/* binding */ selectProductRecommendationByIndex),
/* harmony export */   selectProductRecommendationResult: () => (/* binding */ selectProductRecommendationResult),
/* harmony export */   selectProductsDetailsUrl: () => (/* binding */ selectProductsDetailsUrl),
/* harmony export */   selectPromotions: () => (/* binding */ selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* binding */ selectSalesCheckoutUrl),
/* harmony export */   selectTvChannels: () => (/* binding */ selectTvChannels),
/* harmony export */   selectTvExperience: () => (/* binding */ selectTvExperience)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_finder_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder.reducers */ 35880);
/* harmony import */ var _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/error/product-finder-error.enum */ 91318);



const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_product_finder_reducers__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_FINDER_FEATURE_KEY);
const selectOnMobileDevice = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.onMobileDevice);
const selectIsDarwinUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.loginDetails?.bssSystem === 'NETCRACKER');
const selectPreference = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.preference);
const selectHousehold = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.household);
const selectInternetUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.internetUsage);
const selectNumberOfSims = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.numberOfSims);
const selectMobileUsage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.mobileUsage);
const selectMobileLines = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.mobileUsage?.mobileLines || []);
const selectTvChannels = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.tvChannels);
const selectTvExperience = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.tvExperience);
const selectPromotions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.promotions);
const selectCustomerProductHolding = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.customerProductHolding);
const selectLastKnownState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.lastKnownState);
const selectProductRecommendationResult = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.productRecommendationResult);
const selectSalesCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.salesCheckoutUrl);
const selectHumanCheckoutUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.humanCheckoutUrl);
const selectProductRecommendationByIndex = index => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductRecommendationResult, productRecommendationResult => productRecommendationResult?.productRecommendations[index]);
const selectEnableLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.enableLoader);
const selectEnableLoaderMask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.enableLoaderMask);
const selectOneConfiguratorUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.oneConfiguratorUrl);
const selectProductsDetailsUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.productsDetailsUrl);
const selectHasErrorRequireAtLeastOnePreferenceToBeSelected = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED);
const selectHasErrorRequireInternetWhenTvIsSelected = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED);
const selectHasErrorRequireAtLeastOneInternetUsageToBeSelected = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED);
const selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE);
const selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED);
const selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error === _entities_error_product_finder_error_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED);

/***/ }),

/***/ 29683:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/stepper/product-finder-stepper-ngrx.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperNgrxModule: () => (/* binding */ ProductFinderStepperNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder-stepper.reducers */ 25524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductFinderStepperNgrxModule {
  static #_ = this.ɵfac = function ProductFinderStepperNgrxModule_Factory(t) {
    return new (t || ProductFinderStepperNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProductFinderStepperNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_1__.productFinderStepperFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductFinderStepperNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 84583:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/stepper/product-finder-stepper.actions.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToNextStep: () => (/* binding */ goToNextStep),
/* harmony export */   goToPreviousStep: () => (/* binding */ goToPreviousStep),
/* harmony export */   nextButtonClicked: () => (/* binding */ nextButtonClicked),
/* harmony export */   notifyStepRendered: () => (/* binding */ notifyStepRendered),
/* harmony export */   redoTest: () => (/* binding */ redoTest),
/* harmony export */   setStepConfig: () => (/* binding */ setStepConfig)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setStepConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] set step config', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToPreviousStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] go to previous step');
const nextButtonClicked = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] next button clicked');
const goToNextStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] go to next step');
const redoTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] redo test');
const notifyStepRendered = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Finder Stepper] notify step rendered', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 18312:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/stepper/product-finder-stepper.effects.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperEffects: () => (/* binding */ ProductFinderStepperEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-finder-stepper.actions */ 84583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-finder-stepper.selectors */ 54752);
/* harmony import */ var _product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-finder-stepper.reducers */ 25524);
/* harmony import */ var _product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-finder.selectors */ 2017);
/* harmony import */ var _product_finder_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-finder.actions */ 63487);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../entities/stepper/product-finder-step.enum */ 36918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);














class ProductFinderStepperEffects {
  constructor(actions$, store, stepperStore, domService) {
    this.actions$ = actions$;
    this.store = store;
    this.stepperStore = stepperStore;
    this.domService = domService;
    this.nextButtonClickedOnStepIntro$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.INTRO), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)())));
    this.nextButtonClickedOnStepPreference$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.PREFERENCE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPreference).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(preference => {
      if (!Object.keys(preference).some(key => preference[key])) {
        return (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOnePreferenceToBeSelectedError)();
      } else if (preference.watchTv && !preference.surfing) {
        return (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireInternetWhenTvIsSelectedError)();
      }
      return (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)();
    })));
    this.nextButtonClickedOnStepHousehold$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.HOUSEHOLD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)())));
    this.nextButtonClickedOnStepInternetUsage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.INTERNET_USAGE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectInternetUsage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(internetUsage => internetUsage?.selection.length !== 0 ? (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)() : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneInternetUsageToBeSelectedError)())));
    this.nextButtonClickedOnStepNumberOfSims$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.NUMBER_OF_SIMS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)())));
    this.nextButtonClickedOnStepMobileUsage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.MOBILE_USAGE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectMobileUsage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(mobileUsage => mobileUsage?.mobileLines.every(mobileLine => mobileLine.selection.length > 0) ? (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)() : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError)())));
    this.nextButtonClickedOnStepTvChannels$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.TV_CHANNELS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectTvChannels).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(tvChannels => tvChannels?.selection.length !== 0 ? (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)() : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneTvChannelToBeSelectedError)())));
    this.nextButtonClickedOnStepTvExperience$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.nextButtonClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(currentStepKey => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.TV_EXPERIENCE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectTvExperience).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(tvExperience => tvExperience?.selection.length !== 0 ? (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep)() : (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneTvExperienceToBeSelectedError)())));
    this.goToNextStepSetStepConfig$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToNextStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.stepperStore.select(_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentStepKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.withLatestFrom)(this.store.select(_product_finder_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPreference)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([currentStepKey, preference]) => {
      const steps = this.getProductFinderSteps(preference);
      const indexOfCurrentStep = steps.findIndex(step => step.key === currentStepKey);
      return (0,_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.setStepConfig)({
        steps,
        currentStep: steps[indexOfCurrentStep + 1]
      });
    })));
    this.goToPreviousStepClearError$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_2__.goToPreviousStep), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => (0,_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.clearError)())));
    this.errorScrollToTop$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneTvChannelToBeSelectedError, _product_finder_actions__WEBPACK_IMPORTED_MODULE_7__.requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.domService.scrollToTop())), {
      dispatch: false
    });
  }
  getProductFinderSteps(preference) {
    const steps = [..._product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_5__.stepperInitialState.steps];
    if (preference.surfing) {
      steps.push({
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.HOUSEHOLD
      }, {
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.INTERNET_USAGE
      });
    }
    if (preference.mobile) {
      steps.push({
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.NUMBER_OF_SIMS
      }, {
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.MOBILE_USAGE
      });
    }
    if (preference.watchTv) {
      steps.push({
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.TV_CHANNELS
      }, {
        key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.TV_EXPERIENCE
      });
    }
    steps.push({
      key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_9__.ProductFinderStepEnum.RESULTS_SCREEN
    });
    return steps;
  }
  static #_ = this.ɵfac = function ProductFinderStepperEffects_Factory(t) {
    return new (t || ProductFinderStepperEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.DomService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: ProductFinderStepperEffects,
    factory: ProductFinderStepperEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 25524:
/*!*********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/stepper/product-finder-stepper.reducers.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_FINDER_STEPPER_FEATURE_KEY: () => (/* binding */ PRODUCT_FINDER_STEPPER_FEATURE_KEY),
/* harmony export */   productFinderStepperFeature: () => (/* binding */ productFinderStepperFeature),
/* harmony export */   productFinderStepperReducer: () => (/* binding */ productFinderStepperReducer),
/* harmony export */   stepperInitialState: () => (/* binding */ stepperInitialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder-stepper.actions */ 84583);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/stepper/product-finder-step.enum */ 36918);




const PRODUCT_FINDER_STEPPER_FEATURE_KEY = 'product-finder-stepper';
const stepperInitialState = {
  steps: [{
    key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.INTRO
  }, {
    key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.PREFERENCE
  }],
  currentStep: {
    key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.INTRO
  }
};
const productFinderStepperReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(stepperInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.setStepConfig, (state, {
  steps,
  currentStep
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.steps = steps;
  draft.currentStep = currentStep;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.goToPreviousStep, state => {
  const indexOfCurrentStep = state.steps.map(step => step.key).indexOf(state.currentStep.key);
  if (indexOfCurrentStep > 0) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
      draft.currentStep = state.steps[indexOfCurrentStep - 1];
    });
  }
  return state;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.redoTest, state => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, () => ({
  ...stepperInitialState,
  currentStep: {
    key: _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.PREFERENCE
  }
}))));
const productFinderStepperFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCT_FINDER_STEPPER_FEATURE_KEY,
  reducer: productFinderStepperReducer
});

/***/ }),

/***/ 54752:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/+state/stepper/product-finder-stepper.selectors.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectCurrentStep: () => (/* binding */ selectCurrentStep),
/* harmony export */   selectCurrentStepKey: () => (/* binding */ selectCurrentStepKey),
/* harmony export */   selectProgressBarVisible: () => (/* binding */ selectProgressBarVisible),
/* harmony export */   selectSteps: () => (/* binding */ selectSteps),
/* harmony export */   selectVisible: () => (/* binding */ selectVisible)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-finder-stepper.reducers */ 25524);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/stepper/product-finder-step.enum */ 36918);



const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_FINDER_STEPPER_FEATURE_KEY);
const selectSteps = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.steps);
const selectCurrentStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.currentStep);
const selectCurrentStepKey = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.currentStep.key);
const selectProgressBarVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCurrentStepKey, key => key !== _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.INTRO);
const selectVisible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCurrentStepKey, key => key !== _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_2__.ProductFinderStepEnum.RESULTS_SCREEN);

/***/ }),

/***/ 91318:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/error/product-finder-error.enum.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderErrorEnum: () => (/* binding */ ProductFinderErrorEnum)
/* harmony export */ });
var ProductFinderErrorEnum;
(function (ProductFinderErrorEnum) {
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED"] = "Require at least one preference to be selected";
  ProductFinderErrorEnum["REQUIRE_INTERNET_WHEN_TV_IS_SELECTED"] = "Require internet when tv is selected";
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED"] = "Require at least one internet usage to be selected";
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE"] = "Require at least one mobile usage to be selected for each mobile line";
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED"] = "Require at least one mobile usage to be selected";
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED"] = "Require at least one tv channel to be selected";
  ProductFinderErrorEnum["REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED"] = "Require at least one tv experience to be selected";
})(ProductFinderErrorEnum || (ProductFinderErrorEnum = {}));

/***/ }),

/***/ 72051:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/household/household.interface.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6243:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/internet-usage/internet-usage.interface.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 48010:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/mobile-usage/mobile.usage.interface.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 96605:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/preference/preference.interface.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64732:
/*!**************************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/results-screen/product-recommendation-result.interface.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 48840:
/*!*******************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/results-screen/product-recommendation.interface.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 33199:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/stepper/component-step.interface.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 36918:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/stepper/product-finder-step.enum.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepEnum: () => (/* binding */ ProductFinderStepEnum)
/* harmony export */ });
var ProductFinderStepEnum;
(function (ProductFinderStepEnum) {
  ProductFinderStepEnum["INTRO"] = "intro";
  ProductFinderStepEnum["PREFERENCE"] = "preference";
  ProductFinderStepEnum["HOUSEHOLD"] = "household";
  ProductFinderStepEnum["INTERNET_USAGE"] = "internetUsage";
  ProductFinderStepEnum["NUMBER_OF_SIMS"] = "numberOfSims";
  ProductFinderStepEnum["MOBILE_USAGE"] = "mobileUsage";
  ProductFinderStepEnum["TV_CHANNELS"] = "tvChannels";
  ProductFinderStepEnum["TV_EXPERIENCE"] = "tvExperience";
  ProductFinderStepEnum["RESULTS_SCREEN"] = "resultsScreen";
})(ProductFinderStepEnum || (ProductFinderStepEnum = {}));

/***/ }),

/***/ 71968:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/stepper/product-finder-step.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53814:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/tv-channels/tv-channels.interface.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 84734:
/*!*********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/entities/tv-experience/tv-experinece.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 51079:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/config/product-finder-config.facade.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderConfigFacade: () => (/* binding */ ProductFinderConfigFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductFinderConfigFacade {
  constructor(store) {
    this.store = store;
  }
  updateEnableLoader(enableLoader) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateEnableLoader)({
      enableLoader
    }));
  }
  updateEnableLoaderMask(enableLoaderMask) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateEnableLoaderMask)({
      enableLoaderMask
    }));
  }
  updateSalesCheckoutUrl(salesCheckoutUrl) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateSalesCheckoutUrl)({
      salesCheckoutUrl
    }));
  }
  updateHumanCheckoutUrl(humanCheckoutUrl) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateHumanCheckoutUrl)({
      humanCheckoutUrl
    }));
  }
  updateOneConfiguratorUrl(oneConfiguratorUrl) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateOneConfiguratorUrl)({
      oneConfiguratorUrl
    }));
  }
  updateProductsDetailsUrl(productsDetailsUrl) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateProductsDetailsUrl)({
      productsDetailsUrl
    }));
  }
  static #_ = this.ɵfac = function ProductFinderConfigFacade_Factory(t) {
    return new (t || ProductFinderConfigFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductFinderConfigFacade,
    factory: ProductFinderConfigFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55936:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/household/household-facade.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HouseholdFacade: () => (/* binding */ HouseholdFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class HouseholdFacade {
  constructor(store) {
    this.store = store;
    this.household$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__.selectHousehold).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(household => household !== null));
  }
  updateHousehold(household) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateHousehold)({
      household
    }));
  }
  static #_ = this.ɵfac = function HouseholdFacade_Factory(t) {
    return new (t || HouseholdFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: HouseholdFacade,
    factory: HouseholdFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55024:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/internet-usage/internet-usage-facade.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetUsageFacade: () => (/* binding */ InternetUsageFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class InternetUsageFacade {
  constructor(store) {
    this.store = store;
    this.internetUsage$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__.selectInternetUsage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(internetUsage => internetUsage !== null));
    this.hasErrorRequireAtLeastOneInternetUsageToBeSelected$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__.selectHasErrorRequireAtLeastOneInternetUsageToBeSelected);
  }
  updateInternetUsage(internetUsage) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateInternetUsage)({
      internetUsage
    }));
  }
  static #_ = this.ɵfac = function InternetUsageFacade_Factory(t) {
    return new (t || InternetUsageFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: InternetUsageFacade,
    factory: InternetUsageFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 80930:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/mobile-usage/mobile-usage.facade.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileUsageFacade: () => (/* binding */ MobileUsageFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class MobileUsageFacade {
  constructor(store) {
    this.store = store;
    this.mobileUsage$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__.selectMobileUsage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(mobileUsage => mobileUsage !== null));
    this.hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_2__.selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine);
  }
  updateMobileLineSelection(index, selection) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileLineSelection)({
      index,
      selection
    }));
  }
  updateMobileLineCollapsed(index, collapsed) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_1__.updateMobileLineCollapsed)({
      index,
      collapsed
    }));
  }
  static #_ = this.ɵfac = function MobileUsageFacade_Factory(t) {
    return new (t || MobileUsageFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MobileUsageFacade,
    factory: MobileUsageFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 53920:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/number-of-sims/number-of-sims-facade.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberOfSimsFacade: () => (/* binding */ NumberOfSimsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class NumberOfSimsFacade {
  constructor(store) {
    this.store = store;
    this.numberOfSims$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectNumberOfSims).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(numberOfSims => numberOfSims !== null));
  }
  updateNumberOfSims(numberOfSims) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateNumberOfSims)({
      numberOfSims
    }));
  }
  static #_ = this.ɵfac = function NumberOfSimsFacade_Factory(t) {
    return new (t || NumberOfSimsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: NumberOfSimsFacade,
    factory: NumberOfSimsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85017:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/preference/preference-facade.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenceFacade: () => (/* binding */ PreferenceFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class PreferenceFacade {
  constructor(store) {
    this.store = store;
    this.preference$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPreference);
    this.hasErrorRequireAtLeastOnePreferenceToBeSelected$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectHasErrorRequireAtLeastOnePreferenceToBeSelected);
    this.hasErrorRequireInternetWhenTvIsSelected$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectHasErrorRequireInternetWhenTvIsSelected);
  }
  updatePreference(preference) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updatePreference)({
      preference
    }));
  }
  clearError() {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.clearError)());
  }
  static #_ = this.ɵfac = function PreferenceFacade_Factory(t) {
    return new (t || PreferenceFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: PreferenceFacade,
    factory: PreferenceFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 80061:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/results-screen/results-screen.facade.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsScreenFacade: () => (/* binding */ ResultsScreenFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class ResultsScreenFacade {
  constructor(store) {
    this.store = store;
    this.enableLoader$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEnableLoader);
    this.enableLoaderMask$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEnableLoaderMask);
    this.productRecommendationResult$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectProductRecommendationResult).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(productRecommendationResult => productRecommendationResult !== null));
  }
  getProductRecommendations() {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_3__.getProductRecommendations)());
  }
  order(index) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_3__.order)({
      index
    }));
  }
  resultDetails(index) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_3__.resultDetails)({
      index
    }));
  }
  static #_ = this.ɵfac = function ResultsScreenFacade_Factory(t) {
    return new (t || ResultsScreenFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ResultsScreenFacade,
    factory: ResultsScreenFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36955:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/stepper/product-finder-stepper-facade.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderStepperFacade: () => (/* binding */ ProductFinderStepperFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/stepper/product-finder-stepper.actions */ 84583);
/* harmony import */ var _state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/stepper/product-finder-stepper.selectors */ 54752);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 71646);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/stepper/product-finder-step.enum */ 36918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









class ProductFinderStepperFacade {
  constructor(store) {
    this.store = store;
    this.currentStep$ = this.store.select(_state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentStep);
    this.currentStepKey$ = this.store.select(_state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentStepKey);
    this.steps$ = this.store.select(_state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSteps);
    this.currentStepNumber$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.currentStep$, this.steps$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([currentStep, steps]) => (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(steps, step => step.key === currentStep.key) + 1));
    this.progressPercentage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.currentStepKey$, this.currentStepNumber$, this.steps$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([currentStepKey, currentStepNumber, steps]) => currentStepKey === _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_5__.ProductFinderStepEnum.PREFERENCE ? 25 : Math.round(currentStepNumber / steps.length * 100)));
    this.progressBarVisible$ = this.store.select(_state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__.selectProgressBarVisible);
    this.visible$ = this.store.select(_state_stepper_product_finder_stepper_selectors__WEBPACK_IMPORTED_MODULE_2__.selectVisible);
  }
  goToPreviousStep() {
    this.store.dispatch((0,_state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.goToPreviousStep)());
  }
  goToNextStep() {
    this.store.dispatch((0,_state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.goToNextStep)());
  }
  nextButtonClicked() {
    this.store.dispatch((0,_state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.nextButtonClicked)());
  }
  redoTest() {
    this.store.dispatch((0,_state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.redoTest)());
  }
  notifyStepRendered(step) {
    this.store.dispatch((0,_state_stepper_product_finder_stepper_actions__WEBPACK_IMPORTED_MODULE_1__.notifyStepRendered)({
      step
    }));
  }
  static #_ = this.ɵfac = function ProductFinderStepperFacade_Factory(t) {
    return new (t || ProductFinderStepperFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ProductFinderStepperFacade,
    factory: ProductFinderStepperFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 29874:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/tv-channels/tv-channels.facade.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChannelsFacade: () => (/* binding */ TvChannelsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class TvChannelsFacade {
  constructor(store) {
    this.store = store;
    this.tvChannels$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTvChannels).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(tvChannels => tvChannels !== null));
    this.hasErrorRequireAtLeastOneTvChannelToBeSelectedError$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError);
  }
  updateTvChannels(tvChannels) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateTvChannels)({
      tvChannels
    }));
  }
  static #_ = this.ɵfac = function TvChannelsFacade_Factory(t) {
    return new (t || TvChannelsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: TvChannelsFacade,
    factory: TvChannelsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18434:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/facades/tv-experience/tv-experience-facade.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvExperienceFacade: () => (/* binding */ TvExperienceFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/product-finder.selectors */ 2017);
/* harmony import */ var _state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/product-finder.actions */ 63487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class TvExperienceFacade {
  constructor(store) {
    this.store = store;
    this.tvExperience$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectTvExperience).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(tvExperience => tvExperience !== null));
    this.hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$ = this.store.select(_state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_1__.selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError);
  }
  updateTvExperience(tvExperience) {
    this.store.dispatch((0,_state_product_finder_actions__WEBPACK_IMPORTED_MODULE_2__.updateTvExperience)({
      tvExperience
    }));
  }
  static #_ = this.ɵfac = function TvExperienceFacade_Factory(t) {
    return new (t || TvExperienceFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: TvExperienceFacade,
    factory: TvExperienceFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35075:
/*!****************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HouseholdFacade: () => (/* reexport safe */ _facades_household_household_facade__WEBPACK_IMPORTED_MODULE_5__.HouseholdFacade),
/* harmony export */   InternetUsageFacade: () => (/* reexport safe */ _facades_internet_usage_internet_usage_facade__WEBPACK_IMPORTED_MODULE_7__.InternetUsageFacade),
/* harmony export */   MobileUsageFacade: () => (/* reexport safe */ _facades_mobile_usage_mobile_usage_facade__WEBPACK_IMPORTED_MODULE_9__.MobileUsageFacade),
/* harmony export */   NumberOfSimsFacade: () => (/* reexport safe */ _facades_number_of_sims_number_of_sims_facade__WEBPACK_IMPORTED_MODULE_3__.NumberOfSimsFacade),
/* harmony export */   PRODUCT_FINDER_FEATURE_KEY: () => (/* reexport safe */ _state_product_finder_reducers__WEBPACK_IMPORTED_MODULE_18__.PRODUCT_FINDER_FEATURE_KEY),
/* harmony export */   PRODUCT_FINDER_STEPPER_FEATURE_KEY: () => (/* reexport safe */ _state_stepper_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_21__.PRODUCT_FINDER_STEPPER_FEATURE_KEY),
/* harmony export */   PreferenceFacade: () => (/* reexport safe */ _facades_preference_preference_facade__WEBPACK_IMPORTED_MODULE_2__.PreferenceFacade),
/* harmony export */   ProductFinderConfigFacade: () => (/* reexport safe */ _facades_config_product_finder_config_facade__WEBPACK_IMPORTED_MODULE_0__.ProductFinderConfigFacade),
/* harmony export */   ProductFinderNgrxModule: () => (/* reexport safe */ _state_product_finder_ngrx_module__WEBPACK_IMPORTED_MODULE_17__.ProductFinderNgrxModule),
/* harmony export */   ProductFinderStepEnum: () => (/* reexport safe */ _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_24__.ProductFinderStepEnum),
/* harmony export */   ProductFinderStepperFacade: () => (/* reexport safe */ _facades_stepper_product_finder_stepper_facade__WEBPACK_IMPORTED_MODULE_25__.ProductFinderStepperFacade),
/* harmony export */   ProductFinderStepperNgrxModule: () => (/* reexport safe */ _state_stepper_product_finder_stepper_ngrx_module__WEBPACK_IMPORTED_MODULE_20__.ProductFinderStepperNgrxModule),
/* harmony export */   ResultsScreenFacade: () => (/* reexport safe */ _facades_results_screen_results_screen_facade__WEBPACK_IMPORTED_MODULE_16__.ResultsScreenFacade),
/* harmony export */   TvChannelsFacade: () => (/* reexport safe */ _facades_tv_channels_tv_channels_facade__WEBPACK_IMPORTED_MODULE_11__.TvChannelsFacade),
/* harmony export */   TvExperienceFacade: () => (/* reexport safe */ _facades_tv_experience_tv_experience_facade__WEBPACK_IMPORTED_MODULE_13__.TvExperienceFacade),
/* harmony export */   featureState: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.featureState),
/* harmony export */   initialState: () => (/* reexport safe */ _state_product_finder_reducers__WEBPACK_IMPORTED_MODULE_18__.initialState),
/* harmony export */   productFinderFeature: () => (/* reexport safe */ _state_product_finder_reducers__WEBPACK_IMPORTED_MODULE_18__.productFinderFeature),
/* harmony export */   productFinderReducer: () => (/* reexport safe */ _state_product_finder_reducers__WEBPACK_IMPORTED_MODULE_18__.productFinderReducer),
/* harmony export */   productFinderStepperFeature: () => (/* reexport safe */ _state_stepper_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_21__.productFinderStepperFeature),
/* harmony export */   productFinderStepperReducer: () => (/* reexport safe */ _state_stepper_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_21__.productFinderStepperReducer),
/* harmony export */   selectCustomerProductHolding: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectCustomerProductHolding),
/* harmony export */   selectEnableLoader: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectEnableLoader),
/* harmony export */   selectEnableLoaderMask: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectEnableLoaderMask),
/* harmony export */   selectHasErrorRequireAtLeastOneInternetUsageToBeSelected: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireAtLeastOneInternetUsageToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine),
/* harmony export */   selectHasErrorRequireAtLeastOnePreferenceToBeSelected: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireAtLeastOnePreferenceToBeSelected),
/* harmony export */   selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError),
/* harmony export */   selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError),
/* harmony export */   selectHasErrorRequireInternetWhenTvIsSelected: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHasErrorRequireInternetWhenTvIsSelected),
/* harmony export */   selectHousehold: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHousehold),
/* harmony export */   selectHumanCheckoutUrl: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectHumanCheckoutUrl),
/* harmony export */   selectInternetUsage: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectInternetUsage),
/* harmony export */   selectIsDarwinUser: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectIsDarwinUser),
/* harmony export */   selectLastKnownState: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectLastKnownState),
/* harmony export */   selectMobileLines: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectMobileLines),
/* harmony export */   selectMobileUsage: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectMobileUsage),
/* harmony export */   selectNumberOfSims: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectNumberOfSims),
/* harmony export */   selectOnMobileDevice: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectOnMobileDevice),
/* harmony export */   selectOneConfiguratorUrl: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectOneConfiguratorUrl),
/* harmony export */   selectPreference: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectPreference),
/* harmony export */   selectProductRecommendationByIndex: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectProductRecommendationByIndex),
/* harmony export */   selectProductRecommendationResult: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectProductRecommendationResult),
/* harmony export */   selectProductsDetailsUrl: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectProductsDetailsUrl),
/* harmony export */   selectPromotions: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectPromotions),
/* harmony export */   selectSalesCheckoutUrl: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectSalesCheckoutUrl),
/* harmony export */   selectTvChannels: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectTvChannels),
/* harmony export */   selectTvExperience: () => (/* reexport safe */ _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__.selectTvExperience),
/* harmony export */   stepperInitialState: () => (/* reexport safe */ _state_stepper_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_21__.stepperInitialState)
/* harmony export */ });
/* harmony import */ var _facades_config_product_finder_config_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facades/config/product-finder-config.facade */ 51079);
/* harmony import */ var _entities_preference_preference_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/preference/preference.interface */ 96605);
/* harmony import */ var _facades_preference_preference_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facades/preference/preference-facade */ 85017);
/* harmony import */ var _facades_number_of_sims_number_of_sims_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facades/number-of-sims/number-of-sims-facade */ 53920);
/* harmony import */ var _entities_household_household_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/household/household.interface */ 72051);
/* harmony import */ var _facades_household_household_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facades/household/household-facade */ 55936);
/* harmony import */ var _entities_internet_usage_internet_usage_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/internet-usage/internet-usage.interface */ 6243);
/* harmony import */ var _facades_internet_usage_internet_usage_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facades/internet-usage/internet-usage-facade */ 55024);
/* harmony import */ var _entities_mobile_usage_mobile_usage_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities/mobile-usage/mobile.usage.interface */ 48010);
/* harmony import */ var _facades_mobile_usage_mobile_usage_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facades/mobile-usage/mobile-usage.facade */ 80930);
/* harmony import */ var _entities_tv_channels_tv_channels_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entities/tv-channels/tv-channels.interface */ 53814);
/* harmony import */ var _facades_tv_channels_tv_channels_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./facades/tv-channels/tv-channels.facade */ 29874);
/* harmony import */ var _entities_tv_experience_tv_experinece_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/tv-experience/tv-experinece.interface */ 84734);
/* harmony import */ var _facades_tv_experience_tv_experience_facade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./facades/tv-experience/tv-experience-facade */ 18434);
/* harmony import */ var _entities_results_screen_product_recommendation_result_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entities/results-screen/product-recommendation-result.interface */ 64732);
/* harmony import */ var _entities_results_screen_product_recommendation_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/results-screen/product-recommendation.interface */ 48840);
/* harmony import */ var _facades_results_screen_results_screen_facade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./facades/results-screen/results-screen.facade */ 80061);
/* harmony import */ var _state_product_finder_ngrx_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./+state/product-finder-ngrx.module */ 68804);
/* harmony import */ var _state_product_finder_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./+state/product-finder.reducers */ 35880);
/* harmony import */ var _state_product_finder_selectors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./+state/product-finder.selectors */ 2017);
/* harmony import */ var _state_stepper_product_finder_stepper_ngrx_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./+state/stepper/product-finder-stepper-ngrx.module */ 29683);
/* harmony import */ var _state_stepper_product_finder_stepper_reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./+state/stepper/product-finder-stepper.reducers */ 25524);
/* harmony import */ var _entities_stepper_component_step_interface__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/stepper/component-step.interface */ 33199);
/* harmony import */ var _entities_stepper_product_finder_step__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./entities/stepper/product-finder-step */ 71968);
/* harmony import */ var _entities_stepper_product_finder_step_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./entities/stepper/product-finder-step.enum */ 36918);
/* harmony import */ var _facades_stepper_product_finder_stepper_facade__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./facades/stepper/product-finder-stepper-facade */ 36955);



























/***/ }),

/***/ 66021:
/*!**********************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/infrastructure/results-screen/product-recommendation.mapper.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRecommendationMapper: () => (/* binding */ ProductRecommendationMapper)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductRecommendationMapper {
  constructor(productService) {
    this.productService = productService;
  }
  toModel(rawProductRecommendationResult) {
    return this.mapToProductRecommendationResult(rawProductRecommendationResult);
  }
  mapToProductRecommendationResult(rawProductRecommendationResult) {
    const productRecommendationObservables = rawProductRecommendationResult.productRecommendations.map(rawProductRecommendation => this.mapToProductRecommendation(rawProductRecommendation));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(productRecommendationObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(productRecommendations => ({
      productRecommendations,
      mostRecommendedIndex: rawProductRecommendationResult.mostRecommendedIndex
    })));
  }
  mapToProductRecommendation(rawProductRecommendation) {
    const offers = rawProductRecommendation.offers.map(rawOffer => this.mapToOffer(rawOffer));
    return this.productService.getProducts({
      offers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(products => ({
      offers,
      salesOffer: this.mapToSalesOffer(rawProductRecommendation.salesOffer),
      products
    })));
  }
  mapToOffer(rawOffer) {
    return {
      id: rawOffer.id,
      type: rawOffer.type,
      offers: rawOffer.offers.map(offer => this.mapToOffer(offer)),
      amountOfLimitedSims: rawOffer.amountOfLimitedSims
    };
  }
  mapToSalesOffer(rawSalesOffer) {
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
  static #_ = this.ɵfac = function ProductRecommendationMapper_Factory(t) {
    return new (t || ProductRecommendationMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductRecommendationMapper,
    factory: ProductRecommendationMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 743:
/*!***********************************************************************************************************************!*\
  !*** ./libs/sales/product-finder/data-access/src/lib/infrastructure/results-screen/product-recommendation.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRecommendationService: () => (/* binding */ ProductRecommendationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_recommendation_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-recommendation.mapper */ 66021);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class ProductRecommendationService {
  constructor(http, productRecommendationMapper, configService) {
    this.http = http;
    this.productRecommendationMapper = productRecommendationMapper;
    this.configService = configService;
  }
  getProductRecommendations(productRecommendationsRequest) {
    return this.http.post(this.getProductRecommendationsUrl(), productRecommendationsRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(rawProductRecommendationResult => this.productRecommendationMapper.toModel(rawProductRecommendationResult)));
  }
  getProductRecommendationsUrl() {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigConstants.PRODUCT_FINDER_URL).concat('/product-finder/api/v1/product-finder');
  }
  static #_ = this.ɵfac = function ProductRecommendationService_Factory(t) {
    return new (t || ProductRecommendationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_product_recommendation_mapper__WEBPACK_IMPORTED_MODULE_1__.ProductRecommendationMapper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductRecommendationService,
    factory: ProductRecommendationService.ɵfac,
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


/***/ }),

/***/ 17558:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 73875:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ 64014);
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ 32208);
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ 16546);
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ 32502);
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ 36788);






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);

/***/ }),

/***/ 32938:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ 99537);
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ 15126);
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ 23936);
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ 69420);
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ 88886);






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);

/***/ }),

/***/ 525:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 80795:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ 43771);
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ 99809);
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ 29080);
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ 89927);
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ 58096);






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);

/***/ }),

/***/ 89433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23684:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 77081:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 80795);
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ 64924);
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ 68336);




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCache);

/***/ }),

/***/ 53536:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ 6677);
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ 55311);
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ 95121);
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ 90669);
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ 79746);







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ 82134:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ 49764:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);

/***/ }),

/***/ 12680:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 74423:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 54937:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ 26513);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 29385);







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
    isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
    isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);

/***/ }),

/***/ 64987:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);

/***/ }),

/***/ 11191:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 72125:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);

/***/ }),

/***/ 23342:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);

/***/ }),

/***/ 24150:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);

/***/ }),

/***/ 31527:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 17478);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 50667);



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return index && index == length ? object : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);

/***/ }),

/***/ 70341:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 79304:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ 65144);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ 5354);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ 2100:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseHasIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseHasIn);

/***/ }),

/***/ 34063:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);

/***/ }),

/***/ 90153:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ 2649);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other)) {
    return value !== value && other !== other;
  }
  return (0,_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqual);

/***/ }),

/***/ 2649:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_equalByTag.js */ 38790);
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_equalObjects.js */ 40457);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 29385);









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    othIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    objTag = objIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
    othTag = othIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
    if (!(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return objIsArr || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) ? (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, bitmask, customizer, equalFunc, stack) : (0,_equalByTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return (0,_equalObjects_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqualDeep);

/***/ }),

/***/ 75435:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMatch.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ 90153);



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMatch);

/***/ }),

/***/ 52020:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ 38426);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ 51540);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);

/***/ }),

/***/ 80970:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);

/***/ }),

/***/ 34018:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIteratee.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMatches.js */ 76623);
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ 24185);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 25416);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ 14691);






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if (typeof value == 'object') {
    return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? (0,_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value[0], value[1]) : (0,_baseMatches_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
  }
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIteratee);

/***/ }),

/***/ 22093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 93058);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 76623:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatches.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMatch.js */ 75435);
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMatchData.js */ 33741);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 30499);




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = (0,_getMatchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || (0,_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, source, matchData);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatches);

/***/ }),

/***/ 24185:
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatchesProperty.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseIsEqual.js */ 90153);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get.js */ 26687);
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hasIn.js */ 23595);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 96646);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 30499);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ 50667);








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) && (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue)) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path), srcValue);
  }
  return function (object) {
    var objValue = (0,_get_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, path);
    return objValue === undefined && objValue === srcValue ? (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, path) : (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatchesProperty);

/***/ }),

/***/ 54005:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseProperty);

/***/ }),

/***/ 2539:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyDeep.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 31527);


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePropertyDeep);

/***/ }),

/***/ 26513:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);

/***/ }),

/***/ 25696:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ 67380);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);

/***/ }),

/***/ 99276:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 88655);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);

/***/ }),

/***/ 87523:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);

/***/ }),

/***/ 44066:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheHas);

/***/ }),

/***/ 17478:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ 21769);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ 88511);





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);

/***/ }),

/***/ 1408:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);

/***/ }),

/***/ 77604:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ 77081);
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ 72125);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ 44066);




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0,_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function (othValue, othIndex) {
        if (!(0,_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalArrays);

/***/ }),

/***/ 38790:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ 28325);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 77604);
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapToArray.js */ 74269);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_setToArray.js */ 60974);







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalByTag);

/***/ }),

/***/ 40457:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ 44857);


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    objLength = objProps.length,
    othProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalObjects);

/***/ }),

/***/ 60800:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ 44857:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 70341);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 9294);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 54564:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ 64405);


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);

/***/ }),

/***/ 33741:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getMatchData.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 96646);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ 31192);



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)];
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatchData);

/***/ }),

/***/ 72483:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ 52020);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ 91680);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);

/***/ }),

/***/ 65144:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ 9294:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 74423);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71509);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 8020:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 17558);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 89433);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 12680);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 51540);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 91680:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ 71183:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hasPath.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 17478);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 50667);







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasPath);

/***/ }),

/***/ 64014:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);

/***/ }),

/***/ 32208:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);

/***/ }),

/***/ 16546:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);

/***/ }),

/***/ 32502:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);

/***/ }),

/***/ 36788:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);

/***/ }),

/***/ 36570:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);

/***/ }),

/***/ 75836:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ 67380);



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);

/***/ }),

/***/ 64405:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);

/***/ }),

/***/ 38426:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ 1408);


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);

/***/ }),

/***/ 54036:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);

/***/ }),

/***/ 96646:
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/_isStrictComparable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isStrictComparable);

/***/ }),

/***/ 99537:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);

/***/ }),

/***/ 15126:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);

/***/ }),

/***/ 23936:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  return index < 0 ? undefined : data[index][1];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);

/***/ }),

/***/ 69420:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);

/***/ }),

/***/ 88886:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);

/***/ }),

/***/ 43771:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ 73875);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);

/***/ }),

/***/ 99809:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);

/***/ }),

/***/ 29080:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);

/***/ }),

/***/ 89927:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);

/***/ }),

/***/ 58096:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);

/***/ }),

/***/ 74269:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapToArray);

/***/ }),

/***/ 30499:
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_matchesStrictComparable.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matchesStrictComparable);

/***/ }),

/***/ 65119:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ 80151);


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);

/***/ }),

/***/ 9140:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);

/***/ }),

/***/ 93058:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 92596:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);

/***/ }),

/***/ 5354:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ 84119:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);

/***/ }),

/***/ 16396:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ 64924:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheAdd);

/***/ }),

/***/ 68336:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheHas);

/***/ }),

/***/ 60974:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToArray);

/***/ }),

/***/ 6677:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);

/***/ }),

/***/ 55311:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);

/***/ }),

/***/ 95121:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);

/***/ }),

/***/ 90669:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);

/***/ }),

/***/ 79746:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ 80795);




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);

/***/ }),

/***/ 21769:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ 65119);


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);

/***/ }),

/***/ 50667:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);

/***/ }),

/***/ 51540:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);

/***/ }),

/***/ 88655:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);

/***/ }),

/***/ 28325:
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);

/***/ }),

/***/ 71646:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/findIndex.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ 24150);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toInteger.js */ 37861);




/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate, 3), index);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findIndex);

/***/ }),

/***/ 26687:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 31527);


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);

/***/ }),

/***/ 23595:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/hasIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseHasIn.js */ 2100);
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasPath.js */ 71183);



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && (0,_hasPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasIn);

/***/ }),

/***/ 25416:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);

/***/ }),

/***/ 77018:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ 34063);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return arguments;
}()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);

/***/ }),

/***/ 66328:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 64070:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ 74080);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);

/***/ }),

/***/ 92467:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ 68534);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);

/***/ }),

/***/ 93084:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 74080:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);

/***/ }),

/***/ 32176:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 333:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ 67380:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);

/***/ }),

/***/ 29385:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ 80970);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);

/***/ }),

/***/ 31192:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 80151:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 80795);


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);

/***/ }),

/***/ 14691:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/property.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseProperty.js */ 54005);
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_basePropertyDeep.js */ 2539);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 75836);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ 50667);





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) ? (0,_baseProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path)) : (0,_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);

/***/ }),

/***/ 71509:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 68534:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);

/***/ }),

/***/ 82071:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toFinite.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 20567);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);

/***/ }),

/***/ 37861:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/toInteger.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ 82071);


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toInteger);

/***/ }),

/***/ 20567:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 99276);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);

/***/ }),

/***/ 88511:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ 25696);


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);

/***/ }),

/***/ 8851:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-device-detector/fesm2022/ngx-device-detector.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSERS: () => (/* binding */ BROWSERS),
/* harmony export */   BROWSERS_RE: () => (/* binding */ BROWSERS_RE),
/* harmony export */   BROWSER_VERSIONS_RE: () => (/* binding */ BROWSER_VERSIONS_RE),
/* harmony export */   BROWSER_VERSIONS_RE_MAP: () => (/* binding */ BROWSER_VERSIONS_RE_MAP),
/* harmony export */   DESKTOP_DEVICES: () => (/* binding */ DESKTOP_DEVICES),
/* harmony export */   DEVICES: () => (/* binding */ DEVICES),
/* harmony export */   DEVICES_RE: () => (/* binding */ DEVICES_RE),
/* harmony export */   DeviceDetectorService: () => (/* binding */ DeviceDetectorService),
/* harmony export */   DeviceType: () => (/* binding */ DeviceType),
/* harmony export */   GENERAL: () => (/* binding */ GENERAL),
/* harmony export */   MOBILES_RE: () => (/* binding */ MOBILES_RE),
/* harmony export */   OS: () => (/* binding */ OS),
/* harmony export */   OS_RE: () => (/* binding */ OS_RE),
/* harmony export */   OS_VERSIONS: () => (/* binding */ OS_VERSIONS),
/* harmony export */   OS_VERSIONS_RE: () => (/* binding */ OS_VERSIONS_RE),
/* harmony export */   OS_VERSIONS_RE_MAP: () => (/* binding */ OS_VERSIONS_RE_MAP),
/* harmony export */   OrientationType: () => (/* binding */ OrientationType),
/* harmony export */   ReTree: () => (/* binding */ ReTree),
/* harmony export */   TABLETS_RE: () => (/* binding */ TABLETS_RE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);




/**
 * Created by ahsanayaz on 08/11/2016.
 */
const GENERAL = {
  UKNOWN: 'Unknown'
};
const BROWSERS = {
  CHROME: 'Chrome',
  FIREFOX: 'Firefox',
  SAFARI: 'Safari',
  OPERA: 'Opera',
  IE: 'IE',
  MS_EDGE: 'MS-Edge',
  MS_EDGE_CHROMIUM: 'MS-Edge-Chromium',
  FB_MESSANGER: 'FB-Messanger',
  SAMSUNG: 'Samsung',
  UCBROWSER: 'UC-Browser',
  UNKNOWN: GENERAL.UKNOWN
};
const MOBILES_RE = {
  // tslint:disable-next-line:max-line-length
  HTC: /HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel/,
  NEXUS_PHONE: /Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6/,
  DELL: /Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/,
  MOTOROLA: new RegExp(`Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|
      A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|
      MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|
      ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|
      WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|
      XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|
      XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052`),
  SAMSUNG: new RegExp(`\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|
      GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|
      GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|
      GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|
      GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|
      GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|
      GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|
      GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|
      GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|
      GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|
      GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|
      GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|
      GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|
      GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|
      GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|
      GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|
      GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|
      GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|
      SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|
      SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|
      SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|
      SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|
      SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|
      SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|
      SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|
      SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|
      SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|
      SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|
      SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|
      SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|
      SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|
      SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|
      SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|
      SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|
      SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|
      SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|
      SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|
      SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|
      SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|
      SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|
      SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|
      SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|
      SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|
      SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|
      SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|
      SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|
      SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|
      SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|
      SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|
      GT-N7105|SCH-I535|SM-N900A|SM-N900T|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|
      GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|
      GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|
      SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|
      SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|
      SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F`),
  LG: new RegExp(`\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|
      LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|
      C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|
      LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|
      VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|
      MS323|M257)`),
  SONY: /SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533/,
  ASUS: /Asus.*Galaxy|PadFone.*Mobile/,
  NOKIA_LUMIA: /Lumia [0-9]{3,4}/,
  MICROMAX: /Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b/,
  PALM: /PalmSource|Palm/,
  VERTU: /Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature/,
  PANTECH: new RegExp(`PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|
        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|
        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|
        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|
        P2000|P7040|P7000|C790`),
  FLY: /IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250/,
  WIKO: new RegExp(`KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|
        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|
        CINK KING|CINK PEAX|CINK SLIM|SUBLIM`),
  I_MOBILE: /i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)/,
  SIMVALLEY: /\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b/,
  WOLFGANG: /AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q/,
  ALCATEL: /Alcatel|Mobile; rv:49.0|Mobile; ALCATEL 4052R; rv:48.0/,
  NINTENDO: /Nintendo (3DS|Switch)/,
  AMOI: /Amoi/,
  INQ: /INQ/,
  VITA: /\bVita\b/,
  BLACKBERRY: /\bBlackBerry\b|\bBB10\b|rim[0-9]+/,
  FIREFOX_OS: /\bFirefox-OS\b/,
  IPHONE: /\biPhone\b/,
  iPod: /\biPod\b/,
  ANDROID: /\bAndroid\b/,
  WINDOWS_PHONE: /\bWindows-Phone\b/,
  GENERIC_PHONE: new RegExp(`Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|
        up.link|vodafone|\\bwap\\b|nokia|Nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser`)
};
const TABLETS_RE = {
  iPad: /iPad|iPad.*Mobile/,
  NexusTablet: /Android.*Nexus[\s]+(7|9|10)/,
  GoogleTablet: /Android.*Pixel C/,
  SamsungTablet: new RegExp(`SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|
        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|
        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|
        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|
        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|
        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|
        SHV-E230S|SHW-M180K|SHW-M180L|SM-T865|SM-T290|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|
        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|
        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T385M|SM-P585M|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|
        SM-P601|SM-P605|SM-P615|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|
        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|
        SM-T510|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|
        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T500|SM-T330|
        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|
        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|
        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|
        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|
        SM-T719|SM-T725|SM-T813|SM-T819|SM-T580|SM-T590|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|
        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-P585Y|SM-X200|SM-T970`),
  Kindle: new RegExp(`Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|
        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\
        /[0-9.]+ (?!Mobile)`),
  SurfaceTablet: /Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)/,
  HPTablet: /HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/,
  AsusTablet: new RegExp(`^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|
        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|
        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|
        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|
        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b`),
  BlackBerryTablet: /PlayBook|RIM Tablet/,
  HTCtablet: /HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410/,
  MotorolaTablet: /xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617/,
  NookTablet: /Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2/,
  AcerTablet: new RegExp(`Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|
        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|
        \\bA3-A20\\b|\\bA3-A30`),
  ToshibaTablet: /Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO/,
  LGTablet: /\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b/,
  FujitsuTablet: /Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b/,
  PrestigioTablet: new RegExp(`PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|
        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|
        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|
        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|
        PMT5887|PMT5001|PMT5002`),
  LenovoTablet: new RegExp(`Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|
        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|
        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X606F|TB-X103F|TB-X304F|TB-X304L|TB-X704F|TB-8703F|Tab2A7-10F|TB2-X30L|TB-8504F`),
  DellTablet: /Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7/,
  YarvikTablet: new RegExp(`Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|
        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|
        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|
        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|
        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b`),
  MedionTablet: /Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB/,
  ArnovaTablet: /97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2/,
  IntensoTablet: /INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004/,
  IRUTablet: /M702pro/,
  MegafonTablet: /MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b/,
  EbodaTablet: /E-Boda (Supreme|Impresspeed|Izzycomm|Essential)/,
  AllViewTablet: /Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)/,
  ArchosTablet: new RegExp(`\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|
         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b`),
  AinolTablet: /NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark/,
  NokiaLumiaTablet: /Lumia 2520/,
  SonyTablet: new RegExp(`Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|
        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|
        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|
        SGP612|SGP712`),
  PhilipsTablet: /\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b/,
  CubeTablet: /Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT/,
  CobyTablet: new RegExp(`MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|
        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010`),
  MIDTablet: new RegExp(`M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|
        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|
        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10`),
  MSITablet: new RegExp(`MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|
        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b`),
  SMiTTablet: /Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)/,
  RockChipTablet: /Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A/,
  FlyTablet: /IQ310|Fly Vision/,
  bqTablet: new RegExp(`Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|
        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus`),
  HuaweiTablet: new RegExp(`MediaPad|MediaPad 7 Youth|MediaPad T3 10|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|
        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-W09|AGS-L09`),
  NecTablet: /\bN-06D|\bN-08D/,
  PantechTablet: /Pantech.*P4100/,
  BronchoTablet: /Broncho.*(N701|N708|N802|a710)/,
  VersusTablet: /TOUCHPAD.*[78910]|\bTOUCHTAB\b/,
  ZyncTablet: /z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900/,
  PositivoTablet: /TB07STA|TB10STA|TB07FTA|TB10FTA/,
  NabiTablet: /Android.*\bNabi/,
  KoboTablet: /Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build/,
  DanewTablet: /DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b/,
  TexetTablet: new RegExp(`NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|
        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|
        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|
        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|
        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|
        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|
        TB-436|TB-416|TB-146SE|TB-126SE`),
  PlaystationTablet: /Playstation.*(Portable|Vita)/,
  TrekstorTablet: /ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab/,
  PyleAudioTablet: /\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b/,
  AdvanTablet: new RegExp(`Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|
        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b`),
  DanyTechTablet: `Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|
        Genius TAB GII|Genius TAB GIII|Genius Tab S1`,
  GalapadTablet: /Android.*\bG1\b(?!\))/,
  MicromaxTablet: /Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b/,
  KarbonnTablet: /Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b/,
  AllFineTablet: /Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide/,
  PROSCANTablet: new RegExp(`\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|
        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|
        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|
        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b`),
  YONESTablet: /BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026/,
  ChangJiaTablet: new RegExp(`TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|
        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|
        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|
        TPC10111|TPC10203|TPC10205|TPC10503`),
  GUTablet: /TX-A1301|TX-M9002|Q702|kf026/,
  PointOfViewTablet: new RegExp(`TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|
        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|
        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|
        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10`),
  OvermaxTablet: new RegExp(`OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|
        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027`),
  HCLTablet: /HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync/,
  DPSTablet: /DPS Dream 9|DPS Dual 7/,
  VistureTablet: /V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10/,
  CrestaTablet: /CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989/,
  MediatekTablet: /\bMT8125|MT8389|MT8135|MT8377\b/,
  ConcordeTablet: /Concorde([ ]+)?Tab|ConCorde ReadMan/,
  GoCleverTablet: new RegExp(`GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|
        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|
        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|
        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|
        TAB R104|TAB R83.3|TAB A1042`),
  ModecomTablet: new RegExp(`FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|
        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|
        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003`),
  VoninoTablet: new RegExp(`\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|
        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|
        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b`),
  ECSTablet: /V07OT2|TM105A|S10OT1|TR10CS1/,
  StorexTablet: /eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab/,
  VodafoneTablet: /SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497/,
  EssentielBTablet: /Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2/,
  RossMoorTablet: /RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711/,
  iMobileTablet: /i-mobile i-note/,
  TolinoTablet: /tolino tab [0-9.]+|tolino shine/,
  AudioSonicTablet: /\bC-22Q|T7-QC|T-17B|T-17P\b/,
  AMPETablet: /Android.* A78 /,
  SkkTablet: /Android.* (SKYPAD|PHOENIX|CYCLOPS)/,
  TecnoTablet: /TECNO P9|TECNO DP8D/,
  JXDTablet: new RegExp(`Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|
        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|
        P1000|P300|S18|S6600|S9100)\\b`),
  iJoyTablet: new RegExp(`Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|
        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|
        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|
        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|
        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)`),
  FX2Tablet: /FX2 PAD7|FX2 PAD10/,
  XoroTablet: new RegExp(`KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|
        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|
        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|
        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151`),
  ViewsonicTablet: /ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a/,
  VerizonTablet: /QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1/,
  OdysTablet: /LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10/,
  CaptivaTablet: /CAPTIVA PAD/,
  IconbitTablet: new RegExp(`NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|
        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S`),
  TeclastTablet: new RegExp(`T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|
        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|
        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|
        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|
        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|
        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|
        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|
        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|
        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi`),
  OndaTablet: new RegExp(`\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|
        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|
        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|
        Vi40)\\b[\s]+|V10 \\b4G\\b`),
  JaytechTablet: /TPC-PA762/,
  BlaupunktTablet: /Endeavour 800NG|Endeavour 1010/,
  DigmaTablet: /\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b/,
  EvolioTablet: /ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b/,
  LavaTablet: /QPAD E704|\bIvoryS\b|E-TAB IVORY|\bE-TAB\b/,
  AocTablet: /MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712/,
  MpmanTablet: new RegExp(`MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|
        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|
        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010`),
  CelkonTablet: /CT695|CT888|CT[\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b/,
  WolderTablet: new RegExp(`miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|
        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|
        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b`),
  MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
  MiTablet: /\bMI PAD\b|\bHM NOTE 1W\b/,
  NibiruTablet: /Nibiru M1|Nibiru Jupiter One/,
  NexoTablet: /NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI/,
  LeaderTablet: new RegExp(`TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|
        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100`),
  UbislateTablet: /UbiSlate[\s]?7C/,
  PocketBookTablet: /Pocketbook/,
  KocasoTablet: /\b(TB-1207)\b/,
  HisenseTablet: /\b(F5281|E2371)\b/,
  Hudl: /Hudl HT7S3|Hudl 2/,
  TelstraTablet: /T-Hub2/,
  Honeywell: /RT10A/,
  GenericTablet: new RegExp(`Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|
        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|
        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107`)
};
const DEVICES = {
  BLACKBERRY: 'Blackberry',
  FIREFOX_OS: 'Firefox-OS',
  CHROME_BOOK: 'Chrome-Book',
  WINDOWS_PHONE: 'Windows-Phone',
  VITA: 'Vita',
  PS4: 'PS4',
  MAC: 'Macintosh',
  CHROMECAST: 'Chromecast',
  APPLE_TV: 'Apple-TV',
  GOOGLE_TV: 'Google-TV',
  ANDROID: 'Android',
  Tesla: 'Tesla',
  iPad: 'iPad',
  IPHONE: 'iPhone',
  iPod: 'iPod',
  UNKNOWN: GENERAL.UKNOWN,
  HTC: 'HTC',
  NEXUS_PHONE: 'Nexus Phone',
  NexusTablet: 'Nexus Tablet',
  DELL: 'Dell',
  MOTOROLA: 'Motorola',
  SAMSUNG: 'Samsung',
  LG: 'LG',
  SONY: 'Sony',
  ASUS: 'Asus',
  NOKIA_LUMIA: 'Nokia Lumia',
  MICROMAX: 'Micromax',
  PALM: 'Palm',
  VERTU: 'Vertu',
  PANTECH: 'PANTECH',
  FLY: 'Fly',
  WIKO: `WIKO`,
  I_MOBILE: 'i-mobile',
  SIMVALLEY: 'Simvalley',
  WOLFGANG: 'Wolfgang',
  ALCATEL: 'Alcatel',
  HONEYWELL: 'Honeywell',
  NINTENDO: 'Nintendo',
  AMOI: 'Amoi',
  INQ: 'INQ',
  GENERIC_PHONE: 'Generic Phone',
  MI_SE_9: 'Mi SE 9'
};
const DESKTOP_DEVICES = [DEVICES.PS4, DEVICES.CHROME_BOOK, DEVICES.MAC, DEVICES.DELL, DEVICES.ASUS, DEVICES.UNKNOWN];
const OS = {
  WINDOWS: 'Windows',
  MAC: 'Mac',
  IOS: 'iOS',
  ANDROID: 'Android',
  LINUX: 'Linux',
  UNIX: 'Unix',
  FIREFOX_OS: 'Firefox-OS',
  CHROME_OS: 'Chrome-OS',
  WINDOWS_PHONE: 'Windows-Phone',
  UNKNOWN: GENERAL.UKNOWN
};
const OS_VERSIONS = {
  WINDOWS_3_11: 'windows-3-11',
  WINDOWS_95: 'windows-95',
  WINDOWS_ME: 'windows-me',
  WINDOWS_98: 'windows-98',
  WINDOWS_CE: 'windows-ce',
  WINDOWS_2000: 'windows-2000',
  WINDOWS_XP: 'windows-xp',
  WINDOWS_SERVER_2003: 'windows-server-2003',
  WINDOWS_VISTA: 'windows-vista',
  WINDOWS_7: 'windows-7',
  WINDOWS_8_1: 'windows-8-1',
  WINDOWS_8: 'windows-8',
  WINDOWS_10: 'windows-10',
  WINDOWS_PHONE_7_5: 'windows-phone-7-5',
  WINDOWS_PHONE_8_1: 'windows-phone-8-1',
  WINDOWS_PHONE_10: 'windows-phone-10',
  WINDOWS_NT_4_0: 'windows-nt-4-0',
  MACOSX_11_0: 'mac-os-x-11-0',
  MACOSX_16: 'mac-os-x-16',
  MACOSX_15: 'mac-os-x-15',
  MACOSX_14: 'mac-os-x-14',
  MACOSX_13: 'mac-os-x-13',
  MACOSX_12: 'mac-os-x-12',
  MACOSX_11: 'mac-os-x-11',
  MACOSX_10: 'mac-os-x-10',
  MACOSX_9: 'mac-os-x-9',
  MACOSX_8: 'mac-os-x-8',
  MACOSX_7: 'mac-os-x-7',
  MACOSX_6: 'mac-os-x-6',
  MACOSX_5: 'mac-os-x-5',
  MACOSX_4: 'mac-os-x-4',
  MACOSX_3: 'mac-os-x-3',
  MACOSX_2: 'mac-os-x-2',
  MACOSX: 'mac-os-x',
  iOS: 'iOS',
  ANDROID_9: 'android-9',
  UNKNOWN: GENERAL.UKNOWN.toLowerCase()
};
const OS_RE = {
  WINDOWS: {
    and: [{
      or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/]
    }, {
      not: /\bWindows Phone\b/
    }]
  },
  MAC: {
    and: [/\bMac OS\b/, {
      not: {
        or: [/\biPhone\b/, /\biPad\b/, /\biPod\b/, /\bWindows Phone\b/]
      }
    }]
  },
  IOS: {
    and: [{
      or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/]
    }, {
      not: /\bWindows Phone\b/
    }]
  },
  ANDROID: {
    and: [/\bAndroid\b/, {
      not: /\bWindows Phone\b/
    }]
  },
  LINUX: /\bLinux\b/,
  UNIX: /\bUNIX\b/,
  FIREFOX_OS: {
    and: [/\bFirefox\b/, /Mobile\b/]
  },
  CHROME_OS: /\bCrOS\b/,
  WINDOWS_PHONE: {
    or: [/\bIEMobile\b/, /\bWindows Phone\b/]
  },
  PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
  VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
const BROWSERS_RE = {
  CHROME: {
    and: [{
      or: [/\bChrome\b/, /\bCriOS\b/, /\bHeadlessChrome\b/]
    }, {
      not: {
        or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
      }
    }]
  },
  FIREFOX: {
    or: [/\bFirefox\b/, /\bFxiOS\b/]
  },
  SAFARI: {
    and: [/^((?!CriOS).)*\Safari\b.*$/, {
      not: {
        or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
      }
    }]
  },
  OPERA: {
    or: [/Opera\b/, /\bOPR\b/]
  },
  IE: {
    or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/]
  },
  MS_EDGE: {
    or: [/\bEdg(e|A|iOS)\b/]
  },
  MS_EDGE_CHROMIUM: /\bEdg\/\b/,
  PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
  VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
  FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
  SAMSUNG: /\bSamsungBrowser\b/,
  UCBROWSER: /\bUCBrowser\b/
};
const DEVICES_RE = {
  ...MOBILES_RE,
  ...TABLETS_RE,
  ...OS_RE,
  FIREFOX_OS: {
    and: [/\bFirefox\b/, /\bMobile\b/]
  },
  CHROME_BOOK: /\bCrOS\b/,
  PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
  CHROMECAST: /\bCrKey\b/,
  APPLE_TV: /^iTunes-AppleTV\/4.1$/,
  GOOGLE_TV: /\bGoogleTV\b/,
  Tesla: /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/,
  MI_SE_9: /\bXiaomi\b/,
  MAC: {
    and: [/\bMac OS\b/, {
      not: {
        or: [/\biPhone\b/, /\biPad\b/, /\biPod\b/, /\bWindows Phone\b/]
      }
    }]
  }
};
const OS_VERSIONS_RE_MAP = {
  WINDOWS_3_11: /Win16/,
  WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
  WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
  WINDOWS_98: /(Windows 98|Win98)/,
  WINDOWS_CE: /Windows CE/,
  WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
  WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
  WINDOWS_SERVER_2003: /Windows NT 5.2/,
  WINDOWS_VISTA: /Windows NT 6.0/,
  WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
  WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
  WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
  WINDOWS_10: /(Windows NT 10.0)/,
  WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
  WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
  WINDOWS_PHONE_10: /(Windows Phone 10)/,
  WINDOWS_NT_4_0: {
    and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, {
      not: /Windows NT 10.0/
    }]
  },
  MACOSX: /(MAC OS X\s*[^ 0-9])/,
  MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
  MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
  MACOSX_5: /(Mac OS X 10.5)/,
  MACOSX_6: /(Mac OS X 10.6)/,
  MACOSX_7: /(Mac OS X 10.7)/,
  MACOSX_8: /(Mac OS X 10.8)/,
  MACOSX_9: /(Mac OS X 10.9)/,
  MACOSX_10: /(Mac OS X 10.10)/,
  MACOSX_11: /(Mac OS X 10.11)/,
  MACOSX_12: /(Mac OS X 10.12)/,
  MACOSX_13: /(Mac OS X 10.13)/,
  MACOSX_14: /(Mac OS X 10.14)/,
  MACOSX_15: /(Mac OS X 10.15)/,
  MACOSX_16: /(Mac OS X 10.16)/,
  MACOSX_11_0: {
    or: [/11_0 like Mac OS X/, /Mac OS X 11/]
  },
  iOS: /(iPhone OS\s*[0-9_]+)/,
  ANDROID_9: /(Android 9)/
};
const BROWSER_VERSIONS_RE_MAP = {
  CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/, /\bHeadlessChrome\/([\d\.]+)\b/],
  FIREFOX: [/\bFirefox\/([\d\.]+)\b/, /\bFxiOS\/([\d\.]+)\b/],
  SAFARI: [/\bVersion\/([\d\.]+)\b/, /\bSafari\/([\d\.]+)\b/],
  OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
  IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
  MS_EDGE: /\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,
  MS_EDGE_CHROMIUM: /\bEdg\/([\d\.]+)\b/,
  SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/,
  UCBROWSER: /\bUCBrowser\/([\d\.]+)\b/
};
const OS_VERSIONS_RE = Object.keys(OS_VERSIONS_RE_MAP).reduce((obj, key) => {
  obj[key] = OS_VERSIONS_RE_MAP[key];
  return obj;
}, {});
const BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce((obj, key) => {
  obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
  return obj;
}, {});
var Constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BROWSERS: BROWSERS,
  BROWSERS_RE: BROWSERS_RE,
  BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE,
  BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
  DESKTOP_DEVICES: DESKTOP_DEVICES,
  DEVICES: DEVICES,
  DEVICES_RE: DEVICES_RE,
  GENERAL: GENERAL,
  MOBILES_RE: MOBILES_RE,
  OS: OS,
  OS_RE: OS_RE,
  OS_VERSIONS: OS_VERSIONS,
  OS_VERSIONS_RE: OS_VERSIONS_RE,
  OS_VERSIONS_RE_MAP: OS_VERSIONS_RE_MAP,
  TABLETS_RE: TABLETS_RE
});

/**
 * Created by ahsanayaz on 08/11/2016.
 */
class ReTree {
  constructor() {}
  test(str, regex) {
    if (typeof regex === 'string') {
      regex = new RegExp(regex);
    }
    if (regex instanceof RegExp) {
      return regex.test(str);
    } else if (regex && Array.isArray(regex.and)) {
      return regex.and.every(item => {
        return this.test(str, item);
      });
    } else if (regex && Array.isArray(regex.or)) {
      return regex.or.some(item => {
        return this.test(str, item);
      });
    } else if (regex && regex.not) {
      return !this.test(str, regex.not);
    } else {
      return false;
    }
  }
  exec(str, regex) {
    if (typeof regex === 'string') {
      regex = new RegExp(regex);
    }
    if (regex instanceof RegExp) {
      return regex.exec(str);
    } else if (regex && Array.isArray(regex)) {
      return regex.reduce((res, item) => {
        return !!res ? res : this.exec(str, item);
      }, null);
    } else {
      return null;
    }
  }
}

// tslint:disable: variable-name
/**
 * Created by ahsanayaz on 08/11/2016.
 */
var DeviceType;
(function (DeviceType) {
  DeviceType["Mobile"] = "mobile";
  DeviceType["Tablet"] = "tablet";
  DeviceType["Desktop"] = "desktop";
  DeviceType["Unknown"] = "unknown";
})(DeviceType || (DeviceType = {}));
var OrientationType;
(function (OrientationType) {
  OrientationType["Portrait"] = "portrait";
  OrientationType["Landscape"] = "landscape";
})(OrientationType || (OrientationType = {}));
const iPad = 'iPad';
class DeviceDetectorService {
  constructor(platformId) {
    this.platformId = platformId;
    this.ua = '';
    this.userAgent = '';
    this.os = '';
    this.browser = '';
    this.device = '';
    this.os_version = '';
    this.browser_version = '';
    this.reTree = new ReTree();
    this.deviceType = '';
    this.orientation = '';
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && typeof window !== 'undefined') {
      this.userAgent = window.navigator.userAgent;
    }
    this.setDeviceInfo(this.userAgent);
  }
  /**
   * @author Ahsan Ayaz
   * @desc Sets the initial value of the device when the service is initiated.
   * This value is later accessible for usage
   */
  setDeviceInfo(ua = this.userAgent) {
    if (ua !== this.userAgent) {
      this.userAgent = ua;
    }
    const mappings = [{
      const: 'OS',
      prop: 'os'
    }, {
      const: 'BROWSERS',
      prop: 'browser'
    }, {
      const: 'DEVICES',
      prop: 'device'
    }, {
      const: 'OS_VERSIONS',
      prop: 'os_version'
    }];
    mappings.forEach(mapping => {
      this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
        if (Constants[mapping.const][item] === 'device') {
          // hack for iOS 13 Tablet
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && (!!this.reTree.test(this.userAgent, TABLETS_RE[iPad]) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            obj[Constants[mapping.const][item]] = iPad;
            return Object;
          }
        }
        obj[Constants[mapping.const][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
        return obj;
      }, {});
    });
    mappings.forEach(mapping => {
      this[mapping.prop] = Object.keys(Constants[mapping.const]).map(key => {
        return Constants[mapping.const][key];
      }).reduce((previousValue, currentValue) => {
        if (mapping.prop === 'device' && previousValue === Constants[mapping.const].ANDROID) {
          // if we have the actual device found, instead of 'Android', return the actual device
          return this[mapping.prop][currentValue] ? currentValue : previousValue;
        } else {
          return previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue] ? currentValue : previousValue;
        }
      }, Constants[mapping.const].UNKNOWN);
    });
    this.browser_version = '0';
    if (this.browser !== BROWSERS.UNKNOWN) {
      const re = BROWSER_VERSIONS_RE[this.browser];
      const res = this.reTree.exec(ua, re);
      if (!!res) {
        this.browser_version = res[1];
      }
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.orientation = window.matchMedia('(orientation: landscape)').matches ? OrientationType.Landscape : OrientationType.Portrait;
    } else {
      this.orientation = GENERAL.UKNOWN;
    }
    this.deviceType = this.isTablet() ? DeviceType.Tablet : this.isMobile(this.userAgent) ? DeviceType.Mobile : this.isDesktop(this.userAgent) ? DeviceType.Desktop : DeviceType.Unknown;
  }
  /**
   * @author Ahsan Ayaz
   * @desc Returns the device information
   * @returns the device information object.
   */
  getDeviceInfo() {
    const deviceInfo = {
      userAgent: this.userAgent,
      os: this.os,
      browser: this.browser,
      device: this.device,
      os_version: this.os_version,
      browser_version: this.browser_version,
      deviceType: this.deviceType,
      orientation: this.orientation
    };
    return deviceInfo;
  }
  /**
   * @author Ahsan Ayaz
   * @desc Compares the current device info with the mobile devices to check
   * if the current device is a mobile and also check current device is tablet so it will return false.
   * @returns whether the current device is a mobile
   */
  isMobile(userAgent = this.userAgent) {
    if (this.isTablet(userAgent)) {
      return false;
    }
    const match = Object.keys(MOBILES_RE).find(mobile => {
      return this.reTree.test(userAgent, MOBILES_RE[mobile]);
    });
    return !!match;
  }
  /**
   * @author Ahsan Ayaz
   * @desc Compares the current device info with the tablet devices to check
   * if the current device is a tablet.
   * @returns whether the current device is a tablet
   */
  isTablet(userAgent = this.userAgent) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && (!!this.reTree.test(this.userAgent, TABLETS_RE[iPad]) || typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      return true;
    }
    const match = Object.keys(TABLETS_RE).find(mobile => {
      return !!this.reTree.test(userAgent, TABLETS_RE[mobile]);
    });
    return !!match;
  }
  /**
   * @author Ahsan Ayaz
   * @desc Compares the current device info with the desktop devices to check
   * if the current device is a desktop device.
   * @returns whether the current device is a desktop device
   */
  isDesktop(userAgent = this.userAgent) {
    if (this.device === DEVICES.UNKNOWN) {
      if (this.isMobile(userAgent) || this.isTablet(userAgent)) {
        return false;
      }
    }
    return DESKTOP_DEVICES.indexOf(this.device) > -1;
  }
  static #_ = this.ɵfac = function DeviceDetectorService_Factory(t) {
    return new (t || DeviceDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DeviceDetectorService,
    factory: DeviceDetectorService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceDetectorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();

/*
 * Public API Surface of ngx-device-detector
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_sales_product-finder_data-access_src_index_ts-_72261.js.map