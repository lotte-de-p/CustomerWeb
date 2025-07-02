(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_delivery_feat-delivery_src_index_ts-_4cbf1"],{

/***/ 42770:
/*!********************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDeliveryInfoComponent: () => (/* reexport safe */ _lib_components_change_delivery_change_delivery_info_component__WEBPACK_IMPORTED_MODULE_5__.ChangeDeliveryInfoComponent),
/* harmony export */   DeliveryComponent: () => (/* reexport safe */ _lib_delivery_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryComponent),
/* harmony export */   DeliveryEventTypeEnum: () => (/* reexport safe */ _lib_enums_event_type_enum__WEBPACK_IMPORTED_MODULE_3__.DeliveryEventTypeEnum),
/* harmony export */   GenericItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.GenericItemType),
/* harmony export */   HardwareItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.HardwareItemType),
/* harmony export */   HomeOfficeItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.HomeOfficeItemType),
/* harmony export */   MultimediaItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.MultimediaItemType),
/* harmony export */   SmartHomeItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.SmartHomeItemType),
/* harmony export */   SmartPhoneItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.SmartPhoneItemType),
/* harmony export */   SmartWatchItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.SmartWatchItemType),
/* harmony export */   TvAudioItemType: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.TvAudioItemType),
/* harmony export */   changeAddressStateEvent: () => (/* reexport safe */ _lib_events_change_address_state_event__WEBPACK_IMPORTED_MODULE_4__.changeAddressStateEvent),
/* harmony export */   deliveryEventStepKey: () => (/* reexport safe */ _lib_constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.deliveryEventStepKey),
/* harmony export */   deliveryItemTypes: () => (/* reexport safe */ _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__.deliveryItemTypes),
/* harmony export */   stepImage: () => (/* reexport safe */ _lib_constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.stepImage)
/* harmony export */ });
/* harmony import */ var _lib_delivery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/delivery.component */ 21366);
/* harmony import */ var _lib_constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants/delivery-event-step-key.const */ 42468);
/* harmony import */ var _lib_constants_delivery_item_type_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constants/delivery-item-type.constant */ 36063);
/* harmony import */ var _lib_enums_event_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/enums/event-type.enum */ 69303);
/* harmony import */ var _lib_events_change_address_state_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/events/change-address-state.event */ 38129);
/* harmony import */ var _lib_components_change_delivery_change_delivery_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/change-delivery/change-delivery-info.component */ 34061);







/***/ }),

/***/ 34061:
/*!****************************************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/components/change-delivery/change-delivery-info.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDeliveryInfoComponent: () => (/* binding */ ChangeDeliveryInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_address_form_field_feat_address_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/address-form-field/feat-address-form-field */ 39981);
/* harmony import */ var _sales_address_form_field_feat_address_form_field__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_address_form_field_feat_address_form_field__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _change_personal_info_change_delivery_personal_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-personal-info/change-delivery-personal-info.component */ 82506);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_change_delivery_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/change-delivery.const */ 50722);
/* harmony import */ var _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/events/feat-analytics */ 82501);
/* harmony import */ var _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_9__);














function ChangeDeliveryInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeDeliveryInfoComponent_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.closeOverlay.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "change-delivery-info-x-button");
  }
}
function ChangeDeliveryInfoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", ctx_r1.stepImage)("resolveSVGUrl", false);
  }
}
const _c0 = () => ({
  name: "change address canceled"
});
function ChangeDeliveryInfoComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeDeliveryInfoComponent_Conditional_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.closeOverlay.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgSalesTrackClickEvent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "change-delivery-info-cancel-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "ng.sales-checkout.button.cancel"), " ");
  }
}
const _c1 = () => ({
  name: "change address saved"
});
class ChangeDeliveryInfoComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.validatePersonalInfoOnInit = false;
    this.closeOverlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.saveNewPersonalInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isSubmitted = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    this.stepImage = _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_change_delivery_const__WEBPACK_IMPORTED_MODULE_8__.stepImage);
  }
  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    this.isSubmitted = true;
    const personalInfo = this.form.get('personalinfo');
    const deliveryAddress = this.form.get('address');
    if (this.form.valid) {
      this.saveNewPersonalInfo.next({
        personalInfo: !personalInfo?.pristine ? personalInfo?.value : null,
        deliveryAddress: !deliveryAddress?.pristine ? deliveryAddress?.value : null
      });
    } else {
      personalInfo?.updateValueAndValidity();
      deliveryAddress?.updateValueAndValidity();
    }
  }
  initForm() {
    if (!this.deliveryAddress) {
      throw new Error('Delivery address is not defined.');
    }
    // Validate required properties are not undefined or empty
    const requiredProperties = ['addressUnit', 'country', 'houseNumber', 'municipality', 'postalCode', 'street'];
    const hasAllRequired = requiredProperties.every(prop => this.deliveryAddress && this.deliveryAddress[prop] !== undefined);
    if (!hasAllRequired) {
      throw new Error('Missing required delivery address properties.');
    }
    const initialAddress = {
      addressUnit: this.deliveryAddress.addressUnit,
      country: this.deliveryAddress.country,
      houseNumber: this.deliveryAddress.houseNumber,
      municipality: this.deliveryAddress.municipality,
      postalCode: this.deliveryAddress.postalCode,
      street: this.deliveryAddress.street,
      // Optional properties can remain directly assigned
      box: this.deliveryAddress.box,
      subHouseNumber: this.deliveryAddress.subHouseNumber,
      countryCode: this.deliveryAddress.countryCode
    };
    this.form = this.formBuilder.group({});
    this.form.addControl('personalinfo', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.personalInfo));
    this.form.addControl('address', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(initialAddress));
  }
  static #_ = this.ɵfac = function ChangeDeliveryInfoComponent_Factory(t) {
    return new (t || ChangeDeliveryInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChangeDeliveryInfoComponent,
    selectors: [["tg-sales-change-delivery-info"]],
    inputs: {
      personalInfo: "personalInfo",
      deliveryAddress: "deliveryAddress",
      validatePersonalInfoOnInit: "validatePersonalInfoOnInit"
    },
    outputs: {
      closeOverlay: "closeOverlay",
      saveNewPersonalInfo: "saveNewPersonalInfo"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 36,
    vars: 21,
    consts: [[1, "sales-checkout", "container--medium", "sales-overlay", "pt-50"], ["class", "overlay__section__content__close icon-close pr-30 ng-star-inserted"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "horizontal-center-align"], [1, "col-sm-12", "sales-checkout"], [1, "stepper-page__body-inner", "p-0"], [1, "stepper-page__content--split", "container", "mobile-lines"], ["class", "stepper-page__content-first flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl", 4, "ngIf"], [1, "stepper-page__content-second"], ["id", "undefined", 1, "stepper-move"], [1, "text-flow", "text-flow--label", "stepper-page__title-label", "m-0"], [1, "sales-flow"], [1, "sales-flow__content__delivery", "mb--xxxg"], [1, "overlay__section__content__action", "ng-star-inserted"], [1, "form-group__field--large", "form-group__field"], [1, "form-group", "ng-untouched", "ng-pristine", "ng-invalid", 3, "formGroup", "ngSubmit"], ["formControlName", "personalinfo", 3, "validateOnInit"], [1, "content-section", "mb-30", "p--xl--md", "p--l", "mx--n--md", "mx--l", "ng-star-inserted"], [1, "sales-display-info__content__row", "mb-30"], [1, "sales-display-info__content__row__description"], [1, "mt-0"], ["formControlName", "address", 3, "isSubmitted"], [1, "sales-flow__content__delivery__action", "mt-20", "pl--n--md", "pl--s", "text-align--right"], ["class", "button button--secondary", 3, "tgSalesTrackClickEvent"], ["type", "submit", 1, "button", "button--primary", 3, "tgSalesTrackClickEvent"], [1, "overlay__section__content__close", "icon-close", "pr-30", "ng-star-inserted", 3, "click"], [1, "stepper-page__content-first", "flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl"], [1, "button", "button--secondary", 3, "tgSalesTrackClickEvent", "click"]],
    template: function ChangeDeliveryInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangeDeliveryInfoComponent_Conditional_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChangeDeliveryInfoComponent_div_14_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangeDeliveryInfoComponent_Template_form_ngSubmit_22_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tg-sales-change-delivery-personal-info", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20)(25, "div", 21)(26, "div", 22)(27, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tg-sales-address-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ChangeDeliveryInfoComponent_Conditional_32_Template, 3, 6, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.validatePersonalInfoOnInit ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "ng.sales-checkout.lbl.title.delivery-address-overlay"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, "ng.sales-checkout.lbl.sub-title.delivery-address-overlay"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateOnInit", ctx.validatePersonalInfoOnInit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 16, "ng.sales-checkout.text.delivery-address-details-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSubmitted", ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](32, !ctx.validatePersonalInfoOnInit ? 32 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgSalesTrackClickEvent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "change-delivery-info-submit-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 18, "ng.sales-checkout.btn.save"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _sales_address_form_field_feat_address_form_field__WEBPACK_IMPORTED_MODULE_2__.AddressFormFieldComponent, _change_personal_info_change_delivery_personal_info_component__WEBPACK_IMPORTED_MODULE_3__.ChangeDeliveryPersonalInfoComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGDirective, _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_9__.AnalyticsClickEventDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 82506:
/*!**********************************************************************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/components/change-delivery/change-personal-info/change-delivery-personal-info.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDeliveryPersonalInfoComponent: () => (/* binding */ ChangeDeliveryPersonalInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/shared/util */ 68479);
/* harmony import */ var _sales_shared_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_util__WEBPACK_IMPORTED_MODULE_4__);
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









function ChangeDeliveryPersonalInfoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "ng.address.check-required-fields.info"));
  }
}
function ChangeDeliveryPersonalInfoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.firstname-required.error"), " ");
  }
}
function ChangeDeliveryPersonalInfoComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.address.lastname-required.error"), " ");
  }
}
function ChangeDeliveryPersonalInfoComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-mobile-field-validation-required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.address.phonenumber-required.error"), " ");
  }
}
function ChangeDeliveryPersonalInfoComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-email-field-validation-required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.address.emailaddress-required.error"), " ");
  }
}
let ChangeDeliveryPersonalInfoComponent = class ChangeDeliveryPersonalInfoComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.validateOnInit = false;
    this.personalInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onTouch = () => {};
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  writeValue(personalInfo) {
    this.personalInfo = personalInfo;
    this.initForm();
  }
  validate() {
    if (this.personalInfoForm.valid) {
      return null;
    }
    return {
      invalidForm: {
        valid: false
      }
    };
  }
  onFieldChanged() {
    this.personalInfo = {
      firstname: this.personalInfoForm.get('firstname')?.value,
      lastname: this.personalInfoForm.get('lastname')?.value,
      mobile: this.personalInfoForm.get('mobile')?.value,
      email: this.personalInfoForm.get('email')?.value
    };
    if (this.onChange) {
      this.onChange(this.personalInfo);
    }
  }
  initForm() {
    this.personalInfoForm = this.formBuilder.group({});
    this.personalInfoForm.addControl('firstname', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.personalInfo?.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]));
    this.personalInfoForm.addControl('lastname', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.personalInfo?.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]));
    this.personalInfoForm.addControl('mobile', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.personalInfo?.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _sales_shared_util__WEBPACK_IMPORTED_MODULE_4__.SalesPhoneNumberValidator.validNumber]));
    this.personalInfoForm.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.personalInfo?.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]));
    if (this.validateOnInit) {
      this.personalInfoForm.markAllAsTouched();
    }
  }
  static #_ = this.ɵfac = function ChangeDeliveryPersonalInfoComponent_Factory(t) {
    return new (t || ChangeDeliveryPersonalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChangeDeliveryPersonalInfoComponent,
    selectors: [["tg-sales-change-delivery-personal-info"]],
    inputs: {
      validateOnInit: "validateOnInit"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ChangeDeliveryPersonalInfoComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ChangeDeliveryPersonalInfoComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 32,
    vars: 25,
    consts: [[1, "content-section", "mb-30", "p--xl--md", "p--l", "mx--n--md", "mx--l", "ng-star-inserted", 3, "formGroup"], [1, "sales-display-info__content__row", "mb-30"], [1, "sales-display-info__content__row__description"], [1, "mt-0"], [1, "row"], ["class", "col-sm-12 form-group"], [1, "col-sm-12", "form-group"], ["for", "firstName", 1, "font--caption", "cur-default", "color-shade_64"], ["formControlName", "firstname", "id", "firstName", 1, "form__input", "ng-untouched", "ng-pristine", "ng-valid", 3, "blur"], ["class", "formErrorInput text-align--left", 4, "ngIf"], ["for", "lastName", 1, "font--caption", "cur-default", "color-shade_64"], ["formControlName", "lastname", "id", "lastName", 1, "form__input", "ng-untouched", "ng-pristine", "ng-valid", 3, "blur"], [1, "col-sm-12", "form-group", "ng-star-inserted"], ["for", "mobile", 1, "font--caption", "cur-default", "color-shade_64"], ["formControlName", "mobile", "id", "mobile", "inputmode", "numeric", "type", "text", 1, "form__input", "ng-untouched", "ng-pristine", "ng-valid", 3, "blur"], ["for", "deliveryEmail", 1, "font--caption", "cur-default", "color-shade_64"], ["formControlName", "email", "id", "deliveryEmail", "type", "text", 1, "form__input", "ng-untouched", "ng-pristine", "ng-valid", 3, "blur"], ["data-cy", "feat-delivery-personal-info-check-required-fields-info", 1, "col-sm-12", "form-group", "notification", "notification--info"], [1, "icon-error-shape"], [1, "formErrorInput", "text-align--left"]],
    template: function ChangeDeliveryPersonalInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChangeDeliveryPersonalInfoComponent_Conditional_7_Template, 6, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ChangeDeliveryPersonalInfoComponent_Template_input_blur_12_listener() {
          return ctx.onFieldChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChangeDeliveryPersonalInfoComponent_div_13_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ChangeDeliveryPersonalInfoComponent_Template_input_blur_18_listener() {
          return ctx.onFieldChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChangeDeliveryPersonalInfoComponent_div_19_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ChangeDeliveryPersonalInfoComponent_Template_input_blur_24_listener() {
          return ctx.onFieldChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChangeDeliveryPersonalInfoComponent_div_25_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12)(27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ChangeDeliveryPersonalInfoComponent_Template_input_blur_30_listener() {
          return ctx.onFieldChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ChangeDeliveryPersonalInfoComponent_div_31_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_8_0;
        let tmp_11_0;
        let tmp_14_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personalInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, "ng.sales-checkout.text.delivery-contact-header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, ctx.validateOnInit ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, "ng.address.lbl.first-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-first-name-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.personalInfoForm.get("firstname")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.personalInfoForm.get("firstname")) == null ? null : tmp_5_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 19, "ng.address.lbl.last-name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-last-name-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.personalInfoForm.get("lastname")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.personalInfoForm.get("lastname")) == null ? null : tmp_8_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 21, "ng.address.lbl.phone-number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-mobile-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.personalInfoForm.get("mobile")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.personalInfoForm.get("mobile")) == null ? null : tmp_11_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 23, "ng.address.lbl.email-address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "feat-delivery-personal-info-form-email-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.personalInfoForm.get("email")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = ctx.personalInfoForm.get("email")) == null ? null : tmp_14_0.hasError("required")));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
};
ChangeDeliveryPersonalInfoComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder])], ChangeDeliveryPersonalInfoComponent);


/***/ }),

/***/ 50722:
/*!*****************************************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/components/change-delivery/constants/change-delivery.const.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stepImage: () => (/* binding */ stepImage)
/* harmony export */ });
const stepImage = 'delivery.svg';

/***/ }),

/***/ 42468:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/constants/delivery-event-step-key.const.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deliveryEventStepKey: () => (/* binding */ deliveryEventStepKey),
/* harmony export */   stepImage: () => (/* binding */ stepImage)
/* harmony export */ });
const deliveryEventStepKey = 'delivery';
const stepImage = 'delivery.svg';

/***/ }),

