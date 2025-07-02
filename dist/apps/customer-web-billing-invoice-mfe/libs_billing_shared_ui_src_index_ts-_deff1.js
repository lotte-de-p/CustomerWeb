(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_billing_shared_ui_src_index_ts-_deff1"],{

/***/ 53315:
/*!*********************************************!*\
  !*** ./libs/billing/shared/ui/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorNotificationComponent: () => (/* reexport safe */ _lib_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_2__.ErrorNotificationComponent),
/* harmony export */   MobileActivationInProgressNotificationComponent: () => (/* reexport safe */ _lib_mobile_activation_in_progress_notification_mobile_activation_in_progress_notification_component__WEBPACK_IMPORTED_MODULE_1__.MobileActivationInProgressNotificationComponent),
/* harmony export */   SlideMenuComponent: () => (/* reexport safe */ _lib_slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_0__.SlideMenuComponent)
/* harmony export */ });
/* harmony import */ var _lib_slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/slide-menu/slide-menu.component */ 36133);
/* harmony import */ var _lib_mobile_activation_in_progress_notification_mobile_activation_in_progress_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mobile-activation-in-progress-notification/mobile-activation-in-progress-notification.component */ 42305);
/* harmony import */ var _lib_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/error-notification/error-notification.component */ 65578);




/***/ }),

