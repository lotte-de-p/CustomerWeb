(self["webpackChunkproduct_journey_mfe"] = self["webpackChunkproduct_journey_mfe"] || []).push([["libs_install_product-journey_appointments_ui_src_index_ts-_2cbe0"],{

/***/ 27395:
/*!*******************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentRegexConstant: () => (/* reexport safe */ _lib_appointment_regex_constant__WEBPACK_IMPORTED_MODULE_5__.AppointmentRegexConstant),
/* harmony export */   AppointmentSkeletonComponent: () => (/* reexport safe */ _lib_appointment_skeleton_appointment_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.AppointmentSkeletonComponent),
/* harmony export */   AppointmentTestFactory: () => (/* reexport safe */ _mock_appointment_testfactory__WEBPACK_IMPORTED_MODULE_6__.AppointmentTestFactory),
/* harmony export */   PhoneNumberPipe: () => (/* reexport safe */ _lib_phone_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberPipe),
/* harmony export */   PostInstallationInfoComponent: () => (/* reexport safe */ _lib_post_installation_info_post_installation_info_component__WEBPACK_IMPORTED_MODULE_2__.PostInstallationInfoComponent),
/* harmony export */   PricePipe: () => (/* reexport safe */ _lib_price_pipe__WEBPACK_IMPORTED_MODULE_8__.PricePipe),
/* harmony export */   ReplaceDecimalsPipe: () => (/* reexport safe */ _lib_replace_decimals_pipe__WEBPACK_IMPORTED_MODULE_7__.ReplaceDecimalsPipe),
/* harmony export */   ScheduledAppointmentInfoComponent: () => (/* reexport safe */ _lib_scheduled_appointment_info_scheduled_appointment_info_component__WEBPACK_IMPORTED_MODULE_1__.ScheduledAppointmentInfoComponent),
/* harmony export */   SlideMenuComponent: () => (/* reexport safe */ _lib_slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_9__.SlideMenuComponent),
/* harmony export */   TimeSlotSkeletonComponent: () => (/* reexport safe */ _lib_time_slot_skeleton_time_slot_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.TimeSlotSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _lib_phone_number_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/phone-number.pipe */ 32119);
/* harmony import */ var _lib_scheduled_appointment_info_scheduled_appointment_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/scheduled-appointment-info/scheduled-appointment-info.component */ 51055);
/* harmony import */ var _lib_post_installation_info_post_installation_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/post-installation-info/post-installation-info.component */ 62819);
/* harmony import */ var _lib_appointment_skeleton_appointment_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/appointment-skeleton/appointment-skeleton.component */ 54761);
/* harmony import */ var _lib_time_slot_skeleton_time_slot_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/time-slot-skeleton/time-slot-skeleton.component */ 88469);
/* harmony import */ var _lib_appointment_regex_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/appointment-regex.constant */ 85752);
/* harmony import */ var _mock_appointment_testfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/appointment.testfactory */ 84154);
/* harmony import */ var _lib_replace_decimals_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/replace-decimals.pipe */ 69205);
/* harmony import */ var _lib_price_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/price.pipe */ 26848);
/* harmony import */ var _lib_slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/slide-menu/slide-menu.component */ 61085);











/***/ }),

/***/ 85752:
/*!********************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/appointment-regex.constant.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentRegexConstant: () => (/* binding */ AppointmentRegexConstant)
/* harmony export */ });
class AppointmentRegexConstant {
  static TEXT_FIELD_ONLY_ALPHABETS = /^([a-zA-Z\s]+)$/;
  static SEPARATOR = /[,.]00/g;
}

/***/ }),

