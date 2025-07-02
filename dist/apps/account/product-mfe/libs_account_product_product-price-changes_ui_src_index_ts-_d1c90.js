(self["webpackChunkproduct_mfe"] = self["webpackChunkproduct_mfe"] || []).push([["libs_account_product_product-price-changes_ui_src_index_ts-_d1c90"],{

/***/ 20997:
/*!********************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSelectorComponent: () => (/* reexport safe */ _lib_account_selector_account_selector_component__WEBPACK_IMPORTED_MODULE_1__.AccountSelectorComponent),
/* harmony export */   AddressComponent: () => (/* reexport safe */ _lib_address_address_component__WEBPACK_IMPORTED_MODULE_3__.AddressComponent),
/* harmony export */   LoginComponent: () => (/* reexport safe */ _lib_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent),
/* harmony export */   NoPriceChangesComponent: () => (/* reexport safe */ _lib_no_price_changes_no_price_changes_component__WEBPACK_IMPORTED_MODULE_5__.NoPriceChangesComponent),
/* harmony export */   PriceChangesComponent: () => (/* reexport safe */ _lib_price_changes_price_changes_component__WEBPACK_IMPORTED_MODULE_4__.PriceChangesComponent),
/* harmony export */   SkeletonComponent: () => (/* reexport safe */ _lib_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__.SkeletonComponent)
/* harmony export */ });
/* harmony import */ var _lib_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/login/login.component */ 12180);
/* harmony import */ var _lib_account_selector_account_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account-selector/account-selector.component */ 60227);
/* harmony import */ var _lib_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/skeleton/skeleton.component */ 26300);
/* harmony import */ var _lib_address_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/address/address.component */ 31739);
/* harmony import */ var _lib_price_changes_price_changes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/price-changes/price-changes.component */ 3436);
/* harmony import */ var _lib_no_price_changes_no_price_changes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/no-price-changes/no-price-changes.component */ 320);







/***/ }),

/***/ 60227:
/*!**************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/account-selector/account-selector.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSelectorComponent: () => (/* binding */ AccountSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _account_selector_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-selector.pipe */ 17449);




