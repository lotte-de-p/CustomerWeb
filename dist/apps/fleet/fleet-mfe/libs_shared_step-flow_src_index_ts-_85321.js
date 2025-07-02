(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_shared_step-flow_src_index_ts-_85321"],{

/***/ 47489:
/*!********************************************!*\
  !*** ./libs/shared/step-flow/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ETFStepValidAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ETFStepValidAction),
/* harmony export */   GoToFinalStepAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GoToFinalStepAction),
/* harmony export */   GoToNextStepAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GoToNextStepAction),
/* harmony export */   GoToPreviousStepAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GoToPreviousStepAction),
/* harmony export */   GoToStepAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GoToStepAction),
/* harmony export */   InsertStepsAfterAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InsertStepsAfterAction),
/* harmony export */   InsertStepsBeforeAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InsertStepsBeforeAction),
/* harmony export */   NavigationBarComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NavigationBarComponent),
/* harmony export */   NavigationBarNextLabelEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NavigationBarNextLabelEnum),
/* harmony export */   NotifyStepRendered: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NotifyStepRendered),
/* harmony export */   RemoveStepsWithStepKeysAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RemoveStepsWithStepKeysAction),
/* harmony export */   ReportStepLoadTimingAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ReportStepLoadTimingAction),
/* harmony export */   SetCurrentDecisionOnStepFlowConfig: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetCurrentDecisionOnStepFlowConfig),
/* harmony export */   SetStepCompleteAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepCompleteAction),
/* harmony export */   SetStepConfigurationAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepConfigurationAction),
/* harmony export */   SetStepIncompleteAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepIncompleteAction),
/* harmony export */   SetStepNavigationStartTimeAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepNavigationStartTimeAction),
/* harmony export */   SetStepToEditAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepToEditAction),
/* harmony export */   SetStepsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepsAction),
/* harmony export */   SetStepsEnabledState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetStepsEnabledState),
/* harmony export */   Step: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Step),
/* harmony export */   StepBuilder: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepBuilder),
/* harmony export */   StepContainerComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepContainerComponent),
/* harmony export */   StepContainerDirective: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepContainerDirective),
/* harmony export */   StepEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepEnum),
/* harmony export */   StepFactory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepFactory),
/* harmony export */   StepFlowLibModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepFlowLibModule),
/* harmony export */   StepFlowState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepFlowState),
/* harmony export */   StepFlowUtil: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepFlowUtil),
/* harmony export */   StepHostDirective: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.StepHostDirective),
/* harmony export */   TemplateFactory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TemplateFactory),
/* harmony export */   UpdateCurrentStepImageAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UpdateCurrentStepImageAction),
/* harmony export */   UpdateStepAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UpdateStepAction),
/* harmony export */   instanceOfStepDecision: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.instanceOfStepDecision)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 78977);


/***/ }),

/***/ 31110:
/*!**********************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/factories/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFactory: () => (/* reexport safe */ _step_factory__WEBPACK_IMPORTED_MODULE_0__.StepFactory),
/* harmony export */   TemplateFactory: () => (/* reexport safe */ _template_factory__WEBPACK_IMPORTED_MODULE_1__.TemplateFactory)
/* harmony export */ });
/* harmony import */ var _step_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.factory */ 22972);
/* harmony import */ var _template_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.factory */ 76379);



/***/ }),