/***/ 36063:
/*!********************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/constants/delivery-item-type.constant.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericItemType: () => (/* binding */ GenericItemType),
/* harmony export */   HardwareItemType: () => (/* binding */ HardwareItemType),
/* harmony export */   HomeOfficeItemType: () => (/* binding */ HomeOfficeItemType),
/* harmony export */   MultimediaItemType: () => (/* binding */ MultimediaItemType),
/* harmony export */   SmartHomeItemType: () => (/* binding */ SmartHomeItemType),
/* harmony export */   SmartPhoneItemType: () => (/* binding */ SmartPhoneItemType),
/* harmony export */   SmartWatchItemType: () => (/* binding */ SmartWatchItemType),
/* harmony export */   TvAudioItemType: () => (/* binding */ TvAudioItemType),
/* harmony export */   deliveryItemTypes: () => (/* binding */ deliveryItemTypes)
/* harmony export */ });
const HardwareItemType = {
  typeKey: 'accessories',
  iconType: 'accessories',
  labelText: 'accessories',
  types: ['cable', 'cable hub', 'charger', 'cover', 'watch strap', 'headphone', 'holder', 'powerbank', 'screenprotector', 'accessories']
};
const SmartPhoneItemType = {
  typeKey: 'smartphone',
  iconType: 'mobile',
  labelText: 'smartphone',
  types: ['smartphones', 'handset']
};
const SmartWatchItemType = {
  typeKey: 'smartwatch',
  iconType: 'smartwatch',
  labelText: 'smartwatch',
  types: ['smartwatch']
};
const MultimediaItemType = {
  typeKey: 'multimedia',
  iconType: 'mobile',
  labelText: 'multimedia',
  types: ['ergonomics', 'keyboard', 'webcam', 'lightning', 'mouse']
};
const HomeOfficeItemType = {
  typeKey: 'homeoffice',
  iconType: 'homeoffice',
  labelText: 'home-office',
  types: ['laptop', 'laptops', 'monitor', 'tablet', 'tablets', 'fixes phone', 'dect']
};
const TvAudioItemType = {
  typeKey: 'tv-audio',
  iconType: 'tv-audio',
  labelText: 'tv-and-audio',
  types: ['game console', 'radio', 'speaker', 'tv', 'streaming_device']
};
const SmartHomeItemType = {
  typeKey: 'smarthome',
  iconType: 'smart-home',
  labelText: 'smart-home',
  types: ['doorbell', 'security cam', 'smart_lock']
};
const GenericItemType = {
  typeKey: 'other',
  iconType: 'mobile',
  labelText: 'other',
  types: []
};
const deliveryItemTypes = [HardwareItemType, SmartPhoneItemType, SmartWatchItemType, MultimediaItemType, HomeOfficeItemType, TvAudioItemType, SmartHomeItemType, GenericItemType];

/***/ }),

/***/ 21366:
/*!*************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/delivery.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryComponent: () => (/* binding */ DeliveryComponent)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_delivery_step_finished_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/delivery-step-finished.const */ 22617);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/delivery/data-access */ 75967);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/delivery/ui */ 88623);
/* harmony import */ var _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_delivery_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/delivery.util */ 20270);
/* harmony import */ var _events_delivery_step_loaded_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/delivery-step-loaded.const */ 86427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/delivery-event-step-key.const */ 42468);
/* harmony import */ var _components_change_delivery_change_delivery_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/change-delivery/change-delivery-info.component */ 34061);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sales/events/feat-analytics */ 82501);
/* harmony import */ var _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_15__);
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






















