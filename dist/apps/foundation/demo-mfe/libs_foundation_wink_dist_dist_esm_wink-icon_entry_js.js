(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-icon_entry_js"],{

/***/ 3619:
/*!*******************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/icon.types-2c69a93d.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ICON_TYPES),
/* harmony export */   a: () => (/* binding */ ICON_SIZES),
/* harmony export */   b: () => (/* binding */ ICON_TYPES_BASIS)
/* harmony export */ });
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);

const ICON_TYPES_BASIS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};
const ICON_TYPES = {
  ...ICON_TYPES_BASIS,
  transparent: 'transparent'
};
const ICON_SIZES = {
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.sm,
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.md,
  lg: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.lg,
  xl: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.xl
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

/***/ 74218:
/*!***************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-icon.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.types-2c69a93d.js */ 3619);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);



const iconBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-flex;place-content:center;width:-moz-fit-content;width:fit-content;aspect-ratio:1/1;font-size:1rem}:host i{display:inline-block;text-align:center;font-size:2.4rem;color:var(--wink-icon-color, var(--semantic-color-icon-default))}:host i:before{display:block}:host i.primary{color:var(--wink-icon-color, var(--semantic-color-icon-on-brand));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-primary))}:host i.secondary{color:var(--wink-icon-color, var(--semantic-color-icon-default));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-secondary))}:host i.transparent{color:var(--wink-icon-color, var(--semantic-color-icon-on-brand));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-transparant))}:host i.sm{font-size:calc(var(--semantic-icon-sm) * 1rem);width:calc(var(--semantic-icon-sm) * 1rem)}:host i.md{font-size:calc(var(--semantic-icon-md) * 1rem);width:calc(var(--semantic-icon-md) * 1rem)}:host i.lg{font-size:calc(var(--semantic-icon-lg) * 1rem);width:calc(var(--semantic-icon-lg) * 1rem)}:host i.xl{font-size:calc(var(--semantic-icon-xl) * 1rem);width:calc(var(--semantic-icon-xl) * 1rem)}:host i.backdrop{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}:host i.backdrop.sm{padding:calc(var(--semantic-spacing-3xs) * 1rem)}:host i.backdrop.md{padding:calc(var(--semantic-spacing-xs) * 1rem)}:host i.backdrop.lg{padding:calc(var(--semantic-spacing-xs) * 1rem)}:host i.backdrop.xl{padding:calc(var(--semantic-spacing-xs) * 1rem)}@media only screen and (min-width: 36em){:host i.backdrop.xl{padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkIconBaseStyle0 = iconBaseCss;
const iconTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-flex;place-content:center;width:-moz-fit-content;width:fit-content;aspect-ratio:1/1;font-size:1rem}:host i{display:inline-block;text-align:center;font-size:2.4rem;color:var(--wink-icon-color, var(--semantic-color-icon-default))}:host i:before{display:block}:host i.primary{color:var(--wink-icon-color, var(--semantic-color-icon-on-brand));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-primary))}:host i.secondary{color:var(--wink-icon-color, var(--semantic-color-icon-default));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-secondary))}:host i.transparent{color:var(--wink-icon-color, var(--semantic-color-icon-on-brand));background-color:var(--wink-icon-bg-color, var(--semantic-color-background-icon-transparant))}:host i.sm{font-size:calc(var(--semantic-icon-sm) * 1rem);width:calc(var(--semantic-icon-sm) * 1rem)}:host i.md{font-size:calc(var(--semantic-icon-md) * 1rem);width:calc(var(--semantic-icon-md) * 1rem)}:host i.lg{font-size:calc(var(--semantic-icon-lg) * 1rem);width:calc(var(--semantic-icon-lg) * 1rem)}:host i.xl{font-size:calc(var(--semantic-icon-xl) * 1rem);width:calc(var(--semantic-icon-xl) * 1rem)}:host i.backdrop{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}:host i.backdrop.sm{padding:calc(var(--semantic-spacing-3xs) * 1rem)}:host i.backdrop.md{padding:calc(var(--semantic-spacing-xs) * 1rem)}:host i.backdrop.lg{padding:calc(var(--semantic-spacing-xs) * 1rem)}:host i.backdrop.xl{padding:calc(var(--semantic-spacing-xs) * 1rem)}@media only screen and (min-width: 36em){:host i.backdrop.xl{padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkIconTelenetStyle0 = iconTelenetCss;
const Icon = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.appearance = _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__.I.default;
    this.size = _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__.a.md;
    this.icon = 'bell';
    this.hasBackdrop = false;
  }
  componentWillRender() {
    this.hasBackdrop = this.appearance !== 'default' && Object.values(_icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__.I).includes(this.appearance);
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'bd4199183f03ccaca1e483e179f0dae4d5c11b6f',
      exportparts: `icon, icon-${this.icon}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
      key: 'a42f47cc73e52a702175c1f62efd1ce44483b4f6',
      class: {
        [this.size]: true,
        [this.appearance]: true,
        ['backdrop']: this.hasBackdrop
      },
      part: `icon icon-${this.icon}`,
      "aria-hidden": "true"
    }));
  }
};
Icon.style = {
  base: WinkIconBaseStyle0,
  telenet: WinkIconTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-icon_entry_js.js.map