/***/ 22972:
/*!*****************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/factories/step.factory.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFactory: () => (/* binding */ StepFactory)
/* harmony export */ });
/* harmony import */ var _interfaces_step_decision_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/step-decision.interface */ 50600);
/* harmony import */ var _step_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../step.builder */ 81281);
/* harmony import */ var _store_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/step-flow.actions */ 42035);
/* harmony import */ var _template_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.factory */ 76379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class StepFactory {
  templateFactory;
  constructor(templateFactory) {
    this.templateFactory = templateFactory;
  }
  createFlow(store, stepFlowConfig) {
    let steps = [];
    stepFlowConfig.steps.forEach(stepConfig => {
      if ((0,_interfaces_step_decision_interface__WEBPACK_IMPORTED_MODULE_0__.instanceOfStepDecision)(stepConfig)) {
        steps = steps.concat(this.decideFlow(store, stepConfig));
      } else {
        steps.push(this.createStep(stepConfig));
      }
    });
    return steps;
  }
  createStep(stepConfig) {
    const stepBuilder = _step_builder__WEBPACK_IMPORTED_MODULE_1__.StepBuilder.builder(stepConfig.key).withLayoutOptions(stepConfig.layoutOptions).withAnalyticsOptions(stepConfig.analyticsOptions).withComponent(stepConfig.component).withImage(stepConfig.imagePath);
    this.templateFactory.determineTemplate(stepBuilder, stepConfig);
    if (stepConfig.isFinalState) {
      stepBuilder.withFinalState();
    }
    return stepBuilder.build();
  }
  decideFlow(store, stepDecision) {
    const decidedFlow = stepDecision.decisionFunction(store, stepDecision.possibleResults, stepDecision.currentDecision);
    store.dispatch(new _store_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetCurrentDecisionOnStepFlowConfig(stepDecision, decidedFlow));
    if (stepDecision.currentDecision !== decidedFlow && typeof decidedFlow.initFlowAction === 'function') {
      decidedFlow.initFlowAction(store);
    }
    return this.createFlow(store, decidedFlow);
  }
  static ɵfac = function StepFactory_Factory(t) {
    return new (t || StepFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_template_factory__WEBPACK_IMPORTED_MODULE_3__.TemplateFactory));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: StepFactory,
    factory: StepFactory.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 76379:
/*!*********************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/factories/template.factory.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateFactory: () => (/* binding */ TemplateFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class TemplateFactory {
  determineTemplate(_stepBuilder, _stepConfig) {
    // default is empty
  }
  static ɵfac = function TemplateFactory_Factory(t) {
    return new (t || TemplateFactory)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TemplateFactory,
    factory: TemplateFactory.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78977:
/*!************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ETFStepValidAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.ETFStepValidAction),
/* harmony export */   GoToFinalStepAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.GoToFinalStepAction),
/* harmony export */   GoToNextStepAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.GoToNextStepAction),
/* harmony export */   GoToPreviousStepAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.GoToPreviousStepAction),
/* harmony export */   GoToStepAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.GoToStepAction),
/* harmony export */   InsertStepsAfterAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.InsertStepsAfterAction),
/* harmony export */   InsertStepsBeforeAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.InsertStepsBeforeAction),
/* harmony export */   NavigationBarComponent: () => (/* reexport safe */ _navigation_bar__WEBPACK_IMPORTED_MODULE_9__.NavigationBarComponent),
/* harmony export */   NavigationBarNextLabelEnum: () => (/* reexport safe */ _navigation_bar__WEBPACK_IMPORTED_MODULE_9__.NavigationBarNextLabelEnum),
/* harmony export */   NotifyStepRendered: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.NotifyStepRendered),
/* harmony export */   RemoveStepsWithStepKeysAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.RemoveStepsWithStepKeysAction),
/* harmony export */   ReportStepLoadTimingAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.ReportStepLoadTimingAction),
/* harmony export */   SetCurrentDecisionOnStepFlowConfig: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetCurrentDecisionOnStepFlowConfig),
/* harmony export */   SetStepCompleteAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepCompleteAction),
/* harmony export */   SetStepConfigurationAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepConfigurationAction),
/* harmony export */   SetStepIncompleteAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepIncompleteAction),
/* harmony export */   SetStepNavigationStartTimeAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepNavigationStartTimeAction),
/* harmony export */   SetStepToEditAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepToEditAction),
/* harmony export */   SetStepsAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepsAction),
/* harmony export */   SetStepsEnabledState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.SetStepsEnabledState),
/* harmony export */   Step: () => (/* reexport safe */ _step_model__WEBPACK_IMPORTED_MODULE_5__.Step),
/* harmony export */   StepBuilder: () => (/* reexport safe */ _step_builder__WEBPACK_IMPORTED_MODULE_8__.StepBuilder),
/* harmony export */   StepContainerComponent: () => (/* reexport safe */ _step_container__WEBPACK_IMPORTED_MODULE_2__.StepContainerComponent),
/* harmony export */   StepContainerDirective: () => (/* reexport safe */ _step_container__WEBPACK_IMPORTED_MODULE_2__.StepContainerDirective),
/* harmony export */   StepEnum: () => (/* reexport safe */ _step_enum__WEBPACK_IMPORTED_MODULE_4__.StepEnum),
/* harmony export */   StepFactory: () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_0__.StepFactory),
/* harmony export */   StepFlowLibModule: () => (/* reexport safe */ _step_flow_lib_module__WEBPACK_IMPORTED_MODULE_6__.StepFlowLibModule),
/* harmony export */   StepFlowState: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.StepFlowState),
/* harmony export */   StepFlowUtil: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.StepFlowUtil),
/* harmony export */   StepHostDirective: () => (/* reexport safe */ _step_container__WEBPACK_IMPORTED_MODULE_2__.StepHostDirective),
/* harmony export */   TemplateFactory: () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_0__.TemplateFactory),
/* harmony export */   UpdateCurrentStepImageAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.UpdateCurrentStepImageAction),
/* harmony export */   UpdateStepAction: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.UpdateStepAction),
/* harmony export */   instanceOfStepDecision: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_1__.instanceOfStepDecision)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ 31110);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ 69189);
/* harmony import */ var _step_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-container */ 85298);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ 7166);
/* harmony import */ var _step_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step.enum */ 38511);
/* harmony import */ var _step_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step.model */ 78268);
/* harmony import */ var _step_flow_lib_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step-flow-lib.module */ 11234);
/* harmony import */ var _step_layout_options_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step-layout-options.interface */ 27755);
/* harmony import */ var _step_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step.builder */ 81281);
/* harmony import */ var _navigation_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation-bar */ 8098);











/***/ }),

/***/ 32994:
/*!************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/author-configuration.interface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 69189:
/*!***********************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instanceOfStepDecision: () => (/* reexport safe */ _step_decision_interface__WEBPACK_IMPORTED_MODULE_3__.instanceOfStepDecision)
/* harmony export */ });
/* harmony import */ var _author_configuration_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author-configuration.interface */ 32994);
/* harmony import */ var _step_analytics_options_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-analytics-options.interface */ 70198);
/* harmony import */ var _step_config_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-config.interface */ 80490);
/* harmony import */ var _step_decision_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-decision.interface */ 50600);
/* harmony import */ var _step_flow_analytics_config_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step-flow-analytics-config.interface */ 89726);
/* harmony import */ var _step_flow_config_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step-flow-config.interface */ 64728);
/* harmony import */ var _step_view_analytics_event_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step-view-analytics-event.interface */ 1700);








/***/ }),

/***/ 70198:
/*!**************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-analytics-options.interface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 80490:
/*!***************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-config.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50600:
/*!*****************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-decision.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instanceOfStepDecision: () => (/* binding */ instanceOfStepDecision)
/* harmony export */ });
function instanceOfStepDecision(stepConfig) {
  return 'decisionFunction' in stepConfig;
}

/***/ }),

/***/ 89726:
/*!******************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-flow-analytics-config.interface.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64728:
/*!********************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-flow-config.interface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1700:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/interfaces/step-view-analytics-event.interface.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8098:
/*!***************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/navigation-bar/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBarComponent: () => (/* reexport safe */ _navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationBarComponent),
/* harmony export */   NavigationBarNextLabelEnum: () => (/* reexport safe */ _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_1__.NavigationBarNextLabelEnum)
/* harmony export */ });
/* harmony import */ var _navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar.component */ 84099);
/* harmony import */ var _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-bar-next-label.enum */ 15633);



/***/ }),

/***/ 15633:
/*!****************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/navigation-bar/navigation-bar-next-label.enum.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBarNextLabelEnum: () => (/* binding */ NavigationBarNextLabelEnum)
/* harmony export */ });
var NavigationBarNextLabelEnum;
(function (NavigationBarNextLabelEnum) {
  NavigationBarNextLabelEnum["START"] = "ng.step-flow.start-step-label";
  NavigationBarNextLabelEnum["NEXT"] = "ng.step-flow.next-step-label";
  NavigationBarNextLabelEnum["FINAL"] = "ng.step-flow.close-label";
  NavigationBarNextLabelEnum["CONFIRM"] = "ng.step-flow.confirm-label";
})(NavigationBarNextLabelEnum || (NavigationBarNextLabelEnum = {}));

/***/ }),

/***/ 84099:
/*!**********************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/navigation-bar/navigation-bar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBarComponent: () => (/* binding */ NavigationBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-bar-next-label.enum */ 15633);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ 7166);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














function NavigationBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_ng_template_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.goToPreviousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isLoading)("visibility--hide", (!ctx_r0.hasPreviousStep || ctx_r0.previousStepDisabled) && !ctx_r0.isCurrentStepAlternativeFirstStep());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "ng.step-flow.previous-step-label"), " ");
  }
}
function NavigationBarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.goToPreviousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.isLoading)("display--none-important", (!ctx_r1.hasPreviousStep || ctx_r1.previousStepDisabled) && !ctx_r1.isCurrentStepAlternativeFirstStep());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "ng.step-flow.previous-step-label"));
  }
}
function NavigationBarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.currentStepNumber, "/", ctx_r2.stepCount, "");
  }
}
function NavigationBarComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.messageGroup + ".info.free-sales-number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r3.messageGroup + ".free-sales-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.messageGroup + ".info.free-sales-number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx_r3.messageGroup + ".free-sales-number"));
  }
}
function NavigationBarComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_ng_template_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.goToNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.isLoading)("visibility--hide", !ctx_r4.hasNextStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.currentStepNumber === 1 && !ctx_r4.isCurrentStepAlternativeFirstStep() || ctx_r4.isConfirmationStep ? "button button--primary" : "link link--chevron");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r4.nextStepLabel), " ");
  }
}
function NavigationBarComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r13.buttonTextOverride));
  }
}
function NavigationBarComponent_ng_template_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r14.nextStepLabel));
  }
}
function NavigationBarComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.goToNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationBarComponent_ng_template_9_ng_container_1_Template, 4, 3, "ng-container", 14)(2, NavigationBarComponent_ng_template_9_ng_template_2_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r5.isLoading)("visibility--hide", !ctx_r5.hasNextStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buttonTextOverride)("ngIfElse", _r15);
  }
}
function NavigationBarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("indicator-progress ready-", ctx_r6.progressPercentage, "");
  }
}
let NavigationBarComponent = class NavigationBarComponent {
  store;
  formErrorService;
  loaderService;
  changeDetectorRef;
  dynamicShadow;
  showStepCounter;
  showStepProgressBar;
  showSalesContactNumber;
  styling = 'default';
  buttonTextOverride;
  messageGroup = '';
  currentStep;
  isConfirmationStep;
  stepCount;
  currentStepNumber;
  progressPercentage;
  hasNextStep = false;
  hasPreviousStep = false;
  previousStepDisabled = false;
  isLoading = false;
  nextStepLabel = _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__.NavigationBarNextLabelEnum.START;
  alternativeFirstStep = false;
  buttonTypeOverride;
  constructor(store, formErrorService, loaderService, changeDetectorRef) {
    this.store = store;
    this.formErrorService = formErrorService;
    this.loaderService = loaderService;
    this.changeDetectorRef = changeDetectorRef;
  }
  ngOnInit() {
    this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__.StepFlowState.currentStep).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(currentStep => {
      if (currentStep) {
        this.alternativeFirstStep = currentStep.asAlternativeFirstStep;
      }
    })).subscribe(currentStep => {
      if (!currentStep) {
        throw Error('Could not initialise stepper navigation bar');
      } else {
        this.currentStep = currentStep;
      }
      this.isConfirmationStep = currentStep.isConfirm();
      const steps = this.store.selectSnapshot(_store__WEBPACK_IMPORTED_MODULE_4__.StepFlowState.steps);
      this.stepCount = _store__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getStepCount(steps);
      this.currentStepNumber = _store__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getStepIndex(currentStep, steps) + 1;
      this.hasNextStep = _store__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.hasNextStep(currentStep, steps);
      this.hasPreviousStep = _store__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.hasPreviousStep(currentStep, steps);
      this.previousStepDisabled = currentStep.previousStepDisabled;
      this.nextStepLabel = this.getNextLabel();
      this.progressPercentage = this.calculateProgress();
    });
    this.loaderService.loadingStatus.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(loaderData => {
      this.isLoading = !!loaderData.isAPIExecutionInProgress;
      this.changeDetectorRef.detectChanges();
    });
  }
  goToNextStep() {
    if (!this.isLoading) {
      this.formErrorService.submit$.next(null);
      if (this.currentStep.nextButtonCallback) {
        this.currentStep.nextButtonCallback().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(response => {
          if (response) {
            this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__.GoToNextStepAction());
          }
        });
      } else {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__.GoToNextStepAction());
      }
    }
  }
  calculateProgress() {
    return (this.currentStepNumber / this.stepCount * 100).toFixed(0);
  }
  getNextLabel() {
    if (this.buttonTypeOverride) {
      return this.buttonTypeOverride;
    } else if (this.isCurrentStepAlternativeFirstStep() || this.currentStep.isConfirm()) {
      return _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__.NavigationBarNextLabelEnum.CONFIRM;
    } else if (this.isCurrentStepFirstStep()) {
      return _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__.NavigationBarNextLabelEnum.START;
    } else if (this.currentStep.isFinal()) {
      return _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__.NavigationBarNextLabelEnum.FINAL;
    } else {
      return _navigation_bar_next_label_enum__WEBPACK_IMPORTED_MODULE_3__.NavigationBarNextLabelEnum.NEXT;
    }
  }
  isCurrentStepFirstStep() {
    return this.currentStepNumber === 1;
  }
  goToPreviousStep() {
    if (this.currentStep.prevButtonCallback) {
      this.currentStep.prevButtonCallback().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(response => {
        if (response) {
          this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__.GoToPreviousStepAction());
        }
      });
    } else {
      this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__.GoToPreviousStepAction());
    }
  }
  isCurrentStepAlternativeFirstStep() {
    return this.isCurrentStepFirstStep() && this.alternativeFirstStep;
  }
  static ɵfac = function NavigationBarComponent_Factory(t) {
    return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_1__.FormErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavigationBarComponent,
    selectors: [["app-step-navigation-bar-monorepo"]],
    inputs: {
      dynamicShadow: "dynamicShadow",
      showStepCounter: "showStepCounter",
      showStepProgressBar: "showStepProgressBar",
      showSalesContactNumber: "showSalesContactNumber",
      styling: "styling",
      buttonTextOverride: "buttonTextOverride",
      messageGroup: "messageGroup"
    },
    decls: 11,
    vars: 13,
    consts: [[1, "sticky-footer-v2", "position--fixed", "background-white", "width--full", "py--m", "px--xm", "p--xm--md", "display--flex", "justify-content--center", "align-items--center", "box-sizing--inherit", "shadow--xs-inverse", "position--bottom", "position--left"], [1, "sticky-footer-v2__container", "width--full", "default-max-site-width", "display--flex", "justify-content--between", "align-items--center"], [1, "back-section"], [3, "ngIf"], ["class", "progress-paging", 4, "ngIf"], ["class", "display--flex flex-direction--column font-weight--bold align-items--center", 4, "ngIf"], ["class", "progress-bar", 4, "ngIf"], [1, "link", "link--with-icon", "link--subtle", 3, "click"], [1, "button", "button--secondary", "button__icon--position-left", 3, "click"], [1, "icon", "icon-chevron-left"], [1, "progress-paging"], [1, "display--flex", "flex-direction--column", "font-weight--bold", "align-items--center"], [3, "ngClass", "click"], [1, "button", "button--primary", "button__icon--position-right", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [1, "icon", "icon-chevron-right"], [1, "progress-bar"]],
    template: function NavigationBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationBarComponent_ng_template_3_Template, 3, 7, "ng-template", 3)(4, NavigationBarComponent_ng_template_4_Template, 5, 7, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavigationBarComponent_div_5_Template, 3, 2, "div", 4)(6, NavigationBarComponent_div_6_Template, 14, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationBarComponent_ng_template_8_Template, 3, 8, "ng-template", 3)(9, NavigationBarComponent_ng_template_9_Template, 5, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationBarComponent_div_10_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.isLoading)("sticky-footer--flow__dynamic-shadow", ctx.dynamicShadow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.styling === "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.styling === "buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStepCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSalesContactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("next-section", ctx.currentStepNumber !== 1 && !ctx.isConfirmationStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.styling === "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.styling === "buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStepProgressBar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    encapsulation: 2
  });
};
NavigationBarComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(), __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_1__.FormErrorService, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderService, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef])], NavigationBarComponent);


