(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_feat-address-identity_src_index_ts"],{

/***/ 74742:
/*!*****************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-address-identity/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressIdentityComponent: () => (/* reexport safe */ _lib_feat_address_identity_address_identity_component__WEBPACK_IMPORTED_MODULE_0__.AddressIdentityComponent)
/* harmony export */ });
/* harmony import */ var _lib_feat_address_identity_address_identity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feat-address-identity/address-identity.component */ 14097);


/***/ }),

/***/ 14097:
/*!****************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/feat-address-identity/src/lib/feat-address-identity/address-identity.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressIdentityComponent: () => (/* binding */ AddressIdentityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/customer-registration/data-access */ 17233);
/* harmony import */ var _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/src/lib/sales-address-toggle/address-toggle.component */ 92549);
/* harmony import */ var sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);
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












const _c0 = ["legalAddress"];
const _c1 = ["installationAddress"];
const AddressIdentityComponent_Conditional_12_Defer_3_DepsFn = () => [_angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__.AddressFormComponent];
function AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "tg-sales-customer-registration-address-form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("updateStreetsEmitter", function AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template_tg_sales_customer_registration_address_form_updateStreetsEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.updateStreets($event));
    })("saveAddressEmitter", function AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template_tg_sales_customer_registration_address_form_saveAddressEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.saveAddressToState($event));
    })("updateSubHouseEmitter", function AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template_tg_sales_customer_registration_address_form_updateSubHouseEmitter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.updateSubHouse());
    })("updateBoxEmitter", function AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template_tg_sales_customer_registration_address_form_updateBoxEmitter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.updateBox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("locationSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ctx_r4.locationSuggestion$))("streetSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, ctx_r4.streetSuggestion$))("subHouseNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, ctx_r4.subHouseNoSuggestions$))("boxNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 11, ctx_r4.boxNoSuggestions$))("addressType", "installationAddress");
  }
}
function AddressIdentityComponent_Conditional_12_Defer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddressIdentityComponent_Conditional_12_Defer_1_Conditional_0_Template, 7, 13, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx_r2.showInstallationAddress ? 0 : -1);
  }
}
function AddressIdentityComponent_Conditional_12_DeferPlaceholder_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "br");
  }
}
function AddressIdentityComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tg-sales-customer-registration-address-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("isChecked", function AddressIdentityComponent_Conditional_12_Template_tg_sales_customer_registration_address_toggle_isChecked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.toggleAddressVisibility($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddressIdentityComponent_Conditional_12_Defer_1_Template, 1, 1)(2, AddressIdentityComponent_Conditional_12_DeferPlaceholder_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefer"](3, 1, AddressIdentityComponent_Conditional_12_Defer_3_DepsFn, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdeferOnViewport"](0, -1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showBillingAddressToggle", false)("addressType", "installationAddress")("showInstallationAddressToggle", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "address-toggle-component");
  }
}
let AddressIdentityComponent = class AddressIdentityComponent {
  constructor(stepFacade, addressIdentityFacade) {
    this.stepFacade = stepFacade;
    this.addressIdentityFacade = addressIdentityFacade;
    this.currentStep = this.stepFacade.currentStepKey$;
    this.streetSuggestion$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
    this.showInstallationAddress = false;
    this.showBillingAddress = false;
    this.searchCustomerResultExists$ = this.addressIdentityFacade.searchCustomerResultExists$;
    this.address$ = this.addressIdentityFacade.addresses$;
    this.subHouseNoSuggestions$ = this.addressIdentityFacade.subHouseNumbers$;
    this.boxNoSuggestions$ = this.addressIdentityFacade.boxNumbers$;
    this.itsMeResponse$ = this.addressIdentityFacade.itsMeResponse$;
    this.isInstallableProductExists$ = this.addressIdentityFacade.isInstallableProductExists$;
    this.locationSuggestion$ = this.addressIdentityFacade.getMunicipalities().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }
  onNextStep() {
    const isValidLegalAddress = this.addressFormComponent?.validateForm();
    const isValidInstallationAddress = this.showInstallationAddress ? this.installationAddressFormComponent?.validateForm() : true;
    if (isValidLegalAddress && isValidInstallationAddress) {
      this.addressIdentityFacade.performResidentialNavsCheck();
      this.addressIdentityFacade.searchCustomer();
      this.searchCustomerResultExists$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(searchCustomerResultExists => {
        searchCustomerResultExists ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
      });
      this.addressIdentityFacade.finalizeFlow();
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
  }
  toggleAddressVisibility(event) {
    if (event.type === 'installationAddress') {
      this.showInstallationAddress = !event.checked;
    }
    if (event.type === 'billingAddress') {
      this.showBillingAddress = event.checked;
    }
  }
  updateStreets(postalCode) {
    this.streetSuggestion$ = this.addressIdentityFacade.getStreets(postalCode);
  }
  saveAddressToState(address) {
    this.addressIdentityFacade.loadAddress(address);
    this.addressIdentityFacade.searchCustomer();
    this.address$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(addresses => {
      this.addressIdentityFacade.saveMatchedAddress(addresses, address);
    });
    this.searchCustomerResultExists$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(searchCustomerResultExists => {
      searchCustomerResultExists ? this.stepFacade.hideNavigationBar() : this.stepFacade.displayNavigationBar();
    });
  }
  updateSubHouse() {
    this.address$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(addresses => {
      if (addresses.length > 0) {
        this.addressIdentityFacade.getSubHouseNumbers(addresses);
      }
    });
  }
  updateBox() {
    this.address$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(addresses => {
      if (addresses.length > 0) {
        this.addressIdentityFacade.getBoxNumbers(addresses);
      }
    });
  }
  static #_ = this.ɵfac = function AddressIdentityComponent_Factory(t) {
    return new (t || AddressIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__.AddressIdentityFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddressIdentityComponent,
    selectors: [["lib-sales-customer-registration-feat-address-identity"]],
    viewQuery: function AddressIdentityComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.addressFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.installationAddressFormComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 22,
    consts: [[3, "currentStep"], [1, "mb--xxxg", "pb--l", "py--n", "col-lg-8", "col-md-9", "col-12", "m--auto"], [1, "background-white", "col-12", "m--auto", "p--xxxl--md", "p--xl"], [1, "address-identity-section"], [3, "locationSuggestions", "streetSuggestions", "itsMeDetails", "subHouseNoSuggestions", "boxNoSuggestions", "addressType", "updateStreetsEmitter", "saveAddressEmitter", "updateSubHouseEmitter", "updateBoxEmitter"], ["legalAddress", ""], [3, "showBillingAddressToggle", "addressType", "showInstallationAddressToggle", "isChecked"], ["class", "mt--xl--md mt--l"], [1, "mt--xl--md", "mt--l"], [3, "locationSuggestions", "streetSuggestions", "subHouseNoSuggestions", "boxNoSuggestions", "addressType", "updateStreetsEmitter", "saveAddressEmitter", "updateSubHouseEmitter", "updateBoxEmitter"], ["installationAddress", ""]],
    template: function AddressIdentityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tg-sales-customer-registration-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "tg-sales-customer-registration-address-form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("updateStreetsEmitter", function AddressIdentityComponent_Template_tg_sales_customer_registration_address_form_updateStreetsEmitter_5_listener($event) {
          return ctx.updateStreets($event);
        })("saveAddressEmitter", function AddressIdentityComponent_Template_tg_sales_customer_registration_address_form_saveAddressEmitter_5_listener($event) {
          return ctx.saveAddressToState($event);
        })("updateSubHouseEmitter", function AddressIdentityComponent_Template_tg_sales_customer_registration_address_form_updateSubHouseEmitter_5_listener() {
          return ctx.updateSubHouse();
        })("updateBoxEmitter", function AddressIdentityComponent_Template_tg_sales_customer_registration_address_form_updateBoxEmitter_5_listener() {
          return ctx.updateBox();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddressIdentityComponent_Conditional_12_Template, 5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentStep", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 8, ctx.currentStep));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("locationSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, ctx.locationSuggestion$))("streetSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 12, ctx.streetSuggestion$))("itsMeDetails", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 14, ctx.itsMeResponse$))("subHouseNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, ctx.subHouseNoSuggestions$))("boxNoSuggestions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 18, ctx.boxNoSuggestions$))("addressType", "legalAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 20, ctx.isInstallableProductExists$) === true ? 12 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__.CustomerRegistrationTitleComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__.AddressToggleComponent, sales_customer_registration_ui__WEBPACK_IMPORTED_MODULE_4__.AddressFormComponent],
    encapsulation: 2
  });
};
AddressIdentityComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)(), __metadata("design:paramtypes", [_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade, _sales_customer_registration_data_access__WEBPACK_IMPORTED_MODULE_1__.AddressIdentityFacade])], AddressIdentityComponent);


/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_feat-address-identity_src_index_ts.js.map