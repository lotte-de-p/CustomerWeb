(self["webpackChunkentertainment_mfe"] = self["webpackChunkentertainment_mfe"] || []).push([["libs_activate_entertainment_dtv-box-management_ui_src_index_ts-_3be10"],{

/***/ 74847:
/*!************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/ui/src/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxDetailComponent: () => (/* reexport safe */ _lib_dtv_box_detail_dtv_box_detail_component__WEBPACK_IMPORTED_MODULE_0__.DtvBoxDetailComponent),
/* harmony export */   DtvBoxSubscriptionSelectorComponent: () => (/* reexport safe */ _lib_dtv_box_subscription_selector_dtv_box_subscription_selector_component__WEBPACK_IMPORTED_MODULE_1__.DtvBoxSubscriptionSelectorComponent)
/* harmony export */ });
/* harmony import */ var _lib_dtv_box_detail_dtv_box_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtv-box-detail/dtv-box-detail.component */ 64021);
/* harmony import */ var _lib_dtv_box_subscription_selector_dtv_box_subscription_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dtv-box-subscription-selector/dtv-box-subscription-selector.component */ 55020);



/***/ }),

/***/ 64021:
/*!**************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/ui/src/lib/dtv-box-detail/dtv-box-detail.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxDetailComponent: () => (/* binding */ DtvBoxDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entertainment/dtv-box-management/data-access */ 16384);
/* harmony import */ var _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





function DtvBoxDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r0.dtvBox.modelNumber, ") ");
  }
}
class DtvBoxDetailComponent {
  dtvBox;
  imagePath;
  messageGroupName;
  static ɵfac = function DtvBoxDetailComponent_Factory(t) {
    return new (t || DtvBoxDetailComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DtvBoxDetailComponent,
    selectors: [["tg-entertainment-dtv-box-detail"]],
    inputs: {
      dtvBox: "dtvBox",
      imagePath: "imagePath",
      messageGroupName: "messageGroupName"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 24,
    consts: [[1, "mb--l", "m--auto", "col-md-12", "col-xs-12"], [1, "content-section", "background-white", "p--xxl--md", "p--l", "ml--n--md", "mr--n--md"], ["data-cy", "dtv-box-detail-row", 1, "row"], [1, "col-md-4", "col-12", "pl--n--md", "pl--s", "text-align--center", "text-align--left--md"], ["data-cy", "dtv-box-detail-type-image", 3, "tgEntertainmentDtvBoxImageSrcInterceptor", "src"], [1, "col-md-7", "col-12", "pl--m--md", "pl--s", "pt--n--md", "pt--xl"], [1, "font--body-large-bold", "mb--l"], ["data-cy", "dtv-box-detail-type-name"], [1, "row", "mb--xxxs"], [1, "col-md-8"], [1, "font--body-regular-bold", "mb--xxxs", "mb--n--md"], [1, "col-md-4", "pl--n--md", "pr-0"], ["data-cy", "dtv-box-name-model-number"], ["data-cy", "dtv-box-detail-sale-type"], ["data-cy", "dtv-box-detail-mac-address"], ["data-cy", "dtv-box-detail-serial-number"]],
    template: function DtvBoxDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DtvBoxDetailComponent_Conditional_18_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11)(34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8)(37, "div", 9)(38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 11)(42, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "/assets/", ctx.dtvBox.modelImageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tgEntertainmentDtvBoxImageSrcInterceptor", ctx.imagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 12, "ng.dtv-details.title.digibox-details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 14, "ng.dtv-details.title.type-of-box"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dtvBox.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](18, ctx.dtvBox.modelNumber ? 18 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 16, "ng.dtv-details.title.contract-type"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 18, "ng.dtv-details.lbl." + ctx.dtvBox.saleType));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 20, "ng.dtv-details.title.mac-address"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dtvBox.macAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 22, "ng.dtv-details.title.serial-number"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dtvBox.serialNumber);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 38038:
/*!*****************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/ui/src/lib/dtv-box-subscription-selector/address.pipe.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressPipe: () => (/* binding */ AddressPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AddressPipe {
  transform(address) {
    return address?.street + ' ' + address?.houseNumber + ', ' + address?.postalCode + ' ' + address?.city;
  }
  static ɵfac = function AddressPipe_Factory(t) {
    return new (t || AddressPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "address",
    type: AddressPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 55020:
/*!********************************************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/ui/src/lib/dtv-box-subscription-selector/dtv-box-subscription-selector.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxSubscriptionSelectorComponent: () => (/* binding */ DtvBoxSubscriptionSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _address_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.pipe */ 38038);






function DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.isSelectorOpen ? "icon-chevron-up" : "icon-chevron-down");
  }
}
const _c0 = a0 => ({
  "account-selector__list__options__item--active": a0
});
function DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_14_For_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const address_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onAddressClick(address_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "div", 8)(6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const address_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.isActive(address_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, address_r4));
  }
}
const _c1 = a0 => ({
  "account-selector__list--opened-with-icon account-selector__list__options--opened": a0
});
function DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_14_For_2_Template, 9, 6, "li", 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.isSelectorOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r2.addresses);
  }
}
const _c2 = (a0, a1, a2) => ({
  "account-selector__list--opened-with-icon account-selector__list__first-item--opened": a0,
  "cursor--default": a1,
  "account-selector__list__first-item--closed": a2
});
function DtvBoxSubscriptionSelectorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DtvBoxSubscriptionSelectorComponent_Conditional_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.toggleSelector());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_13_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DtvBoxSubscriptionSelectorComponent_Conditional_0_Conditional_14_Template, 3, 3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c2, ctx_r0.isSelectorOpen, (ctx_r0.addresses == null ? null : ctx_r0.addresses.length) === 1, !ctx_r0.isSelectorOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedDtvSubscription == null ? null : ctx_r0.selectedDtvSubscription.identifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx_r0.selectedAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](13, ctx_r0.addresses && ctx_r0.addresses.length > 1 ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](14, ctx_r0.addresses && ctx_r0.addresses.length > 1 ? 14 : -1);
  }
}
class DtvBoxSubscriptionSelectorComponent {
  addresses;
  selectedAddress;
  selectedDtvSubscription;
  addressChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  isSelectorOpen = false;
  toggleSelector() {
    this.isSelectorOpen = !this.isSelectorOpen;
  }
  onAddressClick(address) {
    this.selectedAddress = address;
    this.isSelectorOpen = true;
    this.addressChange.emit(address);
  }
  isActive(account) {
    return this.selectedAddress?.id === account?.id;
  }
  static ɵfac = function DtvBoxSubscriptionSelectorComponent_Factory(t) {
    return new (t || DtvBoxSubscriptionSelectorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DtvBoxSubscriptionSelectorComponent,
    selectors: [["tg-entertainment-dtv-box-subscription-selector"]],
    inputs: {
      addresses: "addresses",
      selectedAddress: "selectedAddress",
      selectedDtvSubscription: "selectedDtvSubscription"
    },
    outputs: {
      addressChange: "addressChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "account-line-selector"], [1, "account-line-selector"], ["data-cy", "address-selector", 1, "account-selector", "account-selector--with-mobile-lines", 3, "click"], [1, "account-selector__list", "account-selector__list__first-item", "account-selector__list--with-icon", 3, "ngClass"], [1, "account-selector__list__icon"], [1, "icon-circle", "icon-tv"], [1, "account-selector__list__account-info"], [1, "account-selector__list__account-info__account-id"], [1, "account-selector__list__account-info__account-details"], ["data-cy", "address-value", 1, "m--n", "word-break--ellipsis"], ["class", "account-selector__action"], ["data-cy", "address-selector-list", "class", "account-selector__list account-selector__list__options", 3, "ngClass"], [1, "account-selector__action"], [1, "icon", "icon-sm", "position--absolute", "text-weight--g", 3, "ngClass"], ["data-cy", "address-selector-list", 1, "account-selector__list", "account-selector__list__options", 3, "ngClass"], [1, "account-selector__list__options__item", 3, "ngClass"], [1, "account-selector__list__options__item__link", 3, "click"], [1, "icon-circle", "icon-house"], [1, "m--n"], ["class", "account-selector__list__options__item", 3, "ngClass"]],
    template: function DtvBoxSubscriptionSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DtvBoxSubscriptionSelectorComponent_Conditional_0_Template, 15, 11, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.selectedAddress ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _address_pipe__WEBPACK_IMPORTED_MODULE_3__.AddressPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ })

}])
//# sourceMappingURL=libs_activate_entertainment_dtv-box-management_ui_src_index_ts-_3be10.js.map