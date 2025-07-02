(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_address-form-field_feat-address-form-field_src_index_ts-_32d91"],{

/***/ 86827:
/*!****************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormFieldComponent: () => (/* reexport safe */ _lib_address_form_field_component__WEBPACK_IMPORTED_MODULE_0__.AddressFormFieldComponent)
/* harmony export */ });
/* harmony import */ var _lib_address_form_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/address-form-field.component */ 93582);


/***/ }),

/***/ 93582:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/address-form-field.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormFieldComponent: () => (/* binding */ AddressFormFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _components_municipality_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/municipality.component */ 81035);
/* harmony import */ var _components_street_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/street.component */ 16394);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/address.util */ 43707);
/* harmony import */ var _components_geographical_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/geographical-address.component */ 63728);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sales/shared/address/data-access */ 66174);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_12__);
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

















let AddressFormFieldComponent = class AddressFormFieldComponent {
  constructor(formBuilder, eventFacade) {
    this.formBuilder = formBuilder;
    this.eventFacade = eventFacade;
    this.isSubmitted = false;
    this.manualAddressIsAllowed = true;
    this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.configuredAddress = {};
    this.FormControl = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl;
    this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.MUNICIPALITY]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.STREET]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.GEOGRAPHICAL_ADDRESS]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
  }
  writeValue(address) {
    try {
      this.initialAddress = address;
      this.initForm();
      const field = this.findLastNonEmptyField();
      if (field) {
        this.resetFields(field);
      }
    } catch (e) {
      this.eventFacade.triggerEvent((0,_sales_events_data_access__WEBPACK_IMPORTED_MODULE_9__.ErrorEvent)(e));
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  validate() {
    if (this.addressForm && this.addressForm.valid) {
      return null;
    }
    this.isSubmitted = true;
    return {
      invalidForm: {
        valid: false
      }
    };
  }
  /**
   * Finds the first field that has changed between the current and previous address field values.
   * @param previousValues The previous address field values.
   * @param currentValues The current address field values.
   * @returns The key of the first changed field, or null if no fields have changed.
   */
  findChangedField(previousValues, currentValues) {
    for (const key in currentValues) {
      if (currentValues[key]?.postalCode && currentValues[key]?.postalCode !== previousValues[key]?.postalCode) {
        return key;
      }
      if (currentValues[key]?.value !== previousValues[key]?.value) {
        return key;
      }
    }
    return null;
  }
  initForm() {
    this.addressForm = this.formBuilder.group({});
    this.createMunicipalityFormControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
    this.createStreetFormControl();
    this.createGeographicalAddressFormControl();
    this.addressForm.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(value => {
      const changedField = this.findChangedField(this.configuredAddress, value);
      this.configuredAddress = value;
      if (changedField) {
        this.resetFields(changedField);
      }
      if (this.onChange && this.onTouch) {
        this.onChange(value);
        this.onTouch();
      }
    });
  }
  createMunicipalityFormControl(validators) {
    if (!this.initialAddress || !this.initialAddress?.postalCode) {
      throw new Error('No postal code exists');
    }
    const municipalityValue = _utils_address_util__WEBPACK_IMPORTED_MODULE_10__.AddressUtil.getMunicipalityValue(this.initialAddress.postalCode, this.initialAddress.addressUnit);
    const formControlState = {
      value: municipalityValue,
      disabled: !municipalityValue
    };
    this.addressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.MUNICIPALITY, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(formControlState, validators));
    this.configuredAddress[_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.MUNICIPALITY] = municipalityValue;
  }
  createStreetFormControl() {
    let streetAddressUnit = this.initialAddress?.addressUnit;
    if (!(this.initialAddress?.addressUnit.addressUnitTypeId === _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_12__.AddressTypeIdConstants.STREETS)) {
      streetAddressUnit = _utils_address_util__WEBPACK_IMPORTED_MODULE_10__.AddressUtil.getAddressValue(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.STREET, this.initialAddress?.addressUnit);
    }
    if (streetAddressUnit && this.initialAddress?.addressUnit) {
      const addressUnitValue = this.setStreetAddressUnits({
        ...streetAddressUnit
      }, {
        ...this.initialAddress?.addressUnit
      });
      const streetValue = {
        value: this.initialAddress.street,
        addressUnit: addressUnitValue
      };
      if (addressUnitValue) {
        const formControlState = {
          value: streetValue,
          disabled: false
        };
        this.addressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.STREET, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(formControlState, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]));
        this.configuredAddress[_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.STREET] = streetValue;
      }
    }
  }
  createGeographicalAddressFormControl() {
    const geographicalAddressValue = {
      housenumber: this.initialAddress?.houseNumber,
      subhousenumber: this.initialAddress?.subHouseNumber,
      box: {
        boxNumber: this.initialAddress?.box,
        floor: this.initialAddress?.floor
      },
      isManualAddress: true
    };
    if (this.initialAddress?.addressUnit.addressUnitTypeId === _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_12__.AddressTypeIdConstants.GEOGRAPHICAL_ADDRESS) {
      geographicalAddressValue.isManualAddress = false;
      geographicalAddressValue.addressUnit = this.initialAddress?.addressUnit;
    }
    const formControlState = {
      value: geographicalAddressValue,
      disabled: !geographicalAddressValue
    };
    this.addressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.GEOGRAPHICAL_ADDRESS, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(formControlState, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]));
    this.configuredAddress[_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.GEOGRAPHICAL_ADDRESS] = geographicalAddressValue;
  }
  setStreetAddressUnits(streetAddressUnit, addressUnitValue) {
    const countryAddressUnit = _utils_address_util__WEBPACK_IMPORTED_MODULE_10__.AddressUtil.getAddressValue(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.COUNTRY, addressUnitValue);
    const municipalityAddressUnit = _utils_address_util__WEBPACK_IMPORTED_MODULE_10__.AddressUtil.getAddressValue(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldConstant.MUNICIPALITY, addressUnitValue);
    streetAddressUnit.addressUnitChain = [];
    if (countryAddressUnit && municipalityAddressUnit) {
      streetAddressUnit.addressUnitChain.push(countryAddressUnit, municipalityAddressUnit);
    }
    return streetAddressUnit;
  }
  resetFields(changedField) {
    const fieldDependency = _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldDependencies.find(dependency => changedField === dependency.key);
    if (fieldDependency) {
      fieldDependency.clear.forEach(fieldName => this.clearField(fieldName));
      fieldDependency.enableAndReset.forEach(fieldName => this.resetField(fieldName));
      fieldDependency.disableAndReset.forEach(fieldName => this.resetField(fieldName, true));
    }
  }
  clearField(fieldName) {
    if (this.configuredAddress) {
      delete this.configuredAddress[fieldName];
    }
  }
  resetField(fieldName, disabled = false) {
    return this.addressForm.get(fieldName)?.reset({
      value: null,
      disabled: disabled
    }, {
      emitEvent: false
    });
  }
  /**
   * Finds the last non-empty field in the address form based on field dependencies.
   * Fields are considered non-empty if their value is not null.
   * @returns The key of the last non-empty field, or undefined if all fields are empty.
   */
  findLastNonEmptyField() {
    const orderedDependencies = _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_8__.fieldDependencies.sort((a, b) => a.weight - b.weight);
    let previousFieldName = undefined;
    for (const dependency of orderedDependencies) {
      const control = this.addressForm.controls[dependency.key];
      if (control.value === null) {
        return previousFieldName;
      }
      previousFieldName = dependency.key;
    }
    return undefined;
  }
  static #_ = this.ɵfac = function AddressFormFieldComponent_Factory(t) {
    return new (t || AddressFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_9__.EventFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressFormFieldComponent,
    selectors: [["tg-sales-address-form-field"]],
    inputs: {
      isSubmitted: "isSubmitted",
      manualAddressIsAllowed: "manualAddressIsAllowed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AddressFormFieldComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AddressFormFieldComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 5,
    consts: [["action", "", "autocomplete", "off", "novalidate", "", 3, "formGroup"], [1, "row"], [1, "col-sm-12", "form-group"], ["formControlName", "municipality"], ["formControlName", "street", 3, "isSubmitted", "postalCode"], ["formControlName", "geographical_address", 3, "isSubmitted", "streetAddressUnit"]],
    template: function AddressFormFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tg-sales-address-municipality", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-sales-address-street", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tg-sales-address-geographical-address", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSubmitted", ctx.isSubmitted)("postalCode", ctx.configuredAddress.municipality == null ? null : ctx.configuredAddress.municipality.postalCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSubmitted", ctx.isSubmitted)("streetAddressUnit", ctx.configuredAddress.street == null ? null : ctx.configuredAddress.street.addressUnit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _components_municipality_component__WEBPACK_IMPORTED_MODULE_6__.MunicipalityComponent, _components_street_component__WEBPACK_IMPORTED_MODULE_7__.StreetComponent, _components_geographical_address_component__WEBPACK_IMPORTED_MODULE_11__.GeographicalAddressComponent],
    encapsulation: 2
  });
};
AddressFormFieldComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder, _sales_events_data_access__WEBPACK_IMPORTED_MODULE_9__.EventFacade])], AddressFormFieldComponent);


