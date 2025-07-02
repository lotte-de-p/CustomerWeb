(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_shared_data-access_src_index_ts-_8e0b1"],{

/***/ 61687:
/*!****************************************************!*\
  !*** ./libs/sales/shared/data-access/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHoldingService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CustomerProductHoldingService),
/* harmony export */   NextButtonLabelEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NextButtonLabelEnum),
/* harmony export */   ProductService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductService),
/* harmony export */   ProductUtils: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductUtils),
/* harmony export */   PromotionService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PromotionService),
/* harmony export */   StepFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepFacade),
/* harmony export */   StepsNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepsNgrxModule),
/* harmony export */   createIngenicoResultUtil: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createIngenicoResultUtil),
/* harmony export */   defaultState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.featureState),
/* harmony export */   goToFirstStep: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToFirstStep),
/* harmony export */   goToNextStep: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToNextStep),
/* harmony export */   goToPreviousStep: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToPreviousStep),
/* harmony export */   goToStep: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.goToStep),
/* harmony export */   isFirstStep: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.isFirstStep),
/* harmony export */   nextButtonLabel: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.nextButtonLabel),
/* harmony export */   provideStepsNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideStepsNgrxModule),
/* harmony export */   reducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   selectCurrentStepKey: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCurrentStepKey),
/* harmony export */   selectNexStepKey: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectNexStepKey),
/* harmony export */   selectStepByMessageGroup: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectStepByMessageGroup),
/* harmony export */   selectStepKeys: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectStepKeys),
/* harmony export */   setNavigationBarVisibility: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarVisibility),
/* harmony export */   setNextButtonLabel: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setNextButtonLabel),
/* harmony export */   setStepConfig: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setStepConfig),
/* harmony export */   showNavigation: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.showNavigation),
/* harmony export */   stepReducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.stepReducer),
/* harmony export */   stepfeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.stepfeature)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 69404);


/***/ }),

/***/ 79828:
/*!*********************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step-facade.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFacade: () => (/* binding */ StepFacade)
/* harmony export */ });
/* harmony import */ var _step_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.selectors */ 2900);
/* harmony import */ var _step_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.actions */ 39709);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class StepFacade {
  constructor(store) {
    this.store = store;
    this.currentStepKey$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentStepKey);
    this.nextStepKey$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.selectNexStepKey);
    this.selectedSteps$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.selectStepKeys);
    this.isFirstStep$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.isFirstStep);
    this.nextButtonLabel$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.nextButtonLabel);
    this.showNavigation$ = this.store.select(_step_selectors__WEBPACK_IMPORTED_MODULE_0__.showNavigation);
  }
  setStepConfig(steps) {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.setStepConfig)(steps));
  }
  goToFirstStep() {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToFirstStep)());
  }
  goToNextStep() {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToNextStep)());
  }
  goToPreviousStep() {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToPreviousStep)());
  }
  browserBack() {
    window.history.back();
  }
  goToStep(stepKey) {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToStep)({
      stepKey: stepKey
    }));
  }
  setNextButtonLabel(nextButtonLabel) {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.setNextButtonLabel)({
      nextButtonLabel: nextButtonLabel
    }));
  }
  displayNavigationBar() {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.setNavigationBarVisibility)({
      visible: true
    }));
  }
  hideNavigationBar() {
    this.store.dispatch((0,_step_actions__WEBPACK_IMPORTED_MODULE_1__.setNavigationBarVisibility)({
      visible: false
    }));
  }
  static #_ = this.ɵfac = function StepFacade_Factory(t) {
    return new (t || StepFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: StepFacade,
    factory: StepFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 39709:
/*!**********************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step.actions.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToFirstStep: () => (/* binding */ goToFirstStep),
/* harmony export */   goToNextStep: () => (/* binding */ goToNextStep),
/* harmony export */   goToPreviousStep: () => (/* binding */ goToPreviousStep),
/* harmony export */   goToStep: () => (/* binding */ goToStep),
/* harmony export */   setNavigationBarVisibility: () => (/* binding */ setNavigationBarVisibility),
/* harmony export */   setNextButtonLabel: () => (/* binding */ setNextButtonLabel),
/* harmony export */   setStepConfig: () => (/* binding */ setStepConfig)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setStepConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] set configuration', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] go to specific step', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const goToFirstStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] go to first step');
const goToNextStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] go to next step');
const goToPreviousStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] go to previous step');
const setNextButtonLabel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] set next button label', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setNavigationBarVisibility = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stepper] set navigation bar visibility', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 85847:
/*!********************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step.factory.selectors.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectStepByMessageGroup: () => (/* binding */ selectStepByMessageGroup)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.selectors */ 2900);


