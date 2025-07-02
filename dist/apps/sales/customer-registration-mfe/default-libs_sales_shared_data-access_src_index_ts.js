(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_shared_data-access_src_index_ts"],{

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

/***/ })

}])
//# sourceMappingURL=default-libs_sales_shared_data-access_src_index_ts.js.map