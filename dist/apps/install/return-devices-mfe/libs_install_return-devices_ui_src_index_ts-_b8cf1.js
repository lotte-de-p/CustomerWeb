(self["webpackChunkreturn_devices_mfe"] = self["webpackChunkreturn_devices_mfe"] || []).push([["libs_install_return-devices_ui_src_index_ts-_b8cf1"],{

/***/ 89085:
/*!*****************************************************!*\
  !*** ./libs/install/return-devices/ui/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintReturnLabelDialogComponent: () => (/* reexport safe */ _lib_print_return_label_dialog_print_return_label_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PrintReturnLabelDialogComponent),
/* harmony export */   ReturnDevicesAddressSelectorComponent: () => (/* reexport safe */ _lib_return_devices_address_selector_return_devices_address_selector_component__WEBPACK_IMPORTED_MODULE_5__.ReturnDevicesAddressSelectorComponent),
/* harmony export */   ReturnDevicesDetailComponent: () => (/* reexport safe */ _lib_return_devices_detail_return_devices_detail_component__WEBPACK_IMPORTED_MODULE_0__.ReturnDevicesDetailComponent),
/* harmony export */   ReturnDevicesFooterComponent: () => (/* reexport safe */ _lib_return_devices_footer_return_devices_footer_component__WEBPACK_IMPORTED_MODULE_1__.ReturnDevicesFooterComponent),
/* harmony export */   ReturnDevicesHeaderComponent: () => (/* reexport safe */ _lib_return_devices_header_return_devices_header_component__WEBPACK_IMPORTED_MODULE_2__.ReturnDevicesHeaderComponent),
/* harmony export */   ReturnDevicesSkeletonComponent: () => (/* reexport safe */ _lib_return_devices_skeleton_return_devices_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.ReturnDevicesSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _lib_return_devices_detail_return_devices_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/return-devices-detail/return-devices-detail.component */ 50234);
/* harmony import */ var _lib_return_devices_footer_return_devices_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/return-devices-footer/return-devices-footer.component */ 61841);
/* harmony import */ var _lib_return_devices_header_return_devices_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/return-devices-header/return-devices-header.component */ 3948);
/* harmony import */ var _lib_return_devices_skeleton_return_devices_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/return-devices-skeleton/return-devices-skeleton.component */ 9271);
/* harmony import */ var _lib_print_return_label_dialog_print_return_label_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/print-return-label-dialog/print-return-label-dialog.component */ 9826);
/* harmony import */ var _lib_return_devices_address_selector_return_devices_address_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/return-devices-address-selector/return-devices-address-selector.component */ 32615);







/***/ }),

/***/ 9826:
/*!*****************************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/print-return-label-dialog/print-return-label-dialog.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintReturnLabelDialogComponent: () => (/* binding */ PrintReturnLabelDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