/***/ }),

/***/ 56708:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/base.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);

class BaseComponent {
  constructor() {
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl();
    this.disabledState = true;
  }
  validate(control) {
    return control.valid ? null : {
      required: true
    };
  }
  _setDisabledStateOnChange(change) {
    if (change) {
      this._setDisabledState(change.currentValue === null);
    }
  }
  _setDisabledState(disabledState) {
    this.disabledState = disabledState;
    if (disabledState) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}

/***/ }),

/***/ 90680:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/box.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxComponent: () => (/* binding */ BoxComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 56708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var _validators_conditional_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validators/conditional.validator */ 52211);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_12__);
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



















const _c0 = ["input"];
function BoxComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", option_r4.boxNumber, " (", option_r4.floor, ") ");
  }
}
function BoxComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.address.boxNumber-pattern.error"));
  }
}
const _c1 = a0 => ({
  "disabled-state": a0
});
let BoxComponent = class BoxComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor() {
    super();
    this.isSubmitted = false;
    this.selectedHouseNumberValue = undefined;
    this.selectedSubHouseNumberValue = undefined;
    this.options = [];
    this.control.addValidators([(0,_validators_conditional_validator__WEBPACK_IMPORTED_MODULE_11__.conditionalPatternValidator)(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_9__.boxPattern)]);
  }
  ngOnInit() {
    this.setupFilter();
    this.listenForReset();
    this.control.statusChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(status => {
      this.isSubmitted = status === 'INVALID';
    });
  }
  setupFilter() {
    this.filteredOptions = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(val => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => val, this._filterOptions(val || ''), rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(addressUnits => addressUnits.map(addressUnit => ({
      boxNumber: addressUnit.boxNumber,
      floor: addressUnit.floor
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(boxFloors => boxFloors.filter(boxFloor => boxFloor !== undefined && boxFloor.boxNumber !== undefined)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(value) {
    if (value?.floor || value?.boxNumber || value === null) {
      this.control.setValue(value, {
        emitEvent: false
      });
    }
  }
  display(boxFloor) {
    const displayString = boxFloor?.boxNumber ? boxFloor.boxNumber : '';
    if (boxFloor?.floor) {
      displayString.concat(` (${boxFloor.floor})`);
    }
    return displayString;
  }
  ngAfterViewInit() {
    this.autoCompleteTrigger?.panelClosingActions.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(event => {
      this.handleAutoCompleteSelection(event);
    });
  }
  _filterOptions(value) {
    if (typeof value === 'string' && this.selectedHouseNumberValue && this.control.value && this.houseNumberAddressUnitOptions) {
      return _utils_address_util__WEBPACK_IMPORTED_MODULE_10__.AddressUtil.filterBoxNumbers(value, this.selectedHouseNumberValue, this.selectedSubHouseNumberValue, this.houseNumberAddressUnitOptions);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
  }
  setDisabledState(isDisabled) {
    this._setDisabledState(isDisabled);
  }
  /**
   * Subscribes to the resetTrigger observable to listen for reset events, which are
   * emitted when the street value changes in the parent component. Upon receiving a
   * reset signal, this method clears the list of house numbers by setting `filteredOptions`
   * to an observable that emits an empty array. This ensures that the list of house numbers
   * is reset and no longer displays previous results that were relevant to the old street value.
   */
  listenForReset() {
    this.resetSubscription = this.resetTrigger.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(() => {
      this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      this.setupFilter();
    });
  }
  handleAutoCompleteSelection(event) {
    if (event && event.isUserInput) {
      this.handleUserInputSelection(event.source.value);
    } else if (!event && this.autoCompleteTrigger && this.autoCompleteTrigger.activeOption) {
      this.handleActiveOptionSelection(this.autoCompleteTrigger.activeOption.value);
    } else {
      this.handleNoSelection();
    }
  }
  handleUserInputSelection(value) {
    if (value && this.onChange) {
      this.control.setValue(value);
      this.onChange(value);
    }
  }
  handleActiveOptionSelection(value) {
    this.handleUserInputSelection(value);
  }
  handleNoSelection() {
    if (this.onChange) {
      if (this.control.value !== '') {
        this.onChange({
          boxNumber: this.control.value
        });
      } else {
        this.onChange(undefined);
      }
    }
  }
  static #_ = this.ɵfac = function BoxComponent_Factory(t) {
    return new (t || BoxComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BoxComponent,
    selectors: [["tg-sales-address-box"]],
    viewQuery: function BoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoCompleteTrigger = _t.first);
      }
    },
    inputs: {
      resetTrigger: "resetTrigger",
      isSubmitted: "isSubmitted",
      selectedHouseNumberValue: "selectedHouseNumberValue",
      selectedSubHouseNumberValue: "selectedSubHouseNumberValue",
      houseNumberAddressUnitOptions: "houseNumberAddressUnitOptions"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => BoxComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => BoxComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 17,
    consts: [[1, "font--caption", "cur-default", "my--xxxs"], [3, "ngClass"], ["autocomplete", "one-time-code", "type", "text", 1, "form__input", 3, "matAutocomplete", "formControl", "placeholder"], ["input", ""], [3, "displayWith"], ["optionList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function BoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BoxComponent_mat_option_9_Template, 2, 3, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BoxComponent_div_11_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, "ng.address.lbl.box-number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.disabledState));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, "ng.address.form-box-number-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "feat-delivery-address-form-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.control.hasError("pattern"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
BoxComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)(), __metadata("design:paramtypes", [])], BoxComponent);


/***/ }),

/***/ 63728:
/*!********************************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/geographical-address.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeographicalAddressComponent: () => (/* binding */ GeographicalAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _house_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./house-number.component */ 97546);
/* harmony import */ var _sub_house_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-house-number.component */ 26520);
/* harmony import */ var _box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./box.component */ 90680);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _validators_conditional_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../validators/conditional.validator */ 52211);
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




















