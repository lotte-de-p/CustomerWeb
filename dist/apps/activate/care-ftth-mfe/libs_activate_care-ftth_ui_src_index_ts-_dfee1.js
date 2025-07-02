(self["webpackChunkcare_ftth_mfe"] = self["webpackChunkcare_ftth_mfe"] || []).push([["libs_activate_care-ftth_ui_src_index_ts-_dfee1"],{

/***/ 7086:
/*!*************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressViewerComponent: () => (/* reexport safe */ _lib_address_viewer_address_viewer_component__WEBPACK_IMPORTED_MODULE_0__.AddressViewerComponent),
/* harmony export */   BoxNumberInputFieldComponent: () => (/* reexport safe */ _lib_box_number_input_field_box_number_input_field_component__WEBPACK_IMPORTED_MODULE_2__.BoxNumberInputFieldComponent),
/* harmony export */   HouseNumberInputFieldComponent: () => (/* reexport safe */ _lib_house_number_input_field_house_number_input_field_component__WEBPACK_IMPORTED_MODULE_4__.HouseNumberInputFieldComponent),
/* harmony export */   StreetInputFieldComponent: () => (/* reexport safe */ _lib_street_input_field_street_input_field_component__WEBPACK_IMPORTED_MODULE_3__.StreetInputFieldComponent),
/* harmony export */   ZipcodeInputFieldComponent: () => (/* reexport safe */ _lib_zipcode_input_field_zipcode_input_field_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeInputFieldComponent)
/* harmony export */ });
/* harmony import */ var _lib_address_viewer_address_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/address-viewer/address-viewer.component */ 89158);
/* harmony import */ var _lib_zipcode_input_field_zipcode_input_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/zipcode-input-field/zipcode-input-field.component */ 84318);
/* harmony import */ var _lib_box_number_input_field_box_number_input_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/box-number-input-field/box-number-input-field.component */ 32059);
/* harmony import */ var _lib_street_input_field_street_input_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/street-input-field/street-input-field.component */ 1905);
/* harmony import */ var _lib_house_number_input_field_house_number_input_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/house-number-input-field/house-number-input-field.component */ 83608);






/***/ }),

/***/ 89158:
/*!***************************************************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/lib/address-viewer/address-viewer.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressViewerComponent: () => (/* binding */ AddressViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);






function AddressViewerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11)(11, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressViewerComponent_div_0_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.editAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.address.street, " ", ctx_r0.address.houseNumber, "", (tmp_0_0 = ctx_r0.address.subHouseNumber) !== null && tmp_0_0 !== undefined ? tmp_0_0 : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.address.zipcode, ", ", ctx_r0.address.subMunicipality, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 6, "ng." + ctx_r0.messageGroupName + ".lbl.edit"));
  }
}
class AddressViewerComponent {
  address;
  messageGroupName;
  edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  editAddress() {
    this.edit.emit(this.address.addressGeoId);
  }
  static ɵfac = function AddressViewerComponent_Factory(t) {
    return new (t || AddressViewerComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressViewerComponent,
    selectors: [["tg-address-viewer"]],
    inputs: {
      address: "address",
      messageGroupName: "messageGroupName"
    },
    outputs: {
      edit: "edit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "user-input-options", 4, "ngIf"], [1, "user-input-options"], [1, "cards", "mt--m", "border-color--all--mid-grey", "border-width--all--r", "border-style--all--solid"], [1, "cards--append", "cards--container", "p--m"], [1, "cards--body"], [1, "cards--body--inner-container"], [1, "cards-content__body"], [1, "text-flow", "text-flow--button", "cards-content__body-label"], [1, "row", "vertical-align-content"], [1, "col-md-1", "col-1", "p--n"], [1, "color-text", "heading--3", "icon", "icon-locations", "icon-md", "mr--s"], [1, "col-md-8", "col-7", "p--n"], [1, "text-flow--text", "heading--nomargin"], [1, "text-flow--text", "color-shade_24"], ["id", "editAddress", 1, "col-md-3", "col-4", "cur-pointer", "p--n", "text-align--center", 3, "click"], [1, "color-text", "heading--3", "icon", "icon-edit", "icon-md", "mr--s--md"], [1, "link"]],
    template: function AddressViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddressViewerComponent_div_0_Template, 20, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.address);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 32059:
/*!*******************************************************************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/lib/box-number-input-field/box-number-input-field.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxNumberInputFieldComponent: () => (/* binding */ BoxNumberInputFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 11771);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);
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












function BoxNumberInputFieldComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "ng." + ctx_r0.messageGroup + ".boxNumber-pattern.error"));
  }
}
const _c0 = a0 => ({
  "label-v2--disabled": a0
});
let BoxNumberInputFieldComponent = class BoxNumberInputFieldComponent {
  controls;
  messageGroup;
  constructor(controls) {
    this.controls = controls;
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }
  get formControl() {
    return this.controls?.control;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onChange = value => {
    this.controls?.control?.setValue(value);
  };
  writeValue(_obj) {
    // empty implementation
  }
  onTouched = () => {
    // empty implementation
  };
  static ɵfac = function BoxNumberInputFieldComponent_Factory(t) {
    return new (t || BoxNumberInputFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControl, 10));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: BoxNumberInputFieldComponent,
    selectors: [["tg-box-number-input-field"]],
    inputs: {
      messageGroup: "messageGroup"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 8,
    consts: [[1, "input-v2--wrapper", "mb--m"], ["for", "new-bn", "id", "boxNumber:Label", 1, "label-v2"], [1, "label-v2__label"], [1, "font--caption", "cur-default", "my--xxxs", 3, "ngClass"], [1, "display--flex", "width--full"], ["id", "new-bn", "type", "text", "aria-describedby", "boxNumber:Helper boxNumber:Error", "autocomplete", "off", 1, "input-v2", 3, "formControl"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [1, "formErrorInput", "text-align--left"]],
    template: function BoxNumberInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, BoxNumberInputFieldComponent_div_8_Template, 4, 3, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, ctx.controls == null ? null : ctx.controls.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, "ng." + ctx.messageGroup + ".lbl.box-number"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.formControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.controls == null ? null : ctx.controls.touched) && ((ctx.controls == null ? null : ctx.controls.hasError("pattern")) || (ctx.controls == null ? null : ctx.controls.hasError("invalid"))));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    encapsulation: 2
  });
};
BoxNumberInputFieldComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControl])], BoxNumberInputFieldComponent);


/***/ }),

/***/ 83608:
/*!***********************************************************************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/lib/house-number-input-field/house-number-input-field.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HouseNumberInputFieldComponent: () => (/* binding */ HouseNumberInputFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 11771);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @care-ftth/data-access */ 63752);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
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


















function HouseNumberInputFieldComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", suggestion_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", suggestion_r3.houseNumber, " ");
  }
}
function HouseNumberInputFieldComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng." + ctx_r2.messageGroup + ".error.houseNumber.required"), "\n");
  }
}
const _c0 = a0 => ({
  "label-v2--disabled": a0
});
let HouseNumberInputFieldComponent = class HouseNumberInputFieldComponent {
  controls;
  addressCheckerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerService);
  messageGroup;
  geoId;
  street;
  suggestions$;
  constructor(controls) {
    this.controls = controls;
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }
  get formControl() {
    return this.controls?.control;
  }
  ngOnInit() {
    this.suggestions$ = this.formControl?.valueChanges?.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(inputValue => typeof inputValue === 'string'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(inputValue => this.#getNumberSuggestions(inputValue)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(({
      suggestions,
      inputValue
    }) => this.#presetValueWhenSuggestionExists(suggestions, inputValue)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(({
      suggestions
    }) => suggestions));
  }
  #getNumberSuggestions(inputValue) {
    if (!inputValue) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        suggestions: [],
        inputValue
      });
    }
    return this.addressCheckerService.getSuggestionsForNumber(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerEnum.MESSAGE_GROUP, inputValue, this.street, this.geoId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(suggestions => ({
      suggestions,
      inputValue
    })));
  }
  #presetValueWhenSuggestionExists(numberSuggestions, value) {
    const numberSuggestion = numberSuggestions.find(suggestion => suggestion.houseNumber === value);
    if (numberSuggestion) {
      this.formControl?.setValue(numberSuggestion);
    }
  }
  formattedNumber = houseNumber => {
    if (!houseNumber) {
      return '';
    }
    return houseNumber.houseNumber;
  };
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  writeValue(_obj) {
    // empty implementation
  }
  onChange = () => {
    // empty implementation
  };
  onTouched = () => {
    // empty implementation
  };
  static ɵfac = function HouseNumberInputFieldComponent_Factory(t) {
    return new (t || HouseNumberInputFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 10));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HouseNumberInputFieldComponent,
    selectors: [["tg-house-number-input-field"]],
    inputs: {
      messageGroup: "messageGroup",
      geoId: "geoId",
      street: "street"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 14,
    consts: [[1, "input-v2--wrapper", "mb--m"], ["for", "new-hn", "id", "houseNumber:Label", 1, "label-v2"], [1, "label-v2__label"], [1, "font--caption", "cur-default", "my--xxxs", 3, "ngClass"], [1, "display--flex", "width--full"], ["id", "new-hn", "type", "text", "aria-describedby", "houseNumber:Helper houseNumber:Error", "autocomplete", "off", 1, "input-v2", 3, "formControl", "matAutocomplete"], [3, "autoActiveFirstOption", "displayWith"], ["houseNumberList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function HouseNumberInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HouseNumberInputFieldComponent_mat_option_10_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HouseNumberInputFieldComponent_div_12_Template, 3, 3, "div", 9);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.controls.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, "ng." + ctx.messageGroup + ".lbl.house-number"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoActiveFirstOption", true)("displayWith", ctx.formattedNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.suggestions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.touched && ctx.controls.hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
HouseNumberInputFieldComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl])], HouseNumberInputFieldComponent);


/***/ }),

/***/ 1905:
/*!***********************************************************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/lib/street-input-field/street-input-field.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreetInputFieldComponent: () => (/* binding */ StreetInputFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 11771);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @care-ftth/data-access */ 63752);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
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


















function StreetInputFieldComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const street_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", street_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", street_r4, " ");
  }
}
function StreetInputFieldComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng." + ctx_r2.messageGroup + ".error.street.required"), " ");
  }
}
function StreetInputFieldComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng." + ctx_r3.messageGroup + ".error.street.invalid"), " ");
  }
}
const _c0 = a0 => ({
  "label-v2--disabled": a0
});
let StreetInputFieldComponent = class StreetInputFieldComponent {
  controls;
  MINIMUM_WORD_LENGTH_TO_SEARCH = 2;
  messageGroup;
  geoId;
  addressCheckerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerService);
  suggestions$;
  get formControl() {
    return this.controls?.control;
  }
  constructor(controls) {
    this.controls = controls;
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }
  ngOnInit() {
    this.suggestions$ = this.formControl?.valueChanges?.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(value => {
      if (value?.length < this.MINIMUM_WORD_LENGTH_TO_SEARCH) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
      }
      return this.addressCheckerService.getSuggestionsForStreet(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerEnum.MESSAGE_GROUP, value, this.geoId);
    }));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onChange = () => {
    // empty implementation
  };
  onTouched = () => {
    // empty implementation
  };
  writeValue(_obj) {
    // empty implementation
  }
  static ɵfac = function StreetInputFieldComponent_Factory(t) {
    return new (t || StreetInputFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 10));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StreetInputFieldComponent,
    selectors: [["tg-street-input-field"]],
    inputs: {
      messageGroup: "messageGroup",
      geoId: "geoId"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 13,
    consts: [[1, "input-v2--wrapper", "mb--m"], ["for", "new-as", "id", "street:Label", 1, "label-v2"], [1, "label-v2__label"], [1, "font--caption", "cur-default", "my--xxxs", 3, "ngClass"], [1, "display--flex", "width--full"], ["id", "new-as", "type", "text", "aria-describedby", "street:Helper street:Error", "autocomplete", "off", 1, "input-v2", 3, "formControl", "matAutocomplete"], ["streetList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function StreetInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StreetInputFieldComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StreetInputFieldComponent_div_12_Template, 3, 3, "div", 8)(13, StreetInputFieldComponent_div_13_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.controls.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "ng." + ctx.messageGroup + ".lbl.street"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.suggestions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.touched && ctx.controls.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.hasError("invalid"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
StreetInputFieldComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl])], StreetInputFieldComponent);


