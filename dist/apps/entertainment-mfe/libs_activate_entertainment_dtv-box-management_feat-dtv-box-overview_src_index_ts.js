(self["webpackChunkentertainment_mfe"] = self["webpackChunkentertainment_mfe"] || []).push([["libs_activate_entertainment_dtv-box-management_feat-dtv-box-overview_src_index_ts"],{

/***/ 87925:
/*!*******************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/feat-dtv-box-overview/src/index.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxOverviewComponent: () => (/* reexport safe */ _lib_dtv_box_overview_component__WEBPACK_IMPORTED_MODULE_0__.DtvBoxOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_dtv_box_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtv-box-overview.component */ 67650);


/***/ }),

/***/ 78086:
/*!********************************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/feat-dtv-box-overview/src/lib/constants/dtv-box-management.constants.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxManagementConstants: () => (/* binding */ DtvBoxManagementConstants)
/* harmony export */ });
class DtvBoxManagementConstants {
  static SCOPES = ['D_devicedetails'];
  static EMPTY = '';
  static MESSAGE_GROUP_NAME = 'dtv-details';
}

/***/ }),

/***/ 67650:
/*!********************************************************************************************************************!*\
  !*** ./libs/activate/entertainment/dtv-box-management/feat-dtv-box-overview/src/lib/dtv-box-overview.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DtvBoxOverviewComponent: () => (/* binding */ DtvBoxOverviewComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entertainment/dtv-box-management/data-access */ 16384);
/* harmony import */ var _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/message/src/lib/message/message.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _entertainment_dtv_box_management_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @entertainment/dtv-box-management/ui */ 10433);
/* harmony import */ var _entertainment_dtv_box_management_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_entertainment_dtv_box_management_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_dtv_box_management_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dtv-box-management.constants */ 78086);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















