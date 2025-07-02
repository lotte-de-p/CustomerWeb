(self["webpackChunkcare_service_cases_mfe"] = self["webpackChunkcare_service_cases_mfe"] || []).push([["libs_engagement_care-service-cases_service-case_ui_src_index_ts-_902c1"],{

/***/ 42058:
/*!*************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AccordionComponent),
/* harmony export */   AccordionItemComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AccordionItemComponent),
/* harmony export */   LoaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent),
/* harmony export */   ServiceCaseErrorComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseErrorComponent),
/* harmony export */   ServiceCaseIconComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseIconComponent),
/* harmony export */   ServiceCaseStatusComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseStatusComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 79906);


/***/ }),

/***/ 5574:
/*!*****************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/accordion/accordion.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionComponent: () => (/* binding */ AccordionComponent),
/* harmony export */   AccordionItemComponent: () => (/* binding */ AccordionItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




const _c0 = ["*"];
function AccordionItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AccordionItemComponent_hr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 8);
  }
}
class AccordionComponent {
  static ɵfac = function AccordionComponent_Factory(t) {
    return new (t || AccordionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccordionComponent,
    selectors: [["care-accordion"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [["data-cy", "accordion", 1, "accordion"]],
    template: function AccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    encapsulation: 2
  });
}
class AccordionItemComponent {
  title = '';
  divider = false;
  faqToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  show = false;
  toggle() {
    this.show = !this.show;
    this.faqToggle.emit(this.show);
  }
  ngOnChanges(changes) {
    if (changes['title']) {
      this.show = false;
    }
  }
  static ɵfac = function AccordionItemComponent_Factory(t) {
    return new (t || AccordionItemComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccordionItemComponent,
    selectors: [["care-accordion-item"]],
    inputs: {
      title: "title",
      divider: "divider"
    },
    outputs: {
      faqToggle: "faqToggle"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 8,
    vars: 4,
    consts: [["data-cy", "accordion-item", 1, "accordion__item"], [1, "accordion__header"], ["aria-expanded", "true", "data-cy", "accordion-item-header", 1, "accordion__button", "display--flex", "justify-content--between", "align-content--center", "background-transparent", "width--full", "border-none", "cursor--pointer", "py--m", "px--n", 3, "click"], [1, "heading--nomargin", "text-align--left"], [1, "accordion__icon", "icon", "icon-no-size-override", "icon-md", 3, "ngClass"], ["class", "accordion__panel transition--ease-3ms", "data-cy", "accordion-item-content", 4, "ngIf"], ["style", "margin: 0", 4, "ngIf"], ["data-cy", "accordion-item-content", 1, "accordion__panel", "transition--ease-3ms"], [2, "margin", "0"]],
    template: function AccordionItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionItemComponent_Template_button_click_2_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccordionItemComponent_div_6_Template, 2, 0, "div", 5)(7, AccordionItemComponent_hr_7_Template, 1, 0, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.show ? "icon-chevron-up" : "icon-chevron-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.divider);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 79906:
/*!*****************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionComponent: () => (/* reexport safe */ _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionComponent),
/* harmony export */   AccordionItemComponent: () => (/* reexport safe */ _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionItemComponent),
/* harmony export */   LoaderComponent: () => (/* reexport safe */ _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent),
/* harmony export */   ServiceCaseErrorComponent: () => (/* reexport safe */ _service_case_error_service_case_error_component__WEBPACK_IMPORTED_MODULE_2__.ServiceCaseErrorComponent),
/* harmony export */   ServiceCaseIconComponent: () => (/* reexport safe */ _service_case_icon_service_case_icon_component__WEBPACK_IMPORTED_MODULE_1__.ServiceCaseIconComponent),
/* harmony export */   ServiceCaseStatusComponent: () => (/* reexport safe */ _service_case_status_service_case_status_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCaseStatusComponent)
/* harmony export */ });
/* harmony import */ var _service_case_status_service_case_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-case-status/service-case-status.component */ 98634);
/* harmony import */ var _service_case_icon_service_case_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-case-icon/service-case-icon.component */ 34902);
/* harmony import */ var _service_case_error_service_case_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-case-error/service-case-error.component */ 606);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ 78027);
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/accordion.component */ 5574);






