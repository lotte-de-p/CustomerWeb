(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_one-configurator_feat-sims_src_index_ts-_0d4b0"],{

/***/ 40109:
/*!************************************************************!*\
  !*** ./libs/sales/one-configurator/feat-sims/src/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOneConfiguratorFeatSimsComponent: () => (/* reexport safe */ _lib_sales_one_configurator_feat_sims_sales_one_configurator_feat_sims_component__WEBPACK_IMPORTED_MODULE_0__.SalesOneConfiguratorFeatSimsComponent)
/* harmony export */ });
/* harmony import */ var _lib_sales_one_configurator_feat_sims_sales_one_configurator_feat_sims_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sales-one-configurator-feat-sims/sales-one-configurator-feat-sims.component */ 57752);


/***/ }),

/***/ 57752:
/*!**************************************************************************************************************************************!*\
  !*** ./libs/sales/one-configurator/feat-sims/src/lib/sales-one-configurator-feat-sims/sales-one-configurator-feat-sims.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOneConfiguratorFeatSimsComponent: () => (/* binding */ SalesOneConfiguratorFeatSimsComponent)
/* harmony export */ });
/* harmony import */ var _sales_one_configurator_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/one-configurator/data-access */ 32254);
/* harmony import */ var _sales_one_configurator_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_one_configurator_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function SalesOneConfiguratorFeatSimsComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" sim #", $index_r4 + 1, " ");
  }
}
function SalesOneConfiguratorFeatSimsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, SalesOneConfiguratorFeatSimsComponent_Conditional_0_For_1_Template, 3, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesOneConfiguratorFeatSimsComponent_Conditional_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.addSim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalesOneConfiguratorFeatSimsComponent_Conditional_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.removeSim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.simConfigurations);
  }
}
class SalesOneConfiguratorFeatSimsComponent {
  constructor(simsFacade) {
    this.simsFacade = simsFacade;
    this.sims$ = this.simsFacade.sims$;
  }
  addSim() {
    this.simsFacade.addSim();
  }
  removeSim() {
    this.simsFacade.removeSim();
  }
  static #_ = this.ɵfac = function SalesOneConfiguratorFeatSimsComponent_Factory(t) {
    return new (t || SalesOneConfiguratorFeatSimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sales_one_configurator_data_access__WEBPACK_IMPORTED_MODULE_0__.SimsFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SalesOneConfiguratorFeatSimsComponent,
    selectors: [["tg-sales-one-configurator-feat-sims"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[3, "click"]],
    template: function SalesOneConfiguratorFeatSimsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SalesOneConfiguratorFeatSimsComponent_Conditional_0_Template, 6, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let SalesOneConfiguratorFeatSimsComponent_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, (SalesOneConfiguratorFeatSimsComponent_contFlowTmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.sims$)) ? 0 : -1, SalesOneConfiguratorFeatSimsComponent_contFlowTmp);
      }
    },
    dependencies: [_sales_one_configurator_data_access__WEBPACK_IMPORTED_MODULE_0__.OneConfiguratorNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_one-configurator_feat-sims_src_index_ts-_0d4b0.js.map