let GeographicalAddressComponent = class GeographicalAddressComponent {
  constructor(cdr, formBuilder, eventFacade, addressFormFieldFacade) {
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.eventFacade = eventFacade;
    this.addressFormFieldFacade = addressFormFieldFacade;
    this.isSubmitted = false;
    this.resetFilteredOptionsTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(undefined);
    this.selectedHousenumberValue = undefined;
    this.selectedSubHousenumberValue = undefined;
    this.geographicalAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.geographicalAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.SUB_HOUSE_NUMBER]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
      [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.BOX]: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
    });
  }
  writeValue(value) {
    try {
      this.initForm(value);
      if (value?.housenumber) {
        this.updateAddressUnitOptions(value.housenumber, value.subhousenumber);
      }
    } catch (e) {
      this.eventFacade.triggerEvent((0,_sales_events_data_access__WEBPACK_IMPORTED_MODULE_10__.ErrorEvent)(e));
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  validate() {
    if (this.geographicalAddressForm && this.geographicalAddressForm.valid) {
      return null;
    }
    this.isSubmitted = true;
    return {
      invalidForm: {
        valid: false
      }
    };
  }
  setDisabledState(isDisabled) {
    if (isDisabled) {
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER)?.reset(null, {
        emitEvent: false
      });
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER)?.disable({
        emitEvent: false
      });
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.SUB_HOUSE_NUMBER)?.reset(null, {
        emitEvent: false
      });
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.SUB_HOUSE_NUMBER)?.disable({
        emitEvent: false
      });
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.BOX)?.reset(null, {
        emitEvent: false
      });
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.BOX)?.disable({
        emitEvent: false
      });
    } else {
      const housenumberControl = this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER);
      if (housenumberControl && housenumberControl.valid) {
        this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.SUB_HOUSE_NUMBER)?.enable({
          emitEvent: false
        });
        this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.BOX)?.enable({
          emitEvent: false
        });
      }
      this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER)?.enable({
        emitEvent: false
      });
    }
  }
  ngOnChanges(changes) {
    if (changes['streetAddressUnit']) {
      const currentValue = changes['streetAddressUnit'].currentValue;
      const previousValue = changes['streetAddressUnit'].previousValue;
      this.handleStreetAddressUnitChange(currentValue, previousValue);
    }
  }
  updateAddressUnitOptions(housenumber, subHousenumber = undefined) {
    if (housenumber && this.streetAddressUnit) {
      this.houseNumberAddressUnitOptions$ = _utils_address_util__WEBPACK_IMPORTED_MODULE_12__.AddressUtil.getGeographicalAddressAddressUnits(housenumber, this.streetAddressUnit.id, this.addressFormFieldFacade).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(addressUnits => {
        return this.houseNumberAddressUnitOptions = addressUnits;
      }));
      this.selectedHousenumberValue = housenumber;
      if (subHousenumber) {
        this.selectedSubHousenumberValue = subHousenumber;
      }
      this.cdr.detectChanges();
    }
  }
  triggerReset() {
    this.resetFilteredOptionsTrigger.next();
  }
  handleStreetAddressUnitChange(currentValue, previousValue) {
    if (previousValue && !currentValue) {
      this.setDisabledState(true);
    } else if (currentValue !== previousValue) {
      this.triggerReset();
      this.resetFields(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.STREET);
    }
  }
  initForm(value) {
    this.geographicalAddressForm = this.formBuilder.group({});
    const isHousenumberDisabled = !this.streetAddressUnit;
    this.geographicalAddressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
      value: value?.housenumber,
      disabled: isHousenumberDisabled
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('\\d*')]));
    const isSubHouseNumberAndBoxDisabled = !value?.housenumber;
    this.geographicalAddressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.SUB_HOUSE_NUMBER, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
      value: value?.subhousenumber,
      disabled: isSubHouseNumberAndBoxDisabled
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[A-Za-z0-9]{0,6}')]));
    this.geographicalAddressForm.addControl(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.BOX, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
      value: value?.box,
      disabled: isSubHouseNumberAndBoxDisabled
    }, [(0,_validators_conditional_validator__WEBPACK_IMPORTED_MODULE_14__.conditionalPatternValidator)(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.boxPattern)]));
    this.geographicalAddressForm.get(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER)?.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(() => {
      this.resetFields(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.fieldConstant.HOUSE_NUMBER);
    });
    // Whenever a value changes we want to find out if we have an address unit or a manual address
    this.geographicalAddressForm.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(value => {
      this.selectedHousenumberValue = value.housenumber;
      this.selectedSubHousenumberValue = value.subhousenumber;
      // Set the address unit and manual address
      const matchingAddressUnit = _utils_address_util__WEBPACK_IMPORTED_MODULE_12__.AddressUtil.findAddressBasedOnGeographicalAddress(this.houseNumberAddressUnitOptions, value);
      if (matchingAddressUnit) {
        value.isManualAddress = false;
        value.addressUnit = matchingAddressUnit;
      } else {
        value.isManualAddress = true;
      }
      if (this.onChange) {
        this.onChange(value);
      }
    });
  }
  resetFields(changedField) {
    const fieldDependency = _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.geographicalAddressFieldDependencies.find(dependency => changedField === dependency.key);
    if (fieldDependency) {
      fieldDependency.enableAndReset.forEach(fieldName => this.resetField(fieldName));
      fieldDependency.disableAndReset.forEach(fieldName => this.resetField(fieldName, true));
    }
  }
  resetField(fieldName, disabled = false) {
    return this.geographicalAddressForm.get(fieldName)?.reset({
      value: null,
      disabled: disabled
    }, {
      emitEvent: false
    });
  }
  static #_ = this.ɵfac = function GeographicalAddressComponent_Factory(t) {
    return new (t || GeographicalAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_10__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.AddressFormFieldFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GeographicalAddressComponent,
    selectors: [["tg-sales-address-geographical-address"]],
    inputs: {
      isSubmitted: "isSubmitted",
      streetAddressUnit: "streetAddressUnit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => GeographicalAddressComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => GeographicalAddressComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 13,
    consts: [[1, "row", 3, "formGroup"], [1, "col-sm-5", "form-group"], ["formControlName", "housenumber", 3, "resetTrigger", "houseNumberAddressUnitOptions", "isSubmitted", "housenumberInputChanged"], [1, "col-sm-4", "form-group"], ["formControlName", "subhousenumber", 3, "resetTrigger", "houseNumberAddressUnitOptions", "selectedHouseNumberValue", "isSubmitted"], [1, "col-sm-3", "form-group"], ["formControlName", "box", 3, "resetTrigger", "houseNumberAddressUnitOptions", "selectedHouseNumberValue", "selectedSubHouseNumberValue", "isSubmitted"]],
    template: function GeographicalAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "tg-sales-address-house-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("housenumberInputChanged", function GeographicalAddressComponent_Template_tg_sales_address_house_number_housenumberInputChanged_2_listener($event) {
          return ctx.updateAddressUnitOptions($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tg-sales-address-sub-house-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-sales-address-box", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.geographicalAddressForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resetTrigger", ctx.resetFilteredOptionsTrigger.asObservable())("houseNumberAddressUnitOptions", ctx.houseNumberAddressUnitOptions$)("isSubmitted", ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resetTrigger", ctx.resetFilteredOptionsTrigger.asObservable())("houseNumberAddressUnitOptions", ctx.houseNumberAddressUnitOptions$)("selectedHouseNumberValue", ctx.selectedHousenumberValue)("isSubmitted", ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resetTrigger", ctx.resetFilteredOptionsTrigger.asObservable())("houseNumberAddressUnitOptions", ctx.houseNumberAddressUnitOptions$)("selectedHouseNumberValue", ctx.selectedHousenumberValue)("selectedSubHouseNumberValue", ctx.selectedSubHousenumberValue)("isSubmitted", ctx.isSubmitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _house_number_component__WEBPACK_IMPORTED_MODULE_7__.HouseNumberComponent, _sub_house_number_component__WEBPACK_IMPORTED_MODULE_8__.SubHouseNumberComponent, _box_component__WEBPACK_IMPORTED_MODULE_9__.BoxComponent],
    encapsulation: 2
  });
};
GeographicalAddressComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder, _sales_events_data_access__WEBPACK_IMPORTED_MODULE_10__.EventFacade, _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_6__.AddressFormFieldFacade])], GeographicalAddressComponent);