/***/ }),

/***/ 78027:
/*!***********************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/loader/loader.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
  }
}
class LoaderComponent {
  loading;
  static ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["care-service-case-loader"]],
    inputs: {
      loading: "loading"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "loading--circular", "style", "margin: 0 auto", 4, "ngIf"], [1, "loading--circular", 2, "margin", "0 auto"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 606:
/*!***********************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/service-case-error/service-case-error.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseErrorComponent: () => (/* binding */ ServiceCaseErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function ServiceCaseErrorComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.error));
  }
}
class ServiceCaseErrorComponent {
  error;
  static ɵfac = function ServiceCaseErrorComponent_Factory(t) {
    return new (t || ServiceCaseErrorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ServiceCaseErrorComponent,
    selectors: [["care-service-case-error"]],
    inputs: {
      error: "error"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon-error"], [4, "ngIf"]],
    template: function ServiceCaseErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ServiceCaseErrorComponent_span_2_Template, 3, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34902:
/*!*********************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/service-case-icon/service-case-icon.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseIconComponent: () => (/* binding */ ServiceCaseIconComponent)
/* harmony export */ });
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function ServiceCaseIconComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", "icon " + ctx_r0.size + " " + ctx_r0.getIcon(ctx_r0.type));
  }
}
class ServiceCaseIconComponent {
  type;
  size = 'icon-md';
  getIcon(type) {
    switch (type) {
      case _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Type.MOVE:
        return 'icon-deliveryvan';
      case _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Type.TAKEOVER:
        return 'icon-mobile-arrow-mobile';
      case _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Type.REPAIR:
      case _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Type.INSTALL:
        return 'icon-tool';
      case _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Type.HOME_DELIVERY:
        return 'icon-house';
      default:
        return 'icon-others';
    }
  }
  static ɵfac = function ServiceCaseIconComponent_Factory(t) {
    return new (t || ServiceCaseIconComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ServiceCaseIconComponent,
    selectors: [["care-service-case-icon"]],
    inputs: {
      type: "type",
      size: "size"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "className", 4, "ngIf"], [3, "className"]],
    template: function ServiceCaseIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ServiceCaseIconComponent_i_0_Template, 1, 1, "i", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98634:
/*!*************************************************************************************************************************!*\
  !*** ./libs/engagement/care-service-cases/service-case/ui/src/lib/service-case-status/service-case-status.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceCaseStatusComponent: () => (/* binding */ ServiceCaseStatusComponent)
/* harmony export */ });
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @care-service-cases/service-case/data-access */ 21139);
/* harmony import */ var _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ServiceCaseStatusComponent {
  status = _care_service_cases_service_case_data_access__WEBPACK_IMPORTED_MODULE_0__.Status.RESOLVED;
  static ɵfac = function ServiceCaseStatusComponent_Factory(t) {
    return new (t || ServiceCaseStatusComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ServiceCaseStatusComponent,
    selectors: [["care-service-case-status"]],
    inputs: {
      status: "status"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "display--inline-flex", "gap--s", "align-items--center", "background-shade_12", "border-radius--all--xxs", "py--xxxs", "px--xxs"], [2, "height", "10px", "width", "10px", "border-radius", "50%", "display", "block", 3, "ngClass"], [1, "text--s"]],
    template: function ServiceCaseStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "service-case-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.status === "OPEN" ? "background-notification--success--light" : "background-white_32");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "ng.service-cases.item.status." + ctx.status));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_care-service-cases_service-case_ui_src_index_ts-_902c1.js.map