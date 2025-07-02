(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-check-box-group_entry_js"],{

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

/***/ 80099:
/*!**************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-check-box-group.entry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_check_box_group: () => (/* binding */ CheckBoxGroup)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positions.types-dd2f5ebf.js */ 95172);



const checkBoxGroupBaseCss = ".sr-only.sc-wink-check-box-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-group-base{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-group-base-h{display:block}.sc-wink-check-box-group-base-h fieldset.sc-wink-check-box-group-base{margin:0;padding:0;border:0}.sc-wink-check-box-group-base-h legend.sc-wink-check-box-group-base{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-check-box-group-base-h .check-box-group--horizontal.sc-wink-check-box-group-base,.sc-wink-check-box-group-base-h .check-box-group--vertical.sc-wink-check-box-group-base{display:inline-flex;flex-wrap:wrap}.sc-wink-check-box-group-base-h .check-box-group--vertical.sc-wink-check-box-group-base{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-check-box-group-base-h .check-box-group--horizontal.sc-wink-check-box-group-base{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkCheckBoxGroupBaseStyle0 = checkBoxGroupBaseCss;
const checkBoxGroupTelenetCss = ".sr-only.sc-wink-check-box-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only.sc-wink-check-box-group-telenet{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sc-wink-check-box-group-telenet-h{display:block}.sc-wink-check-box-group-telenet-h fieldset.sc-wink-check-box-group-telenet{margin:0;padding:0;border:0}.sc-wink-check-box-group-telenet-h legend.sc-wink-check-box-group-telenet{margin-bottom:calc(var(--semantic-spacing-xs) * 1rem);display:flex;width:100%}.sc-wink-check-box-group-telenet-h .check-box-group--horizontal.sc-wink-check-box-group-telenet,.sc-wink-check-box-group-telenet-h .check-box-group--vertical.sc-wink-check-box-group-telenet{display:inline-flex;flex-wrap:wrap}.sc-wink-check-box-group-telenet-h .check-box-group--vertical.sc-wink-check-box-group-telenet{flex-direction:column;gap:calc(var(--semantic-spacing-md) * 1rem)}.sc-wink-check-box-group-telenet-h .check-box-group--horizontal.sc-wink-check-box-group-telenet{flex-direction:row;gap:calc(var(--semantic-spacing-xl) * 1rem)}";
const WinkCheckBoxGroupTelenetStyle0 = checkBoxGroupTelenetCss;
const CheckBoxGroup = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.label = '';
    this.helper = '';
    this.direction = _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_2__.D.vertical;
    this.error = undefined;
    this.isRequired = false;
    this.optionalText = 'Optioneel';
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
      key: 'd7f5fa5db666b4c44c65794b26d89558fc95e00c'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("legend", {
      key: 'c123bc97caf59f4e07715fd3fb5567bbdbf56096',
      class: "check-box-group__wrapper"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-form-label", {
      key: 'e321c64e5cf4cde27ebbe86779999826a3619c32',
      label: this.label,
      helper: this.helper,
      "show-optional": !this.isRequired,
      "optional-text": this.optionalText
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'ca479c96280af57731b88bc4aa0b2fbfee0e829a',
      class: `check-box-group--${this.direction}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '245b88689fd91bfe99bb6570a763207b30fe2438'
    })), this.error && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_1__.h)("wink-validation-message", {
      message: this.error,
      type: "error"
    }));
  }
};
CheckBoxGroup.style = {
  base: WinkCheckBoxGroupBaseStyle0,
  telenet: WinkCheckBoxGroupTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-check-box-group_entry_js.js.map