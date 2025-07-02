(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_manage-authenticators_ui_src_index_ts-_2c661"],{

/***/ 49355:
/*!**********************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/ui/src/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent),
/* harmony export */   ManageAuthenticatorsIconComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ManageAuthenticatorsIconComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 52911);


/***/ }),

/***/ 52911:
/*!**************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/ui/src/lib/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* reexport safe */ _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent),
/* harmony export */   ManageAuthenticatorsIconComponent: () => (/* reexport safe */ _manage_authenticators_icon_manage_authenticators_icon_component__WEBPACK_IMPORTED_MODULE_0__.ManageAuthenticatorsIconComponent)
/* harmony export */ });
/* harmony import */ var _manage_authenticators_icon_manage_authenticators_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-authenticators-icon/manage-authenticators-icon.component */ 14410);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ 26533);



/***/ }),

/***/ 26533:
/*!********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/ui/src/lib/loader/loader.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
  }
}
class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["tg-pm-manage-authenticators-loader"]],
    inputs: {
      loading: "loading"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "loading--circular", "style", "margin: 0 auto", 4, "ngIf"], [1, "loading--circular", 2, "margin", "0 auto"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 14410:
/*!************************************************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/manage-authenticators/ui/src/lib/manage-authenticators-icon/manage-authenticators-icon.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageAuthenticatorsIconComponent: () => (/* binding */ ManageAuthenticatorsIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @profile-management/data-access */ 39220);
/* harmony import */ var _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function ManageAuthenticatorsIconComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", "icon icon-component display--inline-flex aspect-ratio--1-1 width--fit-content backdrop-mask hide--base icon-component--secondary" + " " + ctx_r0.size + " " + ctx_r0.getIcon(ctx_r0.type));
  }
}
class ManageAuthenticatorsIconComponent {
  getIcon(type) {
    switch (type) {
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__.Factors.ITSME:
        return 'itsme';
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__.Factors.PASSKEY:
        return 'icon-user-key';
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__.Factors.AUTHENTICATOR:
        return 'icon-qr-code-scan';
      case _profile_management_data_access__WEBPACK_IMPORTED_MODULE_1__.Factors.SMS:
        return 'icon-message-dots';
      default:
        return 'icon-others';
    }
  }
  static #_ = this.ɵfac = function ManageAuthenticatorsIconComponent_Factory(t) {
    return new (t || ManageAuthenticatorsIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ManageAuthenticatorsIconComponent,
    selectors: [["tg-pm-manage-authenticators-icon"]],
    inputs: {
      type: "type",
      size: "size"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "className", 4, "ngIf"], [3, "className"]],
    template: function ManageAuthenticatorsIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ManageAuthenticatorsIconComponent_i_0_Template, 1, 1, "i", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_manage-authenticators_ui_src_index_ts-_2c661.js.map