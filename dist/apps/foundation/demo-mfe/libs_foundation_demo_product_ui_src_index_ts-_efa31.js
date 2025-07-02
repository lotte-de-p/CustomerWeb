(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_demo_product_ui_src_index_ts-_efa31"],{

/***/ 31020:
/*!******************************************************!*\
  !*** ./libs/foundation/demo/product/ui/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleHeaderComponent: () => (/* reexport safe */ _lib_collapsible_header_collapsible_header_component__WEBPACK_IMPORTED_MODULE_1__.CollapsibleHeaderComponent),
/* harmony export */   PhoneNumberPipe: () => (/* reexport safe */ _lib_phone_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _lib_phone_number_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/phone-number.pipe */ 18465);
/* harmony import */ var _lib_collapsible_header_collapsible_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/collapsible-header/collapsible-header.component */ 15467);



/***/ }),

/***/ 15467:
/*!****************************************************************************************************!*\
  !*** ./libs/foundation/demo/product/ui/src/lib/collapsible-header/collapsible-header.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleHeaderComponent: () => (/* binding */ CollapsibleHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




function CollapsibleHeaderComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CollapsibleHeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollapsibleHeaderComponent_div_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "collapsible-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.detailRef);
  }
}
const _c0 = (a0, a1) => ({
  "icon-chevron-up": a0,
  "icon-chevron-down": a1
});
class CollapsibleHeaderComponent {
  constructor() {
    this.showContent = false;
  }
  toggleContentVisebility() {
    this.showContent = !this.showContent;
  }
  static #_ = this.ɵfac = function CollapsibleHeaderComponent_Factory(t) {
    return new (t || CollapsibleHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CollapsibleHeaderComponent,
    selectors: [["demo-product-collapsible-header"]],
    contentQueries: function CollapsibleHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.detailRef = _t.first);
      }
    },
    inputs: {
      header: "header"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 8,
    consts: [[1, "display--flex", "justify-content--between", "cur-pointer", "align-items--center", 3, "click"], [1, "text-font-family--t7"], [1, "icon", "icon-md", "product-overview__icon-section", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function CollapsibleHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsibleHeaderComponent_Template_div_click_0_listener() {
          return ctx.toggleContentVisebility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CollapsibleHeaderComponent_div_4_Template, 2, 2, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "collapsible-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.showContent, !ctx.showContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25834:
/*!***********************************************************************************!*\
  !*** ./libs/foundation/demo/product/ui/src/lib/phone-number-transform.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberTransformService: () => (/* binding */ PhoneNumberTransformService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PhoneNumberTransformService {
  static #_ = this.NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static #_2 = this.INTERNATIONAL_NUMBER = /^(\+|00|0)(?:\d ?){6,14}\d$/;
  static #_3 = this.NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static #_4 = this.BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  transform(phoneNumber) {
    if (PhoneNumberTransformService.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    return this.filterInternationalNumber(phoneNumber);
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
      if (this.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.isValidInternationalNumber(msisdn)) {
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
    if (numberStart[0] === '2' || numberStart[0] === '3') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
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
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
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
  isValidNationalMobileNumber(value) {
    return PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(value);
  }
  isValidInternationalNumber(number) {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return PhoneNumberTransformService.INTERNATIONAL_NUMBER.test(value);
  }
  static #_5 = this.ɵfac = function PhoneNumberTransformService_Factory(t) {
    return new (t || PhoneNumberTransformService)();
  };
  static #_6 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PhoneNumberTransformService,
    factory: PhoneNumberTransformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18465:
/*!**********************************************************************!*\
  !*** ./libs/foundation/demo/product/ui/src/lib/phone-number.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-number-transform.service */ 25834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class PhoneNumberPipe {
  constructor(phoneNumberTransformService) {
    this.phoneNumberTransformService = phoneNumberTransformService;
  }
  transform(phoneNumber) {
    return this.transFormPhoneNumber(phoneNumber);
  }
  transFormPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
  static #_ = this.ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_foundation_demo_product_ui_src_index_ts-_efa31.js.map