function DeliveryComponent_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inlineSVG", ctx_r2.viewModel.stepImage)("resolveSVGUrl", false);
  }
}
function DeliveryComponent_ng_container_0_tg_sales_delivery_notification_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tg-sales-delivery-notification", 35);
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("notification", notification_r4);
  }
}
const _c0 = () => ({
  name: "change address option selected"
});
function DeliveryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div")(13, "div", 8)(14, "div", 9)(15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, DeliveryComponent_ng_container_0_div_16_Template, 1, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div")(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "tg-sales-delivery-items", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 20)(30, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div")(34, "div", 22)(35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, DeliveryComponent_ng_container_0_tg_sales_delivery_notification_36_Template, 1, 1, "tg-sales-delivery-notification", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "form", 25)(39, "div", 26)(40, "div", 27)(41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "tg-sales-delivery-delivery-address", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "div", 30)(45, "tg-sales-delivery-personal-info", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](46, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 32)(48, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DeliveryComponent_ng_container_0_Template_a_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.setChangeAddressState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "feat-delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 13, "ng.sales-checkout.lbl.title.delivery"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 15, "ng.sales-checkout.lbl.sub-title.delivery"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.viewModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](26, 17, "ng.sales-checkout.text.delivery-content-title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("deliveryItems", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](28, 19, ctx_r0.viewModel.deliveryItems$));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](32, 21, "ng.sales-checkout.text.delivery-address-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](37, 23, ctx_r0.viewModel.notifications$));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("deliveryAddress", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](43, 25, ctx_r0.viewModel.deliveryAddress$));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("personalInfo", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](46, 27, ctx_r0.viewModel.personalInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("tgSalesTrackClickEvent", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "change-delivery-address-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](50, 29, "ng.sales-checkout.delivery-change-address"), " ");
  }
}
function DeliveryComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "tg-sales-change-delivery-info", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closeOverlay", function DeliveryComponent_ng_container_1_Template_tg_sales_change_delivery_info_closeOverlay_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.cancelNewPersonalInfo());
    })("saveNewPersonalInfo", function DeliveryComponent_ng_container_1_Template_tg_sales_change_delivery_info_saveNewPersonalInfo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.saveNewPersonalInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("validatePersonalInfoOnInit", ctx_r1.viewModel.validatePersonalInfoOnInit)("deliveryAddress", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, ctx_r1.viewModel.deliveryAddress$))("personalInfo", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 5, ctx_r1.viewModel.personalInfo$));
  }
}
let DeliveryComponent = class DeliveryComponent {
  constructor(eventFacade, deliveryFacade) {
    this.eventFacade = eventFacade;
    this.deliveryFacade = deliveryFacade;
    this.messageGroup = 'delivery';
    this.viewState = _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.OVERLAY_CLOSED;
    this.viewStateEnum = _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum;
    this.viewModel = {
      stepImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_9__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_11__.stepImage),
      validatePersonalInfoOnInit: false,
      personalInfo$: this.deliveryFacade.personalInfo$,
      deliveryItems$: this.deliveryFacade.deliveryItems$,
      deliveryAddress$: this.deliveryFacade.deliveryAddress$,
      notifications$: this.deliveryFacade.notifications$
    };
  }
  ngOnInit() {
    this.eventFacade.triggerEvent(_events_delivery_step_loaded_const__WEBPACK_IMPORTED_MODULE_6__.deliveryStepLoaded);
    this.ifMissingRequiredDeliveryInfoThenShowOverlay();
  }
  onNextStep() {
    this.eventFacade.triggerEvent(_events_delivery_step_finished_const__WEBPACK_IMPORTED_MODULE_1__.deliveryStepFinished);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
  }
  setChangeAddressState() {
    this.eventFacade.triggerEvent(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.hideNavigationEvent);
    this.viewState = _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.OVERLAY_OPEN;
  }
  cancelNewPersonalInfo() {
    this.eventFacade.triggerEvent(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.showNavigationEvent);
    this.viewState = _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.OVERLAY_CLOSED;
  }
  saveNewPersonalInfo(personalInfo) {
    this.eventFacade.triggerEvent(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.showNavigationEvent);
    this.eventFacade.triggerEvent(_utils_delivery_util__WEBPACK_IMPORTED_MODULE_5__.DeliveryUtil.createDeliveryStateEvent(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.OVERLAY_CLOSED, personalInfo));
    this.viewState = _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.OVERLAY_CLOSED;
    this.viewModel.validatePersonalInfoOnInit = false;
  }
  ifMissingRequiredDeliveryInfoThenShowOverlay() {
    this.deliveryFacade.personalInfo$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this)).subscribe(personalInfo => {
      if (!personalInfo || personalInfo.email === '' || personalInfo.mobile === '') {
        this.viewModel.validatePersonalInfoOnInit = true;
        this.setChangeAddressState();
      }
    });
  }
  static #_ = this.ɵfac = function DeliveryComponent_Factory(t) {
    return new (t || DeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.DeliveryFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: DeliveryComponent,
    selectors: [["tg-sales-delivery"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "sales-checkout", "container--medium"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "horizontal-center-align"], [1, "col-sm-12", "sales-checkout"], [1, "stepper-page__body-inner", "p-0"], [1, "stepper-page__content--split", "container", "mobile-lines"], [1, "stepper-page__content-first", "flex-hide-until-md", "position--sticky--md", "position--top--md"], ["class", "stepper-page__content-first flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl", 4, "ngIf"], [1, "stepper-page__content-second"], ["id", "undefined", 1, "stepper-move"], [1, "text-flow", "text-flow--label", "stepper-page__title-label", "m-0"], [1, "sales-flow"], [1, "sales-flow__content__delivery", "mb--xxxg"], [1, "content-section", "p--l"], [1, "pb-5", "m-0"], [3, "deliveryItems"], [1, "m-0", "content-section"], [1, "pl--xl", "pt--l", "m-0"], [1, "background-white", "pb-10"], [1, "installation-location__error", "px--xl", "pt--xs"], [3, "notification", 4, "ngFor", "ngForOf"], ["novalidate", "", 1, "form-group", "mb-0", "ng-untouched", "ng-pristine", "ng-valid"], [1, "sales-flow__content__delivery__section", "mb--xg"], [1, "sales-display-info--delivery-address", "mb-0"], [1, "sales-display-info__content"], [3, "deliveryAddress"], [1, "divider", "divider--s__very-light-grey", "mb--l"], [3, "personalInfo"], [1, "display--flex", "color-black", "pl--xl--md", "pb--xs--md", "px--xm"], [1, "button", "button--primary", "mb--l", 3, "tgSalesTrackClickEvent", "click"], [1, "stepper-page__content-first", "flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl"], [3, "notification"], [3, "validatePersonalInfoOnInit", "deliveryAddress", "personalInfo", "closeOverlay", "saveNewPersonalInfo"]],
    template: function DeliveryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, DeliveryComponent_ng_container_0_Template, 51, 32, "ng-container", 0)(1, DeliveryComponent_ng_container_1_Template, 4, 7, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.viewState === ctx.viewStateEnum.OVERLAY_CLOSED);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.viewState === ctx.viewStateEnum.OVERLAY_OPEN);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__.PersonalInfoComponent, _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__.DeliveryAddressComponent, _components_change_delivery_change_delivery_info_component__WEBPACK_IMPORTED_MODULE_12__.ChangeDeliveryInfoComponent, _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__.SharedToolModule, _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__.DeliveryItemsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _sales_delivery_ui__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__.InlineSVGModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_10__.InlineSVGDirective, _sales_events_feat_analytics__WEBPACK_IMPORTED_MODULE_14__.AnalyticsClickEventDirective],
    encapsulation: 2
  });
};
DeliveryComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventFacade, _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_2__.DeliveryFacade])], DeliveryComponent);


/***/ }),

/***/ 69303:
/*!****************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/enums/event-type.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryEventTypeEnum: () => (/* binding */ DeliveryEventTypeEnum)
/* harmony export */ });
var DeliveryEventTypeEnum;
(function (DeliveryEventTypeEnum) {
  DeliveryEventTypeEnum["CHANGE_ADDRESS"] = "change-address";
})(DeliveryEventTypeEnum || (DeliveryEventTypeEnum = {}));

