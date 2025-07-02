(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_shared_layout_src_index_ts-_38680"],{

/***/ 4445:
/*!*****************************************!*\
  !*** ./libs/shared/layout/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstraintsService: () => (/* reexport safe */ _lib_services_constraints_constraints_service__WEBPACK_IMPORTED_MODULE_6__.ConstraintsService),
/* harmony export */   LayoutLibModule: () => (/* reexport safe */ _lib_layout_lib_module__WEBPACK_IMPORTED_MODULE_0__.LayoutLibModule),
/* harmony export */   OverviewPriceType: () => (/* reexport safe */ _lib_model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__.OverviewPriceType),
/* harmony export */   PhoneNumberTransformService: () => (/* reexport safe */ _lib_phoneNumber_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_2__.PhoneNumberTransformService),
/* harmony export */   StrikeTroughSummaryContentRow: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.StrikeTroughSummaryContentRow),
/* harmony export */   SummaryContentMonthlyLabel: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentMonthlyLabel),
/* harmony export */   SummaryContentMonthlyPrice: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentMonthlyPrice),
/* harmony export */   SummaryContentPromoRowLevel1: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentPromoRowLevel1),
/* harmony export */   SummaryContentPromoRowLevel2: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentPromoRowLevel2),
/* harmony export */   SummaryContentPromoRowLevel3: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentPromoRowLevel3),
/* harmony export */   SummaryContentRowComponent: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_component__WEBPACK_IMPORTED_MODULE_4__.SummaryContentRowComponent),
/* harmony export */   SummaryContentRowLevel1: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowLevel1),
/* harmony export */   SummaryContentRowLevel2: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowLevel2),
/* harmony export */   SummaryContentRowLevel3: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowLevel3),
/* harmony export */   SummaryContentRowParentLevel1: () => (/* reexport safe */ _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowParentLevel1),
/* harmony export */   SummaryHeaderComponent: () => (/* reexport safe */ _lib_summary_summary_header_summary_header_component__WEBPACK_IMPORTED_MODULE_5__.SummaryHeaderComponent)
/* harmony export */ });
/* harmony import */ var _lib_layout_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/layout-lib.module */ 81682);
/* harmony import */ var _lib_model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/product-overview-data.model */ 35025);
/* harmony import */ var _lib_phoneNumber_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/phoneNumber/phone-number-transform.service */ 81905);
/* harmony import */ var _lib_summary_summary_content_row_summary_content_row_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/summary/summary-content-row/summary-content-row.interface */ 2300);
/* harmony import */ var _lib_summary_summary_content_row_summary_content_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/summary/summary-content-row/summary-content-row.component */ 10981);
/* harmony import */ var _lib_summary_summary_header_summary_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/summary/summary-header/summary-header.component */ 41708);
/* harmony import */ var _lib_services_constraints_constraints_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/constraints/constraints.service */ 67236);








/***/ }),

/***/ 23993:
/*!****************************************************************!*\
  !*** ./libs/shared/layout/src/lib/constants/regex.constant.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegexConstants: () => (/* binding */ RegexConstants)
