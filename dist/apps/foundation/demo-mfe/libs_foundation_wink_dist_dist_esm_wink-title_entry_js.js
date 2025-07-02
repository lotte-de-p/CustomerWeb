(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-title_entry_js"],{

/***/ 55836:
/*!****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-title.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);

const TITLE_SIZES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};
const TITLE_SPACINGS_Y = {
  default: 'default',
  top: 'top',
  bottom: 'bottom',
  none: 'none'
};
const titleBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}:host h1,:host .h1{font-size:56px;line-height:60px;margin-top:4.8rem;margin-bottom:2.4rem}:host h2,:host .h2{font-size:40px;line-height:48px;margin-top:2.4rem;margin-bottom:0.4rem}:host h3,:host .h3{font-size:32px;line-height:40px;margin-top:2.4rem;margin-bottom:0.4rem}:host h4,:host .h4{font-size:24px;line-height:32px;margin-top:2.4rem;margin-bottom:0.4rem}:host h5,:host .h5{font-size:20px;line-height:28px;margin-top:0.4rem;margin-bottom:2.4rem}:host h6,:host .h6{font-size:18px;line-height:28px;margin-top:1.6rem;margin-bottom:0}:host(.spacing-top) *{margin-bottom:0}:host(.spacing-bottom) *{margin-top:0}:host(.spacing-none) *{margin-top:0;margin-bottom:0}";
const WinkTitleBaseStyle0 = titleBaseCss;
const titleTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}:host h1,:host .h1{font-size:5.6rem;line-height:6rem;margin-top:4.8rem;margin-bottom:2.4rem}:host h2,:host .h2{font-size:4rem;line-height:4.8rem;margin-top:2.4rem;margin-bottom:0.4rem}:host h3,:host .h3{font-size:3.2rem;line-height:4rem;margin-top:2.4rem;margin-bottom:0.4rem}:host h4,:host .h4{font-size:2.4rem;line-height:3.2rem;margin-top:2.4rem;margin-bottom:0.4rem}:host h5,:host .h5{font-size:2rem;line-height:2.8rem;margin-top:2.4rem;margin-bottom:0.4rem}:host h6,:host .h6{font-size:1.8rem;line-height:2.8rem;margin-top:1.6rem;margin-bottom:0}:host(.spacing-top) *{margin-bottom:0}:host(.spacing-bottom) *{margin-top:0}:host(.spacing-none) *{margin-top:0;margin-bottom:0}";
const WinkTitleTelenetStyle0 = titleTelenetCss;
const Title = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.htmlTag = TITLE_SIZES.h2;
    this.noSeo = false;
    this.text = '';
    this.spacingY = TITLE_SPACINGS_Y.default;
    this._HtmlTag = this.htmlTag;
  }
  componentWillRender() {
    this._HtmlTag = this.noSeo ? 'div' : this.htmlTag;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'ad89fd8cc705021f289f820bba893b5fba3b7e30',
      class: this.spacingY !== 'default' ? `spacing-${this.spacingY}` : ''
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(this._HtmlTag, {
      key: '9b43bafd3c9d4b96c56473032137277edf5ccee8',
      class: {
        [this.htmlTag]: this.noSeo
      }
    }, this.text));
  }
};
Title.style = {
  base: WinkTitleBaseStyle0,
  telenet: WinkTitleTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-title_entry_js.js.map