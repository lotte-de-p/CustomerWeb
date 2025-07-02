(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_shared_feature-sales-stepper_src_index_ts"],{

/***/ 33460:
/*!**************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesComponentViewComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_0__.SalesComponentViewComponent),
/* harmony export */   SalesStepperComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_0__.SalesStepperComponent),
/* harmony export */   SalesStepperDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_1__.SalesStepperDirective)
/* harmony export */ });
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components */ 43042);
/* harmony import */ var _lib_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/directives */ 11147);



/***/ }),

/***/ 43042:
/*!*****************************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/lib/components/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesComponentViewComponent: () => (/* reexport safe */ _sales_component_view_component__WEBPACK_IMPORTED_MODULE_1__.SalesComponentViewComponent),
/* harmony export */   SalesStepperComponent: () => (/* reexport safe */ _sales_stepper_component__WEBPACK_IMPORTED_MODULE_0__.SalesStepperComponent)
/* harmony export */ });
/* harmony import */ var _sales_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-stepper.component */ 16138);
/* harmony import */ var _sales_component_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-component-view.component */ 23032);



/***/ }),

/***/ 23032:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/lib/components/sales-component-view.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesComponentViewComponent: () => (/* binding */ SalesComponentViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives */ 11147);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SalesComponentViewComponent = class SalesComponentViewComponent {
  constructor() {
    this.componentSteps = [];
    this.stepFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade);
    this.currentStepKey$ = this.stepFacade.currentStepKey$;
  }
  ngOnInit() {
    this.currentStepKey$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(currentStep => {
      const step = this.componentSteps.find(step => currentStep === step.key);
      if (step && step.component) {
        this.stepContainer.viewContainer.clear();
        const stepComponentComponentRef = this.stepContainer.viewContainer.createComponent(step.component);
        const instance = stepComponentComponentRef.instance;
        this.stepFacade.setNextButtonLabel(step.nextButtonLabel);
        this.nextStep = instance.onNextStep.bind(instance);
      } else {
        console.log('No step found for key:' + currentStep);
      }
    });
  }
  static #_ = this.ɵfac = function SalesComponentViewComponent_Factory(t) {
    return new (t || SalesComponentViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SalesComponentViewComponent,
    selectors: [["tg-sales-component-viewer"]],
    viewQuery: function SalesComponentViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_directives__WEBPACK_IMPORTED_MODULE_1__.SalesStepperDirective, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepContainer = _t.first);
      }
    },
    inputs: {
      componentSteps: "componentSteps"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [["appSalesStepperDirective", ""]],
    template: function SalesComponentViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_directives__WEBPACK_IMPORTED_MODULE_1__.SalesStepperDirective],
    encapsulation: 2
  });
};
SalesComponentViewComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()], SalesComponentViewComponent);


/***/ }),