const selectStepByMessageGroup = messageGroup => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_step_selectors__WEBPACK_IMPORTED_MODULE_1__.featureState, state => state.stepFeature.stepKeys.filter(step => step === messageGroup));

/***/ }),

/***/ 63853:
/*!**********************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step.reducer.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   stepReducer: () => (/* binding */ stepReducer),
/* harmony export */   stepfeature: () => (/* binding */ stepfeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.actions */ 39709);
/* harmony import */ var _step_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step.state */ 94965);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);




const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_step_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.setStepConfig, (state, {
  steps
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.stepFeature.stepKeys = steps;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToFirstStep, state => {
  const stepFeature = state.stepFeature;
  if (stepFeature.stepKeys.length > 0) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
      draft.stepFeature.currentStepKey = stepFeature.stepKeys[0];
    });
  }
  return state;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToStep, (state, {
  stepKey
}) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.stepFeature.currentStepKey = stepKey;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToNextStep, state => {
  const stepFeature = state.stepFeature;
  const indexOf = stepFeature.stepKeys.indexOf(stepFeature.currentStepKey);
  if (indexOf !== stepFeature.stepKeys.length - 1) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
      draft.stepFeature.currentStepKey = stepFeature.stepKeys[indexOf + 1];
    });
  }
  return state;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.goToPreviousStep, state => {
  const stepFeature = state.stepFeature;
  const indexOf = stepFeature.stepKeys.indexOf(stepFeature.currentStepKey);
  if (indexOf > 0) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
      draft.stepFeature.currentStepKey = stepFeature.stepKeys[indexOf - 1];
    });
  }
  return state;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.setNextButtonLabel, (state, {
  nextButtonLabel
}) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.stepFeature.nextButtonLabel = nextButtonLabel;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_step_actions__WEBPACK_IMPORTED_MODULE_1__.setNavigationBarVisibility, (state, {
  visible: visibility
}) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.stepFeature.showNavigation = visibility;
  });
}));
function stepReducer(state = _step_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, action) {
  return reducer(state, action);
}
const stepfeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: 'stepFeature',
  reducer: stepReducer
});

/***/ }),

/***/ 2900:
/*!************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step.selectors.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   isFirstStep: () => (/* binding */ isFirstStep),
/* harmony export */   nextButtonLabel: () => (/* binding */ nextButtonLabel),
/* harmony export */   selectCurrentStepKey: () => (/* binding */ selectCurrentStepKey),
/* harmony export */   selectNexStepKey: () => (/* binding */ selectNexStepKey),
/* harmony export */   selectStepKeys: () => (/* binding */ selectStepKeys),
/* harmony export */   showNavigation: () => (/* binding */ showNavigation)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('stepFeature');
const selectCurrentStepKey = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.stepFeature.currentStepKey);
const selectNexStepKey = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  const indexOf = state.stepFeature.stepKeys.indexOf(state.stepFeature.currentStepKey);
  if (indexOf !== state.stepFeature.stepKeys.length - 1) {
    return state.stepFeature.stepKeys[indexOf + 1];
  }
  return undefined;
});
const selectStepKeys = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.stepFeature.stepKeys);
const isFirstStep = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => 0 === state.stepFeature.stepKeys.indexOf(state.stepFeature.currentStepKey));
const nextButtonLabel = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.stepFeature.nextButtonLabel);
const showNavigation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.stepFeature.showNavigation);

/***/ }),

/***/ 94965:
/*!********************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/step.state.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  stepFeature: {
    stepKeys: [],
    currentStepKey: '',
    showNavigation: true
  }
};

/***/ }),

