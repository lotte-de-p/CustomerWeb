(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-toast_entry_js"],{

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

/***/ 79772:
/*!**********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/targets.types-ef2f173a.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TARGETS)
/* harmony export */ });
const TARGETS = {
  self: '_self',
  blank: '_blank',
  parent: '_parent',
  top: '_top',
  unfencedTop: '_unfencedTop'
};


/***/ }),

/***/ 86993:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/toast.types-6bc98f13.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TOAST_TYPES)
/* harmony export */ });
const TOAST_TYPES = {
  negative: 'negative',
  positive: 'positive',
  actionable: 'actionable',
  feedback: 'feedback'
};


/***/ }),

/***/ 75827:
/*!****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-toast.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_toast: () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.types-6bc98f13.js */ 86993);
/* harmony import */ var _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./targets.types-ef2f173a.js */ 79772);
/* harmony import */ var _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.types-2c69a93d.js */ 3619);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);





const toastBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--semantic-duration-very-fast:100ms;--semantic-duration-fast:200ms;--semantic-duration-medium:300ms;--semantic-duration-slow:400ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1);--semantic-easing-productive-ease-in-out:cubic-bezier(0.45, 0, 0.55, 1);font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.8rem;pointer-events:none;overflow:hidden;display:flex;align-items:center;justify-content:flex-start;background-color:var(--semantic-color-background-canvas-default);color:var(--semantic-color-text-default);animation-name:toastFadeOut;animation-duration:var(--semantic-duration-slow);animation-timing-function:var(--semantic-easing-productive-ease-in-out);animation-fill-mode:forwards;animation-iteration-count:1;height:-moz-fit-content;height:fit-content}@media only screen and (min-width: 36em){:host{width:-moz-fit-content;width:fit-content;justify-content:center}}:host .toast-icon{margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host .toast-icon-positive{--wink-icon-color:var(--semantic-color-icon-succes)}:host .toast-icon-negative{--wink-icon-color:var(--semantic-color-icon-error)}:host .toast-text{margin:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem) 0}:host .toast-link{--wink-link-color--default:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-default);--wink-link-color--hover:var(--semantic-color-text-default);margin:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) 0 0}:host .toast-close{--wink-icon-color:var(--semantic-color-icon);padding-left:calc(var(--semantic-spacing-md) * 1rem);border-left:0.1rem solid var(--semantic-color-border-button-default);margin-left:auto}@media only screen and (min-width: 48.0625em){:host .toast-close{margin-left:0}}:host([is-open]),:host([is-open=true]){animation-name:toastFadeIn;pointer-events:auto}@keyframes toastFadeIn{from{opacity:0;padding:0 calc(var(--semantic-spacing-md) * 1rem)}to{opacity:1;padding:calc(var(--semantic-spacing-md) * 1rem)}}@keyframes toastFadeOut{0%{opacity:1;max-height:7rem;padding:calc(var(--semantic-spacing-md) * 1rem);margin-top:0}70%{opacity:0}100%{opacity:0;max-height:0;padding:0 calc(var(--semantic-spacing-md) * 1rem);margin-top:-1.6rem;display:none}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkToastBaseStyle0 = toastBaseCss;
const toastTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--semantic-duration-very-fast:100ms;--semantic-duration-fast:200ms;--semantic-duration-medium:300ms;--semantic-duration-slow:400ms;--semantic-duration-very-slow:500ms;--semantic-easing-productive-ease-in:cubic-bezier(0.11, 0, 0.5, 0);--semantic-easing-productive-ease-out:cubic-bezier(0.5, 1, 0.89, 1);--semantic-easing-productive-ease-in-out:cubic-bezier(0.45, 0, 0.55, 1);font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.8rem;pointer-events:none;overflow:hidden;display:flex;align-items:center;justify-content:flex-start;background-color:var(--semantic-color-background-canvas-default);color:var(--semantic-color-text-default);animation-name:toastFadeOut;animation-duration:var(--semantic-duration-slow);animation-timing-function:var(--semantic-easing-productive-ease-in-out);animation-fill-mode:forwards;animation-iteration-count:1;height:-moz-fit-content;height:fit-content}@media only screen and (min-width: 36em){:host{width:-moz-fit-content;width:fit-content;justify-content:center}}:host .toast-icon{margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host .toast-icon-positive{--wink-icon-color:var(--semantic-color-icon-succes)}:host .toast-icon-negative{--wink-icon-color:var(--semantic-color-icon-error)}:host .toast-text{margin:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem) 0}:host .toast-link{--wink-link-color--default:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-default);--wink-link-color--hover:var(--semantic-color-text-default);margin:calc(var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-md) * 1rem) 0 0}:host .toast-close{--wink-icon-color:var(--semantic-color-icon);padding-left:calc(var(--semantic-spacing-md) * 1rem);border-left:0.1rem solid var(--semantic-color-border-button-default);margin-left:auto}@media only screen and (min-width: 48.0625em){:host .toast-close{margin-left:0}}:host([is-open]),:host([is-open=true]){animation-name:toastFadeIn;pointer-events:auto}@keyframes toastFadeIn{from{opacity:0;padding:0 calc(var(--semantic-spacing-md) * 1rem)}to{opacity:1;padding:calc(var(--semantic-spacing-md) * 1rem)}}@keyframes toastFadeOut{0%{opacity:1;max-height:7rem;padding:calc(var(--semantic-spacing-md) * 1rem);margin-top:0}70%{opacity:0}100%{opacity:0;max-height:0;padding:0 calc(var(--semantic-spacing-md) * 1rem);margin-top:-1.6rem;display:none}}@media (prefers-reduced-motion){:host{animation-duration:0}}";
const WinkToastTelenetStyle0 = toastTelenetCss;
const Toast = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.appearance = _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.actionable;
    this.text = '';
    this.linkText = 'Open Link';
    this.href = '';
    this.target = _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_2__.T.self;
    this.duration = 6000;
    this.isOpen = false;
    this.theme = 'telenet-light-theme';
    this.currentTheme = 'telenet-light-theme';
  }
  timer = null;
  iconsNamesMap = new Map([[_toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.negative, 'cross-circle-filled'], [_toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.positive, 'check-shape-filled']]);
  watchOpenPropHandler(newValue, oldValue) {
    if (newValue && !oldValue) {
      this.closeToastAfterTimeout();
    }
  }
  watchThemePropHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.changeTheme(newValue);
    }
  }
  handleKeyDown(ev) {
    if (ev.key === 'Escape') {
      this.closeToast();
    }
  }
  componentDidLoad() {
    const currentTheme = localStorage.getItem('currentTheme') || 'telenet-light';
    this.changeTheme(currentTheme + '-theme');
    this.closeToastAfterTimeout();
  }
  changeTheme(newValue) {
    this.theme = newValue.includes('dark') ? newValue.replace('dark', 'light') : newValue.replace('light', 'dark');
  }
  closeToast() {
    this.isOpen = false;
  }
  closeToastAfterTimeout() {
    if (this.appearance !== _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.actionable && this.duration && this.duration > 0) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.closeToast();
      }, Number(this.duration));
    }
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '4353ed175ce789298a19e7c9037ea92719db8d47',
      theme: this.theme,
      "aria-hidden": this.isOpen ? 'false' : 'true',
      role: "alert"
    }, (this.appearance === _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.positive || this.appearance === _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.negative) && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      class: `toast-icon toast-icon-${this.appearance}`,
      size: _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_3__.a.md,
      icon: this.iconsNamesMap.get(this.appearance)
    }), this.text && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: "toast-text"
    }, this.text), this.appearance === _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_1__.T.actionable && this.href && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-link", {
      appearance: "default",
      icon: "",
      size: "inherit",
      "is-disabled": "false",
      class: "toast-link",
      target: this.target,
      href: this.href
    }, this.linkText), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-button", {
      key: 'dae3eea4b47c3b59e37af642c36fbe3179a132a6',
      element: "button",
      type: "button",
      appearance: "tertiary",
      size: "sm",
      width: "none",
      status: "none",
      icon: "cross",
      "icon-position": "center",
      exportparts: "icon, icon-cross",
      class: "hydrated toast-close",
      "icon-button-aria-label": "close toast",
      onClick: this.closeToast.bind(this)
    }));
  }
  static get watchers() {
    return {
      "isOpen": ["watchOpenPropHandler"],
      "currentTheme": ["watchThemePropHandler"]
    };
  }
};
Toast.style = {
  base: WinkToastBaseStyle0,
  telenet: WinkToastTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-toast_entry_js.js.map