/* harmony export */ });
class RegexConstants {
  static BASE_SIM_CARD = /^\d{13}$/;
  static BASE_SALES_ORDER = /^\d{1,16}$/;
  static FOREIGN_EID_NUMBER = /^[\d]{9}$/;
  static PHONE_NUMBER = /^[0-9/.+-]{8,15}$/;
  static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
  static ADDRESS_NUMBER = /^[A-Za-z0-9]{0,6}$/;
  static TEXT_FIELD_GENERAL = /^([a-zA-Z0-9\s-']+)$/;
  static TEXT_FIELD_ONLY_ALPHABETS = /^([a-zA-Z\s]+)$/;
  static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_PHONE_NUMBER = /^((00|\+)(?!32)\d{7,15})$/;
  static BELGIAN_EID_NUMBER = /^[a-zA-Z0-9]{3}-[\d]{7}-[\d]{2}$/;
  static FOREIGN_EID_NUMBER_REGEX = /^[a-zA-Z0-9.-]{1,20}$/;
  static NATIONAL_REGISTRY_NUMBER = /^[\d]{2}.[\d]{2}.[\d]{2}-[\d]{3}.[\d]{2}$$/;
  static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:[0-9] ?){6,14}[0-9]$/;
  static BASE_AND_FIXED_NUMBER = /^(((\+32)\d{8})|((00)\d{8})|((0)\d{8}))$/;
  static COMPANY = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.-’']+)$/;
  static MULTI_LINGUAL = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÆæ\s-]+)$/;
  static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
  static TELENET_MOBILE_NUMBER = /^((|0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_AND_FIXED_NUMBER = /^(((00)\d{8,13})|((0)\d{8,9})|((0)\d{8}))$/;
  static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  static FORMATTED_BASE_PHONE_NUMBER = /^((([0-9]{4})[ ][0-9]{2})(([ ]?[0-9]){2})(([ ]?[0-9]){2}))$/;
  static BASE_EMAIL = /^[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+(\.[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static DELIVERY_ORDER_PHONE_NUMBER = /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,13})|((0|00)(?!32)([1-9])\d{7})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
  static ZERO_PREFIX_CHECK_REGEX = /(^[1-9][0-9]{7})|(^[1-9][0-9]{8})$/;
  static DARWIN_EMAIL = /^[-A-Za-z0-9~!#$%^&*_=+}|/{'`?][-A-Za-z0-9~!#$%^&*_=+.}|/{'`?]*[-A-Za-z0-9~!#$%^&*_=+}|/{'`?]@(([-A-Za-z0-9]+[.]?[-A-Za-z0-9]+\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|local|museum|name|net|org|pro|travel|mobi|global|[a-z][a-z]))|(\[([0-9]{1,3}\.){3}[0-9]{1,3}]))$/i;
  static NETWORK_NAME = /([\^`,"'])/;
  static SPECIAL_CHAR_REGEX = /(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])/;
  static LOWER_CASE_REGEX = /(?=.*[a-z])/;
  static UPPER_CASE_REGEX = /(?=.*[A-Z])/;
  static NUMBER_REGEX = /(?=.*[0-9])/;
  static NO_START_END_SPACE_REGEX = /^\s|\s$/;
  static NO_START_SPACE_REGEX = /^\s/;
  static MAC_ADDRESS = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;
  static NO_NONE_WORD_REGEX = /\b(none)\b/g;
  static NUMBER_ONLY_REGEX = '^[0-9]*$';
  static PRICE = /^\d+(?:[.,]\d{2})?$/;
  static INTERNATIONAL_IBAN = '^([A-Z]{2}[ ]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$';
  static NO_START_END_SPACE = /^\S[\w\d\s\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]*\S$/;
  static NUMBER_RANGE_REGEX = /^(\d+\s?-\s?\d+)$/;
  static SIM_CARD_REGEX = /^(\d{13}|\d{19})$/;
  static HEXADECIMAL = '^[a-fA-F0-9]*$';
  static ALPHA_NUMERIC_REGEX = /(?=.*[a-zA-Z0-9])/;
}

/***/ }),

/***/ 81682:
/*!*********************************************************!*\
  !*** ./libs/shared/layout/src/lib/layout-lib.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutLibModule: () => (/* binding */ LayoutLibModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _summary_summary_header_summary_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary-header/summary-header.component */ 41708);
/* harmony import */ var _summary_summary_content_row_summary_content_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary-content-row/summary-content-row.component */ 10981);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);






class LayoutLibModule {
  static ɵfac = function LayoutLibModule_Factory(t) {
    return new (t || LayoutLibModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: LayoutLibModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.TgFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutLibModule, {
    declarations: [_summary_summary_header_summary_header_component__WEBPACK_IMPORTED_MODULE_2__.SummaryHeaderComponent, _summary_summary_content_row_summary_content_row_component__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_4__.PricePipe],
    exports: [_summary_summary_header_summary_header_component__WEBPACK_IMPORTED_MODULE_2__.SummaryHeaderComponent, _summary_summary_content_row_summary_content_row_component__WEBPACK_IMPORTED_MODULE_3__.SummaryContentRowComponent]
  });
})();

/***/ }),

/***/ 35025:
/*!*************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/model/product-overview-data.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewPriceType: () => (/* binding */ OverviewPriceType)
/* harmony export */ });
var OverviewPriceType;
(function (OverviewPriceType) {
  OverviewPriceType[OverviewPriceType["MONTHLY"] = 0] = "MONTHLY";
  OverviewPriceType[OverviewPriceType["ONE_TIME"] = 1] = "ONE_TIME";
})(OverviewPriceType || (OverviewPriceType = {}));

/***/ }),

/***/ 81905:
/*!**********************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/phoneNumber/phone-number-transform.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberTransformService: () => (/* binding */ PhoneNumberTransformService)
/* harmony export */ });
/* harmony import */ var _services_constraints_constraints_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constraints/constraints.service */ 67236);
/* harmony import */ var _constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/regex.constant */ 23993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class PhoneNumberTransformService {
  constraintsService;
  constructor(constraintsService) {
    this.constraintsService = constraintsService;
  }
  transform(phoneNumber) {
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.RegexConstants.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.RegexConstants.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.RegexConstants.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_1__.RegexConstants.INTERNATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterInternationalNumber(phoneNumber);
    }
    return phoneNumber;
  }
  doNormaliseMsisdn(phoneNumber) {
    let transFormedNumber = this.transform(phoneNumber);
    transFormedNumber = transFormedNumber.indexOf('0') !== 0 ? '0' + transFormedNumber : transFormedNumber;
    return transFormedNumber && transFormedNumber.replace(/ /g, '');
  }
  autoFormatPhoneNumber(msisdn) {
    const formattedPhoneNumber = this.doNormaliseMsisdn(msisdn);
    if (!msisdn || !formattedPhoneNumber) {
      return msisdn;
    } else {
      if (this.constraintsService.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.constraintsService.isValidInternationalNumber(msisdn)) {
        return msisdn;
      }
      return formattedPhoneNumber;
    }
  }
  filterNationalPhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    let zoneCode = '0';
    if (this.contains(numberStart, '0032')) {
      numberStart = numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = numberStart.slice(3, numberStart.length);
    }
    if (numberStart.length === 3) {
      numberStart = numberStart.slice(1, numberStart.length);
    }
    if (numberStart[0] === '2' || numberStart[0] === '3' || numberStart[0] === '4' || numberStart[0] === '9') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
    } else {
      zoneCode += numberStart + ' ';
      numberStart = '';
    }
    return zoneCode + numberStart + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterNationalMobileNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (numberStart.indexOf('0032') === 0) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (numberStart.indexOf('+32') === 0) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (numberStart.indexOf('32') === 0) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterBasePhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (this.contains(numberStart, '0032')) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '32')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    if (this.contains(numberStart, '00')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterInternationalNumber(phoneNumber) {
    const numberStart = phoneNumber.slice(0, 2);
    if (this.contains(numberStart, '00')) {
      return '+' + phoneNumber.slice(2, phoneNumber.length);
    }
    return phoneNumber;
  }
  contains(master, test) {
    return master.indexOf(test) > -1;
  }
  static ɵfac = function PhoneNumberTransformService_Factory(t) {
    return new (t || PhoneNumberTransformService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_constraints_constraints_service__WEBPACK_IMPORTED_MODULE_0__.ConstraintsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PhoneNumberTransformService,
    factory: PhoneNumberTransformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 67236:
/*!********************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/services/constraints/constraints.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstraintsService: () => (/* binding */ ConstraintsService)
/* harmony export */ });
/* harmony import */ var _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/regex.constant */ 23993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ConstraintsService {
  isValidationError(fieldName, formGroup, errorType) {
    let isValid = false;
    const control = formGroup.get(fieldName);
    if (control && control.errors) {
      isValid = (control.touched || control.dirty) && control.errors[errorType];
    }
    return isValid;
  }
  isValidationErrorWhenPristine(fieldName, formGroup, errorType) {
    const control = formGroup.get(fieldName);
    return control && control.errors ? control.errors[errorType] : false;
  }
  isValidAddressNumber(val) {
    return _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.ADDRESS_NUMBER.test(val);
  }
  isValidNationalMobileNumber(value) {
    return _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.NATIONAL_MOBILE_NUMBER.test(value);
  }
  isValidInternationalNumber(number) {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.INTERNATIONAL_NUMBER.test(value);
  }
  getFormattedNRN(nrn) {
    nrn = this.removeSpecialCharacters(nrn);
    const nrnLength = nrn && nrn.length;
    if (nrnLength === 11) {
      return nrn.slice(0, 2) + '.' + nrn.slice(2, 4) + '.' + nrn.slice(4, 6) + '-' + nrn.slice(6, 9) + '.' + nrn.slice(9, nrnLength);
    }
    return nrn;
  }
  removeSpecialCharacters(val) {
    return val ? val.replace(/[^0-9a-z]/gi, '') : '';
  }
  static ɵfac = function ConstraintsService_Factory(t) {
    return new (t || ConstraintsService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConstraintsService,
    factory: ConstraintsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 10981:
/*!*************************************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/summary/summary-content-row/summary-content-row.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryContentRowComponent: () => (/* binding */ SummaryContentRowComponent)
/* harmony export */ });
/* harmony import */ var _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-content-row.interface */ 2300);
/* harmony import */ var _model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/product-overview-data.model */ 35025);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../form/src/pipes/price.pipe */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);











const _c0 = a0 => ({
  price: a0
});
function SummaryContentRowComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgFontSize", ctx_r0.strikeTroughConfiguration.fontSize)("tgFontWeight", ctx_r0.strikeTroughConfiguration.fontWeight)("tgMargin", ctx_r0.strikeTroughConfiguration.margin)("tgTextFlow", ctx_r0.strikeTroughConfiguration.textFlow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, ctx_r0.getLabel(ctx_r0.level, ctx_r0.strikeThroughPrice.type), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, ctx_r0.strikeThroughPrice.value))), " ");
  }
}
const _c1 = () => ({
  position: "t",
  size: "m"
});
function SummaryContentRowComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgFontSize", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.fontSize) || "m")("tgFontWeight", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.fontWeight) || "r")("tgMargin", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.margin) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1))("tgTextFlow", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.textFlow) || "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgTextFlow", ctx_r1.getTextFlow());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 6, ctx_r1.getLabel(ctx_r1.level, ctx_r1.price.type), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 9, ctx_r1.price.value))), " ");
  }
}
const _c2 = ["*"];
const CONNECT_FIVE_MESSAGE_GROUP = 'c5-checkout';
class SummaryContentRowComponent {
  level;
  price;
  strikeThroughPrice;
  firstItem;
  promo;
  isFollowedByPromoLabel;
  labelConfiguration;
  priceConfiguration;
  priceType = _model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__.OverviewPriceType;
  strikeTroughConfiguration = _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.StrikeTroughSummaryContentRow;
  rowMargin;
  ngOnInit() {
    if (!this.labelConfiguration) {
      this.labelConfiguration = this.getConfigurationType();
    }
    if (!this.priceConfiguration) {
      this.priceConfiguration = this.getConfigurationType();
    }
    if (this.level === 1 && !this.firstItem) {
      this.rowMargin = _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentRowParentLevel1;
    }
  }
  getConfigurationType() {
    return this.promo ? this.getPromoRowConfigurationType() : this.getRowConfigurationType();
  }
  getPromoRowConfigurationType() {
    switch (this.level) {
      case 1:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentPromoRowLevel1;
      case 2:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentPromoRowLevel2;
      case 3:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentPromoRowLevel3;
      default:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentPromoRowLevel1;
    }
  }
  getRowConfigurationType() {
    switch (this.level) {
      case 1:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentRowLevel1;
      case 2:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentRowLevel2;
      case 3:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentRowLevel3;
      default:
        return _summary_content_row_interface__WEBPACK_IMPORTED_MODULE_0__.SummaryContentRowLevel1;
    }
  }
  getTextFlow() {
    if (this.level === 1) {
      return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.TextFlowType.h4;
    }
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.TextFlowType.body;
  }
  getLabel(level, priceType) {
    let key = '';
    if (level === 1) {
      key = priceType === _model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__.OverviewPriceType.ONE_TIME ? 'one-time-price' : 'price-per-month';
    } else {
      key = priceType === _model_product_overview_data_model__WEBPACK_IMPORTED_MODULE_1__.OverviewPriceType.ONE_TIME ? 'detail-one-time-price' : 'detail-price-per-month';
    }
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.LabelUtil.getLabelKeyWithTypeLabel([CONNECT_FIVE_MESSAGE_GROUP, 'overview', key].join('.'));
  }
  static ɵfac = function SummaryContentRowComponent_Factory(t) {
    return new (t || SummaryContentRowComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SummaryContentRowComponent,
    selectors: [["tg-summary-content-row"]],
    inputs: {
      level: "level",
      price: "price",
      strikeThroughPrice: "strikeThroughPrice",
      firstItem: "firstItem",
      promo: "promo",
      isFollowedByPromoLabel: "isFollowedByPromoLabel",
      labelConfiguration: "labelConfiguration",
      priceConfiguration: "priceConfiguration"
    },
    ngContentSelectors: _c2,
    decls: 6,
    vars: 9,
    consts: [[1, "display--flex", "justify-content--between", "width--full", 3, "tgMargin", "ngClass"], [1, "text-block__left", 3, "tgFontSize", "tgFontWeight", "tgMargin", "tgTextFlow"], [1, "center-align"], ["class", "text-block__left", 3, "tgFontSize", "tgFontWeight", "tgMargin", "tgTextFlow", 4, "ngIf"], ["tgTextFlow", "body", 1, "text-decoration--line-through", "text-block__right", "space-nowrap"], [1, "text-block__right", "space-nowrap", 3, "tgTextFlow"]],
    template: function SummaryContentRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SummaryContentRowComponent_div_4_Template, 5, 12, "div", 3)(5, SummaryContentRowComponent_div_5_Template, 5, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgMargin", (ctx.rowMargin == null ? null : ctx.rowMargin.margin) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("ngClass", ctx.isFollowedByPromoLabel ? "mb--xxxs" : "mb--xxs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgFontSize", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.fontSize)("tgFontWeight", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.fontWeight)("tgMargin", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.margin)("tgTextFlow", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.textFlow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.strikeThroughPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.price);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.MarginDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.TextFlowDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.FontSizeDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.FontWeightDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_2__.PricePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2300:
/*!*************************************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/summary/summary-content-row/summary-content-row.interface.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrikeTroughSummaryContentRow: () => (/* binding */ StrikeTroughSummaryContentRow),
/* harmony export */   SummaryContentMonthlyLabel: () => (/* binding */ SummaryContentMonthlyLabel),
/* harmony export */   SummaryContentMonthlyPrice: () => (/* binding */ SummaryContentMonthlyPrice),
/* harmony export */   SummaryContentPromoRowLevel1: () => (/* binding */ SummaryContentPromoRowLevel1),
/* harmony export */   SummaryContentPromoRowLevel2: () => (/* binding */ SummaryContentPromoRowLevel2),
/* harmony export */   SummaryContentPromoRowLevel3: () => (/* binding */ SummaryContentPromoRowLevel3),
/* harmony export */   SummaryContentRowLevel1: () => (/* binding */ SummaryContentRowLevel1),
/* harmony export */   SummaryContentRowLevel2: () => (/* binding */ SummaryContentRowLevel2),
/* harmony export */   SummaryContentRowLevel3: () => (/* binding */ SummaryContentRowLevel3),
/* harmony export */   SummaryContentRowParentLevel1: () => (/* binding */ SummaryContentRowParentLevel1)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__);

const SummaryContentRowParentLevel1 = {
  margin: [{
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.top,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.large
  }]
};
const SummaryContentRowLevel1 = {
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.h4
};
const SummaryContentPromoRowLevel1 = {
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.legal
};
const SummaryContentRowLevel2 = {
  fontSize: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.FontSize.m,
  fontWeight: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.FontWeight.xxl,
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.left,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.medium
  },
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.body
};
const SummaryContentPromoRowLevel2 = {
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.left,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.medium
  },
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.legal
};
const SummaryContentRowLevel3 = {
  fontSize: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.FontSize.s,
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.left,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.xLarge
  },
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.body
};
const SummaryContentPromoRowLevel3 = {
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.left,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.xLarge
  },
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.legal
};
const StrikeTroughSummaryContentRow = {
  fontSize: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.FontSize.xxs,
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.right,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.xxSmall
  }
};
const SummaryContentMonthlyLabel = {
  fontSize: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.FontSize.s,
  margin: {
    position: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginPosition.left,
    size: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.MarginSize.xLarge
  },
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.body
};
const SummaryContentMonthlyPrice = {
  textFlow: _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_0__.TextFlowType.h4
};

/***/ }),

/***/ 41708:
/*!***************************************************************************************!*\
  !*** ./libs/shared/layout/src/lib/summary/summary-header/summary-header.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryHeaderComponent: () => (/* binding */ SummaryHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../form/src/directives/fonts/font-color/font-color.directive */ 4134);
/* harmony import */ var _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);









const _c0 = () => ({
  position: "l",
  size: "s"
});
function SummaryHeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgMargin", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.noLinkText), " ");
  }
}
function SummaryHeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryHeaderComponent_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.linkClicked.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgMargin", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.linkText, " ");
  }
}
class SummaryHeaderComponent {
  title;
  icon;
  linkText;
  noLinkText;
  linkClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  static ɵfac = function SummaryHeaderComponent_Factory(t) {
    return new (t || SummaryHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SummaryHeaderComponent,
    selectors: [["tg-summary-header"]],
    inputs: {
      title: "title",
      icon: "icon",
      linkText: "linkText",
      noLinkText: "noLinkText"
    },
    outputs: {
      linkClicked: "linkClicked"
    },
    decls: 7,
    vars: 5,
    consts: [[1, "summary-content--row", "flex-direction--column"], [1, "display--flex", "justify-content--between", "mb--xxs", "width--full"], [1, "text-block__left", "text-font-family--t4", "text-weight--g", "text--m"], ["class", "text-block__right", "tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 3, "tgMargin", 4, "ngIf"], ["class", "link link--unstyled text-flow text-flow--hyperlink", "tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 3, "tgMargin", "click", 4, "ngIf"], ["tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 1, "text-block__right", 3, "tgMargin"], ["tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 1, "link", "link--unstyled", "text-flow", "text-flow--hyperlink", 3, "tgMargin", "click"]],
    template: function SummaryHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SummaryHeaderComponent_div_5_Template, 3, 5, "div", 3)(6, SummaryHeaderComponent_div_6_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.linkText && ctx.noLinkText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linkText);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__.MarginDirective, _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__.FontSizeDirective, _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__.FontFamilyDirective, _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__.FontWeightDirective, _form_src_directives_margin_margin_directive__WEBPACK_IMPORTED_MODULE_2__.FontColorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_shared_layout_src_index_ts-_38680.js.map