/***/ 65578:
/*!*******************************************************************************************!*\
  !*** ./libs/billing/shared/ui/src/lib/error-notification/error-notification.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorNotificationComponent: () => (/* binding */ ErrorNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class ErrorNotificationComponent {
  static #_ = this.ɵfac = function ErrorNotificationComponent_Factory(t) {
    return new (t || ErrorNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ErrorNotificationComponent,
    selectors: [["tg-error-notification"]],
    inputs: {
      label: "label",
      description: "description"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 3,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], [1, "cmp-image"], ["alt", "error", 1, "cmp-image__image", "cmp-image__image--original-size", 3, "src"], [1, "text-align--center"], [1, "cmp", "cmp-title"], [1, ""], [1, "mt--m"], [1, "whitespace", "whitespace--medium"]],
    template: function ErrorNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "/content/dam/www-telenet-touch/nl/dfd/desktop-error.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.description);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42305:
/*!*******************************************************************************************************************************************!*\
  !*** ./libs/billing/shared/ui/src/lib/mobile-activation-in-progress-notification/mobile-activation-in-progress-notification.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileActivationInProgressNotificationComponent: () => (/* binding */ MobileActivationInProgressNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MobileActivationInProgressNotificationComponent {
  static #_ = this.ɵfac = function MobileActivationInProgressNotificationComponent_Factory(t) {
    return new (t || MobileActivationInProgressNotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MobileActivationInProgressNotificationComponent,
    selectors: [["tg-mobile-activation-in-progress-notification"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 7,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], [1, "cmp-image"], ["alt", "error", 1, "cmp-image__image", "cmp-image__image--original-size", 3, "src"], [1, "text-align--center"], [1, "cmp", "cmp-title"], [1, ""], [1, "mt--m"], [1, "whitespace", "whitespace--medium"]],
    template: function MobileActivationInProgressNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "/content/dam/www-telenet-touch/nl/dfd/mobile-error.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, "ng.mobile-line-selector.activation-in-progress-label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 5, "ng.mobile-line-selector.activation-in-progress-description"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36133:
/*!***************************************************************************!*\
  !*** ./libs/billing/shared/ui/src/lib/slide-menu/slide-menu.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideMenuComponent: () => (/* binding */ SlideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);





function SlideMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Conditional_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = (a0, a1) => ({
  "mt--n": a0,
  "mt--xl": a1
});
function SlideMenuComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, !ctx_r1.hideCloseButton, ctx_r1.hideCloseButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "sheet-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
  }
}
const _c1 = a0 => ({
  slide: a0
});
function SlideMenuComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.showMenu));
  }
}
function SlideMenuComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r3.showMenu));
  }
}
const _c2 = ["*", [["footer"]]];
const _c3 = ["*", "footer"];
class SlideMenuComponent {
  constructor() {
    this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isStickyFooter = false;
    this.hideCloseButton = false;
    this.hideTitle = false;
    this.padding = 'px--l';
    this.cancelClickOutside = false;
  }
  close() {
    if (this.showMenu && !this.cancelClickOutside) {
      this.closeMenu.emit();
    }
  }
  static #_ = this.ɵfac = function SlideMenuComponent_Factory(t) {
    return new (t || SlideMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideMenuComponent,
    selectors: [["tg-slide-menu"]],
    contentQueries: function SlideMenuComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      }
    },
    inputs: {
      showMenu: "showMenu",
      title: "title",
      isStickyFooter: "isStickyFooter",
      hideCloseButton: "hideCloseButton",
      hideTitle: "hideTitle",
      padding: "padding",
      cancelClickOutside: "cancelClickOutside"
    },
    outputs: {
      closeMenu: "closeMenu"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 13,
    vars: 8,
    consts: [[1, "sidebar", 3, "ngClass", "appClickOutside"], [1, "sidebar__menu", "display--flex", "flex-direction--column"], [1, "p--l", "position--top", "position--sticky", "width--full", "background-white", "sidebar__index"], [1, "sidebar__heading", "display--flex", "align-items--center", "justify-content--end"], ["for", "menu-control", "class", "sidebar__close cursor--pointer"], [1, "sidebar__content", "px--xxs", "pb--l"], ["class", "heading--5 mt--n px--m", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "sidebar__footer", "position--sticky", "position--bottom", "px--l", "px--m--n", "mb--l"], ["class", "slide-menu-overlay", 3, "ngClass", "click", 4, "ngIf"], ["class", "slide-menu-overlay", 3, "ngClass", 4, "ngIf"], ["for", "menu-control", 1, "sidebar__close", "cursor--pointer", 3, "click"], [1, "icon", "icon-cross", "icon-md", "icon-no-size-override"], [1, "heading--5", "mt--n", "px--m", 3, "ngClass"], [1, "slide-menu-overlay", 3, "ngClass", "click"], [1, "slide-menu-overlay", 3, "ngClass"]],
    template: function SlideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appClickOutside", function SlideMenuComponent_Template_aside_appClickOutside_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlideMenuComponent_Conditional_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SlideMenuComponent_div_6_Template, 2, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SlideMenuComponent_div_11_Template, 1, 3, "div", 9)(12, SlideMenuComponent_div_12_Template, 1, 3, "div", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, !ctx.hideCloseButton ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.padding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideCloseButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideCloseButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  transform: translatey(100%);\n  overflow-y: scroll;\n  width: 100vw;\n  max-height: 90vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n  transition: all 0.4s ease-in-out;\n  background: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__menu[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__index[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__description[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 100px;\n  background: #fff;\n  z-index: 1000;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar__footer[_ngcontent-%COMP%] {\n  z-index: 1001;\n  background-color: #fff;\n}\n@media only screen and (min-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    max-height: initial;\n    overflow-y: auto;\n    width: 45vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    transform: translatex(100%);\n  }\n}\n@media only screen and (min-width: 1192px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n\n.slide.sidebar[_ngcontent-%COMP%] {\n  transform: translatey(0);\n}\n@media only screen and (min-width: 768px) {\n  .slide.sidebar[_ngcontent-%COMP%] {\n    transform: translatex(0);\n  }\n}\n.slide[_ngcontent-%COMP%]    ~ .slide-menu-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  transition: background-color 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9zaGFyZWQvdWkvc3JjL2xpYi9zbGlkZS1tZW51L3NsaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0U7RUFqQ0Y7SUFrQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7RUFGRjtBQUNGO0FBSUU7RUE1Q0Y7SUE2Q0ksV0FBQTtFQURGO0FBQ0Y7O0FBS0U7RUFDRSx3QkFBQTtBQUZKO0FBSUk7RUFIRjtJQUlJLHdCQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTAwJSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgLnNpZGViYXJfX21lbnUge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLnNpZGViYXJfX2luZGV4IHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgLnNpZGViYXJfX2Rlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gIC5zaWRlYmFyX19mb290ZXIge1xuICAgIHotaW5kZXg6IDEwMDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogNDV2dztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwJSk7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTJweCkge1xuICAgIHdpZHRoOiAyNXZ3O1xuICB9XG59XG5cbi5zbGlkZSB7XG4gICYuc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xuICAgIH1cbiAgfVxuXG4gICYgfiAuc2xpZGUtbWVudS1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_shared_ui_src_index_ts-_deff1.js.map