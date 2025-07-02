(self["webpackChunkdiscount_mfe"] = self["webpackChunkdiscount_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-textarea_entry_js"],{

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

/***/ 56168:
/*!*******************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-textarea.entry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_textarea: () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.types-79e5ba1b.js */ 46033);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);




const AUTOCOMPLETE_OPTIONS = {
  on: 'on',
  off: 'off'
};
const textareaBaseCss = ".sr-only.sc-wink-textarea-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-textarea-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-textarea-base-h{display:block}.sc-wink-textarea-base-h wink-form-label.sc-wink-textarea-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base{width:100%;font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);background:var(--color-background-input-outlined);border:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-bold);padding:calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base::placeholder{color:var(--semantic-color-text-subtle)}.sc-wink-textarea-base-h textarea[aria-invalid].sc-wink-textarea-base{border-color:var(--semantic-color-border-error)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled,.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled~*.sc-wink-textarea-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:focus,.sc-wink-textarea-base-h textarea.sc-wink-textarea-base:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkTextareaBaseStyle0 = textareaBaseCss;
const textareaTelenetCss = ".sr-only.sc-wink-textarea-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-textarea-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-textarea-telenet-h{display:block}.sc-wink-textarea-telenet-h wink-form-label.sc-wink-textarea-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet{width:100%;font-family:TelenetAlbra, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-weight:400;font-size:calc(var(--semantic-typography-font-size-desktop-sm) * 1rem);line-height:calc(var(--semantic-typography-line-height-desktop-sm) * 1rem);color:var(--semantic-color-text-default);background:var(--color-background-input-outlined);border:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-bold);padding:calc(var(--semantic-spacing-2xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet::placeholder{color:var(--semantic-color-text-subtle)}.sc-wink-textarea-telenet-h textarea[aria-invalid].sc-wink-textarea-telenet{border-color:var(--semantic-color-border-error)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:hover{border-color:var(--semantic-color-border-highlight)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled,.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled~*.sc-wink-textarea-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:disabled:hover{border-color:var(--semantic-color-border-button-default)}.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:focus,.sc-wink-textarea-telenet-h textarea.sc-wink-textarea-telenet:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}";
const WinkTextareaTelenetStyle0 = textareaTelenetCss;
const TextArea = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.isDisabled = false;
    this.isRequired = false;
    this.autocomplete = AUTOCOMPLETE_OPTIONS.off;
    this.enterkeyhintOption = _input_types_79e5ba1b_js__WEBPACK_IMPORTED_MODULE_1__.I.none;
    this.textareaId = undefined;
    this.label = undefined;
    this.helper = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.error = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.rows = undefined;
  }
  getAttributes() {
    return {
      ...(this.textareaId && {
        id: this.textareaId
      }),
      ...(this.name && {
        name: this.name
      }),
      ...(this.autocomplete && {
        autocomplete: this.autocomplete
      }),
      ...(this.minlength && {
        minlength: this.minlength
      }),
      ...(this.maxlength && {
        maxlength: this.maxlength
      }),
      ...(this.placeholder && {
        placeholder: this.placeholder
      }),
      ...(this.rows && {
        rows: this.rows
      }),
      ...(this.enterkeyhintOption && {
        enterkeyhint: this.enterkeyhintOption
      }),
      'aria-invalid': !!this.error,
      required: this.isRequired,
      disabled: this.isDisabled
    };
  }
  componentDidRender() {
    this.textareaId = this.textareaId?.length > 0 ? this.textareaId : (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__.U)();
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      key: '23f2d6dadeaef36871f554132e6c3c69028ecb37'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-form-label", {
      key: 'abb4ad4159726d60e3d2f6fd9ab151b5299f7288',
      label: this.label,
      helper: this.helper,
      showOptional: !this.isRequired,
      "is-disabled": this.isDisabled
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", {
      key: '39d04d8ca8244e0c4c6c204222262632f41c6ba5',
      ...this.getAttributes()
    }), !!this.error && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-validation-message", {
      message: this.error,
      type: "error"
    }));
  }
};
TextArea.style = {
  base: WinkTextareaBaseStyle0,
  telenet: WinkTextareaTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-textarea_entry_js.js.map