/***/ }),

/***/ 97546:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/house-number.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HouseNumberComponent: () => (/* binding */ HouseNumberComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 56708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__);
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

















const _c0 = ["input"];
function HouseNumberComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r5, " ");
  }
}
function HouseNumberComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ng.address.error.houseNumber.required"), " ");
  }
}
function HouseNumberComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.address.error.houseNumber.invalid"));
  }
}
const _c1 = a0 => ({
  "disabled-state": a0
});
let HouseNumberComponent = class HouseNumberComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor() {
    super();
    this.isSubmitted = false;
    this.housenumberInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.control.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('\\d*')]);
  }
  ngOnInit() {
    this.setupFilter();
    this.listenForReset();
    this.control.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(value => {
      this.housenumberInputChanged.emit(value);
    });
    this.control.statusChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(status => {
      this.isSubmitted = status === 'INVALID';
    });
  }
  setupFilter() {
    this.filteredOptions = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(val => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => val, this._filterOptions(), rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(addressUnits => addressUnits.map(addressUnit => addressUnit.name)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(value) {
    this.control.setValue(value, {
      emitEvent: false
    });
  }
  display(addressUnit) {
    return addressUnit && addressUnit.name ? addressUnit.name : '';
  }
  ngAfterViewInit() {
    this.autoCompleteTrigger?.panelClosingActions.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(event => {
      this.handleAutoCompleteSelection(event);
    });
  }
  _filterOptions() {
    if (this.control.value && this.houseNumberAddressUnitOptions) {
      return _utils_address_util__WEBPACK_IMPORTED_MODULE_9__.AddressUtil.filterHouseNumbers(this.houseNumberAddressUnitOptions);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
  }
  setDisabledState(isDisabled) {
    this._setDisabledState(isDisabled);
  }
  /**
   * Subscribes to the resetTrigger observable to listen for reset events, which are
   * emitted when the street value changes in the parent component. Upon receiving a
   * reset signal, this method clears the list of house numbers by setting `filteredOptions`
   * to an observable that emits an empty array. This ensures that the list of house numbers
   * is reset and no longer displays previous results that were relevant to the old street value.
   */
  listenForReset() {
    this.resetSubscription = this.resetTrigger.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => {
      this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      this.setupFilter();
    });
  }
  handleAutoCompleteSelection(event) {
    if (event && event.isUserInput) {
      this.handleUserInputSelection(event.source.value);
    } else {
      this.handleNoSelection();
    }
  }
  handleUserInputSelection(value) {
    if (value && this.onChange) {
      this.control.setValue(value);
      this.onChange(value);
    }
  }
  handleNoSelection() {
    if (this.onChange) {
      if (this.control.value !== '') {
        this.onChange(this.control.value);
      } else {
        this.onChange(undefined);
      }
    }
  }
  static #_ = this.ɵfac = function HouseNumberComponent_Factory(t) {
    return new (t || HouseNumberComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HouseNumberComponent,
    selectors: [["tg-sales-address-house-number"]],
    viewQuery: function HouseNumberComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoCompleteTrigger = _t.first);
      }
    },
    inputs: {
      resetTrigger: "resetTrigger",
      isSubmitted: "isSubmitted",
      houseNumberAddressUnitOptions: "houseNumberAddressUnitOptions"
    },
    outputs: {
      housenumberInputChanged: "housenumberInputChanged"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => HouseNumberComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => HouseNumberComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 17,
    consts: [[1, "font--caption", "cur-default", "my--xxxs"], [3, "ngClass"], ["autocomplete", "one-time-code", "type", "text", 1, "form__input", 3, "matAutocomplete", "formControl", "placeholder"], ["input", ""], ["optionList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function HouseNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HouseNumberComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HouseNumberComponent_div_11_Template, 3, 3, "div", 6)(12, HouseNumberComponent_div_12_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, "ng.address.lbl.house-number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.disabledState));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, "ng.address.form-house-number-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "feat-delivery-address-form-house-number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.control.hasError("required") || ctx.control.touched && ctx.control.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.control.hasError("pattern") || ctx.control.hasError("maxlength")));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
HouseNumberComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)(), __metadata("design:paramtypes", [])], HouseNumberComponent);


/***/ }),

/***/ 81035:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/municipality.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MunicipalityComponent: () => (/* binding */ MunicipalityComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 56708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__);
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



















const _c0 = ["input"];
function MunicipalityComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", option_r4.postalCode, " - ", option_r4.location, " ");
  }
}
function MunicipalityComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ng.address.error.zipCode.required"), "\n");
  }
}
let MunicipalityComponent = class MunicipalityComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(addressFormFieldFacade) {
    super();
    this.addressFormFieldFacade = addressFormFieldFacade;
    this.isSubmitted = false;
    this.options = [];
    this.control.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
  }
  ngOnInit() {
    this.setupFilter();
  }
  setupFilter() {
    this.filteredOptions = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(val => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => val && val.length > 1, this._filterOptions(val || ''), rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(location) {
    this.control.setValue(location);
  }
  display(municipality) {
    return municipality ? `${municipality.postalCode} - ${municipality.location}` : '';
  }
  ngAfterViewInit() {
    this.autoCompleteTrigger?.panelClosingActions.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(event => {
      this.handleAutoCompleteSelection(event);
    });
  }
  _filterOptions(value) {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return _utils_address_util__WEBPACK_IMPORTED_MODULE_8__.AddressUtil.getFilteredMunicipalities(filterValue, this.addressFormFieldFacade);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
  }
  setDisabledState(isDisabled) {
    this.disabledState = isDisabled;
  }
  handleAutoCompleteSelection(event) {
    if (event && event.isUserInput) {
      this.handleUserInputSelection(event.source.value);
    } else if (!event && this.autoCompleteTrigger && this.autoCompleteTrigger.activeOption) {
      this.handleActiveOptionSelection(this.autoCompleteTrigger.activeOption.value);
    }
  }
  handleUserInputSelection(value) {
    if (value && this.onChange) {
      this.control.setValue(value);
      this.onChange(value);
    }
  }
  handleActiveOptionSelection(value) {
    this.handleUserInputSelection(value);
  }
  static #_ = this.ɵfac = function MunicipalityComponent_Factory(t) {
    return new (t || MunicipalityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__.AddressFormFieldFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MunicipalityComponent,
    selectors: [["tg-sales-address-municipality"]],
    viewQuery: function MunicipalityComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoCompleteTrigger = _t.first);
      }
    },
    inputs: {
      isSubmitted: "isSubmitted"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MunicipalityComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MunicipalityComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 14,
    consts: [[1, "font--caption", "cur-default", "my--xxxs"], ["autocomplete", "one-time-code", "type", "text", 1, "form__input", 3, "matAutocomplete", "formControl", "placeholder"], ["input", ""], ["autoActiveFirstOption", "true", 3, "displayWith"], ["optionList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function MunicipalityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-autocomplete", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MunicipalityComponent_mat_option_8_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MunicipalityComponent_div_10_Template, 3, 3, "div", 6);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, "ng.address.lbl.zip-code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, "ng.address.form-municipality-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "feat-delivery-address-form-municipality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.control.hasError("required") || ctx.control.touched && ctx.control.hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
MunicipalityComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__.AddressFormFieldFacade])], MunicipalityComponent);


