(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-input_entry_js"],{

/***/ 46033:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/input.types-79e5ba1b.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ INPUT_ENTERKEYHINTS),
/* harmony export */   a: () => (/* binding */ INPUT_APPEARANCES),
/* harmony export */   b: () => (/* binding */ INPUT_TYPES),
/* harmony export */   c: () => (/* binding */ INPUT_MODES),
/* harmony export */   d: () => (/* binding */ INPUT_AUTOCOMPLETES),
/* harmony export */   e: () => (/* binding */ INPUT_SIZES)
/* harmony export */ });
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);

const INPUT_APPEARANCES = {
  default: 'default',
  search: 'search'
};
const INPUT_SIZES = {
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.sm,
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.md
};
const INPUT_TYPES = {
  text: 'text',
  password: 'password',
  number: 'number',
  tel: 'tel',
  url: 'url',
  date: 'date',
  time: 'time',
  email: 'email',
  hidden: 'hidden'
};
const INPUT_AUTOCOMPLETES = {
  on: 'on',
  off: 'off',
  name: 'name',
  address: 'address',
  email: 'email',
  username: 'username',
  newPassword: 'new-password',
  currentPassword: 'current-password'
};
const INPUT_MODES = {
  none: 'none',
  text: 'text',
  numeric: 'numeric',
  decimal: 'decimal',
  tel: 'tel',
  email: 'email',
  search: 'search',
  url: 'url'
};
const INPUT_ENTERKEYHINTS = {
  none: 'none',
  enter: 'enter',
  done: 'done',
  go: 'go',
  next: 'next',
  previous: 'previous',
  search: 'search',
  send: 'send'
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

/***/ 48460:
/*!****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-input.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.types-79e5ba1b.js */ 46033);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);





