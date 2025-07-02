(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-navigation-list_entry_js"],{

/***/ 43179:
/*!**************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/utils-525e9b74.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ UUId)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
const UUId = () => v4();


/***/ }),

/***/ 4517:
/*!**************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-navigation-list.entry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_navigation_list: () => (/* binding */ NavigationList)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);


const navigationListBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListBaseStyle0 = navigationListBaseCss;
const navigationListTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block;margin-bottom:calc(var(--semantic-spacing-lg) * 1rem)}:host .navigation-list--title{color:var(--semantic-color-text-subtlest);font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host ul wink-navigation-list-item{font-size:1.8rem;line-height:2.8rem;text-decoration:none}@media only screen and (max-width: calc(48.0625em - 1px)){:host ul wink-navigation-list-item{display:block;padding:calc(var(--semantic-spacing-vertical-default) * 1rem) 0}}:host([has-bold-links]) wink-navigation-list-item,:host([has-bold-links=true]) wink-navigation-list-item{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:700}";
const WinkNavigationListTelenetStyle0 = navigationListTelenetCss;
const NavigationList = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.listTitle = '';
    this.hasBoldLinks = false;
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  render() {
    const allLinkChilds = Array.from(this.host.children).filter(node => {
      return node.nodeName.toLocaleLowerCase() === 'wink-navigation-list-item';
    });
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.listTitle && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-paragraph", {
      appearance: "caption",
      size: "bold",
      class: "navigation-list--title"
    }, this.listTitle), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: "navigation-list--list"
    }, allLinkChilds.map(child => (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
      key: (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_1__.U)(),
      innerHTML: child.outerHTML
    }))));
  }
};
NavigationList.style = {
  base: WinkNavigationListBaseStyle0,
  telenet: WinkNavigationListTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-navigation-list_entry_js.js.map