/***/ }),

/***/ 16394:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/street.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreetComponent: () => (/* binding */ StreetComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 56708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__);
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



















const _c0 = ["input"];
function StreetComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r4.nameDU, " ");
  }
}
function StreetComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ng.address.error.street.required"), " ");
  }
}
const _c1 = a0 => ({
  "disabled-state": a0
});
let StreetComponent = class StreetComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(addressFormFieldFacade) {
    super();
    this.addressFormFieldFacade = addressFormFieldFacade;
    this.postalCode = undefined;
    this.isSubmitted = false;
    this.options = [];
    this.control.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
  }
  ngOnInit() {
    this.setupFilter();
  }
  setupFilter() {
    this.filteredOptions = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(val => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => val && val.length > 2, this._filterOptions(val || ''), rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(value) {
    this.control.setValue(value?.addressUnit);
  }
  display(addressUnit) {
    return addressUnit && addressUnit.nameDU ? addressUnit.nameDU : '';
  }
  ngAfterViewInit() {
    this.autoCompleteTrigger?.panelClosingActions.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(event => {
      this.handleAutoCompleteSelection(event);
    });
  }
  _filterOptions(value) {
    if (typeof value === 'string' && this.postalCode) {
      return _utils_address_util__WEBPACK_IMPORTED_MODULE_8__.AddressUtil.getFilteredStreets(value, this.postalCode, this.addressFormFieldFacade);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
  }
  setDisabledState(isDisabled) {
    this._setDisabledState(isDisabled);
  }
  ngOnChanges(changes) {
    if (changes['postalCode']) {
      const currentValue = changes['postalCode'].currentValue;
      const previousValue = changes['postalCode'].previousValue;
      this.handleMunicipalityAddressUnitChange(currentValue, previousValue);
    }
  }
  handleMunicipalityAddressUnitChange(currentValue, previousValue) {
    if (currentValue !== previousValue) {
      this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      this.setupFilter();
    }
  }
  handleAutoCompleteSelection(event) {
    if (event && event.source.selected) {
      if (event.isUserInput || this.autoCompleteTrigger && this.autoCompleteTrigger.activeOption) {
        this.handleUserInputSelection(event.source.value, 'nameDU');
      } else {
        this.handleNoSelection();
      }
    }
  }
  handleUserInputSelection(value, subProperty) {
    if (value && this.onChange) {
      this.control.setValue(value);
      const subPropertyValue = value[subProperty] ? value[subProperty] : '';
      this.onChange({
        value: subPropertyValue,
        addressUnit: value
      });
    }
  }
  handleNoSelection() {
    if (this.onChange) {
      this.onChange({
        value: this.control.value
      });
    }
  }
  static #_ = this.ɵfac = function StreetComponent_Factory(t) {
    return new (t || StreetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__.AddressFormFieldFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StreetComponent,
    selectors: [["tg-sales-address-street"]],
    viewQuery: function StreetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoCompleteTrigger = _t.first);
      }
    },
    inputs: {
      postalCode: "postalCode",
      isSubmitted: "isSubmitted"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => StreetComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => StreetComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 17,
    consts: [[1, "font--caption", "cur-default", "my--xxxs"], [3, "ngClass"], ["autocomplete", "one-time-code", "type", "text", 1, "form__input", 3, "matAutocomplete", "formControl", "placeholder"], ["input", ""], [3, "displayWith"], ["optionList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function StreetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StreetComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StreetComponent_div_11_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, "ng.address.lbl.street"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.disabledState));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, "ng.address.form-street-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "feat-delivery-address-form-street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.control.hasError("required") || ctx.control.touched && ctx.control.hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
StreetComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_10__.AddressFormFieldFacade])], StreetComponent);


