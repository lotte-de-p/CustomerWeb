(self["webpackChunkdiscount_mfe"] = self["webpackChunkdiscount_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-avatar_entry_js"],{

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

/***/ 69689:
/*!*****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-avatar.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_avatar: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);


const AVATAR_SIZES = {
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.sm,
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.md,
  lg: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.lg,
  xl: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_1__.S.xl
};
const avatarBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;position:relative}:host img{object-fit:cover;object-position:center}:host([size=sm]) img{height:2.4rem;width:2.4rem}:host([size=md]) img{height:4rem;width:4rem}:host([size=lg]) img{height:4.8rem;width:4.8rem}:host([size=xl]) img{height:7.2rem;width:7.2rem}";
const WinkAvatarBaseStyle0 = avatarBaseCss;
const avatarTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block;position:relative}:host img{object-fit:cover;object-position:center}:host([size=sm]) img{height:2.4rem;width:2.4rem}:host([size=md]) img{height:4rem;width:4rem}:host([size=lg]) img{height:4.8rem;width:4.8rem}:host([size=xl]) img{height:7.2rem;width:7.2rem}:host img{mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}";
const WinkAvatarTelenetStyle0 = avatarTelenetCss;
const Avatar = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.src = undefined;
    this.size = AVATAR_SIZES.md;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '0696513c7ab31d5f5a435b02bea52d4e9824b87b'
    }, this.src?.length > 0 ? (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: this.src,
      alt: "avatar image"
    }) : (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      appearance: "secondary",
      icon: "user",
      size: this.size
    }));
  }
};
Avatar.style = {
  base: WinkAvatarBaseStyle0,
  telenet: WinkAvatarTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-avatar_entry_js.js.map