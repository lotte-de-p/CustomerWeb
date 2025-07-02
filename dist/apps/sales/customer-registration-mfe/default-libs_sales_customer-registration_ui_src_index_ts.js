(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_ui_src_index_ts"],{

/***/ 75800:
/*!**********************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormComponent: () => (/* reexport safe */ _lib_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_4__.AddressFormComponent),
/* harmony export */   AddressToggleComponent: () => (/* reexport safe */ _lib_sales_address_toggle_address_toggle_component__WEBPACK_IMPORTED_MODULE_5__.AddressToggleComponent),
/* harmony export */   CustomerRegistrationTitleComponent: () => (/* reexport safe */ _lib_customer_registration_title_customer_registration_title_component__WEBPACK_IMPORTED_MODULE_1__.CustomerRegistrationTitleComponent),
/* harmony export */   ErrorMessageComponent: () => (/* reexport safe */ _lib_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_0__.ErrorMessageComponent),
/* harmony export */   ErrorMessageWithLoginButtonComponent: () => (/* reexport safe */ _lib_error_message_with_login_button_error_message_with_login_button_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessageWithLoginButtonComponent),
/* harmony export */   RestrictedProductComponent: () => (/* reexport safe */ _lib_restricted_product_restricted_product_component__WEBPACK_IMPORTED_MODULE_2__.RestrictedProductComponent)
/* harmony export */ });
/* harmony import */ var _lib_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/error-message/error-message.component */ 85263);
/* harmony import */ var _lib_customer_registration_title_customer_registration_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/customer-registration-title/customer-registration-title.component */ 18692);
/* harmony import */ var _lib_restricted_product_restricted_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/restricted-product/restricted-product.component */ 49300);
/* harmony import */ var _lib_error_message_with_login_button_error_message_with_login_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/error-message-with-login-button/error-message-with-login-button.component */ 22457);
/* harmony import */ var _lib_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/address-form/address-form.component */ 79174);
/* harmony import */ var _lib_sales_address_toggle_address_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/sales-address-toggle/address-toggle.component */ 58137);







/***/ }),

/***/ 79174:
/*!********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/address-form/address-form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormComponent: () => (/* binding */ AddressFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












function AddressFormComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", location_r21.postalCode, " - ", location_r21.location, " ");
  }
}
function AddressFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.error.zipCode.required"), " ");
  }
}
function AddressFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.error.zipCode.invalid"), " ");
  }
}
function AddressFormComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const street_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", street_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", street_r26, " ");
  }
}
function AddressFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.error.street.required"), " ");
  }
}
function AddressFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.error.street.invalid"), " ");
  }
}
function AddressFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.error.houseNumber.required"), " ");
  }
}
function AddressFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.address.houseNumber-pattern.error"));
  }
}
function AddressFormComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subhousenr_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subhousenr_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subhousenr_r31, " ");
  }
}
function AddressFormComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.address.subHouse-pattern.error"));
  }
}
function AddressFormComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boxNo_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boxNo_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boxNo_r36, " ");
  }
}
function AddressFormComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.address.boxNumber-pattern.error"));
  }
}
const _c0 = a0 => ({
  "disabled-state": a0
});
let AddressFormComponent = class AddressFormComponent {
  set locationSuggestions(value) {
    this._locationSuggestions = value || [];
    this.populateMunicipalityFromItsMe();
  }
  set streetSuggestions(value) {
    this._streetSuggestions = value || [];
    this.populateStreetFromItsMe();
  }
  constructor() {
    this.isFormSubmit = false;
    this.addressType = 'default';
    this.isManualAddressAllowed = false;
    this.subHouseNoSuggestions = [];
    this.boxNoSuggestions = [];
    this.ZIP_CODE = 'zipCode';
    this.STREET = 'street';
    this._locationSuggestions = [];
    this.filteredLocationSuggestions = [];
    this._streetSuggestions = [];
    this.filteredStreetSuggestions = [];
    this.itsMeFlow = false;
    this.isFormReady = false;
    this.updateStreetsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.updateSubHouseEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.updateBoxEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.saveAddressEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addressForm = _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_3__.AddressForm.build();
  }
  ngOnInit() {
    this.addressForm.controls[this.ZIP_CODE].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredLocationSuggestions = this.filterMunicipality(value);
      } else {
        if (value.postalCode && this.hasValidPostalCode()) {
          this.updateStreets(value.postalCode);
          this.enableFormField(this.STREET);
        }
      }
    });
    this.addressForm.controls[this.STREET].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(value => {
      this.filteredStreetSuggestions = this.getFilteredStreetSuggestions(value);
      if (this.hasValidStreet()) {
        ['houseNumber', 'subHouse', 'boxNumber'].forEach(field => this.enableFormField(field));
      }
    });
    this.addressForm.controls['subHouse'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(() => {
      this.updateSubHouseEmitter.emit();
    });
    this.addressForm.controls['boxNumber'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(() => {
      this.updateBoxEmitter.emit();
    });
  }
  getFilteredStreetSuggestions(value, strict = false) {
    return this._streetSuggestions.filter(street => strict ? street.toLowerCase() === value.toLowerCase() : street.toLowerCase().includes(value.toLowerCase()));
  }
  populateAddressFormFieldsFromItsMe() {
    const customerAddress = this.itsMeDetails?.customerAddress;
    if (!customerAddress) {
      this.isFormReady = true;
      return;
    }
    if (this.matchedMunicipality && this.matchedStreet) {
      this.addressForm.patchValue({
        zipCode: this.matchedMunicipality,
        street: this.matchedStreet,
        houseNumber: customerAddress.houseNumber,
        subHouse: customerAddress.subHouseNumber,
        boxNumber: customerAddress.boxNumber
      });
      [this.STREET, 'houseNumber', 'subHouse', 'boxNumber'].forEach(field => this.enableFormField(field));
    }
  }
  enableFormField(controlName) {
    this.addressForm.controls[controlName].enable();
  }
  displayFunction(option) {
    return option ? option.postalCode + ' - ' + option.location : '';
  }
  filterMunicipality(keyWord, strict = false) {
    keyWord = keyWord.toLowerCase();
    return this._locationSuggestions.filter(suggestion => {
      const {
        postalCode,
        location
      } = suggestion;
      return postalCode && location && (strict ? postalCode + ' - ' + location.toLowerCase() === keyWord : postalCode.toLowerCase().includes(keyWord) || location.toLowerCase().includes(keyWord));
    });
  }
  updateStreets(postalCode) {
    this.updateStreetsEmitter.emit(postalCode);
  }
  hasValidPostalCode() {
    return this.addressForm.controls[this.ZIP_CODE].valid;
  }
  hasValidStreet() {
    return this.addressForm.controls[this.STREET].valid;
  }
  updateAddress(formControlName) {
    if (this.addressForm.controls[formControlName].valid && !this.addressForm.controls[formControlName].disabled) {
      this.saveAddressEmitter.emit(this.getRequestData());
    }
  }
  getRequestData() {
    const municipality = this.addressForm.controls[this.ZIP_CODE].value;
    return {
      houseNumber: this.addressForm.controls['houseNumber'].value,
      municipality: municipality.location,
      postalCode: municipality.postalCode,
      street: this.addressForm.controls[this.STREET].value,
      boxNumber: this.addressForm.controls['boxNumber'].value,
      subHouseNumber: this.addressForm.controls['subHouse'].value,
      type: this.addressType
    };
  }
  validateForm() {
    const formGroup = this.addressForm;
    const valid = formGroup.valid;
    if (!valid) {
      [this.ZIP_CODE, this.STREET, 'houseNumber'].forEach(formControlName => {
        this.enableFormField(formControlName);
        this.addressForm.controls[formControlName].markAsTouched();
        this.addressForm.controls[formControlName].markAsDirty();
      });
    }
    return valid;
  }
  populateMunicipalityFromItsMe() {
    if (this.itsMeDetails) {
      const itsMePostalCode = this.itsMeDetails?.customerAddress?.postalCode?.trim();
      const itsMeMunicipality = this.itsMeDetails?.customerAddress?.municipality?.trim();
      if (this._locationSuggestions.length && itsMePostalCode) {
        this.itsMeFlow = true;
        this.updateStreets(itsMePostalCode);
        this.matchedMunicipality = this._locationSuggestions.filter(suggestedMunicipality => suggestedMunicipality.postalCode === itsMePostalCode).find(filteredMunicipality => filteredMunicipality.location?.toLowerCase() === itsMeMunicipality?.toLowerCase());
      }
    }
  }
  populateStreetFromItsMe() {
    if (this.itsMeDetails) {
      const street = this.itsMeDetails?.customerAddress?.street?.trim().toLowerCase();
      if (this._streetSuggestions.length && street && this.itsMeFlow) {
        this.matchedStreet = this._streetSuggestions.find(suggestion => suggestion.toLowerCase() === street.toLowerCase());
        this.populateAddressFormFieldsFromItsMe();
        this.itsMeFlow = false;
        this.isFormReady = true;
      }
    }
  }
  isValidInput(formControlName, value) {
    if (formControlName === this.ZIP_CODE && this.filterMunicipality(value, true).length === 0) this.setError(formControlName);
    if (formControlName === this.STREET && this.getFilteredStreetSuggestions(value, true).length === 0) this.setError(formControlName);
  }
  setError(formControlName) {
    this.addressForm.controls[formControlName].setErrors({
      invalid: true
    });
  }
  static #_ = this.ɵfac = function AddressFormComponent_Factory(t) {
    return new (t || AddressFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressFormComponent,
    selectors: [["tg-sales-customer-registration-address-form"]],
    inputs: {
      isFormSubmit: "isFormSubmit",
      addressType: "addressType",
      isManualAddressAllowed: "isManualAddressAllowed",
      subHouseNoSuggestions: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "subHouseNoSuggestions", "subHouseNoSuggestions", value => {
        return value ? value : [];
      }],
      boxNoSuggestions: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "boxNoSuggestions", "boxNoSuggestions", value => {
        return value ? value : [];
      }],
      itsMeDetails: "itsMeDetails",
      locationSuggestions: "locationSuggestions",
      streetSuggestions: "streetSuggestions"
    },
    outputs: {
      updateStreetsEmitter: "updateStreetsEmitter",
      updateSubHouseEmitter: "updateSubHouseEmitter",
      updateBoxEmitter: "updateBoxEmitter",
      saveAddressEmitter: "saveAddressEmitter"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 67,
    vars: 59,
    consts: [["action", "", "autocomplete", "off", "messageGroup", "address", 3, "formGroup"], [1, "row", "mb--xl--md", "mb--l"], [1, "col-sm-12", "form-group"], [1, "cursor--default"], ["type", "text", "formControlName", "zipCode", 1, "form__input", 3, "matAutocomplete", "blur"], ["zipCode", ""], [3, "autoActiveFirstOption", "displayWith"], ["zipCodeList", "matAutocomplete"], ["class", "formErrorInput text-align--left"], [3, "ngClass"], ["formControlName", "street", 1, "form__input", 3, "matAutocomplete", "placeholder", "blur"], ["streetName", ""], ["streetList", "matAutocomplete"], [1, "row", "mb--xs--md", "mb--xxxs"], [1, "col-sm-6", "form-group"], ["formControlName", "houseNumber", 1, "form__input", 3, "placeholder", "blur"], ["house", ""], [1, "font--caption", "cursor--default", "my--xxxs"], ["formControlName", "subHouse", 1, "form__input", 3, "matAutocomplete", "placeholder", "blur"], ["subHouse", ""], ["subHouseList", "matAutocomplete"], [1, "row"], ["autocomplete", "off", "formControlName", "boxNumber", 1, "form__input", 3, "matAutocomplete", "placeholder", "blur"], ["boxNumber", ""], [3, "autoActiveFirstOption"], ["boxList", "matAutocomplete"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function AddressFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddressFormComponent_Template_input_blur_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.isValidInput("zipCode", _r0.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](10, AddressFormComponent_For_11_Template, 2, 3, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddressFormComponent_Conditional_12_Template, 3, 3, "div", 8)(13, AddressFormComponent_Conditional_13_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddressFormComponent_Template_input_blur_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.isValidInput("street", _r5.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](25, AddressFormComponent_For_26_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddressFormComponent_Conditional_27_Template, 3, 3, "div", 8)(28, AddressFormComponent_Conditional_28_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13)(30, "div", 14)(31, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9)(35, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddressFormComponent_Template_input_blur_35_listener() {
          return ctx.updateAddress("houseNumber");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddressFormComponent_Conditional_38_Template, 3, 3, "div", 8)(39, AddressFormComponent_Conditional_39_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14)(41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9)(45, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddressFormComponent_Template_input_blur_45_listener() {
          return ctx.updateAddress("subHouse");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-autocomplete", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](50, AddressFormComponent_For_51_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddressFormComponent_Conditional_52_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21)(54, "div", 2)(55, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9)(59, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AddressFormComponent_Template_input_blur_59_listener() {
          return ctx.updateAddress("boxNumber");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](64, AddressFormComponent_For_65_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AddressFormComponent_Conditional_66_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 33, "ng.address.lbl.zip-code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "zip-code")("data-testid", "zip-code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoActiveFirstOption", true)("displayWith", ctx.displayFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.filteredLocationSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](12, ctx.addressForm.controls["zipCode"].errors && ctx.addressForm.controls["zipCode"].touched && ctx.addressForm.controls["zipCode"].hasError("required") ? 12 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](13, ctx.addressForm.controls["zipCode"].hasError("invalid") ? 13 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 35, "ng.address.lbl.street"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.addressForm.controls["street"].disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 37, "ng.address.form-street-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "street")("data-testid", "street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.filteredStreetSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](27, ctx.addressForm.controls["street"].touched && ctx.addressForm.controls["street"].hasError("required") ? 27 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](28, ctx.addressForm.controls["street"].hasError("invalid") ? 28 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 39, "ng.address.lbl.house-number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.addressForm.controls["houseNumber"].disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 41, "ng.address.form-house-number-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](38, ctx.addressForm.controls["houseNumber"].touched && ctx.addressForm.controls["houseNumber"].hasError("required") ? 38 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](39, ctx.addressForm.controls["houseNumber"].hasError("pattern") || ctx.addressForm.controls["houseNumber"].hasError("invalid") ? 39 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 43, "ng.address.lbl.sub-house"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.addressForm.controls["subHouse"].disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 45, "ng.address.form-sub-house-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.subHouseNoSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](52, ctx.addressForm.controls["subHouse"].hasError("pattern") || ctx.addressForm.controls["subHouse"].hasError("invalid") ? 52 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 47, "ng.address.lbl.box-number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.addressForm.controls["boxNumber"].disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 49, "ng.address.form-box-number-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoActiveFirstOption", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.boxNoSuggestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](66, ctx.addressForm.controls["boxNumber"].hasError("pattern") || ctx.addressForm.controls["boxNumber"].hasError("invalid") ? 66 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatOption, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    encapsulation: 2
  });
};
AddressFormComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)(), __metadata("design:paramtypes", [])], AddressFormComponent);


/***/ }),