/***/ 54761:
/*!*********************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/appointment-skeleton/appointment-skeleton.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentSkeletonComponent: () => (/* binding */ AppointmentSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class AppointmentSkeletonComponent {
  static ɵfac = function AppointmentSkeletonComponent_Factory(t) {
    return new (t || AppointmentSkeletonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppointmentSkeletonComponent,
    selectors: [["tg-appointment-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 1,
    consts: [[1, "mx--xs--lg", "mr--n", "mt--xxl"], [1, "mb--m", "mb--n--lg", "col-4"], [1, "mb--m", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "my--m"], [1, "heading--notopmargin", "mb-0", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "background-white", "align-content--space-between", "p--xl--md", "p--m"], [1, "display--flex", "flex-direction--row--md", "flex-direction--column", "mr--m--md", "mr--n"], [1, "col-md-6", "col-12", "p--n", "flex-grow", "mb--n--md", "mb--l", "mr--s--md", "mr--n"], [1, "col-3", "heading--4", "heading--notopmargin", "skeleton", "skeleton--basic", "skeleton--one-line"], [1, "skeleton", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "my--xl--md", "my--l"], [1, "divider", "divider--xxs__very-light-grey"], [1, "p--xxl"], [1, "background-white", "align-content--space-between", "p--xl--md", "p--m", "mt--m"], [1, "col-3", "heading--notopmargin", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "mt--g--md", "mt--xl", "mb--m"], [1, "col-3", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "col-3", "skeleton", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "col-4", "skeleton", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "align-self--flex-start", "align-self--center--lg", "mt--xs"], [1, "button", "button--tertiary", "button--small", "skeleton", "skeleton--basic", "skeleton--button"]],
    template: function AppointmentSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 17)(25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19)(27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "appointment-skeleton");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21142:
/*!************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/phone-number-transform.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberTransformService: () => (/* binding */ PhoneNumberTransformService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PhoneNumberTransformService {
  static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:\d ?){6,14}\d$/;
  static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
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
  static ɵfac = function PhoneNumberTransformService_Factory(t) {
    return new (t || PhoneNumberTransformService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PhoneNumberTransformService,
    factory: PhoneNumberTransformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32119:
/*!***********************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/phone-number.pipe.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-number-transform.service */ 21142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class PhoneNumberPipe {
  phoneNumberTransformService;
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
  static ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 62819:
/*!*************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/post-installation-info/post-installation-info.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostInstallationInfoComponent: () => (/* binding */ PostInstallationInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function PostInstallationInfoComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.postInstallationHtml, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "post-appointment-useful-info");
  }
}
const _c0 = (a0, a1) => ({
  "icon-chevron-up": a0,
  "icon-chevron-down": a1
});
function PostInstallationInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostInstallationInfoComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleFeatures = !ctx_r2.toggleFeatures);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PostInstallationInfoComponent_div_0_div_11_Template, 1, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointment-show-useful-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "ng.appointments.post-installation.lbl"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r0.toggleFeatures, !ctx_r0.toggleFeatures));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r0.toggleFeatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.postInstallationHtml);
  }
}
class PostInstallationInfoComponent {
  appointmentStatus;
  postInstallationHtml;
  STATUS_COMPLETED = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentStatusEnum.COMPLETED;
  toggleFeatures = false;
  static ɵfac = function PostInstallationInfoComponent_Factory(t) {
    return new (t || PostInstallationInfoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PostInstallationInfoComponent,
    selectors: [["tg-post-installation-info"]],
    inputs: {
      appointmentStatus: "appointmentStatus",
      postInstallationHtml: "postInstallationHtml"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "background-white", 4, "ngIf"], [1, "background-white"], [1, "display--flex", "flex-wrap--wrap"], [1, "col-md-12", "col-12", "p--n"], [1, "display--flex", "justify-content--between", "cursor--pointer", "p--xl--md", "p--m", 3, "click"], [1, "heading--nomargin"], [1, "icon", 3, "ngClass"], [3, "hidden"], [1, "divider", "divider--xxs__very-light-grey", "mb--xl--md", "mb--l"], [1, "px--xl--md", "px--m", "pb--m", "pb--xl--md"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
    template: function PostInstallationInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PostInstallationInfoComponent_div_0_Template, 12, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appointmentStatus === ctx.STATUS_COMPLETED && ctx.postInstallationHtml);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 26848:
/*!****************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/price.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricePipe: () => (/* binding */ PricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PricePipe {
  transform(price) {
    const newPrice = Number(price);
    return newPrice ? newPrice.toFixed(2).replace('.', ',') : '';
  }
  static ɵfac = function PricePipe_Factory(t) {
    return new (t || PricePipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "price",
    type: PricePipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 69205:
/*!***************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/replace-decimals.pipe.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaceDecimalsPipe: () => (/* binding */ ReplaceDecimalsPipe)
/* harmony export */ });
/* harmony import */ var _appointment_regex_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-regex.constant */ 85752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ReplaceDecimalsPipe {
  transform(value) {
    if (value.toString().includes(',00') || value.toString().includes('.00')) {
      return value.toString().replace(_appointment_regex_constant__WEBPACK_IMPORTED_MODULE_0__.AppointmentRegexConstant.SEPARATOR, '');
    }
    return value.toString();
  }
  static ɵfac = function ReplaceDecimalsPipe_Factory(t) {
    return new (t || ReplaceDecimalsPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "replaceDecimals",
    type: ReplaceDecimalsPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 51055:
/*!*********************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/scheduled-appointment-info/scheduled-appointment-info.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduledAppointmentInfoComponent: () => (/* binding */ ScheduledAppointmentInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function ScheduledAppointmentInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2)(14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/moving-van-desktop.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointments-limitation-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "ng.appointments.limitation-message.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "ng.appointments.limitation-message.subtext"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointments-limitation-message-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "ng.appointments.limitation-message.description-text-one"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 14, "ng.appointments.limitation-message.description-text-two"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 18, "ng.appointments.limitation-message.help-phonenumber-" + ctx_r0.appointmentType)), " ");
  }
}
class ScheduledAppointmentInfoComponent {
  isScheduledAppointment;
  appointmentType;
  static ɵfac = function ScheduledAppointmentInfoComponent_Factory(t) {
    return new (t || ScheduledAppointmentInfoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ScheduledAppointmentInfoComponent,
    selectors: [["tg-scheduled-appointment-info"]],
    inputs: {
      isScheduledAppointment: "isScheduledAppointment",
      appointmentType: "appointmentType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "mb--g--md mb--xl background-white p--xl--md p--l", 4, "ngIf"], [1, "mb--g--md", "mb--xl", "background-white", "p--xl--md", "p--l"], [1, "row", "m-0"], [1, "col-md-6", "text-align--center", "p--n", "mb--m", "mb--n--md"], ["alt", "", 1, "m--auto", 3, "src"], [1, "col-md-6", "text-flow", "text-flow--h5", "text-align--left--md", "text-align--center", "p--n"], [1, "m--n"], [1, "my--xl--md", "my--l"], [1, "divider", "divider--xxs__very-light-grey"], [1, "text-align--left"], [1, "m--n", "font--body-regular", 3, "innerHTML"], [1, "m--n", "text-flow", "text-flow--h5"]],
    template: function ScheduledAppointmentInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ScheduledAppointmentInfoComponent_div_0_Template, 23, 20, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScheduledAppointment);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.LowerCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 61085:
/*!*************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/slide-menu/slide-menu.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideMenuComponent: () => (/* binding */ SlideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




const _c0 = a0 => ({
  slide: a0
});
const _c1 = ["*"];
class SlideMenuComponent {
  showMenu;
  title;
  closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  close() {
    if (this.showMenu) {
      this.closeMenu.emit();
    }
  }
  static ɵfac = function SlideMenuComponent_Factory(t) {
    return new (t || SlideMenuComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideMenuComponent,
    selectors: [["tg-slide-menu"]],
    inputs: {
      showMenu: "showMenu",
      title: "title"
    },
    outputs: {
      closeMenu: "closeMenu"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 10,
    vars: 7,
    consts: [[1, "sidebar", 3, "ngClass"], [1, "sidebar__menu"], [1, "sidebar__heading", "display--flex", "align-items--center", "px--l", "pt--l", "justify-content--end", "mb--m"], ["for", "menu-control", 1, "sidebar__close", "cursor--pointer", 3, "click"], [1, "icon", "icon-cross"], [1, "heading--5", "mt--n", "mb--l--md", "mb--xs", "px--l"], [1, "sidebar__content", "mb--l"], [1, "slide-menu-overlay", 3, "ngClass", "click"]],
    template: function SlideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Template_div_click_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Template_div_click_9_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showMenu));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  transform: translatey(100%);\n  overflow-y: scroll;\n  width: 100vw;\n  max-height: 70vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n  transition: all 0.4s ease-in-out;\n  background: #fff;\n}\n@media only screen and (min-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    max-height: initial;\n    overflow-y: auto;\n    width: 45vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    transform: translatex(100%);\n  }\n}\n@media only screen and (min-width: 1192px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 35vw;\n  }\n}\n\n.slide.sidebar[_ngcontent-%COMP%] {\n  transform: translatey(0);\n}\n@media only screen and (min-width: 768px) {\n  .slide.sidebar[_ngcontent-%COMP%] {\n    transform: translatex(0);\n  }\n}\n.slide[_ngcontent-%COMP%]    ~ .slide-menu-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  transition: background-color 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvaW5zdGFsbC9wcm9kdWN0LWpvdXJuZXkvYXBwb2ludG1lbnRzL3VpL3NyYy9saWIvc2xpZGUtbWVudS9zbGlkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQVpGO0lBYUksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7RUFFRjtBQUNGO0FBQUU7RUF2QkY7SUF3QkksV0FBQTtFQUdGO0FBQ0Y7O0FBQ0U7RUFDRSx3QkFBQTtBQUVKO0FBQUk7RUFIRjtJQUlJLHdCQUFBO0VBR0o7QUFDRjtBQUFFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTAwJSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LWhlaWdodDogaW5pdGlhbDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiA0NXZ3O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgxMDAlKTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE5MnB4KSB7XG4gICAgd2lkdGg6IDM1dnc7XG4gIH1cbn1cblxuLnNsaWRlIHtcbiAgJi5zaWRlYmFyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XG4gICAgfVxuICB9XG5cbiAgJiB+IC5zbGlkZS1tZW51LW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 88469:
/*!*****************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/lib/time-slot-skeleton/time-slot-skeleton.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSlotSkeletonComponent: () => (/* binding */ TimeSlotSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class TimeSlotSkeletonComponent {
  static ɵfac = function TimeSlotSkeletonComponent_Factory(t) {
    return new (t || TimeSlotSkeletonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TimeSlotSkeletonComponent,
    selectors: [["tg-time-slot-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mt--l", "mr--l--md", "mr--n", "mb--m", "mb--n--lg", "ml--s--md", "ml--n", "flex-grow"], [1, "heading--notopmargin", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines"]],
    template: function TimeSlotSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "h2", 1)(2, "div", 2)(3, "div", 2)(4, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "time-slot-skeleton");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 84154:
/*!******************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/ui/src/mock/appointment.testfactory.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentTestFactory: () => (/* binding */ AppointmentTestFactory)
/* harmony export */ });
class AppointmentTestFactory {
  static getOpenAppointmentsMock() {
    return [{
      appointmentId: 'TI_1518555414_20230731_112499',
      appointmentType: 'INSTALL',
      appointmentSubType: '',
      appointmentStatus: 'NEW',
      appointmentDate: '2023-10-12',
      cableAppointment: false,
      fiberAppointment: false,
      salesOrderId: '9167375606013226000',
      cost: '102.8500',
      productsInfo: [{
        name: 'All Internet'
      }],
      installationDateAtNewAddress: '2023-09-05T22:00:00Z',
      customer: {
        contactName: 'Test Romeijnder',
        language: 'NL',
        notificationMethod: 'EMAIL',
        notificationContact: 'test@info.be'
      },
      timeSlot: {
        periodOfDay: 'MI',
        startTime: '10:00',
        endTime: '14:30'
      },
      address: {
        street: 'Pareipoelstrt',
        houseNumber: '126',
        boxNumber: '',
        zip: '2800',
        city: 'Mechelen',
        countryCode: 'BE',
        country: 'België'
      },
      isUpcomingAppointment: true,
      getDisplayStatus: 'SCHEDULED',
      isNewAppointment: false,
      isCompletedOrCancelledAppointment: false,
      isScheduledAppointment: false,
      isRepairAppointment: false
    }, {
      appointmentId: 'TI_1518555414_20230731_112415',
      appointmentType: 'MOVE',
      appointmentSubType: '',
      appointmentStatus: 'NEW',
      appointmentDate: '2023-10-10',
      cableAppointment: false,
      fiberAppointment: false,
      salesOrderId: '9167375606013226000',
      cost: '102.8500',
      productsInfo: [{
        name: 'Internet'
      }],
      installationDateAtNewAddress: '',
      customer: {
        contactName: 'Lucas',
        language: 'NL',
        notificationMethod: 'SMS',
        notificationContact: '0465198787'
      },
      timeSlot: {},
      address: {
        locationId: '9169507398513822922',
        street: 'Pareipoelstraat',
        houseNumber: '12',
        boxNumber: '',
        zip: '2800',
        city: 'Mechelen',
        countryCode: 'BE',
        country: 'België'
      },
      isUpcomingAppointment: true,
      getDisplayStatus: 'NEW',
      isNewAppointment: true,
      isCompletedOrCancelledAppointment: false,
      isScheduledAppointment: false,
      isRepairAppointment: false
    }];
  }
  static getCompletedAppointmentsMock() {
    return [{
      appointmentId: 'TR_1202416140_20231024_150812',
      appointmentType: 'REPAIR',
      appointmentSubType: 'Repair',
      appointmentStatus: 'COMPLETED',
      appointmentDate: '2023-10-24',
      cableAppointment: false,
      fiberAppointment: false,
      salesOrderId: '9168107526013142062',
      cost: '',
      productsInfo: [],
      installationDateAtNewAddress: '',
      customer: {
        contactName: 'Mr. Raphael Bakhuizen',
        language: 'EN',
        notificationMethod: 'SMS',
        notificationContact: '0452458456'
      },
      timeSlot: {
        periodOfDay: 'PM',
        startTime: '12:30',
        endTime: '18:00'
      },
      address: {
        street: 'Bleekstraat',
        houseNumber: '12',
        boxNumber: '',
        zip: '2800',
        city: 'Mechelen',
        countryCode: 'BE',
        country: 'België'
      },
      isUpcomingAppointment: false,
      getDisplayStatus: 'COMPLETED',
      isNewAppointment: false,
      isCompletedOrCancelledAppointment: true,
      isScheduledAppointment: false,
      isRepairAppointment: true
    }];
  }
  static getSelectedAppointmentWithStatus(status) {
    const selectedAppointment = this.getSelectedAppointment();
    selectedAppointment.appointmentStatus = status;
    return selectedAppointment;
  }
  static getSelectedAppointment() {
    return {
      appointmentId: 'TI_1518555414_20230731_112499',
      appointmentType: 'REPAIR',
      appointmentSubType: 'repair',
      appointmentStatus: 'NEW',
      appointmentDate: '2023-10-12',
      cableAppointment: false,
      fiberAppointment: false,
      salesOrderId: '9167375606013226000',
      cost: '102.8500',
      productsInfo: [{
        name: 'All Internet'
      }],
      installationDateAtNewAddress: '2023-09-05T22:00:00Z',
      customer: {
        contactName: 'Test Romeijnder',
        language: 'NL',
        notificationMethod: 'EMAIL',
        notificationContact: 'test@info.be'
      },
      timeSlot: {
        periodOfDay: 'MI',
        startTime: '10:00',
        endTime: '14:30'
      },
      address: {
        locationId: '9169507398513822922',
        street: 'Pareipoelstrt',
        houseNumber: '126',
        boxNumber: '',
        zip: '2800',
        city: 'Mechelen',
        countryCode: 'BE',
        country: 'België'
      },
      isUpcomingAppointment: true,
      getDisplayStatus: 'SCHEDULED',
      isNewAppointment: false,
      isCompletedOrCancelledAppointment: false,
      isScheduledAppointment: false,
      isRepairAppointment: true
    };
  }
  static outdoorAppointment() {
    return {
      locationIds: ['9169507398513822922']
    };
  }
}

/***/ })

}])
//# sourceMappingURL=libs_install_product-journey_appointments_ui_src_index_ts-_2cbe0.js.map