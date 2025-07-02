(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_products-details_feat-products-details_src_index_ts"],{

/***/ 37451:
/*!************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsOrderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsOrderComponent),
/* harmony export */   ProductsDetailsRowContainerComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsRowContainerComponent),
/* harmony export */   ProductsDetailsSummaryComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsSummaryComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 28776);


/***/ }),

/***/ 28776:
/*!****************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/lib/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsOrderComponent: () => (/* reexport safe */ _products_details_order_products_details_order_component__WEBPACK_IMPORTED_MODULE_1__.ProductsDetailsOrderComponent),
/* harmony export */   ProductsDetailsRowContainerComponent: () => (/* reexport safe */ _products_details_row_container_products_details_row_container_component__WEBPACK_IMPORTED_MODULE_2__.ProductsDetailsRowContainerComponent),
/* harmony export */   ProductsDetailsSummaryComponent: () => (/* reexport safe */ _products_details_summary_products_details_summary_component__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsSummaryComponent)
/* harmony export */ });
/* harmony import */ var _products_details_summary_products_details_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-details-summary/products-details-summary.component */ 88341);
/* harmony import */ var _products_details_order_products_details_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-details-order/products-details-order.component */ 47216);
/* harmony import */ var _products_details_row_container_products_details_row_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-details-row-container/products-details-row-container.component */ 77557);




/***/ }),