/***/ }),

/***/ 25066:
/*!**************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/directives/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepHostDirective: () => (/* reexport safe */ _step_host_directive__WEBPACK_IMPORTED_MODULE_0__.StepHostDirective)
/* harmony export */ });
/* harmony import */ var _step_host_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-host.directive */ 34123);


/***/ }),

/***/ 34123:
/*!****************************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/directives/step-host.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepHostDirective: () => (/* binding */ StepHostDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class StepHostDirective {
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static ɵfac = function StepHostDirective_Factory(t) {
    return new (t || StepHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: StepHostDirective,
    selectors: [["", "step-host", ""]]
  });
}

/***/ }),

/***/ 85298:
/*!***************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepContainerComponent: () => (/* reexport safe */ _step_container_component__WEBPACK_IMPORTED_MODULE_2__.StepContainerComponent),
/* harmony export */   StepContainerDirective: () => (/* reexport safe */ _step_container_directive__WEBPACK_IMPORTED_MODULE_1__.StepContainerDirective),
/* harmony export */   StepHostDirective: () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_0__.StepHostDirective)
/* harmony export */ });
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ 25066);
/* harmony import */ var _step_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-container.directive */ 64680);
/* harmony import */ var _step_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-container.component */ 12739);
/* harmony import */ var _step_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step.interface */ 23235);





/***/ }),

/***/ 12739:
/*!**********************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/step-container.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepContainerComponent: () => (/* binding */ StepContainerComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-container.directive */ 64680);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_step_flow_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/step-flow.util */ 78282);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/step-flow.state */ 64528);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let StepContainerComponent = class StepContainerComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.AbstractBaseComponent {
  store;
  loaderService;
  dataLayerService;
  stepFlowAnalyticsConfig;
  messageGroup;
  stepContainer;
  previousStep;
  stepNavigationEndTime;
  constructor(store, loaderService, dataLayerService) {
    super();
    this.store = store;
    this.loaderService = loaderService;
    this.dataLayerService = dataLayerService;
  }
  ngOnInit() {
    this.obs(this.store.select(_store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__.StepFlowState.currentStep)).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(currentStep => {
      if (currentStep) {
        this.stepNavigationEndTime = new Date().getTime();
        this.reportStepLoadTime(currentStep);
        const viewContainerRef = this.stepContainer.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(currentStep.template);
        componentRef.instance.store = this.store;
        componentRef.instance.currentStep = currentStep;
        if (this.messageGroup) {
          componentRef.instance.messageGroup = this.messageGroup;
        }
        if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.stepFlowAnalyticsConfig)) {
          const attributes = {
            stepId: this.getAnalyticsStepName(),
            intent: this.stepFlowAnalyticsConfig.analyticsIntent,
            flowType: this.stepFlowAnalyticsConfig.analyticsFlowType,
            cart: this.stepFlowAnalyticsConfig.cart
          };
          this.dataLayerService.addStepViewEvent(attributes);
        }
      }
    });
    this.getLastAPIExecutionTime();
  }
  getLastAPIExecutionTime() {
    this.loaderService.loadingStatus.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(loaderData => {
      if (loaderData.isAPIExecutionInProgress) {
        this.stepNavigationEndTime = 0;
      } else {
        this.stepNavigationEndTime = loaderData.dataCapturedOn;
      }
    });
  }
  reportStepLoadTime(currentStep) {
    const reportStepLoadTiming = this.store.selectSnapshot(_store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__.StepFlowState.reportStepLoadTiming);
    if (reportStepLoadTiming) {
      const steps = this.store.selectSnapshot(_store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__.StepFlowState.steps);
      const currentStepIndex = _store_step_flow_util__WEBPACK_IMPORTED_MODULE_3__.StepFlowUtil.getStepIndex(currentStep, steps);
      const previousStepIndex = this.previousStep ? _store_step_flow_util__WEBPACK_IMPORTED_MODULE_3__.StepFlowUtil.getStepIndex(this.previousStep, steps) : 0;
      if (currentStepIndex - previousStepIndex >= 0) {
        this.delayStepLoadTime();
      }
      this.previousStep = currentStep;
    }
  }
  delayStepLoadTime() {
    setTimeout(stepNavigationEndTime => {
      if (stepNavigationEndTime === this.stepNavigationEndTime && this.stepNavigationEndTime !== 0) {
        this.fireStepLoadTimeEvent();
      } else {
        this.delayStepLoadTime();
      }
    }, 10, this.stepNavigationEndTime);
  }
  fireStepLoadTimeEvent() {
    const stepNavigationStartTime = this.store.selectSnapshot(_store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__.StepFlowState.stepNavigationStartTime);
    const attributes = {
      itemName: stepNavigationStartTime > 0 ? ((this.stepNavigationEndTime - stepNavigationStartTime) / 1000).toFixed(2).toString() : ((this.stepNavigationEndTime - window.performance.getEntries()[0].fetchStart) / 1000).toFixed(2).toString()
    };
    this.dataLayerService.addStepLoadTimeEvent(attributes);
  }
  getAnalyticsStepName() {
    const currentStep = this.store.selectSnapshot(_store_step_flow_state__WEBPACK_IMPORTED_MODULE_5__.StepFlowState.currentStep);
    if (currentStep?.analyticsOptions?.name) {
      return `${currentStep.analyticsOptions.name}`;
    }
    return `${currentStep?.key}`;
  }
  static ɵfac = function StepContainerComponent_Factory(t) {
    return new (t || StepContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__.DataLayerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: StepContainerComponent,
    selectors: [["app-step-container"]],
    viewQuery: function StepContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_step_container_directive__WEBPACK_IMPORTED_MODULE_1__.StepContainerDirective, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.stepContainer = _t.first);
      }
    },
    inputs: {
      stepFlowAnalyticsConfig: "stepFlowAnalyticsConfig",
      messageGroup: "messageGroup"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["appStepContainer", ""]],
    template: function StepContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_step_container_directive__WEBPACK_IMPORTED_MODULE_1__.StepContainerDirective],
    encapsulation: 2
  });
};
StepContainerComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)(), __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderService, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__.DataLayerService])], StepContainerComponent);


