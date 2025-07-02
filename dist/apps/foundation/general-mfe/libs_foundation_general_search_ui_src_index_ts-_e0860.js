(self["webpackChunkgeneral_mfe"] = self["webpackChunkgeneral_mfe"] || []).push([["libs_foundation_general_search_ui_src_index_ts-_e0860"],{

/***/ 11044:
/*!********************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySpanComponent: () => (/* reexport safe */ _lib_accessibility_span_accessibility_span_component__WEBPACK_IMPORTED_MODULE_1__.AccessibilitySpanComponent),
/* harmony export */   BadgeComponent: () => (/* reexport safe */ _lib_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__.BadgeComponent),
/* harmony export */   ButtonComponent: () => (/* reexport safe */ _lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent),
/* harmony export */   ColorBulletComponent: () => (/* reexport safe */ _lib_color_bullet_color_bullet_component__WEBPACK_IMPORTED_MODULE_4__.ColorBulletComponent),
/* harmony export */   IconComponent: () => (/* reexport safe */ _lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent)
/* harmony export */ });
/* harmony import */ var _lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/icon/icon.component */ 43898);
/* harmony import */ var _lib_accessibility_span_accessibility_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/accessibility-span/accessibility-span.component */ 22542);
/* harmony import */ var _lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/button/button.component */ 88703);
/* harmony import */ var _lib_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/badge/badge.component */ 9663);
/* harmony import */ var _lib_color_bullet_color_bullet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/color-bullet/color-bullet.component */ 60368);






/***/ }),

/***/ 22542:
/*!******************************************************************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/lib/accessibility-span/accessibility-span.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySpanComponent: () => (/* binding */ AccessibilitySpanComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = a0 => [a0];
const _c1 = ["*"];
class AccessibilitySpanComponent {
  hide;
  static ɵfac = function AccessibilitySpanComponent_Factory(t) {
    return new (t || AccessibilitySpanComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AccessibilitySpanComponent,
    selectors: [["tg-foundation-general-search-accessibility-span"]],
    inputs: {
      hide: "hide"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 3,
    consts: [[1, "visuallyhidden", 3, "ngClass"]],
    template: function AccessibilitySpanComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.hide !== undefined ? "hide-" + ctx.hide : ""));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9663:
/*!****************************************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/lib/badge/badge.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgeComponent: () => (/* binding */ BadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = a0 => [a0];
const _c1 = ["*"];
class BadgeComponent {
  color = 'info';
  static ɵfac = function BadgeComponent_Factory(t) {
    return new (t || BadgeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BadgeComponent,
    selectors: [["tg-foundation-general-search-badge"]],
    inputs: {
      color: "color"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 3,
    consts: [[1, "cmp-badge", "pr--xxs"], [1, "display--inline-flex", 3, "ngClass"], [1, "font--caption-bold", "text-weight--xl"]],
    template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, "search__badge-" + ctx.color));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 88703:
/*!******************************************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/lib/button/button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = (a0, a1) => [a0, a1];
const _c1 = ["*"];
class ButtonComponent {
  customClasses = [''];
  hideMobile = false;
  static ɵfac = function ButtonComponent_Factory(t) {
    return new (t || ButtonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ButtonComponent,
    selectors: [["tg-foundation-general-search-button"]],
    inputs: {
      customClasses: "customClasses",
      hideMobile: "hideMobile"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 4,
    consts: [[1, "border-width--all--n", 3, "ngClass"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, ctx.customClasses.join(""), ctx.hideMobile ? "hide--mobile" : ""));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 60368:
/*!******************************************************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/lib/color-bullet/color-bullet.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorBulletComponent: () => (/* binding */ ColorBulletComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = ["tg-general-search-color-bullets", ""];
function ColorBulletComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background: " + color_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-testid", "color-span");
  }
}
function ColorBulletComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ColorBulletComponent_ng_container_0_span_1_Template, 1, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sortedColors);
  }
}
class ColorBulletComponent {
  colors;
  sortedColors;
  ngOnInit() {
    this.sortedColors = this.colors ? [...this.colors].sort() : [];
  }
  static ɵfac = function ColorBulletComponent_Factory(t) {
    return new (t || ColorBulletComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ColorBulletComponent,
    selectors: [["", "tg-general-search-color-bullets", ""]],
    inputs: {
      colors: "colors"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["class", "search-product__content__configurations-color border-radius--all--l  border-width--all--r border-style--all--solid border-color--all--mid-grey mt--xxs mr--xs", 3, "style", 4, "ngFor", "ngForOf"], [1, "search-product__content__configurations-color", "border-radius--all--l", "border-width--all--r", "border-style--all--solid", "border-color--all--mid-grey", "mt--xxs", "mr--xs"]],
    template: function ColorBulletComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ColorBulletComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colors && ctx.colors.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43898:
/*!**************************************************************************!*\
  !*** ./libs/foundation/general/search/ui/src/lib/icon/icon.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconComponent: () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = (a0, a1) => [a0, a1];
class IconComponent {
  type;
  mobile = false;
  static ɵfac = function IconComponent_Factory(t) {
    return new (t || IconComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IconComponent,
    selectors: [["tg-foundation-general-search-icon"]],
    inputs: {
      type: "type",
      mobile: "mobile"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 4,
    consts: [["aria-hidden", "true", 1, "icon", 3, "ngClass"]],
    template: function IconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, "icon-" + ctx.type, ctx.mobile ? "display--block" : ""));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_foundation_general_search_ui_src_index_ts-_e0860.js.map