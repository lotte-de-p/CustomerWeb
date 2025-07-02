(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_util_src_index_ts-_a3bd0"],{

/***/ 79416:
/*!**************************************************************!*\
  !*** ./libs/engagement/profile-management/util/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSrcInterceptorDirective: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ImageSrcInterceptorDirective)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 7228);


/***/ }),

/***/ 89856:
/*!********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/util/src/lib/directories/image-src-interceptor.directive.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSrcInterceptorDirective: () => (/* binding */ ImageSrcInterceptorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);




class ImageSrcInterceptorDirective {
  constructor(el, configService) {
    this.el = el;
    this.configService = configService;
    this.src = '';
  }
  ngOnChanges(changes) {
    const remoteHost = this.getRemoteHost();
    if (remoteHost) {
      let imagePath = changes['src'].currentValue;
      const indexOfAssetsFolder = imagePath.indexOf('/assets');
      if (indexOfAssetsFolder !== -1) {
        imagePath = imagePath.slice(indexOfAssetsFolder);
      }
      this.el.nativeElement.src = `${remoteHost}${imagePath}`;
    }
  }
  getRemoteHost() {
    const remoteHostConfig = this.configService.getRemoteHostConfig(this.moduleId);
    return remoteHostConfig?.remoteHost || '';
  }
  static #_ = this.ɵfac = function ImageSrcInterceptorDirective_Factory(t) {
    return new (t || ImageSrcInterceptorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ImageSrcInterceptorDirective,
    selectors: [["", "tgProfileManagementImageSrcInterceptor", ""]],
    inputs: {
      moduleId: "moduleId",
      src: "src"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 7228:
/*!******************************************************************!*\
  !*** ./libs/engagement/profile-management/util/src/lib/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSrcInterceptorDirective: () => (/* reexport safe */ _directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_0__.ImageSrcInterceptorDirective)
/* harmony export */ });
/* harmony import */ var _directories_image_src_interceptor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directories/image-src-interceptor.directive */ 89856);


/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_util_src_index_ts-_a3bd0.js.map