/***/ 45508:
/*!***************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/+state/steps-ngrx.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepsNgrxModule: () => (/* binding */ StepsNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.reducer */ 63853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class StepsNgrxModule {
  static #_ = this.ɵfac = function StepsNgrxModule_Factory(t) {
    return new (t || StepsNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: StepsNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_step_reducer__WEBPACK_IMPORTED_MODULE_1__.stepfeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StepsNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 84950:
/*!*******************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/ingenico-request-form.interface.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50931:
/*!************************************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/customerproductholding/customer-product-holding.interface.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68190:
/*!*********************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/product/product-spec.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64455:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/product/product.interface.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50158:
/*!************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/product/product.utils.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductUtils: () => (/* binding */ ProductUtils)
/* harmony export */ });
class ProductUtils {
  static getUniqueProducts(products) {
    return products.filter((value, index, self) => index === self.findIndex(product => value.omapiProduct.externalProductCode === product.omapiProduct.externalProductCode));
  }
  static getNumberOfTimesMobileProductOccurs(products, id) {
    return products.map(product => product.omapiProduct).filter(omapiProduct => omapiProduct.productType === 'MOBILE' && omapiProduct.externalProductCode === id).length;
  }
  static createTitle(products) {
    const c5Product = this.findC5Product(products);
    return c5Product ? c5Product.localizedOmapiProductName : this.getUniqueProducts(products).map(product => {
      const numberOfTimes = ProductUtils.getNumberOfTimesMobileProductOccurs(products, product.omapiProduct.externalProductCode);
      const name = product.localizedOmapiProductName;
      return numberOfTimes > 1 ? numberOfTimes + 'x '.concat(name) : name;
    }).join(' + ');
  }
  static findC5Product(products) {
    return products.find(product => product.omapiProduct.isConnect5());
  }
  static createFieldSelectedProduct(products) {
    return this.getUniqueProducts(products).map(product => {
      const numberOfTimes = ProductUtils.getNumberOfTimesMobileProductOccurs(products, product.omapiProduct.externalProductCode);
      const name = product.localizedOmapiProductName;
      return numberOfTimes >= 1 ? numberOfTimes + 'x_'.concat(name) : name;
    }).join('_').replaceAll(' ', '_');
  }
}

/***/ }),

/***/ 4063:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/promotion/promotion.interface.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9108:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/sales-data/offer.interface.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 43013:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/sales-data/sales-data.interface.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 76300:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/sales-offer/promo.interface.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1050:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/entities/product-finder/sales-offer/sales-offer.interface.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1672:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/enums/sales-stepper/next-button-label.enum.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextButtonLabelEnum: () => (/* binding */ NextButtonLabelEnum)
/* harmony export */ });
var NextButtonLabelEnum;
(function (NextButtonLabelEnum) {
  NextButtonLabelEnum["ORDER"] = "ng.step-flow.purchase-label";
})(NextButtonLabelEnum || (NextButtonLabelEnum = {}));

/***/ }),

