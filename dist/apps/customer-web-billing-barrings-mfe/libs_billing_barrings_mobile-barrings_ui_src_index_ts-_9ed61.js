(self["webpackChunkcustomer_web_billing_barrings_mfe"] = self["webpackChunkcustomer_web_billing_barrings_mfe"] || []).push([["libs_billing_barrings_mobile-barrings_ui_src_index_ts-_9ed61"],{

/***/ 66853:
/*!***************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/ui/src/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarringSelectorComponent: () => (/* reexport safe */ _lib_barring_selector_barring_selector_component__WEBPACK_IMPORTED_MODULE_0__.BarringSelectorComponent)
/* harmony export */ });
/* harmony import */ var _lib_barring_selector_barring_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/barring-selector/barring-selector.component */ 17125);


/***/ }),

/***/ 17125:
/*!*********************************************************************************************************!*\
  !*** ./libs/billing/barrings/mobile-barrings/ui/src/lib/barring-selector/barring-selector.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarringSelectorComponent: () => (/* binding */ BarringSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @billing/barrings/mobile-barrings/data-access */ 49164);
/* harmony import */ var _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);









const _forTrack0 = ($index, $item) => $item.id;
function BarringSelectorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarringSelectorComponent_Conditional_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.slideMenu(true, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-barrings.selector-button"), " ");
  }
}
function BarringSelectorComponent_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const barSetting_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-barrings.barring-subtitle." + barSetting_r4.code), " ");
  }
}
function BarringSelectorComponent_For_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
  }
}
const _c1 = a0 => ({
  "pointer-events--none": a0
});
const _c2 = a0 => ({
  "color-mid-grey": a0
});
function BarringSelectorComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "label", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BarringSelectorComponent_For_7_Template_input_change_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const barSetting_r4 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.activateBarring(barSetting_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BarringSelectorComponent_For_7_Conditional_9_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BarringSelectorComponent_For_7_Conditional_11_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const barSetting_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", barSetting_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r1.globalBarringEnabled && barSetting_r4.code !== ctx_r1.ALL_INCOMING_AND_OUTGOING));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r1.globalBarringEnabled && barSetting_r4.code !== ctx_r1.ALL_INCOMING_AND_OUTGOING));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "ng.mobile-barrings.barring-name." + barSetting_r4.code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", barSetting_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", barSetting_r4.isBarred)("disabled", barSetting_r4.code === ctx_r1.ALL_INCOMING_AND_OUTGOING ? false : ctx_r1.globalBarringEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "ng.mobile-barrings.barring-subtitle." + barSetting_r4.code) !== "ng.mobile-barrings.barring-subtitle." + barSetting_r4.code ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](11, barSetting_r4.code === "all-incoming-and-outgoing" || barSetting_r4.code === "all-incoming-and-outgoing-while-roaming" ? 11 : -1);
  }
}
class BarringSelectorComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.AbstractBaseComponent {
  constructor() {
    super(...arguments);
    this.isReadOnly = false;
    this.globalBarringEnabled = false;
    this.suspendedNumber = false;
    this.saveBarrings = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.toggleBarring = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addAnalyticsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.disabledByFraud = false;
    this.showMenu = false;
    this.showWarningScreen = false;
    this.ALL_INCOMING_AND_OUTGOING = _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_4__.ALL_INCOMING_AND_OUTGOING;
    this.ALL_INCOMING_AND_OUTGOING_GROUP = _billing_barrings_mobile_barrings_data_access__WEBPACK_IMPORTED_MODULE_4__.ALL_INCOMING_AND_OUTGOING_GROUP;
  }
  set barringSettings(mobileBarGroup) {
    if (mobileBarGroup) {
      this.barSettings = JSON.parse(JSON.stringify(mobileBarGroup.barringSettings));
      this.groupCode = mobileBarGroup.code;
      this.disabledByFraud = mobileBarGroup.disabledByFraud ?? false;
    }
  }
  set bannerLinkIsClicked(bannerLinkClicked) {
    if (bannerLinkClicked && this.globalBarringEnabled && this.groupCode === this.ALL_INCOMING_AND_OUTGOING_GROUP) {
      this.slideMenu(true);
    }
  }
  slideMenu(open, event) {
    event?.stopPropagation();
    this.showMenu = open;
    if (open) {
      document.body?.classList.add('overflow--hidden');
    } else {
      document.body?.classList.remove('overflow--hidden');
    }
  }
  activateBarring(setting) {
    this.toggleBarring.emit(setting);
  }
  save() {
    if (this.globalBarringEnabled !== this.originalValueOfGeneralBarring) {
      this.showWarningScreen = true;
    } else {
      const analyticsEvent = {
        eventName: 'barring settings changed',
        eventType: 'change-mobile-service-settings',
        attributeName: this.groupCode
      };
      this.addAnalyticsEvent.emit(analyticsEvent);
      this.saveBarrings.emit();
      this.slideMenu(false);
    }
  }
  cancelWarning(event) {
    event.stopPropagation();
    this.showWarningScreen = false;
  }
  saveWarning(event) {
    event.stopPropagation();
    this.showWarningScreen = false;
    this.saveBarrings.emit();
    this.slideMenu(false);
  }
  cancelAction() {
    if (!this.showWarningScreen) {
      this.slideMenu(false);
      this.cancel.emit();
    }
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵBarringSelectorComponent_BaseFactory;
    return function BarringSelectorComponent_Factory(t) {
      return (ɵBarringSelectorComponent_BaseFactory || (ɵBarringSelectorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BarringSelectorComponent)))(t || BarringSelectorComponent);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BarringSelectorComponent,
    selectors: [["tg-barring-selector"]],
    inputs: {
      barringSettings: "barringSettings",
      isReadOnly: "isReadOnly",
      globalBarringEnabled: "globalBarringEnabled",
      suspendedNumber: "suspendedNumber",
      originalValueOfGeneralBarring: "originalValueOfGeneralBarring",
      bannerLinkIsClicked: "bannerLinkIsClicked"
    },
    outputs: {
      saveBarrings: "saveBarrings",
      toggleBarring: "toggleBarring",
      cancel: "cancel",
      addAnalyticsEvent: "addAnalyticsEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 33,
    consts: [[1, "barring-selector"], ["class", "button button--secondary button--alternate"], [3, "showMenu", "isStickyFooter", "title", "closeMenu"], [1, "display--flex", "flex-direction--column", "mt--m", "px--m"], [1, "barrings"], [1, "footer"], [1, "divider", "divider--s__very-light-grey"], [1, "footer-slide", "display--flex", "pt--l"], [1, "button-override", "button", "button--secondary", "button--alternate", "button--fullwidth", "mr--m", 3, "click"], [1, "button-override", "button", "button--primary", "button--alternate", "button--fullwidth", 3, "click"], [3, "hideCloseButton", "cancelClickOutside", "showMenu", "title"], [1, "display--flex", "flex-direction--column", "px--m"], [1, "button", "button--secondary", "button--alternate", 3, "click"], [1, "mb--l"], [1, "color-black", "form__checkbox-v2--switch", "display--flex-inline", "position--relative", "flex-wrap--nowrap", "width--full", 3, "ngClass", "for"], [1, "display--flex", "justify-content--between"], [1, "text-flow", "text-flow--h6", 3, "ngClass"], ["type", "checkbox", "name", "checkbox-switch", 1, "form__checkbox-v2--switch__input", "position--absolute", "opacity--full-transparency", "height--full", 3, "checked", "disabled", "id", "change"], [1, "form__checkbox-v2--switch__toggle", "border-radius--all--l", "display--inline-flex", "align-items--center", "justify-content--around", "position--relative", "box-sizing--content-box"], ["class", "barring-settings-subtitle font--body-small color-shade_72 mt--xxs pb--xs"], ["class", "mt--m divider divider--s__very-light-grey"], [1, "barring-settings-subtitle", "font--body-small", "color-shade_72", "mt--xxs", "pb--xs"], [1, "mt--m", "divider", "divider--s__very-light-grey"], ["class", "mb--l"]],
    template: function BarringSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BarringSelectorComponent_Conditional_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-slide-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function BarringSelectorComponent_Template_tg_slide_menu_closeMenu_2_listener() {
          return ctx.cancelAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](6, BarringSelectorComponent_For_7_Template, 12, 17, "div", 23, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer")(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarringSelectorComponent_Template_button_click_12_listener() {
          return ctx.cancelAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarringSelectorComponent_Template_button_click_15_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tg-slide-menu", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer")(26, "div", 5)(27, "div", 7)(28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarringSelectorComponent_Template_button_click_28_listener($event) {
          return ctx.cancelWarning($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarringSelectorComponent_Template_button_click_31_listener($event) {
          return ctx.saveWarning($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.isReadOnly && !ctx.disabledByFraud && (ctx.groupCode === ctx.ALL_INCOMING_AND_OUTGOING_GROUP || !ctx.globalBarringEnabled) && !ctx.suspendedNumber ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showMenu)("isStickyFooter", true)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "ng.mobile-barrings.group.title." + ctx.groupCode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.barSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-barring-selector-cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, "ng.mobile-barrings.selector.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-barring-selector-save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 21, "ng.mobile-barrings.selector.save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideCloseButton", true)("cancelClickOutside", true)("showMenu", ctx.showWarningScreen)("title", ctx.globalBarringEnabled ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 23, "ng.mobile-barrings.add-warning") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 25, "ng.mobile-barrings.remove-warning"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.globalBarringEnabled ? "ng.mobile-barrings.add-warning-description" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 27, "ng.mobile-barrings.remove-warning-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-barring-selector-cancel-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 29, "ng.mobile-barrings.selector.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-barring-selector-save-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.globalBarringEnabled ? "ng.mobile-barrings.add-warning-save" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 31, "ng.mobile-barrings.remove-warning-save"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_2__.SlideMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".barring-selector[_ngcontent-%COMP%] {\n  min-height: 5.4rem;\n}\n\n.button.button-override[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex: 1;\n  width: auto;\n  min-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9iYXJyaW5ncy9tb2JpbGUtYmFycmluZ3MvdWkvc3JjL2xpYi9iYXJyaW5nLXNlbGVjdG9yL2JhcnJpbmctc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcnJpbmctc2VsZWN0b3Ige1xuICBtaW4taGVpZ2h0OiA1LjRyZW07XG59XG5cbi5idXR0b24uYnV0dG9uLW92ZXJyaWRlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_barrings_mobile-barrings_ui_src_index_ts-_9ed61.js.map