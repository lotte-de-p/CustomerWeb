(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-badge_entry_js"],{

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

/***/ 61892:
/*!****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-badge.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_badge: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);


const BADGE_SIZES = {
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.sm,
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.md,
  lg: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.lg
};
const BADGE_COLORS = {
  darkBrown: 'darkBrown',
  white: 'white',
  yellow: 'yellow',
  lemon: 'lemon',
  brightBlue: 'brightBlue',
  jeansBlue: 'jeansBlue',
  lila: 'lila',
  olivine: 'olivine',
  turquoise: 'turquoise',
  watermelon: 'watermelon'
};
const badgeBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;padding:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem);background-color:#009793;color:#ffffff;font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, Arial, sans-serif}:host([size=sm]){font-size:1.4rem;line-height:2rem}:host([size=md]){font-size:1.6rem;line-height:2.4rem}:host([size=lg]){font-size:2.4rem;line-height:3.2rem}";
const WinkBadgeBaseStyle0 = badgeBaseCss;
const badgeTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;padding:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-surface-highlight-7);color:var(--semantic-color-text-inverse-on-brand);font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, Arial, sans-serif}:host([size=sm]){font-size:1.4rem;line-height:2rem}:host([size=md]){font-size:1.6rem;line-height:2.4rem}:host([size=lg]){font-size:2.4rem;line-height:3.2rem}:host([background=dark-brown]){background-color:var(--semantic-color-background-surface-highlight-7);color:var(--semantic-color-text-inverse-on-brand)}:host([background=white]){background-color:var(--semantic-color-background-surface-highlight-8);color:var(--semantic-color-text-default)}:host([background=yellow]){background-color:var(--semantic-color-background-canvas-brand);color:var(--semantic-color-text-default)}:host([background=lemon]){background-color:var(--semantic-color-background-canvas-accent);color:var(--semantic-color-text-default)}:host([background=bright-blue]){background-color:var(--semantic-color-background-surface-highlight-1);color:var(--semantic-color-text-default)}:host([background=jeans-blue]){background-color:var(--semantic-color-background-surface-highlight-4);color:var(--semantic-color-text-default)}:host([background=lila]){background-color:var(--semantic-color-background-surface-highlight-2);color:var(--semantic-color-text-default)}:host([background=olivine]){background-color:var(--semantic-color-background-surface-highlight-6);color:var(--semantic-color-text-default)}:host([background=turquoise]){background-color:var(--semantic-color-background-surface-highlight-4);color:var(--semantic-color-text-default)}:host([background=watermelon]){background-color:var(--semantic-color-background-surface-highlight-3);color:var(--semantic-color-text-default)}";
const WinkBadgeTelenetStyle0 = badgeTelenetCss;
const Badge = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.text = '';
    this.size = BADGE_SIZES.md;
    this.background = BADGE_COLORS.darkBrown;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'd5c1a7fe17540563ef8fde972b7531e302193dd5'
    }, this.text);
  }
};
Badge.style = {
  base: WinkBadgeBaseStyle0,
  telenet: WinkBadgeTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-badge_entry_js.js.map