/***/ }),

/***/ 38129:
/*!****************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/events/change-address-state.event.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeAddressStateEvent: () => (/* binding */ changeAddressStateEvent)
/* harmony export */ });
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/event-type.enum */ 69303);

const changeAddressStateEvent = {
  eventType: _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_0__.DeliveryEventTypeEnum.CHANGE_ADDRESS
};

/***/ }),

/***/ 22617:
/*!******************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/events/delivery-step-finished.const.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deliveryStepFinished: () => (/* binding */ deliveryStepFinished)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/delivery-event-step-key.const */ 42468);


const deliveryStepFinished = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.deliveryEventStepKey
  }
};

/***/ }),

/***/ 86427:
/*!****************************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/events/delivery-step-loaded.const.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deliveryStepLoaded: () => (/* binding */ deliveryStepLoaded)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/delivery-event-step-key.const */ 42468);


const deliveryStepLoaded = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: _constants_delivery_event_step_key_const__WEBPACK_IMPORTED_MODULE_1__.deliveryEventStepKey
  }
};

/***/ }),

/***/ 20270:
/*!**************************************************************************!*\
  !*** ./libs/sales/delivery/feat-delivery/src/lib/utils/delivery.util.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryUtil: () => (/* binding */ DeliveryUtil)
/* harmony export */ });
/* harmony import */ var _events_change_address_state_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/change-address-state.event */ 38129);

class DeliveryUtil {
  static createDeliveryStateEvent(viewState, personalInfo) {
    _events_change_address_state_event__WEBPACK_IMPORTED_MODULE_0__.changeAddressStateEvent.body = Object.assign({}, {
      state: viewState,
      personalInfo: personalInfo
    });
    return _events_change_address_state_event__WEBPACK_IMPORTED_MODULE_0__.changeAddressStateEvent;
  }
}

/***/ }),

/***/ 21993:
/*!************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* reexport safe */ _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__.InlineSVGConfig),
/* harmony export */   InlineSVGDirective: () => (/* reexport safe */ _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective),
/* harmony export */   InlineSVGModule: () => (/* reexport safe */ _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule),
/* harmony export */   SVGCacheService: () => (/* reexport safe */ _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService)
/* harmony export */ });
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.module */ 61962);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);





/***/ }),

/***/ 61563:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.component.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGComponent: () => (/* binding */ InlineSVGComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.service */ 96046);





var InlineSVGComponent = function () {
  function InlineSVGComponent(_inlineSVGService, el) {
    this._inlineSVGService = _inlineSVGService;
    this._el = el;
  }
  InlineSVGComponent.prototype.ngAfterViewInit = function () {
    this._updateContent();
  };
  InlineSVGComponent.prototype.ngOnChanges = function (changes) {
    if (changes['content']) {
      this._updateContent();
    }
  };
  InlineSVGComponent.prototype._updateContent = function () {
    this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
  };
  InlineSVGComponent.ɵfac = function InlineSVGComponent_Factory(t) {
    return new (t || InlineSVGComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  InlineSVGComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InlineSVGComponent,
    selectors: [["inline-svg"]],
    inputs: {
      context: "context",
      content: "content",
      replaceContents: "replaceContents",
      prepend: "prepend"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function InlineSVGComponent_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
  return InlineSVGComponent;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'inline-svg',
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/***/ }),

/***/ 77181:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.config.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* binding */ InlineSVGConfig)
/* harmony export */ });
var InlineSVGConfig = function () {
  function InlineSVGConfig() {}
  return InlineSVGConfig;
}();


/***/ }),

/***/ 16360:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.directive.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGDirective: () => (/* binding */ InlineSVGDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-svg.service */ 96046);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _svg_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg-util */ 32851);











