(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-radio-group_entry_js"],{

/***/ 95172:
/*!************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/positions.types-dd2f5ebf.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DIRECTIONS),
/* harmony export */   P: () => (/* binding */ POSITIONS_HORIZONTAL)
/* harmony export */ });
const POSITIONS_HORIZONTAL = {
  left: 'left',
  center: 'center',
  right: 'right'
};
const DIRECTIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};


/***/ }),

/***/ 34685:
/*!**********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-radio-group.entry.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_radio_group: () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positions.types-dd2f5ebf.js */ 95172);



const radioGroupBaseCss = ".sr-only.sc-wink-radio-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-group-base-h{display:block}.sc-wink-radio-group-base-h fieldset.sc-wink-radio-group-base{margin:0;padding:0;border:0}.sc-wink-radio-group-base-h legend.sc-wink-radio-group-base{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-radio-group-base-h .radio-group--horizontal.sc-wink-radio-group-base,.sc-wink-radio-group-base-h .radio-group--vertical.sc-wink-radio-group-base{display:inline-flex;flex-wrap:wrap}.sc-wink-radio-group-base-h .radio-group--vertical.sc-wink-radio-group-base{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-radio-group-base-h .radio-group--horizontal.sc-wink-radio-group-base{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkRadioGroupBaseStyle0 = radioGroupBaseCss;
const radioGroupTelenetCss = ".sr-only.sc-wink-radio-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-radio-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-radio-group-telenet-h{display:block}.sc-wink-radio-group-telenet-h fieldset.sc-wink-radio-group-telenet{margin:0;padding:0;border:0}.sc-wink-radio-group-telenet-h legend.sc-wink-radio-group-telenet{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-radio-group-telenet-h .radio-group--horizontal.sc-wink-radio-group-telenet,.sc-wink-radio-group-telenet-h .radio-group--vertical.sc-wink-radio-group-telenet{display:inline-flex;flex-wrap:wrap}.sc-wink-radio-group-telenet-h .radio-group--vertical.sc-wink-radio-group-telenet{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-radio-group-telenet-h .radio-group--horizontal.sc-wink-radio-group-telenet{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkRadioGroupTelenetStyle0 = radioGroupTelenetCss;
const RadioGroup = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.label = '';
    this.helper = '';
    this.direction = _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_2__.D.vertical;
    this.isRequired = false;
    this.optionalText = 'Optioneel';
    this.error = undefined;
  }
  internals;
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
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("fieldset", {
      key: 'e490b8f9e96079460ac2ac7eda69f90ba4d7a916'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("legend", {
      key: 'd96aa8fcf6a9b20767991732665367e36687a55b',
      class: "radio-group__wrapper"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-form-label", {
      key: '2d131f7ae1fdc24cf2eb8fe4ba19b1c153d5df1c',
      label: this.label,
      helper: this.helper,
      "show-optional": !this.isRequired,
      "optional-text": this.optionalText
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '0ca6931cde693164749a85f789c0ff7e453e5e61',
      class: `radio-group--${this.direction}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '134ae95d33ea8e0f7806a79f3260f47f523021da'
    })), this.error && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-validation-message", {
      message: this.error,
      type: "error"
    }));
  }
};
RadioGroup.style = {
  base: WinkRadioGroupBaseStyle0,
  telenet: WinkRadioGroupTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-radio-group_entry_js.js.map