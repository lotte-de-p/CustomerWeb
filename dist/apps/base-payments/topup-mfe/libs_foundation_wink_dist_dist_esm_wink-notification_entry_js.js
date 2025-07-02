(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-notification_entry_js"],{

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

/***/ 39616:
/*!***********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/statuses.types-b98062d2.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ STATUS_VARIANTS)
/* harmony export */ });
const STATUS_VARIANTS = {
  information: 'information',
  success: 'success',
  error: 'error',
  warning: 'warning'
};


/***/ }),

/***/ 96858:
/*!***********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-notification.entry.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_notification: () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _statuses_types_b98062d2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statuses.types-b98062d2.js */ 39616);
/* harmony import */ var _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.types-2c69a93d.js */ 3619);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);




const NOTIFICATION_TYPES = {
  information: _statuses_types_b98062d2_js__WEBPACK_IMPORTED_MODULE_1__.S.information,
  success: _statuses_types_b98062d2_js__WEBPACK_IMPORTED_MODULE_1__.S.success,
  error: _statuses_types_b98062d2_js__WEBPACK_IMPORTED_MODULE_1__.S.error,
  warning: _statuses_types_b98062d2_js__WEBPACK_IMPORTED_MODULE_1__.S.warning
};
const notificationBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host *{font-size:1.6rem;box-sizing:border-box;margin:0}:host .notification{display:flex;justify-content:space-between;align-items:flex-start;gap:1.6rem;padding:1.6rem;width:100%;flex-wrap:nowrap}@media only screen and (max-width: calc(36em - 1px)){:host .notification.has-close-icon{flex-wrap:wrap}}@media only screen and (max-width: calc(36em - 1px)){:host .notification{gap:2.4rem;padding:2.4rem}}:host .notification .close-icon{cursor:pointer}@media only screen and (min-width: 36em){:host .notification .close-icon{order:1}}:host .notification-text{display:flex;flex-direction:column;width:100%;gap:1.6rem}:host .notification.information{background-color:rgba(35, 115, 230, 0.1607843137)}:host .notification.information :not(.close-icon){--wink-icon-color:inherit}:host .notification.success{background-color:rgba(0, 135, 90, 0.1607843137)}:host .notification.success :not(.close-icon){--wink-icon-color:inherit}:host .notification.error{background-color:rgba(222, 53, 11, 0.1607843137)}:host .notification.error :not(.close-icon){--wink-icon-color:inherit}:host .notification.warning{background-color:rgba(255, 149, 0, 0.1607843137)}:host .notification.warning :not(.close-icon){--wink-icon-color:inherit}";
const WinkNotificationBaseStyle0 = notificationBaseCss;
const notificationTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host *{font-size:1.6rem;box-sizing:border-box;margin:0}:host .notification{display:flex;justify-content:space-between;align-items:flex-start;gap:1.6rem;padding:1.6rem;width:100%;flex-wrap:nowrap}@media only screen and (max-width: calc(36em - 1px)){:host .notification.has-close-icon{flex-wrap:wrap}}@media only screen and (max-width: calc(36em - 1px)){:host .notification{gap:2.4rem;padding:2.4rem}}:host .notification .close-icon{cursor:pointer}@media only screen and (min-width: 36em){:host .notification .close-icon{order:1}}:host .notification-text{display:flex;flex-direction:column;width:100%;gap:1.6rem}:host .notification.information{background-color:rgba(35, 115, 230, 0.1607843137)}:host .notification.information :not(.close-icon){--wink-icon-color:#2373e6}:host .notification.success{background-color:rgba(0, 135, 90, 0.1607843137)}:host .notification.success :not(.close-icon){--wink-icon-color:#00875a}:host .notification.error{background-color:rgba(222, 53, 11, 0.1607843137)}:host .notification.error :not(.close-icon){--wink-icon-color:#de350b}:host .notification.warning{background-color:rgba(255, 149, 0, 0.1607843137)}:host .notification.warning :not(.close-icon){--wink-icon-color:#ff9500}";
const WinkNotificationTelenetStyle0 = notificationTelenetCss;
const Notification = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.appearance = NOTIFICATION_TYPES.information;
    this.hasCloseIcon = false;
    this.isNotificationVisible = true;
  }
  iconsNamesMap = new Map([['information', 'information-shape'], ['success', 'check-shape'], ['error', 'error-shape'], ['warning', 'alert-shape']]);
  closeNotification = () => {
    this.isNotificationVisible = false;
  };
  render() {
    return this.isNotificationVisible && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'f440c5eaf0642729ff78e250908e5c0492e253df',
      exportparts: `icon, icon-cross-small, icon-${this.iconsNamesMap.get(this.appearance)}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '68c6b2c237e7918b26ed0c7a8464119fa5b1083a',
      class: `notification ${this.appearance} ${this.hasCloseIcon ? 'has-close-icon' : ''}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '9647c838b41ac5ac6b469b7139cd5f540fb85e92',
      size: _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__.a.md,
      icon: this.iconsNamesMap.get(this.appearance)
    }), this.hasCloseIcon && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      class: "close-icon",
      appearance: "default",
      icon: "cross-small",
      size: _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__.a.md,
      onClick: this.closeNotification
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '5da60762854c2bf8575e91eace9591b1fb6b7378',
      class: "notification-text"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '315745107efac4e38114bab292cfb68f993ec7cf',
      name: "heading"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '5f1850a6ec9cdbd8b471c815c3bc3cd447f3d94a',
      name: "content"
    }))));
  }
};
Notification.style = {
  base: WinkNotificationBaseStyle0,
  telenet: WinkNotificationTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-notification_entry_js.js.map