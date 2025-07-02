(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_address_feat-installation-address_src_index_ts-_482c0"],{

/***/ 9890:
/*!*******************************************************************!*\
  !*** ./libs/sales/address/feat-installation-address/src/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatInstallationAddressComponent: () => (/* reexport safe */ _lib_feat_installation_address_component__WEBPACK_IMPORTED_MODULE_0__.FeatInstallationAddressComponent)
/* harmony export */ });
/* harmony import */ var _lib_feat_installation_address_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feat-installation-address.component */ 51790);


/***/ }),

/***/ 44642:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/address/feat-installation-address/src/lib/constants/installation-address-step.const.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   installationAddressEventStepKey: () => (/* binding */ installationAddressEventStepKey),
/* harmony export */   stepImage: () => (/* binding */ stepImage)
/* harmony export */ });
const installationAddressEventStepKey = 'installation-address';
const stepImage = 'installation.svg';

/***/ }),

/***/ 23191:
/*!***************************************************************************************************************!*\
  !*** ./libs/sales/address/feat-installation-address/src/lib/events/installation-address-step-loaded.const.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   installationAddressStepLoaded: () => (/* binding */ installationAddressStepLoaded)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_installation_address_step_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/installation-address-step.const */ 44642);


const installationAddressStepLoaded = {
  eventType: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum.STEP_LOADED,
  body: {
    stepKey: _constants_installation_address_step_const__WEBPACK_IMPORTED_MODULE_1__.installationAddressEventStepKey
  }
};

/***/ }),

/***/ 51790:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/address/feat-installation-address/src/lib/feat-installation-address.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatInstallationAddressComponent: () => (/* binding */ FeatInstallationAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_address_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/address/ui */ 44700);
/* harmony import */ var _sales_address_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_address_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/address/data-access */ 60785);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_address_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_installation_address_step_loaded_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/installation-address-step-loaded.const */ 23191);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_installation_address_step_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/installation-address-step.const */ 44642);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);
















function FeatInstallationAddressComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inlineSVG", ctx_r0.viewModel.stepImage)("resolveSVGUrl", false);
  }
}
function FeatInstallationAddressComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "tg-sales-address-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("addressSelected", function FeatInstallationAddressComponent_ng_container_20_Template_tg_sales_address_list_addressSelected_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.onAddressSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addresses_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("addresses", addresses_r7);
  }
}
function FeatInstallationAddressComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function FeatInstallationAddressComponent_ng_template_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function FeatInstallationAddressComponent_ng_template_25_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
const _c0 = a0 => ({
  editableAddress: a0
});
function FeatInstallationAddressComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FeatInstallationAddressComponent_ng_template_25_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.openAddressForm(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FeatInstallationAddressComponent_ng_template_25_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FeatInstallationAddressComponent_ng_template_25_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.openAddressForm(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FeatInstallationAddressComponent_ng_template_25_ng_container_3_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const editableAddress_r10 = ctx.editableAddress;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, editableAddress_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c0, editableAddress_r10));
  }
}
function FeatInstallationAddressComponent_ng_template_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.btn.select-installation-location.add-new-address"));
  }
}
function FeatInstallationAddressComponent_ng_template_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ng.sales-checkout.btn.select-installation-location.edit-new-address"));
  }
}
function FeatInstallationAddressComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FeatInstallationAddressComponent_ng_template_27_span_1_Template, 3, 3, "span", 15)(2, FeatInstallationAddressComponent_ng_template_27_span_2_Template, 3, 3, "span", 15);
  }
  if (rf & 2) {
    const editableAddress_r16 = ctx.editableAddress;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", editableAddress_r16 ? "icon-pencil" : "icon-plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !editableAddress_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", editableAddress_r16);
  }
}
class FeatInstallationAddressComponent {
  constructor(installationAddressFacade, eventFacade) {
    this.installationAddressFacade = installationAddressFacade;
    this.eventFacade = eventFacade;
    this.viewModel = {
      stepImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_installation_address_step_const__WEBPACK_IMPORTED_MODULE_8__.stepImage),
      addresses: this.installationAddressFacade.addresses$,
      editableAddress: this.installationAddressFacade.editableAddress$
    };
  }
  ngOnInit() {
    this.eventFacade.triggerEvent(_events_installation_address_step_loaded_const__WEBPACK_IMPORTED_MODULE_5__.installationAddressStepLoaded);
  }
  onAddressSelected() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'existing address selected'
    });
  }
  openAddressForm(asOverlay) {
    console.log('add/editing address with overlay ', asOverlay);
  }
  onNextStep() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false);
  }
  static #_ = this.ɵfac = function FeatInstallationAddressComponent_Factory(t) {
    return new (t || FeatInstallationAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_address_data_access__WEBPACK_IMPORTED_MODULE_4__.InstallationAddressFacade), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: FeatInstallationAddressComponent,
    selectors: [["tg-sales-feat-installation-address"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 17,
    consts: [[1, "sales-checkout", "container--medium"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "horizontal-center-align"], [1, "col-sm-12", "sales-checkout"], [1, "stepper-page__body-inner", "p-0"], [1, "stepper-page__content--split", "container", "mobile-lines"], [1, "stepper-page__content-first", "flex-hide-until-md", "position--sticky--md", "position--top--md"], ["class", "stepper-page__content-first flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl", 4, "ngIf"], [1, "stepper-page__content-second"], [1, "stepper-move"], [1, "row"], [1, "installation-location", "background-white", "px--xxl--md", "pt--xl--md", "pb--xxxl--md", "col-12", "mb--xxxg", "mt--m"], [4, "ngIf"], ["data-cy", "feat-installation-address-action", 1, "installation-location__add-address", "mt--l", "fl-left", "col-12"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["addOrEditAddressTemplate", ""], ["addOrEditLabelTemplate", ""], [1, "stepper-page__content-first", "flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl"], [3, "addresses", "addressSelected"], ["href", "javascript:void(0)", 1, "link", "secondary", "hide-from-md", 3, "click"], ["href", "javascript:void(0)", 1, "link", "secondary", "hide-until-md", 3, "click"], [1, "icon", 3, "ngClass"]],
    template: function FeatInstallationAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div")(12, "div", 7)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, FeatInstallationAddressComponent_div_15_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, FeatInstallationAddressComponent_ng_container_20_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, FeatInstallationAddressComponent_ng_container_23_Template, 1, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, FeatInstallationAddressComponent_ng_template_25_Template, 4, 8, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(27, FeatInstallationAddressComponent_ng_template_27_Template, 3, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "feat-installation-address");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, "ng.sales-checkout.lbl.title.installation-location"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, "ng.sales-checkout.lbl.sub-title.installation-location"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 11, ctx.viewModel == null ? null : ctx.viewModel.addresses));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 13, ctx.viewModel == null ? null : ctx.viewModel.editableAddress)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _sales_address_ui__WEBPACK_IMPORTED_MODULE_2__.AddressListComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_6__.InlineSVGDirective],
    encapsulation: 2
  });
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
//# sourceMappingURL=libs_sales_address_feat-installation-address_src_index_ts-_482c0.js.map