/***/ 18692:
/*!**************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/customer-registration-title/customer-registration-title.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRegistrationTitleComponent: () => (/* binding */ CustomerRegistrationTitleComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class CustomerRegistrationTitleComponent {
  constructor() {
    this.currentStep = '';
  }
  static #_ = this.ɵfac = function CustomerRegistrationTitleComponent_Factory(t) {
    return new (t || CustomerRegistrationTitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomerRegistrationTitleComponent,
    selectors: [["tg-sales-customer-registration-title"]],
    inputs: {
      currentStep: "currentStep"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 6,
    consts: [[1, "text-align--center", "col-lg-6", "col-md-8", "col-12", "mx--auto", "my--l", "mt--n--md"], [1, "text-flow", "text-flow--h1"], [1, "text-flow", "text-flow--body", "mt--xxxs"]],
    template: function CustomerRegistrationTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "customer-registration.lbl." + ctx.currentStep + "-header-message"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "customer-registration.lbl." + ctx.currentStep + "-subTitle-message"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 22457:
/*!**********************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/error-message-with-login-button/error-message-with-login-button.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessageWithLoginButtonComponent: () => (/* binding */ ErrorMessageWithLoginButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





const _c0 = a0 => ({
  brand: a0
});
class ErrorMessageWithLoginButtonComponent {
  constructor() {
    this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  login() {
    this.loginEmitter.emit();
  }
  static #_ = this.ɵfac = function ErrorMessageWithLoginButtonComponent_Factory(t) {
    return new (t || ErrorMessageWithLoginButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorMessageWithLoginButtonComponent,
    selectors: [["tg-sales-error-message-with-login-button"]],
    inputs: {
      brand: "brand"
    },
    outputs: {
      loginEmitter: "loginEmitter"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 9,
    consts: [[1, "notification", "notification--errorfield", "mt-20", "mb--xl"], [1, "icon", "icon-error-shape", "errorfield"], ["type", "button", 1, "button", "button--primary", "button--width-auto", 3, "click"]],
    template: function ErrorMessageWithLoginButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorMessageWithLoginButtonComponent_Template_button_click_4_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, "customer-registration.lbl.login-header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.brand)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "customer-registration.button.login"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 85263:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/error-message/error-message.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessageComponent: () => (/* binding */ ErrorMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function ErrorMessageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r0.errorMessage)));
  }
}
class ErrorMessageComponent {
  constructor() {
    this.errorMessage = '';
  }
  static #_ = this.ɵfac = function ErrorMessageComponent_Factory(t) {
    return new (t || ErrorMessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ErrorMessageComponent,
    selectors: [["tg-sales-error-message"]],
    inputs: {
      errorMessage: "errorMessage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "notification", "notification--errorfield", "notification--errorfield--flow"], ["class", "icon icon-error-shape"], [1, "icon", "icon-error-shape"]],
    template: function ErrorMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ErrorMessageComponent_Conditional_1_Template, 4, 5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx.errorMessage ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.LowerCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49300:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/restricted-product/restricted-product.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestrictedProductComponent: () => (/* binding */ RestrictedProductComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = a0 => ({
  link: a0
});
class RestrictedProductComponent {
  constructor() {
    this.currentCategory = '';
    this.disclaimerTitleKey = '';
    this.disclaimerDescriptionKey = '';
    this.marketingURL = '';
  }
  static #_ = this.ɵfac = function RestrictedProductComponent_Factory(t) {
    return new (t || RestrictedProductComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RestrictedProductComponent,
    selectors: [["tg-sales-restricted-product"]],
    inputs: {
      currentCategory: "currentCategory",
      marketingURL: "marketingURL"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 10,
    consts: [[1, "notification-disclaimer", "text-align--center"], [1, "icon", "icon-information-shape"], [1, "notification-disclaimer__title"], [1, "notification-disclaimer__desc"]],
    template: function RestrictedProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "customer-registration-restricted-product-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "customer-registration.lbl.restricted-product-" + ctx.currentCategory), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, "customer-registration.lbl.see-our-products-" + ctx.currentCategory, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.marketingURL)), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 58137:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/ui/src/lib/sales-address-toggle/address-toggle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressToggleComponent: () => (/* binding */ AddressToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);




function AddressToggleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddressToggleComponent_Conditional_0_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onAddressToggle($event, ctx_r2.addressType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.lbl.same-business-installation-address"));
  }
}
function AddressToggleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7)(5, "div", 3)(6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddressToggleComponent_Conditional_1_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onAddressToggle($event, "billingAddress"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "customer-registration.form-billing-address-check-label"));
  }
}
class AddressToggleComponent {
  constructor() {
    this.isChecked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addressType = '';
    this.showBillingAddressToggle = false;
    this.showInstallationAddressToggle = false;
  }
  onAddressToggle(event, addressType) {
    const inputElement = event.target;
    this.isChecked.emit({
      checked: inputElement.checked,
      type: addressType
    });
  }
  static #_ = this.ɵfac = function AddressToggleComponent_Factory(t) {
    return new (t || AddressToggleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressToggleComponent,
    selectors: [["tg-sales-customer-registration-address-toggle"]],
    inputs: {
      addressType: "addressType",
      showBillingAddressToggle: "showBillingAddressToggle",
      showInstallationAddressToggle: "showInstallationAddressToggle"
    },
    outputs: {
      isChecked: "isChecked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [["class", "display--flex align-items--baseline mt--xl--md mt--l"], [1, "display--flex", "align-items--baseline", "mt--xl--md", "mt--l"], [1, "text-flow", "text-flow--h6", "color-text"], [1, "CheckboxSwitch"], ["type", "checkbox", "id", "addressCheckboxSwitch", "checked", "", 1, "CheckboxSwitch-input", 3, "change"], ["for", "addressCheckboxSwitch", 1, "CheckboxSwitch-control"], [1, "CheckboxSwitch--label"], [1, "display--inline"], ["type", "checkbox", "id", "billingAddressCheckboxSwitch", "checked", "", 1, "CheckboxSwitch-input", 3, "change"], ["for", "billingAddressCheckboxSwitch", 1, "CheckboxSwitch-control"]],
    template: function AddressToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddressToggleComponent_Conditional_0_Template, 8, 3, "div", 0)(1, AddressToggleComponent_Conditional_1_Template, 9, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.showInstallationAddressToggle ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.showBillingAddressToggle ? 1 : -1);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_ui_src_index_ts.js.map