/***/ 47216:
/*!******************************************************************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/lib/products-details-order/products-details-order.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsOrderComponent: () => (/* binding */ ProductsDetailsOrderComponent)
/* harmony export */ });
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/products-details/data-access */ 6014);
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/ui */ 82901);
/* harmony import */ var _sales_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function ProductsDetailsOrderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "tg-sales-pricing", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductsDetailsOrderComponent_ng_container_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.order());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const salesOffer_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("theme", ctx_r0.theme)("salesOffer", salesOffer_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "ng.products-details-order.btn.order"));
  }
}
class ProductsDetailsOrderComponent {
  set salesCheckoutUrl(salesCheckoutUrl) {
    this.productsDetailsOrderFacade.updateSalesCheckoutUrl(salesCheckoutUrl);
  }
  set humanCheckoutUrl(humanCheckoutUrl) {
    this.productsDetailsOrderFacade.updateHumanCheckoutUrl(humanCheckoutUrl);
  }
  constructor(productsDetailsOrderFacade) {
    this.productsDetailsOrderFacade = productsDetailsOrderFacade;
    this.salesOffer$ = this.productsDetailsOrderFacade.salesOffer$;
  }
  order() {
    this.productsDetailsOrderFacade.order();
  }
  static #_ = this.ɵfac = function ProductsDetailsOrderComponent_Factory(t) {
    return new (t || ProductsDetailsOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsOrderFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductsDetailsOrderComponent,
    selectors: [["tg-sales-products-details-order"]],
    inputs: {
      theme: "theme",
      salesCheckoutUrl: "salesCheckoutUrl",
      humanCheckoutUrl: "humanCheckoutUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "mt--xl--md", "mt--l"], [3, "theme", "salesOffer"], [1, "mt--l", "display--flex--md", "align-items--center"], [1, "button", "button", "button--primary", 3, "click"]],
    template: function ProductsDetailsOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProductsDetailsOrderComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.salesOffer$));
      }
    },
    dependencies: [_sales_shared_ui__WEBPACK_IMPORTED_MODULE_1__.PricingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 77557:
/*!**********************************************************************************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/lib/products-details-row-container/products-details-row-container.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsRowContainerComponent: () => (/* binding */ ProductsDetailsRowContainerComponent)
/* harmony export */ });
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/products-details/data-access */ 6014);
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 8)(10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.products-details-row-container.internet-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "ng.products-details-row-container.internet-text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 11)(10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.products-details-row-container.tv-iconic-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "ng.products-details-row-container.tv-iconic-text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 11)(10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.products-details-row-container.tv-flow-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "ng.products-details-row-container.tv-flow-text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 13)(10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.products-details-row-container.mobile-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "ng.products-details-row-container.mobile-text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 15)(10, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.products-details-row-container.fixed-telephone-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "ng.products-details-row-container.fixed-telephone-text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("moduleId", "products-details");
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_2_Template, 11, 8, "div", 2)(3, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_3_Template, 11, 8, "div", 3)(4, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_4_Template, 11, 8, "div", 3)(5, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_5_Template, 11, 8, "div", 2)(6, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_div_6_Template, 11, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const $_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isInternetRowVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isTvIconicRowVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isTvFlowRowVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isMobileRowVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isFixedTelephoneRowVisible);
  }
}
function ProductsDetailsRowContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductsDetailsRowContainerComponent_ng_container_0_ng_container_1_Template, 7, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const $_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", $_r1.isInternetRowVisible !== null && $_r1.isTvIconicRowVisible !== null && $_r1.isTvFlowRowVisible !== null && $_r1.isMobileRowVisible !== null && $_r1.isFixedTelephoneRowVisible !== null);
  }
}
const _c0 = (a0, a1, a2, a3, a4) => ({
  isInternetRowVisible: a0,
  isTvIconicRowVisible: a1,
  isTvFlowRowVisible: a2,
  isMobileRowVisible: a3,
  isFixedTelephoneRowVisible: a4
});
class ProductsDetailsRowContainerComponent {
  constructor(productsDetailsRowContainerFacade) {
    this.productsDetailsRowContainerFacade = productsDetailsRowContainerFacade;
    this.isInternetRowVisible$ = this.productsDetailsRowContainerFacade.isInternetRowVisible$;
    this.isTvIconicRowVisible$ = this.productsDetailsRowContainerFacade.isTvIconicRowVisible$;
    this.isTvFlowRowVisible$ = this.productsDetailsRowContainerFacade.isTvFlowRowVisible$;
    this.isMobileRowVisible$ = this.productsDetailsRowContainerFacade.isMobileRowVisible$;
    this.isFixedTelephoneRowVisible$ = this.productsDetailsRowContainerFacade.isFixedTelephoneRowVisible$;
  }
  static #_ = this.ɵfac = function ProductsDetailsRowContainerComponent_Factory(t) {
    return new (t || ProductsDetailsRowContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductsDetailsRowContainerFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductsDetailsRowContainerComponent,
    selectors: [["tg-sales-products-details-row-container"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 17,
    consts: [[4, "ngIf"], [1, "container", "px--m", "px--n--md", "py--l", "py--g--md"], ["class", "display--flex product-finder-result--detail-screen--info justify-content--between", 4, "ngIf"], ["class", "display--flex product-finder-result--detail-screen--info justify-content--between product-finder-result--detail-screen--info-img-right", 4, "ngIf"], [1, "display--flex", "product-finder-result--detail-screen--info", "justify-content--between"], [1, "product-finder-result--detail-screen--info-detail", "display--flex", "flex-direction--column", "justify-content--center", "mt--xxl", "mr--xxg--md", "col-12", "col-md-5"], [1, "text-flow", "text-flow--h2", "mb--l"], [1, "mt--xxl", "hide-until-md", "text-align--right", "col-12", "col-md-7", "display--flex", "align-items--baseline"], ["appSalesImageSrcInterceptor", "", "alt", "telenet", "src", "/assets/sales/products-details/row-container/internet.png", 1, "product-finder-result--detail-screen--info-img", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/internet-icon.png", 1, "position--relative", "product-finder-result--detail-screen--info-img--icon", 3, "moduleId"], [1, "display--flex", "product-finder-result--detail-screen--info", "justify-content--between", "product-finder-result--detail-screen--info-img-right"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/tv.png", 1, "product-finder-result--detail-screen--info-img", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/tv-icon.png", 1, "position--relative", "product-finder-result--detail-screen--info-img--icon", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/mobile.png", 1, "product-finder-result--detail-screen--info-img", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/mobile-icon.png", 1, "position--relative", "product-finder-result--detail-screen--info-img--icon", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/fixed-telephone.png", 1, "product-finder-result--detail-screen--info-img", 3, "moduleId"], ["appSalesImageSrcInterceptor", "", "src", "/assets/sales/products-details/row-container/fixed-telephone-icon.png", 1, "position--relative", "product-finder-result--detail-screen--info-img--icon", 3, "moduleId"]],
    template: function ProductsDetailsRowContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProductsDetailsRowContainerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.isInternetRowVisible$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx.isTvIconicRowVisible$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx.isTvFlowRowVisible$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, ctx.isMobileRowVisible$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, ctx.isFixedTelephoneRowVisible$)));
      }
    },
    dependencies: [_sales_shared_util__WEBPACK_IMPORTED_MODULE_0__.ImageSrcInterceptorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 88341:
/*!**********************************************************************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/lib/products-details-summary/products-details-summary.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsSummaryComponent: () => (/* binding */ ProductsDetailsSummaryComponent)
/* harmony export */ });
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/products-details/data-access */ 6014);
/* harmony import */ var _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _summary_item_summary_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary-item/summary-item.component */ 90331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









