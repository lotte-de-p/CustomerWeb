(self["webpackChunkorder_configurator_mfe"] = self["webpackChunkorder_configurator_mfe"] || []).push([["apps_sales_order-configurator-mfe_src_bootstrap_ts"],{

/***/ 9307:
/*!*****************************************************************!*\
  !*** ./apps/sales/order-configurator-mfe/src/app/app.config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 52);


const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes)]
};

/***/ }),

/***/ 52:
/*!*****************************************************************!*\
  !*** ./apps/sales/order-configurator-mfe/src/app/app.routes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [];

/***/ }),

/***/ 7130:
/*!************************************************************!*\
  !*** ./apps/sales/order-configurator-mfe/src/bootstrap.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 9307);
/* harmony import */ var _app_order_configurator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/order-configurator.component */ 3676);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_order_configurator_component__WEBPACK_IMPORTED_MODULE_1__.OrderConfiguratorComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

}])
//# sourceMappingURL=apps_sales_order-configurator-mfe_src_bootstrap_ts.js.map