(self["webpackChunkcustomer_web_billing_limits_mfe"] = self["webpackChunkcustomer_web_billing_limits_mfe"] || []).push([["libs_billing_shared_data-access_src_index_ts-_b70a1"],{

/***/ 25540:
/*!******************************************************!*\
  !*** ./libs/billing/shared/data-access/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileLinesService: () => (/* reexport safe */ _lib_services_mobile_lines_mobile_lines_service__WEBPACK_IMPORTED_MODULE_1__.MobileLinesService)
/* harmony export */ });
/* harmony import */ var _lib_entities_mobile_lines_mobile_line_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/entities/mobile-lines/mobile-line.model */ 15610);
/* harmony import */ var _lib_services_mobile_lines_mobile_lines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/mobile-lines/mobile-lines.service */ 26349);



/***/ }),

/***/ 15610:
/*!********************************************************************************************!*\
  !*** ./libs/billing/shared/data-access/src/lib/entities/mobile-lines/mobile-line.model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 10272:
/*!**********************************************************************************************!*\
  !*** ./libs/billing/shared/data-access/src/lib/services/billing-shared-service.constants.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MESSAGE_GROUP: () => (/* binding */ MESSAGE_GROUP),
/* harmony export */   MOBILE_LINES_ENDPOINT: () => (/* binding */ MOBILE_LINES_ENDPOINT)
/* harmony export */ });
const MOBILE_LINES_ENDPOINT = '/public/api/mobile-line-selector-service/v1/mobile-lines';
const MESSAGE_GROUP = 'mobile-lines';

/***/ }),

/***/ 26349:
/*!***********************************************************************************************!*\
  !*** ./libs/billing/shared/data-access/src/lib/services/mobile-lines/mobile-lines.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileLinesService: () => (/* binding */ MobileLinesService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _billing_shared_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../billing-shared-service.constants */ 10272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MobileLinesService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  getMobileLines() {
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(_billing_shared_service_constants__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_GROUP, _billing_shared_service_constants__WEBPACK_IMPORTED_MODULE_1__.MOBILE_LINES_ENDPOINT));
  }
  static #_ = this.ɵfac = function MobileLinesService_Factory(t) {
    return new (t || MobileLinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MobileLinesService,
    factory: MobileLinesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_shared_data-access_src_index_ts-_b70a1.js.map