const _forTrack0 = ($index, $item) => $item.serialNumber;
const _c1 = a0 => ({
  code: a0
});
function DtvBoxOverviewComponent_ng_container_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, "ng.dtv-details.info.resetpin", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r2.securityCode)), " ");
  }
}
function DtvBoxOverviewComponent_ng_container_1_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.dtv-details.success.single-box-success"), " ");
  }
}
function DtvBoxOverviewComponent_ng_container_1_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.dtv-details.success.multiple-boxes-success"), " ");
  }
}
function DtvBoxOverviewComponent_ng_container_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DtvBoxOverviewComponent_ng_container_1_Conditional_5_Conditional_2_Template, 2, 3)(3, DtvBoxOverviewComponent_ng_container_1_Conditional_5_Conditional_3_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, (vm_r1.selectedDtvSubscription == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes.length) === 1 ? 2 : 3);
  }
}
function DtvBoxOverviewComponent_ng_container_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-entertainment-dtv-box-detail", 13);
  }
  if (rf & 2) {
    const dtvBox_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtvBox", dtvBox_r9)("imagePath", ctx_r4.imagePath);
  }
}
function DtvBoxOverviewComponent_ng_container_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DtvBoxOverviewComponent_ng_container_1_Conditional_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onResetPinCode(vm_r1.selectedDtvSubscription));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "ng.dtv-details.btn.reset-pin-code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "ng.dtv-details.lbl.reset-pin-code-more-info"), " ");
  }
}
function DtvBoxOverviewComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader", 2)(2, "app-message", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tg-entertainment-dtv-box-subscription-selector", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addressChange", function DtvBoxOverviewComponent_ng_container_1_Template_tg_entertainment_dtv_box_subscription_selector_addressChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.setAddress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DtvBoxOverviewComponent_ng_container_1_Conditional_4_Template, 4, 6, "div", 5)(5, DtvBoxOverviewComponent_ng_container_1_Conditional_5_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, DtvBoxOverviewComponent_ng_container_1_For_8_Template, 1, 2, "tg-entertainment-dtv-box-detail", 13, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DtvBoxOverviewComponent_ng_container_1_Conditional_9_Template, 8, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngrxLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableLoader", ctx_r0.enableLoader)("pageType", ctx_r0.pageType)("enableMask", ctx_r0.enableMask)("startByDefault", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", ctx_r0.messageGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addresses", vm_r1.addresses)("selectedAddress", vm_r1.selectedAddress)("selectedDtvSubscription", vm_r1.selectedDtvSubscription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, vm_r1.showSecurityCode ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](5, vm_r1.isPinCodeReset ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](vm_r1.selectedDtvSubscription == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, (vm_r1.selectedDtvSubscription == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes.length) !== 0 && ctx_r0.isTypeUnanimous(vm_r1.selectedDtvSubscription == null ? null : vm_r1.selectedDtvSubscription.dtvBoxes) ? 9 : -1);
  }
}
const _c2 = (a0, a1, a2, a3, a4) => ({
  selectedDtvSubscription: a0,
  addresses: a1,
  selectedAddress: a2,
  isPinCodeReset: a3,
  showSecurityCode: a4
});
let DtvBoxOverviewComponent = class DtvBoxOverviewComponent {
  enableLoader;
  enableMask;
  pageType;
  securityCode;
  imagePath;
  messageGroupName = _constants_dtv_box_management_constants__WEBPACK_IMPORTED_MODULE_8__.DtvBoxManagementConstants.MESSAGE_GROUP_NAME;
  scopes = _constants_dtv_box_management_constants__WEBPACK_IMPORTED_MODULE_8__.DtvBoxManagementConstants.SCOPES;
  selectedDtvSubscription$;
  isPinCodeReset$;
  showSecurityCode$;
  addresses$;
  selectedAddress$;
  isBaseCustomer;
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__.DtvBoxManagementFacade);
  initAfterLoggedIn() {
    this.facade.loadAddresses();
    this.facade.loadSubscriptions();
    this.selectedDtvSubscription$ = this.facade.selectedDtvSubscription$;
    this.addresses$ = this.facade.addressesWithDtvBoxes$;
    this.selectedAddress$ = this.facade.selectedAddress$;
    this.isPinCodeReset$ = this.facade.isPinCodeReset$;
    this.showSecurityCode$ = this.facade.showSecurityCode$;
  }
  onResetPinCode(dtvSubscription) {
    if (!dtvSubscription || !dtvSubscription.dtvBoxes) {
      return;
    }
    const type = dtvSubscription.dtvBoxes[0]?.type;
    switch (type) {
      case _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__.DtvBoxType.EOS:
        this.facade.resetPinCode(dtvSubscription.identifier);
        break;
      case _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__.DtvBoxType.SIPADAN:
        this.facade.showSecurityCode();
        break;
      default:
        throw new Error('No type found');
    }
  }
  isTypeUnanimous(dtvBoxes) {
    if (!dtvBoxes) {
      return false;
    }
    return dtvBoxes.every(box => box.type === dtvBoxes[0].type);
  }
  setAddress(address) {
    this.facade.setSelectedAddress(address);
  }
  static ɵfac = function DtvBoxOverviewComponent_Factory(t) {
    return new (t || DtvBoxOverviewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DtvBoxOverviewComponent,
    selectors: [["tg-entertainment-dtv-box-overview"]],
    inputs: {
      enableLoader: "enableLoader",
      enableMask: "enableMask",
      pageType: "pageType",
      securityCode: "securityCode",
      imagePath: "imagePath"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 9,
    consts: [["data-cy", "dtv-box-overview", 3, "scopes", "messageGroupName", "componentCanRender"], [4, "ngrxLet"], [3, "enableLoader", "pageType", "enableMask", "startByDefault"], [3, "messageGroupName"], [1, "p--xs", 3, "addresses", "selectedAddress", "selectedDtvSubscription", "addressChange"], ["class", "notification notification--info"], ["class", "notification notification--success"], ["data-cy", "dtv-boxes-overview-details", 1, "pt--l"], ["class", "mt--xl display--flex flex-direction--column fl-right col-md-4 align-items--end"], [1, "notification", "notification--info"], ["data-cy", "dtv-box-show-security-code", 1, "icon", "icon-information-shape", "info"], [1, "notification", "notification--success"], ["data-cy", "dtv-box-reset-pin-notification", 1, "icon-success"], [3, "dtvBox", "imagePath"], [1, "mt--xl", "display--flex", "flex-direction--column", "fl-right", "col-md-4", "align-items--end"], ["data-cy", "dtv-box-reset-pin-code-button", 1, "button", "button--secondary", "col-md-6", 3, "click"], ["data-cy", "dtv-box-reset-pin-code-more-info", 1, "py--l", "text-align--right"]],
    template: function DtvBoxOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function DtvBoxOverviewComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DtvBoxOverviewComponent_ng_container_1_Template, 10, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes)("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c2, ctx.selectedDtvSubscription$, ctx.addresses$, ctx.selectedAddress$, ctx.isPinCodeReset$, ctx.showSecurityCode$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _entertainment_dtv_box_management_ui__WEBPACK_IMPORTED_MODULE_7__.DtvBoxDetailComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_9__.LetDirective, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _entertainment_dtv_box_management_data_access__WEBPACK_IMPORTED_MODULE_2__.DtvBoxManagementNgrxModule, _entertainment_dtv_box_management_ui__WEBPACK_IMPORTED_MODULE_7__.DtvBoxSubscriptionSelectorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
DtvBoxOverviewComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], DtvBoxOverviewComponent);


/***/ }),

