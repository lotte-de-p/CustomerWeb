(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-check-box_entry_js"],{

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

/***/ 35944:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-check-box.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_check_box: () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _form_label_types_c4d94c50_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-label.types-c4d94c50.js */ 56027);


const checkBoxBaseCss = ".sr-only.sc-wink-check-box-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-base-h{display:block}.sc-wink-check-box-base-h label.sc-wink-check-box-base{display:flex;align-items:center;justify-content:flex-start;cursor:pointer;padding:0}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base{display:inline-block;flex-shrink:0;align-self:flex-start;appearance:none;background-color:var(--semantic-color-background-surface-neutral-default);cursor:pointer;width:2rem;height:2rem;border:0.2rem solid var(--semantic-color-border-form-default);padding:0;margin:0 calc(var(--semantic-spacing-xs) * 1rem) 0 0;color:var(--semantic-color-border-form-selected);border-radius:0;box-sizing:content-box}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base::before{content:\"\";position:absolute;box-sizing:border-box}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:hover{border:0.2rem solid var(--semantic-color-border-highlight)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:checked{background:var(--semantic-color-background-surface-action-default);border-color:var(--semantic-color-border-form-selected)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:checked::before{width:1.2rem;height:1.2rem;margin-top:0.4rem;margin-left:0.4rem;background-size:cover;background-image:url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99485 0.631188C9.47477 0.904479 9.64228 1.51508 9.36899 1.99501L5.38288 8.99501C5.22451 9.27313 4.94257 9.45864 4.62448 9.49404C4.30639 9.52943 3.99058 9.41043 3.77494 9.17393L0.761051 5.86837C0.388947 5.46026 0.418139 4.82777 0.826253 4.45566C1.23437 4.08356 1.86686 4.11275 2.23896 4.52086L4.32579 6.80964L7.63102 1.00533C7.90431 0.525407 8.51492 0.357896 8.99485 0.631188Z' fill='%23291D18'/%3E%3C/svg%3E%0A\")}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:focus{border-color:var(--semantic-color-border-form-default)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:focus:checked{border-color:var(--semantic-color-border-form-selected)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:focus,.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:focus:checked{outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base,.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid:checked,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:checked,.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid:hover,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:hover,.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid:checked:hover,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:checked:hover,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:disabled:hover{border-color:var(--semantic-color-border-error)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid:checked,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:checked{background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:invalid:checked::before,.sc-wink-check-box-base-h input[type=checkbox][aria-invalid].sc-wink-check-box-base:checked::before{background-image:url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99485 0.631188C9.47477 0.904479 9.64228 1.51508 9.36899 1.99501L5.38288 8.99501C5.22451 9.27313 4.94257 9.45864 4.62448 9.49404C4.30639 9.52943 3.99058 9.41043 3.77494 9.17393L0.761051 5.86837C0.388947 5.46026 0.418139 4.82777 0.826253 4.45566C1.23437 4.08356 1.86686 4.11275 2.23896 4.52086L4.32579 6.80964L7.63102 1.00533C7.90431 0.525407 8.51492 0.357896 8.99485 0.631188Z' fill='%23DE350B'/%3E%3C/svg%3E%0A\")}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:disabled,.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:disabled~*.sc-wink-check-box-base{opacity:calc((var(--semantic-opacity-disabled)) / 10);cursor:not-allowed}.sc-wink-check-box-base-h input[type=checkbox].sc-wink-check-box-base:disabled:hover{border:0.2rem solid #766f6b}";
const WinkCheckBoxBaseStyle0 = checkBoxBaseCss;
const checkBoxTelenetCss = ".sr-only.sc-wink-check-box-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-telenet-h{display:block}.sc-wink-check-box-telenet-h label.sc-wink-check-box-telenet{display:flex;align-items:center;justify-content:flex-start;cursor:pointer;padding:0}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet{display:inline-block;flex-shrink:0;align-self:flex-start;appearance:none;background-color:var(--semantic-color-background-surface-neutral-default);cursor:pointer;width:2rem;height:2rem;border:0.2rem solid var(--semantic-color-border-form-default);padding:0;margin:0 calc(var(--semantic-spacing-xs) * 1rem) 0 0;color:var(--semantic-color-border-form-selected);border-radius:0;box-sizing:content-box}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet::before{content:\"\";position:absolute;box-sizing:border-box}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:hover{border:0.2rem solid var(--semantic-color-border-highlight)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:checked{background:var(--semantic-color-background-surface-action-default);border-color:var(--semantic-color-border-form-selected)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:checked::before{width:1.2rem;height:1.2rem;margin-top:0.4rem;margin-left:0.4rem;background-size:cover;background-image:url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99485 0.631188C9.47477 0.904479 9.64228 1.51508 9.36899 1.99501L5.38288 8.99501C5.22451 9.27313 4.94257 9.45864 4.62448 9.49404C4.30639 9.52943 3.99058 9.41043 3.77494 9.17393L0.761051 5.86837C0.388947 5.46026 0.418139 4.82777 0.826253 4.45566C1.23437 4.08356 1.86686 4.11275 2.23896 4.52086L4.32579 6.80964L7.63102 1.00533C7.90431 0.525407 8.51492 0.357896 8.99485 0.631188Z' fill='%23291D18'/%3E%3C/svg%3E%0A\")}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:focus{border-color:var(--semantic-color-border-form-default)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:focus:checked{border-color:var(--semantic-color-border-form-selected)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:focus,.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:focus:checked{outline:0.2rem solid var(--semantic-color-border-focus);outline-offset:0.2rem}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet,.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid:checked,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:checked,.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid:hover,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:hover,.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid:checked:hover,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:checked:hover,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:disabled:hover{border-color:var(--semantic-color-border-error)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid:checked,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:checked{background-color:var(--semantic-color-background-surface-neutral-default)}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:invalid:checked::before,.sc-wink-check-box-telenet-h input[type=checkbox][aria-invalid].sc-wink-check-box-telenet:checked::before{background-image:url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99485 0.631188C9.47477 0.904479 9.64228 1.51508 9.36899 1.99501L5.38288 8.99501C5.22451 9.27313 4.94257 9.45864 4.62448 9.49404C4.30639 9.52943 3.99058 9.41043 3.77494 9.17393L0.761051 5.86837C0.388947 5.46026 0.418139 4.82777 0.826253 4.45566C1.23437 4.08356 1.86686 4.11275 2.23896 4.52086L4.32579 6.80964L7.63102 1.00533C7.90431 0.525407 8.51492 0.357896 8.99485 0.631188Z' fill='%23DE350B'/%3E%3C/svg%3E%0A\")}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:disabled,.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:disabled~*.sc-wink-check-box-telenet{opacity:calc((var(--semantic-opacity-disabled)) / 10);cursor:not-allowed}.sc-wink-check-box-telenet-h input[type=checkbox].sc-wink-check-box-telenet:disabled:hover{border:0.2rem solid #766f6b}";
const WinkCheckBoxTelenetStyle0 = checkBoxTelenetCss;
const CheckBox = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.label = '';
    this.helper = '';
    this.checkboxId = '';
    this.name = '';
    this.checked = false;
    this.error = false;
    this.disabled = false;
  }
  internals;
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.host?.querySelector('input')?.click();
    }
  };
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      key: '05799f25e823d41da196068d0518f459d092a3dd'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      key: '424783c05fa92dbb1f5be256b4e3e39954ba1670',
      type: "checkbox",
      checked: this.checked,
      disabled: this.disabled,
      "aria-invalid": this.error,
      id: this.checkboxId,
      name: this.name,
      value: this.label,
      onKeyDown: this.handleKeyDown
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-form-label", {
      key: '9f930c283f86e38f1ad55a1c5f0fd298f0856bea',
      label: this.label,
      helper: this.helper,
      rendition: _form_label_types_c4d94c50_js__WEBPACK_IMPORTED_MODULE_1__.F.subComponent
    }));
  }
};
CheckBox.style = {
  base: WinkCheckBoxBaseStyle0,
  telenet: WinkCheckBoxTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-check-box_entry_js.js.map