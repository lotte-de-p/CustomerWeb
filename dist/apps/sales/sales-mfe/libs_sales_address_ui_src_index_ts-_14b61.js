(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_address_ui_src_index_ts-_14b61"],{

/***/ 29148:
/*!********************************************!*\
  !*** ./libs/sales/address/ui/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressListComponent: () => (/* reexport safe */ _lib_address_list_address_list_component__WEBPACK_IMPORTED_MODULE_1__.AddressListComponent),
/* harmony export */   InstallationAddressComponent: () => (/* reexport safe */ _lib_installation_address_installation_address_component__WEBPACK_IMPORTED_MODULE_0__.InstallationAddressComponent)
/* harmony export */ });
/* harmony import */ var _lib_installation_address_installation_address_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/installation-address/installation-address.component */ 85636);
/* harmony import */ var _lib_address_list_address_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/address-list/address-list.component */ 70375);



/***/ }),

/***/ 70375:
/*!******************************************************************************!*\
  !*** ./libs/sales/address/ui/src/lib/address-list/address-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressListComponent: () => (/* binding */ AddressListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _installation_address_installation_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../installation-address/installation-address.component */ 85636);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);






const _forTrack0 = ($index, $item) => $item.id;
function AddressListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-sales-installation-address", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addressSelected", function AddressListComponent_For_8_Template_tg_sales_installation_address_addressSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onAddressSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", address_r1)("index", i_r2);
  }
}
class AddressListComponent {
  constructor() {
    this.addresses = [];
    this.addressSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showAddress = true;
  }
  onAddressSelected(address) {
    this.addressSelected.emit(address);
  }
  static #_ = this.ɵfac = function AddressListComponent_Factory(t) {
    return new (t || AddressListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressListComponent,
    selectors: [["tg-sales-address-list"]],
    inputs: {
      addresses: "addresses"
    },
    outputs: {
      addressSelected: "addressSelected"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 6,
    consts: [[1, "installation-location__content", "px--xxs"], [1, "installation-location__title", "row", "row--no-gutters", "justify-content--between", "mb--l", "font-weight--bold"], [1, "heading--6", "heading--nomargin"], ["data-cy", "address-list-chevron", 1, "icon", 3, "ngClass", "click"], ["data-cy", "address-list", 1, "select-tile--group", "display--grid", "grid-template-column--1", "gap--xm"], [3, "address", "index", "addressSelected"], [3, "address", "index"]],
    template: function AddressListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressListComponent_Template_i_click_5_listener() {
          return ctx.showAddress = !ctx.showAddress;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, AddressListComponent_For_8_Template, 1, 2, "tg-sales-installation-address", 6, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.sales-checkout.lbl.select-installation-location.location-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showAddress ? "icon-chevron-up" : "icon-chevron-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("display--none-important", !ctx.showAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.addresses);
      }
    },
    dependencies: [_installation_address_installation_address_component__WEBPACK_IMPORTED_MODULE_1__.InstallationAddressComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80472:
/*!*******************************************************************************!*\
  !*** ./libs/sales/address/ui/src/lib/constants/installation-address.const.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationAddressStepKey: () => (/* binding */ InstallationAddressStepKey),
/* harmony export */   stepImage: () => (/* binding */ stepImage)
/* harmony export */ });
const InstallationAddressStepKey = 'delivery';
const stepImage = 'installation.svg';

/***/ }),

/***/ 86296:
/*!******************************************************************************************!*\
  !*** ./libs/sales/address/ui/src/lib/events/installation-address-step-finished.const.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   installationAddressStepFinished: () => (/* binding */ installationAddressStepFinished)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_installation_address_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/installation-address.const */ 80472);


const installationAddressStepFinished = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_FINISHED,
  body: {
    stepKey: _constants_installation_address_const__WEBPACK_IMPORTED_MODULE_1__.InstallationAddressStepKey
  }
};

/***/ }),

/***/ 85636:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/address/ui/src/lib/installation-address/installation-address.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationAddressComponent: () => (/* binding */ InstallationAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_installation_address_step_finished_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/installation-address-step-finished.const */ 86296);








function InstallationAddressComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "ng.sales-checkout.lbl.installation-address.new-line"), " ");
  }
}
function InstallationAddressComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/", ctx_r1.address == null ? null : ctx_r1.address.subHouseNumber, "");
  }
}
function InstallationAddressComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/", ctx_r2.address == null ? null : ctx_r2.address.box, "");
  }
}
class InstallationAddressComponent {
  constructor(eventFacade) {
    this.eventFacade = eventFacade;
    this.index = 0;
    this.addressSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onSelect() {
    this.addressSelected.emit(this.address);
  }
  onNextStep() {
    this.eventFacade.triggerEvent(_events_installation_address_step_finished_const__WEBPACK_IMPORTED_MODULE_4__.installationAddressStepFinished);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
  }
  static #_ = this.ɵfac = function InstallationAddressComponent_Factory(t) {
    return new (t || InstallationAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InstallationAddressComponent,
    selectors: [["tg-sales-installation-address"]],
    inputs: {
      address: "address",
      index: "index"
    },
    outputs: {
      addressSelected: "addressSelected"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 10,
    consts: [["data-cy", "address-item", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up"], [1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], ["class", "select-tile__badge_container display--flex gap--xxs flex-wrap--wrap"], ["data-cy", "installation-address-first-line", 1, "heading--6", "heading--nomargin"], ["data-cy", "installation-address-second-line", 1, "font--caption-bold"], ["data-cy", "feat-installation-address-list-item", "name", "select-address-radio-group-name", "type", "radio", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--caption", "cursor--pointer", "border-radius--circle", 3, "id", "checked", "click"], [1, "select-tile__badge_container", "display--flex", "gap--xxs", "flex-wrap--wrap"], [1, "cmp-badge"], [1, "background-jeans-blue_40", "background-white", "color-text", "display--inline-flex"], [1, "font--caption-bold", "text-weight--xl", "space--nowrap"]],
    template: function InstallationAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InstallationAddressComponent_Conditional_5_Template, 6, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InstallationAddressComponent_Conditional_9_Template, 2, 1, "span")(10, InstallationAddressComponent_Conditional_10_Template, 2, 1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstallationAddressComponent_Template_input_click_13_listener() {
          return ctx.onSelect();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](5, (ctx.address == null ? null : ctx.address.isNew) ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.address == null ? null : ctx.address.street, " ", ctx.address == null ? null : ctx.address.houseNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, (ctx.address == null ? null : ctx.address.subHouseNumber) ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](10, (ctx.address == null ? null : ctx.address.box) ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.address == null ? null : ctx.address.postalCode, " ", ctx.address == null ? null : ctx.address.municipality, " , ", ctx.address == null ? null : ctx.address.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "choices-", ctx.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.address == null ? null : ctx.address.selected);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_address_ui_src_index_ts-_14b61.js.map