/***/ 52813:
/*!******************************************************************************!*\
  !*** ./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntilDestroy: () => (/* binding */ UntilDestroy),
/* harmony export */   untilDestroyed: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNG_PIPE_DEF"];
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetLContext"])(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43956:
/*!******************************************************************!*\
  !*** ./node_modules/@ngrx/component/fesm2022/ngrx-component.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LetDirective: () => (/* binding */ LetDirective),
/* harmony export */   PushPipe: () => (/* binding */ PushPipe),
/* harmony export */   RenderScheduler: () => (/* binding */ RenderScheduler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);




function isNgZone(zone) {
  return zone instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone;
}
class TickScheduler {
  /** @nocollapse */
  static #_ = this.ɵfac = function TickScheduler_Factory(t) {
    return new (t || TickScheduler)();
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TickScheduler,
    factory: () => (() => {
      const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
    })(),
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: () => {
        const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
        return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
      }
    }]
  }], null, null);
})();
class AnimationFrameTickScheduler extends TickScheduler {
  constructor(appRef) {
    super();
    this.appRef = appRef;
    this.isScheduled = false;
  }
  schedule() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      requestAnimationFrame(() => {
        this.appRef.tick();
        this.isScheduled = false;
      });
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function AnimationFrameTickScheduler_Factory(t) {
    return new (t || AnimationFrameTickScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnimationFrameTickScheduler,
    factory: AnimationFrameTickScheduler.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationFrameTickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }], null);
})();
class NoopTickScheduler extends TickScheduler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  schedule() {}
}

/**
 * Provides rendering functionality regardless of whether `zone.js` is present
 * or not. It must be provided at the component/directive level.
 *
 * @usageNotes
 *
 * ### Rerender zone-less app on route changes
 *
 * ```ts
 * @Component({
 *   selector: 'app-root',
 *   template: '<router-outlet>',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class AppComponent implements OnInit {
 *   constructor(
 *     private readonly router: Router,
 *     private readonly renderScheduler: RenderScheduler
 *   ) {}
 *
 *   ngOnInit(): void {
 *     this.router.events
 *       .pipe(filter((e) => e instanceof NavigationEnd))
 *       .subscribe(() => this.renderScheduler.schedule());
 *   }
 * }
 * ```
 *
 * ### Rerender component on interval
 *
 * ```ts
 * @Component({
 *   selector: 'app-interval',
 *   template: '{{ elapsedTime }}ms',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class IntervalComponent implements OnInit {
 *   elapsedTime = 0;
 *
 *   constructor(private readonly renderScheduler: RenderScheduler) {}
 *
 *   ngOnInit(): void {
 *     setInterval(() => {
 *       this.elapsedTime += 1000;
 *       this.renderScheduler.schedule();
 *     }, 1000);
 *   }
 * }
 * ```
 */