const inputBaseCss = ".sr-only.sc-wink-input-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-input-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-input-base-h{display:flex;flex-direction:column;width:100%}.sc-wink-input-base-h .input-wrapper.sc-wink-input-base{display:flex;width:100%}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-text-subtlest);position:relative;width:100%}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base wink-icon.sc-wink-input-base{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base wink-icon.disabled.sc-wink-input-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem)}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-calendar-picker-indicator{opacity:0}.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-day-field:focus,.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-month-field:focus,.sc-wink-input-base-h .input-wrapper-date.sc-wink-input-base input.sc-wink-input-base::-webkit-datetime-edit-year-field:focus{background-color:var(--semantic-color-background-surface-system-informative)}.sc-wink-input-base-h .input.sc-wink-input-base{width:100%;box-sizing:border-box;border-radius:0;border:calc(var(--wink-input--border-width, var(--semantic-border-md)) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-default);background-color:var(--wink-input--bgc, --semantic-color-background-canvas-default)}.sc-wink-input-base-h .input.sc-wink-input-base,.sc-wink-input-base-h .input-affix.sc-wink-input-base{padding-top:var(--wink-input--pt, calc(var(--semantic-spacing-sm) * 1rem));padding-bottom:var(--wink-input--pb, calc(var(--semantic-spacing-sm) * 1rem));padding-left:calc(var(--semantic-spacing-md) * 1rem);padding-right:calc(var(--semantic-spacing-md) * 1rem);font-size:var(--wink-input--fs, 1.8rem);line-height:var(--wink-input--lh, 2.4rem)}.sc-wink-input-base-h .input-affix.sc-wink-input-base{display:block;min-width:3.2rem;flex-shrink:0;text-align:center;border-radius:0;border:calc(var(--semantic-border-md) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-subtlest);background:var(--semantic-color-border-subtle)}.sc-wink-input-base-h .input-affix-prefix.sc-wink-input-base{border-right:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-base-h .input-affix-postfix.sc-wink-input-base{border-left:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-base-h .input.sc-wink-input-base::placeholder{color:var(--semantic-color-text-subtlest)}.sc-wink-input-base-h .input.sc-wink-input-base:hover{border-color:var(--wink-input--hover--bgc, --semantic-color-border-highlight);border:calc(var(--wink-input--hover--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-base-h .input.sc-wink-input-base:focus{z-index:1;border-radius:0.1rem;outline-offset:0.1rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight);border:calc(var(--wink-input--active--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-base-h .input.sc-wink-input-base:read-only:not(:disabled),.sc-wink-input-base-h .input-affix.input-affix-readonly.sc-wink-input-base{background-color:transparent;border-color:transparent;border-left-width:0;border-right-width:0;padding-left:calc(var(--semantic-spacing-none) * 1rem);padding-right:calc(var(--semantic-spacing-none) * 1rem);-webkit-user-select:none;user-select:none;pointer-events:none}.sc-wink-input-base-h .input-affix.input-affix-readonly.input-affix-prefix.sc-wink-input-base{padding-right:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-base-h .input-affix.input-affix-readonly.input-affix-postfix.sc-wink-input-base{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-base-h .input.sc-wink-input-base:disabled,.sc-wink-input-base-h .input-affix.input-affix-disabled.sc-wink-input-base{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none;background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-input-base-h .input.sc-wink-input-base:disabled:hover,.sc-wink-input-base-h .input-affix.input-affix-disabled.sc-wink-input-base:hover{border-color:var(--semantic-color-border-input-default)}.sc-wink-input-base-h .input.invalid.sc-wink-input-base:not(:read-only){border-color:var(--semantic-color-border-error)}.sc-wink-input-base-h .input-with-icon-button.sc-wink-input-base{position:relative;align-items:center;justify-content:center}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-base .input.sc-wink-input-base{padding-left:var(--wink-input--icon-button-left--pl, 4.8rem)}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-base .input-icon-button-left.sc-wink-input-base{left:var(--wink-input--icon-button-left--l, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-base .input.sc-wink-input-base{padding-right:var(--wink-input--icon-button-right--pr, 4.8rem)}.sc-wink-input-base-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-base .input-icon-button-right.sc-wink-input-base{right:var(--wink-input--icon-button-right--r, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:2}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base{display:flex;cursor:pointer;border-width:0;border-radius:0.4rem;background:transparent;padding:var(--wink-input--icon-button-padding, calc(var(--semantic-spacing-2xs) * 1rem))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base wink-icon.sc-wink-input-base{--wink-icon-color:var(--wink-input--icon-color, var(--semantic-color-icon-subtle))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:hover{background:var(--semantic-color-border-hover)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:hover wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-icon-default)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:active{background:var(--wink-input--active--bgc, --semantic-color-background-surface-neutral-pressed)}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus,.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;z-index:1;border-color:var(--semantic-color-border-button-default);background:var(--wink-input--focus--bgc, var(--semantic-color-background-surface-neutral-pressed))}.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus wink-icon.sc-wink-input-base,.sc-wink-input-base-h .input-icon-button.sc-wink-input-base button.sc-wink-input-base:focus-visible wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-icon-default-on-action)}.sc-wink-input-base-h wink-form-label.sc-wink-input-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-input-base-h .label-disabled.sc-wink-input-base{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}.sc-wink-input-base-h .error-msg.sc-wink-input-base{color:var(--semantic-color-text-error);display:flex;align-items:flex-start;margin-top:4px;width:100%;font-size:14px;line-height:20px;font-weight:normal}.sc-wink-input-base-h .error-msg.sc-wink-input-base .error-label.sc-wink-input-base{margin-top:2px}.sc-wink-input-base-h .error-msg.sc-wink-input-base wink-icon.sc-wink-input-base{--wink-icon-color:var(--semantic-color-text-error);margin-right:4px}[appearance=search].sc-wink-input-base-h{--wink-input--icon-color:var(--semantic-color-icon-subtle);--wink-input--bgc:var(--semantic-color-background-surface-bold-default);--wink-input--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--hover--bgc:var(--semantic-color-background-surface-bold-hovered);--wink-input--hover--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--active--bgc:var(--semantic-color-background-surface-bold-pressed);--wink-input--active--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--focus--bgc:var(--semantic-color-background-surface-subtle-pressed)}[size=sm].sc-wink-input-base-h{--wink-input--fs:1.6rem;--wink-input--lh:2.4rem;--wink-input--pt:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--pb:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--icon-button-padding:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-left--pl:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-left--l:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-right--pr:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-right--r:calc(var(--semantic-spacing-3xs) * 1rem)}";
const WinkInputBaseStyle0 = inputBaseCss;
const inputTelenetCss = ".sr-only.sc-wink-input-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-input-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-input-telenet-h{display:flex;flex-direction:column;width:100%}.sc-wink-input-telenet-h .input-wrapper.sc-wink-input-telenet{display:flex;width:100%}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-text-subtlest);position:relative;width:100%}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet wink-icon.disabled.sc-wink-input-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet{font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem)}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-calendar-picker-indicator{opacity:0}.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-day-field:focus,.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-month-field:focus,.sc-wink-input-telenet-h .input-wrapper-date.sc-wink-input-telenet input.sc-wink-input-telenet::-webkit-datetime-edit-year-field:focus{background-color:var(--semantic-color-background-surface-system-informative)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet{width:100%;box-sizing:border-box;border-radius:0;border:calc(var(--wink-input--border-width, var(--semantic-border-md)) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-default);background-color:var(--wink-input--bgc, --semantic-color-background-canvas-default)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet,.sc-wink-input-telenet-h .input-affix.sc-wink-input-telenet{padding-top:var(--wink-input--pt, calc(var(--semantic-spacing-sm) * 1rem));padding-bottom:var(--wink-input--pb, calc(var(--semantic-spacing-sm) * 1rem));padding-left:calc(var(--semantic-spacing-md) * 1rem);padding-right:calc(var(--semantic-spacing-md) * 1rem);font-size:var(--wink-input--fs, 1.8rem);line-height:var(--wink-input--lh, 2.4rem)}.sc-wink-input-telenet-h .input-affix.sc-wink-input-telenet{display:block;min-width:3.2rem;flex-shrink:0;text-align:center;border-radius:0;border:calc(var(--semantic-border-md) * 1rem) solid;border-color:var(--semantic-color-border-input-default);color:var(--semantic-color-text-subtlest);background:var(--semantic-color-border-subtle)}.sc-wink-input-telenet-h .input-affix-prefix.sc-wink-input-telenet{border-right:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-telenet-h .input-affix-postfix.sc-wink-input-telenet{border-left:calc(var(--semantic-border-none) * 1rem)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet::placeholder{color:var(--semantic-color-text-subtlest)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:hover{border-color:var(--wink-input--hover--bgc, --semantic-color-border-highlight);border:calc(var(--wink-input--hover--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:focus{z-index:1;border-radius:0.1rem;outline-offset:0.1rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight);border:calc(var(--wink-input--active--border-width, var(--semantic-border-md)) * 1rem) solid}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:read-only:not(:disabled),.sc-wink-input-telenet-h .input-affix.input-affix-readonly.sc-wink-input-telenet{background-color:transparent;border-color:transparent;border-left-width:0;border-right-width:0;padding-left:calc(var(--semantic-spacing-none) * 1rem);padding-right:calc(var(--semantic-spacing-none) * 1rem);-webkit-user-select:none;user-select:none;pointer-events:none}.sc-wink-input-telenet-h .input-affix.input-affix-readonly.input-affix-prefix.sc-wink-input-telenet{padding-right:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-telenet-h .input-affix.input-affix-readonly.input-affix-postfix.sc-wink-input-telenet{padding-left:calc(var(--semantic-spacing-xs) * 1rem)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:disabled,.sc-wink-input-telenet-h .input-affix.input-affix-disabled.sc-wink-input-telenet{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none;background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-input-telenet-h .input.sc-wink-input-telenet:disabled:hover,.sc-wink-input-telenet-h .input-affix.input-affix-disabled.sc-wink-input-telenet:hover{border-color:var(--semantic-color-border-input-default)}.sc-wink-input-telenet-h .input.invalid.sc-wink-input-telenet:not(:read-only){border-color:var(--semantic-color-border-error)}.sc-wink-input-telenet-h .input-with-icon-button.sc-wink-input-telenet{position:relative;align-items:center;justify-content:center}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-telenet .input.sc-wink-input-telenet{padding-left:var(--wink-input--icon-button-left--pl, 4.8rem)}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-left.sc-wink-input-telenet .input-icon-button-left.sc-wink-input-telenet{left:var(--wink-input--icon-button-left--l, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-telenet .input.sc-wink-input-telenet{padding-right:var(--wink-input--icon-button-right--pr, 4.8rem)}.sc-wink-input-telenet-h .input-with-icon-button.input-with-icon-button-right.sc-wink-input-telenet .input-icon-button-right.sc-wink-input-telenet{right:var(--wink-input--icon-button-right--r, calc(var(--semantic-spacing-xs) * 1rem))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:2}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet{display:flex;cursor:pointer;border-width:0;border-radius:0.4rem;background:transparent;padding:var(--wink-input--icon-button-padding, calc(var(--semantic-spacing-2xs) * 1rem))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--wink-input--icon-color, var(--semantic-color-icon-subtle))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:hover{background:var(--semantic-color-border-hover)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:hover wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-icon-default)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:active{background:var(--wink-input--active--bgc, --semantic-color-background-surface-neutral-pressed)}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus,.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem;z-index:1;border-color:var(--semantic-color-border-button-default);background:var(--wink-input--focus--bgc, var(--semantic-color-background-surface-neutral-pressed))}.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus wink-icon.sc-wink-input-telenet,.sc-wink-input-telenet-h .input-icon-button.sc-wink-input-telenet button.sc-wink-input-telenet:focus-visible wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-icon-default-on-action)}.sc-wink-input-telenet-h wink-form-label.sc-wink-input-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-input-telenet-h .label-disabled.sc-wink-input-telenet{opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet{color:var(--semantic-color-text-error);display:flex;align-items:flex-start;margin-top:4px;width:100%;font-size:14px;line-height:20px;font-weight:normal}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet .error-label.sc-wink-input-telenet{margin-top:2px}.sc-wink-input-telenet-h .error-msg.sc-wink-input-telenet wink-icon.sc-wink-input-telenet{--wink-icon-color:var(--semantic-color-text-error);margin-right:4px}[appearance=search].sc-wink-input-telenet-h{--wink-input--icon-color:var(--semantic-color-icon-subtle);--wink-input--bgc:var(--semantic-color-background-surface-bold-default);--wink-input--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--hover--bgc:var(--semantic-color-background-surface-bold-hovered);--wink-input--hover--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--active--bgc:var(--semantic-color-background-surface-bold-pressed);--wink-input--active--border-width:calc(var(--semantic-border-none) * 1rem);--wink-input--focus--bgc:var(--semantic-color-background-surface-subtle-pressed)}[size=sm].sc-wink-input-telenet-h{--wink-input--fs:1.6rem;--wink-input--lh:2.4rem;--wink-input--pt:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--pb:calc(var(--semantic-spacing-2xs) * 1rem);--wink-input--icon-button-padding:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-left--pl:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-left--l:calc(var(--semantic-spacing-3xs) * 1rem);--wink-input--icon-button-right--pr:calc(var(--semantic-spacing-xl) * 1rem);--wink-input--icon-button-right--r:calc(var(--semantic-spacing-3xs) * 1rem)}";
const WinkInputTelenetStyle0 = inputTelenetCss;
const Input = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.valueChanged = (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "valueChanged", 7);
    this.appearance = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.a.default;
    this.value = '';
    this.inputId = undefined;
    this.name = undefined;
    this.type = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.b.text;
    this.placeholder = '';
    this.isRequired = false;
    this.inputModeOption = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.c.text;
    this.autocomplete = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.d.off;
    this.enterkeyhintOption = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.I.none;
    this.isReadonly = false;
    this.isDisabled = false;
    this.isAutofocused = false;
    this.step = undefined;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.error = undefined;
    this.prefixValue = '';
    this.postfixValue = '';
    this.iconLeft = '';
    this.iconRight = '';
    this.showIconRight = true;
    this.inputWidth = 0;
    this.label = '';
    this.helper = '';
    this.optionalText = 'Optional';
    this.size = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.e.md;
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);
  }
  valueChanged;
  setValidation(errorMsg) {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (errorMsg) {
        _this.error = errorMsg;
      } else {
        _this.error = '';
      }
    })();
  }
  getLabelId() {
    return this.inputId + ':Label';
  }
  getHelperId() {
    return this.inputId + ':Helper';
  }
  getErrorMsgId() {
    return this.inputId + ':Error';
  }
  getAriaDescribedby() {
    return [this.label && this.getLabelId(), this.helper && this.getHelperId(), this.error && this.getErrorMsgId()].filter(item => typeof item === 'string' && item.trim().length > 0).join(' ');
  }
  get getLabel() {
    if (this.label) {
      return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.F, null, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
        htmlFor: this.inputId,
        id: this.getLabelId(),
        class: {
          label: true,
          'label-disabled': this.isDisabled
        }
      }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-form-label", {
        label: this.label,
        helper: this.helper,
        "helper-id": this.getHelperId(),
        "show-optional": !this.isRequired,
        "optional-text": this.optionalText
      })));
    }
  }
  get getPrefix() {
    if (this.prefixValue && !this.iconLeft) {
      return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.F, null, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'input-affix input-affix-prefix': true,
          'input-affix-disabled': this.isDisabled,
          'input-affix-readonly': this.isReadonly
        }
      }, this.prefixValue));
    }
  }
  get getPostfix() {
    if (this.postfixValue && !this.iconRight) {
      return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.F, null, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'input-affix input-affix-postfix': true,
          'input-affix-disabled': this.isDisabled,
          'input-affix-readonly': this.isReadonly
        }
      }, this.postfixValue));
    }
  }
  getReadOnlyLength(value) {
    if (this.isReadonly && value.length > 0) {
      this.inputWidth = this.type === _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.b.date ? value.length + 4 : value.length;
    } else {
      this.inputWidth = 0;
    }
  }
  showSearchBackSpaceIcon(value) {
    if (value.length === 0 && this.appearance === _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.a.search) {
      this.showIconRight = false;
    } else {
      this.showIconRight = true;
    }
  }
  handleChange(event) {
    this.value = event.target.value;
    this.showSearchBackSpaceIcon(this.value);
    this.getReadOnlyLength(this.value);
    if (this.valueChanged) {
      this.valueChanged.emit(this.value);
    }
  }
  handleRightIconClick() {
    const inputEl = this.host?.querySelector('input');
    if (inputEl?.classList.contains('input-password')) {
      const rightIconEl = this.host?.querySelector('.input-icon-button-right wink-icon');
      if (inputEl?.type === 'password') {
        inputEl.type = 'text';
        rightIconEl?.setAttribute('icon', 'eye-off');
      } else {
        inputEl.type = 'password';
        rightIconEl?.setAttribute('icon', 'eye');
      }
    }
  }
  getAttributes() {
    return {
      ...{
        id: this.inputId
      },
      ...{
        name: this.name
      },
      ...{
        type: this.type
      },
      ...{
        value: this.value
      },
      ...(this.placeholder && {
        placeholder: this.placeholder
      }),
      ...{
        'input-mode': this.inputModeOption
      },
      ...{
        autocomplete: this.autocomplete
      },
      ...(this.isAutofocused && {
        autofocus: this.isAutofocused
      }),
      ...{
        enterkeyhint: this.enterkeyhintOption
      },
      ...(this.isRequired && {
        required: this.isRequired
      }),
      ...(this.isDisabled && {
        disabled: this.isDisabled
      }),
      ...(this.isReadonly && {
        readonly: this.isReadonly
      }),
      'aria-describedby': this.getAriaDescribedby(),
      'aria-invalid': !!this.error,
      ...(this.minValue !== undefined && {
        min: this.minValue
      }),
      ...(this.maxValue !== undefined && {
        max: this.maxValue
      }),
      ...(this.step && {
        step: this.step
      })
    };
  }
  componentDidRender() {
    this.showSearchBackSpaceIcon(this.value);
    this.getReadOnlyLength(this.value);
    this.inputId = this.inputId?.length > 0 ? this.inputId : (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_3__.U)();
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      key: '5261d5629d63c7ead5af380c61590852d0809233'
    }, this.getLabel, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'df2fa871bf2a07bafb301255c85e2706da0f6b51',
      class: {
        'input-wrapper': true,
        'input-with-icon-button input-with-icon-button-left': this.iconLeft?.length > 0,
        'input-with-icon-button input-with-icon-button-right': this.iconRight?.length > 0,
        'input-wrapper-date': this.type === 'date'
      }
    }, this.getPrefix, this.iconLeft?.length > 0 && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "input-icon-button input-icon-button-left"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      "aria-label": this.iconLeft,
      class: "input-icon-button-button"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-icon", {
      appearance: "default",
      icon: this.iconLeft,
      size: this.size
    }))), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      key: '20d0144a5ed31367ba24ada26bcb1f369600f02d',
      onInput: e => this.handleChange(e),
      ...this.getAttributes(),
      class: {
        input: true,
        invalid: !!this.error,
        'input-password': this.type === _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.b.password
      },
      style: {
        width: this.isReadonly && this.inputWidth > 0 ? `${this.inputWidth}ch` : ''
      }
    }), this.type === _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_2__.b.date && !this.isReadonly && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-icon", {
      class: {
        disabled: this.isDisabled
      },
      icon: "calendar",
      appearance: "transparent"
    }), this.iconRight?.length > 0 && this.showIconRight && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "input-icon-button input-icon-button-right"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      "aria-label": this.iconRight,
      class: "input-icon-button-button",
      onClick: () => this.handleRightIconClick()
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-icon", {
      appearance: "default",
      icon: this.iconRight,
      size: this.size
    }))), this.getPostfix), this.error && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: this.getErrorMsgId(),
      class: "error-msg"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-validation-message", {
      message: this.error
    })));
  }
  static get formAssociated() {
    return true;
  }
};
Input.style = {
  base: WinkInputBaseStyle0,
  telenet: WinkInputTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-input_entry_js.js.map