/***/ }),

/***/ 64680:
/*!**********************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/step-container.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepContainerDirective: () => (/* binding */ StepContainerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class StepContainerDirective {
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static ɵfac = function StepContainerDirective_Factory(t) {
    return new (t || StepContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: StepContainerDirective,
    selectors: [["", "appStepContainer", ""]]
  });
}

/***/ }),

/***/ 23235:
/*!************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-container/step.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 11234:
/*!***************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-flow-lib.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFlowLibModule: () => (/* binding */ StepFlowLibModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-container */ 85298);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ 84099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);





class StepFlowLibModule {
  static ɵfac = function StepFlowLibModule_Factory(t) {
    return new (t || StepFlowLibModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: StepFlowLibModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StepFlowLibModule, {
    declarations: [_step_container__WEBPACK_IMPORTED_MODULE_1__.StepContainerDirective, _step_container__WEBPACK_IMPORTED_MODULE_1__.StepHostDirective, _step_container__WEBPACK_IMPORTED_MODULE_1__.StepContainerComponent, _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavigationBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule],
    exports: [_step_container__WEBPACK_IMPORTED_MODULE_1__.StepContainerComponent, _step_container__WEBPACK_IMPORTED_MODULE_1__.StepContainerDirective, _step_container__WEBPACK_IMPORTED_MODULE_1__.StepHostDirective, _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavigationBarComponent]
  });
})();

/***/ }),

/***/ 27755:
/*!************************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step-layout-options.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 81281:
/*!*******************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step.builder.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepBuilder: () => (/* binding */ StepBuilder)
/* harmony export */ });
/* harmony import */ var _step_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.model */ 78268);
/* harmony import */ var _step_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.enum */ 38511);


class StepBuilder {
  _step;
  constructor(key) {
    this._step = new _step_model__WEBPACK_IMPORTED_MODULE_0__.Step(key);
  }
  static builder(key) {
    return new StepBuilder(key);
  }
  withLayoutOptions(layout) {
    if (layout) {
      this._step.layoutOptions = layout;
    }
    return this;
  }
  withAnalyticsOptions(analyticsOptions) {
    if (analyticsOptions) {
      this._step.analyticsOptions = analyticsOptions;
    }
    return this;
  }
  withImage(image) {
    if (image) {
      this._step.image = image;
    }
    return this;
  }
  withComponent(selector) {
    this._step.component = {
      selector: selector
    };
    return this;
  }
  withOrder(order) {
    this._step.order = order;
    return this;
  }
  withEnabledState(state = true) {
    this._step.isEnabled = state;
    return this;
  }
  withTemplate(template) {
    this._step.template = template;
    return this;
  }
  withCompletedState(state = true) {
    this._step.setCompleted(state);
    return this;
  }
  withPreviousStepDisabled(state = false) {
    this._step.previousStepDisabled = state;
    return this;
  }
  withFinalState() {
    this._step.type = _step_enum__WEBPACK_IMPORTED_MODULE_1__.StepEnum.FINAL;
    return this;
  }
  withConfirmState() {
    this._step.type = _step_enum__WEBPACK_IMPORTED_MODULE_1__.StepEnum.CONFIRM;
    return this;
  }
  withOverwriteFlowLabel(flowLabel) {
    this._step.overwriteFlowLabel = flowLabel;
    return this;
  }
  withTitleParameterValue(value) {
    this._step.titleParameterValue = value;
    return this;
  }
  withChosenProductValue(value) {
    this._step.chosenProduct$ = value;
    return this;
  }
  withMobileImage(value) {
    this._step.imageMobile = value;
    return this;
  }
  withScrollableImage(scrollable = true) {
    this._step.isImageScrollable = scrollable;
    return this;
  }
  withAsAlternativeFirstStep() {
    this._step.asAlternativeFirstStep = true;
    return this;
  }
  build() {
    return this._step;
  }
}

/***/ }),

/***/ 38511:
/*!****************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepEnum: () => (/* binding */ StepEnum)
/* harmony export */ });
var StepEnum;
(function (StepEnum) {
  StepEnum[StepEnum["DEFAULT"] = 0] = "DEFAULT";
  StepEnum[StepEnum["FINAL"] = 1] = "FINAL";
  StepEnum[StepEnum["CONFIRM"] = 2] = "CONFIRM";
})(StepEnum || (StepEnum = {}));

/***/ }),

/***/ 78268:
/*!*****************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/step.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var _step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.enum */ 38511);

class Step {
  key;
  type = _step_enum__WEBPACK_IMPORTED_MODULE_0__.StepEnum.DEFAULT;
  template;
  titleParameterValue;
  component;
  withNextButton;
  nextButtonLabel = 'btn.steps.next';
  nextButtonCallback;
  prevButtonCallback;
  previousStepDisabled;
  asAlternativeFirstStep;
  image;
  imageMobile;
  isImageScrollable;
  isEnabled = true;
  isCompleted = false;
  layoutOptions;
  overwriteFlowLabel;
  chosenProduct$;
  order;
  analyticsOptions;
  constructor(key) {
    this.key = key;
    this.withNextButton = true;
  }
  isFinal() {
    return this.type === _step_enum__WEBPACK_IMPORTED_MODULE_0__.StepEnum.FINAL;
  }
  setCompleted(completedState) {
    this.isCompleted = completedState;
  }
  isConfirm() {
    return this.type === _step_enum__WEBPACK_IMPORTED_MODULE_0__.StepEnum.CONFIRM;
  }
}

/***/ }),