/***/ 69404:
/*!********************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHoldingService: () => (/* reexport safe */ _infrastructure_product_finder_customerproductholding_customer_product_holding_service__WEBPACK_IMPORTED_MODULE_24__.CustomerProductHoldingService),
/* harmony export */   NextButtonLabelEnum: () => (/* reexport safe */ _enums_sales_stepper_next_button_label_enum__WEBPACK_IMPORTED_MODULE_26__.NextButtonLabelEnum),
/* harmony export */   ProductService: () => (/* reexport safe */ _infrastructure_product_finder_product_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService),
/* harmony export */   ProductUtils: () => (/* reexport safe */ _entities_product_finder_product_product_utils__WEBPACK_IMPORTED_MODULE_12__.ProductUtils),
/* harmony export */   PromotionService: () => (/* reexport safe */ _infrastructure_product_finder_promotion_promotion_service__WEBPACK_IMPORTED_MODULE_21__.PromotionService),
/* harmony export */   StepFacade: () => (/* reexport safe */ _state_step_facade__WEBPACK_IMPORTED_MODULE_1__.StepFacade),
/* harmony export */   StepsNgrxModule: () => (/* reexport safe */ _state_steps_ngrx_module__WEBPACK_IMPORTED_MODULE_6__.StepsNgrxModule),
/* harmony export */   createIngenicoResultUtil: () => (/* reexport safe */ _utils_ingenico_util__WEBPACK_IMPORTED_MODULE_27__.createIngenicoResultUtil),
/* harmony export */   defaultState: () => (/* reexport safe */ _state_step_state__WEBPACK_IMPORTED_MODULE_0__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.featureState),
/* harmony export */   goToFirstStep: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.goToFirstStep),
/* harmony export */   goToNextStep: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.goToNextStep),
/* harmony export */   goToPreviousStep: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.goToPreviousStep),
/* harmony export */   goToStep: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.goToStep),
/* harmony export */   isFirstStep: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.isFirstStep),
/* harmony export */   nextButtonLabel: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.nextButtonLabel),
/* harmony export */   provideStepsNgrxModule: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_7__.provideStepsNgrxModule),
/* harmony export */   reducer: () => (/* reexport safe */ _state_step_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer),
/* harmony export */   selectCurrentStepKey: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentStepKey),
/* harmony export */   selectNexStepKey: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.selectNexStepKey),
/* harmony export */   selectStepByMessageGroup: () => (/* reexport safe */ _state_step_factory_selectors__WEBPACK_IMPORTED_MODULE_3__.selectStepByMessageGroup),
/* harmony export */   selectStepKeys: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.selectStepKeys),
/* harmony export */   setNavigationBarVisibility: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.setNavigationBarVisibility),
/* harmony export */   setNextButtonLabel: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.setNextButtonLabel),
/* harmony export */   setStepConfig: () => (/* reexport safe */ _state_step_actions__WEBPACK_IMPORTED_MODULE_5__.setStepConfig),
/* harmony export */   showNavigation: () => (/* reexport safe */ _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__.showNavigation),
/* harmony export */   stepReducer: () => (/* reexport safe */ _state_step_reducer__WEBPACK_IMPORTED_MODULE_4__.stepReducer),
/* harmony export */   stepfeature: () => (/* reexport safe */ _state_step_reducer__WEBPACK_IMPORTED_MODULE_4__.stepfeature)
/* harmony export */ });
/* harmony import */ var _state_step_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/step.state */ 94965);
/* harmony import */ var _state_step_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/step-facade */ 79828);
/* harmony import */ var _state_step_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/step.selectors */ 2900);
/* harmony import */ var _state_step_factory_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/step.factory.selectors */ 85847);
/* harmony import */ var _state_step_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/step.reducer */ 63853);
/* harmony import */ var _state_step_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/step.actions */ 39709);
/* harmony import */ var _state_steps_ngrx_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/steps-ngrx.module */ 45508);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers */ 66854);
/* harmony import */ var _infrastructure_product_finder_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infrastructure/product-finder/product/product.service */ 58869);
/* harmony import */ var _entities_product_finder_product_product_spec_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities/product-finder/product/product-spec.interface */ 68190);
/* harmony import */ var _entities_product_finder_product_product_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entities/product-finder/product/product.interface */ 64455);
/* harmony import */ var _infrastructure_product_finder_product_product_request_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infrastructure/product-finder/product/product-request.interface */ 79730);
/* harmony import */ var _entities_product_finder_product_product_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/product-finder/product/product.utils */ 50158);
/* harmony import */ var _entities_product_finder_sales_data_sales_data_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./entities/product-finder/sales-data/sales-data.interface */ 43013);
/* harmony import */ var _entities_product_finder_sales_data_offer_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entities/product-finder/sales-data/offer.interface */ 9108);
/* harmony import */ var _entities_product_finder_sales_offer_sales_offer_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/product-finder/sales-offer/sales-offer.interface */ 1050);
/* harmony import */ var _entities_product_finder_sales_offer_promo_interface__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entities/product-finder/sales-offer/promo.interface */ 76300);
/* harmony import */ var _infrastructure_product_finder_sales_offer_raw_promo_interface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./infrastructure/product-finder/sales-offer/raw-promo.interface */ 96590);
/* harmony import */ var _infrastructure_product_finder_sales_offer_raw_sales_offer_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./infrastructure/product-finder/sales-offer/raw-sales-offer.interface */ 26156);
/* harmony import */ var _entities_ingenico_request_form_interface__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entities/ingenico-request-form.interface */ 84950);
/* harmony import */ var _entities_product_finder_promotion_promotion_interface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entities/product-finder/promotion/promotion.interface */ 4063);
/* harmony import */ var _infrastructure_product_finder_promotion_promotion_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./infrastructure/product-finder/promotion/promotion.service */ 92953);
/* harmony import */ var _infrastructure_product_finder_promotion_promotion_request_interface__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./infrastructure/product-finder/promotion/promotion-request.interface */ 37723);
/* harmony import */ var _entities_product_finder_customerproductholding_customer_product_holding_interface__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./entities/product-finder/customerproductholding/customer-product-holding.interface */ 50931);
/* harmony import */ var _infrastructure_product_finder_customerproductholding_customer_product_holding_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./infrastructure/product-finder/customerproductholding/customer-product-holding.service */ 82977);
/* harmony import */ var _infrastructure_product_finder_customerproductholding_customer_product_holding_request_interface__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./infrastructure/product-finder/customerproductholding/customer-product-holding-request.interface */ 48607);
/* harmony import */ var _enums_sales_stepper_next_button_label_enum__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./enums/sales-stepper/next-button-label.enum */ 1672);
/* harmony import */ var _utils_ingenico_util__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/ingenico.util */ 39001);






























