(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-toaster_entry_js"],{

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

/***/ 36598:
/*!******************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-toaster.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.types-6bc98f13.js */ 86993);



const toasterBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterBaseStyle0 = toasterBaseCss;
const toasterTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}wink-toaster{position:fixed;z-index:99999;right:0;bottom:0;width:100%;height:auto;display:block;box-sizing:border-box;display:flex;justify-content:flex-end;flex-direction:column;pointer-events:none;transition:all 200ms ease-in-out;gap:calc(var(--semantic-spacing-3xs) * 1rem)}@media only screen and (min-width: 36em){wink-toaster{align-items:flex-end;gap:calc(var(--semantic-spacing-md) * 1rem);padding:calc(var(--semantic-spacing-md) * 1rem)}}";
const WinkToasterTelenetStyle0 = toasterTelenetCss;
const Toaster = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.toasts = [];
  }
  winkCreateToast(toast) {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.toasts = [..._this.toasts, toast];
    })();
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      key: 'db735387e621d6a7343648cb3ec2fa235b993b87',
      "aria-live": "polite",
      "aria-atomic": "true"
    }, this.toasts.map(toast => (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-toast", {
      appearance: toast.appearance || _toast_types_6bc98f13_js__WEBPACK_IMPORTED_MODULE_2__.T.actionable,
      text: toast.text || '',
      duration: toast.duration || 6000,
      href: toast.href || '#',
      target: toast.target || '_self',
      linkText: toast.linkText || 'link',
      "is-open": true
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '5d2596336bd40af5c4ab0b97b572c9162e034881'
    }));
  }
};
Toaster.style = {
  base: WinkToasterBaseStyle0,
  telenet: WinkToasterTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-toaster_entry_js.js.map