/***/ 7166:
/*!******************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/store/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ETFStepValidAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.ETFStepValidAction),
/* harmony export */   GoToFinalStepAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.GoToFinalStepAction),
/* harmony export */   GoToNextStepAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.GoToNextStepAction),
/* harmony export */   GoToPreviousStepAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.GoToPreviousStepAction),
/* harmony export */   GoToStepAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.GoToStepAction),
/* harmony export */   InsertStepsAfterAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.InsertStepsAfterAction),
/* harmony export */   InsertStepsBeforeAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.InsertStepsBeforeAction),
/* harmony export */   NotifyStepRendered: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.NotifyStepRendered),
/* harmony export */   RemoveStepsWithStepKeysAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveStepsWithStepKeysAction),
/* harmony export */   ReportStepLoadTimingAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.ReportStepLoadTimingAction),
/* harmony export */   SetCurrentDecisionOnStepFlowConfig: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetCurrentDecisionOnStepFlowConfig),
/* harmony export */   SetStepCompleteAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepCompleteAction),
/* harmony export */   SetStepConfigurationAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepConfigurationAction),
/* harmony export */   SetStepIncompleteAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepIncompleteAction),
/* harmony export */   SetStepNavigationStartTimeAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepNavigationStartTimeAction),
/* harmony export */   SetStepToEditAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepToEditAction),
/* harmony export */   SetStepsAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepsAction),
/* harmony export */   SetStepsEnabledState: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.SetStepsEnabledState),
/* harmony export */   StepFlowState: () => (/* reexport safe */ _step_flow_state__WEBPACK_IMPORTED_MODULE_1__.StepFlowState),
/* harmony export */   StepFlowUtil: () => (/* reexport safe */ _step_flow_util__WEBPACK_IMPORTED_MODULE_2__.StepFlowUtil),
/* harmony export */   UpdateCurrentStepImageAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateCurrentStepImageAction),
/* harmony export */   UpdateStepAction: () => (/* reexport safe */ _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateStepAction)
/* harmony export */ });
/* harmony import */ var _step_flow_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-flow.actions */ 42035);
/* harmony import */ var _step_flow_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-flow.state */ 64528);
/* harmony import */ var _step_flow_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-flow.util */ 78282);




/***/ }),

/***/ 42035:
/*!******************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/store/step-flow.actions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ETFStepValidAction: () => (/* binding */ ETFStepValidAction),
/* harmony export */   GoToFinalStepAction: () => (/* binding */ GoToFinalStepAction),
/* harmony export */   GoToNextStepAction: () => (/* binding */ GoToNextStepAction),
/* harmony export */   GoToPreviousStepAction: () => (/* binding */ GoToPreviousStepAction),
/* harmony export */   GoToStepAction: () => (/* binding */ GoToStepAction),
/* harmony export */   InsertStepsAfterAction: () => (/* binding */ InsertStepsAfterAction),
/* harmony export */   InsertStepsBeforeAction: () => (/* binding */ InsertStepsBeforeAction),
/* harmony export */   NotifyStepRendered: () => (/* binding */ NotifyStepRendered),
/* harmony export */   RemoveStepsWithStepKeysAction: () => (/* binding */ RemoveStepsWithStepKeysAction),
/* harmony export */   ReportStepLoadTimingAction: () => (/* binding */ ReportStepLoadTimingAction),
/* harmony export */   SetCurrentDecisionOnStepFlowConfig: () => (/* binding */ SetCurrentDecisionOnStepFlowConfig),
/* harmony export */   SetStepCompleteAction: () => (/* binding */ SetStepCompleteAction),
/* harmony export */   SetStepConfigurationAction: () => (/* binding */ SetStepConfigurationAction),
/* harmony export */   SetStepIncompleteAction: () => (/* binding */ SetStepIncompleteAction),
/* harmony export */   SetStepNavigationStartTimeAction: () => (/* binding */ SetStepNavigationStartTimeAction),
/* harmony export */   SetStepToEditAction: () => (/* binding */ SetStepToEditAction),
/* harmony export */   SetStepsAction: () => (/* binding */ SetStepsAction),
/* harmony export */   SetStepsEnabledState: () => (/* binding */ SetStepsEnabledState),
/* harmony export */   UpdateCurrentStepImageAction: () => (/* binding */ UpdateCurrentStepImageAction),
/* harmony export */   UpdateStepAction: () => (/* binding */ UpdateStepAction)
/* harmony export */ });
class SetStepConfigurationAction {
  stepFlowConfig;
  static type = '[StepFlow] set the step configuration';
  constructor(stepFlowConfig) {
    this.stepFlowConfig = stepFlowConfig;
  }
}
class ReportStepLoadTimingAction {
  reportStepLoadTime;
  static type = '[StepFlow] set whether to capture step load time or not';
  constructor(reportStepLoadTime) {
    this.reportStepLoadTime = reportStepLoadTime;
  }
}
class SetStepNavigationStartTimeAction {
  static type = '[StepFlow] set step navigation start time in milliseconds';
}
class SetStepsAction {
  steps;
  static type = '[StepFlow] set the steps for the stepflow';
  constructor(steps) {
    this.steps = steps;
  }
}
class GoToNextStepAction {
  isStepComplete;
  static type = '[StepFlow] Go to next step';
  constructor(isStepComplete) {
    this.isStepComplete = isStepComplete;
  }
}
class GoToFinalStepAction {
  static type = '[StepFlow] Go to final step';
}
class GoToPreviousStepAction {
  static type = '[StepFlow] Go to previous step';
}
class SetStepToEditAction {
  stepKey;
  static type = '[StepFlow] set the stepflow to a certain step so it can be edited';
  constructor(stepKey) {
    this.stepKey = stepKey;
  }
}
class SetStepIncompleteAction {
  stepKey;
  static type = '[StepFlow] set a certain step to the incomplete state';
  constructor(stepKey) {
    this.stepKey = stepKey;
  }
}
class SetStepCompleteAction {
  stepKey;
  static type = '[StepFlow] set a certain step to the complete state';
  constructor(stepKey) {
    this.stepKey = stepKey;
  }
}
class InsertStepsBeforeAction {
  steps;
  stepKey;
  static type = '[StepFlow] Insert steps before a certain step with a certain key';
  constructor(steps, stepKey) {
    this.steps = steps;
    this.stepKey = stepKey;
  }
}
class InsertStepsAfterAction {
  steps;
  stepKey;
  static type = '[StepFlow] Insert steps behind a certain step with a certain key';
  constructor(steps, stepKey) {
    this.steps = steps;
    this.stepKey = stepKey;
  }
}
class RemoveStepsWithStepKeysAction {
  stepKeys;
  static type = '[StepFlow] Remove the steps with a key in the given list';
  constructor(stepKeys) {
    this.stepKeys = stepKeys;
  }
}
class SetStepsEnabledState {
  steps;
  static type = '[StepFlow] Set the enabled states of multiple steps';
  constructor(steps) {
    this.steps = steps;
  }
}
class UpdateStepAction {
  step;
  static type = '[StepFlow] Change the properties of a certain step';
  constructor(step) {
    this.step = step;
  }
}
class UpdateCurrentStepImageAction {
  image;
  static type = '[StepFlow] Update the current step image';
  constructor(image) {
    this.image = image;
  }
}
class SetCurrentDecisionOnStepFlowConfig {
  stepDecision;
  currentFlowConfig;
  static type = '[StepFlow] Set the current decision on a step flow config';
  constructor(stepDecision, currentFlowConfig) {
    this.stepDecision = stepDecision;
    this.currentFlowConfig = currentFlowConfig;
  }
}
class ETFStepValidAction {
  payload;
  static type = '[StepFlow] Set ETF step valid';
  constructor(payload) {
    this.payload = payload;
  }
}
class GoToStepAction {
  stepKey;
  static type = '[StepFlow] Change current step with given step by key';
  constructor(stepKey) {
    this.stepKey = stepKey;
  }
}
class NotifyStepRendered {
  stepKey;
  static type = '[StepFlow] Notify step rendered';
  constructor(stepKey) {
    this.stepKey = stepKey;
  }
}

