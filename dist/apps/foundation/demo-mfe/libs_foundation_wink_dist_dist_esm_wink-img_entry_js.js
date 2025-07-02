(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-img_entry_js"],{

/***/ 71717:
/*!**************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/breakpoints.types-ac47967d.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BREAKPOINTS)
/* harmony export */ });
const BREAKPOINTS = {
  mobile: '(max-width: 576px)',
  tablet: '(max-width: 769px)'
};


/***/ }),

/***/ 34779:
/*!**************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-img.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_img: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _breakpoints_types_ac47967d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints.types-ac47967d.js */ 71717);


const LOADING_TYPES = {
  lazy: 'lazy',
  eager: 'eager'
};
const imageBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgBaseStyle0 = imageBaseCss;
const imageTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host,:host picture,:host img{display:block;max-width:100%}";
const WinkImgTelenetStyle0 = imageTelenetCss;
const Image = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.srcDesktop = '';
    this.srcTablet = undefined;
    this.srcMobile = undefined;
    this.alt = undefined;
    this.loading = LOADING_TYPES.lazy;
  }
  render() {
    const altText = this.srcDesktop?.length > 0 && this.alt ? this.alt : `Image of ${window.location.host}`;
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'fe639502fea474f48d8d5d20d1225f54b01274fe'
    }, this.srcDesktop ? (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("picture", null, this.srcMobile && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      srcSet: this.srcMobile,
      media: _breakpoints_types_ac47967d_js__WEBPACK_IMPORTED_MODULE_1__.B.mobile
    }), this.srcTablet && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      srcSet: this.srcTablet,
      media: _breakpoints_types_ac47967d_js__WEBPACK_IMPORTED_MODULE_1__.B.tablet
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: this.srcDesktop,
      alt: altText,
      loading: this.loading
    })) : (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Please set src "));
  }
};
Image.style = {
  base: WinkImgBaseStyle0,
  telenet: WinkImgTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-img_entry_js.js.map