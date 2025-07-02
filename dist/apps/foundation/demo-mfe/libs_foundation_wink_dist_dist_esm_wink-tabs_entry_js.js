(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-tabs_entry_js"],{

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

/***/ 47532:
/*!***************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-tabs.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_tabs: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);
/* harmony import */ var _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directions.types-2b66964e.js */ 93918);




const TAB_TYPES = {
  container: 'container',
  inline: 'inline'
};
const tabsBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .tabs{color:var(--semantic-color-text-default)}:host .tabs *{box-sizing:border-box}:host .tabs .tab-header{position:relative;display:flex;width:100%}:host .tabs .tab-header .tab-list{min-width:100%;display:inline-flex}:host .tabs .tab-header .tab-list .tab,:host .tabs .tab-header .tab-list .tab:focus,:host .tabs .tab-header .tab-list .tab:hover{all:unset;cursor:pointer;flex-grow:1;text-transform:capitalize;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem);outline-offset:-0.3rem;white-space:nowrap}:host .tabs .tab-header .tab-list .tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:first-of-type{padding-left:0}:host .tabs .tab-header .tab-list .tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:last-of-type{padding-right:0}:host .tabs .tab-header .tab-list .tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus .tab-content,:host .tabs .tab-header .tab-list .tab:hover .tab-content{height:100%;background-color:var(--semantic-color-background-surface-bold-default);padding:calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);font-size:1.4rem}:host .tabs .tab-header .tab-list .tab .tab-content p,:host .tabs .tab-header .tab-list .tab:focus .tab-content p,:host .tabs .tab-header .tab-list .tab:hover .tab-content p{margin:0}:host .tabs .tab-header .tab-list .tab .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:focus .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:hover .tab-content .tab-title{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:1.8rem;line-height:2.8rem}:host .tabs .tab-header .tab-list .tab:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:focus:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:hover:has(+.is-active-tab){padding-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{background-color:var(--semantic-color-background-tab-default);position:relative;border-top:calc(var(--semantic-border-lg) * 1rem) solid var(--semantic-color-border-selected);padding:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 36em){:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{padding:calc(var(--semantic-spacing-lg) * 1rem - var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}}:host .tabs .tab-header .tab-list .tab.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content{background-color:unset;padding:unset}:host .tabs .tab-header .tab-list .tab.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab+.tab{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible,:host .tabs .tab-header .tab-list .tab:focus:focus-visible,:host .tabs .tab-header .tab-list .tab:hover:focus-visible{isolation:isolate}:host .tabs .tab-header .tab-list .tab:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:focus:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:hover:focus-visible:not(.is-active-tab) .tab-content{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:first-of-type{margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:last-of-type{margin-right:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:hover .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover .tab-content{background-color:var(--semantic-color-background-surface-bold-hovered)}:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover.is-active-tab .tab-content{background-color:unset}:host .tabs .tab-header .tab-list .tab:disabled,:host .tabs .tab-header .tab-list .tab:focus:disabled,:host .tabs .tab-header .tab-list .tab:hover:disabled{cursor:not-allowed}:host .tabs .tab-header .tab-list .tab:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:focus:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:hover:disabled .tab-content{opacity:calc(var(--semantic-opacity-disabled) * 0.1)}:host .tabs .tab-header.is-scrollable{position:relative;z-index:1}:host .tabs .tab-header.is-scrollable .tab-list{overflow-x:auto;overflow-y:visible;padding:0.6rem 0;margin-bottom:-0.6rem;-ms-overflow-style:none;scrollbar-width:none}:host .tabs .tab-header.is-scrollable .tab-list::-webkit-scrollbar{display:none}:host .tabs .tab-header.is-scrollable .tab-list .tab{min-width:-moz-fit-content;min-width:fit-content}:host .tabs .tab-header .scroll-button{position:absolute;top:0;bottom:0;height:-moz-fit-content;height:fit-content;margin:auto 0}:host .tabs .tab-header .scroll-button-left{left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .scroll-button-right{right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs [role=tabpanel]{background-color:var(--semantic-color-background-tab-default);padding:calc(var(--semantic-spacing-lg) * 1rem);width:100%;overflow:auto}:host .tabs [role=tabpanel] *{font-size:1rem}:host .tabs [role=tabpanel].is-hidden{display:none}:host .tabs [role=tabpanel]:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;outline-offset:-0.2rem}:host .tabs-inline .tab-header .tab-list .tab,:host .tabs-inline .tab-header .tab-list .tab:focus,:host .tabs-inline .tab-header .tab-list .tab:hover{border-bottom:0.1rem solid var(--semantic-color-border-default)}:host .tabs-inline .tab-header .tab-list .tab.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:hover.is-active-tab{border:0.1rem solid var(--semantic-color-border-default);border-top:0.3rem solid var(--semantic-color-border-selected);border-bottom:0.1rem solid var(--semantic-color-background-tab-default)}";
const WinkTabsBaseStyle0 = tabsBaseCss;
const tabsTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:contents}:host .tabs{color:var(--semantic-color-text-default)}:host .tabs *{box-sizing:border-box}:host .tabs .tab-header{position:relative;display:flex;width:100%}:host .tabs .tab-header .tab-list{min-width:100%;display:inline-flex}:host .tabs .tab-header .tab-list .tab,:host .tabs .tab-header .tab-list .tab:focus,:host .tabs .tab-header .tab-list .tab:hover{all:unset;cursor:pointer;flex-grow:1;text-transform:capitalize;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-3xs) * 1rem);outline-offset:-0.3rem;white-space:nowrap}:host .tabs .tab-header .tab-list .tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:first-of-type{padding-left:0}:host .tabs .tab-header .tab-list .tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:last-of-type{padding-right:0}:host .tabs .tab-header .tab-list .tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus .tab-content,:host .tabs .tab-header .tab-list .tab:hover .tab-content{height:100%;background-color:var(--semantic-color-background-surface-bold-default);padding:calc(var(--semantic-spacing-md) * 1rem) calc(var(--semantic-spacing-lg) * 1rem);font-size:1.4rem}:host .tabs .tab-header .tab-list .tab .tab-content p,:host .tabs .tab-header .tab-list .tab:focus .tab-content p,:host .tabs .tab-header .tab-list .tab:hover .tab-content p{margin:0}:host .tabs .tab-header .tab-list .tab .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:focus .tab-content .tab-title,:host .tabs .tab-header .tab-list .tab:hover .tab-content .tab-title{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:1.8rem;line-height:2.8rem}:host .tabs .tab-header .tab-list .tab:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:focus:has(+.is-active-tab),:host .tabs .tab-header .tab-list .tab:hover:has(+.is-active-tab){padding-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{background-color:var(--semantic-color-background-tab-default);position:relative;border-top:calc(var(--semantic-border-lg) * 1rem) solid var(--semantic-color-border-selected);padding:calc(var(--semantic-spacing-lg) * 1rem + var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}@media only screen and (min-width: 36em){:host .tabs .tab-header .tab-list .tab.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab{padding:calc(var(--semantic-spacing-lg) * 1rem - var(--semantic-spacing-3xs) * 1rem) calc(var(--semantic-spacing-lg) * 1rem) calc(var(--semantic-spacing-lg) * 1rem)}}:host .tabs .tab-header .tab-list .tab.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content{background-color:unset;padding:unset}:host .tabs .tab-header .tab-list .tab.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:focus.is-active-tab+.tab,:host .tabs .tab-header .tab-list .tab:hover.is-active-tab+.tab{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible,:host .tabs .tab-header .tab-list .tab:focus:focus-visible,:host .tabs .tab-header .tab-list .tab:hover:focus-visible{isolation:isolate}:host .tabs .tab-header .tab-list .tab:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:focus:focus-visible:not(.is-active-tab) .tab-content,:host .tabs .tab-header .tab-list .tab:hover:focus-visible:not(.is-active-tab) .tab-content{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:first-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:first-of-type{margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:focus:focus-visible.is-active-tab:last-of-type,:host .tabs .tab-header .tab-list .tab:hover:focus-visible.is-active-tab:last-of-type{margin-right:calc(var(--semantic-spacing-3xs) * 1rem)}:host .tabs .tab-header .tab-list .tab:hover .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover .tab-content{background-color:var(--semantic-color-background-surface-bold-hovered)}:host .tabs .tab-header .tab-list .tab:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:focus:hover.is-active-tab .tab-content,:host .tabs .tab-header .tab-list .tab:hover:hover.is-active-tab .tab-content{background-color:unset}:host .tabs .tab-header .tab-list .tab:disabled,:host .tabs .tab-header .tab-list .tab:focus:disabled,:host .tabs .tab-header .tab-list .tab:hover:disabled{cursor:not-allowed}:host .tabs .tab-header .tab-list .tab:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:focus:disabled .tab-content,:host .tabs .tab-header .tab-list .tab:hover:disabled .tab-content{opacity:calc(var(--semantic-opacity-disabled) * 0.1)}:host .tabs .tab-header.is-scrollable{position:relative;z-index:1}:host .tabs .tab-header.is-scrollable .tab-list{overflow-x:auto;overflow-y:visible;padding:0.6rem 0;margin-bottom:-0.6rem;-ms-overflow-style:none;scrollbar-width:none}:host .tabs .tab-header.is-scrollable .tab-list::-webkit-scrollbar{display:none}:host .tabs .tab-header.is-scrollable .tab-list .tab{min-width:-moz-fit-content;min-width:fit-content}:host .tabs .tab-header .scroll-button{position:absolute;top:0;bottom:0;height:-moz-fit-content;height:fit-content;margin:auto 0}:host .tabs .tab-header .scroll-button-left{left:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs .tab-header .scroll-button-right{right:calc(var(--semantic-spacing-xs) * 1rem)}:host .tabs [role=tabpanel]{background-color:var(--semantic-color-background-tab-default);padding:calc(var(--semantic-spacing-lg) * 1rem);width:100%;overflow:auto}:host .tabs [role=tabpanel] *{font-size:1.6rem}:host .tabs [role=tabpanel].is-hidden{display:none}:host .tabs [role=tabpanel]:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;outline-offset:-0.2rem}:host .tabs-inline .tab-header .tab-list .tab,:host .tabs-inline .tab-header .tab-list .tab:focus,:host .tabs-inline .tab-header .tab-list .tab:hover{border-bottom:0.1rem solid var(--semantic-color-border-default)}:host .tabs-inline .tab-header .tab-list .tab.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:focus.is-active-tab,:host .tabs-inline .tab-header .tab-list .tab:hover.is-active-tab{border:0.1rem solid var(--semantic-color-border-default);border-top:0.3rem solid var(--semantic-color-border-selected);border-bottom:0.1rem solid var(--semantic-color-background-tab-default)}";
const WinkTabsTelenetStyle0 = tabsTelenetCss;
const Tabs = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.appearance = TAB_TYPES.container;
    this.activeTabIndex = 1;
    this.isScrollable = false;
    this.tabElements = [];
    this.uuidMap = new Map();
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);
  }
  tabList;
  tabItems;
  handleClickOnButton = index => {
    this.activeTabIndex = index;
    this.handleScroll();
    this.tabItems[this.activeTabIndex - 1].focus();
  };
  handleKeyDown = e => {
    this.assignTheRightActiveTabIndex(e.key);
  };
  handleKeyDownIndicator = (e, direction) => {
    if (e.key === 'Enter') {
      direction === _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left ? this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left) : this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.right);
    }
  };
  assignTheRightActiveTabIndex(key) {
    const supportedKeysMap = new Map([['ArrowRight', () => {
      this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.right);
    }], ['ArrowLeft', () => {
      this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left);
    }], ['Home', () => {
      if (this.activeTabIndex !== 1) {
        this.activeTabIndex = 1;
      }
    }], ['End', () => {
      if (this.activeTabIndex !== this.tabElements.length) {
        this.activeTabIndex = this.tabElements.length;
      }
    }]]);
    const handler = supportedKeysMap.get(key);
    if (handler) {
      handler();
    }
  }
  findNextTabItemId(direction) {
    if (direction === _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left) {
      for (let i = this.activeTabIndex - 1; i > 0; i--) {
        const nextItem = this.tabList.querySelector('#tab-' + i);
        if (nextItem && !nextItem.hasAttribute('disabled')) {
          return i;
        }
      }
    } else {
      for (let i = this.activeTabIndex + 1; i < this.tabElements.length + 1; i++) {
        const nextItem = this.tabList.querySelector('#tab-' + i);
        if (nextItem && !nextItem.hasAttribute('disabled')) {
          return i;
        }
      }
    }
    return undefined;
  }
  handleScroll(direction) {
    if (direction) {
      this.activeTabIndex = this.findNextTabItemId(direction) || this.activeTabIndex;
    }
    const containerRect = this.tabList.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;
    const activeTab = this.tabList.querySelector('#tab-' + this.activeTabIndex);
    if (activeTab) {
      const activeRect = activeTab.getBoundingClientRect();
      const activeCenter = activeRect.left + activeRect.width / 2;
      const scrollOffset = activeCenter - containerCenter;
      let scrollLeft = this.tabList.scrollLeft + scrollOffset - 8;
      if (this.activeTabIndex === 1) {
        scrollLeft = 0;
      }
      if (this.activeTabIndex === this.tabElements.length) {
        scrollLeft = this.tabList.scrollWidth;
      }
      this.tabList.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }
  checkIfScrollable() {
    this.tabList = this.host?.shadowRoot?.querySelector('.tab-list');
    this.tabItems = this.host?.shadowRoot?.querySelectorAll('.tab');
    let tabitemWidth = 0;
    this.tabItems.forEach(item => {
      tabitemWidth = tabitemWidth + item.offsetWidth;
    });
    if (tabitemWidth >= this.tabList.offsetWidth + 4) {
      this.isScrollable = true;
    } else {
      this.isScrollable = false;
    }
  }
  renderSlots(type) {
    return this.tabElements.map((item, index) => {
      const slotname = item.slot && item.slot.replace('tab-', '') || `${index + 1}`;
      const computedSlotName = type === 'tabpanel' ? `tabpanel-${slotname}` : `tab-${slotname}`;
      let uuid = this.uuidMap.get(computedSlotName);
      if (uuid === undefined) {
        uuid = (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__.U)();
        this.uuidMap.set(computedSlotName, uuid);
      }
      return type === 'tabpanel' ? (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        key: uuid,
        id: `tabpanel-${index + 1}`,
        role: "tabpanel",
        "aria-labelledby": `tab-${index + 1}`,
        tabIndex: this.activeTabIndex === index + 1 ? 0 : -1,
        class: {
          'is-hidden': this.activeTabIndex !== index + 1
        }
      }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
        name: `tab-${slotname}`
      })) : (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
        key: uuid,
        id: `tab-${index + 1}`,
        type: "button",
        role: "tab",
        disabled: item.hasAttribute('disabled'),
        class: `tab ${this.activeTabIndex === index + 1 ? 'is-active-tab' : ''}`,
        "aria-selected": `${this.activeTabIndex === index + 1}`,
        "aria-controls": `tabpanel-${index + 1}`,
        "aria-describedby": `tabpanel-${index + 1}`,
        onClick: () => this.handleClickOnButton(index + 1),
        onKeyDown: this.handleKeyDown
      }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "tab-content"
      }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("p", {
        class: "tab-title"
      }, " ", item.getAttribute('data-title')), item.getAttribute('data-subtitle')));
    });
  }
  componentWillLoad() {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tabDivs = _this.host?.querySelectorAll('div[slot*="tab-"]');
      _this.tabElements = Array.from(tabDivs);
    })();
  }
  componentDidLoad() {
    this.checkIfScrollable();
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      key: '037d9e35e1e160cdf67e79565edffe9ef6097ea7'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '3d9c826186d92b384cefb90a933f435fc991a1e3',
      class: `tabs tabs-${this.appearance}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '91b6c377f1cc6b1040285e461c1aac15602c5a95',
      class: `tab-header ${this.isScrollable ? 'is-scrollable' : ''}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'b699dcdec27e1c7177272613505d5e5623a82c5a',
      class: "tab-list",
      role: "tablist",
      "aria-labelledby": "tablist-1",
      ref: el => this.tabList = el
    }, this.renderSlots('tab')), this.isScrollable && this.activeTabIndex > 1 && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-indicator", {
      class: "scroll-button scroll-button-left",
      direction: "left",
      tabIndex: 1,
      onKeyDown: event => this.handleKeyDownIndicator(event, _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left),
      onClick: () => this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.left)
    }), this.isScrollable && this.activeTabIndex !== this.tabElements.length && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-indicator", {
      class: "scroll-button scroll-button-right",
      direction: "right",
      tabIndex: 1,
      onKeyDown: event => this.handleKeyDownIndicator(event, _directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.right),
      onClick: () => this.handleScroll(_directions_types_2b66964e_js__WEBPACK_IMPORTED_MODULE_3__.I.right)
    })), this.renderSlots('tabpanel')));
  }
};
Tabs.style = {
  base: WinkTabsBaseStyle0,
  telenet: WinkTabsTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-tabs_entry_js.js.map