/***/ }),

/***/ 64528:
/*!****************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/store/step-flow.state.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFlowState: () => (/* binding */ StepFlowState)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _step_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../step.model */ 78268);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-flow.actions */ 42035);
/* harmony import */ var _factories_step_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/step.factory */ 22972);
/* harmony import */ var _step_flow_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step-flow.util */ 78282);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StepFlowState_1;










let StepFlowState = class StepFlowState {
  static #_ = StepFlowState_1 = this;
  store;
  stepFactory;
  log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__.LogFactory.createLogger(StepFlowState_1);
  constructor(store, stepFactory) {
    this.store = store;
    this.stepFactory = stepFactory;
  }
  static currentStep(state) {
    return state.currentStep;
  }
  static currentStepImage(state) {
    return state.currentStep?.image || '';
  }
  static stepNumber(state) {
    if (!state?.currentStep) {
      return 0;
    }
    return state.steps.indexOf(state?.currentStep) + 1;
  }
  static key(state) {
    return state.currentStep?.key || '';
  }
  static steps(state) {
    return state && state.steps;
  }
  static stepNavigationStartTime(state) {
    return state.stepNavigationStartTime;
  }
  static reportStepLoadTiming(state) {
    return state.reportStepLoadTiming;
  }
  static isETFStepValid(state) {
    return state.isETFStepValid;
  }
  static containsStep(type) {
    return (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)([StepFlowState_1], state => {
      return !!state.steps.find(step => step.key === type);
    });
  }
  initialise(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = action.steps;
      draft.currentStep = action.steps[0];
    }));
  }
  setStepConfigurationAction(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.stepConfiguration = action.stepFlowConfig;
    }));
    this.decideSteps(ctx, action.stepFlowConfig);
  }
  ReportStepLoadTimingAction(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.reportStepLoadTiming = action.reportStepLoadTime;
    }));
  }
  SetStepNavigationStartTimeAction(ctx, _action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.stepNavigationStartTime = new Date().getTime();
    }));
  }
  goToFinalStepAction(ctx, _action) {
    const steps = ctx.getState().steps;
    let nextStep;
    steps.filter(step => step && Object.keys(step).length).forEach(step => {
      if (step.isFinal()) {
        return;
      } else {
        if (step.isCompleted) {
          nextStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getNextIncompletedStep(steps);
        } else {
          step.setCompleted(true);
          nextStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getStepByRelativeIndexOffset(step, steps, '+', 1);
        }
      }
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), this.setCurrentStep(nextStep)));
  }
  goToNextStepAction(ctx, _action) {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);
    const currentStep = ctx.getState().currentStep;
    const steps = ctx.getState().steps;
    if (currentStep?.isFinal?.()) {
      this.log.logError('The current step is of type: FINAL. It is not possible to go to the next step.');
      return;
    }
    let nextStep;
    if (currentStep?.isCompleted) {
      nextStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getNextIncompletedStep(steps);
    } else if (currentStep) {
      currentStep.setCompleted(_action.isStepComplete ?? true);
      nextStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '+', 1);
    }
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), this.setCurrentStep(nextStep)));
  }
  goToPreviousStepAction(ctx, _action) {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);
    let previousStep;
    const currentStep = ctx.getState().currentStep;
    const steps = ctx.getState().steps;
    if (currentStep?.isCompleted) {
      previousStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getNextIncompletedStep(steps);
    } else {
      previousStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '-', 1);
      previousStep?.setCompleted?.(false);
    }
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      if (previousStep) {
        draft.currentStep = previousStep;
      }
    }));
  }
  setStepToEdit(ctx, action) {
    const nextStep = ctx.getState().steps.find(step => step.key === action.stepKey);
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), this.setCurrentStep(nextStep)));
  }
  setStepIncomplete(ctx, action) {
    const updatedSteps = ctx.getState().steps.map(step => {
      if (step.key === action.stepKey) {
        step.isCompleted = false;
      }
      return step;
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = updatedSteps;
    }));
  }
  setStepCompleteAction(ctx, action) {
    const updatedSteps = ctx.getState().steps.map(step => {
      if (step.key === action.stepKey) {
        step.isCompleted = true;
      }
      return step;
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = updatedSteps;
    }));
  }
  InsertStepsBeforeAction(ctx, action) {
    const stepIndex = ctx.getState().steps.findIndex(step => step.key === action.stepKey);
    const steps = [...ctx.getState().steps];
    steps.splice(stepIndex, 0, ...action.steps);
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = steps;
    }));
  }
  InsertStepsAfterAction(ctx, action) {
    const stepIndex = ctx.getState().steps.findIndex(step => step.key === action.stepKey) + 1;
    const steps = [...ctx.getState().steps];
    steps.splice(stepIndex, 0, ...action.steps);
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = steps;
    }));
  }
  RemoveStepsWithStepKeysAction(ctx, action) {
    const steps = ctx.getState().steps.filter(step => {
      return !action.stepKeys.includes(step.key);
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = steps;
    }));
  }
  setStepsEnabledState(ctx, action) {
    const updatedSteps = ctx.getState().steps.map(step => {
      const foundStep = action.steps.find(s => s.stepKey === step.key);
      if (foundStep) {
        step.isEnabled = foundStep.state;
      }
      return step;
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = updatedSteps;
    }));
  }
  updateStepAction(ctx, action) {
    const updatedSteps = ctx.getState().steps.map(step => {
      if (step.key === action.step.key) {
        return action.step;
      }
      return step;
    });
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.steps = updatedSteps;
    }));
  }
  updateCurrentStepImageAction(ctx, action) {
    if (ctx.getState().currentStep) {
      ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
        if (draft.currentStep) {
          draft.currentStep.image = action.image;
        }
      }));
    }
  }
  setCurrentDecisionOnStepFlowConfig(ctx, action) {
    const stepDecisionIndex = ctx.getState().stepConfiguration?.steps?.findIndex(step => {
      return step === action.stepDecision;
    });
    if (stepDecisionIndex) {
      ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
        if (draft.stepConfiguration?.steps[stepDecisionIndex]) {
          draft.stepConfiguration.steps[stepDecisionIndex].currentDecision = action.currentFlowConfig;
        }
      }));
    }
  }
  isETFStepValid(ctx, action) {
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
      draft.isETFStepValid = action.payload;
    }));
  }
  goToStepAction(ctx, action) {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);
    const steps = ctx.getState().steps;
    const nextStep = _step_flow_util__WEBPACK_IMPORTED_MODULE_4__.StepFlowUtil.getActiveStep(steps, action.stepKey);
    ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), this.setCurrentStep(nextStep)));
  }
  decideSteps(ctx, stepFlowConfig) {
    if (stepFlowConfig) {
      const steps = this.stepFactory.createFlow(this.store, stepFlowConfig);
      ctx.setState((0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(ctx.getState(), draft => {
        draft.steps = steps;
        if (!ctx.getState().currentStep) {
          draft.currentStep = steps[0];
        }
      }));
    }
  }
  setCurrentStep(nextStep) {
    return draft => {
      if (nextStep) {
        draft.currentStep = nextStep;
      }
    };
  }
  static ɵfac = function StepFlowState_Factory(t) {
    return new (t || StepFlowState)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_factories_step_factory__WEBPACK_IMPORTED_MODULE_3__.StepFactory));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: StepFlowState,
    factory: StepFlowState.ɵfac
  });
};
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepsAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepsAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "initialise", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepConfigurationAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepConfigurationAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setStepConfigurationAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.ReportStepLoadTimingAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.ReportStepLoadTimingAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "ReportStepLoadTimingAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepNavigationStartTimeAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepNavigationStartTimeAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "SetStepNavigationStartTimeAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToFinalStepAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToFinalStepAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "goToFinalStepAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToNextStepAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToNextStepAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "goToNextStepAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToPreviousStepAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToPreviousStepAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "goToPreviousStepAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepToEditAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepToEditAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setStepToEdit", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepIncompleteAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepIncompleteAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setStepIncomplete", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepCompleteAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepCompleteAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setStepCompleteAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.InsertStepsBeforeAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.InsertStepsBeforeAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "InsertStepsBeforeAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.InsertStepsAfterAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.InsertStepsAfterAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "InsertStepsAfterAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.RemoveStepsWithStepKeysAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.RemoveStepsWithStepKeysAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "RemoveStepsWithStepKeysAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepsEnabledState), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetStepsEnabledState]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setStepsEnabledState", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.UpdateStepAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.UpdateStepAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "updateStepAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.UpdateCurrentStepImageAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.UpdateCurrentStepImageAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "updateCurrentStepImageAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetCurrentDecisionOnStepFlowConfig), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.SetCurrentDecisionOnStepFlowConfig]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "setCurrentDecisionOnStepFlowConfig", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.ETFStepValidAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.ETFStepValidAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "isETFStepValid", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Action)(_step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToStepAction), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, _step_flow_actions__WEBPACK_IMPORTED_MODULE_2__.GoToStepAction]), __metadata("design:returntype", void 0)], StepFlowState.prototype, "goToStepAction", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", _step_model__WEBPACK_IMPORTED_MODULE_0__.Step)], StepFlowState, "currentStep", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", String)], StepFlowState, "currentStepImage", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Number)], StepFlowState, "stepNumber", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", String)], StepFlowState, "key", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Array)], StepFlowState, "steps", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Number)], StepFlowState, "stepNavigationStartTime", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Boolean)], StepFlowState, "reportStepLoadTiming", null);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Selector)(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Boolean)], StepFlowState, "isETFStepValid", null);
StepFlowState = StepFlowState_1 = __decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.State)({
  name: 'stepFlow',
  defaults: {
    initialized: false,
    stepConfiguration: undefined,
    steps: [],
    currentStep: undefined,
    reportStepLoadTiming: false,
    stepNavigationStartTime: 0,
    isETFStepValid: false
  }
}), __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store, _factories_step_factory__WEBPACK_IMPORTED_MODULE_3__.StepFactory])], StepFlowState);