function ProductsDetailsSummaryComponent_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tg-sales-products-details-summary-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summaryVM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "icon icon-wifi-signal")("title", "ng.products-details-summary.summary-item-internet-title")("specs", summaryVM_r1.internetSpecs);
  }
}
function ProductsDetailsSummaryComponent_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tg-sales-products-details-summary-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summaryVM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "icon icon-tv")("title", "ng.products-details-summary.summary-item-tv-title")("specs", summaryVM_r1.tvSpecs);
  }
}
function ProductsDetailsSummaryComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tg-sales-products-details-summary-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summaryVM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "icon icon-mobile")("title", "ng.products-details-summary.summary-item-mobile-title")("specs", summaryVM_r1.mobileSpecs);
  }
}
function ProductsDetailsSummaryComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tg-sales-products-details-summary-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const summaryVM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "icon icon-telephone")("title", "ng.products-details-summary.summary-item-fixed-telephone-title")("specs", summaryVM_r1.fixedTelephoneSpecs);
  }
}
function ProductsDetailsSummaryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProductsDetailsSummaryComponent_ng_container_0_div_8_Template, 2, 3, "div", 7)(9, ProductsDetailsSummaryComponent_ng_container_0_div_9_Template, 2, 3, "div", 7)(10, ProductsDetailsSummaryComponent_ng_container_0_div_10_Template, 2, 3, "div", 7)(11, ProductsDetailsSummaryComponent_ng_container_0_div_11_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const summaryVM_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](summaryVM_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", summaryVM_r1.internetSpecs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", summaryVM_r1.tvSpecs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", summaryVM_r1.mobileSpecs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", summaryVM_r1.fixedTelephoneSpecs.length > 0);
  }
}
class ProductsDetailsSummaryComponent {
  constructor(productsDetailsFacade, translate) {
    this.productsDetailsFacade = productsDetailsFacade;
    this.translate = translate;
    this.productsDetailsSummaryVM$ = this.productsDetailsFacade.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(products => {
      const c5Product = this.findC5Product(products);
      const uniqueProducts = _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductUtils.getUniqueProducts(products);
      return {
        title: _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductUtils.createTitle(products),
        internetSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'INTERNET'),
        mobileSpecs: this.createMobileSpecs(products, uniqueProducts, c5Product),
        tvSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'TV'),
        fixedTelephoneSpecs: this.getTranslatedLabelKeyByType(uniqueProducts, 'FIXED_TELEPHONE')
      };
    }));
  }
  findC5Product(products) {
    return products.find(product => product.omapiProduct.isConnect5());
  }
  createMobileSpecs(products, uniqueProducts, c5Product) {
    const maxMobileLines = +(c5Product?.omapiProduct.getMaxMobileLines() ?? 0);
    const amountOfLimitedSims = c5Product?.amountOfLimitedSims ?? 0;
    const amountOfUnlimitedSims = maxMobileLines - amountOfLimitedSims;
    return uniqueProducts.flatMap(product => product.productSpec.detailedSpecs.filter(detailedSpec => detailedSpec.type === 'MOBILE').map(detailedSpec => {
      const numberOfTimes = _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductUtils.getNumberOfTimesMobileProductOccurs(products, product.omapiProduct.externalProductCode);
      return this.translate.transform(detailedSpec.labelKey, {
        numberOfTimes,
        amountOfLimitedSims,
        amountOfUnlimitedSims
      });
    }));
  }
  getTranslatedLabelKeyByType(uniqueProducts, type) {
    return uniqueProducts.flatMap(product => product.productSpec.detailedSpecs.filter(detailedSpec => detailedSpec.type === type).map(detailedSpec => this.translate.transform(detailedSpec.labelKey)));
  }
  static #_ = this.ɵfac = function ProductsDetailsSummaryComponent_Factory(t) {
    return new (t || ProductsDetailsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProductsDetailsSummaryComponent,
    selectors: [["tg-sales-products-details-summary"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "product-finder-result--detail-screen", "my--xxl--md", "my--l"], [1, "color-white"], [1, "container", "px--m", "px--n--md"], [1, "product-finder-result--detail-screen-contents"], [1, "text-flow", "text-flow--h5", "mb--xxxl"], [1, "display--flex", "flex-wrap--wrap", "justify-content--between"], ["class", "product-finder-result--detail-screen-content--product background-white_08 mb--l p--xxl--md p--xm", 4, "ngIf"], [1, "product-finder-result--detail-screen-content--product", "background-white_08", "mb--l", "p--xxl--md", "p--xm"], [3, "icon", "title", "specs"]],
    template: function ProductsDetailsSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductsDetailsSummaryComponent_ng_container_0_Template, 12, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.productsDetailsSummaryVM$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _sales_products_details_data_access__WEBPACK_IMPORTED_MODULE_0__.ProductsDetailsNgrxModule, _summary_item_summary_item_component__WEBPACK_IMPORTED_MODULE_4__.SummaryItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 90331:
/*!***********************************************************************************************************************************!*\
  !*** ./libs/sales/products-details/feat-products-details/src/lib/products-details-summary/summary-item/summary-item.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryItemComponent: () => (/* binding */ SummaryItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function SummaryItemComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const spec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](spec_r1);
  }
}
class SummaryItemComponent {
  static #_ = this.ɵfac = function SummaryItemComponent_Factory(t) {
    return new (t || SummaryItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SummaryItemComponent,
    selectors: [["tg-sales-products-details-summary-item"]],
    inputs: {
      icon: "icon",
      title: "title",
      specs: "specs"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [[1, "display--flex", "align-items--center", "mb--m"], [1, "icon-md", "mr--m", 3, "ngClass"], [1, "text-flow", "text-flow--h3"], [4, "ngFor", "ngForOf"], [1, "display--flex", "mb--m"], [1, "icon", "icon-md", "icon-tick", "color-yellow", "mr--xxs"]],
    template: function SummaryItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SummaryItemComponent_ng_container_5_Template, 5, 1, "ng-container", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.specs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_products-details_feat-products-details_src_index_ts.js.map