/***/ }),

/***/ 26520:
/*!****************************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/components/sub-house-number.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubHouseNumberComponent: () => (/* binding */ SubHouseNumberComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ 56708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64101);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/address.util */ 43707);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 49449);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__);
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

















const _c0 = ["input"];
function SubHouseNumberComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
function SubHouseNumberComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.address.subHouse-pattern.error"));
  }
}
const _c1 = a0 => ({
  "disabled-state": a0
});
let SubHouseNumberComponent = class SubHouseNumberComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor() {
    super();
    this.isSubmitted = false;
    this.selectedHouseNumberValue = undefined;
    this.control.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('[A-Za-z0-9]{0,6}')]);
  }
  ngOnInit() {
    this.setupFilter();
    this.listenForReset();
    this.control.statusChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(status => {
      this.isSubmitted = status === 'INVALID';
    });
  }
  setupFilter() {
    this.filteredOptions = this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(val => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => val, this._filterOptions(val || ''), rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(addressUnits => addressUnits.map(addressUnit => addressUnit.subHouseNumber)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(subHouseNumbers => subHouseNumbers.filter(subHouseNumber => subHouseNumber !== undefined)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(value) {
    this.control.setValue(value, {
      emitEvent: false
    });
  }
  ngAfterViewInit() {
    this.autoCompleteTrigger?.panelClosingActions.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(event => {
      this.handleAutoCompleteSelection(event);
    });
  }
  _filterOptions(value) {
    if (this.selectedHouseNumberValue && this.control.value && this.houseNumberAddressUnitOptions) {
      return _utils_address_util__WEBPACK_IMPORTED_MODULE_9__.AddressUtil.filterSubHouseNumbers(value, this.selectedHouseNumberValue, this.houseNumberAddressUnitOptions);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
  }
  setDisabledState(isDisabled) {
    this._setDisabledState(isDisabled);
  }
  /**
   * Subscribes to the resetTrigger observable to listen for reset events, which are
   * emitted when the street value changes in the parent component. Upon receiving a
   * reset signal, this method clears the list of house numbers by setting `filteredOptions`
   * to an observable that emits an empty array. This ensures that the list of house numbers
   * is reset and no longer displays previous results that were relevant to the old street value.
   */
  listenForReset() {
    this.resetSubscription = this.resetTrigger.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => {
      this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      this.setupFilter();
    });
  }
  handleAutoCompleteSelection(event) {
    if (event && event.isUserInput) {
      this.handleUserInputSelection(event.source.value);
    } else if (!event && this.autoCompleteTrigger && this.autoCompleteTrigger.activeOption) {
      this.handleActiveOptionSelection(this.autoCompleteTrigger.activeOption.value);
    } else {
      this.handleNoSelection();
    }
  }
  handleUserInputSelection(value) {
    if (value && this.onChange) {
      this.control.setValue(value);
      this.onChange(value);
    }
  }
  handleActiveOptionSelection(value) {
    this.handleUserInputSelection(value);
  }
  handleNoSelection() {
    if (this.onChange) {
      if (this.control.value !== '') {
        this.onChange(this.control.value);
      } else {
        this.onChange(undefined);
      }
    }
  }
  static #_ = this.ɵfac = function SubHouseNumberComponent_Factory(t) {
    return new (t || SubHouseNumberComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SubHouseNumberComponent,
    selectors: [["tg-sales-address-sub-house-number"]],
    viewQuery: function SubHouseNumberComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoCompleteTrigger = _t.first);
      }
    },
    inputs: {
      resetTrigger: "resetTrigger",
      isSubmitted: "isSubmitted",
      selectedHouseNumberValue: "selectedHouseNumberValue",
      houseNumberAddressUnitOptions: "houseNumberAddressUnitOptions"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SubHouseNumberComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SubHouseNumberComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 16,
    consts: [[1, "font--caption", "cur-default", "my--xxxs"], [3, "ngClass"], ["autocomplete", "one-time-code", "type", "text", 1, "form__input", 3, "matAutocomplete", "formControl", "placeholder"], ["input", ""], ["optionList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function SubHouseNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SubHouseNumberComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SubHouseNumberComponent_div_11_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, "ng.address.lbl.sub-house"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.disabledState));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.control)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, "ng.address.form-sub-house-placeholder-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "feat-delivery-address-form-sub-house-number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.control.hasError("pattern"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
SubHouseNumberComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)(), __metadata("design:paramtypes", [])], SubHouseNumberComponent);


/***/ }),

/***/ 43707:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/utils/address.util.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressUtil: () => (/* binding */ AddressUtil)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/address-form-field/data-access */ 29782);
/* harmony import */ var _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1__);