/***/ 16138:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/lib/components/sales-stepper.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesStepperComponent: () => (/* binding */ SalesStepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_component_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-component-view.component */ 23032);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function SalesStepperComponent_div_1_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesStepperComponent_div_1_ng_container_3_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.goToPreviousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "navigation-bar-previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.step-flow.previous-step-label"));
  }
}
function SalesStepperComponent_div_1_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesStepperComponent_div_1_ng_container_3_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.browserBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "navigation-bar-previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.step-flow.previous-step-label"));
  }
}
function SalesStepperComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesStepperComponent_div_1_ng_container_3_ng_template_1_Template, 5, 6, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesStepperComponent_div_1_ng_container_3_ng_template_3_Template, 5, 6, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.stepFacade.isFirstStep$) === false)("ngIfElse", _r8);
  }
}
function SalesStepperComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div")(2, "span");
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.messageGroup + ".info.free-sales-number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r2.messageGroup + ".free-sales-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.messageGroup + ".info.free-sales-number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx_r2.messageGroup + ".free-sales-number"));
  }
}
function SalesStepperComponent_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const labelKey_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, labelKey_r13));
  }
}
function SalesStepperComponent_div_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.nextStepLabel));
  }
}
function SalesStepperComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesStepperComponent_div_1_ng_container_3_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SalesStepperComponent_div_1_div_4_Template, 14, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesStepperComponent_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.goToNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SalesStepperComponent_div_1_ng_container_7_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SalesStepperComponent_div_1_ng_template_9_Template, 3, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isLoading)("sticky-footer--flow__dynamic-shadow", ctx_r0.dynamicShadow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "navigation-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBackButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSalesContactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("next-section", ctx_r0.currentStepNumber !== 1 && !ctx_r0.isConfirmationStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.isLoading)("visibility--hide", !ctx_r0.hasNextStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "navigation-bar-next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, ctx_r0.buttonTextOverride$))("ngIfElse", _r5);
  }
}
let SalesStepperComponent = class SalesStepperComponent {
  constructor() {
    this.stepFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.StepFacade);
    this.steps = [];
    this.hasNextStep = true;
    this.nextStepLabel = 'ng.step-flow.next-step-label';
    this.showBackButton = true;
    this.nextButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.currentStepKey$ = this.stepFacade.currentStepKey$;
    this.buttonTextOverride$ = this.stepFacade.nextButtonLabel$;
  }
  ngOnInit() {
    this.stepFacade.goToFirstStep();
  }
  goToNextStep() {
    this.nextButtonClicked.emit();
    this.child.nextStep().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(shouldGoToNextStep => {
      if (shouldGoToNextStep) {
        this.stepFacade.goToNextStep();
      }
    });
  }
  goToPreviousStep() {
    this.stepFacade.goToPreviousStep();
  }
  browserBack() {
    this.stepFacade.browserBack();
  }
  static #_ = this.ɵfac = function SalesStepperComponent_Factory(t) {
    return new (t || SalesStepperComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SalesStepperComponent,
    selectors: [["tg-sales-stepper"]],
    viewQuery: function SalesStepperComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_sales_component_view_component__WEBPACK_IMPORTED_MODULE_2__.SalesComponentViewComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
      }
    },
    inputs: {
      steps: "steps",
      showStepCounter: "showStepCounter",
      showSalesContactNumber: "showSalesContactNumber",
      showStepProgressBar: "showStepProgressBar",
      showNavigation: "showNavigation",
      showBackButton: "showBackButton",
      dynamicShadow: "dynamicShadow"
    },
    outputs: {
      nextButtonClicked: "nextButtonClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[3, "componentSteps"], ["class", "sticky-footer-v2 position--fixed background-white width--full py--m px--xm p--xm--md display--flex justify-content--center align-items--center box-sizing--inherit shadow--xs-inverse position--bottom position--left", 3, "disabled", "sticky-footer--flow__dynamic-shadow", 4, "ngIf"], [1, "sticky-footer-v2", "position--fixed", "background-white", "width--full", "py--m", "px--xm", "p--xm--md", "display--flex", "justify-content--center", "align-items--center", "box-sizing--inherit", "shadow--xs-inverse", "position--bottom", "position--left"], [1, "sticky-footer-v2__container", "width--full", "default-max-site-width", "display--flex", "justify-content--between", "align-items--center"], [1, "back-section"], [4, "ngIf"], ["class", "display--flex flex-direction--column font-weight--bold align-items--center", 4, "ngIf"], [1, "button", "button--primary", "button__icon--position-right", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [1, "icon", "icon-chevron-right"], [3, "ngIf", "ngIfElse"], ["browserBackButton", ""], [1, "button", "button--secondary", "button__icon--position-left", 3, "click"], [1, "icon", "icon-chevron-left"], [1, "display--flex", "flex-direction--column", "font-weight--bold", "align-items--center"]],
    template: function SalesStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-sales-component-viewer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesStepperComponent_div_1_Template, 12, 18, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("componentSteps", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigation);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _sales_component_view_component__WEBPACK_IMPORTED_MODULE_2__.SalesComponentViewComponent, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.StepsNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
};
SalesStepperComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], SalesStepperComponent);


/***/ }),

/***/ 11147:
/*!*****************************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/lib/directives/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesStepperDirective: () => (/* reexport safe */ _sales_stepper_directive__WEBPACK_IMPORTED_MODULE_0__.SalesStepperDirective)
/* harmony export */ });
/* harmony import */ var _sales_stepper_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-stepper.directive */ 64845);


/***/ }),

/***/ 64845:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/shared/feature-sales-stepper/src/lib/directives/sales-stepper.directive.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesStepperDirective: () => (/* binding */ SalesStepperDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class SalesStepperDirective {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }
  static #_ = this.ɵfac = function SalesStepperDirective_Factory(t) {
    return new (t || SalesStepperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SalesStepperDirective,
    selectors: [["", "appSalesStepperDirective", ""]],
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=default-libs_sales_shared_feature-sales-stepper_src_index_ts.js.map