class RenderScheduler {
  constructor(cdRef, tickScheduler) {
    this.cdRef = cdRef;
    this.tickScheduler = tickScheduler;
  }
  /**
   * Marks component and its ancestors as dirty.
   * It also schedules a new change detection cycle in zone-less mode.
   */
  schedule() {
    this.cdRef.markForCheck();
    this.tickScheduler.schedule();
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function RenderScheduler_Factory(t) {
    return new (t || RenderScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TickScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RenderScheduler,
    factory: RenderScheduler.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: TickScheduler
  }], null);
})();
function createRenderScheduler() {
  return new RenderScheduler((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(TickScheduler));
}
function combineRenderEventHandlers(handlers) {
  return event => handlers[event.type]?.(event);
}
function fromPotentialObservable(potentialObservable) {
  if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(potentialObservable)) {
    return potentialObservable;
  }
  if (isObservableDictionary(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(toDistinctObsDictionary(potentialObservable));
  }
  if (isPromiseLike(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(potentialObservable);
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    subscriber.next(potentialObservable);
  });
}
function isPromiseLike(value) {
  return typeof value?.then === 'function';
}
function isObservableDictionary(value) {
  return isDictionary(value) && Object.keys(value).length > 0 && Object.values(value).every(rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable);
}
function isDictionary(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
function toDistinctObsDictionary(obsDictionary) {
  return Object.keys(obsDictionary).reduce((acc, key) => ({
    ...acc,
    [key]: obsDictionary[key].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)())
  }), {});
}
function createRenderEventManager(handlers) {
  const handleRenderEvent = combineRenderEventHandlers(handlers);
  const potentialObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  return {
    nextPotentialObservable(potentialObservable) {
      potentialObservable$.next(potentialObservable);
    },
    handlePotentialObservableChanges() {
      return potentialObservable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), switchMapToRenderEvent(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(renderEventComparator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(handleRenderEvent));
    }
  };
}
function switchMapToRenderEvent() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(potentialObservable => {
    const observable$ = fromPotentialObservable(potentialObservable);
    let reset = true;
    let synchronous = true;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      const subscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => observable$.subscribe({
        next(value) {
          subscriber.next({
            type: 'next',
            value,
            reset,
            synchronous
          });
          reset = false;
        },
        error(error) {
          subscriber.next({
            type: 'error',
            error,
            reset,
            synchronous
          });
          reset = false;
        },
        complete() {
          subscriber.next({
            type: 'complete',
            reset,
            synchronous
          });
          reset = false;
        }
      }));
      if (reset) {
        subscriber.next({
          type: 'suspense',
          reset,
          synchronous: true
        });
        reset = false;
      }
      synchronous = false;
      return subscription;
    });
  }));
}
function renderEventComparator(previous, current) {
  if (previous.type !== current.type || previous.reset !== current.reset) {
    return false;
  }
  if (current.type === 'next') {
    return previous.value === current.value;
  }
  if (current.type === 'error') {
    return previous.error === current.error;
  }
  return true;
}

