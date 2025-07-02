(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_shared_feat-ingenico-form_src_index_ts-_48dc1"],{

/***/ 13176:
/*!***********************************************************!*\
  !*** ./libs/sales/shared/feat-ingenico-form/src/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngenicoFormComponent: () => (/* reexport safe */ _lib_sales_shared_feat_ingenico_form_ingenico_form_component__WEBPACK_IMPORTED_MODULE_0__.IngenicoFormComponent)
/* harmony export */ });
/* harmony import */ var _lib_sales_shared_feat_ingenico_form_ingenico_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sales-shared-feat-ingenico-form/ingenico-form.component */ 7304);


/***/ }),

/***/ 7304:
/*!*****************************************************************************************************************!*\
  !*** ./libs/sales/shared/feat-ingenico-form/src/lib/sales-shared-feat-ingenico-form/ingenico-form.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngenicoFormComponent: () => (/* binding */ IngenicoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);





const _c0 = ["ingenicoForm"];
class IngenicoFormComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.paymentInitiated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  sendRequest(form) {
    this.formToSubmit = Object.assign({}, form);
    this.changeDetectorRef.detectChanges();
    this.ingenicoForm?.nativeElement.click();
  }
  handleClick() {
    this.paymentInitiated.emit();
  }
  static #_ = this.ɵfac = function IngenicoFormComponent_Factory(t) {
    return new (t || IngenicoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IngenicoFormComponent,
    selectors: [["tg-sales-ingenico-form"]],
    viewQuery: function IngenicoFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ingenicoForm = _t.first);
      }
    },
    inputs: {
      actionUrl: "actionUrl"
    },
    outputs: {
      paymentInitiated: "paymentInitiated"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 23,
    consts: [[2, "display", "none"], ["enctype", "application/x-www-form-urlencoded", "method", "POST", 3, "action"], ["name", "PSPID", 3, "value"], ["name", "ORDERID", 3, "value"], ["name", "AMOUNT", 3, "value"], ["name", "CURRENCY", 3, "value"], ["name", "LANGUAGE", 3, "value"], ["name", "CN", 3, "value"], ["name", "EMAIL", 3, "value"], ["name", "OWNERZIP", 3, "value"], ["name", "OWNERADDRESS", 3, "value"], ["name", "OWNERCTY", 3, "value"], ["name", "OWNERTOWN", 3, "value"], ["name", "OWNERTELNO", 3, "value"], ["name", "TP", 3, "value"], ["name", "DEVICE", 3, "value"], ["name", "SHASIGN", 3, "value"], ["name", "ACCEPTURL", 3, "value"], ["name", "DECLINEURL", 3, "value"], ["name", "EXCEPTIONURL", 3, "value"], ["name", "CANCELURL", 3, "value"], ["name", "PARAMPLUS", 3, "value"], ["name", "PARAMVAR", 3, "value"], ["name", "submit", "type", "submit", 3, "click"], ["ingenicoForm", ""]],
    template: function IngenicoFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2)(3, "input", 3)(4, "input", 4)(5, "input", 5)(6, "input", 6)(7, "input", 7)(8, "input", 8)(9, "input", 9)(10, "input", 10)(11, "input", 11)(12, "input", 12)(13, "input", 13)(14, "input", 14)(15, "input", 15)(16, "input", 16)(17, "input", 17)(18, "input", 18)(19, "input", 19)(20, "input", 20)(21, "input", 21)(22, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngenicoFormComponent_Template_input_click_23_listener() {
          return ctx.handleClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.actionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "ingenico-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.PSPID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.ORDERID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.AMOUNT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.CURRENCY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.LANGUAGE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.CN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.EMAIL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.OWNERZIP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.OWNERADDRESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.OWNERCTY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.OWNERTOWN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.OWNERTELNO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.TP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.DEVICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.SHASIGN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.ACCEPTURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.DECLINEURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.EXCEPTIONURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.CANCELURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.PARAMPLUS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formToSubmit == null ? null : ctx.formToSubmit.PARAMVAR);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_shared_feat-ingenico-form_src_index_ts-_48dc1.js.map