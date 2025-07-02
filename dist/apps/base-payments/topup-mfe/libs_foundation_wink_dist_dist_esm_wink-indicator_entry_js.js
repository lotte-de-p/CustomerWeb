(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-indicator_entry_js"],{

/***/ 19980:
/*!*********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/button.types-205905f1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BUTTON_SIZES),
/* harmony export */   T: () => (/* binding */ TYPES),
/* harmony export */   a: () => (/* binding */ BUTTON_ELEMENTS),
/* harmony export */   b: () => (/* binding */ BUTTON_APPEARANCES),
/* harmony export */   c: () => (/* binding */ BUTTON_WIDTHS),
/* harmony export */   d: () => (/* binding */ BUTTON_STATUSES),
/* harmony export */   e: () => (/* binding */ BUTTON_ICON_POSITIONS)
/* harmony export */ });
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);

const BUTTON_APPEARANCES = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};
const TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
  file: 'file'
};
const BUTTON_ELEMENTS = {
  button: 'button',
  input: 'input',
  a: 'a'
};
const BUTTON_SIZES = {
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.md,
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.sm
};
const BUTTON_WIDTHS = {
  none: 'none',
  full: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.full
};
const BUTTON_STATUSES = {
  none: 'none',
  disable: 'disable',
  loading: 'loading',
  skeleton: 'skeleton'
};
const BUTTON_ICON_POSITIONS = {
  left: 'left',
  right: 'right'
};


/***/ }),

/***/ 93918:
/*!*************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/directions.types-2b66964e.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ INDICATOR_DIRECTIONS)
/* harmony export */ });
const INDICATOR_DIRECTIONS = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down'
};


/***/ }),

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

/***/ 46723:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-indicator.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_indicator: () => (/* binding */ Indicator)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _button_types_205905f1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.types-205905f1.js */ 19980);
/* harmony import */ var _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directions.types-2b66964e.js */ 93918);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);




const indicatorBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block}:host .wrapper{filter:drop-shadow(0rem 0.4rem 0.4rem var(--semantic-color-background-surface-bold-pressed))}:host .wrapper .indicator{background-color:var(--semantic-color-text-inverse-on-brand);padding:calc(var(--semantic-spacing-3xs) * 1rem);position:relative;display:flex;flex-direction:column;align-items:center;transition:transform 0.1s ease-in-out}:host .wrapper .indicator:hover{transform:scale(1.1)}:host .wrapper .indicator wink-icon{--wink-icon-color:var(--semantic-color-icon-on-brand);height:auto}";
const WinkIndicatorBaseStyle0 = indicatorBaseCss;
const indicatorTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host img{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}:host{display:block}:host .wrapper{filter:drop-shadow(0rem 0.4rem 0.4rem var(--semantic-color-background-surface-bold-pressed))}:host .wrapper .indicator{background-color:var(--semantic-color-text-inverse-on-brand);padding:calc(var(--semantic-spacing-3xs) * 1rem);position:relative;display:flex;flex-direction:column;align-items:center;transition:transform 0.1s ease-in-out}:host .wrapper .indicator:hover{transform:scale(1.1)}:host .wrapper .indicator wink-icon{--wink-icon-color:var(--semantic-color-icon-on-brand);height:auto}:host .indicator{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}";
const WinkIndicatorTelenetStyle0 = indicatorTelenetCss;
const Indicator = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.direction = _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__.I.right;
    this.size = _button_types_205905f1_js__WEBPACK_IMPORTED_MODULE_1__.B.sm;
  }
  iconsNamesMap = new Map([[_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__.I.left, 'chevron-left-small'], [_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__.I.right, 'chevron-right-small'], [_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__.I.up, 'chevron-up-small'], [_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_2__.I.down, 'chevron-down-small']]);
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '0bcc73c74dde8f3cfa2fb6baa8e25fa477e4f333'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '45252ca01701b39273447bd566532dd751708c98',
      class: "wrapper"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: 'ee32f1bce19a43e70632b20179d95b08ae60d997',
      class: "indicator"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '5d832aa22af22411e1f171d8c9d1f4c5bfc06654',
      appearance: "default",
      size: this.size,
      icon: this.iconsNamesMap.get(this.direction)
    }))));
  }
};
Indicator.style = {
  base: WinkIndicatorBaseStyle0,
  telenet: WinkIndicatorTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-indicator_entry_js.js.map