/**
 *
 * @description
 *
 * The `*ngrxLet` directive serves a convenient way of binding observables to a view context
 * (DOM element's scope). It also helps with several internal processing under the hood.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-container *ngrxLet="number$; let n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * ```
 *
 * ### Tracking Different Observable Events
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; error as e; complete as c">
 *   <app-number [number]="n" *ngIf="!e && !c">
 *   </app-number>
 *
 *   <p *ngIf="e">There is an error: {{ e }}</p>
 *   <p *ngIf="c">Observable is completed.</p>
 * </ng-container>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <ng-container *ngrxLet="{ users: users$, query: query$ } as vm">
 *   <app-search-bar [query]="vm.query"></app-search-bar>
 *   <app-user-list [users]="vm.users"></app-user-list>
 * </ng-container>
 * ```
 *
 * ### Using Suspense Template
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; suspenseTpl: loading">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-template #loading>
 *   <p>Loading...</p>
 * </ng-template>
 * ```
 *
 * ### Using Aliases for Non-Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="userForm.controls.email as email">
 *   <input type="text" [formControl]="email" />
 *
 *   <ng-container *ngIf="email.errors && (email.touched || email.dirty)">
 *     <p *ngIf="email.errors.required">This field is required.</p>
 *     <p *ngIf="email.errors.email">This field must be an email.</p>
 *   </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
class LetDirective {
  set ngrxLet(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
  }
  constructor(mainTemplateRef, viewContainerRef, errorHandler, renderScheduler) {
    this.mainTemplateRef = mainTemplateRef;
    this.viewContainerRef = viewContainerRef;
    this.errorHandler = errorHandler;
    this.renderScheduler = renderScheduler;
    this.isMainViewCreated = false;
    this.isSuspenseViewCreated = false;
    this.viewContext = {
      $implicit: undefined,
      ngrxLet: undefined,
      error: undefined,
      complete: false
    };
    this.renderEventManager = createRenderEventManager({
      suspense: () => {
        this.viewContext.$implicit = undefined;
        this.viewContext.ngrxLet = undefined;
        this.viewContext.error = undefined;
        this.viewContext.complete = false;
        this.renderSuspenseView();
      },
      next: event => {
        this.viewContext.$implicit = event.value;
        this.viewContext.ngrxLet = event.value;
        if (event.reset) {
          this.viewContext.error = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
      },
      error: event => {
        this.viewContext.error = event.error;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        this.viewContext.complete = true;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.error = undefined;
        }
        this.renderMainView(event.synchronous);
      }
    });
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
  ngOnInit() {
    this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  renderMainView(isSyncEvent) {
    if (this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (!this.isMainViewCreated) {
      this.isMainViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext);
    }
    if (!isSyncEvent) {
      this.renderScheduler.schedule();
    }
  }
  renderSuspenseView() {
    if (this.isMainViewCreated) {
      this.isMainViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (this.suspenseTemplateRef && !this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef);
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function LetDirective_Factory(t) {
    return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RenderScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LetDirective,
    selectors: [["", "ngrxLet", ""]],
    inputs: {
      ngrxLet: "ngrxLet",
      suspenseTemplateRef: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "ngrxLetSuspenseTpl", "suspenseTemplateRef"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RenderScheduler])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngrxLet]',
      providers: [RenderScheduler]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }, {
    type: RenderScheduler
  }], {
    ngrxLet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suspenseTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngrxLetSuspenseTpl']
    }]
  });
})();

/**
 * @description
 *
 * The `ngrxPush` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <p>{{ number$ | ngrxPush }}</p>
 *
 * <ng-container *ngIf="number$ | ngrxPush as n">{{ n }}</ng-container>
 *
 * <app-number [number]="number$ | ngrxPush"></app-number>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <code>
 *   {{ { users: users$, query: query$ } | ngrxPush | json }}
 * </code>
 * ```
 *
 * @publicApi
 */
class PushPipe {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
    this.renderScheduler = createRenderScheduler();
    this.renderEventManager = createRenderEventManager({
      suspense: event => this.setRenderedValue(undefined, event.synchronous),
      next: event => this.setRenderedValue(event.value, event.synchronous),
      error: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
      }
    });
    this.subscription = this.renderEventManager.handlePotentialObservableChanges().subscribe();
  }
  transform(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
    return this.renderedValue;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setRenderedValue(value, isSyncEvent) {
    if (value !== this.renderedValue) {
      this.renderedValue = value;
      if (!isSyncEvent) {
        this.renderScheduler.schedule();
      }
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function PushPipe_Factory(t) {
    return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, 16));
  };
  /** @nocollapse */
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "ngrxPush",
    type: PushPipe,
    pure: false,
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      standalone: true,
      name: 'ngrxPush',
      pure: false
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }], null);
})();

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_activate_entertainment_dtv-box-management_feat-dtv-box-overview_src_index_ts.js.map