var InlineSVGDirective = function () {
  function InlineSVGDirective(_el, _viewContainerRef, _resolver, _svgCache, _renderer, _inlineSVGService, _config, platformId) {
    this._el = _el;
    this._viewContainerRef = _viewContainerRef;
    this._resolver = _resolver;
    this._svgCache = _svgCache;
    this._renderer = _renderer;
    this._inlineSVGService = _inlineSVGService;
    this._config = _config;
    this.platformId = platformId;
    this.resolveSVGUrl = true;
    this.replaceContents = true;
    this.prepend = false;
    this.injectComponent = false;
    this.cacheSVG = true;
    this.forceEvalStyles = false;
    this.evalScripts = "always";
    this.onSVGInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSVGFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._supportsSVG = _svg_util__WEBPACK_IMPORTED_MODULE_6__.isSvgSupported();
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      this._fail('Embed SVG are not supported by this browser');
    }
  }
  InlineSVGDirective.prototype.ngOnInit = function () {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    this._insertSVG();
  };
  InlineSVGDirective.prototype.ngOnChanges = function (changes) {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    var setSVGAttributesChanged = Boolean(changes['setSVGAttributes']);
    if (changes['inlineSVG'] || setSVGAttributesChanged) {
      this._insertSVG(setSVGAttributesChanged);
    }
  };
  InlineSVGDirective.prototype.ngOnDestroy = function () {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  };
  InlineSVGDirective.prototype._insertSVG = function (force) {
    var _this = this;
    if (force === void 0) {
      force = false;
    }
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      return;
    }
    if (!this.inlineSVG) {
      this._fail('No URL passed to [inlineSVG]');
      return;
    }
    if (!force && this.inlineSVG === this._prevUrl) {
      return;
    }
    this._prevUrl = this.inlineSVG;
    this._subscription = this._svgCache.getSVG(this.inlineSVG, this.resolveSVGUrl, this.cacheSVG).subscribe(function (svg) {
      if (_svg_util__WEBPACK_IMPORTED_MODULE_6__.isUrlSymbol(_this.inlineSVG)) {
        var symbolId = _this.inlineSVG.split('#')[1];
        svg = _svg_util__WEBPACK_IMPORTED_MODULE_6__.createSymbolSvg(_this._renderer, svg, symbolId);
      }
      _this._processSvg(svg);
    }, function (err) {
      _this._fail(err);
    });
  };
  InlineSVGDirective.prototype._processSvg = function (svg) {
    if (!svg) {
      return;
    }
    if (this.removeSVGAttributes && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.removeAttributes(svg, this.removeSVGAttributes);
    }
    if (this.setSVGAttributes) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.setAttributes(svg, this.setSVGAttributes);
    }
    if (this.onSVGLoaded) {
      svg = this.onSVGLoaded(svg, this._el.nativeElement);
    }
    this._insertEl(svg);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this._inlineSVGService.evalScripts(svg, this.inlineSVG, this.evalScripts);
    }
    if (this.forceEvalStyles) {
      var styleTags = svg.querySelectorAll('style');
      Array.from(styleTags).forEach(function (tag) {
        return tag.textContent += '';
      });
    }
    this.onSVGInserted.emit(svg);
  };
  InlineSVGDirective.prototype._insertEl = function (el) {
    if (this.injectComponent) {
      if (!this._svgComp) {
        var factory = this._resolver.resolveComponentFactory(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent);
        this._svgComp = this._viewContainerRef.createComponent(factory);
      }
      this._svgComp.instance.context = this;
      this._svgComp.instance.replaceContents = this.replaceContents;
      this._svgComp.instance.prepend = this.prepend;
      this._svgComp.instance.content = el;
      this._renderer.appendChild(this._el.nativeElement, this._svgComp.injector.get(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent)._el.nativeElement);
    } else {
      this._inlineSVGService.insertEl(this, this._el.nativeElement, el, this.replaceContents, this.prepend);
    }
  };
  InlineSVGDirective.prototype._fail = function (msg) {
    this.onSVGFailed.emit(msg);
    if (this.fallbackImgUrl) {
      var elImg = this._renderer.createElement('IMG');
      this._renderer.setAttribute(elImg, 'src', this.fallbackImgUrl);
      this._insertEl(elImg);
    } else if (this.fallbackSVG && this.fallbackSVG !== this.inlineSVG) {
      this.inlineSVG = this.fallbackSVG;
      this._insertSVG();
    }
  };
  InlineSVGDirective.prototype._isValidPlatform = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) || (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  };
  InlineSVGDirective.prototype._isSSRDisabled = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && this._config && this._config.clientOnly;
  };
  InlineSVGDirective.ɵfac = function InlineSVGDirective_Factory(t) {
    return new (t || InlineSVGDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  InlineSVGDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InlineSVGDirective,
    selectors: [["", "inlineSVG", ""]],
    inputs: {
      inlineSVG: "inlineSVG",
      resolveSVGUrl: "resolveSVGUrl",
      replaceContents: "replaceContents",
      prepend: "prepend",
      injectComponent: "injectComponent",
      cacheSVG: "cacheSVG",
      setSVGAttributes: "setSVGAttributes",
      removeSVGAttributes: "removeSVGAttributes",
      forceEvalStyles: "forceEvalStyles",
      evalScripts: "evalScripts",
      fallbackImgUrl: "fallbackImgUrl",
      fallbackSVG: "fallbackSVG",
      onSVGLoaded: "onSVGLoaded"
    },
    outputs: {
      onSVGInserted: "onSVGInserted",
      onSVGFailed: "onSVGFailed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return InlineSVGDirective;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[inlineSVG]',
      providers: [_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, {
    inlineSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolveSVGUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    injectComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cacheSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    setSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    forceEvalStyles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    evalScripts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackImgUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGInserted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSVGFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/***/ }),

/***/ 61962:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.module.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGModule: () => (/* binding */ InlineSVGModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);





var InlineSVGModule = function () {
  function InlineSVGModule() {}
  InlineSVGModule.forRoot = function (config) {
    return {
      ngModule: InlineSVGModule,
      providers: [{
        provide: _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__.InlineSVGConfig,
        useValue: config
      }]
    };
  };
  InlineSVGModule.ɵfac = function InlineSVGModule_Factory(t) {
    return new (t || InlineSVGModule)();
  };
  InlineSVGModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InlineSVGModule
  });
  InlineSVGModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return InlineSVGModule;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
      exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective],
      entryComponents: [_inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InlineSVGModule, {
    declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
    exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective]
  });
})();

/***/ }),