/***/ }),

/***/ 78282:
/*!***************************************************************!*\
  !*** ./libs/shared/step-flow/src/lib/store/step-flow.util.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFlowUtil: () => (/* binding */ StepFlowUtil)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 71646);

class StepFlowUtil {
  static hasNextStep(currentStep, steps) {
    if (currentStep?.isFinal?.()) {
      return true;
    }
    return this.getStepByRelativeIndexOffset(currentStep, steps, '+', 1) !== undefined;
  }
  static hasPreviousStep(currentStep, steps) {
    if (currentStep?.isFinal?.()) {
      return false;
    }
    return this.getStepByRelativeIndexOffset(currentStep, steps, '-', 1) !== undefined;
  }
  static getStepCount(steps) {
    return this.getActiveSteps(steps).length;
  }
  static getActiveSteps(steps) {
    return steps.filter(step => {
      return step.isEnabled;
    });
  }
  static getStepIndex(currentStep, steps) {
    const activeSteps = this.getActiveSteps(steps);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(activeSteps, step => step.key === currentStep.key);
  }
  static getStepByRelativeIndexOffset(currentStep, steps, operator, offset) {
    const activeSteps = this.getActiveSteps(steps);
    const currentStepIndex = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(activeSteps, step => step.key === currentStep?.key);
    switch (operator) {
      case '+':
        return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex + offset];
      case '-':
        return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex - offset];
      default:
        throw new Error(`${operator} is not a correct operator`);
    }
  }
  static getNextIncompletedStep(steps) {
    return this.getActiveSteps(steps).find(step => !step.isCompleted);
  }
  static getActiveStep(steps, stepKey) {
    return this.getActiveSteps(steps).find(step => step.key === stepKey);
  }
}

/***/ })

}])
//# sourceMappingURL=libs_shared_step-flow_src_index_ts-_85321.js.map