/***/ }),

/***/ 48607:
/*!**************************************************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/customerproductholding/customer-product-holding-request.interface.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 15733:
/*!***************************************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/customerproductholding/customer-product-holding.mapper.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHoldingMapper: () => (/* binding */ CustomerProductHoldingMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class CustomerProductHoldingMapper {
  toModel(rawCustomerProductHoldingResult) {
    return rawCustomerProductHoldingResult.customerproductholding.map(rawCustomerProductHolding => ({
      identifier: rawCustomerProductHolding.identifier,
      specUrl: rawCustomerProductHolding.specurl,
      address: this.mapToCustomerProductHoldingAddress(rawCustomerProductHolding.address),
      products: this.mapToCustomerProductHoldingProducts(rawCustomerProductHolding.products),
      options: this.mapToCustomerProductHoldingOptions(rawCustomerProductHolding.options)
    }));
  }
  mapToCustomerProductHoldingAddress(rawCustomerProductHoldingAddress) {
    return {
      addressId: rawCustomerProductHoldingAddress.addressid,
      municipality: rawCustomerProductHoldingAddress.municipality,
      postalCode: rawCustomerProductHoldingAddress.postalcode,
      street: rawCustomerProductHoldingAddress.street,
      houseNr: rawCustomerProductHoldingAddress.housenr,
      country: rawCustomerProductHoldingAddress.country
    };
  }
  mapToCustomerProductHoldingProducts(rawCustomerProductHoldingProducts) {
    return rawCustomerProductHoldingProducts.map(rawCustomerProductHoldingProducts => this.mapToCustomerProductHoldingProduct(rawCustomerProductHoldingProducts));
  }
  mapToCustomerProductHoldingProduct(rawCustomerProductHoldingProduct) {
    return {
      identifier: rawCustomerProductHoldingProduct.identifier,
      specUrl: rawCustomerProductHoldingProduct.specurl,
      address: rawCustomerProductHoldingProduct.address ? this.mapToCustomerProductHoldingAddress(rawCustomerProductHoldingProduct.address) : undefined,
      products: this.mapToCustomerProductHoldingProducts(rawCustomerProductHoldingProduct.products),
      options: this.mapToCustomerProductHoldingOptions(rawCustomerProductHoldingProduct.options)
    };
  }
  mapToCustomerProductHoldingOptions(rawCustomerProductHoldingOptions) {
    return rawCustomerProductHoldingOptions.map(rawCustomerProductHoldingOption => ({
      specUrl: rawCustomerProductHoldingOption.specurl
    }));
  }
  static #_ = this.ɵfac = function CustomerProductHoldingMapper_Factory(t) {
    return new (t || CustomerProductHoldingMapper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CustomerProductHoldingMapper,
    factory: CustomerProductHoldingMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82977:
/*!****************************************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/customerproductholding/customer-product-holding.service.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProductHoldingService: () => (/* binding */ CustomerProductHoldingService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-product-holding.mapper */ 15733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class CustomerProductHoldingService {
  constructor(customerProductHoldingMapper, ocapiService) {
    this.customerProductHoldingMapper = customerProductHoldingMapper;
    this.ocapiService = ocapiService;
  }
  getCustomerProductHolding() {
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig('product-finder', '/public/?p=customerproductholding', this.customerProductHoldingMapper, undefined, undefined, undefined, undefined, true));
  }
  static #_ = this.ɵfac = function CustomerProductHoldingService_Factory(t) {
    return new (t || CustomerProductHoldingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_customer_product_holding_mapper__WEBPACK_IMPORTED_MODULE_1__.CustomerProductHoldingMapper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CustomerProductHoldingService,
    factory: CustomerProductHoldingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 79730:
/*!******************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/product/product-request.interface.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58869:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/product/product.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ProductService {
  constructor(omapiProductService, languageService) {
    this.omapiProductService = omapiProductService;
    this.languageService = languageService;
    this.internetVolumeIcon = 'icon icon-wifi-signal';
    this.internetDownloadSpeedIcon = 'icon icon-download';
    this.internetUploadSpeedIcon = 'icon icon-upload';
    this.tvIcon = 'icon icon-tv';
    this.mobileIcon = 'icon icon-mobile';
    this.fixedTelephoneIcon = 'icon icon-telephone';
    this.limitedMobileShortSummary = 'ng.product-finder.results-screen.short-summary-limited-mobile-volume-C5';
    this.limitedMobileDetailedSpec = 'ng.product-finder.results-screen.detailed-specs-limited-mobile-volume-C5';
    this.unlimitedMobileShortSummary = 'ng.product-finder.results-screen.short-summary-unlimited-mobile-volume-C5';
    this.unlimitedMobileDetailedSpec = 'ng.product-finder.results-screen.detailed-specs-unlimited-mobile-volume-C5';
    this.C5FARawProductSpec = {
      omapiId: '',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-C5FA',
        type: 'INTERNET'
      }, {
        labelKey: this.unlimitedMobileShortSummary,
        type: 'MOBILE'
      }, {
        labelKey: this.limitedMobileShortSummary,
        type: 'MOBILE'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-C5FA',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-C5FA',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-C5FA',
        type: 'INTERNET'
      }, {
        icon: this.mobileIcon,
        labelKey: this.unlimitedMobileDetailedSpec,
        type: 'MOBILE'
      }, {
        icon: this.mobileIcon,
        labelKey: this.limitedMobileDetailedSpec,
        type: 'MOBILE'
      }]
    };
    this.C5FURawProductSpec = {
      omapiId: '',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-C5FU',
        type: 'INTERNET'
      }, {
        labelKey: this.unlimitedMobileShortSummary,
        type: 'MOBILE'
      }, {
        labelKey: this.limitedMobileShortSummary,
        type: 'MOBILE'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-C5FU',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-C5FU',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-C5FU',
        type: 'INTERNET'
      }, {
        icon: this.mobileIcon,
        labelKey: this.unlimitedMobileDetailedSpec,
        type: 'MOBILE'
      }, {
        icon: this.mobileIcon,
        labelKey: this.limitedMobileDetailedSpec,
        type: 'MOBILE'
      }]
    };
    this.productSpecs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([{
      omapiId: 'TWOP0010',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0010',
        type: 'INTERNET'
      }, {
        labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0010',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0010',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0010',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0010',
        type: 'INTERNET'
      }, {
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0010',
        type: 'TV'
      }]
    }, {
      omapiId: 'TWOP0011',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0011',
        type: 'INTERNET'
      }, {
        labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0011',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0011',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0011',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0011',
        type: 'INTERNET'
      }, {
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0011',
        type: 'TV'
      }]
    }, {
      omapiId: 'TWOP0012',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0012',
        type: 'INTERNET'
      }, {
        labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0012',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0012',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0012',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0012',
        type: 'INTERNET'
      }, {
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0012',
        type: 'TV'
      }]
    }, {
      omapiId: 'TWOP0013',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-TWOP0013',
        type: 'INTERNET'
      }, {
        labelKey: 'ng.product-finder.results-screen.short-summary-tv-TWOP0013',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-TWOP0013',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-TWOP0013',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-TWOP0013',
        type: 'INTERNET'
      }, {
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-tv-TWOP0013',
        type: 'TV'
      }]
    }, {
      omapiId: 'INTB0001',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-internet-speed-INTB0001',
        type: 'INTERNET'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-INTB0001',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-INTB0001',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-INTB0001',
        type: 'INTERNET'
      }]
    }, {
      omapiId: 'INTF0200',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-INTF0200',
        type: 'INTERNET'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-INTF0200',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-INTF0200',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-INTF0200',
        type: 'INTERNET'
      }]
    }, {
      omapiId: 'IOPT0005',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-IOPT0005',
        type: 'INTERNET'
      }],
      detailedSpecs: [{
        icon: this.internetVolumeIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-volume-IOPT0005',
        type: 'INTERNET'
      }, {
        icon: this.internetDownloadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-download-speed-IOPT0005',
        type: 'INTERNET'
      }, {
        icon: this.internetUploadSpeedIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-internet-upload-speed-IOPT0005',
        type: 'INTERNET'
      }]
    }, {
      omapiId: 'TMOB0002',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-TMOB0002',
        type: 'MOBILE'
      }],
      detailedSpecs: [{
        icon: this.mobileIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-TMOB0002',
        type: 'MOBILE'
      }]
    }, {
      omapiId: 'TMOB0001',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-TMOB0001',
        type: 'MOBILE'
      }],
      detailedSpecs: [{
        icon: this.mobileIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-TMOB0001',
        type: 'MOBILE'
      }]
    }, {
      omapiId: 'KONG0020',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-KONG0020',
        type: 'MOBILE'
      }],
      detailedSpecs: [{
        icon: this.mobileIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-KONG0020',
        type: 'MOBILE'
      }]
    }, {
      omapiId: 'FREU0000',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-FREU0000',
        type: 'FIXED_TELEPHONE'
      }],
      detailedSpecs: [{
        icon: this.fixedTelephoneIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-FREU0000',
        type: 'FIXED_TELEPHONE'
      }]
    }, {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0006'
    }, {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0007'
    }, {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0008'
    }, {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0009'
    }, {
      ...this.C5FARawProductSpec,
      omapiId: 'C5FA0010'
    }, {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0006'
    }, {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0007'
    }, {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0008'
    }, {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0009'
    }, {
      ...this.C5FURawProductSpec,
      omapiId: 'C5FU0010'
    }, {
      omapiId: 'FLIN0001',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-FLIN0001',
        type: 'FIXED_TELEPHONE'
      }],
      detailedSpecs: [{
        icon: this.fixedTelephoneIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-FLIN0001',
        type: 'FIXED_TELEPHONE'
      }]
    }, {
      omapiId: 'TEOS0001',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-TEOS0001',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-TEOS0001',
        type: 'TV'
      }]
    }, {
      omapiId: 'OTTV0000',
      shortSummaries: [{
        labelKey: 'ng.product-finder.results-screen.short-summary-OTTV0000',
        type: 'TV'
      }],
      detailedSpecs: [{
        icon: this.tvIcon,
        labelKey: 'ng.product-finder.results-screen.detailed-specs-OTTV0000',
        type: 'TV'
      }]
    }]);
  }
  getProducts(productRequest) {
    const productObservables = productRequest.offers.flatMap(offer => this.flatten(offer)).map(offer => this.omapiProductService.getProductById('product-finder', offer.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(omapiProduct => this.getProductSpec(omapiProduct.externalProductCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(productSpec => ({
      localizedOmapiProductName: this.getLocalizedName(omapiProduct),
      omapiProduct,
      productSpec,
      amountOfLimitedSims: offer.amountOfLimitedSims
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(product => product.amountOfLimitedSims === undefined || product.amountOfLimitedSims === 0 ? this.removeLimitedSimsSpecs(product) : product), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(product => product.amountOfLimitedSims === Number(product.omapiProduct.getMaxMobileLines()) ? this.removeUnlimitedSimsSpecs(product) : product)))));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(productObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.defaultIfEmpty)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(products => this.hasSpeedboost(products) ? products.map(product => product.omapiProduct.externalProductCode === 'INTF0200' ? {
      ...product,
      productSpec: {
        shortSummaries: [],
        detailedSpecs: []
      }
    } : product) : products));
  }
  flatten(offer) {
    const offerWithoutOffers = {
      id: offer.id,
      type: offer.type,
      offers: [],
      amountOfLimitedSims: offer.amountOfLimitedSims
    };
    return [offerWithoutOffers].concat(offer.offers.flatMap(offer => this.flatten(offer)));
  }
  getProductSpec(omapiId) {
    return this.productSpecs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(rawProductSpecs => rawProductSpecs.find(rawProductSpec => rawProductSpec.omapiId === omapiId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.filter)(rawProductSpec => rawProductSpec !== undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(rawProductSpec => ({
      shortSummaries: rawProductSpec.shortSummaries,
      detailedSpecs: rawProductSpec.detailedSpecs
    })));
  }
  getLocalizedName(omapiProduct) {
    const language = this.languageService.getLanguage();
    switch (language) {
      case _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.NL:
        return omapiProduct.getLocalizedContentNames().nl;
      case _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.FR:
        return omapiProduct.getLocalizedContentNames().fr;
      case _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.EN:
        return omapiProduct.getLocalizedContentNames().en;
    }
  }
  removeLimitedSimsSpecs(product) {
    return {
      ...product,
      productSpec: {
        shortSummaries: product.productSpec.shortSummaries.filter(shortSummary => shortSummary.labelKey !== this.limitedMobileShortSummary),
        detailedSpecs: product.productSpec.detailedSpecs.filter(detailedSpec => detailedSpec.labelKey !== this.limitedMobileDetailedSpec)
      }
    };
  }
  removeUnlimitedSimsSpecs(product) {
    return {
      ...product,
      productSpec: {
        shortSummaries: product.productSpec.shortSummaries.filter(shortSummary => shortSummary.labelKey !== this.unlimitedMobileShortSummary),
        detailedSpecs: product.productSpec.detailedSpecs.filter(detailedSpec => detailedSpec.labelKey !== this.unlimitedMobileDetailedSpec)
      }
    };
  }
  hasSpeedboost(products) {
    return products.some(product => product.omapiProduct.externalProductCode === 'IOPT0005');
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__.OmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 37723:
/*!**********************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/promotion/promotion-request.interface.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 19333:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/promotion/promotion.mapper.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromotionMapper: () => (/* binding */ PromotionMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PromotionMapper {
  toModel(rawPromotionResult) {
    return rawPromotionResult.promotions.map(rawPromotion => ({
      description: rawPromotion.description
    }));
  }
  static #_ = this.ɵfac = function PromotionMapper_Factory(t) {
    return new (t || PromotionMapper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PromotionMapper,
    factory: PromotionMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 92953:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/promotion/promotion.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromotionService: () => (/* binding */ PromotionService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promotion_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.mapper */ 19333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class PromotionService {
  constructor(promotionMapper, ocapiService) {
    this.promotionMapper = promotionMapper;
    this.ocapiService = ocapiService;
  }
  getPromotions() {
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig('product-finder', '/public/?p=promotions', this.promotionMapper, undefined, undefined, undefined, undefined, true));
  }
  static #_ = this.ɵfac = function PromotionService_Factory(t) {
    return new (t || PromotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_promotion_mapper__WEBPACK_IMPORTED_MODULE_1__.PromotionMapper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PromotionService,
    factory: PromotionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96590:
/*!****************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/sales-offer/raw-promo.interface.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 26156:
/*!**********************************************************************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/infrastructure/product-finder/sales-offer/raw-sales-offer.interface.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 66854:
/*!************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/providers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideStepsNgrxModule: () => (/* binding */ provideStepsNgrxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_steps_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/steps-ngrx.module */ 45508);


function provideStepsNgrxModule() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_state_steps_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.StepsNgrxModule)];
}

/***/ }),

/***/ 39001:
/*!**********************************************************************!*\
  !*** ./libs/sales/shared/data-access/src/lib/utils/ingenico.util.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIngenicoResultUtil: () => (/* binding */ createIngenicoResultUtil)
/* harmony export */ });
function createIngenicoResultUtil(ingenicoResult) {
  const _result = ingenicoResult;
  function isSuccessful() {
    return _result === 'accept';
  }
  function isFailed() {
    return !!_result && !isSuccessful() && _result !== 'cancel';
  }
  return {
    isSuccessful,
    isFailed
  };
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
//# sourceMappingURL=libs_sales_shared_data-access_src_index_ts-_8e0b1.js.map