class AddressUtil {
  static getFilteredMunicipalities(filterValue, addressFormFieldFacade) {
    return addressFormFieldFacade.getMunicipalities().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      return response.filter(municipality => {
        const municipalityString = `${municipality.postalCode.toLowerCase()} - ${municipality.location.toLowerCase()}`;
        return municipalityString.indexOf(filterValue.toLowerCase()) === 0;
      });
    }));
  }
  static getFilteredStreets(value, postalCodeQuery, addressFormFieldFacade) {
    return addressFormFieldFacade.getStreets(value, postalCodeQuery).pipe();
  }
  static getGeographicalAddressAddressUnits(filterValue, streetAddressUnitId, addressFormFieldFacade) {
    return addressFormFieldFacade.getGeographicalAddresses(filterValue, streetAddressUnitId);
  }
  static filterHouseNumbers(houseNumberAddressUnitOptions) {
    return houseNumberAddressUnitOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(addressUnits => {
      return addressUnits.reduce((addressUnitList, addressUnit) => {
        const itemExists = addressUnitList.some(existingAddressUnit => existingAddressUnit.name === addressUnit.name);
        if (itemExists) {
          return addressUnitList;
        }
        return [...addressUnitList, addressUnit];
      }, []).sort((a, b) => {
        try {
          return Number(a.name) - Number(b.name);
        } catch (e) {
          return 0;
        }
      });
    }));
  }
  static filterSubHouseNumbers(filterValue, houseNumberValue, houseNumberAddressUnitOptions) {
    return houseNumberAddressUnitOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(addressUnits => {
      return addressUnits.filter(addressUnit => {
        return addressUnit.name === houseNumberValue && addressUnit.subHouseNumber?.toLowerCase().startsWith(filterValue.toLowerCase());
      }).reduce((addressUnitList, addressUnit) => {
        const itemExists = addressUnitList.some(existingAddressUnit => existingAddressUnit.subHouseNumber === addressUnit.subHouseNumber);
        if (itemExists) {
          return addressUnitList;
        }
        return [...addressUnitList, addressUnit];
      }, []).sort((a, b) => {
        try {
          return Number(a.name) - Number(b.name);
        } catch (e) {
          return 0;
        }
      });
    }));
  }
  static filterBoxNumbers(filterValue, houseNumberValue, subHouseNumberValue, houseNumberAddressUnitOptions) {
    return houseNumberAddressUnitOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(addressUnits => {
      return addressUnits.filter(addressUnit => {
        const subHouseNumberMatches = subHouseNumberValue ? addressUnit.subHouseNumber === subHouseNumberValue : !addressUnit.subHouseNumber;
        return addressUnit.name === houseNumberValue && subHouseNumberMatches && addressUnit.boxNumber?.toLowerCase().startsWith(filterValue.toLowerCase());
      }).sort((a, b) => {
        try {
          return Number(a.name) - Number(b.name);
        } catch (e) {
          return 0;
        }
      });
    }));
  }
  static getFilteredSubHouseNumberOptions$(subHouseNumbers$) {
    return subHouseNumbers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(addressUnits => {
      return addressUnits.filter(addressUnit => addressUnit.subHouseNumber).filter(addressUnit => addressUnit.boxNumber === undefined);
    }));
  }
  static getMunicipalityValue(postalCode, addressUnit) {
    const municipality = this.getAddressValueFromAddressChain('Municipality', addressUnit);
    if (municipality?.name) {
      return {
        location: municipality.name,
        postalCode: postalCode
      };
    }
    throw new Error('AddressFormField could not retrieve municipality');
  }
  static getAddressValue(value, addressUnit) {
    if (value === _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1__.fieldConstant.COUNTRY || value === _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1__.fieldConstant.MUNICIPALITY || value === _sales_address_form_field_data_access__WEBPACK_IMPORTED_MODULE_1__.fieldConstant.STREET) {
      return this.getAddressValueFromAddressChain(value, addressUnit);
    } else {
      return this.getTopLevelAddressValue(value, addressUnit);
    }
  }
  static findAddressBasedOnGeographicalAddress(houseNumberAddressUnitOptions, value) {
    if (!houseNumberAddressUnitOptions) {
      return undefined;
    }
    return houseNumberAddressUnitOptions.find(unit => unit.name === value.housenumber && unit.subHouseNumber === value.subhousenumber && unit.boxNumber === value.box?.boxNumber && unit.floor === value.box?.floor);
  }
  static getAddressValueFromAddressChain(value, addressUnit) {
    const foundValue = addressUnit?.addressUnitChain?.find(addressUnit => addressUnit.type.toLowerCase() === value.toLowerCase());
    return foundValue ? foundValue : null;
  }
  static getTopLevelAddressValue(value, addressUnit) {
    switch (value) {
      case 'housenumber':
        return addressUnit ? addressUnit : null;
      case 'subhousenumber':
        if (addressUnit?.subHouseNumber) {
          return addressUnit;
        }
        break;
      case 'box':
        if (addressUnit?.boxNumber) {
          return addressUnit;
        }
        break;
    }
    return null;
  }
}

/***/ }),

/***/ 52211:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/feat-address-form-field/src/lib/validators/conditional.validator.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conditionalPatternValidator: () => (/* binding */ conditionalPatternValidator)
/* harmony export */ });
function conditionalPatternValidator(pattern) {
  return control => {
    const value = control.value;
    if (typeof value === 'string') {
      return pattern.test(value) ? null : {
        pattern: true
      };
    }
    return null;
  };
}

/***/ })

}])
//# sourceMappingURL=libs_sales_address-form-field_feat-address-form-field_src_index_ts-_32d91.js.map