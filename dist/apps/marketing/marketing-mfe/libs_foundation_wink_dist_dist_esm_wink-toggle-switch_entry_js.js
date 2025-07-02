(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-toggle-switch_entry_js"],{

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

/***/ 35901:
/*!************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-toggle-switch.entry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_toggle_switch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-525e9b74.js */ 43179);


const TOGGLE_ALIGNMENT = {
  nextTo: 'nextToEachOther',
  spaceBetween: 'spaceBetween'
};
const toggleSwitchBaseCss = ".sr-only.sc-wink-toggle-switch-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-toggle-switch-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-toggle-switch-base-h{display:flex;align-items:center}.toggle-switch--spacebetween.sc-wink-toggle-switch-base-h{justify-content:space-between}.sc-wink-toggle-switch-base-h .toggle-switch--label.sc-wink-toggle-switch-base{display:inline-block;font-size:1.6rem;line-height:2.4rem;margin:0 calc(var(--semantic-spacing-xs) * 1rem) 0 0;cursor:pointer;padding:0;height:100%;color:var(--semantic-color-text-default)}.sc-wink-toggle-switch-base-h .toggle-switch--wrapper.sc-wink-toggle-switch-base{position:relative}.sc-wink-toggle-switch-base-h input[type=checkbox].sc-wink-toggle-switch-base{height:0;width:0}.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base{cursor:pointer;text-indent:-999.9rem;width:5.2rem;height:3.2rem;background:var(--semantic-color-background-form-default-default);display:block;border-radius:2rem;position:relative;margin-top:-1.4rem}.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base:before{content:\"\";position:absolute;top:-0.4rem;left:-0.4rem;width:6rem;height:4rem;cursor:pointer}.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base:after{content:\"\";position:absolute;top:0.4rem;left:0.4rem;width:2.4rem;height:2.4rem;background:var(--semantic-color-background-surface-highlight-8);border-radius:9rem;transition:0.3s}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base:hover~label.sc-wink-toggle-switch-base,.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base:hover{background:var(--semantic-color-background-form-default-hovered)}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base:hover{cursor:pointer}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base:hover~label.sc-wink-toggle-switch-base:after,.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base:hover:after{box-shadow:0 0 0 0.8rem var(--semantic-color-background-surface-subtle-hovered)}.sc-wink-toggle-switch-base-h input[type=checkbox].sc-wink-toggle-switch-base:focus~label.sc-wink-toggle-switch-base{outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~label.sc-wink-toggle-switch-base{background:var(--semantic-color-background-form-selected-selected)}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~.toggle-switch--icon.sc-wink-toggle-switch-base:hover~label.sc-wink-toggle-switch-base,.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~label.sc-wink-toggle-switch-base:hover{background:var(--semantic-color-background-surface-action-hover)}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~.toggle-switch--icon.sc-wink-toggle-switch-base:hover~label.sc-wink-toggle-switch-base:after,.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~label.sc-wink-toggle-switch-base:after{left:calc(100% - 0.5rem);transform:translateX(-100%)}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base:active~label.sc-wink-toggle-switch-base:after,.sc-wink-toggle-switch-base-h label.sc-wink-toggle-switch-base:active:after{width:2.6rem}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base{--wink-icon-color:var(--semantic-color-icon-on-action);position:absolute;border-radius:100%;z-index:3;top:0.75rem;transition:0.2s all}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base:nth-child(1){left:0.75rem;opacity:1}.sc-wink-toggle-switch-base-h .toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base:nth-child(2){left:0.75rem;opacity:0}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~.toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base{z-index:3;transition:0.2s all}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~.toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base:nth-child(1){opacity:0;left:2.7rem}.sc-wink-toggle-switch-base-h input.sc-wink-toggle-switch-base:checked~.toggle-switch--icon.sc-wink-toggle-switch-base wink-icon.sc-wink-toggle-switch-base:nth-child(2){opacity:1;left:2.7rem}.sc-wink-toggle-switch-base-h input[type=checkbox].sc-wink-toggle-switch-base:disabled,.sc-wink-toggle-switch-base-h input[type=checkbox].sc-wink-toggle-switch-base:disabled~*.sc-wink-toggle-switch-base,.sc-wink-toggle-switch-base-h input[type=checkbox].sc-wink-toggle-switch-base:disabled~label.sc-wink-toggle-switch-base:before,.sc-wink-toggle-switch-base-h .toggle-switch--label--disabled.sc-wink-toggle-switch-base{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}";
const WinkToggleSwitchBaseStyle0 = toggleSwitchBaseCss;
const toggleSwitchTelenetCss = ".sr-only.sc-wink-toggle-switch-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-toggle-switch-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-toggle-switch-telenet-h{display:flex;align-items:center}.toggle-switch--spacebetween.sc-wink-toggle-switch-telenet-h{justify-content:space-between}.sc-wink-toggle-switch-telenet-h .toggle-switch--label.sc-wink-toggle-switch-telenet{display:inline-block;font-size:1.6rem;line-height:2.4rem;margin:0 calc(var(--semantic-spacing-xs) * 1rem) 0 0;cursor:pointer;padding:0;height:100%;color:var(--semantic-color-text-default)}.sc-wink-toggle-switch-telenet-h .toggle-switch--wrapper.sc-wink-toggle-switch-telenet{position:relative}.sc-wink-toggle-switch-telenet-h input[type=checkbox].sc-wink-toggle-switch-telenet{height:0;width:0}.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet{cursor:pointer;text-indent:-999.9rem;width:5.2rem;height:3.2rem;background:var(--semantic-color-background-form-default-default);display:block;border-radius:2rem;position:relative;margin-top:-1.4rem}.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet:before{content:\"\";position:absolute;top:-0.4rem;left:-0.4rem;width:6rem;height:4rem;cursor:pointer}.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet:after{content:\"\";position:absolute;top:0.4rem;left:0.4rem;width:2.4rem;height:2.4rem;background:var(--semantic-color-background-surface-highlight-8);border-radius:9rem;transition:0.3s}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet:hover~label.sc-wink-toggle-switch-telenet,.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet:hover{background:var(--semantic-color-background-form-default-hovered)}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet:hover{cursor:pointer}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet:hover~label.sc-wink-toggle-switch-telenet:after,.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet:hover:after{box-shadow:0 0 0 0.8rem var(--semantic-color-background-surface-subtle-hovered)}.sc-wink-toggle-switch-telenet-h input[type=checkbox].sc-wink-toggle-switch-telenet:focus~label.sc-wink-toggle-switch-telenet{outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~label.sc-wink-toggle-switch-telenet{background:var(--semantic-color-background-form-selected-selected)}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~.toggle-switch--icon.sc-wink-toggle-switch-telenet:hover~label.sc-wink-toggle-switch-telenet,.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~label.sc-wink-toggle-switch-telenet:hover{background:var(--semantic-color-background-surface-action-hover)}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~.toggle-switch--icon.sc-wink-toggle-switch-telenet:hover~label.sc-wink-toggle-switch-telenet:after,.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~label.sc-wink-toggle-switch-telenet:after{left:calc(100% - 0.5rem);transform:translateX(-100%)}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet:active~label.sc-wink-toggle-switch-telenet:after,.sc-wink-toggle-switch-telenet-h label.sc-wink-toggle-switch-telenet:active:after{width:2.6rem}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet{--wink-icon-color:var(--semantic-color-icon-on-action);position:absolute;border-radius:100%;z-index:3;top:0.75rem;transition:0.2s all}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet:nth-child(1){left:0.75rem;opacity:1}.sc-wink-toggle-switch-telenet-h .toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet:nth-child(2){left:0.75rem;opacity:0}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~.toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet{z-index:3;transition:0.2s all}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~.toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet:nth-child(1){opacity:0;left:2.7rem}.sc-wink-toggle-switch-telenet-h input.sc-wink-toggle-switch-telenet:checked~.toggle-switch--icon.sc-wink-toggle-switch-telenet wink-icon.sc-wink-toggle-switch-telenet:nth-child(2){opacity:1;left:2.7rem}.sc-wink-toggle-switch-telenet-h input[type=checkbox].sc-wink-toggle-switch-telenet:disabled,.sc-wink-toggle-switch-telenet-h input[type=checkbox].sc-wink-toggle-switch-telenet:disabled~*.sc-wink-toggle-switch-telenet,.sc-wink-toggle-switch-telenet-h input[type=checkbox].sc-wink-toggle-switch-telenet:disabled~label.sc-wink-toggle-switch-telenet:before,.sc-wink-toggle-switch-telenet-h .toggle-switch--label--disabled.sc-wink-toggle-switch-telenet{opacity:calc(var(--semantic-opacity-disabled) / 10);cursor:not-allowed}";
const WinkToggleSwitchTelenetStyle0 = toggleSwitchTelenetCss;
const ToggleSwitch = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.label = '';
    this.toggleSwitchId = '';
    this.toggleSwitchName = '';
    this.alignment = TOGGLE_ALIGNMENT.nextTo;
    this.checked = false;
    this.disabled = false;
  }
  internals;
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  labelOnClick = _e => {
    this.host?.querySelector('input')?.click();
  };
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.host?.querySelector('input')?.click();
    }
  };
  componentDidRender() {
    this.toggleSwitchId = this.toggleSwitchId?.length > 0 ? this.toggleSwitchId : (0,_utils_525e9b74_js__WEBPACK_IMPORTED_MODULE_1__.U)();
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '8eaea9a526d5fdf88d0092a41a0f2fc4b9eda781',
      class: `toggle-switch--${this.alignment.toLocaleLowerCase()}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      key: '084c14e951c16357ebc1f0fcb2fecce3165d04f4',
      class: `toggle-switch--label ${this.disabled ? 'toggle-switch--label--disabled' : ''}`,
      onClick: this.labelOnClick
    }, this.label), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: 'd87e7f3b068bd4de018c6a3f0e1d71506b2e2ef1',
      class: "toggle-switch--wrapper"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      key: '1dd4399c93b27989bb9026ef77aafeec24c7ab4f',
      type: "checkbox",
      id: this.toggleSwitchId,
      name: this.toggleSwitchName,
      onKeyDown: this.handleKeyDown,
      checked: this.checked,
      disabled: this.disabled
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: 'ff20ff19eadf7a72d54ed16e90134ac9a62b1470',
      class: "toggle-switch--icon",
      onClick: this.labelOnClick
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '212f45f616c9ad346a34cedea77d5a5eaf231e03',
      icon: "cross-small",
      size: "sm"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '0d9658f2535b5a93fe3ddab1ec965a8e38be3247',
      icon: "tick-small",
      size: "sm"
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      key: '6ad1b044f672973f09102beba9055785490ee363',
      htmlFor: this.toggleSwitchId
    })));
  }
};
ToggleSwitch.style = {
  base: WinkToggleSwitchBaseStyle0,
  telenet: WinkToggleSwitchTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-toggle-switch_entry_js.js.map