/***/ }),

/***/ 84318:
/*!*************************************************************************************************!*\
  !*** ./libs/activate/care-ftth/ui/src/lib/zipcode-input-field/zipcode-input-field.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeInputFieldComponent: () => (/* binding */ ZipcodeInputFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 11771);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 19963);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @care-ftth/data-access */ 63752);
/* harmony import */ var _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
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


















function ZipcodeInputFieldComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", location_r3.zipCode, " - ", location_r3.subMunicipality, " ");
  }
}
function ZipcodeInputFieldComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng." + ctx_r2.messageGroup + ".error.selectedCityOrZipCode.required"), " ");
  }
}
let ZipcodeInputFieldComponent = class ZipcodeInputFieldComponent {
  controls;
  messageGroup;
  suggestions$;
  addressCheckerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerService);
  get formControl() {
    return this.controls?.control;
  }
  constructor(controls) {
    this.controls = controls;
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }
  ngOnInit() {
    this.suggestions$ = this.formControl?.valueChanges?.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(inputValue => !!inputValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(inputValue => typeof inputValue === 'string'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(inputValue => this.#getSuggestions(inputValue)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(({
      suggestions,
      inputValue
    }) => this.#presetValueWhenSuggestionExists(suggestions, inputValue)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(({
      suggestions
    }) => suggestions));
  }
  #getSuggestions(inputValue) {
    return this.addressCheckerService.getSuggestionsForZipcodeOrCity(inputValue, _care_ftth_data_access__WEBPACK_IMPORTED_MODULE_9__.FiberAddressCheckerEnum.MESSAGE_GROUP).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(suggestions => ({
      suggestions,
      inputValue
    })));
  }
  #presetValueWhenSuggestionExists(suggestions, inputValue) {
    const matchSuggestion = suggestions.find(suggestion => suggestion.zipCode === inputValue || suggestion.subMunicipality.toLowerCase() === inputValue.toLowerCase());
    if (matchSuggestion) {
      this.formControl?.setValue(matchSuggestion);
    }
  }
  formattedLocation = cityOrZipcode => {
    if (!cityOrZipcode) {
      return '';
    }
    return `${cityOrZipcode.zipCode} - ${cityOrZipcode.subMunicipality}`;
  };
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  writeValue(_obj) {
    // empty implementation
  }
  onChange = () => {
    // empty implementation
  };
  onTouched = () => {
    // empty implementation
  };
  static ɵfac = function ZipcodeInputFieldComponent_Factory(t) {
    return new (t || ZipcodeInputFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 10));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ZipcodeInputFieldComponent,
    selectors: [["tg-zipcode-input-field"]],
    inputs: {
      messageGroup: "messageGroup"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 11,
    consts: [[1, "form-group", "pb--l"], [1, "input-v2--wrapper"], ["for", "new-zc", "id", "zipcode:Label", 1, "label-v2"], [1, "label-v2__label"], [1, "font--caption", "cur-default", "my--xxxs"], [1, "display--flex", "width--full"], ["id", "new-zc", "type", "text", "aria-describedby", "zipcode:Helper zipcode:Error", "required", "true", "autocomplete", "off", 1, "input-v2", 3, "formControl", "matAutocomplete"], [3, "autoActiveFirstOption", "displayWith"], ["zipCodeList", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "formErrorInput text-align--left", 4, "ngIf"], [3, "value"], [1, "formErrorInput", "text-align--left"]],
    template: function ZipcodeInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ZipcodeInputFieldComponent_mat_option_11_Template, 2, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ZipcodeInputFieldComponent_div_13_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "ng." + ctx.messageGroup + ".lbl.zip-code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoActiveFirstOption", true)("displayWith", ctx.formattedLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.suggestions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls.touched && ctx.controls.hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    encapsulation: 2
  });
};
ZipcodeInputFieldComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl])], ZipcodeInputFieldComponent);


/***/ })

}])
//# sourceMappingURL=libs_activate_care-ftth_ui_src_index_ts-_dfee1.js.map