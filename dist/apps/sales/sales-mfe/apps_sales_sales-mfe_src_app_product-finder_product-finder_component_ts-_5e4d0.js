(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["apps_sales_sales-mfe_src_app_product-finder_product-finder_component_ts-_5e4d0"],{

/***/ 38785:
/*!*********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/product-finder/product-finder.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFinderComponent: () => (/* binding */ ProductFinderComponent)
/* harmony export */ });
/* harmony import */ var _sales_product_finder_feat_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/product-finder/feat-stepper */ 19280);
/* harmony import */ var _sales_product_finder_feat_stepper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_feat_stepper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/product-finder/data-access */ 95115);
/* harmony import */ var _sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductFinderComponent {
  set enableLoader(enableLoader) {
    this.productFinderConfigFacade.updateEnableLoader(enableLoader);
  }
  set enableMask(enableMask) {
    this.productFinderConfigFacade.updateEnableLoaderMask(enableMask);
  }
  set salesCheckoutUrl(salesCheckoutUrl) {
    this.productFinderConfigFacade.updateSalesCheckoutUrl(salesCheckoutUrl);
  }
  set humanCheckoutUrl(humanCheckoutUrl) {
    this.productFinderConfigFacade.updateHumanCheckoutUrl(humanCheckoutUrl);
  }
  set oneConfiguratorUrl(oneConfiguratorUrl) {
    this.productFinderConfigFacade.updateOneConfiguratorUrl(oneConfiguratorUrl);
  }
  set productsDetailsUrl(productsDetailsUrl) {
    this.productFinderConfigFacade.updateProductsDetailsUrl(productsDetailsUrl);
  }
  constructor(productFinderConfigFacade) {
    this.productFinderConfigFacade = productFinderConfigFacade;
  }
  static #_ = this.ɵfac = function ProductFinderComponent_Factory(t) {
    return new (t || ProductFinderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sales_product_finder_data_access__WEBPACK_IMPORTED_MODULE_1__.ProductFinderConfigFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductFinderComponent,
    selectors: [["tg-sales-product-finder"]],
    inputs: {
      enableLoader: "enableLoader",
      enableMask: "enableMask",
      salesCheckoutUrl: "salesCheckoutUrl",
      humanCheckoutUrl: "humanCheckoutUrl",
      oneConfiguratorUrl: "oneConfiguratorUrl",
      productsDetailsUrl: "productsDetailsUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function ProductFinderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-sales-product-finder-stepper");
      }
    },
    dependencies: [_sales_product_finder_feat_stepper__WEBPACK_IMPORTED_MODULE_0__.ProductFinderStepperComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.LoaderModule],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=apps_sales_sales-mfe_src_app_product-finder_product-finder_component_ts-_5e4d0.js.map