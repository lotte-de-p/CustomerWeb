(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-select_entry_js"],{

/***/ 56027:
/*!*************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/form-label.types-c4d94c50.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FORM_LABEL_RENDITION)
/* harmony export */ });
const FORM_LABEL_RENDITION = {
  default: 'default',
  subComponent: 'subComponent'
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

/***/ 90163:
/*!*****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-select.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _form_label_types_c4d94c50_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-label.types-c4d94c50.js */ 56027);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);



const selectBaseCss = ".sr-only.sc-wink-select-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-select-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-select-base-h{display:block}.sc-wink-select-base-h wink-form-label.sc-wink-select-base{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-select-base-h .select-wrapper.sc-wink-select-base{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-icon-default);position:relative;width:100%}.sc-wink-select-base-h .select-wrapper.sc-wink-select-base wink-icon.sc-wink-select-base{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-select-base-h select.sc-wink-select-base{background-color:transparent;appearance:none;display:block;margin:0;box-sizing:border-box;width:100%;padding:calc(var(--semantic-spacing-sm) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0;border-width:calc(var(--semantic-border-md) * 1rem);border-style:solid;border-color:var(--semantic-color-border-bold);font-size:18px;line-height:28px;color:var(--semantic-color-text-default)}.sc-wink-select-base-h select.placeholder.sc-wink-select-base{color:var(--semantic-color-text-subtle)}.sc-wink-select-base-h select.sc-wink-select-base:hover{border-color:var(--semantic-color-border-highlight);cursor:pointer}.sc-wink-select-base-h select.sc-wink-select-base:focus{outline-offset:0.2rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight)}.sc-wink-select-base-h select.invalid.sc-wink-select-base{border-color:var(--semantic-color-border-error)}.sc-wink-select-base-h .label-disabled.sc-wink-select-base,.sc-wink-select-base-h select.sc-wink-select-base:disabled,.sc-wink-select-base-h select.sc-wink-select-base:disabled+wink-icon.sc-wink-select-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-select-base-h select.sc-wink-select-base:disabled{border-color:var(--semantic-color-border-bold);background-color:var(--semantic-color-background-surface-bold-default)}";
const WinkSelectBaseStyle0 = selectBaseCss;
const selectTelenetCss = ".sr-only.sc-wink-select-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-select-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-select-telenet-h{display:block}.sc-wink-select-telenet-h wink-form-label.sc-wink-select-telenet{margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem)}.sc-wink-select-telenet-h .select-wrapper.sc-wink-select-telenet{--wink-icon-bg-color:transparent;--wink-icon-color:var(--semantic-color-icon-default);position:relative;width:100%}.sc-wink-select-telenet-h .select-wrapper.sc-wink-select-telenet wink-icon.sc-wink-select-telenet{position:absolute;top:calc(var(--semantic-spacing-2xs) * 1rem);right:calc(var(--semantic-spacing-2xs) * 1rem);cursor:pointer;pointer-events:none}.sc-wink-select-telenet-h select.sc-wink-select-telenet{background-color:transparent;appearance:none;display:block;margin:0;box-sizing:border-box;width:100%;padding:calc(var(--semantic-spacing-sm) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0;border-width:calc(var(--semantic-border-md) * 1rem);border-style:solid;border-color:var(--semantic-color-border-bold);font-size:18px;line-height:28px;color:var(--semantic-color-text-default)}.sc-wink-select-telenet-h select.placeholder.sc-wink-select-telenet{color:var(--semantic-color-text-subtle)}.sc-wink-select-telenet-h select.sc-wink-select-telenet:hover{border-color:var(--semantic-color-border-highlight);cursor:pointer}.sc-wink-select-telenet-h select.sc-wink-select-telenet:focus{outline-offset:0.2rem;outline:calc(var(--semantic-border-md) * 1rem) solid var(--semantic-color-border-focus);border-color:var(--semantic-color-border-highlight)}.sc-wink-select-telenet-h select.invalid.sc-wink-select-telenet{border-color:var(--semantic-color-border-error)}.sc-wink-select-telenet-h .label-disabled.sc-wink-select-telenet,.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled,.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled+wink-icon.sc-wink-select-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}.sc-wink-select-telenet-h select.sc-wink-select-telenet:disabled{border-color:var(--semantic-color-border-bold);background-color:var(--semantic-color-background-surface-bold-default)}";
const WinkSelectTelenetStyle0 = selectTelenetCss;
const Select = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.label = undefined;
    this.helper = undefined;
    this.isRequired = false;
    this.selectId = '';
    this.selectName = undefined;
    this.error = undefined;
    this.isDisabled = false;
    this.value = undefined;
    this.placeholder = undefined;
  }
  internals;
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  componentDidRender() {
    const selectEl = this.host.querySelector('select');
    if (selectEl?.value === '') {
      selectEl.classList.add('placeholder');
    }
    this.selectId = this.selectId.length > 0 ? this.selectId : (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_2__.U)();
  }
  handleChange(e) {
    this.value = e.target.value;
    if (this.value === '') {
      e.target.classList.add('placeholder');
    } else {
      e.target.classList.remove('placeholder');
    }
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '1813c868d5c6d5afafba0a266225d0e202f27a29'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      key: '53affcdc0add022abc8cfb91035e34a0ad93041f',
      class: {
        'label-disabled': this.isDisabled
      },
      htmlFor: this.selectId
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-form-label", {
      key: 'e5fb998d5c5286ccae9de63348c1d1f85934231a',
      label: this.label,
      helper: this.helper,
      rendition: _form_label_types_c4d94c50_js__WEBPACK_IMPORTED_MODULE_1__.F.default,
      "show-optional": this.isRequired
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: 'c8a423819070a049c140f4e2081eafda63afe6c9',
      class: "select-wrapper"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
      key: 'adf6fda40188d6cd15d3ccf864e80cd74835ee45',
      id: this.selectId,
      name: this.selectName,
      "aria-invalid": !!this.error,
      onChange: e => this.handleChange(e),
      disabled: !!this.isDisabled,
      class: {
        invalid: !!this.error
      }
    }, this.placeholder && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: "",
      selected: true,
      disabled: true
    }, this.placeholder), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '2490da6cbc2e15be733cac6f560a147935bc80da'
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '7a306fb86ee49e44904abe9cdd23423e0bbecc83',
      icon: "chevron-down",
      appearance: "transparent"
    })), this.error && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-validation-message", {
      message: this.error
    }));
  }
};
Select.style = {
  base: WinkSelectBaseStyle0,
  telenet: WinkSelectTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-select_entry_js.js.map