class PrintReturnLabelDialogComponent {
  constructor() {
    this.printClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.downloadClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  print() {
    this.printClick.emit();
  }
  download() {
    this.downloadClick.emit();
  }
  close() {
    this.closeClick.emit();
  }
  static #_ = this.ɵfac = function PrintReturnLabelDialogComponent_Factory(t) {
    return new (t || PrintReturnLabelDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PrintReturnLabelDialogComponent,
    selectors: [["tg-return-devices-print-return-label-dialog"]],
    outputs: {
      printClick: "printClick",
      downloadClick: "downloadClick",
      closeClick: "closeClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 12,
    consts: [["data-cy", "print-return-label-overlay", 1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "animation--slide-down-to-screen", "py--m", "py--n--md"], [1, "display--flex", "justify-content--between", "flex-direction--column", "px--m", "px--n--md"], [1, "text-align--right"], ["data-cy", "print-return-label-overlay-close-button", 1, "icon", "icon-cross", 3, "click"], ["data-cy", "print-return-label-overlay-title", 1, "mt--n", "text-flow", "text-flow--h5", "overlay__section__content__title", "text-align--center"], [1, "overlay__section__content__description", "text-align--center", "px--m", "px--n--md"], ["data-cy", "print-return-label-overlay-description", 1, "my--l"], [1, "overlay__section__content__action"], ["data-cy", "print-return-label-overlay-download-button", 1, "button", "button--secondary", 3, "click"], [1, "icon", "icon-download", "pr--m"], ["data-cy", "print-return-label-overlay-print-button", 1, "button", "button--primary", 3, "click"], [1, "icon", "icon-printer", "pr--m"]],
    template: function PrintReturnLabelDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintReturnLabelDialogComponent_Template_div_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintReturnLabelDialogComponent_Template_button_click_15_listener() {
          return ctx.download();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintReturnLabelDialogComponent_Template_button_click_20_listener() {
          return ctx.print();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "ng.return-devices.print-return-label-dialog.lbl.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "ng.return-devices.print-return-label-dialog.text.description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, "ng.return-devices.print-return-label-dialog.btn.download"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 10, "ng.return-devices.print-return-label-dialog.btn.print"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 32615:
/*!*****************************************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/return-devices-address-selector/return-devices-address-selector.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesAddressSelectorComponent: () => (/* binding */ ReturnDevicesAddressSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slide-menu/slide-menu.component */ 59728);







function ReturnDevicesAddressSelectorComponent_ng_template_3_li_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = a0 => ({
  "border-style--b--solid": a0
});
function ReturnDevicesAddressSelectorComponent_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnDevicesAddressSelectorComponent_ng_template_3_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const address_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.selectAddressLine(address_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10)(6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReturnDevicesAddressSelectorComponent_ng_template_3_li_1_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const address_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const last_r7 = ctx.last;
    const selectedAddress_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedAddress;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "address-selector-option-" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !last_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", address_r5 == null ? null : address_r5.street, " ", address_r5 == null ? null : address_r5.houseNumber, ", ", address_r5 == null ? null : address_r5.postalCode, " ", address_r5 == null ? null : address_r5.municipality, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (address_r5 == null ? null : address_r5.id) === (selectedAddress_r3 == null ? null : selectedAddress_r3.id));
  }
}
function ReturnDevicesAddressSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReturnDevicesAddressSelectorComponent_ng_template_3_li_1_Template, 9, 9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addresses_r2 = ctx.addresses;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", addresses_r2);
  }
}
const _c1 = (a0, a1) => ({
  addresses: a0,
  selectedAddress: a1
});
class ReturnDevicesAddressSelectorComponent {
  constructor() {
    this.showMenu = false;
    this.addressLineSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectAddressLine(addressLine) {
    this.selectedAddressLine = addressLine;
    this.addressLineSelected.emit(addressLine);
    this.close();
  }
  close() {
    this.showMenu = false;
    this.closeMenu.emit();
  }
  static #_ = this.ɵfac = function ReturnDevicesAddressSelectorComponent_Factory(t) {
    return new (t || ReturnDevicesAddressSelectorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReturnDevicesAddressSelectorComponent,
    selectors: [["tg-return-devices-address-selector"]],
    inputs: {
      returnDevicesAddressLines: "returnDevicesAddressLines",
      selectedAddressLine: "selectedAddressLine",
      isBaseCustomer: "isBaseCustomer",
      showMenu: "showMenu"
    },
    outputs: {
      addressLineSelected: "addressLineSelected",
      closeMenu: "closeMenu"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 9,
    consts: [[3, "showMenu", "title", "closeMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["addressList", ""], ["data-cy", "address-selector-list"], ["class", "px--xs", 3, "click", 4, "ngFor", "ngForOf"], [1, "px--xs", 3, "click"], ["tabindex", "0", 1, "border-width--b--r", "border--b--r", "border-color--all--light-grey", "cursor--pointer", "display--flex", "justify-content--between", "mx--xs", "align-items--center", 3, "ngClass"], [1, "py--l", "align-items--center", "display--flex", "overflow--hidden", "position--relative"], [1, "mr--xs"], [1, "icon-house", "icon", "icon-md"], [1, "overflow--hidden"], [1, "font--body-regular-bold", "break-word"], ["class", "px--xs", 4, "ngIf"], [1, "px--xs"], [1, "ml--xs", "color-text-t-black-b-white", "background-brand-primary", "color-te", "icon", "icon-sm", "icon-tick", "return-address-selected", "text-weight--xxs", "color-mid-grey"]],
    template: function ReturnDevicesAddressSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-return-devices-slide-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function ReturnDevicesAddressSelectorComponent_Template_tg_return_devices_slide_menu_closeMenu_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReturnDevicesAddressSelectorComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ng.return-devices.select-address.lbl.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.returnDevicesAddressLines, ctx.selectedAddressLine));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_3__.SlideMenuComponent],
    styles: [".return-address-selected[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.appointment-list[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n}\n.appointment-list[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.appointment-list[_ngcontent-%COMP%]:active {\n  background-color: #ececec;\n}\n.appointment-list[_ngcontent-%COMP%]:focus {\n  outline-offset: 0.1rem;\n  outline: 0.2rem solid #2373e6;\n  border-radius: 0.1rem;\n}\n\n.break-word[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.line-selector--title[_ngcontent-%COMP%] {\n  color: white;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--title[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n.line-selector--header[_ngcontent-%COMP%] {\n  position: relative;\n  top: -55px;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--header[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\n.line-selector--open[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid white;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--open[_ngcontent-%COMP%] {\n    color: #00807b;\n    border-bottom: 2px solid #00807b;\n    font-size: 18px;\n  }\n}\n\n.line-selector-telenet--title[_ngcontent-%COMP%] {\n  color: initial;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.line-selector-telenet--open[_ngcontent-%COMP%] {\n  color: initial;\n  border-bottom: 2px solid black;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvaW5zdGFsbC9yZXR1cm4tZGV2aWNlcy91aS9zcmMvbGliL3JldHVybi1kZXZpY2VzLWFkZHJlc3Mtc2VsZWN0b3IvcmV0dXJuLWRldmljZXMtYWRkcmVzcy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBTEY7SUFNSSxjQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFHSTtFQUhGO0lBSUksaUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQVJGO0lBU0ksY0FBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtFQUFKO0FBQ0Y7O0FBS0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXR1cm4tYWRkcmVzcy1zZWxlY3RlZCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHBvaW50bWVudC1saXN0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwNCUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lLW9mZnNldDogMC4xcmVtO1xuICAgIG91dGxpbmU6IDAuMnJlbSBzb2xpZCAjMjM3M2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcbiAgfVxufVxuXG4uYnJlYWstd29yZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGluZS1zZWxlY3RvciB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuXG4gICYtLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTU1cHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuICB9XG5cbiAgJi0tb3BlbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgY29sb3I6ICMwMDgwN2I7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODA3YjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmUtc2VsZWN0b3ItdGVsZW5ldCB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogaW5pdGlhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAmLS1vcGVuIHtcbiAgICBjb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50234:
/*!*********************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/return-devices-detail/return-devices-detail.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesDetailComponent: () => (/* binding */ ReturnDevicesDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _return_devices_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @return-devices/data-access */ 5109);
/* harmony import */ var _return_devices_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_return_devices_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _return_devices_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @return-devices/util */ 23302);
/* harmony import */ var _return_devices_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_return_devices_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__);










function ReturnDevicesDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "ng.return-devices.lbl.return-before"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 4, ctx_r0.device.returnDueDate, "dd/MM/yyyy"), " ");
  }
}
function ReturnDevicesDetailComponent_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ng.return-devices.fee-warning-title"), " ");
  }
}
function ReturnDevicesDetailComponent_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ng.return-devices.fee-error-title"), " ");
  }
}
const _c0 = (a0, a3, a4) => [a0, "EUR", "symbol", a3, a4];
const _c1 = a0 => ({
  dueDateFee: a0
});
function ReturnDevicesDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReturnDevicesDetailComponent_Conditional_19_Conditional_5_Template, 2, 3)(6, ReturnDevicesDetailComponent_Conditional_19_Conditional_6_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("color-notification--error--light", ctx_r1.device.returnStatus === ctx_r1.ReturnStatusEnum.EXPIRED)("color-notification--warning--light", ctx_r1.device.returnStatus === ctx_r1.ReturnStatusEnum.URGENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, ctx_r1.device.returnStatus === ctx_r1.ReturnStatusEnum.URGENT ? 5 : ctx_r1.device.returnStatus === ctx_r1.ReturnStatusEnum.EXPIRED ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 6, ctx_r1.device.returnStatus === ctx_r1.ReturnStatusEnum.EXPIRED ? "ng.return-devices.fee-error-content" : "ng.return-devices.fee-warning-content", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](15, _c0, ctx_r1.device.lateFee, ctx_r1.device.lateFee % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r1.locale)))), " ");
  }
}
function ReturnDevicesDetailComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("notification--errorfield", ctx_r5.device.returnStatus === ctx_r5.ReturnStatusEnum.EXPIRED)("notification--warning", ctx_r5.device.returnStatus === ctx_r5.ReturnStatusEnum.URGENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r5.device.returnStatus === ctx_r5.ReturnStatusEnum.EXPIRED ? "icon-error-shape errorfield" : "icon-alert-shape warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "ng.return-devices.fee-warning-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, "ng.return-devices.fee-warning-content", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](18, _c0, ctx_r5.device.lateFee, ctx_r5.device.lateFee % 1 === 0 ? "1.0-0" : "1.2-2", ctx_r5.locale)))), " ");
  }
}
const _c2 = (a1, a2) => ({
  attributeName: "return point button",
  eventName: a1,
  messageGroupName: a2
});
function ReturnDevicesDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReturnDevicesDetailComponent_Conditional_20_Conditional_0_Template, 12, 24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 25)(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReturnDevicesDetailComponent_Conditional_20_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onGenerateReturnLabelClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx_r2.device.lateFee > 0 && ctx_r2.device.returnStatus !== ctx_r2.ReturnStatusEnum.TO_BE_EXPECTED ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "ng.return-devices.prepare-package-title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "ng.return-devices.prepare-package-content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "ng.return-devices.prepare-package-mobile-coverage-extender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "ng.return-devices.prepare-package-old-decoder"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 16, "ng.return-devices.prepare-package-return-everything"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c2, ctx_r2.DatalayerEventNames.BUTTON_CLICKED, ctx_r2.messageGroupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 18, "ng.return-devices.lbl.generate-return-label"));
  }
}
class ReturnDevicesDetailComponent {
  constructor() {
    this.toggleDeviceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.printReturnLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.ReturnStatusEnum = _return_devices_data_access__WEBPACK_IMPORTED_MODULE_3__.ReturnStatusEnum;
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.LanguageService);
    this.DatalayerEventNames = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.DatalayerEventNames;
  }
  get locale() {
    return this.languageService.getLocaleString();
  }
  onToggleClick() {
    this.toggleDeviceClick.emit(this.device);
  }
  onGenerateReturnLabelClick() {
    this.printReturnLabelClick.emit();
  }
  static #_ = this.ɵfac = function ReturnDevicesDetailComponent_Factory(t) {
    return new (t || ReturnDevicesDetailComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ReturnDevicesDetailComponent,
    selectors: [["tg-return-devices-detail"]],
    inputs: {
      device: "device",
      imagePath: "imagePath",
      messageGroupName: "messageGroupName"
    },
    outputs: {
      toggleDeviceClick: "toggleDeviceClick",
      printReturnLabelClick: "printReturnLabelClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 20,
    consts: [[1, "content-section", "background-white", "card-content", "p--l", 2, "margin-left", "0", "margin-right", "0", 3, "click"], ["data-cy", "device-detail-row", 1, "row"], [1, "col-7"], ["data-cy", "device-detail-name", 1, "text-flow", "text-flow--h4"], [1, "status-indicator", "display--inline-block", "vertical-align--middle", "status-indicator", "ml--m--md", "ml--n"], ["data-cy", "device-detail-status"], [1, "font--body-regular-bold", "pt--xs"], ["data-cy", "device-serialnumber", 1, "color-shade_48", "font--body-small"], [1, "text-align--center", "col-4", "pt--l"], ["data-cy", "device-detail-type-image", 1, "image-section", "return-devices-list__image-section", 3, "tgReturnDevicesImageSrcInterceptor", "src"], [1, "col-1", "p--n", "display--flex", "justify-content--end"], ["data-cy", "device-detail-chevron", 3, "ngClass"], ["class", "row mt--m"], ["data-cy", "device-detail-return-due-date", 1, "color-shade_48", "font--body-small"], [1, "row", "mt--m"], [1, "col"], [1, "icon", "icon-md", "icon-error-shape-filled"], [1, "font--body-regular-bold"], [1, "font--body-small"], ["class", "row my--l", "data-cy", "device-detail-more-details-row"], ["data-cy", "device-detail-prepare-package-details", 1, "m--n", "display--flex"], [1, "px--m"], [1, "icon", "icon-printer"], [1, "text-flow--h6", "text-weight--xl", "pb--m"], [1, "text-weight--l"], [1, "list-style--bullit", "pt--m"], [1, "divider", "divider--s__very-light-grey", "my--xs"], ["data-cy", "device-detail-print-button", 1, "button", "button--secondary", "button--small", "button__icon--position-left", 3, "clickPushToAnalytics", "click"], ["data-cy", "device-detail-more-details-row", 1, "row", "my--l"], [1, "col-12"], ["data-cy", "device-detail-late-fee-box", 1, "notification"], [1, "icon", 3, "ngClass"], [1, "text-flow--h6", "text-weight--xl", "mb--m"], ["data-cy", "device-detail-late-fee-description"]],
    template: function ReturnDevicesDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReturnDevicesDetailComponent_Template_div_click_0_listener() {
          return ctx.onToggleClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ReturnDevicesDetailComponent_Conditional_14_Template, 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ReturnDevicesDetailComponent_Conditional_19_Template, 11, 21, "div", 12)(20, ReturnDevicesDetailComponent_Conditional_20_Template, 30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.device.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-indicator--negative", ctx.device.returnStatus === ctx.ReturnStatusEnum.EXPIRED)("status-indicator--positive", ctx.device.returnStatus === ctx.ReturnStatusEnum.TO_BE_EXPECTED)("status-indicator--warning", ctx.device.returnStatus === ctx.ReturnStatusEnum.URGENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 16, "ng.return-devices.status-" + ctx.device.returnStatus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 18, "ng.return-devices.lbl.serial-number"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.device.serialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](14, ctx.device.returnDueDate ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/", ctx.device.typeImageName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tgReturnDevicesImageSrcInterceptor", ctx.imagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.device.isToggled ? "icon-chevron-up" : "icon-chevron-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](19, ctx.device.returnStatus !== ctx.ReturnStatusEnum.TO_BE_EXPECTED && !ctx.device.isToggled ? 19 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](20, ctx.device.isToggled ? 20 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _return_devices_util__WEBPACK_IMPORTED_MODULE_4__.ImageSrcInterceptorDirective, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_6__.AdobeAnalyticsDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 61841:
/*!*********************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/return-devices-footer/return-devices-footer.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesFooterComponent: () => (/* binding */ ReturnDevicesFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _return_devices_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @return-devices/util */ 23302);
/* harmony import */ var _return_devices_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_return_devices_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = (a1, a2) => ({
  attributeName: "telenet store link",
  eventName: a1,
  messageGroupName: a2
});
function ReturnDevicesFooterComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17)(9, "div", 2)(10, "div")(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 19)(15, "li")(16, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "ng.return-devices.lbl.or"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "ng.return-devices.lbl.bring-to-store"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.telenetStoreUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx_r0.DatalayerEventNames.LINK_CLICKED, ctx_r0.messageGroupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "ng.return-devices.lbl.telenet-store"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, "ng.return-devices.lbl.bring-devices"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgReturnDevicesImageSrcInterceptor", ctx_r0.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.telenetStoreUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx_r0.DatalayerEventNames.LINK_CLICKED, ctx_r0.messageGroupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 18, "ng.return-devices.lbl.telenet-store"));
  }
}
const _c1 = (a1, a2) => ({
  attributeName: "return point link",
  eventName: a1,
  messageGroupName: a2
});
class ReturnDevicesFooterComponent {
  constructor() {
    this.printReturnLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.DatalayerEventNames = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.DatalayerEventNames;
  }
  onGenerateReturnLabelClick() {
    this.printReturnLabelClick.emit();
  }
  static #_ = this.ɵfac = function ReturnDevicesFooterComponent_Factory(t) {
    return new (t || ReturnDevicesFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReturnDevicesFooterComponent,
    selectors: [["tg-return-devices-footer"]],
    inputs: {
      returnPointUrl: "returnPointUrl",
      telenetStoreUrl: "telenetStoreUrl",
      imagePath: "imagePath",
      isBaseCustomer: "isBaseCustomer",
      messageGroupName: "messageGroupName"
    },
    outputs: {
      printReturnLabelClick: "printReturnLabelClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 37,
    consts: [["data-cy", "how-to-return-devices-title"], ["data-cy", "footer-send-box", 1, "p--l--md", "p--m", "background-white", "mx--n"], [1, "display--flex", "flex-direction--row", "align-items--center", "justify-content--between"], [1, "text-font-family--t4", "text-weight--xl", "mb--s"], [1, "pl--n", "list-style--ordered-highlight"], ["href", "#", "data-cy", "footer-generate-return-label-link", 1, "link", "text-weight--l", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "text-weight--l", "display--inline-block", 3, "href", "clickPushToAnalytics"], [1, "px--xl"], ["src", "/assets/box.svg", "alt", "", 3, "tgReturnDevicesImageSrcInterceptor"], [1, "divider", "divider--s__very-light-grey", "my--n"], [1, "mt--l"], ["src", "/assets/postnl.svg", "alt", "Post NL", 1, "return-devices__footer-image", "mr--xs", 3, "tgReturnDevicesImageSrcInterceptor"], ["data-cy", "return-point--link", 1, "link", "text-weight--l", 3, "href", "clickPushToAnalytics"], ["data-cy", "footer-divider", 1, "row", "my--l", "pl--xl", "pl--n--md", "my--l"], [1, "col-5"], [1, "divider", "divider--s__light-grey", "my--xs"], [1, "col-2", "return-devices__seperator", "text-font-family--t7", "text--xxm", "text-align--center"], ["data-cy", "footer-bring-to-store", 1, "p--l--md", "p--m", "background-white", "mx--n", "mb--l"], [1, "text-font-family--t4", "text-weight--xl", "mb--m"], [1, "pl--n", "text--m", "list-style--ordered-highlight"], ["data-cy", "telenet-store-link", 1, "link", "text-weight--l", 3, "href", "clickPushToAnalytics"], ["src", "/assets/telenet-shop.svg", "alt", "", 3, "tgReturnDevicesImageSrcInterceptor"], [1, "icon", "icon-md", "icon-logo-telenet", "mr--xs"], [1, "link", "text-weight--l", 3, "href", "clickPushToAnalytics"]],
    template: function ReturnDevicesFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div")(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4)(10, "li")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnDevicesFooterComponent_Template_a_click_11_listener() {
          return ctx.onGenerateReturnLabelClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span")(31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ReturnDevicesFooterComponent_Conditional_34_Template, 30, 26);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 15, "ng.return-devices.title.return-devices"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, "ng.return-devices.lbl.send-in-mail"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 19, "ng.return-devices.lbl.generate-return-label"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, "ng.return-devices.lbl.place-devices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 23, "ng.return-devices.lbl.bring-a-box"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.returnPointUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c1, ctx.DatalayerEventNames.LINK_CLICKED, ctx.messageGroupName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 25, "ng.return-devices.lbl.return-point"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 27, "ng.return-devices.lbl.in-your-area"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgReturnDevicesImageSrcInterceptor", ctx.imagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tgReturnDevicesImageSrcInterceptor", ctx.imagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.returnPointUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c1, ctx.DatalayerEventNames.LINK_CLICKED, ctx.messageGroupName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 29, "ng.return-devices.post-nl-locator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](34, !ctx.isBaseCustomer ? 34 : -1);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _return_devices_util__WEBPACK_IMPORTED_MODULE_2__.ImageSrcInterceptorDirective, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.AdobeAnalyticsDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 3948:
/*!*********************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/return-devices-header/return-devices-header.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesHeaderComponent: () => (/* binding */ ReturnDevicesHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);




function ReturnDevicesHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.return-devices.info.about-returned-devices"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ReturnDevicesHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "ng.return-devices.lbl.no-devices-to-return"), " ");
  }
}
function ReturnDevicesHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnDevicesHeaderComponent_Conditional_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onGenerateReturnLabelClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ng.return-devices.lbl.ready-to-return-device"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "ng.return-devices.lbl.generate-return-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "ng.return-devices.heading-description"), " ");
  }
}
class ReturnDevicesHeaderComponent {
  constructor() {
    this.printReturnLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onGenerateReturnLabelClick() {
    this.printReturnLabelClick.emit();
  }
  static #_ = this.ɵfac = function ReturnDevicesHeaderComponent_Factory(t) {
    return new (t || ReturnDevicesHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReturnDevicesHeaderComponent,
    selectors: [["tg-return-devices-header"]],
    inputs: {
      returnDevices: "returnDevices"
    },
    outputs: {
      printReturnLabelClick: "printReturnLabelClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [["data-cy", "notification-info-box", 1, "notification", "notification--info"], ["data-cy", "notification-info-box-icon", 1, "icon", "icon-information-shape", "info"], ["data-cy", "header-info-box-text"], [3, "innerHTML"], ["class", "pt--s"], [1, "pt--s"], [1, "display--flex", "justify-content--between", "mb--m", "mt--l", "flex-direction--column", "flex-direction--row--md", 2, "align-items", "center"], ["data-cy", "header-ready-to-return-title", 1, "text-flow", "text-flow--h4"], ["data-cy", "header-print-button", 1, "button", "button__icon--position-left", 3, "click"], [1, "icon", "icon-printer"], ["data-cy", "header-ready-to-return-description", 1, "font--body-regular", "my--m"]],
    template: function ReturnDevicesHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReturnDevicesHeaderComponent_Conditional_5_Template, 2, 3, "div", 3)(6, ReturnDevicesHeaderComponent_Conditional_6_Template, 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReturnDevicesHeaderComponent_Conditional_7_Template, 14, 9, "div", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](5, (ctx.returnDevices == null ? null : ctx.returnDevices.length) ? 5 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, (ctx.returnDevices == null ? null : ctx.returnDevices.length) ? 7 : -1);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 9271:
/*!*************************************************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/return-devices-skeleton/return-devices-skeleton.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesSkeletonComponent: () => (/* binding */ ReturnDevicesSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class ReturnDevicesSkeletonComponent {
  static #_ = this.ɵfac = function ReturnDevicesSkeletonComponent_Factory(t) {
    return new (t || ReturnDevicesSkeletonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReturnDevicesSkeletonComponent,
    selectors: [["tg-return-devices-skeleton"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 1,
    consts: [[1, "col-md-10", "mx--auto", "mt--xg", "flex-grow"], [1, "heading--notopmargin", "mb-0", "skeleton--v2", "skeleton--basic", "skeleton--two-lines"], [1, "align-content--space-between", "mt--xxxl"], [1, "display--flex", "flex-direction--row--md", "flex-direction--column", "mr--m--md", "mr--n"], [1, "col-md-10", "col-12", "p--n", "flex-grow", "mb--n--md", "mb--l", "mr--s--md", "mr--n"], [1, "col-5", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--two-lines"], [1, "col-md-2", "col-12", "p--n", "text-align--right"], [1, "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--two-lines"], [1, "mt--m", "mb--xl"], [1, "heading--notopmargin", "mb-0", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], [1, "content-section", "background-white", "card-content", "p--l", "ml-0", "mr-0"], [1, "display--flex", "flex-direction--row"], [1, "col-md-9", "col-7", "p--n", "flex-grow"], [1, "col-3", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "col-2", "my--s", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "col-4", "mb--s", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "col-2", "skeleton--v2", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "col-md-3", "col-5", "p--n", "center-align", "horizontal-center-align", "p--m--md", "p--xs"], [1, "skeleton--v2", "skeleton--basic", "skeleton--container", 2, "height", "100%", "width", "50%"], [1, "p--xl"], [1, "content-section", "background-white", "card-content", "p--l", "mr-0", "ml-0"]],
    template: function ReturnDevicesSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "p", 13)(15, "div", 14)(16, "p", 15)(17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 20)(22, "div", 11)(23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p", 13)(25, "div", 14)(26, "p", 15)(27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "return-devices-skeleton");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59728:
/*!***********************************************************************************!*\
  !*** ./libs/install/return-devices/ui/src/lib/slide-menu/slide-menu.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideMenuComponent: () => (/* binding */ SlideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




const _c0 = a0 => ({
  slide: a0
});
const _c1 = ["*"];
class SlideMenuComponent {
  constructor() {
    this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  close() {
    if (this.showMenu) {
      this.closeMenu.emit();
    }
  }
  static #_ = this.ɵfac = function SlideMenuComponent_Factory(t) {
    return new (t || SlideMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideMenuComponent,
    selectors: [["tg-return-devices-slide-menu"]],
    inputs: {
      showMenu: "showMenu",
      title: "title"
    },
    outputs: {
      closeMenu: "closeMenu"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 10,
    vars: 7,
    consts: [[1, "sidebar", 3, "ngClass"], [1, "sidebar__menu"], [1, "sidebar__heading", "display--flex", "align-items--center", "px--l", "pt--l", "justify-content--end", "mb--m"], ["for", "menu-control", 1, "sidebar__close", "cursor--pointer", 3, "click"], [1, "icon", "icon-cross"], [1, "heading--5", "mt--n", "mb--l--md", "mb--xs", "px--l"], [1, "sidebar__content", "mb--l"], [1, "slide-menu-overlay", 3, "ngClass", "click"]],
    template: function SlideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Template_div_click_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Template_div_click_9_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showMenu));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  transform: translatey(100%);\n  overflow-y: scroll;\n  width: 100vw;\n  max-height: 70vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n  transition: all 0.4s ease-in-out;\n  background: #fff;\n}\n@media only screen and (min-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    max-height: initial;\n    overflow-y: auto;\n    width: 45vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    transform: translatex(100%);\n  }\n}\n@media only screen and (min-width: 1192px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n\n.slide.sidebar[_ngcontent-%COMP%] {\n  transform: translatey(0);\n}\n@media only screen and (min-width: 768px) {\n  .slide.sidebar[_ngcontent-%COMP%] {\n    transform: translatex(0);\n  }\n}\n.slide[_ngcontent-%COMP%]    ~ .slide-menu-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  transition: background-color 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvaW5zdGFsbC9yZXR1cm4tZGV2aWNlcy91aS9zcmMvbGliL3NsaWRlLW1lbnUvc2xpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFaRjtJQWFJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0VBRUY7QUFDRjtBQUFFO0VBdkJGO0lBd0JJLFdBQUE7RUFHRjtBQUNGOztBQUNFO0VBQ0Usd0JBQUE7QUFFSjtBQUFJO0VBSEY7SUFJSSx3QkFBQTtFQUdKO0FBQ0Y7QUFBRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwMCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogNDV2dztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwJSk7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTJweCkge1xuICAgIHdpZHRoOiAyNXZ3O1xuICB9XG59XG5cbi5zbGlkZSB7XG4gICYuc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgIH1cbiAgfVxuXG4gICYgfiAuc2xpZGUtbWVudS1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_install_return-devices_ui_src_index_ts-_b8cf1.js.map