function AccountSelectorComponent_div_0_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.accountSelected, " ");
  }
}
function AccountSelectorComponent_div_0_div_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectorOpen ? "icon-chevron-up" : "icon-chevron-down");
  }
}
const _c0 = a0 => ({
  "account-selector__list__options__item--active": a0
});
function AccountSelectorComponent_div_0_div_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountSelectorComponent_div_0_div_1_ul_7_li_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const account_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onSelectAccount(account_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.isActive(account_r6)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r6);
  }
}
const _c1 = a0 => ({
  "account-selector__list--opened-with-icon account-selector__list--opened account-selector__list__options--opened": a0
});
function AccountSelectorComponent_div_0_div_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountSelectorComponent_div_0_div_1_ul_7_li_1_Template, 7, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r4.isSelectorOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.billingAccounts));
  }
}
const _c2 = (a0, a1, a2) => ({
  "account-selector__list--opened-with-icon account-selector__list--opened account-selector__list__first-item--opened": a0,
  "cursor--default": a1,
  "account-selector__list__first-item--closed": a2
});
function AccountSelectorComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountSelectorComponent_div_0_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.toggleSelector());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountSelectorComponent_div_0_div_1_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountSelectorComponent_div_0_div_1_a_6_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountSelectorComponent_div_0_div_1_ul_7_Template, 3, 6, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c2, ctx_r1.isSelectorOpen, ctx_r1.billingAccounts.length === 1, !ctx_r1.isSelectorOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.accountSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.billingAccounts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.billingAccounts.length > 1);
  }
}
function AccountSelectorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountSelectorComponent_div_0_div_1_Template, 8, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.billingAccounts && ctx_r0.billingAccounts.length > 0);
  }
}
class AccountSelectorComponent {
  eRef;
  document;
  billingAccounts = [];
  accountSelected;
  selectBillingAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  isSelectorOpen;
  constructor(eRef, document) {
    this.eRef = eRef;
    this.document = document;
  }
  onSelectAccount(selectedAccount) {
    this.accountSelected = selectedAccount;
    this.dispatchCustomEvent(selectedAccount);
    this.selectBillingAccount.emit(selectedAccount);
  }
  isActive(account) {
    return this.accountSelected === account;
  }
  toggleSelector() {
    if (this.billingAccounts.length > 1) {
      this.isSelectorOpen = !this.isSelectorOpen;
    }
  }
  dispatchCustomEvent(account) {
    this.document.dispatchEvent(new CustomEvent('selectedAccountModified', {
      bubbles: true,
      detail: {
        selectedAccount: account
      }
    }));
  }
  handleOutsideClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSelectorOpen = false;
    }
  }
  static ɵfac = function AccountSelectorComponent_Factory(t) {
    return new (t || AccountSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccountSelectorComponent,
    selectors: [["product-price-changes-account-selector"]],
    hostBindings: function AccountSelectorComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountSelectorComponent_click_HostBindingHandler($event) {
          return ctx.handleOutsideClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function AccountSelectorComponent_touchstart_HostBindingHandler($event) {
          return ctx.handleOutsideClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      billingAccounts: "billingAccounts",
      accountSelected: "accountSelected"
    },
    outputs: {
      selectBillingAccount: "selectBillingAccount"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "billing-account-line-selector account-line-selector align-self--end--md p--xl--md p--n width--full width--auto--sm", "style", "margin-right: 0; margin-left: 0", 4, "ngIf"], [1, "billing-account-line-selector", "account-line-selector", "align-self--end--md", "p--xl--md", "p--n", "width--full", "width--auto--sm", 2, "margin-right", "0", "margin-left", "0"], ["class", "account-selector", "data-cy", "account-selector", 3, "click", 4, "ngIf"], ["data-cy", "account-selector", 1, "account-selector", 3, "click"], [1, "account-selector__list", "account-selector__list__first-item", "account-selector__list--with-icon", 3, "ngClass"], [1, "account-selector__list__icon"], [1, "icon-circle", "icon-billing-account"], [1, "account-selector__list__account-info"], ["class", "account-selector__list__account-info__account-id", "data-cy", "account-selector-account-number", 4, "ngIf"], ["class", "account-selector__action", 4, "ngIf"], ["class", "account-selector__list account-selector__list__options", "data-cy", "account-selector-list", 3, "ngClass", 4, "ngIf"], ["data-cy", "account-selector-account-number", 1, "account-selector__list__account-info__account-id"], [1, "account-selector__action"], [1, "icon", "icon-sm", "position--absolute", "text-weight--g", 3, "ngClass"], ["data-cy", "account-selector-list", 1, "account-selector__list", "account-selector__list__options", 3, "ngClass"], ["class", "account-selector__list__options__item", "data-cy", "account-selector-list-option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-cy", "account-selector-list-option", 1, "account-selector__list__options__item", 3, "ngClass"], [1, "account-selector__list__options__item__link", 3, "click"], [1, "account-selector__list__account-info__account-id"]],
    template: function AccountSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountSelectorComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingAccounts && (ctx.billingAccounts == null ? null : ctx.billingAccounts.length) > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _account_selector_pipe__WEBPACK_IMPORTED_MODULE_2__.AccountSelectorOrderByPipe],
    styles: [".billing-account-line-selector.account-line-selector[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYWNjb3VudC9wcm9kdWN0L3Byb2R1Y3QtcHJpY2UtY2hhbmdlcy91aS9zcmMvbGliL2FjY291bnQtc2VsZWN0b3IvYWNjb3VudC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLWFjY291bnQtbGluZS1zZWxlY3Rvci5hY2NvdW50LWxpbmUtc2VsZWN0b3Ige1xuICBwYWRkaW5nOiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 17449:
/*!*********************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/account-selector/account-selector.pipe.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSelectorOrderByPipe: () => (/* binding */ AccountSelectorOrderByPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AccountSelectorOrderByPipe {
  transform(value) {
    return value.sort();
  }
  static ɵfac = function AccountSelectorOrderByPipe_Factory(t) {
    return new (t || AccountSelectorOrderByPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "orderBy",
    type: AccountSelectorOrderByPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 31739:
/*!********************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/address/address.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressComponent: () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function AddressComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.address.subHouseNumber, "");
  }
}
function AddressComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "ng.product-price-changes.address.box"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.address.box, "");
  }
}
class AddressComponent {
  address;
  static ɵfac = function AddressComponent_Factory(t) {
    return new (t || AddressComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AddressComponent,
    selectors: [["product-price-changes-address"]],
    inputs: {
      address: "address"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 6,
    consts: [[4, "ngIf"]],
    template: function AddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddressComponent_span_3_Template, 2, 1, "span", 0)(4, AddressComponent_span_4_Template, 5, 4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.address.street, " ", ctx.address.houseNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.address.subHouseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.address.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](", ", ctx.address.postalCode, " ", ctx.address.city, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 12180:
/*!****************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/login/login.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);








function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.clientNumberInformationUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.product-price-changes.client.information"));
  }
}
const _c0 = a0 => ({
  "ng-invalid": a0
});
const CUSTOMER_NUMBER_PATTERN = '^[0-9]*$';
class LoginComponent {
  clientNumberInformationUrl;
  authenticationError = false;
  login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
    customerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(CUSTOMER_NUMBER_PATTERN)]),
    lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
  });
  doLogin(loginDetails) {
    if (this.loginForm.valid) {
      this.login.emit(loginDetails);
    } else {
      this.loginForm.markAsTouched();
    }
  }
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["product-price-changes-login"]],
    inputs: {
      clientNumberInformationUrl: "clientNumberInformationUrl",
      authenticationError: "authenticationError"
    },
    outputs: {
      login: "login"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 23,
    consts: [["data-cy", "custom-login-form", 3, "formGroup"], [1, "openid-login-page__container", "align-items--center"], [1, "m--n", "openid-login-page__container--inner"], [1, "openid-login-page__container--form-login-section", "p--n"], [1, "form-group", "mb--l"], ["for", "customerNumber"], [1, "form__input-container"], ["data-cy", "custom-login-form-customer-number", "type", "number", "formControlName", "customerNumber", "id", "customerNumber", "required", "required", "value", "", 1, "form__input", 3, "ngClass", "placeholder"], ["for", "lastName"], ["data-cy", "custom-login-form-lastname", "type", "text", "formControlName", "lastName", "id", "lastName", "required", "required", "value", "", 1, "form__input", 3, "ngClass", "placeholder"], ["data-cy", "custom-login-form-button", 1, "button", "button--primary__dark", "button--fullwidth", "mb--l", 3, "click"], [4, "ngIf"], ["data-cy", "custom-login-form-link", 1, "link", 3, "href"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
          return ctx.doLogin(ctx.loginForm.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 4, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "ng.product-price-changes.login-customer-number.lbl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "ng.product-price-changes.login-customer-number.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.authenticationError));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, "ng.product-price-changes.login-last-name.lbl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 15, "ng.product-price-changes.login-last-name.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.authenticationError));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "ng.product-price-changes.login.btn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientNumberInformationUrl);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["form.ng-submitted[_ngcontent-%COMP%]   .form__input.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYWNjb3VudC9wcm9kdWN0L3Byb2R1Y3QtcHJpY2UtY2hhbmdlcy91aS9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ubmctc3VibWl0dGVkIHtcbiAgLmZvcm1fX2lucHV0Lm5nLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 320:
/*!**************************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/no-price-changes/no-price-changes.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoPriceChangesComponent: () => (/* binding */ NoPriceChangesComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class NoPriceChangesComponent {
  static ɵfac = function NoPriceChangesComponent_Factory(t) {
    return new (t || NoPriceChangesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NoPriceChangesComponent,
    selectors: [["product-no-price-changes"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "notification", "notification--info", "personal-info"], [1, "icon", "icon-information-shape", "info", "display--flex", "gap--s", "flex-direction--row--md", "flex-direction--column"], ["data-cy", "price-cannot-show", 3, "innerHTML"]],
    template: function NoPriceChangesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.product-price-changes.cannot-show-personal-situation"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    styles: [".personal-info.notification ul {\n  list-style: disc !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYWNjb3VudC9wcm9kdWN0L3Byb2R1Y3QtcHJpY2UtY2hhbmdlcy91aS9zcmMvbGliL25vLXByaWNlLWNoYW5nZXMvbm8tcHJpY2UtY2hhbmdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uYWwtaW5mby5ub3RpZmljYXRpb24gdWwge1xuICBsaXN0LXN0eWxlOiBkaXNjICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3436:
/*!********************************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/price-changes/price-changes.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceChangesComponent: () => (/* binding */ PriceChangesComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




const _c0 = a0 => ({
  "border--bottom--light-grey": a0
});
const _c1 = (a0, a3, a4) => [a0, "EUR", "symbol", a3, a4];
function PriceChangesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const last_r4 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, !last_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "fr" === ctx_r0.lang ? product_r2.description.fr : product_r2.description.nl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBindV"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](18, _c1, product_r2.oldPrice, product_r2.oldPrice % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r0.locale)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBindV"](9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](22, _c1, product_r2.newPrice, product_r2.newPrice % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r0.locale)), " ");
  }
}
function PriceChangesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17)(7, "div", 18)(8, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 20)(18, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const last_r7 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c0, !last_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "ng.product-price-changes.label.subscription-name"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("fr" === ctx_r1.lang ? product_r5.description.fr : product_r5.description.nl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, "ng.product-price-changes.label.current-price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, "ng.product-price-changes.label." + ctx_r1.getVAT(ctx_r1.productPriceChange)), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBindV"](16, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](33, _c1, product_r5.oldPrice, product_r5.oldPrice % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r1.locale)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 21, "ng.product-price-changes.label.new-price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 23, "ng.product-price-changes.label." + ctx_r1.getVAT(ctx_r1.productPriceChange)), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBindV"](26, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](37, _c1, product_r5.newPrice, product_r5.oldPrice % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r1.locale)), " ");
  }
}
class PriceChangesComponent {
  productPriceChange;
  lang = 'nl';
  locale = 'nl-BE';
  getVAT(productPriceChange) {
    return productPriceChange.vatInclusive ? 'vat-inclusive' : 'vat-exclusive';
  }
  get products() {
    return this.productPriceChange.products;
  }
  static ɵfac = function PriceChangesComponent_Factory(t) {
    return new (t || PriceChangesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PriceChangesComponent,
    selectors: [["care-price-changes"]],
    inputs: {
      productPriceChange: "productPriceChange",
      lang: "lang",
      locale: "locale"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 23,
    consts: [[1, "price-changes"], [1, "price-changes-desktop", "display--none", "display--block--md"], [1, "row", "border--bottom--light-grey", "mb-0", "ml--n", "mr--n", "mt--xl"], [1, "col-4", "pb-15", "pl-0"], [1, "mt-0", "font--caption", 3, "innerHTML"], [1, "col-4", "pb-15", "pl-0", "text-align--right"], ["data-cy", "price-changes-current-price-title", 1, "mt-0", "font--caption"], ["data-cy", "price-changes-new-price-title", 1, "mt-0", "font--caption"], [4, "ngFor", "ngForOf"], [1, "mb--n"], [1, "price-changes-mobile", "display--block", "display--none--md"], ["class", "py--m", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-cy", "price-changes", 1, "row", "ml--n", "mr--n", "mb-0", 3, "ngClass"], ["data-cy", "price-changes-description", 1, "col-4", "pb-15", "pt-15", "pl-0"], ["data-cy", "price-changes-current-price", 1, "col-4", "pb-15", "pt-15", "pl-0", "text-align--right"], ["data-cy", "price-changes-new-price", 1, "col-4", "pb-15", "pt-15", "pl-0", "text-align--right"], [1, "py--m", 3, "ngClass"], [1, "row", "mt--m", "prices"], [1, "col-s-6"], ["data-cy", "price-changes-current-price"], [1, "col-s-6", "new-price"], ["data-cy", "price-changes-new-price"]],
    template: function PriceChangesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PriceChangesComponent_ng_container_20_Template, 10, 26, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 9)(22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PriceChangesComponent_div_26_Template, 27, 41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 9)(28, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "ng.product-price-changes.label.subscription-name"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "ng.product-price-changes.label.current-price"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, "ng.product-price-changes.label." + ctx.getVAT(ctx.productPriceChange)), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, "ng.product-price-changes.label.new-price"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, "ng.product-price-changes.label." + ctx.getVAT(ctx.productPriceChange)), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 19, "ng.product-price-changes.text.subscription-change-details-" + ctx.getVAT(ctx.productPriceChange)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 21, "ng.product-price-changes.text.subscription-change-details-" + ctx.getVAT(ctx.productPriceChange)));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".price-changes[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .new-price[_ngcontent-%COMP%] {\n  margin-top: 1.6rem;\n}\n.price-changes[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .col-s-6[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n\n@media only screen and (min-width: 32em) {\n  .price-changes[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .new-price[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .price-changes[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .col-s-6[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYWNjb3VudC9wcm9kdWN0L3Byb2R1Y3QtcHJpY2UtY2hhbmdlcy91aS9zcmMvbGliL3ByaWNlLWNoYW5nZXMvcHJpY2UtY2hhbmdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0FBRE47QUFJSTtFQUNFLGdCQUFBO0FBRk47O0FBT0E7RUFHTTtJQUNFLGFBQUE7RUFOTjtFQVNJO0lBQ0UsZUFBQTtFQVBOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2UtY2hhbmdlcyB7XG4gIC5wcmljZXMge1xuICAgIC5uZXctcHJpY2Uge1xuICAgICAgbWFyZ2luLXRvcDogMS42cmVtO1xuICAgIH1cblxuICAgIC5jb2wtcy02IHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzJlbSkge1xuICAucHJpY2UtY2hhbmdlcyB7XG4gICAgLnByaWNlcyB7XG4gICAgICAubmV3LXByaWNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLmNvbC1zLTYge1xuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 26300:
/*!**********************************************************************************************!*\
  !*** ./libs/account/product/product-price-changes/ui/src/lib/skeleton/skeleton.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonComponent: () => (/* binding */ SkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class SkeletonComponent {
  static ɵfac = function SkeletonComponent_Factory(t) {
    return new (t || SkeletonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SkeletonComponent,
    selectors: [["product-product-price-changes-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 0,
    consts: [[1, "mr--m--lg", "mr--n", "mb--m", "mb--n--lg", "flex-grow"], [1, "display--flex", "justify-content--end", "mb--m"], [1, "col-4", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines", "pb--l", "pt--l"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines", "mb--m"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--three-lines"]],
    template: function SkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 4)(6, "div", 5)(7, "div", 5)(8, "div", 5)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_account_product_product-price-changes_ui_src_index_ts-_d1c90.js.map