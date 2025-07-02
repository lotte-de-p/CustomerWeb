(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-spacer_entry_js"],{

/***/ 2960:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/sizes.types-9eb79f88.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SIZES)
/* harmony export */ });
const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '3xs': '3xs',
  '2xs': '2xs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  none: 'none',
  full: 'full'
};


/***/ }),

/***/ 64535:
/*!*****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-spacer.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_spacer: () => (/* binding */ Spacer)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);


const spacerBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerBaseStyle0 = spacerBaseCss;
const spacerTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .height-3xs{height:calc(var(--semantic-spacing-3xs) * 1rem)}:host .height-2xs{height:calc(var(--semantic-spacing-2xs) * 1rem)}:host .height-xs{height:calc(var(--semantic-spacing-xs) * 1rem)}:host .height-sm{height:calc(var(--semantic-spacing-sm) * 1rem)}:host .height-md{height:calc(var(--semantic-spacing-md) * 1rem)}:host .height-lg{height:calc(var(--semantic-spacing-lg) * 1rem)}:host .height-xl{height:calc(var(--semantic-spacing-xl) * 1rem)}:host .height-none{height:calc(var(--semantic-spacing-none) * 1rem)}";
const WinkSpacerTelenetStyle0 = spacerTelenetCss;
const Spacer = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.size = _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.md;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '0b4aedd2307b6ff895b6d090bbc6e75e8508c40f'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '912beed0ede283947b2305990f2eed3768e1333b',
      class: `height-${this.size}`
    }));
  }
};
Spacer.style = {
  base: WinkSpacerBaseStyle0,
  telenet: WinkSpacerTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-spacer_entry_js.js.map