/***/ 96046:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.service.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGService: () => (/* binding */ InlineSVGService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var InlineSVGService = function () {
  function InlineSVGService(rendererFactory) {
    this._ranScripts = {};
    this._renderer = rendererFactory.createRenderer(null, null);
  }
  InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
    if (replaceContents && !prepend) {
      var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
      if (parentNode) {
        this._renderer.removeChild(parentNode, dir._prevSVG);
      }
      parentEl.innerHTML = '';
    }
    if (prepend) {
      this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
    } else {
      this._renderer.appendChild(parentEl, content);
    }
    if (content.nodeName === 'svg') {
      dir._prevSVG = content;
    }
  };
  InlineSVGService.prototype.evalScripts = function (svg, url, evalMode) {
    var scripts = svg.querySelectorAll('script');
    var scriptsToEval = [];
    for (var i = 0; i < scripts.length; i++) {
      var scriptType = scripts[i].getAttribute('type');
      if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
        var script = scripts[i].innerText || scripts[i].textContent;
        scriptsToEval.push(script);
        this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
      }
    }
    if (scriptsToEval.length > 0 && (evalMode === "always" || evalMode === "once" && !this._ranScripts[url])) {
      for (var i = 0; i < scriptsToEval.length; i++) {
        new Function(scriptsToEval[i])(window);
      }
      this._ranScripts[url] = true;
    }
  };
  InlineSVGService.ɵfac = function InlineSVGService_Factory(t) {
    return new (t || InlineSVGService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2));
  };
  InlineSVGService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InlineSVGService,
    factory: InlineSVGService.ɵfac,
    providedIn: 'root'
  });
  return InlineSVGService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 70947:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-cache.service.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGCacheService: () => (/* binding */ SVGCacheService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);










var SVGCacheService = function () {
  function SVGCacheService(_appBase, _location, _config, httpClient, httpBackend, rendererFactory) {
    this._appBase = _appBase;
    this._location = _location;
    this._config = _config;
    this._http = _config && !_config.bypassHttpClientInterceptorChain ? httpClient : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient(httpBackend);
    this._renderer = rendererFactory.createRenderer(null, null);
    this.setBaseUrl();
    if (!SVGCacheService._cache) {
      SVGCacheService._cache = new Map();
    }
    if (!SVGCacheService._inProgressReqs) {
      SVGCacheService._inProgressReqs = new Map();
    }
  }
  SVGCacheService.prototype.getSVG = function (url, resolveSVGUrl, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = true;
    }
    var svgUrl = (resolveSVGUrl ? this.getAbsoluteUrl(url) : url).replace(/#.+$/, '');
    if (cache && SVGCacheService._cache.has(svgUrl)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this._cloneSVG(SVGCacheService._cache.get(svgUrl)));
    }
    if (SVGCacheService._inProgressReqs.has(svgUrl)) {
      return SVGCacheService._inProgressReqs.get(svgUrl);
    }
    var req = this._http.get(svgUrl, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function () {
      SVGCacheService._inProgressReqs.delete(svgUrl);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (error) {
      SVGCacheService._inProgressReqs.delete(svgUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.message);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (svgText) {
      var svgEl = _this._svgElementFromString(svgText);
      SVGCacheService._cache.set(svgUrl, svgEl);
      return _this._cloneSVG(svgEl);
    }));
    SVGCacheService._inProgressReqs.set(svgUrl, req);
    return req;
  };
  SVGCacheService.prototype.setBaseUrl = function () {
    if (this._config) {
      this._baseUrl = this._config.baseUrl;
    } else if (this._appBase !== null) {
      this._baseUrl = this._appBase;
    } else if (this._location !== null) {
      this._baseUrl = this._location.getBaseHrefFromDOM();
    }
  };
  SVGCacheService.prototype.getAbsoluteUrl = function (url) {
    if (this._baseUrl && !/^https?:\/\//i.test(url)) {
      url = this._baseUrl + url;
      if (url.indexOf('//') === 0) {
        url = url.substring(1);
      }
    }
    var base = this._renderer.createElement('BASE');
    base.href = url;
    return base.href;
  };
  SVGCacheService.prototype._svgElementFromString = function (str) {
    var div = this._renderer.createElement('DIV');
    div.innerHTML = str;
    var svg = div.querySelector('svg');
    if (!svg) {
      throw new Error('No SVG found in loaded contents');
    }
    return svg;
  };
  SVGCacheService.prototype._cloneSVG = function (svg) {
    return svg.cloneNode(true);
  };
  SVGCacheService.ɵfac = function SVGCacheService_Factory(t) {
    return new (t || SVGCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2));
  };
  SVGCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SVGCacheService,
    factory: SVGCacheService.ɵfac,
    providedIn: 'root'
  });
  return SVGCacheService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SVGCacheService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF]
      }]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 32851:
/*!***************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-util.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSymbolSvg: () => (/* binding */ createSymbolSvg),
/* harmony export */   isSvgSupported: () => (/* binding */ isSvgSupported),
/* harmony export */   isUrlSymbol: () => (/* binding */ isUrlSymbol),
/* harmony export */   removeAttributes: () => (/* binding */ removeAttributes),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
function isUrlSymbol(url) {
  return url.charAt(0) === '#' || url.indexOf('.svg#') > -1;
}
function isSvgSupported() {
  return typeof SVGRect !== 'undefined';
}
function createSymbolSvg(renderer, svg, symbolId) {
  var symbol = svg.querySelector("[id=\"".concat(symbolId, "\"]"));
  if (!symbol) {
    throw new Error("Symbol \"".concat(symbolId, "\" not found"));
  }
  var elSvg = renderer.createElement('svg', 'svg');
  renderer.appendChild(elSvg, symbol);
  var elSvgUse = renderer.createElement('use', 'svg');
  renderer.setAttribute(elSvgUse, 'href', "#".concat(symbolId), 'xlink');
  renderer.appendChild(elSvg, elSvgUse);
  return elSvg;
}
function removeAttributes(element, attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var elAttr = element.getAttribute(attrs[i]);
    if (elAttr) {
      element.removeAttribute(attrs[i]);
    }
  }
  var innerEls = element.getElementsByTagName('*');
  for (var i = 0; i < innerEls.length; i++) {
    removeAttributes(innerEls[i], attrs);
  }
}
function setAttributes(element, attrs) {
  for (var attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
}

/***/ })

}])
//# sourceMappingURL=libs_sales_delivery_feat-delivery_src_index_ts-_4cbf1.js.map